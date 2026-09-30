---
title: "Class: Toybox.Complications.Id"
---
# Class: Toybox.Complications.Id

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)


[show all](#)

## 概述

Unique identifier for complications

Since:

API 级别 4.2.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Equals implementation.

- [**getType**](#getType-instance_function)() as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module)

    Get the complication type.

- [**initialize**](#initialize-instance_function)(id as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module))

    Constructor.


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Equals implementation

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the other parameter is a complication id that is equal, otherwise `false`


Since:

API 级别 4.2.0

### **getType()** as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module)

Get the complication type

Returns:

- [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module) —

    复杂功能类型


Since:

API 级别 4.2.0

### **initialize(id as [Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module))**

Constructor

Parameters:

- id — ([Complications.Type](/connect-iq/api-docs/Toybox/Complications/#Type-module)) —

    复杂功能类型


Since:

API 级别 4.2.0
