---
title: "Class: Toybox.WatchUi.MenuInputDelegate"
---
# Class: Toybox.WatchUi.MenuInputDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)


[show all](#)

## 概述

MenuInputDelegate responds to a Menu selection.

This class should be extended to handle selected Menu items.

## 另见：

- [Toybox.WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)


Example:

```
using Toybox.WatchUi;
using Toybox.System;

class MyMenuInputDelegate extends WatchUi.MenuInputDelegate {
    function initialize() {
        MenuInputDelegate.initialize();
    }

    function onMenuItem(item) {
        if (item == :item_1) {
            System.println("Item 1");
        } else if (item == :item_2) {
            System.println("Item 2");
        }
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

- [**onMenuItem**](#onMenuItem-instance_function)(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    A Menu item was chosen.


## 实例方法详情

### **onMenuItem(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

A Menu item was chosen.

This method is called when a Menu item has been selected, and receives the Menu item as an argument.

Parameters:

- item — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The identifier of the chosen Menu item


Since:

API 级别 1.0.0
