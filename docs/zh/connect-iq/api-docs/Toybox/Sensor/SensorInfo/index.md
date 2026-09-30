---
title: "Class: Toybox.Sensor.SensorInfo"
---
# Class: Toybox.Sensor.SensorInfo

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


[show all](#)

## Overview

A class describing a Sensor

The SensorInfo 提供访问 the attributes of a Sensor.

Since:

API Level 3.2.0

## Instance Member Summary [collapse](#)

-   [**data**](#data-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

    The Sensor-specific data A dictionary of sensor-specific attributes.

-   [**enabled**](#enabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The Sensor enabled flag.

-   [**manufacturerId**](#manufacturerId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The Sensor manufacturer.

-   [**name**](#name-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The Sensor name.

-   [**partNumber**](#partNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The Sensor part number.

-   [**softwareVersion**](#softwareVersion-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The Sensor software version.

-   [**technology**](#technology-var) as [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module)

    The Sensor technology The technology used to communicate with this sensor.

-   [**type**](#type-var) as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

    The Sensor type.


## Instance Attribute Details

### var data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

The Sensor-specific data

A dictionary of sensor-specific attributes. Currently supported attributes include:

-   `:bleAddress` - The mac address of the BLE sensor (e.g., 01:02:03:04:05:06) as a [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), if available.

-   `:antSerialNumber` - The 20-bit ANT sensor serial number as a [Number](/connect-iq/api-docs/Toybox/Lang/Number/)

-   `:bleScanResult` - The scanresult of a discovered BLE device as a [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/).

-   `:antMessage` - The ANT message of a discovered ANT device as a [Message](/connect-iq/api-docs/Toybox/Ant/Message/)


Note:

`:bleScanResult` and `:antMessage` are used for native sensor pairing process only.

Since:

API Level 3.2.0

Returns:

-   [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)

### var enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The Sensor enabled flag.

An indicator of whether or not the sensor is enabled for pairing.

Since:

API Level 3.2.0

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The Sensor manufacturer.

The manufacturer id of the sensor. May be `null`.

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The Sensor name.

The name of the sensor.

Since:

API Level 3.2.0

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var partNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The Sensor part number.

The part number the sensor. May be `null`.

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var softwareVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The Sensor software version.

The software version of the sensor. May be `null`.

Since:

API Level 3.2.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var technology as [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module)

The Sensor technology

The technology used to communicate with this sensor.

Since:

API Level 3.2.0

Returns:

-   [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module) —

    The sensor type as a Sensor.SENSOR\_TECHNOLOGY\_\*


### var type as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

The Sensor type.

The type of the sensor.

Since:

API Level 3.2.0

Returns:

-   [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type) —

    The sensor type as a Sensor.SENSOR\_\*
