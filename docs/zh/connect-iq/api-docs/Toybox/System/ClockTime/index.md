---
title: "Class: Toybox.System.ClockTime"
---
# Class: Toybox.System.ClockTime

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)


[show all](#)

## 概述

Represents the current local time.

ClockTime is a convenient way to get the current time in an easy-to-use format without the need to perform time zone conversions or time-based arithmetic. Values provided by ClockTime may require formatting for proper display within an app.

## 另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)

- [Number.format()](/connect-iq/api-docs/Toybox/Lang/Number/#format-instance_function)


Example:

Get the time and print it to the console

```
using Toybox.System;
var myTime = System.getClockTime(); // ClockTime object
System.println(
    myTime.hour.format("%02d") + ":" +
    myTime.min.format("%02d") + ":" +
    myTime.sec.format("%02d")
);
```

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**dst**](#dst-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The daylight savings time offset.

- [**hour**](#hour-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    基于 24 小时制的小时数。

- [**min**](#min-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The minute of the current hour.

- [**sec**](#sec-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The second of the current minute.

- [**timeZoneOffset**](#timeZoneOffset-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The time offset from UTC in seconds.


## 实例属性详情

### var dst as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The daylight savings time offset.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

基于 24 小时制的小时数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var min as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The minute of the current hour.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var sec as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The second of the current minute.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var timeZoneOffset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The time offset from UTC in seconds.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
