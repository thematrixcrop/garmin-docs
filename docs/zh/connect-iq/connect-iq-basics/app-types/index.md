---
title: "应用类型"
---
<a id="app-types"></a>

# 应用类型

![](/connect-iq/resources/programmers-guide/cyclist-monkey.png)

每个 Connect IQ 应用都必须声明应用类型。应用类型决定应用运行时的使用场景和能力边界。Connect IQ 系统提供五种应用类型：

- [表盘](#watch-faces)：Garmin 可穿戴设备的主屏幕，可以是简单的时钟，也可以显示数十项健康与健身数据。

- [数据字段](#data-fields)：添加到 Garmin 活动体验中的插件，用于计算新指标或将新数据带入训练。

- [小工具](#widgets)：可从主屏幕启动的小型应用，用于快速查看信息。

- [设备应用](#device-apps)：功能最完整的应用类型，可全面访问系统。

- [音频内容提供商](#audio-content-providers)：音乐设备上媒体播放器的插件，用于连接媒体播放器与第三方内容服务。


## API 和应用类型

应用类型定义了应用所处的用户场景。例如，表盘在低功耗模式下运行，因此受到许多限制。为强制执行这些限制，Connect IQ 虚拟机会根据应用类型限制可用的 API。

| 模块名称 | 数据字段 | 表盘 | 小工具 | 应用 | 音频内容提供商 | API 级别 |
| --- | --- | --- | --- | --- | --- | --- |
| [Toybox.Activity](/connect-iq/api-docs/Toybox/Activity/) | ✓ |  |  | ✓ | ✓ | 1.0.0 |
| [Toybox.ActivityMonitor](/connect-iq/api-docs/Toybox/ActivityMonitor/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/)\* | ✓ |  |  |  |  | 5.2.0 |
| [Toybox.ActivityRecording](/connect-iq/api-docs/Toybox/ActivityRecording/)\* |  |  |  | ✓ |  | 1.0.0 |
| [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/)\* | ✓ |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Application](/connect-iq/api-docs/Toybox/Application/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.4.0 |
| [Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.4.0 |
| [Toybox.Attention](/connect-iq/api-docs/Toybox/Attention/) | ✓ |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Authentication](/connect-iq/api-docs/Toybox/Authentication/) | ✓ | ✓ | ✓ | ✓ | ✓ | 3.3.0 |
| [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 2.3.0 |
| [Toybox.BluetoothLowEnergy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/)\* |  | ✓ | ✓ | ✓ | ✓ | 3.1.0 |
| [Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/)\* | ✓\*\* |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Complications](/connect-iq/api-docs/Toybox/Complications/)\* |  | ✓ |  | ✓ | ✓ | 4.1.0 |
| [Toybox.Cryptography](/connect-iq/api-docs/Toybox/Cryptography/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 3.0.0 |
| [Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/)\* | ✓ |  |  | ✓ | ✓ | 1.3.0 |
| [Toybox.Graphics](/connect-iq/api-docs/Toybox/Graphics/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Lang](/connect-iq/api-docs/Toybox/Lang/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Math](/connect-iq/api-docs/Toybox/Math/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Media](/connect-iq/api-docs/Toybox/Media/) |  |  |  |  | ✓ | 3.0.0 |
| [Toybox.Notifications](/connect-iq/api-docs/Toybox/Notifications/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 5.1.0 |
| [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)\* |  |  | ✓ | ✓ | ✓ | 2.2.0 |
| [Toybox.PersistedLocations](/connect-iq/api-docs/Toybox/PersistedLocations/)\* |  |  |  | ✓ | ✓ | 1.0.0 |
| [Toybox.Position](/connect-iq/api-docs/Toybox/Position/)\* |  |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Sensor](/connect-iq/api-docs/Toybox/Sensor/)\* |  |  | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 2.1.0 |
| [Toybox.SensorLogging](/connect-iq/api-docs/Toybox/SensorLogging/)\* |  |  |  | ✓ | ✓ | 2.3.0 |
| [Toybox.StringUtil](/connect-iq/api-docs/Toybox/StringUtil/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.3.0 |
| [Toybox.System](/connect-iq/api-docs/Toybox/System/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.3.0 |
| [Toybox.Test](/connect-iq/api-docs/Toybox/Test/) | ✓ | ✓ | ✓ | ✓ | ✓ | 2.1.0 |
| [Toybox.Time](/connect-iq/api-docs/Toybox/Time/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Timer](/connect-iq/api-docs/Toybox/Timer/) |  | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.UserProfile](/connect-iq/api-docs/Toybox/UserProfile/)\* | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) | ✓ | ✓ | ✓ | ✓ | ✓ | 1.0.0 |
| [Toybox.Weather](/connect-iq/api-docs/Toybox/Weather/) | ✓ | ✓ | ✓ | ✓ | ✓ | 3.2.0 |

*\* 需要应用权限*

*\*\* API 级别 5.0.0 引入数据字段中的通信支持*

如果应用请求了该应用类型不在列表中的 Toybox 模块，就会产生 *Symbol Not Found* 错误。

<a id="watch-faces"></a>

## 表盘

表盘是一种特殊的应用类型，显示在 Garmin 可穿戴设备的主屏幕上。它受到限制，以尽量减少对设备电池续航时间的影响。

表盘会持续在设备上运行，因此最容易影响功耗。设计不佳、绘制耗时过长的表盘会显著缩短可穿戴设备的电池续航时间。

由于电池续航方面的考虑，表盘在系统中可访问的 API 最少。它可以访问图形、位图、字体、当前活动跟踪状态、当前电池状态和用户活动资料，但不能访问罗盘、GPS 或其他传感器。

如果使用自定义字体显示数字，请使用过滤选项，仅加载必要的字形。这样可以节省内存，用于显示更多图形。

### 表盘休眠

表盘大部分时间处于“睡眠模式”。在该模式下，表盘每分钟最多更新一次，且不能使用计时器或动画。用户抬腕查看时，表盘会退出睡眠模式，并调用 [WatchFace.onExitSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onExitSleep-instance_function)。之后表盘会每秒更新一次，并允许使用计时器和动画，直到调用 [WatchFace.onEnterSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onEnterSleep-instance_function) 再次进入睡眠模式。

### 表盘委托

*自 API 级别 2.3.0*

[WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) 向表盘提供来自系统的输入。它应像其他应用类型的输入委托一样，作为 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) 返回数组的第二个元素。目前，它仅用于报告支持每秒更新的表盘是否超出功耗预算。如果一分钟内超出执行预算，系统会调用 [WatchFaceDelegate.onPowerBudgetExceeded()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPowerBudgetExceeded-instance_function) 回调，并提供表盘的执行时间及超出的限制。

<a id="data-fields"></a>

## 数据字段

数据字段允许客户和第三方开发者编写额外的指标和数据，并将其显示在 Garmin 活动中。目标是让用户可以根据活动数据快速创建数据字段，同时也让开发者能够自定义呈现方式。

数据字段可以显示在设备已支持的活动中。它们可以基于已经记录的数据计算新指标。由于数据字段嵌入现有活动，最好使用与设备原生数据字段相同的字体和格式。简单布局会自动呈现原生外观，并适配所有数据屏幕布局。如果要自定义数据字段，例如用位图替代数字值，则必须确保它在单字段、双字段、三字段等布局中都能正确缩放。

### 数据字段和简单数据字段

数据字段的基类是 [WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/)。该类继承自 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)，在许多方面与其他视图对象相似。每次数据字段需要更新时，系统都会调用 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)。

在 Garmin 活动中，用户可以控制数据页面布局，也就是显示一个、两个、三个或更多字段。Connect IQ 数据字段必须适配所有这些布局，开发者可以使用模拟器测试其在设备支持的各种布局中的显示效果。

许多开发者只想显示一个值，而不想处理数据字段绘制的全部复杂性。这时可以使用 [WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/)。简单数据字段会处理不同尺寸字段的绘制，开发者只需实现 [DataField.compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function)。该方法会接收包含当前活动信息的 [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) 对象。

只要可能，就应使用 [WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/)，以确保数据字段具有其他 Garmin 数据字段的原生外观。Connect IQ 会尽量使用合适的字体和布局显示数据。

下面是一个“啤酒”数据字段示例，用于显示训练期间消耗的啤酒数量：

```typescript
using Toybox.Application;
using Toybox.WatchUi;

class BeerView extends WatchUi.SimpleField
{
    function initialize() {
        units = "beers";
    }

    function compute(info) {
        return info.calories / 150; // Calories in average bottle of beer
    }
}

class BeersEarned extends Application.AppBase
{
    function getInitialView() {
        return new BeerView();
    }
}
```

### 模拟活动

要在模拟器中测试数据字段，请单击 *Simulation* 菜单，选择 *FIT Data*，然后选择 *Simulate*。模拟器会生成随机但有效的数据。也可以选择 *Simulation > FIT Data > Playback File...*，使用预先录制的 FIT 文件模拟活动。

<a id="widgets"></a>

## 小工具

小工具是轻量级应用，可以为用户提供一目了然的信息。信息可以来自云服务、内置传感器或其他 Connect IQ API。小工具可以从可穿戴设备主屏幕上的页面轮播启动，也可以从自行车电脑和户外手持设备的侧边视图启动。与设备应用不同，小工具会在一段时间没有活动后超时，也不能记录活动，但可以随时启动。

### 基础视图和小工具轮播

在可穿戴设备上，表盘是小工具轮播中的主屏幕。用户可以使用上下按键（按键设备）或上下滑动（触摸屏设备）浏览小工具。

打开小工具时，会显示 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) 返回的初始视图。由于上下输入用于小工具导航，显示基础视图时不会接收上下按键或上下滑动事件。通过 [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 从基础视图推入的其他视图不受这些输入限制。

小工具轮播中的所有视图都应支持系统菜单，以便用户执行菜单操作。对于小工具，系统菜单的第一项是查看小工具菜单的选项。用户选择该项后，系统会调用小工具的 [BehaviorDelegate.onMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onMenu-instance_function)。

### 速览

*自 API 级别 3.1.0*

fēnix® 6 将小工具的信息展示从页面轮播改为列表。每个列表项提供一小块区域显示信息。用户选择列表项后，会启动完整的小工具。在这种启动场景下，小工具基础视图不受常规输入限制。

速览视图运行在受限的运行时环境中，可用内存和权限更少，并且不接收任何输入。

启动小工具时，可以检查 `DeviceInfo` 是否定义了 `isGlanceModeEnabled`，并读取其值。如果启用了速览模式，可以直接进入小工具的交互部分；否则应启动基础视图。

更多信息请参阅[速览](/connect-iq/core-topics/glances/#glances)一节。

### 设计小工具

小工具应同时设计速览视图和基础视图，二者都应提供所呈现数据的简要摘要。如果用户执行了表示想查看更多信息的操作（例如按下开始按钮或触摸屏幕），小工具应推入一个视图，让用户可以浏览完整信息。

<a id="device-apps"></a>

## 设备应用

设备应用是功能最强大的应用类型，为开发者提供最大的灵活性和可定制性。它们也能访问最多的设备功能，例如 ANT+ 传感器、加速度计，以及读取和记录 FIT 文件。

每组可穿戴产品都面向不同用户，从耐力跑者、铁人三项运动员到户外爱好者和冒险者。它们的核心用途是记录和跟踪活动，从跑步、徒步到滑雪不一而足。不同 Garmin 可穿戴设备的用户希望跟踪特定数据，因此设计设备应用时，应了解用户执行活动或任务时的需求，并提供合适的反馈、指标和配置。

应用的初始视图应明确引导用户采取行动。如果应用代表徒步或举重等活动，初始视图应邀请用户开始活动，并展示来自传感器的信息，让用户有意愿按下开始按钮。

Garmin 通常使用页面轮播展示多页信息。页面轮播由多个页面组成，每个页面都是活动的一个独立视图。这是 Garmin 产品中常见的交互方式，在 Connect IQ 中也很容易实现。

应用向用户展示大量文本时，应尽量将主要信息放在屏幕中央。圆形屏幕的顶部和底部可视区域有限，可以将顶部用于上下文标题、滚动箭头和其他简短提示。

<a id="audio-content-providers"></a>

## 音频内容提供商

支持媒体功能的 Garmin 设备面向希望在骑行、跑步或其他活动中不带手机也能听音乐、播客和有声读物的活跃用户。

音频内容提供商是媒体播放器的插件，充当音乐服务与 Garmin 媒体播放器之间的桥梁。用户可以从内容提供商选择内容，通过 Wi-Fi 将内容同步到设备，然后离线收听。

这些应用有三种使用场景：

1. 播放配置：用户从已同步的内容中选择想要收听的内容。

2. 同步：设备启用 Wi-Fi，允许音频内容提供商请求稍后离线播放所需的内容。

3. 播放：音频内容提供商根据用户的选择告诉媒体播放器播放什么。


应用应实现 [Application.AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，而不是传统的 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)。该类还提供以下方法：

| 方法 | 目的 |
| --- | --- |
| [AudioContentProviderApp.getContentDelegate()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getContentDelegate-instance_function) | 获取供系统使用的 [Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)，用于获取和遍历设备上的媒体内容。 |
| [AudioContentProviderApp.getPlaybackConfigurationView()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getPlaybackConfigurationView-instance_function) | 获取配置播放的初始视图。媒体播放器启动应用时，该视图就是主视图。 |
| [AudioContentProviderApp.getProviderIconInfo()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getProviderIconInfo-instance_function) | 获取音频提供商的图标信息。 |
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) | 获取 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) 对象，将媒体内容同步状态传递给系统。 |

同步配置已弃用。建议在播放配置中提供下载内容的机制。

更多信息请参阅[如何创建音频内容提供者？](/connect-iq/connect-iq-faq/how-do-i-create-an-audio-content-provider/#how-do-i-create-an-audio-content-provider)一节。
