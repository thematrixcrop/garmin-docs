---
title: "Class: Toybox.Weather.CurrentConditions"
---
# 类：Toybox.Weather.CurrentConditions

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Weather.CurrentConditions](/connect-iq/api-docs/Toybox/Weather/CurrentConditions/)


[show all](#)

## 概述

表示最近缓存的天气状况。

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**cloudCover**](#cloudCover-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    云量，范围为 \\[0-100%\\]。

- [**condition**](#condition-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    当前天气状况。

- [**dewPoint**](#dewPoint-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    露点温度，单位为摄氏度。

- [**feelsLikeTemperature**](#feelsLikeTemperature-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    风寒指数或体感温度，单位为摄氏度。

- [**highTemperature**](#highTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    当天预报的最高温度，单位为摄氏度。

- [**lowTemperature**](#lowTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    当天预报的最低温度，单位为摄氏度。

- [**observationLocationName**](#observationLocationName-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null** deprecated

    观测位置的文本描述。

- [**observationLocationPosition**](#observationLocationPosition-var) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

    观测到这些状况的位置。

- [**observationTime**](#observationTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    观测到状况时的 UTC 时间。

- [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    降水概率，范围为 \\[0-100%\\]。

- [**pressure**](#pressure-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    以帕斯卡（Pa）为单位的气压。

- [**relativeHumidity**](#relativeHumidity-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    相对湿度，范围为 \\[0-100%\\]。

- [**temperature**](#temperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    当前温度，单位为摄氏度。

- [**uvIndex**](#uvIndex-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    紫外线指数，范围为 \\[0-10\\]。

- [**visibility**](#visibility-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    可见距离，单位为米。

- [**windBearing**](#windBearing-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    以度为单位的风向。

- [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    当前风速，单位为米每秒。


## 实例属性详情

### var cloudCover as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

云量，范围为 \[0-100%\]

Since:

API 级别 5.1.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var condition as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

当前天气状况

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    一个 Weather.CONDITION_* 值


### var dewPoint as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

露点温度，单位为摄氏度。

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var feelsLikeTemperature as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

风寒指数或体感温度，单位为摄氏度

Since:

API 级别 3.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var highTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

当天预报的最高温度，单位为摄氏度

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var lowTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

当天预报的最低温度，单位为摄氏度

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var observationLocationName as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

**此项已弃用**

此值可能会在 System 11 之后移除。

观测位置的文本描述。

如果应用没有位置权限，或底层天气提供程序未提供位置名称，则此值为 `null`。

Since:

API 级别 3.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    或 `null`。


### var observationLocationPosition as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

观测到这些状况的位置。

如果应用没有位置权限，则此值为 `null`。

Since:

API 级别 3.2.0

Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    或 `null`


### var observationTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

观测到状况时的 UTC 时间

Since:

API 级别 3.2.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

降水概率，范围为 \[0-100%\]

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var pressure as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

以帕斯卡（Pa）为单位的气压

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var relativeHumidity as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

相对湿度，范围为 \[0-100%\]

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

紫外线指数，范围为 \[0-10\]

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var visibility as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

可见距离，单位为米

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
