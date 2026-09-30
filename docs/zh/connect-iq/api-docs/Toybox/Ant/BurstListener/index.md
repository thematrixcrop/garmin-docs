---
title: "Class: Toybox.Ant.BurstListener"
---
# 类：Toybox.Ant.BurstListener

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)


[show all](#)

## 概述

提供一组回调方法以处理 Ant SDK 中不同突发传输场景的类。

Example:

显示如何扩展 BurstListener 类

```
using Toybox.Ant;

// 用于处理突发事件的 BurstListener 扩展
class MyBurstListener extends Ant.BurstListener {

    // 突发传输成功完成时的回调
    function onTransmitComplete() as Void {
        System.println("onTransmitComplete");
    }

    // 突发传输通过无线方式失败时的回调。
    // 接受 errorCode 参数，该参数表示所发生的突发
    // 失败类型。
    function onTransmitFail(errorCode as BurstError) as Void {
        System.println("onTransmitFail-" + errorCode);
    }

    // 突发接收通过无线方式失败时的回调。
    // 接受 errorCode 参数，该参数表示所发生的突发
    // 失败类型。
    function onReceiveFail(errorCode as BurstError) as Void {
        System.println("onReceiveFail-" + errorCode);
    }

    // 突发接收成功完成时的回调。
    // 接受 burstPayload 参数，该参数是
    // 通过通道接收的突发数据。
    function onReceiveComplete(burstPayload as BurstPayload) as Void {
        System.println("onReceiveComplete");
    }

}
```

Since:

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

Parameters:

- burstPayload — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) —

    收到的 BurstPayload


另见：

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


Since:

API 级别 2.2.0

### **onReceiveFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

突发接收通过无线传输失败时的回调

Parameters:

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


Since:

API 级别 2.2.0

### **onTransmitComplete()** as **Void**

突发传输成功完成时的回调

Since:

API 级别 2.2.0

### **onTransmitFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

突发传输通过无线传输失败时的回调

Parameters:

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


Since:

API 级别 2.2.0
