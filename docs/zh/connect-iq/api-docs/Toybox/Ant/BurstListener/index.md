---
title: "类：Toybox.Ant.BurstListener"
---
# 类：Toybox.Ant.BurstListener

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)


[show all](#)

## 概述

提供一组回调方法以处理 Ant SDK 中不同突发传输场景的类。

示例：

显示如何扩展 BurstListener 类

```
using Toybox.Ant;

// An extension of BurstListener to handle burst events
class MyBurstListener extends Ant.BurstListener {

    // Callback when a burst transmission completes successfully
    function onTransmitComplete() as Void {
        System.println("onTransmitComplete");
    }

    // Callback when a burst transmission fails over the air.
    // Takes an errorCode parameter which is the type of burst
    // failure that occurred.
    function onTransmitFail(errorCode as BurstError) as Void {
        System.println("onTransmitFail-" + errorCode);
    }

    // Callback when a burst reception fails over the air.
    // Takes an errorCode parameter which is the type of burst
    // failure that occurred.
    function onReceiveFail(errorCode as BurstError) as Void {
        System.println("onReceiveFail-" + errorCode);
    }

    // Callback when a burst reception completes successfully.
    // Takes a burstPayload parameter which is the burst data
    // received across the channel.
    function onReceiveComplete(burstPayload as BurstPayload) as Void {
        System.println("onReceiveComplete");
    }

}
```

起始版本：

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**onReceiveComplete**](#onReceiveComplete-instance_function)(burstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) as **Void**

    突发接收成功完成时的回调。

- [**onReceiveFail**](#onReceiveFail-instance_function)(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) as **Void**

    突发接收通过无线传输失败时的回调。

- [**onTransmitComplete**](#onTransmitComplete-instance_function)() as **Void**

    突发传输成功完成时的回调。

- [**onTransmitFail**](#onTransmitFail-instance_function)(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) as **Void**

    突发传输通过无线传输失败时的回调。


## 实例方法详情

### **onReceiveComplete(burstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))** as **Void**

突发接收成功完成时的回调

参数：

- burstPayload — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) —

    收到的 BurstPayload


另见：

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


起始版本：

API 级别 2.2.0

### **onReceiveFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

突发接收通过无线传输失败时的回调

参数：

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


起始版本：

API 级别 2.2.0

### **onTransmitComplete()** as **Void**

突发传输成功完成时的回调

起始版本：

API 级别 2.2.0

### **onTransmitFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

突发传输通过无线传输失败时的回调

参数：

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


起始版本：

API 级别 2.2.0
