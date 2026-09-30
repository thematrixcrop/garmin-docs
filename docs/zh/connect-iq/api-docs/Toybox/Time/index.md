---
title: "Module: Toybox.Time"
---
# 模块：Toybox.Time

## 概述

The Time module provides functionality for dealing with times and dates.

There are two main concepts used by Monkey C when working with time: the [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) and [Duration](/connect-iq/api-docs/Toybox/Time/Duration/). A Moment is a single point in time, while a Duration is a span of time. Moments and Durations can be used together for time calculations in the following ways:

```
  Expression           Method               Result    Notes
  ---------------------------------------------------------------------------
  Moment + Moment      -                    -         Invalid
  Moment + Duration    Moment.add()         Moment    A later Moment
  Moment - Moment      Moment.subtract()    Duration  The span between Moments
  Moment - Duration    Moment.subtract()    Moment    An earlier Moment

  Duration + Duration  Duration.add()       Duration  A longer Duration
  Duration + Moment    Duration.add()       Moment    A later Moment
  Duration - Duration  Duration.subtract()  Duration  A shorter Duration
  Duration - Moment    -                    -         Invalid
```

日期和时间通常以 UNIX 纪元起的 UTC 时间表示，但 [Gregorian Moment](/connect-iq/api-docs/Toybox/Time/Gregorian/#moment-instance_function) 除外，后者是相对于当前本地时间创建的。

Monkey C 中的日期和时间格式相对开放，提供了用于短格式、中格式和长格式的格式常量（长格式和中格式目前等效）。

```
  Constant          Seconds  Minutes  Hours  Day of Week  Day  Month  Year
  ---------------------------------------------------------------------------
  FORMAT_SHORT   |  0        0        0      4            1    3      2017
  FORMAT_MEDIUM  |  0        0        0      Wed          1    Mar    2017
  FORMAT_LONG    |  0        0        0      Wed          1    Mar    2017
```

## 另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Example:

格式化和打印日期

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = Gregorian.info(Time.now(), Time.FORMAT_MEDIUM);
var dateString = Lang.format(
    "$1$:$2$:$3$ $4$ $5$ $6$ $7$",
    [
        today.hour,
        today.min,
        today.sec,
        today.day_of_week,
        today.day,
        today.month,
        today.year
    ]
);
System.println(dateString); // e.g. "16:28:32 Wed 1 Mar 2017"
```

Example:

创建一个表示 2003 年 5 月 16 日的 Moment

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var options = {
    :year   => 2003,
    :month  => 5,
    :day    => 16,
    :hour   => 6    // UTC offset, in this case for CST
};
var birthday = Gregorian.moment(options);
```

Since:

API 级别 1.0.0

## 命名空间下的模块

模块：[Time.Gregorian](/connect-iq/api-docs/Toybox/Time/Gregorian/)

## 命名空间下的类

类：[Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), [Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [RealTimeClockNotValidException](/connect-iq/api-docs/Toybox/Time/RealTimeClockNotValidException/)

## 常量摘要

### DateFormat

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| FORMAT\_SHORT | 0 |
API 级别 1.0.0

|

短格式是日期/时间的数字表示形式。

|
| FORMAT\_MEDIUM | 1 |

API 级别 1.0.0

|

Medium 格式由 Numbers 和 Strings 混合组成，具体取决于调用的函数。如果格式化为 String，结果将是时间或日期的缩写形式。

|
| FORMAT\_LONG | 2 |

API 级别 1.0.0

|

Long 格式由 Numbers 和 Strings 混合组成，具体取决于调用的函数。如果格式化为 String，结果将是时间或日期的缩写形式。

|

### CurrentTime

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CURRENT\_TIME\_DEFAULT | 0 |
API 级别 3.0.10

|

The default system clock, which may be user-modified.

|
| CURRENT\_TIME\_GPS | 1 |

API 级别 3.0.10

|

The clock time based on your current GPS location if a GPS signal is available.

|
| CURRENT\_TIME\_RTC | 2 |

API 级别 3.0.10

|

The system's real-time clock that cannot be overridden by user settings, and can only be updated by trusted sources such as GPS.

|

## 实例方法摘要 [collapse](#)

- [**getCurrentTime**](#getCurrentTime-instance_function)(options as { :currentTimeType as [Time.CurrentTime](/connect-iq/api-docs/Toybox/Time/#CurrentTime-module) }) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    根据指定来源获取当前时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**now**](#now-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    获取当前时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**today**](#today-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    获取今天午夜的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。


## 实例方法详情

### **getCurrentTime(options as { :currentTimeType as [Time.CurrentTime](/connect-iq/api-docs/Toybox/Time/#CurrentTime-module) })** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

根据指定来源获取当前时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

This method behaves the same as [Time.now()](/connect-iq/api-docs/Toybox/Time/#now-instance_function), but accepts an `options` argument that allows the time source to be selected.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    时钟选项

- :currentTimeType — ([Time.CurrentTime](/connect-iq/api-docs/Toybox/Time/#CurrentTime-module)) —

        一个 [Time.CURRENT\_TIME\_\*](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_DEFAULT-const) 值；如果未提供时间类型，则默认为 [Time.CURRENT\_TIME\_DEFAULT](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_DEFAULT-const)


另见：

- [Time.now()](/connect-iq/api-docs/Toybox/Time/#now-instance_function)


Since:

API 级别 3.0.10

Throws:

- ([Time.RealTimeClockNotValidException](/connect-iq/api-docs/Toybox/Time/RealTimeClockNotValidException/)) —

    Thrown if [Time.CURRENT\_TIME\_RTC](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_RTC-const) is passed as an option and the real-time clock value is not valid, i.e. synced with trusted source such as GPS.


### **now()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取当前时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

Example:

Using now() on December 31, 1989 at 5:00 pm CST

```
using Toybox.Time;
var now = new Time.Moment(Time.now().value()); // UNIX epoch 631148400
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示当前时间点的 Moment。


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 1.0.0

### **today()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取今天午夜的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

Example:

Using today() on December 31, 1989 at 5:00 pm CST

```
using Toybox.Time;
var now = new Time.Moment(Time.today().value()); // UNIX epoch 631087200
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示当前日期开始时刻的 Moment。


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 1.0.0
