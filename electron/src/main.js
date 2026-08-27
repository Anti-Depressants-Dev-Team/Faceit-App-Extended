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
// The service worker shim in sw-preload.js covers background scripts; content
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

const isDev = !app.isPackaged;

/** @type {BrowserWindow | null} */
let mainWindow = null;
/** @type {WebContentsView | null} */
let siteView = null;

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
    dirs.push(dir);
  }

  return { target, dirs };
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

async function loadExtensions(ses) {
  const { dirs } = prepareExtensions();

  const results = await Promise.allSettled(
    dirs.map((dir) => ses.extensions.loadExtension(dir, { allowFileAccess: true }))
  );

  results.forEach((result, index) => {
    const name = path.basename(dirs[index]);
    if (result.status === 'fulfilled') {
      console.log(`[extensions] loaded ${name} (${result.value.version})`);
    } else {
      console.error(`[extensions] failed ${name}: ${result.reason}`);
    }
  });
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
    }
  };

  mainWindow.webContents.on('before-input-event', handle);
  siteView.webContents.on('before-input-event', handle);
}

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

    // Aliases chrome.storage.sync onto .local inside extension service workers.
    ses.registerPreloadScript({
      id: 'storage-sync-shim',
      type: 'service-worker',
      filePath: path.join(__dirname, 'sw-preload.js'),
    });

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
