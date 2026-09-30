---
title: "Class: Toybox.Ant.Message"
---
# Class: Toybox.Ant.Message

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


[show all](#)

## 概述

A class to hold and define the information in an ANT wireless data payload.

Example:

```
using Toybox.Ant;
// Wrap the message prep and broadcast in a callback method
function onMessage(msg) {
    var payload = msg.getPayload(); //get the data payload
    var data = new [msg.length];    // create an array the length of the message

    // Iterate and add data to the Message with each pass
    for (var i = 0; i < msg.length; i++) {
        data[i] = i;            // Adds {0,1,2,3,4,5,6,7}
    }

    var message = new Ant.Message();
    message.setPayload(data);       // Form the Message

    // Set the broadcast buffer
    genericChannel.sendBroadcast(message);
}
```

Since:

API 级别 1.0.0

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | DATA\_PAYLOAD\_LENGTH | 8 |
API 级别 1.0.0

 |  |

## 实例成员摘要 [collapse](#)

- [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Unique device number (ANT-id).

- [**deviceType**](#deviceType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    1 字节的设备类型标识符。

- [**length**](#length-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Number of data bytes in the data payload (not including any extended data if applicable).

- [**messageId**](#messageId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Data Type Identifier.

- [**rssi**](#rssi-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Received Signal Strength Indication.

- [**timestamp**](#timestamp-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The time stamp of received message generated off of a 32.768 kHz clock.

- [**transmissionType**](#transmissionType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    厂商特定的传输类型和扩展设备号。


## 实例方法摘要 [collapse](#)

- [**getPayload**](#getPayload-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    获取 ANT 数据包。

- [**setPayload**](#setPayload-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>) as **Void**

    Set the ANT data packet.


## 实例属性详情

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Unique device number (ANT-id).

Since:

API 级别 1.2.0

### var deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

1 字节的设备类型标识符。

Since:

API 级别 1.2.0

另见：

- [ANT Downloads & Resources - ANT Message Protocol and Usage for pre-defined Device Types.](https://www.thisisant.com/developer/resources/downloads/)


### var length as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Number of data bytes in the data payload (not including any extended data if applicable).

Since:

API 级别 1.0.0

### var messageId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Data Type Identifier

Since:

API 级别 1.0.0

### var rssi as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Received Signal Strength Indication.

Since:

API 级别 1.0.0

### var timestamp as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The time stamp of received message generated off of a 32.768 kHz clock.

Rolls over every 2 seconds.

Since:

API 级别 1.2.0

### var transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

厂商特定的传输类型和扩展设备号。

Since:

API 级别 1.2.0

## 实例方法详情

### **getPayload()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

获取 ANT 数据包。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    由整数形式的 Number 数组组成，表示数据负载的字节


Since:

API 级别 1.0.0

### **setPayload(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>)** as **Void**

Set the ANT data packet.

Parameters:

- data — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    由整数形式的 Number 数组组成，表示数据负载的字节


Since:

API 级别 1.0.0
