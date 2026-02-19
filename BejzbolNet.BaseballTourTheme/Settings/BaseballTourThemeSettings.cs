using OrchardCore.ContentManagement;
using OrchardCore.Media.Fields;

namespace BejzbolNet.BaseballTourTheme.Settings;
public class BaseballTourThemeSettings : ContentPart
{
    public MediaField SiteLogo { get; set; } = new();
}
