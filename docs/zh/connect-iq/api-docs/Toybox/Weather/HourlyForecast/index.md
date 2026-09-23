---
title: "Class: Toybox.Weather.HourlyForecast"
---
# Class: Toybox.Weather.HourlyForecast

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Weather.HourlyForecast](/connect-iq/api-docs/Toybox/Weather/HourlyForecast/)


[show all](#)

## Overview

Represents the forecast for a given hour

Since:

API Level 3.2.0

## Instance Member Summary [collapse](#)

-   [**cloudCover**](#cloudCover-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The cloud cover \[0-100%\].

-   [**condition**](#condition-var) as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

    The weather condition.

-   [**dewPoint**](#dewPoint-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The dew point in Celsius.

-   [**forecastTime**](#forecastTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    The time the forecast is valid in UTC time.

-   [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The chance of precipitation \[0-100%\].

-   [**relativeHumidity**](#relativeHumidity-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The relative humidity \[0-100%\].

-   [**temperature**](#temperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The current temperature in Celsius.

-   [**uvIndex**](#uvIndex-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The UV index \[0-10\].

-   [**windBearing**](#windBearing-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The wind bearing in degrees.

-   [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The current wind speed in meters per second.


## Instance Attribute Details

### var cloudCover as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The cloud cover \[0-100%\]

Since:

API Level 5.1.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    or `null`


### var condition as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

The weather condition

Since:

API Level 3.2.0

Returns:

-   [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) —

    a Weather.CONDITION\_\* value


### var dewPoint as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The dew point in Celsius

Since:

API Level 5.1.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    or `null`


### var forecastTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

The time the forecast is valid in UTC time

Since:

API Level 3.2.0

Returns:

-   [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The chance of precipitation \[0-100%\]

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    or `null`


### var relativeHumidity as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The relative humidity \[0-100%\]

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    or `null`


### var temperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The current temperature in Celsius

Since:

API Level 3.2.0

Returns:

-   [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    or `null`


### var uvIndex as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The UV index \[0-10\]

Since:

API Level 5.1.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    or `null`


### var windBearing as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The wind bearing in degrees. North = 0, East = 90, South = 180, West = 270

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    or `null`


### var windSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The current wind speed in meters per second

Since:

API Level 3.2.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    or `null`
