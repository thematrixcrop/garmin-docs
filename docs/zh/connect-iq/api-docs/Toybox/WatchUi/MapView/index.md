---
title: "Class: Toybox.WatchUi.MapView"
---
# Class: Toybox.WatchUi.MapView

Inherits:

Toybox.WatchUi.View

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)


[show all](#)

## 概述

A [View](/connect-iq/api-docs/Toybox/WatchUi/View/) for rendering a map on the screen.

The map is rendered statically and focused on the bounding box and/or a MapMarker point or MapPolyline drawn on the map. The map can be rendered in [MAP\_MODE\_BROWSE](/connect-iq/api-docs/Toybox/WatchUi/) or [MAP\_MODE\_PREVIEW](/connect-iq/api-docs/Toybox/WatchUi/) mode.

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

    Get the current mode for the map in this MapView.

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**setMapMarker**](#setMapMarker-instance_function)(markers as [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)\>) as **Void**

    将一个 [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象或 MapMarker 对象的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 添加到地图以进行渲染。

- [**setMapMode**](#setMapMode-instance_function)(mode as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)) as **Void**

    Set the mode for the map in this MapView.

- [**setMapVisibleArea**](#setMapVisibleArea-instance_function)(topLeft as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), bottomRight as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) as **Void**

    Select the area of the map to render on the screen with a bounding box.

- [**setPolyline**](#setPolyline-instance_function)(polyline as [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)) as **Void**

    将 [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象添加到地图以进行渲染。

- [**setScreenVisibleArea**](#setScreenVisibleArea-instance_function)(topLeftX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), topLeftY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set the area on the screen to focus the map.


## 实例方法详情

### **clear()** as **Void**

清除地图中的所有对象。

Removes all [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) and [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) objects.

Since:

API 级别 3.0.0

### **getMapMode()** as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)

Get the current mode for the map in this MapView.

Returns:

- [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module) —

    The mode in which the map is rendered on the screen as a [MAP\_MODE\_\*](/connect-iq/api-docs/Toybox/WatchUi/) enum value


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

    A MapMarker object or an Array of Marker objects to be rendered on the map


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `markers` param is not a valid MapMarker object or an Array of MapMarker objects


### **setMapMode(mode as [WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module))** as **Void**

Set the mode for the map in this MapView.

Parameters:

- mode — ([WatchUi.MapMode](/connect-iq/api-docs/Toybox/WatchUi/#MapMode-module)) —

    The mode in which the map will be rendered on the screen as a [MAP\_MODE\_\*](/connect-iq/api-docs/Toybox/WatchUi/) enum value


Since:

API 级别 3.0.0

### **setMapVisibleArea(topLeft as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), bottomRight as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))** as **Void**

Select the area of the map to render on the screen with a bounding box. A redraw of the current underlying map data will occur, so calling this function inside of onUpdate() is discouraged as it could lead to map flicker.

Parameters:

- topLeft — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    The top left point of the visible area of the map

- bottomRight — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    The bottom right point of the visible area of the map


另见：

- [MapView.setScreenVisibleArea()](/connect-iq/api-docs/Toybox/WatchUi/MapView/#setScreenVisibleArea-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `topLeft` or `bottomRight` are not a Location objects


### **setPolyline(polyline as [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/))** as **Void**

将 [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象添加到地图以进行渲染。

Parameters:

- polyline — ([WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)) —

    The polyline to be rendered on the map


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `polyline` is is not a valid MapPolyline object


### **setScreenVisibleArea(topLeftX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), topLeftY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), bottomRightY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Set the area on the screen to focus the map.

Parameters:

- topLeftX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `x` location of the top-left visible pixel on the screen

- topLeftY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `y` location of the top-left visible pixel on the screen

- bottomRightX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `x` location of the bottom-right visible pixel on the screen

- bottomRightY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `y` location of the bottom-right visible pixel on the screen


另见：

- [MapView.setMapVisibleArea()](/connect-iq/api-docs/Toybox/WatchUi/MapView/#setMapVisibleArea-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([WatchUi.InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/)) —

    Thrown if `topLeftX`, `topLeftY`, `bottomRightX`, or `bottomRightY` are outside the bounds of the device screen
