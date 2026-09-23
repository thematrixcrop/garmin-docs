---
title: "Class: Toybox.PersistedContent.Track"
---
# Class: Toybox.PersistedContent.Track

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/)


[show all](#)

## Overview

A saved Track on the device in .GPX format.

## See Also:

-   [PersistedContent.getTracks()](/connect-iq/api-docs/Toybox/PersistedContent/#getTracks-instance_function)


Since:

API Level 2.2.0

:::details Supported Devices

-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rino® 7 Series

:::

## Instance Method Summary [collapse](#)

-   [**getId**](#getId-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get a unique serializable id.

-   [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Get a readable name for the content.

-   [**remove**](#remove-instance_function)() as **Void**

    Remove a track.

-   [**toIntent**](#toIntent-instance_function)() as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

    Get a system intent for the content.


## Instance Method Details

### **getId()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get a unique serializable id

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The unique serializable id


Since:

API Level 2.2.0

### **getName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Get a readable name for the content

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The readable name


Since:

API Level 2.2.0

### **remove()** as **Void**

Remove a track

Since:

API Level 3.0.0

Throws:

-   ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if the given content is not owned by the calling application.


### **toIntent()** as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

Get a system intent for the content

Returns:

-   [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) —

    The System.Intent for the content


Since:

API Level 2.2.0
