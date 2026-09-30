---
title: "Class: Toybox.Activity.ProfileInfo"
---
# Class: Toybox.Activity.ProfileInfo

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Activity.ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/)


[show all](#)

## 概述

The ProfileInfo class contains information about the active profile.

This information can be retrieved with the [getProfileInfo()](/connect-iq/api-docs/Toybox/Activity/#getProfileInfo-instance_function) method. Fields in this class may return `null` so should be checked for `null` values prior to use.

Since:

API 级别 3.2.0

## 实例成员摘要 [collapse](#)

- [**name**](#name-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The profile name.

- [**sport**](#sport-var) as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

    一个 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 枚举值。

- [**subSport**](#subSport-var) as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

    一个 [SUB\_SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SUB_SPORT_GENERIC-const) 枚举值。

- [**uniqueIdentifier**](#uniqueIdentifier-var) as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    An unique identifer of the profile.


## 实例属性详情

### var name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The profile name

Since:

API 级别 3.2.0

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    the profile name


### var sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)

A [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) enum value

Since:

API 级别 3.2.0

Returns:

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    A SPORT\_\* enum value


### var subSport as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) or **Null**

A [SUB\_SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SUB_SPORT_GENERIC-const) enum value. Can be `null`.

Since:

API 级别 3.2.0

Returns:

- [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) —

    A SUB\_SPORT\_\* enum value


### var uniqueIdentifier as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

An unique identifer of the profile

Since:

API 级别 3.2.0

Returns:

- [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    the profile identifier
