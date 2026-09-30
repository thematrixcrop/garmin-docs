---
title: "Class: Toybox.Sensor.SensorInfoIterator"
---
# Class: Toybox.Sensor.SensorInfoIterator

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/)


[show all](#)

## 概述

A class encapsulating a collection of Sensors

The SensorIterator describes a collection of [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) objects that describe actual sensors. Such an iterator is retrieved using the appropriate "get\*Sensors' methods found in [Sensor](/connect-iq/api-docs/Toybox/Sensor/) at the module level.

Example:

Gets a SensorIterator object for all registered external heart rate sensors on the device

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

    Get the current [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) and advance.


## 实例方法详情

### **next()** as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) or **Null**

Get the current [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) and advance.

Get the current [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) and advance self to refer to the next.

Returns:

- [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


Since:

API 级别 3.2.0
