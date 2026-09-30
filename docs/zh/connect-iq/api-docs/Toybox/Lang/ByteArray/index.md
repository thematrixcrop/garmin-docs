---
title: "类：Toybox.Lang.ByteArray"
---
# 类：Toybox.Lang.ByteArray

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)


[show all](#)

## 概述

ByteArray objects are fixed size, numerically indexed, single dimensional, and take Numbers with a value >= -128 and &lt;= 255 as members.

起始版本：

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将一个字节添加到 ByteArray 的末尾。

- [**addAll**](#addAll-instance_function)(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将一个 ByteArray 或字节的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 添加到 ByteArray 的末尾。

- [**decodeNumber**](#decodeNumber-instance_function)(format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) }) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    根据指定格式将数组的一部分解码为数字。

- [**encodeNumber**](#encodeNumber-instance_function)(value as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) }) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将数字编码到字节数组中。

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    测试一个 Object 实例是否等于另一个 Object 实例。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 ByteArray 的哈希代码值。

- [**indexOf**](#indexOf-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 ByteArray 中字节的索引。

- [**remove**](#remove-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    从 ByteArray 中移除一个字节。

- [**removeAll**](#removeAll-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    从 ByteArray 中移除字节。

- [**reverse**](#reverse-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    返回一个新的 ByteArray，其中包含源 ByteArray 中按逆序排列的元素。

- [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 ByteArray 的大小。

- [**slice**](#slice-instance_function)(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    获取包含现有 ByteArray 部分内容的新 ByteArray。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 ByteArray 转换为 String。


## 实例方法详情

### **add(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将一个字节添加到 ByteArray 的末尾。

添加字节时，ByteArray 大小会增加，新字节会插入到末尾。

参数：

- byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    要添加的 Number 或 Char 字节


返回：

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    由原始 ByteArray 和添加的字节组成的 ByteArray


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若提供 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 以外的类型则抛出

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    如果提供的 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 大于 255 或小于 -128，或者提供的 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 的代码点大于 127，则会抛出此异常。添加到 ByteArray 的负数在添加后会被解释为正的 8 位无符号等效值。


### **addAll(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将一个 ByteArray 或字节的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 添加到 ByteArray 的末尾。

添加字节数组时，ByteArray 会按所提供的 ByteArray 或 Array 的大小扩展，所有新元素都会从新索引开始插入。

参数：

- array — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    要添加到 ByteArray 的 ByteArray 或字节数组


返回：

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    由原始 ByteArray 和添加的字节组成的 ByteArray


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果提供的类型既不是 ByteArray，也不是字节的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，则会抛出此异常


### **decodeNumber(format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) })** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

根据指定格式将数组的一部分解码为数字

参数：

- format — ([Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module)) —

    一个表示要解码数字格式的 [Lang.NUMBER\_FORMAT\_\*](/connect-iq/api-docs/Toybox/Lang/#NUMBER_FORMAT_FLOAT-const) 值。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含转换选项的 Dictionary

- :offset — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        开始解码的数组中的从 0 开始的偏移量。默认值为 0。

- :endianness — ([Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module)) —

        一个表示要解码数字字节序的 [Lang.ENDIAN\_\*](/connect-iq/api-docs/Toybox/Lang/#Endian-module) 值。默认值为 [Lang.ENDIAN\_LITTLE](/connect-iq/api-docs/Toybox/Lang/#ENDIAN_LITTLE-const)。


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    转换后的 Number。


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    指示所提供的选项中有一个无效。


### **encodeNumber(value as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) })** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将数字编码到字节数组中

参数：

- value — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要编码的值

- format — ([Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module)) —

    一个表示要编码数字格式的 [Lang.NUMBER\_FORMAT\_\*](/connect-iq/api-docs/Toybox/Lang/#NUMBER_FORMAT_FLOAT-const) 值。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含转换选项的 Dictionary

- :offset — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        开始编码的数组中的从 0 开始的偏移量。默认值为 0。

- :endianness — ([Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module)) —

        一个表示要编码数字字节序的 [Lang.ENDIAN\_\*](/connect-iq/api-docs/Toybox/Lang/#Endian-module) 值。默认值为 [Lang.ENDIAN\_LITTLE](/connect-iq/api-docs/Toybox/Lang/#ENDIAN_LITTLE-const)。


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    指示所提供的选项中有一个无效。


### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

测试一个 Object 实例是否等于另一个 Object 实例。

参数：

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


示例：

```
var a = [ 1, 2 ]b;
var b = [ 1, 2 ]b;
var c = [ 1, 2 ];
a.equals(b); // returns true
a.equals(c); // returns false
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果对象相等，则为 `true`，否则为 `false`


起始版本：

API 级别 3.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 ByteArray 的哈希代码值。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    ByteArray 的哈希代码


起始版本：

API 级别 3.0.0

### **indexOf(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 ByteArray 中字节的索引。

参数：

- byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    要查找索引的字节


返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    ByteArray 中所提供字节第一次出现的索引。如果未找到该字节，则返回 -1。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若提供 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 以外的类型则抛出

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    如果提供的 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 大于 255 或小于 -128，或者提供的 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 的代码点大于 127，则抛出。如果在 ByteArray 中搜索时提供负数，则会将其解释为对应的正 8 位无符号值。


### **remove(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

从 ByteArray 中移除一个字节。

如果找到传入的字节，ByteArray 大小将减少一，且其后的元素将向前移动到下一个较低的索引。如果 ByteArray 中存在多个匹配项，则会移除索引最低的匹配字节，而不会移除其他匹配字节。

如果没有将字节作为参数提供，ByteArray 将保持不变，且 `remove()` 将返回 `false`。

参数：

- byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    要从 ByteArray 中移除的字节


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果找到该字节的实例，则返回 `true`；否则返回 `false`


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若提供 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 以外的类型则抛出

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    如果提供的 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 大于 255 或小于 -128，或者提供的 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 的代码点大于 127，则抛出。如果在 ByteArray 中搜索时提供负数，则会将其解释为对应的正 8 位无符号值。


### **removeAll(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

从 ByteArray 中移除字节。

对于找到的每个字节实例，ByteArray 大小减一，其后的元素向下一个索引移动。

如果没有将字节作为参数提供，ByteArray 将保持不变，且 `removeAll()` 将返回 `false`。

参数：

- byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    要从 ByteArray 中移除的字节


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果找到该字节的实例，则返回 `true`；否则返回 `false`。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若提供 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 或 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 以外的类型则抛出

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    如果提供的 [Number](/connect-iq/api-docs/Toybox/Lang/Number/) 大于 255 或小于 -128，或者提供的 [Char](/connect-iq/api-docs/Toybox/Lang/Char/) 的代码点大于 127，则抛出。如果在 ByteArray 中搜索时提供负数，则会将其解释为对应的正 8 位无符号值。


### **reverse()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

返回一个新的 ByteArray，其中包含源 ByteArray 中按逆序排列的元素。

返回：

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    一个元素顺序反转的新 ByteArray


起始版本：

API 级别 3.0.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 ByteArray 的大小。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    ByteArray 中的元素数。


起始版本：

API 级别 3.0.0

### **slice(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

获取包含现有 ByteArray 部分内容的新 ByteArray。

参数：

- startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    新 ByteArray 起始位置的从零开始索引。如果提供负的 `startIndex`，则会从 ByteArray 末尾开始偏移。如果 `startIndex` 为 `null`，切片将从 0 开始。超出范围的索引将截断到 ByteArray 的边界。

- endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    新 ByteArray 末尾的从零开始索引。包含直到 `endIndex` 之前的项目，但不包含 `endIndex`。如果提供负的 `endIndex`，则会从 ByteArray 末尾开始偏移。如果 `endIndex` 为 `null`，切片将在最后一个元素处结束。超出范围的索引会截断到 ByteArray 的边界。


返回：

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    一个包含从 `startIndex` 到 `endIndex` 元素的新 ByteArray


起始版本：

API 级别 3.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 ByteArray 转换为 String。

此方法不会将 ByteArray 的元素转换为 Strings，而是将整个 ByteArray 转换为 String。

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    ByteArray 的字符串表示。


起始版本：

API 级别 3.0.0
