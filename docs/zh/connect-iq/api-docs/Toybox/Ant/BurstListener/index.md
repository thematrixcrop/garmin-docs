---
title: "Class: Toybox.Ant.BurstListener"
---
# Class: Toybox.Ant.BurstListener

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)


[show all](#)

## 概述

A class that provides a set of callback methods to handle the different burst transmission scenarios in the Ant SDK.

Example:

Shows extending BurstListener class

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

Since:

API 级别 2.2.0

## 实例方法摘要 [collapse](#)

- [**onReceiveComplete**](#onReceiveComplete-instance_function)(burstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) as **Void**

    Callback when a burst reception completes successfully.

- [**onReceiveFail**](#onReceiveFail-instance_function)(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) as **Void**

    Callback when a burst reception fails over the air.

- [**onTransmitComplete**](#onTransmitComplete-instance_function)() as **Void**

    Callback when a burst transmission completes successfully.

- [**onTransmitFail**](#onTransmitFail-instance_function)(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) as **Void**

    Callback when a burst transmission fails over the air.


## 实例方法详情

### **onReceiveComplete(burstPayload as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))** as **Void**

Callback when a burst reception completes successfully

Parameters:

- burstPayload — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) —

    The BurstPayload received


另见：

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


Since:

API 级别 2.2.0

### **onReceiveFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

Callback when a burst reception fails over the air

Parameters:

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


Since:

API 级别 2.2.0

### **onTransmitComplete()** as **Void**

Callback when a burst transmission completes successfully

Since:

API 级别 2.2.0

### **onTransmitFail(errorCode as [Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module))** as **Void**

Callback when a burst transmission fails over the air

Parameters:

- errorCode — ([Ant.BurstError](/connect-iq/api-docs/Toybox/Ant/#BurstError-module)) —

    作为 [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量发生的突发故障类型。


Since:

API 级别 2.2.0
