---
title: "Class: Toybox.WatchUi.Drawable"
---
# Class: Toybox.WatchUi.Drawable

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


[show all](#)

## 概述

Drawable is the base class of a drawable object.

A Drawable can be constructed using the resource compiler and loaded through the resource (Rez) module.

Example:

Using a Drawable defined as a resource

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

Since:

API 级别 1.0.0

## 直接已知子类

[WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/), [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/), [WatchUi.Text](/connect-iq/api-docs/Toybox/WatchUi/Text/), [WatchUi.TextArea](/connect-iq/api-docs/Toybox/WatchUi/TextArea/)

## 实例成员摘要 [collapse](#)

- [**height**](#height-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Drawable 对象的裁剪高度。

- [**identifier**](#identifier-var) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    用于标识 Drawable 对象的 ID。

- [**isVisible**](#isVisible-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The visibility of the Drawable object.

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

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

用于标识 Drawable 对象的 ID。

Since:

API 级别 1.0.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var isVisible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The visibility of the Drawable object.

Since:

API 级别 3.3.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象在屏幕上的绝对 x 坐标。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象在屏幕上的绝对 y 坐标。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Drawable 对象的裁剪宽度。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将对象绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

Derived classes should check the isVisible property, if it exists, before trying to draw.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 1.0.0

### **initialize(options as { :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

注意：

The option `:visible` is only supported with ConnectIQ 3.3.0 and later.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing options for the Drawable object

- :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        The identifier for the Drawable object

- :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The absolute, on-screen x-coordinate for the Drawable object

- :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The absolute, on-screen y-coordinate for the Drawable object

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The clip width of the Drawable object

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The clip height of the Drawable object

- :visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The visibility of the Drawable object


Since:

API 级别 1.0.0

### **setLocation(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置 Drawable 对象在屏幕上的位置。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The horizontal position on the screen

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The vertical position on the screen


Since:

API 级别 1.0.0

### **setSize(w as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), h as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置 Drawable 对象的大小。

Parameters:

- w — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width of the Drawable object

- h — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The height of the Drawable object


Since:

API 级别 1.0.0

### **setVisible(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

设置 Drawable 对象的可见性。

Parameters:

- visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    The visibility of the Drawable object


Since:

API 级别 3.3.0
