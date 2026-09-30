---
title: "类：Toybox.Lang.Float"
---
# 类：Toybox.Lang.Float

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)


[显示全部](#)

## 概述

浮点数是 32 位浮点值。

默认情况下，Monkey C 中的小数值为 Float。

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**abs**](#abs-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    获取 Float 的绝对值。

- [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 self 的数值与其他数值进行比较。

- [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    使用格式化字符串格式化 Float。

- [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    将 Float 转换为 Double。

- [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    将 Float 转换为 Float。

- [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    将 Float 转换为 Long。

- [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    将 Float 转换为 Number。


## 实例方法详情

### **abs()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

获取 Float 的绝对值。

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Float 的绝对值


起始版本：

API 级别 1.0.0

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 self 的数值与其他某个数值进行比较。NaN 是

```
  considered greater than all numbers and equal to itself.
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


### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

使用格式化字符串格式化 Float。

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

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    格式化后的字符串


起始版本：

API 级别 1.0.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

将 Float 转换为 Double。

返回：

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    Float 的 Double 表示


起始版本：

API 级别 1.0.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

将 Float 转换为 Float。

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Float 的 Float 表示形式


起始版本：

API 级别 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

将 Float 转换为 Long。

返回：

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    Float 的 Long 表示形式


起始版本：

API 级别 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

将 Float 转换为 Number。

转换时，Float 值将向 0 舍入。例如，6.8 变为 6，-5.7 变为 -5。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Float 的 Number 表示形式


起始版本：

API 级别 1.0.0
