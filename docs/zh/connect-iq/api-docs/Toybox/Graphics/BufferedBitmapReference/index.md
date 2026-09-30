---
title: "类：Toybox.Graphics.BufferedBitmapReference"
---
# 类：Toybox.Graphics.BufferedBitmapReference

继承：

Toybox.Graphics.ResourceReference

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)

- [Toybox.Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)


[显示全部](#)

## 概述

引用从图形内存池而非应用本地内存分配的位图资源的 Object。

起始版本：

API 级别 4.0.0

## 实例方法摘要 [collapse](#)

- [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加载资源，然后获取所引用位图资源的高度。

- [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加载资源，然后获取所引用位图资源的宽度。


## 实例方法详情

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加载资源，然后获取所引用位图资源的高度

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图高度（像素）


起始版本：

API 级别 4.0.0

抛出：

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出


### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加载资源，然后获取所引用位图资源的宽度

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    位图宽度（像素）


起始版本：

API 级别 4.0.0

抛出：

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    若因空闲池不足而无法加载或恢复资源则抛出
