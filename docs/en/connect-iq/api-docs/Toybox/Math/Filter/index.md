---
title: "Class: Toybox.Math.Filter"
---
# Class: Toybox.Math.Filter

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)


[show all](#)

## Overview

This is the base class for filters.

Filters are devices or processes that remove some unwanted components or features from a signal or set of data. More detailed examples of filters can be found in the [FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) and [IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) definitions.

## See Also:

-   [Filters](https://en.wikipedia.org/wiki/Filter_(signal_processing)#Filters_for_removing_noise_from_data)


Note:

An exception will be thrown if the base Filter class version of this method is called.

Example:

This shows how a filter's method can be used on a set of data

```
using Toybox.Math;
    var exampleFilter;
    var interestingCoefficients;
    var importantGain;
    var messyData;
    var filteredData;

    // Constructor
    function initialize() {

        // initialize filter
        var options = {
            :coefficients => [interestingCoefficients],
            :gain => importantGain
        };

        try {
            exampleFilter = new Math.FirFilter(options);
        }
        catch(e) {
            System.println(e.getErrorMessage());
        }
    }

    // apply filter
    function exampleApplyFilter(messyData) {
        filteredData = exampleFilter.apply(messyData);
        return filteredData;
    }
```

Since:

API Level 2.3.0

## Direct Known Subclasses

[Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/), [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/)

## Instance Method Summary [collapse](#)

-   [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

    Apply the Filter to an Array of samples.

-   [**initialize**](#initialize-instance_function)(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))

    Constructor.


## Instance Method Details

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

Apply the Filter to an Array of samples.

Note:

An Exception will be thrown if the base Filter class version of this method is called.

Parameters:

-   data —

    Array of samples to apply filter


Returns:

-   Array of samples with filter applied.


Since:

API Level 2.3.0

Throws:

-   ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    If called on base class Filter object


### **initialize(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))**

Constructor

Parameters:

-   dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Unused. Preserves argument count for compatibility


Since:

API Level 2.3.0
