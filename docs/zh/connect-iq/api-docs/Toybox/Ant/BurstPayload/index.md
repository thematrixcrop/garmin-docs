---
title: "类：Toybox.Ant.BurstPayload"
---
# 类：Toybox.Ant.BurstPayload

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


[显示全部](#)

## 概述

包含 Burst 负载数据的类。

有效负载数据以 [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/) 对象的形式提供。`BurstPayload` 的默认最大大小为 8192 字节，即 1024 个 [Message](/connect-iq/api-docs/Toybox/Ant/Message/) 对象。不过，这可能因设备而异。

示例：

```
using Toybox.Ant;
var burst = Ant.BurstPayload();  // Initialize the payload

burst.add(message.getPayload()); // Add a message payload to payload
burst.getSize();                 // The number of messages
```

起始版本：

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**add**](#add-instance_function)(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    将字节添加到突发数据的末尾。

- [**getSize**](#getSize-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    返回有效负载中包含的突发数量。

- [**initialize**](#initialize-instance_function)()

    构造函数。


## 实例方法详情

### **add(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

将字节添加到突发数据的末尾。

注意：

[ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) 支持 ConnectIQ 4.2.0 及更高版本。

参数：

- message — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    表示数据负载字节的整数数组


起始版本：

API 级别 2.2.0

### **getSize()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

返回有效负载中包含的突发数量。

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Message 数量


起始版本：

API 级别 2.2.0

### **initialize()**

构造函数

起始版本：

API 级别 2.2.0
