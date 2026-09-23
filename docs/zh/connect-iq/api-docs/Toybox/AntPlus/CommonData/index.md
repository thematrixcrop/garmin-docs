---
title: "Class: Toybox.AntPlus.CommonData"
---
# Class: Toybox.AntPlus.CommonData

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)


[show all](#)

## Overview

The CommonData object represents the information shared across all common data types.

Fields may return `null` so you should `null` check values before using them.

Since:

API Level 2.2.0

## Direct Known Subclasses

[AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/), [AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/), [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/), [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)

## Instance Member Summary [collapse](#)

-   [**identifier**](#identifier-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Component Identifier.

-   [**numComponents**](#numComponents-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Number of components in the system.


## Instance Attribute Details

### var identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Component Identifier.

Component IDs are defined on a by-ANT+-profile basis.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The identifier as a Number

    -   `null` if single-component

    -   Light index for bike lights.



### var numComponents as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Number of components in the system.

Since:

API Level 2.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of components
