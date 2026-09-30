---
title: "Class: Toybox.AntPlus.FitnessEquipmentMode"
---
# Class: Toybox.AntPlus.FitnessEquipmentMode

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)


[show all](#)

## 概述

Represents a fitness equipment training mode Fields may return `null` so you should `null` check values before using them.

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

    Flag for basic resistance training mode support.

- [**mode**](#mode-var) as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module) or **Null**

    The current training mode of the fitness equipment.

- [**simulationSupported**](#simulationSupported-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    Flag for simulation training mode support.

- [**targetPowerSupported**](#targetPowerSupported-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    Flag for target power training mode support.


## 实例属性详情

### var basicResistanceSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

Flag for basic resistance training mode support

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持基本阻力，则为 `true`，否则为 `false`


### var mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module) or **Null**

The current training mode of the fitness equipment

Since:

API 级别 2.4.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) 枚举值


### var simulationSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

Flag for simulation training mode support

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持模拟，则为 `true`，否则为 `false`


### var targetPowerSupported as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

Flag for target power training mode support

Since:

API 级别 2.4.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果支持目标功率，则为 `true`，否则为 `false`
