---
title: "Class: Toybox.Time.Duration"
---
# Class: Toybox.Time.Duration

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)


[show all](#)

## 概述

A Duration is an immutable period of time.

Duration objects are closely related to [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) objects, and are frequently used together for time calculations. While a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) represents a single point in time, a Duration represents a span of time such as seven days.

Duration objects are stored as a the number of seconds that compose the span of time the Duration represents.

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    将一个 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 或另一个 Duration 添加到 Duration。

- [**compare**](#compare-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    确定一个 Duration 比另一个 Duration 更短还是更长。

- [**divide**](#divide-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    将 Duration 除以一个值。

- [**greaterThan**](#greaterThan-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 Duration 是否比另一个 Duration 更长。

- [**initialize**](#initialize-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Constructor.

- [**lessThan**](#lessThan-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 Duration 是否比另一个 Duration 更短。

- [**multiply**](#multiply-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    将 Duration 乘以一个值。

- [**subtract**](#subtract-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    获取两个 Duration 对象之间的绝对差值。

- [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Duration 的值。


## 实例方法详情

### **add(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

将一个 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 或另一个 Duration 添加到 Duration。

When adding a Moment to a Duration, this method functions the same as the [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function) method.

Parameters:

- time — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    The Duration or Moment to add to Duration


Example:

Add two Duration objects

```
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);
var threeHours = oneHour.add(twoHours);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    A Duration or Moment object that is the sum of self and the provided object:

- Duration + Moment = Moment

- Duration + Duration = Duration



另见：

- [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function)


Since:

API 级别 1.0.0

### **compare(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

确定一个 Duration 比另一个 Duration 更短还是更长。

This computes a Number representing the difference between the two Duration objects in seconds. The [subtract()](/connect-iq/api-docs/Toybox/Time/Duration/#subtract-instance_function) method can also be used to get the absolute difference between two Duration objects.

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    用于与此 Duration 比较的 Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.compare(twoHours)); // -3600, or one minute in the past
System.println(twoHours.compare(oneHour)); //  3600, or one minute in the future
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The Number of seconds difference between the two Duration objects. If the Duration supplied for comparison is longer than this Duration, the value will be negative.


Since:

API 级别 1.0.0

### **divide(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

将 Duration 除以一个值。

Parameters:

- value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value by which to divide the Duration


Example:

```
using Toybox.Time;
var fourHours  = new Time.Duration(Gregorian.SECONDS_PER_HOUR * 4);
var twoHours = fourHours.divide(2);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The quotient of the Duration and the supplied value


Since:

API 级别 1.0.0

### **greaterThan(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Duration 是否比另一个 Duration 更长。

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    用于与此 Duration 比较的 Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.greaterThan(twoHours)); // false
System.println(twoHours.greaterThan(oneHour)); // true
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Duration 长于提供用于比较的 Duration，则为 `true`，否则为 `false`


Since:

API 级别 1.0.0

### **initialize(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Constructor

Parameters:

- value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The Number of seconds with which to initialize the Duration


Example:

Create a Duration of one day with a number of seconds

```
using Toybox.Time;
var oneDay = new Time.Duration(86400);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    A Duration representing the specified Number of seconds


另见：

- [Gregorian.duration()](/connect-iq/api-docs/Toybox/Time/Gregorian/#duration-instance_function)


Since:

API 级别 1.0.0

### **lessThan(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Duration 是否比另一个 Duration 更短。

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    用于与此 Duration 比较的 Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.lessThan(twoHours)); // true
System.println(twoHours.lessThan(oneHour)); // false
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Duration 短于提供用于比较的 Duration，则为 `true`，否则为 `false`


Since:

API 级别 1.0.0

### **multiply(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

将 Duration 乘以一个值。

Parameters:

- value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value by which to multiply the Duration


Example:

```
using Toybox.Time;
var twoHours  = new Time.Duration(7200);
var fourHours = twoHours.multiply(2);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The product of the Duration and the supplied value


Since:

API 级别 1.0.0

### **subtract(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

获取两个 Duration 对象之间的绝对差值。

The computed Duration is always a positive value. The [compare()](/connect-iq/api-docs/Toybox/Time/Duration/#compare-instance_function) method can also be used to get the difference between two Duration objects.

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to subtract from this Duration


Example:

```
using Toybox.Time;
var twoHours   = new Time.Duration(7200);
var threeHours = new Time.Duration(10800);
var oneHour = threeHours.subtract(twoHours);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The difference between the two Duration objects


Since:

API 级别 1.0.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Duration 的值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The value of the Duration in seconds


Since:

API 级别 1.0.0
