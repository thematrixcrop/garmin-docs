---
title: "类：Toybox.Timer.Timer"
---
# 类：Toybox.Timer.Timer

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Timer.Timer](/connect-iq/api-docs/Toybox/Timer/Timer/)


[show all](#)

## 概述

Timer 对象会在指定的毫秒数后调用回调函数。

计时器有两种类型：单次计时器和重复计时器。单次 Timer 只会在计时器到期后运行一次，而重复 Timer 会每 n 毫秒调用一次回调函数，直到调用 stop()。如果重复 Timer 未能在下一次执行时间之前运行，则会跳过所有错过的执行。

可用计时器数量（默认值为 3）和最小时间值（默认值为 50 ms）取决于主机系统。设置过多计时器时将发生错误。

示例：

创建一个每秒递增 1 的计数器

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

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**start**](#start-instance_function)(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**, time as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), repeat as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    启动 Timer。

- [**stop**](#stop-instance_function)() as **Void**

    停止 Timer 运行。


## 实例方法详情

### **start(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**, time as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), repeat as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

启动 Timer。

注意：

如果在低功耗模式下从表盘应用调用，将导致应用崩溃

参数：

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    Timer 完成后调用的函数

- time — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    调用回调前等待的毫秒数

- repeat — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    设置为 `true`，使 Timer 持续重复，直到调用 stop()


起始版本：

API 级别 1.0.0

### **stop()** as **Void**

停止 Timer 运行。

只需对重复计时器调用此方法。可以通过调用 start() 再次启动 Timer。

起始版本：

API 级别 1.0.0
