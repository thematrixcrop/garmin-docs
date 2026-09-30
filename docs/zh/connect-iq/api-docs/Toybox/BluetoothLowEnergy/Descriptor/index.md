---
title: "类：Toybox.BluetoothLowEnergy.Descriptor"
---
# 类：Toybox.BluetoothLowEnergy.Descriptor

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)


[显示全部](#)

## 概述

封装特征中的描述符

起始版本：

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getCharacteristic**](#getCharacteristic-instance_function)() as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)

    获取描述符所属的特征。获取此描述符所属的特征。

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    返回 Descriptor 的 UUID。

- [**requestRead**](#requestRead-instance_function)() as **Void**

    请求对描述符执行读取操作。操作完成后，将使用操作状态调用已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 中的 [onDescriptorRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorRead-instance_function)。

- [**requestWrite**](#requestWrite-instance_function)(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    请求执行写入操作。将本地存储的值写入远程描述符。


## 实例方法详情

### **getCharacteristic()** as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)

获取描述符所属的特征

获取此描述符所属的特征

返回：

- [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/) —

    父级特征对象


起始版本：

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

返回 Descriptor 的 UUID

返回：

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    Descriptor 的 UUID


起始版本：

API 级别 3.1.0

### **requestRead()** as **Void**

请求对描述符执行读取操作

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onDescriptorRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorRead-instance_function)

起始版本：

API 级别 3.1.0

### **requestWrite(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

请求执行写入操作

将本地存储的值写入远程描述符。

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onDescriptorWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onDescriptorWrite-instance_function)

尚未实现对长写入的支持。请求写入长度超过 20 字节的特征将导致 [InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)

参数：

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    要存储的新值。


起始版本：

API 级别 3.1.0

抛出：

- ([BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)) —

    如果请求无效
