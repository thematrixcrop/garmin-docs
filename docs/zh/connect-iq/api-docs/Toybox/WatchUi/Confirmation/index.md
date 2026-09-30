---
title: "Class: Toybox.WatchUi.Confirmation"
---
# 类：Toybox.WatchUi.Confirmation

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


[show all](#)

## 概述

确认对话框的表示形式。

Confirmation 是一种特殊的 View，用于向用户显示“是/否”问题。选择选项后，将调用已注册的 [onResponse()](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/#onResponse-instance_function) 方法。使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 Confirmation，该方法将 [ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) 作为输入委托。

## 另见：

- [Toybox.WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


注意：

The look and feel of a confirmation dialog is device-specific.

Example:

```
using Toybox.WatchUi;

var message = "Continue?";
dialog = new WatchUi.Confirmation(message);
WatchUi.pushView(
    dialog,
    new ConfirmationDelegate(),
    WatchUi.SLIDE_IMMEDIATE
);
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

- [**initialize**](#initialize-instance_function)(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))

    Constructor.


## 实例方法详情

### **initialize(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))**

Constructor

Parameters:

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The confirmation message to display in the confirmation dialog


Since:

API 级别 1.0.0
