---
title: "Class: Toybox.WatchUi.MapMarker"
---
# Class: Toybox.WatchUi.MapMarker

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)


[show all](#)

## 概述

The base class for the MapMarker object.

The MapMarker is used to hold a [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), or a [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) enum value, and the corresponding `x, y` value to note the "hotspot" for the image to be used as an icon for a marker within a [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/). This class also contains the [Location](/connect-iq/api-docs/Toybox/Position/Location/) at which the MapMarker should be displayed on the map.

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

- [**getLocation**](#getLocation-instance_function)() as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

    Get the location for the MapMarker.

- [**initialize**](#initialize-instance_function)(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))

    Constructor.

- [**setIcon**](#setIcon-instance_function)(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.MapMarkerIcon](/connect-iq/api-docs/Toybox/WatchUi/#MapMarkerIcon-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set a bitmap icon to use for the MapMarker object on a [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/).

- [**setLabel**](#setLabel-instance_function)(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

## 实例方法详情

### **getLocation()** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

Get the location for the MapMarker.

Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    The location for this MapMarker as a Location object


Since:

API 级别 3.0.0

### **initialize(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))**

Constructor

Parameters:

- location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    The Location at which the MapMarker object will be rendered on the map


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if location is not a [Location](/connect-iq/api-docs/Toybox/Position/Location/) type


### **setIcon(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.MapMarkerIcon](/connect-iq/api-docs/Toybox/WatchUi/#MapMarkerIcon-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Set a bitmap icon to use for the MapMarker object on a [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/).

Parameters:

- icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    A BitmapType or [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) value

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `x` location of the hotspot on the bitmap in pixels (px). Used to align the hotspot with the longitude of the MapMarker. This value is required, but will be disregarded when used with [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) type.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The `y` location of the hotspot on the bitmap in pixels (px). Used to align the hotspot with the latitude value of the MapMarker. This value is required, but will be disregarded when used with [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) type.


Since:

API 级别 3.0.0

Throws:

- ([WatchUi.InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/)) —

    Thrown if the `x, y` values for the hotspot fall outside the bounds of the icon image

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if icon is not a supported type

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if icon is not a supported value


### **setLabel(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

Parameters:

- label — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The label for the marker object as a String or string ResourceId


另见：

- [Core Topics - String Resources](/connect-iq/core-topics/resources/)


Since:

API 级别 3.0.0
