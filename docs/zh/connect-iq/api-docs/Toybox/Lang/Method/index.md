---
title: "Class: Toybox.Lang.Method"
---
# Class: Toybox.Lang.Method

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


[show all](#)

## Overview

Method is a class that represents a callback, or a function that can be used as an argument to another function. You can create one using the [method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function) call, and invoke the Method using the [invoke()](/connect-iq/api-docs/Toybox/Lang/Method/#invoke-instance_function) method.

## See Also:

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Timer](/connect-iq/api-docs/Toybox/Timer/)

-   [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)


Example:

Using a callback function with a Timer

```
using Toybox.Timer;

var myCount = 0;

function timerCallback() {
    myCount += 1;
}

myTimer = new Timer.Timer();
myTimer.start(method(:timerCallback), 1000, true);
```

Example:

Invoking a Method

```
using Toybox.Lang;

function sensorIterator(type, options) {
    var sensors = [
        :getHeartRateHistory,
        :getTemperatureHistory,
        :getPressureHistory,
        :getElevationHistory
    ];

    var getSensorHistory = new Lang.Method(Toybox.SensorHistory, sensors[type]);
    return getSensorHistory.invoke(options);
}

enum {
    HEARTRATE,
    TEMPERATURE,
    PRESSURE,
    ELEVATION
}

var elevationIter = sensorIterator(ELEVATION, {:period => 10 });
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get a hash code value for a Method.

-   [**initialize**](#initialize-instance_function)(aClass, aMethod as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))

    Method Constructor.

-   [**invoke**](#invoke-instance_function)(parameters...) [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    Invoke a Method.


## Instance Method Details

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get a hash code value for a Method. This computes a 32-bit Number that is typically used as an index when placing Objects into a Dictionary. Hash code values have the following characteristics:

-   The computed hash code is constant for the lifetime of an Object

-   If two Objects are equal, their hash codes will be equal


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A hash code for the Method


See Also:

-   [Hash Function](https://en.wikipedia.org/wiki/Hash_function)

-   [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API Level 1.0.0

### **initialize(aClass, aMethod as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))**

Method Constructor.

Parameters:

-   aClass —

    Classdef of method (e.g. Toybox.SensorHistory) or a class instance.

-   aMethod — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    Symbol of class method


Since:

API Level 1.0.0

### **invoke(parameters...)** [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

Invoke a Method.

Parameters:

-   parameters... — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The parameters required by the invoked Method


Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The return value from the invoked Method


Since:

API Level 1.0.0
