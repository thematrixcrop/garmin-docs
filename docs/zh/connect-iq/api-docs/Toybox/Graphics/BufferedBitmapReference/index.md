---
title: "Class: Toybox.Graphics.BufferedBitmapReference"
---
# 类：Toybox.Graphics.BufferedBitmapReference

Inherits:

Toybox.Graphics.ResourceReference

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)

- [Toybox.Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)


[show all](#)

## 概述

Object that references the bitmap resource allocated from the graphics memory pool rather than form the app's local memory.

Since:

API 级别 4.0.0

## 实例方法摘要 [collapse](#)

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加载资源，然后获取所引用位图资源的高度。

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加载资源，然后获取所引用位图资源的宽度。


## 实例方法详情

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加载资源，然后获取所引用位图资源的高度

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


Since:

API 级别 4.0.0

Throws:

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出


### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加载资源，然后获取所引用位图资源的宽度

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


Since:

API 级别 4.0.0

Throws:

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出
