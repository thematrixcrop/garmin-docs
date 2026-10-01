---
title: "类：Toybox.Lang.Char"
---
# 类：Toybox.Lang.Char

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)


[显示全部](#)

## 概述

Char 表示 Unicode 字符。

起始版本：

API 级别 1.3.0

## 实例方法摘要 [collapse](#)

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 self 的 Unicode 码点与其他某个数值进行比较。

- [**toLower**](#toLower-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    将 Char 转换为小写。

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 Char 转换为 Number。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 Char 转换为 String。

- [**toUpper**](#toUpper-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    将 Char 转换为大写。


## 实例方法详情

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 self 的 Unicode 码点与其他某个数值进行比较。

参数：

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    比较的右侧操作数。


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    如果 self 小于 other，则返回负值；如果两个对象等价，则返回零；如果 self 大于 other，则返回正值。


起始版本：

API 级别 5.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 other 不是 [Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)、[Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 类型则抛出。


### **toLower()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

将 Char 转换为小写。

返回：

- [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    一个新的小写 Char


起始版本：

API 级别 1.3.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 Char 转换为 Number。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    解释为 Number 的 Char 的 UTF-32 表示形式


起始版本：

API 级别 1.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 Char 转换为 String。

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    Char 的 String 表示形式


起始版本：

API 级别 1.3.0

### **toUpper()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

将 Char 转换为大写。

返回：

- [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    一个新的大写 Char


起始版本：

API 级别 1.3.0
