---
title: "Class: Toybox.AntPlus.BatteryStatus"
---
# Class: Toybox.AntPlus.BatteryStatus

Inherits:

Toybox.AntPlus.CommonData

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

-   [Toybox.AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/)


[show all](#)

## Overview

A class containing information from the Battery Status ANT+ common page.

Fields may return `null` so you should `null` check values before using them.

## See Also:

-   [ANT Downloads & Resources (ANT+ Common Pages)](https://www.thisisant.com/resources/common-data-pages/)


Since:

API Level 2.2.0

## Instance Member Summary [collapse](#)

-   [**batteryStatus**](#batteryStatus-var) as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

    The [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) value of the battery.

-   [**batteryVoltage**](#batteryVoltage-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The voltage, -1 is invalid.

-   [**operatingTime**](#operatingTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The operating time in seconds.


## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)()

    Constructor.


## Instance Attribute Details

### var batteryStatus as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

The [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) value of the battery.

Since:

API Level 2.2.0

Returns:

-   [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) —

    The battery status of the ANT+ device as a number


### var batteryVoltage as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The voltage, -1 is invalid

Since:

API Level 2.2.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    The voltage of the ANT+ device


### var operatingTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The operating time in seconds.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The operating time of the ANT+ device


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 2.2.0
