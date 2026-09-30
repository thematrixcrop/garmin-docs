---
title: "Class: Toybox.WatchUi.ComplicationDrawableRef"
---
# 类：Toybox.WatchUi.ComplicationDrawableRef

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/)


[show all](#)

## 概述

复杂功能可绘制对象引用，用于定义复杂功能在动画或高亮显示时所使用的可绘制对象及其边界。

Since:

API 级别 5.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :boundingBox as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) })

    Constructor.


## 实例方法详情

### **initialize(options as { :drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :boundingBox as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。不能为 `null`。

- :drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The drawable object.

- :boundingBox — ([Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) —

        The bounding box of the drawable object, used to highlight the outline of drawable object and allocate buffer to render the drawable for animating purpose.


Since:

API 级别 5.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if invalid values were provided.
