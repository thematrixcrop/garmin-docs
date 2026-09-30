---
title: "Class: Toybox.BluetoothLowEnergy.Descriptor"
---
# 类：Toybox.BluetoothLowEnergy.Descriptor

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)


[show all](#)

## 概述

封装特征中的描述符

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getCharacteristic**](#getCharacteristic-instance_function)() as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)

    Retrieves the Descriptors Characteristic Retrieve the Characteristic that this descriptor belongs to.

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    Returns the UUID of the Descriptor.

- [**requestRead**](#requestRead-instance_function)() as **Void**

    Requests a read operation on the descriptor Once the operation is completed, [onDescriptorRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorRead-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) with the status of the operation.

- [**requestWrite**](#requestWrite-instance_function)(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    Requests a write operation Writes the locally stored value to the remote descriptor.


## 实例方法详情

### **getCharacteristic()** as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)

Retrieves the Descriptors Characteristic

Retrieve the Characteristic that this descriptor belongs to

Returns:

- [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) —

    父级特征对象


Since:

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

Returns the UUID of the Descriptor

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    the UUID of the Descriptor


Since:

API 级别 3.1.0

### **requestRead()** as **Void**

Requests a read operation on the descriptor

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onDescriptorRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorRead-instance_function)

Since:

API 级别 3.1.0

### **requestWrite(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

请求执行写入操作

Writes the locally stored value to the remote descriptor.

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onDescriptorWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorWrite-instance_function)

尚未实现对长写入的支持。请求写入长度超过 20 字节的特征将导致 [InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)

Parameters:

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    要存储的新值。


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)) —

    如果请求无效
