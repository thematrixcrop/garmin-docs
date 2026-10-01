---
title: "下载内容"
---
<a id="downloading-content"></a>
# 下载内容

*自 API 级别 2.2.0 起可用*

[Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) 模块允许访问用户保存在设备上的 Track、Course、Waypoint、Workout 和 Route。这些内容类型包含名称和唯一标识符，可以由 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 作为 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 使用，以启动原生应用并以某种方式向用户展示内容。更多信息请参阅 [Intents](/connect-iq/core-topics/intents/#intents) 部分。

| 类型 | 对象 | API 级别 |
| --- | --- | --- |
| Track、Route、Course | [PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/)、[PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/)、[PersistedContent.Course](/connect-iq/api-docs/Toybox/PersistedContent/Course/) | 2.2.0 |
| Waypoint | [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/) | 2.2.0 |
| Workout | [PersistedContent.Workout](/connect-iq/api-docs/Toybox/PersistedContent/Workout/) | 2.2.0 |

使用 [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) 对象调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 时，系统会提示用户选择要启动的原生应用。例如，如果应用使用 [PersistedContent.Waypoint](/connect-iq/api-docs/Toybox/PersistedContent/Waypoint/) 对象调用 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)，对话框会询问用户要使用 Run 还是 Bike 原生应用打开该 Waypoint。

获取设备上保存的内容列表时，会返回一个 [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/)。必须调用 [Iterator.next()](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/#next-instance_function) 获取第一项；没有更多项目时会返回 `null`：

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

内容发送到设备后，可能出现以下三种情况：

1.  **数据导入成功**：返回一个 [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/)，其中包含下载的元素。

2.  **系统空间不足**：向 `responseCallback` 返回 `STORAGE_FULL` 响应。

3.  **系统不支持该文件类型**（例如，将正在运行的 Workout 发送到自行车设备）：`responseCallback` 会返回空迭代器或 `null`。


访问 `PersistedContent` 需要 `Persisted Content` 权限。

## Simulator 中的持久化内容

由于 Connect IQ Simulator 不会模拟原生应用，因此新增了 *Intent Launched* 功能，可用于测试 [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/)。此功能会在 Simulator 窗口中显示通过 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 提供的 [Toybox.PersistedContent](/connect-iq/api-docs/Toybox/PersistedContent/) 对象的三项关键信息：

1.  对象类型

2.  对象唯一且可序列化的 ID

3.  对象名称


例如，上面的示例代码可能会在 Simulator 中显示一张活动图片，并显示 “Intent Launched”、类型、ID 和名称。

![](/connect-iq/resources/programmers-guide/intent-launched.png)

*自 API 级别 3.1.0 起可用*

在某些情况下，通过 Bluetooth Low Energy（BLE）连接 Garmin Connect Mobile 的链路太慢，无法下载某些内容。这时可以使用 Wi-Fi 批量下载功能。

[Toybox.Communications](/connect-iq/api-docs/Toybox/Communications/) 模块提供了启动同步模式以及向系统发送同步状态信息的方法，以便系统显示这些信息。[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 类为系统提供入口，用于获取在同步模式下与应用通信的委托对象。

| 函数或类 | 用途 |
| --- | --- |
| [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function) | 退出应用并以同步模式启动应用。 |
| [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) | 获取向系统传递同步状态的 SyncDelegate 对象。 |
| [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) | 由用户实现、用于响应同步请求的委托对象。 |
| [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function) | 向系统发送通知，报告整体同步进度。 |
| [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) | 向系统发送通知，报告同步已完成。 |

要使用批量下载功能，请实现 [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function)，使其返回一个派生自 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) 的类实例。当应用调用 [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function) 时，系统会终止正在运行的应用，以同步模式重新启动它，然后调用 [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function) 获取应用的 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)。

应用获取 [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) 后，会调用 [SyncDelegate.isSyncNeeded()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#isSyncNeeded-instance_function) 检查是否需要同步。如果此方法返回 `true`，系统会继续调用 [SyncDelegate.onStartSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStartSync-instance_function)。此时，委托可以调用 [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 或 [Communications.makeImageRequest()](/connect-iq/api-docs/Toybox/Communications/#makeImageRequest-instance_function) 发起内容下载请求。请求的响应回调被调用后，委托应调用 [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function) 通知系统当前进度。如果还有内容需要下载，可以继续发起请求。此循环会持续到所有内容下载完成或发生错误；届时应调用 [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function)，通知系统应用可以退出同步模式。

如果用户决定取消批量下载操作，系统会调用 [SyncDelegate.onStopSync()](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStopSync-instance_function) 通知应用。应用必须调用 [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) 确认同步已取消。系统会在适当时显示指定的错误消息，然后退出同步模式。

更多信息请参阅 SDK 随附的 `BulkDownload` 示例应用。

我无法告诉你其中的差异。有时我们的工作只是抽象出这些内容，而不去追问原因。
