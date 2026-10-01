---
title: "类：Toybox.BluetoothLowEnergy.Characteristic"
---
# 类：Toybox.BluetoothLowEnergy.Characteristic

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)


[显示全部](#)

## 概述

封装服务上的特征

起始版本：

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getDescriptor**](#getDescriptor-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) or **Null**

    获取具有指定 UUID 的描述符。

- [**getDescriptors**](#getDescriptors-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取特征中发现的 [描述符](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) 的迭代器。仅提供使用 [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function) 注册的描述符。

- [**getService**](#getService-instance_function)() as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)

    获取此特征所属的服务。

- [**getUuid**](#getUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    返回 Characteristic 的 UUID。

- [**requestRead**](#requestRead-instance_function)() as **Void**

    请求对特征执行读取操作。操作完成后，将使用操作状态调用已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 中的 [onCharacteristicRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicRead-instance_function)。尚未实现对长读取的支持。

- [**requestWrite**](#requestWrite-instance_function)(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :writeType as [BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module) }) as **Void**

    请求执行写入操作。操作完成后，将使用操作状态调用已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 中的 [onCharacteristicWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicWrite-instance_function)。尚未实现对长写入的支持。


## 实例方法详情

### **getDescriptor(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) or **Null**

获取具有指定 UUID 的描述符

参数：

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    要搜索的 UUID。


返回：

- [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) —

    由提供的 UUID 表示的 Descriptor；如果描述符不存在或 UUID 尚未注册，则为 `null`。


起始版本：

API 级别 3.1.0

### **getDescriptors()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取特征中发现的 [描述符](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) 的迭代器

此项只提供使用 [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function) 注册的描述符

返回：

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Characteristic 中发现的 [Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/) 对象迭代器


起始版本：

API 级别 3.1.0

### **getService()** as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/)

获取此特征所属的服务。

返回：

- [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) —

    父级特征对象


起始版本：

API 级别 3.1.0

### **getUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

返回 Characteristic 的 UUID

返回：

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    Characteristic 的 UUID


起始版本：

API 级别 3.1.0

### **requestRead()** as **Void**

请求对特征执行读取操作

操作完成后，系统会将操作状态传递给已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onCharacteristicRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicRead-instance_function) 回调。

尚未实现对长读取的支持。

起始版本：

API 级别 3.1.0

### **requestWrite(value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), options as { :writeType as [BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module) })** as **Void**

请求执行写入操作

操作完成后，系统会将操作状态传递给已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onCharacteristicWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onCharacteristicWrite-instance_function) 回调。

尚未实现对长写入的支持。请求写入长度超过 20 字节的特征将导致 [InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)

参数：

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    要存储的新值。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含写入选项的字典

- :writeType — ([BluetoothLowEnergy.WriteType](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WriteType-module)) —

        一个表示写入特征时所用写入类型的 [WRITE\_TYPE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#WRITE_TYPE_WITH_RESPONSE-const)。不能为 `null`。


起始版本：

API 级别 3.1.0

抛出：

- ([BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)) —

    如果请求无效
