---
title: "Class: Toybox.Media.Content"
---
# Class: Toybox.Media.Content

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)


[show all](#)

## 概述

Pairs a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) with associated [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/) information.

Since:

API 级别 3.0.0

## 直接已知子类

[Media.ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/)

## 实例方法摘要 [collapse](#)

- [**getContentRef**](#getContentRef-instance_function)() as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

    Get the underlying ContentRef object.

- [**getMetadata**](#getMetadata-instance_function)() as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

    Get the metadata for this object.

- [**getPlaybackStartPosition**](#getPlaybackStartPosition-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取媒体内容的播放起始位置。

- [**initialize**](#initialize-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))

    Constructor.

- [**setMetadata**](#setMetadata-instance_function)(metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) as **Void**

    Set the metadata for this object.


## 实例方法详情

### **getContentRef()** as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

Get the underlying ContentRef object

Returns:

- [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

Since:

API 级别 3.0.0

### **getMetadata()** as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

Get the metadata for this object

Returns:

- [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

Since:

API 级别 3.0.0

### **getPlaybackStartPosition()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取媒体内容的播放起始位置

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Since:

API 级别 3.0.0

### **initialize(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))**

Constructor

Parameters:

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    对媒体内容的引用

- metadata — ([Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) —

    The metadata associated with referenced media content


Since:

API 级别 3.0.0

### **setMetadata(metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))** as **Void**

Set the metadata for this object

Since:

API 级别 3.0.0
