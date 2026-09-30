---
title: "类：Toybox.Weather.DailyForecast"
---
# 类：Toybox.Weather.DailyForecast

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Weather.DailyForecast](/connect-iq/api-docs/Toybox/Weather/DailyForecast/)


[显示全部](#)

## 概述

表示指定日期的天气预报。

起始版本：

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**condition**](#condition-var) as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

    天气状况。

- [**forecastTime**](#forecastTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    预报在 UTC 时间中的有效时间。

- [**highTemperature**](#highTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    最高温度，单位为摄氏度。

- [**lowTemperature**](#lowTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    摄氏低温。

- [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    降水概率，范围为 \[0-100%\]。


## 实例属性详情

### var condition as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

天气状况。

起始版本：

API 级别 3.2.0

返回：

- [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) —

    一个 Weather.CONDITION_* 值


### var forecastTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

预报在 UTC 时间中的有效时间。

起始版本：

API 级别 3.2.0

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var highTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

最高温度，单位为摄氏度

起始版本：

API 级别 3.2.0

返回：

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var lowTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

摄氏低温

起始版本：

API 级别 3.2.0

返回：

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

降水概率，范围为 \[0-100%\]

起始版本：

API 级别 3.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`
