---
title: "Class: Toybox.Graphics.BufferedBitmap"
---
# 类：Toybox.Graphics.BufferedBitmap

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)


[show all](#)

## 概述

此类表示屏幕外位图。它提供修改位图调色板和获取可绘制上下文的方法。

## 另见：

- [Core Topics - Resources](/connect-iq/core-topics/resources/)


Example:

使用资源设置屏幕外缓冲区。

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

    获取用于在缓冲位图上绘制的 Dc。

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取位图的高度。

- [**getPalette**](#getPalette-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>

    此表面使用系统调色板时为 `null`。

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取位图的宽度。

- [**initialize**](#initialize-instance_function)(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) }) deprecated

    Constructor.

- [**isCached**](#isCached-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查位图的内存是否仍已加载。用户可以调用此方法，检查自上次使用以来底层资源是否仍在内存中；如果为 `true`，则表示诸如 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 之类的资源已被缓存，可以直接使用而无需重新绘制。

- [**setPalette**](#setPalette-instance_function)(palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>) as **Void**

## 实例方法详情

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)

获取用于在缓冲位图上绘制的 Dc。

Returns:

- [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) —

    绘制上下文


Since:

API 级别 2.3.0

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取位图的高度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


Since:

API 级别 4.0.0

### **getPalette()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>

此表面使用系统调色板时为 `null`

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    此位图的当前调色板。


Since:

API 级别 2.3.0

### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取位图的宽度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


Since:

API 级别 4.0.0

### **initialize(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) })**

**此项已弃用**

在 ConnectIQ 4.0.0 之后使用 [Graphics.createBufferedBitmap()](/connect-iq/api-docs/Toybox/Graphics/#createBufferedBitmap-instance_function)。

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项 Dictionary。必须包含 width 和 height，可选 palette，或为 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)。此资源不得包含 alpha 通道。

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        表面的宽度，单位为像素

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        表面高度，单位为像素

- :palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        The colors used in this surface. Using less will reduce the bitmap size. The bitmap will use the system default if not provided. The maximum palette size allowed is 256 colors. If a palette is provided, the number of colors must also be &lt;= to the number of system colors.

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        以位/像素表示的颜色深度；缺失时默认为系统值。

- :bitmapResource — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)) —

        用于初始化的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)

- :alphaBlending — ([Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module)) —

        一个用于指定此缓冲位图对象所支持的 Alpha 混合级别的 [AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) 枚举


Since:

API 级别 2.3.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过系统颜色数量，则抛出。

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过 256 种颜色，则抛出。

- ([Graphics.InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/)) —

    如果提供的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 包含 alpha 通道，则抛出。

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    如果没有足够的可用内存来加载资源，则抛出。


### **isCached()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查位图的内存是否仍已加载。用户可以调用此方法，检查自上次使用以来底层资源是否仍在内存中；如果为 `true`，则表示诸如 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 之类的资源已被缓存，可以直接使用而无需重新绘制。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果自上次使用以来对象的内存尚未被回收，则为 `true`。


Since:

API 级别 4.0.0

### **setPalette(palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>)** as **Void**

Parameters:

- palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    此位图的调色板。颜色数量必须与当前调色板匹配。图像中的每种颜色都会被新调色板中指定的颜色替换。


Since:

API 级别 2.3.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小与当前调色板不匹配，则抛出。
