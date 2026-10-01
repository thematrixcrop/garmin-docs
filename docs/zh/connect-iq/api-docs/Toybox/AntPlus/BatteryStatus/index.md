---
title: "类：Toybox.AntPlus.BatteryStatus"
---
# 类：Toybox.AntPlus.BatteryStatus

继承：

Toybox.AntPlus.CommonData

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

- [Toybox.AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/)


[显示全部](#)

## 概述

包含电池状态 ANT+ 公共页面信息的类。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

## 另见：

- [ANT Downloads & Resources (ANT+ Common Pages)](https://www.thisisant.com/resources/common-data-pages/)


起始版本：

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**batteryStatus**](#batteryStatus-var) as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

    电池的 [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) 值。

- [**batteryVoltage**](#batteryVoltage-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    电压，-1 表示无效。

- [**operatingTime**](#operatingTime-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    以秒为单位的运行时间。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    构造函数。


## 实例属性详情

### var batteryStatus as [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) or **Null**

电池的 [BATT\_STATUS\_\*](/connect-iq/api-docs/Toybox/AntPlus/#BATT_STATUS_CNT-const) 值。

起始版本：

API 级别 2.2.0

返回：

- [AntPlus.BatteryStatusValue](/connect-iq/api-docs/Toybox/AntPlus/#BatteryStatusValue-module) —

    ANT+ 设备的电池状态数值


### var batteryVoltage as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

电压，-1 表示无效

起始版本：

API 级别 2.2.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    ANT+ 设备的电压


### var operatingTime as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

以秒为单位的运行时间。

起始版本：

API 级别 2.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    ANT+ 设备的运行时间


## 实例方法详情

### **initialize()**

构造函数

起始版本：

API 级别 2.2.0
