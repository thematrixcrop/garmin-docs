---
title: "类：Toybox.WatchUi.SwipeEvent"
---
# 类：Toybox.WatchUi.SwipeEvent

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)


[显示全部](#)

## 概述

当设备触摸屏发生滑动交互时，SwipeEvent 是发送给 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的对象。

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


示例：

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

起始版本：

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

返回：

- [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module) —

    一个 [WatchUi.SWIPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) 值


起始版本：

API 级别 1.0.0
