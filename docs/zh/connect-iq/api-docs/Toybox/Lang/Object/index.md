---
title: "Class: Toybox.Lang.Object"
---
# 类：Toybox.Lang.Object

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)


[show all](#)

## 概述

Object 是 Monkey C 类层次结构的根对象。

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    测试一个 Object 实例是否等于另一个 Object 实例。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Object 的哈希代码值。

- [**method**](#method-instance_function)(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

    获取指向 Method 的回调。

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

- 计算得到的哈希码在 Object 的整个生命周期内保持不变

- 如果两个 Object 相等，则它们的哈希代码也相等


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Object 的哈希代码


另见：

- [Hash Function](https://en.wikipedia.org/wiki/Hash_function)

- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API 级别 1.0.0

### **method(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

获取指向 Method 的回调。

This is typically used when supplying a callback function to another method.

Parameters:

- methodName — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The Symbol of the specified Method


Returns:

- [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) —

    指定 Symbol 对应的 Method 对象


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

    Object 的字符串表示。


Since:

API 级别 1.0.0

### **weak()** as [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

获取指向 Object 的 WeakReference。

弱引用是一个持有对象引用但不会增加引用计数的对象。这意味着对象引用可能会被销毁，因此需要处理这种情况。

注意：

不可变类型（Number、Float、Long、Double、Boolean、String）将返回其值。其他 Object 类型将返回 WeakReference 对象。

Returns:

- [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/) —

    对 Object 的 WeakReference


另见：

- [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


Since:

API 级别 1.2.0
