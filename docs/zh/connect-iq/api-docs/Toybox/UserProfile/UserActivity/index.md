---
title: "类：Toybox.UserProfile.UserActivity"
---
# 类：Toybox.UserProfile.UserActivity

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.UserProfile.UserActivity](/connect-iq/api-docs/Toybox/UserProfile/UserActivity/)


[显示全部](#)

## 概述

用于存储用户活动信息的类。

起始版本：

API 级别 3.3.0

## 实例成员摘要 [collapse](#)

- [**distance**](#distance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    活动覆盖的距离，单位为米。

- [**duration**](#duration-var) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    活动持续时间。

- [**startTime**](#startTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    活动的开始时间。

- [**type**](#type-var) as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) or **Null**

    活动的运动类型。


## 实例属性详情

### var distance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

活动覆盖的距离，单位为米

起始版本：

API 级别 3.3.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

活动持续时间

起始版本：

API 级别 3.3.0

返回：

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    或 `null`


### var startTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

活动的开始时间

起始版本：

API 级别 3.3.0

返回：

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    或 `null`


### var type as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) or **Null**

活动的运动类型。

起始版本：

API 级别 3.3.0

返回：

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    SPORT\_\* 枚举值或 `null`
