---
title: "Class: Toybox.Sensor.AccelerometerData"
---
# Class: Toybox.Sensor.AccelerometerData

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/)


[show all](#)

## 概述

用于存储加速度计采样数据的类。

Each field specified is an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of [Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Number](/connect-iq/api-docs/Toybox/Lang/Number/) values. The values for the x, y, and z axes are in Milli G units. For reference, 1000 Milli G = 1 G. If not `null`, all fields are of equal size. This is typically used in a callback method used by [registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function)

## 另见：

- [Toybox.Sensor.SensorData](/connect-iq/api-docs/Toybox/Sensor/SensorData/)

- [G-Force Basic Overview](http://www.gforces.net/what-is-g-force-meaning.html)


Since:

API 级别 2.3.0

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

## 实例成员摘要 [collapse](#)

- [**pitch**](#pitch-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or **Null**

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of pitch values as [Floats](/connect-iq/api-docs/Toybox/Lang/Float/) in degrees.

- [**power**](#power-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of vector power values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

- [**roll**](#roll-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or **Null**

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of roll values as [Floats](/connect-iq/api-docs/Toybox/Lang/Float/) in degrees.

- [**timestamp**](#timestamp-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of timestamp values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in milliseconds.

- [**x**](#x-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of x axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

- [**y**](#y-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of y axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

- [**z**](#z-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of z axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.


## 实例属性详情

### var pitch as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or **Null**

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of pitch values as [Floats](/connect-iq/api-docs/Toybox/Lang/Float/) in degrees. Can be `null`.

Pitch values are calculated with the equation atan2(y, sqrt(x^2 + z^2)).

Since:

API 级别 2.3.0

另见：

- [Tilt Sensing Using a Three-Axis Accelerometer](https://www.nxp.com/docs/en/application-note/AN3461.pdf)


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var power as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of vector power values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units. Can be `null`.

Since:

API 级别 2.3.0

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var roll as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or **Null**

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of roll values as [Floats](/connect-iq/api-docs/Toybox/Lang/Float/) in degrees. Can be `null`.

Roll values are calculated with the equation atan2(-x, z).

Since:

API 级别 2.3.0

另见：

- [Tilt Sensing Using a Three-Axis Accelerometer](https://www.nxp.com/docs/en/application-note/AN3461.pdf)


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var timestamp as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of timestamp values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in milliseconds. Can be `null`.

Since:

API 级别 5.1.1

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var x as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of x axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

Since:

API 级别 2.3.0

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var y as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of y axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

Since:

API 级别 2.3.0

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var z as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

The [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of z axis values as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/) in millig-units.

Since:

API 级别 2.3.0

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)
