---
title: "Class: Toybox.Time.Moment"
---
# Class: Toybox.Time.Moment

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)


[show all](#)

## 概述

A Moment is an immutable moment in time.

Moment objects are closely related to [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) objects, and are frequently used together for time calculations. While a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) represents a span of time, a Moment represents a single point in time such as a specific date.

Internally, Moment objects are stored as 32-bit integers representing the number of seconds since the UNIX epoch (January 1, 1970 at 00:00:00 UTC).

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

    Subtract a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) from a Moment.

- [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the UTC value of a Moment.


## 实例方法详情

### **add(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 Moment。

This method functions the same as the [Duration.add()](/connect-iq/api-docs/Toybox/Time/Duration/#add-instance_function) method when adding a Duration to a Moment.

Parameters:

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to add to this Moment


Example:

Add one day to today

```
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    A Moment object that is the sum of self and the provided Duration object


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

    `true` if this Moment is greater than the Moment supplied for comparison, otherwise `false`


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

Create a Moment with a UNIX time stamp

```
using Toybox.Time;
var garminFounded = new Time.Moment(631065600);
```

Example:

Create a Moment representing today

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

    `true` if this Moment is less than the Moment supplied for comparison, otherwise `false`


另见：

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 1.0.0

### **subtract(subtrahend as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Subtract a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) from a Moment.

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

Get the UTC value of a Moment.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The UTC date of the Moment in seconds since the UNIX epoch


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 1.0.0
