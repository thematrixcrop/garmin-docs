---
title: "Class: Toybox.WatchUi.KeyEvent"
---
# Class: Toybox.WatchUi.KeyEvent

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


[show all](#)

## Overview

KeyEvent is an object sent to an [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) when a physical button on the device is pressed.

## See Also:

-   [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class InputDelegate extends WatchUi.BehaviorDelegate {
    function onKey(keyEvent) {
        System.println(keyEvent.getKey());  // e.g. KEY_MENU = 7
        System.println(keyEvent.getType()); // e.g. PRESS_TYPE_DOWN = 0
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

-   [**getKey**](#getKey-instance_function)() as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)

    Get the key value of this event.

-   [**getType**](#getType-instance_function)() as [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module)

    Get the type of click event.


## Instance Method Details

### **getKey()** as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)

Get the key value of this event.

Returns:

-   [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module) —

    A [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) value


Since:

API Level 1.0.0

### **getType()** as [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module)

Get the type of click event.

Returns:

-   [WatchUi.KeyPressType](/connect-iq/api-docs/Toybox/WatchUi/#KeyPressType-module) —

    A [WatchUi.PRESS\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#PRESS_TYPE_DOWN-const) value


Since:

API Level 1.1.2
