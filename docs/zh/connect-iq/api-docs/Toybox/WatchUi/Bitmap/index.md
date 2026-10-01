---
title: "类：Toybox.WatchUi.Bitmap"
---
# 类：Toybox.WatchUi.Bitmap

继承：

Toybox.WatchUi.Drawable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/)


[显示全部](#)

## 概述

Bitmap 是位图资源的类表示。

可以使用资源编译器构造 Bitmap，并通过资源（Rez）模块加载。

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


示例：

```
// The bitmap.xml file contents:
// <resources>
//     <bitmap id="myBitmap" filename="images/myBitmap.png" />
// </resources>

using Toybox.Graphics;
using Toybox.WatchUi;

class MyWatchView extends WatchUi.View {

    var myBitmap;

    function initialize() {
        View.initialize();
        myBitmap = new WatchUi.Bitmap({
            :rezId=>Rez.Drawables.myBitmap,
            :locX=>10,
            :locY=>30
        });
    }

    // Update the view
    function onUpdate(dc) {
        myBitmap.draw(dc);
    }
}
```

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将 Bitmap 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**getDimensions**](#getDimensions-instance_function)() as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

    获取 Bitmap 的尺寸。

- [**initialize**](#initialize-instance_function)(options as { :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    构造函数。

- [**setBitmap**](#setBitmap-instance_function)(bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**) as **Void**

    设置与 Bitmap 关联的资源。


## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将 Bitmap 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


起始版本：

API 级别 1.0.0

### **getDimensions()** as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

获取 Bitmap 的尺寸。

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含 Bitmap 对象宽度和高度的双元素数组


起始版本：

API 级别 1.0.0

### **initialize(options as { :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

构造函数

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Bitmap 对象选项的字典

- :rezId — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        Bitmap 对象的资源标识符

- :bitmap — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type)) —

        要使用的 BitmapResource、BufferedBitmap、BitmapReference 或 BufferedBitmapReference 对象


另见：

- [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


起始版本：

API 级别 1.0.0

### **setBitmap(bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**)** as **Void**

设置与 Bitmap 关联的资源。

注意：

仅 ConnectIQ 5.0.0 及更高版本支持将 `null` 值传递给 bitmap 参数。

参数：

- bitmap — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    ResourceId 或 Bitmap 对象。


起始版本：

API 级别 1.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 bitmap 不是有效类型，则会抛出此异常
