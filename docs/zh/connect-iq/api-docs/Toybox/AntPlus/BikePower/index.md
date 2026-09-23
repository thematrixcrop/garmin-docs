---
title: "Class: Toybox.AntPlus.BikePower"
---
# Class: Toybox.AntPlus.BikePower

Inherits:

Toybox.AntPlus.Device

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)

-   [Toybox.AntPlus.BikePower](/connect-iq/api-docs/Toybox/AntPlus/BikePower/)


[show all](#)

## Overview

Represents a Bike Power Device instance.

## See Also:

-   [BikePowerListener example for full MyBikePowerListener implementation](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/)

-   [BikePowerListener example for examples of onCalculated\* methods available in {Toybox::AntPlus::BikePowerListener BikePowerListener}](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/)


Example:

```
using Toybox.AntPlus;

// Assuming Valid BikePowerListener object "MyBikePowerListener"

// Initialize the AntPlus.BikePowerListener object
listener = new MyBikePowerListener();

// Initialize the AntPlus.BikePower object with a listener
bikePower = new AntPlus.BikePower(listener);

var calculatedPower = bikePower.getCalculatedCadence();
var calculatedPower = bikePower.getCalculatedPower();

// ...etc
```

Since:

API Level 2.2.0

:::details Supported Devices

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

## Instance Method Summary [collapse](#)

-   [**getCalculatedCadence**](#getCalculatedCadence-instance_function)() as [AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/)

    Get the current calculated crank cadence.

-   [**getCalculatedPower**](#getCalculatedPower-instance_function)() as [AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/)

    Retrieve the current calculated power.

-   [**getCalculatedWheelDistance**](#getCalculatedWheelDistance-instance_function)() as [AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/)

    Retrieve the current calculated wheel distance.

-   [**getCalculatedWheelSpeed**](#getCalculatedWheelSpeed-instance_function)() as [AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/)

    Retrieve the current calculated wheel speed.

-   [**getPedalPowerBalance**](#getPedalPowerBalance-instance_function)() as [AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/)

    Retrieve the current pedal power balance.

-   [**getTorqueEffectivenessPedalSmoothness**](#getTorqueEffectivenessPedalSmoothness-instance_function)() as [AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/)

    Retrieve the current torque effectiveness and pedal smoothness.

-   [**initialize**](#initialize-instance_function)(listener as [AntPlus.BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/) or **Null**)

    Constructor.


## Instance Method Details

### **getCalculatedCadence()** as [AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/)

Get the current calculated crank cadence.

Returns:

-   [AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/) —

    The current calculated crank cadence


Since:

API Level 2.2.0

### **getCalculatedPower()** as [AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/)

Retrieve the current calculated power.

Returns:

-   [AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/) —

    The current calculated power


Since:

API Level 2.2.0

### **getCalculatedWheelDistance()** as [AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/)

Retrieve the current calculated wheel distance.

Returns:

-   [AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/) —

    The current calculated wheel distance


Since:

API Level 2.2.0

### **getCalculatedWheelSpeed()** as [AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/)

Retrieve the current calculated wheel speed.

Returns:

-   [AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/) —

    The current calculated wheel speed


Since:

API Level 2.2.0

### **getPedalPowerBalance()** as [AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/)

Retrieve the current pedal power balance.

Returns:

-   [AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/) —

    The pedal power balance


Since:

API Level 2.2.0

### **getTorqueEffectivenessPedalSmoothness()** as [AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/)

Retrieve the current torque effectiveness and pedal smoothness.

Returns:

-   [AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/) —

    The current torque effectiveness & pedal smoothness


Since:

API Level 2.2.0

### **initialize(listener as [AntPlus.BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/) or **Null**)**

Constructor

Parameters:

-   listener — ([AntPlus.BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/)) —

    The bike power instance optionally takes an extension of the [BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/) class as a parameter. `null` can be passed in instead if the user plans to only poll for data using the getCalculated\* methods.


Since:

API Level 2.2.0
