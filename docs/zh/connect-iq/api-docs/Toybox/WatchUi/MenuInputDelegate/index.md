---
title: "类：Toybox.WatchUi.MenuInputDelegate"
---
# 类：Toybox.WatchUi.MenuInputDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)


[show all](#)

## 概述

MenuInputDelegate 响应 Menu 选择。

应扩展此类以处理选中的 Menu 项。

## 另见：

- [Toybox.WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)


示例：

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

- [**onMenuItem**](#onMenuItem-instance_function)(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    已选择一个菜单项。


## 实例方法详情

### **onMenuItem(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

已选择一个菜单项。

选择 Menu 项时会调用此方法，并将该 Menu 项作为参数接收。

参数：

- item — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    所选菜单项的标识符


起始版本：

API 级别 1.0.0
