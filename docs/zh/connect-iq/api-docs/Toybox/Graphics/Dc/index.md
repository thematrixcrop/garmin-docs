---
title: "Class: Toybox.Graphics.Dc"
---
# Class: Toybox.Graphics.Dc

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)


[show all](#)

## 概述

This class represents a device context.

It provides methods to perform drawing operations on the device.

注意：

You should never directly instantiate a Dc object, or attempt to render to the screen outside of an onUpdate call.

Example:

Draws a blue rectangle using direct pixel parameters.

```
using Toybox.Graphics;
function onUpdate(dc) {
    dc.setColor(Graphics.COLOR_BLUE, Graphics.COLOR_BLACK);
    dc.fillRectangle(100, 100, 100, 100);
}
```

Example:

Draws a red circle using direct pixel parameters.

```
using Toybox.Graphics;
function onUpdate(dc) {
    dc.setColor(Graphics.COLOR_RED, Graphics.COLOR_BLACK);
    dc.fillCircle(50, 100, 75);
}
```

Example:

Draws "Hello World" in the center of the screen using calls to the Device Context (dc).

```
using Toybox.Graphics;
function onUpdate(dc) {
    dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_TRANSPARENT);
    dc.drawText(
        dc.getWidth() / 2,                      // gets the width of the device and divides by 2
        dc.getHeight() / 2,                     // gets the height of the device and divides by 2
        Graphics.FONT_LARGE,                    // sets the font size
        "Hello World",                          // the String to display
        Graphics.TEXT_JUSTIFY_CENTER            // sets the justification for the text
                );
}
```

Example:

Clears the screen of device with background color (Graphics.COLOR\_BLACK).

```
using Toybox.Graphics;
function onUpdate(dc) {
    dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_BLACK);
    dc.clear();
}
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**clear**](#clear-instance_function)() as **Void**

    使用背景色擦除屏幕。

- [**clearClip**](#clearClip-instance_function)() as **Void**

    重置可绘制区域。

- [**drawAngledText**](#drawAngledText-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Draw angled text Draw text such that it is oriented perpendicular to a radial line at the given angle.

- [**drawArc**](#drawArc-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), r as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), attr as [Graphics.ArcDirection](/connect-iq/api-docs/Toybox/Graphics/#ArcDirection-module), degreeStart as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), degreeEnd as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    绘制弧线。

- [**drawBitmap**](#drawBitmap-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type)) as **Void**

    将位图绘制到屏幕上。

- [**drawBitmap2**](#drawBitmap2-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), options as { :bitmapX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :tintColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :filterMode as [Graphics.FilterMode](/connect-iq/api-docs/Toybox/Graphics/#FilterMode-module), :transform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) } or **Null**) as **Void**

    Draw bitmap with the given options.

- [**drawCircle**](#drawCircle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    围绕某个点绘制圆。

- [**drawEllipse**](#drawEllipse-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), a as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), b as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    围绕某个点绘制椭圆。

- [**drawLine**](#drawLine-instance_function)(x1 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y1 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x2 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y2 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    在两个点之间绘制线段。

- [**drawOffsetBitmap**](#drawOffsetBitmap-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapWidth as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapHeight as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type)) as **Void**

    使用偏移量将位图绘制到屏幕上。

- [**drawPoint**](#drawPoint-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    在屏幕上绘制点。

- [**drawRadialText**](#drawRadialText-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), direction as [Graphics.RadialTextDirection](/connect-iq/api-docs/Toybox/Graphics/#RadialTextDirection-module)) as **Void**

    Draw radial text Draw text oriented along an arc.

- [**drawRectangle**](#drawRectangle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    绘制矩形。

- [**drawRoundedRectangle**](#drawRoundedRectangle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    绘制圆角矩形。

- [**drawScaledBitmap**](#drawScaledBitmap-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type)) as **Void**

    将缩放后的位图绘制到曲面上。

- [**drawText**](#drawText-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), text as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    在给定位置绘制文本。

- [**fillCircle**](#fillCircle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    使用前景色填充圆。

- [**fillEllipse**](#fillEllipse-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), a as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), b as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    使用前景色填充椭圆。

- [**fillPolygon**](#fillPolygon-instance_function)(pts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>) as **Void**

    使用前景色填充多边形。

- [**fillRectangle**](#fillRectangle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    使用前景色填充矩形。

- [**fillRoundedRectangle**](#fillRoundedRectangle-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    使用前景色填充圆角矩形。

- [**getFontHeight**](#getFontHeight-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取字体的高度。

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取应用可用显示区域的高度。

- [**getTextDimensions**](#getTextDimensions-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    获取 String 的宽度和高度。

- [**getTextWidthInPixels**](#getTextWidthInPixels-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 String 的宽度。

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取应用可用显示区域的宽度。

- [**setAntiAlias**](#setAntiAlias-instance_function)(enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    启用图元的抗锯齿绘制。此方法不支持带有调色板的 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)。

- [**setBlendMode**](#setBlendMode-instance_function)(mode as [Graphics.BlendMode](/connect-iq/api-docs/Toybox/Graphics/#BlendMode-module)) as **Void**

    设置绘制时的混合模式。

- [**setClip**](#setClip-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    为 Dc 应用剪裁区域。

- [**setColor**](#setColor-instance_function)(foreground as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置当前前景色和背景色。

- [**setFill**](#setFill-instance_function)(fill as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/)) as **Void**

    设置用于绘制基本图形的填充工具。

- [**setPenWidth**](#setPenWidth-instance_function)(width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置线条的宽度。

- [**setStroke**](#setStroke-instance_function)(stroke as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/)) as **Void**

    设置用于绘制基本图形的绘制工具。


## 实例方法详情

### **clear()** as **Void**

使用背景色擦除屏幕。

注意：

Starting form version 3.1.0, COLOR\_TRANSPARENT will also be honored as background color, which will cause the value of pixels in the clip region to be replaced by COLOR\_TRANSPARENT. For example, this can be used to clear the transparent overlay layer so animation background is visible.

Since:

API 级别 1.0.0

### **clearClip()** as **Void**

重置可绘制区域。

Since:

API 级别 2.3.0

### **drawAngledText(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Draw angled text

Draw text such that it is oriented perpendicular to a radial line at the given angle.

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    文本的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    文本的 y 位置

- font — ([Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)) —

    要使用的字体。

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要渲染的字符串。

- justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Specifies how text is placed relative to the text location.

- angle — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    Angle of the text baseline in degrees counter-clockwise from the 3 o'clock position.


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

Since:

API 级别 4.2.1

### **drawArc(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), r as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), attr as [Graphics.ArcDirection](/connect-iq/api-docs/Toybox/Graphics/#ArcDirection-module), degreeStart as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), degreeEnd as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

绘制弧线。

- 0 度：3 点钟位置。

- 90 度：12 点钟位置。

- 180 度：9 点钟位置。

- 270 度：6 点钟位置。


注意：

所有参数都向零截断。当 degreeStart 和 degreeEnd 相等时，将绘制完整的圆。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The x location of the arc center

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The y location of the arc center

- r — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The radius of the arc

- attr — ([Graphics.ArcDirection](/connect-iq/api-docs/Toybox/Graphics/#ArcDirection-module)) —

    Arc drawing attributes. (ARC\_COUNTER\_CLOCKWISE or ARC\_CLOCKWISE)

- degreeStart — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The start angle of the arc by degrees.

- degreeEnd — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The end angle of the arc by degrees.


Since:

API 级别 1.2.0

### **drawBitmap(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type))** as **Void**

将位图绘制到屏幕上。

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 y 坐标

- bitmap — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)) —

    The object to draw. The source color palette must be a subset of the destination color palette.


Since:

API 级别 1.0.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果源颜色调色板不是目标调色板的子集，则抛出


### **drawBitmap2(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), options as { :bitmapX as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapY as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :bitmapHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :tintColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :filterMode as [Graphics.FilterMode](/connect-iq/api-docs/Toybox/Graphics/#FilterMode-module), :transform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) } or **Null**)** as **Void**

Draw bitmap with the given options

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 y 坐标

- bitmap — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要渲染的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)。源调色板必须是目标调色板的子集。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :bitmapX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The x coordinate of the top left corner of the source bitmap area. Default is 0

- :bitmapY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The y coordinate of the top left corner of the source bitmap area. Default is 0

- :bitmapWidth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The width of the source bitmap area. Default is `bitmap.getWidth()`

- :bitmapHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The height of the source bitmap area. Default is `bitmap.getHeight()`

- :tintColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        Tint color to apply to the output If not provided, no tint is applied.

- :filterMode — ([Graphics.FilterMode](/connect-iq/api-docs/Toybox/Graphics/#FilterMode-module)) —

        Default is FILTER\_MODE\_POINT.

- :transform — ([Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)) —

        Transformation to apply to the source image when drawing it to the output. If not provided, no transform is applied.


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
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
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
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

Since:

API 级别 4.2.1

Throws:

- InvalidValueException if one of `:bitmapX`, `:bitmapY`, `:bitmapWidth`, `:bitmapHeight` are provided and outside the bounds of `bitmap`.


### **drawCircle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

围绕某个点绘制圆。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    圆心的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    圆心的 y 位置

- radius — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    圆的半径。


Since:

API 级别 1.0.0

### **drawEllipse(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), a as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), b as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

围绕某个点绘制椭圆。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆中心的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆中心的 y 位置

- a — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    椭圆沿 x 轴的半径。

- b — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    椭圆沿 y 轴的半径。


Since:

API 级别 1.0.0

### **drawLine(x1 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y1 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x2 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y2 as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

在两个点之间绘制线段。

Parameters:

- x1 — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The first x coordinate

- y1 — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The first y coordinate

- x2 — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The second x coordinate

- y2 — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The second y coordinate


Since:

API 级别 1.0.0

### **drawOffsetBitmap(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapWidth as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmapHeight as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type))** as **Void**

使用偏移量将位图绘制到屏幕上。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 y 坐标

- bitmapX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x offset of the upper left corner of pixels to copy from the bitmap.

- bitmapY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y offset of the upper left corner of pixels to copy from the bitmap.

- bitmapWidth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width of the area to copy pixels from the bitmap.

- bitmapHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The height of the area to copy pixels from the bitmap

- bitmap — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要渲染的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)。源调色板必须是目标调色板的子集。


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.0.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果源颜色调色板不是目标调色板的子集，则抛出


### **drawPoint(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

在屏幕上绘制点。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The x location of the point

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The y location of the point


Since:

API 级别 1.0.0

### **drawRadialText(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/), text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), angle as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), direction as [Graphics.RadialTextDirection](/connect-iq/api-docs/Toybox/Graphics/#RadialTextDirection-module))** as **Void**

Draw radial text

Draw text oriented along an arc.

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The x location of the center of circle for radial text

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The y location of the center of circle for radial text

- font — ([Graphics.VectorFont](/connect-iq/api-docs/Toybox/Graphics/VectorFont/)) —

    要使用的字体。

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要渲染的字符串。

- justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Specifies how text placed relative to the text location.

- angle — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    Angle to a point on the circle to justify text in degrees counter-clockwise from the 3 o'clock position.

- radius — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    Distance from center of circle on which to draw text.

- direction — ([Graphics.RadialTextDirection](/connect-iq/api-docs/Toybox/Graphics/#RadialTextDirection-module)) —

    Text drawing direction along the arc.


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

Since:

API 级别 4.2.1

### **drawRectangle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

绘制矩形。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 y 坐标

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的宽度值

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的高度值


Since:

API 级别 1.0.0

### **drawRoundedRectangle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

绘制圆角矩形。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 y 坐标

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的宽度值

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的高度值

- radius — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The radius of the rounding.


Since:

API 级别 1.0.0

### **drawScaledBitmap(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type))** as **Void**

将缩放后的位图绘制到曲面上。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    绘制起点的左上角 y 坐标

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The width of the bitmap drawn on the destination surface

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The height of the bitmap drawn on the destination surface

- bitmap — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要渲染的 [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 或 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)。源调色板必须是目标调色板的子集。


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.0.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    如果源颜色调色板不是目标调色板的子集，则抛出


### **drawText(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), text as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

在给定位置绘制文本。

This method is not supported for anti-aliased fonts (including most built in fonts) for a [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) that has a palette.

注意：

[FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    文本的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    文本的 y 位置

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    The font to use. This can be a custom font loaded from resources or a Graphics.FONT\_\* value.

- text — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to render.

- justification —

    Mask of Graphics.TEXT\_JUSTIFY\_\* constants. This may either be a single Graphics.TEXT\_JUSTIFY\_\* constant, or a combination of one vertical and one horizontal justification value as a bit mask (e.g., Graphics.TEXT\_JUSTIFY\_CENTER | Graphics.TEXT\_JUSTIFY\_VCENTER).


Since:

API 级别 1.0.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    Thrown if an anti-aliased font is used on a paletted bitmap


### **fillCircle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

使用前景色填充圆。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    圆心的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    圆心的 y 位置

- radius — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    圆的半径。


Since:

API 级别 1.0.0

### **fillEllipse(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), a as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), b as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

使用前景色填充椭圆。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆中心的 x 位置

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆中心的 y 位置

- a — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆沿 x 轴的半径。

- b — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    椭圆沿 y 轴的半径。


Since:

API 级别 1.0.0

### **fillPolygon(pts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>)** as **Void**

使用前景色填充多边形。

Parameters:

- pts — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    Array of coordinates with a 64 point limit


Since:

API 级别 1.0.0

### **fillRectangle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

使用前景色填充矩形。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 y 坐标

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的宽度值

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的高度值


Since:

API 级别 1.0.0

### **fillRoundedRectangle(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), radius as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

使用前景色填充圆角矩形。

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 x 坐标

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    左上角的 y 坐标

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的宽度值

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    矩形的高度值

- radius — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The radius of the rounding


Since:

API 级别 1.0.0

### **getFontHeight(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取字体的高度。

Parameters:

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    The font to measure


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The height of the font in pixels


Since:

API 级别 1.0.0

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取应用可用显示区域的高度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The height of display in pixels


Since:

API 级别 1.0.0

### **getTextDimensions(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

获取 String 的宽度和高度。

This takes new lines into account when determining the height. The width is the maximum width for a given line of the String. If a String has two newline characters (\\\\n) in it, the height would be for three lines and the width would be the width of the longest String.

Parameters:

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The text to get the width for

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    用于测量文本的字体。


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    The \[width, height\] of the String in pixels


Since:

API 级别 1.0.0

### **getTextWidthInPixels(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 String 的宽度。

Parameters:

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The text to get width for

- font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

    用于测量文本的字体。


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The width of String in pixels


Since:

API 级别 1.0.0

### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取应用可用显示区域的宽度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The width of display in pixels


Since:

API 级别 1.0.0

### **setAntiAlias(enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

启用图元的抗锯齿绘制。此方法不支持带有调色板的 [BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)。

Parameters:

- enabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果要启用 AA，则为 `true`，否则为 `false`。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
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
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 67 / 67i
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® Crossover AMOLED
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
-   Montana® 7 Series
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 3.2.0

Throws:

- ([Graphics.InvalidPaletteException](/connect-iq/api-docs/Toybox/Graphics/InvalidPaletteException/)) —

    Thrown if antialiasing is enabled for a paletted bitmap.


### **setBlendMode(mode as [Graphics.BlendMode](/connect-iq/api-docs/Toybox/Graphics/#BlendMode-module))** as **Void**

设置绘制时的混合模式。

注意：

BLEND\_MODE\_NO\_BLEND is only supported while drawing bitmaps

Parameters:

- mode — ([Graphics.BlendMode](/connect-iq/api-docs/Toybox/Graphics/#BlendMode-module)) —

    [Graphics.BLEND\_MODE\_\*](/connect-iq/api-docs/Toybox/Graphics/#BlendMode-module) 常量。


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.0.0

### **setClip(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

为 Dc 应用剪裁区域。

Pixels outside of the region will not be affected by any operations.

Parameters:

- x — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The x coordinate of the top left corner of the clipping region

- y — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The y coordinate of the top left corner of the clipping region

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The width of the clipping region in pixels.

- height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The height of the clipping region in pixels.


Since:

API 级别 2.3.0

### **setColor(foreground as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置当前前景色和背景色。

Parameters:

- foreground — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module) 常量或形式为 0xRRGGBB 的 24 位整数。

- background — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#ColorValue-module) 常量或形式为 0xRRGGBB 的 24 位整数。


Since:

API 级别 1.0.0

### **setFill(fill as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/))** as **Void**

设置用于绘制基本图形的填充工具。

注意：

this function takes precedence over setColor(). If fill tool is not set, the foreground color will be used.

Parameters:

- fill — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The [BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) or [Color](/connect-iq/api-docs/Toybox/Lang/Number/) 32-bit integer in the format 0xAARRGGBB to use for fill draws.


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.0.0

### **setPenWidth(width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置线条的宽度。

Parameters:

- width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

    The pen width in pixels


Since:

API 级别 1.0.0

### **setStroke(stroke as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/))** as **Void**

设置用于绘制基本图形的绘制工具。

注意：

this function takes precedence over setColor(). If draw tool is not set, the foreground color will be used.

Parameters:

- stroke — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The [BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) or [Color](/connect-iq/api-docs/Toybox/Lang/Number/) 32-bit integer in the format 0xAARRGGBB to use for draws.


:::details 支持的设备

-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® Crossover AMOLED
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.0.0
