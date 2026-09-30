---
title: "Class: Toybox.AntPlus.DeviceListener"
---
# 类：Toybox.AntPlus.DeviceListener

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/)


[show all](#)

## 概述

Listener class for Device.

Since:

API 级别 2.2.0

## 直接已知子类

[AntPlus.BikeCadenceListener](/connect-iq/api-docs/Toybox/AntPlus/BikeCadenceListener/), [AntPlus.BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/), [AntPlus.BikeRadarListener](/connect-iq/api-docs/Toybox/AntPlus/BikeRadarListener/), [AntPlus.BikeSpeedCadenceListener](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadenceListener/), [AntPlus.BikeSpeedListener](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedListener/), [AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/), [AntPlus.LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/), [AntPlus.RunningDynamicsListener](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamicsListener/), [AntPlus.ShiftingListener](/connect-iq/api-docs/Toybox/AntPlus/ShiftingListener/)

## 实例方法摘要 [collapse](#)

- [**onBatteryStatusUpdate**](#onBatteryStatusUpdate-instance_function)(data as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/)) as **Void**

    收到电池状态时的回调。

- [**onDeviceStateUpdate**](#onDeviceStateUpdate-instance_function)(data as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)) as **Void**

    设备状态更新时的回调。

- [**onManufacturerInfoUpdate**](#onManufacturerInfoUpdate-instance_function)(data as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/)) as **Void**

    收到制造商信息时的回调。

- [**onMessage**](#onMessage-instance_function)(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**

    收到 ANT 消息时的回调。

- [**onProductInfoUpdate**](#onProductInfoUpdate-instance_function)(data as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)) as **Void**

    收到产品信息时的回调。

- [**onSentMessage**](#onSentMessage-instance_function)(status as [AntPlus.MessageSendStatus](/connect-iq/api-docs/Toybox/AntPlus/#MessageSendStatus-module), sentMesgData as { :messageType as [AntPlus.MessageType](/connect-iq/api-docs/Toybox/AntPlus/#MessageType-module), :pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as **Void**

    发送制造商消息或页面请求后，将调用此函数以指示消息发送状态。


## 实例方法详情

### **onBatteryStatusUpdate(data as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/))** as **Void**

收到电池状态时的回调。

Parameters:

- data — ([AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/)) —

    The data with battery status information


Since:

API 级别 2.2.0

### **onDeviceStateUpdate(data as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/))** as **Void**

设备状态更新时的回调。

Parameters:

- data — ([AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)) —

    The data with updated device state information.


Since:

API 级别 2.2.0

### **onManufacturerInfoUpdate(data as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/))** as **Void**

收到制造商信息时的回调。

Parameters:

- data — ([AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/)) —

    The data with manufacturer's information


Since:

API 级别 2.2.0

### **onMessage(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as **Void**

收到 ANT 消息时的回调。

Parameters:

- msg — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    The ANT message


Since:

API 级别 3.1.0

### **onProductInfoUpdate(data as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/))** as **Void**

收到产品信息时的回调。

Parameters:

- data — ([AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)) —

    The data with product information


Since:

API 级别 2.2.0

### **onSentMessage(status as [AntPlus.MessageSendStatus](/connect-iq/api-docs/Toybox/AntPlus/#MessageSendStatus-module), sentMesgData as { :messageType as [AntPlus.MessageType](/connect-iq/api-docs/Toybox/AntPlus/#MessageType-module), :pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as **Void**

发送制造商消息或页面请求后，将调用此函数以指示消息发送状态。

Parameters:

- status — ([AntPlus.MessageSendStatus](/connect-iq/api-docs/Toybox/AntPlus/#MessageSendStatus-module)) —

    The status of the sent message as a [SENT\_MESSAGE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#MESSAGE_SENT_SUCCESS-const) enum value

- sentMesgData — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    The dictionary will have keys for message type and page number. The message type is a [AntPlus.MESSAGE\_TYPE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#MESSAGE_TYPE_MANUFACTURER-const). The page number is byte 0 of the manufacturer specific message or the requested page number.


Since:

API 级别 3.1.0
