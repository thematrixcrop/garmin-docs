---
title: "Class: Toybox.Time.Gregorian.Info"
---
# 类：Toybox.Time.Gregorian.Info

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Time.Gregorian.Info](/connect-iq/api-docs/Toybox/Time/Gregorian/Info/)


[show all](#)

## 概述

The Gregorian.Info class contains all of the necessary information to represent a Gregorian date.

The types of some returned values depend on the Time.FORMAT\_\* value specified when calling [info()](/connect-iq/api-docs/Toybox/Time/Gregorian/#info-instance_function) or [utcInfo()](/connect-iq/api-docs/Toybox/Time/Gregorian/#utcInfo-instance_function).

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**day**](#day-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    日期，表示月份中的某一天。

- [**day\_of\_week**](#day_of_week-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The day of the week (e.g.

- [**hour**](#hour-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    基于 24 小时制的小时数。

- [**min**](#min-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    一小时内的分钟数。

- [**month**](#month-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The month of the year (e.g.

- [**sec**](#sec-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    一分钟内的秒数。

- [**year**](#year-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    年份。


## 实例属性详情

### var day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

日期，表示月份中的某一天。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var day\_of\_week as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The day of the week (e.g. Monday, Tuesday, Wednesday, etc,).

注意：

返回的字符串值取决于语言和设备。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The day of the week in the specified format:

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/))：范围为 1 到 7 的数字。1 = 星期日，2 = 星期一，…，7 = 星期六

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：星期几的缩写：“Sun”、“Mon”、…、“Sat”

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): Currently the same as FORMAT\_MEDIUM



### var hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

基于 24 小时制的小时数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var min as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

一小时内的分钟数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The month of the year (e.g. January, February, March, etc.).

注意：

返回的字符串值取决于语言和设备。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The month of the year in the specified format:

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/))：范围为 1 到 12 的数字。1 = 一月，2 = 二月，…，12 = 十二月

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：月份的缩写：“Jan”、“Feb”、…、“Dec”

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): Currently the same as FORMAT\_MEDIUM



### var sec as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

一分钟内的秒数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

年份。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
