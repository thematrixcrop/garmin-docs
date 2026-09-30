---
title: "Class: Toybox.WatchUi.SelectableEvent"
---
# Class: Toybox.WatchUi.SelectableEvent

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


[show all](#)

## 概述

SelectableEvent is an object sent to [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) when a [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) is manipulated using physical buttons or touch screen.

## 另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


Since:

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

    Get the instance of the manipulated [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/).

- [**getPreviousState**](#getPreviousState-instance_function)() as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

    Get the previous state of the Selectable that generated the event.


## 实例方法详情

### **getInstance()** as [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

Get the instance of the manipulated [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/).

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    A reference to the Selectable


Since:

API 级别 2.1.0

### **getPreviousState()** as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

Get the previous state of the Selectable that generated the event.

Returns:

- [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) —

    A symbol representing one of the four available states:

- [stateDefault](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateDefault-var)

- [stateHighlighted](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateHighlighted-var)

- [stateSelected](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateSelected-var)

- [stateDisabled](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#stateDisabled-var)



Since:

API 级别 2.1.0
