---
title: "Class: Toybox.Media.ContentRef"
---
# Class: Toybox.Media.ContentRef

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)


[show all](#)

## 概述

Provides a reference to downloaded media content.

Since:

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**getContentType**](#getContentType-instance_function)() as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)

    Get the media content type.

- [**getId**](#getId-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    Get the content ref ID.

- [**initialize**](#initialize-instance_function)(id as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), type as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module))

    Constructor.


## 实例方法详情

### **getContentType()** as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)

Get the media content type.

Returns:

- [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module) —

    一个 [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) 值


Since:

API 级别 3.0.0

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

Get the content ref ID.

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The ID parameter value for the current ContentRef object


Since:

API 级别 3.0.0

### **initialize(id as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), type as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module))**

Constructor

Parameters:

- id — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    A unique identifier for this ContentRef object

- type — ([Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)) —

    One of the [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) enum values


Since:

API 级别 3.0.0
