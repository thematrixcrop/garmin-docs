---
title: "模块：Toybox.Graphics"
---
# 模块：Toybox.Graphics

## 概述

Graphics 模块提供一组工具，使开发者能够使用基本绘图功能。

此项支持绘制形状和线条、填充形状，以及根据特定设备上下文对图形元素使用动态布局。设备上下文（Dc）对于希望为具有不同屏幕形状、尺寸和调色板的多个设备平台创建内容的开发者很有用。

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FONT\_XTINY | 0 |
API 级别 1.0.0

|

超小型 Connect IQ 字体

|
| FONT\_TINY | 1 |

API 级别 1.0.0

|

Connect IQ 超小字体

|
| FONT\_SMALL | 2 |

API 级别 1.0.0

|

小号 Connect IQ 字体

|
| FONT\_MEDIUM | 3 |

API 级别 1.0.0

|

中号 Connect IQ 字体

|
| FONT\_LARGE | 4 |

API 级别 1.0.0

|

大型 Connect IQ 字体

|
| FONT\_NUMBER\_MILD | 5 |

API 级别 1.0.0

|

仅 Connect IQ 字体的普通大小数字

|
| FONT\_NUMBER\_MEDIUM | 6 |

API 级别 1.0.0

|

仅用于中号数字的 Connect IQ 字体

|
| FONT\_NUMBER\_HOT | 7 |

API 级别 1.0.0

|

仅用于大号数字的 Connect IQ 字体

|
| FONT\_NUMBER\_THAI\_HOT | 8 |

API 级别 1.0.0

|

超大号纯数字 Connect IQ 字体

|
| FONT\_SYSTEM\_XTINY | 9 |

API 级别 1.3.0

|

超小型系统字体

|
| FONT\_SYSTEM\_TINY | 10 |

API 级别 1.3.0

|

系统超小字体

|
| FONT\_SYSTEM\_SMALL | 11 |

API 级别 1.3.0

|

小号系统字体

|
| FONT\_SYSTEM\_MEDIUM | 12 |

API 级别 1.3.0

|

中号系统字体

|
| FONT\_SYSTEM\_LARGE | 13 |

API 级别 1.3.0

|

大号系统字体

|
| FONT\_SYSTEM\_NUMBER\_MILD | 14 |

API 级别 1.3.0

|

仅系统字体的普通大小数字

|
| FONT\_SYSTEM\_NUMBER\_MEDIUM | 15 |

API 级别 1.3.0

|

仅用于中号数字的系统字体

|
| FONT\_SYSTEM\_NUMBER\_HOT | 16 |

API 级别 1.3.0

|

仅用于大号数字的系统字体

|
| FONT\_SYSTEM\_NUMBER\_THAI\_HOT | 17 |

API 级别 1.3.0

|

超大号纯数字系统字体

|
| FONT\_GLANCE | 18 |

API 级别 3.1.8

|

速览文本字体

|
| FONT\_GLANCE\_NUMBER | 19 |

API 级别 3.1.8

|

速览专用数字字体

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| COLOR\_WHITE | 0xFFFFFF |
API 级别 1.0.0

|

白色

|
| COLOR\_LT\_GRAY | 0xAAAAAA |

API 级别 1.0.0

|

浅灰色

|
| COLOR\_DK\_GRAY | 0x555555 |

API 级别 1.0.0

|

深灰色

|
| COLOR\_BLACK | 0x000000 |

API 级别 1.0.0

|

黑色

|
| COLOR\_RED | 0xFF0000 |

API 级别 1.0.0

|

红色

|
| COLOR\_DK\_RED | 0xAA0000 |

API 级别 1.0.0

|

深红色

|
| COLOR\_ORANGE | 0xFF5500 |

API 级别 1.0.0

|

橙色

|
| COLOR\_YELLOW | 0xFFAA00 |

API 级别 1.0.0

|

黄色

|
| COLOR\_GREEN | 0x00FF00 |

API 级别 1.0.0

|

绿色

|
| COLOR\_DK\_GREEN | 0x00AA00 |

API 级别 1.0.0

|

深绿色

|
| COLOR\_BLUE | 0x00AAFF |

API 级别 1.0.0

|

蓝色

|
| COLOR\_DK\_BLUE | 0x0000FF |

API 级别 1.0.0

|

深蓝色

|
| COLOR\_PURPLE | 0xAA00FF |

API 级别 1.0.0

|

紫色。在 fenix 3 或 D2 Bravo 上无效。请改用 0x5500AA。

|
| COLOR\_PINK | 0xFF00FF |

API 级别 1.0.0

|

粉色

|
| COLOR\_TRANSPARENT | \-1 |

API 级别 1.0.0

|

透明

|

### TextJustification

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TEXT\_JUSTIFY\_RIGHT | 0 |
API 级别 1.0.0

|

将文本相对于 x/y 坐标右对齐

|
| TEXT\_JUSTIFY\_CENTER | 1 |

API 级别 1.0.0

|

使文本以 x/y 坐标为中心对齐

|
| TEXT\_JUSTIFY\_LEFT | 2 |

API 级别 1.0.0

|

将文本左对齐到 x/y 坐标

|
| TEXT\_JUSTIFY\_VCENTER | 4 |

API 级别 1.0.0

|

使文本垂直居中

|

### BlendMode

混合模式

指定源像素的颜色与目标像素的颜色混合的方式。

在以下描述中

```
   S 表示源像素
   D 表示目标像素
   a 表示 alpha 分量
```

起始版本：

API 级别 4.0.0

| 名称 | 值 | 自 | 说明 | 注意 |
| --- | --- | --- | --- | --- |
| BLEND\_MODE\_DEFAULT | 0 |
API 级别 4.0.0

|

BLEND_MODE_SOURCE_OVER 的别名

 |  |
| BLEND\_MODE\_NO\_BLEND | 1 |

API 级别 4.0.0

|

BLEND_MODE_SOURCE 的别名

 |  |
| BLEND\_MODE\_SOURCE\_OVER | 0 |

API 级别 4.2.1

|

S + (1 - S.a) \* D

 |  |
| BLEND\_MODE\_SOURCE | 1 |

API 级别 4.2.1

|

S，即不进行混合。

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

表示缓冲位图 alpha 混合状态的常量

起始版本：

API 级别 4.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ALPHA\_BLENDING\_FULL | 0 |
API 级别 4.0.0

|

对最大支持 alpha 混合的缓冲位图使用的默认表面

|
| ALPHA\_BLENDING\_PARTIAL | 1 |

API 级别 4.0.0

|

用于具有至少 1 位 alpha 通道的缓冲位图的表面。实际位数可能因设备而异。

|

### RadialTextDirection

径向文本的方向

起始版本：

API 级别 4.2.1

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| RADIAL\_TEXT\_DIRECTION\_CLOCKWISE | 0 |
API 级别 4.2.1

|

文本顶部距离中心更远。通常用于沿圆形顶部显示的正向文本。

|
| RADIAL\_TEXT\_DIRECTION\_COUNTER\_CLOCKWISE | 1 |

API 级别 4.2.1

|

文本底部远离中心。通常用于沿圆底部显示正向文本。

|

### FilterMode

过滤模式

指定要采样的像素数量

起始版本：

API 级别 4.2.1

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FILTER\_MODE\_POINT | 0 |
API 级别 4.2.1

|

点筛选器

|
| FILTER\_MODE\_BILINEAR | 1 |

API 级别 4.2.1

|

双线性滤波器

|

### ArcDirection

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ARC\_COUNTER\_CLOCKWISE | 0 |
API 级别 1.2.0

|

逆时针绘制

|
| ARC\_CLOCKWISE | 1 |

API 级别 1.2.0

|

顺时针绘制

|

## 类型定义摘要 [collapse](#)

- [**BitmapType**](#BitmapType-named_type) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)
- [**ColorType**](#ColorType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.ColorValue](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module)
- [**FontType**](#FontType-named_type) as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)
- [**Point2D**](#Point2D-named_type) as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

    长度为 2 的数组的类型别名。

- [**VectorFontOptions**](#VectorFontOptions-named_type) as { :face as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, :size as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :font as [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), :scale as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) }

## 实例方法摘要 [collapse](#)

- [**createBufferedBitmap**](#createBufferedBitmap-instance_function)(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) }) as [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

    创建缓冲位图对象。

- [**createColor**](#createColor-instance_function)(alpha as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), red as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), green as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), blue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    使用传入的各个通道值创建颜色。

- [**fitTextToArea**](#fitTextToArea-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), truncate as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    获取适合指定区域的文本字符串。

- [**getFontAscent**](#getFontAscent-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取单倍行距文本基线以上的建议距离。

- [**getFontDescent**](#getFontDescent-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取单倍行距文本基线以下的建议距离。

- [**getFontHeight**](#getFontHeight-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取给定字体的高度（上升高度加下降高度）。

- [**getVectorFont**](#getVectorFont-instance_function)(options as [Graphics.VectorFontOptions](/connect-iq/api-docs/Toybox/Graphics/#VectorFontOptions-named_type)) as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) or **Null**

    获取此设备的字体。


## 类型定义详情

### **BitmapType** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

起始版本：

API 级别 1.0.0

### **ColorType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.ColorValue](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module)

起始版本：

API 级别 1.0.0

### **FontType** as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)

起始版本：

API 级别 1.0.0

### **Point2D** as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

长度为 2 的数组的类型别名

起始版本：

API 级别 1.0.0

### **VectorFontOptions** as { :face as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, :size as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :font as [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module) or [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), :scale as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) }

起始版本：

API 级别 1.0.0

## 实例方法详情

### **createBufferedBitmap(options as { :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapResource as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), :alphaBlending as [Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) })** as [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)

创建缓冲位图对象。此函数将返回一个 [Toybox::Graphics::BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/) 对象，可用于引用 [Toybox::Graphics::BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 对象。

注意：

如果绘制的像素不是完全不透明或完全透明，则使用 [ALPHA\_BLENDING\_PARTIAL](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) 创建的 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的绘制/填充操作结果可能会因设备和 ConnectIQ 模拟器而不一致。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项 Dictionary。必须包含 width 和 height，可选 palette，或为 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)。此资源不得包含 alpha 通道。

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        表面的宽度，单位为像素。必须为正整数值。

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        表面高度，单位为像素。必须为正整数值。

- :palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        此表面使用的颜色。减少颜色数量可以缩小位图大小。如果未提供调色板，位图将使用系统默认调色板。允许的最大调色板大小为 256 种颜色。如果提供了调色板，其颜色数量还必须小于或等于系统颜色数量。

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        以位/像素表示的颜色深度；缺失时默认为系统值。

- :bitmapResource — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)) —

        用于初始化的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)

- :alphaBlending — ([Graphics.AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module)) —

        一个用于指定此缓冲位图对象所支持的 Alpha 混合级别的 [AlphaBlending](/connect-iq/api-docs/Toybox/Graphics/#AlphaBlending-module) 枚举。


返回：

- [Toybox::Graphics::BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/) BufferedBitmap 对象的引用


起始版本：

API 级别 4.0.0

抛出：

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过系统颜色数量，则抛出。

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果调色板大小超过 256 种颜色，则抛出。

- ([Graphics.InvalidBitmapResourceException](/connect-iq/api-docs/Toybox/Graphics/InvalidBitmapResourceException/)) —

    如果提供的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 包含 alpha 通道，则抛出。


### **createColor(alpha as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), red as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), green as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), blue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

使用传入的各个通道值创建颜色

参数：

- alpha — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    表示 Alpha 通道的数值，范围为 0-255

- red — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    表示红色通道的数值，范围为 0-255

- green — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    表示绿色通道的数值，范围为 0-255

- blue — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    表示蓝色通道的数值，范围为 0-255


返回：

- color \[Toybox::Lang::Number\] 32-bit value representing the created color that can be used with Toybox.Graphics functions.


起始版本：

API 级别 4.0.0

### **fitTextToArea(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), truncate as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

获取适合指定区域的文本字符串

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

参数：

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要放入给定区域的文本，其中可能包含换行符

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    确定换行位置时使用的字体

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    要适配的区域宽度

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    要适配到的区域高度

- truncate — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果为 `true`，生成的字符串可能会使用提供的字体进行截断，以适应提供的区域


返回：

- 返回适合显示在给定区域中的 String。如果“truncate”参数为 `true` 且 String 无法容纳在指定区域内，则会截断 String。否则返回 `null`。


起始版本：

API 级别 3.1.0

### **getFontAscent(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取单倍行距文本基线以上的建议距离。

基线是文本所在的线。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

参数：

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    字体的上升部


起始版本：

API 级别 1.2.0

### **getFontDescent(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取单倍行距文本基线以下的建议距离。

基线是文本所在的线。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

参数：

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    字体的下降部


起始版本：

API 级别 1.2.0

### **getFontHeight(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取给定字体的高度（上升高度加下降高度）。

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

参数：

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    要使用的字体


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    字体高度


起始版本：

API 级别 1.2.0

### **getVectorFont(options as [Graphics.VectorFontOptions](/connect-iq/api-docs/Toybox/Graphics/#VectorFontOptions-named_type))** as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) or **Null**

获取此设备的字体

注意：

:font 和 :scale 选项仅在 CIQ 5.1.0 及更高版本中受支持。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

    要获取的字体描述。

- :face — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        所请求的表盘名称，或可接受的表盘名称数组。

- :size — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        请求字体的高度，单位为像素，必须为正数。

- :font — ([Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module), [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)) —

        要应用缩放的字体。

- :scale — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        字体缩放量。


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

返回：

- [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/) —

    如果可以根据给定参数创建字体，则返回该字体；否则返回 `null`


另见：

- [Reference Guides - Devices Reference](/connect-iq/device-reference/)


起始版本：

API 级别 4.2.1

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `options` 不是受支持的类型，则会抛出此异常。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果提供的 `:size` 或 `:scale` 不是受支持的类型，则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果提供的 `:face` 不是受支持的类型，则抛出。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的 `:face` 值超出范围，则抛出。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的 `:size` 或 `:scale` 值不是正数，则抛出。
