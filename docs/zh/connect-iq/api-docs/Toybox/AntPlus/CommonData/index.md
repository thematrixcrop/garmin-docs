---
title: "Class: Toybox.AntPlus.CommonData"
---
# Class: Toybox.AntPlus.CommonData

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)


[show all](#)

## 概述

The CommonData object represents the information shared across all common data types.

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

Since:

API 级别 2.2.0

## 直接已知子类

[AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/), [AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/), [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/), [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)

## 实例成员摘要 [collapse](#)

- [**identifier**](#identifier-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The Component Identifier.

- [**numComponents**](#numComponents-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Number of components in the system.


## 实例属性详情

### var identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The Component Identifier.

Component IDs are defined on a by-ANT+-profile basis.

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The identifier as a Number

- 单分量时返回 `null`

- Light index for bike lights.



### var numComponents as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Number of components in the system.

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of components
