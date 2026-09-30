---
title: "Class: Toybox.WatchUi.ViewLoop"
---
# 类：Toybox.WatchUi.ViewLoop

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/)


[show all](#)

## 概述

表示视图循环的对象，其中包含一组可滚动视图。

Since:

API 级别 3.4.0

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
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 945 LTE
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
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

## 常量摘要

### Direction

指定视图转换的方向

Since:

API 级别 3.4.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DIRECTION\_NEXT | 0 |
API 级别 3.4.0

|

向前循环

|
| DIRECTION\_PREVIOUS | 1 |

API 级别 3.4.0

|

向后循环

|

## 实例方法摘要 [collapse](#)

- [**changeView**](#changeView-instance_function)(direction as [ViewLoop.Direction](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/#Direction-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    根据方向将视图更改为视图循环中的下一个或上一个视图，并在转换后显示页面指示器。

- [**initialize**](#initialize-instance_function)(factory as [WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/), options as { :page as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :wrap as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) } or **Null**)

    ViewLoop 的构造函数。


## 实例方法详情

### **changeView(direction as [ViewLoop.Direction](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/#Direction-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

根据方向将视图更改为视图循环中的下一个或上一个视图，并在转换后显示页面指示器。

Parameters:

- direction — ([ViewLoop.Direction](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/#Direction-module)) —

    The direction in which to change page to


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if view is changed, otherwise false, e.g. reached the start/end of of non-wrapping loop.


Since:

API 级别 3.4.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown when the view loop is not an active page for the app.


### **initialize(factory as [WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/), options as { :page as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :wrap as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) } or **Null**)**

ViewLoop 的构造函数

Parameters:

- factory — ([WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/)) —

    供视图循环检索在此视图循环中管理的视图和委托的工厂对象

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    此视图循环对象的选项

- :page — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        视图循环的初始页面索引。默认值为 0。

- :wrap — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果允许循环浏览页面。默认值为 true。

- :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        页面指示器的强调色。如果设备不支持强调色，则可能会忽略 :color 选项。


Since:

API 级别 3.4.0

Throws:

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if [ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/) returns a size less than or equal to 0.

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if [Number](/connect-iq/api-docs/Toybox/Lang/Number/) :page option value is negative or greater than the value returned by the [ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/)
