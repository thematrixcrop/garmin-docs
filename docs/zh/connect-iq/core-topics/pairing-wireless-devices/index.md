---
title: "Sensor Pairing"
---
# Sensor Pairing

*Since API level 5.1.0*

如果您的设备应用程序或数据领域使用ANT,ANT加或蓝牙低能 (BLE) 无线通信与传感器或外围设备,则您需要实现对接过程.Connect IQ允许您实现[Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/),允许您将设备对应作为设备的传感器对应UI流的一部分.

## 执行传感器

为了让系统知道你的设备应用程序或数据字段支持本地对接流,你需要你的[AppBase.getSensorDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSensorDelegate-instance_function)来返回你的[Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/)的实现. 在你的代表中,你的实现必须返回`true`参与扫描.

##扫描你的设备

When the user has the device scan for sensors, 系统将 start your app without a UI, request your sensor delegate and call your [SensorDelegate.onScan()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onScan-instance_function). During this time, you can begin scanning for ANT or BLE devices.

如果您的扫描显示任何设备,请填满Sensor.SensorInfo的信息,并为每个检测的设备拨打Sensor.notifyNewSensor().当扫描完成时,请拨打通知系统您已经完成扫描.由于其他应用程序也可能需要扫描设备,使用现实的时间限期,并快速通知如果没有发现设备.

## 搭配一个设备

如果您选择与应用程序相关的设备,则将重新启动[Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/),并将通过[Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)作为参数来调用[SensorDelegate.onPair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onPair-instance_function).此时,您的应用程序应该采取必要的步骤将设备结合.在ANT上,这可能像捕获设备ID并坚持它一样简单,或者使用BLE,它可能涉及坚持ScanResult或建立绑定连接.打电话给[Sensor.notifyPairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyPairComplete-instance_function)来完成过程.

## 拆除设备

一旦您的设备被搭配,它可以在设备传感器列表中管理.用户可以要求系统也从设备中脱.在要求时,您的[SensorDelegate.onUnpair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onUnpair-instance_function)将被调用.进行必要的清理,并拨打[Sensor.notifyUnpairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyUnpairComplete-instance_function)完成这个过程.

##与您的数据领域或应用程序结合

如果添加支持本地对配流,用户将被要求在数据字段安装时与传感器对配.应用程序通常希望作为设置流的一部分对配设备.您可以使用`System.exitTo(new Intent("system://pairing", {}))`离开用户进入本地传感器扫描过程.

## 测试 in the Simulator

如果您想在Connect IQ模拟器中测试您的配对代码,请使用*设置>管理传感器*选项.使用*添加*按将触发[Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/).

##从子C扩展中在传感器配对模式下运行应用

您可以通过使用`Launch Native Pairing`命令运行和调试配码在子C扩展中,或者通过`Run Native Pairing`发射配置进行调试或没有调试.

##从命令行运行传感器配对中的应用

您可以在 SDK 的垃圾桶目录中使用`monkeydo`脚本,并使用`/n`旗 (Mac 上`-n`) 运行应用程序在传感器配对模式下:

```bash
> monkeydo path\to\projects\bin\MyApp.prg device_id /n
```

For more information, see [Basic Commands](/connect-iq/reference-guides/monkey-c-command-line-setup/#basic-commands).

| API |描述| API Level |
| --- | --- | --- |
| [AppBase.getSensorDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSensorDelegate-instance_function) |实现传感器代表. 实现这种方法来通信应用程序支持本土的配对流.| 5.1.0 |
| [SensorDelegate.onScan()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onScan-instance_function) |扫描您的应用程序支持的设备.| 5.1.0 |
| [SensorDelegate.onPair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onPair-instance_function) |完成特定设备的配对过程.| 5.1.0 |
| [SensorDelegate.onUnpair()](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/#onUnpair-instance_function) |从应用程序中删除特定设备.| 5.1.0 |
|  | Tell the system your app has completed a scan. | 5.1.0 |
| [Sensor.notifyPairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyPairComplete-instance_function) |告诉系统,你的应用程序已经完成了设备的配对| 5.1.0 |
| [Sensor.notifyUnpairComplete()](/connect-iq/api-docs/Toybox/Sensor/#notifyUnpairComplete-instance_function) |告诉系统,你的应用程序已经完成了脱设备| 5.1.0 |
