---
title: "Class: Toybox.Ant.BurstPayloadIterator"
---
# Class: Toybox.Ant.BurstPayloadIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstPayloadIterator](/connect-iq/api-docs/Toybox/Ant/BurstPayloadIterator/)


[show all](#)

## 概述

An iterator to use with a [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/).

The BurstPayloadIterator is used to iterate over the BurstPayload and and access each data packet.

Example:

```
using Toybox.Ant;
// Iterates over a burst payload to print each packet.
// Takes a valid BurstPayload Object as a parameter which
// contains the burst data to display.
function printPayload(burstPayload) {
    var iterator = new Ant.BurstPayloadIterator(burstPayload);
    var payload = iterator.next();
    while (null != payload) {
        System.println("payload " + payload);
        payload = iterator.next();
    }
}
```

Since:

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(newBurstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))

    Constructor.

- [**next**](#next-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    返回 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 对象中的下一条消息。


## 实例方法详情

### **initialize(newBurstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))**

Constructor

Parameters:

- newBurstPayload — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))

Since:

API 级别 2.2.0

### **next()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

返回 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 对象中的下一条消息。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    The Array of integers representing the bytes of the [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/), or `null` if one does not exist.


Since:

API 级别 2.2.0
