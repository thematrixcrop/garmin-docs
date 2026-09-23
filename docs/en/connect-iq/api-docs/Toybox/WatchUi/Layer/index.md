---
title: "Class: Toybox.WatchUi.Layer"
---
# Class: Toybox.WatchUi.Layer

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)


[show all](#)

## Overview

A representation of View Layer that will be drawn (bitblit) by system onto the screen during screen update, which include regular View update (onUpdate/onPartialUpdate) as well as animation playback if supported.

Since:

API Level 3.1.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


## Direct Known Subclasses

[WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)

## Typedef Summary [collapse](#)

-   [**Options**](#Options-named_type) as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) }

## Instance Method Summary [collapse](#)

-   [**getDc**](#getDc-instance_function)() as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

    Get the [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) to draw on.

-   [**getId**](#getId-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    Layer identifier, can be `null`.

-   [**getX**](#getX-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Get X-axis absolute draw offset relative to the screen origin.

-   [**getY**](#getY-instance_function)() as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Get Y-axis absolute draw offset relative to the screen origin.

-   [**initialize**](#initialize-instance_function)(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)

    Constructor.

-   [**isVisible**](#isVisible-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)
-   [**setLocation**](#setLocation-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set draw offset relative to the screen origin.

-   [**setVisible**](#setVisible-instance_function)(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    Set visibility of the layer, if the layer hasn't been added to a view, or the view isn't on top of view stack, the value will be saved.

-   [**setX**](#setX-instance_function)(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set X-axis absolute draw offset relative to the screen origin.

-   [**setY**](#setY-instance_function)(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)) as **Void**

    Set Y-axis absolute draw offset relative to the screen origin.


## Typedef Details

### **Options** as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) }

Since:

API Level 3.1.0

## Instance Method Details

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

Get the [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) to draw on.

Since:

API Level 3.1.0

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

Layer identifier, can be `null`

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    the identifier of the layer, can be `null`


Since:

API Level 3.1.0

### **getX()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Get X-axis absolute draw offset relative to the screen origin

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    X-axis absolute draw offset relative to the screen origin


Since:

API Level 3.1.0

### **getY()** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Get Y-axis absolute draw offset relative to the screen origin

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Y-axis absolute draw offset relative to the screen origin


Since:

API Level 3.1.0

### **initialize(options as [Layer.Options](/connect-iq/api-docs/Toybox/WatchUi/Layer/#Options-named_type) or **Null**)**

Constructor

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary of options; can be `null`, which defaults to full screen layer

    -   :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The x coordinate of the top left corner of the layer (optional defaults to 0)

    -   :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The y coordinate of the top left corner of the layer (optional defaults to 0)

    -   :width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The width of the layers in pixels,

    -   :height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The height of the layers in pixels,

    -   :colorDepth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        hidden option, Color depth in terms of bits/pixel, when missing, default to system value.

    -   :visibility — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        `true` if the layer is visible, otherwise `false` (optional, default to +true+)

    -   :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        unique object for identification (optional)


Since:

API Level 3.1.0

### **isVisible()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the layer is visible otherwise `false`


Since:

API Level 3.1.0

### **setLocation(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set draw offset relative to the screen origin

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    new x offset from screen origin

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    new y offset from screen origin


Since:

API Level 3.1.0

### **setVisible(visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

Set visibility of the layer, if the layer hasn't been added to a view, or the view isn't on top of view stack, the value will be saved.

Parameters:

-   visible — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    `true` for visible (or to show), `false` for invisible (or to hide).


Since:

API Level 3.1.0

### **setX(x as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set X-axis absolute draw offset relative to the screen origin

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    new x offset from screen origin


Since:

API Level 3.1.0

### **setY(y as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type))** as **Void**

Set Y-axis absolute draw offset relative to the screen origin

Parameters:

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    new y offset from screen origin


Since:

API Level 3.1.0
