---
title: "Module: Toybox.Background"
---
# 模块：Toybox.Background

## 概述

后台事件是特殊事件，当某些系统事件发生时（例如达到活动目标），或在特定时间（称为时间事件）触发。这使应用能够即使在未处于活动状态时也更新其数据。

## 另见：

- [Toybox.System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)

- [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)


Since:

API 级别 2.3.0

:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
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
-   fēnix® Chronos
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
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
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
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
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
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

需要权限：

- 后台


## 命名空间下的类

类：[ExitDataSizeLimitException](/connect-iq/api-docs/Toybox/Background/ExitDataSizeLimitException/), [InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/), [MessageSizeLimitException](/connect-iq/api-docs/Toybox/Background/MessageSizeLimitException/)

## 实例方法摘要 [collapse](#)

- [**deleteActivityCompletedEvent**](#deleteActivityCompletedEvent-instance_function)() as **Void**

    停止应用接收活动完成事件。

- [**deleteGoalEvent**](#deleteGoalEvent-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as **Void**

    移除应用中指定类型的活动目标后台事件。

- [**deleteOAuthResponseEvent**](#deleteOAuthResponseEvent-instance_function)() as **Void**

    移除 OAuth 响应后台事件。

- [**deletePhoneAppMessageEvent**](#deletePhoneAppMessageEvent-instance_function)() as **Void**

    停止应用接收后台手机应用消息。

- [**deleteSleepEvent**](#deleteSleepEvent-instance_function)() as **Void**

    移除应用中活动的睡眠后台事件。

- [**deleteStepsEvent**](#deleteStepsEvent-instance_function)() as **Void**

    移除应用中活动的步数后台事件。

- [**deleteTemporalEvent**](#deleteTemporalEvent-instance_function)() as **Void**

    移除应用中活动的定时后台事件。

- [**deleteWakeEvent**](#deleteWakeEvent-instance_function)() as **Void**

    移除应用中活动的唤醒后台事件。

- [**exit**](#exit-instance_function)(backgroundData as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)) as **Void**

    终止当前后台进程。

- [**getActivityCompletedEventRegistered**](#getActivityCompletedEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) 注册后台事件。

- [**getBackgroundData**](#getBackgroundData-instance_function)() as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)

    获取后台进程之前保存的数据。

- [**getGoalEventRegistered**](#getGoalEventRegistered-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) 注册后台事件。

- [**getLastTemporalEventTime**](#getLastTemporalEventTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    获取上一次时间型后台事件触发的时间。

- [**getOAuthResponseEventRegistered**](#getOAuthResponseEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) 注册后台事件。

- [**getPhoneAppMessageEventRegistered**](#getPhoneAppMessageEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) 注册后台事件。

- [**getSleepEventRegistered**](#getSleepEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) 注册后台事件。

- [**getStepsEventRegistered**](#getStepsEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) 注册后台事件。

- [**getTemporalEventRegisteredTime**](#getTemporalEventRegisteredTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    获取 [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) 注册后台事件时使用的 Moment 或 Duration。

- [**getWakeEventRegistered**](#getWakeEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForWakeEvent()](/connect-iq/api-docs/Toybox/Background/#registerForWakeEvent-instance_function) 注册后台事件。

- [**registerForActivityCompletedEvent**](#registerForActivityCompletedEvent-instance_function)() as **Void**

    注册应用，以便在活动完成时接收事件。

- [**registerForGoalEvent**](#registerForGoalEvent-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as **Void**

    注册一个在用户达到指定目标时触发的后台事件。

- [**registerForOAuthResponseEvent**](#registerForOAuthResponseEvent-instance_function)() as **Void**

    注册一个每当 OAuth 登录请求完成且令牌在系统上可供使用时触发的后台事件。

- [**registerForPhoneAppMessageEvent**](#registerForPhoneAppMessageEvent-instance_function)() as **Void**

    注册应用，以便在收到 Phone App 消息时接收事件。

- [**registerForSleepEvent**](#registerForSleepEvent-instance_function)() as **Void**

    注册一个在设备上配置的睡眠时间触发的后台事件。

- [**registerForStepsEvent**](#registerForStepsEvent-instance_function)() as **Void**

    注册一个每达到 1000 步的倍数时触发的后台事件。

- [**registerForTemporalEvent**](#registerForTemporalEvent-instance_function)(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as **Void**

    注册一个在特定时间或按固定间隔触发的后台事件。

- [**registerForWakeEvent**](#registerForWakeEvent-instance_function)() as **Void**

    注册一个在设备上配置的唤醒时间触发的后台事件。

- [**requestApplicationWake**](#requestApplicationWake-instance_function)(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    显示确认对话框，请求启动后台任务所属的应用。


## 实例方法详情

### **deleteActivityCompletedEvent()** as **Void**

停止应用接收活动完成事件。

Since:

API 级别 3.0.10

### **deleteGoalEvent(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as **Void**

移除应用中指定类型的活动目标后台事件。

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    表示要移除的事件目标类型的 [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) 值


Example:

```
Background.deleteGoalEvent(GOAL_TYPE_STEPS);
```

Since:

API 级别 2.3.0

### **deleteOAuthResponseEvent()** as **Void**

移除 OAuth 响应后台事件。

Since:

API 级别 2.3.0

### **deletePhoneAppMessageEvent()** as **Void**

停止应用接收后台手机应用消息。

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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
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
-   eTrex® Touch
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
-   GPSMAP® H1 / H1i Plus
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

Since:

API 级别 3.2.0

### **deleteSleepEvent()** as **Void**

移除应用中活动的睡眠后台事件。

Since:

API 级别 2.3.0

### **deleteStepsEvent()** as **Void**

移除应用中活动的步数后台事件。

Since:

API 级别 2.3.0

### **deleteTemporalEvent()** as **Void**

移除应用中活动的定时后台事件。

Since:

API 级别 2.3.0

### **deleteWakeEvent()** as **Void**

移除应用中活动的唤醒后台事件。

Since:

API 级别 2.3.0

### **exit(backgroundData as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type))** as **Void**

终止当前后台进程。

所有后台进程都应在完成所需任务后调用此方法。传递给此方法的数据将立即传递给正在运行的活动应用，或者保存下来并在应用下次运行时传递给它。数据必须是以下类型之一：

- [String](/connect-iq/api-docs/Toybox/Lang/String/)

- [Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- [Float](/connect-iq/api-docs/Toybox/Lang/Float/)

- [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

- [Char](/connect-iq/api-docs/Toybox/Lang/Char/)

- [Long](/connect-iq/api-docs/Toybox/Lang/Long/)

- [Double](/connect-iq/api-docs/Toybox/Lang/Double/)

- [Array](/connect-iq/api-docs/Toybox/Lang/Array/)

- [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


Array 和 Dictionary 可以包含 `null` 值或上述列出的任何类型。如果不应向主进程传递数据，可以指定 `null`。

如果由后台进程调用，此方法将退出；如果由主应用进程调用，则不会执行任何操作。

Parameters:

- backgroundData — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要传递给主进程 [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) 方法的对象。传递 `null` 不会覆盖尚未被父应用程序的 AppBase.onBackgroundData() 方法使用的先前数据值。


Since:

API 级别 2.3.0

Throws:

- ([Background.ExitDataSizeLimitException](/connect-iq/api-docs/Toybox/Background/ExitDataSizeLimitException/)) —

    表示提供的数据超过数据大小限制（约 8 KB）。如果捕获此异常，进程不会退出，并应尝试再次使用较少的数据调用 `Background.exit()`。


### **getActivityCompletedEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) 注册后台事件

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForActivityCompletedEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.10

### **getBackgroundData()** as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)

获取后台进程之前保存的数据。

数据通过 [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) 传递，并在数据传递到主进程后重置为 `null`。此方法在主应用程序进程中始终返回 `null`。

另见：

- [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)


Since:

API 级别 2.3.0

### **getGoalEventRegistered(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) 注册后台事件。

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    表示要检查已注册后台事件的目标类型的 [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) 值


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForGoalEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.0

### **getLastTemporalEventTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

获取上一次时间型后台事件触发的时间。

这有助于确保不会在时间事件之间允许的五分钟最短间隔内调度新事件。

Example:

在允许时立即注册新的临时后台事件

```
using Toybox.Background;
using Toybox.Time;
const FIVE_MINUTES = new Time.Duration(5 * 60);
var lastTime = Background.getLastTemporalEventTime();
if (lastTime != null) {
    // Events scheduled for a time in the past trigger immediately
    var nextTime = lastTime.add(FIVE_MINUTES);
    Background.registerForTemporalEvent(nextTime);
} else {
    Background.registerForTemporalEvent(Time.now());
}
```

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    上次触发后台事件的时间；如果之前没有发生过时间型后台事件，或者设备应用程序或小组件是在事件上次触发后启动的，则可能为 `null`


另见：

- [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function)

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)


Since:

API 级别 2.3.0

### **getOAuthResponseEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) 注册后台事件

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForOAuthResponseEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.0

### **getPhoneAppMessageEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) 注册后台事件

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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
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
-   eTrex® Touch
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
-   GPSMAP® H1 / H1i Plus
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

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForPhoneAppMessageEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.2.0

### **getSleepEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForSleepEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.0

### **getStepsEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForStepsEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.0

### **getTemporalEventRegisteredTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

获取 [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) 注册后台事件时使用的 Moment 或 Duration。

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    注册后台事件以触发的特定 Moment，或重复后台事件的间隔 Duration。如果未注册时间型后台事件，则可能为 `null`。


另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)


Since:

API 级别 3.0.0

### **getWakeEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForWakeEvent()](/connect-iq/api-docs/Toybox/Background/#registerForWakeEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果通过 registerForWakeEvent() 注册了后台事件，则为 `true`，否则为 `false`


Since:

API 级别 3.0.0

### **registerForActivityCompletedEvent()** as **Void**

注册应用，以便在活动完成时接收事件。

Since:

API 级别 3.0.10

### **registerForGoalEvent(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as **Void**

注册一个在用户达到指定目标时触发的后台事件。

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    表示要触发后台事件的目标类型的 [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) 值


Example:

```
Background.registerForGoalEvent(GOAL_TYPE_STEPS);
```

Since:

API 级别 2.3.0

### **registerForOAuthResponseEvent()** as **Void**

注册一个每当 OAuth 登录请求完成且令牌在系统上可供使用时触发的后台事件。

系统收到 OAuth 响应时会触发此事件。

Since:

API 级别 2.3.0

### **registerForPhoneAppMessageEvent()** as **Void**

注册应用，以便在收到 Phone App 消息时接收事件。

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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
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
-   eTrex® Touch
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
-   GPSMAP® H1 / H1i Plus
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

Since:

API 级别 3.2.0

### **registerForSleepEvent()** as **Void**

注册一个在设备上配置的睡眠时间触发的后台事件。

Since:

API 级别 2.3.0

### **registerForStepsEvent()** as **Void**

注册一个每达到 1000 步的倍数时触发的后台事件。

此事件仅由设备记录的步数触发，不会根据同步的步数触发。

Since:

API 级别 2.3.0

### **registerForTemporalEvent(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as **Void**

注册一个在特定时间或按固定间隔触发的后台事件。

可以通过提供事件应触发时的 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)，将时间事件注册为在特定时间点运行；也可以通过指定间隔 [Duration](/connect-iq/api-docs/Toybox/Time/Duration/)，将时间事件注册为定期运行。如果时间事件计划在过去的时间触发，则该事件会立即触发。

时间事件不能设置为在上一个时间事件发生后不到 5 分钟时触发。对于表盘应用和小组件，如果通过 [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) 指定了事件，则应用启动时会解除 5 分钟限制。

一次只能注册一个时间事件。调用 `registerForTemporalEvent` 将覆盖之前注册的任何时间事件。

Parameters:

- time — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    运行后台事件的特定 Moment，或重复后台事件的间隔 Duration


Example:

安排一个后台事件在五分钟后运行

```
using Toybox.Background;
using Toybox.Time;
const FIVE_MINUTES = new Time.Duration(5 * 60);
var eventTime = Time.now().add(FIVE_MINUTES);
Background.registerForTemporalEvent(eventTime);
```

另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)


Since:

API 级别 2.3.0

Throws:

- ([Background.InvalidBackgroundTimeException](/connect-iq/api-docs/Toybox/Background/InvalidBackgroundTimeException/)) —

    表示应用尝试安排后台事件，但该事件满足以下任一条件：\* 距上次后台事件发生不到五分钟 \* 持续时间少于五分钟


### **registerForWakeEvent()** as **Void**

注册一个在设备上配置的唤醒时间触发的后台事件。

Since:

API 级别 2.3.0

### **requestApplicationWake(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

显示确认对话框，请求启动后台任务所属的应用。

如果对话框已确认，应用将打开。如果对话框被拒绝，应用将不会打开，并且对话框将被关闭。此请求仅对小组件或设备应用的后台任务有效，表盘应用将忽略此请求。调用此方法后，必须在后台进程中的某个时间点调用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)，因为确认对话框只有在后台任务退出后才会触发。

Parameters:

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    请求启动应用时要在对话框中显示的消息


Example:

```
using Toybox.Background;
(:background)
class BackgroundServiceDelegate extends System.ServiceDelegate {
    function initialize() {
        ServiceDelegate.initialize();
    }

    function onTemporalEvent() {
        Background.requestApplicationWake("Launch Cool App?");
        Background.exit(null);
    }
}
```

另见：

- [Toybox.System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)

- [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)


Since:

API 级别 2.3.0

Throws:

- ([Background.MessageSizeLimitException](/connect-iq/api-docs/Toybox/Background/MessageSizeLimitException/)) —

    表示提供的消息超过大小限制（255 Bytes）。请注意，某些字符可能大于 1 Byte
