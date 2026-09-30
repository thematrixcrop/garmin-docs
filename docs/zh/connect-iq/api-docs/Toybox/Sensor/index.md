---
title: "Module: Toybox.Sensor"
---
# 模块：Toybox.Sensor

## 概述

Sensor 模块提供对传感器数据的访问。

Sensor 允许应用注册以接收当前传感器数据的更新。它还允许应用控制设备原生支持的 ANT+ 传感器，这些传感器由提供的 SENSOR\_\* 常量描述。

Example:

使用心率传感器显示当前心率

```
using Toybox.Sensor;
function initialize() {
    Sensor.setEnabledSensors([Sensor.SENSOR_HEARTRATE]);
    Sensor.enableSensorEvents(method(:onSensor));
}

function onSensor(sensorInfo) {
    System.println("Heart Rate: " + sensorInfo.heartRate);
}
```

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 后台

- 数据字段

- 速览

- 手表应用

- 微件


:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
-   D2™ Bravo
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
-   eTrex® Touch
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 230
-   Forerunner® 235
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 45
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 920XT
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Garmin Swim™ 2
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR
-   vívoactive®

:::

需要权限：

- Sensor


## 命名空间下的类

类：[AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/), [GyroscopeData](/connect-iq/api-docs/Toybox/Sensor/GyroscopeData/), [HeartRateData](/connect-iq/api-docs/Toybox/Sensor/HeartRateData/), [Info](/connect-iq/api-docs/Toybox/Sensor/Info/), [MagnetometerData](/connect-iq/api-docs/Toybox/Sensor/MagnetometerData/), [SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/), [SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/), [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/), [SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/), [TooManySensorDataListenersException](/connect-iq/api-docs/Toybox/Sensor/TooManySensorDataListenersException/)

## 常量摘要

### RemoteSensorType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SENSOR\_BIKESPEED | 0 |
API 级别 1.0.0

 |  |
| SENSOR\_BIKECADENCE | 1 |

API 级别 1.0.0

 |  |
| SENSOR\_BIKEPOWER | 2 |

API 级别 1.0.0

 |  |
| SENSOR\_FOOTPOD | 3 |

API 级别 1.0.0

 |  |
| SENSOR\_HEARTRATE | 4 |

API 级别 1.0.0

 |  |
| SENSOR\_TEMPERATURE | 5 |

API 级别 1.0.0

 |  |
| SENSOR\_GENERIC | 9 |

API 级别 5.1.0

 |  |

### OnboardSensorType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SENSOR\_PULSE\_OXIMETRY | 6 |
API 级别 3.2.0

 |  |
| SENSOR\_ONBOARD\_PULSE\_OXIMETRY | 7 |

API 级别 3.2.0

 |  |
| SENSOR\_ONBOARD\_HEARTRATE | 8 |

API 级别 3.2.0

 |  |

### SensorTechnology

传感器技术

描述用于与传感器通信的技术。

Since:

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SENSOR\_TECHNOLOGY\_ANT | 0 |
API 级别 3.2.0

|

ANT 传感器

|
| SENSOR\_TECHNOLOGY\_BLE | 1 |

API 级别 3.2.0

|

低功耗蓝牙传感器

|
| SENSOR\_TECHNOLOGY\_ONBOARD | 2 |

API 级别 3.2.0

|

板载传感器

|

## 类型定义摘要 [collapse](#)

- [**SensorType**](#SensorType-named_type) as [Sensor.RemoteSensorType](/connect-iq/api-docs/Toybox/Sensor/#RemoteSensorType-module) or [Sensor.OnboardSensorType](/connect-iq/api-docs/Toybox/Sensor/#OnboardSensorType-module)

## 实例方法摘要 [collapse](#)

- [**disableSensorType**](#disableSensorType-instance_function)(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    禁用指定传感器类型以供使用。

- [**enableSensorEvents**](#enableSensorEvents-instance_function)(listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(info as [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)) as **Void**) as **Void**

    请求来自已启用传感器的传感器事件。

- [**enableSensorType**](#enableSensorType-instance_function)(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    启用指定传感器类型以供使用。

- [**getInfo**](#getInfo-instance_function)() as [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)

    获取当前传感器 [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)。

- [**getMaxSampleRate**](#getMaxSampleRate-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取系统支持的最大采样率。

- [**getMaxSampleRateForSensorType**](#getMaxSampleRateForSensorType-instance_function)(sensorDataType as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取给定传感器数据类型支持的最大采样率。

- [**getRegisteredSensors**](#getRegisteredSensors-instance_function)(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type) or **Null**) as [Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/)

    获取当前已注册的传感器。

- [**notifyError**](#notifyError-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**) as **Void**

    通知系统应用遇到了错误。

- [**notifyNewSensor**](#notifyNewSensor-instance_function)(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/), configurationRequired as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    通知系统应用发现了新传感器。

- [**notifyPairComplete**](#notifyPairComplete-instance_function)(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) as **Void**

    通知系统应用已完成传感器配对。

- [**notifyScanComplete**](#notifyScanComplete-instance_function)() as **Void**

    通知系统应用已完成传感器扫描。

- [**notifyUnpairComplete**](#notifyUnpairComplete-instance_function)(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) as **Void**

    通知系统应用已完成取消传感器配对。

- [**registerSensorDataListener**](#registerSensorDataListener-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(data as [Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/)) as **Void**, options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :accelerometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includePower as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includePitch as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includeRoll as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :gyroscope as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :magnetometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :heartBeatIntervals as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :synchronous as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }) as **Void**

    注册一个回调，用于从各种传感器获取高频数据。

- [**setEnabledSensors**](#setEnabledSensors-instance_function)(sensors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)\>

    启用传感器以供使用。

- [**unregisterSensorDataListener**](#unregisterSensorDataListener-instance_function)() as **Void**

    注销之前注册的数据监听器。


## 类型定义详情

### **SensorType** as [Sensor.RemoteSensorType](/connect-iq/api-docs/Toybox/Sensor/#RemoteSensorType-module) or [Sensor.OnboardSensorType](/connect-iq/api-docs/Toybox/Sensor/#OnboardSensorType-module)

Since:

API 级别 1.0.0

## 实例方法详情

### **disableSensorType(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

禁用指定传感器类型以供使用。

与现有的 setEnabledSensors() 函数不同，此函数不会启用或禁用其他传感器类型。

注意：

在数据字段应用中调用会导致应用崩溃

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 3.2.0

### **enableSensorEvents(listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(info as [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)) as **Void**)** as **Void**

请求来自已启用传感器的传感器事件。

传感器事件以 1 Hz 的速率从所有已启用的传感器中获取。从已启用传感器获取的数据会传递给作为此方法参数提供的监听器 [Method](/connect-iq/api-docs/Toybox/Lang/Method/)。

注意：

在数据字段应用中调用会导致应用崩溃

Parameters:

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对侦听器 Method 的引用：

- 收到传感器更新时调用

- 接收一个 Sensor.info 对象

- 使用 `null` 指定无监听器



Example:

```
using Toybox.Sensor;
// Given an onSensor listener method is defined
Sensor.enableSensorEvents(method(:onSensor));
```

Since:

API 级别 1.0.0

### **enableSensorType(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

启用指定传感器类型以供使用。

与现有的 setEnabledSensors() 函数不同，此函数不会启用或禁用其他传感器类型。

注意：

在数据字段应用中调用会导致应用崩溃

注意：

多任务处理：处于非活动模式时无法更改传感器状态；在活动模式下启用的传感器将在应用变为非活动状态时被禁用，并在再次变为活动状态时自动重新启用。这些状态更改通过调用 AppBase.onActive() 和 AppBase.onInactive() 表示。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 3.2.0

### **getInfo()** as [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)

获取当前传感器 [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)。

这对于在 [Timer](/connect-iq/api-docs/Toybox/Timer/Timer/) 中按需或定期检索当前传感器信息很有用。

注意：

在数据字段应用中调用会导致应用崩溃

Example:

每秒获取一次加速度计数据

```
using Toybox.Sensor;
using Toybox.System;
using Toybox.Timer;
var dataTimer = new Timer.Timer();
dataTimer.start(method(:timerCallback), 1000, true); // A one-second timer
function timerCallback() {
    var sensorInfo = Sensor.getInfo();
    if (sensorInfo has :accel && sensorInfo.accel != null) {
        var accel = sensorInfo.accel;
        var xAccel = accel[0];
        var yAccel = accel[1];
        System.println("x: " + xAccel + ", y: " + yAccel);
    }
}
```

Returns:

- [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/)

另见：

- [Toybox.Timer.Timer](/connect-iq/api-docs/Toybox/Timer/Timer/)


Since:

API 级别 1.0.0

### **getMaxSampleRate()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取系统支持的最大采样率。

注意：

在数据字段应用中调用会导致应用崩溃

注意：

应用从非活动状态转换到活动状态后，此函数可能产生不同的结果。这些状态变化由对 AppBase.onActive() 和 AppBase.onInactive() 的调用表示。

Example:

```
using Toybox.Sensor;
var maxSample = Sensor.getMaxSampleRate();
```

:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    最大采样率，类型为数字


Since:

API 级别 2.3.0

### **getMaxSampleRateForSensorType(sensorDataType as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取给定传感器数据类型支持的最大采样率。

注意：

在数据字段应用中调用会导致应用崩溃

注意：

应用从非活动状态转换到活动状态后，此函数可能产生不同的结果。这些状态变化由对 AppBase.onActive() 和 AppBase.onInactive() 的调用表示。

Parameters:

- sensorDataType — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    要获取最大速率的传感器数据类型符号；允许的符号为 `accelerometer`、`gyroscope` 和 `magnetometer`。


Example:

```
using Toybox.Sensor;
var maxSample = Sensor.getMaxSampleRateForSensorType(:accelerometer);
```

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    最大采样率，类型为 Number


Since:

API 级别 3.4.5

### **getRegisteredSensors(sensorType as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type) or **Null**)** as [Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/)

获取当前已注册的传感器。

如果已在传感器设置中为传感器提供配对信息，此函数将返回被视为 \`registered\` 的传感器的迭代器。

Parameters:

- sensorType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    用于描述要枚举的传感器类型的 SENSOR\_\* 值，或用于获取所有传感器的 `null`。


Returns:

- [Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/) —

    当前已注册传感器的迭代器。


Since:

API 级别 3.2.0

### **notifyError(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**)** as **Void**

通知系统应用遇到了错误

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

### **notifyNewSensor(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/), configurationRequired as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

通知系统应用发现了新传感器

Parameters:

- sensor — ([Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) —

    包含传感器信息的 sensorinfo 对象。

- configurationRequired — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    指示传感器是否需要自定义配置的标志。值为 True 时，在配对过程中，应用将通过 [AppBase.getSensorConfigurationView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSensorConfigurationView-instance_function) 显示自定义配置视图。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

### **notifyPairComplete(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/))** as **Void**

通知系统应用已完成传感器配对

Parameters:

- sensor — ([Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) —

    包含传感器信息的 sensorinfo 对象。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

### **notifyScanComplete()** as **Void**

通知系统应用已完成传感器扫描

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

### **notifyUnpairComplete(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/))** as **Void**

通知系统应用已完成取消传感器配对

Parameters:

- sensor — ([Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) —

    包含传感器信息的 sensorinfo 对象。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

### **registerSensorDataListener(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(data as [Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/)) as **Void**, options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :accelerometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includePower as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includePitch as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includeRoll as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :gyroscope as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :magnetometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :sampleRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :includeTimestamps as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :heartBeatIntervals as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :synchronous as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })** as **Void**

注册一个回调，用于从各种传感器获取高频数据。

每当经过 period 选项指定的时长后有一组新的传感器数据可用时，都会调用回调。

注意：

一次只能注册一个数据请求。随后针对相同传感器类型调用此函数时，将覆盖之前注册的请求。

注意：

同步数据请求不支持磁力计数据。

注意：

在数据字段应用中调用会导致应用崩溃

Parameters:

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    一个以单个 [SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/) 对象为参数的方法，该对象将包含请求的数据。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。允许的值取决于传感器类型。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        请求样本的时间段，以秒为单位。最大值为 4 秒。

- :synchronous — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        设置为 `true` 以请求同步的传感器数据。

- :accelerometer — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        加速度计数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 设为 `true` 以获取加速度计数据。

- :sampleRate ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)) 要请求的每秒样本数（Hz）。

- :includePower ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:accelerometer=>:enabled` 设为 `true` 时有效。请求计算 [power Array](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/#power-var)。

- :includePitch ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:accelerometer=>:enabled` 设为 `true` 时有效。请求计算 [pitch Array](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/#pitch-var)。

- :includeRoll ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:accelerometer=>:enabled` 设为 `true` 时有效。请求计算 [roll Array](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/#roll-var)。

- :includeTimestamps ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:accelerometer=>:enabled` 设为 `true` 时有效。请求包含 [timestamp Array](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/#timestamp-var)，这有助于将数据与其他传感器同步。


- :heartBeatIntervals — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        Heart Beat Interval 数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 设为 `true` 以获取心跳间隔数据。


- :gyroscope — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        陀螺仪数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 设为 `true` 以获取陀螺仪数据。

- :sampleRate ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)) 要请求的每秒样本数（Hz）。

- :includeTimestamps ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:gyroscope=>:enabled` 设为 `true` 时有效。请求包含 [timestamp Array](/connect-iq/api-docs/Toybox/Sensor/GyroscopeData/#timestamp-var)，这有助于将数据与其他传感器同步。


- :magnetometer — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        磁力计数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 设为 `true` 以获取磁力计数据。

- :sampleRate ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)) 要请求的每秒样本数（Hz）。

- :includeTimestamps ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) 仅当 `:magnetometer=>:enabled` 设为 `true` 时有效。请求包含 [timestamp Array](/connect-iq/api-docs/Toybox/Sensor/MagnetometerData/#timestamp-var)，这有助于将数据与其他传感器同步。



Example:

```
using Toybox.Sensor;
// initialize accelerometer
var options = {
    :period => 1,               // 1 second sample time
    :accelerometer => {
        :enabled => true,       // Enable the accelerometer
        :sampleRate => 25       // 25 samples
    },
    :heartBeatIntervals => {
        :enabled => true
    }
};
// Using the callback setup in Toybox.SensorHistory.SensorData
Sensor.registerSensorDataListener(method(:accelCallback), options);
```

:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

另见：

- [ActivityRecording.createSession()](/connect-iq/api-docs/Toybox/ActivityRecording/#createSession-instance_function)

- [Toybox.Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/)


Since:

API 级别 2.3.0

Throws:

- [Toybox::Sensor::TooManySensorDataListenersException](/connect-iq/api-docs/Toybox/Sensor/TooManySensorDataListenersException/) 如果尝试为传感器数据注册多个侦听器，则抛出。

- [Toybox::Lang::InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/) 如果排除了任何必需选项、提供的选项超出范围或类型错误，则抛出。


### **setEnabledSensors(sensors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)\>

启用传感器以供使用。

如果可能，此项将启用已连接的 ANT+ 传感器和系统传感器。

注意：

在数据字段应用中调用会导致应用崩溃

注意：

多任务处理：处于非活动模式时无法更改传感器状态；在活动模式下启用的传感器将在应用变为非活动状态时被禁用，并在再次变为活动状态时自动重新启用。这些状态更改通过调用 AppBase.onActive() 和 AppBase.onInactive() 表示。

Parameters:

- sensors — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    要启用的传感器：

- 要启用的 SENSOR\_\* 类型数组

- An empty array (\[\]) to disable all sensors



Example:

启用心率传感器

```
using Toybox.Sensor;
Sensor.setEnabledSensors([Sensor.SENSOR_HEARTRATE]);
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    可用的请求传感器数组


Since:

API 级别 1.0.0

### **unregisterSensorDataListener()** as **Void**

注销之前注册的数据监听器。

注意：

在数据字段应用中调用会导致应用崩溃

Example:

```
// Assuming use of registerSensorDataListener() example and mSession
using Toybox.Sensor;

Sensor.unregisterSensorDataListener(); // Unregister Listener
mSession.stop();                       // Stop Activity Recording
```

:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

另见：

- [Sensor.registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function)


Since:

API 级别 2.3.0
