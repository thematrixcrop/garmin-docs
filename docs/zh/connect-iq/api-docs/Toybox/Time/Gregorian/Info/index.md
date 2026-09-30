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

Gregorian.Info 类包含表示公历日期所需的全部信息。

某些返回值的类型取决于调用 [info()](/connect-iq/api-docs/Toybox/Time/Gregorian/#info-instance_function) 或 [utcInfo()](/connect-iq/api-docs/Toybox/Time/Gregorian/#utcInfo-instance_function) 时指定的 Time.FORMAT\_\* 值。

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**day**](#day-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    日期，表示月份中的某一天。

- [**day\_of\_week**](#day_of_week-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    星期几（例如

- [**hour**](#hour-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    基于 24 小时制的小时数。

- [**min**](#min-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    一小时内的分钟数。

- [**month**](#month-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    年份中的月份（例如

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

星期几（例如星期一、星期二、星期三等）。

注意：

返回的字符串值取决于语言和设备。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    指定格式的星期几：

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/))：范围为 1 到 7 的数字。1 = 星期日，2 = 星期一，…，7 = 星期六

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：星期几的缩写：“Sun”、“Mon”、…、“Sat”

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：当前与 FORMAT\_MEDIUM 相同



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

年份中的月份（例如 January、February、March 等）。

注意：

返回的字符串值取决于语言和设备。

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    指定格式的年份中的月份：

- FORMAT\_SHORT ([Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/))：范围为 1 到 12 的数字。1 = 一月，2 = 二月，…，12 = 十二月

- FORMAT\_MEDIUM ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：月份的缩写：“Jan”、“Feb”、…、“Dec”

- FORMAT\_LONG ([Toybox::Lang::String](/connect-iq/api-docs/Toybox/Lang/String/))：当前与 FORMAT\_MEDIUM 相同



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
