// Content-script loader. Manifest content scripts are classic scripts, so this
// file ships as-is (it lives in public/ and is never bundled): the bundler's
// dynamic-import helpers use `import.meta`, which is a syntax error here.
(() => {
  const extension = typeof browser !== 'undefined' ? browser : chrome;
  let started = false;
  let storageChanged = false;

  const start = () => {
    if (started) return;
    started = true;

    // FACEIT's own React reconciler throws these when our nodes sit in its
    // tree. Only filter them while the extension is actually mounted.
    window.addEventListener('unhandledrejection', (event) => {
      const message = String(event.reason && event.reason.message || '').toLowerCase();
      if (message.includes('insertbefore') || message.includes('not a child') || message.includes('dom manipulation')) event.preventDefault();
    });

    import(extension.runtime.getURL('src/pages/contentApp/index.js')).catch((error) => {
      console.error('[FACEIT Extender] Failed to load the content app:', error);
    });
  };

  // When disabled, leave the React/query/i18n bundle unloaded. Keep this tiny
  // listener so enabling the extension from its popup starts it immediately.
  extension.storage.onChanged.addListener((changes, area) => {
    if (area !== 'local' || !('isAppEnabled' in changes)) return;
    storageChanged = true;
    if (changes.isAppEnabled.newValue !== false) start();
  });

  extension.storage.local.get('isAppEnabled').then((values) => {
    if (!storageChanged && values.isAppEnabled !== false) start();
  }).catch(() => {
    if (!storageChanged) start();
  });
})();
