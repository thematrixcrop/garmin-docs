---
title: "Class: Toybox.Graphics.BufferedBitmap"
---
# Class: Toybox.Graphics.BufferedBitmap

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)


[show all](#)

## 概述

This class represents an off-screen bitmap. It provides methods to modify the bitmap palette, and get a drawable context.

## 另见：

- [Core Topics - Resources](/connect-iq/core-topics/resources/)


Example:

Sets up an off-screen buffer using resources.

```
using Toybox.Graphics;

var screenShape;
var offscreenBuffer;
var dateBuffer;

    if (Toybox.Graphics has :createBufferedBitmap) {        // check to see if device has BufferedBitmap enabled
        offscreenBuffer = Graphics.createBufferedBitmap({   // create an off-screen buffer with a palette of four colors
            :width => dc.getWidth(),
            :height => dc.getHeight(),
            :palette => [
                Graphics.COLOR_DK_GRAY,
                Graphics.COLOR_LT_GRAY,
                Graphics.COLOR_BLACK,
                Graphics.COLOR_WHITE
            ]
        });

        stringBuffer = Graphics.createBufferedBitmap({      // Buffer will have full color support as no palette is defined
                :width => dc.getWidth(),
                :height => Graphics.getFontHeight(Graphics.FONT_MEDIUM)
        });
    } else {
        offscreenBuffer = null;                             // handle devices without BufferedBitmap
        stringBuffer = null;
    }
```

Since:

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**getDc**](#getDc-instance_function)() as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)

    Get the Dc to draw on the buffered bitmap.

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the height of a bitmap.

- [**getPalette**](#getPalette-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>

    `null` if this surface uses the system palette.

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the width of a bitmap.

- [**initialize**](#initialize-instance_function)(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) }) deprecated

    Constructor.

- [**isCached**](#isCached-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Check if the memory for the bitmap is still loaded in the memory User can invoke this method to check if the underlying resource is still available in the memory since last used if `true`, the resource such as [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) has been cached and can be used directly without re-drawing.

- [**setPalette**](#setPalette-instance_function)(palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>) as **Void**

## 实例方法详情

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)

Get the Dc to draw on the buffered bitmap.

Returns:

- [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) —

    The draw context


Since:

API 级别 2.3.0

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the height of a bitmap.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


Since:

API 级别 4.0.0

### **getPalette()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>

`null` if this surface uses the system palette

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    The current palette for this bitmap.


Since:

API 级别 2.3.0

### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the width of a bitmap.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


Since:

API 级别 4.0.0

### **initialize(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) })**

**此项已弃用**

Use [Graphics.createBufferedBitmap()](/connect-iq/api-docs/Toybox/Graphics/#createBufferedBitmap-instance_function) after ConnectIQ version 4.0.0.

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options. Must contain width and height, with optional palette, or a [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/). This resource is not allowed to have an alpha channel.

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The width of the surface in pixels

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The height of the surface in pixels

- :palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        The colors used in this surface. Using less will reduce the bitmap size. The bitmap will use the system default if not provided. The maximum palette size allowed is 256 colors. If a palette is provided, the number of colors must also be &lt;= to the number of system colors.

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Color depth in terms of bits/pixel, when missing, default to system value.

- :bitmapResource — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)) —

        A [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) to initialize

- :alphaBlending — ([Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module)) —

        A [AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) enum to specify the level of alpha blending support for this buffered bitmap object


Since:

API 级别 2.3.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    Thrown if the palette size exceeds the number of system colors.

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    Thrown if the palette size exceeds 256 colors.

- ([Graphics.InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/)) —

    Thrown if the [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) provided has an alpha channel.

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    Thrown if there isn't enough free memory available to load the resource.


### **isCached()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Check if the memory for the bitmap is still loaded in the memory User can invoke this method to check if the underlying resource is still available in the memory since last used if `true`, the resource such as [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) has been cached and can be used directly without re-drawing.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the object's memory has not been recycled since last usage.


Since:

API 级别 4.0.0

### **setPalette(palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>)** as **Void**

Parameters:

- palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    A palette for this bitmap. The number of colors must match the current palette. Each color in the image will be replaced with the colors specified in the new palette.


Since:

API 级别 2.3.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    Thrown if the palette size does not match the current palette.
