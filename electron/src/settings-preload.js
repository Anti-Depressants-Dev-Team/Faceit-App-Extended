'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('settingsApi', {
  /** Every bundled extension with its on/off state. */
  list: () => ipcRenderer.invoke('ext:list'),

  /** Turn an extension on or off. Resolves with the updated list. */
  setEnabled: (key, enabled) => ipcRenderer.invoke('ext:set-enabled', key, enabled),

  /** Clear an extension's saved settings. Resolves with {ok, list?, error?}. */
  reset: (key) => ipcRenderer.invoke('ext:reset', key),

  /**
   * Show an extension's own page in the embedded panel.
   * @param {'popup'|'options'} which
   * @returns {Promise<{ok: boolean, reason?: string}>}
   */
  showPage: (key, which) => ipcRenderer.invoke('ext:show-page', key, which),
  hidePage: () => ipcRenderer.send('ext:hide-page'),
  reloadPage: () => ipcRenderer.send('ext:reload-page'),

  /** Where the embedded panel should sit, in window coordinates. */
  setPanelBounds: (rect) => ipcRenderer.send('ext:panel-bounds', rect),

  /** Reload faceit.com in the main window. */
  reloadSite: () => ipcRenderer.send('ext:reload-site'),

  onChanged: (listener) => {
    ipcRenderer.on('ext:changed', (_event, list) => listener(list));
  },
  onPageError: (listener) => {
    ipcRenderer.on('ext:page-error', (_event, message) => listener(message));
  },
});
