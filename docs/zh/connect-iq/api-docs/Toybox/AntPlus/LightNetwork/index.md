---
title: "类：Toybox.AntPlus.LightNetwork"
---
# 类：Toybox.AntPlus.LightNetwork

继承：

Toybox.AntPlus.Device

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)

- [Toybox.AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/)


[显示全部](#)

## 概述

表示自行车灯网络的类

示例：

LightNetwork 和 LightNetworkListener 设置的基本示例

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

起始版本：

API 级别 2.2.0

:::details 支持的设备

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

## 实例方法摘要 [collapse](#)

- [**getBikeLights**](#getBikeLights-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)\> or **Null**

    获取网络中的灯列表。

- [**getNetworkMode**](#getNetworkMode-instance_function)() as [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module)

    获取灯光网络模式。

- [**getNetworkState**](#getNetworkState-instance_function)() as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)

    获取灯光网络状态。

- [**initialize**](#initialize-instance_function)(listener as [AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) or **Null**)

    构造函数。

- [**restoreHeadlightsNetworkModeControl**](#restoreHeadlightsNetworkModeControl-instance_function)() as **Void**

    将所有前灯交由用户选择的灯光网络模式控制。

- [**restoreTaillightsNetworkModeControl**](#restoreTaillightsNetworkModeControl-instance_function)() as **Void**

    将所有尾灯交由用户选择的灯光网络模式控制。

- [**setHeadlightsMode**](#setHeadlightsMode-instance_function)(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) as **Void**

    使所有前灯进入相同模式。

- [**setTaillightsMode**](#setTaillightsMode-instance_function)(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) as **Void**

    使所有尾灯进入相同模式。

- [**toggleSignalLight**](#toggleSignalLight-instance_function)(left as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    用于右转向灯和左转向灯的信号开关。


## 实例方法详情

### **getBikeLights()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)\> or **Null**

获取网络中的灯列表。

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    属于网络的灯光列表；如果灯光网络状态不是 [LIGHT\_NETWORK\_STATE\_FORMED](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_STATE_FORMED-const)，则为 `null`


起始版本：

API 级别 2.2.0

### **getNetworkMode()** as [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module)

获取灯光网络模式。

返回：

- [AntPlus.LightNetworkMode](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkMode-module) —

    [LIGHT\_NETWORK\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_MODE_AUTO-const) 枚举值


起始版本：

API 级别 2.2.0

### **getNetworkState()** as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)

获取灯光网络状态。

返回：

- [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module) —

    [LIGHT\_NETWORK\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_STATE_FORMED-const) 枚举值


起始版本：

API 级别 2.2.0

### **initialize(listener as [AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) or **Null**)**

构造函数

参数：

- listener — ([AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/)) —

    灯光网络实例可选地将 [LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/) 类的扩展作为参数。如果用户计划仅使用 get\* 方法轮询数据，也可以传入 `null`。


起始版本：

API 级别 2.2.0

### **restoreHeadlightsNetworkModeControl()** as **Void**

将所有前灯交由用户选择的灯光网络模式控制。

起始版本：

API 级别 2.2.0

### **restoreTaillightsNetworkModeControl()** as **Void**

将所有尾灯交由用户选择的灯光网络模式控制。

起始版本：

API 级别 2.2.0

### **setHeadlightsMode(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module))** as **Void**

使所有前灯进入相同模式。

发送灯光模式之前，应检查网络中每个前灯支持的模式，因为灯光会忽略进入其不支持模式的命令。在此处设置模式的灯光将不会受 Light Network Mode 控制，直到恢复这些模式，或直到用户在 ConnectIQ 外部更改 Light Network Mode。

参数：

- mode — ([AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) —

    [LIGHT\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_MODE_AUTO-const) 枚举值


起始版本：

API 级别 2.2.0

### **setTaillightsMode(mode as [AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module))** as **Void**

使所有尾灯进入相同模式。

发送灯光模式之前，应检查网络中每个尾灯支持的模式，因为灯光会忽略进入其不支持模式的命令。在此处设置模式的灯光将不会受 Light Network Mode 控制，直到恢复这些模式，或直到用户在 ConnectIQ 外部更改 Light Network Mode。

参数：

- mode — ([AntPlus.LightMode](/connect-iq/api-docs/Toybox/AntPlus/#LightMode-module)) —

    [LIGHT\_MODE\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_MODE_AUTO-const) 枚举值


起始版本：

API 级别 2.2.0

### **toggleSignalLight(left as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

用于右转向灯和左转向灯的信号开关。

- 如果信号灯已接通，则断开信号灯。

- 如果信号灯未接通，则接通信号灯。


\*如果相反的信号当前处于启用状态，则此操作会自动将其停用。

参数：

- left — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

- 设为 `true` 以控制左侧信号

- 为控制右侧信号时为 `false`



起始版本：

API 级别 2.2.0
