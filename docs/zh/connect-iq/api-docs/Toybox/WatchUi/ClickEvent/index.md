---
title: "Class: Toybox.WatchUi.ClickEvent"
---
# Class: Toybox.WatchUi.ClickEvent

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


[show all](#)

## Overview

ClickEvent is an object sent to [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) there is tap interaction with a device's touch screen.

## See Also:

-   [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onTap(clickEvent) {
        System.println(clickEvent.getCoordinates()); // e.g. [36, 40]
        System.println(clickEvent.getType());        // CLICK_TYPE_TAP = 0
        return true;
    }
}
```

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

-   [**getCoordinates**](#getCoordinates-instance_function)() as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

    Get the coordinates of a click event.

-   [**getType**](#getType-instance_function)() as [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module)

    Get the type of click event.


## Instance Method Details

### **getCoordinates()** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Get the coordinates of a click event.

Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An array containing the x and y coordinates of the click event as [Numbers](/connect-iq/api-docs/Toybox/Lang/Number/)


Since:

API Level 1.0.0

### **getType()** as [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module)

Get the type of click event.

Returns:

-   [WatchUi.ClickType](/connect-iq/api-docs/Toybox/WatchUi/#ClickType-module) —

    A [WatchUi.CLICK\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#CLICK_TYPE_TAP-const) value


Since:

API Level 1.0.0
