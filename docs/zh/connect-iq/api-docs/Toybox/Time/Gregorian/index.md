---
title: "模块：Toybox.Time.Gregorian"
---
# 模块：Toybox.Time.Gregorian

## 概述

Gregorian 模块提供一个接口，用于根据公历获取 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 对象和 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 对象。

为方便使用，定义了几个时间常量，分别表示每年、每天、每小时和每分钟的秒数。

## 另见：

- [The Gregorian Calendar](https://en.wikipedia.org/wiki/Gregorian_calendar)


起始版本：

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

一天中的秒数

|
| 类型 | SECONDS\_PER\_HOUR | 3600 |

API 级别 1.0.0

|

一小时中的秒数

|
| 类型 | SECONDS\_PER\_MINUTE | 60 |

API 级别 1.0.0

|

一分钟中的秒数

|
| 类型 | SECONDS\_PER\_YEAR | 31557600 |

API 级别 1.0.0

|

一年中的秒数

|

### DayOfWeek

起始版本：

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

起始版本：

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

    从 Moment 和 Location 创建 LocalMoment。

- [**moment**](#moment-instance_function)(options as { :year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :second as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    从选项字典创建 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**utcInfo**](#utcInfo-instance_function)(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

    获取 UTC 时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。


## 实例方法详情

### **duration(options as { :years as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :days as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hours as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minutes as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :seconds as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

从选项字典创建 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)。

这是 [Duration.initialize()](/connect-iq/api-docs/Toybox/Time/Duration/#initialize-instance_function) 的替代方案，可以使用熟悉的单位更轻松地创建 Duration，在手动构建 Duration 时非常方便。

选项值表示为 32 位有符号整数。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :years — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        年数（最大值为 69）

- :days — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        天数（最大值为 24855）

- :hours — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        小时数（最大值为 596523）

- :minutes — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        分钟数（最大值为 35791394）

- :seconds — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        秒数（最大值为 2147483647）


示例：

使用 Gregorian.duration() 创建一天的 Duration

```
using Toybox.Time.Gregorian;
var oneDay = Gregorian.duration({:days => 1});
```

返回：

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    表示指定时间跨度的 Duration


另见：

- [Duration.initialize()](/connect-iq/api-docs/Toybox/Time/Duration/#initialize-instance_function)


起始版本：

API 级别 1.0.0

### **info(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module))** as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

获取本地时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。

参数：

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于获取 Info 的 Moment 或 LocalMoment 对象

- format — ([Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) —

    一个 Time.FORMAT\_\* 类型


示例：

获取今天本地时间的信息（假定为 CST）

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

返回：

- [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/) —

    以本地时间按照指定的格式类型格式化所提供 Moment 的信息。


起始版本：

API 级别 1.0.0

### **localMoment(location as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/))** as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) or **Null**

从 Moment 和 Location 创建 LocalMoment

参数：

- location — ([Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)) —

    用于确定时区偏移和夏令时规则的位置。

- moment — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    要查找其本地时间的 UTC 时间。


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

返回：

- [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    给定位置的本地时间对应的 LocalMoment 对象；如果发生错误，则为 `null`。


起始版本：

API 级别 3.3.0

### **moment(options as { :year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :second as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

从选项字典创建 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

```
  Each option value is assumed to be in the UTC time zone.
```

与基于 UNIX 纪元的 [Moment.initialize()](/connect-iq/api-docs/Toybox/Time/Moment/#initialize-instance_function) 不同，使用 Gregorian.moment() 创建的 Moment 基于 [today()](/connect-iq/api-docs/Toybox/Time/#today-instance_function)。结果通过获取 [today()](/connect-iq/api-docs/Toybox/Time/#today-instance_function) 的结果并叠加所提供的选项来确定。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典；不允许使用会导致无效日期的值

- :year — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        年份（1970-2106）

- :month — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        月份（1-12）或 Symbol（:january、:february、...）

- :day — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        月份中的日期（1-31）

- :hour — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        小时（0-23）

- :minute — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        分钟（0-59）

- :second — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        秒（0-59）


示例：

创建一个表示当前月份第一天午夜的 Moment。

```
using Toybox.Time;
var oneDay = Gregorian.moment({:day => 1});
```

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    表示指定时刻的一个 Moment


另见：

- [Moment.initialize()](/connect-iq/api-docs/Toybox/Time/Moment/#initialize-instance_function)

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)


起始版本：

API 级别 1.0.0

### **utcInfo(moment as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), format as [Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module))** as [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)

获取 UTC 时间中 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 的 [Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)。

```
  Info
```

参数：

- format — ([Time.DateFormat](/connect-iq/api-docs/Toybox/Time/#DateFormat-module)) —

    一个 Time.FORMAT\_\* 类型


示例：

获取今天 UTC 时间的信息

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

返回：

- [Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/) —

    以 UTC 时间按照指定的格式类型格式化所提供 Moment 的信息。


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)


起始版本：

API 级别 2.1.0
