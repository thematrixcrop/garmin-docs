---
title: "Class: Toybox.WatchUi.Confirmation"
---
# Class: Toybox.WatchUi.Confirmation

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)


[show all](#)

## Overview

A representation of a confirmation dialog.

A Confirmation is a special View that presents the user with a yes/no question. After an option is selected, the registered [onResponse()](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/#onResponse-instance_function) method will be called. A Confirmation is pushed using [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function), which provides a [ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) as the input delegate.

## See Also:

-   [Toybox.WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)

-   [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


Note:

The look and feel of a confirmation dialog is device-specific.

Example:

```
using Toybox.WatchUi;

var message = "Continue?";
dialog = new WatchUi.Confirmation(message);
WatchUi.pushView(
    dialog,
    new ConfirmationDelegate(),
    WatchUi.SLIDE_IMMEDIATE
);
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

-   [**initialize**](#initialize-instance_function)(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))

    Constructor.


## Instance Method Details

### **initialize(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))**

Constructor

Parameters:

-   message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The confirmation message to display in the confirmation dialog


Since:

API Level 1.0.0
