---
title: "Class: Toybox.Weather.DailyForecast"
---
# 类：Toybox.Weather.DailyForecast

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Weather.DailyForecast](/connect-iq/api-docs/Toybox/Weather/DailyForecast/)


[show all](#)

## 概述

表示指定日期的天气预报。

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**condition**](#condition-var) as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

    天气状况。

- [**forecastTime**](#forecastTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    预报在 UTC 时间中的有效时间。

- [**highTemperature**](#highTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The high temperature in Celsius.

- [**lowTemperature**](#lowTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The low temperature in Celsius.

- [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The chance of precipitation \[0-100%\].


## 实例属性详情

### var condition as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

天气状况。

Since:

API 级别 3.2.0

Returns:

- [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) —

    一个 Weather.CONDITION_* 值


### var forecastTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

预报在 UTC 时间中的有效时间。

Since:

API 级别 3.2.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var highTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The high temperature in Celsius

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var lowTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The low temperature in Celsius

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The chance of precipitation \[0-100%\]

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`
