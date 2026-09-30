---
title: "Class: Toybox.Complications.Complication"
---
# Class: Toybox.Complications.Complication

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)


[show all](#)

## 概述

Complication object

Since:

API 级别 4.2.0

## 实例成员摘要 [collapse](#)

- [**complicationId**](#complicationId-var) as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or **Null**
- [**longLabel**](#longLabel-var) as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type) or **Null**
- [**ranges**](#ranges-var) as [Complications.Ranges](/connect-iq/api-docs/Toybox/Complications/#Ranges-named_type) or **Null**
- [**shortLabel**](#shortLabel-var) as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type) or **Null**
- [**unit**](#unit-var) as [Complications.Unit](/connect-iq/api-docs/Toybox/Complications/#Unit-module) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**
- [**value**](#value-var) as [Complications.Value](/connect-iq/api-docs/Toybox/Complications/#Value-named_type) or **Null**

## 实例方法摘要 [collapse](#)

- [**getIcon**](#getIcon-instance_function)() as [Complications.Icon](/connect-iq/api-docs/Toybox/Complications/#Icon-named_type) or **Null**

    Get the complication icon.

- [**getType**](#getType-instance_function)() as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module) or **Null**

    获取复杂功能类型。


## 实例属性详情

### var complicationId as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or **Null**

Since:

API 级别 4.2.0

### var longLabel as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type) or **Null**

Since:

API 级别 4.2.0

### var ranges as [Complications.Ranges](/connect-iq/api-docs/Toybox/Complications/#Ranges-named_type) or **Null**

Since:

API 级别 4.2.0

### var shortLabel as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type) or **Null**

Since:

API 级别 4.2.0

### var unit as [Complications.Unit](/connect-iq/api-docs/Toybox/Complications/#Unit-module) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Since:

API 级别 4.2.0

### var value as [Complications.Value](/connect-iq/api-docs/Toybox/Complications/#Value-named_type) or **Null**

Since:

API 级别 4.2.0

## 实例方法详情

### **getIcon()** as [Complications.Icon](/connect-iq/api-docs/Toybox/Complications/#Icon-named_type) or **Null**

Get the complication icon. This is only available for user complications

Returns:

- [Complications.Icon](/connect-iq/api-docs/Toybox/Complications/#Icon-named_type) —

    用户复杂功能的图标；如果这是原生复杂功能，则为 `null`


Since:

API 级别 4.2.0

Throws:

- ([Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)) —

    如果找不到给定的 complication，则抛出。


### **getType()** as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module) or **Null**

获取复杂功能类型

Returns:

- [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module) —

    The complication type of a system complication, or COMPLICATION\_TYPE\_INVALID for user complications.


Since:

API 级别 4.2.0
