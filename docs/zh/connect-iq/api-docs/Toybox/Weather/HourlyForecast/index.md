---
title: "Class: Toybox.Weather.HourlyForecast"
---
# Class: Toybox.Weather.HourlyForecast

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Weather.HourlyForecast](/connect-iq/api-docs/Toybox/Weather/HourlyForecast/)


[show all](#)

## 概述

Represents the forecast for a given hour

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**cloudCover**](#cloudCover-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The cloud cover \[0-100%\].

- [**condition**](#condition-var) as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

    天气状况。

- [**dewPoint**](#dewPoint-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    露点温度，单位为摄氏度。

- [**forecastTime**](#forecastTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    预报在 UTC 时间中的有效时间。

- [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The chance of precipitation \[0-100%\].

- [**relativeHumidity**](#relativeHumidity-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The relative humidity \[0-100%\].

- [**temperature**](#temperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    当前温度，单位为摄氏度。

- [**uvIndex**](#uvIndex-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The UV index \[0-10\].

- [**windBearing**](#windBearing-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    以度为单位的风向。

- [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    当前风速，单位为米每秒。


## 实例属性详情

### var cloudCover as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The cloud cover \[0-100%\]

Since:

API 级别 5.1.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var condition as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

天气状况。

Since:

API 级别 3.2.0

Returns:

- [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) —

    一个 Weather.CONDITION_* 值


### var dewPoint as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

露点温度，单位为摄氏度。

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var forecastTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

预报在 UTC 时间中的有效时间。

Since:

API 级别 3.2.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The chance of precipitation \[0-100%\]

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var relativeHumidity as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The relative humidity \[0-100%\]

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var temperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

当前温度，单位为摄氏度。

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var uvIndex as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The UV index \[0-10\]

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var windBearing as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

以度为单位的风向。北 = 0，东 = 90，南 = 180，西 = 270

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var windSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

当前风速，单位为米每秒。

Since:

API 级别 3.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`
