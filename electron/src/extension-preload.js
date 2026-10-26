'use strict';

// Runs inside every extension service worker and every extension page (popup,
// options) - registered for both in main.js. Electron implements only part of
// the chrome.* extension API, and a script that touches a missing namespace at
// startup - even just to add a listener - throws and never runs. This fills the
// gaps the bundled extensions hit:
//
// - chrome.storage.sync   aliased onto .local, so settings persist on this machine
// - chrome.cookies        get/getAll answered from the FACEIT session (main.js
//                         limits them to the extension's host permissions)
// - chrome.permissions    reports what the manifest declares
// - chrome.windows        one window, the app's
//
// Preloads run in an isolated world, so the patching itself has to be sent
// into the extension's own world with executeInMainWorld.

const { contextBridge, ipcRenderer } = require('electron');

// The frame preload is registered for the whole session, so it also runs on
// faceit.com itself. Only extension contexts get anything.
const isExtension =
  typeof location === 'undefined' ||
  !location.protocol ||
  location.protocol === 'chrome-extension:';

if (isExtension) {
  try {
    contextBridge.exposeInMainWorld('__fxShell', {
      cookiesGet: (details) => ipcRenderer.invoke('fx:cookies-get', details),
      cookiesGetAll: (details) => ipcRenderer.invoke('fx:cookies-get-all', details),
    });
  } catch {
    // Bridge unavailable - chrome.cookies below falls back to empty answers.
  }
}

function installShims() {
  const chrome = globalThis.chrome;
  if (!chrome || !chrome.runtime) return;

  const bridge = globalThis.__fxShell;
  const manifest = chrome.runtime.getManifest();

  /** Chrome-style API call: callback if given, promise otherwise. */
  const reply = (callback, promiseOrValue) => {
    const promise = Promise.resolve(promiseOrValue);
    if (typeof callback === 'function') {
      promise.then(callback, () => callback(undefined));
      return undefined;
    }
    return promise;
  };

  const fakeEvent = () => {
    const listeners = new Set();
    return {
      addListener: (fn) => listeners.add(fn),
      removeListener: (fn) => listeners.delete(fn),
      hasListener: (fn) => listeners.has(fn),
      hasListeners: () => listeners.size > 0,
    };
  };

  const define = (name, value) => {
    try {
      Object.defineProperty(chrome, name, { value, configurable: true, enumerable: true, writable: true });
    } catch {
      // read-only in this build - leave it
    }
  };

  // storage.sync -> storage.local
  if (chrome.storage && chrome.storage.local && chrome.storage.sync !== chrome.storage.local) {
    try {
      Object.defineProperty(chrome.storage, 'sync', {
        value: chrome.storage.local,
        configurable: true,
        enumerable: true,
        writable: true,
      });
    } catch {
      // leave Electron's own
    }
  }

  if (!chrome.cookies) {
    define('cookies', {
      get: (details, callback) =>
        reply(callback, bridge ? bridge.cookiesGet(details).catch(() => null) : null),
      getAll: (details, callback) =>
        reply(callback, bridge ? bridge.cookiesGetAll(details || {}).catch(() => []) : []),
      set: (_details, callback) => reply(callback, null),
      remove: (_details, callback) => reply(callback, null),
      getAllCookieStores: (callback) => reply(callback, [{ id: '0', tabIds: [] }]),
      onChanged: fakeEvent(),
    });
  }

  if (!chrome.permissions) {
    const declared = new Set(
      [...(manifest.permissions || []), ...(manifest.optional_permissions || [])].filter((p) => !p.includes('://'))
    );
    // Like Chrome: host permissions plus every site a content script runs on.
    // Electron grants all of these up front, so they all count as granted.
    const origins = [
      ...new Set([
        ...(manifest.host_permissions || []),
        ...(manifest.optional_host_permissions || []),
        ...(manifest.permissions || []).filter((p) => p.includes('://') || p === '<all_urls>'),
        ...(manifest.content_scripts || []).flatMap((c) => c.matches || []),
      ]),
    ];
    const granted = (query) =>
      ((query && query.permissions) || []).every((p) => declared.has(p)) &&
      ((query && query.origins) || []).every((o) => origins.includes(o) || origins.includes('<all_urls>'));
    define('permissions', {
      contains: (query, callback) => reply(callback, granted(query)),
      getAll: (callback) => reply(callback, { permissions: [...declared], origins }),
      request: (query, callback) => reply(callback, granted(query)),
      remove: (_query, callback) => reply(callback, false),
      onAdded: fakeEvent(),
      onRemoved: fakeEvent(),
    });
  }

  if (!chrome.windows) {
    const appWindow = () => ({
      id: 1,
      focused: true,
      incognito: false,
      alwaysOnTop: false,
      type: 'normal',
      state: 'normal',
      tabs: [],
    });
    define('windows', {
      WINDOW_ID_NONE: -1,
      WINDOW_ID_CURRENT: -2,
      get: (_id, _info, callback) => reply(typeof _info === 'function' ? _info : callback, appWindow()),
      getCurrent: (_info, callback) => reply(typeof _info === 'function' ? _info : callback, appWindow()),
      getLastFocused: (_info, callback) => reply(typeof _info === 'function' ? _info : callback, appWindow()),
      getAll: (_info, callback) => reply(typeof _info === 'function' ? _info : callback, [appWindow()]),
      create: (_data, callback) => reply(callback, appWindow()),
      update: (_id, _info, callback) => reply(callback, appWindow()),
      remove: (_id, callback) => reply(callback, undefined),
      onCreated: fakeEvent(),
      onRemoved: fakeEvent(),
      onFocusChanged: fakeEvent(),
      onBoundsChanged: fakeEvent(),
    });
  }

  // chrome.identity is deliberately left missing: FACEIT Vision checks for it
  // and shows its own "unsupported" state, which beats a sign-in that fails.
}

if (isExtension) {
  try {
    contextBridge.executeInMainWorld({ func: installShims });
  } catch {
    // Nothing we can do from here; the extension will surface its own error.
  }
}
