// Self-contained MV3 worker. Keeping this worker dependency-free guarantees
// that the localhost AI bridge is registered before any other extension code.
const AI_ACTION = 'fetch_extension_api';
const GATEWAY_TOKEN_ACTION = 'get_faceit_gateway_token';
const TRACK_USAGE_ACTION = 'track_usage_event';
// Anonymous match-room feature-use counts: only these names are ever sent (mirrors src/shared/usageEvents.ts and the API allow-list).
const USAGE_EVENTS = new Set(['matchroom_view', 'matchroom_briefing_opened', 'matchroom_radar_used', 'matchroom_2d_view_clicked', 'matchroom_stats_period_changed']);
const PRESENCE_ACTION = 'presence_ping';

// The demo-download endpoint 403s on session-cookie auth alone; it needs this
// specific cookie's value as the Authorization header. It's httpOnly (by FACEIT's
// own design, via the `__Host-` prefix), so no page or content-script JS can ever
// read it directly - chrome.cookies is a privileged extension API that can, which
// is the whole reason this indirection through the background worker exists.
const GATEWAY_AUTH_COOKIE_NAME = '__Host-FaceitGatewayAuthorization';

// Only these destinations may be reached through the proxy. Everything else is
// rejected so a compromised content-script context cannot use the worker as an
// open SSRF relay into the LAN / cloud metadata / arbitrary hosts.
const ALLOWED_API_HOSTS = new Set(['api.methods.me']);
const ALLOWED_DEV_HOSTS = new Set(['localhost', '127.0.0.1']);
const ALLOWED_METHODS = new Set(['GET', 'POST', 'OPTIONS']);
const ALLOWED_HEADERS = new Set(['content-type', 'authorization', 'accept', 'x-fx-session']);

console.info('[Faceit Extender] AI proxy service worker loaded');

// Older builds saved entire React Query snapshots, including token-bearing
// query keys. The API's own response cache now handles reusable FACEIT data.
chrome.runtime.onInstalled.addListener((details) => {
  void chrome.storage.local.remove('react-query-cache');
  if (details && details.reason === 'update') void markExistingUserOnboarded();
});

// When the extension is removed the browser opens this page, where people can say why.
// It carries only the version and the browser name, nothing that identifies the person.
const UNINSTALL_PAGE = 'https://faceit-extender.com/uninstall';
function registerUninstallPage() {
  try {
    if (typeof chrome.runtime.setUninstallURL !== 'function') return;
    const ua = navigator.userAgent;
    const browserName = ua.includes('Firefox') ? 'firefox' : ua.includes('Edg/') ? 'edge' : 'chrome';
    const query = new URLSearchParams({ v: chrome.runtime.getManifest().version, b: browserName });
    void Promise.resolve(chrome.runtime.setUninstallURL(`${UNINSTALL_PAGE}?${query}`)).catch(() => {});
  } catch { /* never block the worker */ }
}
registerUninstallPage();

// The first-run setup guide is for new installs. Someone who has used the
// extension before an update should never be interrupted by it; they can still
// replay it from the General tab.
const ONBOARDING_COMPLETED_KEY = 'extender.onboarding.completed.v1';
async function markExistingUserOnboarded() {
  try {
    const saved = await chrome.storage.local.get(null);
    if (saved[ONBOARDING_COMPLETED_KEY]) return;
    const hasHistory = Object.keys(saved).some((key) => key !== 'react-query-cache' && !key.startsWith('analytics') && !key.startsWith('extender.onboarding.'));
    if (hasHistory) await chrome.storage.local.set({ [ONBOARDING_COMPLETED_KEY]: true });
  } catch { /* never block the update */ }
}

// Every hook/tab/SPA-remount calls through this one worker with no shared
// state between them, so the same lookup can fire dozens of times a minute
// across open tabs and easily trip the API's per-IP rate limit. Cache GET
// responses for the public, non-personal endpoints here - the one place all
// of those requests actually funnel through. Each of these endpoints already
// sends its own deliberate `Cache-Control: max-age=N` (e.g. supporters=60s,
// ai/allowance=5s so the token counter doesn't look "stuck" after a spend,
// pricing=3600s since it rarely changes) - honor that instead of guessing a
// single TTL, so this cache never holds anything staler than the server
// itself already decided was acceptable.
const CACHEABLE_PATH_PREFIXES = ['/api/supporters/', '/api/ai/allowance/', '/api/support/pricing'];
const DEFAULT_CACHE_TTL_MS = 30_000; // used only if a cacheable response omits Cache-Control
const CACHE_MAX_ENTRIES = 500;
const apiResponseCache = new Map();

function isCacheableRequest(vetted) {
  if (vetted.options.method !== 'GET') return false;
  if (vetted.options.headers.authorization) return false; // never cache anything user/auth-scoped
  const path = new URL(vetted.url).pathname;
  return CACHEABLE_PATH_PREFIXES.some((prefix) => path.startsWith(prefix));
}

// Returns the response's own max-age in ms, or null if it says not to cache.
function cacheTtlMsFrom(response) {
  const header = response.headers.get('cache-control') || '';
  if (/no-store|no-cache|private/i.test(header)) return null;
  const match = header.match(/max-age=(\d+)/i);
  if (!match) return DEFAULT_CACHE_TTL_MS;
  const seconds = Number(match[1]);
  return seconds > 0 ? seconds * 1000 : null;
}

function getCached(url) {
  const hit = apiResponseCache.get(url);
  if (!hit) return undefined;
  if (Date.now() > hit.expires) {
    apiResponseCache.delete(url);
    return undefined;
  }
  return hit.value;
}

function setCached(url, value, ttlMs) {
  if (apiResponseCache.size >= CACHE_MAX_ENTRIES) {
    apiResponseCache.delete(apiResponseCache.keys().next().value);
  }
  apiResponseCache.set(url, { value, expires: Date.now() + ttlMs });
}

function fromThisExtension(sender) {
  return Boolean(sender) && sender.id === chrome.runtime.id;
}

// Returns a sanitized { url, options } for an allowed request, or null.
function vetExtensionApiRequest(message) {
  let parsed;
  try {
    parsed = new URL(message.url);
  } catch {
    return null;
  }
  const host = parsed.hostname.toLowerCase();
  const isDevHost = ALLOWED_DEV_HOSTS.has(host);
  if (isDevHost) {
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
  } else {
    if (parsed.protocol !== 'https:') return null;
    if (!ALLOWED_API_HOSTS.has(host)) return null;
  }

  const src = message.options && typeof message.options === 'object' ? message.options : {};
  const method = String(src.method || 'GET').toUpperCase();
  if (!ALLOWED_METHODS.has(method)) return null;

  const headers = {};
  const rawHeaders = src.headers && typeof src.headers === 'object' ? src.headers : {};
  for (const [name, value] of Object.entries(rawHeaders)) {
    if (ALLOWED_HEADERS.has(String(name).toLowerCase()) && typeof value === 'string') {
      headers[name] = value;
    }
  }
  const options = { method, headers };
  if (typeof src.body === 'string') options.body = src.body;
  return { url: parsed.toString(), options };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || !fromThisExtension(sender)) return false;
  if (message.action === PRESENCE_ACTION) {
    void sendPresencePing();
    return false;
  }
  if (message.action === AI_ACTION) trackFeature('extension_api');
  if (message.action === TRACK_USAGE_ACTION) {
    if (typeof message.event === 'string' && USAGE_EVENTS.has(message.event)) trackFeature(message.event);
    return false;
  }

  if (message.action === AI_ACTION) {
    const vetted = vetExtensionApiRequest(message);
    if (!vetted) {
      sendResponse({ ok: false, status: 0, data: null });
      return true;
    }
    const cacheable = isCacheableRequest(vetted);
    if (cacheable) {
      const cached = getCached(vetted.url);
      if (cached) {
        sendResponse(cached);
        return true;
      }
    }
    const controller = new AbortController();
    const ms = typeof message.timeoutMs === 'number' && message.timeoutMs > 0 && message.timeoutMs <= 120000 ? message.timeoutMs : 20000;
    const timeout = setTimeout(() => controller.abort(), ms);
    fetch(vetted.url, { ...vetted.options, signal: controller.signal, credentials: 'omit', redirect: 'error' })
      .then(async (response) => {
        const data = await response.json().catch(() => null);
        clearTimeout(timeout);
        console.info('[Faceit Extender] AI proxy response', response.status);
        const result = { ok: response.ok, status: response.status, data };
        if (cacheable && response.ok) {
          const ttlMs = cacheTtlMsFrom(response);
          if (ttlMs !== null) setCached(vetted.url, result, ttlMs);
        }
        sendResponse(result);
      })
      .catch((error) => {
        clearTimeout(timeout);
        const detail = error instanceof Error ? `${error.name}: ${error.message}` : String(error);
        console.error('[Faceit Extender] AI proxy request failed', {
          host: new URL(vetted.url).host,
          path: new URL(vetted.url).pathname,
          method: vetted.options.method,
          detail,
        });
        sendResponse({ ok: false, status: 0, data: { error: detail, code: 'proxy_fetch_failed' } });
      });
    return true;
  }

  if (message.action === GATEWAY_TOKEN_ACTION) {
    chrome.cookies.get({ url: 'https://www.faceit.com', name: GATEWAY_AUTH_COOKIE_NAME })
      .then((cookie) => sendResponse({ value: cookie?.value ?? null }))
      .catch(() => sendResponse({ value: null }));
    return true;
  }

  return false;
});

// Anonymous product heartbeat. It contains no FACEIT identity, URLs, match data,
// or page content; the random id only groups heartbeats from one installation.
const HEARTBEAT_API = 'https://api.methods.me/api/analytics/heartbeat';
const EVENT_API = 'https://api.methods.me/api/analytics/event';
const ANALYTICS_THROTTLE_MS = 15 * 60 * 1000;
// MV3 stops this worker after ~30s idle and re-runs this file on the next
// event, so every throttle below reads its timestamps from storage - an
// in-memory timer or map would reset on each wake-up and multiply the events.
const HEARTBEAT_INTERVAL_MS = 6 * 60 * 60 * 1000;
let analyticsInstallId;
let analyticsStateLoaded;
async function loadAnalyticsState() {
  analyticsStateLoaded ??= chrome.storage.local.get(['analyticsInstallId', 'analyticsInstallSent', 'analyticsEventTimes', 'analyticsHeartbeatAt']);
  return analyticsStateLoaded;
}
async function getAnalyticsIdentity() {
  if (analyticsInstallId) return analyticsInstallId;
  const stored = await loadAnalyticsState();
  analyticsInstallId = stored.analyticsInstallId || crypto.randomUUID();
  if (!stored.analyticsInstallId) await chrome.storage.local.set({ analyticsInstallId });
  if (!stored.analyticsInstallSent) {
    const response = await fetch(EVENT_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ installId: analyticsInstallId, eventName: 'install', version: chrome.runtime.getManifest().version }), keepalive: true }).catch(() => null);
    if (response?.ok) await chrome.storage.local.set({ analyticsInstallSent: true });
  }
  return analyticsInstallId;
}
// Firefox's add-on policy requires technical/interaction data to be opt-in: it
// is declared as an optional data_collection category in the manifest, and
// nothing is sent until the user grants it (about:addons > Permissions).
// Chromium has no such consent API; the Privacy Policy discloses the heartbeat.
async function telemetryAllowed() {
  // The setup guide's opt-in. Someone who turned it off sends nothing; an install that never saw
  // the question keeps the behaviour it always had (Chromium: on, Firefox: only with the permission).
  try {
    const { analyticsOptIn } = await chrome.storage.local.get('analyticsOptIn');
    if (analyticsOptIn === false) return false;
  } catch { return false; }
  if (!navigator.userAgent.includes('Firefox')) return true;
  try {
    return await browser.permissions.contains({ data_collection: ['technicalAndInteraction'] });
  } catch {
    return false;
  }
}
async function trackFeature(eventName) {
  if (eventName !== 'extension_api' && !USAGE_EVENTS.has(eventName)) return;
  if (!(await telemetryAllowed())) return;
  const { analyticsEventTimes = {} } = await chrome.storage.local.get('analyticsEventTimes');
  const now = Date.now();
  if (now - (analyticsEventTimes[eventName] || 0) < ANALYTICS_THROTTLE_MS) return;
  await chrome.storage.local.set({ analyticsEventTimes: { ...analyticsEventTimes, [eventName]: now } });
  getAnalyticsIdentity().then((installId) => fetch(EVENT_API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ installId, eventName, version: chrome.runtime.getManifest().version }), keepalive: true })).catch(() => undefined);
}
async function sendExtensionHeartbeat() {
  try {
    if (!(await telemetryAllowed())) return;
    const { analyticsHeartbeatAt = 0 } = await chrome.storage.local.get('analyticsHeartbeatAt');
    if (Date.now() - analyticsHeartbeatAt < HEARTBEAT_INTERVAL_MS) return;
    await chrome.storage.local.set({ analyticsHeartbeatAt: Date.now() });
    const installId = await getAnalyticsIdentity();
    await fetch(HEARTBEAT_API, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ installId, version: chrome.runtime.getManifest().version, browser: navigator.userAgent.includes('Firefox') ? 'firefox' : 'chromium' }),
      keepalive: true,
    });
  } catch { /* telemetry must never affect extension behavior */ }
}
sendExtensionHeartbeat();

// "Online now": FACEIT tabs ask for a ping every couple of minutes while they
// are visible. Same anonymous payload as the heartbeat plus `presence: true`;
// the server only counts it, it never learns who is behind the install id.
// Several tabs ask at once, so the worker keeps the limit in storage.
const PRESENCE_MIN_INTERVAL_MS = 90 * 1000;
async function sendPresencePing() {
  try {
    if (!(await telemetryAllowed())) return;
    const { analyticsPresenceAt = 0 } = await chrome.storage.local.get('analyticsPresenceAt');
    if (Date.now() - analyticsPresenceAt < PRESENCE_MIN_INTERVAL_MS) return;
    await chrome.storage.local.set({ analyticsPresenceAt: Date.now() });
    const installId = await getAnalyticsIdentity();
    await fetch(HEARTBEAT_API, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ installId, version: chrome.runtime.getManifest().version, browser: navigator.userAgent.includes('Firefox') ? 'firefox' : 'chromium', presence: true }),
      keepalive: true,
    });
  } catch { /* telemetry must never affect extension behavior */ }
}
