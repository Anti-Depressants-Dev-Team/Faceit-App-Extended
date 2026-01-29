using System.Diagnostics;
using Microsoft.UI;
using Microsoft.UI.Windowing;
using Microsoft.UI.Xaml;
using Microsoft.Web.WebView2.Core;
using WinRT.Interop;

namespace FaceitUltimate;

/// <summary>
/// Main window containing the WebView2 browser for Faceit
/// </summary>
public sealed partial class MainWindow : Window
{
    // Extension folder names to create
    private static readonly string[] ExtensionFolders = 
    {
        "faceit-repeek",
        "faceit-predictor", 
        "faceit-forecast",
        "ublock-origin"
    };

    // Latest Chrome UA string to spoof WebView2
    private const string ChromeUserAgent = 
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

    public MainWindow()
    {
        this.InitializeComponent();
        
        // Configure window appearance
        ConfigureWindow();
        
        // Setup extension folders and initialize WebView
        SetupExtensionFoldersAndInitializeWebView();
    }

    /// <summary>
    /// Configure window title bar and appearance
    /// </summary>
    private void ConfigureWindow()
    {
        // Set window title
        Title = "Faceit Ultimate";
        
        // Get AppWindow for customization
        var hwnd = WindowNative.GetWindowHandle(this);
        var windowId = Win32Interop.GetWindowIdFromWindow(hwnd);
        var appWindow = AppWindow.GetFromWindowId(windowId);
        
        if (AppWindowTitleBar.IsCustomizationSupported())
        {
            // Enable custom title bar with dark theme colors
            appWindow.TitleBar.ExtendsContentIntoTitleBar = false;
            appWindow.TitleBar.BackgroundColor = Windows.UI.Color.FromArgb(255, 31, 31, 31);
            appWindow.TitleBar.ForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonBackgroundColor = Windows.UI.Color.FromArgb(255, 31, 31, 31);
            appWindow.TitleBar.ButtonForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonHoverBackgroundColor = Windows.UI.Color.FromArgb(255, 60, 60, 60);
            appWindow.TitleBar.ButtonHoverForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonPressedBackgroundColor = Windows.UI.Color.FromArgb(255, 80, 80, 80);
            appWindow.TitleBar.ButtonPressedForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.InactiveBackgroundColor = Windows.UI.Color.FromArgb(255, 31, 31, 31);
            appWindow.TitleBar.InactiveForegroundColor = Windows.UI.Color.FromArgb(255, 150, 150, 150);
            appWindow.TitleBar.ButtonInactiveBackgroundColor = Windows.UI.Color.FromArgb(255, 31, 31, 31);
            appWindow.TitleBar.ButtonInactiveForegroundColor = Windows.UI.Color.FromArgb(255, 150, 150, 150);
        }

        // Set a reasonable default window size
        appWindow.Resize(new Windows.Graphics.SizeInt32(1400, 900));
    }

    /// <summary>
    /// Create extension folder structure and initialize WebView2
    /// </summary>
    private async void SetupExtensionFoldersAndInitializeWebView()
    {
        try
        {
            // Get app base directory
            var baseDir = AppDomain.CurrentDomain.BaseDirectory;
            var extensionsRoot = Path.Combine(baseDir, "extensions");
            
            // Create extensions folder if missing
            if (!Directory.Exists(extensionsRoot))
            {
                Directory.CreateDirectory(extensionsRoot);
                UpdateStatus("Created extensions folder", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Informational);
            }

            // Create each extension subfolder
            bool allHaveManifest = true;
            List<string> emptyFolders = new();

            foreach (var folderName in ExtensionFolders)
            {
                var folderPath = Path.Combine(extensionsRoot, folderName);
                
                if (!Directory.Exists(folderPath))
                {
                    Directory.CreateDirectory(folderPath);
                }

                // Check if manifest.json exists
                var manifestPath = Path.Combine(folderPath, "manifest.json");
                if (!File.Exists(manifestPath))
                {
                    allHaveManifest = false;
                    emptyFolders.Add(folderName);
                }
            }

            // Update status based on validation
            if (!allHaveManifest)
            {
                UpdateStatus(
                    $"⚠️ Folders created. Please drop extension files into /extensions/ folder and restart. Missing: {string.Join(", ", emptyFolders)}", 
                    Microsoft.UI.Xaml.Controls.InfoBarSeverity.Warning);
            }
            else
            {
                UpdateStatus("Extension folders validated", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Success);
            }

            // Initialize WebView2
            await InitializeWebViewAsync(extensionsRoot);
        }
        catch (Exception ex)
        {
            UpdateStatus($"Error during initialization: {ex.Message}", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Error);
        }
    }

    /// <summary>
    /// Initialize WebView2 with custom environment and settings
    /// </summary>
    private async Task InitializeWebViewAsync(string extensionsRoot)
    {
        try
        {
            UpdateStatus("Initializing WebView2...", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Informational);

            // Initialize WebView2 with default environment
            // WinUI 3's WebView2 uses its own environment management
            await WebView.EnsureCoreWebView2Async();

            // Configure settings
            var settings = WebView.CoreWebView2.Settings;
            settings.UserAgent = ChromeUserAgent;
            settings.IsScriptEnabled = true;
            settings.IsWebMessageEnabled = true;
            settings.AreDefaultScriptDialogsEnabled = true;
            settings.IsStatusBarEnabled = false;
            settings.AreDevToolsEnabled = true; // Enable for debugging, disable in production

            // Handle new window requests (external links)
            WebView.CoreWebView2.NewWindowRequested += OnNewWindowRequested;

            // Load browser extensions
            await LoadExtensionsAsync(extensionsRoot);

            // Navigate to Faceit
            UpdateStatus("Loading Faceit...", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Informational);
            WebView.CoreWebView2.Navigate("https://www.faceit.com/en");

            // Hide status bar after successful load
            WebView.CoreWebView2.NavigationCompleted += (s, e) =>
            {
                if (e.IsSuccess)
                {
                    DispatcherQueue.TryEnqueue(() =>
                    {
                        UpdateStatus("Ready", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Success);
                    });
                }
            };
        }
        catch (Exception ex)
        {
            UpdateStatus($"WebView2 initialization failed: {ex.Message}", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Error);
        }
    }

    /// <summary>
    /// Load browser extensions from the extensions folder
    /// </summary>
    private async Task LoadExtensionsAsync(string extensionsRoot)
    {
        int loadedCount = 0;
        int failedCount = 0;

        foreach (var folderName in ExtensionFolders)
        {
            var folderPath = Path.Combine(extensionsRoot, folderName);
            var manifestPath = Path.Combine(folderPath, "manifest.json");

            if (File.Exists(manifestPath))
            {
                try
                {
                    UpdateStatus($"Loading extension: {folderName}...", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Informational);
                    
                    await WebView.CoreWebView2.Profile.AddBrowserExtensionAsync(folderPath);
                    loadedCount++;
                    
                    UpdateStatus($"✓ Loaded: {folderName}", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Success);
                }
                catch (Exception ex)
                {
                    failedCount++;
                    UpdateStatus($"✗ Failed to load {folderName}: {ex.Message}", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Error);
                }
            }
        }

        if (loadedCount > 0 || failedCount > 0)
        {
            var severity = failedCount > 0 
                ? Microsoft.UI.Xaml.Controls.InfoBarSeverity.Warning 
                : Microsoft.UI.Xaml.Controls.InfoBarSeverity.Success;
            UpdateStatus($"Extensions: {loadedCount} loaded, {failedCount} failed", severity);
        }
    }

    /// <summary>
    /// Handle new window requests - open external links in default browser
    /// </summary>
    private void OnNewWindowRequested(CoreWebView2 sender, CoreWebView2NewWindowRequestedEventArgs args)
    {
        // Cancel the WebView2 new window
        args.Handled = true;

        var uri = args.Uri;
        
        // Open in default system browser
        try
        {
            Process.Start(new ProcessStartInfo
            {
                FileName = uri,
                UseShellExecute = true
            });
        }
        catch (Exception ex)
        {
            UpdateStatus($"Failed to open link: {ex.Message}", Microsoft.UI.Xaml.Controls.InfoBarSeverity.Error);
        }
    }

    /// <summary>
    /// Update the status bar message and severity
    /// </summary>
    private void UpdateStatus(string message, Microsoft.UI.Xaml.Controls.InfoBarSeverity severity)
    {
        DispatcherQueue.TryEnqueue(() =>
        {
            StatusBar.Message = message;
            StatusBar.Severity = severity;
        });
    }
}
