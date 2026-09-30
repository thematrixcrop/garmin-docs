---
title: "Class: Toybox.Lang.Number"
---
# Class: Toybox.Lang.Number

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)


[show all](#)

## 概述

Number represents a 32-bit signed integer.

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**abs**](#abs-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Number 的绝对值。

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 self 的数值与其他数值进行比较。

- [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    使用格式化字符串格式化 Number。

- [**toChar**](#toChar-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    将 Number 转换为 Char。

- [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    将 Number 转换为 Double。

- [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    将 Number 转换为 Float。

- [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    将 Number 转换为 Long。

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 Number 转换为 Number。


## 实例方法详情

### **abs()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Number 的绝对值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The absolute value of the Number


Since:

API 级别 1.0.0

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 self 的数值与其他数值进行比较。

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


### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

使用格式化字符串格式化 Number。

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

Example:

Formatting time with leading zeros

```
// Format the time to display "08:03:15"
using Toybox.Lang;
var hours = 8;
var minutes = 3;
var seconds = 15;
var myTime = Lang.format(
    "$1$:$2$:$3$",
    [hours.format("%02d"), minutes.format("%02d"), seconds.format("%02d")]
);
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    格式化后的字符串


另见：

- [Formatted output forum thread](https://forums.garmin.com/showthread.php?255191-Formatted-Output)


Since:

API 级别 1.0.0

### **toChar()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

将 Number 转换为 Char。

Returns:

- [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    A Char representation of the Number


Since:

API 级别 1.3.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

将 Number 转换为 Double。

Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    A Double representation of the Number


Since:

API 级别 1.0.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

将 Number 转换为 Float。

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    A Float representation of the Number


Since:

API 级别 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

将 Number 转换为 Long。

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    A Long representation of the Number


Since:

API 级别 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 Number 转换为 Number。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A Number representation of the Number


Since:

API 级别 1.0.0
