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

Session 对象控制 FIT 记录状态机。

示例：

用于设置 Session 对象的格式

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

    设置 Session 计时器事件的监听器。每当发生新的计时器事件时，都会调用监听器方法。

- [**start**](#start-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    开始在系统上录制 FIT 文件。

- [**stop**](#stop-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    停止系统上的 FIT 文件录制。


## 实例方法详情

### **addLap()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

向当前记录添加一个圈。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功创建了圈，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0

### **createField(name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), fieldId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), type as [FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module), options as { :count as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :mesgType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :units as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :nativeNum as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })** as [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

创建新的 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)。

字段对象允许开发者将信息存储在 FIT 开发者字段中。此信息可以在 Garmin Connect 中显示为每秒图表、圈信息或锻炼摘要信息。

参数：

- name — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    Field 的名称，类型为 String

- 最大长度可能因产品而异。

- 至少有 64 个字节可用


- fieldId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    Field 的唯一 Field Identifier

- type — ([FitContributor.DataType](/connect-iq/api-docs/Toybox/FitContributor/#DataType-module)) —

    [FitContributor](/connect-iq/api-docs/Toybox/FitContributor/) 模块中 DATA\_TYPE\_\* 枚举器的 Field 类型定义

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    可为 Field 创建指定的可选参数

- :count — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        如果 Field 是 Array，要添加到 Field 的元素数

- 如果类型为 DATA\_TYPE\_STRING，这也是字符串加上 `null` 终止符的最大组合大小（默认为 1）

- 每条消息中应用的总字节数限制为 256。

- 每条消息的数据字段限制为 32 字节

- 超过限制大小的消息将导致“New Field out of memory for FIT data”错误。


- :mesgType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        应将此 Field 添加到的消息类型

- 如果未提供，则默认为 [MESG\_TYPE\_RECORD](/connect-iq/api-docs/Toybox/FitContributor/#MESG_TYPE_RECORD-const)

- 如果 mesgType == [MESG\_TYPE\_RECORD](/connect-iq/api-docs/Toybox/FitContributor/#MESG_TYPE_RECORD-const)，则不能将 [DATA\_TYPE\_STRING](/connect-iq/api-docs/Toybox/FitContributor/#DATA_TYPE_STRING-const) 用作 Field 类型。


- :units — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        以 String 表示的显示单位

- 此项应使用当前设备语言

- 最大长度可能因产品而异。

- 至少有 16 个字节可用


- :nativeNum — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        如果此 Field 可等同于 FIT SDK 中包含的 Field，请使用此项指示 FIT Profile 指定的 Field Number。


返回：

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/) —

    生成的 Field 对象


另见：

- [FIT SDK 随附的 Profile.xlsx 中包含消息类型说明](https://www.thisisant.com/resources/fit)

- [FitContributor.Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

- [核心主题：活动记录](/connect-iq/core-topics/activity-recording/)


起始版本：

API 级别 1.3.0

### **discard()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

丢弃录制的数据以完成 Session。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果 Session 已成功丢弃，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0

### **isRecording()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查此 Session 是否正在进行录制。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果录制处于活动状态，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0

### **save()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

将 FIT 文件存储到文件系统以完成 Session。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果会话已成功保存，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0

### **setTimerEventListener(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(eventType as [ActivityRecording.TimerEventType](/connect-iq/api-docs/Toybox/ActivityRecording/#TimerEventType-module), eventData as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) as **Void**)** as **Void**

设置 Session 计时器事件的监听器

每当发生新的计时器事件时，都会调用侦听器方法。

传递给监听器回调的 Dictionary 中的键取决于 eventType 参数的值。

参数：

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对必须接受两个参数的回调的引用。

- eventType：描述所发生事件的 TIMER\_EVENT\_\* 枚举。

- eventData：包含计时器事件相关数据的 [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)，或为 `null`。如果 eventType 为 TIMER\_EVENT\_LAP，则在可用时提供以下内容：


- `:elapsedDistance` [Float](/connect-iq/api-docs/Toybox/Lang/Float/)（米）

- `:averageSpeed` [Float](/connect-iq/api-docs/Toybox/Lang/Float/)（米/秒）

- `:maxSpeed` [Float](/connect-iq/api-docs/Toybox/Lang/Float/)（米/秒）

- `:startTime` [Moment](/connect-iq/api-docs/Toybox/Time/Moment/)（Moment）

- `:elapsedTime` [Number](/connect-iq/api-docs/Toybox/Lang/Number/)（毫秒）

- `:timerTime` [Number](/connect-iq/api-docs/Toybox/Lang/Number/)（毫秒）



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

开始在系统上录制 FIT 文件。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功开始录制，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0

### **stop()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

停止系统上的 FIT 文件录制。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功停止录制，则为 `true`，否则为 `false`


起始版本：

API 级别 1.0.0
