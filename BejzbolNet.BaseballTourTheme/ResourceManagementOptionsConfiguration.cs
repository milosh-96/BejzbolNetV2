using BejzbolNet.BaseballTourTheme.Constants;
using Microsoft.Extensions.Options;
using OrchardCore.ResourceManagement;

namespace BejzbolNet.BaseballTourTheme;
public class ResourceManagementOptionsConfiguration : IConfigureOptions<ResourceManagementOptions>
{
    private static readonly ResourceManifest _manifest;

    static ResourceManagementOptionsConfiguration()
    {
        _manifest = new();
        _manifest
            .DefineStyle(ResourceNames.TailwindCss)
            .SetUrl("~/BejzbolNet.BaseballTourTheme/css/app.css")
            .SetVersion("3.4.10");

        _manifest
            .DefineScript(ResourceNames.LucideIcons)
            .SetCdn("https://unpkg.com/lucide@latest")
            .SetVersion("0.553.0");
    }

    public void Configure(ResourceManagementOptions options)
    {
        options.ResourceManifests.Add(_manifest);
    }
}
