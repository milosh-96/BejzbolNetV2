using Microsoft.Extensions.DependencyInjection;
using OrchardCore.Modules;

namespace BejzbolNet.BaseballTourTheme;

public sealed class Startup : StartupBase
{
    public override void ConfigureServices(IServiceCollection services)
    {
        services.AddResourceManagement().ConfigureOptions<ResourceManagementOptionsConfiguration>();
    }
}
