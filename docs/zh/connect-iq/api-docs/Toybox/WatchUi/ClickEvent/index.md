---
title: "Class: Toybox.WatchUi.ClickEvent"
---
# 类：Toybox.WatchUi.ClickEvent

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


[show all](#)

## 概述

ClickEvent 是在设备触摸屏发生点击交互时发送给 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的对象。

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onTap(clickEvent) {
        System.println(clickEvent.getCoordinates()); // e.g. [36, 40]
        System.println(clickEvent.getType());        // CLICK_TYPE_TAP = 0
        return true;
    }
}
```

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 实例方法摘要 [collapse](#)

- [**getCoordinates**](#getCoordinates-instance_function)() as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    获取点击事件的坐标。

- [**getType**](#getType-instance_function)() as [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module)

    获取点击事件的类型。


## 实例方法详情

### **getCoordinates()** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

获取点击事件的坐标。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含点击事件 x 和 y 坐标的数组，类型为 [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/)


Since:

API 级别 1.0.0

### **getType()** as [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module)

获取点击事件的类型。

Returns:

- [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module) —

    一个 [WatchUi.CLICK\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#CLICK_TYPE_TAP-const) 值


Since:

API 级别 1.0.0
