---
title: "Class: Toybox.Lang.Method"
---
# 类：Toybox.Lang.Method

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


[show all](#)

## 概述

Method 是表示回调的类，也可以是作为参数传递给另一个函数的函数。可以使用 [method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function) 调用创建它，并使用 [invoke()](/connect-iq/api-docs/Toybox/Lang/Method/#invoke-instance_function) 方法调用 Method。

## 另见：

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Timer](/connect-iq/api-docs/Toybox/Timer/)

- [Toybox.SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/)


Example:

Using a callback function with a Timer

```
using Toybox.Timer;

var myCount = 0;

function timerCallback() {
    myCount += 1;
}

myTimer = new Timer.Timer();
myTimer.start(method(:timerCallback), 1000, true);
```

Example:

调用方法

```
using Toybox.Lang;

function sensorIterator(type, options) {
    var sensors = [
        :getHeartRateHistory,
        :getTemperatureHistory,
        :getPressureHistory,
        :getElevationHistory
    ];

    var getSensorHistory = new Lang.Method(Toybox.SensorHistory, sensors[type]);
    return getSensorHistory.invoke(options);
}

enum {
    HEARTRATE,
    TEMPERATURE,
    PRESSURE,
    ELEVATION
}

var elevationIter = sensorIterator(ELEVATION, {:period => 10 });
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取 Method 的哈希代码值。

- [**initialize**](#initialize-instance_function)(aClass, aMethod as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))

    方法构造函数。

- [invoke](#invoke-instance_function)(参数...) [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

    调用方法。


## 实例方法详情

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取 Method 的哈希代码值。此操作计算一个 32 位 Number，通常用作将 Object 放入 Dictionary 时的索引。哈希代码值具有以下特征：

- 计算得到的哈希码在 Object 的整个生命周期内保持不变

- 如果两个 Object 相等，则它们的哈希代码也相等


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    Method 的哈希代码


另见：

- [Hash Function](https://en.wikipedia.org/wiki/Hash_function)

- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API 级别 1.0.0

### **initialize(aClass, aMethod as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))**

方法构造函数。

Parameters:

- aClass —

    方法的类定义（例如 Toybox.SensorHistory）或类实例。

- aMethod — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    Symbol of class method


Since:

API 级别 1.0.0

### **invoke(parameters...)** [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

调用方法。

Parameters:

- parameters... — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The parameters required by the invoked Method


Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The return value from the invoked Method


Since:

API 级别 1.0.0
