---
title: "Class: Toybox.Lang.WeakReference"
---
# 类：Toybox.Lang.WeakReference

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


[show all](#)

## 概述

弱引用是与另一个对象松散绑定的引用。如果所有强引用都已释放，`WeakReference.get()` 方法将返回 `null`。这使开发者能够避免循环引用。

## 另见：

- [Object.weak()](/connect-iq/api-docs/Toybox/Lang/Object/#weak-instance_function)

- [https://en.wikipedia.org/wiki/Weak\_reference](https://en.wikipedia.org/wiki/Weak_reference)


Since:

API 级别 1.2.0

## 实例方法摘要 [collapse](#)

- [**get**](#get-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    获取 WeakReference 引用的 Object。

- [**stillAlive**](#stillAlive-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定 WeakReference 是否仍然有效。


## 实例方法详情

### **get()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

获取 WeakReference 引用的 Object

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    所引用的 Object；如果 Object 不再存在，则为 `null`


Since:

API 级别 1.2.0

### **stillAlive()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定 WeakReference 是否仍然有效。

注意：

我感觉棒极了，而且我还活着。当你快死时，我还会活着。当你死了，我仍然会活着。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果对象仍然存活，则为 `true`，否则为 `false`


另见：

- [http://knowyourmeme.com/memes/still-alive-portal-end-theme](http://knowyourmeme.com/memes/still-alive-portal-end-theme)


Since:

API 级别 1.2.0
