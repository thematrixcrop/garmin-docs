---
title: "Class: Toybox.BluetoothLowEnergy.Service"
---
# 类：Toybox.BluetoothLowEnergy.Service

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)


[show all](#)

## 概述

封装设备提供的服务

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getCharacteristic**](#getCharacteristic-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) or **Null**

    获取具有指定 UUID 的特征。

- [**getCharacteristics**](#getCharacteristics-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取服务中各特征的迭代器。仅提供使用 [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function) 注册的特征。

- [**getDevice**](#getDevice-instance_function)() as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)

    获取服务所属的设备。获取此服务所属的设备。

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    返回 service 的 UUID。


## 实例方法详情

### **getCharacteristic(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) or **Null**

获取具有指定 UUID 的特征

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    要搜索的 UUID。


Returns:

- [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) —

    The Characteristic represented by the UUID provided or, `null` if the characteristic does not exist or the UUID has not be registered.


Since:

API 级别 3.1.0

### **getCharacteristics()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取服务中各特征的迭代器

This will only provide Characteristics that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Service 中发现的 Characteristics 的 [Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) 个对象的迭代器


Since:

API 级别 3.1.0

### **getDevice()** as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)

获取服务所属的设备

获取此服务所属的设备

Returns:

- [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) —

    父级特征对象


Since:

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

返回 service 的 UUID

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    the UUID of the service


Since:

API 级别 3.1.0
