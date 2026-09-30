---
title: "Class: Toybox.FitContributor.Field"
---
# 类：Toybox.FitContributor.Field

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)


[show all](#)

## 概述

Field 将来自 Application 或 Data Field 的自定义 FIT 数据记录到设备文件系统中的 FIT 文件。

Once a Field is created with the [createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) method, you can submit the next Field value with [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function), which will get written to the FIT file at the next opportunity. Depending on the device, writes to the FIT file may occur once per second or when new data is available (Smart Recording). Best practice is to only call [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function) when values have changed to accommodate Smart Recording.

如果在之前的数据写出前调用 [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function)，之前的值将丢失并被当前数据替换。因此，不建议将此功能用于需要亚秒级粒度的时间敏感型数据。

## 另见：

- [Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function)

- [Smart Recording vs. Every Second Recording](https://support.garmin.com/?faq=s4w6kZmbmK0P6l20SgpW28)

- [Learn more about the FIT format](http://www.thisisant.com/resources/fit)


Since:

API 级别 1.3.0

## 实例方法摘要 [collapse](#)

- [**setData**](#setData-instance_function)(input as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    设置要写入此 Field 的值。


## 实例方法详情

### **setData(input as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

设置要写入此 Field 的值。

Parameters:

- input — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The data to be written to the Field


Since:

API 级别 1.3.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `input` type does not match the type specified in [createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) at definition
