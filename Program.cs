using Microsoft.UI.Dispatching;
using Microsoft.UI.Xaml;
using Microsoft.Windows.AppLifecycle;
using Microsoft.Windows.ApplicationModel.DynamicDependency;
using System.Runtime.InteropServices;

namespace FaceitUltimate;

/// <summary>
/// Program entry point for unpackaged WinUI 3 app
/// </summary>
public static class Program
{
    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    private static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);
    
    private const uint MB_OK = 0x00000000;
    private const uint MB_ICONERROR = 0x00000010;

    [STAThread]
    static int Main(string[] args)
    {
        // Initialize Windows App SDK for unpackaged deployment
        // This MUST be called before any other Windows App SDK APIs
        try
        {
            Bootstrap.Initialize(0x00010006);  // Windows App SDK 1.6
        }
        catch (Exception ex)
        {
            // Windows App SDK initialization failed
            MessageBox(IntPtr.Zero,
                $"Windows App SDK initialization failed.\n\nError: {ex.Message}\n\n" +
                "Please install the Windows App SDK runtime from:\n" +
                "https://learn.microsoft.com/windows/apps/windows-app-sdk/downloads",
                "Faceit Ultimate - Startup Error",
                MB_OK | MB_ICONERROR);
            return -1;
        }

        try
        {
            // Initialize COM for WinUI
            WinRT.ComWrappersSupport.InitializeComWrappers();
            
            // Check if this is the first instance
            bool isRedirect = DecideRedirection().GetAwaiter().GetResult();
            if (!isRedirect)
            {
                Application.Start((p) =>
                {
                    var context = new DispatcherQueueSynchronizationContext(DispatcherQueue.GetForCurrentThread());
                    System.Threading.SynchronizationContext.SetSynchronizationContext(context);
                    new App();
                });
            }
        }
        finally
        {
            // Shutdown Windows App SDK
            Bootstrap.Shutdown();
        }

        return 0;
    }

    private static async Task<bool> DecideRedirection()
    {
        bool isRedirect = false;
        
        AppActivationArguments args = AppInstance.GetCurrent().GetActivatedEventArgs();
        
        try
        {
            AppInstance keyInstance = AppInstance.FindOrRegisterForKey("FaceitUltimate");
            
            if (keyInstance.IsCurrent)
            {
                keyInstance.Activated += OnActivated;
            }
            else
            {
                isRedirect = true;
                await keyInstance.RedirectActivationToAsync(args);
            }
        }
        catch
        {
            // Ignore activation errors
        }
        
        return isRedirect;
    }

    private static void OnActivated(object? sender, AppActivationArguments args)
    {
        // Handle additional activations (not needed for this app)
    }
}
