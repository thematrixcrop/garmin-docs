---
title: "Class: Toybox.WatchUi.BehaviorDelegate"
---
# Class: Toybox.WatchUi.BehaviorDelegate

Inherits:

Toybox.WatchUi.InputDelegate

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)

-   [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)


[show all](#)

## Overview

BehaviorDelegate handles behavior input events.

A BehaviorDelegate differs from an [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) in that it acts upon device-independent behaviors, such as "next page" and "previous page" instead of device-specific button presses. For example, these behaviors might be mapped to swipe left and swipe right inputs on touch screen devices, while on non-touch screen devices these behaviors might be mapped to physical buttons.

Since BehaviorDelegate extends InputDelegate, so it can also act on basic inputs as well. If a BehaviorDelegate returns `true` for a function (indicating the input was used) then the InputDelegate function that corresponds to the behavior will not be called.

## See Also:

-   [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class MyBehaviorDelegate extends BehaviorDelegate {
    // Detect Menu behavior
    function onMenu() {
        System.println("Menu behavior triggered");
        return false; // allow InputDelegate function to be called
    }
    // Detect Menu button input
    function onKey(keyEvent) {
        System.println(keyEvent.getKey()); // e.g. KEY_MENU = 7
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

-   [**initialize**](#initialize-instance_function)()

    Constructor.

-   [**onActionMenu**](#onActionMenu-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Action* *Menu* behavior.

-   [**onBack**](#onBack-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Back* behavior.

-   [**onMenu**](#onMenu-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Menu* behavior.

-   [**onNextMode**](#onNextMode-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Next* behavior.

-   [**onNextPage**](#onNextPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Next* *Page* behavior.

-   [**onPreviousMode**](#onPreviousMode-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Previous* *Mode* behavior.

-   [**onPreviousPage**](#onPreviousPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Previous* *Page* behavior.

-   [**onSelect**](#onSelect-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Represents the *Selection* behavior.


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 1.0.0

### **onActionMenu()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Action* *Menu* behavior.

This will be triggered when action menu is pushed. Invoke [WatchUi.showActionMenu](/connect-iq/api-docs/Toybox/WatchUi/#showActionMenu-instance_function) to push an action menu.

:::details Supported Devices

-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 5.1.1

### **onBack()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Back* behavior.

This is typically triggered by the back button ([KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const)).

Note:

Some devices interpret [SWIPE\_RIGHT](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_RIGHT-const) [SwipeEvents](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) as [KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const) events. On these devices, returning `false` will cause [onKey()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKey-instance_function) to be called rather than [onSwipe()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSwipe-instance_function).

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onMenu()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Menu* behavior.

This is typically triggered by the menu button ([KEY\_MENU](/connect-iq/api-docs/Toybox/WatchUi/#KEY_MENU-const)).

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onNextMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Next* behavior.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onNextPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Next* *Page* behavior.

This is typically triggered by the down button ([KEY\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#KEY_DOWN-const)) or by a [SWIPE\_UP](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) on a touch screen.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onPreviousMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Previous* *Mode* behavior.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onPreviousPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Previous* *Page* behavior.

This is typically triggered by the up button ([KEY\_UP](/connect-iq/api-docs/Toybox/WatchUi/#KEY_UP-const))) or by a [SWIPE\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_DOWN-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) on a touch screen.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.0.0

### **onSelect()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Represents the *Selection* behavior.

This is typically triggered by the Start/Enter button ([KEY\_ENTER](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ENTER-const)) or by a [CLICK\_TYPE\_TAP](/connect-iq/api-docs/Toybox/WatchUi/#CLICK_TYPE_TAP-const) [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/) on a touch screen.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if handled, otherwise `false`


Since:

API Level 1.2.0
