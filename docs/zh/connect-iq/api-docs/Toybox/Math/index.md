---
title: "Module: Toybox.Math"
---
# Module: Toybox.Math

## 概述

The Math Module provides various math methods available for use by Apps.

Example:

Prints the circumference of a circle.

```
using Toybox.System;
using Toybox.Math;
var r = 5;
var circumference = (2 * Math.PI * r);

System.println(circumference);
```

Example:

Prints the area of a square with Math.pow via direct call.

```
using Toybox.System;
using Toybox.Math;

System.println(Math.pow(10, 2));
```

Example:

Solves for c using the Pythagorean Theorem and multiple Math API methods.

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

32-bit floating point representation of E

|
| 类型 | PI | 3.14159265358979323846 |

API 级别 1.0.0

|

32-bit floating point representation of PI

|

## 实例方法摘要 [collapse](#)

- [**acos**](#acos-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the arc cosine of an angle.

- [**asin**](#asin-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the arc sine of an angle.

- [**atan**](#atan-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the arc tangent of an angle.

- [**atan2**](#atan2-instance_function)(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the arc tangent of y/x in radians.

- [**ceil**](#ceil-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    计算一个值的上限整数。

- [**cos**](#cos-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the cosine of an angle.

- [**floor**](#floor-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    计算一个值的下限整数。

- [**ln**](#ln-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get natural logarithm of a value.

- [**log**](#log-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), base as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get logarithm of a value using the specified base.

- [**mean**](#mean-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Get the arithmetic mean (average) of an array of data.

- [**mode**](#mode-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    Get the most common value found in an array of data.

- [**pow**](#pow-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    计算 x 的 y 次幂。

- [**rand**](#rand-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Returns a pseudo-random Number.

- [**round**](#round-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Round a value.

- [**sin**](#sin-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the sine of an angle.

- [**sqrt**](#sqrt-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    计算一个值的平方根。

- [**srand**](#srand-instance_function)(seed as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Seed the random number generator.

- [**stdev**](#stdev-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Get the standard deviation of a sample of population data.

- [**tan**](#tan-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Get the tangent of an angle.

- [**toDegrees**](#toDegrees-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Convert an angle from radians to degrees.

- [**toRadians**](#toRadians-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

    Convert an angle from degrees to radians.

- [**variance**](#variance-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**) as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Get the sample variance of an array of data.


## 实例方法详情

### **acos(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the arc cosine of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The cosine value


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The interval \[0..PI\] in radians, or `NaN` if invalid

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **asin(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the arc sine of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The sine value


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The interval \[-PI/2..PI/2\] in radians, or `NaN` if invalid

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **atan(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the arc tangent of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The tangent value


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The interval \[-PI/2..PI/2\] in radians, or `NaN` if invalid

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **atan2(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the arc tangent of y/x in radians.

Parameters:

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The proportion of the y coordinate

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The proportion of the x coordinate


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The principal arc tangent of y/x, in the interval \[-PI..PI\] radians, or `NaN` if invalid

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

    The smallest integer greater than or equal to x Return type matches the input parameter type


Since:

API 级别 1.3.0

### **cos(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the cosine of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The cosine value of x in radians

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

    The largest integer less than or equal to x Return type matches the input parameter type


Since:

API 级别 1.3.0

### **ln(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get natural logarithm of a value

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The value for which to get the logarithm


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    natural logarithm of x

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 2.3.0

### **log(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), base as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get logarithm of a value using the specified base

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The value for which to get the logarithm

- base — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The base value.


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    specified base logarithm of x

- 两个输入均为 Number 或 Float 时返回 Float

- 任一输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **mean(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Get the arithmetic mean (average) of an array of data.

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    An array of [Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Long](/connect-iq/api-docs/Toybox/Lang/Long/), or [Double](/connect-iq/api-docs/Toybox/Lang/Double/) values


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The arithmetic mean of the values in data


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the provided data array is empty.


### **mode(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>)** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

Get the most common value found in an array of data.

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    An array of [Objects](/connect-iq/api-docs/Toybox/Lang/Object/)


Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The most frequently occurring value in data.


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if there is no most frequently occurring value or the passed in value array is empty


### **pow(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

计算 x 的 y 次幂。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    Base

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    Exponent


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    x to the power of y

- 两个输入均为 Number 或 Float 时返回 Float

- 任一输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **rand()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Returns a pseudo-random Number. Use the [srand()](/connect-iq/api-docs/Toybox/Math/#srand-instance_function) function to seed the random number generator.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Non-negative random number


Since:

API 级别 1.0.0

### **round(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Round a value.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    数值


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The closest integer to x. Decimal values >= .5 will be rounded up Return type matches the input parameter type


Since:

API 级别 1.3.0

### **sin(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the sine of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The sine value of x in radians

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **sqrt(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

计算一个值的平方根。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The value for which to get the square root


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The square root of x, or `NaN` if invalid

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.0.0

### **srand(seed as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Seed the random number generator.

注意：

srand() does not return any value.

Parameters:

- seed — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The value used for seeding rand()


Since:

API 级别 1.0.0

### **stdev(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or **Null**)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Get the standard deviation of a sample of population data.

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Long](/connect-iq/api-docs/Toybox/Lang/Long/) 或 [Double](/connect-iq/api-docs/Toybox/Lang/Double/) 值且至少有两个元素的数组。

- xbar — ([Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The mean, if known. Otherwise, pass `null` and the mean of data will be calculated.


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The standard deviation of the samples


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the provided data array has fewer than two elements.


### **tan(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Get the tangent of an angle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The tangent value of x in radians Toybox::Lang::Float if input is Toybox::Lang::Number or Toybox::Lang::Float Toybox::Lang::Double if input is Toybox::Lang::Long or Toybox::Lang::Double


Since:

API 级别 1.0.0

### **toDegrees(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Convert an angle from radians to degrees.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    角度（弧度）


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The angle of x in degrees

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.3.0

### **toRadians(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as [Lang.Decimal](/connect-iq/api-docs/Toybox/Lang/#Decimal-named_type)

Convert an angle from degrees to radians.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The angle in degrees


Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The angle of x in radians

- 输入为 Number 或 Float 时返回 Float

- 输入为 Long 或 Double 时返回 Double



Since:

API 级别 1.3.0

### **variance(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>, xbar as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**)** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Get the sample variance of an array of data.

Returns the sample variance with Bessel's correction.

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Long](/connect-iq/api-docs/Toybox/Lang/Long/) 或 [Double](/connect-iq/api-docs/Toybox/Lang/Double/) 值且至少有两个元素的数组。

- xbar — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)) —

    The mean, if known. Otherwise, pass `null` and the mean of data will be calculated.


Returns:

- [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The variance of the samples


Since:

API 级别 3.1.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the provided data array has fewer than two elements.
