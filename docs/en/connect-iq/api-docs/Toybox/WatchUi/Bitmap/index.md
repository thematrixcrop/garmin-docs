---
title: "Class: Toybox.WatchUi.Bitmap"
---
# Class: Toybox.WatchUi.Bitmap

Inherits:

Toybox.WatchUi.Drawable

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

-   [Toybox.WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/)


[show all](#)

## Overview

Bitmap is the class representation of a bitmap resource.

A Bitmap can be constructed using the resource compiler and loaded through the resource (Rez) module.

## See Also:

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Example:

```
// The bitmap.xml file contents:
// <resources>
//     <bitmap id="myBitmap" filename="images/myBitmap.png" />
// </resources>

using Toybox.Graphics;
using Toybox.WatchUi;

class MyWatchView extends WatchUi.View {

    var myBitmap;

    function initialize() {
        View.initialize();
        myBitmap = new WatchUi.Bitmap({
            :rezId=>Rez.Drawables.myBitmap,
            :locX=>10,
            :locY=>30
        });
    }

    // Update the view
    function onUpdate(dc) {
        myBitmap.draw(dc);
    }
}
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    Draw a Bitmap to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

-   [**getDimensions**](#getDimensions-instance_function)() as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

    Get the dimensions of a Bitmap.

-   [**initialize**](#initialize-instance_function)(options as { :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

-   [**setBitmap**](#setBitmap-instance_function)(bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**) as **Void**

    Set the resource associated with the Bitmap.


## Instance Method Details

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

Draw a Bitmap to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

Parameters:

-   dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    The device context


Since:

API Level 1.0.0

### **getDimensions()** as \[ [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) \]

Get the dimensions of a Bitmap.

Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A two element array containing the width and height of the Bitmap object


Since:

API Level 1.0.0

### **initialize(options as { :rezId as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing the options for the Bitmap object

    -   :rezId — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The resource identifier for the Bitmap object

    -   :bitmap — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type)) —

        The BitmapResource, BufferedBitmap, BitmapReference, or BufferedBitmapReference object to use


See Also:

-   [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


Since:

API Level 1.0.0

### **setBitmap(bitmap as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**)** as **Void**

Set the resource associated with the Bitmap.

Note:

A `null` value passed for the bitmap parameter is only supported with ConnectIQ 5.0.0 and later.

Parameters:

-   bitmap — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The ResourceId or the Bitmap object.


Since:

API Level 1.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if bitmap is not a valid type
