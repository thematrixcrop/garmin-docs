---
title: "App Types"
---
# 应用类型

![](/connect-iq/resources/programmers-guide/cyclist-monkey.png)

每个Connect IQ应用程序都必须识别其应用程序类型.应用程序类型在运行时设定应用程序的使用情况和界限.Connect IQ系统中有五种应用程序类型:

它们可以是简单的手表或复杂的数据屏幕,

-[表盘](#watch-faces)- 表盘是 Garmin 可穿戴设备的主屏幕，可以是简单的时钟，也可以显示数十项健康和健身数据。

-[数据字段](#data-fields)- 数据字段是可添加到 Garmin 活动体验中的应用。它们可以计算新指标，或将新数据带入训练中。

-[小工具](#widgets)- 小工具是可以从主屏幕启动的小型应用，旨在提供一目了然的信息。

-[设备应用](#device-apps)- 设备应用是功能最完整的应用类型，可全面访问系统。

-[音频内容提供商](#audio-content-providers)- 音频内容提供商是支持音乐的可穿戴设备上的媒体播放器插件，为媒体播放器和第三方内容服务提供桥梁。


## API 和应用类型

应用程序类型定义了应用程序的用户背景.例如,表格面具备许多限制,因为它们在低功率模式下运行.为了执行这些限制,Connect IQ虚拟机将根据应用程序类型限制您的可用API.

| 模块名称 | 数据字段 | 表盘 | 小工具 | 应用 | 音频内容提供程序 | API 级别 |
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

对于您的应用程序类型而要求的玩具盒模块将导致 *Symbol Not Found* 错误.

## 表盘

腕表面孔是一种特殊的应用类型,在Garmin的可穿戴设备的主屏幕上显示.这些应用类型是有限的,以允许它们对设备的电池寿命产生最小影响.

时钟面孔在设备上连续运行,可以对电力消耗产生最大影响.设计不良的时钟面孔 需要太长时间来绘制 可以大大降低可穿戴设备的电池使用寿命.

由于电池使用寿命的担忧,手表面对系统中的API访问量最小.它们可以访问图形,位地图,字体,当前活动跟踪器状态,当前电池状态和用户活动配置文件.它们无法访问 компас,GPS或其他传感器.

如果您使用定制字体用于数字显示,请使用过选项仅将关键字体加载. 这将节省您可以用于额外的图形

### 表盘休眠

在此模式下,手表面部大部分时间都在"睡眠模式"中,执行时间仅限于每分钟一次更新,不能使用计时器或动画.当用户抬起手表看时,手表面部会退出睡眠模式.此时,调用[WatchFace.onExitSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onExitSleep-instance_function)方法,更新将每秒增加到一次,直到调用[WatchFace.onEnterSleep()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onEnterSleep-instance_function)方法之前允许计时器和动画.

### 表盘委托

*自 API 级别 2.3.0*

[WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)提供系统的输入来观看面孔.该代表应作为从[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)返回的阵列的第二个元素,类似于其他应用类型的输入代表.目前仅用于报告每次更新支持的表表表面的电源预算违规.如果执行预算超过一分钟,则将调用[WatchFaceDelegate.onPowerBudgetExceeded()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPowerBudgetExceeded-instance_function)回调,提供有关表表面的执行时间和超越的限制的信息.

## 数据字段

动态数据字段允许客户和第三方开发人员编写额外的指标和数据,这些数据将与Garmin的活动显示.目标是创建一个系统,不仅让用户根据我们的训练数据轻松地创建一个快速的数据字段,还让开发人员能够定制演示.

数据字段可以在设备上已经支持的活动中显示.它们是通过对已记录的数据进行计算来向用户提供新指标的绝佳方法. 数据字段是已存在的活动中集成的,因此最好它们与设备上原生数据字段使用的字体和格式出现.因此,简单的布局是最好的,因为它将确保您的数据字段将具有相同的原生外观,并将适合所有数据屏幕布局进行扩展.如果你想定制数据字段,例如,通过插入位地图而不是数字值,你需要确保您的定制字段在一个字段,两个字段,三个字段和其他布局之间适当扩展.

### 数据字段和简单数据字段

数据字段的基类是[WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/). 这个类扩展到[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/),并且在许多方面与其他查看对象类似.每次数据字段需要更新时都会进行[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)方法调用.

在Garmin活动中,用户控制数据页面布局;具体来说,它是否显示一个,两个,三个或更多的字段.Connect IQ数据字段必须处理所有这些布局中的显示,开发人员可以使用模拟器测试其字段在所有设备支持的布局中.

许多开发人员只想显示一个值,不想处理数据场的绘图的全部复杂性.在这些情况下,他们可以使用[WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/)对象.一个简单的数据场处理了多个尺寸的场的绘图,并且只需要开发人员实现[DataField.compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function)方法.[DataField.compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function)方法通过了[Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)对象,其中包含所有当前的训练信息.

使用[WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/)在可能的情况下,以确保您的数据字段将具有其他Garmin数据字段的原生外观和感觉.Connect IQ将试图确保您的数据显示以最佳字体和布局.

以下是"酒"数据场的一个例子,显示了你在训练期间"酒"的数量:

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

###模拟一个炼

在模拟器中测试您的数据场,通过点击 *模拟*菜单,输送数据场模拟数据,然后选择 *FIT数据*然后 *模拟*. 这将生成随机但有效的数据.您还可以使用 *模拟* > *FIT数据* > *播放文件...*使用预记录的FIT文件模拟训练.

## 小组件

工具是微软应用程序,允许开发人员提供可见的信息视图.信息可能来自云服务,内载传感器或其他Connect IQ API. 工具可从可穿戴设备主屏幕上可访问的旋转页面中启动,或从自行车计算机和户外手持式设备的侧视图中启动.与应用程序不同,工具在停机期间后会停机,并且不允许记录活动,但它们也可以随时启动.

### 基础视图和小程序 Carousel

在可穿戴产品上,手表面是 widget carousel 的首页屏幕.用户可以使用上下按 (按产品) 或上下滑动 (触摸屏可穿戴设备) 导航通过widget.

当开启 widget时,显示了从[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)返回的初始视图.由于它们用于 widget 导航,当显示基视图时,不会接收上下按或上下滑动事件.使用[WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)按上基视图的任何视图都不会有这些输入限制.

预期在 widget 循环中的所有视图是系统菜单显示用户执行菜单行为时.对于 widget,系统菜单上的第一个项目将是查看 widget 的菜单选项.当用户进行选择时,将调用 widget 的[BehaviorDelegate.onMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onMenu-instance_function).

### 快览

*自 API 级别 3.1.0*

Fenix 6 将可查看的信息从页面轮介绍转移到列表介绍.每个项目提供了一个小区域的房地产显示信息.如果用户选择它,完整的小程序将启动.在这个背景下启动时,小程序基础视图没有定期应用输入限制.

闪光视图在有限的运行时间空间中运行,内存和特权减少,并且不接受任何输入.

当你启动小工具时,你可以检查`DeviceInfo`是否定义了`isGlanceModeEnabled`.如果是这样,你也可以确定值是什么.如果启用了视觉模式,你可以直接启动到小工具的互动部分.否则你应该启动基视图.

See the [Glance](/connect-iq/core-topics/glances/#glances) section 更多信息.

###设计一个小工具

如果用户执行一种行为 (按起按,触摸屏幕) 表示他们想要更多信息,则您的小工具应该推出一个视图,允许通过提供的信息导航.

## 设备应用

设备应用程序是迄今为止最强大的应用程序类型.这些应用程序允许应用程序设计师进行最多的灵活性和定制.它们还提供最多的访问可穿戴设备的功能,例如访问ANT+传感器,加速器和阅读/录制FIT文件.

穿戴式手机组件的每个套件都旨在满足从耐力跑步运动员到三运动员到户外爱好者和冒险家的不同需求和行为.这些穿戴式手机的核心重点集中在记录和跟踪活动,从跑步到徒步旅行到滑雪.不同 Garmin穿戴式手机的用户希望跟踪特定类型的数据,并且在设计时钟应用程序时应非常小心,以了解执行特定活动或任务的用户的需求,并提供适当的反,指标和配置,以为用户提供最佳体验.

应用程序的初始视图应该是行动调用.如果您的应用程序代表了一些活动,如徒步旅行或举重,应用程序的初始视图应该要求启动.向用户提供来自传感器的信息,让他们想要按开机按.

格林通常使用页面循环来呈现多页的信息.页面循环是页面的轮,每个页面都具有独特的活动视图.这是格林产品中的一个常见的比喻,并且在Connect IQ中很容易实现.

当你的应用程序向用户展示大量文本时,试着把信息放在屏幕中心.在圆屏幕上,屏幕的顶部和底部提供有限的视觉区域.使用顶部进行文本标题,滚动箭头和其他小信息提示.

## 音频内容提供商

Garmin 媒体支持的设备是为活跃的生活方式用户设计的,他们希望在骑行,跑步或其他活动中不携带手机来听音乐.

音频内容提供商作为媒体播放器的插件.这些应用程序作为音乐服务和Garmin媒体播放器之间的桥梁.音频内容提供商允许用户从内容提供商中选择内容,通过Wi-Fi同步内容到设备,并听到它

这些应用有三个上下文：

1.播放配置:允许用户从他们同步的内容中选择他们想听的内容

2.同步:该设备激活Wi-Fi,允许音频内容提供商要求内容以后在线播放

3.播放:播放体验.音频内容提供商根据用户的选择告诉媒体播放器要播放什么.


你的应用程序应该实现一个[Application.AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)而不是传统的[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/).

| 方法 | 目的 |
| --- | --- |
| [AudioContentProviderApp.getContentDelegate()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getContentDelegate-instance_function) |获取[Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)用于系统使用,以通过设备上的媒体内容进行代.|
| [AudioContentProviderApp.getPlaybackConfigurationView()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getPlaybackConfigurationView-instance_function) |获取配置播放的初始视图. 媒体播放器启动时,这是主要的视图.|
| [AudioContentProviderApp.getProviderIconInfo()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getProviderIconInfo-instance_function) | 获取音频提供商图标信息。 |
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) |获取一个[Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)对象,将同步状态传达到系统中,以便将媒体内容同步到设备中.|

同步配置已被废除. 我们建议用户提供一个机制来下载在播放配置内部的内容.

更多信息请参阅[如何创建音频内容提供者？](/connect-iq/connect-iq-faq/how-do-i-create-an-audio-content-provider/#how-do-i-create-an-audio-content-provider)一节。
