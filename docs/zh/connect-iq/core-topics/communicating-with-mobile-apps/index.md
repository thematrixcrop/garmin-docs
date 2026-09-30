---
title: "Communicating with Mobile Apps"
---
# 与移动应用通信

设备到手机通信存在一些复杂情况。例如，在通信进行时手表应用可能被终止，或者手机应用可能尝试在应用不活跃时发送信息。为了简化这些情况，Monkey C 不提供低级接口，而是提供高级方法：API 使用邮箱隐喻而非套接字隐喻。消息被构建为包裹的信息并在设备之间来回发送。每个应用都有一个接收消息的邮箱，以及在新消息到达时触发的事件。

## 移动 SDK 下载

Connect IQ 移动 SDK 与 Connect IQ 开发者 SDK 分开发布，适用于 iOS 和 Android。有几种版本的移动 SDK 可供使用：

-   Android BLE

-   iOS BLE

-   Android ADB


[Bluetooth low energy]（蓝牙低功耗）版支持在 iOS 或 Android 目标设备上开发支持通信的应用，而 [Android Debug Bridge]（安卓调试桥）（ADB）版用于与 Connect IQ 模拟器进行测试。

有关如何为您的移动平台下载正确版本的信息可在 [Garmin Developer site]（Garmin 开发者网站）上的 [Mobile SDK for Android]（Android 移动 SDK）和 [Mobile SDK for iOS]（iOS 移动 SDK）部分找到。

## 通过 Android Debug Bridge 进行 BLE 模拟

使用 Connect IQ 模拟器时，可以使用 [Android Debug Bridge]（安卓调试桥）与运行在 Android 设备上的伴侣应用进行通信。这将模拟实际的 [Bluetooth low energy]（蓝牙低功耗）速度，更好地近似您应用程序的性能。

Android Mobile SDK 和伴侣应用的 [Android Debug Bridge]（安卓调试桥）版是用于测试必需的。以下是启用伴侣通过 [Android Debug Bridge]（安卓调试桥）通信的方法：

1.  通过 USB 将手机连接到运行模拟器的 PC

2.  在 Android 手机上启用 USB 调试

3.  使用 `getInstance( IQCommProtocol.ADB_SIMULATOR )` 获取 ConnectIQ 实例

4.  可选地调用 `setAdbPort( int port )` 设置通信使用的特定端口（默认端口为 7381）

5.  调用 `initialize()`


允许模拟器通过 [Android Debug Bridge]（安卓调试桥）通信，请在终端或控制台中将 TCP 端口转发到 Android 设备：

```bash
adb forward tcp:7381 tcp:7381
```

请注意，此命令需要为每个连接的 Android 设备重新发出，或在设备断开连接并重新连接时重新发出。

一旦您在手机上启动了应用，通过单击 *Connection*（连接）菜单并选择 *Start*（开始）（CTRL-F1）将其连接到模拟器。现在，模拟器中的 Connect IQ 应用将通过 [Android Debug Bridge]（安卓调试桥）上的通信 API 与您的设备进行通信。
