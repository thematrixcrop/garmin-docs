---
title: "模块：Toybox.Time"
---
# 模块：Toybox.Time

## 概述

Time 模块提供处理时间和日期的功能。

Monkey C 处理时间时使用两个主要概念：[Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 和 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)。Moment 是时间中的单个点，而 Duration 是一段时间。Moment 和 Duration 可以通过以下方式结合使用进行时间计算：

```
  表达式                方法                 结果      说明
  ---------------------------------------------------------------------------
  Moment + Moment      -                    -         无效
  Moment + Duration    Moment.add()         Moment    更晚的 Moment
  Moment - Moment      Moment.subtract()    Duration  两个 Moment 之间的时间跨度
  Moment - Duration    Moment.subtract()    Moment    更早的 Moment

  Duration + Duration  Duration.add()       Duration  更长的 Duration
  Duration + Moment    Duration.add()       Moment    更晚的 Moment
  Duration - Duration  Duration.subtract()  Duration  更短的 Duration
  Duration - Moment    -                    -         无效
```

日期和时间通常以 UNIX 纪元起的 UTC 时间表示，但 [Gregorian Moment](/connect-iq/api-docs/Toybox/Time/Gregorian/#moment-instance_function) 除外，后者是相对于当前本地时间创建的。

Monkey C 中的日期和时间格式相对开放，提供了用于短格式、中格式和长格式的格式常量（长格式和中格式目前等效）。

```
  常量               秒      分钟     小时     星期几       日    月      年
  ---------------------------------------------------------------------------
  FORMAT_SHORT   |  0        0        0      4            1    3      2017
  FORMAT_MEDIUM  |  0        0        0      Wed          1    Mar    2017
  FORMAT_LONG    |  0        0        0      Wed          1    Mar    2017
```

## 另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


示例：

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

示例：

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

起始版本：

API 级别 1.0.0

## 命名空间下的模块

模块：[Time.Gregorian](/connect-iq/api-docs/Toybox/Time/Gregorian/)

## 命名空间下的类

类：[Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), [Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [RealTimeClockNotValidException](/connect-iq/api-docs/Toybox/Time/RealTimeClockNotValidException/)

## 常量摘要

### DateFormat

起始版本：

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

中格式由数字和字符串混合组成，具体取决于调用的函数。如果格式化为 String，结果将是时间或日期的缩写形式。

|
| FORMAT\_LONG | 2 |

API 级别 1.0.0

|

长格式由数字和字符串混合组成，具体取决于调用的函数。如果格式化为 String，结果将是时间或日期的缩写形式。

|

### CurrentTime

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CURRENT\_TIME\_DEFAULT | 0 |
API 级别 3.0.10

|

默认系统时钟，用户可能已对其进行修改。

|
| CURRENT\_TIME\_GPS | 1 |

API 级别 3.0.10

|

如果 GPS 信号可用，则根据您当前 GPS 位置确定的时钟时间。

|
| CURRENT\_TIME\_RTC | 2 |

API 级别 3.0.10

|

系统的实时时钟，无法通过用户设置覆盖，只能由 GPS 等受信任的来源更新。

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

此方法的行为与 [Time.now()](/connect-iq/api-docs/Toybox/Time/#now-instance_function) 相同，但接受一个 `options` 参数，用于选择时间源。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    时钟选项

- :currentTimeType — ([Time.CurrentTime](/connect-iq/api-docs/Toybox/Time/#CurrentTime-module)) —

        一个 [Time.CURRENT\_TIME\_\*](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_DEFAULT-const) 值；如果未提供时间类型，则默认为 [Time.CURRENT\_TIME\_DEFAULT](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_DEFAULT-const)


另见：

- [Time.now()](/connect-iq/api-docs/Toybox/Time/#now-instance_function)


起始版本：

API 级别 3.0.10

抛出：

- ([Time.RealTimeClockNotValidException](/connect-iq/api-docs/Toybox/Time/RealTimeClockNotValidException/)) —

    如果将 [Time.CURRENT\_TIME\_RTC](/connect-iq/api-docs/Toybox/Time/#CURRENT_TIME_RTC-const) 作为选项传入，且实时时钟值无效，即未与 GPS 等受信任的来源同步，则抛出此异常。


### **now()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取当前时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

示例：

在 1989 年 12 月 31 日下午 5:00 CST 使用 now()

```
using Toybox.Time;
var now = new Time.Moment(Time.now().value()); // UNIX epoch 631148400
```

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示当前时间点的 Moment。


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


起始版本：

API 级别 1.0.0

### **today()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取今天午夜的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

示例：

在 1989 年 12 月 31 日下午 5:00 CST 使用 today()

```
using Toybox.Time;
var now = new Time.Moment(Time.today().value()); // UNIX epoch 631087200
```

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示当前日期开始时刻的 Moment。


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


起始版本：

API 级别 1.0.0
