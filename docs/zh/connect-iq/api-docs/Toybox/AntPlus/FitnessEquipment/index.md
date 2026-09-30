---
title: "Class: Toybox.AntPlus.FitnessEquipment"
---
# Class: Toybox.AntPlus.FitnessEquipment

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

    Control the fitness Equipment Note: Setting a value related to a specific training mode will cause the fitness equipment to change to that mode.

- [**getEquipmentData**](#getEquipmentData-instance_function)() as [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)

    Get the current training data from the FE.

- [**getResistanceSettings**](#getResistanceSettings-instance_function)() as [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/)

    Get the resistance percentage setting of the fitness equipment for basic resistance training mode.

- [**getSimulationSettings**](#getSimulationSettings-instance_function)() as [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)

    Get the wind and track resistance simulation settings.

- [**getTargetPowerSettings**](#getTargetPowerSettings-instance_function)() as [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/)

    Get the target power setting of the fitness equipment for target power training mode.

- [**getTrainerMode**](#getTrainerMode-instance_function)() as [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)

    Get the current training mode and supported modes of the fitness equipment.

- [**getUserSettings**](#getUserSettings-instance_function)() as [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

    Get the user configuration settings of the fitness equipment for simulation training mode.

- [**initialize**](#initialize-instance_function)(listener as [AntPlus.FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/) or **Null**)

    Constructor.

- [**setTrainerMode**](#setTrainerMode-instance_function)(mode as [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module)) as **Void**

    Set the trainer mode.


## 实例方法详情

### **controlEquipment(setting as [AntPlus.TrainerValue](/connect-iq/api-docs/Toybox/AntPlus/#TrainerValue-module), data as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [AntPlus.TrainerMode](/connect-iq/api-docs/Toybox/AntPlus/#TrainerMode-module))** as **Void**

Control the fitness Equipment Note: Setting a value related to a specific training mode will cause the fitness equipment to change to that mode. For example, controlEquipment(TRAINER\_TARGET\_POWER, 100) will set the fitness equipment to target power mode with target power set to 100W if such mode is supported. Values out of range will be set to within the nearest range boundary value.

Parameters:

- setting — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个 [TRAINER\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE-const) 值。

- data — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value of the setting to be sent or [TRAINER\_MODE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#TRAINER_MODE_BASIC_RESISTANCE-const) enum value if setting mode.


Since:

API 级别 2.4.0

### **getEquipmentData()** as [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/)

Get the current training data from the FE

Returns:

- [AntPlus.FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/) —

    Fitness Equipment training data


Since:

API 级别 2.4.0

### **getResistanceSettings()** as [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/)

Get the resistance percentage setting of the fitness equipment for basic resistance training mode. You should set resistance values and be in basic resistance training mode before calling this method, otherwise `null` or default values may be returned.

Returns:

- [AntPlus.ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/) —

    Fitness Equipment resistance Setting


Since:

API 级别 2.4.0

### **getSimulationSettings()** as [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)

Get the wind and track resistance simulation settings. You should set wind and track settings, as well as be in simulation training mode before calling this method or `null` or default values may be returned.

Returns:

- [AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/) —

    Fitness Equipment simulation settings


Since:

API 级别 2.4.0

### **getTargetPowerSettings()** as [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/)

Get the target power setting of the fitness equipment for target power training mode. You should set the target power and be in target power training mode before calling this method, otherwise `null` or default values may be returned.

Returns:

- [AntPlus.TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/) —

    Fitness Equipment target power Setting


Since:

API 级别 2.4.0

### **getTrainerMode()** as [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/)

Get the current training mode and supported modes of the fitness equipment

Returns:

- [AntPlus.FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/) —

    Fitness Equipment training mode


Since:

API 级别 2.4.0

### **getUserSettings()** as [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

Get the user configuration settings of the fitness equipment for simulation training mode. You should set user settings values and be in simulation mode before calling this method, otherwise `null` or default values may be returned.

Returns:

- [AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/) —

    Fitness Equipment user profile settings


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
