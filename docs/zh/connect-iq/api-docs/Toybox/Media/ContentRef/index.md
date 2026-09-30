---
title: "类：Toybox.Media.ContentRef"
---
# 类：Toybox.Media.ContentRef

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)


[show all](#)

## 概述

提供对已下载媒体内容的引用。

起始版本：

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**getContentType**](#getContentType-instance_function)() as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)

    获取媒体内容类型。

- [**getId**](#getId-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    获取内容引用 ID。

- [**initialize**](#initialize-instance_function)(id as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), type as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module))

    Constructor.


## 实例方法详情

### **getContentType()** as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)

获取媒体内容类型。

返回：

- [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module) —

    一个 [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) 值


起始版本：

API 级别 3.0.0

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

获取内容引用 ID。

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    当前 ContentRef 对象的 ID 参数值


起始版本：

API 级别 3.0.0

### **initialize(id as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), type as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module))**

Constructor

参数：

- id — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    此 ContentRef 对象的唯一标识符

- type — ([Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)) —

    [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) 枚举值之一


起始版本：

API 级别 3.0.0
