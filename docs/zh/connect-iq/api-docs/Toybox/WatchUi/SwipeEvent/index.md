---
title: "Class: Toybox.WatchUi.SwipeEvent"
---
# Class: Toybox.WatchUi.SwipeEvent

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)


[show all](#)

## 概述

SwipeEvent is an object sent to [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) when there is swipe interaction with the device's touch screen.

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onSwipe(swipeEvent) {
        System.println(swipeEvent.getDirection()); // e.g. SWIPE_RIGHT = 1
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

- [**getDirection**](#getDirection-instance_function)() as [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module)

    获取滑动的方向。


## 实例方法详情

### **getDirection()** as [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module)

获取滑动的方向。

Returns:

- [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module) —

    一个 [WatchUi.SWIPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) 值


Since:

API 级别 1.0.0
