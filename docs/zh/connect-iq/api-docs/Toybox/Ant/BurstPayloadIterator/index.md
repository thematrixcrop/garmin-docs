---
title: "类：Toybox.Ant.BurstPayloadIterator"
---
# 类：Toybox.Ant.BurstPayloadIterator

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstPayloadIterator](/connect-iq/api-docs/Toybox/Ant/BurstPayloadIterator/)


[显示全部](#)

## 概述

用于 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 的迭代器。

BurstPayloadIterator 用于遍历 BurstPayload 并访问每个数据包。

示例：

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

起始版本：

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(newBurstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))

    构造函数。

- [**next**](#next-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    返回 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 对象中的下一条消息。


## 实例方法详情

### **initialize(newBurstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))**

构造函数

参数：

- newBurstPayload — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))

起始版本：

API 级别 2.2.0

### **next()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

返回 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 对象中的下一条消息。

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    表示 [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/) 字节的整数数组；如果不存在，则为 `null`。


起始版本：

API 级别 2.2.0
