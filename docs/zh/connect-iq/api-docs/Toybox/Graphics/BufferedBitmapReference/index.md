---
title: "Class: Toybox.Graphics.BufferedBitmapReference"
---
# Class: Toybox.Graphics.BufferedBitmapReference

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

    Load the resource, then get the height of a bitmap resource referenced.

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Load the resource, then get the width of a bitmap resource referenced.


## 实例方法详情

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Load the resource, then get the height of a bitmap resource referenced

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


Since:

API 级别 4.0.0

Throws:

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出


### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Load the resource, then get the width of a bitmap resource referenced

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


Since:

API 级别 4.0.0

Throws:

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出
