---
title: "Class: Toybox.AntPlus.BatteryStatus"
---
# 类：Toybox.AntPlus.BatteryStatus

Inherits:

Toybox.AntPlus.CommonData

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

- [Toybox.AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/)


[show all](#)

## 概述

包含电池状态 ANT+ 公共页面信息的类。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

## 另见：

- [ANT Downloads & Resources (ANT+ Common Pages)](https://www.thisisant.com/resources/common-data-pages/)


Since:

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**batteryStatus**](#batteryStatus-var) as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

    电池的 [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) 值。

- [**batteryVoltage**](#batteryVoltage-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The voltage, -1 is invalid.

- [**operatingTime**](#operatingTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    以秒为单位的运行时间。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var batteryStatus as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

电池的 [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) 值。

Since:

API 级别 2.2.0

Returns:

- [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) —

    The battery status of the ANT+ device as a number


### var batteryVoltage as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The voltage, -1 is invalid

Since:

API 级别 2.2.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    The voltage of the ANT+ device


### var operatingTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

以秒为单位的运行时间。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The operating time of the ANT+ device


## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 2.2.0
