---
title: "类：Toybox.Media.Content"
---
# 类：Toybox.Media.Content

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)


[显示全部](#)

## 概述

将 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 与关联的 [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/) 信息配对。

起始版本：

API 级别 3.0.0

## 直接已知子类

[Media.ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/)

## 实例方法摘要 [collapse](#)

- [**getContentRef**](#getContentRef-instance_function)() as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

    获取底层 ContentRef 对象。

- [**getMetadata**](#getMetadata-instance_function)() as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

    获取此对象的元数据。

- [**getPlaybackStartPosition**](#getPlaybackStartPosition-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取媒体内容的播放起始位置。

- [**initialize**](#initialize-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))

    Constructor.

- [**setMetadata**](#setMetadata-instance_function)(metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) as **Void**

    设置此对象的元数据。


## 实例方法详情

### **getContentRef()** as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

获取底层 ContentRef 对象

返回：

- [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)

起始版本：

API 级别 3.0.0

### **getMetadata()** as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

获取此对象的元数据

返回：

- [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)

起始版本：

API 级别 3.0.0

### **getPlaybackStartPosition()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取媒体内容的播放起始位置

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

起始版本：

API 级别 3.0.0

### **initialize(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))**

构造函数

参数：

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    对媒体内容的引用

- metadata — ([Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) —

    与所引用媒体内容相关联的元数据。


起始版本：

API 级别 3.0.0

### **setMetadata(metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/))** as **Void**

设置此对象的元数据

起始版本：

API 级别 3.0.0
