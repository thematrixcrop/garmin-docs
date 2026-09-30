---
title: "Class: Toybox.BluetoothLowEnergy.Service"
---
# Class: Toybox.BluetoothLowEnergy.Service

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)


[show all](#)

## 概述

Encapsulates a service provided by a device

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getCharacteristic**](#getCharacteristic-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) or **Null**

    Retrieves the Characteristic with a specified UUID.

- [**getCharacteristics**](#getCharacteristics-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Retrieves an Iterator over the Characteristics in a Service This will only provide Characteristics that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function).

- [**getDevice**](#getDevice-instance_function)() as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)

    Retrieves the Service's Device Retrieve the Device that this service belongs to.

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    Returns the UUID of the service.


## 实例方法详情

### **getCharacteristic(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) or **Null**

Retrieves the Characteristic with a specified UUID

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    the UUID to search for.


Returns:

- [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) —

    The Characteristic represented by the UUID provided or, `null` if the characteristic does not exist or the UUID has not be registered.


Since:

API 级别 3.1.0

### **getCharacteristics()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Retrieves an Iterator over the Characteristics in a Service

This will only provide Characteristics that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Iterator of [Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) objects for the Characteristics discovered in the Service


Since:

API 级别 3.1.0

### **getDevice()** as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)

Retrieves the Service's Device

Retrieve the Device that this service belongs to

Returns:

- [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) —

    父级特征对象


Since:

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

Returns the UUID of the service

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    the UUID of the service


Since:

API 级别 3.1.0
