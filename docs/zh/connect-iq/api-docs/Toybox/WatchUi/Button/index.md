---
title: "类：Toybox.WatchUi.Button"
---
# 类：Toybox.WatchUi.Button

继承：

Toybox.WatchUi.Selectable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

- [Toybox.WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)


[show all](#)

## 概述

可选择按钮的表示。

Button 对象可在选中时映射到 BehaviorDelegate 方法。

## 另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


注意：

请参阅 SDK 中随附的 Selectable 示例，了解 Button 类的使用示例

起始版本：

API 级别 2.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 速览

- 手表应用

- 表盘

- 微件


## 实例成员摘要 [collapse](#)

- [**background**](#background-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    按钮背景。在绘制当前 Selectable 状态之前，要绘制的 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值或格式为 0xRRGGBB 的 24 位整数。

- [**behavior**](#behavior-var) as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

    描述按钮被选中时执行的行为方法的 Symbol。


## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将 Button 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**initialize**](#initialize-instance_function)(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    构造函数初始化 Button 对象的前景、背景和行为。


## 实例属性详情

### var background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

按钮背景

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值或格式为 0xRRGGBB 的 24 位整数，在绘制当前 Selectable 状态之前进行绘制。

起始版本：

API 级别 2.1.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

描述按钮被选中时执行的行为方法的 Symbol。

此 Symbol 必须是活动 View 对象的已注册 BehaviorDelegate 的成员，例如 :onBack，但也可以是扩展类中的 Symbol。如果值为 `null`，则会发出 [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)。

起始版本：

API 级别 2.1.0

另见：

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


返回：

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将 Button 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


起始版本：

API 级别 2.1.0

### **initialize(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

构造函数初始化 Button 对象的前景、背景和行为。必须在 [setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) 期间注册 Button，才能使用它。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Button 对象选项的字典

- :behavior — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        选择 Button 时调用的 Symbol 对象；设置为 `null` 可使用 [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)（可选）

- :background — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数（可选）


另见：

- [Selectable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#initialize-instance_function)


起始版本：

API 级别 2.1.0
