---
title: "Class: Toybox.WatchUi.Selectable"
---
# Class: Toybox.WatchUi.Selectable

Inherits:

Toybox.WatchUi.Drawable

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

-   [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


[show all](#)

## Overview

A representation of an on-screen selectable object with defined states depending on selection mode.

## See Also:

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Note:

See the Selectable sample distributed with the SDK for an example of the use of the Selectable class

Since:

API Level 2.1.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


## Direct Known Subclasses

[WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)

## Instance Member Summary [collapse](#)

-   [**stateDefault**](#stateDefault-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The default state of a Selectable object.

-   [**stateDisabled**](#stateDisabled-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The disabled state of a Selectable object.

-   [**stateHighlighted**](#stateHighlighted-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The highlighted state of a Selectable object.

-   [**stateSelected**](#stateSelected-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The selected state of a Selectable object.


## Instance Method Summary [collapse](#)

-   [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    Draw the Selectable to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

-   [**getState**](#getState-instance_function)() as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

    Get the current state of a Selectable object.

-   [**initialize**](#initialize-instance_function)(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

-   [**setState**](#setState-instance_function)(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as **Void**

    Set the current state of a Selectable object.


## Instance Attribute Details

### var stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The default state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the default state of the Selectable

Since:

API Level 2.1.0

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The disabled state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the disabled state of the Selectable

Since:

API Level 2.1.0

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The highlighted state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the highlighted state of the Selectable

Since:

API Level 2.1.0

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The selected state of a Selectable object.

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB representing the selected state of the Selectable

Since:

API Level 2.1.0

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

## Instance Method Details

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

Draw the Selectable to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

This method assumes that the device context has already been configured to the proper options.

Parameters:

-   dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    The device context


Since:

API Level 2.1.0

### **getState()** as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

Get the current state of a Selectable object.

Returns:

-   [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) —

    The current state:

    -   :stateDefault

    -   :stateHighlighted

    -   :stateSelected

    -   :stateDisabled



Since:

API Level 2.1.0

### **initialize(options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing options for the Selectable object

    -   :locX — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The absolute, on-screen x-coordinate for the Selectable object (required)

    -   :locY — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The absolute, on-screen y-coordinate for the Selectable object (required)

    -   :width — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The clip width of the Selectable object (required)

    -   :height — ([Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) —

        The clip height of the Selectable object (required)

    -   :stateDefault — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in default state (optional)

    -   :stateHighlighted — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in highlighted state (optional)

    -   :stateSelected — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in selected state (optional)

    -   :stateDisabled — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        The Drawable or color to display in disabled state (optional)


See Also:

-   [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


Since:

API Level 2.1.0

### **setState(state as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as **Void**

Set the current state of a Selectable object.

Parameters:

-   state — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The desired state:

    -   :stateDefault

    -   :stateHighlighted

    -   :stateSelected

    -   :stateDisabled



Since:

API Level 2.1.0

Throws:

-   ([WatchUi.InvalidSelectableStateException](/connect-iq/api-docs/Toybox/WatchUi/InvalidSelectableStateException/))
