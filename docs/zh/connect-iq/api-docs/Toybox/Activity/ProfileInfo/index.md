---
title: "Class: Toybox.Activity.ProfileInfo"
---
# 类：Toybox.Activity.ProfileInfo

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Activity.ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/)


[show all](#)

## 概述

ProfileInfo 类包含有关活动配置文件的信息。

可通过 [getProfileInfo()](/connect-iq/api-docs/Toybox/Activity/#getProfileInfo-instance_function) 方法检索此信息。此类中的字段可能返回 `null`，因此使用前应检查 `null` 值。

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**name**](#name-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    配置文件名称。

- [**sport**](#sport-var) as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

    一个 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 枚举值。

- [**subSport**](#subSport-var) as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

    一个 [SUB\_SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SUB_SPORT_GENERIC-const) 枚举值。

- [**uniqueIdentifier**](#uniqueIdentifier-var) as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    配置文件的唯一标识符。


## 实例属性详情

### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

配置文件名称

Since:

API 级别 3.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    配置文件名称


### var sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

一个 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 枚举值

Since:

API 级别 3.2.0

Returns:

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    SPORT\_\* 枚举值


### var subSport as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

一个 [SUB\_SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SUB_SPORT_GENERIC-const) 枚举值。可以为 `null`。

Since:

API 级别 3.2.0

Returns:

- [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) —

    SUB\_SPORT\_\* 枚举值


### var uniqueIdentifier as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

配置文件的唯一标识符

Since:

API 级别 3.2.0

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    配置文件标识符
