---
title: "与移动应用通信"
---
<a id="communicating-with-mobile-apps"></a>
# 与移动应用通信

设备与手机通信时会遇到一些复杂情况。例如，通信期间手表应用可能被系统终止，或者手机应用可能在手表应用未运行时尝试发送信息。为了简化这些场景，Monkey C 不提供低级通信接口，而是提供更高层的邮箱模型，而不是套接字模型。消息会被封装成信息包，在设备之间来回传递。每个应用都有一个用于接收消息的邮箱，以及一个在新消息到达时触发的事件。

## 下载 Mobile SDK

Connect IQ Mobile SDK 与 Connect IQ Developer SDK 分开发布，提供 iOS 和 Android 版本。Mobile SDK 有以下几种版本：

- Android BLE
- iOS BLE
- Android ADB

[Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) 版本用于在 iOS 或 Android 目标设备上开发支持通信的应用；[Android Debug Bridge](http://developer.android.com/tools/help/adb.html)（ADB）版本用于与 Connect IQ Simulator 配合测试。

有关如何为移动平台下载正确版本的更多信息，请参阅 [Garmin Developer 网站](http://developer.garmin.com/connect-iq/overview)、[Android Mobile SDK](/connect-iq/core-topics/mobile-sdk-for-android/#mobile-sdk-for-android) 和 [iOS Mobile SDK](/connect-iq/core-topics/mobile-sdk-for-ios/#mobile-sdk-for-ios) 章节。

## 通过 Android Debug Bridge 模拟 BLE

使用 Connect IQ Simulator 时，可以通过 [Android Debug Bridge](http://developer.android.com/tools/help/adb.html) 与运行在 Android 设备上的配套应用通信。这会模拟实际的 [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) 传输速度，更准确地估算应用性能。

要使用 ADB 测试，必须使用 Android Mobile SDK 和配套应用的 Android Debug Bridge 版本。启用 ADB 通信的步骤如下：

1.  通过 USB 将手机连接到运行模拟器的 PC。
2.  在 Android 手机上启用 USB 调试。
3.  使用 `getInstance( IQCommProtocol.ADB_SIMULATOR )` 获取 ConnectIQ 实例。
4.  可选：调用 `setAdbPort( int port )` 设置通信端口（默认端口为 7381）。
5.  调用 `initialize()`。

要让模拟器通过 ADB 通信，请在终端或控制台中将 TCP 端口转发到 Android 设备：

```bash
adb forward tcp:7381 tcp:7381
```

每连接一台 Android 设备，都需要重新执行此命令；设备断开后重新连接时也需要再次执行。

手机上的应用启动后，点击 *Connection* 菜单并选择 *Start*（CTRL-F1），即可将其连接到模拟器。此时，模拟器中的 Connect IQ 应用便可以通过 ADB 使用 Communications API 与手机通信。
