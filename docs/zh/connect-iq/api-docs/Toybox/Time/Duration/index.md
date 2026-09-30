---
title: "Class: Toybox.Time.Duration"
---
# 类：Toybox.Time.Duration

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)


[show all](#)

## 概述

Duration 是一个不可变的时间段。

Duration 对象与 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 对象密切相关，并且经常结合使用来进行时间计算。[Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 表示单个时间点，而 Duration 表示一段时间，例如七天。

Duration 对象以构成其所表示时间跨度的秒数存储。

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

将 Moment 添加到 Duration 时，此方法的功能与 [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function) 方法相同。

Parameters:

- time — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    要添加到 Duration 的 Duration 或 Moment


Example:

添加两个 Duration 对象

```
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);
var threeHours = oneHour.add(twoHours);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    一个 Duration 或 Moment 对象，表示 self 与提供的对象之和：

- Duration + Moment = Moment

- Duration + Duration = Duration



另见：

- [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function)


Since:

API 级别 1.0.0

### **compare(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

确定一个 Duration 比另一个 Duration 更短还是更长。

此方法计算一个 Number，表示两个 Duration 对象之间的秒数差异。也可以使用 [subtract()](/connect-iq/api-docs/Toybox/Time/Duration/#subtract-instance_function) 方法获取两个 Duration 对象之间的绝对差值。

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

    两个 Duration 对象之间相差的秒数。如果用于比较的 Duration 长于此 Duration，则该值为负数。


Since:

API 级别 1.0.0

### **divide(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

将 Duration 除以一个值。

Parameters:

- value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    用于除以 Duration 的值


Example:

```
using Toybox.Time;
var fourHours  = new Time.Duration(Gregorian.SECONDS_PER_HOUR * 4);
var twoHours = fourHours.divide(2);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    Duration 与所提供值的商


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

    用于初始化 Duration 的秒数


Example:

创建一个包含秒数的一天 Duration

```
using Toybox.Time;
var oneDay = new Time.Duration(86400);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    表示指定秒数的 Duration


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

    用于乘以 Duration 的值


Example:

```
using Toybox.Time;
var twoHours  = new Time.Duration(7200);
var fourHours = twoHours.multiply(2);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    Duration 与所提供值的乘积


Since:

API 级别 1.0.0

### **subtract(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

获取两个 Duration 对象之间的绝对差值。

计算得出的 Duration 始终为正值。还可以使用 [compare()](/connect-iq/api-docs/Toybox/Time/Duration/#compare-instance_function) 方法获取两个 Duration 对象之间的差值。

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    要从此 Duration 中减去的 Duration


Example:

```
using Toybox.Time;
var twoHours   = new Time.Duration(7200);
var threeHours = new Time.Duration(10800);
var oneHour = threeHours.subtract(twoHours);
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    两个 Duration 对象之间的差值


Since:

API 级别 1.0.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Duration 的值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Duration 的值（秒）


Since:

API 级别 1.0.0
