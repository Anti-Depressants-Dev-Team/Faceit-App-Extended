'use strict';

// Runs inside every extension service worker (Electron 35+ service-worker
// preload). Electron implements chrome.storage.local but not .sync, and reading
// chrome.storage.sync throws outright - so alias it onto local. Extension
// settings then persist locally instead of following a Google account, which is
// the right behaviour for a single-machine desktop app anyway.
try {
  const storage = globalThis.chrome && globalThis.chrome.storage;
  if (storage && storage.local) {
    const descriptor = Object.getOwnPropertyDescriptor(storage, 'sync');
    const missing = !descriptor || typeof descriptor.get === 'function';
    if (missing) {
      Object.defineProperty(storage, 'sync', {
        value: storage.local,
        configurable: true,
        enumerable: true,
        writable: true,
      });
    }
  }
} catch {
  // Nothing we can do from here; the extension will surface its own error.
}
