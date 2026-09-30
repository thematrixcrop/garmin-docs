---
title: "Class: Toybox.WatchUi.ViewLoopFactory"
---
# Class: Toybox.WatchUi.ViewLoopFactory

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/)


[show all](#)

## 概述

用于创建视图/委托实例的工厂对象，由 ViewLoop 使用

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

## 类型定义摘要 [collapse](#)

- [**Delegates**](#Delegates-named_type) as [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) or [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

    Delegate types that can be provided by a ViewLoopFactory.

- [**Views**](#Views-named_type) as [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

    View types that can be provided by a ViewLoopFactory.


## 实例方法摘要 [collapse](#)

- [**getSize**](#getSize-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Return the number of view/delegate pairs that are managed by this factory.

- [**getView**](#getView-instance_function)(page as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as \[ [ViewLoopFactory.Views](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Views-named_type) \] or \[ [ViewLoopFactory.Views](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Views-named_type), [ViewLoopFactory.Delegates](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Delegates-named_type) \]

    This function will be called by the system to retrieve a view/delegate pair for the page at the given index.


## 类型定义详情

### **Delegates** as [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) or [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

Delegate types that can be provided by a ViewLoopFactory

Since:

API 级别 3.4.0

### **Views** as [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

View types that can be provided by a ViewLoopFactory

Since:

API 级别 3.4.0

## 实例方法详情

### **getSize()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Return the number of view/delegate pairs that are managed by this factory

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    total number of views for this factory


Since:

API 级别 3.4.0

### **getView(page as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as \[ [ViewLoopFactory.Views](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Views-named_type) \] or \[ [ViewLoopFactory.Views](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Views-named_type), [ViewLoopFactory.Delegates](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Delegates-named_type) \]

This function will be called by the system to retrieve a view/delegate pair for the page at the given index

注意：

此方法必须在派生类中重写；若被直接调用，会导致应用崩溃。

注意：

[Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 和 [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) 的支持已添加到 API 版本 5.1.0。

Parameters:

- page — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Index for the view/delegate pair


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array containing a [View](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Views-named_type) and an optional [Delegate](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/#Delegates-named_type).


Since:

API 级别 3.4.0
