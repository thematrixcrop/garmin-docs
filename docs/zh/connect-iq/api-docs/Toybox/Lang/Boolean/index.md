---
title: "类：Toybox.Lang.Boolean"
---
# 类：Toybox.Lang.Boolean

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)


[show all](#)

## 概述

Boolean 对象表示 true 或 false 值。

可以使用 `true` 或 `false` 关键字创建 Boolean。

示例：

```
var myBoolean = true;
```

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 self 的数值与其他数值进行比较。


## 实例方法详情

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 self 的数值与其他数值进行比较。如果 false 表示

```
  considered numerically zero and true is considered numerically 1.
```

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
