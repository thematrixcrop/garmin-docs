---
title: "类：Toybox.AntPlus.UserSettings"
---
# 类：Toybox.AntPlus.UserSettings

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)


[显示全部](#)

## 概述

表示支持模拟训练模式的健身器材的用户配置。字段可能返回 `null`，因此使用前应检查值是否为 `null`。

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

## 实例成员摘要 [collapse](#)

- [**bikeWeight**](#bikeWeight-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟训练模式下设置的自行车重量。

- [**gearRatio**](#gearRatio-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    模拟训练模式下设置的齿轮比。

- [**userWeight**](#userWeight-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    为模拟训练模式设置的用户体重。

- [**wheelDiameter**](#wheelDiameter-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

    为模拟训练模式设置的车轮直径。


## 实例属性详情

### var bikeWeight as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟训练模式下设置的自行车重量

起始版本：

API 级别 2.4.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0-50kg


### var gearRatio as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

模拟训练模式下设置的齿轮比

起始版本：

API 级别 2.4.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0.03-7.65


### var userWeight as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

为模拟训练模式设置的用户体重

起始版本：

API 级别 2.4.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0-655.34 kg


### var wheelDiameter as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**

为模拟训练模式设置的车轮直径

起始版本：

API 级别 2.4.0

返回：

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    范围为 0-2.54m
