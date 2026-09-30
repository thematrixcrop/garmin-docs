---
title: "Class: Toybox.Lang.Double"
---
# Class: Toybox.Lang.Double

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)


[show all](#)

## 概述

Double represents a 64-bit floating point number.

To use a double in Monkey C add 'd' to the end of the number.

Example:

```
var e = 2.718281828459045d;
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**abs**](#abs-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Get the absolute value of a Double.

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 self 的数值与其他数值进行比较。

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    测试一个 Object 实例是否等于另一个 Object 实例。

- [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Format a Double using a formatting String.

- [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Convert a Double to a Double.

- [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    Convert a Double to a Float.

- [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    Convert a Double to a Long.

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Double to a Number.

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Double to a String.


## 实例方法详情

### **abs()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Get the absolute value of a Double.

Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The absolute value of the Double


Since:

API 级别 1.0.0

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Compare the numeric value of self to some other numeric value. NaN is

```
  considered greater than all numbers and equal to itself.
```

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

    若 other 不是 [Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)、[Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 类型则抛出。


### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

测试一个 Object 实例是否等于另一个 Object 实例。

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    对象相等时返回 `true`，否则返回 `false`


Since:

API 级别 1.3.0

### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Format a Double using a formatting String.

格式字符串类似于 C stdio 库中 `printf` 可用的格式字符串，但不支持 `length` 选项：

```
    "%[flags][width][.precision]specifier"
```

specifiers

- d 或 i - 有符号十进制整数

- e - 使用 'e' 字符的科学计数法（尾数/指数）

- E - 使用 'E' 字符的科学计数法（尾数/指数）

- f - 十进制浮点数

- o - 有符号八进制

- u - 无符号十进制整数

- x - 无符号十六进制整数

- X - 无符号十六进制整数（大写字母）


flags

- \+ - 在结果前添加加号或减号（'+' 或 '-'），包括正数。默认情况下，仅在负数前添加 '-' 号。

- 0 - 在指定了填充宽度时，用零（0）而不是空格左填充数字（参见 width 子说明符）。


width

仅支持数字（不支持 \*）

.precision

仅支持数字（不支持 \*）

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    格式化后的字符串


Since:

API 级别 1.0.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Convert a Double to a Double.

Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    A Double representation of the Double


Since:

API 级别 1.0.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

Convert a Double to a Float.

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    A Float representation of the Double


Since:

API 级别 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

Convert a Double to a Long.

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    A Long representation of the Double


Since:

API 级别 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Double to a Number.

The Double value will be rounded toward 0 upon conversion. For example, 6.8 becomes 6 and -5.7 becomes -5.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A Number representation of the Double


Since:

API 级别 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Double to a String.

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the Double


Since:

API 级别 1.0.0
