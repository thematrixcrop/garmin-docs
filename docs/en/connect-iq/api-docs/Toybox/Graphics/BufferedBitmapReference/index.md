---
title: "Class: Toybox.Graphics.BufferedBitmapReference"
---
# Class: Toybox.Graphics.BufferedBitmapReference

Inherits:

Toybox.Graphics.ResourceReference

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)

-   [Toybox.Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/)


[show all](#)

## Overview

Object that references the bitmap resource allocated from the graphics memory pool rather than form the app's local memory.

Since:

API Level 4.0.0

## Instance Method Summary [collapse](#)

-   [**getHeight**](#getHeight-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Load the resource, then get the height of a bitmap resource referenced.

-   [**getWidth**](#getWidth-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Load the resource, then get the width of a bitmap resource referenced.


## Instance Method Details

### **getHeight()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Load the resource, then get the height of a bitmap resource referenced

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Height of the bitmap in pixels


Since:

API Level 4.0.0

Throws:

-   ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    Thrown if resource cannot be loaded or restored because there isn't enough free pool to load the resource


### **getWidth()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Load the resource, then get the width of a bitmap resource referenced

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Width of the bitmap in pixels


Since:

API Level 4.0.0

Throws:

-   ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    Thrown if resource cannot be loaded or restored because there isn't enough free pool to load the resource
