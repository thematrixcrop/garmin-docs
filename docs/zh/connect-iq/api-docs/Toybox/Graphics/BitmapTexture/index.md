---
title: "Class: Toybox.Graphics.BitmapTexture"
---
# 类：Toybox.Graphics.BitmapTexture

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/)


[show all](#)

## 概述

表示位图中纹理区域的对象，该区域可用于填充原始可绘制对象。

Since:

API 级别 4.0.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })

    Constructor.

- [**setOffset**](#setOffset-instance_function)(offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置纹理的偏移量。


## 实例方法详情

### **initialize(options as { :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    表示带有偏移量的位图的字典，该位图将用作纹理。

- :bitmap — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)) —

        用作纹理的位图。

- :offsetX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        位图中的 x 偏移量，用于映射到原始对象原点的 x 坐标。

- :offsetY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        位图中的 y 偏移量，用于映射到原始对象原点的 y 坐标。


Since:

API 级别 4.0.0

### **setOffset(offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置纹理的偏移量。

Parameters:

- offsetX —

    [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) 位图中用于渲染纹理的 x 偏移量

- offsetY —

    [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) 位图中用于渲染纹理的 y 偏移量


Since:

API 级别 4.0.0
