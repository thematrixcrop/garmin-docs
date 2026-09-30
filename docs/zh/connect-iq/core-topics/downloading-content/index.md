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

[Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/) 模块提供启动同步模式转换的方法，并向系统传递用于显示的同步状态信息。[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 类为系统提供入口，以获取在同步模式下与应用程序通信的委托。

|函数或类型|目的|
| --- | --- |
| [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function) |输出应用程序,并在同步模式中启动.|
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) |获取一个 SyncDelegate 对象,将同步状态传达到系统中|
| [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) |用户执行的委托对象来响应同步请求|
| [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function) |发送系统通知给系统,说明整体同步进展.|
| [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) |向系统发送系统通知,说明同步完成.|

要使用批量下载功能，请实现 [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function)，返回派生自 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) 的类实例。当应用程序调用 [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function) 时，系统会终止正在运行的应用程序，以同步模式重新启动它，并调用 [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) 获取应用程序的 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)。

应用程序获取 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) 后，会调用 [SyncDelegate.isSyncNeeded()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#isSyncNeeded-instance_function) 验证是否需要同步。如果该方法返回 `true`，系统会继续调用 [SyncDelegate.onStartSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStartSync-instance_function)。此时，委托可以调用 [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 或 [Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function) 发起内容下载请求。请求的响应回调被调用后，委托应调用 [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function) 通知系统当前进度。如果还有内容需要下载，可以继续发起请求。此循环会持续到所有内容下载完成或发生错误；届时应调用 [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function)，通知系统应用程序可以退出同步模式。

如果用户决定取消批量下载操作，系统会调用 [SyncDelegate.onStopSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStopSync-instance_function) 通知应用程序。应用程序必须调用 [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) 确认同步已取消。系统会在适当时显示指定的错误消息，然后退出同步模式。

查看与SDK共享的`BulkDownload`样本应用.

我不能告诉你什么是差异. 有时我们的工作只是抽象了这个东西,而不是问问题.
