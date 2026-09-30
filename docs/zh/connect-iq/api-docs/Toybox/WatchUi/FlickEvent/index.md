---
title: "类：Toybox.WatchUi.FlickEvent"
---
# 类：Toybox.WatchUi.FlickEvent

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)


[显示全部](#)

## 概述

FlickEvent 是在设备触摸屏发生轻扫交互时发送给 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的对象。

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


示例：

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.InputDelegate {
    function onFlick(flickEvent as FlickEvent) as Boolean {
        System.println(flickEvent.getDirection()); // e.g. up is 0, right is 90, down is 180, left is 270
        return true;
    }
}
```

起始版本：

API 级别 3.3.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**getCoordinates**](#getCoordinates-instance_function)() as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    获取点击事件的坐标。

- [**getDirection**](#getDirection-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取轻扫的方向。

- [**getDistance**](#getDistance-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取轻拂的距离。

- [**getVelocity**](#getVelocity-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    获取轻拂的速度。


## 实例方法详情

### **getCoordinates()** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

获取点击事件的坐标。

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含 flick 事件结束时 x 和 y 坐标的数组，类型为 [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/)


起始版本：

API 级别 3.3.0

### **getDirection()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取轻扫的方向。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    以度为单位的轻扫方向


起始版本：

API 级别 3.3.0

### **getDistance()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取轻拂的距离。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    轻拂操作的长度，单位为像素。


起始版本：

API 级别 3.3.0

### **getVelocity()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

获取轻拂的速度。

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    轻扫速度，单位为每秒像素数


起始版本：

API 级别 3.3.0
