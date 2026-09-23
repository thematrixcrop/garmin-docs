---
title: "Class: Toybox.Weather.DailyForecast"
---
# Class: Toybox.Weather.DailyForecast

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Weather.DailyForecast](/connect-iq/api-docs/Toybox/Weather/DailyForecast/)


[show all](#)

## Overview

Represents the forecast for a given day.

Since:

API Level 3.2.0

## Instance Member Summary [collapse](#)

-   [**condition**](#condition-var) as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

    The weather condition.

-   [**forecastTime**](#forecastTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    The time the forecast is valid in UTC time.

-   [**highTemperature**](#highTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The high temperature in Celsius.

-   [**lowTemperature**](#lowTemperature-var) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

    The low temperature in Celsius.

-   [**precipitationChance**](#precipitationChance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The chance of precipitation \[0-100%\].


## Instance Attribute Details

### var condition as [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) or **Null**

The weather condition

Since:

API Level 3.2.0

Returns:

-   [Weather.Condition](/connect-iq/api-docs/Toybox/Weather/#Condition-module) —

    a Weather.CONDITION\_\* value


### var forecastTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

The time the forecast is valid in UTC time

Since:

API Level 3.2.0

Returns:

-   [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)

### var highTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The high temperature in Celsius

Since:

API Level 3.2.0

Returns:

-   [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    or `null`


### var lowTemperature as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or **Null**

The low temperature in Celsius

Since:

API Level 3.2.0

Returns:

-   [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) —

    or `null`


### var precipitationChance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The chance of precipitation \[0-100%\]

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    or `null`
