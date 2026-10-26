/* Share public stats already requested by FACEIT with the isolated content script. */
(function () {
  if (window.__faceitExtenderNativeStatsBridge) return;
  window.__faceitExtenderNativeStatsBridge = true;
  const markReady = () => document.documentElement?.setAttribute('data-fext-native-stats-bridge', 'true');
  if (document.documentElement) markReady();
  else document.addEventListener('readystatechange', markReady, { once: true });
  const cache = new Map();
  const pending = new Map();
  const TTL = 5 * 60 * 1000;
  const allowed = /^\/(?:stats\/v1\/stats\/(?:users\/[^/]+\/games\/[^/]+|time\/users\/[^/]+\/games\/[^/]+(?:\/year\/\d{4})?|users\/lifetime)|statistics\/v1\/[^/]+\/players\/[^/]+\/(?:match-rounds|seasons)|match\/v[24]\/match\/[^/]+|match-history\/v5\/players\/[^/]+\/history\/?|user-summary\/v2\/list)$/;
  function pathOf(input) {
    try {
      const url = new URL(typeof input === 'string' ? input : input.url || String(input), location.origin);
      if (!['https://www.faceit.com', 'https://api.faceit.com'].includes(url.origin)) return null;
      const path = url.pathname.replace(/^\/api(?=\/)/, '');
      if (!allowed.test(path)) return null;
      url.searchParams.sort();
      return path + (url.search ? '?' + url.searchParams : '');
    } catch { return null; }
  }
  function keysFor(path, body) {
    const url = new URL(path, location.origin);
    if (url.pathname === '/user-summary/v2/list') {
      try {
        const ids = (typeof body === 'string' ? JSON.parse(body) : body)?.ids;
        return Array.isArray(ids) ? ids.filter(id => typeof id === 'string').map(id => `/user-summary/v2/users/${encodeURIComponent(id)}`) : [];
      } catch { return []; }
    }
    if (url.pathname !== '/stats/v1/stats/users/lifetime') return [path];
    const game = url.searchParams.get('game');
    return game ? url.searchParams.getAll('player_ids').map(id => `/stats/v1/lifetime/users/${encodeURIComponent(id)}/games/${encodeURIComponent(game)}`) : [];
  }
  let cacheSubscriber = false;
  function remember(key, data) {
    cache.delete(key);
    cache.set(key, { data, capturedAt: Date.now(), expires: Date.now() + TTL });
    if (cache.size > 100) cache.delete(cache.keys().next().value);
    if (cacheSubscriber) window.postMessage({ type: 'FEXT_NATIVE_STATS_CAPTURED', path: key }, location.origin);
  }
  window.addEventListener('message', event => {
    if (event.source !== window || event.origin !== location.origin || event.data?.type !== 'FEXT_NATIVE_STATS_SUBSCRIBE') return;
    cacheSubscriber = true;
    for (const [path, entry] of cache) if (entry.expires > Date.now()) window.postMessage({ type: 'FEXT_NATIVE_STATS_CAPTURED', path }, location.origin);
  });
  function start(path, body) {
    const keys = keysFor(path, body);
    let resolve;
    const promise = new Promise(r => { resolve = r; });
    for (const key of keys) pending.set(key, promise);
    let finished = false;
    return function finish(data) {
      if (finished) return;
      finished = true;
      if (data != null) {
        if (path.startsWith('/stats/v1/stats/users/lifetime?') && Array.isArray(data)) {
          for (const row of data) {
            const id = row?._id?.playerId;
            const game = row?._id?.game;
            if (typeof id === 'string' && typeof game === 'string') remember(`/stats/v1/lifetime/users/${encodeURIComponent(id)}/games/${encodeURIComponent(game)}`, row);
          }
        } else if (path === '/user-summary/v2/list') {
          const rows = data.payload || data;
          for (const key of keys) {
            const id = decodeURIComponent(key.split('/').pop());
            if (rows[id]?.id === id) remember(key, rows[id]);
          }
        } else remember(path, data);
      }
      for (const key of keys) if (pending.get(key) === promise) pending.delete(key);
      resolve();
    };
  }
  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    const method = init?.method || input?.method || 'GET';
    const candidate = pathOf(input);
    const path = method.toUpperCase() === 'GET' || (method.toUpperCase() === 'POST' && candidate === '/user-summary/v2/list') ? candidate : null;
    const finish = path ? start(path, init?.body) : null;
    const result = originalFetch.apply(this, arguments);
    if (finish) result.then(async response => {
      try { finish(response.ok ? await response.clone().json() : null); } catch { finish(null); }
    }, () => finish(null));
    return result;
  };
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  const xhrPaths = new WeakMap();
  XMLHttpRequest.prototype.open = function (method, url) {
    const candidate = pathOf(url);
    xhrPaths.set(this, String(method).toUpperCase() === 'GET' || (String(method).toUpperCase() === 'POST' && candidate === '/user-summary/v2/list') ? candidate : null);
    return originalOpen.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    const path = xhrPaths.get(this);
    if (path) {
      const finish = start(path, body);
      this.addEventListener('loadend', () => {
        try { finish(this.status >= 200 && this.status < 300 ? (this.responseType === 'json' ? this.response : JSON.parse(this.responseText)) : null); } catch { finish(null); }
      }, { once: true });
    }
    return originalSend.apply(this, arguments);
  };
  // FACEIT's own Redux store already holds what its pages loaded (the match with hydrated rosters,
  // the live veto). Reading it costs no request. Only the whitelisted readers below can be asked for,
  // by id, and only plain copies leave this script.
  let reduxStore = null;
  function findReduxStore() {
    try {
      if (reduxStore) { reduxStore.getState(); return reduxStore; }
    } catch { reduxStore = null; }
    const root = document.getElementById('__next') || document.getElementById('root');
    const containerKey = root && Object.keys(root).find(key => key.startsWith('__reactContainer'));
    if (!containerKey) return null;
    let first = root[containerKey];
    if (first && first.stateNode && first.stateNode.current) first = first.stateNode.current;
    const stack = [first];
    for (let visited = 0; stack.length && visited < 20000; visited += 1) {
      const fiber = stack.pop();
      if (!fiber) continue;
      const props = fiber.memoizedProps;
      if (props && props.store && typeof props.store.getState === 'function' && typeof props.store.subscribe === 'function') {
        reduxStore = props.store;
        return reduxStore;
      }
      if (fiber.sibling) stack.push(fiber.sibling);
      if (fiber.child) stack.push(fiber.child);
    }
    return null;
  }
  // Lifetime-only fallback: empty segments does not prove complete map data.
  function lifetimeFromStore(path, maxAge) {
    const parsed = path.match(/^\/stats\/v1\/lifetime\/users\/([0-9A-Za-z_-]{1,80})\/games\/(cs2|csgo)$/);
    const room = location.pathname?.match(/\/room\/([0-9A-Za-z_-]{1,80})/);
    if (!parsed || !room) return null;
    const key = `${room[1]}|${parsed[2]}|${parsed[1]}`;
    const state = findReduxStore()?.getState()?.userStats;
    const row = state?.entities?.[key]?.lifetime;
    if (row?._id?.playerId !== parsed[1] || row?._id?.game !== parsed[2]) return null;
    const fresh = Object.values(state.requests || {}).some(request =>
      request?.status === 'loaded' && Number.isFinite(request.lastRequested) &&
      Date.now() >= request.lastRequested && Date.now() - request.lastRequested <= maxAge &&
      Array.isArray(request.result) && request.result.includes(key));
    return fresh ? row : null;
  }
  const REDUX_READERS = {
    match: (state, id) => state && state.matches && state.matches.entities ? state.matches.entities[id] : null,
    // The public summary FACEIT loaded for a player (country, per-game ELO and level).
    userSummary: (state, id) => state && state.userSummariesV2 && state.userSummariesV2.entities ? state.userSummariesV2.entities[id] : null,
    // The signed-in viewer's own account, as `sessions/me` returns it.
    self: (state) => state && state.session ? state.session.entity : null,
  };
  window.addEventListener('message', event => {
    const message = event.data;
    if (event.source !== window || event.origin !== location.origin || message?.type !== 'FEXT_REDUX_GET' || typeof message.id !== 'string') return;
    let data = null;
    try {
      const reader = typeof message.kind === 'string' && Object.prototype.hasOwnProperty.call(REDUX_READERS, message.kind) ? REDUX_READERS[message.kind] : null;
      const key = message.key;
      const store = reader && typeof key === 'string' && /^[0-9A-Za-z_-]{1,80}$/.test(key) ? findReduxStore() : null;
      const value = store ? reader(store.getState(), key) : null;
      data = value ? JSON.parse(JSON.stringify(value)) : null;
    } catch { data = null; }
    window.postMessage({ type: 'FEXT_REDUX_RESULT', id: message.id, data }, location.origin);
  });
  window.addEventListener('message', async event => {
    const message = event.data;
    if (event.source !== window || event.origin !== location.origin || message?.type !== 'FEXT_NATIVE_STATS_GET' || typeof message.id !== 'string' || typeof message.path !== 'string') return;
    const key = message.path;
    if (!/^\/(?:stats\/v1\/lifetime\/users\/[^/]+\/games\/[^/]+|user-summary\/v2\/users\/[^/]+)$/.test(key) && pathOf(key) !== key) return;
    const waiting = pending.get(key);
    if (waiting) {
      let timer;
      await Promise.race([waiting, new Promise(r => { timer = setTimeout(r, 2000); })]);
      clearTimeout(timer);
    }
    const entry = cache.get(key);
    const maxAge = typeof message.maxAgeMs === 'number' && message.maxAgeMs >= 0 ? Math.min(TTL, message.maxAgeMs) : TTL;
    let data = entry && entry.expires > Date.now() && Date.now() - entry.capturedAt <= maxAge ? entry.data : null;
    if (!data) {
      try { data = lifetimeFromStore(key, maxAge); } catch { /* Redux can change during navigation. */ }
    }
    window.postMessage({ type: 'FEXT_NATIVE_STATS_RESULT', id: message.id, data }, location.origin);
  });
  // Demo download links. FACEIT now asks for its own Turnstile captcha token on this request (its
  // "Watch demo" button sends one), so the 2D View click does what that button does: FACEIT's
  // invisible widget with FACEIT's site key and action, then the same same-origin request.
  // Cloudflare still runs its check. Only FACEIT's own demo hosts are accepted.
  const DEMO_CAPTCHA_ACTION = 'matchroomFinished_downloadDemos';
  const demoCaptchaToken = () => new Promise(resolve => {
    const sitekey = window.faceitRuntime && window.faceitRuntime.APP_TURNSTILE_SITEKEY;
    const turnstile = window.turnstile;
    if (!sitekey || !turnstile || typeof turnstile.render !== 'function' || !document.body) return resolve('');
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:-10000px;top:0;width:1px;height:1px;overflow:hidden;';
    document.body.appendChild(host);
    let widgetId;
    let done = false;
    const finish = token => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      try { if (widgetId !== undefined) turnstile.remove(widgetId); } catch { /* already gone */ }
      host.remove();
      resolve(typeof token === 'string' ? token : '');
    };
    const timer = setTimeout(() => finish(''), 30000);
    try {
      widgetId = turnstile.render(host, {
        sitekey, action: DEMO_CAPTCHA_ACTION, size: 'invisible',
        callback: finish, 'error-callback': () => finish(''), 'expired-callback': () => finish(''),
      });
    } catch { finish(''); }
  });
  window.addEventListener('message', async event => {
    const message = event.data;
    if (event.source !== window || event.origin !== location.origin || message?.type !== 'FEXT_DEMO_LINK_GET' || typeof message.id !== 'string' || typeof message.resourceUrl !== 'string') return;
    let result = { status: 0, downloadUrl: null, captcha: false };
    try {
      const resource = new URL(message.resourceUrl);
      if (resource.protocol === 'https:' && /(^|\.)faceit-cdn\.net$/.test(resource.hostname)) {
        const token = await demoCaptchaToken();
        const response = await fetch('/api/download/v2/demos/download-url', {
          method: 'POST',
          credentials: 'include',
          headers: { 'content-type': 'application/json', accept: 'application/json, text/plain, */*', 'faceit-referer': 'web-next', 'x-faceit-captcha-token': token },
          body: JSON.stringify({ resource_url: message.resourceUrl }),
        });
        const json = await response.json().catch(() => null);
        const payload = json && (json.payload || json);
        const link = payload && (payload.download_url || payload.downloadUrl);
        result = { status: response.status, downloadUrl: typeof link === 'string' ? link : null, captcha: Boolean(token) };
      }
    } catch { /* answered with no link below */ }
    window.postMessage({ type: 'FEXT_DEMO_LINK_RESULT', id: message.id, ...result }, location.origin);
  });
})();
