---
title: "Class: Toybox.Activity.WorkoutStep"
---
# Class: Toybox.Activity.WorkoutStep

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Activity.WorkoutStep](/connect-iq/api-docs/Toybox/Activity/WorkoutStep/)


[show all](#)

## 概述

The WorkoutStep class contains information about the current workout step.

Since:

API 级别 3.2.0

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
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
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
-   Forerunner® 645 Music
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
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例成员摘要 [collapse](#)

- [**durationType**](#durationType-var) as [Activity.WorkoutStepDurationType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepDurationType-module)

    The duration of the workout step.

- [**durationValue**](#durationValue-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    How long the step should last.

- [**targetType**](#targetType-var) as [Activity.WorkoutStepTargetType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepTargetType-module)

    The target of the workout step.

- [**targetValueHigh**](#targetValueHigh-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The high value for the target range.

- [**targetValueLow**](#targetValueLow-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The low value for the target range.


## 实例属性详情

### var durationType as [Activity.WorkoutStepDurationType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepDurationType-module)

The duration of the workout step

Since:

API 级别 3.2.0

Returns:

- [Activity.WorkoutStepDurationType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepDurationType-module) —

    a WORKOUT\_STEP\_DURATION\_\* value


### var durationValue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

How long the step should last

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A value whose meaning is dependent on the value of durationType


### var targetType as [Activity.WorkoutStepTargetType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepTargetType-module)

The target of the workout step

Since:

API 级别 3.2.0

Returns:

- [Activity.WorkoutStepTargetType](/connect-iq/api-docs/Toybox/Activity/#WorkoutStepTargetType-module) —

    A WORKOUT\_STEP\_TARGET\_\* value


### var targetValueHigh as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The high value for the target range.

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A value whose meaning is dependent on the value of targetType


### var targetValueLow as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The low value for the target range.

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A value whose meaning is dependent on the value of targetType
