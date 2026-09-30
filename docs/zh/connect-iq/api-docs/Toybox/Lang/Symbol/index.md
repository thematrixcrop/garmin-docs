---
title: "类：Toybox.Lang.Symbol"
---
# 类：Toybox.Lang.Symbol

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)


[显示全部](#)

## 概述

Symbol 是一种轻量级常量标识符。

Monkey C 编译器遇到新 Symbol 时会分配一个新值。这使开发者可以使用 Symbol 对象作为键或常量值，而无需显式声明 `constant` 或 `enum`。Symbol 值在一次构建中保持不变，但其值可能在不同构建之间发生变化。

因此，不应将 Symbol 对象用于持久化数据。

示例：

```
var person = {:first_name=>"Bob", :last_name=>"Jones"};
```

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 Symbol 转换为 Number。此操作将返回一个包含该符号整数值的数字。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Symbol 转换为 String。此操作将在开发版本中返回符号名称对应的字符串。


## 实例方法详情

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 Symbol 转换为 Number

此项将返回一个包含该 symbol 整数值的数字。

返回：

- 数字 —

    Symbol 的数字表示


起始版本：

API 级别 2.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Symbol 转换为 String

在开发版本中，此项将返回 symbol 名称的字符串。由于 Monkey C 在发布版本中不包含运行时反射信息，返回的字符串将有所不同，并采用 "symbol (num)" 格式。在此格式中，"num" 是 symbol 的整数值。

返回：

- 字符串 —

    Symbol 的 String 表示形式


起始版本：

API 级别 1.0.0
