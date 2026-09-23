---
title: "Class: Toybox.WatchUi.MapPolyline"
---
# Class: Toybox.WatchUi.MapPolyline

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)


[show all](#)

## Overview

An object representing a polyline (polygonal chain) on the map.

This object holds an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects to draw a polyline on the map.

## See Also:

-   [https://en.wikipedia.org/wiki/Polygonal\_chain](https://en.wikipedia.org/wiki/Polygonal_chain)


Since:

API Level 3.0.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


:::details Supported Devices

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

## Instance Method Summary [collapse](#)

-   [**addLocation**](#addLocation-instance_function)(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>) as **Void**

    Add a Location or Locations to the MapPolyline object location [Array](/connect-iq/api-docs/Toybox/Lang/Array/).

-   [**clear**](#clear-instance_function)() as **Void**

    Clear all the [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects from the MapPolyline object's location [Array](/connect-iq/api-docs/Toybox/Lang/Array/).

-   [**getLocation**](#getLocation-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

    Get the [Location](/connect-iq/api-docs/Toybox/Position/Location/) object at a provided index in this MapPolyline object.

-   [**numLocations**](#numLocations-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the number of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects in this MapPolyline object.

-   [**setColor**](#setColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    Set the color of the MapPolyline to draw on the map.

-   [**setWidth**](#setWidth-instance_function)(width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set the width of the MapPolyline to draw on the map.


## Instance Method Details

### **addLocation(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>)** as **Void**

Add a Location or Locations to the MapPolyline object location [Array](/connect-iq/api-docs/Toybox/Lang/Array/).

Parameters:

-   location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    A Location object or an Array of Location objects


Since:

API Level 3.0.0

### **clear()** as **Void**

Clear all the [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects from the MapPolyline object's location [Array](/connect-iq/api-docs/Toybox/Lang/Array/).

Since:

API Level 3.0.0

### **getLocation(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

Get the [Location](/connect-iq/api-docs/Toybox/Position/Location/) object at a provided index in this MapPolyline object.

Parameters:

-   index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The index of the requested Location


Returns:

-   [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    The Location at the provided index


Since:

API Level 3.0.0

### **numLocations()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the number of [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects in this MapPolyline object.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of Location objects in this MapPolyline object.


Since:

API Level 3.0.0

### **setColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

Set the color of the MapPolyline to draw on the map.

Parameters:

-   color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    The color to draw the line on the map as a [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) enum value.


Since:

API Level 3.0.0

### **setWidth(width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Set the width of the MapPolyline to draw on the map.

Parameters:

-   width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width of the line in pixels (px)


Since:

API Level 3.0.0
