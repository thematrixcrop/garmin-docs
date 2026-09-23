---
title: "Class: Toybox.Media.CustomButton"
---
# Class: Toybox.Media.CustomButton

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/)


[show all](#)

## Overview

A CustomButton allows for a media player action other than one of the PLAYBACK\_CONTROL\_\* actions. When a CustomButton is pressed in the media player the ContentDelegate.onCustomButton(button) function is called with the pressed button as a parameter.

Since:

API Level 3.0.3

## Instance Method Summary [collapse](#)

-   [**getImage**](#getImage-instance_function)(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

    Called by the system to draw the button in the Media Player.

-   [**getState**](#getState-instance_function)() as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

    Called by the system to determine if the current state of the button.

-   [**getText**](#getText-instance_function)(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    Called by the system to draw the name of the button.


## Instance Method Details

### **getImage(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

Called by the system to draw the button in the Media Player

Note:

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) is only supported in CIQ 4.0.0 and later.

Parameters:

-   image — ([Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module)) —

    A BUTTON\_IMAGE\_\* value

-   highlighted — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    `true` if the button is highlighted, otherwise `false`


Returns:

-   [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) —

    A bitmap representation of the button


Since:

API Level 3.0.3

### **getState()** as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

Called by the system to determine if the current state of the button

Returns:

-   [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module) —

    A BUTTON\_STATE\_\* enum value representing the current state of the button


Since:

API Level 3.0.3

### **getText(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Called by the system to draw the name of the button

Parameters:

-   state — ([Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) —

    A BUTTON\_STATE\_\* value indicating the current state of the button


Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    the name of the button


Since:

API Level 3.0.3
