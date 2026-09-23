---
title: "Class: Toybox.Activity.WorkoutStepInfo"
---
# Class: Toybox.Activity.WorkoutStepInfo

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/)


[show all](#)

## Overview

The WorkoutStepInfo class contains information about the current workout.

This information can be retrieved with the [getCurrentWorkoutStep()](/connect-iq/api-docs/Toybox/Activity/#getCurrentWorkoutStep-instance_function) or [getNextWorkoutStep()](/connect-iq/api-docs/Toybox/Activity/#getNextWorkoutStep-instance_function) methods.

Since:

API Level 3.2.0

:::details Supported Devices

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

## Instance Member Summary [collapse](#)

-   [**intensity**](#intensity-var) as [Activity.WorkoutIntensity](/connect-iq/api-docs/Toybox/Activity/#WorkoutIntensity-module)

    The intensity of the step.

-   [**name**](#name-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The name of the current step.

-   [**notes**](#notes-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The notes for the current step.

-   [**sport**](#sport-var) as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

    The sport for the workout step.

-   [**step**](#step-var) as [Activity.WorkoutStep](/connect-iq/api-docs/Toybox/Activity/WorkoutStep/) or [Activity.WorkoutIntervalStep](/connect-iq/api-docs/Toybox/Activity/WorkoutIntervalStep/)

    Duration and target information about the step.

-   [**subSport**](#subSport-var) as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

    The subsport for the workout step.


## Instance Attribute Details

### var intensity as [Activity.WorkoutIntensity](/connect-iq/api-docs/Toybox/Activity/#WorkoutIntensity-module)

The intensity of the step

Since:

API Level 3.2.0

Returns:

-   [Activity.WorkoutIntensity](/connect-iq/api-docs/Toybox/Activity/#WorkoutIntensity-module) —

    a WORKOUT\_INTENSITY\_\* value


### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The name of the current step

Since:

API Level 3.2.0

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var notes as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The notes for the current step

Since:

API Level 3.2.0

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

The sport for the workout step

Since:

API Level 3.2.0

Returns:

-   [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    A SPORT\_\* value


### var step as [Activity.WorkoutStep](/connect-iq/api-docs/Toybox/Activity/WorkoutStep/) or [Activity.WorkoutIntervalStep](/connect-iq/api-docs/Toybox/Activity/WorkoutIntervalStep/)

Duration and target information about the step

Since:

API Level 3.2.0

Returns:

-   [Activity.WorkoutStep](/connect-iq/api-docs/Toybox/Activity/WorkoutStep/), [Activity.WorkoutIntervalStep](/connect-iq/api-docs/Toybox/Activity/WorkoutIntervalStep/)

### var subSport as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

The subsport for the workout step. Currently only valid for breathing and swim workouts

Since:

API Level 3.2.0

Returns:

-   [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) —

    A SUB\_SPORT\_\* value, or `null`
