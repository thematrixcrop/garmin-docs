---
title: "Module: Toybox.Graphics"
---
# Module: Toybox.Graphics

## 概述

The Graphics module provides a set of tools that allow developers to use basic drawing functionality.

This provides the ability to draw shapes, lines, fill shapes, and use dynamic layouts for graphic elements based on specific device contexts. The Device Context (Dc) is useful for developers who are interested in creating content for multiple device platforms with differing screen shapes, sizes, and color palettes.

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 背景（自 API Level 5.1.0 起支持）

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 命名空间下的类

类：[AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/), [BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/), [BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/), [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), [BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/), [Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/), [FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/), [InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/), [InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/), [OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/), [ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/), [VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)

## 常量摘要

### FontDefinition

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FONT\_XTINY | 0 |
API 级别 1.0.0

|

Extra tiny Connect IQ font

|
| FONT\_TINY | 1 |

API 级别 1.0.0

|

Tiny Connect IQ font

|
| FONT\_SMALL | 2 |

API 级别 1.0.0

|

Small Connect IQ font

|
| FONT\_MEDIUM | 3 |

API 级别 1.0.0

|

Medium Connect IQ font

|
| FONT\_LARGE | 4 |

API 级别 1.0.0

|

Large Connect IQ font

|
| FONT\_NUMBER\_MILD | 5 |

API 级别 1.0.0

|

Normal size number only Connect IQ font

|
| FONT\_NUMBER\_MEDIUM | 6 |

API 级别 1.0.0

|

Medium size number only Connect IQ font

|
| FONT\_NUMBER\_HOT | 7 |

API 级别 1.0.0

|

Large size number only Connect IQ font

|
| FONT\_NUMBER\_THAI\_HOT | 8 |

API 级别 1.0.0

|

Huge size number only Connect IQ font

|
| FONT\_SYSTEM\_XTINY | 9 |

API 级别 1.3.0

|

Extra tiny system font

|
| FONT\_SYSTEM\_TINY | 10 |

API 级别 1.3.0

|

Tiny system font

|
| FONT\_SYSTEM\_SMALL | 11 |

API 级别 1.3.0

|

Small system font

|
| FONT\_SYSTEM\_MEDIUM | 12 |

API 级别 1.3.0

|

Medium system font

|
| FONT\_SYSTEM\_LARGE | 13 |

API 级别 1.3.0

|

Large system font

|
| FONT\_SYSTEM\_NUMBER\_MILD | 14 |

API 级别 1.3.0

|

Normal size number only system font

|
| FONT\_SYSTEM\_NUMBER\_MEDIUM | 15 |

API 级别 1.3.0

|

Medium size number only system font

|
| FONT\_SYSTEM\_NUMBER\_HOT | 16 |

API 级别 1.3.0

|

Large size number only system font

|
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | 17 |

API 级别 1.3.0

|

Huge size number only system font

|
| FONT\_GLANCE | 18 |

API 级别 3.1.8

|

Glance text font

|
| FONT\_GLANCE\_NUMBER | 19 |

API 级别 3.1.8

|

Glance number only font

|
| FONT\_AUX1 | 20 |

API 级别 4.2.2

|

Auxiliary Font 1

|
| FONT\_AUX2 | 21 |

API 级别 4.2.2

|

Auxiliary Font 2

|
| FONT\_AUX3 | 22 |

API 级别 4.2.3

|

Auxiliary Font 3

|
| FONT\_AUX4 | 23 |

API 级别 4.2.3

|

Auxiliary Font 4

|
| FONT\_AUX5 | 24 |

API 级别 4.2.3

|

Auxiliary Font 5

|
| FONT\_AUX6 | 25 |

API 级别 4.2.3

|

Auxiliary Font 6

|
| FONT\_AUX7 | 26 |

API 级别 4.2.3

|

Auxiliary Font 7

|
| FONT\_AUX8 | 27 |

API 级别 4.2.3

|

Auxiliary Font 8

|
| FONT\_AUX9 | 28 |

API 级别 4.2.3

|

Auxiliary Font 9

|

### ColorValue

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| COLOR\_WHITE | 0xFFFFFF |
API 级别 1.0.0

|

White

|
| COLOR\_LT\_GRAY | 0xAAAAAA |

API 级别 1.0.0

|

Light Gray

|
| COLOR\_DK\_GRAY | 0x555555 |

API 级别 1.0.0

|

Dark Gray

|
| COLOR\_BLACK | 0x000000 |

API 级别 1.0.0

|

Black

|
| COLOR\_RED | 0xFF0000 |

API 级别 1.0.0

|

Red

|
| COLOR\_DK\_RED | 0xAA0000 |

API 级别 1.0.0

|

Dark Red

|
| COLOR\_ORANGE | 0xFF5500 |

API 级别 1.0.0

|

Orange

|
| COLOR\_YELLOW | 0xFFAA00 |

API 级别 1.0.0

|

Yellow

|
| COLOR\_GREEN | 0x00FF00 |

API 级别 1.0.0

|

Green

|
| COLOR\_DK\_GREEN | 0x00AA00 |

API 级别 1.0.0

|

Dark Green

|
| COLOR\_BLUE | 0x00AAFF |

API 级别 1.0.0

|

Blue

|
| COLOR\_DK\_BLUE | 0x0000FF |

API 级别 1.0.0

|

Dark Blue

|
| COLOR\_PURPLE | 0xAA00FF |

API 级别 1.0.0

|

Purple. Not valid on fenix 3 or D2 Bravo. Use 0x5500AA instead.

|
| COLOR\_PINK | 0xFF00FF |

API 级别 1.0.0

|

Pink

|
| COLOR\_TRANSPARENT | \-1 |

API 级别 1.0.0

|

Transparent

|

### TextJustification

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TEXT\_JUSTIFY\_RIGHT | 0 |
API 级别 1.0.0

|

Right justify the text at the x/y coordinates

|
| TEXT\_JUSTIFY\_CENTER | 1 |

API 级别 1.0.0

|

Center justify the text at the x/y coordinates

|
| TEXT\_JUSTIFY\_LEFT | 2 |

API 级别 1.0.0

|

Left justify the text at the x/y coordinates

|
| TEXT\_JUSTIFY\_VCENTER | 4 |

API 级别 1.0.0

|

Center the text vertically

|

### BlendMode

Blend mode

Specifies how colors of a source pixel will be blended with the colors of a destination pixel.

In the below descriptions

```
   S is source pixel
   D is destination pixel
   a is the alpha component
```

Since:

API 级别 4.0.0

| 名称 | 值 | 自 | 说明 | 注意 |
| --- | --- | --- | --- | --- |
| BLEND\_MODE\_DEFAULT | 0 |
API 级别 4.0.0

|

Alias for `BLEND_MODE_SOURCE_OVER`

 |  |
| BLEND\_MODE\_NO\_BLEND | 1 |

API 级别 4.0.0

|

Alias for `BLEND_MODE_SOURCE`

 |  |
| BLEND\_MODE\_SOURCE\_OVER | 0 |

API 级别 4.2.1

|

S + (1 - S.a) \* D

 |  |
| BLEND\_MODE\_SOURCE | 1 |

API 级别 4.2.1

|

S, i.e. no blending.

 |  |
| BLEND\_MODE\_MULTIPLY | 2 |

API 级别 4.2.1

|

(S \* (1 - D.a)) + (D \* (1 - S.a)) + (S \* D)

|

仅支持配备 GPU 的设备

|
| BLEND\_MODE\_ADDITIVE | 3 |

API 级别 4.2.1

|

S + D

|

仅支持配备 GPU 的设备

|

### AlphaBlending

Constant representing alpha blending state for buffered bitmaps

Since:

API 级别 4.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ALPHA\_BLENDING\_FULL | 0 |
API 级别 4.0.0

|

Default surface for buffered bitmap with maximum alpha blending support

|
| ALPHA\_BLENDING\_PARTIAL | 1 |

API 级别 4.0.0

|

Surface for buffered bitmap with at least a 1-bit alpha channel. The actual number of bits may vary by device.

|

### RadialTextDirection

Orientation for radial text

Since:

API 级别 4.2.1

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| RADIAL\_TEXT\_DIRECTION\_CLOCKWISE | 0 |
API 级别 4.2.1

|

Top of text is further from center. Typically used for upright text along the top of a circle.

|
| RADIAL\_TEXT\_DIRECTION\_COUNTER\_CLOCKWISE | 1 |

API 级别 4.2.1

|

Bottom of text is further from center. Typically used for upright text along the bottom of a circle.

|

### FilterMode

Filter mode

Specifies how many pixels to sample

Since:

API 级别 4.2.1

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FILTER\_MODE\_POINT | 0 |
API 级别 4.2.1

|

Point filter

|
| FILTER\_MODE\_BILINEAR | 1 |

API 级别 4.2.1

|

Bilinear filter

|

### ArcDirection

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ARC\_COUNTER\_CLOCKWISE | 0 |
API 级别 1.2.0

|

Counter clockwise draw

|
| ARC\_CLOCKWISE | 1 |

API 级别 1.2.0

|

Clockwise draw

|

## 类型定义摘要 [collapse](#)

- [**BitmapType**](#BitmapType-named_type) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)
- [**ColorType**](#ColorType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.ColorValue](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module)
- [**FontType**](#FontType-named_type) as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)
- [**Point2D**](#Point2D-named_type) as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

    Type alias for an Array of length 2.

- [**VectorFontOptions**](#VectorFontOptions-named_type) as { :face as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, :size as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :font as [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), :scale as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) }

## 实例方法摘要 [collapse](#)

- [**createBufferedBitmap**](#createBufferedBitmap-instance_function)(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) }) as [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

    Create a buffered bitmap object.

- [**createColor**](#createColor-instance_function)(alpha as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), red as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), green as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), blue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Create a color with the individual channel values passed in.

- [**fitTextToArea**](#fitTextToArea-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), truncate as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    Get a text string to fit in a specified area.

- [**getFontAscent**](#getFontAscent-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取单倍行距文本基线以上的建议距离。

- [**getFontDescent**](#getFontDescent-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取单倍行距文本基线以下的建议距离。

- [**getFontHeight**](#getFontHeight-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取给定字体的高度（上升高度加下降高度）。

- [**getVectorFont**](#getVectorFont-instance_function)(options as [Graphics.VectorFontOptions](/connect-iq/api-docs/Toybox/Graphics/#VectorFontOptions-named_type)) as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) or **Null**

    Get a font for this device.


## 类型定义详情

### **BitmapType** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

Since:

API 级别 1.0.0

### **ColorType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.ColorValue](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module)

Since:

API 级别 1.0.0

### **FontType** as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)

Since:

API 级别 1.0.0

### **Point2D** as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

Type alias for an Array of length 2

Since:

API 级别 1.0.0

### **VectorFontOptions** as { :face as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, :size as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :font as [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), :scale as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) }

Since:

API 级别 1.0.0

## 实例方法详情

### **createBufferedBitmap(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) })** as [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

Create a buffered bitmap object. This function will return a [Toybox::Graphics::BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/) object which can be used to reference the [Toybox::Graphics::BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) object.

注意：

The result of a draw/fill operation to a [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) created with [ALPHA\_BLENDING\_PARTIAL](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) may produce inconsistent results between devices and the ConnectIQ simulator if the drawn pixels are not fully opaque or fully transparent.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项 Dictionary。必须包含 width 和 height，可选 palette，或为 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)。此资源不得包含 alpha 通道。

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The width of the surface in pixels. Must be a positive integer value.

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The height of the surface in pixels. Must be a positive integer value.

- :palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        The colors used in this surface. Using less will reduce the bitmap size. The bitmap will use the system default if not provided. The maximum palette size allowed is 256 colors. If a palette is provided, the number of colors must also be &lt;= to the number of system colors.

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        以位/像素表示的颜色深度；缺失时默认为系统值。

- :bitmapResource — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)) —

        用于初始化的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)

- :alphaBlending — ([Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module)) —

        一个用于指定此缓冲位图对象所支持的 Alpha 混合级别的 [AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) 枚举。


Returns:

- [Toybox::Graphics::BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/) BufferedBitmap 对象的引用


Since:

API 级别 4.0.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过系统颜色数量，则抛出。

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过 256 种颜色，则抛出。

- ([Graphics.InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/)) —

    如果提供的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 包含 alpha 通道，则抛出。


### **createColor(alpha as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), red as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), green as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), blue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Create a color with the individual channel values passed in

Parameters:

- alpha — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Number value ranging from 0-255 representing alpha channel

- red — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Number value ranging from 0-255 representing red channel

- green — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Number value ranging from 0-255 representing green channel

- blue — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Number value ranging from 0-255 representing blue channel


Returns:

- color \[Toybox::Lang::Number\] 32-bit value representing the created color that can be used with Toybox.Graphics functions.


Since:

API 级别 4.0.0

### **fitTextToArea(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), truncate as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Get a text string to fit in a specified area

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The text to fit into the given area, which may include newlines

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    The font to use when determining line break placement

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The width of the area to fit within

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The height of the area to fit within

- truncate — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    If `true`, the resulting string may be truncated to fit within the provided area using the provided font


Returns:

- Returns a String suitable for display in the given area. The String will be truncated if the 'truncate' parameter is `true` and the String cannot fit into the specified area. Otherwise, `null` will be returned.


Since:

API 级别 3.1.0

### **getFontAscent(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取单倍行距文本基线以上的建议距离。

基线是文本所在的线。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The ascent of the font


Since:

API 级别 1.2.0

### **getFontDescent(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取单倍行距文本基线以下的建议距离。

基线是文本所在的线。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The descent of the font


Since:

API 级别 1.2.0

### **getFontHeight(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取给定字体的高度（上升高度加下降高度）。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The height of the font


Since:

API 级别 1.2.0

### **getVectorFont(options as [Graphics.VectorFontOptions](/connect-iq/api-docs/Toybox/Graphics/#VectorFontOptions-named_type))** as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) or **Null**

Get a font for this device

注意：

The :font and :scale options are only supported in CIQ 5.1.0 and later.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

    A description of the font to retrieve.

- :face — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        A String representing the face name requested, or an Array of face names that are acceptable.

- :size — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The height of the font requested in pixels as a positive number.

- :font — ([Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module), [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)) —

        The font to apply a scale to.

- :scale — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        The amount to scale the font.


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) —

    if a font can be created for the given parameters, otherwise `null`


另见：

- [Reference Guides - Devices Reference](/connect-iq/device-reference/)


Since:

API 级别 4.2.1

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `options` is not a supported type.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the provided `:size` or `:scale` are not a supported type.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the provided `:face` is not a supported type.

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the provided `:face` value is out of range.

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the provided `:size` or `:scale` value is not positive.
