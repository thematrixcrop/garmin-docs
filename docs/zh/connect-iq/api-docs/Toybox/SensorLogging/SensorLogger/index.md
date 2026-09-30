---
title: "Class: Toybox.SensorLogging.SensorLogger"
---
# Class: Toybox.SensorLogging.SensorLogger

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/)


[show all](#)

## 概述

Class for the SensorLogger object. This object gets passed to FIT session to start recording sensor data.

Since:

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**getStats**](#getStats-instance_function)() as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) or **Null**

    获取当前会话中收集的数据统计信息。

- [**getStats2**](#getStats2-instance_function)(sensor as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**) as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) or { :accelerometer as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/), :gyroscope as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/), :magnetometer as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) }

    获取当前会话中收集的传感器数据统计信息。

- [**initialize**](#initialize-instance_function)(options as { :accelerometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :gyroscope as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :magnetometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :synchronous as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.


## 实例方法详情

### **getStats()** as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) or **Null**

获取当前会话中收集的数据统计信息。

Returns:

- [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) —

    Returns a SensorLoggingStats object.


Since:

API 级别 2.3.0

### **getStats2(sensor as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) or **Null**)** as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) or { :accelerometer as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/), :gyroscope as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/), :magnetometer as [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) }

获取当前会话中收集的传感器数据统计信息。

Parameters:

- sensor —

    Symbol for the sensor type to get the logging stats for or `null` to get stats about all the enabled sensors.


Returns:

- [SensorLogging.SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) —

    Returns a [SensorLoggingStats](/connect-iq/api-docs/Toybox/SensorLogging/SensorLoggingStats/) for the requested sensor type or the [Toybox::Lang::Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) with stats of all the enabled sensors if `null` is passed.


Since:

API 级别 3.3.0

Throws:

- [Toybox::Lang::InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/) Thrown if provided argument are out of range or are of the wrong type.


### **initialize(options as { :accelerometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :gyroscope as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :magnetometer as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }, :synchronous as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

注意：

A SensorLogger may be initialized with the same dictionary of options provided to [registerSensorDataListener()](/connect-iq/api-docs/Toybox/Sensor/#registerSensorDataListener-instance_function), but only the options documented below will be used.

注意：

同步数据请求不支持磁力计数据。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary of logging options

- :accelerometer — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        加速度计数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) Set to `true` to fetch data from the accelerometer.


- :gyroscope — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        陀螺仪数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) Set to `true` to fetch data from the gyroscope.


- :magnetometer — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        磁力计数据的选项。

- :enabled ([Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) Set to `true` to fetch data from the magnetometer.


- :synchronous — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        Set to `true` to request synchronized sensor data.


Since:

API 级别 2.3.0
