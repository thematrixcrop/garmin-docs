---
title: "Class: Toybox.UserProfile.Profile"
---
# 类：Toybox.UserProfile.Profile

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.UserProfile.Profile](/connect-iq/api-docs/Toybox/UserProfile/Profile/)


[show all](#)

## 概述

Profile 对象包含用户信息。

如果尚未配置值或无法计算值，则值可能为 `null`。

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**activityClass**](#activityClass-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    用户配置的活动级别。

- [**averageRestingHeartRate**](#averageRestingHeartRate-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    平均静息心率 此值根据历史数据计算得出。

- [**birthYear**](#birthYear-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    用户配置的出生年份。

- [**gender**](#gender-var) as [UserProfile.Gender](/connect-iq/api-docs/Toybox/UserProfile/#Gender-module) or **Null**

    用户配置的性别。

- [**height**](#height-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    用户配置的高度。

- [**restingHeartRate**](#restingHeartRate-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    用户配置的静息心率。

- [**runningStepLength**](#runningStepLength-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    用户配置的跑步步长。

- [**sleepTime**](#sleepTime-var) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    用户配置的典型睡眠时间。

- [**upcomingSleepTime**](#upcomingSleepTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    如果已设置，则为即将到来的睡眠时间，同时考虑当前星期几和当天时间。

- [**upcomingWakeTime**](#upcomingWakeTime-var) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    如果已设置，则为即将到来的起床时间，同时考虑当前星期几和当天时间。

- [**vo2maxCycling**](#vo2maxCycling-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    骑行 VO2 Max 此值根据历史数据计算得出。

- [**vo2maxRunning**](#vo2maxRunning-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    跑步 VO2 Max 此值根据历史数据计算。

- [**wakeTime**](#wakeTime-var) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    用户配置的典型起床时间。

- [**walkingStepLength**](#walkingStepLength-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    由用户配置的步行步长。

- [**weight**](#weight-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    由用户配置的体重。


## 实例属性详情

### var activityClass as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

用户配置的活动级别

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    活动级别，取值范围为 0-100。


### var averageRestingHeartRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

平均静息心率

此值根据历史数据计算得出。如果数据不足以生成结果，则可能为 `null`。

Since:

API 级别 3.2.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    七天平均静息心率。单位为每分钟心跳次数（bpm）。


### var birthYear as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

用户配置的出生年份

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    四位数的出生年份。


### var gender as [UserProfile.Gender](/connect-iq/api-docs/Toybox/UserProfile/#Gender-module) or **Null**

用户配置的性别

Since:

API 级别 1.0.0

Returns:

- [UserProfile.Gender](/connect-iq/api-docs/Toybox/UserProfile/#Gender-module)

### var height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

用户配置的高度

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    用户身高（以厘米（cm）为单位）


### var restingHeartRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

用户配置的静息心率

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    用户配置的静息心率，单位为每分钟心跳次数（bpm）


### var runningStepLength as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

用户配置的跑步步长

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    以毫米 (mm) 为单位的跑步步长


### var sleepTime as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

用户配置的典型睡眠时间

Since:

API 级别 1.0.0

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    自本地午夜起的一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)


### var upcomingSleepTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

如果已设置，则为即将到来的睡眠时间，同时考虑当前星期几和当天时间。如果当前当天时间已过今日的睡眠时间，则返回次日的睡眠时间。

Since:

API 级别 6.0.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    一个表示即将到来的睡眠时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。


### var upcomingWakeTime as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

如果已设置，则为即将到来的起床时间，同时考虑当前星期几和当天时间。如果当前当天时间已过今日的起床时间，则返回次日的起床时间。

Since:

API 级别 6.0.0

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    一个表示即将到来的唤醒时间的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)。


### var vo2maxCycling as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

骑行 VO2 Max

此值根据历史数据计算得出。如果数据不足以生成结果，则可能为 `null`。

Since:

API 级别 3.3.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    骑行活动的 VO2 Max 值。单位为 mL/kg/min。


### var vo2maxRunning as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

跑步 VO2 Max

此值根据历史数据计算得出。如果数据不足以生成结果，则可能为 `null`。

Since:

API 级别 3.3.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    跑步活动的 VO2 Max 值。单位为 mL/kg/min。


### var wakeTime as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

用户配置的典型起床时间

Since:

API 级别 1.0.0

Returns:

- [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    自本地午夜起的一个 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)


### var walkingStepLength as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

由用户配置的步行步长

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    步行步长，单位为毫米（mm）


### var weight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

由用户配置的体重

Since:

API 级别 1.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    体重，单位为克（g）
