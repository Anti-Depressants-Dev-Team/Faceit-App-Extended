'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('shellApi', {
  /** @param {'back'|'forward'|'reload'|'stop'|'home'} command */
  send: (command) => ipcRenderer.send('nav:command', command),

  /** Current navigation state, for the first paint. */
  query: () => ipcRenderer.invoke('nav:query'),

  /** @param {(state: {canGoBack:boolean,canGoForward:boolean,loading:boolean,url:string}) => void} listener */
  onState: (listener) => {
    ipcRenderer.on('nav:state', (_event, state) => listener(state));
  },

  /** @param {(focused: boolean) => void} listener */
  onFocus: (listener) => {
    ipcRenderer.on('window:focus', (_event, focused) => listener(focused));
  },

  /** @param {(version: string) => void} listener */
  onUpdateReady: (listener) => {
    ipcRenderer.on('update:ready', (_event, version) => listener(version));
  },

  /** Restart into the downloaded update. */
  installUpdate: () => ipcRenderer.send('update:install'),
});
