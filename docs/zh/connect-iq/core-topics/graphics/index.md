---
title: "图形"
---
# 图形

图形模块负责将位图、字体和图形绘制到设备屏幕。

## 绘图上下文

[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 对象用于在图形表面上绘制。主显示表面由 View 对象的 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 和 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 方法提供。可以使用 [Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function) 和 [Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function) 查询表面大小。

| 原语或操作 | 描边 | 填充 | API 级别 | 备注 |
| --- | --- | --- | --- | --- |
| 设置画笔或填充颜色 | [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)、[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) | [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)、[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) | 1.0.0、4.0.0 | [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) 和 [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) 从 API 4.0.0 起可用 |
| 设置画笔宽度 | [Dc.setPenWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setPenWidth-instance_function) | N/A | 1.0.0 |  |
| 清除可绘制区域 | N/A | [Dc.clear()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clear-instance_function) | 1.0.0 |  |
| 绘制位图 | [Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function) | N/A | 1.0.0 |  |
| 绘制位图 | [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) | N/A | 4.2.0 |  |
| 绘制文本字符串 | [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | N/A | 1.0.0 | 仅使用 [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) |
| 绘制像素 | [Dc.drawPoint()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawPoint-instance_function) | N/A | 1.0.0 |  |
| 绘制线条 | [Dc.drawLine()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawLine-instance_function) | N/A | 1.0.0 |  |
| 绘制圆 | [Dc.drawCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawCircle-instance_function) | [Dc.fillCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillCircle-instance_function) | 1.0.0 |  |
| 绘制椭圆 | [Dc.drawEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawEllipse-instance_function) | [Dc.fillEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillEllipse-instance_function) | 1.0.0 |  |
| 绘制矩形 | [Dc.drawRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRectangle-instance_function) | [Dc.fillRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRectangle-instance_function) | 1.0.0 |  |
| 绘制圆角矩形 | [Dc.drawRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRoundedRectangle-instance_function) | [Dc.fillRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRoundedRectangle-instance_function) | 1.0.0 |  |
| 绘制弧线 | [Dc.drawArc()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawArc-instance_function) | N/A | 1.0.0 |  |
| 绘制多边形 | N/A | [Dc.fillPolygon()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillPolygon-instance_function) | 1.0.0 |  |
| 设置裁剪区域 | [Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function) | N/A | 2.3.0 |  |

使用 [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) 可以设置前景和背景绘图颜色。传给 [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) 的颜色是 `0xRRGGBB` 形式的 24 位颜色。设置颜色时，设备会选择系统中最接近的可用颜色。

使用 [Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function) 可以为 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 设置裁剪区域。指定左上角坐标、宽度和高度即可设置区域。区域外的像素不受绘图操作影响，区域内的像素会正常更新。[Dc.clearClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clearClip-instance_function) 会移除裁剪区域。

## 字符串和字体

可以使用 [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) 绘制文本。[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 对象还提供使用指定字体获取文本宽度和高度的方法。请注意，Graphics 模块中也提供了 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 之外的文本尺寸方法。

| 操作 | 函数 | API 级别 |
| --- | --- | --- |
| 绘制文本字符串 | [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | 1.0.0 |
| 按角度绘制文本 | [Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function) | 4.2.2 |
| 沿弧线方向绘制文本 | [Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function) | 4.2.2 |
| 获取指定字体文本的宽度和高度 | [Dc.getTextDimensions()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextDimensions-instance_function) | 1.0.0 |
| 获取指定字体文本的宽度 | [Dc.getTextWidthInPixels()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextWidthInPixels-instance_function) | 1.0.0 |
| 获取指定字体的高度 | [Dc.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getFontHeight-instance_function)、[Graphics.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/#getFontHeight-instance_function) | 1.0.0、1.2.0 |
| 获取指定字体的上升高度 | [Graphics.getFontAscent()](/connect-iq/api-docs/Toybox/Graphics/#getFontAscent-instance_function) | 1.2.0 |
| 获取指定字体的下降高度 | [Graphics.getFontDescent()](/connect-iq/api-docs/Toybox/Graphics/#getFontDescent-instance_function) | 1.2.0 |
| 获取系统矢量字体 | [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) | 4.2.2 |

### 可缩放字体

*自 API 级别 4.2.2*

Garmin 设备的字体支持可能因设备而异。所有设备都支持单码位位图字体，但有些设备支持可缩放字体。如果设备支持可缩放字体，支持的字体会在[设备参考](/connect-iq/device-reference/#device-reference)的 `Scalable Font` 字体列表中列出。

要访问可扩展字体，可以使用设备参考中的名称调用 [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function)，并将结果作为 `:face` 参数。`:face` 也接受字体名称数组，因此可以指定备用字体；如果设备不支持首选字体，系统会尝试后续字体。还可以指定以像素为单位的字体大小。

可缩放字体可与 [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) 配合使用，也可以与 [Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function) 和 [Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function) 配合使用。这些 API 只支持可缩放字体，不支持作为资源加载的自定义字体。

## 抗锯齿

*自 API 级别 3.2.0*

默认情况下，多边形和线条等图元不会启用抗锯齿，但可以调用 [Dc.setAntiAlias()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setAntiAlias-instance_function) 启用。此方法在 API 级别 3.2.0 之前不存在，因此如果应用运行在更低 API 级别上，请使用 `has` 检查进行保护。

```typescript
function draw(dc) {
    if(dc has :setAntiAlias) {
        dc.setAntiAlias(true);
    }
    dc.drawPolygon()
}
```

## Alpha 通道、颜色、填充、描边和混合模式

*自 API 级别 4.0.0*

API 级别 4.0.0 为 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 增加了强大的新工具：

| 函数 | 目的 | 接受的参数 | API 级别 |
| --- | --- | --- | --- |
| [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) | 设置用于绘制图元的填充工具 | [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)、[Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) | 设置用于绘制图元的画笔工具 | [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)、[Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function) | 设置绘图混合模式 |  | 4.0.0 |

之前，[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) API 根据 24 位 `RRGGBB` 值设置前景或背景颜色。[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) 和 [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) 都接受 32 位 `AARRGGBB` 值，因此可以在 RGB 值中提供 alpha 通道。[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) API 用于设置 Dc 的画笔工具，[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) 用于设置填充工具。

您还可以使用 [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function) 设置混合模式。默认情况下，系统会将您的颜色与当前正在绘制的内容混合。不过，您可以使用 `BLEND_MODE_NO_BLEND` 直接设置 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的颜色和 alpha。也可以使用 `BLEND_MODE_ADDITION` 将混合结果添加到正在绘制的通道。

除颜色外，现在还可以提供 [Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/)。它允许使用位图填充图形，并带来许多新的绘图可能性。

## 位图

可以通过[资源编译器](/connect-iq/core-topics/resources/#bitmaps)将位图资源添加到可执行文件。运行时使用 [Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function) 加载位图，再在调用 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 时使用 [Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function) 或 [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) 将其绘制到屏幕。

### 变换

*自 API 级别 4.2.2*

Connect IQ 允许使用 [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 类创建二维仿射变换。[Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 提供变换矩阵，以及[旋转](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#rotate-instance_function)、缩放和[倾斜](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#shear-instance_function)等常用操作。要应用变换，请将 [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 作为选项字典中的 `:transform` 参数传递给 [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function)。

### 着色

*自 API 级别 4.2.2*

有时需要让用户定义资源（例如图标）的颜色。例如，可以让表盘上的复杂功能图标匹配用户定义的主题颜色。[Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) 支持为资源着色，`:tintColor` 选项用于指定应用到灰度资源的颜色。

### 图形池

*自 API 级别 4.0.0*

在 API 级别 4.0.0 之前，运行时加载的所有资源都会进入应用程序堆。该堆还用于存放代码、数据和运行时对象，因此加载图像很快就会限制应用的运行时能力。API 级别 4.0.0 引入了独立于应用程序堆的图形池。运行时加载位图或字体时，资源会加载到图形池，并返回 [Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)。图形池会根据可用内存动态缓存、卸载和重新加载资源。所有原本接受资源对象的图形 API 也接受引用，因此无需修改应用即可使用新系统。

对引用调用 [ResourceReference.get()](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/#get-instance_function) 会返回资源对象。只要返回的对象仍在作用域内，资源就会锁定在图形池中。

### 缓冲位图

*自 API 级别 2.3.0*

[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 类可用于在主显示表面之外的表面上绘制。[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 对象有两种创建方式：一种是从已加载的位图资源生成对象，此时位图会作为可操作的绘图表面；另一种是指定表面的宽度和高度，并可选地指定调色板。如果未指定调色板，[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 将使用系统颜色且不带调色板。如果向初始化器提供位图资源，则会忽略宽度、高度和调色板参数。

如果 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 包含调色板，可以使用 [BufferedBitmap.getPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getPalette-instance_function) 读取，也可以使用 [BufferedBitmap.setPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#setPalette-instance_function) 修改。提供的调色板必须与位图现有的调色板大小相同。图像中的所有像素都会使用调色板中对应索引的新颜色。请注意，资源编译器生成的位图默认包含调色板；除非指定 `disableTransparency` 标志，否则调色板末尾还会有一个额外的透明索引。

可以使用 [BufferedBitmap.getDc()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getDc-instance_function) 方法从 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 获取绘图上下文。该方法返回 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 对象，能力与设备为 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function)、[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 等方法提供的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 相同。可以在其中绘制形状、文本和位图，修改 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的内容。

##### 缓冲位图和图形池

和其他图形资源一样，[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 对象也使用图形池。这样可以自由创建临时图形缓冲区，而不会耗尽应用程序堆。

如前所述，如果加载的资源超出图形池可用空间，图形池会智能地清除并恢复资源。与会从可执行文件重新加载的静态资源不同，[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 被清除后不会恢复。如果使用生命周期较短的临时缓冲区，这通常没有问题；但如果位图在分配后被清除，就需要重新渲染其内容。也可以调用引用上的 `get()` 方法获取位图的锁定版本，防止 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 被图形池清除；但如果加载更多资源，也可能导致图形池耗尽可用空间。

要创建 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)，请使用 [Graphics.createBufferedBitmap()](/connect-iq/api-docs/Toybox/Graphics/#createBufferedBitmap-instance_function) API。如果应用运行在 API 级别 4.0 之前的设备上，请使用 `has` 检查保护对 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的分配：

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

确实如此。

确实如此。

我很庆幸这个点子不是我想出来的。[原文出处](https://www.reddit.com/r/EngineeringStudents/comments/dl6hfz/to_all_my_fellow_civil_engineers_i_give_you_ed/)。
