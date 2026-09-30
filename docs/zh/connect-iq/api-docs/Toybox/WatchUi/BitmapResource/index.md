---
title: "Class: Toybox.WatchUi.BitmapResource"
---
# 类：Toybox.WatchUi.BitmapResource

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)


[show all](#)

## 概述

位图资源的表示形式。

BitmapResource 对象由 [loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) 方法返回。

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 实例方法摘要 [collapse](#)

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取位图资源的高度。

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取位图资源的宽度。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    以 String 形式获取位图资源信息。


## 实例方法详情

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取位图资源的高度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


Since:

API 级别 1.0.0

### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取位图资源的宽度。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


Since:

API 级别 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

以 String 形式获取位图资源信息。

info String 的格式为 "Bitmap X x Y"，其中 "X" 是位图宽度，"Y" 是位图高度。

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    BitmapResource 对象的字符串表示。


Since:

API 级别 1.0.0
