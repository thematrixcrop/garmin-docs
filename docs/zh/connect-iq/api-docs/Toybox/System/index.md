---
title: "Module: Toybox.System"
---
# Module: Toybox.System

## 概述

The System module provides basic system information, including access to the clock time, device settings, battery level, and memory use.

Since:

API 级别 1.0.0

## 命名空间下的类

类：[AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/), [ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/), [ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/), [DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/), [Intent](/connect-iq/api-docs/Toybox/System/Intent/), [PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/), [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/), [Stats](/connect-iq/api-docs/Toybox/System/Stats/), [UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)

## 常量摘要

### UnitsSystem

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| UNIT\_METRIC | 0 |
API 级别 1.0.0

|

Display units in metric units

|
| UNIT\_STATUTE | 1 |

API 级别 1.0.0

|

Display units in statute units

|

### ScreenShape

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SCREEN\_SHAPE\_ROUND | 1 |
API 级别 1.2.0

 |  |
| SCREEN\_SHAPE\_SEMI\_ROUND | 2 |

API 级别 1.2.0

 |  |
| SCREEN\_SHAPE\_RECTANGLE | 3 |

API 级别 1.2.0

 |  |
| SCREEN\_SHAPE\_SEMI\_OCTAGON | 4 |

API 级别 3.3.0

 |  |

### ButtonInputs

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BUTTON\_INPUT\_SELECT | 0x00000001 |
API 级别 1.2.0

 |  |
| BUTTON\_INPUT\_UP | 0x00000002 |

API 级别 1.2.0

 |  |
| BUTTON\_INPUT\_DOWN | 0x00000004 |

API 级别 1.2.0

 |  |
| BUTTON\_INPUT\_MENU | 0x00000008 |

API 级别 1.2.0

 |  |
| BUTTON\_INPUT\_CLOCK | 0x00000010 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_DOWN\_LEFT | 0x00000020 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_DOWN\_RIGHT | 0x00000040 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_ESC | 0x00000080 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_FIND | 0x00000100 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_LAP | 0x00000200 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_LEFT | 0x00000400 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_LIGHT | 0x00000800 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_MODE | 0x00001000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_PAGE | 0x00002000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_POWER | 0x00004000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_RESET | 0x00008000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_RIGHT | 0x00010000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_SPORT | 0x00020000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_START | 0x00040000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_UP\_LEFT | 0x00080000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_UP\_RIGHT | 0x00100000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_ZIN | 0x00200000 |

API 级别 3.1.0

 |  |
| BUTTON\_INPUT\_ZOUT | 0x00400000 |

API 级别 3.1.0

 |  |

### ConnectionState

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONNECTION\_STATE\_NOT\_INITIALIZED | 0 |
API 级别 3.0.0

|

Indicates that the connection is not setup or is inactive.

|
| CONNECTION\_STATE\_NOT\_CONNECTED | 1 |

API 级别 3.0.0

|

Indicates that the connection has been setup but is not in range.

|
| CONNECTION\_STATE\_CONNECTED | 2 |

API 级别 3.0.0

|

Indicates that the connection is available for use.

|

### Language

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LANGUAGE\_ARA | 8389920 |
API 级别 3.1.0

|

Arabic

|
| LANGUAGE\_BUL | 8389921 |

API 级别 3.1.0

|

Bulgarian

|
| LANGUAGE\_CES | 8389352 |

API 级别 3.1.0

|

Czech

|
| LANGUAGE\_CHS | 8389372 |

API 级别 3.1.0

|

Chinese (Simplified)

|
| LANGUAGE\_CHT | 8389371 |

API 级别 3.1.0

|

Chinese (Traditional)

|
| LANGUAGE\_DAN | 8389353 |

API 级别 3.1.0

|

Danish

|
| LANGUAGE\_DEU | 8389358 |

API 级别 3.1.0

|

German

|
| LANGUAGE\_DUT | 8389354 |

API 级别 3.1.0

|

Dutch

|
| LANGUAGE\_ENG | 8389355 |

API 级别 3.1.0

|

English

|
| LANGUAGE\_EST | 8390796 |

API 级别 3.1.0

|

Estonian

|
| LANGUAGE\_FIN | 8389356 |

API 级别 3.1.0

|

Finnish

|
| LANGUAGE\_FRE | 8389357 |

API 级别 3.1.0

|

French

|
| LANGUAGE\_GRE | 8389359 |

API 级别 3.1.0

|

Greek

|
| LANGUAGE\_HEB | 8389919 |

API 级别 3.1.0

|

Hebrew

|
| LANGUAGE\_HRV | 8389361 |

API 级别 3.1.0

|

Croatian

|
| LANGUAGE\_HUN | 8389360 |

API 级别 3.1.0

|

Hungarian

|
| LANGUAGE\_IND | 8389578 |

API 级别 3.1.0

|

Bahasa Indonesia

|
| LANGUAGE\_ITA | 8389362 |

API 级别 3.1.0

|

Italian

|
| LANGUAGE\_JPN | 8389373 |

API 级别 3.1.0

|

Japanese

|
| LANGUAGE\_KOR | 8389696 |

API 级别 3.1.0

|

Korean

|
| LANGUAGE\_LAV | 8390797 |

API 级别 3.1.0

|

Latvian

|
| LANGUAGE\_LIT | 8390798 |

API 级别 3.1.0

|

Lithuanian

|
| LANGUAGE\_NOB | 8389363 |

API 级别 3.1.0

|

Norwegian

|
| LANGUAGE\_POL | 8389364 |

API 级别 3.1.0

|

Polish

|
| LANGUAGE\_POR | 8389365 |

API 级别 3.1.0

|

Portuguese

|
| LANGUAGE\_RON | 8390799 |

API 级别 3.1.0

|

Romanian

|
| LANGUAGE\_RUS | 8389366 |

API 级别 3.1.0

|

Russian

|
| LANGUAGE\_SLO | 8389367 |

API 级别 3.1.0

|

Slovak

|
| LANGUAGE\_SLV | 8389368 |

API 级别 3.1.0

|

Slovenian

|
| LANGUAGE\_SPA | 8389369 |

API 级别 3.1.0

|

Spanish

|
| LANGUAGE\_SWE | 8389370 |

API 级别 3.1.0

|

Swedish

|
| LANGUAGE\_THA | 8389548 |

API 级别 3.1.0

|

Thai

|
| LANGUAGE\_TUR | 8389774 |

API 级别 3.1.0

|

Turkish

|
| LANGUAGE\_UKR | 8390800 |

API 级别 3.1.0

|

Ukrainian

|
| LANGUAGE\_VIE | 8390206 |

API 级别 3.1.0

|

Vietnamese

|
| LANGUAGE\_ZSM | 8389579 |

API 级别 3.1.0

|

Standard (Bahasa) Malay

|

### DisplayMode

Enum class for display mode

Since:

API 级别 5.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DISPLAY\_MODE\_HIGH\_POWER | 0 |
API 级别 5.0.0

|

Display in high power mode. [View.onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) are not subject to burn-in protection.

|
| DISPLAY\_MODE\_LOW\_POWER | 1 |

API 级别 5.0.0

|

Display in low power mode, including watch face always-on mode. [View.onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) subject to burn-in protection.

|
| DISPLAY\_MODE\_OFF | 2 |

API 级别 5.0.0

|

Display is off.

|

### PhoneOperatingSystem

The platform associated with a connected phone.

Since:

API 级别 5.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PHONE\_OS\_NOT\_KNOWN | 0 |
API 级别 5.1.0

 |  |
| PHONE\_OS\_ANDROID | 1 |

API 级别 5.1.0

 |  |
| PHONE\_OS\_IOS | 2 |

API 级别 5.1.0

 |  |

## 实例方法摘要 [collapse](#)

- [**error**](#error-instance_function)(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    Write an error to the console and exit the system.

- [**exit**](#exit-instance_function)() as **Void**

    结束当前应用的执行。

- [**exitTo**](#exitTo-instance_function)(intent as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)) as **Void**

    退出当前应用并启动新应用。

- [**getClockTime**](#getClockTime-instance_function)() as [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

    Get the current clock time.

- [**getDeviceSettings**](#getDeviceSettings-instance_function)() as [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

    Get the current device settings.

- [**getDisplayMode**](#getDisplayMode-instance_function)() as [System.DisplayMode](/connect-iq/api-docs/Toybox/System/#DisplayMode-module)

    Get the current display mode, only available in devices with AMOLED or LCD screens.

- [**getSystemStats**](#getSystemStats-instance_function)() as [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

    Get the current system stats.

- [**getTimer**](#getTimer-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the current millisecond timer value.

- [**isAppInstalled**](#isAppInstalled-instance_function)(uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查应用程序的安装状态。

- [**print**](#print-instance_function)(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    Print to the console.

- [**println**](#println-instance_function)(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    Print to the console with a line terminator.


## 实例方法详情

### **error(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

Write an error to the console and exit the system.

注意：

There are never really too many bananas.

Parameters:

- msg — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The error message to output


Example:

```
using Toybox.System;
const MAX_BANANAS = 8;
var bananasInBunch = 10;
if (bananasInBunch > MAX_BANANAS) {
    System.error("Too many bananas!")
}
```

Since:

API 级别 1.0.0

### **exit()** as **Void**

结束当前应用的执行。

This will exit the system cleanly from any point within an app.

Since:

API 级别 1.0.0

### **exitTo(intent as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/))** as **Void**

退出当前应用并启动新应用。

This may only be called by watch-apps and widgets, and may only target watch-apps (both native activities and Connect IQ apps) and widgets. This is an asynchronous request that presents a confirmation dialog to launch the Intent. If confirmed, the current app will exit. Otherwise, the app will continue to run without exiting.

Parameters:

- intent — ([System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)) —

    The Intent to trigger


Example:

```
using Toybox.System;
var targetApp = new System.Intent(
    "manifest-id://12345678-1234-1234-1234-123412341234",
    {"arg"=>"CurrentAppName"}
);
System.exitTo(targetApp);
```

另见：

- [Toybox.System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)


Since:

API 级别 2.2.0

Throws:

- ([System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)) —

    Indicates the intended application is not a device app or widget

- ([System.AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/)) —

    Indicates the intended application is not installed

- ([System.PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/)) —

    Indicates exitTo() is called a second time before the initial call completes


### **getClockTime()** as [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

Get the current clock time.

Returns:

- [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

Since:

API 级别 1.0.0

### **getDeviceSettings()** as [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

Get the current device settings.

Example:

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
```

Returns:

- [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

Since:

API 级别 1.0.0

### **getDisplayMode()** as [System.DisplayMode](/connect-iq/api-docs/Toybox/System/#DisplayMode-module)

Get the current display mode, only available in devices with AMOLED or LCD screens.

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
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

Since:

API 级别 5.0.0

### **getSystemStats()** as [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

Get the current system stats.

Example:

```
using Toybox.System;
var myStats = System.getSystemStats();
```

Returns:

- [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

Since:

API 级别 1.0.0

### **getTimer()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the current millisecond timer value.

注意：

The returned value typically starts at zero on device boot and will roll over periodically. Assuming the timer starts at zero, this will happen ~25 days after a reboot, and every ~50 days thereafter.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Since:

API 级别 1.0.0

### **isAppInstalled(uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查应用程序的安装状态。

Parameters:

- uri — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URI that specifies an app


Example:

Valid URI formats

```
manifest-id://[manifest ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
store-id://[app store ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the app is installed, otherwise `false`


Since:

API 级别 3.2.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if an invalid URI format is provided


### **print(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

Print to the console.

Parameters:

- output — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The item to print, typically a [String](/connect-iq/api-docs/Toybox/Lang/String/).


Since:

API 级别 1.0.0

### **println(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

Print to the console with a line terminator.

Parameters:

- output — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The item to print, typically a [String](/connect-iq/api-docs/Toybox/Lang/String/).


Example:

```
using Toybox.System;
System.println("Hello Monkey C!");
```

Since:

API 级别 1.0.0
