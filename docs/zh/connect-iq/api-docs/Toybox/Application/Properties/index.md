---
title: "Module: Toybox.Application.Properties"
---
# Module: Toybox.Application.Properties

## 概述

The Properties module provides access to application properties.

Storage provides access to properties defined in application properties.

Since:

API 级别 2.4.0

## 命名空间下的类

类：[InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)

## 类型定义摘要 [collapse](#)

- [**ValueType**](#ValueType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

## 实例方法摘要 [collapse](#)

- [**getValue**](#getValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

    从应用程序设置中获取与给定键关联的数据。

- [**setValue**](#setValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) as **Void**

    存储给定的 Application Property。


## 类型定义详情

### **ValueType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

Since:

API 级别 2.4.0

## 实例方法详情

### **getValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

从应用程序设置中获取与给定键关联的数据。

Property values must be defined in the application settings xml. If a key that is not present in application settings is passed to getValue(), an exception will be thrown.

Parameters:

- key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The key of the value to retrieve from Application Properties


Returns:

- [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type) —

    The content associated with the key


另见：

- [setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function)


Since:

API 级别 2.4.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 key 是禁止的数据类型则抛出

- ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    Thrown if key does not exist in Application Settings


### **setValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type))** as **Void**

存储给定的 Application Property。

注意：

Background processes cannot save Application Properties

Parameters:

- key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The key used to store and retrieve the value from Application Properties

- value — ([Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) —

    The value to put into Application Properties


Since:

API 级别 2.4.0

Throws:

- ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    如果在不支持 ConnectIQ 3.2.0 的设备上从后台进程调用，则抛出。使用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)，始终可以将数据从后台进程传递到前台进程。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 key 是禁止的数据类型则抛出

- ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    Thrown if key does not exist in Application Properties
