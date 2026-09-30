---
title: "Module: Toybox.Background"
---
# Module: Toybox.Background

## 概述

Background events are special events that trigger in the background when either certain system events occur, such as when an activity goal has been met, or at certain times (called temporal events). This allows an application to update its data even when the application is not active.

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

    Stops the application from receiving activity completed events.

- [**deleteGoalEvent**](#deleteGoalEvent-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as **Void**

    Remove the active goal background event of specified type for the application.

- [**deleteOAuthResponseEvent**](#deleteOAuthResponseEvent-instance_function)() as **Void**

    Remove the OAuth response background event.

- [**deletePhoneAppMessageEvent**](#deletePhoneAppMessageEvent-instance_function)() as **Void**

    Stops the application from receiving background phone app messages.

- [**deleteSleepEvent**](#deleteSleepEvent-instance_function)() as **Void**

    Remove the active sleep background event for the application.

- [**deleteStepsEvent**](#deleteStepsEvent-instance_function)() as **Void**

    Remove the active steps background event for the application.

- [**deleteTemporalEvent**](#deleteTemporalEvent-instance_function)() as **Void**

    Remove the active temporal background event for the application.

- [**deleteWakeEvent**](#deleteWakeEvent-instance_function)() as **Void**

    Remove the active wake background event for the application.

- [**exit**](#exit-instance_function)(backgroundData as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)) as **Void**

    Terminates the current background process.

- [**getActivityCompletedEventRegistered**](#getActivityCompletedEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) 注册后台事件。

- [**getBackgroundData**](#getBackgroundData-instance_function)() as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)

    Get data previously saved by a background process.

- [**getGoalEventRegistered**](#getGoalEventRegistered-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) 注册后台事件。

- [**getLastTemporalEventTime**](#getLastTemporalEventTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

    Get the time the last temporal background event was triggered.

- [**getOAuthResponseEventRegistered**](#getOAuthResponseEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) 注册后台事件。

- [**getPhoneAppMessageEventRegistered**](#getPhoneAppMessageEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) 注册后台事件。

- [**getSleepEventRegistered**](#getSleepEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) 注册后台事件。

- [**getStepsEventRegistered**](#getStepsEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) 注册后台事件。

- [**getTemporalEventRegisteredTime**](#getTemporalEventRegisteredTime-instance_function)() as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

    Get the Moment or Duration with which a background event is registered by [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function).

- [**getWakeEventRegistered**](#getWakeEventRegistered-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取是否已向 [registerForWakeEvent()](/connect-iq/api-docs/Toybox/Background/#registerForWakeEvent-instance_function) 注册后台事件。

- [**registerForActivityCompletedEvent**](#registerForActivityCompletedEvent-instance_function)() as **Void**

    Registers the application to receive an event whenever an activity is completed.

- [**registerForGoalEvent**](#registerForGoalEvent-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as **Void**

    Register a background event that triggers when the user reaches a specified goal.

- [**registerForOAuthResponseEvent**](#registerForOAuthResponseEvent-instance_function)() as **Void**

    Registers a background event that triggers each time an OAuth login request completes and the token becomes available on the system for use.

- [**registerForPhoneAppMessageEvent**](#registerForPhoneAppMessageEvent-instance_function)() as **Void**

    Registers the application to receive an event whenever a phone app message is received.

- [**registerForSleepEvent**](#registerForSleepEvent-instance_function)() as **Void**

    Register a background event that triggers at the sleep time configured on the device.

- [**registerForStepsEvent**](#registerForStepsEvent-instance_function)() as **Void**

    Registers a background event that triggers each time a multiple of 1000 steps is reached.

- [**registerForTemporalEvent**](#registerForTemporalEvent-instance_function)(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as **Void**

    Register a background event that triggers at a specific time or at a regular interval.

- [**registerForWakeEvent**](#registerForWakeEvent-instance_function)() as **Void**

    Register a background event that triggers at the wake time configured on the device.

- [**requestApplicationWake**](#requestApplicationWake-instance_function)(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    显示确认对话框，请求启动后台任务所属的应用。


## 实例方法详情

### **deleteActivityCompletedEvent()** as **Void**

Stops the application from receiving activity completed events.

Since:

API 级别 3.0.10

### **deleteGoalEvent(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as **Void**

Remove the active goal background event of specified type for the application.

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    An [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) value representing the goal type of the event to remove


Example:

```
Background.deleteGoalEvent(GOAL_TYPE_STEPS);
```

Since:

API 级别 2.3.0

### **deleteOAuthResponseEvent()** as **Void**

Remove the OAuth response background event.

Since:

API 级别 2.3.0

### **deletePhoneAppMessageEvent()** as **Void**

Stops the application from receiving background phone app messages.

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

Remove the active sleep background event for the application.

Since:

API 级别 2.3.0

### **deleteStepsEvent()** as **Void**

Remove the active steps background event for the application.

Since:

API 级别 2.3.0

### **deleteTemporalEvent()** as **Void**

Remove the active temporal background event for the application.

Since:

API 级别 2.3.0

### **deleteWakeEvent()** as **Void**

Remove the active wake background event for the application.

Since:

API 级别 2.3.0

### **exit(backgroundData as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type))** as **Void**

Terminates the current background process.

All background processes should call this method when they have completed the desired tasks. Data passed to this method will either be passed immediately to the active application if it is running, or will be saved and passed to the application the next time it runs. Data must be one of the following types:

- [String](/connect-iq/api-docs/Toybox/Lang/String/)

- [Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- [Float](/connect-iq/api-docs/Toybox/Lang/Float/)

- [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

- [Char](/connect-iq/api-docs/Toybox/Lang/Char/)

- [Long](/connect-iq/api-docs/Toybox/Lang/Long/)

- [Double](/connect-iq/api-docs/Toybox/Lang/Double/)

- [Array](/connect-iq/api-docs/Toybox/Lang/Array/)

- [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


Arrays and Dictionaries may contain `null` values or any of the above listed types. If no data should be passed to the main process, `null` may be specified.

This method will exit if called by a background process, but will do nothing if called by the main application process.

Parameters:

- backgroundData — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The object to pass to the main process's [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) method. Passing `null` will not override previous data values not yet consumed by the parent application's AppBase.onBackgroundData() method.


Since:

API 级别 2.3.0

Throws:

- ([Background.ExitDataSizeLimitException](/connect-iq/api-docs/Toybox/Background/ExitDataSizeLimitException/)) —

    Indicates the data provided exceeds the data size limit (approximately 8 KB). If this exception is caught, the process will not exit and should attempt to call `Background.exit()` again with less data.


### **getActivityCompletedEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) 注册后台事件

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForActivityCompletedEvent(), otherwise `false`


Since:

API 级别 3.0.10

### **getBackgroundData()** as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)

Get data previously saved by a background process.

Data is delivered via [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function), and is reset to `null` once data has been delivered to the main process. This method always returns `null` in the main application's process.

另见：

- [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)


Since:

API 级别 2.3.0

### **getGoalEventRegistered(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) 注册后台事件。

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    An [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) value representing the goal type to check for registered background events


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForGoalEvent(), otherwise `false`


Since:

API 级别 3.0.0

### **getLastTemporalEventTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or **Null**

Get the time the last temporal background event was triggered.

This is useful for ensuring new events are not scheduled within the five minute minimum time allowed between temporal events.

Example:

Register a new temporal background event as soon as allowed

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

    The time the last background event was triggered, but may be `null` if no previous temporal background event has occurred or if the device app or widget has been started since the event was last triggered


另见：

- [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function)

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)


Since:

API 级别 2.3.0

### **getOAuthResponseEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) 注册后台事件

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForOAuthResponseEvent(), otherwise `false`


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

    `true` if a background event is registered with registerForPhoneAppMessageEvent(), otherwise `false`


Since:

API 级别 3.2.0

### **getSleepEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForSleepEvent(), otherwise `false`


Since:

API 级别 3.0.0

### **getStepsEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForStepsEvent(), otherwise `false`


Since:

API 级别 3.0.0

### **getTemporalEventRegisteredTime()** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or **Null**

Get the Moment or Duration with which a background event is registered by [registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function).

Returns:

- [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The specific Moment in time at which a background event is registered to trigger, or the interval Duration at which to repeat a background event. May be `null` if no temporal background event is registered.


另见：

- [Toybox.Time](/connect-iq/api-docs/Toybox/Time/)


Since:

API 级别 3.0.0

### **getWakeEventRegistered()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取是否已向 [registerForWakeEvent()](/connect-iq/api-docs/Toybox/Background/#registerForWakeEvent-instance_function) 注册后台事件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a background event is registered with registerForWakeEvent(), otherwise `false`


Since:

API 级别 3.0.0

### **registerForActivityCompletedEvent()** as **Void**

Registers the application to receive an event whenever an activity is completed.

Since:

API 级别 3.0.10

### **registerForGoalEvent(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as **Void**

Register a background event that triggers when the user reaches a specified goal.

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    An [Application.GOAL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Application/#GOAL_TYPE_STEPS-const) value representing the goal type on which to trigger the background event


Example:

```
Background.registerForGoalEvent(GOAL_TYPE_STEPS);
```

Since:

API 级别 2.3.0

### **registerForOAuthResponseEvent()** as **Void**

Registers a background event that triggers each time an OAuth login request completes and the token becomes available on the system for use.

This event is triggered when a OAuth response is received by the system.

Since:

API 级别 2.3.0

### **registerForPhoneAppMessageEvent()** as **Void**

Registers the application to receive an event whenever a phone app message is received.

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

Register a background event that triggers at the sleep time configured on the device.

Since:

API 级别 2.3.0

### **registerForStepsEvent()** as **Void**

Registers a background event that triggers each time a multiple of 1000 steps is reached.

This event is triggered only by device-recorded steps, and will not trigger based on synced steps.

Since:

API 级别 2.3.0

### **registerForTemporalEvent(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as **Void**

Register a background event that triggers at a specific time or at a regular interval.

Temporal background events may be registered to run at a specific point in time by providing a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) at which the event should trigger, or may be registered to run at a periodically by specifying an interval [Duration](/connect-iq/api-docs/Toybox/Time/Duration/). If a temporal event is scheduled for a time in the past, the event will trigger immediately.

Temporal events cannot be set to occur less than 5 minutes after the last temporal event occurred. For watch-apps and widgets the 5 minute restriction is cleared on application startup if the event was specified using a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/).

Only one temporal event may be registered at a time. Calling `registerForTemporalEvent` will overwrite any previously registered temporal events.

Parameters:

- time — ([Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The specific Moment in time at which to run a background event, or the interval Duration at which to repeat a background event


Example:

Schedule a background event to run five minutes from now

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

    Indicates an application has attempted to schedule a background event which either: \* Occurs less than five minutes after the last background event occurred \* Has a duration of less than five minutes


### **registerForWakeEvent()** as **Void**

Register a background event that triggers at the wake time configured on the device.

Since:

API 级别 2.3.0

### **requestApplicationWake(message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

显示确认对话框，请求启动后台任务所属的应用。

If the dialog is confirmed, the application will open. If the dialog is declined, the application will not open and the dialog will be dismissed. This request is only valid for widget or device app background tasks, and will be ignored by watch face apps. [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function) must be called at some point in the background process after this method is invoked because the confirmation dialog will only trigger after the background task exits.

Parameters:

- message — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The message to display in the dialog when requesting to launch the app


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

    Indicates the provided message exceeds the size limit (255 Bytes). Note that some characters may be larger than 1 Byte
