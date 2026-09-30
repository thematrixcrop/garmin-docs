---
title: "Class: Toybox.WatchUi.Menu"
---
# 类：Toybox.WatchUi.Menu

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)


[show all](#)

## 概述

屏幕上菜单的表示。

Menu 是一种特殊的 View，用于向用户显示选项列表。选择选项后，将调用已注册的 [onMenuItem()](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/#onMenuItem-instance_function) 方法。虽然可以通过编程方式生成 Menu，但通常应将其创建为资源。

使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 Menu，该方法将 [MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/) 作为输入委托。

## 另见：

- [Toybox.WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


注意：

The look and feel of a menu is device-specific.

Example:

以编程方式构建简单菜单

```
using Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        var menu = new WatchUi.Menu();
        var delegate;
        menu.setTitle("My Menu");
        menu.addItem("Item One", :one);
        menu.addItem("Item Two", :two);
        delegate = new MyMenuDelegate(); // a WatchUi.MenuInputDelegate
        WatchUi.pushView(menu, delegate, WatchUi.SLIDE_IMMEDIATE);
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


## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | MAX\_SIZE | 16 |
API 级别 1.0.0

|

The maximum number of allowed entries in a Menu.

|

## 实例方法摘要 [collapse](#)

- [**addItem**](#addItem-instance_function)(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), identifier as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    向 Menu 添加一个条目。

- [**setTitle**](#setTitle-instance_function)(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

    设置 Menu 标题。


## 实例方法详情

### **addItem(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), identifier as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

向 Menu 添加一个条目。

Parameters:

- label — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The item text as a String or string ResourceId

- identifier — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    表示 Menu 项值的 Symbol


Since:

API 级别 1.0.0

### **setTitle(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

设置 Menu 标题。

Parameters:

- title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The title text or a string ResourceId


Since:

API 级别 1.0.0
