---
title: "Class: Toybox.WatchUi.ConfirmationDelegate"
---
# Class: Toybox.WatchUi.ConfirmationDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)


[show all](#)

## 概述

ConfirmationDelegate responds to a [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) selection.

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

    A confirmation selection was made.


## 实例方法详情

### **onResponse(response as [WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

A confirmation selection was made.

This method is called when a [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) response is selected, and receives the response as an argument. The response is either a [CONFIRM\_NO](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) or [CONFIRM\_YES](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_YES-const) value.

Parameters:

- response — ([WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module)) —

    The [WatchUi.CONFIRM\_\*](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) value from this Confirmation


另见：

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


Since:

API 级别 1.0.0
