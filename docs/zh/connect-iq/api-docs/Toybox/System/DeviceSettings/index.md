---
title: "Class: Toybox.System.DeviceSettings"
---
# Class: Toybox.System.DeviceSettings

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)


[show all](#)

## 概述

Represents various settings available on a device.

## 另见：

- [getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function)

- [Lang.format()](/connect-iq/api-docs/Toybox/Lang/#format-instance_function)


Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
var clockMode = mySettings.is24Hour;
var phone = mySettings.phoneConnected;
var version = mySettings.monkeyVersion;
var versionString = Lang.format("$1$.$2$.$3$", version);
System.println(versionString); //e.g. 2.2.5
```

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**activityTrackingOn**](#activityTrackingOn-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The activity tracking setting mode.

- [**alarmCount**](#alarmCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The number of alarms set on the device.

- [**connectionAvailable**](#connectionAvailable-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示是否有任何通信通道已连接并可供使用。

- [**connectionInfo**](#connectionInfo-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [System.ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/)\>

    The state of connections available to the device.

- [**distanceUnits**](#distanceUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The distance unit setting mode.

- [**doNotDisturb**](#doNotDisturb-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The Do Not Disturb setting mode.

- [**elevationUnits**](#elevationUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The elevation unit setting mode.

- [**firmwareVersion**](#firmwareVersion-var) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    The current firmware version of the device.

- [**firstDayOfWeek**](#firstDayOfWeek-var) as [Gregorian.DayOfWeek](/connect-iq/api-docs/Toybox/Time/Gregorian/#DayOfWeek-module)

    The first day of the week.

- [**fontScale**](#fontScale-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    用于显示文本的缩放因子。

- [**heightUnits**](#heightUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The height unit setting mode.

- [**inputButtons**](#inputButtons-var) as [System.ButtonInputs](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module)

    The physical buttons supported by the device.

- [**is24Hour**](#is24Hour-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The clock mode mode.

- [**isEnhancedReadabilityModeEnabled**](#isEnhancedReadabilityModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示设备当前正在使用增强可读性模式。

- [**isGlanceModeEnabled**](#isGlanceModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示设备上是否启用了小组件速览。

- [**isNightModeEnabled**](#isNightModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Indicates the device is currently using night mode colors.

- [**isTouchScreen**](#isTouchScreen-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The availability of a touch screen on the device.

- [**monkeyVersion**](#monkeyVersion-var) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    The Connect IQ version supported by the device.

- [**notificationCount**](#notificationCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The number of active notifications.

- [**paceUnits**](#paceUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The pace unit setting mode.

- [**partNumber**](#partNumber-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The part number of the device.

- [**phoneConnected**](#phoneConnected-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The phone connection status mode.

- [**phoneOperatingSystem**](#phoneOperatingSystem-var) as [System.PhoneOperatingSystem](/connect-iq/api-docs/Toybox/System/#PhoneOperatingSystem-module) or **Null**

    BLE 连接移动设备的操作系统。

- [**requiresBurnInProtection**](#requiresBurnInProtection-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    This flag indicates whether the device screen requires burn-in protection.

- [**screenHeight**](#screenHeight-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The height of the device screen in pixels.

- [**screenShape**](#screenShape-var) as [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module)

    The screen shape of the device.

- [**screenWidth**](#screenWidth-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The width of the device screen in pixels.

- [**systemLanguage**](#systemLanguage-var) as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)

    The language being used by the system.

- [**temperatureUnits**](#temperatureUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The temperature unit setting mode.

- [**tonesOn**](#tonesOn-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The tone setting mode.

- [**uniqueIdentifier**](#uniqueIdentifier-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    唯一的字母数字设备标识符。

- [**vibrateOn**](#vibrateOn-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The vibration setting mode.

- [**weightUnits**](#weightUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    The weight unit setting mode.


## 实例属性详情

### var activityTrackingOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The activity tracking setting mode.

Since:

API 级别 1.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if activity tracking is enabled on the device, otherwise `false`


### var alarmCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The number of alarms set on the device.

Since:

API 级别 1.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var connectionAvailable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

指示是否有任何通信通道已连接并可供使用。

Since:

API 级别 3.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var connectionInfo as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [System.ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/)\>

The state of connections available to the device.

Since:

API 级别 3.0.0

Returns:

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) —

    A Dictionary that contains the state of each available connection. The keys, `:bluetooth`, `:wifi`, and `:lte` indicate the connection type. If a key is not present then it means that connection type is not available to the device. The values are a [ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/) object, which contain the state of the connection type.


### var distanceUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The distance unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- UNIT\_METRIC if distance is set to display in kilometers (km)

- UNIT\_STATUTE if distance is set to display in miles (mi)



### var doNotDisturb as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The Do Not Disturb setting mode.

Not all devices support Do Not Disturb, so it's a good idea to perform a `has` check when attempting to use this value.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
if (deviceSettings has :doNotDisturb) {
    var doNotDisturb = deviceSettings.doNotDisturb;
}
```

Since:

API 级别 2.1.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if enabled on the device, otherwise `false`


### var elevationUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The elevation unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- UNIT\_METRIC if elevation is set to display in meters (m)

- UNIT\_STATUTE if elevation is set to display in feet (ft)



### var firmwareVersion as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

The current firmware version of the device.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
var version = mySettings.firmwareVersion;
var versionString = Lang.format("$1$.$2$", version);
System.println(versionString minor); // e.g. 2.50
```

Since:

API 级别 1.2.0

另见：

- [Lang.format()](/connect-iq/api-docs/Toybox/Lang/#format-instance_function)


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A two element Array containing the major and minor version numbers as [Number](/connect-iq/api-docs/Toybox/Lang/Number/) objects


### var firstDayOfWeek as [Gregorian.DayOfWeek](/connect-iq/api-docs/Toybox/Time/Gregorian/#DayOfWeek-module)

The first day of the week.

Since:

API 级别 3.0.0

Returns:

- [Gregorian.DayOfWeek](/connect-iq/api-docs/Toybox/Time/Gregorian/#DayOfWeek-module) —

    一个 [Gregorian::DAY\_\*](/connect-iq/api-docs/Toybox/Time/Gregorian/) 值


### var fontScale as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

用于显示文本的缩放因子。

Since:

API 级别 5.0.1

:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Scaling factor configured by user. Values will always be positive, and are typically in the range of 0.8 to 1.2.


### var heightUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The height unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    One of two UNIT\_\* constant values:

- UNIT\_METRIC if height is set to display in meters (m)

- UNIT\_STATUTE if height is set to display inSystem. feet (ft)



### var inputButtons as [System.ButtonInputs](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module)

The physical buttons supported by the device.

This returns a bitwise binary of the enumerated values defined by the [System.BUTTON\_INPUT\_\*](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module) constants that match the available buttons on a particular device. For example, a vivoactive HR returns a value of 9, which indicates Select (1) and Menu (8) button support. A fenix 5, however, returns 11, indicating support for all available button types.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
if ((mySettings.inputButtons & System.BUTTON_INPUT_MENU) != 0) {
    // Allow the use of the Menu button
}
```

Since:

API 级别 1.2.0

另见：

- [Toybox.System](/connect-iq/api-docs/Toybox/System/)


Returns:

- [System.ButtonInputs](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module) —

    A System.BUTTON\_INPUT\_\* value


### var is24Hour as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The clock mode mode.

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the device is set to 24 hour mode, `false` if it is set to 12 hour mode


### var isEnhancedReadabilityModeEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

指示设备当前正在使用增强可读性模式。

Since:

API 级别 4.2.3

:::details 支持的设备

-   D2™ Mach 1
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Venu® 3
-   Venu® 3S
-   vívoactive® 5

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if Enhanced Readability Mode is enabled, otherwise false.


### var isGlanceModeEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

指示设备上是否启用了小组件速览。

If glance mode is enabled, the system will pass up / down key events to a widget base page. Otherwise, the system will mask them out.

Since:

API 级别 3.1.4

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
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
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if glance mode is enabled, otherwise `false`


### var isNightModeEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Indicates the device is currently using night mode colors

Since:

API 级别 4.1.2

:::details 支持的设备

-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   eTrex® Touch
-   GPSMAP® H1 / H1i Plus

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if night colors are currently in use, otherwise false.


### var isTouchScreen as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The availability of a touch screen on the device.

Since:

API 级别 1.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the device has a touch screen and it is enabled in settings, otherwise `false`


### var monkeyVersion as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

The Connect IQ version supported by the device.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
var version = mySettings.monkeyVersion;
var versionString = Lang.format("$1$.$2$.$3$", version);
System.println(versionString); //e.g. 2.2.5
```

Since:

API 级别 1.2.0

另见：

- [Lang.format()](/connect-iq/api-docs/Toybox/Lang/#format-instance_function)


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A three element Array containing the major, minor, and micro version numbers as [Number](/connect-iq/api-docs/Toybox/Lang/Number/) objects


### var notificationCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The number of active notifications.

Since:

API 级别 1.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var paceUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The pace unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- UNIT\_METRIC if pace is set to display in kilometers per hour (km/hr)

- UNIT\_STATUTE if pace is set to display in miles per hour (mph)



### var partNumber as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The part number of the device.

Since:

API 级别 1.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var phoneConnected as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The phone connection status mode.

Since:

API 级别 1.1.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a mobile phone is connected to the device, otherwise `false`


### var phoneOperatingSystem as [System.PhoneOperatingSystem](/connect-iq/api-docs/Toybox/System/#PhoneOperatingSystem-module) or **Null**

BLE 连接移动设备的操作系统。

Since:

API 级别 5.0.1

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [System.PhoneOperatingSystem](/connect-iq/api-docs/Toybox/System/#PhoneOperatingSystem-module) —

    The operating system, if available, or `null`.


### var requiresBurnInProtection as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

This flag indicates whether the device screen requires burn-in protection.

Some screens require special drawing behavior when rendering content in always-on mode. If a screen requires burn-in protection the following rules must be followed: A maximum of ten-percent of the total available screen pixels can be in use at one time. Individual pixels can be on for no more than three update cycles when updating at once-per-minute intervals. If either condition is violated all screen pixels will be turned off until the device goes into high-power mode.

Since:

API 级别 3.0.12

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the screen type needs burn-in protection, `false` otherwise.


### var screenHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The height of the device screen in pixels.

In some cases, this can be useful to determine the device type at runtime. However, to get the height of the screen area currently available to an app, use [Graphics.Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function).

Since:

API 级别 1.2.0

另见：

- [Graphics.Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function)


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var screenShape as [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module)

The screen shape of the device.

Since:

API 级别 1.2.0

Returns:

- [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module) —

    A System.SCREEN\_SHAPE\_\* value


### var screenWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The width of the device screen in pixels.

In some cases, this can be useful to determine the device type at runtime. However, to get the width of the screen area currently available to an app, use [Graphics.Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function).

Since:

API 级别 1.2.0

另见：

- [Graphics.Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function)


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var systemLanguage as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)

The language being used by the system

Since:

API 级别 3.1.0

Returns:

- [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module) —

    LANGUAGE\_\* enum


### var temperatureUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The temperature unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- UNIT\_METRIC if temperature is set to display in degrees Celsius (C)

- UNIT\_STATUTE if temperature is set to display in degrees Fahrenheit (F)



### var tonesOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The tone setting mode.

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if tones are enabled on the device, otherwise `false`


### var uniqueIdentifier as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

唯一的字母数字设备标识符。

The value is unique for every app, but is stable on a device across uninstall and reinstall. Any use of this value for tracking user information must be in compliance with international privacy law.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
var id = mySettings.uniqueIdentifier;
if (id != null) {
    System.println(id); //e.g. ac915d426451c88e8ea691fa412f9af9c21b4d12
}
```

Since:

API 级别 2.4.1

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    An identifier that can be used to identify the host device or `null` on error.


### var vibrateOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The vibration setting mode.

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if vibration is enabled on the device, otherwise `false`


### var weightUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

The weight unit setting mode.

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- UNIT\_METRIC if weight is set to display in kilograms (kg)

- UNIT\_STATUTE if weight is set to display in pounds (lbs)
