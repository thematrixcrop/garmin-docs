---
title: "Class: Toybox.SensorHistory.SensorHistoryIterator"
---
# 类：Toybox.SensorHistory.SensorHistoryIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)


[show all](#)

## 概述

包含指定时间段传感器数据的类。

SensorHistoryIterator 描述一系列 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 对象。迭代器通过 [SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) 模块级别中相应的“get”方法获取。此类提供从迭代器中包含的每个 SensorSample 对象检索信息所需的方法。

## 另见：

- [SensorHistory.getHeartRateHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getHeartRateHistory-instance_function)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Example:

获取用于以下方法的 SensorHistoryIterator 对象

```
using Toybox.SensorHistory;
using Toybox.Lang;
using Toybox.System;

// Create a method to get the SensorHistoryIterator object
function getIterator() {
    // Check device for SensorHistory compatibility
    if ((Toybox has :SensorHistory) && (Toybox.SensorHistory has :getHeartRateHistory)) {
        return Toybox.SensorHistory.getHeartRateHistory({});
    }
    return null;
}

// Store the iterator info in a variable. The options are 'null' in this
// case so the entire available history is returned with the newest
// samples returned first.
var sensorIter = getIterator();
```

Since:

API 级别 2.1.0

## 实例方法摘要 [collapse](#)

- [**getMax**](#getMax-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    获取此迭代器中包含的最大 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 数据值。

- [**getMin**](#getMin-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    获取此迭代器中包含的最小 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 数据值。

- [**getNewestSampleTime**](#getNewestSampleTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    获取此迭代器中最新 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**getOldestSampleTime**](#getOldestSampleTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    获取此迭代器中最早 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

- [**next**](#next-instance_function)() as [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) or **Null**

    获取迭代器中的下一个 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 条目。


## 实例方法详情

### **getMax()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

获取此迭代器中包含的最大 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 数据值。

Example:

打印最大 SensorSample 数据值

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the
// maximum sample value entry in the iterator
System.println(sensorIter.getMax().data);
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    此迭代器中的最大 SensorSample 数据值


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0

### **getMin()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

获取此迭代器中包含的最小 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 数据值。

Example:

打印最小 SensorSample 数据值

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the
// minimum sample value entry in the iterator
System.println(sensorIter.getMin().data);
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    此迭代器中的最小 SensorSample 数据值


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0

### **getNewestSampleTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

获取此迭代器中最新 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

Example:

打印最新 SensorSample 的 Moment

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the Moment
// of the newest sample entry in the iterator
System.println(sensorIter.getNewestSampleTime());
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    此迭代器中最新 SensorSample 的 Moment


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

- [Toybox.Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)


Since:

API 级别 2.1.0

### **getOldestSampleTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

获取此迭代器中最早 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

Example:

打印最早 SensorSample 的 Moment

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the Moment
// of the oldest sample entry in the iterator
System.println(sensorIter.getOldestSampleTime());
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    此迭代器中最早 SensorSample 的 Moment


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

- [Toybox.Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)


Since:

API 级别 2.1.0

### **next()** as [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) or **Null**

获取迭代器中的下一个 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 条目。

必须调用此方法以从迭代器获取初始数据。

Example:

打印下一个 SensorSample 数据值

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the next
// entry in the iterator
System.println(sensorIter.next().data);
```

Returns:

- [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) —

    下一个 SensorHistorySample；如果没有更多样本，则为 `null`


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0
