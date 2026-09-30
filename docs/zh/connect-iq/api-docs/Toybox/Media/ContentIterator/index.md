---
title: "类：Toybox.Media.ContentIterator"
---
# 类：Toybox.Media.ContentIterator

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/)


[显示全部](#)

## 概述

用户定义的迭代器，用于返回系统上的媒体内容引用，以供系统媒体播放器使用。

起始版本：

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**canSkip**](#canSkip-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定当前曲目是否可以跳过。

- [**get**](#get-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取当前媒体内容对象。

- [**getPlaybackProfile**](#getPlaybackProfile-instance_function)() as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

    获取当前媒体内容播放配置文件。

- [**next**](#next-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取下一个媒体内容对象。

- [**peekNext**](#peekNext-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取下一个媒体内容对象，但不递增迭代器。

- [**peekPrevious**](#peekPrevious-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取上一个媒体内容对象，但不递减迭代器。

- [**previous**](#previous-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    获取上一个媒体内容对象。

- [**repeatMode**](#repeatMode-instance_function)() as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

    获取当前重复状态。

- [**shuffling**](#shuffling-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定当前播放是否设置为随机播放。


## 实例方法详情

### **canSkip()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定当前曲目是否可以跳过。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果可以跳过当前曲目，则返回 `true`；否则返回 `false`。


起始版本：

API 级别 3.0.0

### **get()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取当前媒体内容对象。

返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



起始版本：

API 级别 3.0.0

### **getPlaybackProfile()** as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

获取当前媒体内容播放配置文件

返回：

- [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/)

起始版本：

API 级别 3.0.0

### **next()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取下一个媒体内容对象。

返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 一个表示下一曲目的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 如果发生错误，则为错误对象。它可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()。



起始版本：

API 级别 3.0.0

### **peekNext()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取下一个媒体内容对象，但不递增迭代器。

返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



起始版本：

API 级别 3.0.0

### **peekPrevious()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取上一个媒体内容对象，但不递减迭代器。

返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 表示当前轨迹的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象

- 若没有剩余轨迹则返回 `null`

- 发生错误时的错误对象。可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()



起始版本：

API 级别 3.0.0

### **previous()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

获取上一个媒体内容对象。

返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

- 一个表示下一曲目的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象。

- 没有剩余轨迹时为 `null`。

- 如果发生错误，则为错误对象。它可以是任何继承自 [Object](/connect-iq/api-docs/Toybox/Lang/Object/) 的对象，但必须实现 toString()。



起始版本：

API 级别 3.0.0

### **repeatMode()** as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

获取当前重复状态

返回：

- [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) —

    表示当前重复状态的 [REPEAT\_MODE\_\*](/connect-iq/api-docs/Toybox/Media/#REPEAT_MODE_OFF-const) 枚举值


起始版本：

API 级别 3.0.0

### **shuffling()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定当前播放是否设置为随机播放。

如果已开启随机播放，则返回 `true`；否则返回 `false`。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

起始版本：

API 级别 3.0.0
