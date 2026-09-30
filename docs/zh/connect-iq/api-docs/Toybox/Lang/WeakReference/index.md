---
title: "Class: Toybox.Lang.WeakReference"
---
# Class: Toybox.Lang.WeakReference

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


[show all](#)

## 概述

A weak reference is a loosely bound reference to another object. If all strong references have been freed, the `WeakReference.get()` method will return `null`. This allows the developer to avoid circular references.

## 另见：

- [Object.weak()](/connect-iq/api-docs/Toybox/Lang/Object/#weak-instance_function)

- [https://en.wikipedia.org/wiki/Weak\_reference](https://en.wikipedia.org/wiki/Weak_reference)


Since:

API 级别 1.2.0

## 实例方法摘要 [collapse](#)

- [**get**](#get-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    Get the Object referenced by the WeakReference.

- [**stillAlive**](#stillAlive-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定 WeakReference 是否仍然有效。


## 实例方法详情

### **get()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

Get the Object referenced by the WeakReference

Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The Object referenced, or `null` if the Object no longer exists


Since:

API 级别 1.2.0

### **stillAlive()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定 WeakReference 是否仍然有效。

注意：

I feel FANTASTIC and I am still alive. When you're dying I'll be still alive. And when you're dead I will be still alive.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果对象仍然存活，则为 `true`，否则为 `false`


另见：

- [http://knowyourmeme.com/memes/still-alive-portal-end-theme](http://knowyourmeme.com/memes/still-alive-portal-end-theme)


Since:

API 级别 1.2.0
