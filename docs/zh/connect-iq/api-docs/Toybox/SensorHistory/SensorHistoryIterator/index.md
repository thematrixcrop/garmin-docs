---
title: "Class: Toybox.SensorHistory.SensorHistoryIterator"
---
# Class: Toybox.SensorHistory.SensorHistoryIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)


[show all](#)

## 概述

A class containing sensor data for a given period of time.

The SensorHistoryIterator describes a sequence of [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) objects. The iterator is retrieved using the appropriate "get" methods found in [SensorHistory](/connect-iq/api-docs/Toybox/SensorHistory/) at the module level. This class provides the methods needed to retrieve information from each of the SensorSample objects included in the iterator.

## 另见：

- [SensorHistory.getHeartRateHistory()](/connect-iq/api-docs/Toybox/SensorHistory/#getHeartRateHistory-instance_function)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)

- [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Example:

Gets a SensorHistoryIterator object to be used with the below methods

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

Print out the maximum SensorSample data value

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the
// maximum sample value entry in the iterator
System.println(sensorIter.getMax().data);
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The maximum SensorSample data value in this iterator


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0

### **getMin()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

获取此迭代器中包含的最小 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 数据值。

Example:

Print out the minimum SensorSample data value

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the
// minimum sample value entry in the iterator
System.println(sensorIter.getMin().data);
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The minimum SensorSample data value in this iterator


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0

### **getNewestSampleTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

获取此迭代器中最新 [SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) 的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。

Example:

Print out the Moment of the newest SensorSample

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the Moment
// of the newest sample entry in the iterator
System.println(sensorIter.getNewestSampleTime());
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    The Moment of the newest SensorSample in this iterator


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

Print out the Moment of the oldest SensorSample

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the Moment
// of the oldest sample entry in the iterator
System.println(sensorIter.getOldestSampleTime());
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    The Moment of the oldest SensorSample in this iterator


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

Print out the next SensorSample data value

```
using Toybox.SensorHistory;
using Toybox.System;
// Given a valid SensorHistoryIterator object, print out the next
// entry in the iterator
System.println(sensorIter.next().data);
```

Returns:

- [SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/) —

    The next SensorHistorySample, or `null` if there are no more samples


另见：

- [Toybox.SensorHistory.SensorHistoryIterator](/connect-iq/api-docs/Toybox/SensorHistory/SensorHistoryIterator/)

- [Toybox.SensorHistory.SensorSample](/connect-iq/api-docs/Toybox/SensorHistory/SensorSample/)


Since:

API 级别 2.1.0
