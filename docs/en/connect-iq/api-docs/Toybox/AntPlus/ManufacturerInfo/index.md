---
title: "Class: Toybox.AntPlus.ManufacturerInfo"
---
# Class: Toybox.AntPlus.ManufacturerInfo

Inherits:

Toybox.AntPlus.CommonData

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

-   [Toybox.AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/)


[show all](#)

## Overview

A class containing information from the Manufacturer's Information ANT+ common page.

Fields may return `null` so you should `null` check values before using them.

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.Device.getManufacturerInfo(); already called
var hwRevision = ManufacturerInfo.hwRevision;
var manufacturerId = ManufacturerInfo.manufacturerId;
var modelNumber = ManufacturerInfo.modelNumber;

System.println("Current hwRevision is: " + hwRevision);
System.println("Current manufacturerId is: " + manufacturerId);
System.println("Current modelNumber is: " + modelNumber);
```

Since:

API Level 2.2.0

## Instance Member Summary [collapse](#)

-   [**hwRevision**](#hwRevision-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Hardware revision.

-   [**manufacturerId**](#manufacturerId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Manufacturer ID.

-   [**modelNumber**](#modelNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Model number.


## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)()

    Constructor.


## Instance Attribute Details

### var hwRevision as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Hardware revision.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The manufacturer hardware revision


### var manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Manufacturer ID.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The manufacturer ID


### var modelNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Model number.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The manufacturer model number


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 2.2.0
