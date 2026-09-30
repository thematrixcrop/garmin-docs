---
title: "Class: Toybox.Communications.OAuthMessage"
---
# Class: Toybox.Communications.OAuthMessage

Inherits:

Toybox.Communications.Message

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Communications.Message](/connect-iq/api-docs/Toybox/Communications/Message/)

- [Toybox.Communications.OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)


[show all](#)

## 概述

An OAuthMessage received by the callback registered in [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function).

Unlike the `data` in the [Message](/connect-iq/api-docs/Toybox/Communications/Message/) parent class, data in an OAuthMessage should always be a [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/).

Since:

API 级别 1.3.0

## 实例成员摘要 [collapse](#)

- [**responseCode**](#responseCode-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    HTTP 响应码（正值）或 BLE 错误码（负值）。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

HTTP 响应码（正值）或 BLE 错误码（负值）。

注意：

The value in this field is unreliable and should not be referenced. It is generally safer to examine the message payload to check the status of the response.

Since:

API 级别 1.3.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 1.3.0
