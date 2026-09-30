---
title: "Class: Toybox.WatchUi.ConfirmationDelegate"
---
# 类：Toybox.WatchUi.ConfirmationDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)


[show all](#)

## 概述

ConfirmationDelegate 响应 [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) 选择。

## 另见：

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


Example:

```
using Toybox.WatchUi;
using Toybox.System;

class MyConfirmationDelegate extends WatchUi.ConfirmationDelegate {
    function initialize() {
        ConfirmationDelegate.initialize();
    }

    function onResponse(response) {
        if (response == WatchUi.CONFIRM_NO) {
            System.println("Cancel");
        } else {
            System.println("Confirm");
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

- [**onResponse**](#onResponse-instance_function)(response as [WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已进行确认选择。


## 实例方法详情

### **onResponse(response as [WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已进行确认选择。

This method is called when a [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) response is selected, and receives the response as an argument. The response is either a [CONFIRM\_NO](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) or [CONFIRM\_YES](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_YES-const) value.

Parameters:

- response — ([WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module)) —

    此 Confirmation 中的 [WatchUi.CONFIRM\_\*](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) 值


另见：

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


Since:

API 级别 1.0.0
