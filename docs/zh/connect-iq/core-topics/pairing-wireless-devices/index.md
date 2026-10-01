---
title: "Sensor Pairing"
---
<a id="sensor-pairing"></a>
# 传感器配对

*自 API 级别 5.1.0 起支持*

如果设备应用或数据字段通过 ANT、ANT+ 或 Bluetooth Low Energy（BLE）与传感器或外设进行无线通信，就需要实现配对流程。Connect IQ 允许你实现 [Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/)，让设备在系统传感器配对界面中完成配对。

## 实现 SensorDelegate

要让系统知道设备应用或数据字段支持原生配对流程，[AppBase.getSensorDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSensorDelegate-instance_function) 必须返回 [Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/) 的实现。在 delegate 中，实现的扫描方法必须返回 `true`，才能参与扫描。

## 扫描设备

用户让设备扫描传感器时，系统会在无 UI 的情况下启动应用，请求 SensorDelegate，并调用 [SensorDelegate.onScan()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onScan-instance_function)。此时可以开始扫描 ANT 或 BLE 设备。

如果扫描发现设备，请使用信息填充 `Sensor.SensorInfo`，并对每个发现的设备调用 `Sensor.notifyNewSensor()`。扫描结束后，调用相应方法通知系统扫描已完成。由于其他应用也可能需要扫描设备，请设置合理的超时时间；如果没有发现设备，应尽快通知系统。

## 配对设备

系统会向用户显示设备列表供其选择。如果用户选择了与你的应用关联的设备，系统会重新实例化 [Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/)，并调用 [SensorDelegate.onPair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onPair-instance_function)，将 [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 作为参数传入。此时，应用应执行配对设备所需的步骤。对于 ANT，可能只需记录设备 ID 并持久化；对于 BLE，可能需要持久化 `ScanResult` 或建立绑定连接。最后调用 [Sensor.notifyPairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyPairComplete-instance_function) 完成流程。

## 取消配对

设备配对后，可以在设备的传感器列表中管理它。用户也可以请求系统取消设备配对。收到请求时，系统会调用 [SensorDelegate.onUnpair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onUnpair-instance_function)。完成必要的清理后，调用 [Sensor.notifyUnpairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyUnpairComplete-instance_function) 结束流程。

## 为数据字段或应用配对

如果支持原生配对流程，用户安装数据字段时会收到与传感器配对的提示。应用通常会在设置流程中请求配对设备。可以使用 `System.exitTo(new Intent("system://pairing", {}))` 将用户转到系统传感器扫描流程。

## 在模拟器中测试

要在 Connect IQ Simulator 中测试配对代码，请使用 *Settings > Manage Sensors* 选项。点击 *Add* 按钮会触发你的 [Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/)。

## 从 Monkey C Extension 以传感器配对模式运行应用

在 Monkey C Extension 中，可以使用 `Launch Native Pairing` 命令运行并调试配对代码，也可以使用 `Run Native Pairing` launch configuration 运行（可选择是否调试）。详情请参阅[以传感器配对模式运行应用](/connect-iq/reference-guides/visual-studio-code-extension/#running-app-in-sensor-pairing-mode)。

## 从命令行以传感器配对模式运行应用

可以使用 SDK `bin` 目录中的 `monkeydo` 脚本，并通过 `/n` 标志（Mac 上为 `-n`）以传感器配对模式运行应用：

```bash
> monkeydo path\to\projects\bin\MyApp.prg device_id /n
```

更多信息请参阅[基本命令](/connect-iq/reference-guides/monkey-c-command-line-setup/#basic-commands)。

| API | 说明 | API 级别 |
| --- | --- | --- |
| [AppBase.getSensorDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSensorDelegate-instance_function) | 返回 SensorDelegate 的实现。实现此方法以声明应用支持原生配对流程。 | 5.1.0 |
| [SensorDelegate.onScan()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onScan-instance_function) | 扫描应用支持的设备。 | 5.1.0 |
| [SensorDelegate.onPair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onPair-instance_function) | 完成指定设备的配对流程。 | 5.1.0 |
| [SensorDelegate.onUnpair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onUnpair-instance_function) | 取消应用与指定设备的配对。 | 5.1.0 |
|  | 通知系统应用已完成扫描。 | 5.1.0 |
| [Sensor.notifyPairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyPairComplete-instance_function) | 通知系统应用已完成设备配对。 | 5.1.0 |
| [Sensor.notifyUnpairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyUnpairComplete-instance_function) | 通知系统应用已完成设备取消配对。 | 5.1.0 |
