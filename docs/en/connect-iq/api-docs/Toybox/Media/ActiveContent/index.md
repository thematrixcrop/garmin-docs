---
title: "Class: Toybox.Media.ActiveContent"
---
# Class: Toybox.Media.ActiveContent

Inherits:

Toybox.Media.Content

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

-   [Toybox.Media.ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/)


[show all](#)

## Overview

Pairs a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) with associated [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/) information and allows a playback start position to be set.

Since:

API Level 3.0.0

## Instance Method Summary [collapse](#)

-   [**getPlaybackStartPosition**](#getPlaybackStartPosition-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the playback start position for media content.

-   [**initialize**](#initialize-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))

    Constructor.


## Instance Method Details

### **getPlaybackStartPosition()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the playback start position for media content

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Since:

API Level 3.0.0

### **initialize(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), metadata as [Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), playbackStartPos as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))**

Constructor

Parameters:

-   contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    A reference to media content

-   metadata — ([Media.ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/)) —

    The metadata associated with referenced media content

-   playbackStartPos — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Playback start position for the media content in seconds


Since:

API Level 3.0.0
