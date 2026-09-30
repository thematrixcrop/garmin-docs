---
title: "类：Toybox.Sensor.SensorInfo"
---
# 类：Toybox.Sensor.SensorInfo

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


[show all](#)

## 概述

描述传感器的类

SensorInfo 提供对 Sensor 属性的访问。

起始版本：

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**data**](#data-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

    传感器特定数据。传感器特定属性的字典。

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

    传感器技术。用于与此传感器通信的技术。

- [**type**](#type-var) as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

    Sensor 类型。


## 实例属性详情

### var data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**

传感器特定数据

传感器特定属性的字典。目前支持的属性包括：

- `:bleAddress` - BLE 传感器的 MAC 地址（例如 01:02:03:04:05:06），类型为 [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)（如果可用）。

- `:antSerialNumber` - ANT 传感器的 20 位序列号，类型为 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- `:bleScanResult` - 已发现 BLE 设备的扫描结果，类型为 [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)。

- `:antMessage` - 已发现 ANT 设备的 ANT 消息，类型为 [Message](/connect-iq/api-docs/Toybox/Ant/Message/)


注意：

`:bleScanResult` 和 `:antMessage` 仅用于原生传感器配对过程。

起始版本：

API 级别 3.2.0

返回：

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)

### var enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Sensor 启用标志。

表示传感器是否已启用配对的指示器。

起始版本：

API 级别 3.2.0

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 制造商。

传感器的制造商 id。可能为 `null`。

起始版本：

API 级别 3.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Sensor 名称。

传感器的名称。

起始版本：

API 级别 3.2.0

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

### var partNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 部件号。

传感器的部件号。可能为 `null`。

起始版本：

API 级别 3.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var softwareVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Sensor 软件版本。

传感器的软件版本。可能为 `null`。

起始版本：

API 级别 3.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var technology as [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module)

传感器技术

用于与此传感器通信的技术。

起始版本：

API 级别 3.2.0

返回：

- [Sensor.SensorTechnology](/connect-iq/api-docs/Toybox/Sensor/#SensorTechnology-module) —

    传感器类型，形式为 Sensor.SENSOR\_TECHNOLOGY\_\*


### var type as [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type)

Sensor 类型。

传感器类型。

起始版本：

API 级别 3.2.0

返回：

- [Sensor.SensorType](/connect-iq/api-docs/Toybox/Sensor/#SensorType-named_type) —

    传感器类型，形式为 Sensor.SENSOR\_\*
