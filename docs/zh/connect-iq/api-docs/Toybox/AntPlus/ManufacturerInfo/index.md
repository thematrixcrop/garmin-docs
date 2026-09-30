---
title: "Class: Toybox.AntPlus.ManufacturerInfo"
---
# 类：Toybox.AntPlus.ManufacturerInfo

Inherits:

Toybox.AntPlus.CommonData

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

- [Toybox.AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/)


[show all](#)

## 概述

包含制造商信息 ANT+ 公共页面信息的类。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.Device.getManufacturerInfo(); already called
var hwRevision = ManufacturerInfo.hwRevision;
var manufacturerId = ManufacturerInfo.manufacturerId;
var modelNumber = ManufacturerInfo.modelNumber;

System.println("Current hwRevision is: " + hwRevision);
System.println("Current manufacturerId is: " + manufacturerId);
System.println("Current modelNumber is: " + modelNumber);
```

Since:

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**hwRevision**](#hwRevision-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    硬件版本。

- [**manufacturerId**](#manufacturerId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    制造商 ID。

- [**modelNumber**](#modelNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    型号。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var hwRevision as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

硬件版本。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    制造商硬件修订版本


### var manufacturerId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

制造商 ID。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    制造商 ID


### var modelNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

型号。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    制造商型号


## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 2.2.0
