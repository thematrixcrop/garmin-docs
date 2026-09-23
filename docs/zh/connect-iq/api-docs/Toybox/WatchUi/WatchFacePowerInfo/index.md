---
title: "Class: Toybox.WatchUi.WatchFacePowerInfo"
---
# Class: Toybox.WatchUi.WatchFacePowerInfo

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/)


[show all](#)

## Overview

Power information provided when the power budget is exceeded during a call to [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function).

This is automatically passed to the [onPowerBudgetExceeded()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPowerBudgetExceeded-instance_function) method when it is invoked.

## See Also:

-   [Toybox.WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)


Since:

API Level 2.3.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


## Instance Member Summary [collapse](#)

-   [**executionTimeAverage**](#executionTimeAverage-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    The average partial update execution time [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) took to complete.

-   [**executionTimeLimit**](#executionTimeLimit-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    The maximum allowable partial update execution time [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) is allowed to take.


## Instance Attribute Details

### var executionTimeAverage as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

The average partial update execution time [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) took to complete.

Since:

API Level 2.3.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Average elapsed time per update in milliseconds (ms)


### var executionTimeLimit as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

The maximum allowable partial update execution time [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) is allowed to take.

Since:

API Level 2.3.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Maximum allowed time in milliseconds (ms)
