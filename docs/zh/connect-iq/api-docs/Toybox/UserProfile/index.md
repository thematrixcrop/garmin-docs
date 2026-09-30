---
title: "Module: Toybox.UserProfile"
---
# 模块：Toybox.UserProfile

## 概述

The UserProfile module will allow apps to access user information.

The module contains the GENDER\_\* enum to retrieve gender information from the user profile. The HR\_ZONE\_SPORT\_\* enum also provides constants for defining different sport type. This is used to retrieve Heart Rate Zones specific to that sport.

Example:

Simple UserProfile module use

```
using Toybox.UserProfile;

var profile = UserProfile.getProfile();
System.out.println("The user was born in " + profile.birthYear);
```

Since:

API 级别 1.0.0

需要权限：

- UserProfile


## 命名空间下的类

类：[Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/), [UserActivity](/connect-iq/api-docs/Toybox/UserProfile/UserActivity/), [UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

## 常量摘要

### Gender

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| GENDER\_FEMALE | 0 |
API 级别 1.0.0

 |  |
| GENDER\_MALE | 1 |

API 级别 1.0.0

 |  |
| GENDER\_UNSPECIFIED | 2 |

API 级别 4.2.3

 |  |

### SportHrZone

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| HR\_ZONE\_SPORT\_GENERIC | 0 |
API 级别 1.2.6

 |  |
| HR\_ZONE\_SPORT\_RUNNING | 1 |

API 级别 1.2.6

 |  |
| HR\_ZONE\_SPORT\_BIKING | 2 |

API 级别 1.2.6

 |  |
| HR\_ZONE\_SPORT\_SWIMMING | 3 |

API 级别 1.2.6

 |  |

## 实例方法摘要 [collapse](#)

- [**getCurrentSport**](#getCurrentSport-instance_function)() as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)

    返回当前活动用于获取心率区间阈值的运动项目。

- [**getCurrentSport2**](#getCurrentSport2-instance_function)() as \[ [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) \]

    返回当前活动所属的运动项目。

- [**getFunctionalThresholdPower**](#getFunctionalThresholdPower-instance_function)(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    返回用户的功能性阈值功率（FTP）。

- [**getHeartRateZones**](#getHeartRateZones-instance_function)(sport as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

    获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）。返回的 Array 包含以下区间值：\* min zone 1 - 区间 1 的最小心率阈值 \* max zone 1 - 区间 1 的最大心率阈值 \* max zone 2 - 区间 2 的最大心率阈值 \* max zone 3 - 区间 3 的最大心率阈值 \* max zone 4 - 区间 4 的最大心率阈值 \* max zone 5 - 区间 5 的最大心率阈值。

- [**getHeartRateZones2**](#getHeartRateZones2-instance_function)(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）。返回的 Array 包含以下区间值：\* min zone 1 - 区间 1 的最小心率阈值 \* max zone 1 - 区间 1 的最大心率阈值 \* max zone 2 - 区间 2 的最大心率阈值 \* max zone 3 - 区间 3 的最大心率阈值 \* max zone 4 - 区间 4 的最大心率阈值 \* max zone 5 - 区间 5 的最大心率阈值。

- [**getPowerZones**](#getPowerZones-instance_function)(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    Retrieve an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of the current power zone threshold values in watts (W).

- [**getProfile**](#getProfile-instance_function)() as [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)

    获取当前的 [Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) 对象。

- [**getUserActivityHistory**](#getUserActivityHistory-instance_function)() as [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

    获取用户活动历史记录的迭代器。


## 实例方法详情

### **getCurrentSport()** as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)

返回当前活动用于获取心率区间阈值的运动项目。

如果活动的运动项目没有特定于运动项目的区域，则返回 [HR\_ZONE\_SPORT\_GENERIC](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const)。

Example:

```
using Toybox.UserProfile;
var profile = UserProfile.getCurrentSport();
```

Returns:

- [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module) —

    The current HR zone sport from the [HR\_ZONE\_SPORT\_\*](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const) enum.


Since:

API 级别 1.2.6

### **getCurrentSport2()** as \[ [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) \]

返回当前活动所属的运动项目。

Returns:

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    The current sport from the [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) enum.


Since:

API 级别 5.2.2

### **getFunctionalThresholdPower(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

返回用户的功能性阈值功率（FTP）。

Parameters:

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    The sport that FTP is being requested from. Should be a [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) value.


Example:

使用 SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var thresholdPower = UserProfile.getFunctionalThresholdPower(Activity.SPORT_CYCLING);
```

:::details 支持的设备

-   D2™ Mach 2 Pro
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® MTB
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The FTP value for the requested sport. If the given sport does not have an FTP value configured, the value from a default sport will be given, or `null` will be returned on error.


Since:

API 级别 5.2.2

### **getHeartRateZones(sport as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）

返回值 Array 包含以下区域值：

- min zone 1 - 区域 1 的最小心率阈值

- max zone 1 - 区域 1 的最大心率阈值

- max zone 2 - 区域 2 的最大心率阈值

- max zone 3 - 区域 3 的最大心率阈值

- max zone 4 - 区域 4 的最大心率阈值

- max zone 5 - 区域 5 的最大心率阈值


Parameters:

- sport — ([UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)) —

    请求区域值所针对的运动项目。应为 [HR\_ZONE\_SPORT\_\*](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const) 值。


Example:

使用 HR\_ZONE\_SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var genericZoneInfo = UserProfile.getHeartRateZones(UserProfile.HR_ZONE_SPORT_GENERIC);
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。


Since:

API 级别 1.2.6

### **getHeartRateZones2(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）

返回值 Array 包含以下区域值：

- min zone 1 - 区域 1 的最小心率阈值

- max zone 1 - 区域 1 的最大心率阈值

- max zone 2 - 区域 2 的最大心率阈值

- max zone 3 - 区域 3 的最大心率阈值

- max zone 4 - 区域 4 的最大心率阈值

- max zone 5 - 区域 5 的最大心率阈值


Parameters:

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    The sport that zones are being requested for. Should be a [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) value.


Example:

使用 HR\_ZONE\_SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var zoneInfo = UserProfile.getHeartRateZones2(Activity.SPORT_GENERIC);
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。如果给定运动项目未配置心率区域，则返回默认运动项目的区域；如果出错，则返回 `null`。


Since:

API 级别 5.2.2

### **getPowerZones(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

Retrieve an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of the current power zone threshold values in watts (W)

Parameters:

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    请求区域值所针对的运动项目。应为 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 值。


Example:

使用 SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var zoneInfo = UserProfile.getPowerZones(Activity.SPORT_RUNNING);
```

:::details 支持的设备

-   D2™ Mach 2 Pro
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® MTB
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。如果给定运动项目未配置功率区域，则返回默认运动项目的区域；如果出错，则返回 `null`。


Since:

API 级别 5.2.2

### **getProfile()** as [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)

获取当前的 [Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) 对象。

Example:

```
using Toybox.UserProfile;
var profile = UserProfile.getProfile();
```

Returns:

- [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) —

    The Profile object for the current user


Since:

API 级别 1.0.0

### **getUserActivityHistory()** as [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

获取用户活动历史记录的迭代器

Example:

Shows the use of UserActivityHistoryIterator

```
using Toybox.UserProfile;
using Toybox.System;

// get a UserActivityHistoryIterator object
var userActivityIterator = UserProfile.getUserActivityHistory();
var sample = userActivityIterator.next();                        // get the user activity data

while (sample != null) {
    System.println("Sample: " + sample.userActivityData);        // print the current sample
    sample = userActivityIterator.next();
}
```

Returns:

- [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/) —

    迭代器对象


Since:

API 级别 3.3.0
