---
title: "Class: Toybox.AntPlus.FitnessEquipment"
---
# 类：Toybox.AntPlus.FitnessEquipment

Inherits:

Toybox.AntPlus.Device

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)

- [Toybox.AntPlus.FitnessEquipment](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipment/)


[show all](#)

## 概述

Represents a Fitness Equipment Device instance.

Example:

```
using Toybox.AntPlus;

// Assuming Valid FitnessEquipmentListener object "MyFitnessEquipmentListener"

// Initialize the AntPlus.FitnessEquipmentListener object
listener = new MyFitnessEquipmentListener();

// Initialize the AntPlus.BikePower object with a listener
fitnessEquipment = new AntPlus.FitnessEquipment(listener);

fitnessEquipment.setTrainerMode(TRAINER_MODE_BASIC_RESISTANCE);
fitnessEquipment.controlEquipment(TRAINER_RESISTANCE, 30); //sets basic resistance to 30% of maximum.
// ...etc
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

## 实例方法摘要 [collapse](#)

- [**controlEquipment**](#controlEquipment-instance_function)(setting as [AntPlus.TrainerValue](/connect-iq/api-docs/Toybox/AntPlus/#TrainerValue-module), data as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module)) as **Void**

    控制健身器材。注意：设置与特定训练模式相关的值会使健身器材切换到该模式。

- [**getEquipmentData**](#getEquipmentData-instance_function)() as [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)

    获取 FE 的当前训练数据。

- [**getResistanceSettings**](#getResistanceSettings-instance_function)() as [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/)

    获取健身设备在基本阻力训练模式下的阻力百分比设置。

- [**getSimulationSettings**](#getSimulationSettings-instance_function)() as [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)

    获取风力和赛道阻力模拟设置。

- [**getTargetPowerSettings**](#getTargetPowerSettings-instance_function)() as [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/)

    获取健身设备在目标功率训练模式下的目标功率设置。

- [**getTrainerMode**](#getTrainerMode-instance_function)() as [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)

    获取健身设备的当前训练模式和支持的模式。

- [**getUserSettings**](#getUserSettings-instance_function)() as [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

    获取健身设备在模拟训练模式下的用户配置设置。

- [**initialize**](#initialize-instance_function)(listener as [AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) or **Null**)

    Constructor.

- [**setTrainerMode**](#setTrainerMode-instance_function)(mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module)) as **Void**

    Set the trainer mode.


## 实例方法详情

### **controlEquipment(setting as [AntPlus.TrainerValue](/connect-iq/api-docs/Toybox/AntPlus/#TrainerValue-module), data as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module))** as **Void**

控制健身器材。注意：设置与特定训练模式相关的值会使健身器材切换到该模式。例如，如果支持该模式，controlEquipment(TRAINER\_TARGET\_POWER, 100) 会将健身器材设置为目标功率模式，并将目标功率设为 100W。超出范围的值将设置为最近的范围边界值。

Parameters:

- setting — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个 [TRAINER\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE-const) 值。

- data — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value of the setting to be sent or [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) enum value if setting mode.


Since:

API 级别 2.4.0

### **getEquipmentData()** as [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)

获取 FE 的当前训练数据

Returns:

- [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/) —

    健身设备训练数据


Since:

API 级别 2.4.0

### **getResistanceSettings()** as [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/)

获取健身设备在基本阻力训练模式下的阻力百分比设置。调用此方法前，应设置阻力值并处于基本阻力训练模式，否则可能返回 `null` 或默认值。

Returns:

- [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/) —

    健身设备阻力设置


Since:

API 级别 2.4.0

### **getSimulationSettings()** as [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)

获取风力和赛道阻力模拟设置。调用此方法前，应设置风力和赛道设置，并处于模拟训练模式，否则可能返回 `null` 或默认值。

Returns:

- [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/) —

    健身设备模拟设置


Since:

API 级别 2.4.0

### **getTargetPowerSettings()** as [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/)

获取健身设备在目标功率训练模式下的目标功率设置。调用此方法前，应设置目标功率并处于目标功率训练模式，否则可能返回 `null` 或默认值。

Returns:

- [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/) —

    健身设备目标功率设置


Since:

API 级别 2.4.0

### **getTrainerMode()** as [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)

获取健身设备的当前训练模式和支持的模式

Returns:

- [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/) —

    健身设备训练模式


Since:

API 级别 2.4.0

### **getUserSettings()** as [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

获取健身设备在模拟训练模式下的用户配置设置。调用此方法前，应设置用户设置值并处于模拟模式，否则可能返回 `null` 或默认值。

Returns:

- [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/) —

    健身设备用户配置文件设置


Since:

API 级别 2.4.0

### **initialize(listener as [AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) or **Null**)**

Constructor

Parameters:

- listener — ([AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/)) —

    The fitness equipment instance optionally takes an extension of the [FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) class as a parameter. `null` can be passed in instead if the user plans to only poll for data using the get\* methods.


Since:

API 级别 2.4.0

### **setTrainerMode(mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module))** as **Void**

Set the trainer mode. You should check the capable modes of the fitness equipment, as the command will be ignored by the fitness equipment if the mode is not supported.

Parameters:

- mode — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) 枚举值


Since:

API 级别 2.4.0
