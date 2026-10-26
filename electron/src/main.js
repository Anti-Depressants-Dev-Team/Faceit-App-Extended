'use strict';

const { app, BrowserWindow, WebContentsView, session, shell, ipcMain } = require('electron');
const path = require('node:path');
const fs = require('node:fs');
const { ElectronBlocker } = require('@ghostery/adblocker-electron');
const { autoUpdater } = require('electron-updater');

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const START_URL = 'https://www.faceit.com/en';

// Chrome UA without the Electron/FaceitExtended tokens, so faceit.com sees a
// plain Chrome browser (same trick the WinUI build used).
const CHROME_USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const TITLE_BAR_HEIGHT = 28;
const TITLE_BAR_COLOR = '#1e1e1e';

// How often to re-check GitHub releases while the app stays open.
const UPDATE_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1000;

// Hosts that are allowed to open as an in-app popup window (login flows).
// Everything else is handed to the system browser.
const POPUP_HOSTS = [
  'faceit.com',
  'steamcommunity.com',
  'steampowered.com',
  'accounts.google.com',
];

// Electron implements chrome.storage.local but not chrome.storage.sync, and
// reading chrome.storage.sync throws. Every extension here stores a handful of
// user settings in sync, so it is rewritten to local in the copy under userData
// - the files in this repo are never touched.
//
// extension-preload.js covers background scripts and extension pages; content
// scripts run in a world no preload can reach, so they need these rewrites.
const SOURCE_PATCHES = [
  {
    // chrome.storage.sync.get(...) / browser.storage.sync.set(...)
    find: /\.storage\.sync\b/g,
    replace: '.storage.local',
  },
  {
    // webext-options-sync (bundled by Repeek) picks its area by name:
    // `{..., storageType: a = "sync"} = {}` after minification.
    find: /storageType:\s*([A-Za-z_$]+)\s*=\s*(["'])sync\2/g,
    replace: 'storageType:$1=$2local$2',
  },
  {
    find: /storageType:\s*(["'])sync\1/g,
    replace: 'storageType:$1local$1',
  },
];

// uBlock Origin is Manifest V2 and leans on chrome.webNavigation,
// chrome.contextMenus, chrome.privacy and the badge APIs - none of which
// Electron implements. Its background page throws during startup, so loading it
// buys nothing but console noise. Ad blocking is handled natively instead, by
// @ghostery/adblocker-electron in enableAdBlocking().
const SKIPPED_EXTENSIONS = new Map([
  ['ublock-origin', 'MV2 APIs unavailable in Electron - replaced by the native blocker'],
]);

// Whole files swapped out in the patched copy, for things a find/replace can't
// fix. Each is only applied while the original still looks like the version
// the replacement was written for (`expect`) - if an extension update changes
// the file, the original is kept and a warning logged.
const FILE_OVERRIDES = [
  {
    // IndexedDB can't open on chrome-extension:// pages in Electron, so EXT's
    // wallpaper upload failed with "Internal error opening backing store".
    // The replacement keeps the files in chrome.storage.local instead.
    extension: 'faceit-ext',
    file: 'wp-db.js',
    replacement: path.join(__dirname, 'overrides', 'faceit-ext', 'wp-db.js'),
    expect: /window\.ExtWpDb\s*=\s*\{\s*get\s*:[\s\S]*put\s*:[\s\S]*del\s*:[\s\S]*clear\s*:[\s\S]*migrate\b/,
  },
];

// Shown under an extension in the settings window when part of it can't work
// inside Electron.
const EXTENSION_NOTES = new Map([
  ['faceit-vision', 'Signing in to FACEIT Vision from inside the extension is not supported here: it needs chrome.identity, which Electron does not provide. Everything that works without signing in is unaffected.'],
]);

// An empty page written into every copied extension. Loading it gives us a
// script context inside the extension, which is how "Reset data" reaches
// chrome.storage. Names starting with "_" are reserved by Chromium.
const BLANK_PAGE = 'fx-blank.html';

const isDev = !app.isPackaged;

/** @type {BrowserWindow | null} */
let mainWindow = null;
/** @type {WebContentsView | null} */
let siteView = null;
/** @type {BrowserWindow | null} */
let settingsWindow = null;
/** @type {WebContentsView | null} */
let settingsPanel = null;
/** @type {Electron.Session | null} */
let faceitSession = null;

// ---------------------------------------------------------------------------
// Extensions
// ---------------------------------------------------------------------------

function sourceExtensionsDir() {
  return isDev
    ? path.join(__dirname, '..', '..', 'extensions')
    : path.join(process.resourcesPath, 'extensions');
}

/**
 * Copy the bundled extensions into userData and apply compatibility patches.
 * Copying keeps Chromium away from a read-only Program Files directory and
 * gives us somewhere safe to rewrite files.
 */
function prepareExtensions() {
  const source = sourceExtensionsDir();
  const target = path.join(app.getPath('userData'), 'extensions');

  if (!fs.existsSync(source)) {
    console.warn(`[extensions] source folder missing: ${source}`);
    return { target, dirs: [] };
  }

  fs.rmSync(target, { recursive: true, force: true });
  fs.cpSync(source, target, {
    recursive: true,
    filter: (src) => !src.includes(`${path.sep}.git`),
  });

  const dirs = [];

  for (const entry of fs.readdirSync(target, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const dir = path.join(target, entry.name);
    if (!fs.existsSync(path.join(dir, 'manifest.json'))) continue;

    const skipReason = SKIPPED_EXTENSIONS.get(entry.name);
    if (skipReason) {
      console.log(`[extensions] skipping ${entry.name}: ${skipReason}`);
      continue;
    }

    const patched = applySourcePatches(dir);
    if (patched > 0) {
      console.log(`[extensions] patched ${patched} file(s) in ${entry.name} for Electron`);
    }
    applyFileOverrides(entry.name, dir);
    fs.writeFileSync(path.join(dir, BLANK_PAGE), '<!doctype html><title></title>');
    dirs.push(dir);
  }

  return { target, dirs };
}

// ---------------------------------------------------------------------------
// Extension registry - what the settings window lists and controls
// ---------------------------------------------------------------------------

/**
 * @typedef {object} ExtensionEntry
 * @property {string} key        folder name, stable across versions
 * @property {string} dir        patched copy under userData
 * @property {string} name       short display name
 * @property {string} fullName   name as the manifest gives it
 * @property {string} description
 * @property {string} version
 * @property {string | null} icon    data: URL
 * @property {string | null} popup   path inside the extension
 * @property {string | null} options path inside the extension
 * @property {string | null} id      Chromium extension id once loaded
 * @property {string | null} error   last load failure
 */

/** @type {Map<string, ExtensionEntry>} */
const extensions = new Map();

function extensionSettingsFile() {
  return path.join(app.getPath('userData'), 'extension-settings.json');
}

/** Folder names the user switched off. Everything else loads. */
function readDisabledExtensions() {
  try {
    const saved = JSON.parse(fs.readFileSync(extensionSettingsFile(), 'utf8'));
    if (Array.isArray(saved.disabled)) return new Set(saved.disabled);
  } catch {
    // first run, or unreadable - everything on
  }
  return new Set();
}

function saveDisabledExtensions(disabled) {
  try {
    fs.writeFileSync(
      extensionSettingsFile(),
      JSON.stringify({ disabled: [...disabled].sort() }, null, 2)
    );
  } catch (error) {
    console.warn(`[extensions] could not save settings: ${error.message}`);
  }
}

const disabledExtensions = readDisabledExtensions();

/** Resolve a `__MSG_name__` manifest string against the default locale. */
function localize(dir, manifest, value) {
  const match = typeof value === 'string' && value.match(/^__MSG_(.+)__$/);
  if (!match) return value || '';

  const locales = [app.getLocale().replace('-', '_'), app.getLocale().split('-')[0], manifest.default_locale, 'en'];
  for (const locale of locales) {
    if (!locale) continue;
    try {
      const messages = JSON.parse(
        fs.readFileSync(path.join(dir, '_locales', locale, 'messages.json'), 'utf8').replace(/^﻿/, '')
      );
      const key = Object.keys(messages).find((k) => k.toLowerCase() === match[1].toLowerCase());
      if (key) return messages[key].message;
    } catch {
      // locale not shipped - try the next one
    }
  }
  return match[1];
}

function readIcon(dir, manifest) {
  const icons = manifest.icons || (manifest.action || manifest.browser_action || {}).default_icon || {};
  const sizes = typeof icons === 'string' ? [[128, icons]] : Object.entries(icons).map(([s, p]) => [Number(s), p]);
  sizes.sort((a, b) => b[0] - a[0]);

  for (const [, rel] of sizes) {
    try {
      const data = fs.readFileSync(path.join(dir, rel));
      const mime = rel.endsWith('.svg') ? 'image/svg+xml' : rel.endsWith('.jpg') ? 'image/jpeg' : 'image/png';
      return `data:${mime};base64,${data.toString('base64')}`;
    } catch {
      // missing file - try a smaller size
    }
  }
  return null;
}

/** @returns {ExtensionEntry} */
function describeExtension(dir) {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8').replace(/^﻿/, '')
  );
  const fullName = localize(dir, manifest, manifest.name);
  const action = manifest.action || manifest.browser_action || {};
  const options =
    manifest.options_page || (manifest.options_ui && manifest.options_ui.page) || null;

  return {
    key: path.basename(dir),
    dir,
    // "Tapit - Level up your Faceit experience" -> "Tapit",
    // "Repeek (formerly FACEIT Enhancer)" -> "Repeek"
    name: fullName.split(' - ')[0].replace(/\s*\([^)]*\)\s*$/, '').trim() || fullName,
    fullName,
    description: localize(dir, manifest, manifest.description),
    version: manifest.version,
    icon: readIcon(dir, manifest),
    popup: action.default_popup || null,
    options,
    hosts: [...(manifest.host_permissions || []), ...(manifest.permissions || []).filter((p) => p.includes('://') || p === '<all_urls>')],
    id: null,
    error: null,
  };
}

// ---------------------------------------------------------------------------
// chrome.cookies for extension service workers
// ---------------------------------------------------------------------------

/** Does url fall under one of an extension's host permission patterns? */
function matchesHostPermission(patterns, url) {
  let target;
  try {
    target = new URL(url);
  } catch {
    return false;
  }

  return patterns.some((pattern) => {
    if (pattern === '<all_urls>') return true;
    const match = pattern.match(/^(\*|https?):\/\/([^/]+)\//);
    if (!match) return false;
    if (match[1] !== '*' && `${match[1]}:` !== target.protocol) return false;

    const host = match[2];
    if (host === '*') return true;
    if (host.startsWith('*.')) {
      const base = host.slice(2);
      return target.hostname === base || target.hostname.endsWith(`.${base}`);
    }
    return target.hostname === host;
  });
}

const SAME_SITE = { unspecified: 'unspecified', no_restriction: 'no_restriction', lax: 'lax', strict: 'strict' };

/** Electron cookie -> chrome.cookies.Cookie */
function toChromeCookie(cookie) {
  return {
    name: cookie.name,
    value: cookie.value,
    domain: cookie.domain,
    hostOnly: Boolean(cookie.hostOnly),
    path: cookie.path,
    secure: Boolean(cookie.secure),
    httpOnly: Boolean(cookie.httpOnly),
    sameSite: SAME_SITE[cookie.sameSite] || 'unspecified',
    session: Boolean(cookie.session),
    expirationDate: cookie.expirationDate,
    storeId: '0',
  };
}

/**
 * Answer a chrome.cookies call from a service worker, the way Chrome would:
 * only for URLs the extension has host permission for.
 */
async function extensionCookies(ses, workerScope, details, single) {
  const id = (() => {
    try {
      return new URL(workerScope).host;
    } catch {
      return '';
    }
  })();
  const entry = [...extensions.values()].find((e) => e.id === id);
  if (!entry || !details) return single ? null : [];

  const url = details.url || (details.domain ? `https://${details.domain.replace(/^\./, '')}/` : null);
  if (!url || !matchesHostPermission(entry.hosts, url)) return single ? null : [];

  const filter = { url };
  if (details.name) filter.name = details.name;
  const found = (await ses.cookies.get(filter)).map(toChromeCookie);
  return single ? found[0] || null : found;
}

// Extension pages (popups, options) ask over the normal IPC channel. The
// sender's origin decides which extension's permissions apply - a faceit.com
// frame has no extension origin and gets nothing.
for (const [channel, single] of [
  ['fx:cookies-get', true],
  ['fx:cookies-get-all', false],
]) {
  ipcMain.handle(channel, (event, details) => {
    const origin = event.senderFrame ? event.senderFrame.origin : '';
    if (!faceitSession || !origin.startsWith('chrome-extension://')) return single ? null : [];
    return extensionCookies(faceitSession, origin, details, single);
  });
}

// ---------------------------------------------------------------------------
// chrome.tabs.create - extension pages open in their own app window
// ---------------------------------------------------------------------------

/** @type {Map<string, BrowserWindow>} url -> open window, so a second click focuses it */
const extensionPageWindows = new Map();

/**
 * "chrome-extension://<id>" for an extension URL, '' otherwise. URL#origin
 * can't be used: it is "null" for every non-web scheme, so it would make all
 * extensions look alike.
 */
function extensionOrigin(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'chrome-extension:' && parsed.host ? `chrome-extension://${parsed.host}` : '';
  } catch {
    return '';
  }
}

function isFaceitUrl(url) {
  return /^https:\/\/([a-z0-9-]+\.)*faceit\.com(\/|$)/i.test(url);
}

/** Where a link clicked inside an extension page should go. */
function openLinkFromExtension(url) {
  if (isFaceitUrl(url) && siteView && mainWindow) {
    siteView.webContents.loadURL(url);
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  } else if (/^https?:/i.test(url)) {
    shell.openExternal(url);
  }
}

/**
 * A full window for one of an extension's own pages - what Chrome would show
 * in a new tab. EXT's wallpaper upload page is the main user.
 */
function openExtensionPageWindow(url) {
  const existing = extensionPageWindows.get(url);
  if (existing && !existing.isDestroyed()) {
    if (existing.isMinimized()) existing.restore();
    existing.focus();
    return;
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 820,
    minWidth: 640,
    minHeight: 480,
    backgroundColor: '#111111',
    autoHideMenuBar: true,
    title: 'FACEIT Extended',
    icon: path.join(__dirname, '..', '..', 'faceit.ico'),
    webPreferences: {
      session: faceitSession,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  win.setMenuBarVisibility(false);

  const wc = win.webContents;
  wc.setWindowOpenHandler(({ url: next }) => {
    if (next.startsWith('chrome-extension://')) openExtensionPageWindow(next);
    else openLinkFromExtension(next);
    return { action: 'deny' };
  });
  wc.on('will-navigate', (event, next) => {
    if (/^https?:/i.test(next)) {
      event.preventDefault();
      openLinkFromExtension(next);
    }
  });
  wc.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F12') {
      wc.toggleDevTools();
      event.preventDefault();
    } else if (input.key === 'F5' || ((input.control || input.meta) && input.key.toLowerCase() === 'r')) {
      wc.reload();
      event.preventDefault();
    }
  });

  win.on('closed', () => extensionPageWindows.delete(url));
  extensionPageWindows.set(url, win);
  win.loadURL(url);
}

/**
 * Handle chrome.tabs.create from an extension. Its own pages get a window,
 * faceit.com loads in the main window, anything else goes to the browser.
 * Returns a minimal chrome.tabs.Tab.
 */
function createTabForExtension(senderOrigin, url) {
  let target;
  try {
    target = new URL(url);
  } catch {
    return undefined;
  }

  if (target.protocol === 'chrome-extension:') {
    // Only an extension's own pages - never another extension's.
    if (!senderOrigin || extensionOrigin(target.href) !== senderOrigin) return undefined;
    openExtensionPageWindow(target.href);
  } else if (target.protocol === 'https:' || target.protocol === 'http:') {
    openLinkFromExtension(target.href);
  } else {
    return undefined;
  }

  return { id: -1, index: 0, windowId: 1, active: true, highlighted: true, pinned: false, incognito: false, url: target.href, pendingUrl: target.href, status: 'loading' };
}

ipcMain.handle('fx:open-tab', (event, url) => {
  const origin = extensionOrigin(event.senderFrame ? event.senderFrame.origin : '');
  if (!origin) return undefined;
  return createTabForExtension(origin, String(url || ''));
});

/** Hook the cookie IPC up to each extension service worker as it starts. */
function wireServiceWorkerIpc(ses) {
  ses.serviceWorkers.on('running-status-changed', ({ versionId, runningStatus }) => {
    if (runningStatus !== 'starting' && runningStatus !== 'running') return;
    const worker = ses.serviceWorkers.getWorkerFromVersionID(versionId);
    if (!worker || !worker.scope.startsWith('chrome-extension://')) return;

    for (const [channel, single] of [
      ['fx:cookies-get', true],
      ['fx:cookies-get-all', false],
    ]) {
      worker.ipc.removeHandler(channel);
      worker.ipc.handle(channel, (_event, details) => extensionCookies(ses, worker.scope, details, single));
    }

    worker.ipc.removeHandler('fx:open-tab');
    worker.ipc.handle('fx:open-tab', (_event, url) =>
      createTabForExtension(extensionOrigin(worker.scope), String(url || ''))
    );
  });
}

/** Plain view of the registry for the settings window. */
function listExtensions() {
  return [...extensions.values()]
    .map((entry) => ({
      key: entry.key,
      name: entry.name,
      fullName: entry.fullName,
      description: entry.description,
      version: entry.version,
      icon: entry.icon,
      hasPopup: Boolean(entry.popup),
      hasOptions: Boolean(entry.options),
      enabled: !disabledExtensions.has(entry.key),
      loaded: Boolean(entry.id),
      error: entry.error,
      note: EXTENSION_NOTES.get(entry.key) || null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

async function loadExtension(ses, entry) {
  try {
    const loaded = await ses.extensions.loadExtension(entry.dir, { allowFileAccess: true });
    entry.id = loaded.id;
    entry.error = null;
    console.log(`[extensions] loaded ${entry.key} (${loaded.version})`);
  } catch (error) {
    entry.id = null;
    entry.error = String(error.message || error);
    console.error(`[extensions] failed ${entry.key}: ${entry.error}`);
  }
}

function unloadExtension(ses, entry) {
  if (!entry.id) return;
  try {
    ses.extensions.removeExtension(entry.id);
    console.log(`[extensions] unloaded ${entry.key}`);
  } catch (error) {
    console.warn(`[extensions] could not unload ${entry.key}: ${error.message}`);
  }
  entry.id = null;
}

async function loadExtensions(ses) {
  const { dirs } = prepareExtensions();

  extensions.clear();
  for (const dir of dirs) {
    try {
      const entry = describeExtension(dir);
      extensions.set(entry.key, entry);
    } catch (error) {
      console.error(`[extensions] unreadable manifest in ${path.basename(dir)}: ${error.message}`);
    }
  }

  await Promise.all(
    [...extensions.values()].map((entry) => {
      if (disabledExtensions.has(entry.key)) {
        console.log(`[extensions] ${entry.key} is turned off`);
        return null;
      }
      return loadExtension(ses, entry);
    })
  );
}

/** Content scripts only attach on navigation, so changes need a reload. */
let siteReloadTimer = null;
function scheduleSiteReload() {
  clearTimeout(siteReloadTimer);
  siteReloadTimer = setTimeout(() => {
    if (siteView) siteView.webContents.reload();
  }, 700);
}

function broadcastExtensions() {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.webContents.send('ext:changed', listExtensions());
  }
}

async function setExtensionEnabled(key, enabled) {
  const entry = extensions.get(key);
  if (!entry || !faceitSession) return listExtensions();

  if (enabled) {
    disabledExtensions.delete(key);
    if (!entry.id) await loadExtension(faceitSession, entry);
  } else {
    disabledExtensions.add(key);
    unloadExtension(faceitSession, entry);
  }

  saveDisabledExtensions(disabledExtensions);
  scheduleSiteReload();
  broadcastExtensions();
  return listExtensions();
}

/**
 * Wipe an extension's saved settings: chrome.storage plus anything it keeps in
 * its origin's localStorage / IndexedDB. Then restart it so its service worker
 * drops whatever it had cached in memory.
 */
async function resetExtensionData(key) {
  const entry = extensions.get(key);
  if (!entry || !entry.id || !faceitSession) throw new Error('Turn the extension on first.');

  const ses = faceitSession;
  const origin = `chrome-extension://${entry.id}`;
  const scratch = new BrowserWindow({
    show: false,
    webPreferences: { session: ses, contextIsolation: true, sandbox: true },
  });

  try {
    await scratch.loadURL(`${origin}/${BLANK_PAGE}`);
    await scratch.webContents.executeJavaScript(`(async () => {
      await chrome.storage.local.clear();
      try { await chrome.storage.session.clear(); } catch {}
    })()`);
  } finally {
    scratch.destroy();
  }

  await ses.clearStorageData({ origin });

  unloadExtension(ses, entry);
  await loadExtension(ses, entry);
  scheduleSiteReload();
  broadcastExtensions();
  return listExtensions();
}

/** Swap in FILE_OVERRIDES for one extension's patched copy. */
function applyFileOverrides(name, dir) {
  for (const override of FILE_OVERRIDES) {
    if (override.extension !== name) continue;
    const target = path.join(dir, override.file);
    try {
      const original = fs.readFileSync(target, 'utf8');
      if (!override.expect.test(original)) {
        console.warn(`[extensions] ${name}/${override.file} changed upstream - override skipped`);
        continue;
      }
      fs.copyFileSync(override.replacement, target);
      console.log(`[extensions] replaced ${name}/${override.file} for Electron`);
    } catch (error) {
      console.warn(`[extensions] could not override ${name}/${override.file}: ${error.message}`);
    }
  }
}

/** Apply SOURCE_PATCHES to every .js file under dir. Returns files changed. */
function applySourcePatches(dir) {
  let changed = 0;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      changed += applySourcePatches(full);
      continue;
    }
    if (!entry.name.endsWith('.js')) continue;

    const original = fs.readFileSync(full, 'utf8');
    let patched = original;
    for (const { find, replace } of SOURCE_PATCHES) {
      patched = patched.replace(find, replace);
    }

    if (patched !== original) {
      fs.writeFileSync(full, patched);
      changed += 1;
    }
  }

  return changed;
}

// ---------------------------------------------------------------------------
// Ad blocking
// ---------------------------------------------------------------------------

/**
 * Network-level ad and tracker blocking, standing in for uBlock Origin.
 * The filter engine is cached on disk, so only the first run needs the network -
 * and if that fails the app still starts, just unblocked.
 */
async function enableAdBlocking(ses) {
  const enginePath = path.join(app.getPath('userData'), 'adblocker-engine.bin');

  try {
    const blocker = await ElectronBlocker.fromPrebuiltAdsAndTracking(fetch, {
      path: enginePath,
      read: fs.promises.readFile,
      write: fs.promises.writeFile,
    });

    blocker.enableBlockingInSession(ses);

    let blocked = 0;
    blocker.on('request-blocked', () => {
      blocked += 1;
      if (isDev && blocked % 25 === 0) console.log(`[adblock] blocked ${blocked} requests`);
    });

    console.log('[adblock] enabled');
    return blocker;
  } catch (error) {
    console.warn(`[adblock] disabled: ${error.message}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Auto update
// ---------------------------------------------------------------------------

/**
 * Pulls updates from GitHub releases (see `build.publish` in package.json).
 * Downloads happen in the background; the title bar shows a small Update button
 * once one is ready, and an unclicked update installs on quit anyway.
 */
function setupAutoUpdater() {
  if (isDev) return; // dev runs have no version to update from

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('update-available', (info) => {
    console.log(`[update] downloading ${info.version}`);
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log(`[update] ready: ${info.version}`);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('update:ready', info.version);
    }
  });

  autoUpdater.on('error', (error) => {
    // Offline, rate limited, no release yet - never worth interrupting for.
    console.warn(`[update] check failed: ${error.message}`);
  });

  autoUpdater.checkForUpdates();
  setInterval(() => autoUpdater.checkForUpdates(), UPDATE_CHECK_INTERVAL_MS);
}

// ---------------------------------------------------------------------------
// Window state
// ---------------------------------------------------------------------------

function stateFile() {
  return path.join(app.getPath('userData'), 'window-state.json');
}

function readWindowState() {
  try {
    const state = JSON.parse(fs.readFileSync(stateFile(), 'utf8'));
    if (Number.isFinite(state.width) && Number.isFinite(state.height)) return state;
  } catch {
    // no saved state yet
  }
  return { width: 1400, height: 900, maximized: false };
}

function saveWindowState() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  const bounds = mainWindow.getNormalBounds();
  try {
    fs.writeFileSync(
      stateFile(),
      JSON.stringify({ ...bounds, maximized: mainWindow.isMaximized() })
    );
  } catch (error) {
    console.warn(`[window] could not save state: ${error.message}`);
  }
}

// ---------------------------------------------------------------------------
// Window
// ---------------------------------------------------------------------------

function createWindow(ses) {
  const state = readWindowState();

  mainWindow = new BrowserWindow({
    x: state.x,
    y: state.y,
    width: state.width,
    height: state.height,
    minWidth: 940,
    minHeight: 600,
    show: false,
    backgroundColor: '#1f1f1f',
    title: 'FACEIT Extended',
    icon: path.join(__dirname, '..', '..', 'faceit.ico'),
    // Native caption buttons (so Windows 11 Snap Layouts keep working) drawn
    // straight onto our own title bar.
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: TITLE_BAR_COLOR,
      symbolColor: '#b4b4b4',
      height: TITLE_BAR_HEIGHT,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));

  // The site itself lives in a child view below the title bar.
  siteView = new WebContentsView({
    webPreferences: {
      session: ses,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  siteView.setBackgroundColor('#1f1f1f');
  mainWindow.contentView.addChildView(siteView);

  layoutSiteView();
  wireSiteView();
  wireShortcuts();

  mainWindow.on('resize', layoutSiteView);
  mainWindow.on('maximize', layoutSiteView);
  mainWindow.on('unmaximize', layoutSiteView);
  // The title bar dims with the window, not with DOM focus.
  const sendFocus = (focused) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('window:focus', focused);
    }
  };
  mainWindow.on('focus', () => sendFocus(true));
  mainWindow.on('blur', () => sendFocus(false));

  mainWindow.on('resized', saveWindowState);
  mainWindow.on('moved', saveWindowState);
  mainWindow.on('close', saveWindowState);
  mainWindow.on('closed', () => {
    mainWindow = null;
    siteView = null;
    // The settings window means nothing without the app behind it.
    if (settingsWindow && !settingsWindow.isDestroyed()) settingsWindow.close();
    for (const win of extensionPageWindows.values()) {
      if (!win.isDestroyed()) win.close();
    }
  });

  mainWindow.once('ready-to-show', () => {
    if (state.maximized) mainWindow.maximize();
    mainWindow.show();
  });

  siteView.webContents.loadURL(START_URL);
}

function layoutSiteView() {
  if (!mainWindow || !siteView) return;
  const [width, height] = mainWindow.getContentSize();
  siteView.setBounds({
    x: 0,
    y: TITLE_BAR_HEIGHT,
    width,
    height: Math.max(0, height - TITLE_BAR_HEIGHT),
  });
}

function sendNavState() {
  if (!mainWindow || mainWindow.isDestroyed() || !siteView) return;
  const wc = siteView.webContents;
  mainWindow.webContents.send('nav:state', {
    canGoBack: wc.navigationHistory.canGoBack(),
    canGoForward: wc.navigationHistory.canGoForward(),
    loading: wc.isLoading(),
    url: wc.getURL(),
  });
}

function wireSiteView() {
  const wc = siteView.webContents;

  for (const event of [
    'did-navigate',
    'did-navigate-in-page',
    'did-start-loading',
    'did-stop-loading',
    'did-finish-load',
  ]) {
    wc.on(event, sendNavState);
  }

  // Login popups stay in the app; everything else opens in the real browser.
  wc.setWindowOpenHandler(({ url }) => {
    let host = '';
    try {
      host = new URL(url).hostname;
    } catch {
      return { action: 'deny' };
    }

    const isPopupHost = POPUP_HOSTS.some(
      (allowed) => host === allowed || host.endsWith(`.${allowed}`)
    );

    if (isPopupHost) {
      return {
        action: 'allow',
        overrideBrowserWindowOptions: {
          width: 1000,
          height: 800,
          backgroundColor: '#1f1f1f',
          autoHideMenuBar: true,
          webPreferences: { session: wc.session, contextIsolation: true, sandbox: true },
        },
      };
    }

    shell.openExternal(url);
    return { action: 'deny' };
  });
}

function wireShortcuts() {
  // Browser keys, forwarded no matter which view has focus.
  const handle = (event, input) => {
    if (input.type !== 'keyDown' || !siteView) return;
    const wc = siteView.webContents;
    const ctrl = input.control || input.meta;

    if (input.key === 'F5' || (ctrl && input.key.toLowerCase() === 'r')) {
      input.shift ? wc.reloadIgnoringCache() : wc.reload();
      event.preventDefault();
    } else if (input.alt && input.key === 'ArrowLeft') {
      if (wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack();
      event.preventDefault();
    } else if (input.alt && input.key === 'ArrowRight') {
      if (wc.navigationHistory.canGoForward()) wc.navigationHistory.goForward();
      event.preventDefault();
    } else if (input.key === 'F12' || (ctrl && input.shift && input.key.toLowerCase() === 'i')) {
      wc.toggleDevTools();
      event.preventDefault();
    } else if (ctrl && input.key === ',') {
      openSettingsWindow();
      event.preventDefault();
    }
  };

  mainWindow.webContents.on('before-input-event', handle);
  siteView.webContents.on('before-input-event', handle);
}

// ---------------------------------------------------------------------------
// Extension settings window
// ---------------------------------------------------------------------------

/**
 * A separate window listing every bundled extension, with a switch for each
 * and the extension's own popup / options page embedded on the right - the
 * part Electron has no toolbar for. The embedded page is a WebContentsView in
 * the FACEIT session (so it shares the extension's storage); the renderer
 * tells us where to put it.
 */
function openSettingsWindow() {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    if (settingsWindow.isMinimized()) settingsWindow.restore();
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    minWidth: 820,
    minHeight: 520,
    show: false,
    backgroundColor: '#161616',
    title: 'Extensions - FACEIT Extended',
    icon: path.join(__dirname, '..', '..', 'faceit.ico'),
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: TITLE_BAR_COLOR,
      symbolColor: '#b4b4b4',
      height: TITLE_BAR_HEIGHT,
    },
    webPreferences: {
      preload: path.join(__dirname, 'settings-preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  settingsPanel = new WebContentsView({
    webPreferences: {
      session: faceitSession,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  settingsPanel.setBackgroundColor('#1b1b1b');
  if (typeof settingsPanel.setBorderRadius === 'function') settingsPanel.setBorderRadius(9);
  settingsPanel.setVisible(false);
  settingsWindow.contentView.addChildView(settingsPanel);

  const panel = settingsPanel.webContents;
  panel.setWindowOpenHandler(({ url }) => {
    const own = extensionOrigin(url);
    if (own && own === extensionOrigin(panel.getURL())) openExtensionPageWindow(url);
    else openLinkFromExtension(url);
    return { action: 'deny' };
  });
  // Links that navigate away: faceit.com to the main window, the rest to the browser.
  panel.on('will-navigate', (event, url) => {
    if (/^https?:/i.test(url)) {
      event.preventDefault();
      openLinkFromExtension(url);
    }
  });
  // Popups often render after load (React and friends), so measure twice.
  panel.on('did-finish-load', () => {
    fitPanelToPopup();
    setTimeout(fitPanelToPopup, 500);
  });
  panel.on('did-fail-load', (_event, code, description, url, isMainFrame) => {
    if (isMainFrame && code !== -3 && settingsWindow) {
      settingsWindow.webContents.send('ext:page-error', `${description} (${url})`);
    }
  });

  const handleKeys = (event, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F12') {
      // DevTools for whichever extension page is open - handy when one misbehaves.
      if (settingsPanel && settingsPanel.getVisible()) panel.toggleDevTools();
      else settingsWindow.webContents.toggleDevTools();
      event.preventDefault();
    }
  };
  settingsWindow.webContents.on('before-input-event', handleKeys);
  panel.on('before-input-event', handleKeys);

  settingsWindow.on('closed', () => {
    if (settingsPanel) settingsPanel.webContents.close();
    settingsWindow = null;
    settingsPanel = null;
    panelStage = null;
    panelPageWidth = null;
    panelIsPopup = false;
  });

  settingsWindow.once('ready-to-show', () => settingsWindow.show());
  settingsWindow.loadFile(path.join(__dirname, 'renderer', 'settings.html'));
}

// Where the renderer's stage box is, and - for popups, which are built for a
// ~350px toolbar bubble - how wide the page actually wants to be. A narrow
// popup is centred in the stage instead of hugging its left edge.
let panelStage = null;
let panelIsPopup = false;
// The popup's own width in CSS px; null for pages that fill whatever they get.
let panelPageWidth = null;

function layoutPanel() {
  if (!settingsPanel || !panelStage) return;
  const stage = panelStage;
  let x = stage.x;
  let width = stage.width;
  let zoom = 1;

  if (panelIsPopup && panelPageWidth) {
    if (panelPageWidth > stage.width) {
      // Wider than the stage: zoom out until it fits, but not into illegibility.
      zoom = Math.max(0.6, Math.floor((stage.width / panelPageWidth) * 100) / 100);
    } else {
      x = stage.x + (stage.width - panelPageWidth) / 2;
      width = panelPageWidth;
    }
  }

  if (settingsPanel.webContents.getZoomFactor() !== zoom) settingsPanel.webContents.setZoomFactor(zoom);
  settingsPanel.setBounds({
    x: Math.round(x),
    y: Math.round(stage.y),
    width: Math.max(0, Math.round(width)),
    height: Math.max(0, Math.round(stage.height)),
  });
}

/**
 * Measure how wide a popup lays itself out, then fit the panel to it. Only
 * measured while the page still fills the whole stage at 100% - once it has
 * been fitted, a popup with a min-width would just stretch to the new size.
 */
async function fitPanelToPopup() {
  if (!settingsPanel || !panelIsPopup || !panelStage || panelPageWidth) return;
  const wc = settingsPanel.webContents;
  try {
    const { width, viewport } = await wc.executeJavaScript(`(() => {
      const body = document.body;
      if (!body) return { width: 0, viewport: innerWidth };
      const margin = parseFloat(getComputedStyle(body).marginRight) || 0;
      return {
        width: Math.ceil(Math.max(body.getBoundingClientRect().right + margin, document.documentElement.scrollWidth)),
        viewport: innerWidth,
      };
    })()`);
    if (!panelIsPopup || !settingsPanel || !width) return;

    // A page as wide as its viewport just fills whatever it gets.
    if (width < viewport - 40 || width > viewport + 1) {
      panelPageWidth = width;
      layoutPanel();
    }
  } catch {
    // page navigated away mid-measure
  }
}

function showExtensionPage(key, which) {
  const entry = extensions.get(key);
  if (!settingsPanel || !entry) return { ok: false, reason: 'missing' };
  if (!entry.id) return { ok: false, reason: 'disabled' };

  const page = which === 'options' ? entry.options : entry.popup || entry.options;
  if (!page) return { ok: false, reason: 'no-page' };

  panelIsPopup = page === entry.popup;
  panelPageWidth = null;
  layoutPanel();
  settingsPanel.webContents.loadURL(`chrome-extension://${entry.id}/${page.replace(/^\//, '')}`);
  settingsPanel.setVisible(true);
  return { ok: true };
}

function hideExtensionPage() {
  if (!settingsPanel) return;
  panelIsPopup = false;
  panelPageWidth = null;
  settingsPanel.setVisible(false);
  settingsPanel.webContents.loadURL('about:blank');
}

ipcMain.on('settings:open', () => openSettingsWindow());

ipcMain.handle('ext:list', () => listExtensions());
ipcMain.handle('ext:set-enabled', (_event, key, enabled) => setExtensionEnabled(key, Boolean(enabled)));
ipcMain.handle('ext:reset', async (_event, key) => {
  try {
    return { ok: true, list: await resetExtensionData(key) };
  } catch (error) {
    return { ok: false, error: String(error.message || error) };
  }
});
ipcMain.handle('ext:show-page', (_event, key, which) => showExtensionPage(key, which));
ipcMain.on('ext:hide-page', () => hideExtensionPage());
ipcMain.on('ext:reload-page', () => {
  if (settingsPanel && settingsPanel.getVisible()) settingsPanel.webContents.reload();
});
ipcMain.on('ext:panel-bounds', (_event, rect) => {
  if (!rect) return;
  panelStage = rect;
  layoutPanel();
});
ipcMain.on('ext:reload-site', () => {
  if (siteView) siteView.webContents.reload();
});

// ---------------------------------------------------------------------------
// IPC from the title bar
// ---------------------------------------------------------------------------

ipcMain.on('nav:command', (_event, command) => {
  if (!siteView) return;
  const wc = siteView.webContents;
  const history = wc.navigationHistory;

  if (command === 'back' && history.canGoBack()) history.goBack();
  else if (command === 'forward' && history.canGoForward()) history.goForward();
  else if (command === 'reload') wc.reload();
  else if (command === 'stop') wc.stop();
  else if (command === 'home') wc.loadURL(START_URL);
});

ipcMain.on('update:install', () => {
  autoUpdater.quitAndInstall();
});

ipcMain.handle('nav:query', () => {
  if (!siteView) return null;
  const wc = siteView.webContents;
  return {
    canGoBack: wc.navigationHistory.canGoBack(),
    canGoForward: wc.navigationHistory.canGoForward(),
    loading: wc.isLoading(),
    url: wc.getURL(),
  };
});

// ---------------------------------------------------------------------------
// App lifecycle
// ---------------------------------------------------------------------------

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  });

  app.userAgentFallback = CHROME_USER_AGENT;

  app.whenReady().then(async () => {
    // Extensions only load into a persistent session.
    const ses = session.fromPartition('persist:faceit');
    ses.setUserAgent(CHROME_USER_AGENT);
    faceitSession = ses;

    // Fills in the chrome.* APIs Electron lacks, in extension service workers
    // and extension pages (popups, options). It does nothing on faceit.com.
    const shim = path.join(__dirname, 'extension-preload.js');
    ses.registerPreloadScript({ id: 'extension-shim-sw', type: 'service-worker', filePath: shim });
    ses.registerPreloadScript({ id: 'extension-shim-frame', type: 'frame', filePath: shim });
    wireServiceWorkerIpc(ses);

    await Promise.all([loadExtensions(ses), enableAdBlocking(ses)]);
    createWindow(ses);
    setupAutoUpdater();

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow(ses);
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
}
