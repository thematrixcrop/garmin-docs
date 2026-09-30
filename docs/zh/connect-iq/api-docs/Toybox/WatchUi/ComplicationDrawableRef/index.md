---
title: "类：Toybox.WatchUi.ComplicationDrawableRef"
---
# 类：Toybox.WatchUi.ComplicationDrawableRef

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/)


[show all](#)

## 概述

复杂功能可绘制对象引用，用于定义复杂功能在动画或高亮显示时所使用的可绘制对象及其边界。

起始版本：

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

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。不能为 `null`。

- :drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        Drawable 对象。

- :boundingBox — ([Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) —

        可绘制对象的边界框，用于突出显示可绘制对象的轮廓，并为动画渲染可绘制对象分配缓冲区。


起始版本：

API 级别 5.1.0

抛出：

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供了无效值，则会抛出此异常。
