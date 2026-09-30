---
title: "Class: Toybox.Time.Gregorian.Info"
---
# Class: Toybox.Time.Gregorian.Info

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

    The date, indicating the day of the month.

- [**day\_of\_week**](#day_of_week-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The day of the week (e.g.

- [**hour**](#hour-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    基于 24 小时制的小时数。

- [**min**](#min-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The minutes within an hour.

- [**month**](#month-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The month of the year (e.g.

- [**sec**](#sec-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The seconds within a minute.

- [**year**](#year-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The year.


## 实例属性详情

### var day as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The date, indicating the day of the month.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var day\_of\_week as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The day of the week (e.g. Monday, Tuesday, Wednesday, etc,).

注意：

The String values returned are language and device dependent.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The day of the week in the specified format:

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)): A number in the range 1 to 7. 1 = Sunday, 2 = Monday, ..., 7 = Saturday

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): The abbreviated day of the week: "Sun", "Mon", ... "Sat"

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): Currently the same as FORMAT\_MEDIUM



### var hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

基于 24 小时制的小时数。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var min as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The minutes within an hour.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var month as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The month of the year (e.g. January, February, March, etc.).

注意：

The String values returned are language and device dependent.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The month of the year in the specified format:

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)): A number in the range 1 to 12. 1 = January, 2= February, ..., 12 = December

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): The abbreviated month: "Jan", "Feb", ..., "Dec"

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/)): Currently the same as FORMAT\_MEDIUM



### var sec as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The seconds within a minute.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var year as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The year.

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
