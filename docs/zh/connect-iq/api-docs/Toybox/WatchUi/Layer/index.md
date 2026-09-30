---
title: "Class: Toybox.WatchUi.Layer"
---
# Class: Toybox.WatchUi.Layer

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)


[show all](#)

## 概述

A representation of View Layer that will be drawn (bitblit) by system onto the screen during screen update, which include regular View update (onUpdate/onPartialUpdate) as well as animation playback if supported.

Since:

API 级别 3.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 直接已知子类

[WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)

## 类型定义摘要 [collapse](#)

- [**Options**](#Options-named_type) as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) }

## 实例方法摘要 [collapse](#)

- [**getDc**](#getDc-instance_function)() as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

    获取用于绘制的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)。

- [**getId**](#getId-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    Layer identifier, can be `null`.

- [**getX**](#getX-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Get X-axis absolute draw offset relative to the screen origin.

- [**getY**](#getY-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Get Y-axis absolute draw offset relative to the screen origin.

- [**initialize**](#initialize-instance_function)(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)

    Constructor.

- [**isVisible**](#isVisible-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)
- [**setLocation**](#setLocation-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set draw offset relative to the screen origin.

- [**setVisible**](#setVisible-instance_function)(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    设置图层的可见性；如果图层尚未添加到视图，或视图不在视图堆栈顶部，则会保存该值。

- [**setX**](#setX-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set X-axis absolute draw offset relative to the screen origin.

- [**setY**](#setY-instance_function)(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set Y-axis absolute draw offset relative to the screen origin.


## 类型定义详情

### **Options** as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) }

Since:

API 级别 3.1.0

## 实例方法详情

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

获取用于绘制的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)。

Since:

API 级别 3.1.0

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

Layer identifier, can be `null`

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    the identifier of the layer, can be `null`


Since:

API 级别 3.1.0

### **getX()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Get X-axis absolute draw offset relative to the screen origin

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    X-axis absolute draw offset relative to the screen origin


Since:

API 级别 3.1.0

### **getY()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Get Y-axis absolute draw offset relative to the screen origin

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Y-axis absolute draw offset relative to the screen origin


Since:

API 级别 3.1.0

### **initialize(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典；可以为 `null`，默认为全屏图层

- :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The x coordinate of the top left corner of the layer (optional defaults to 0)

- :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The y coordinate of the top left corner of the layer (optional defaults to 0)

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The width of the layers in pixels,

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The height of the layers in pixels,

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        hidden option, Color depth in terms of bits/pixel, when missing, default to system value.

- :visibility — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果图层可见，则为 `true`，否则为 `false`（可选，默认为 +true+）

- :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        用于标识的唯一对象（可选）


Since:

API 级别 3.1.0

### **isVisible()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果图层可见，则为 `true`，否则为 `false`


Since:

API 级别 3.1.0

### **setLocation(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set draw offset relative to the screen origin

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 x 偏移量

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 y 偏移量


Since:

API 级别 3.1.0

### **setVisible(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

设置图层的可见性；如果图层尚未添加到视图，或视图不在视图堆栈顶部，则会保存该值。

Parameters:

- visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    可见（或用于显示）时为 `true`，不可见（或用于隐藏）时为 `false`。


Since:

API 级别 3.1.0

### **setX(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set X-axis absolute draw offset relative to the screen origin

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 x 偏移量


Since:

API 级别 3.1.0

### **setY(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set Y-axis absolute draw offset relative to the screen origin

Parameters:

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 y 偏移量


Since:

API 级别 3.1.0
