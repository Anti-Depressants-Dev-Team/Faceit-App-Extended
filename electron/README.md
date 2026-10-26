# FACEIT Extended - Electron build

An Electron port of the WinUI 3 / WebView2 app in the repo root. Same idea: a
FACEIT-only browser window with the community extensions preloaded, wrapped in a
custom title bar.

## Running

```bash
npm install
npm start
```

If `npm install` warns that Electron's install script was blocked (npm 11
blocks postinstall scripts by default), approve it once:

```bash
npm install-scripts approve electron
```

## Packaging

```bash
npm run dist
```

Produces an NSIS installer in `dist/` - the replacement for `setup.iss`. The
`extensions/` folder from the repo root is copied in as an extra resource.

## Releasing

CI does the build. Bump the version, tag it, push:

```bash
npm version patch
git push origin main --tags
```

`.github/workflows/release.yml` builds on `windows-latest` and uploads the
installer plus `latest.yml` to a **draft** GitHub release. Publishing that
release is what makes existing installs see the update - nothing ships until
you press the button. `.github/workflows/build.yml` runs on every push and PR
touching `electron/` or `extensions/`: it installs, checks the sources parse,
packages, and asserts the extensions actually made it into `resources/`.

## Auto update

`electron-updater` checks the GitHub releases of
`Anti-Depressants-Dev-Team/Faceit-App-Extended` at startup and every 6 hours,
configured by `build.publish` in `package.json`. Downloads happen quietly in the
background; when one finishes, a small Update button appears in the title bar
that restarts into the new version. Ignore it and the update installs on quit
anyway. Failures (offline, no release yet, rate limited) are logged and
otherwise ignored.

It is inert in development - `npm start` has no version to update from - so it
only does anything in an installed build.

Two things to know:

- **NSIS only.** Updates work for installed builds, not for a copied
  `win-unpacked` folder.
- **The build is unsigned.** Updates still install, but Windows SmartScreen will
  warn on the first install until the app builds reputation. Signing needs a
  code-signing certificate wired into the release workflow.

## Layout

| File | Role |
| --- | --- |
| `src/main.js` | Window, session, extensions, settings window, ad blocking, updates, IPC |
| `src/preload.js` | `window.shellApi` bridge for the title bar |
| `src/settings-preload.js` | `window.settingsApi` bridge for the extensions window |
| `src/extension-preload.js` | Fills in missing `chrome.*` APIs for extension workers and pages |
| `src/renderer/index.html` etc. | The title bar (`shell.*`) |
| `src/renderer/settings.*` | The extensions window |

The window is a frameless `BrowserWindow` whose own web contents render *only*
the 40px title bar; faceit.com lives in a `WebContentsView` positioned below it.
Native caption buttons are drawn by `titleBarOverlay`, so Windows 11 Snap
Layouts still work on the maximize button - the rest of the bar is a
`-webkit-app-region: drag` surface.

The bar itself is deliberately minimal: three flat nav keys, no wordmark, no
branding, and an extensions button on the right. Page loading shows as a
hairline sweeping along the bottom edge rather than a spinner, and an Update
button appears only when there is one.

## Extensions window

The puzzle-piece button in the title bar (or `Ctrl+,`) opens a separate
window listing every bundled extension:

- **On/off switch** per extension. Turning one off unloads it from the session
  and reloads faceit.com so its content scripts are gone; turning it on loads it
  again. The choice is saved to `%APPDATA%/faceit-extended/extension-settings.json`
  (a list of the folders that are off - anything new defaults to on).
- **The extension's own settings page** embedded on the right - its toolbar
  popup ("Quick settings") and, where it has one, its options page ("All
  options"). This is the UI Electron otherwise has no toolbar for. It is a
  `WebContentsView` in the FACEIT session, laid over a box the renderer reports;
  narrow popups are centred and popups wider than the box are zoomed out to fit.
  `F12` opens DevTools for whichever page is showing.
- **Reset data** clears the extension's `chrome.storage` and origin storage,
  then restarts it. To get a script context inside the extension, every copied
  extension gets an empty `fx-blank.html` written next to its manifest.
- Warnings for anything known not to work inside Electron.

## Bundled extensions

| Folder | Extension | Store id |
| --- | --- | --- |
| `faceit-ext` | EXT - Faceit Intelligence | `ikkiomngodfmfdmeomohmjeobdgpholf` |
| `faceit-extender` | Faceit-Extender | `agndfoikbihjcifcfnnbiffconjgofoe` |
| `faceit-forecast` | FACEIT Forecast | `mpkkcddegpblmobincjkbpgfcbejjbcp` |
| `faceit-mappio` | FACEIT Mappio | |
| `faceit-predictor` | FACEIT CS2 Predictor | |
| `faceit-repeek` | Repeek (formerly FACEIT Enhancer) | `mokknliiomknodkdmpcellamkopbdmao` |
| `faceit-tapit` | Tapit | `jpkfehcmmaoiljfcemkihedeckdmcece` |
| `faceit-vision` | FACEIT Vision | `kbjbhonnpkijdahiiddeihbolbdjbdnm` |

To update one, download its CRX from the Chrome Web Store
(`https://clients2.google.com/service/update2/crx?response=redirect&prodversion=138.0.0.0&acceptformat=crx2,crx3&x=id%3D<ID>%26uc`),
unzip it (CRX files are zips with a header; `unzip` handles them) and replace
the folder.

## How extensions load

Extensions are copied from `../extensions` into
`%APPDATA%/faceit-extended/extensions` on every launch, patched for Electron,
then loaded into the persistent `persist:faceit` session. **The copies are
patched, never the files in this repo.**

Electron implements a subset of the Chrome extension APIs. What that costs here:

- **`chrome.storage.sync` does not work.** Several extensions use it, so
  `src/main.js` rewrites `.storage.sync` -> `.storage.local` (and the
  `storageType: "sync"` default inside Repeek's bundled `webext-options-sync`)
  in the copied files. Settings persist per machine instead of per Google
  account, which is what you want for a desktop app anyway.
- **Missing namespaces crash scripts at startup.** A background script that
  so much as adds a listener to an API Electron lacks throws and never runs
  (FACEIT Vision reads `chrome.windows`, EXT and Repeek read
  `chrome.permissions`). `src/extension-preload.js` runs in every extension
  service worker and extension page and, via `contextBridge.executeInMainWorld`,
  adds:
  - `chrome.storage.sync` aliased to `.local`
  - `chrome.permissions` reporting what the manifest declares (host permissions
    plus content script sites, as Chrome does)
  - `chrome.windows` describing the one app window
  - `chrome.cookies.get/getAll`, answered by `main.js` from the FACEIT session,
    and only for URLs inside the calling extension's host permissions.
    Faceit-Extender reads the FACEIT login cookie this way.

  The page preload is registered for the whole session, so it checks for a
  `chrome-extension:` origin first and does nothing on faceit.com.
- **No `chrome.identity`.** FACEIT Vision's own sign-in needs it; Vision detects
  that and shows its "unsupported" state. Everything else in Vision works.
- **uBlock Origin is not loaded.** It is Manifest V2 and depends on
  `chrome.webNavigation`, `chrome.contextMenus`, `chrome.privacy` and the badge
  APIs, none of which Electron implements - its background page throws during
  startup, so loading it only produces console noise. Ad blocking is handled
  natively instead, see below.
- **No extension toolbar.** Electron renders no browser action UI; the
  extensions window shows each popup and options page instead (see above).

Content scripts and MV3 service workers run normally - all eight extensions
load and initialise without errors.

## Ad blocking

`@ghostery/adblocker-electron` blocks ads and trackers at the network layer,
replacing uBlock Origin. It filters every request in the session, so it does not
depend on the extension APIs Electron is missing.

The compiled filter engine is cached at
`%APPDATA%/faceit-extended/adblocker-engine.bin` (~6.5 MB), so only the first
launch needs the network. If that fetch fails the app still starts - just
without blocking - and retries next launch.

## Behaviour differences from the WinUI build

- Login popups (faceit, steamcommunity, steampowered, accounts.google) open as
  in-app child windows instead of being punted to the system browser, so Steam
  login works without leaving the app. Every other external link still opens in
  the default browser.
- Window size, position and maximized state persist between runs.
- Keyboard: `F5` / `Ctrl+R` reload, `Ctrl+Shift+R` hard reload, `Alt+Left` /
  `Alt+Right` navigate, `F12` toggles DevTools.
- Single-instance: launching again focuses the existing window.
