---
title: "Class: Toybox.Math.FirFilter"
---
# Class: Toybox.Math.FirFilter

Inherits:

Toybox.Math.Filter

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)

-   [Toybox.Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/)


[show all](#)

## Overview

Finite Impulse Response (FIR) filter implementation.

## See Also:

-   [FirFilters](https://en.wikipedia.org/wiki/Finite_impulse_response)


Example:

Shows the constructor and implementation for filter use with accelerometer data. Borrowed from the PitchCounter sample included in the SDK.

```
using Toybox.Math;
var mX = [0];
var mY = [0];
var mZ = [0];
var mFilter;

// Constructor
function initialize() {
    // initialize FIR filter
    var options = {
        :coefficients => [ -0.0278f, 0.9444f, -0.0278f ],
        :gain => 0.001f
    };

    try {
        mFilter = new Math.FirFilter(options);
    }
    catch(e) {
        System.println(e.getErrorMessage());
    }
}

// Callback to receive accelerometer data
function accel_callback(sensorData) {
    mX = mFilter.apply(sensorData.accelerometerData.x);
    mY = sensorData.accelerometerData.y;
    mZ = sensorData.accelerometerData.z;
    onAccelData();
}
```

Since:

API Level 2.3.0

## Instance Method Summary [collapse](#)

-   [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>
-   [**initialize**](#initialize-instance_function)(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })

    Constructor.


## Instance Method Details

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

Since:

API Level 2.3.0

### **initialize(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })**

Constructor

Parameters:

-   dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing filter settings.

    -   :coefficients — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        An Array of Float values that specify the filter coefficients. A ResourceId referencing a JSON Array resource can also be used here.

    -   :gain — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        A Float value that specifies a multiplier to be applied to the coefficients.


Since:

API Level 2.3.0

Throws:

-   ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    If the Dictionary does not have valid coefficients for filter or the :gain field is missing. Will also be thrown if an invalid JSON ResourceId is specified for coefficients instead of an array
