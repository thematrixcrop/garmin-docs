---
title: "类：Toybox.WatchUi.MapMarker"
---
# 类：Toybox.WatchUi.MapMarker

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)


[显示全部](#)

## 概述

MapMarker 对象的基类。

MapMarker 用于保存一个 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 枚举值，以及用于标记图像在 [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 中作为标记图标时“热点”的相应 `x, y` 值。此类还包含 MapMarker 应在地图上显示的位置 [Location](/connect-iq/api-docs/Toybox/Position/Location/)。

起始版本：

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

    获取 MapMarker 的位置。

- [**initialize**](#initialize-instance_function)(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))

    Constructor.

- [**setIcon**](#setIcon-instance_function)(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.MapMarkerIcon](/connect-iq/api-docs/Toybox/WatchUi/#MapMarkerIcon-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置位图图标，以便在 [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 上用于 MapMarker 对象。

- [**setLabel**](#setLabel-instance_function)(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

## 实例方法详情

### **getLocation()** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

获取 MapMarker 的位置。

返回：

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    此 MapMarker 的位置，类型为 Location 对象


起始版本：

API 级别 3.0.0

### **initialize(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/))**

构造函数

参数：

- location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    MapMarker 对象将在地图上渲染的位置


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 location 不是 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 类型，则抛出


### **setIcon(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.MapMarkerIcon](/connect-iq/api-docs/Toybox/WatchUi/#MapMarkerIcon-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置位图图标，以便在 [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 上用于 MapMarker 对象。

参数：

- icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个 BitmapType 或 [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 值

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    位图上热点的 `x` 位置，以像素（px）为单位。用于将热点与 MapMarker 的经度对齐。此值是必需的，但与 [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 类型一起使用时会被忽略。

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    位图上热点的 `y` 位置，以像素（px）为单位。用于将热点与 MapMarker 的纬度值对齐。此值是必需的，但与 [MAP\_MARKER\_ICON\_\*](/connect-iq/api-docs/Toybox/WatchUi/) 类型一起使用时会被忽略。


起始版本：

API 级别 3.0.0

抛出：

- ([WatchUi.InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/)) —

    如果热点的 `x, y` 值超出图标图像的边界，则抛出

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `icon` 不是受支持的类型，则会抛出此异常

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果 `icon` 不是受支持的值，则会抛出此异常


### **setLabel(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

参数：

- label — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    标记对象的标签，类型为 String 或字符串 ResourceId


另见：

- [Core Topics - String Resources](/connect-iq/core-topics/resources/)


起始版本：

API 级别 3.0.0
