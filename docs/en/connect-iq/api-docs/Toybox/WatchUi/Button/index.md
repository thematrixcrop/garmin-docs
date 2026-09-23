---
title: "Class: Toybox.WatchUi.Button"
---
# Class: Toybox.WatchUi.Button

Inherits:

Toybox.WatchUi.Selectable

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

-   [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

-   [Toybox.WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)


[show all](#)

## Overview

A representation of a Selectable button.

Button objects are mappable to a BehaviorDelegate method on selection.

## See Also:

-   [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)


Note:

See the Selectable sample distributed with the SDK for an example of the use of the Button class

Since:

API Level 2.1.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Glance

-   Watch App

-   Watch Face

-   Widget


## Instance Member Summary [collapse](#)

-   [**background**](#background-var) as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    The Button background A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value, or 24-bit integer of the form 0xRRGGBB to be drawn before the current Selectable state is drawn.

-   [**behavior**](#behavior-var) as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

    A Symbol describing the behavior method executed when button is selected.


## Instance Method Summary [collapse](#)

-   [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    Draw the Button to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

-   [**initialize**](#initialize-instance_function)(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor Initializes a Button object's foreground, background, and behavior.


## Instance Attribute Details

### var background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

The Button background

A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value, or 24-bit integer of the form 0xRRGGBB to be drawn before the current Selectable state is drawn.

Since:

API Level 2.1.0

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

### var behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**

A Symbol describing the behavior method executed when button is selected.

This Symbol must be a member of the active View object's registered BehaviorDelegate, such as :onBack, but may also be a Symbol from an extended class. If the value is `null`, then a [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/) will be issued.

Since:

API Level 2.1.0

See Also:

-   [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


Returns:

-   [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)

## Instance Method Details

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

Draw the Button to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

This method assumes that the device context has already been configured to the proper options.

Parameters:

-   dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    The device context


Since:

API Level 2.1.0

### **initialize(options as { :behavior as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :background as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :stateDefault as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateHighlighted as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateSelected as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :stateDisabled as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor Initializes a Button object's foreground, background, and behavior. The Button must be registered during [setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) in order to be usable.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing options for the Button object

    -   :behavior — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

        A Symbol object to call when the Button is selected; set to `null` to use a [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/) (optional)

    -   :background — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        A [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) constant, or 24-bit integer of the form 0xRRGGBB (optional)


See Also:

-   [Selectable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#initialize-instance_function)


Since:

API Level 2.1.0
