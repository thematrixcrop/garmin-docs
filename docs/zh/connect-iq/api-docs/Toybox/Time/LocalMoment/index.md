---
title: "Class: Toybox.Time.LocalMoment"
---
# Class: Toybox.Time.LocalMoment

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)


[show all](#)

## 概述

A LocalMoment is an immutable moment in time.

LocalMoment represents a single point in time at a specific location. It differs from Moment in that it also keeps time zone information in addition to the time.

Example:

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

Since:

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

    Determine if a LocalMoment is before or after another LocalMoment This computes a Number representing the difference between the two LocalMoment objects in seconds.

- [**getDaylightSavingsTimeOffset**](#getDaylightSavingsTimeOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取夏令时相对于 UTC 时间的偏移量（以秒为单位）。

- [**getOffset**](#getOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the total time offset from UTC time in seconds.

- [**getTimeZoneOffset**](#getTimeZoneOffset-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the time zone offset from UTC time in seconds.

- [**greaterThan**](#greaterThan-instance_function)(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 LocalMoment 是否大于另一个 LocalMoment。

- [**isDaylightSavingsTime**](#isDaylightSavingsTime-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Get whether the daylight saving time offset is in effect.

- [**lessThan**](#lessThan-instance_function)(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定一个 LocalMoment 是否小于另一个 LocalMoment。

- [**subtract**](#subtract-instance_function)(subtrahend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

    Subtract a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) from a LocalMoment.

- [**toMoment**](#toMoment-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

    获取对应于此对象的 Moment。

- [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the UTC value of a LocalMoment.


## 实例方法详情

### **add(addend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

将一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) 添加到 LocalMoment。

Parameters:

- addend — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to add to this LocalMoment.


Returns:

- [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    A LocalMoment object that is the sum of self and the provided Duration object.


Since:

API 级别 3.3.0

### **compare(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Determine if a LocalMoment is before or after another LocalMoment

This computes a Number representing the difference between the two LocalMoment objects in seconds. The [subtract()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#subtract-instance_function) method can also be used to get the absolute Duration between two LocalMoment objects.

Parameters:

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


Example:

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

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The Number of seconds difference between the two LocalMoment objects, without considering time zone rules. If the LocalMoment supplied for comparison is after this LocalMoment, the value will be negative.


另见：

- [LocalMoment.subtract()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#subtract-instance_function)

- [SECONDS\_PER\_DAY](/connect-iq/api-docs/Toybox/Time/Gregorian/#SECONDS_PER_DAY-const)


Since:

API 级别 3.3.0

### **getDaylightSavingsTimeOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取夏令时相对于 UTC 时间的偏移量（以秒为单位）。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The daylight saving time offset in seconds.


Since:

API 级别 3.3.0

### **getOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the total time offset from UTC time in seconds

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The total offset from UTC time in seconds.


Since:

API 级别 3.3.0

### **getTimeZoneOffset()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the time zone offset from UTC time in seconds.

This is the time zone offset without the daylight saving time offset.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The time zone offset from UTC in seconds. Positive values are East of UTC.


Since:

API 级别 3.3.0

### **greaterThan(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 LocalMoment 是否大于另一个 LocalMoment。

Parameters:

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if this LocalMoment is greater than the LocalMoment supplied for comparison, otherwise `false`


Since:

API 级别 3.3.0

### **isDaylightSavingsTime()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Get whether the daylight saving time offset is in effect

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if daylight saving time is in effect for this time.


Since:

API 级别 3.3.0

### **lessThan(moment as [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定一个 LocalMoment 是否小于另一个 LocalMoment。

Parameters:

- moment — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)) —

    用于与此 LocalMoment 比较的 LocalMoment


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if this LocalMoment is less than the LocalMoment supplied for comparison, otherwise `false`


Since:

API 级别 3.3.0

### **subtract(subtrahend as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/)

Subtract a [Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) from a LocalMoment.

Parameters:

- subtrahend — ([Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The LocalMoment or Duration to subtract from this LocalMoment


Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.LocalMoment](/connect-iq/api-docs/Toybox/Time/LocalMoment/) —

    The Duration between the two LocalMoment objects or the LocalMoment offset by a Duration. When subtracting LocalMoments, the computed Duration is always a positive value. The [compare()](/connect-iq/api-docs/Toybox/Time/LocalMoment/#compare-instance_function) method can be used to determine whether one LocalMoment is before or after another LocalMoment.


Since:

API 级别 3.3.0

### **toMoment()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

获取对应于此对象的 Moment。

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    The UTC time of the LocalMoment as a Moment


Since:

API 级别 3.3.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the UTC value of a LocalMoment.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The UTC time of the LocalMoment in seconds since the UNIX epoch


另见：

- [UTC Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)

- [UNIX Time](https://en.wikipedia.org/wiki/Unix_time)


Since:

API 级别 3.3.0
