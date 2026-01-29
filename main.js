const { app, BrowserWindow, session, shell } = require('electron');
const { ElectronBlocker } = require('@cliqz/adblocker-electron');
const fetch = require('cross-fetch');
const path = require('path');
const fs = require('fs');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  // Window settings
  window: {
    width: 1280,
    height: 800,
    backgroundColor: '#1f1f1f',
  },

  // Target URL
  targetUrl: 'https://www.faceit.com/en',

  // Spoofed User Agent (Latest Chrome on Windows)
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',

  // Extensions to load (folder names inside ./extensions)
  extensions: [
    'faceit-repeek',
    'faceit-predictor',
    'faceit-forecast'
  ]
};

// ============================================================================
// GLOBAL REFERENCES
// ============================================================================

let mainWindow = null;
let adblocker = null;

// ============================================================================
// EXTENSION LOADER
// ============================================================================

/**
 * Get the extensions directory path (works in dev and production)
 */
function getExtensionsPath() {
  // In production, extensions are in resources folder
  if (app.isPackaged) {
    return path.join(process.resourcesPath, 'extensions');
  }
  // In development, extensions are in the app root
  return path.join(__dirname, 'extensions');
}

/**
 * Load Chrome extensions from the extensions folder
 */
async function loadExtensions() {
  const extensionsDir = getExtensionsPath();

  console.log('[Extensions] Looking for extensions in:', extensionsDir);

  // Check if extensions directory exists
  if (!fs.existsSync(extensionsDir)) {
    console.warn('[Extensions] Extensions directory not found. Creating it...');
    fs.mkdirSync(extensionsDir, { recursive: true });
    return;
  }

  // Load each configured extension
  for (const extName of CONFIG.extensions) {
    const extPath = path.join(extensionsDir, extName);

    try {
      // Check if extension folder exists
      if (!fs.existsSync(extPath)) {
        console.warn(`[Extensions] ⚠️  Extension "${extName}" not found at: ${extPath}`);
        continue;
      }

      // Check for manifest.json
      const manifestPath = path.join(extPath, 'manifest.json');
      if (!fs.existsSync(manifestPath)) {
        console.warn(`[Extensions] ⚠️  Extension "${extName}" is missing manifest.json`);
        continue;
      }

      // Load the extension
      const extension = await session.defaultSession.loadExtension(extPath, {
        allowFileAccess: true
      });

      console.log(`[Extensions] ✓ Loaded: ${extension.name} (${extName})`);

    } catch (error) {
      console.error(`[Extensions] ✗ Failed to load "${extName}":`, error.message);
    }
  }
}

// ============================================================================
// ADBLOCKER SETUP
// ============================================================================

/**
 * Initialize the adblocker before window creation
 */
async function initializeAdblocker() {
  try {
    console.log('[Adblocker] Initializing from prebuilt lists...');

    adblocker = await ElectronBlocker.fromPrebuiltAdsAndTracking(fetch);

    console.log('[Adblocker] ✓ Adblocker initialized successfully');
    return adblocker;

  } catch (error) {
    console.error('[Adblocker] ✗ Failed to initialize:', error.message);
    return null;
  }
}

// ============================================================================
// WINDOW CREATION
// ============================================================================

/**
 * Create the main browser window
 */
async function createWindow() {
  // Spoof User Agent globally for all requests
  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = CONFIG.userAgent;
    callback({ requestHeaders: details.requestHeaders });
  });

  // Also set the User Agent on the session level
  session.defaultSession.setUserAgent(CONFIG.userAgent);

  // Create the browser window
  mainWindow = new BrowserWindow({
    width: CONFIG.window.width,
    height: CONFIG.window.height,
    backgroundColor: CONFIG.window.backgroundColor,
    autoHideMenuBar: true,  // Hide menu bar
    show: false,            // Don't show until ready
    webPreferences: {
      plugins: true,        // Enable plugins (required for some extensions)
      webSecurity: true,    // Keep web security enabled
      contextIsolation: true,
      nodeIntegration: false,
      // Spoof User Agent
      userAgent: CONFIG.userAgent
    }
  });

  // Remove the application menu entirely
  mainWindow.setMenu(null);

  // Enable adblocker for this session
  if (adblocker) {
    adblocker.enableBlockingInSession(session.defaultSession);
    console.log('[Adblocker] ✓ Blocking enabled for main window');
  }

  // Handle external link navigation
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Open external links in default browser
    if (isExternalUrl(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  // Also handle navigation within the same window
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (isExternalUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    console.log('[Window] ✓ Main window displayed');
  });

  // Load the target URL
  console.log('[Window] Loading:', CONFIG.targetUrl);
  await mainWindow.loadURL(CONFIG.targetUrl);

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

/**
 * Check if a URL is external (not faceit.com)
 * OAuth/login URLs are kept internal so redirects work properly
 */
function isExternalUrl(url) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();
    const pathname = parsedUrl.pathname.toLowerCase();

    // Allow faceit.com and its subdomains
    if (hostname === 'faceit.com' || hostname.endsWith('.faceit.com')) {
      return false;
    }

    // CRITICAL: Keep OAuth/authentication URLs internal for proper redirect
    const authDomains = [
      'steamcommunity.com',
      'steampowered.com',
      'accounts.google.com',
      'appleid.apple.com',
      'discord.com',
      'twitch.tv'
    ];

    for (const domain of authDomains) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        // Check if it's an auth/login path
        if (pathname.includes('/openid') ||
          pathname.includes('/login') ||
          pathname.includes('/oauth') ||
          pathname.includes('/authorize') ||
          pathname.includes('/auth') ||
          pathname.includes('/signin') ||
          pathname.includes('/v2/oauth') ||
          hostname.includes('steamcommunity')) {
          console.log('[Auth] Keeping internal for OAuth:', url);
          return false;
        }
      }
    }

    // Allow faceit-related CDNs and services
    const allowedDomains = [
      'faceit.com',
      'faceit-cdn.net',
      'faceit.gg',
      'googleapis.com',
      'gstatic.com',
      'google.com',
      'cloudflare.com'
    ];

    for (const domain of allowedDomains) {
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        return false;
      }
    }

    // Everything else is external
    return true;

  } catch (error) {
    return false;
  }
}

// ============================================================================
// APP LIFECYCLE
// ============================================================================

// Ensure single instance
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  console.log('[App] Another instance is already running. Quitting...');
  app.quit();
} else {
  // Focus existing window if second instance is launched
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  // App initialization
  app.whenReady().then(async () => {
    console.log('============================================');
    console.log('  FACEIT Extended - Starting...');
    console.log('============================================');

    // Step 1: Initialize adblocker (before anything else)
    await initializeAdblocker();

    // Step 2: Load Chrome extensions
    await loadExtensions();

    // Step 3: Create the main window
    await createWindow();

    console.log('============================================');
    console.log('  FACEIT Extended - Ready!');
    console.log('============================================');
  });

  // Quit when all windows are closed (except on macOS)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // macOS: Re-create window when dock icon is clicked
  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      await createWindow();
    }
  });
}
