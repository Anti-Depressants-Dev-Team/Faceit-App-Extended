# FACEIT Extended

An Electron wrapper for FACEIT with Chrome extension support and built-in ad-blocking.

## Features

- 🎮 Native-like FACEIT experience
- 🧩 Chrome Extension support (FACEIT Repeek, Predictor, Forecast)
- 🚫 Built-in ad and tracker blocking
- 🔗 External links open in default browser
- 🖥️ Spoofed User Agent for extension compatibility

## Quick Start

```bash
# Install dependencies
npm install

# Run in development
npm start

# Build for production
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```

## Extension Setup

Extensions must be placed in the `extensions/` folder with the following structure:

```
Faceit-App-Extended/
├── main.js
├── package.json
└── extensions/
    ├── faceit-repeek/
    │   ├── manifest.json
    │   ├── background.js
    │   └── ... (other extension files)
    ├── faceit-predictor/
    │   ├── manifest.json
    │   └── ...
    └── faceit-forecast/
        ├── manifest.json
        └── ...
```

### How to Add Extensions

1. **Download the extension** from the Chrome Web Store or GitHub
2. **Extract the extension** (if it's a `.crx` file, rename to `.zip` and extract)
3. **Copy the entire folder** into `extensions/` with the correct name
4. **Verify** the folder contains a `manifest.json` file

### Finding Extension Files

For extensions from the Chrome Web Store:
1. Install the extension in Chrome
2. Go to `chrome://extensions`
3. Enable "Developer mode"
4. Find the extension ID
5. Navigate to `%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions\{extension-id}\{version}`
6. Copy the contents to the appropriate folder

## Configuration

Edit `main.js` to customize:

```javascript
const CONFIG = {
  window: {
    width: 1280,    // Window dimensions
    height: 800,
    backgroundColor: '#1f1f1f'
  },
  targetUrl: 'https://www.faceit.com/en',
  extensions: [
    'faceit-repeek',
    'faceit-predictor',
    'faceit-forecast'
  ]
};
```

## Troubleshooting

### Extensions not loading
- Ensure each extension folder has a valid `manifest.json`
- Check the console for error messages (`View > Toggle Developer Tools`)
- Verify the extension is compatible with Manifest V2/V3

### User Agent issues
The app spoofs Chrome's User Agent to ensure extensions work correctly. This is automatic.

### External links
Steam profiles and other external links automatically open in your default browser.
