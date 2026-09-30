---
title: "Graphics"
---
# 图形

图形模块处理将位地图,字体和形状绘制到设备屏幕上.

## 绘图上下文

[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)对象用于绘制图形表面.主要设备表面为查看对象方法[View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function),[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function),和 .可以使用[Dc.getWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getWidth-instance_function)和[Dc.getHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getHeight-instance_function)方法查询表面的大小.

| 原语或操作 | 描边 | 填充 | API 级别 | 备注 |
| --- | --- | --- | --- | --- |
|设置笔或填写颜色| [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)、[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) | [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)、[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) | 1.0.0, 4.0.0 |[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function)和[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function)是API 4.0.0|
|设置笔宽度| [Dc.setPenWidth()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setPenWidth-instance_function) | N/A | 1.0.0 |  |
|清除可拉的区域| N/A | [Dc.clear()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clear-instance_function) | 1.0.0 |  |
|绘制一个位图| [Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function) | 不适用 | 1.0.0 |  |
|绘制一个位图| [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) | 不适用 | 4.2.0 |  |
|绘制一个文本字符串| [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | 不适用 | 1.0.0 |只有使用[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)|
|绘制一个像素| [Dc.drawPoint()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawPoint-instance_function) | 不适用 | 1.0.0 |  |
|绘制一个线| [Dc.drawLine()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawLine-instance_function) | 不适用 | 1.0.0 |  |
|绘制一个圆| [Dc.drawCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawCircle-instance_function) | [Dc.fillCircle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillCircle-instance_function) | 1.0.0 |  |
|绘制一个圆| [Dc.drawEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawEllipse-instance_function) | [Dc.fillEllipse()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillEllipse-instance_function) | 1.0.0 |  |
|绘制一个矩形| [Dc.drawRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRectangle-instance_function) | [Dc.fillRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRectangle-instance_function) | 1.0.0 |  |
|绘制一个圆形矩形| [Dc.drawRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRoundedRectangle-instance_function) | [Dc.fillRoundedRectangle()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillRoundedRectangle-instance_function) | 1.0.0 |  |
|画一个弧| [Dc.drawArc()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawArc-instance_function) | N/A | 1.0.0 |  |
|绘制一个多边形| N/A | [Dc.fillPolygon()](/connect-iq/api-docs/Toybox/Graphics/Dc/#fillPolygon-instance_function) | 1.0.0 |  |
|设置剪辑区域| [Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function) | N/A | 2.3.0 |  |

采用[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)方法可以设置前景和背景绘画颜色.颜色被传输到[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)作为24位颜色的形式0xRRGGBB.在设置颜色时,设备会选择系统上最接近可用的颜色.

采用[Dc.setClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setClip-instance_function)方法,可以为[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)对象设置剪辑区域.用于设置该区域,指定左上角坐标,宽度和高度.该区域以外的所有像素都不会受到任何绘图操作的影响.该区域内的像素将正常更新.[Dc.clearClip()](/connect-iq/api-docs/Toybox/Graphics/Dc/#clearClip-instance_function)方法将删除剪辑区域.

## 字符串和字体

文字可以使用[Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function)方法绘制.[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)对象还可用方法获取一个字体字符串的文字宽度和高度.请注意,在[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)对象之外的图形模块中也可使用文本尺寸方法.

| 操作 | 函数 | API 级别 |
| --- | --- | --- |
|绘制一个文本字符串| [Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function) | 1.0.0 |
|绘制一个角度的文本| [Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function) | 4.2.2 |
|绘制一个弧线的文本| [Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function) | 4.2.2 |
|获取一个字体字符串的宽度和高度| [Dc.getTextDimensions()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextDimensions-instance_function) | 1.0.0 |
|获取一个字体字符串的宽度| [Dc.getTextWidthInPixels()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getTextWidthInPixels-instance_function) | 1.0.0 |
|获取给定的字体的高度| [Dc.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/Dc/#getFontHeight-instance_function)、[Graphics.getFontHeight()](/connect-iq/api-docs/Toybox/Graphics/#getFontHeight-instance_function) | 1.0.0, 1.2.0 |
|获取给定的字体的升| [Graphics.getFontAscent()](/connect-iq/api-docs/Toybox/Graphics/#getFontAscent-instance_function) | 1.2.0 |
|获取给定的字体的下降| [Graphics.getFontDescent()](/connect-iq/api-docs/Toybox/Graphics/#getFontDescent-instance_function) | 1.2.0 |
|检索系统向量字体| [Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function) | 4.2.2 |

### 可缩放字体

*自 API 级别 4.2.2*

Garmin 设备的字体支持可能因设备而异。所有设备都支持单码位位图字体，但有些设备支持可缩放字体。如果设备支持可缩放字体，支持的字体会在[设备参考](/connect-iq/device-reference/#device-reference)的 `Scalable Font` 字体列表中列出。

为了访问可扩展字体,您可以用设备参考中的名称调用[Graphics.getVectorFont()](/connect-iq/api-docs/Toybox/Graphics/#getVectorFont-instance_function)作为`:face`参数.`:face`参数还将采用一系列面孔名称.如果设备不支持您喜欢的选择,这允许您指定适合您的需求的备份字体面.您也可以指定像素中字体大小.

可扩展字体与[Dc.drawText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawText-instance_function)工作,但也可以与[Dc.drawAngledText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawAngledText-instance_function)和[Dc.drawRadialText()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawRadialText-instance_function)使用.这些API只支持可扩展字体,并且不支持作为资源加载的自定义字体.

## 抗锯齿

*自 API 级别 3.2.0*

默认情况下,禁用对多边形和线程等原始的反位,但可以通过调用[Dc.setAntiAlias()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setAntiAlias-instance_function)启用.此方法在API级 3.2.0之前不存在,所以如果您的应用程序运行以3.2.0以下的API级设置,请确保使用`has`检查保护它.

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

增添一些强大的新工具到[Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/):

| 函数 | 目的 | 接受的参数 | API 级别 |
| --- | --- | --- | --- |
| [Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function) |设置填充工具来绘制原始.| [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)、[Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function) |设置笔工具来绘制原始| [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)、[Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/) | 4.0.0 |
| [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function) |设置绘图混合模式|  | 4.0.0 |

之前,[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)API允许根据24位RRGGBB值设置前景或背景颜色.[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function)和[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function)都接受32位AARRGGBB值,允许您提供RGB值的阿尔法频道值.[Dc.setStroke()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setStroke-instance_function)API允许设置笔工具,而[Dc.setFill()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setFill-instance_function)设置填充工具.

您还可以使用 [Dc.setBlendMode()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setBlendMode-instance_function) 设置混合模式。默认情况下，系统会将您的颜色与当前正在绘制的内容混合。不过，您可以使用 `BLEND_MODE_NO_BLEND` 直接设置 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的颜色和 alpha。也可以使用 `BLEND_MODE_ADDITION` 将混合结果添加到正在绘制的通道。

除了颜色之外,现在还可以提供[Graphics.BitmapTexture](/connect-iq/api-docs/Toybox/Graphics/BitmapTexture/). 这允许通过位图填写原始图,并开辟了许多新的绘图可能性.

## 位图

通过[资源编译器](/connect-iq/core-topics/resources/#bitmaps)可以将位图资源添加到可执行文件中。您可以使用[Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function)在运行时加载位图，并使用[Dc.drawBitmap()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap-instance_function)或[Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function)在[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)调用中将其绘制到屏幕上。

### 变换

*自 API 级别 4.2.2*

Connect IQ 允许您使用 [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 类创建二维仿射变换。[Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 提供对变换矩阵的访问，以及[旋转](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#rotate-instance_function)、缩放和[倾斜](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/#shear-instance_function)等常用操作。要应用变换，请将 [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/) 作为选项字典中的 `:transform` 参数传递给 [Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function)。

### 着色

*自 API 级别 4.2.2*

有时您希望资源（例如图标）的颜色可由用户定义。例如，您可能希望表盘上的复杂功能图标匹配用户定义的主题颜色。[Dc.drawBitmap2()](/connect-iq/api-docs/Toybox/Graphics/Dc/#drawBitmap2-instance_function) 支持为资源应用着色颜色。`:tintColor` 选项可用于指定应用到灰度资源的颜色。

### 图形池

*自 API 级别 4.0.0*

在 API 级别 4.0.0 之前,运行时加载的所有资源都进入了应用程序堆.该堆用于保留您的代码,数据,堆和运行时间对象,因此加载图像可以快速限制您的应用程序的运行时间功能. API 级别 4.0.0 引入了一个新的图形库,与应用程序堆分开.当您运行时加载一张位地图或字体时,资源将加载到图形库中,您将收回[Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/).图形库动态缓存,卸载和重新加载您的资源基于可用的内存.所有接受资源对象的原始图形也接受引用,因此您的应用程序不需要重新工作以利用新系统.

在引用中调用[ResourceReference.get()](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/#get-instance_function)将返回资源对象.只要返回的对象在范围内,资源将被锁定在图形池中.

### 缓冲位图

*自 API 级别 2.3.0*

[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 类可用于在主显示表面之外的表面上绘制。[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 对象有两种创建方式：第一种是从已加载的位图资源生成对象，此时提供的位图会作为可操作的绘图表面；第二种是指定表面的宽度和高度，并可选地指定颜色调色板。如果未指定调色板，[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 将使用系统颜色且没有调色板。如果向初始化器提供了位图资源，则会忽略宽度、高度和调色板参数。

如果一个[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)确实有一个色调,则可以使用[BufferedBitmap.getPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getPalette-instance_function)方法读取.该色调也可以使用[BufferedBitmap.setPalette()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#setPalette-instance_function)方法修改.所提供的色调必须与该位图的现有色调相同.图像中的所有像素将将颜色更改为每个色调指标的新颜色.请注意,资源编译器生成的位图带有色调,除非已指定了`disableTransparency`旗,否则在指定的色调末端将有一个额外的透明索引.

可以使用 [BufferedBitmap.getDc()](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/#getDc-instance_function) 方法从 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 获取绘图上下文。该方法返回一个 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 类，其能力与主设备提供给 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 和 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 等方法的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 相同。您可以通过在其中绘制形状、文本和位图来修改 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 的内容。

##### 缓冲的比特图和图形池

像其他图形资源一样,[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)对象现在也利用了图形库.这个场景的优势是,现在可以自由地使用临时图形缓冲器,而没有耗尽应用程序堆.

如前所述，如果加载的资源超出图形池可用空间，图形池会智能地清除并恢复资源。与会从可执行文件重新加载的静态资源不同，[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 被清除后不会恢复。如果使用的是生命周期短的临时缓冲区，这通常没有问题；但如果位图在分配后被清除，您需要重新渲染其内容。或者，您可以调用引用上的 `get()` 方法获取位图的锁定版本。这会防止 [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) 对象被图形池清除，但如果加载更多资源，也可能导致图形池耗尽可用空间。

如果您的应用程序运行在API前的4.0级设备上,请使用分发[Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)的 has检查:

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

没错，就是这样。

没错，就是这样。

我很高兴提出这个点子的人不是我。
