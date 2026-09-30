---
title: "Class: Toybox.Ant.BurstPayload"
---
# Class: Toybox.Ant.BurstPayload

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


[show all](#)

## 概述

A class containing Burst payload data.

The payload data is provided in the form of [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/) objects. The default max size of a `BurstPayload` is 8192 bytes, or 1024 [Message](/connect-iq/api-docs/Toybox/Ant/Message/) objects. However, this can vary by device.

Example:

```
using Toybox.Ant;
var burst = Ant.BurstPayload();  // Initialize the payload

burst.add(message.getPayload()); // Add a message payload to payload
burst.getSize();                 // The number of messages
```

Since:

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    将字节添加到突发数据的末尾。

- [**getSize**](#getSize-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    返回有效负载中包含的突发数量。

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例方法详情

### **add(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

将字节添加到突发数据的末尾。

注意：

[ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) 支持 ConnectIQ 4.2.0 及更高版本。

Parameters:

- message — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    An Array of integers representing the bytes of the data payload


Since:

API 级别 2.2.0

### **getSize()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

返回有效负载中包含的突发数量。

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of Messages


Since:

API 级别 2.2.0

### **initialize()**

Constructor

Since:

API 级别 2.2.0
