---
title: "Class: Toybox.AntPlus.SimulationSettings"
---
# 类：Toybox.AntPlus.SimulationSettings

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/)


[show all](#)

## 概述

表示健身器材上的风力和轨迹模拟训练模式设置。字段可能返回 `null`，因此使用前应检查值是否为 `null`。尚未设置的值将返回无效值。

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

    模拟路线的坡度（等级）设置。

- [**surfaceResistance**](#surfaceResistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟模式的模拟表面阻力系数。

- [**windResistance**](#windResistance-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟模式的风阻系数设置。风阻系数 \[kg/m\] = 迎风面积 \[m2\] × 阻力系数 × 空气密度 \[kg/m3\]。

- [**windSpeed**](#windSpeed-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟模式的模拟风速设置。


## 实例属性详情

### var draftFactor as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟模式的模拟跟骑系数设置。跟骑系数为 0 时会消除所有风阻，1.0 表示没有跟骑效果。

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0 - 1.0，无效值 = 0xFF


### var slope as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟路线的坡度（等级）设置

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 \-200% - +200%，无效值为 0xFFFF


### var surfaceResistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟模式的表面阻力系数。该无量纲因子根据自行车轮胎与骑行路线表面之间的摩擦量化滚动阻力。滚动阻力 \[N\] =（自行车质量 + 骑手质量）× 滚动阻力系数 × 9.8。示例系数：木质赛道 = 0.001，平滑混凝土 = 0.002，沥青路面 = 0.004，粗糙路面 = 0.008。

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0 - 0.0127，无效值 = 0xFF


### var windResistance as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟模式的风阻系数设置。风阻系数 \[kg/m\] = 迎风面积 \[m2\] × 阻力系数 × 空气密度 \[kg/m3\]。

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0.0 - 1.86 kg/m，无效值 = 0xFF


### var windSpeed as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟模式的模拟风速设置

Since:

API 级别 2.4.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 \-127 - +127 km/hr，无效值为 0xFF
