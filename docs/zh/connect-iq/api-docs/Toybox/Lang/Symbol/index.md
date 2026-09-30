---
title: "Class: Toybox.Lang.Symbol"
---
# 类：Toybox.Lang.Symbol

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)


[show all](#)

## 概述

Symbol 是一种轻量级常量标识符。

The Monkey C compiler will assign a new value when it encounters a new Symbol. This allows a developer to use Symbol objects as keys or constant values without explicitly declaring a `constant` or `enum`. While Symbol values are constant for a build, their values may change across builds.

因此，不应将 Symbol 对象用于持久化数据。

Example:

```
var person = {:first_name=>"Bob", :last_name=>"Jones"};
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 Symbol 转换为 Number。此操作将返回一个包含该符号整数值的数字。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Symbol 转换为 String。此操作将在开发版本中返回符号名称对应的字符串。


## 实例方法详情

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 Symbol 转换为 Number

This will return a number containing the integer value of the symbol.

Returns:

- 数字 —

    The number representation of the Symbol


Since:

API 级别 2.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Symbol 转换为 String

This will return the string for the name of the symbol in development builds. Because Monkey C does not contain runtime reflection information in release builds, the returned string will be different and will follow the format "symbol (num)". In this format, "num" is the integer value of the symbol.

Returns:

- 字符串 —

    The String representation of the Symbol


Since:

API 级别 1.0.0
