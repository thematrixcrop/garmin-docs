---
title: "类：Toybox.Sensor.SensorInfoIterator"
---
# 类：Toybox.Sensor.SensorInfoIterator

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorInfoIterator](/connect-iq/api-docs/Toybox/Sensor/SensorInfoIterator/)


[show all](#)

## 概述

封装传感器集合的类

SensorIterator 描述一组用于表示实际传感器的 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 对象。此类迭代器通过 [Sensor](/connect-iq/api-docs/Toybox/Sensor/) 模块级别中相应的“get\*Sensors”方法获取。

示例：

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

起始版本：

API 级别 3.2.0

## 实例方法摘要 [collapse](#)

- [**next**](#next-instance_function)() as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) or **Null**

    获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 并前进。


## 实例方法详情

### **next()** as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) or **Null**

获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) 并前进。

获取当前 [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)，并将自身前进到下一个。

返回：

- [SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)


起始版本：

API 级别 3.2.0
