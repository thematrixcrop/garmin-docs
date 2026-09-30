---
title: "Module: Toybox.Time.Gregorian"
---
# Module: Toybox.Time.Gregorian

## 概述

The Gregorian module provides an interface for getting [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) objects and [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) objects based on the Gregorian calendar.

For convenience, several time constants are defined that represent the number of seconds per year, per day, per hour, and per minute.

## 另见：

- [The Gregorian Calendar](https://en.wikipedia.org/wiki/Gregorian_calendar)


Since:

API 级别 1.0.0

## 命名空间下的类

类：[Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | SECONDS\_PER\_DAY | 86400 |
API 级别 1.0.0

|

The number of seconds in one day

|
| 类型 | SECONDS\_PER\_HOUR | 3600 |

API 级别 1.0.0

|

The number of seconds in one hour

|
| 类型 | SECONDS\_PER\_MINUTE | 60 |

API 级别 1.0.0

|

The number of seconds in one minute

|
| 类型 | SECONDS\_PER\_YEAR | 31557600 |

API 级别 1.0.0

|

The number of seconds in one year

|

### DayOfWeek

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DAY\_SUNDAY | 1 |
API 级别 3.0.0

|

Sunday

|
| DAY\_MONDAY | 2 |

API 级别 3.0.0

|

Monday

|
| DAY\_TUESDAY | 3 |

API 级别 3.0.0

|

Tuesday

|
| DAY\_WEDNESDAY | 4 |

API 级别 3.0.0

|

Wednesday

|
| DAY\_THURSDAY | 5 |

API 级别 3.0.0

|

Thursday

|
| DAY\_FRIDAY | 6 |

API 级别 3.0.0

|

Friday

|
| DAY\_SATURDAY | 7 |

API 级别 3.0.0

|

Saturday

|

### Month

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MONTH\_JANUARY | 1 |
API 级别 3.0.0

|

January

|
| MONTH\_FEBRUARY | 2 |

API 级别 3.0.0

|

February

|
| MONTH\_MARCH | 3 |

API 级别 3.0.0

|

March

|
| MONTH\_APRIL | 4 |

API 级别 3.0.0

|

April

|
| MONTH\_MAY | 5 |

API 级别 3.0.0

|

May

|
| MONTH\_JUNE | 6 |

API 级别 3.0.0

|

June

|
| MONTH\_JULY | 7 |

API 级别 3.0.0

|

July

|
| MONTH\_AUGUST | 8 |

API 级别 3.0.0

|

August

|
| MONTH\_SEPTEMBER | 9 |

API 级别 3.0.0

|

September

|
| MONTH\_OCTOBER | 10 |

API 级别 3.0.0

|

October

|
| MONTH\_NOVEMBER | 11 |

API 级别 3.0.0

|

November

|
| MONTH\_DECEMBER | 12 |

API 级别 3.0.0

|

December

|

## 实例方法摘要 [collapse](#)

- [**duration**](#duration-instance_function)(options as { :years as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :days as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hours as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minutes as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    从选项字典创建 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)。

- [**info**](#info-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

    获取本地时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。

- [**localMoment**](#localMoment-instance_function)(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) or **Null**

    Create a LocalMoment from a Moment and a Location.

- [**moment**](#moment-instance_function)(options as { :year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :second as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    从选项字典创建 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**utcInfo**](#utcInfo-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

    获取 UTC 时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。


## 实例方法详情

### **duration(options as { :years as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :days as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hours as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minutes as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

从选项字典创建 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)。

This is an alternative to [Duration.initialize()](/connect-iq/api-docs/Toybox/Time/Duration/#initialize-instance_function) that allows the Duration to be made more easily, using familiar units, which can be handy when building a Duration manually.

Option values are represented as signed 32-bit integers.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :years — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of years (max 69)

- :days — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of days (max 24855)

- :hours — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of hours (max 596523)

- :minutes — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of minutes (max 35791394)

- :seconds — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of seconds (max 2147483647)


Example:

Create a Duration of one day with Gregorian.duration()

```
using Toybox.Time.Gregorian;
var oneDay = Gregorian.duration({:days => 1});
```

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The Duration representing the specified span of time


另见：

- [Duration.initialize()](/connect-iq/api-docs/Toybox/Time/Duration/#initialize-instance_function)


Since:

API 级别 1.0.0

### **info(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module))** as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

获取本地时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。

Parameters:

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于获取 Info 的 Moment 或 LocalMoment 对象

- format — ([Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) —

    一个 Time.FORMAT\_\* 类型


Example:

Get Info for today in local time (assume CST)

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var options = {
    :year   => 2003,
    :month  => 5, // 3.x devices can also use :month => Gregorian.MONTH_MAY
    :day    => 16,
    :hour   => 0
};
var date = Gregorian.moment(options);
var birthday = Gregorian.info(date, Time.FORMAT_MEDIUM);
System.println(birthday.year);  // 2003
System.println(birthday.month); // May
System.println(birthday.day);   // 16
System.println(birthday.hour);  // 19
```

Returns:

- [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/) —

    Info for the supplied Moment formatted according to the specified format type in local time.


Since:

API 级别 1.0.0

### **localMoment(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) or **Null**

Create a LocalMoment from a Moment and a Location

Parameters:

- location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    The location to use to determine the time zone offset and daylight saving time rules.

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    The UTC time to find the local time for.


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    给定位置的本地时间对应的 LocalMoment 对象；如果发生错误，则为 `null`。


Since:

API 级别 3.3.0

### **moment(options as { :year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :second as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

从选项字典创建 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

```
  Each option value is assumed to be in the UTC time zone.
```

Unlike [Moment.initialize()](/connect-iq/api-docs/Toybox/Time/Moment/#initialize-instance_function), which is based on the UNIX epoch, a Moment created with Gregorian.moment() is based on [today()](/connect-iq/api-docs/Toybox/Time/#today-instance_function). The result is determined by taking the result of [today()](/connect-iq/api-docs/Toybox/Time/#today-instance_function) and overlaying the options provided.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典；不允许使用会导致无效日期的值

- :year — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The year (1970-2106)

- :month — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        The month (1-12) or a Symbol (:january, :february, ...)

- :day — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The day of month (1-31)

- :hour — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The hour (0-23)

- :minute — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The minute (0-59)

- :second — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The second (0-59)


Example:

Create a Moment representing midnight on the first day of the current month.

```
using Toybox.Time;
var oneDay = Gregorian.moment({:day => 1});
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示指定时刻的一个 Moment


另见：

- [Moment.initialize()](/connect-iq/api-docs/Toybox/Time/Moment/#initialize-instance_function)

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)


Since:

API 级别 1.0.0

### **utcInfo(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module))** as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

获取 UTC 时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。

```
  Info
```

Parameters:

- format — ([Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) —

    一个 Time.FORMAT\_\* 类型


Example:

Get Info for today in UTC

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
var options = {
    :year   => 2003,
    :month  => 5, // 3.x devices can also use :month => Gregorian.MONTH_MAY
    :day    => 16,
    :hour   => 0
};
var date = Gregorian.moment(options);
var birthday = Gregorian.utcInfo(date, Time.FORMAT_MEDIUM);
System.println(birthday.year);  // 2003
System.println(birthday.month); // May
System.println(birthday.day);   // 16
System.println(birthday.hour);  // 0
```

Returns:

- [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/) —

    Info for the supplied Moment formatted according to the specified format type in UTC time.


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)


Since:

API 级别 2.1.0
