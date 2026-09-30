---
title: "Class: Toybox.Graphics.BitmapTexture"
---
# Class: Toybox.Graphics.BitmapTexture

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/)


[show all](#)

## 概述

An object representing a textured area with in a bitmap that can be can be used to fill a primitive drawable object.

Since:

API 级别 4.0.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })

    Constructor.

- [**setOffset**](#setOffset-instance_function)(offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set an offset for the texture.


## 实例方法详情

### **initialize(options as { :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A dictionary representing a bitmap with an offset to be used as a texture.

- :bitmap — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)) —

        Bitmap to be used as a texture.

- :offsetX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        An x offset with in the bitmap to be mapped to the x coordinate of the origin of the primitive object.

- :offsetY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        An y offset with in the bitmap to be mapped to the y coordinate of the origin of the primitive object.


Since:

API 级别 4.0.0

### **setOffset(offsetX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), offsetY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Set an offset for the texture.

Parameters:

- offsetX —

    [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) An x offset with in the bitmap to be used to render the texture

- offsetY —

    [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) An y offset with in the bitmap to be used to render the texture


Since:

API 级别 4.0.0
