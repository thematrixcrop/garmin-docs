---
title: "Class: Toybox.Media.ContentDelegate"
---
# Class: Toybox.Media.ContentDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)


[show all](#)

## 概述

A delegate object that the user implements to respond to certain media events from the native media player

Since:

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**getContentIterator**](#getContentIterator-instance_function)() as [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) or **Null**

    Return a [ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) object for the system to use to iterate over media tracks.

- [**onAdAction**](#onAdAction-instance_function)(adContext as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Respond to a user ad click.

- [**onCustomButton**](#onCustomButton-instance_function)(button as [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/)) as **Void**

    Handle a CustomButton being selected in the Media Player.

- [**onRepeat**](#onRepeat-instance_function)() as **Void**

    Respond to a command to change repeat mode.

- [**onShuffle**](#onShuffle-instance_function)() as **Void**

    Respond to a command to turn shuffle on or off.

- [**onSong**](#onSong-instance_function)(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), songEvent as [Media.SongEvent](/connect-iq/api-docs/Toybox/Media/#SongEvent-module), playbackPosition as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module)) as **Void**

    Handle a notification from a system that a song has been played.

- [**onThumbsDown**](#onThumbsDown-instance_function)(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Respond to a thumbs-down action.

- [**onThumbsUp**](#onThumbsUp-instance_function)(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Respond to a thumbs-up action.

- [**resetContentIterator**](#resetContentIterator-instance_function)() as [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) or **Null**

    Reset the [ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) to the beginning of the current playlist.


## 实例方法详情

### **getContentIterator()** as [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) or **Null**

Return a [ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) object for the system to use to iterate over media tracks.

Returns:

- [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/)

Since:

API 级别 3.0.0

### **onAdAction(adContext as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

Respond to a user ad click.

Parameters:

- adContext — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    Context information for the ad that was clicked


Since:

API 级别 3.0.0

### **onCustomButton(button as [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/))** as **Void**

Handle a CustomButton being selected in the Media Player

Parameters:

- button — ([Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/)) —

    The CustomButton that was pressed.


Since:

API 级别 3.0.3

### **onRepeat()** as **Void**

Respond to a command to change repeat mode

Since:

API 级别 3.0.0

### **onShuffle()** as **Void**

Respond to a command to turn shuffle on or off.

Since:

API 级别 3.0.0

### **onSong(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), songEvent as [Media.SongEvent](/connect-iq/api-docs/Toybox/Media/#SongEvent-module), playbackPosition as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module))** as **Void**

Handle a notification from a system that a song has been played.

Parameters:

- contentRefId — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The ID referencing a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) object

- songEvent — ([Media.SongEvent](/connect-iq/api-docs/Toybox/Media/#SongEvent-module)) —

    A [SONG\_EVENT\_\*](/connect-iq/api-docs/Toybox/Media/#SONG_EVENT_START-const) value indicating the triggered event

- playbackPosition — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Media.PlaybackPosition](/connect-iq/api-docs/Toybox/Media/#PlaybackPosition-module)) —

    The time the song has been playing in seconds, or a [PLAYBACK\_POSITION\_\*](/connect-iq/api-docs/Toybox/Media/#PLAYBACK_POSITION_START-const) value


Since:

API 级别 3.0.0

### **onThumbsDown(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

Respond to a thumbs-down action.

The thumbs-down option is native to the device media player. When a user selects the thumbs-down function on the device, a corresponding onThumbsDown() event is sent to application.

Parameters:

- contentRefId — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    ID referencing a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) object


Since:

API 级别 3.0.0

### **onThumbsUp(contentRefId as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

Respond to a thumbs-up action.

The thumbs-up option is native to the device media player. When a user selects the thumbs-up function on the device, a corresponding onThumbsUp() event is sent to the application.

Parameters:

- contentRefId — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    ID referencing a [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) object


Since:

API 级别 3.0.0

### **resetContentIterator()** as [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) or **Null**

Reset the [ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) to the beginning of the current playlist.

Returns:

- [Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/) —

    An instance of the newly reset ContentIterator


Since:

API 级别 3.0.0
