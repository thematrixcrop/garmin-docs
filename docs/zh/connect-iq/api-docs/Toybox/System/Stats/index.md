---
title: "Class: Toybox.System.Stats"
---
# 类：Toybox.System.Stats

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)


[show all](#)

## 概述

表示设备上可用的各种统计信息，例如电池电量和内存使用情况。

## 另见：

- [System.getSystemStats()](/connect-iq/api-docs/Toybox/System/#getSystemStats-instance_function)


Example:

```
using Toybox.System;
var myStats = System.getSystemStats();
System.println(myStats.battery);
System.println(myStats.totalMemory);
```

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**battery**](#battery-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    剩余电池电量百分比。

- [**batteryInDays**](#batteryInDays-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    剩余电池续航天数。

- [**charging**](#charging-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    电池充电指示器。

- [**freeMemory**](#freeMemory-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    当前可用内存，单位为字节。

- [**solarIntensity**](#solarIntensity-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    一个 0-100 的 [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) 值，用于描述太阳能传感器的充电效率（如果可用）。

- [**totalMemory**](#totalMemory-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    以字节为单位的可用内存总量。

- [**usedMemory**](#usedMemory-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    应用使用的内存，单位为字节。


## 实例属性详情

### var battery as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

剩余电池电量百分比。

注意：

某些设备从充电底座或充电线缆上移除后，可能会立即报告略低于 100% 的电量。当设备处于充电状态时，充电器会在电池充满至 100% 后禁用自身。随后电池会非常缓慢地放电，直到达到滞回阈值，此时充电器会重新启用。这样设计是为了在设备长时间留在充电器上时延长电池寿命。当设备达到满电状态后，Garmin 会在充电页面上人为地将电量指示器锁定为 100%，以掩盖这种轻微的充电周期波动。

Since:

API 级别 1.0.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var batteryInDays as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

剩余电池续航天数。

Since:

API 级别 3.3.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var charging as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

电池充电指示器。如果设备已连接到充电底座或充电线缆，无论设备是否已充满电，此值都将设置为 `true`。

Since:

API 级别 3.0.0

另见：

- [Stats.battery](/connect-iq/api-docs/Toybox/System/Stats/#battery-var)


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var freeMemory as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前可用内存，单位为字节。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var solarIntensity as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

一个 0-100 的 [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) 值，用于描述太阳能传感器的充电效率（如果可用）。如果设备不支持太阳能，则设置为 `null`；如果设备当前未充电，则设置为负数。

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var totalMemory as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

以字节为单位的可用内存总量。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var usedMemory as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

应用使用的内存，单位为字节。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
