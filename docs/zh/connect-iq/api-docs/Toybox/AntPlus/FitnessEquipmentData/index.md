---
title: "Class: Toybox.AntPlus.FitnessEquipmentData"
---
# 类：Toybox.AntPlus.FitnessEquipmentData

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)


[show all](#)

## 概述

表示健身器材传输的一般数据。字段可能返回 `null`，因此使用前应检查值是否为 `null`。

Since:

API 级别 2.4.0

:::details 支持的设备

-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB

:::

## 实例成员摘要 [collapse](#)

- [**feDistance**](#feDistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The elapsed distance calculated by the trainer since reset Range is always greater than or equal to 0m.

- [**feHeartRate**](#feHeartRate-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The heart rate calculated by the trainer.

- [**feSpeed**](#feSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The speed calculated by the trainer.


## 实例属性详情

### var feDistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The elapsed distance calculated by the trainer since reset Range is always greater than or equal to 0m

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0-0xFFFFFFFF，单位为米


### var feHeartRate as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The heart rate calculated by the trainer. This may come from hand sensors, or an HRM if connected to the equipment

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    0-254 bpm，无效值为 0xFF


### var feSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The speed calculated by the trainer

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0-65.534m/s，无效值为 0xFFFF
