---
title: "类：Toybox.WatchUi.Selectable"
---
# 类：Toybox.WatchUi.Selectable

继承：

Toybox.WatchUi.Drawable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


[show all](#)

## 概述

屏幕上可选择对象的表示，其状态取决于选择模式。

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


注意：

请参阅 SDK 中随附的 Selectable 示例，了解 Selectable 类的使用示例

起始版本：

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

    Selectable 对象的默认状态。

- [**stateDisabled**](#stateDisabled-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    Selectable 对象的禁用状态。

- [**stateHighlighted**](#stateHighlighted-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    Selectable 对象的高亮状态。

- [**stateSelected**](#stateSelected-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    Selectable 对象的选中状态。


## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    将 Selectable 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**getState**](#getState-instance_function)() as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

    获取 Selectable 对象的当前状态。

- [**initialize**](#initialize-instance_function)(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

- [**setState**](#setState-instance_function)(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    设置 Selectable 对象的当前状态。


## 实例属性详情

### var stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

Selectable 对象的默认状态。

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数，表示 Selectable 的默认状态

起始版本：

API 级别 2.1.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

Selectable 对象的禁用状态。

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数，表示 Selectable 的禁用状态

起始版本：

API 级别 2.1.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

Selectable 对象的高亮状态。

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数，表示 Selectable 的高亮状态

起始版本：

API 级别 2.1.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

Selectable 对象的选中状态。

一个 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、[Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 常量或格式为 0xRRGGBB 的 24 位整数，表示 Selectable 的选中状态

起始版本：

API 级别 2.1.0

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

将 Selectable 绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

此方法假定设备上下文已经配置为正确的选项。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


起始版本：

API 级别 2.1.0

### **getState()** as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

获取 Selectable 对象的当前状态。

返回：

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) —

    当前状态：

- :stateDefault

- :stateHighlighted

- :stateSelected

- :stateDisabled



起始版本：

API 级别 2.1.0

### **initialize(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Selectable 对象选项的字典

- :locX — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        Selectable 对象在屏幕上的绝对 x 坐标（必需）

- :locY — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        Selectable 对象在屏幕上的绝对 y 坐标（必需）

- :width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        Selectable 对象的裁剪宽度（必需）

- :height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        Selectable 对象的裁剪高度（必需）

- :stateDefault — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        默认状态下显示的 Drawable 或颜色（可选）

- :stateHighlighted — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        高亮状态下显示的 Drawable 或颜色（可选）

- :stateSelected — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        选中状态下显示的 Drawable 或颜色（可选）

- :stateDisabled — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        禁用状态下显示的 Drawable 或颜色（可选）


另见：

- [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


起始版本：

API 级别 2.1.0

### **setState(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

设置 Selectable 对象的当前状态。

参数：

- state — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    所需状态：

- :stateDefault

- :stateHighlighted

- :stateSelected

- :stateDisabled



起始版本：

API 级别 2.1.0

抛出：

- ([WatchUi.InvalidSelectableStateException](/connect-iq/api-docs/Toybox/WatchUi/InvalidSelectableStateException/))
