---
title: "类：Toybox.AntPlus.CommonData"
---
# 类：Toybox.AntPlus.CommonData

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)


[show all](#)

## 概述

CommonData 对象表示所有通用数据类型之间共享的信息。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

起始版本：

API 级别 2.2.0

## 直接已知子类

[AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/), [AntPlus.BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/), [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/), [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)

## 实例成员摘要 [collapse](#)

- [**identifier**](#identifier-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    组件标识符。

- [**numComponents**](#numComponents-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    系统中的组件数。


## 实例属性详情

### var identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

组件标识符。

组件 ID 按 ANT+ 配置文件定义。

起始版本：

API 级别 2.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    以 Number 表示的标识符

- 单分量时返回 `null`

- 自行车灯的灯光索引。



### var numComponents as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

系统中的组件数。

起始版本：

API 级别 2.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    组件数
