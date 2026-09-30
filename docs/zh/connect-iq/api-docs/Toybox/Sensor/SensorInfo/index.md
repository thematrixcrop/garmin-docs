---
title: "Class: Toybox.Sensor.SensorInfo"
---
# Class: Toybox.Sensor.SensorInfo

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


[show all](#)

## 概述

A class describing a Sensor

The SensorInfo provides access to the attributes of a Sensor.

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**data**](#data-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

    The Sensor-specific data A dictionary of sensor-specific attributes.

- [**enabled**](#enabled-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Sensor 启用标志。

- [**manufacturerId**](#manufacturerId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Sensor 制造商。

- [**name**](#name-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Sensor 名称。

- [**partNumber**](#partNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Sensor 部件号。

- [**softwareVersion**](#softwareVersion-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Sensor 软件版本。

- [**technology**](#technology-var) as [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module)

    The Sensor technology The technology used to communicate with this sensor.

- [**type**](#type-var) as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

    Sensor 类型。


## 实例属性详情

### var data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

The Sensor-specific data

A dictionary of sensor-specific attributes. Currently supported attributes include:

- `:bleAddress` - BLE 传感器的 MAC 地址（例如 01:02:03:04:05:06），类型为 [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)（如果可用）。

- `:antSerialNumber` - ANT 传感器的 20 位序列号，类型为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- `:bleScanResult` - 已发现 BLE 设备的扫描结果，类型为 [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)。

- `:antMessage` - 已发现 ANT 设备的 ANT 消息，类型为 [Message](/connect-iq/api-docs/Toybox/Ant/Message/)


注意：

`:bleScanResult` 和 `:antMessage` 仅用于原生传感器配对过程。

Since:

API 级别 3.2.0

Returns:

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)

### var enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Sensor 启用标志。

An indicator of whether or not the sensor is enabled for pairing.

Since:

API 级别 3.2.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 制造商。

The manufacturer id of the sensor. May be `null`.

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Sensor 名称。

The name of the sensor.

Since:

API 级别 3.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var partNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 部件号。

The part number the sensor. May be `null`.

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var softwareVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 软件版本。

The software version of the sensor. May be `null`.

Since:

API 级别 3.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var technology as [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module)

The Sensor technology

The technology used to communicate with this sensor.

Since:

API 级别 3.2.0

Returns:

- [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module) —

    The sensor type as a Sensor.SENSOR\_TECHNOLOGY\_\*


### var type as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

Sensor 类型。

The type of the sensor.

Since:

API 级别 3.2.0

Returns:

- [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type) —

    The sensor type as a Sensor.SENSOR\_\*
