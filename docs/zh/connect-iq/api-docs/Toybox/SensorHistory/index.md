---
title: "Module: Toybox.SensorHistory"
---
# 模块：Toybox.SensorHistory

## 概述

The SensorHistory module contains the interface for SensorHistory.

SensorHistory provides access to historical information recorded by the on-board sensors of device hardware. The amount of information that is available is device dependent. This means that one device may provide more information than another. This class provides an ORDER\_\* enum which is used to select the data order of the sample iterator.

Since:

API 级别 2.1.0

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Rey™
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

需要权限：

- SensorHistory


## 命名空间下的类

类：[SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/), [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

## 常量摘要

### Order

Since:

API 级别 2.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ORDER\_NEWEST\_FIRST | 0 |
API 级别 2.1.0

|

Request iterator with newest data first

|
| ORDER\_OLDEST\_FIRST | 1 |

API 级别 2.1.0

|

Request iterator with oldest data first

|

## 实例方法摘要 [collapse](#)

- [**getBodyBatteryHistory**](#getBodyBatteryHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取指定时间段的身体电量历史记录。

- [**getElevationHistory**](#getElevationHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取给定时间段内的海拔历史记录，最远追溯至上次断电。

- [**getHeartRateHistory**](#getHeartRateHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) or **Null** } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取指定时间段内的心率历史记录（截至上次断电）。

- [**getOxygenSaturationHistory**](#getOxygenSaturationHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取给定时间段的血氧饱和度历史数据。此函数始终返回最近的传感器历史样本。

- [**getPressureHistory**](#getPressureHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取给定时间段内的气压历史记录，最远追溯至上次断电。

- [**getStressHistory**](#getStressHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取给定时间段的压力历史数据。此函数始终返回最近的传感器历史样本。

- [**getTemperatureHistory**](#getTemperatureHistory-instance_function)(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**) as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

    获取给定时间段内的温度历史记录，最远追溯至上次断电。


## 实例方法详情

### **getBodyBatteryHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取指定时间段的身体电量历史记录。

此函数始终返回最新的传感器历史样本。迭代器中每个 \`SensorSample\` 之间的时间间隔可能因设备而异。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        获取样本的顺序：

- 若为 `null`，样本将为 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Shows the use of BodyBatteryIterator

```
using Toybox.SensorHistory;
using Toybox.System;

  // Create a method to get the SensorHistoryIterator object
  function getIterator() {
      // Check device for SensorHistory compatibility
      if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getBodyBatteryHistory)) {
          // Set up the method with parameters
          return Toybox.SensorHistory.getBodyBatteryHistory({});
      }
      return null;
  }
  // get the body battery iterator object
  var bbIterator = getIterator();
  var sample = bbIterator.next();                         // get the body battery data

  while (sample != null) {
      System.println("Sample: " + sample.data);           // print the current sample
      sample = bbIterator.next();
  }
```

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的身体电量历史迭代器。此迭代器返回的样本范围为 0-100。0 表示身体能量耗尽，100 表示身体已休息并充满能量。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 3.3.0

### **getElevationHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取给定时间段内的海拔历史记录，最远追溯至上次断电。

此函数始终返回最新的压力采样。迭代器中每个 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 之间的时间可能因设备而异。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        获取样本的顺序：

- 若为 `null`，样本将为 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

获取 SensoryHistoryIterator，并打印最近 SensorSample 中的海拔值

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getElevationHistory)) {
        return Toybox.SensorHistory.getElevationHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details 支持的设备

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
-   Edge® 130 Plus
-   Edge® 130
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的海拔历史迭代器。此迭代器返回的样本单位为米（m）。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 2.1.0

### **getHeartRateHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) or **Null** } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取指定时间段内的心率历史记录（截至上次断电）。

This function always returns the most recent heart rate samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        获取样本的顺序：

- 如果为 `null`，样本将按 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 列出

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

获取 SensoryHistoryIterator，并打印最近 SensorSample 中的心率值

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getHeartRateHistory)) {
        return Toybox.SensorHistory.getHeartRateHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的心率历史迭代器。此迭代器返回的样本单位为每分钟心跳次数（bpm）。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 2.1.0

### **getOxygenSaturationHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取给定时间段的血氧饱和度历史数据

此函数始终返回最新的传感器历史样本。迭代器中每个 \`SensorSample\` 之间的时间间隔可能因设备而异。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        获取样本的顺序：

- 若为 `null`，样本将为 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

获取 SensoryHistoryIterator，并打印最近 SensorSample 中的肌肉血氧饱和度值

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getOxygenSaturationHistory)) {
        // Set up the method with parameters
        return Toybox.SensorHistory.getOxygenSaturationHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的血氧饱和度历史迭代器。此迭代器返回的样本单位为百分比（%）。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 3.2.0

### **getPressureHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取给定时间段内的气压历史记录，最远追溯至上次断电。

此函数始终返回最新的压力采样。迭代器中每个 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 之间的时间可能因设备而异。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        The period of time from which to retrieve the samples.

- 如果 period 为 `null`，则检索所有可用历史记录

- 如果 period 是一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则检索给定 Duration 的历史记录

- 如果 period 是 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则检索最后指定数量的 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        检索样本的顺序。

- 如果 order 为 `null`，则样本将为 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

- Use the ORDER enumeration to explicitly select [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) or [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

获取 SensoryHistoryIterator，并打印最近 SensorSample 中的压力值

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getPressureHistory)) {
        return Toybox.SensorHistory.getPressureHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details 支持的设备

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的压力历史迭代器。此迭代器返回的样本单位为帕斯卡（Pa）。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 2.1.0

### **getStressHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取给定时间段的压力历史数据

此函数始终返回最新的传感器历史样本。迭代器中每个 \`SensorSample\` 之间的时间间隔可能因设备而异。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        获取样本的顺序：

- 若为 `null`，样本将为 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const)

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

Shows the use of StressHistoryIterator

```
using Toybox.ActivityMonitor;
using Toybox.System;

  // Create a method to get the SensorHistoryIterator object
  function getIterator() {
      // Check device for SensorHistory compatibility
      if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getStressHistory)) {
          // Set up the method with parameters
          return Toybox.SensorHistory.getStressHistory({});
      }
      return null;
  }

// get stress history iterator object
var stressIterator = getIterator();
var sample = stressIterator.next();                        // get the stress data

while (sample != null) {
    System.println("Sample: " + sample.data);        // print the current sample
    sample = stressIterator.next();
}
```

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
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
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的压力历史迭代器。此迭代器返回的样本范围为 0-100。数值越高表示压力越大，数值越低表示压力越小；100 表示身体已休息并充满能量。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 3.3.0

### **getTemperatureHistory(options as { :period as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**, :order as [SensorHistory.Order](/connect-iq/api-docs/Toybox/SensorHistory/#Order-module) } or **Null**)** as [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

获取给定时间段内的温度历史记录，最远追溯至上次断电。

This function always returns the most recent temperature samples. The time between each [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) in the iterator may be device dependent.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。可以为 `null`。

- :period — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

        获取样本的时间区间：

- 若为 `null`，则获取全部可用的历史记录

- 若为 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则获取指定 Duration 对应的历史记录

- 若为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则获取最近指定 Number 条记录


- :order — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        检索样本的顺序。

- 如果为 `null`，样本将按 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 列出

- 使用 ORDER_* 枚举显式选择 [ORDER\_NEWEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_NEWEST_FIRST-const) 或 [ORDER\_OLDEST\_FIRST](/connect-iq/api-docs/Toybox/SensorHistory/#ORDER_OLDEST_FIRST-const)



Example:

获取 SensoryHistoryIterator，并打印最近 SensorSample 中的温度值

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getTemperatureHistory)) {
        // Set up the method with parameters
        return Toybox.SensorHistory.getTemperatureHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in
// this case so the entire available history is returned with the
// newest samples returned first.
var sensorIter = getIterator();

// Print out the next entry in the iterator
if (sensorIter != null) {
    System.println(sensorIter.next().data);
}
```

:::details 支持的设备

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   Rey™
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
-   Venu® X1
-   Venu®
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® HR

:::

Returns:

- [SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/) —

    给定时间段的温度历史迭代器。此迭代器返回的样本单位为摄氏度（C）。


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 2.1.0
