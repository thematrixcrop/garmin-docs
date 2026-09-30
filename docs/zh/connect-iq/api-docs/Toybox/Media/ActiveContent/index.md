---
title: "Class: Toybox.Media.ActiveContent"
---
# Class: Toybox.Media.ActiveContent

Inherits:

Toybox.Media.Content

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

- [Toybox.Media.ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/)


[show all](#)

## 概述

Pairs a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) with associated [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/) information and allows a playback start position to be set.

Since:

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**getPlaybackStartPosition**](#getPlaybackStartPosition-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the playback start position for media content.

- [**initialize**](#initialize-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))

    Constructor.


## 实例方法详情

### **getPlaybackStartPosition()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the playback start position for media content

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Since:

API 级别 3.0.0

### **initialize(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))**

Constructor

Parameters:

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    A reference to media content

- metadata — ([Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) —

    The metadata associated with referenced media content

- playbackStartPos — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Playback start position for the media content in seconds


Since:

API 级别 3.0.0
