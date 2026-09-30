---
title: "Class: Toybox.Media.ContentIterator"
---
# Class: Toybox.Media.ContentIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/)


[show all](#)

## 概述

A user-defined iterator that returns referenced to media content on the system for use by the system media player.

Since:

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**canSkip**](#canSkip-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定当前曲目是否可以跳过。

- [**get**](#get-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取当前媒体内容对象。

- [**getPlaybackProfile**](#getPlaybackProfile-instance_function)() as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

    Get the current media content playback profile.

- [**next**](#next-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the next media content object.

- [**peekNext**](#peekNext-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the next media content object without incrementing the iterator.

- [**peekPrevious**](#peekPrevious-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the previous media content object without decrementing the iterator.

- [**previous**](#previous-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the previous media content object.

- [**repeatMode**](#repeatMode-instance_function)() as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

    Get the current repeat state.

- [**shuffling**](#shuffling-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定当前播放是否设置为随机播放。


## 实例方法详情

### **canSkip()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定当前曲目是否可以跳过。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Returns `true` if the current track can be skipped, otherwise `false`.


Since:

API 级别 3.0.0

### **get()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取当前媒体内容对象。

Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



Since:

API 级别 3.0.0

### **getPlaybackProfile()** as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

Get the current media content playback profile

Returns:

- [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/)

Since:

API 级别 3.0.0

### **next()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the next media content object.

Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the next track

- 若没有剩余轨迹则返回 `null`

- 如果发生错误，则为错误对象。它可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()。



Since:

API 级别 3.0.0

### **peekNext()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the next media content object without incrementing the iterator.

Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



Since:

API 级别 3.0.0

### **peekPrevious()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the previous media content object without decrementing the iterator.

Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



Since:

API 级别 3.0.0

### **previous()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the previous media content object.

Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the next track.

- `null` if no tracks remain.

- 如果发生错误，则为错误对象。它可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()。



Since:

API 级别 3.0.0

### **repeatMode()** as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

Get the current repeat state

Returns:

- [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) —

    The [REPEAT\_MODE\_\*](/connect-iq/api-docs/Toybox/Media/#REPEAT_MODE_OFF-const) enum value that represents the current repeat state


Since:

API 级别 3.0.0

### **shuffling()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定当前播放是否设置为随机播放。

Returns `true` if shuffle is on, otherwise `false`.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Since:

API 级别 3.0.0
