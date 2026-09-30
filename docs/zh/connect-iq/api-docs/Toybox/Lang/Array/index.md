---
title: "Class: Toybox.Lang.Array"
---
# 类：Toybox.Lang.Array

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)


[show all](#)

## 概述

Array 对象大小固定（不是链表），按数字索引，是一维的，并且可以将任意 Object（包括 Array）作为成员。Array 的键必须是 Number，但 Array 的值可以是任何类型的 Object。

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    将一个对象添加到 Array 的末尾。

- [**addAll**](#addAll-instance_function)(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    将一个对象数组添加到 Array 的末尾。

- [**indexOf**](#indexOf-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Array 中 Object 的索引。

- [**remove**](#remove-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    从 Array 中移除一个 Object。

- [**removeAll**](#removeAll-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    从 Array 中移除 Object。

- [**reverse**](#reverse-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    返回一个新的 Array，其中包含源 Array 中按逆序排列的元素。

- [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Array 的大小。

- [**slice**](#slice-instance_function)(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    获取包含现有 Array 部分内容的新 Array。

- [**sort**](#sort-instance_function)(comparator as [Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type) or **Null**) as **Void**

    对 Array 排序。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Array 转换为 String。


## 实例方法详情

### **add(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

将一个对象添加到 Array 的末尾。

添加 Object 时，Array 大小会增加 1，新 Object 会插入到新索引处。

Parameters:

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要添加到 Array 的 Object


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    self


Since:

API 级别 1.3.0

### **addAll(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

将一个对象数组添加到 Array 的末尾。

添加 Object 的 Array 时，Array 会按所提供 Array 的大小扩展，所有新元素都会从新索引开始插入。

Parameters:

- array — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    要添加到数组中的对象数组


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    self


Since:

API 级别 1.3.0

### **indexOf(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Array 中 Object 的索引。

Parameters:

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要查找其索引的 Object


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Array 中所提供 Object 第一次出现的索引。如果未找到该 Object，则返回 -1。


Since:

API 级别 1.3.0

### **remove(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

从 Array 中移除一个 Object。

如果找到传入的 Object，Array 大小将减少一，且其后的元素将向前移动到下一个较低的索引。如果 Array 中存在多个匹配项，则会移除索引最低的匹配 Object，而不会移除其他匹配 Object。

Parameters:

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要从 Array 中移除的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果找到对象的实例，则为 `true`，否则为 `false`


Since:

API 级别 1.3.0

### **removeAll(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

从 Array 中移除 Object。

对于找到的每个 Object 实例，Array 大小减一，其后的元素向下一个索引移动。

Parameters:

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要从 Array 中移除的 Object


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果找到 Object 的实例，则为 `true`，否则为 `false`


Since:

API 级别 1.3.0

### **reverse()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

返回一个新的 Array，其中包含源 Array 中按逆序排列的元素。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    一个元素顺序反转的新 Array


Since:

API 级别 1.3.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Array 的大小。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Array 中的元素数


Since:

API 级别 1.0.0

### **slice(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

获取包含现有 Array 部分内容的新 Array。

Parameters:

- startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    新 Array 起始位置的从零开始索引。如果提供负的 `startIndex`，则会从 Array 末尾开始偏移。如果 `startIndex` 为 `null`，切片将从 0 开始。超出范围的索引将截断到数组边界。

- endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    新 Array 末尾的从零开始索引。包含直到 `endIndex` 之前的项目，但不包含 `endIndex`。如果提供负的 `endIndex`，则会从 Array 末尾开始偏移。如果 `endIndex` 为 `null`，切片将在最后一个元素处结束。超出范围的索引将截断到 Array 的边界。


Example:

```
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get the first five elements of the Array
var newArray1 = myArray.slice(0, 5);     // [1, 2, 3, 4, 5]

// Get the last element of the Array
var newArray2 = myArray.slice(-1, null); // [10]

// Slice off the first and last elements from the Array
var myArray3 = myArray.slice(1, -1);     // [2, 3, 4, 5, 6, 7, 8, 9]
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    一个包含从 `startIndex` 到 `endIndex` 元素的新 Array


Since:

API 级别 1.3.0

### **sort(comparator as [Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type) or **Null**)** as **Void**

对 Array 排序

Parameters:

- comparator — ([Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type), null) —

    可用于指定对象相对于其他对象排序的对象。如果 `comparator` 为 `null`，则会使用默认比较器。默认比较器将按升序对值排序，并且能够比较 Numeric、Boolean 和 Char 值或 String 值。


Example:

```
var myArray = [2, 1, 3.0f, 0.0d];
myArray.sort(null); // [0.0d, 1, 2, 3.0f]

var myStrings = ["bb", "a", "aa", "b"];
myStrings.sort(null); // ["a", "aa", "b", "bb"]

var myProblem = ["1", 1];
myProblem.sort(null); // UnexpectedTypeException
```

Since:

API 级别 5.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果使用默认比较器比较无法直接比较的值，则抛出。


### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Array 转换为 String。

此方法不会将 Array 的元素转换为 Strings，而是将整个 Array 转换为 String。

Example:

```
using Toybox.System;
var myArray = [1, 2, 3, 4, 5];
System.println(myArray[1]);                // prints 1

var myString = myArray.toString();
System.println(myString);                  // "[1, 2, 3, 4, 5]"
System.println(myString[1]);               // UnexpectedTypeException
System.println(myString.substring(0, 5));  // "[1, 2"
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    Array 的字符串表示。


Since:

API 级别 1.0.0
