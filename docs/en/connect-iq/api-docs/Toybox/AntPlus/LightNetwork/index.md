---
title: "Class: Toybox.AntPlus.LightNetwork"
---
# Class: Toybox.AntPlus.LightNetwork

Inherits:

Toybox.AntPlus.Device

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)

-   [Toybox.AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/)


[show all](#)

## Overview

A class representing a network of bike lights

Example:

A basic example of LightNetwork and LightNetworkListener setup

```
using Toybox.AntPlus;
class MyLightNetworkListener extends AntPlus.LightNetworkListener {
    var mNetworkState = 0;

    function onLightNetworkStateUpdate(data) {
        mNetworkState = data;
    }
}

// In app class…
    function initialize() {
        mLightNetworkListener = new MyLightNetworkListener();
        mLightNetwork = new AntPlus.LightNetwork(mLightNetworkListener);
    }

    function onUpdate(dc) {
        // Call parent's onUpdate(dc) to redraw the layout
        View.onUpdate(dc);

        if (null != mLightNetworkListener.mNetworkState) {
            dc.drawText(
                10,
                10,
                Gfx.FONT_TINY,
                mLightNetworkListener.mNetworkState.toString(),
                Gfx.TEXT_JUSTIFY_LEFT);
        }

        if (mode < 15) {
            mode++;
        }
        else {
            mode = 0;
        }
        mLightNetwork.setHeadlightsMode(mode);
    }
```

Since:

API Level 2.2.0

:::details Supported Devices

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

## Instance Method Summary [collapse](#)

-   [**getBikeLights**](#getBikeLights-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)\> or **Null**

    Get a list of lights in the network.

-   [**getNetworkMode**](#getNetworkMode-instance_function)() as [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module)

    Get the light network mode.

-   [**getNetworkState**](#getNetworkState-instance_function)() as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)

    Get the light network state.

-   [**initialize**](#initialize-instance_function)(listener as [AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) or **Null**)

    Constructor.

-   [**restoreHeadlightsNetworkModeControl**](#restoreHeadlightsNetworkModeControl-instance_function)() as **Void**

    Bring all headlights under the control of whichever light network mode has been chosen by the user.

-   [**restoreTaillightsNetworkModeControl**](#restoreTaillightsNetworkModeControl-instance_function)() as **Void**

    Bring all taillights under the control of whichever light network mode has been chosen by the user.

-   [**setHeadlightsMode**](#setHeadlightsMode-instance_function)(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) as **Void**

    Tell all headlights to enter the same mode.

-   [**setTaillightsMode**](#setTaillightsMode-instance_function)(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) as **Void**

    Tell all taillights to enter the same mode.

-   [**toggleSignalLight**](#toggleSignalLight-instance_function)(left as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    A signal switch for right and left signals.


## Instance Method Details

### **getBikeLights()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)\> or **Null**

Get a list of lights in the network.

Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    List of lights that are part of the network, `null` if light network state is not [LIGHT\_NETWORK\_STATE\_FORMED](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_STATE_FORMED-const)


Since:

API Level 2.2.0

### **getNetworkMode()** as [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module)

Get the light network mode.

Returns:

-   [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module) —

    The [LIGHT\_NETWORK\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_MODE_AUTO-const) enum value


Since:

API Level 2.2.0

### **getNetworkState()** as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)

Get the light network state.

Returns:

-   [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module) —

    The [LIGHT\_NETWORK\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_STATE_FORMED-const) enum value


Since:

API Level 2.2.0

### **initialize(listener as [AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) or **Null**)**

Constructor

Parameters:

-   listener — ([AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/)) —

    The light network instance optionally takes an extension of the [LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) class as a parameter. `null` can be passed in instead if the user plans to only poll for data using the get\* methods.


Since:

API Level 2.2.0

### **restoreHeadlightsNetworkModeControl()** as **Void**

Bring all headlights under the control of whichever light network mode has been chosen by the user.

Since:

API Level 2.2.0

### **restoreTaillightsNetworkModeControl()** as **Void**

Bring all taillights under the control of whichever light network mode has been chosen by the user.

Since:

API Level 2.2.0

### **setHeadlightsMode(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module))** as **Void**

Tell all headlights to enter the same mode.

You should check the capable modes of each headlight in the network before sending light modes, as lights will ignore commands to go into modes that they do not support. Lights whose modes are set here will not be controlled by the Light Network Mode until they are restored OR until the user changes the Light Network Mode outside of ConnectIQ.

Parameters:

-   mode — ([AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) —

    The [LIGHT\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_MODE_AUTO-const) enum value


Since:

API Level 2.2.0

### **setTaillightsMode(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module))** as **Void**

Tell all taillights to enter the same mode.

You should check the capable modes of each taillight in the network before sending light modes, as lights will ignore commands to go into modes that they do not support. Lights whose modes are set here will not be controlled by the Light Network Mode until they are restored OR until the user changes the Light Network Mode outside of ConnectIQ.

Parameters:

-   mode — ([AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) —

    The [LIGHT\_MODE\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_MODE_AUTO-const) enum value


Since:

API Level 2.2.0

### **toggleSignalLight(left as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

A signal switch for right and left signals.

-   If signal light is engaged, disengage it.

-   If signal light is disengaged, engage it.


\*This will automatically disengage the opposite signal if it is currently engaged.

Parameters:

-   left — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    -   `true` to control left signal

    -   `false` to control right signal



Since:

API Level 2.2.0
