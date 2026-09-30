---
title: "Class: Toybox.Background.InvalidBackgroundTimeException"
---
# 类：Toybox.Background.InvalidBackgroundTimeException

Inherits:

Toybox.Lang.Exception

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)

- [Toybox.Background.InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/)


[show all](#)

## 概述

Indicates a invalid time was provided to [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function), which may be invalid because it either:

- Occurs less than five minutes after the last background event occurred

- Has a duration of less than five minutes


Since:

API 级别 2.3.0

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

API 级别 2.3.0
