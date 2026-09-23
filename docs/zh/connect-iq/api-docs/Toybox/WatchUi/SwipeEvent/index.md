---
title: "Class: Toybox.WatchUi.SwipeEvent"
---
# Class: Toybox.WatchUi.SwipeEvent

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)


[show all](#)

## Overview

SwipeEvent is an object sent to [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) when there is swipe interaction with the device's touch screen.

## See Also:

-   [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onSwipe(swipeEvent) {
        System.println(swipeEvent.getDirection()); // e.g. SWIPE_RIGHT = 1
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

-   [**getDirection**](#getDirection-instance_function)() as [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module)

    Get the direction of the swipe.


## Instance Method Details

### **getDirection()** as [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module)

Get the direction of the swipe.

Returns:

-   [WatchUi.SwipeDirection](/connect-iq/api-docs/Toybox/WatchUi/#SwipeDirection-module) —

    A [WatchUi.SWIPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) value


Since:

API Level 1.0.0
