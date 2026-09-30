---
title: "类：Toybox.WatchUi.SelectableEvent"
---
# 类：Toybox.WatchUi.SelectableEvent

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


[显示全部](#)

## 概述

SelectableEvent 是一个对象，当使用实体按钮或触摸屏操作 [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 时发送给 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)。

## 另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


起始版本：

API 级别 2.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 实例方法摘要 [collapse](#)

- [**getInstance**](#getInstance-instance_function)() as [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

    获取所操作的 [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 实例。

- [**getPreviousState**](#getPreviousState-instance_function)() as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

    获取生成该事件的 Selectable 的先前状态。


## 实例方法详情

### **getInstance()** as [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

获取所操作的 [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 实例。

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    对 Selectable 的引用


起始版本：

API 级别 2.1.0

### **getPreviousState()** as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

获取生成该事件的 Selectable 的先前状态。

返回：

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) —

    表示以下四种可用状态之一的符号：

- [stateDefault](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateDefault-var)

- [stateHighlighted](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateHighlighted-var)

- [stateSelected](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateSelected-var)

- [stateDisabled](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateDisabled-var)



起始版本：

API 级别 2.1.0
