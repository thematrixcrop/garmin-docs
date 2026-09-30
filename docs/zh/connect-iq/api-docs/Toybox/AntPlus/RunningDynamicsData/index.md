---
title: "Class: Toybox.AntPlus.RunningDynamicsData"
---
# 类：Toybox.AntPlus.RunningDynamicsData

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.RunningDynamicsData](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamicsData/)


[show all](#)

## 概述

所有跑步动态信息。字段可能返回 `null`，因此在使用这些值之前应检查是否为 `null`。

Since:

API 级别 2.4.0

:::details 支持的设备

-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
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
-   Forerunner® 645 Music
-   Forerunner® 645
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
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1

:::

## 实例成员摘要 [collapse](#)

- [**cadence**](#cadence-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    经过过滤的瞬时步频（0 - 255 步/分钟）。

- [**groundContactBalance**](#groundContactBalance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    经过过滤的瞬时触地平衡（0 - 100%，精度为 0.03125%）。

- [**groundContactTime**](#groundContactTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    经过过滤的瞬时触地时间（0 - 2047 毫秒）。

- [**stanceTime**](#stanceTime-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    经过过滤的瞬时站立时间百分比（0 - 100%，精度为 0.25%）。

- [**stepCount**](#stepCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    步数（会循环计数！）（0 - 127 步）。

- [**stepLength**](#stepLength-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    步长（0 - 8191 mm）。

- [**verticalOscillation**](#verticalOscillation-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    经过过滤的瞬时垂直振幅（0 - 2047 毫米，精度为 0.25 毫米）。

- [**verticalRatio**](#verticalRatio-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Vertical ratio (0 - 100%, 0.03125% precision).

- [**walkingFlag**](#walkingFlag-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    步行时为 `true`，跑步时为 `false`。


## 实例属性详情

### var cadence as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

经过过滤的瞬时步频（0 - 255 步/分钟）

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var groundContactBalance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

经过过滤的瞬时触地平衡（0 - 100%，精度为 0.03125%）

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var groundContactTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

经过过滤的瞬时触地时间（0 - 2047 毫秒）

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var stanceTime as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

经过过滤的瞬时站立时间百分比（0 - 100%，精度为 0.25%）

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var stepCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

步数（会循环计数！）（0 - 127 步）

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var stepLength as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

步长（0 - 8191 mm）

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var verticalOscillation as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

经过过滤的瞬时垂直振幅（0 - 2047 毫米，精度为 0.25 毫米）

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var verticalRatio as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Vertical ratio (0 - 100%, 0.03125% precision)

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var walkingFlag as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

步行时为 `true`，跑步时为 `false`

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)
