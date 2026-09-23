---
title: "Class: Toybox.WatchUi.Menu"
---
# Class: Toybox.WatchUi.Menu

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)


[show all](#)

## Overview

A representation of an on-screen menu.

A Menu is a special View that presents the user with a list of options. After an option is selected, the registered [onMenuItem()](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/#onMenuItem-instance_function) method will be called. While a Menu can be generated programmatically, they should generally be created as a resource.

A Menu is pushed using [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function), which provides a [MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/) as the input delegate.

## See Also:

-   [Toybox.WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)

-   [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


Note:

The look and feel of a menu is device-specific.

Example:

Build a simple menu programmatically

```
using Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        var menu = new WatchUi.Menu();
        var delegate;
        menu.setTitle("My Menu");
        menu.addItem("Item One", :one);
        menu.addItem("Item Two", :two);
        delegate = new MyMenuDelegate(); // a WatchUi.MenuInputDelegate
        WatchUi.pushView(menu, delegate, WatchUi.SLIDE_IMMEDIATE);
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


## Constant Summary

### Constant Variables

| Type | Name | Value | Since | Description |
| --- | --- | --- | --- | --- |
| Type | MAX\_SIZE | 16 |
API Level 1.0.0

 |

The maximum number of allowed entries in a Menu.

 |

## Instance Method Summary [collapse](#)

-   [**addItem**](#addItem-instance_function)(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), identifier as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    Add an entry to a Menu.

-   [**setTitle**](#setTitle-instance_function)(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

    Set a Menu title.


## Instance Method Details

### **addItem(label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), identifier as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

Add an entry to a Menu.

Parameters:

-   label — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The item text as a String or string ResourceId

-   identifier — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    A Symbol representing the Menu item value


Since:

API Level 1.0.0

### **setTitle(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

Set a Menu title.

Parameters:

-   title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The title text or a string ResourceId


Since:

API Level 1.0.0
