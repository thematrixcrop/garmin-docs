---
title: "Class: Toybox.BluetoothLowEnergy.ScanResult"
---
# 类：Toybox.BluetoothLowEnergy.ScanResult

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)


[show all](#)

## 概述

封装扫描期间发现的广播。无法实例化。

Used as an argument to [pairDevice()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#pairDevice-instance_function) to add a new device to the System's Paired Devices list

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    比较 ScanResult 与另一个对象是否相等。

- [**getAppearance**](#getAppearance-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取传感器广播的外观。

- [**getDeviceName**](#getDeviceName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    获取广播的设备名称。如果未广播设备名称，此函数将返回 `null`。

- [**getManufacturerSpecificData**](#getManufacturerSpecificData-instance_function)(manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    获取给定制造商的制造商特定数据。制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码。

- [**getManufacturerSpecificDataIterator**](#getManufacturerSpecificDataIterator-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取广告数据包中所有制造商特定数据 AD 条目的迭代器。制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码。

- [**getRawData**](#getRawData-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    获取广告数据包中检索到的原始数据。

- [**getRssi**](#getRssi-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取接收广告的接收信号强度指示（RSSI）值。

- [**getServiceData**](#getServiceData-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    获取特定 UUID 的服务数据。服务数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.10 节进行解码。

- [**getServiceUuids**](#getServiceUuids-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取设备广播的服务 UUID。如果广告数据包含任何服务 UUID 值。

- [**hasAddress**](#hasAddress-instance_function)(address as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查广播设备的 BLE 地址是否匹配。

- [**isSameDevice**](#isSameDevice-instance_function)(other as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定另一个扫描结果是否表示同一设备。


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

比较 ScanResult 与另一个对象是否相等

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果 other 是同一设备的扫描结果，则为 `true`，否则为 `false`


Since:

API 级别 3.2.0

### **getAppearance()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取传感器广播的外观

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    表示传感器外观的数字


Since:

API 级别 3.1.0

### **getDeviceName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

获取广播的设备名称

如果未播报设备名称，此函数将返回 `null`

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The device name if present or `null` otherwise


Since:

API 级别 3.1.0

### **getManufacturerSpecificData(manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

获取给定制造商的制造商特定数据

制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码

Parameters:

- manufacturerId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The manufacturer id to retrieve the manufacturer specific data for.


Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    制造商特定数据。


Since:

API 级别 3.1.0

### **getManufacturerSpecificDataIterator()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取广告数据包中所有制造商特定数据 AD 条目的迭代器

制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    每个 AD 条目中的 [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 个对象的迭代器。字典将包含 `:companyId` 和 `:data` 键


Since:

API 级别 3.1.0

### **getRawData()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

获取从广告数据包中检索的原始数据

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    广告数据包中接收到的原始字节


Since:

API 级别 3.1.0

### **getRssi()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取接收广告的接收信号强度指示（RSSI）值。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    the RSSI Value of the advertisement associated with the scan result. In dBM


Since:

API 级别 3.1.0

### **getServiceData(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

获取特定 UUID 的服务数据

服务数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.10 节进行解码

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    要搜索的服务 UUID


Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    特定 UUID 的服务数据。


Since:

API 级别 3.1.0

### **getServiceUuids()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取设备广播的服务 UUID

如果广告数据包含任何服务 UUID 值，则可以通过此迭代器访问这些值。如果没有播报的 UUID，此函数将返回空迭代器。

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    ScanResult 中公布的 [Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) 个对象的迭代器


Since:

API 级别 3.1.0

### **hasAddress(address as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查广播设备的 BLE 地址是否匹配

Parameters:

- address — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要检查的地址，可以是大端字节数组，也可以是格式为 "00:01:02:03:04:05" 的字符串


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果提供的参数与此 ScanResult 关联的地址相同，则为 `true`，否则为 `false`


Since:

API 级别 3.2.0

### **isSameDevice(other as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定另一个扫描结果是否表示同一设备。

Parameters:

- other — ([BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) —

    The other scan result to compare


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    表示此扫描结果是否代表与另一个设备相同的设备


Since:

API 级别 3.1.0
