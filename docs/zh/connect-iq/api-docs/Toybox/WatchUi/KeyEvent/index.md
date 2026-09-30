---
title: "类：Toybox.WatchUi.KeyEvent"
---
# 类：Toybox.WatchUi.KeyEvent

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


[显示全部](#)

## 概述

KeyEvent 是在设备上的物理按钮按下时发送给 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的对象。

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


示例：

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onKey(keyEvent) {
        System.println(keyEvent.getKey());  // e.g. KEY_MENU = 7
        System.println(keyEvent.getType()); // e.g. PRESS_TYPE_DOWN = 0
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

- [**getKey**](#getKey-instance_function)() as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)

    获取此事件的键值。

- [**getType**](#getType-instance_function)() as [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module)

    获取点击事件的类型。


## 实例方法详情

### **getKey()** as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)

获取此事件的键值。

返回：

- [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module) —

    一个 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 值


起始版本：

API 级别 1.0.0

### **getType()** as [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module)

获取点击事件的类型。

返回：

- [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module) —

    一个 [WatchUi.PRESS\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#PRESS_TYPE_DOWN-const) 值


起始版本：

API 级别 1.1.2
