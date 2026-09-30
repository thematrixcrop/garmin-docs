---
title: "Module: Toybox.Math"
---
# 模块：Toybox.Math

## 概述

Math 模块提供 Apps 可使用的各种数学方法。

Example:

打印圆的周长。

```
using Toybox.System;
using Toybox.Math;
var r = 5;
var circumference = (2 * Math.PI * r);

System.println(circumference);
```

Example:

通过直接调用 Math.pow 打印正方形的面积。

```
using Toybox.System;
using Toybox.Math;

System.println(Math.pow(10, 2));
```

Example:

使用勾股定理和多个 Math API 方法求解 c。

```
using Toybox.System;
using Toybox.Math;
var a = 2;
var b = 3;
var c = Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)));

System.println(c);
```

Since:

API 级别 1.0.0

## 命名空间下的类

类：[Filter](/connect-iq/api-docs/Toybox/Math/Filter/), [FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/), [IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/)

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | E | 2.7182818284590452354 |
API 级别 1.0.0

|

E 的 32 位浮点表示

|
| 类型 | PI | 3.14159265358979323846 |

API 级别 1.0.0

|

PI 的 32 位浮点表示

|

## 实例方法摘要 [collapse](#)

- [**acos**](#acos-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的反余弦值。

- [**asin**](#asin-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的反正弦值。

- [**atan**](#atan-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的反正切值。

- [**atan2**](#atan2-instance_function)(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取 y/x 的弧度反正切值。

- [**ceil**](#ceil-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    计算一个值的上限整数。

- [**cos**](#cos-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的余弦值。

- [**floor**](#floor-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    计算一个值的下限整数。

- [**ln**](#ln-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取值的自然对数。

- [**log**](#log-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), base as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    使用指定底数获取值的对数。

- [**mean**](#mean-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    获取数据数组的算术平均值。

- [**mode**](#mode-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    获取数据数组中出现次数最多的值。

- [**pow**](#pow-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    计算 x 的 y 次幂。

- [**rand**](#rand-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    返回一个伪随机 Number。

- [**round**](#round-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    对值进行四舍五入。

- [**sin**](#sin-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的正弦值。

- [**sqrt**](#sqrt-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    计算一个值的平方根。

- [**srand**](#srand-instance_function)(seed as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    为随机数生成器设定种子。

- [**stdev**](#stdev-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    获取总体数据样本的标准差。

- [**tan**](#tan-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    获取角度的正切值。

- [**toDegrees**](#toDegrees-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    将角度从弧度转换为度。

- [**toRadians**](#toRadians-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    将角度从度转换为弧度。

- [**variance**](#variance-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    获取数据数组的样本方差。


## 实例方法详情

### **acos(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的反余弦值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    余弦值


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    弧度范围为 \[0..PI\]；如果无效则返回 `NaN`

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **asin(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的反正弦值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    正弦值


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    弧度范围为 \[-PI/2..PI/2\]；如果无效则返回 `NaN`

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **atan(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的反正切值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    正切值


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    弧度范围为 \[-PI/2..PI/2\]；如果无效则返回 `NaN`

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **atan2(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取 y/x 的弧度反正切值。

Parameters:

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    y 坐标的比例

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    x 坐标的比例


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    y/x 的主值弧正切，弧度范围为 \[-PI..PI\]；如果无效则返回 `NaN`

- 两个输入均为 Number 或 Float 时返回 Float

- 任一输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.3.0

### **ceil(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

计算一个值的上限整数。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    数值


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    大于或等于 x 的最小整数。返回类型与输入参数类型匹配


Since:

API 级别 1.3.0

### **cos(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的余弦值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x（弧度）的余弦值

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **floor(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

计算一个值的下限整数。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    数值


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    小于或等于 x 的最大整数。返回类型与输入参数类型匹配


Since:

API 级别 1.3.0

### **ln(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取值的自然对数

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    要计算其对数的值。


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的自然对数

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 2.3.0

### **log(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), base as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

使用指定底数获取值的对数

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    要计算其对数的值。

- base — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    基数值。


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的指定底数对数

- 两个输入均为 Number 或 Float 时返回 Float

- 任一输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **mean(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

获取数据数组的算术平均值。

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Long](/connect-iq/api-docs/Toybox/Lang/Long/) 或 [Double](/connect-iq/api-docs/Toybox/Lang/Double/) 值的数组


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    数据中各值的算术平均值


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的数据数组为空，则抛出。


### **mode(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>)** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

获取数据数组中出现次数最多的值。

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Objects](/connect-iq/api-docs/Toybox/Lang/Object/) 的数组


Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    数据中出现频率最高的值。


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果不存在出现频率最高的值，或传入的值数组为空，则抛出


### **pow(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

计算 x 的 y 次幂。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    Base

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    Exponent


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的 y 次方

- 两个输入均为 Number 或 Float 时返回 Float

- 任一输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **rand()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

返回一个伪随机 Number。使用 [srand()](/connect-iq/api-docs/Toybox/Math/#srand-instance_function) 函数为随机数生成器设定种子。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    非负随机数


Since:

API 级别 1.0.0

### **round(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

对值进行四舍五入。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    数值


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    最接近 x 的整数。大于或等于 .5 的小数值将向上舍入。返回类型与输入参数类型一致


Since:

API 级别 1.3.0

### **sin(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的正弦值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的正弦值，x 以弧度表示

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **sqrt(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

计算一个值的平方根。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    要求平方根的值


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的平方根；如果无效则为 `NaN`

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **srand(seed as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

为随机数生成器设定种子。

注意：

srand() 不返回任何值。

Parameters:

- seed — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    用于为 rand() 播种的值


Since:

API 级别 1.0.0

### **stdev(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

获取总体数据样本的标准差。

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Long](/connect-iq/api-docs/Toybox/Lang/Long/) 或 [Double](/connect-iq/api-docs/Toybox/Lang/Double/) 值且至少有两个元素的数组。

- xbar — ([Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    平均值（如果已知）。否则，传递 `null`，系统将计算数据的平均值。


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    样本的标准差


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的数据数组少于两个元素，则抛出。


### **tan(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

获取角度的正切值。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的正切值，x 以弧度表示。如果输入为 Toybox::Lang::Number 或 Toybox::Lang::Float，则为 Toybox::Lang::Float；如果输入为 Toybox::Lang::Long 或 Toybox::Lang::Double，则为 Toybox::Lang::Double


Since:

API 级别 1.0.0

### **toDegrees(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

将角度从弧度转换为度。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的角度，以度为单位

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.3.0

### **toRadians(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

将角度从度转换为弧度。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    以度为单位的角度


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x 的角度，以弧度为单位

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.3.0

### **variance(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

获取数据数组的样本方差。

返回经过贝塞尔校正的样本方差。

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Long](/connect-iq/api-docs/Toybox/Lang/Long/) 或 [Double](/connect-iq/api-docs/Toybox/Lang/Double/) 值且至少有两个元素的数组。

- xbar — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    平均值（如果已知）。否则，传递 `null`，系统将计算数据的平均值。


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    样本的方差


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供的数据数组少于两个元素，则抛出。
