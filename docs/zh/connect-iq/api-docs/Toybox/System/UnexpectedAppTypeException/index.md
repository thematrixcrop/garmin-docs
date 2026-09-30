---
title: "Class: Toybox.System.UnexpectedAppTypeException"
---
# Class: Toybox.System.UnexpectedAppTypeException

Inherits:

Toybox.Lang.Exception

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)

- [Toybox.System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)


[show all](#)

## 概述

This exception indicates that the app targeted by an Intent when exiting to the app is not an allowed app type.

Allowed app types currently include watch-apps (both native activities and Connect IQ apps) and widgets. Watch faces and data fields cannot be targeted. If a native activity that has a Connect IQ data field configured is targeted, the native app will receive the Intent, not the data field.

## 另见：

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)


Since:

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))

    Constructor.


## 实例方法详情

### **initialize(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))**

Constructor

Parameters:

- msg — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    异常消息


Since:

API 级别 2.2.0
