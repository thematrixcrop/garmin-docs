---
title: "类：Toybox.System.Intent"
---
# 类：Toybox.System.Intent

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)


[show all](#)

## 概述

Intent 将内容从一个应用发送到另一个应用。

严格来说，内容由 Intent 发送到 URI，而 Intent 可以是原生活动（例如 Run、Bike 等）或其他 Connect IQ 应用。与 [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) 结合使用时，Intent 可以退出当前应用并启动第二个应用，将信息从源应用传递给新打开的应用。

例如，小组件可能通过 [Communications](/connect-iq/api-docs/Toybox/Communications/) 调用从服务收集数据，并通过 Intent 将这些数据传递给设备应用，以便在活动期间使用。

## 另见：

- [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)


示例：

```
using Toybox.System;
var targetApp = new System.Intent(
    "manifest-id://12345678-1234-1234-1234-123412341234",
    {"arg"=>"CurrentAppName"}
);
System.exitTo(targetApp);
```

示例：

有效的 Intent URI 格式

```
manifest-id://[manifest ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
store-id://[app store ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]

// Launch sensor scan page to pair with a sensor. API level 5.1.0 and later.
system://pairing
```

起始版本：

API 级别 2.2.0

应用类型与运行时上下文：

- 音频内容提供者

- 速览

- 手表应用

- 微件


## 实例成员摘要 [collapse](#)

- [**arguments**](#arguments-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**
- [**uri**](#uri-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(aURI as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), aArgs as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)

    Constructor.


## 实例属性详情

### var arguments as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

起始版本：

API 级别 2.2.0

### var uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

起始版本：

API 级别 2.2.0

## 实例方法详情

### **initialize(aURI as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), aArgs as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)**

Constructor

参数：

- aURI — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    指定 Intent 接收方的 URI

- aArgs — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    传递给目标 URI 的参数


起始版本：

API 级别 2.2.0
