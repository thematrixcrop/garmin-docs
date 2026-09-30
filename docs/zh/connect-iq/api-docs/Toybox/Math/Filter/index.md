---
title: "Class: Toybox.Math.Filter"
---
# Class: Toybox.Math.Filter

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)


[show all](#)

## 概述

This is the base class for filters.

Filters are devices or processes that remove some unwanted components or features from a signal or set of data. More detailed examples of filters can be found in the [FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) and [IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) definitions.

## 另见：

- [Filters](https://en.wikipedia.org/wiki/Filter_(signal_processing)#Filters_for_removing_noise_from_data)


注意：

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

API 级别 2.3.0

## 直接已知子类

[Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/), [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/)

## 实例方法摘要 [collapse](#)

- [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

    Apply the Filter to an Array of samples.

- [**initialize**](#initialize-instance_function)(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))

    Constructor.


## 实例方法详情

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

Apply the Filter to an Array of samples.

注意：

An Exception will be thrown if the base Filter class version of this method is called.

Parameters:

- data —

    Array of samples to apply filter


Returns:

- Array of samples with filter applied.


Since:

API 级别 2.3.0

Throws:

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    If called on base class Filter object


### **initialize(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))**

Constructor

Parameters:

- dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Unused. Preserves argument count for compatibility


Since:

API 级别 2.3.0
