---
title: "类：Toybox.WatchUi.ConfirmationDelegate"
---
# 类：Toybox.WatchUi.ConfirmationDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)


[显示全部](#)

## 概述

ConfirmationDelegate 响应 [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) 选择。

## 另见：

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


示例：

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

- [**onResponse**](#onResponse-instance_function)(response as [WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已进行确认选择。


## 实例方法详情

### **onResponse(response as [WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已进行确认选择。

选择 [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) 响应时会调用此方法，并将该响应作为参数接收。响应为 [CONFIRM\_NO](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) 或 [CONFIRM\_YES](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_YES-const) 值。

参数：

- response — ([WatchUi.Confirm](/connect-iq/api-docs/Toybox/WatchUi/#Confirm-module)) —

    此 Confirmation 中的 [WatchUi.CONFIRM\_\*](/connect-iq/api-docs/Toybox/WatchUi/#CONFIRM_NO-const) 值


另见：

- [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


起始版本：

API 级别 1.0.0
