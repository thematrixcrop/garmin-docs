---
title: "Class: Toybox.Lang.ResourceId"
---
# Class: Toybox.Lang.ResourceId

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)


[show all](#)

## Overview

A ResourceId is a resource identifier.

ResourceId values uniquely identify a resource to the system.

Example:

```
var resourceId = Rez.Strings.AppName;
var appName = System.loadResource(resourceId);
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a ResourceId to a String.


## Instance Method Details

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a ResourceId to a String

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the ResourceId


Since:

API Level 1.0.0
