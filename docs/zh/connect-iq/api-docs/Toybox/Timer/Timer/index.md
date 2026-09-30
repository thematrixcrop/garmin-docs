---
title: "Class: Toybox.Timer.Timer"
---
# Class: Toybox.Timer.Timer

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Timer.Timer](/connect-iq/api-docs/Toybox/Timer/Timer/)


[show all](#)

## 概述

A Timer object will invoke a callback function after a specified number of milliseconds.

There are two types of timers: one-shot or repeating. A one-shot Timer will only run once after the Timer expires, while a repeating Timer will invoke the callback function every n milliseconds until stop() is called. If a repeating Timer fails to run before its next execution time, then any missed executions will be skipped.

The number of available timers (default 3) and the minimum time value (default 50 ms) depends on the host system. An error will occur if too many timers are set.

Example:

Create a counter that increments by one each second

```
using Toybox.Timer;
var myCount =  0;

function timerCallback() {
    myCount += 1;
    Ui.requestUpdate();
}

function onLayout(dc) {
    var myTimer = new Timer.Timer();
    myTimer.start(method(:timerCallback), 1000, true);
}
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**start**](#start-instance_function)(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**, time as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), repeat as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    Start the Timer.

- [**stop**](#stop-instance_function)() as **Void**

    Stops the Timer from running.


## 实例方法详情

### **start(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**, time as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), repeat as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

Start the Timer.

注意：

Will cause an app crash if called from a watch face app while in low power mode

Parameters:

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A function to call after the Timer completes

- time — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The number of milliseconds to wait before invoking callback

- repeat — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Set to `true` to have the Timer repeat until stop() is called


Since:

API 级别 1.0.0

### **stop()** as **Void**

Stops the Timer from running.

This only needs to be called for repeating timers. A Timer can be started again by calling start().

Since:

API 级别 1.0.0
