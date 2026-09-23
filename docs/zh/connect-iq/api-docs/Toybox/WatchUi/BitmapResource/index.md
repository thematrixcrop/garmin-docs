---
title: "Class: Toybox.WatchUi.BitmapResource"
---
# Class: Toybox.WatchUi.BitmapResource

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)


[show all](#)

## Overview

A representation of a bitmap resource.

BitmapResource objects are returned by the [loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) method.

Since:

API Level 1.0.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


## Instance Method Summary [collapse](#)

-   [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the height of a bitmap resource.

-   [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the width of a bitmap resource.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Get info about a bitmap resource as a String.


## Instance Method Details

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the height of a bitmap resource.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Height of the bitmap in pixels


Since:

API Level 1.0.0

### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the width of a bitmap resource.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Width of the bitmap in pixels


Since:

API Level 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Get info about a bitmap resource as a String.

The info String is formatted as "Bitmap X x Y" where "X" is the width of the bitmap and "Y" is the height.

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the BitmapResource object


Since:

API Level 1.0.0
