---
title: "Class: Toybox.Weather.CurrentConditions"
---
# Class: Toybox.Weather.CurrentConditions

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Weather.CurrentConditions](/connect-iq/api-docs/Toybox/Weather/CurrentConditions/)


[show all](#)

## 概述

Represents the most recently cached weather conditions.

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**cloudCover**](#cloudCover-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The cloud cover \[0-100%\].

- [**condition**](#condition-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The current weather condition.

- [**dewPoint**](#dewPoint-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The dew point in Celsius.

- [**feelsLikeTemperature**](#feelsLikeTemperature-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The wind chill or heat index, in Celsius.

- [**highTemperature**](#highTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The forecasted high temperature for the day in Celsius.

- [**lowTemperature**](#lowTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The forecasted low temperature for the day in Celsius.

- [**observationLocationName**](#observationLocationName-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null** deprecated

    Textual description of the observation location.

- [**observationLocationPosition**](#observationLocationPosition-var) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

    Location where the conditions were observed.

- [**observationTime**](#observationTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    UTC time the conditions were observed.

- [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The chance of precipitation \[0-100%\].

- [**pressure**](#pressure-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The air pressure in Pascals (Pa).

- [**relativeHumidity**](#relativeHumidity-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The relative humidity \[0-100%\].

- [**temperature**](#temperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The current temperature in Celsius.

- [**uvIndex**](#uvIndex-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The UV index \[0-10\].

- [**visibility**](#visibility-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The visibility distance in meters.

- [**windBearing**](#windBearing-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The wind bearing in degrees.

- [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The current wind speed in meters per second.


## 实例属性详情

### var cloudCover as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The cloud cover \[0-100%\]

Since:

API 级别 5.1.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var condition as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The current weather condition

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    一个 Weather.CONDITION_* 值


### var dewPoint as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The dew point in Celsius

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var feelsLikeTemperature as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The wind chill or heat index, in Celsius

Since:

API 级别 3.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var highTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The forecasted high temperature for the day in Celsius

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var lowTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The forecasted low temperature for the day in Celsius

Since:

API 级别 3.2.0

Returns:

- [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    或 `null`


### var observationLocationName as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

**此项已弃用**

This value may be removed after System 11.

Textual description of the observation location.

If the app does not have the position permission or the underlying weather provider does not provide a location name, this will be `null`.

Since:

API 级别 3.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    or `null`.


### var observationLocationPosition as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) or **Null**

Location where the conditions were observed.

If the app does not have the position permission then this will be `null`.

Since:

API 级别 3.2.0

Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    或 `null`


### var observationTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

UTC time the conditions were observed

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


### var pressure as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The air pressure in Pascals (Pa)

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var relativeHumidity as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The relative humidity \[0-100%\]

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var temperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The current temperature in Celsius

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


### var visibility as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The visibility distance in meters

Since:

API 级别 5.1.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`


### var windBearing as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The wind bearing in degrees. North = 0, East = 90, South = 180, West = 270

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var windSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The current wind speed in meters per second

Since:

API 级别 3.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    或 `null`
