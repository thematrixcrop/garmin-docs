---
title: "Class: Toybox.Graphics.ResourceReference"
---
# Class: Toybox.Graphics.ResourceReference

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Graphics.ResourceReference](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/)


[show all](#)

## Overview

Object represents a reference for the resource allocated from the graphics memory pool rather than from the app's local memory. The underlying resource object could be temporarily purged from the system memory pool when all `strong` references are destroyed. The memory allocation is performed only when [ResourceReference::get()](/connect-iq/api-docs/Toybox/Graphics/ResourceReference/#get-instance_function) method is invoked.

Since:

API Level 4.0.0

## Direct Known Subclasses

[Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [Graphics.BufferedBitmapReference](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmapReference/), [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

## Typedef Summary [collapse](#)

-   [**Options**](#Options-named_type) as { :resource as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bufferedBitmap as { :bitmapResource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) } }

## Instance Method Summary [collapse](#)

-   [**get**](#get-instance_function)() as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or **Null**

    Get the underlying resource object referenced by the ResourceReference, this trigger either the allocate from the system memory pool or return the existing resource in the pool.


## Typedef Details

### **Options** as { :resource as [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/), :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bufferedBitmap as { :bitmapResource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)\>, :colorDepth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) } }

Since:

API Level 4.0.0

## Instance Method Details

### **get()** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or **Null**

Get the underlying resource object referenced by the ResourceReference, this trigger either the allocate from the system memory pool or return the existing resource in the pool.

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The resource object referenced, or `null` if failed.


Since:

API Level 4.0.0

Throws:

-   ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    Thrown if resource cannot be loaded or restored because there isn't enough free pool to load the resource
