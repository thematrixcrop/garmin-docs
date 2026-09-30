---
title: "Class: Toybox.AntPlus.SimulationSettings"
---
# Class: Toybox.AntPlus.SimulationSettings

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)


[show all](#)

## 概述

Represents the wind and track simulation training mode settings on the fitness equipment. Fields may return `null` so you should `null` check values before using them. Values that have not yet been set will return invalid.

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

- [**draftFactor**](#draftFactor-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟模式的模拟跟骑系数设置。跟骑系数为 0 时会消除所有风阻，1.0 表示没有跟骑效果。

- [**slope**](#slope-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The slope (grade) setting of the simulated track.

- [**surfaceResistance**](#surfaceResistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The simulated surface resistance coefficient for simulation mode.

- [**windResistance**](#windResistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The simulated wind resistance coefficient setting for simulation mode Wind Resistance Coefficient \[kg/m\] = Frontal Surface Area \[m2\] x Drag Coefficient x Air Density \[kg/m3\].

- [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    The simulated wind speed setting for simulation mode.


## 实例属性详情

### var draftFactor as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟模式的模拟跟骑系数设置。跟骑系数为 0 时会消除所有风阻，1.0 表示没有跟骑效果。

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0 - 1.0 range, invalid = 0xFF


### var slope as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The slope (grade) setting of the simulated track

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    \-200% - +200% range, invalid 0xFFFF


### var surfaceResistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The simulated surface resistance coefficient for simulation mode. Dimensionless factor to quantify rolling resistance based on friction between bicycle tires and the tracker surface. Rolling Resistance \[N\] = (Bicycle Mass + Cyclist Mass) x Coefficient of Rolling Resistance x 9.8 Sample coefficients: Wooden track = 0.001 Smooth Concrete = 0.002 Asphalt Road = 0.004 Rough Road = 0.008

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0 - 0.0127 range, invalid = 0xFF


### var windResistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The simulated wind resistance coefficient setting for simulation mode Wind Resistance Coefficient \[kg/m\] = Frontal Surface Area \[m2\] x Drag Coefficient x Air Density \[kg/m3\]

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    0.0 - 1.86 kg/m range, invalid = 0xFF


### var windSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

The simulated wind speed setting for simulation mode

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    \-127 - +127 km/hr range, invalid = 0xFF
