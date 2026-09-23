---
title: "Class: Toybox.WatchUi.MenuInputDelegate"
---
# Class: Toybox.WatchUi.MenuInputDelegate

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)


[show all](#)

## Overview

MenuInputDelegate responds to a Menu selection.

This class should be extended to handle selected Menu items.

## See Also:

-   [Toybox.WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)


Example:

```
using Toybox.WatchUi;
using Toybox.System;

class MyMenuInputDelegate extends WatchUi.MenuInputDelegate {
    function initialize() {
        MenuInputDelegate.initialize();
    }

    function onMenuItem(item) {
        if (item == :item_1) {
            System.println("Item 1");
        } else if (item == :item_2) {
            System.println("Item 2");
        }
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

-   [**onMenuItem**](#onMenuItem-instance_function)(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    A Menu item was chosen.


## Instance Method Details

### **onMenuItem(item as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

A Menu item was chosen.

This method is called when a Menu item has been selected, and receives the Menu item as an argument.

Parameters:

-   item — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The identifier of the chosen Menu item


Since:

API Level 1.0.0
