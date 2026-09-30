---
title: "Class: Toybox.AntPlus.TorqueEffectivenessPedalSmoothness"
---
# Class: Toybox.AntPlus.TorqueEffectivenessPedalSmoothness

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/)


[show all](#)

## 概述

The TorqueEffectivenessPedalSmoothness object represents the instantaneous torque effectiveness and pedal smoothness.

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

Since:

API 级别 2.2.0

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
-   Edge® MTB
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
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

- [**leftOrCombinedPedalSmoothness**](#leftOrCombinedPedalSmoothness-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Left pedal smoothness if separate is supported, else it is the combined smoothness (%).

- [**leftTorqueEffectiveness**](#leftTorqueEffectiveness-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Left torque effectiveness.

- [**rightPedalSmoothness**](#rightPedalSmoothness-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Right pedal smoothness (%).

- [**rightTorqueEffectiveness**](#rightTorqueEffectiveness-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    Right torque effectiveness.

- [**separatePedalSmoothnessSupport**](#separatePedalSmoothnessSupport-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    定义踏板平滑度是否独立。


## 实例属性详情

### var leftOrCombinedPedalSmoothness as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Left pedal smoothness if separate is supported, else it is the combined smoothness (%).

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called
var leftOrCombinedPedalSmoothness= TorqueEffectivenessPedalSmoothness.leftOrCombinedPedalSmoothness;

System.println("leftOrCombinedPedalSmoothness is set to: " + leftOrCombinedPedalSmoothness);
```

Since:

API 级别 2.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var leftTorqueEffectiveness as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Left torque effectiveness.

0xFF：无效值或负值（%）。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called
var leftTorqueEffectiveness = TorqueEffectivenessPedalSmoothness.leftTorqueEffectiveness;

System.println("leftTorqueEffectiveness is: " + leftTorqueEffectiveness);
```

Since:

API 级别 2.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var rightPedalSmoothness as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Right pedal smoothness (%).

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called
var rightPedalSmoothness = TorqueEffectivenessPedalSmoothness.rightPedalSmoothness;

System.println("rightPedalSmoothness is: " + rightPedalSmoothness);
```

Since:

API 级别 2.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var rightTorqueEffectiveness as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

Right torque effectiveness.

0xFF：无效值或负值（%）。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called
var rightTorqueEffectiveness= TorqueEffectivenessPedalSmoothness.rightTorqueEffectiveness;

System.println("rightTorqueEffectiveness is set to: " + rightTorqueEffectiveness);
```

Since:

API 级别 2.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

### var separatePedalSmoothnessSupport as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

定义踏板平滑度是否独立。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.BikePower.getTorqueEffectivenessPedalSmoothness(); already called
var separatePedalSmoothnessSupport = TorqueEffectivenessPedalSmoothness.separatePedalSmoothnessSupport;

System.println("separatePedalSmoothnessSupport is: " + separatePedalSmoothnessSupport);
```

Since:

API 级别 2.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

- `true` if pedal smoothness is separate

- `false` if combined
