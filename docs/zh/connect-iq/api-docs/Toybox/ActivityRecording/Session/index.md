---
title: "类：Toybox.ActivityRecording.Session"
---
# 类：Toybox.ActivityRecording.Session

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)


[显示全部](#)

## 概述

Session 对象用于控制 FIT 记录的状态机。

示例：

创建 Session 对象的示例：

```
using Toybox.ActivityRecording;
var session = ActivityRecording.createSession({  // set up recording session
    :name=>"Generic",                            // set session name
    :sport=>Activity.SPORT_GENERIC,              // set sport type
    :subSport=>Activity.SUB_SPORT_GENERIC        // set sub sport type
});
```

起始版本：

API 级别 1.0.0

## 实例方法摘要 [收起](#)

- [**addLap**](#addLap-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    为当前活动记录添加一次计圈。

- [**createField**](#createField-instance_function)(name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), fieldId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), type as [FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module), options as { :count as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :mesgType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :units as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :nativeNum as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) }) as [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

    创建新的 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)。

- [**discard**](#discard-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    丢弃已记录的数据，并结束当前 Session。

- [**isRecording**](#isRecording-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查当前 Session 是否正在记录数据。

- [**save**](#save-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    将 FIT 文件保存到文件系统，并结束当前 Session。

- [**setTimerEventListener**](#setTimerEventListener-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(eventType as [ActivityRecording.TimerEventType](/connect-iq/api-docs/Toybox/ActivityRecording/#TimerEventType-module), eventData as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) as **Void**) as **Void**

    设置 Session 计时器事件的监听器。每当发生新的计时器事件时，都会调用监听器方法。

- [**start**](#start-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    开始记录 FIT 文件。

- [**stop**](#stop-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    停止记录 FIT 文件。


## 实例方法详情

### **addLap()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

为当前活动记录添加一次计圈。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功添加计圈时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **createField(name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), fieldId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), type as [FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module), options as { :count as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :mesgType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :units as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :nativeNum as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

创建新的 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)。

Field 对象允许开发者将数据存储在 FIT 开发者字段中。这些数据可以在 Garmin Connect 中显示为按秒绘制的图表、计圈信息或训练摘要。

参数：

- name — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    字段名称，以 String 表示。最大长度因产品而异，但至少支持 64 字节。


- fieldId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    字段的唯一标识符。

- type — ([FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module)) —

    字段的数据类型，使用 [FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) 模块中的 `DATA_TYPE_*` 枚举值指定。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    创建字段时使用的可选参数字典。支持以下键：

| 键 | 类型 | 说明 |
| --- | --- | --- |
| `:count` | [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 数组字段的元素数量。对于 `DATA_TYPE_STRING`，表示字符串及其 `null` 终止符的最大总大小。默认值为 1。 |
| `:mesgType` | [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 字段所属的 FIT 消息类型。省略时默认为 [MESG_TYPE_RECORD](/connect-iq/api-docs/Toybox/FitContributor/#MESG_TYPE_RECORD-const)。此类型的消息不支持 [DATA_TYPE_STRING](/connect-iq/api-docs/Toybox/FitContributor/#DATA_TYPE_STRING-const) 字段。 |
| `:units` | [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) | 显示单位的字符串，应使用设备当前的语言。最大长度因产品而异，但至少支持 16 字节。 |
| `:nativeNum` | [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 如果此字段与 FIT SDK 中的某个字段等价，可用此选项指定 FIT Profile 中定义的字段编号。 |

每条 FIT 消息中，应用写入的数据总大小不得超过 256 字节；数据字段应用的限额为 32 字节。超过限额会触发 `New Field out of memory for FIT data` 错误。


返回：

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/) —

    创建的 Field 对象。


另见：

- [FIT SDK 随附的 Profile.xlsx 中包含消息类型说明](https://www.thisisant.com/resources/fit)

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

- [核心主题：活动记录](/connect-iq/core-topics/activity-recording/)


起始版本：

API 级别 1.3.0

### **discard()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

丢弃已记录的数据，并结束当前 Session。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功丢弃当前 Session 时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **isRecording()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查当前 Session 是否正在记录数据。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    正在记录数据时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **save()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

将 FIT 文件保存到文件系统，并结束当前 Session。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功保存当前 Session 时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **setTimerEventListener(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(eventType as [ActivityRecording.TimerEventType](/connect-iq/api-docs/Toybox/ActivityRecording/#TimerEventType-module), eventData as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) as **Void**)** as **Void**

设置 Session 计时器事件的监听器。

每当发生新的计时器事件时，都会调用监听器方法。

传递给监听器回调的 Dictionary 包含哪些键，取决于 `eventType` 参数的值。

参数：

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    回调方法的引用。该方法必须接收以下两个参数：

| 回调参数 | 说明 |
| --- | --- |
| `eventType` | 描述事件类型的 `TIMER_EVENT_*` 枚举值。 |
| `eventData` | 包含计时器事件相关数据的 [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)，也可能为 `null`。 |

当 `eventType` 为 `TIMER_EVENT_LAP` 时，`eventData` 会在相应数据可用时包含以下键：

| 键 | 类型 | 说明 |
| --- | --- | --- |
| `:elapsedDistance` | [Float](/connect-iq/api-docs/Toybox/Lang/Float/) | 距离，单位为米。 |
| `:averageSpeed` | [Float](/connect-iq/api-docs/Toybox/Lang/Float/) | 平均速度，单位为米/秒。 |
| `:maxSpeed` | [Float](/connect-iq/api-docs/Toybox/Lang/Float/) | 最大速度，单位为米/秒。 |
| `:startTime` | [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) | 开始时间。 |
| `:elapsedTime` | [Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 经过时间，单位为毫秒。 |
| `:timerTime` | [Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 计时器累计时间，单位为毫秒。 |



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

起始版本：

API 级别 3.0.10

### **start()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

开始记录 FIT 文件。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功开始记录时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **stop()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

停止记录 FIT 文件。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功停止记录时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0
