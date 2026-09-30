---
title: "Class: Toybox.System.ClockTime"
---
# 类：Toybox.System.ClockTime

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)


[show all](#)

## 概述

Represents the current local time.

ClockTime 提供了一种便捷方式，可以以易于使用的格式获取当前时间，而无需执行时区转换或基于时间的算术运算。ClockTime 提供的值可能需要格式化，才能在应用中正确显示。

## 另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)

- [Number.format()](/connect-iq/api-docs/Toybox/Lang/Number/#format-instance_function)


Example:

获取时间并将其打印到控制台

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

    夏令时偏移量。

- [**hour**](#hour-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    基于 24 小时制的小时数。

- [**min**](#min-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    当前小时中的分钟。

- [**sec**](#sec-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    当前分钟内的秒数。

- [**timeZoneOffset**](#timeZoneOffset-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    以秒为单位的 UTC 时间偏移量。


## 实例属性详情

### var dst as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

夏令时偏移量。

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

当前小时中的分钟。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var sec as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前分钟内的秒数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var timeZoneOffset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

以秒为单位的 UTC 时间偏移量。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
