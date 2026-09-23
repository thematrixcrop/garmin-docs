---
title: "Class: Toybox.WatchUi.TextArea"
---
# Class: Toybox.WatchUi.TextArea

Inherits:

Toybox.WatchUi.Drawable

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

-   [Toybox.WatchUi.TextArea](/connect-iq/api-docs/Toybox/WatchUi/TextArea/)


[show all](#)

## Overview

A representation of a text area that will automatically apply line breaks to fit as much text as possible.

## See Also:

-   [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Example:

```
using Toybox.Graphics;
using Toybox.WatchUi;

class MyTextAreaView extends WatchUi.View {

    hidden var myTextArea;

    function initialize() {
        View.initialize();
    }

    function onShow() {
        myTextArea = new WatchUi.TextArea({
            :text=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            :color=>Graphics.COLOR_WHITE,
            :font=>[Graphics.FONT_MEDIUM, Graphics.FONT_SMALL, Graphics.FONT_XTINY],
            :locX =>WatchUi.LAYOUT_HALIGN_CENTER,
            :locY=>WatchUi.LAYOUT_VALIGN_CENTER,
            :width=>160,
            :height=>160
        });
    }

    function onUpdate(dc) {
        dc.setColor(Graphics.COLOR_WHITE, Graphics.COLOR_BLACK);
        dc.clear();
        myTextArea.draw(dc);
    }
}
```

Since:

API Level 3.1.0

## Instance Method Summary [collapse](#)

-   [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    Draw Text to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

-   [**initialize**](#initialize-instance_function)(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>, :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

-   [**setBackgroundColor**](#setBackgroundColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    Set the background color of a Text object.

-   [**setColor**](#setColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    Set the color of a Text object.

-   [**setFont**](#setFont-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>) as **Void**

    Set the font face of a Text object.

-   [**setJustification**](#setJustification-instance_function)(justification as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set the justification of a Text object.

-   [**setText**](#setText-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

    Set the text string of a Text object.


## Instance Method Details

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

Draw Text to the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

Parameters:

-   dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    The device context


Since:

API Level 3.1.0

### **initialize(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>, :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing the options for the Text object

    -   :text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The text string or ResourceId of a string resource

    -   :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        A [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value representing the desired text color, defaults to COLOR\_WHITE

    -   :backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        A [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value representing the desired background color, defaults to COLOR\_TRANSPARENT

    -   :font — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

        A [Graphics.FONT\_\*](/connect-iq/api-docs/Toybox/Graphics/#FONT_XTINY-const) value representing the desired font face, or an array of such values. Defaults to FONT\_MEDIUM

    -   :justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module)) —

        A [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) value representing the desired justification, defaults to TEXT\_JUSTIFY\_LEFT


See Also:

-   [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


Since:

API Level 3.1.0

### **setBackgroundColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

Set the background color of a Text object.

Parameters:

-   color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    A [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value representing the desired background color


Since:

API Level 3.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if color is not a valid type


### **setColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

Set the color of a Text object.

Parameters:

-   color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    A [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) value representing the desired text color


Since:

API Level 3.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if color is not a valid type


### **setFont(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>)** as **Void**

Set the font face of a Text object.

Parameters:

-   font — ([Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

    A [Graphics.FONT\_\*](/connect-iq/api-docs/Toybox/Graphics/#FONT_XTINY-const) value representing the desired font face or a resource object from [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function), or an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of such values.


See Also:

-   [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function)


Since:

API Level 3.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if font is not a valid type


### **setJustification(justification as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Set the justification of a Text object.

Parameters:

-   justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module)) —

    A [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) value representing the desired justification


Since:

API Level 3.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if justification is not a valid type


### **setText(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

Set the text string of a Text object.

Parameters:

-   text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The text String or a string ResourceId


Since:

API Level 3.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if text is not a valid type
