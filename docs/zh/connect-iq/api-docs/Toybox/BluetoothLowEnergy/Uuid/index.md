---
title: "Class: Toybox.BluetoothLowEnergy.Uuid"
---
# Class: Toybox.BluetoothLowEnergy.Uuid

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


[show all](#)

## 概述

Encapsulates a Bluetooth UUID and provides various helper methods for interacting with UUID within the Bluetooth Low Energy Subsystem

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Compares the Uuid to another object for equality.

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Retrieve a hash code of the UUID Optimized for BLE standard.

- [**toByteArray**](#toByteArray-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Convert UUID to a Little Endian Byte Array.

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a UUID to a String.


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Compares the Uuid to another object for equality

Parameters:

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果提供的参数是等效的 Uuid 或等效的 UUID String，则为 `true`，否则为 `false`。


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/))

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Retrieve a hash code of the UUID

Optimized for BLE standard

Since:

API 级别 3.1.0

### **toByteArray()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Convert UUID to a Little Endian Byte Array

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    UUID 的字节数组表示


Since:

API 级别 3.1.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a UUID to a String

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    UUID 的字符串表示。


Since:

API 级别 3.1.0
