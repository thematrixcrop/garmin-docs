---
title: "类：Toybox.Media.ActiveContent"
---
# 类：Toybox.Media.ActiveContent

继承：

Toybox.Media.Content

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

- [Toybox.Media.ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/)


[show all](#)

## 概述

将 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 与关联的 [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/) 信息配对，并允许设置播放起始位置。

起始版本：

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**getPlaybackStartPosition**](#getPlaybackStartPosition-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取媒体内容的播放起始位置。

- [**initialize**](#initialize-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))

    Constructor.


## 实例方法详情

### **getPlaybackStartPosition()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取媒体内容的播放起始位置

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

起始版本：

API 级别 3.0.0

### **initialize(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))**

Constructor

参数：

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    对媒体内容的引用

- metadata — ([Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) —

    与所引用媒体内容相关联的元数据。

- playbackStartPos — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    媒体内容的播放起始位置，以秒为单位


起始版本：

API 级别 3.0.0
