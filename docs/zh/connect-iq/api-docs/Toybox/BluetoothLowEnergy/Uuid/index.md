---
title: "类：Toybox.BluetoothLowEnergy.Uuid"
---
# 类：Toybox.BluetoothLowEnergy.Uuid

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


[显示全部](#)

## 概述

封装 Bluetooth UUID，并提供用于在 Bluetooth Low Energy 子系统中与 UUID 交互的各种辅助方法

起始版本：

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    比较 Uuid 与另一个对象是否相等。

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 UUID 的哈希代码。针对 BLE 标准进行了优化。

- [**toByteArray**](#toByteArray-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    将 UUID 转换为小端字节数组。

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 UUID 转换为 String。


## 实例方法详情

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

比较 Uuid 与另一个对象是否相等

参数：

- other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    用于比较的对象


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果提供的参数是等效的 Uuid 或等效的 UUID String，则为 `true`，否则为 `false`。


起始版本：

API 级别 3.1.0

抛出：

- ([BluetoothLowEnergy.UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/))

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 UUID 的哈希代码

针对 BLE 标准进行了优化

起始版本：

API 级别 3.1.0

### **toByteArray()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

将 UUID 转换为小端字节数组

返回：

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    UUID 的字节数组表示


起始版本：

API 级别 3.1.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 UUID 转换为 String

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    UUID 的字符串表示。


起始版本：

API 级别 3.1.0
