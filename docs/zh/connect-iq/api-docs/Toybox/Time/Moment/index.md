---
title: "Class: Toybox.Time.Moment"
---
# 类：Toybox.Time.Moment

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)


[show all](#)

## 概述

Moment 是一个不可变的时间点。

Moment 对象与 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 对象密切相关，并经常结合使用以进行时间计算。[Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 表示一段时间，而 Moment 表示单个时间点，例如某个具体日期。

在内部，Moment 对象以 32 位整数存储，表示自 UNIX 纪元（1970 年 1 月 1 日 00:00:00 UTC）以来的秒数。

## 另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Example:

```
using Toybox.System;
using Toybox.Time.Gregorian;

// Options for Saturday February 24th, 2018 12:12am
var options = {
    :year   => 2018,
    :month  => 2,
    :day    => 24,
    :hour   => 0,
    :minute => 12
};

var now = Gregorian.moment(options);
var info;
info = Gregorian.utcInfo(now, Time.FORMAT_SHORT);

// Prints "2018-02-24" to the console
System.println(Lang.format("$1$-$2$-$3$", [
    info.year.format("%04u"),
    info.month.format("%02u"),
    info.day.format("%02u")
]));

// Prints "day_of_week=7 month=2" to the console
System.println(Lang.format("day_of_week=$1$ month=$2$", [
    info.day_of_week,
    info.month
]));

info = Gregorian.utcInfo(now, Time.FORMAT_LONG);

// Prints "day_of_week=Sat month=Feb" to the console
System.println(Lang.format("day_of_week=$1$ month=$2$", [
    info.day_of_week,
    info.month
]));
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 Moment。

- [**compare**](#compare-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    确定一个 Moment 早于还是晚于另一个 Moment。

- [**greaterThan**](#greaterThan-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 Moment 是否大于另一个 Moment。

- [**initialize**](#initialize-instance_function)(seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    Constructor.

- [**lessThan**](#lessThan-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 Moment 是否小于另一个 Moment。

- [**subtract**](#subtract-instance_function)(subtrahend as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    从 Moment 中减去一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 或 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Moment 的 UTC 值。


## 实例方法详情

### **add(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 Moment。

This method functions the same as the [Duration.add()](/connect-iq/api-docs/Toybox/Time/Duration/#add-instance_function) method when adding a Duration to a Moment.

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to add to this Moment


Example:

将今天加一天

```
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    一个 Moment 对象，表示 self 与提供的 Duration 对象之和


另见：

- [Duration.add()](/connect-iq/api-docs/Toybox/Time/Duration/#add-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **compare(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

确定一个 Moment 早于还是晚于另一个 Moment。

This computes a Number representing the difference between the two Moment objects in seconds. The [subtract()](/connect-iq/api-docs/Toybox/Time/Moment/#subtract-instance_function) method can also be used to get the absolute Duration between two Moment objects.

Parameters:

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


Example:

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);

System.println(today.compare(tomorrow)); // -86400, or one day in the past
System.println(tomorrow.compare(today)); //  86400, or one day in the future
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The Number of seconds difference between the two Moment objects. If the Moment supplied for comparison is after this Moment, the value will be negative.


另见：

- [Moment.subtract()](/connect-iq/api-docs/Toybox/Time/Moment/#subtract-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **greaterThan(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Moment 是否大于另一个 Moment。

Parameters:

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


Example:

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);

System.println(today.greaterThan(tomorrow)); // false
System.println(tomorrow.greaterThan(today)); // true
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Moment 大于提供用于比较的 Moment，则为 `true`，否则为 `false`


另见：

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **initialize(seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

Constructor

Parameters:

- seconds — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The Number of seconds with which to initialize the Moment


Example:

使用 UNIX 时间戳创建 Moment

```
using Toybox.Time;
var garminFounded = new Time.Moment(631065600);
```

Example:

创建一个表示今天的 Moment

```
using Toybox.Time;
var today = new Time.Moment(Time.today().value());
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示指定时刻的一个 Moment


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 1.1.2

### **lessThan(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Moment 是否小于另一个 Moment。

Parameters:

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


Example:

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);

System.println(today.lessThan(tomorrow)); // true
System.println(tomorrow.lessThan(today)); // false
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Moment 小于提供用于比较的 Moment，则为 `true`，否则为 `false`


另见：

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **subtract(subtrahend as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

从 Moment 中减去一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 或 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

注意：

Subtracting a Duration from a Moment was not supported until ConnectIQ 3.0.0. If backward compatibility is a concern, it may be best to add a negative Duration instead.

Parameters:

- subtrahend — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Moment or Duration to subtract from this Moment


Example:

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);

var duration1 = today.subtract(tomorrow);
var duration2 = tomorrow.subtract(today);

System.println(duration1.value()); // 86400, or one day
System.println(duration2.value()); // 86400, or one day
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    The Duration between the two Moment objects or the Moment offset by a Duration. When subtracting Moments, the computed Duration is always a positive value. The [compare()](/connect-iq/api-docs/Toybox/Time/Moment/#compare-instance_function) method can be used to determine whether one Moment is before or after another Moment.


另见：

- [Moment.compare()](/connect-iq/api-docs/Toybox/Time/Moment/#compare-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Moment 的 UTC 值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The UTC date of the Moment in seconds since the UNIX epoch


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 1.0.0
