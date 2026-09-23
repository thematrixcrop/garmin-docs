---
title: "Class: Toybox.PersistedContent.Route"
---
# Class: Toybox.PersistedContent.Route

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/)


[show all](#)

## Overview

A saved Route on the device in .GPX format.

## See Also:

-   [PersistedContent.getRoutes()](/connect-iq/api-docs/Toybox/PersistedContent/#getRoutes-instance_function)


Since:

API Level 2.2.0

:::details Supported Devices

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rino® 7 Series
-   Venu® X1

:::

## Instance Method Summary [collapse](#)

-   [**getId**](#getId-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get a unique serializable id.

-   [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Get a readable name for the content.

-   [**remove**](#remove-instance_function)() as **Void**

    Remove a route.

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

Remove a route

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
