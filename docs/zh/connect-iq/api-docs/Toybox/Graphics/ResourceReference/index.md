---
title: "Class: Toybox.Graphics.ResourceReference"
---
# 类：Toybox.Graphics.ResourceReference

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)


[show all](#)

## 概述

Object 表示从图形内存池而非应用本地内存分配的资源的引用。当所有 `strong` 引用都被销毁时，底层资源对象可能会暂时从系统内存池中清除。仅在调用 [ResourceReference::get()](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/#get-instance_function) 方法时执行内存分配。

Since:

API 级别 4.0.0

## 直接已知子类

[Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/), [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

## 类型定义摘要 [collapse](#)

- [**Options**](#Options-named_type) as { :resource as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bufferedBitmap as { :bitmapResource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) } }

## 实例方法摘要 [collapse](#)

- [**get**](#get-instance_function)() as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or **Null**

    获取 ResourceReference 引用的底层资源对象，此操作会触发从系统内存池分配资源，或返回内存池中已有的资源。


## 类型定义详情

### **Options** as { :resource as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bufferedBitmap as { :bitmapResource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) } }

Since:

API 级别 4.0.0

## 实例方法详情

### **get()** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or **Null**

获取 ResourceReference 引用的底层资源对象，此操作会触发从系统内存池分配资源，或返回内存池中已有的资源。

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    引用的资源对象；如果失败则为 `null`。


Since:

API 级别 4.0.0

Throws:

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出
