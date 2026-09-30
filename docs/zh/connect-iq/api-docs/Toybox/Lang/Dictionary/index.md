---
title: "Class: Toybox.Lang.Dictionary"
---
# 类：Toybox.Lang.Dictionary

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


[show all](#)

## 概述

Dictionary 是一种哈希表或关联数组，用于将键映射到值。

键和值都可以是任何 Object 类型，但不必全部属于同一类型。用作键的对象应重写 [hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function) 方法。由于哈希表的特性，Dictionary 元素的顺序不保证与插入顺序一致。

## 另见：

- [Hash Table](https://en.wikipedia.org/wiki/Hash_table)


Example:

```
using Toybox.System;
var myDict = {
    "One" => 1,
    "Two" => 2,
    "Three" => 3
};
System.println(myDict);         // {Two=>2, One=>1,Three=>3}
var keys = myDict.keys();       // [Two, One, Three]
var values = myDict.values();   // [2, 1, 3]

myDict.put("Four", 4);
System.println(myDict);         // {Two=>2, One=>1, Three=>3, Four=>4}
numItems = myDict.size();       // 4

myDict = {}                     // Empty the dictionary
System.println(myDict.isEmpty()); // true
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**get**](#get-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    根据给定的键从 Dictionary 中获取值。

- [**hasKey**](#hasKey-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定 Dictionary 中是否存在某个键。

- [**isEmpty**](#isEmpty-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定 Dictionary 是否为空。

- [**keys**](#keys-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>

    获取 Dictionary 中的键。

- [**put**](#put-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    使用给定的键将值放入 Dictionary。

- [**remove**](#remove-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    从 Dictionary 中删除项。

- [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Dictionary 中元素的数量。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Dictionary 转换为 String。

- [**values**](#values-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    获取 Dictionary 中的值。


## 实例方法详情

### **get(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

根据给定的键从 Dictionary 中获取值。

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要进行匹配检查的键。


Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The value for the specified key, or `null` if the key does not exist


Since:

API 级别 1.0.0

### **hasKey(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定 Dictionary 中是否存在某个键。

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要进行匹配检查的键。


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果键位于 Dictionary 中，则为 `true`，否则为 `false`


Since:

API 级别 1.0.0

### **isEmpty()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定 Dictionary 是否为空。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果 Dictionary 为空，则为 `true`，否则为 `false`


Since:

API 级别 1.0.0

### **keys()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>

获取 Dictionary 中的键。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    Dictionary 中键的数组


Since:

API 级别 1.0.0

### **put(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

使用给定的键将值放入 Dictionary。

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key for the value being inserted into the Dictionary

- value — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to insert into the Dictionary


Since:

API 级别 1.0.0

### **remove(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

从 Dictionary 中删除项。

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key of the value to be removed


Since:

API 级别 1.0.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Dictionary 中元素的数量。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of elements in the Dictionary


Since:

API 级别 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Dictionary 转换为 String。

由于哈希表的特性，将 Dictionary 转换为 String 时，元素顺序不保证与插入顺序一致。

Example:

```
using Toybox.System;
myDict = {
    "One" => 1,
    "Two" => 2,
    "Three" => 3
};
System.println(myDict.get("One"));        // prints 1

var myString = myDict.toString();
System.println(myString);                 // "{Two=>2, One=>1, Three=>}"
System.println(myString.get("One"));      // Symbol Not Found Error
System.println(myString.substring(0, 5)); // "{Two="
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    Dictionary 的字符串表示。


另见：

- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API 级别 1.0.1

### **values()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

获取 Dictionary 中的值。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    Dictionary 中值的数组


Since:

API 级别 1.0.0
