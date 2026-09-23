---
title: "Class: Toybox.AntPlus.ProductInfo"
---
# Class: Toybox.AntPlus.ProductInfo

Inherits:

Toybox.AntPlus.CommonData

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

-   [Toybox.AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)


[show all](#)

## Overview

Class containing information from the Product Information ANT+ common page.

Fields may return `null` so you should `null` check values before using them.

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.Device.getProductInfo(); already called
var serial = ProductInfo.serial;
var swRevisionMain = ProductInfo.swRevisionMain;
var swRevisionSupplemental = ProductInfo.swRevisionSupplemental;

System.println("Current serial is: " + serial);
System.println("Current swRevisionMain is: " + swRevisionMain);
System.println("Current swRevisionSupplemental is: " + swRevisionSupplemental);
```

Since:

API Level 2.2.0

## Instance Member Summary [collapse](#)

-   [**serial**](#serial-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The serial number.

-   [**swRevisionMain**](#swRevisionMain-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The main software revision.

-   [**swRevisionSupplemental**](#swRevisionSupplemental-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The supplemental software revision.


## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)()

    Constructor.


## Instance Attribute Details

### var serial as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The serial number.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The product serial number


### var swRevisionMain as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The main software revision.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The main software revision of the product


### var swRevisionSupplemental as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The supplemental software revision.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The supplemental software revision of the product


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 2.2.0
