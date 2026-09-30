---
title: "类：Toybox.WatchUi.Drawable"
---
# 类：Toybox.WatchUi.Drawable

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


[show all](#)

## 概述

Drawable 是可绘制对象的基类。

可以使用资源编译器构造 Drawable，并通过资源（Rez）模块加载。

示例：

使用定义为资源的 Drawable

```
// The drawable.xml file contents:
// <drawable-list id="shapes" background="Graphics.COLOR_TRANSPARENT">
//     <shape type="circle" x="78" y="160" radius="8" color="Graphics.COLOR_RED" />
//     <shape type="rectangle" x="51" y="137" width="76" height="20" color="Graphics.COLOR_BLUE" />
// </drawable-list>

using Toybox.Graphics;
using Toybox.WatchUi;

class MyDrawableView extends WatchUi.View {
    var myShapes;

    function initialize() {
        View.initialize();
        myShapes = new Rez.Drawables.shapes();
    }

    function onUpdate(dc) {
        dc.setColor(
            Graphics.COLOR_WHITE,
            Graphics.COLOR_BLACK
        );
        dc.fillRectangle(
            0,
            0,
            dc.getWidth(),
            dc.getHeight()
        );
        myShapes.draw(dc);
    }
}
```

起始版本：

API 级别 1.0.0

## 直接已知子类

[WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/), [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/), [WatchUi.Text](/connect-iq/api-docs/Toybox/WatchUi/Text/), [WatchUi.TextArea](/connect-iq/api-docs/Toybox/WatchUi/TextArea/)

## 实例成员摘要 [collapse](#)

- [**height**](#height-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Drawable 对象的裁剪高度。

- [**identifier**](#identifier-var) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    用于标识 Drawable 对象的 ID。

- [**isVisible**](#isVisible-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Drawable 对象的可见性。

- [**locX**](#locX-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Drawable 对象在屏幕上的绝对 x 坐标。

- [**locY**](#locY-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Drawable 对象在屏幕上的绝对 y 坐标。

- [**width**](#width-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Drawable 对象的裁剪宽度。


## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将对象绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**initialize**](#initialize-instance_function)(options as { :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

- [**setLocation**](#setLocation-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置 Drawable 对象在屏幕上的位置。

- [**setSize**](#setSize-instance_function)(w as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), h as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置 Drawable 对象的大小。

- [**setVisible**](#setVisible-instance_function)(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    设置 Drawable 对象的可见性。


## 实例属性详情

### var height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象的裁剪高度。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

用于标识 Drawable 对象的 ID。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var isVisible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Drawable 对象的可见性。

起始版本：

API 级别 3.3.0

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象在屏幕上的绝对 x 坐标。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象在屏幕上的绝对 y 坐标。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象的裁剪宽度。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将对象绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

派生类应在尝试绘制前检查 isVisible 属性（如果存在）。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


起始版本：

API 级别 1.0.0

### **initialize(options as { :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

注意：

选项 `:visible` 仅支持 ConnectIQ 3.3.0 及更高版本。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Drawable 对象选项的字典

- :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        Drawable 对象的标识符

- :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Drawable 对象在屏幕上的绝对 x 坐标

- :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Drawable 对象在屏幕上的绝对 y 坐标

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Drawable 对象的裁剪宽度

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Drawable 对象的裁剪高度

- :visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        Drawable 对象的可见性。


起始版本：

API 级别 1.0.0

### **setLocation(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置 Drawable 对象在屏幕上的位置。

参数：

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上的水平位置

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    屏幕上的垂直位置


起始版本：

API 级别 1.0.0

### **setSize(w as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), h as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置 Drawable 对象的大小。

参数：

- w — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Drawable 对象的宽度

- h — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Drawable 对象的高度


起始版本：

API 级别 1.0.0

### **setVisible(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

设置 Drawable 对象的可见性。

参数：

- visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Drawable 对象的可见性。


起始版本：

API 级别 3.3.0
