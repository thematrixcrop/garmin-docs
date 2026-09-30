---
title: "Class: Toybox.System.Intent"
---
# 类：Toybox.System.Intent

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)


[show all](#)

## 概述

Intent 将内容从一个应用发送到另一个应用。

Strictly speaking, content is sent to a **URI** by an Intent, which can either be a native activity (e.g. Run, Bike, etc.) or another Connect IQ app. Used in conjunction with [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function), Intents can exit the current app and launch a second app, passing information from the originating app to the newly open app.

For example, a widget might collect data from a service via a [Communications](/connect-iq/api-docs/Toybox/Communications/) call and pass that data to a device app via Intent for use during an activity.

## 另见：

- [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)


Example:

```
using Toybox.System;
var targetApp = new System.Intent(
    "manifest-id://12345678-1234-1234-1234-123412341234",
    {"arg"=>"CurrentAppName"}
);
System.exitTo(targetApp);
```

Example:

Valid Intent URI formats

```
manifest-id://[manifest ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]
store-id://[app store ID in the form xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx]

// Launch sensor scan page to pair with a sensor. API level 5.1.0 and later.
system://pairing
```

Since:

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

Since:

API 级别 2.2.0

### var uri as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Since:

API 级别 2.2.0

## 实例方法详情

### **initialize(aURI as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), aArgs as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)**

Constructor

Parameters:

- aURI — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URI that specifies receiver of the Intent

- aArgs — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Parameters to pass to the target URI


Since:

API 级别 2.2.0
