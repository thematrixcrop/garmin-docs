---
title: "Class: Toybox.System.DeviceSettings"
---
# 类：Toybox.System.DeviceSettings

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)


[show all](#)

## 概述

表示设备上可用的各种设置。

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

    活动跟踪设置模式。

- [**alarmCount**](#alarmCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    设备上设置的闹钟数量。

- [**connectionAvailable**](#connectionAvailable-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示是否有任何通信通道已连接并可供使用。

- [**connectionInfo**](#connectionInfo-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [System.ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/)\>

    设备可用连接的状态。

- [**distanceUnits**](#distanceUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    距离单位设置模式。

- [**doNotDisturb**](#doNotDisturb-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    勿扰设置模式。

- [**elevationUnits**](#elevationUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    海拔单位设置模式。

- [**firmwareVersion**](#firmwareVersion-var) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    设备当前的固件版本。

- [**firstDayOfWeek**](#firstDayOfWeek-var) as [Gregorian.DayOfWeek](/connect-iq/api-docs/Toybox/Time/Gregorian/#DayOfWeek-module)

    一周的第一天。

- [**fontScale**](#fontScale-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    用于显示文本的缩放因子。

- [**heightUnits**](#heightUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    高度单位设置模式。

- [**inputButtons**](#inputButtons-var) as [System.ButtonInputs](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module)

    设备支持的物理按钮。

- [**is24Hour**](#is24Hour-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    时钟模式模式。

- [**isEnhancedReadabilityModeEnabled**](#isEnhancedReadabilityModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示设备当前正在使用增强可读性模式。

- [**isGlanceModeEnabled**](#isGlanceModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    指示设备上是否启用了小组件速览。

- [**isNightModeEnabled**](#isNightModeEnabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示设备当前正在使用夜间模式颜色。

- [**isTouchScreen**](#isTouchScreen-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设备是否配备触摸屏。

- [**monkeyVersion**](#monkeyVersion-var) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    设备支持的 Connect IQ 版本。

- [**notificationCount**](#notificationCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    活动通知数量。

- [**paceUnits**](#paceUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    配速单位设置模式。

- [**partNumber**](#partNumber-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    设备的部件号。

- [**phoneConnected**](#phoneConnected-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    手机连接状态模式。

- [**phoneOperatingSystem**](#phoneOperatingSystem-var) as [System.PhoneOperatingSystem](/connect-iq/api-docs/Toybox/System/#PhoneOperatingSystem-module) or **Null**

    BLE 连接移动设备的操作系统。

- [**requiresBurnInProtection**](#requiresBurnInProtection-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    此标志指示设备屏幕是否需要防烧屏保护。

- [**screenHeight**](#screenHeight-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    设备屏幕高度，单位为像素。

- [**screenShape**](#screenShape-var) as [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module)

    设备的屏幕形状。

- [**screenWidth**](#screenWidth-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    设备屏幕的像素宽度。

- [**systemLanguage**](#systemLanguage-var) as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)

    系统正在使用的语言。

- [**temperatureUnits**](#temperatureUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    温度单位设置模式。

- [**tonesOn**](#tonesOn-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    音调设置模式。

- [**uniqueIdentifier**](#uniqueIdentifier-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    唯一的字母数字设备标识符。

- [**vibrateOn**](#vibrateOn-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    振动设置模式。

- [**weightUnits**](#weightUnits-var) as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

    重量单位设置模式。


## 实例属性详情

### var activityTrackingOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

活动跟踪设置模式。

Since:

API 级别 1.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果设备已启用活动跟踪，则为 `true`，否则为 `false`


### var alarmCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

设备上设置的闹钟数量。

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

设备可用连接的状态。

Since:

API 级别 3.0.0

Returns:

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) —

    包含每个可用连接状态的字典。`:bluetooth`、`:wifi` 和 `:lte` 键表示连接类型。如果缺少某个键，则表示设备不支持该连接类型。值是包含连接类型状态的 [ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/) 对象。


### var distanceUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

距离单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- 如果将距离设置为以千米（km）显示，则为 UNIT\_METRIC

- 如果将距离设置为以英里（mi）显示，则为 UNIT\_STATUTE



### var doNotDisturb as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

勿扰设置模式。

并非所有设备都支持免打扰，因此尝试使用此值时最好执行 `has` 检查。

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

    如果设备已启用，则为 `true`，否则为 `false`


### var elevationUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

海拔单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- 如果将海拔设置为以米（m）显示，则为 UNIT\_METRIC

- 如果将海拔设置为以英尺（ft）显示，则为 UNIT\_STATUTE



### var firmwareVersion as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

设备当前的固件版本。

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

    包含主版本号和次版本号的两个元素的 Array，其中元素为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 对象


### var firstDayOfWeek as [Gregorian.DayOfWeek](/connect-iq/api-docs/Toybox/Time/Gregorian/#DayOfWeek-module)

一周的第一天。

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

    用户配置的缩放因子。值始终为正数，通常在 0.8 到 1.2 范围内。


### var heightUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

高度单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 UNIT\_\* 常量值之一：

- 如果将身高设置为以米（m）显示，则为 UNIT\_METRIC

- 如果将身高设置为以System. 英尺（ft）显示，则为 UNIT\_STATUTE



### var inputButtons as [System.ButtonInputs](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module)

设备支持的物理按钮。

此项返回由 [System.BUTTON\_INPUT\_\*](/connect-iq/api-docs/Toybox/System/#ButtonInputs-module) 常量定义的枚举值的按位二进制值，这些值与特定设备上可用的按钮相匹配。例如，vivoactive HR 返回值 9，表示支持 Select（1）和 Menu（8）按钮。而 fenix 5 返回值 11，表示支持所有可用的按钮类型。

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

    System.BUTTON\_INPUT\_\* 值


### var is24Hour as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

时钟模式模式。

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果设备设置为 24 小时制，则为 `true`；如果设置为 12 小时制，则为 `false`


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

    如果启用增强可读性模式，则为 true，否则为 false。


### var isGlanceModeEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

指示设备上是否启用了小组件速览。

如果启用速览模式，系统会将向上/向下按键事件传递给小组件基础页面。否则，系统会屏蔽这些事件。

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

    如果已启用速览模式，则为 `true`，否则为 `false`


### var isNightModeEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示设备当前正在使用夜间模式颜色

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

    如果当前正在使用夜间颜色，则为 true，否则为 false。


### var isTouchScreen as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设备是否配备触摸屏。

Since:

API 级别 1.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果设备具有触摸屏且已在设置中启用触摸屏，则为 `true`，否则为 `false`


### var monkeyVersion as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

设备支持的 Connect IQ 版本。

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

    包含主版本号、次版本号和微版本号的三个元素的 Array，其中元素为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 对象


### var notificationCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

活动通知数量。

Since:

API 级别 1.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var paceUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

配速单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- 如果将配速设置为以千米/小时（km/hr）显示，则为 UNIT\_METRIC

- 如果将配速设置为以英里/小时（mph）显示，则为 UNIT\_STATUTE



### var partNumber as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

设备的部件号。

Since:

API 级别 1.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var phoneConnected as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

手机连接状态模式。

Since:

API 级别 1.1.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果移动电话已连接到设备，则为 `true`，否则为 `false`


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

    操作系统（如果可用），否则为 `null`。


### var requiresBurnInProtection as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

此标志指示设备屏幕是否需要防烧屏保护。

某些屏幕在以常亮模式渲染内容时需要特殊的绘制行为。如果屏幕需要防烧屏保护，则必须遵循以下规则：任意时刻最多只能使用可用屏幕像素总数的百分之十。以每分钟更新一次的间隔进行更新时，单个像素的点亮时间不得超过三个更新周期。如果违反任一条件，所有屏幕像素都将关闭，直到设备进入高功耗模式。

Since:

API 级别 3.0.12

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果屏幕类型需要防烧屏保护，则为 `true`，否则为 `false`。


### var screenHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

设备屏幕高度，单位为像素。

在某些情况下，这对于在运行时确定设备类型很有用。但是，要获取当前可供应用使用的屏幕区域高度，请使用 [Graphics.Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function)。

Since:

API 级别 1.2.0

另见：

- [Graphics.Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function)


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var screenShape as [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module)

设备的屏幕形状。

Since:

API 级别 1.2.0

Returns:

- [System.ScreenShape](/connect-iq/api-docs/Toybox/System/#ScreenShape-module) —

    System.SCREEN\_SHAPE\_\* 值


### var screenWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

设备屏幕的像素宽度。

在某些情况下，这对于在运行时确定设备类型很有用。但是，要获取当前可供应用使用的屏幕区域宽度，请使用 [Graphics.Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function)。

Since:

API 级别 1.2.0

另见：

- [Graphics.Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function)


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var systemLanguage as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)

系统正在使用的语言

Since:

API 级别 3.1.0

Returns:

- [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module) —

    LANGUAGE\_\* 枚举


### var temperatureUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

温度单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- 如果将温度设置为以摄氏度（C）显示，则为 UNIT\_METRIC

- 如果将温度设置为以华氏度（F）显示，则为 UNIT\_STATUTE



### var tonesOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

音调设置模式。

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果设备已启用提示音，则为 `true`，否则为 `false`


### var uniqueIdentifier as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

唯一的字母数字设备标识符。

该值对每个应用都是唯一的，但在设备上卸载并重新安装应用后仍保持不变。使用此值跟踪用户信息时，必须遵守国际隐私法律。

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

    可用于标识主机设备的标识符；出错时为 `null`。


### var vibrateOn as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

振动设置模式。

Since:

API 级别 1.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果设备已启用振动，则为 `true`，否则为 `false`


### var weightUnits as [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module)

重量单位设置模式。

Since:

API 级别 1.0.0

Returns:

- [System.UnitsSystem](/connect-iq/api-docs/Toybox/System/#UnitsSystem-module) —

    两个 System.UNIT_* 常量值之一：

- 如果将体重设置为以千克（kg）显示，则为 UNIT\_METRIC

- 如果将体重设置为以磅（lbs）显示，则为 UNIT\_STATUTE
