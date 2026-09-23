---
title: "Class: Toybox.AntPlus.UserSettings"
---
# Class: Toybox.AntPlus.UserSettings

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)


[show all](#)

## Overview

Represents user configurations of fitness equipment for equipment that supports simulation training mode. Fields may return `null` so you should `null` check values before using them.

Since:

API Level 2.4.0

:::details Supported Devices

-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB

:::

## Instance Member Summary [collapse](#)

-   [**bikeWeight**](#bikeWeight-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The bike weight set for simulation training mode.

-   [**gearRatio**](#gearRatio-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The gear ratio set for simulation training mode.

-   [**userWeight**](#userWeight-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The user weight set for simulation training mode.

-   [**wheelDiameter**](#wheelDiameter-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The wheel diameter set for simulation training mode.


## Instance Attribute Details

### var bikeWeight as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The bike weight set for simulation training mode

Since:

API Level 2.4.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0-50kg range


### var gearRatio as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The gear ratio set for simulation training mode

Since:

API Level 2.4.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0.03-7.65 range


### var userWeight as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The user weight set for simulation training mode

Since:

API Level 2.4.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0-655.34 kg range


### var wheelDiameter as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The wheel diameter set for simulation training mode

Since:

API Level 2.4.0

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0-2.54m range
