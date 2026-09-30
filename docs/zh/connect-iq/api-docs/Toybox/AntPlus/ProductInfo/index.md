---
title: "Class: Toybox.AntPlus.ProductInfo"
---
# 类：Toybox.AntPlus.ProductInfo

Inherits:

Toybox.AntPlus.CommonData

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/)

- [Toybox.AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/)


[show all](#)

## 概述

包含产品信息 ANT+ 通用页面信息的类。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

Example:

```
using Toybox.AntPlus;
using Toybox.System;

// Assumes AntPlus.Device.getProductInfo(); already called
var serial = ProductInfo.serial;
var swRevisionMain = ProductInfo.swRevisionMain;
var swRevisionSupplemental = ProductInfo.swRevisionSupplemental;

System.println("Current serial is: " + serial);
System.println("Current swRevisionMain is: " + swRevisionMain);
System.println("Current swRevisionSupplemental is: " + swRevisionSupplemental);
```

Since:

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**serial**](#serial-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    序列号。

- [**swRevisionMain**](#swRevisionMain-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    主要软件版本。

- [**swRevisionSupplemental**](#swRevisionSupplemental-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    补充软件修订版本。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var serial as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

序列号。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    产品序列号


### var swRevisionMain as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

主要软件版本。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    产品的主软件修订版本


### var swRevisionSupplemental as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

补充软件修订版本。

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    产品的补充软件修订版本


## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 2.2.0
