---
title: "Module: Toybox.ActivityMonitor"
---
# Module: Toybox.ActivityMonitor

## 概述

The ActivityMonitor module contains the interface for Activity Monitoring data.

Example:

Shows the use of HeartRateIterator, HeartRateSample, and Info

```
using Toybox.ActivityMonitor;
using Toybox.System;

// get a HeartRateIterator object; oldest sample first
var hrIterator = ActivityMonitor.getHeartRateHistory(null, false);
var previous = hrIterator.next();                                   // get the previous HR
var lastSampleTime = null;                                          // get the last

while (true) {
    var sample = hrIterator.next();
    if (null != sample) {                                           // null check
        if (sample.heartRate != ActivityMonitor.INVALID_HR_SAMPLE   // check for invalid samples
            && previous.heartRate
            != ActivityMonitor.INVALID_HR_SAMPLE) {
                lastSampleTime = sample.when;
                System.println("Previous: " + previous.heartRate);  // print the previous sample
                System.println("Sample: " + sample.heartRate);      // print the current sample
        }
    }
}

// get ActivityMonitor info
var info = ActivityMonitor.getInfo();

var steps = info.steps;
var calories = info.calories;

System.println("You have taken: " + steps +
               " steps and burned: " + calories + " calories!");
```

Since:

API 级别 1.0.0

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
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
-   vívoactive®

:::

## 命名空间下的类

类：[ActiveMinutes](/connect-iq/api-docs/Toybox/ActivityMonitor/ActiveMinutes/), [HeartRateIterator](/connect-iq/api-docs/Toybox/ActivityMonitor/HeartRateIterator/), [HeartRateSample](/connect-iq/api-docs/Toybox/ActivityMonitor/HeartRateSample/), [History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/), [Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | INVALID\_HR\_SAMPLE | 255 |
API 级别 1.2.2

|

Indicates that the given heart rate sample is invalid.

|
| 类型 | MOVE\_BAR\_LEVEL\_MAX | 5 |

API 级别 1.0.0

|

The maximum level of the move bar

|
| 类型 | MOVE\_BAR\_LEVEL\_MIN | 0 |

API 级别 1.0.0

|

The minimum level of the move bar

|

## 实例方法摘要 [collapse](#)

- [**getHeartRateHistory**](#getHeartRateHistory-instance_function)(period as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, newestFirst as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [ActivityMonitor.HeartRateIterator](/connect-iq/api-docs/Toybox/ActivityMonitor/HeartRateIterator/)

    获取指定时间段内的心率历史记录（截至上次断电）。

- [**getHistory**](#getHistory-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/)\>

    Get an Array of ActivityMonitor.History objects.

- [**getInfo**](#getInfo-instance_function)() as [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)

    获取当前 [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)。


## 实例方法详情

### **getHeartRateHistory(period as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, newestFirst as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [ActivityMonitor.HeartRateIterator](/connect-iq/api-docs/Toybox/ActivityMonitor/HeartRateIterator/)

获取指定时间段内的心率历史记录（截至上次断电）。

This function always returns the most recent heart rate samples. The time between each HeartRateSample in the iterator may be device dependent.

Parameters:

- period — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The period of time from which to retrieve heart rate samples

- 如果 period 为 `null`，则检索所有可用历史记录

- 如果 period 是一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，则检索给定 Duration 的历史记录

- If period is a [Number](/connect-iq/api-docs/Toybox/Lang/Number/), then the last Number entries are retrieved


- newestFirst — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    The order in which to retrieve heart rate samples

- `true` to get the samples newest first

- `false` to get the samples oldest first



:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
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
-   Garmin Swim™ 2
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

Returns:

- [ActivityMonitor.HeartRateIterator](/connect-iq/api-docs/Toybox/ActivityMonitor/HeartRateIterator/) —

    An iterator for the heart rate history for the given period


Since:

API 级别 1.2.1

### **getHistory()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/)\>

Get an Array of ActivityMonitor.History objects

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array of [ActivityMonitor.History](/connect-iq/api-docs/Toybox/ActivityMonitor/History/) objects.

- The Array will be a maximum of 7 objects

- The objects will be inserted most recent first



Since:

API 级别 1.0.0

### **getInfo()** as [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)

Get the current [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/)

Returns:

- [ActivityMonitor.Info](/connect-iq/api-docs/Toybox/ActivityMonitor/Info/) —

    An Info object with the current information.


Since:

API 级别 1.0.0
