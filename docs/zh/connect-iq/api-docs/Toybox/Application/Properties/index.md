---
title: "Module: Toybox.Application.Properties"
---
# Module: Toybox.Application.Properties

## Overview

The Properties module provides access to application properties.

Storage provides access to properties defined in application properties.

Since:

API Level 2.4.0

## Classes Under Namespace

**Classes:** [InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)

## Typedef Summary [collapse](#)

-   [**ValueType**](#ValueType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

## Instance Method Summary [collapse](#)

-   [**getValue**](#getValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

    Get the data associated with a given key from application settings.

-   [**setValue**](#setValue-instance_function)(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) as **Void**

    Store the given Application Property.


## Typedef Details

### **ValueType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)\>

Since:

API Level 2.4.0

## Instance Method Details

### **getValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)

Get the data associated with a given key from application settings.

Property values must be defined in the application settings xml. If a key that is not present in application settings is passed to getValue(), an exception will be thrown.

Parameters:

-   key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The key of the value to retrieve from Application Properties


Returns:

-   [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type) —

    The content associated with the key


See Also:

-   [setValue()](/connect-iq/api-docs/Toybox/Application/Properties/#setValue-instance_function)


Since:

API Level 2.4.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if key is a disallowed data type

-   ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    Thrown if key does not exist in Application Settings


### **setValue(key as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), value as [Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type))** as **Void**

Store the given Application Property.

Note:

Background processes cannot save Application Properties

Parameters:

-   key — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The key used to store and retrieve the value from Application Properties

-   value — ([Properties.ValueType](/connect-iq/api-docs/Toybox/Application/Properties/#ValueType-named_type)) —

    The value to put into Application Properties


Since:

API Level 2.4.0

Throws:

-   ([Application.ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)) —

    Thrown if called from a background process on device that does not have ConnectIQ 3.2.0 support. Data can always be passed to the foreground process from a background process with [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function).

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if key is a disallowed data type

-   ([Properties.InvalidKeyException](/connect-iq/api-docs/Toybox/Application/Properties/InvalidKeyException/)) —

    Thrown if key does not exist in Application Properties
