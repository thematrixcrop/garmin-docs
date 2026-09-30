---
title: "Class: Toybox.BluetoothLowEnergy.ScanResult"
---
# Class: Toybox.BluetoothLowEnergy.ScanResult

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)


[show all](#)

## 概述

Encapsulates an Advertisement seen during scanning. Cannot be instantiated.

Used as an argument to [pairDevice()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#pairDevice-instance_function) to add a new device to the System's Paired Devices list

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Compares the ScanResult to another object for equality.

- [**getAppearance**](#getAppearance-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Gets the Advertised Appearance of the sensor.

- [**getDeviceName**](#getDeviceName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    Gets the advertised device name If no device name is advertised this function will return `null`.

- [**getManufacturerSpecificData**](#getManufacturerSpecificData-instance_function)(manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Gets Manufacturer Specific Data for a given Manufacturer Manufacturer Specific Data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.11.

- [**getManufacturerSpecificDataIterator**](#getManufacturerSpecificDataIterator-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Gets an iterator over all of the Manufacturer Specific Data AD Entries in the advertising packet Manufacturer Specific Data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.11.

- [**getRawData**](#getRawData-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Gets the Raw Data that was retrieved in the advertising packet.

- [**getRssi**](#getRssi-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取接收广告的接收信号强度指示（RSSI）值。

- [**getServiceData**](#getServiceData-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Gets Service Data for a specific UUID Service data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.10.

- [**getServiceUuids**](#getServiceUuids-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Gets service UUIDs advertised by the device If the advertising data contains any service UUID values.

- [**hasAddress**](#hasAddress-instance_function)(address as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Check that advertised device BLE address matches.

- [**isSameDevice**](#isSameDevice-instance_function)(other as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定另一个扫描结果是否表示同一设备。


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Compares the ScanResult to another object for equality

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if other is a scan result for the same device, otherwise `false`


Since:

API 级别 3.2.0

### **getAppearance()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Gets the Advertised Appearance of the sensor

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A number representing the appearance of the sensor


Since:

API 级别 3.1.0

### **getDeviceName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Gets the advertised device name

If no device name is advertised this function will return `null`

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The device name if present or `null` otherwise


Since:

API 级别 3.1.0

### **getManufacturerSpecificData(manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Gets Manufacturer Specific Data for a given Manufacturer

制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码

Parameters:

- manufacturerId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The manufacturer id to retrieve the manufacturer specific data for.


Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    Manufacturer Specific Data.


Since:

API 级别 3.1.0

### **getManufacturerSpecificDataIterator()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Gets an iterator over all of the Manufacturer Specific Data AD Entries in the advertising packet

制造商特定数据根据 BLE 核心规范 V4.0 第 3 卷 C 部分第 18.11 节进行解码

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Iterator of [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) objects for each AD entry. Dictionary will have keys for `:companyId` and `:data`


Since:

API 级别 3.1.0

### **getRawData()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Gets the Raw Data that was retrieved in the advertising packet

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    Raw bytes that were received in the advertising packet


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

Gets Service Data for a specific UUID

Service data is decoded according to the BLE Core Specification V4.0 Volume 3 Part C Section 18.10

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    Service UUID to search for


Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    Service Data for a specific UUID.


Since:

API 级别 3.1.0

### **getServiceUuids()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Gets service UUIDs advertised by the device

If the advertising data contains any service UUID values. They can be accessed through this iterator. If there are no advertised UUIDs this function will return an empty iterator.

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Iterator of [Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) objects advertised in the ScanResult


Since:

API 级别 3.1.0

### **hasAddress(address as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Check that advertised device BLE address matches

Parameters:

- address — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    Address to check for as a big-endian byte array or a string in the format "00:01:02:03:04:05"


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the parameter provided is the same as the address associated with this ScanResult, otherwise `false`


Since:

API 级别 3.2.0

### **isSameDevice(other as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定另一个扫描结果是否表示同一设备。

Parameters:

- other — ([BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) —

    The other scan result to compare


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Indicating if this scan result represents the same device as another


Since:

API 级别 3.1.0
