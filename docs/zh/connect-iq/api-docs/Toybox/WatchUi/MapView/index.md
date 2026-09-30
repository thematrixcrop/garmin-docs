---
title: "Class: Toybox.WatchUi.MapView"
---
# 类：Toybox.WatchUi.MapView

Inherits:

Toybox.WatchUi.View

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)


[show all](#)

## 概述

一个用于在屏幕上渲染地图的 [View](/connect-iq/api-docs/Toybox/WatchUi/View/)。

地图以静态方式渲染，并聚焦于边界框和/或地图上绘制的 MapMarker 点或 MapPolyline。地图可以在 [MAP\_MODE\_BROWSE](/connect-iq/api-docs/Toybox/WatchUi/) 或 [MAP\_MODE\_PREVIEW](/connect-iq/api-docs/Toybox/WatchUi/) 模式下渲染。

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

## 直接已知子类

[WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/)

## 实例方法摘要 [collapse](#)

- [**clear**](#clear-instance_function)() as **Void**

    清除地图中的所有对象。

- [**getMapMode**](#getMapMode-instance_function)() as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)

    获取此 MapView 中地图的当前模式。

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**setMapMarker**](#setMapMarker-instance_function)(markers as [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)\>) as **Void**

    将一个 [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象或 MapMarker 对象的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 添加到地图以进行渲染。

- [**setMapMode**](#setMapMode-instance_function)(mode as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)) as **Void**

    设置此 MapView 中地图的模式。

- [**setMapVisibleArea**](#setMapVisibleArea-instance_function)(topLeft as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), bottomRight as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) as **Void**

    使用边界框选择要在屏幕上渲染的地图区域。

- [**setPolyline**](#setPolyline-instance_function)(polyline as [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)) as **Void**

    将 [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象添加到地图以进行渲染。

- [**setScreenVisibleArea**](#setScreenVisibleArea-instance_function)(topLeftX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), topLeftY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置屏幕上用于聚焦地图的区域。


## 实例方法详情

### **clear()** as **Void**

清除地图中的所有对象。

移除所有 [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 和 [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象。

Since:

API 级别 3.0.0

### **getMapMode()** as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)

获取此 MapView 中地图的当前模式。

Returns:

- [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module) —

    地图在屏幕上渲染时所使用的模式，类型为 [MAP\_MODE\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 枚举值


Since:

API 级别 3.0.0

### **initialize()**

Constructor

Since:

API 级别 3.0.0

### **setMapMarker(markers as [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)\>)** as **Void**

将一个 [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象或 MapMarker 对象的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 添加到地图以进行渲染。

Parameters:

- markers — ([WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    要在地图上渲染的 MapMarker 对象或 Marker 对象数组


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `markers` 参数不是有效的 MapMarker 对象或 MapMarker 对象数组，则抛出


### **setMapMode(mode as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module))** as **Void**

设置此 MapView 中地图的模式。

Parameters:

- mode — ([WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)) —

    地图将在屏幕上渲染时所使用的模式，类型为 [MAP\_MODE\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 枚举值


Since:

API 级别 3.0.0

### **setMapVisibleArea(topLeft as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), bottomRight as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))** as **Void**

使用边界框选择要在屏幕上渲染的地图区域。当前底层地图数据将重新绘制，因此不建议在 onUpdate() 中调用此函数，因为这可能导致地图闪烁。

Parameters:

- topLeft — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    地图可见区域的左上角点

- bottomRight — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    地图可见区域的右下角点


另见：

- [MapView.setScreenVisibleArea()](/connect-iq/api-docs/Toybox/WatchUi/MapView/#setScreenVisibleArea-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `topLeft` 或 `bottomRight` 不是 Location 对象，则会抛出此异常


### **setPolyline(polyline as [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/))** as **Void**

将 [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象添加到地图以进行渲染。

Parameters:

- polyline — ([WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)) —

    要在地图上渲染的折线


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `polyline` 不是有效的 MapPolyline 对象，则会抛出此异常


### **setScreenVisibleArea(topLeftX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), topLeftY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置屏幕上用于聚焦地图的区域。

Parameters:

- topLeftX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上左上角可见像素的 `x` 位置

- topLeftY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上左上角可见像素的 `y` 位置

- bottomRightX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上右下角可见像素的 `x` 位置

- bottomRightY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上右下角可见像素的 `y` 位置


另见：

- [MapView.setMapVisibleArea()](/connect-iq/api-docs/Toybox/WatchUi/MapView/#setMapVisibleArea-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([WatchUi.InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/)) —

    如果 `topLeftX`、`topLeftY`、`bottomRightX` 或 `bottomRightY` 超出设备屏幕范围，则会抛出此异常
