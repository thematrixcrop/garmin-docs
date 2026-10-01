---
title: "类：Toybox.Background.InvalidBackgroundTimeException"
---
# 类：Toybox.Background.InvalidBackgroundTimeException

继承：

Toybox.Lang.Exception

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)

- [Toybox.Background.InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/)


[显示全部](#)

## 概述

表示向 [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) 提供了无效时间，该时间可能无效，原因是：

- 在上次后台事件发生后不到五分钟时发生

- 持续时间少于五分钟


起始版本：

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))

    构造函数。


## 实例方法详情

### **initialize(msg as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))**

构造函数

参数：

- msg — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    异常消息


起始版本：

API 级别 2.3.0
