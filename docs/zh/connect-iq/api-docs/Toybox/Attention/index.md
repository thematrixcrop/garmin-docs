---
title: "Module: Toybox.Attention"
---
# Module: Toybox.Attention

## 概述

The Attention module provides the ability to play pre-defined sounds, methods for managing vibration, and control of the back light.

Not all devices fully support this module, so `has` checks are recommended. For example, the vivoactive does not have a tone generator and will trigger an error if an app attempts to play sounds.

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 微件


## 命名空间下的类

类：[BacklightOnTooLongException](/connect-iq/api-docs/Toybox/Attention/BacklightOnTooLongException/), [ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/), [VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/)

## 常量摘要

### Tone

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TONE\_KEY | 0 |
API 级别 1.0.0

|

Indicates that a key was pressed

|
| TONE\_START | 1 |

API 级别 1.0.0

|

Indicates that an activity has started

|
| TONE\_STOP | 2 |

API 级别 1.0.0

|

Indicates that an activity has stopped

|
| TONE\_MSG | 3 |

API 级别 1.0.0

|

Indicates that a message is available

|
| TONE\_ALERT\_HI | 4 |

API 级别 1.0.0

|

An alert ending with a high note

|
| TONE\_ALERT\_LO | 5 |

API 级别 1.0.0

|

An alert ending with a low note

|
| TONE\_LOUD\_BEEP | 6 |

API 级别 1.0.0

|

A loud beep

|
| TONE\_INTERVAL\_ALERT | 7 |

API 级别 1.0.0

|

Indicates a change in interval

|
| TONE\_ALARM | 8 |

API 级别 1.0.0

|

Indicates an alarm has triggered

|
| TONE\_RESET | 9 |

API 级别 1.0.0

|

Indicates that the activity was reset

|
| TONE\_LAP | 10 |

API 级别 1.0.0

|

Indicates that the user has completed a lap

|
| TONE\_CANARY | 11 |

API 级别 1.0.0

|

An annoying sound to get the users attention

|
| TONE\_TIME\_ALERT | 12 |

API 级别 1.0.0

|

An alert that a time threshold has been met

|
| TONE\_DISTANCE\_ALERT | 13 |

API 级别 1.0.0

|

An alert that a distance threshold has been met

|
| TONE\_FAILURE | 14 |

API 级别 1.0.0

|

Indicates that the activity was a failure

|
| TONE\_SUCCESS | 15 |

API 级别 1.0.0

|

Indicates that the activity was a success

|
| TONE\_POWER | 16 |

API 级别 1.0.0

|

The power on tone

|
| TONE\_LOW\_BATTERY | 17 |

API 级别 1.0.0

|

Indicates that the device has low battery power

|
| TONE\_ERROR | 18 |

API 级别 1.0.0

|

Indicates an error occurred

|

### FlashlightMode

Flashlight modes

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_MODE\_OFF | 0 |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_MODE\_ON | 1 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_MODE\_STROBE | 2 |

API 级别 3.4.3

 |  |

### FlashlightColor

Flashlight colors

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_COLOR\_WHITE | 0xFFFFFF |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_COLOR\_GREEN | 0x00FF00 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_COLOR\_RED | 0xFF0000 |

API 级别 3.4.3

 |  |

### FlashlightBrightness

Flashlight brightness

Constants map to device-specific brightness levels

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_BRIGHTNESS\_LOW | 255 |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_BRIGHTNESS\_MEDIUM | 254 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_BRIGHTNESS\_HIGH | 253 |

API 级别 3.4.3

 |  |

### FlashlightStrobeMode

Flashlight strobe modes

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_STROBE\_MODE\_BLINK | 0 |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_STROBE\_MODE\_PULSE | 1 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_STROBE\_MODE\_BEACON | 2 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_STROBE\_MODE\_BLITZ | 3 |

API 级别 3.4.3

 |  |

### FlashlightStrobeSpeed

Flashlight strobe speeds

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_STROBE\_SPEED\_SLOW | 0 |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_STROBE\_SPEED\_MEDIUM | 1 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_STROBE\_SPEED\_FAST | 2 |

API 级别 3.4.3

 |  |

### FlashlightResult

Flashlight result codes

Since:

API 级别 3.4.3

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FLASHLIGHT\_RESULT\_SUCCESS | 0 |
API 级别 3.4.3

 |  |
| FLASHLIGHT\_RESULT\_INVALID\_COLOR | 1 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_RESULT\_INVALID\_BRIGHTNESS | 2 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_RESULT\_INVALID\_MODE | 3 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_RESULT\_INVALID\_SPEED | 4 |

API 级别 3.4.3

 |  |
| FLASHLIGHT\_RESULT\_FAILURE | 5 |

API 级别 3.4.3

 |  |

## 实例方法摘要 [collapse](#)

- [**backlight**](#backlight-instance_function)(setting as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    控制显示背光。

- [**hasFlashlightColor**](#hasFlashlightColor-instance_function)(color as [Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if a given flashlight color is supported by this device.

- [**playTone**](#playTone-instance_function)(options as [Attention.Tone](/connect-iq/api-docs/Toybox/Attention/#Tone-module) or { :toneProfile as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)\>, :repeatCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as **Void**

    播放音调。

- [**setFlashlightMode**](#setFlashlightMode-instance_function)(mode as [Attention.FlashlightMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightMode-module), options as { :color as [Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module), :brightness as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Attention.FlashlightBrightness](/connect-iq/api-docs/Toybox/Attention/#FlashlightBrightness-module), :strobeMode as [Attention.FlashlightStrobeMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeMode-module), :strobeSpeed as [Attention.FlashlightStrobeSpeed](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeSpeed-module) } or **Null**) as [Attention.FlashlightResult](/connect-iq/api-docs/Toybox/Attention/#FlashlightResult-module)
- [**vibrate**](#vibrate-instance_function)(vibeProfiles as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Attention.VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/)\>) as **Void**

    启动振动马达。


## 实例方法详情

### **backlight(setting as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

控制显示背光。

The backlight will always respect the backlight timeout settings on the device. Behavior of this feature may also change depending on device settings. For example, if a device is set to activate the back light with key presses, the backlight will toggle on with key presses even if the app is written to turn off the back light with a key press.

On products that use a gesture enabled display, calling this API will suppress the gesture detection for the period that the backlight is on. Calling this repeatedly can hold the display on, but if the product has burn in protection an exception will be thrown if you attempt to keep the display enabled for too long (e.g. over 1 minute).

注意：

Passing a [Float](/connect-iq/api-docs/Toybox/Lang/Float/) is only supported with ConnectIQ 3.2.1 and later.

Parameters:

- setting — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

- If `setting` is a [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), `false` will disable the backlight and `true` will enable the backlight at the system backlight level.

- If `setting` is a [Float](/connect-iq/api-docs/Toybox/Lang/Float/), the value 0.0 will disable the backlight and values greater than 0.0 and less than or equal to 1.0 will enable the backlight at the specified brightness.



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

Since:

API 级别 1.0.0

Throws:

- BacklightOnTooLongException On products with burn in protection, this exception is thrown if the backlight is held on for too long continuously

- InvalidOptionsException If the Float value is outside the valid range.


### **hasFlashlightColor(color as [Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if a given flashlight color is supported by this device

Parameters:

- color — ([Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module)) —

    Color to check


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
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
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1

:::

Returns:

- Returns true if the given color is supported, otherwise false.


Since:

API 级别 3.4.3

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果从 watch-app 以外的应用类型调用，则引发。


### **playTone(options as [Attention.Tone](/connect-iq/api-docs/Toybox/Attention/#Tone-module) or { :toneProfile as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Attention.ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/)\>, :repeatCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as **Void**

播放音调。

注意：

Passing an options [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) is only supported with ConnectIQ 3.1.0 and later.

Parameters:

- options — ([Attention.Tone](/connect-iq/api-docs/Toybox/Attention/#Tone-module), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A TONE\_\* value or [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) of options.

- :toneProfile — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        Array containing at least one [ToneProfile](/connect-iq/api-docs/Toybox/Attention/ToneProfile/) object to be played in sequence.

- :repeatCount — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Number of times to repeat the given tone sequence.


Example:

```
using Toybox.Attention;

// Play a predefined tone
if (Attention has :playTone) {
   Attention.playTone(Attention.TONE_LOUD_BEEP);
}

// Use an array of ToneProfile objects to build and play a custom tone
if (Attention has :ToneProfile) {
    var toneProfile =
    [
        new Attention.ToneProfile( 2500, 250),
        new Attention.ToneProfile( 5000, 250),
        new Attention.ToneProfile(10000, 250),
        new Attention.ToneProfile( 5000, 250),
        new Attention.ToneProfile( 2500, 250),
    ];
    Attention.playTone({:toneProfile=>toneProfile});
   }
```

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Bravo Titanium
-   D2™ Bravo
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
-   Rino® 7 Series
-   Venu® 2 Plus
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1

:::

Since:

API 级别 1.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if passing an options hash with invalid values when using new ToneProfile objects


### **setFlashlightMode(mode as [Attention.FlashlightMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightMode-module), options as { :color as [Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module), :brightness as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Attention.FlashlightBrightness](/connect-iq/api-docs/Toybox/Attention/#FlashlightBrightness-module), :strobeMode as [Attention.FlashlightStrobeMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeMode-module), :strobeSpeed as [Attention.FlashlightStrobeSpeed](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeSpeed-module) } or **Null**)** as [Attention.FlashlightResult](/connect-iq/api-docs/Toybox/Attention/#FlashlightResult-module)

Parameters:

- mode — ([Attention.FlashlightMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightMode-module))
- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Flashlight mode options

- :color — ([Attention.FlashlightColor](/connect-iq/api-docs/Toybox/Attention/#FlashlightColor-module)) —

        Color of flashlight. Default is FLASHLIGHT\_COLOR\_WHITE.

- :strobeMode — ([Attention.FlashlightStrobeMode](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeMode-module)) —

        Mode of strobe. Default is FLASHLIGHT\_STROBE\_MODE\_BLINK.

- :strobeSpeed — ([Attention.FlashlightStrobeSpeed](/connect-iq/api-docs/Toybox/Attention/#FlashlightStrobeSpeed-module)) —

        Speed of strobe. Default is FLASHLIGHT\_STROBE\_SPEED\_MEDIUM.

- :brightness — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Attention.FlashlightBrightness](/connect-iq/api-docs/Toybox/Attention/#FlashlightBrightness-module)) —

        Intensity of the flashlight. Default is FLASHLIGHT\_BRIGHTNESS\_MEDIUM.


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
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
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1

:::

Returns:

- [Attention.FlashlightResult](/connect-iq/api-docs/Toybox/Attention/#FlashlightResult-module) —

    A [FlashlightResult](/connect-iq/api-docs/Toybox/Attention/#FlashlightResult-module) value indicating the operation status.


Since:

API 级别 3.4.3

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果从 watch-app 以外的应用类型调用，则引发。


### **vibrate(vibeProfiles as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Attention.VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/)\>)** as **Void**

启动振动马达。

The vibrate method takes an Array containing at least one [VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/) object, up to a maximum of 8, and runs them in sequence.

注意：

Forerunner devices do not support vibration patterns. Vibration may still be used, but the vibration will always run at the same duty cycle.

Parameters:

- vibeProfiles — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/) 个对象的数组


Example:

Vibrate in an on/off pattern

```
if (Attention has :vibrate) {
    vibeData =
    [
        new Attention.VibeProfile(50, 2000), // On for two seconds
        new Attention.VibeProfile(0, 2000),  // Off for two seconds
        new Attention.VibeProfile(50, 2000), // On for two seconds
        new Attention.VibeProfile(0, 2000),  // Off for two seconds
        new Attention.VibeProfile(50, 2000)  // on for two seconds
    ];
}
Attention.vibrate(vibeData);
```

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
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
-   vívoactive®

:::

另见：

- [Toybox.Attention.VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/)


Since:

API 级别 1.0.0
