---
title: "Class: Toybox.Lang.String"
---
# Class: Toybox.Lang.String

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)


[show all](#)

## 概述

String objects represent a sequence of characters, and provide methods for string operations.

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Lexicographically compare self to some other string.

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

Lexicographically compare self to some other string.

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

    Thrown if other is not of type [String](/connect-iq/api-docs/Toybox/Lang/String/).


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

    String to find


Example:

```
var myString = "Go bananas with Monkey C!";
var index = myString.find("bananas"); // index is 3
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The index of the start of the specified String, or `null` if not found


Since:

API 级别 1.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 String 的哈希代码值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The hash code for the String


Since:

API 级别 1.0.0

### **length()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 String 中的字符数。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The length of the String


Since:

API 级别 1.0.0

### **substring(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

创建一个新的 String，其中包含当前 String 从起始位置到结束位置的内容。

注意：

Starting with 3.3.2, passing null for `startIndex` sets it to the start of the string and passing null for `endIndex` sets it to the end of the string. Passing in a negative number for either `startIndex` or `endIndex` offsets it from the end of the string.

Parameters:

- startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Zero-based start index of the substring

- endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    End position of the substring, exclusive


Example:

```
var myString = "Go bananas with Monkey C!";
var mySubString = myString.substring(3, 10); // mySubString is "bananas"
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The substring of the String or `null` on error


Since:

API 级别 1.0.0

### **toCharArray()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)\>

将 String 转换为 Char 对象数组。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A Char Array representation of the String, where each character in the String is an element in the Array


Since:

API 级别 1.3.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**

将 String 转换为 Double。

If a String is in the numeric form of "123" or "123.45", convert it to a Double. Additional characters after the detected floating point value will be ignored. Strings that cannot be interpreted as a Double, or whose value exceeds that which can be represented in a Double, will result in a `null` value.

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

    A Double representation of the String


Since:

API 级别 3.1.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

将 String 转换为 Float。

If a String is in the numeric form of "123" or "123.45", convert it to a Float. Additional characters after the detected floating point value will be ignored. Strings that cannot be interpreted as a Float, or whose value exceeds that which can be represented in a Float, will result in a `null` value.

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

    A Float representation of the String


Since:

API 级别 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or **Null**

将 String 转换为 Long。

If a String is in the numeric form of "123", it can be converted to a Long. Additional characters after the detected number value will be ignored. Strings that cannot be interpreted as a Long, or whose value exceeds that which can be represented in a Long, will result in a `null` value.

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

    The base of the input string. If the value of `base` is zero, the string content is expected to have syntax similar to that of integer constants, which includes:

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

    A new lowercase String


Since:

API 级别 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

将 String 转换为 Number。

If a String is in the numeric form of "123", it can be converted to a Number. Additional characters after the detected number value will be ignored. Strings that cannot be interpreted as a Number, or whose value exceeds that which can be represented in a Number, will result in a `null` value.

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

    The base of the input string. If the value of `base` is zero, the string content expected to have syntax similar to that of integer constants, which includes:

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

    A String representation of String


Since:

API 级别 1.0.0

### **toUpper()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 String 转换为大写。

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A new uppercase String


Since:

API 级别 1.0.0

### **toUtf8Array()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

将 String 转换为 Number 对象数组。

Each Number represents one byte of the UTF-8 representation of the String.

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array representation of the String, where each byte in the string is an element in the Array


Since:

API 级别 1.3.0
