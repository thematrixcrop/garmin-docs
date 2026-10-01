---
title: "类：Toybox.FitContributor.Field"
---
# 类：Toybox.FitContributor.Field

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)


[显示全部](#)

## 概述

Field 将来自应用或数据字段的自定义 FIT 数据记录到设备文件系统中的 FIT 文件。

使用 [createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) 方法创建 Field 后，可以使用 [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function) 提交下一个 Field 值，该值将在下一次有机会时写入 FIT 文件。根据设备的不同，写入 FIT 文件可能每秒进行一次，也可能在有新数据可用时进行（智能记录）。最佳实践是仅在值发生变化时调用 [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function)，以适应智能记录。

如果在之前的数据写出前调用 [setData()](/connect-iq/api-docs/Toybox/FitContributor/Field/#setData-instance_function)，之前的值将丢失并被当前数据替换。因此，不建议将此功能用于需要亚秒级粒度的时间敏感型数据。

## 另见：

- [Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function)

- [智能记录与每秒记录](https://support.garmin.com/?faq=s4w6kZmbmK0P6l20SgpW28)

- [了解 FIT 格式](http://www.thisisant.com/resources/fit)


起始版本：

API 级别 1.3.0

## 实例方法摘要 [collapse](#)

- [**setData**](#setData-instance_function)(input as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    设置要写入此 Field 的值。


## 实例方法详情

### **setData(input as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

设置要写入此 Field 的值。

参数：

- input — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要写入 Field 的数据


起始版本：

API 级别 1.3.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `input` 类型与定义时 [createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) 中指定的类型不匹配，则抛出
