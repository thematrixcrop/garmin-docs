---
title: "模块：Toybox.System"
---
# 模块：Toybox.System

## 概述

System 模块提供基本系统信息，包括访问时钟时间、设备设置、电池电量和内存使用情况。

起始版本：

API 级别 1.0.0

## 命名空间下的类

类：[AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/), [ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/), [ConnectionInfo](/connect-iq/api-docs/Toybox/System/ConnectionInfo/), [DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/), [Intent](/connect-iq/api-docs/Toybox/System/Intent/), [PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/), [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/), [Stats](/connect-iq/api-docs/Toybox/System/Stats/), [UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)

## 常量摘要

### UnitsSystem

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| UNIT\_METRIC | 0 |
API 级别 1.0.0

|

以公制单位显示单位

|
| UNIT\_STATUTE | 1 |

API 级别 1.0.0

|

以英制单位显示单位

|

### ScreenShape

起始版本：

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

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONNECTION\_STATE\_NOT\_INITIALIZED | 0 |
API 级别 3.0.0

|

表示连接未建立或处于非活动状态。

|
| CONNECTION\_STATE\_NOT\_CONNECTED | 1 |

API 级别 3.0.0

|

表示连接已建立，但设备不在范围内。

|
| CONNECTION\_STATE\_CONNECTED | 2 |

API 级别 3.0.0

|

表示连接可供使用。

|

### Language

起始版本：

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

简体中文

|
| LANGUAGE\_CHT | 8389371 |

API 级别 3.1.0

|

繁体中文

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

印度尼西亚语

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

标准马来语（Bahasa）

|

### DisplayMode

用于显示模式的枚举类

起始版本：

API 级别 5.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DISPLAY\_MODE\_HIGH\_POWER | 0 |
API 级别 5.0.0

|

在高功耗模式下显示。[View.onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 不受烧屏保护限制。

|
| DISPLAY\_MODE\_LOW\_POWER | 1 |

API 级别 5.0.0

|

在低功耗模式下显示，包括表盘常亮模式。[View.onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 受烧屏保护限制。

|
| DISPLAY\_MODE\_OFF | 2 |

API 级别 5.0.0

|

显示屏关闭。

|

### PhoneOperatingSystem

与已连接手机关联的平台。

起始版本：

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

    将错误写入控制台并退出系统。

- [**exit**](#exit-instance_function)() as **Void**

    结束当前应用的执行。

- [**exitTo**](#exitTo-instance_function)(intent as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)) as **Void**

    退出当前应用并启动新应用。

- [**getClockTime**](#getClockTime-instance_function)() as [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

    获取当前时钟时间。

- [**getDeviceSettings**](#getDeviceSettings-instance_function)() as [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

    获取当前设备设置。

- [**getDisplayMode**](#getDisplayMode-instance_function)() as [System.DisplayMode](/connect-iq/api-docs/Toybox/System/#DisplayMode-module)

    获取当前显示模式，仅适用于配备 AMOLED 或 LCD 屏幕的设备。

- [**getSystemStats**](#getSystemStats-instance_function)() as [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

    获取当前系统统计信息。

- [**getTimer**](#getTimer-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取当前毫秒计时器值。

- [**isAppInstalled**](#isAppInstalled-instance_function)(uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查应用程序的安装状态。

- [**print**](#print-instance_function)(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    输出到控制台。

- [**println**](#println-instance_function)(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    输出到控制台，并附加行终止符。


## 实例方法详情

### **error(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

将错误写入控制台并退出系统。

注意：

香蕉永远不会嫌多。

参数：

- msg — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要输出的错误消息


示例：

```
using Toybox.System;
const MAX_BANANAS = 8;
var bananasInBunch = 10;
if (bananasInBunch > MAX_BANANAS) {
    System.error("Too many bananas!")
}
```

起始版本：

API 级别 1.0.0

### **exit()** as **Void**

结束当前应用的执行。

此项将从应用内的任意位置正常退出系统。

起始版本：

API 级别 1.0.0

### **exitTo(intent as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/))** as **Void**

退出当前应用并启动新应用。

此函数只能由 watch-app 和小组件调用，并且只能针对 watch-app（包括原生活动和 Connect IQ 应用）及小组件。这是一个异步请求，用于显示确认对话框以启动 Intent。如果确认，当前应用将退出。否则，应用将继续运行而不退出。

参数：

- intent — ([System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)) —

    要触发的 Intent


示例：

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


起始版本：

API 级别 2.2.0

抛出：

- ([System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)) —

    表示目标应用不是设备应用或小组件

- ([System.AppNotInstalledException](/connect-iq/api-docs/Toybox/System/AppNotInstalledException/)) —

    表示目标应用未安装

- ([System.PreviousOperationNotCompleteException](/connect-iq/api-docs/Toybox/System/PreviousOperationNotCompleteException/)) —

    表示在初始 exitTo() 调用完成前再次调用了 exitTo()


### **getClockTime()** as [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

获取当前时钟时间。

返回：

- [System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)

起始版本：

API 级别 1.0.0

### **getDeviceSettings()** as [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

获取当前设备设置。

示例：

```
using Toybox.System;
var mySettings = System.getDeviceSettings();
```

返回：

- [System.DeviceSettings](/connect-iq/api-docs/Toybox/System/DeviceSettings/)

起始版本：

API 级别 1.0.0

### **getDisplayMode()** as [System.DisplayMode](/connect-iq/api-docs/Toybox/System/#DisplayMode-module)

获取当前显示模式，仅适用于配备 AMOLED 或 LCD 屏幕的设备。

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

起始版本：

API 级别 5.0.0

### **getSystemStats()** as [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

获取当前系统统计信息。

示例：

```
using Toybox.System;
var myStats = System.getSystemStats();
```

返回：

- [System.Stats](/connect-iq/api-docs/Toybox/System/Stats/)

起始版本：

API 级别 1.0.0

### **getTimer()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取当前毫秒计时器值。

注意：

返回值通常在设备启动时从零开始，并会定期回绕。假设计时器从零开始，这将在重启后约 25 天发生，此后每约 50 天发生一次。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

起始版本：

API 级别 1.0.0

### **isAppInstalled(uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查应用程序的安装状态。

参数：

- uri — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    指定应用的 URI


示例：

有效的 URI 格式

```
manifest-id://[manifest ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
store-id://[app store ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果已安装应用，则为 `true`，否则为 `false`


起始版本：

API 级别 3.2.0

抛出：

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供了无效的 URI 格式，则会抛出此异常


### **print(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

输出到控制台。

参数：

- output — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要打印的项目，通常是 [String](/connect-iq/api-docs/Toybox/Lang/String/)。


起始版本：

API 级别 1.0.0

### **println(output as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

输出到控制台，并附加行终止符。

参数：

- output — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要打印的项目，通常是 [String](/connect-iq/api-docs/Toybox/Lang/String/)。


示例：

```
using Toybox.System;
System.println("Hello Monkey C!");
```

起始版本：

API 级别 1.0.0
