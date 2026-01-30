using System.Diagnostics;
using Microsoft.UI;
using Microsoft.UI.Windowing;
using Microsoft.UI.Xaml;
using Microsoft.UI.Xaml.Controls;
using Microsoft.Web.WebView2.Core;
using WinRT.Interop;

namespace FaceitExtended;

/// <summary>
/// Main window containing the WebView2 browser for Faceit
/// </summary>
public sealed partial class MainWindow : Window
{
    // Latest Chrome UA string to spoof WebView2
    private const string ChromeUserAgent = 
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";

    public MainWindow()
    {
        this.InitializeComponent();
        
        // Configure window appearance
        ConfigureWindow();
        
        // Validate extensions and initialize WebView
        // Defer until Loaded to ensure UI (XamlRoot) is ready for error dialogs
        if (Content is FrameworkElement fe)
        {
            fe.Loaded += (s, e) => ValidateAndInitializeAsync();
        }
    }

    /// <summary>
    /// Configure window title bar and appearance
    /// </summary>
    private void ConfigureWindow()
    {
        // Custom title bar
        ExtendsContentIntoTitleBar = true;
        SetTitleBar(AppTitleBar);

        // Get AppWindow for customization
        var hwnd = WindowNative.GetWindowHandle(this);
        var windowId = Win32Interop.GetWindowIdFromWindow(hwnd);
        var appWindow = AppWindow.GetFromWindowId(windowId);
        
        if (AppWindowTitleBar.IsCustomizationSupported())
        {
            // Set caption button colors to match dark theme
            appWindow.TitleBar.ButtonBackgroundColor = Windows.UI.Color.FromArgb(0, 0, 0, 0); // Transparent
            appWindow.TitleBar.ButtonForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonHoverBackgroundColor = Windows.UI.Color.FromArgb(255, 60, 60, 60);
            appWindow.TitleBar.ButtonHoverForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonPressedBackgroundColor = Windows.UI.Color.FromArgb(255, 80, 80, 80);
            appWindow.TitleBar.ButtonPressedForegroundColor = Windows.UI.Color.FromArgb(255, 255, 255, 255);
            appWindow.TitleBar.ButtonInactiveBackgroundColor = Windows.UI.Color.FromArgb(0, 0, 0, 0);
            appWindow.TitleBar.ButtonInactiveForegroundColor = Windows.UI.Color.FromArgb(255, 150, 150, 150);
        }

        // Set a reasonable default window size
        appWindow.Resize(new Windows.Graphics.SizeInt32(1400, 900));
    }

    private void BackButton_Click(object sender, RoutedEventArgs e)
    {
        if (WebView.CanGoBack) WebView.GoBack();
    }

    private void ForwardButton_Click(object sender, RoutedEventArgs e)
    {
        if (WebView.CanGoForward) WebView.GoForward();
    }

    private void RefreshButton_Click(object sender, RoutedEventArgs e)
    {
        WebView.Reload();
    }

    /// <summary>
    /// Validate extensions folder exists and initialize WebView2
    /// </summary>
    private async void ValidateAndInitializeAsync()
    {
        try
        {
            // Get extensions folder path
            var baseDir = AppDomain.CurrentDomain.BaseDirectory;
            var extensionsRoot = Path.Combine(baseDir, "extensions");
            
            // Fatal check: extensions folder must exist (bundled at compile-time)
            if (!Directory.Exists(extensionsRoot))
            {
                await ShowFatalErrorAsync(
                    "Build Error: Extensions Missing",
                    "The extensions folder was not found in the application directory.\n\n" +
                    "This is a build configuration error. The extensions folder should be bundled " +
                    "at compile-time via the project file.\n\n" +
                    $"Expected path: {extensionsRoot}");
                return;
            }

            // Initialize WebView2
            await InitializeWebViewAsync(extensionsRoot);
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"Error during initialization: {ex.Message}");
        }
    }

    /// <summary>
    /// Show a fatal error dialog and prevent further initialization
    /// </summary>
    /// <summary>
    /// Show a fatal error dialog and prevent further initialization
    /// </summary>
    private async Task ShowFatalErrorAsync(string title, string message)
    {
        await ShowMessageAsync(title, message, isFatal: true);
    }

    /// <summary>
    /// Show a message dialog. If fatal, closes the app on dismiss.
    /// </summary>
    private async Task ShowMessageAsync(string title, string message, bool isFatal = false)
    {
        if (Content is not FrameworkElement fe || fe.XamlRoot == null)
        {
            // If XamlRoot is still null (shouldn't happen with Loaded hook), log to debug
            Debug.WriteLine($"[CRITICAL] Cannot show dialog '{title}': XamlRoot is null. Message: {message}");
            if (isFatal) this.Close();
            return;
        }

        var dialog = new ContentDialog
        {
            Title = title,
            Content = new ScrollViewer 
            { 
                Content = new TextBlock { Text = message, TextWrapping = TextWrapping.Wrap },
                MaxHeight = 500
            },
            CloseButtonText = isFatal ? "Close Application" : "OK",
            XamlRoot = fe.XamlRoot
        };

        try 
        {
            await dialog.ShowAsync();
        }
        catch (Exception ex)
        {
             Debug.WriteLine($"Failed to show dialog: {ex.Message}");
        }
        
        if (isFatal)
        {
            this.Close();
        }
    }

    /// <summary>
    /// Initialize WebView2 with custom environment and settings
    /// </summary>
    private async Task InitializeWebViewAsync(string extensionsRoot)
    {
        try
        {
            // Create custom environment with extensions enabled
            // Store profile in %LOCALAPPDATA% to avoid write permission issues in Program Files
            var appData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
            var userDataFolder = Path.Combine(appData, "FaceitExtended", "Profile");
            
            // Ensure directory exists
            Directory.CreateDirectory(userDataFolder);

            var options = new CoreWebView2EnvironmentOptions
            {
                AdditionalBrowserArguments = "--enable-features=msExtensions",
                AreBrowserExtensionsEnabled = true  // Required for AddBrowserExtensionAsync to work
            };
            var environment = await CoreWebView2Environment.CreateWithOptionsAsync(
                browserExecutableFolder: null,
                userDataFolder: userDataFolder,
                options: options);

            // Initialize WebView2 with the custom environment
            await WebView.EnsureCoreWebView2Async(environment);

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
            
            // Update navigation buttons history state
            WebView.CoreWebView2.HistoryChanged += (s, e) =>
            {
                 BackButton.IsEnabled = WebView.CanGoBack;
                 ForwardButton.IsEnabled = WebView.CanGoForward;
            };
            
            // Initial state
            BackButton.IsEnabled = false;
            ForwardButton.IsEnabled = false;

            // Load browser extensions
            await LoadExtensionsAsync(extensionsRoot);

            // Navigate to Faceit
            WebView.CoreWebView2.Navigate("https://www.faceit.com/en");
        }
        catch (Exception ex)
        {
            Debug.WriteLine($"WebView2 initialization failed: {ex.Message}");
        }
    }

    /// <summary>
    /// Load browser extensions from the extensions folder
    /// </summary>
    /// <summary>
    /// Load browser extensions from the extensions folder with diagnostics
    /// </summary>
    private async Task LoadExtensionsAsync(string originalRoot)
    {
        var report = new System.Text.StringBuilder();
        int successCount = 0;
        int failureCount = 0;
        
        // Use LocalAppData to avoid Permission issues in Program Files
        var appData = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        var extensionsRoot = Path.Combine(appData, "FaceitExtended", "InstalledExtensions");
        
        report.AppendLine($"Source: {originalRoot}");
        report.AppendLine($"Target: {extensionsRoot}");

        try
        {
            if (!Directory.Exists(originalRoot))
            {
                 report.AppendLine("[WARN] Source extensions folder missing. Skipping copy.");
            }
            else
            {
                try 
                {
                    // Copy extensions to secure location (overwrite existing)
                    CopyDirectory(originalRoot, extensionsRoot);
                    report.AppendLine("[OK] Copied extensions to LocalAppData.");
                }
                catch (Exception ex)
                {
                    report.AppendLine($"[ERR] Failed to copy extensions: {ex.Message}");
                    // Fallback to original path if copy fails
                    extensionsRoot = originalRoot;
                }
            }

            // Get all subdirectories in the target extensions folder
            // Create target if it doesn't exist (handle empty case)
            if (!Directory.Exists(extensionsRoot)) Directory.CreateDirectory(extensionsRoot);
            
            var extensionDirs = Directory.GetDirectories(extensionsRoot);
            report.AppendLine($"Found {extensionDirs.Length} subdirectories in target.");
            
            if (extensionDirs.Length == 0)
            {
                 // report.AppendLine("[WARN] No extension folders found."); // Silent warn
            }

            foreach (var folderPath in extensionDirs)
            {
                var dirName = Path.GetFileName(folderPath);
                var manifestPath = Path.Combine(folderPath, "manifest.json");
                
                if (!File.Exists(manifestPath))
                {
                    // report.AppendLine($"[SKIP] '{dirName}': Valid manifest.json not found.");
                    continue;
                }

                try
                {
                    await WebView.CoreWebView2.Profile.AddBrowserExtensionAsync(folderPath);
                    successCount++;
                    report.AppendLine($"[OK] Loaded '{dirName}'");
                }
                catch (Exception ex)
                {
                    failureCount++;
                    report.AppendLine($"[ERR] Failed to load '{dirName}': {ex.Message}");
                }
            }
        }
        catch (Exception ex)
        {
            failureCount++;
            report.AppendLine($"[CRITICAL] Error processing extensions: {ex.Message}");
        }

        // If specific failures occurred, show a warning dialog (non-fatal)
        if (failureCount > 0)
        {
            await ShowMessageAsync("Extension Loading Issues", report.ToString(), isFatal: false);
        }
    }

    /// <summary>
    /// Recursively copy directory contents
    /// </summary>
    private void CopyDirectory(string sourceDir, string targetDir)
    {
        Directory.CreateDirectory(targetDir);

        foreach (var file in Directory.GetFiles(sourceDir))
        {
            var destFile = Path.Combine(targetDir, Path.GetFileName(file));
            File.Copy(file, destFile, true);
        }

        foreach (var subDir in Directory.GetDirectories(sourceDir))
        {
            var destDir = Path.Combine(targetDir, Path.GetFileName(subDir));
            CopyDirectory(subDir, destDir);
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
            Debug.WriteLine($"Failed to open link: {ex.Message}");
        }
    }
}

