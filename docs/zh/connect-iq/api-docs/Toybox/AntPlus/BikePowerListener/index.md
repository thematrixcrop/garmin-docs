---
title: "Class: Toybox.AntPlus.BikePowerListener"
---
# Class: Toybox.AntPlus.BikePowerListener

Inherits:

Toybox.AntPlus.DeviceListener

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/)

-   [Toybox.AntPlus.BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/)


[show all](#)

## Overview

Listener class for Bike Power.

Example:

An implementation of BikePowerListener

```
using Toybox.AntPlus;
class MyBikePowerListener extends AntPlus.BikePowerListener {

    hidden enum {
        ITEM_POWER,
        ITEM_DISTANCE,
        ITEM_SPEED
    }

    hidden const INDICATOR_HEIGHT_DISTANCE = 130;
    hidden const INDICATOR_HEIGHT_POWER = 100;
    hidden const INDICATOR_HEIGHT_SPEED = 160;

    var items;

    //! Initializes class variables
    function initialize() {
        BikePowerListener.initialize();
        items = [
            new ListItem("power", INDICATOR_HEIGHT_POWER, Gfx.COLOR_PINK),
            new ListItem("distance", INDICATOR_HEIGHT_DISTANCE, Gfx.COLOR_BLUE),
            new ListItem("speed", INDICATOR_HEIGHT_SPEED, Gfx.COLOR_GREEN)
        ];
    }

    //! Sets the isPowerUpdated boolean to true
    //! Allows view to know an update has been received
    //! Takes a data parameter which is the CalculatedPower object that has been
    //! modified
    function onCalculatedPowerUpdate(data) {
        items[ITEM_POWER].setValue(data.power);
    }

    //! Sets the isDistanceUpdated boolean to true
    //! Allows view to know an update has been received
    //! Takes a data parameter which is the CalculatedWheelDistance object that
    //! has been modified
    function onCalculatedWheelDistanceUpdate(data) {
        items[ITEM_DISTANCE].setValue(data.distance);
    }

    //! Sets the isSpeedUpdated boolean to true
    //! Allows view to know an update has been received
    //! Takes a data parameter which is the CalculatedWheelSpeed object that has
    //! been modified
    function onCalculatedSpeedUpdate(data) {
        items[ITEM_SPEED].setValue(data.wheelSpeed);
    }
}
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

-   [**initialize**](#initialize-instance_function)()

    Constructor.

-   [**onCalculatedCadenceUpdate**](#onCalculatedCadenceUpdate-instance_function)(data as [AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/)) as **Void**

    Callback when calculated cadence is updated (max freq 1Hz).

-   [**onCalculatedPowerUpdate**](#onCalculatedPowerUpdate-instance_function)(data as [AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/)) as **Void**

    Callback when calculated power is updated (max freq 1Hz).

-   [**onCalculatedWheelDistanceUpdate**](#onCalculatedWheelDistanceUpdate-instance_function)(data as [AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/)) as **Void**

    Callback when calculated wheel distance is updated (max freq 1Hz).

-   [**onCalculatedWheelSpeedUpdate**](#onCalculatedWheelSpeedUpdate-instance_function)(data as [AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/)) as **Void**

    Callback when calculated wheel speed is updated (max freq 1Hz).

-   [**onPedalPowerBalanceUpdate**](#onPedalPowerBalanceUpdate-instance_function)(data as [AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/)) as **Void**

    Callback when power balance is updated (max freq 1Hz).

-   [**onTorqueEffectivenessPedalSmoothnessUpdate**](#onTorqueEffectivenessPedalSmoothnessUpdate-instance_function)(data as [AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/)) as **Void**

    Callback when torque effectiveness & pedal smoothness are updated (max freq 1Hz).


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 2.2.0

### **onCalculatedCadenceUpdate(data as [AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/))** as **Void**

Callback when calculated cadence is updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/)) —

    Data with updated cadence information


Since:

API Level 2.2.0

### **onCalculatedPowerUpdate(data as [AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/))** as **Void**

Callback when calculated power is updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/)) —

    Data with updated power information


Since:

API Level 2.2.0

### **onCalculatedWheelDistanceUpdate(data as [AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/))** as **Void**

Callback when calculated wheel distance is updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/)) —

    Data with updated distance information


Since:

API Level 2.2.0

### **onCalculatedWheelSpeedUpdate(data as [AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/))** as **Void**

Callback when calculated wheel speed is updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/)) —

    Data with updated speed information


Since:

API Level 2.2.0

### **onPedalPowerBalanceUpdate(data as [AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/))** as **Void**

Callback when power balance is updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/)) —

    Data with updated balance information.


Since:

API Level 2.2.0

### **onTorqueEffectivenessPedalSmoothnessUpdate(data as [AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/))** as **Void**

Callback when torque effectiveness & pedal smoothness are updated (max freq 1Hz)

Parameters:

-   data — ([AntPlus.TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/)) —

    Data with updated torque effectiveness & pedal smoothness information


Since:

API Level 2.2.0
