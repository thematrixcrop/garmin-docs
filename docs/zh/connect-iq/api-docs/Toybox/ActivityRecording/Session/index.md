---
title: "Class: Toybox.ActivityRecording.Session"
---
# Class: Toybox.ActivityRecording.Session

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)


[show all](#)

## 概述

Session objects control the FIT recording state machine.

Example:

Format for setting up a Session object

```
using Toybox.ActivityRecording;
var session = ActivityRecording.createSession({  // set up recording session
    :name=>"Generic",                            // set session name
    :sport=>Activity.SPORT_GENERIC,              // set sport type
    :subSport=>Activity.SUB_SPORT_GENERIC        // set sub sport type
});
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**addLap**](#addLap-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    向当前记录添加一个圈。

- [**createField**](#createField-instance_function)(name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), fieldId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), type as [FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module), options as { :count as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :mesgType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :units as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :nativeNum as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

    创建新的 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)。

- [**discard**](#discard-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    丢弃录制的数据以完成 Session。

- [**isRecording**](#isRecording-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查此 Session 是否正在进行录制。

- [**save**](#save-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    将 FIT 文件存储到文件系统以完成 Session。

- [**setTimerEventListener**](#setTimerEventListener-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(eventType as [ActivityRecording.TimerEventType](/connect-iq/api-docs/Toybox/ActivityRecording/#TimerEventType-module), eventData as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) as **Void**) as **Void**

    Set the listener for Session timer events The listener method is called whenever a new timer event occurs.

- [**start**](#start-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    开始在系统上录制 FIT 文件。

- [**stop**](#stop-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    停止系统上的 FIT 文件录制。


## 实例方法详情

### **addLap()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

向当前记录添加一个圈。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if a lap was successfully created, otherwise `false`


Since:

API 级别 1.0.0

### **createField(name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), fieldId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), type as [FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module), options as { :count as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :mesgType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :units as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :nativeNum as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

创建新的 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)。

Field objects allow developers to store information in FIT developer fields. This information can be displayed in Garmin Connect as a per-second graph, as lap information, or as workout summary information.

Parameters:

- name — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The name of the Field as a String

- The maximum length may vary between products

- At least 64 bytes are available


- fieldId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The unique Field Identifier for the Field

- type — ([FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module)) —

    The type definition for the Field from the DATA\_TYPE\_\* enumerator in the [FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) module

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Optional parameters that can be specified for Field creation

- :count — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The number of elements to add to the Field if it is an Array

- This is also the maximum combined size of strings plus `null` terminators if the type is DATA\_TYPE\_STRING (Default 1)

- Apps are limited to 256 total bytes per message

- Data fields are limited to 32 bytes per message

- Messages larger than the limit will result in a "New Field out of memory for FIT data" error.


- :mesgType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The message type that this Field should be added to

- Defaults to [MESG\_TYPE\_RECORD](/connect-iq/api-docs/Toybox/FitContributor/#MESG_TYPE_RECORD-const) if not provided

- If mesgType == [MESG\_TYPE\_RECORD](/connect-iq/api-docs/Toybox/FitContributor/#MESG_TYPE_RECORD-const), [DATA\_TYPE\_STRING](/connect-iq/api-docs/Toybox/FitContributor/#DATA_TYPE_STRING-const) cannot be used as the Field type.


- :units — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        The display units as a String

- This should use the current device language

- The maximum length may vary between products

- At least 16 bytes are available


- :nativeNum — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        If this Field can be treated equivalently to a Field that is included in the FIT SDK use this to indicate the Field Number that is specified by the FIT Profile.


Returns:

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/) —

    The resulting Field object


另见：

- [The Message type descriptions can be found in Profile.xlsx included in the FIT SDK](https://www.thisisant.com/resources/fit)

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

- [Core Topics - Activity Recording](/connect-iq/core-topics/activity-recording/)


Since:

API 级别 1.3.0

### **discard()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

丢弃录制的数据以完成 Session。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the Session was successfully discarded, otherwise `false`


Since:

API 级别 1.0.0

### **isRecording()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查此 Session 是否正在进行录制。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if recording is active, otherwise `false`


Since:

API 级别 1.0.0

### **save()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

将 FIT 文件存储到文件系统以完成 Session。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the session was successfully saved, otherwise `false`


Since:

API 级别 1.0.0

### **setTimerEventListener(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(eventType as [ActivityRecording.TimerEventType](/connect-iq/api-docs/Toybox/ActivityRecording/#TimerEventType-module), eventData as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) as **Void**)** as **Void**

Set the listener for Session timer events

The listener method is called whenever a new timer event occurs.

The keys in the Dictionary passed to the listener callback depend on the the value of the eventType parameter.

Parameters:

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A reference to a callback which must accept two arguments.

- eventType: A TIMER\_EVENT\_\* enum that describes the event that occurred.

- eventData: A [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) containing data relevant to the timer event or `null`. If eventType is TIMER\_EVENT\_LAP, the following are provided if available:


- `:elapsedDistance` [Float](/connect-iq/api-docs/Toybox/Lang/Float/) (meters)

- `:averageSpeed` [Float](/connect-iq/api-docs/Toybox/Lang/Float/) (meters/second)

- `:maxSpeed` [Float](/connect-iq/api-docs/Toybox/Lang/Float/) (meters/second)

- `:startTime` [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) (Moment)

- `:elapsedTime` [Number](/connect-iq/api-docs/Toybox/Lang/Number/) (milliseconds)

- `:timerTime` [Number](/connect-iq/api-docs/Toybox/Lang/Number/) (milliseconds)



:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
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
-   Edge® Explore
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
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
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
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 3.0.10

### **start()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

开始在系统上录制 FIT 文件。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if recording was successfully started, otherwise `false`


Since:

API 级别 1.0.0

### **stop()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

停止系统上的 FIT 文件录制。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if recording was successfully stopped, otherwise `false`


Since:

API 级别 1.0.0
