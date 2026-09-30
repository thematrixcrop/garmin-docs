---
title: "Class: Toybox.Sensor.SensorInfoIterator"
---
# 类：Toybox.Sensor.SensorInfoIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/)


[show all](#)

## 概述

封装传感器集合的类

The SensorIterator describes a collection of [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) objects that describe actual sensors. Such an iterator is retrieved using the appropriate "get\*Sensors' methods found in [Sensor](/connect-iq/api-docs/Toybox/Sensor/) at the module level.

Example:

获取设备上所有已注册外部心率传感器的 SensorIterator 对象

```
using Toybox.Sensor;

function getHeartRateSensorIterator() {
    if (Sensor has :getRegisteredSensors) {
        return Sensor.getRegisteredSensors(Sensor.SENSOR_HEARTRATE);
    }
    return null;
}
```

Since:

API 级别 3.2.0

## 实例方法摘要 [collapse](#)

- [**next**](#next-instance_function)() as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) or **Null**

    获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 并前进。


## 实例方法详情

### **next()** as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) or **Null**

获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 并前进。

获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)，并将自身前进到下一个。

Returns:

- [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


Since:

API 级别 3.2.0
