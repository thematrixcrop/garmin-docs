---
title: "类：Toybox.Time.Moment"
---
# 类：Toybox.Time.Moment

继承：

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


示例：

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

起始版本：

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

向 Moment 添加 Duration 时，此方法的功能与 [Duration.add()](/connect-iq/api-docs/Toybox/Time/Duration/#add-instance_function) 方法相同。

参数：

- duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    要添加到此 Moment 的 Duration


示例：

将今天加一天

```
using Toybox.Time;
using Toybox.Time.Gregorian;
var today = new Time.Moment(Time.today().value());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);
```

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    一个 Moment 对象，表示 self 与提供的 Duration 对象之和


另见：

- [Duration.add()](/connect-iq/api-docs/Toybox/Time/Duration/#add-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 1.0.0

### **compare(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

确定一个 Moment 早于还是晚于另一个 Moment。

此方法计算一个 Number，表示两个 Moment 对象之间的秒数差异。也可以使用 [subtract()](/connect-iq/api-docs/Toybox/Time/Moment/#subtract-instance_function) 方法获取两个 Moment 对象之间的绝对 Duration。

参数：

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


示例：

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

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    两个 Moment 对象之间相差的秒数。如果用于比较的 Moment 晚于此 Moment，则该值为负数。


另见：

- [Moment.subtract()](/connect-iq/api-docs/Toybox/Time/Moment/#subtract-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 1.0.0

### **greaterThan(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Moment 是否大于另一个 Moment。

参数：

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Moment 大于提供用于比较的 Moment，则为 `true`，否则为 `false`


另见：

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 1.0.0

### **initialize(seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

Constructor

参数：

- seconds — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    用于初始化 Moment 的秒数


示例：

使用 UNIX 时间戳创建 Moment

```
using Toybox.Time;
var garminFounded = new Time.Moment(631065600);
```

示例：

创建一个表示今天的 Moment

```
using Toybox.Time;
var today = new Time.Moment(Time.today().value());
```

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示指定时刻的一个 Moment


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


起始版本：

API 级别 1.1.2

### **lessThan(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 Moment 是否小于另一个 Moment。

参数：

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    用于与此 Moment 比较的 Moment


示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 Moment 小于提供用于比较的 Moment，则为 `true`，否则为 `false`


另见：

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 1.0.0

### **subtract(subtrahend as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

从 Moment 中减去一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 或 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

注意：

直到 ConnectIQ 3.0.0 才支持从 Moment 中减去 Duration。如果需要考虑向后兼容性，最好改为添加负的 Duration。

参数：

- subtrahend — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    要从此 Moment 中减去的 Moment 或 Duration


示例：

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

返回：

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    两个 Moment 对象之间的 Duration，或由 Duration 偏移后的 Moment。对 Moment 执行减法时，计算得到的 Duration 始终为正值。可以使用 [compare()](/connect-iq/api-docs/Toybox/Time/Moment/#compare-instance_function) 方法确定一个 Moment 位于另一个 Moment 之前还是之后。


另见：

- [Moment.compare()](/connect-iq/api-docs/Toybox/Time/Moment/#compare-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 1.0.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Moment 的 UTC 值。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Moment 的 UTC 日期，即自 UNIX 纪元以来的秒数


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


起始版本：

API 级别 1.0.0
