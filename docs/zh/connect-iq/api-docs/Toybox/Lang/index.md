---
title: "Module: Toybox.Lang"
---
# Module: Toybox.Lang

## 概述

The Lang module contains Monkey C language basic types, and provides a method for formatting Strings.

Since:

API 级别 1.0.0

## 命名空间下的类

类：[Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Char](/connect-iq/api-docs/Toybox/Lang/Char/), [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Exception](/connect-iq/api-docs/Toybox/Lang/Exception/), [Float](/connect-iq/api-docs/Toybox/Lang/Float/), [InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/), [InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/), [Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Method](/connect-iq/api-docs/Toybox/Lang/Method/), [Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Object](/connect-iq/api-docs/Toybox/Lang/Object/), [OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/), [ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [SerializationException](/connect-iq/api-docs/Toybox/Lang/SerializationException/), [StorageFullException](/connect-iq/api-docs/Toybox/Lang/StorageFullException/), [String](/connect-iq/api-docs/Toybox/Lang/String/), [Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/), [UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/), [ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/), [WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

## 常量摘要

### NumberFormat

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| NUMBER\_FORMAT\_FLOAT | 0 |
API 级别 3.1.0

|

IEEE 754 Single Precision Float Value (32-bits)

|
| NUMBER\_FORMAT\_SINT16 | 1 |

API 级别 3.1.0

|

Signed 16-bit Integer Value

|
| NUMBER\_FORMAT\_SINT32 | 2 |

API 级别 3.1.0

|

Signed 32-bit Integer Value

|
| NUMBER\_FORMAT\_SINT8 | 3 |

API 级别 3.1.0

|

Signed 8-bit Integer Value

|
| NUMBER\_FORMAT\_UINT16 | 4 |

API 级别 3.1.0

|

Unsigned 16-bit Integer Value

|
| NUMBER\_FORMAT\_UINT32 | 5 |

API 级别 3.1.0

|

Unsigned 32-bit Integer Value

|
| NUMBER\_FORMAT\_UINT8 | 6 |

API 级别 3.1.0

|

Unsigned 8-bit Integer Value

|

### Endian

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ENDIAN\_LITTLE | 0 |
API 级别 3.1.0

 |  |
| ENDIAN\_BIG | 1 |

API 级别 3.1.0

 |  |

## 类型定义摘要 [collapse](#)

- [**Comparable**](#Comparable-named_type) as interface {
    function compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
    }

    Comparable 定义对象与其他对象之间的排序关系。

- [**Comparator**](#Comparator-named_type) as interface {
    function compare(a as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), b as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
    }

    Comparator 定义对象之间的排序关系。

- [**Decimal**](#Decimal-named_type) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)
- [**Integer**](#Integer-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)
- [**Numeric**](#Numeric-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

## 实例方法摘要 [collapse](#)

- [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将给定参数替换到给定格式中相应位置，以创建格式化 String。


## 类型定义详情

### **Comparable** as interface {
function compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
}

Comparable 定义对象与其他对象之间的排序关系。

Comparator can be use to specify an ordering between an object and others.

Since:

API 级别 5.0.0

### **Comparator** as interface {
function compare(a as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), b as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
}

Comparator 定义对象之间的排序关系。

Comparator can be use to specify an ordering between objects.

Since:

API 级别 5.0.0

### **Decimal** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Since:

API 级别 1.0.0

### **Integer** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

Since:

API 级别 1.0.0

### **Numeric** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Since:

API 级别 1.0.0

## 实例方法详情

### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将给定参数替换到给定格式中相应位置，以创建格式化 String。

Parameters:

- format — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    A string using $1$, $2$, $3$... as substitution identifiers

- parameters — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The Array of content to substitute into the formatted String


Example:

```
// Set the 'myString' variable to "Your next meeting is at 2:30 on Sep 4 in room 6820."
using Toybox.Lang
var myFormat = "Your next meeting is at $1$:$2$ on $3$ $4$ in room $5$.";
var myParams = [2, 30, "Sep", 4, "6820"];
var myString = Lang.format(myFormat, myParams);
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A new String with the substituted content


Since:

API 级别 1.0.0
