---
title: "Class: Toybox.BluetoothLowEnergy.Uuid"
---
# 类：Toybox.BluetoothLowEnergy.Uuid

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


[show all](#)

## 概述

封装 Bluetooth UUID，并提供用于在 Bluetooth Low Energy 子系统中与 UUID 交互的各种辅助方法

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    比较 Uuid 与另一个对象是否相等。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Retrieve a hash code of the UUID Optimized for BLE standard.

- [**toByteArray**](#toByteArray-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将 UUID 转换为小端字节数组。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 UUID 转换为 String。


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

比较 Uuid 与另一个对象是否相等

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

针对 BLE 标准进行了优化

Since:

API 级别 3.1.0

### **toByteArray()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将 UUID 转换为小端字节数组

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    UUID 的字节数组表示


Since:

API 级别 3.1.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 UUID 转换为 String

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    UUID 的字符串表示。


Since:

API 级别 3.1.0
