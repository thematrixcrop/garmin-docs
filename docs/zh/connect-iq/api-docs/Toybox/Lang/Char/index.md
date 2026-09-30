---
title: "Class: Toybox.Lang.Char"
---
# Class: Toybox.Lang.Char

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)


[show all](#)

## 概述

Chars are Unicode characters.

Since:

API 级别 1.3.0

## 实例方法摘要 [collapse](#)

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Compare the unicode code point self to some other numeric value.

- [**toLower**](#toLower-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    Convert a Char to lowercase.

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Char to a Number.

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Char to a String.

- [**toUpper**](#toUpper-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    Convert a Char to uppercase.


## 实例方法详情

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Compare the unicode code point self to some other numeric value.

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


### **toLower()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Convert a Char to lowercase.

Returns:

- [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    A new lowercase Char


Since:

API 级别 1.3.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Char to a Number.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The UTF-32 representation of the Char interpreted as a Number


Since:

API 级别 1.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Char to a String.

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the Char


Since:

API 级别 1.3.0

### **toUpper()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Convert a Char to uppercase.

Returns:

- [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    A new uppercase Char


Since:

API 级别 1.3.0
