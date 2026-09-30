---
title: "Graphics"
---
# Graphics

The graphics module handles drawing bitmaps, fonts, and shapes to the device screen.

## Drawing Context

The [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) object is used to draw to a graphics surface. The primary device surface is provided to the View object methods [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function), [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function), and . The size of the surface can be queried with the [Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function) and [Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function) methods.

| Primitive or Operation | Draw | Fill | API Level | Notes |
| --- | --- | --- | --- | --- |
| Set the pen or fill color | [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function), [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) | [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function), [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) | 1.0.0, 4.0.0 | [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) and [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) are API 4.0.0. |
| Set the pen width | [Dc.setPenWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setPenWidth-instance_function) | N/A | 1.0.0 |  |
| Clear the drawable area | N/A | [Dc.clear()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clear-instance_function) | 1.0.0 |  |
| Draw a bitmap | [Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function) | NA | 1.0.0 |  |
| Draw a bitmap | [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) | NA | 4.2.0 |  |
| Draw a text string | [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | NA | 1.0.0 | Only works with [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) |
| Draw a pixel | [Dc.drawPoint()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawPoint-instance_function) | NA | 1.0.0 |  |
| Draw a line | [Dc.drawLine()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawLine-instance_function) | NA | 1.0.0 |  |
| Draw a circle | [Dc.drawCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawCircle-instance_function) | [Dc.fillCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillCircle-instance_function) | 1.0.0 |  |
| Draw an ellipse | [Dc.drawEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawEllipse-instance_function) | [Dc.fillEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillEllipse-instance_function) | 1.0.0 |  |
| Draw a rectangle | [Dc.drawRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRectangle-instance_function) | [Dc.fillRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRectangle-instance_function) | 1.0.0 |  |
| Draw a rounded rectangle | [Dc.drawRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRoundedRectangle-instance_function) | [Dc.fillRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRoundedRectangle-instance_function) | 1.0.0 |  |
| Draw an arc | [Dc.drawArc()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawArc-instance_function) | N/A | 1.0.0 |  |
| Draw a polygon | N/A | [Dc.fillPolygon()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillPolygon-instance_function) | 1.0.0 |  |
| Set the clip area | [Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function) | N/A | 2.3.0 |  |

The [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) method allows you to set the foreground and background drawing colors. Colors are passed to [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) as 24-bit colors of the form 0xRRGGBB. When setting a color, the device will select the closest available color on the system.

A clipping region can be set for a [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) object using the [Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function) method. The top left corner coordinates, width, and height are specified to set this region. All pixels outside of this region will be unaffected by any drawing operations. The pixels within the region will be updated normally. The [Dc.clearClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clearClip-instance_function) method will remove the clipping region.

## Strings and Fonts

Text can be drawn using the [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) method. The [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) object also has methods available to get the text width and height of a string with a specified font. Note that text size methods are also available in the Graphics module outside the [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) object.

| Operation | Function | API Level |
| --- | --- | --- |
| Draw a text string | [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | 1.0.0 |
| Draw text at an angle | [Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function) | 4.2.2 |
| Draw text oriented along an arc | [Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function) | 4.2.2 |
| Get the width and height of a text string with a given font | [Dc.getTextDimensions()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextDimensions-instance_function) | 1.0.0 |
| Get the width of a text string with a given font | [Dc.getTextWidthInPixels()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextWidthInPixels-instance_function) | 1.0.0 |
| Get the height of a given font | [Dc.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getFontHeight-instance_function), [Graphics.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/#getFontHeight-instance_function) | 1.0.0, 1.2.0 |
| Get the ascent of a given font | [Graphics.getFontAscent()](/connect-iq/api-docs/Toybox/Graphics/#getFontAscent-instance_function) | 1.2.0 |
| Get the descent of a given font | [Graphics.getFontDescent()](/connect-iq/api-docs/Toybox/Graphics/#getFontDescent-instance_function) | 1.2.0 |
| Retrieve a system vector font | [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) | 4.2.2 |

### Scalable Fonts

*Since API level 4.2.2*

Font support for Garmin devices can vary from device to device. All devices support unicode bitmap fonts, but some devices support scalable fonts. If a device supports scalable fonts, the supported fonts are published in the [Device Reference](/connect-iq/device-reference/#device-reference) as `Scalable Font` entries in the font list.

To access a scalable font, you can call [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) using the name from the device reference as the `:face` argument. The `:face` argument also will take an array of face names. This allows you to specify backup font faces that are acceptable for your needs in case the device doesn't support your preferred choice. You can also specify the font size in pixels.

Scalable fonts work with [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) but can also be used with the [Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function) and [Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function). These APIs only support scalable fonts and do not support custom fonts loaded as resources.

## Anti-Aliasing

*Since API level 3.2.0*

By default, anti-aliasing of primitives like polygons and lines are disabled, but it can be enabled by calling [Dc.setAntiAlias()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setAntiAlias-instance_function). This method is not available before API level 3.2.0 so if your app runs with the API level set below 3.2.0 make sure to guard it with a `has` check.

```typescript
function draw(dc) {
    if(dc has :setAntiAlias) {
        dc.setAntiAlias(true);
    }
    dc.drawPolygon()
}
```

## Alpha Channels, Color, Fills, Stroke and Blend Modes

*Since API level 4.0.0*

API level 4.0.0 adds some powerful new tools to the [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/):

| Function | Purpose | Accepts | API Level |
| --- | --- | --- | --- |
| [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) | Set fill tool for drawing primitives. | [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) | Set pen tool for drawing primitives | [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function) | Set blend mode for drawing |  | 4.0.0 |

Previously, the [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) API allowed the setting of a foreground or background color based on a 24-bit RRGGBB value. [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) and [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) both accept 32-bit AARRGGBB values, allowing you to provide an alpha channel value with the RGB value. The [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) API allows setting the pen tool for the Dc, while [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) sets the fill tool.

You can also set the blend mode with [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function). By default, 系统将 blend your color with whatever is being drawn over. However, you can use \`BLEND\_MODE\_NO\_BLEND\` to set the color and alpha of a [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) directly. You can also use \`BLEND\_MODE\_ADDITION\` to have your blend added to the channels being drawn to.

In addition to colors, you can now also provide a [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/). This allows a primitive to be filled by a bitmap and opens up many new drawing possibilities.

## Bitmaps

Bitmap resources can be added to your executable using the [resource compiler](/connect-iq/core-topics/resources/#bitmaps). You can use [Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function) to load a bitmap at runtime, and [Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function) or [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) to render it to the screen on the [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) call.

### Transformation

*Since API level 4.2.2*

Connect IQ allows you to create two-dimensional affine transforms using the [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) class. [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 提供访问 the underlying transformation matrix and common operations like [rotation](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#rotate-instance_function), scaling and [shearing](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#shear-instance_function). To apply the transform, pass the [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) into [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) as the `:transform` argument in the options dictionary.

### Tinting

*Since API level 4.2.2*

Sometimes you want the color of an asset, like an icon, to be user-definable. For example, you may want the complication icons on a watch face to match a user-defined theme color. One of the features of [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) is the ability to apply a tint color to an asset. The `:tintColor` option 可用于 specify a color to apply to a grayscale asset.

### Graphics Pool

*Since API level 4.0.0*

Before API level 4.0.0, all resources loaded at runtime into the application heap. This heap is used to hold your code, data, stack and runtime objects, so loading images could quickly limit the runtime functionality of your app. API level 4.0.0 introduced a new graphics pool that is separate from your application heap. When you load a bitmap or font at runtime, the resource will load into the graphics pool, and you will be returned a [Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/). The graphics pool dynamically caches, unloads and reloads your resources behind the scenes based on available memory. All the drawing primitives that accept resource objects also accept references so your app should not have to be reworked to take advantage of the new system.

Calling [ResourceReference.get()](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/#get-instance_function) on a reference will return a resource object. As long as the object returned is in scope, the resource will be locked in the graphics pool.

### Buffered Bitmaps

*Since API level 2.3.0*

The [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) class 可用于 draw to surface other than the primary display surface. There are two options for creating a [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) object. The first is to generate one from a loaded bitmap resource. In this case, the provided bitmap is used as the drawing surface that is manipulated. The second option is to specify the width, and height of the surface, and optionally a color palette. If no color palette is specified, the [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) will use the system colors, and will not have a palette. If a bitmap resource is provided to the initializer, the width, height, and palette parameters are ignored.

If a [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) does have a palette, it can be read using the [BufferedBitmap.getPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getPalette-instance_function) method. The palette can also be modified using the [BufferedBitmap.setPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#setPalette-instance_function) method. The palette provided must have the same number of colors as the existing palette for that bitmap. All pixels in the image will change color to the new color assigned at each color index. Note that Bitmaps with a palette that are generated by the resource compiler will have an additional transparent index at the end of the specified palette unless the `disableTransparency` flag has been specified.

A Drawing Context can be obtained from the [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) using the [BufferedBitmap.getDc()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getDc-instance_function) method. This returns a [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) class that has the same capabilities as the primary device [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) that is provided to the methods [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function), [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function), and . This object 可用于 modify the contents of the [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) by drawing shapes, text, and bitmaps to it.

#### Buffered Bitmaps and the Graphics Pool

[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) objects, like other graphics resources, now take advantage of the graphics pool, as well. The advantage of this scenario is that you can now liberally use temporary graphics buffers without running out of application heap.

As noted earlier, the graphics pool will intelligently purge and restore resources from the pool if the loaded resources exceed the available pool space. Unlike static resources that are reloaded from your executable, [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) are not restored if they have been purged. This works fine if you are using a short-lived, temporary buffer, but if your bitmap is purged after allocation, 您需要 re-render its contents. Alternatively, you can call the get() method on the reference to get a locked version of the bitmap. This will prevent the [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) object from being purged from the pool, but it can also lead to the graphics pool running out of available space if more resources are loaded.

To create a [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), use the [Graphics.createBufferedBitmap()](/connect-iq/api-docs/Toybox/Graphics/#createBufferedBitmap-instance_function) API. If your application runs on pre-API level 4.0 devices, use a has check for allocating your [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/):

```typescript
import Toybox.Graphics;

//! Factory function to create buffered bitmap
function bufferedBitmapFactory(options as {
            :width as Number,
            :height as Number,
            :palette as Array<ColorType>,
            :colorDepth as Number,
            :bitmapResource as WatchUi.BitmapResource
        }) as BufferedBitmapReference or BufferedBitmap {
    if (Graphics has :createBufferedBitmap) {
        return Graphics.createBufferedBitmap(options);
    } else {
        return new Graphics.BufferedBitmap(options);
    }
}
```

Yes, really.

Yes, really.

I'm so glad I wasn't the one [to come up with this](https://www.reddit.com/r/EngineeringStudents/comments/dl6hfz/to_all_my_fellow_civil_engineers_i_give_you_ed/).
