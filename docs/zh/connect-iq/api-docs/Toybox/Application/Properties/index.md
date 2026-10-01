---
title: "模块：Toybox.Application.Properties"
---
# 模块：Toybox.Application.Properties

## 概述

Properties 模块提供对应用属性的访问。

应用属性是在应用设置中定义的属性。

起始版本：

API 级别 2.4.0

## 命名空间下的类

类：[InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)

## 类型定义摘要 [collapse](#)

- [**ValueType**](#ValueType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

## 实例方法摘要 [collapse](#)

- [**getValue**](#getValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

    从应用程序设置中获取与给定键关联的数据。

- [**setValue**](#setValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) as **Void**

    存储给定的应用属性值。


## 类型定义详情

### **ValueType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

起始版本：

API 级别 2.4.0

## 实例方法详情

### **getValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

从应用程序设置中获取与给定键关联的数据。

属性值必须在应用程序设置 XML 中定义。如果将应用程序设置中不存在的键传递给 getValue()，将抛出异常。

参数：

- key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要从应用属性中获取的值所对应的键


返回：

- [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type) —

    与键关联的内容


另见：

- [setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function)


起始版本：

API 级别 2.4.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `key` 是不允许的数据类型，则抛出此异常。

- ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    如果 Application Settings 中不存在 `key`，则会抛出此异常


### **setValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type))** as **Void**

存储给定的应用属性值。

注意：

后台进程无法保存应用属性

参数：

- key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于在应用属性中存储和获取值的键

- value — ([Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) —

    要放入 Application Properties 的值


起始版本：

API 级别 2.4.0

抛出：

- ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    如果在不支持 ConnectIQ 3.2.0 的设备上从后台进程调用此方法，则抛出此异常。使用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)，始终可以将数据从后台进程传递到前台进程。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `key` 是不允许的数据类型，则抛出此异常。

- ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    如果 Application Properties 中不存在 `key`，则会抛出此异常
