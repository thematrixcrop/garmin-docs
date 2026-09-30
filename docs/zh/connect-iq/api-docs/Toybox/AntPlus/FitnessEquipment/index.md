---
title: "类：Toybox.AntPlus.FitnessEquipment"
---
# 类：Toybox.AntPlus.FitnessEquipment

继承：

Toybox.AntPlus.Device

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)

- [Toybox.AntPlus.FitnessEquipment](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipment/)


[显示全部](#)

## 概述

表示一个健身器材设备实例。

示例：

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

起始版本：

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

    设置训练器模式。


## 实例方法详情

### **controlEquipment(setting as [AntPlus.TrainerValue](/connect-iq/api-docs/Toybox/AntPlus/#TrainerValue-module), data as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module))** as **Void**

控制健身器材。注意：设置与特定训练模式相关的值会使健身器材切换到该模式。例如，如果支持该模式，controlEquipment(TRAINER\_TARGET\_POWER, 100) 会将健身器材设置为目标功率模式，并将目标功率设为 100W。超出范围的值将设置为最近的范围边界值。

参数：

- setting — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个 [TRAINER\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE-const) 值。

- data — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    要发送的设置值；如果处于设置模式，则为 [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) 枚举值。


起始版本：

API 级别 2.4.0

### **getEquipmentData()** as [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)

获取 FE 的当前训练数据

返回：

- [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/) —

    健身设备训练数据


起始版本：

API 级别 2.4.0

### **getResistanceSettings()** as [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/)

获取健身设备在基本阻力训练模式下的阻力百分比设置。调用此方法前，应设置阻力值并处于基本阻力训练模式，否则可能返回 `null` 或默认值。

返回：

- [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/) —

    健身设备阻力设置


起始版本：

API 级别 2.4.0

### **getSimulationSettings()** as [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)

获取风力和赛道阻力模拟设置。调用此方法前，应设置风力和赛道设置，并处于模拟训练模式，否则可能返回 `null` 或默认值。

返回：

- [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/) —

    健身设备模拟设置


起始版本：

API 级别 2.4.0

### **getTargetPowerSettings()** as [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/)

获取健身设备在目标功率训练模式下的目标功率设置。调用此方法前，应设置目标功率并处于目标功率训练模式，否则可能返回 `null` 或默认值。

返回：

- [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/) —

    健身设备目标功率设置


起始版本：

API 级别 2.4.0

### **getTrainerMode()** as [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)

获取健身设备的当前训练模式和支持的模式

返回：

- [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/) —

    健身设备训练模式


起始版本：

API 级别 2.4.0

### **getUserSettings()** as [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

获取健身设备在模拟训练模式下的用户配置设置。调用此方法前，应设置用户设置值并处于模拟模式，否则可能返回 `null` 或默认值。

返回：

- [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/) —

    健身设备用户配置文件设置


起始版本：

API 级别 2.4.0

### **initialize(listener as [AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) or **Null**)**

构造函数

参数：

- listener — ([AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/)) —

    健身设备实例可以选择将 [FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) 类的扩展作为参数传入。如果用户计划仅使用 get\* 方法轮询数据，也可以传入 `null`。


起始版本：

API 级别 2.4.0

### **setTrainerMode(mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module))** as **Void**

设置训练器模式。应检查健身设备支持的模式，因为如果不支持该模式，健身设备将忽略此命令。

参数：

- mode — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) 枚举值


起始版本：

API 级别 2.4.0
