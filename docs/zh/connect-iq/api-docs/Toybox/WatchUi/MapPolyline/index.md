---
title: "Class: Toybox.WatchUi.MapPolyline"
---
# 类：Toybox.WatchUi.MapPolyline

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)


[show all](#)

## 概述

表示地图上折线的对象。

此对象包含一个由 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象组成的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，用于在地图上绘制折线。

## 另见：

- [https://en.wikipedia.org/wiki/Polygonal\_chain](https://en.wikipedia.org/wiki/Polygonal_chain)


Since:

API 级别 3.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


:::details 支持的设备

-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 520 Plus
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
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
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
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
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
-   Venu® X1

:::

## 实例方法摘要 [collapse](#)

- [**addLocation**](#addLocation-instance_function)(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>) as **Void**

    将一个或多个 Location 添加到 MapPolyline 对象的位置 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)。

- [**clear**](#clear-instance_function)() as **Void**

    从 MapPolyline 对象的位置 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 清除所有 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

- [**getLocation**](#getLocation-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

    获取此 MapPolyline 对象中指定索引处的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

- [**numLocations**](#numLocations-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取此 MapPolyline 对象中 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象的数量。

- [**setColor**](#setColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置要在地图上绘制的 MapPolyline 颜色。

- [**setWidth**](#setWidth-instance_function)(width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置要在地图上绘制的 MapPolyline 的宽度。


## 实例方法详情

### **addLocation(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>)** as **Void**

将一个或多个 Location 添加到 MapPolyline 对象的位置 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)。

Parameters:

- location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    一个 Location 对象或 Location 对象数组


Since:

API 级别 3.0.0

### **clear()** as **Void**

从 MapPolyline 对象的位置 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 清除所有 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

Since:

API 级别 3.0.0

### **getLocation(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

获取此 MapPolyline 对象中指定索引处的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象。

Parameters:

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    请求的 Location 的索引


Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    指定索引处的 Location


Since:

API 级别 3.0.0

### **numLocations()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取此 MapPolyline 对象中 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象的数量。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    此 MapPolyline 对象中的 Location 对象数。


Since:

API 级别 3.0.0

### **setColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置要在地图上绘制的 MapPolyline 颜色。

Parameters:

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    以 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 枚举值在地图上绘制线条的颜色。


Since:

API 级别 3.0.0

### **setWidth(width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置要在地图上绘制的 MapPolyline 的宽度。

Parameters:

- width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    线宽，单位为像素（px）


Since:

API 级别 3.0.0
