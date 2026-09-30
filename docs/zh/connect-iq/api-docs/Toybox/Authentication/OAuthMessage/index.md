---
title: "Class: Toybox.Authentication.OAuthMessage"
---
# Class: Toybox.Authentication.OAuthMessage

Inherits:

Toybox.Authentication.Message

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Authentication.Message](/connect-iq/api-docs/Toybox/Authentication/Message/)

- [Toybox.Authentication.OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)


[show all](#)

## 概述

由注册到 [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Authentication/#registerForOAuthMessages-instance_function) 的回调接收的 OAuthMessage。

与 [Message](/connect-iq/api-docs/Toybox/Authentication/Message/) 父类中的 `data` 不同，OAuthMessage 中的 data 应始终为 [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)。

Since:

API 级别 3.3.0

## 实例成员摘要 [collapse](#)

- [**responseCode**](#responseCode-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    HTTP 响应码（正值）或 BLE 错误码（负值）。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

HTTP 响应码（正值）或 BLE 错误码（负值）。

注意：

此字段中的值不可靠，不应被引用。通常，更安全的做法是检查消息负载以确认响应状态。

Since:

API 级别 3.3.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 3.3.0
