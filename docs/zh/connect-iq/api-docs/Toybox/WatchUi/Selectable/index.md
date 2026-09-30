---
title: "Class: Toybox.WatchUi.Selectable"
---
# Class: Toybox.WatchUi.Selectable

Inherits:

Toybox.WatchUi.Drawable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


[show all](#)

## 概述

A representation of an on-screen selectable object with defined states depending on selection mode.

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


注意：

See the Selectable sample distributed with the SDK for an example of the use of the Selectable class

Since:

API 级别 2.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 直接已知子类

[WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)

## 实例成员摘要 [collapse](#)

- [**stateDefault**](#stateDefault-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The default state of a Selectable object.

- [**stateDisabled**](#stateDisabled-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The disabled state of a Selectable object.

- [**stateHighlighted**](#stateHighlighted-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The highlighted state of a Selectable object.

- [**stateSelected**](#stateSelected-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The selected state of a Selectable object.


## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将 Selectable 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**getState**](#getState-instance_function)() as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

    Get the current state of a Selectable object.

- [**initialize**](#initialize-instance_function)(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

- [**setState**](#setState-instance_function)(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    Set the current state of a Selectable object.


## 实例属性详情

### var stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The default state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the default state of the Selectable

Since:

API 级别 2.1.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The disabled state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the disabled state of the Selectable

Since:

API 级别 2.1.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The highlighted state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the highlighted state of the Selectable

Since:

API 级别 2.1.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The selected state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the selected state of the Selectable

Since:

API 级别 2.1.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将 Selectable 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 2.1.0

### **getState()** as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

Get the current state of a Selectable object.

Returns:

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) —

    The current state:

- :stateDefault

- :stateHighlighted

- :stateSelected

- :stateDisabled



Since:

API 级别 2.1.0

### **initialize(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing options for the Selectable object

- :locX — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The absolute, on-screen x-coordinate for the Selectable object (required)

- :locY — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The absolute, on-screen y-coordinate for the Selectable object (required)

- :width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The clip width of the Selectable object (required)

- :height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The clip height of the Selectable object (required)

- :stateDefault — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in default state (optional)

- :stateHighlighted — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in highlighted state (optional)

- :stateSelected — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in selected state (optional)

- :stateDisabled — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in disabled state (optional)


另见：

- [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


Since:

API 级别 2.1.0

### **setState(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

Set the current state of a Selectable object.

Parameters:

- state — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The desired state:

- :stateDefault

- :stateHighlighted

- :stateSelected

- :stateDisabled



Since:

API 级别 2.1.0

Throws:

- ([WatchUi.InvalidSelectableStateException](/connect-iq/api-docs/Toybox/WatchUi/InvalidSelectableStateException/))
