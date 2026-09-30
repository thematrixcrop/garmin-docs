---
title: "类：Toybox.System.ClockTime"
---
# 类：Toybox.System.ClockTime

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.ClockTime](/connect-iq/api-docs/Toybox/System/ClockTime/)


[show all](#)

## 概述

表示当前本地时间。

ClockTime 提供了一种便捷方式，可以以易于使用的格式获取当前时间，而无需执行时区转换或基于时间的算术运算。ClockTime 提供的值可能需要格式化，才能在应用中正确显示。

## 另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)

- [Number.format()](/connect-iq/api-docs/Toybox/Lang/Number/#format-instance_function)


示例：

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

起始版本：

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

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

基于 24 小时制的小时数。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var min as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前小时中的分钟。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var sec as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前分钟内的秒数。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var timeZoneOffset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

以秒为单位的 UTC 时间偏移量。

起始版本：

API 级别 1.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
