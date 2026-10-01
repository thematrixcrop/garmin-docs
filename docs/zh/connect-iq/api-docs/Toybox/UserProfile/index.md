---
title: "模块：Toybox.UserProfile"
---
# 模块：Toybox.UserProfile

## 概述

UserProfile 模块允许应用访问用户信息。

该模块包含用于从用户配置文件中检索性别信息的 GENDER\_\* 枚举。HR\_ZONE\_SPORT\_\* 枚举还提供用于定义不同运动类型的常量。该枚举用于检索特定运动的心率区间。

示例：

简单的 UserProfile 模块使用

```
using Toybox.UserProfile;

var profile = UserProfile.getProfile();
System.out.println("The user was born in " + profile.birthYear);
```

起始版本：

API 级别 1.0.0

需要权限：

- UserProfile


## 命名空间下的类

类：[Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/), [UserActivity](/connect-iq/api-docs/Toybox/UserProfile/UserActivity/), [UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

## 常量摘要

### Gender

起始版本：

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

起始版本：

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

    获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）。返回的 Array 包含以下区间值：\* 区间 1 的最小心率阈值 \* 区间 1 的最大心率阈值 \* 区间 2 的最大心率阈值 \* 区间 3 的最大心率阈值 \* 区间 4 的最大心率阈值 \* 区间 5 的最大心率阈值。

- [**getHeartRateZones2**](#getHeartRateZones2-instance_function)(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）。返回的 Array 包含以下区间值：\* 区间 1 的最小心率阈值 \* 区间 1 的最大心率阈值 \* 区间 2 的最大心率阈值 \* 区间 3 的最大心率阈值 \* 区间 4 的最大心率阈值 \* 区间 5 的最大心率阈值。

- [**getPowerZones**](#getPowerZones-instance_function)(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    获取当前功率区间阈值（单位：瓦特 (W)）的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)。

- [**getProfile**](#getProfile-instance_function)() as [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)

    获取当前的 [Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) 对象。

- [**getUserActivityHistory**](#getUserActivityHistory-instance_function)() as [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

    获取用户活动历史记录的迭代器。


## 实例方法详情

### **getCurrentSport()** as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)

返回当前活动用于获取心率区间阈值的运动项目。

如果活动的运动项目没有特定于运动项目的区域，则返回 [HR\_ZONE\_SPORT\_GENERIC](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const)。

示例：

```
using Toybox.UserProfile;
var profile = UserProfile.getCurrentSport();
```

返回：

- [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module) —

    来自 [HR\_ZONE\_SPORT\_\*](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const) 枚举的当前 HR 区间运动类型。


起始版本：

API 级别 1.2.6

### **getCurrentSport2()** as \[ [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) \]

返回当前活动所属的运动项目。

返回：

- [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module) —

    来自 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 枚举的当前运动类型。


起始版本：

API 级别 5.2.2

### **getFunctionalThresholdPower(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

返回用户的功能性阈值功率（FTP）。

参数：

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    请求 FTP 所针对的运动项目。应为 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 值。


示例：

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

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    请求运动项目的 FTP 值。如果指定运动项目未配置 FTP 值，则返回默认运动项目的值；如果发生错误，则返回 `null`。


起始版本：

API 级别 5.2.2

### **getHeartRateZones(sport as [UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>

获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）

返回值 Array 包含以下区域值：

- 区域 1 最小值 — 区域 1 的最小心率阈值

- 区域 1 最大值 — 区域 1 的最大心率阈值

- 区域 2 最大值 — 区域 2 的最大心率阈值

- 区域 3 最大值 — 区域 3 的最大心率阈值

- 区域 4 最大值 — 区域 4 的最大心率阈值

- 区域 5 最大值 — 区域 5 的最大心率阈值


参数：

- sport — ([UserProfile.SportHrZone](/connect-iq/api-docs/Toybox/UserProfile/#SportHrZone-module)) —

    请求区域值所针对的运动项目。应为 [HR\_ZONE\_SPORT\_\*](/connect-iq/api-docs/Toybox/UserProfile/#HR_ZONE_SPORT_GENERIC-const) 值。


示例：

使用 HR\_ZONE\_SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var genericZoneInfo = UserProfile.getHeartRateZones(UserProfile.HR_ZONE_SPORT_GENERIC);
```

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。


起始版本：

API 级别 1.2.6

### **getHeartRateZones2(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

获取当前心率区间阈值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)，单位为每分钟心跳次数（bpm）

返回值 Array 包含以下区域值：

- 区域 1 最小值 — 区域 1 的最小心率阈值

- 区域 1 最大值 — 区域 1 的最大心率阈值

- 区域 2 最大值 — 区域 2 的最大心率阈值

- 区域 3 最大值 — 区域 3 的最大心率阈值

- 区域 4 最大值 — 区域 4 的最大心率阈值

- 区域 5 最大值 — 区域 5 的最大心率阈值


参数：

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    请求区域所针对的运动项目。应为 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 值。


示例：

使用 HR\_ZONE\_SPORT\_\* 枚举获取特定运动的区域

```
using Toybox.UserProfile;
var zoneInfo = UserProfile.getHeartRateZones2(Activity.SPORT_GENERIC);
```

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。如果给定运动项目未配置心率区域，则返回默认运动项目的区域；如果出错，则返回 `null`。


起始版本：

API 级别 5.2.2

### **getPowerZones(sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module))** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

获取当前功率区间阈值（单位：瓦特 (W)）的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)

参数：

- sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

    请求区域值所针对的运动项目。应为 [SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SPORT_GENERIC-const) 值。


示例：

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

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    所请求运动项目的区域阈值数组。如果给定运动项目未配置功率区域，则返回默认运动项目的区域；如果出错，则返回 `null`。


起始版本：

API 级别 5.2.2

### **getProfile()** as [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)

获取当前的 [Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) 对象。

示例：

```
using Toybox.UserProfile;
var profile = UserProfile.getProfile();
```

返回：

- [UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/) —

    当前用户的 Profile 对象


起始版本：

API 级别 1.0.0

### **getUserActivityHistory()** as [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/)

获取用户活动历史记录的迭代器

示例：

显示 UserActivityHistoryIterator 的使用

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

返回：

- [UserProfile.UserActivityHistoryIterator](/connect-iq/api-docs/Toybox/UserProfile/UserActivityHistoryIterator/) —

    迭代器对象


起始版本：

API 级别 3.3.0
