---
title: "类：Toybox.Position.Info"
---
# 类：Toybox.Position.Info

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)


[显示全部](#)

## 概述

Position.Info 类包含定位系统提供的所有信息。

Position Info 可在每次调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 时获取，也可以按需获取。此类中的字段可能返回 `null`，因此使用前应检查 `null` 值。

起始版本：

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

## 实例成员摘要 [collapse](#)

- [**accuracy**](#accuracy-var) as [Position.Quality](/connect-iq/api-docs/Toybox/Position/#Quality-module)

    位置精度。

- [**altitude**](#altitude-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    高于平均海平面的海拔，单位为米 (m)。

- [**heading**](#heading-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    以弧度为单位的真北参考航向。

- [**position**](#position-var) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

    位置的纬度和经度。

- [**speed**](#speed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    水平速度，单位为米每秒 (mps)。

- [**when**](#when-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    获取的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 定位的 GPS 时间戳。


## 实例属性详情

### var accuracy as [Position.Quality](/connect-iq/api-docs/Toybox/Position/#Quality-module)

位置精度。

此值为以下值之一：good、usable、poor 或 not available，对应于 Position.QUALITY\_\* 常量。此值不能为 `null`。

起始版本：

API 级别 1.0.0

返回：

- [Position.Quality](/connect-iq/api-docs/Toybox/Position/#Quality-module) —

    一个 Position.QUALITY\_\* 值


### var altitude as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

高于平均海平面的海拔，单位为米 (m)。

海拔高度从 GPS 获取。如果没有 GPS，则不会返回有效的海拔高度。

起始版本：

API 级别 1.0.0

另见：

- [Meters above sea level](https://en.wikipedia.org/wiki/Metres_above_sea_level)


返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var heading as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

以弧度为单位的真北参考航向。

此项提供移动时的行进方向。如果设备支持，则在静止时提供罗盘方向。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var position as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

位置的纬度和经度。

如果 GPS 不可用，或处于 GPS 定位间隔期间（通常为 1 秒），则会使用上次已知的航向和速度推算位置（即航位推算）。经过一小段时间后，为避免位置误差过度累积，系统将停止推算位置。

起始版本：

API 级别 1.0.0

返回：

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

### var speed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

水平速度，单位为米每秒 (mps)。

速度按照以下顺序从最准确的来源得出：

1. GPS

2. 脚踏传感器

3. Accelerometer


起始版本：

API 级别 1.0.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var when as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

获取的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 定位的 GPS 时间戳。

起始版本：

API 级别 1.0.0

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)
