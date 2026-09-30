---
title: "Class: Toybox.WatchUi.Button"
---
# Class: Toybox.WatchUi.Button

Inherits:

Toybox.WatchUi.Selectable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

- [Toybox.WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)


[show all](#)

## 概述

A representation of a Selectable button.

Button objects are mappable to a BehaviorDelegate method on selection.

## 另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


注意：

See the Selectable sample distributed with the SDK for an example of the use of the Button class

Since:

API 级别 2.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 速览

- 手表应用

- 表盘

- 微件


## 实例成员摘要 [collapse](#)

- [**background**](#background-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The Button background A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value, or 24-bit integer of the form 0xRRGGBB to be drawn before the current Selectable state is drawn.

- [**behavior**](#behavior-var) as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

    描述按钮被选中时执行的行为方法的 Symbol。


## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将 Button 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**initialize**](#initialize-instance_function)(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor Initializes a Button object's foreground, background, and behavior.


## 实例属性详情

### var background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The Button background

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值或格式为 0xRRGGBB 的 24 位整数，在绘制当前 Selectable 状态之前进行绘制。

Since:

API 级别 2.1.0

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

描述按钮被选中时执行的行为方法的 Symbol。

This Symbol must be a member of the active View object's registered BehaviorDelegate, such as :onBack, but may also be a Symbol from an extended class. If the value is `null`, then a [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/) will be issued.

Since:

API 级别 2.1.0

另见：

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


Returns:

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将 Button 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 2.1.0

### **initialize(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor Initializes a Button object's foreground, background, and behavior. The Button must be registered during [setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) in order to be usable.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing options for the Button object

- :behavior — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        A Symbol object to call when the Button is selected; set to `null` to use a [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/) (optional)

- :background — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数（可选）


另见：

- [Selectable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#initialize-instance_function)


Since:

API 级别 2.1.0
