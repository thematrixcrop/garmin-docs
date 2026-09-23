---
title: "Class: Toybox.BluetoothLowEnergy.Uuid"
---
# Class: Toybox.BluetoothLowEnergy.Uuid

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


[show all](#)

## Overview

Encapsulates a Bluetooth UUID and provides various helper methods for interacting with UUID within the Bluetooth Low Energy Subsystem

Since:

API Level 3.1.0

## Instance Method Summary [collapse](#)

-   [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Compares the Uuid to another object for equality.

-   [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Retrieve a hash code of the UUID Optimized for BLE standard.

-   [**toByteArray**](#toByteArray-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Convert UUID to a Little Endian Byte Array.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a UUID to a String.


## Instance Method Details

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Compares the Uuid to another object for equality

Parameters:

-   other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to test against


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the parameter provided is an equivalent Uuid or equivalent UUID String, `false` otherwise.


Since:

API Level 3.1.0

Throws:

-   ([BluetoothLowEnergy.UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/))

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Retrieve a hash code of the UUID

Optimized for BLE standard

Since:

API Level 3.1.0

### **toByteArray()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Convert UUID to a Little Endian Byte Array

Returns:

-   [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A Byte Array Representation of the UUID


Since:

API Level 3.1.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a UUID to a String

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the UUID


Since:

API Level 3.1.0
