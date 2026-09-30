---
title: "类：Toybox.Time.LocalMoment"
---
# 类：Toybox.Time.LocalMoment

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)


[show all](#)

## 概述

LocalMoment 是一个不可变的时间点。

LocalMoment 表示特定位置的单个时间点。与 Moment 不同的是，它除了保存时间外，还会保存时区信息。

示例：

```
// This code will print the following
// to the console:
// 2018-02-23 18:12:00
// day_of_week=6 month=2
// day_of_week=Fri month=Feb

// Saturday Feb 24th, 2018 12:12am UTC
var options = {
    :year   => 2018,
    :month  => 2,
    :day    => 24,
    :hour   => 0,
    :min    => 12
};

var when = Gregorian.moment(options);

var where = new Position.Location({
    :latitude  =>  38.85391,
    :longitude => -94.79630,
    :format    => :degrees,
});

var local = Gregorian.localMoment(where, when);

var info = Gregorian.info(local, Time.FORMAT_SHORT);

// Friday Feb 23th, 2018 6:12pm
Sys.println(Lang.format("$1$-$2$-$3$ $4$:$5$:$6$", [
    info.year.format("%04u"),
    info.month.format("%02u"),
    info.day.format("%02u"),
    info.hour.format("%02u"),
    info.min.format("%02u"),
    info.sec.format("%02u"),
]));

Sys.println(Lang.format("day_of_week=$1$ month=$2$", [
    info.day_of_week,
    info.month
]));

info = Gregorian.info(now, Time.FORMAT_LONG);

Sys.println(Lang.format("day_of_week=$1$ month=$2$", [
    info.day_of_week,
    info.month
]));
```

起始版本：

API 级别 3.3.0

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

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(addend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

    将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 LocalMoment。

- [**compare**](#compare-instance_function)(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    确定一个 LocalMoment 位于另一个 LocalMoment 之前还是之后 此操作会计算一个 Number，表示两个 LocalMoment 对象之间的秒数差。

- [**getDaylightSavingsTimeOffset**](#getDaylightSavingsTimeOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取夏令时相对于 UTC 时间的偏移量（以秒为单位）。

- [**getOffset**](#getOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取相对于 UTC 时间的总时间偏移（单位为秒）。

- [**getTimeZoneOffset**](#getTimeZoneOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 UTC 时间的时区偏移量（以秒为单位）。

- [**greaterThan**](#greaterThan-instance_function)(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 LocalMoment 是否大于另一个 LocalMoment。

- [**isDaylightSavingsTime**](#isDaylightSavingsTime-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否正在应用夏令时偏移。

- [**lessThan**](#lessThan-instance_function)(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 LocalMoment 是否小于另一个 LocalMoment。

- [**subtract**](#subtract-instance_function)(subtrahend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

    从 LocalMoment 中减去一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 或 [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)。

- [**toMoment**](#toMoment-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    获取对应于此对象的 Moment。

- [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 LocalMoment 的 UTC 值。


## 实例方法详情

### **add(addend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 LocalMoment。

参数：

- addend — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    要添加到此 LocalMoment 的 Duration。


返回：

- [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    一个 Moment 对象，表示 self 与提供的 Duration 对象之和。


起始版本：

API 级别 3.3.0

### **compare(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

确定一个 LocalMoment 位于另一个 LocalMoment 之前还是之后

此方法计算一个 Number，表示两个 LocalMoment 对象之间的秒数差异。也可以使用 [subtract()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#subtract-instance_function) 方法获取两个 LocalMoment 对象之间的绝对 Duration。

参数：

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


示例：

```
using Toybox.System;
using Toybox.Time;
using Toybox.Time.Gregorian;
using Toybox.Position;

var where = new Position.Location({
    :latitude  =>  38.85391,
    :longitude => -94.79630,
    :format    => :degrees,
});
var today = Gregorian.localMoment(where, Time.today());
var oneDay = new Time.Duration(Gregorian.SECONDS_PER_DAY);
var tomorrow = today.add(oneDay);

System.println(today.compare(tomorrow)); // -86400, or one day in the past
System.println(tomorrow.compare(today)); //  86400, or one day in the future
```

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    两个 LocalMoment 对象之间相差的秒数，不考虑时区规则。如果用于比较的 LocalMoment 晚于此 LocalMoment，则该值为负数。


另见：

- [LocalMoment.subtract()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#subtract-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


起始版本：

API 级别 3.3.0

### **getDaylightSavingsTimeOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取夏令时相对于 UTC 时间的偏移量（以秒为单位）。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    夏令时偏移量，单位为秒。


起始版本：

API 级别 3.3.0

### **getOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取相对于 UTC 时间的总时间偏移（单位为秒）

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    相对于 UTC 时间的总偏移量（秒）。


起始版本：

API 级别 3.3.0

### **getTimeZoneOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 UTC 时间的时区偏移量（以秒为单位）。

这是不包含夏令时偏移的时区偏移。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    相对于 UTC 的时区偏移量（以秒为单位）。正值表示位于 UTC 以东。


起始版本：

API 级别 3.3.0

### **greaterThan(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 LocalMoment 是否大于另一个 LocalMoment。

参数：

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 LocalMoment 大于提供用于比较的 LocalMoment，则为 `true`，否则为 `false`


起始版本：

API 级别 3.3.0

### **isDaylightSavingsTime()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否正在应用夏令时偏移

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此时正在实行夏令时，则为 true。


起始版本：

API 级别 3.3.0

### **lessThan(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 LocalMoment 是否小于另一个 LocalMoment。

参数：

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此 LocalMoment 小于提供用于比较的 LocalMoment，则为 `true`，否则为 `false`


起始版本：

API 级别 3.3.0

### **subtract(subtrahend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

从 LocalMoment 中减去一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 或 [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)。

参数：

- subtrahend — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    要从此 LocalMoment 中减去的 LocalMoment 或 Duration


返回：

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    两个 LocalMoment 对象之间的 Duration，或由 Duration 偏移后的 LocalMoment。对 LocalMoment 执行减法时，计算得到的 Duration 始终为正值。可以使用 [compare()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#compare-instance_function) 方法确定一个 LocalMoment 位于另一个 LocalMoment 之前还是之后。


起始版本：

API 级别 3.3.0

### **toMoment()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取对应于此对象的 Moment。

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    LocalMoment 的 UTC 时间，表示为 Moment


起始版本：

API 级别 3.3.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 LocalMoment 的 UTC 值。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    LocalMoment 的 UTC 时间，即自 UNIX 纪元以来的秒数


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


起始版本：

API 级别 3.3.0
