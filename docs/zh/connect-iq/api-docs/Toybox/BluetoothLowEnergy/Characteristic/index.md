---
title: "Class: Toybox.BluetoothLowEnergy.Characteristic"
---
# Class: Toybox.BluetoothLowEnergy.Characteristic

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)


[show all](#)

## 概述

Encapsulates a characteristic on a service

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getDescriptor**](#getDescriptor-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) or **Null**

    Retrieves the Descriptor with a specified UUID.

- [**getDescriptors**](#getDescriptors-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Retrieves an Iterator over the [Descriptors](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) discovered in the Characteristic This will only provide descriptors that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function).

- [**getService**](#getService-instance_function)() as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)

    Retrieves the Characteristic's Service Retrieve the Service that this characteristic belongs to.

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    Return the UUID of the Characteristic.

- [**requestRead**](#requestRead-instance_function)() as **Void**

    Requests a read operation on the characteristic Once the operation is completed, [onCharacteristicRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicRead-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) with the status of the operation 支持 for long reads is not implemented.

- [**requestWrite**](#requestWrite-instance_function)(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :writeType as [BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module) }) as **Void**

    Requests a write operation Once the operation is completed, [onCharacteristicWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicWrite-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) with the status of the operation 支持 for long writes is not implemented.


## 实例方法详情

### **getDescriptor(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) or **Null**

Retrieves the Descriptor with a specified UUID

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    the UUID to search for.


Returns:

- [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) —

    The Descriptor represented by the UUID provided or, `null` if the descriptor does not exist or the UUID has not be registered.


Since:

API 级别 3.1.0

### **getDescriptors()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Retrieves an Iterator over the [Descriptors](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) discovered in the Characteristic

This will only provide descriptors that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Iterator of [Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) objects for the descriptors discovered in the Characteristic


Since:

API 级别 3.1.0

### **getService()** as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)

Retrieves the Characteristic's Service

Retrieve the Service that this characteristic belongs to

Returns:

- [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) —

    父级特征对象


Since:

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

Return the UUID of the Characteristic

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    The UUID of the Characteristic


Since:

API 级别 3.1.0

### **requestRead()** as **Void**

Requests a read operation on the characteristic

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onCharacteristicRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicRead-instance_function)

支持 for long reads is not implemented.

Since:

API 级别 3.1.0

### **requestWrite(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :writeType as [BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module) })** as **Void**

Requests a write operation

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onCharacteristicWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicWrite-instance_function)

支持 for long writes is not implemented. Requesting a write on a characteristic longer than 20 bytes will cause an [InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)

Parameters:

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    New value to store.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing write options

- :writeType — ([BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module)) —

        A [WRITE\_TYPE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WRITE_TYPE_WITH_RESPONSE-const) indicating the write type to use when writing to the characteristic. Cannot be `null`.


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)) —

    if the request is invalid
