---
title: "Class: Toybox.UserProfile.UserActivity"
---
# 类：Toybox.UserProfile.UserActivity

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.UserProfile.UserActivity](/connect-iq/api-docs/Toybox/UserProfile/UserActivity/)


[show all](#)

## 概述

用于存储用户活动信息的类。

Since:

API 级别 3.3.0

## 实例成员摘要 [collapse](#)

- [**distance**](#distance-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    活动覆盖的距离，单位为米。

- [**duration**](#duration-var) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    活动持续时间。

- [**startTime**](#startTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    Start time of the activity.

- [**type**](#type-var) as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) or **Null**

    活动的运动类型。


## 实例属性详情

### var distance as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

活动覆盖的距离，单位为米

Since:

API 级别 3.3.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    或 `null`


### var duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

活动持续时间

Since:

API 级别 3.3.0

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    或 `null`


### var startTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

Start time of the activity

Since:

API 级别 3.3.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    或 `null`


### var type as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) or **Null**

活动的运动类型。

Since:

API 级别 3.3.0

Returns:

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    SPORT\_\* enum value or `null`
