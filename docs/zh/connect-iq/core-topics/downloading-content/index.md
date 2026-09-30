---
title: "Downloading Content"
---
# 下载内容

*自 API 级别 2.2.0*

[Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)模块允许访问用户在设备上存储的轨道,课程,路线,训练和路线.这些内容类型包含一个名称和独特的识别符,这些内容类型可以由[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)作为[System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)来启动本地应用程序并以某种方式向用户展示内容.查看[Intents](/connect-iq/core-topics/intents/#intents)部分更多详情.

|类型| 对象 | API 级别 |
| --- | --- | --- |
| 轨迹、路线、课程 | [PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/)、[PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/)、[PersistedContent.Course](/connect-iq/api-docs/Toybox/PersistedContent/Course/) | 2.2.0 |
| Waypoint | [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/) | 2.2.0 |
| Workout | [PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/) | 2.2.0 |

使用[Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)对象调用[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)提示用户选择哪个本土应用程序启动.例如,如果应用程序使用[PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/)对象调用[System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function),对话框将会询问是否使用 Run或 Bike本土应用程序启动路线.

在检索设备上存储的内容列表时,将返回[PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/). 必须调用[Iterator.next()](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/#next-instance_function)函数来获取第一个输入,并且在没有更多输入时返回`null`:

```typescript
import Toybox.PersistedContent;
import Toybox.System;

function example() as Void {}
    // Get the first waypoint from the device
    var waypoints = PersistedContent.getWaypoints();
    var waypoint = waypoints.next();

    if(waypoint != null) {
        // Launch the waypoint (User will be asked
        // what activity to launch in)
        System.exitTo(waypoint.toIntent());
    }
}
```

一旦内容被发送到设备上,有三个可能的情况:

1. **数据进口成功** - 将返回一个`PersistedContent.Iterator`,其中包含下载的元素.

2. **系统没有足够的空间** -`STORAGE_FULL`响应将返回`responseCallback`.

3. **系统不支持文件类型** (即运行训练被发送到自行车设备上) -`responseCallback`将返回空代码器或`null`值.


访问`PersistedContent`需要"持续内容"权限.

## 在模拟器中持续的内容

由于本土应用程序在Connect IQ模拟器中不被模拟,因此已添加了一个*Intent Launched*功能,可用于测试[Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/).该功能在模拟器窗口中显示了通过[System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)提供的[Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)对象的三个关键信息:

1.物体类型

2. 对象的唯一可串行ID

3. 物体名称


例如,上面的样本代码可能显示一个活动的图像,其中"Intent Launched",一个类型,一个身份识别号码和其名称显示.

![](/connect-iq/resources/programmers-guide/intent-launched.png)

*自 API 级别 3.1.0*

在某些情况下,[Bluetooth low energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy)(BLE) 链接到Garmin Connect Mobile是太慢的下载某些内容.在这些情况下,WiFi Bulk Downloads功能可以证明有用.

The [Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/) 模块提供 methods to initiate a transition to sync mode, and communicate sync status information to the system for display. The [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) class provides an entry point for the system to get a delegate used to communicate with the app while in sync mode.

|函数或类型|目的|
| --- | --- |
| [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function) |输出应用程序,并在同步模式中启动.|
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) |获取一个 SyncDelegate 对象,将同步状态传达到系统中|
| [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) |用户执行的委托对象来响应同步请求|
| [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function) |发送系统通知给系统,说明整体同步进展.|
| [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) |向系统发送系统通知,说明同步完成.|

To use the bulk download functionality, implement [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) to return an instance of a class derived from [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/). When the application calls [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function), 系统将 terminate the running application, re-launch it in sync mode, and make a call to [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) to retrieve the application's [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/).

Once the application has retrieved the application's [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/), it will verify that a sync is necessary by calling [SyncDelegate.isSyncNeeded()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#isSyncNeeded-instance_function). If this method returns `true`, 系统将 proceed to call [SyncDelegate.onStartSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStartSync-instance_function). At this point, the delegate may initiate a request to download content by making a call to [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) or [Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function). When the response callback for the request is invoked, the delegate should notify the system of the progress made by calling [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function). If additional content remains to be downloaded, another content request may be issued. This cycle should repeat until all content has been downloaded or an error has occurred, at which time a call to [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) should be made to notify the system that the app can leave sync mode.

If the user decides to cancel the bulk download operation, 系统将 call [SyncDelegate.onStopSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStopSync-instance_function) to notify the application. The app must acknowledge the sync cancellation by calling [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function). The system will display the given error message, if appropriate, and will proceed to exit sync mode.

查看与SDK共享的`BulkDownload`样本应用.

我不能告诉你什么是差异. 有时我们的工作只是抽象了这个东西,而不是问问题.
