---
title: "类：Toybox.System.UnexpectedAppTypeException"
---
# 类：Toybox.System.UnexpectedAppTypeException

继承：

Toybox.Lang.Exception

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)

- [Toybox.System.UnexpectedAppTypeException](/connect-iq/api-docs/Toybox/System/UnexpectedAppTypeException/)


[显示全部](#)

## 概述

此异常表示退出到应用时，Intent 所针对的应用不是允许的应用类型。

当前允许的应用类型包括 watch-apps（原生活动和 Connect IQ 应用）以及小组件。不能定位表盘和数据字段。如果定位的原生活动配置了 Connect IQ 数据字段，则接收 Intent 的是原生应用，而不是数据字段。

## 另见：

- [Toybox.Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)


起始版本：

API 级别 2.2.0

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

API 级别 2.2.0
