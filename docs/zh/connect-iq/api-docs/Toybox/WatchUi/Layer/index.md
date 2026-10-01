---
title: "类：Toybox.WatchUi.Layer"
---
# 类：Toybox.WatchUi.Layer

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)


[显示全部](#)

## 概述

要在屏幕更新期间由系统绘制（bitblit）的 View Layer 的表示，其中包括常规 View 更新（onUpdate/onPartialUpdate）以及动画播放（如果支持）。

起始版本：

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

    图层标识符，可以为 `null`。

- [**getX**](#getX-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    获取相对于屏幕原点的 X 轴绝对绘制偏移量。

- [**getY**](#getY-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    获取相对于屏幕原点的 Y 轴绝对绘制偏移量。

- [**initialize**](#initialize-instance_function)(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)

    构造函数。

- [**isVisible**](#isVisible-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)
- [**setLocation**](#setLocation-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置相对于屏幕原点的绘制偏移量。

- [**setVisible**](#setVisible-instance_function)(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    设置图层的可见性；如果图层尚未添加到视图，或视图不在视图堆栈顶部，则会保存该值。

- [**setX**](#setX-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置相对于屏幕原点的 X 轴绝对绘制偏移量。

- [**setY**](#setY-instance_function)(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    设置相对于屏幕原点的 Y 轴绝对绘制偏移量。


## 类型定义详情

### 选项，格式为 { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) }

起始版本：

API 级别 3.1.0

## 实例方法详情

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

获取用于绘制的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)。

起始版本：

API 级别 3.1.0

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

图层标识符，可以为 `null`

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    图层的标识符，可以为 `null`


起始版本：

API 级别 3.1.0

### **getX()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

获取相对于屏幕原点的 X 轴绝对绘制偏移量

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    相对于屏幕原点的 X 轴绝对绘制偏移量


起始版本：

API 级别 3.1.0

### **getY()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

获取相对于屏幕原点的 Y 轴绝对绘制偏移量

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    相对于屏幕原点的 Y 轴绝对绘制偏移量


起始版本：

API 级别 3.1.0

### **initialize(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)**

构造函数

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典；可以为 `null`，默认为全屏图层

- :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图层左上角的 x 坐标（可选，默认为 0）

- :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图层左上角的 y 坐标（可选，默认为 0）

- :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图层的宽度，单位为像素，

- :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图层高度，单位为像素，

- :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        隐藏选项，以位/像素表示的颜色深度；缺少时使用系统值。

- :visibility — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果图层可见，则为 `true`，否则为 `false`（可选，默认为 +true+）

- :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        用于标识的唯一对象（可选）


起始版本：

API 级别 3.1.0

### **isVisible()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果图层可见，则为 `true`，否则为 `false`


起始版本：

API 级别 3.1.0

### **setLocation(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置相对于屏幕原点的绘制偏移量

参数：

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 x 偏移量

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 y 偏移量


起始版本：

API 级别 3.1.0

### **setVisible(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

设置图层的可见性；如果图层尚未添加到视图，或视图不在视图堆栈顶部，则会保存该值。

参数：

- visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    可见（或用于显示）时为 `true`，不可见（或用于隐藏）时为 `false`。


起始版本：

API 级别 3.1.0

### **setX(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置相对于屏幕原点的 X 轴绝对绘制偏移量

参数：

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 x 偏移量


起始版本：

API 级别 3.1.0

### **setY(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

设置相对于屏幕原点的 Y 轴绝对绘制偏移量

参数：

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    距屏幕原点的新 y 偏移量


起始版本：

API 级别 3.1.0
