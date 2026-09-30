---
title: "Class: Toybox.Lang.Object"
---
# Class: Toybox.Lang.Object

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)


[show all](#)

## 概述

Object is the root object for the Monkey C class hierarchy.

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    测试一个 Object 实例是否等于另一个 Object 实例。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Object 的哈希代码值。

- [**method**](#method-instance_function)(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

    Retrieve a callback to a Method.

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Object 转换为 String。

- [**weak**](#weak-instance_function)() as [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

    获取指向 Object 的 WeakReference。


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

测试一个 Object 实例是否等于另一个 Object 实例。

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Example:

```
var a = 1;
var b = 1;
var c = 1.0;
a.equals(b); // returns true
a.equals(c); // returns false
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果对象相等，则为 `true`，否则为 `false`


Since:

API 级别 1.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Object 的哈希代码值。

This computes a 32-bit Number that is typically used as an index when placing Objects into a Dictionary. Hash code values have the following characteristics:

- The computed hash code is constant for the lifetime of an Object

- If two Objects are equal, their hash codes will be equal


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A hash code for the Object


另见：

- [Hash Function](https://en.wikipedia.org/wiki/Hash_function)

- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API 级别 1.0.0

### **method(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

Retrieve a callback to a Method.

This is typically used when supplying a callback function to another method.

Parameters:

- methodName — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The Symbol of the specified Method


Returns:

- [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) —

    A Method object for the specified Symbol


另见：

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API 级别 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Object 转换为 String。

Example:

```
var myNumber = 3219;
var myString = myNumber.toString();
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the Object


Since:

API 级别 1.0.0

### **weak()** as [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

获取指向 Object 的 WeakReference。

A weak reference is an object that keeps a reference to an object but does not increment the reference count. This means the object reference can be destroyed, so is a case that should be handled.

注意：

Immutable types (Number, Float, Long, Double, Boolean, String) will return their values. Other Object types will return a WeakReference object.

Returns:

- [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/) —

    A WeakReference to the Object


另见：

- [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


Since:

API 级别 1.2.0
