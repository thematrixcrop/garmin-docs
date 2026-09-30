---
title: "类：Toybox.AntPlus.LightNetworkListener"
---
# 类：Toybox.AntPlus.LightNetworkListener

继承：

Toybox.AntPlus.DeviceListener

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/)

- [Toybox.AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/)


[显示全部](#)

## 概述

与 LightNetwork 一起使用的侦听器类。

示例：

```
using Toybox.WatchUi;
using Toybox.AntPlus;

var isNetworkNewlyFormed;
var networkState;

// Initializes class variables
function initialize() {
    LightNetworkListener.initialize();
    isNetworkNewlyFormed = false;
}

// Checks if the new state of the network is LIGHT_NETWORK_STATE_FORMED
// If true: Sets isNetworkNewlyFormed to true and requests a Ui Update
// Updates the networkState
// The data parameter is the network state as a number
function onLightNetworkStateUpdate(data) {
    networkState = data;
    if (AntPlus.LIGHT_NETWORK_STATE_FORMED == data) {
        isNetworkNewlyFormed = true;
        WatchUi.requestUpdate();
    }
}
function onBikeLightUpdate(data) {
    WatchUi.requestUpdate();
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

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**onBikeLightUpdate**](#onBikeLightUpdate-instance_function)(data as [AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/)) as **Void**

    自行车灯数据更新时的回调（最大频率

- [**onLightNetworkStateUpdate**](#onLightNetworkStateUpdate-instance_function)(data as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module)) as **Void**

    灯光网络状态更改时的回调。


## 实例方法详情

### **initialize()**

构造函数

起始版本：

API 级别 2.2.0

### **onBikeLightUpdate(data as [AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/))** as **Void**

自行车灯数据更新时的回调（最大频率 1Hz）

参数：

- data — ([AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/)) —

    更新后的灯光信息


起始版本：

API 级别 2.2.0

### **onLightNetworkStateUpdate(data as [AntPlus.LightNetworkState](/connect-iq/api-docs/Toybox/AntPlus/#LightNetworkState-module))** as **Void**

灯光网络状态更改时的回调

参数：

- data — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    [LIGHT\_NETWORK\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#LIGHT_NETWORK_STATE_FORMED-const) 枚举值


起始版本：

API 级别 2.2.0
