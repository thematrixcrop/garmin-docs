---
title: "Class: Toybox.WatchUi.WatchFacePowerInfo"
---
# 类：Toybox.WatchUi.WatchFacePowerInfo

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/)


[show all](#)

## 概述

调用 [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 期间超出功耗预算时提供的功耗信息。

This is automatically passed to the [onPowerBudgetExceeded()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPowerBudgetExceeded-instance_function) method when it is invoked.

## 另见：

- [Toybox.WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)


Since:

API 级别 2.3.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 实例成员摘要 [collapse](#)

- [**executionTimeAverage**](#executionTimeAverage-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 完成平均部分更新执行所需的时间。

- [**executionTimeLimit**](#executionTimeLimit-var) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    允许 [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 执行部分更新所用的最长时间。


## 实例属性详情

### var executionTimeAverage as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

[onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 完成平均部分更新执行所需的时间。

Since:

API 级别 2.3.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    每次更新的平均耗时，单位为毫秒（ms）


### var executionTimeLimit as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

允许 [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 执行部分更新所用的最长时间。

Since:

API 级别 2.3.0

Returns:

- [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    允许的最大时间，单位为毫秒（ms）
