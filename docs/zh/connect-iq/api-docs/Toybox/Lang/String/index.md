---
title: "Class: Toybox.Lang.String"
---
# 类：Toybox.Lang.String

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)


[show all](#)

## 概述

String 对象表示字符序列，并提供字符串操作方法。

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    按字典顺序将自身与其他字符串进行比较。

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    测试一个 Object 实例是否等于另一个 Object 实例。

- [**find**](#find-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    确定指定的 String 是否存在于某个 String 中。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 String 的哈希代码值。

- [**length**](#length-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 String 中的字符数。

- [**substring**](#substring-instance_function)(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    创建一个新的 String，其中包含当前 String 从起始位置到结束位置的内容。

- [**toCharArray**](#toCharArray-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>

    将 String 转换为 Char 对象数组。

- [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**

    将 String 转换为 Double。

- [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    将 String 转换为 Float。

- [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or **Null**

    将 String 转换为 Long。

- [**toLongWithBase**](#toLongWithBase-instance_function)(base as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or **Null**

    使用指定进制将 String 转换为 Long。

- [**toLower**](#toLower-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 String 转换为小写。

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    将 String 转换为 Number。

- [**toNumberWithBase**](#toNumberWithBase-instance_function)(base as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    使用指定进制将 String 转换为 Number。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 String 转换为 String。

- [**toUpper**](#toUpper-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 String 转换为大写。

- [**toUtf8Array**](#toUtf8Array-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    将 String 转换为 Number 对象数组。


## 实例方法详情

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

按字典顺序将自身与其他字符串进行比较。

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    比较的右侧操作数。


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    如果 self 小于 other，则返回负值；如果两个对象等价，则返回零；如果 self 大于 other，则返回正值。


Since:

API 级别 5.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 other 不是 [String](/connect-iq/api-docs/Toybox/Lang/String/) 类型，则抛出。


### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

测试一个 Object 实例是否等于另一个 Object 实例。

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    对象相等时返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **find(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

确定指定的 String 是否存在于某个 String 中。

Parameters:

- string — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要查找的字符串


Example:

```
var myString = "Go bananas with Monkey C!";
var index = myString.find("bananas"); // index is 3
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    指定 String 的起始索引；如果未找到，则为 `null`


Since:

API 级别 1.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 String 的哈希代码值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    String 的哈希代码


Since:

API 级别 1.0.0

### **length()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 String 中的字符数。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    String 的长度


Since:

API 级别 1.0.0

### **substring(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

创建一个新的 String，其中包含当前 String 从起始位置到结束位置的内容。

注意：

从 3.3.2 开始，为 `startIndex` 传入 null 会将其设置为字符串开头，为 `endIndex` 传入 null 会将其设置为字符串末尾。为 `startIndex` 或 `endIndex` 传入负数会使其从字符串末尾开始偏移。

Parameters:

- startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    子字符串的从零开始的起始索引

- endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    子字符串的结束位置，不包含该位置


Example:

```
var myString = "Go bananas with Monkey C!";
var mySubString = myString.substring(3, 10); // mySubString is "bananas"
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    String 的子字符串；出错时为 `null`


Since:

API 级别 1.0.0

### **toCharArray()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>

将 String 转换为 Char 对象数组。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    String 的 Char 数组表示，其中 String 中的每个字符都是 Array 的一个元素


Since:

API 级别 1.3.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**

将 String 转换为 Double。

如果 String 采用 "123" 或 "123.45" 的数字形式，则将其转换为 Double。检测到的浮点值之后的其他字符将被忽略。无法解释为 Double 的字符串，或其值超出 Double 可表示范围的字符串，将产生 `null` 值。

Example:

```
var myString;
var myNum;

myString = "123";
myNum = myString.toDouble(); // myNum is 123.000000

myString = "3.14"
myNum = myString.toDouble(); // myNum is 3.140000

myString = "192.168.0.1"
myNum = myString.toDouble(); // myNum is 192.167999

myString = "Hello There!"
myNum = myString.toDouble(); // null
```

Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    String 的 Double 表示


Since:

API 级别 3.1.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

将 String 转换为 Float。

如果 String 采用 "123" 或 "123.45" 的数字形式，则将其转换为 Float。检测到的浮点值之后的其他字符将被忽略。无法解释为 Float 的字符串，或其值超出 Float 可表示范围的字符串，将产生 `null` 值。

Example:

```
var myString;
var myNum;

myString = "123";
myNum = myString.toFloat(); // myNum is 123.000000

myString = "3.14"
myNum = myString.toFloat(); // myNum is 3.140000

myString = "192.168.0.1"
myNum = myString.toFloat(); // myNum is 192.167999

myString = "Hello There!"
myNum = myString.toFloat(); // null
```

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    String 的 Float 表示形式


Since:

API 级别 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or **Null**

将 String 转换为 Long。

如果 String 采用 "123" 的数字形式，则可以将其转换为 Long。检测到的数字值之后的其他字符将被忽略。无法解释为 Long 的字符串，或其值超出 Long 可表示范围的字符串，将产生 `null` 值。

Example:

```
var myString;
var myNum;

myString = "123";
myNum = myString.toLong(); // myNum is 123

myString = "3.14"
myNum = myString.toLong(); // myNum is 3

myString = "1200 E. 151st. Street"
myNum = myString.toLong(); // myNum is 1200

myString = "Hello There!"
myNum = myString.toLong(); // null
```

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    String 的 Long 表示形式


Since:

API 级别 3.1.0

### **toLongWithBase(base as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or **Null**

使用指定进制将 String 转换为 Long。

Parameters:

- base — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    输入字符串的基数。如果 `base` 的值为零，则字符串内容应具有类似整数常量的语法，其中包括：

- 可选的符号字符（'+' 或 '-'）

- 八进制或十六进制数的可选前缀（'0' 或 '0x'）

- 指定前缀进制中的一串数字；如果未指定进制，则为十进制。如果进制值介于 2 和 36 之间，则该数字的格式必须是表示指定基数的有效数字和/或字母（从 '0' 到 'z'，或在基数为 36 时使用 'Z'）。



Example:

```
var myString;
var myNum;

myString = "10";
myNum = myString.toLongWithBase(2);    // myNum is 2

myString = "FF";
myNum = myString.toLongWithBase(16);   // myNum is 255
myNum = myString.toLongWithBase(0x10); // myNum is 255
```

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    String 的 Long 表示形式


Since:

API 级别 3.1.0

### **toLower()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 String 转换为小写。

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    一个新的小写 String


Since:

API 级别 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

将 String 转换为 Number。

如果 String 采用 "123" 的数字形式，则可以将其转换为 Number。检测到的数字值之后的其他字符将被忽略。无法解释为 Number 的字符串，或其值超出 Number 可表示范围的字符串，将产生 `null` 值。

Example:

```
var myString;
var myNum;

myString = "123";
myNum = myString.toNumber(); // myNum is 123

myString = "3.14"
myNum = myString.toNumber(); // myNum is 3

myString = "1200 E. 151st. Street"
myNum = myString.toNumber(); // myNum is 1200

myString = "Hello There!"
myNum = myString.toNumber(); // null
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    字符串的数字表示


Since:

API 级别 1.0.0

### **toNumberWithBase(base as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

使用指定进制将 String 转换为 Number。

Parameters:

- base — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    输入字符串的基数。如果 `base` 的值为零，则字符串内容应具有类似整数常量的语法，其中包括：

- 可选的符号字符（'+' 或 '-'）

- 八进制或十六进制数的可选前缀（'0' 或 '0x'）

- 指定前缀进制中的一串数字；如果未指定进制，则为十进制。如果进制值介于 2 和 36 之间，则该数字的格式必须是表示指定基数的有效数字和/或字母（从 '0' 到 'z'，或在基数为 36 时使用 'Z'）。



Example:

```
var myString;
var myNum;

myString = "10";
myNum = myString.toNumberWithBase(2);    // myNum is 2

myString = "FF";
myNum = myString.toNumberWithBase(16);   // myNum is 255
myNum = myString.toNumberWithBase(0x10); // myNum is 255
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    字符串的数字表示


Since:

API 级别 1.4.1

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 String 转换为 String。

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    String 的字符串表示。


Since:

API 级别 1.0.0

### **toUpper()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 String 转换为大写。

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    一个新的大写 String


Since:

API 级别 1.0.0

### **toUtf8Array()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

将 String 转换为 Number 对象数组。

每个 Number 表示 String 的 UTF-8 表示形式中的一个字节。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    String 的 Array 表示，其中字符串中的每个字节都是 Array 中的一个元素


Since:

API 级别 1.3.0
