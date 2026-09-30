---
title: "Class: Toybox.AntPlus.FitnessEquipmentMode"
---
# 类：Toybox.AntPlus.FitnessEquipmentMode

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)


[show all](#)

## 概述

表示健身器材训练模式。字段可能返回 `null`，因此使用前应检查值是否为 `null`。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.FitnessEquipment.getTrainerMode(); already called
var mode = FitnessEquipmentMode.mode;

System.println("Current training mode is: " + mode);
```

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

- [**basicResistanceSupported**](#basicResistanceSupported-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    支持基本阻力训练模式的标志。

- [**mode**](#mode-var) as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module) or **Null**

    健身设备的当前训练模式。

- [**simulationSupported**](#simulationSupported-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    支持模拟训练模式的标志。

- [**targetPowerSupported**](#targetPowerSupported-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    支持目标功率训练模式的标志。


## 实例属性详情

### var basicResistanceSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

支持基本阻力训练模式的标志

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持基本阻力，则为 `true`，否则为 `false`


### var mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module) or **Null**

健身设备的当前训练模式

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) 枚举值


### var simulationSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

支持模拟训练模式的标志

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持模拟，则为 `true`，否则为 `false`


### var targetPowerSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

支持目标功率训练模式的标志

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持目标功率，则为 `true`，否则为 `false`
