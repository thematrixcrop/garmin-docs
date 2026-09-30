---
title: "Module: Toybox.ActivityRecording"
---
# 模块：Toybox.ActivityRecording

## 概述

Activity Recording 模块允许应用访问设备的 FIT 文件记录功能。

应用可以使用此模块允许用户开始和停止记录、创建分段并保存记录的数据。SPORT\_\* 和 SUB\_SPORT\_\* 常量以枚举形式提供。

SPORT\_\* 定义活动类型，但不保证会改变设备行为。这可能会导致对传感器数据应用不同的算法。例如，不原生支持 SPORT\_MULTISPORT 记录的设备不会获得 SPORT\_MULTISPORT 转换功能。但是，FIT 文件可以定义为 SPORT\_MULTISPORT，并且可能会对传感器数据应用 MULTI\_SPORT 算法。

SUB\_SPORT\_\* 用于在记录时进一步明确运动类型。

## 另见：

- [Toybox.FitContributor](/connect-iq/api-docs/Toybox/FitContributor/)


Example:

```
using Toybox.ActivityRecording;
using Toybox.WatchUi
var session = null;                                             // set up session variable

// use the select Start/Stop or touch for recording
function onSelect() {
   if (Toybox has :ActivityRecording) {                         // check device for activity recording
       if ((session == null) || (session.isRecording() == false)) {
           session = ActivityRecording.createSession({          // set up recording session
                 :name=>"Generic",                              // set session name
                 :sport=>Activity.SPORT_GENERIC,                // set sport type
                 :subSport=>Activity.SUB_SPORT_GENERIC          // set sub sport type
           });
           session.start();                                     // call start session
       }
       else if ((session != null) && session.isRecording()) {
           session.stop();                                      // stop the session
           session.save();                                      // save the session
           session = null;                                      // set session control variable to null
       }
   }
   return true;                                                 // return true for onSelect function
}
```

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 后台

- 速览

- 手表应用


:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
-   D2™ Bravo
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
-   epix™
-   eTrex® Touch
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
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
-   Forerunner® 230
-   Forerunner® 235
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
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 920XT
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
-   vívoactive®

:::

需要权限：

- Fit


## 命名空间下的类

类：[Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)

## 常量摘要

### Sport1

**此项已弃用**

此枚举可能会在 System 8 之后移除。

Since:

API 级别 1.0.0

另见：

- [Activity::SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#Sport-module)


| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SPORT\_GENERIC | 0 |
API 级别 1.0.0

|

用于列表中未列出的运动的运动类型

|
| SPORT\_RUNNING | 1 |

API 级别 1.0.0

|

用于跑步的运动类型

|
| SPORT\_CYCLING | 2 |

API 级别 1.0.0

|

用于多项运动转换的运动类型

|
| SPORT\_TRANSITION | 3 |

API 级别 1.0.0

 |  |
| SPORT\_FITNESS\_EQUIPMENT | 4 |

API 级别 1.0.0

|

用于支持 ANT 的健身设备的运动类型

|
| SPORT\_SWIMMING | 5 |

API 级别 1.0.0

|

用于游泳的运动类型

|
| SPORT\_BASKETBALL | 6 |

API 级别 1.0.0

|

用于篮球的运动类型

|
| SPORT\_SOCCER | 7 |

API 级别 1.0.0

|

用于足球的运动类型

|
| SPORT\_TENNIS | 8 |

API 级别 1.0.0

|

用于网球的运动类型

|
| SPORT\_AMERICAN\_FOOTBALL | 9 |

API 级别 1.0.0

|

用于美式橄榄球的运动类型

|
| SPORT\_TRAINING | 10 |

API 级别 1.0.0

|

用于力量训练、有氧运动等活动的运动类型

|
| SPORT\_WALKING | 11 |

API 级别 1.0.0

|

用于步行的运动类型

|
| SPORT\_CROSS\_COUNTRY\_SKIING | 12 |

API 级别 1.0.0

|

用于越野滑雪的运动类型

|
| SPORT\_ALPINE\_SKIING | 13 |

API 级别 1.0.0

|

用于高山滑雪的运动类型

|
| SPORT\_SNOWBOARDING | 14 |

API 级别 1.0.0

|

用于单板滑雪的运动类型

|
| SPORT\_ROWING | 15 |

API 级别 1.0.0

|

用于赛艇的运动类型

|
| SPORT\_MOUNTAINEERING | 16 |

API 级别 1.0.0

|

用于登山的运动类型

|
| SPORT\_HIKING | 17 |

API 级别 1.0.0

|

用于徒步旅行的运动类型

|
| SPORT\_MULTISPORT | 18 |

API 级别 1.0.0

|

用于多项运动赛事的运动类型

|
| SPORT\_PADDLING | 19 |

API 级别 1.0.0

|

用于划桨的运动类型

|

### Sport2

**此项已弃用**

此枚举可能会在 System 8 之后移除。

Since:

API 级别 1.0.0

另见：

- [Activity::SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#Sport-module)


| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SPORT\_FLYING | 20 |
API 级别 3.0.10

|

用于飞行的运动类型

|
| SPORT\_E\_BIKING | 21 |

API 级别 3.0.10

|

用于骑电动自行车的运动类型

|
| SPORT\_MOTORCYCLING | 22 |

API 级别 3.0.10

|

用于骑摩托车的运动类型

|
| SPORT\_BOATING | 23 |

API 级别 3.0.10

|

用于划船的运动类型

|
| SPORT\_DRIVING | 24 |

API 级别 3.0.10

|

用于驾驶的运动类型

|
| SPORT\_GOLF | 25 |

API 级别 3.0.10

|

用于高尔夫的运动类型

|
| SPORT\_HANG\_GLIDING | 26 |

API 级别 3.0.10

|

用于悬挂式滑翔的运动类型

|
| SPORT\_HORSEBACK\_RIDING | 27 |

API 级别 3.0.10

|

用于骑马的运动类型

|
| SPORT\_HUNTING | 28 |

API 级别 3.0.10

|

用于狩猎的运动类型

|
| SPORT\_FISHING | 29 |

API 级别 3.0.10

|

用于钓鱼的运动类型

|
| SPORT\_INLINE\_SKATING | 30 |

API 级别 3.0.10

|

用于轮滑的运动类型

|
| SPORT\_ROCK\_CLIMBING | 31 |

API 级别 3.0.10

|

用于攀岩的运动类型

|
| SPORT\_SAILING | 32 |

API 级别 3.0.10

|

用于帆船的运动类型

|
| SPORT\_ICE\_SKATING | 33 |

API 级别 3.0.10

|

用于滑冰的运动类型

|
| SPORT\_SKY\_DIVING | 34 |

API 级别 3.0.10

|

用于跳伞的运动类型

|
| SPORT\_SNOWSHOEING | 35 |

API 级别 3.0.10

|

用于雪鞋健行的运动类型

|
| SPORT\_SNOWMOBILING | 36 |

API 级别 3.0.10

|

用于驾驶雪地摩托的运动类型

|
| SPORT\_STAND\_UP\_PADDLEBOARDING | 37 |

API 级别 3.0.10

|

用于桨板的运动类型

|
| SPORT\_SURFING | 38 |

API 级别 3.0.10

|

用于冲浪的运动类型

|
| SPORT\_WAKEBOARDING | 39 |

API 级别 3.0.10

|

用于滑水的运动类型

|
| SPORT\_WATER\_SKIING | 40 |

API 级别 3.0.10

|

用于水上滑雪的运动类型

|
| SPORT\_KAYAKING | 41 |

API 级别 3.0.10

|

用于皮划艇的运动类型

|
| SPORT\_RAFTING | 42 |

API 级别 3.0.10

|

用于漂流的运动类型

|
| SPORT\_WINDSURFING | 43 |

API 级别 3.0.10

|

用于风帆冲浪的运动类型

|
| SPORT\_KITESURFING | 44 |

API 级别 3.0.10

|

用于风筝冲浪的运动类型

|
| SPORT\_TACTICAL | 45 |

API 级别 3.0.10

|

用于战术训练的运动类型

|
| SPORT\_JUMPMASTER | 46 |

API 级别 3.0.10

|

用于跳伞指挥员的运动类型

|
| SPORT\_BOXING | 47 |

API 级别 3.0.10

|

用于拳击的运动类型

|
| SPORT\_FLOOR\_CLIMBING | 48 |

API 级别 3.0.10

|

用于攀爬的运动类型

|
| SPORT\_BASEBALL | 49 |

API 级别 3.0.10

|

用于棒球的运动类型

|
| SPORT\_SOFTBALL\_FAST\_PITCH | 50 |

API 级别 3.0.10

|

用于快投垒球的运动类型

|
| SPORT\_SOFTBALL\_SLOW\_PITCH | 51 |

API 级别 3.0.10

|

用于慢投垒球的运动类型

|
| SPORT\_SHOOTING | 56 |

API 级别 3.0.10

|

用于射击的运动类型

|
| SPORT\_AUTO\_RACING | 57 |

API 级别 3.0.10

|

用于赛车的运动类型

|

### SubSport

**此项已弃用**

此枚举可能会在 System 8 之后移除。

Since:

API 级别 1.0.0

另见：

- [Activity::SUB\_SPORT\_\*](/connect-iq/api-docs/Toybox/Activity/#SubSport-module)


| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SUB\_SPORT\_GENERIC | 0 |
API 级别 1.0.0

|

不适用其他子运动类型时使用的子运动类型

|
| SUB\_SPORT\_TREADMILL | 1 |

API 级别 1.0.0

|

跑步和健身设备的子运动类型

|
| SUB\_SPORT\_STREET | 2 |

API 级别 1.0.0

|

跑步的子运动类型

|
| SUB\_SPORT\_TRAIL | 3 |

API 级别 1.0.0

|

跑步的子运动类型

|
| SUB\_SPORT\_TRACK | 4 |

API 级别 1.0.0

|

跑步的子运动类型

|
| SUB\_SPORT\_SPIN | 5 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_INDOOR\_CYCLING | 6 |

API 级别 1.0.0

|

骑行和健身设备的子运动类型

|
| SUB\_SPORT\_ROAD | 7 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_MOUNTAIN | 8 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_DOWNHILL | 9 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_RECUMBENT | 10 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_CYCLOCROSS | 11 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_HAND\_CYCLING | 12 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_TRACK\_CYCLING | 13 |

API 级别 1.0.0

|

骑行的子运动类型

|
| SUB\_SPORT\_INDOOR\_ROWING | 14 |

API 级别 1.0.0

|

划船和健身设备的子运动类型

|
| SUB\_SPORT\_ELLIPTICAL | 15 |

API 级别 1.0.0

|

健身器材的子运动类型

|
| SUB\_SPORT\_STAIR\_CLIMBING | 16 |

API 级别 1.0.0

|

健身器材的子运动类型

|
| SUB\_SPORT\_LAP\_SWIMMING | 17 |

API 级别 1.0.0

|

游泳的子运动类型

|
| SUB\_SPORT\_OPEN\_WATER | 18 |

API 级别 1.0.0

|

游泳的子运动类型

|
| SUB\_SPORT\_FLEXIBILITY\_TRAINING | 19 |

API 级别 1.0.0

|

训练的子运动类型

|
| SUB\_SPORT\_STRENGTH\_TRAINING | 20 |

API 级别 1.0.0

|

训练的子运动类型

|
| SUB\_SPORT\_WARM\_UP | 21 |

API 级别 1.0.0

|

Activity 热身的子运动类型

|
| SUB\_SPORT\_MATCH | 22 |

API 级别 1.0.0

|

有比赛的运动的子运动类型（例如网球）

|
| SUB\_SPORT\_EXERCISE | 23 |

API 级别 1.0.0

|

锻炼的子运动类型

|
| SUB\_SPORT\_CHALLENGE | 24 |

API 级别 1.0.0

|

Sport Challenge 的子运动类型

|
| SUB\_SPORT\_INDOOR\_SKIING | 25 |

API 级别 1.0.0

|

健身器材的子运动类型

|
| SUB\_SPORT\_CARDIO\_TRAINING | 26 |

API 级别 1.0.0

|

训练的子运动类型

|

### TimerEventType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TIMER\_EVENT\_START | 0 |
API 级别 3.0.10

|

计时器开始事件

|
| TIMER\_EVENT\_STOP | 1 |

API 级别 3.0.10

|

计时器停止事件

|
| TIMER\_EVENT\_PAUSE | 2 |

API 级别 3.0.10

|

计时器暂停事件

|
| TIMER\_EVENT\_RESUME | 3 |

API 级别 3.0.10

|

计时器恢复事件

|
| TIMER\_EVENT\_LAP | 4 |

API 级别 3.0.10

|

计时器分段事件

|
| TIMER\_EVENT\_RESET | 5 |

API 级别 3.0.10

|

计时器重置

|
| TIMER\_EVENT\_WORKOUT\_STEP\_COMPLETE | 6 |

API 级别 3.0.10

|

训练步骤完成

|
| TIMER\_EVENT\_NEXT\_MULTISPORT\_LEG | 7 |

API 级别 3.0.10

|

多项目运动的分段已开始

|

## 类型定义摘要 [collapse](#)

- [**Sport**](#Sport-named_type) as [ActivityRecording.Sport1](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport1-module) or [ActivityRecording.Sport2](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport2-module)

## 实例方法摘要 [collapse](#)

- [**createSession**](#createSession-instance_function)(options as { :sport as [ActivityRecording.Sport](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport-named_type) or [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), :subSport as [ActivityRecording.SubSport](/connect-iq/api-docs/Toybox/ActivityRecording/#SubSport-module) or [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module), :name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :poolLength as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), :sensorLogger as [SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/), :autoLap as { :type as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :entry as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \], :exit as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] } }) as [ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)

    创建一个由调用方确定选项的 [Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/) 对象。


## 类型定义详情

### **Sport** as [ActivityRecording.Sport1](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport1-module) or [ActivityRecording.Sport2](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport2-module)

Since:

API 级别 1.0.0

## 实例方法详情

### **createSession(options as { :sport as [ActivityRecording.Sport](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport-named_type) or [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), :subSport as [ActivityRecording.SubSport](/connect-iq/api-docs/Toybox/ActivityRecording/#SubSport-module) or [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module), :name as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :poolLength as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), :sensorLogger as [SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/), :autoLap as { :type as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), :entry as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \], :exit as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] } })** as [ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/)

创建一个由调用方确定选项的 [Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/) 对象。

一次只能存在一个 Session 对象。如果已有对象尚未使用 [save()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#save-instance_function) 或 [discard()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#discard-instance_function) 方法关闭，此方法将返回该对象，而不是创建新对象。在某些运行 1.x 虚拟机的产品上，创建 Session 对象需要大量内存分配。要释放此内存，必须先成功保存或丢弃 Session，然后将应用对 Session 对象的引用设置为 `null`。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含会话创建选项的字典。

- :sport — ([ActivityRecording.Sport](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport-named_type), [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

        正在记录的主要运动项目（默认为 SPORT\_GENERIC）。

- :subSport — ([ActivityRecording.SubSport](/connect-iq/api-docs/Toybox/ActivityRecording/#SubSport-module), [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module)) —

        正在记录的运动项目子类别（默认为 SUB\_SPORT\_GENERIC）。

- :name — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        必需。这是与所记录运动项目相关联的名称。建议名称的最大长度为 15 个字符（某些设备支持更长的名称）。

- :poolLength — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        这是此活动的泳池长度，单位为米。如果此会话对象配置为 `:sport=>SPORT_SWIMMING` 且 `:subSport=>SUB_SPORT_LAP_SWIMMING`，则必须设置此选项才能以此模式配置系统。如果未提供此选项，活动数据的行为可能未定义。对于所有其他运动模式，将忽略此选项。

- :autoLap — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        包含自动计圈检测选项的字典。如果存在，此字典必须包含 `:type` 键；如果 `:type` 的值为 `:lines`，则必须包含 `:entry` 和 `:exit` 键。与 `:entry` 和 `:exit` 关联的值描述自动计圈进线段和出线段的端点，每个端点都定义为由两个 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象组成的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)。（在 3.0.10 中添加）

- :sensorLogger — ([SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/)) —

        用于记录此会话的 SensorLogger。


Example:

使用进入/退出线创建具有自动计圈检测功能的 Session

```
using Toybox.ActivityRecording;
function createSession() {
    var session = ActivityRecording.createSession({  // set up recording session
        :name=>"Race",                               // set session name
        :sport=>Activity.SPORT_GENERIC,              // set sport type
        :subSport=>Activity.SUB_SPORT_GENERIC,       // set sub sport type
        :autoLap=>{                                  // auto lap configuration
            :type=>:lines,                           // auto lap using entry/exit lines
            :exit=>[loc1, loc2],                     // set exit of auto lap staging box (typically the finish line)
            :entry=>[loc3, loc4],                    // set entrance of auto lap staging box (typically before the finish line)
            :autoStart=>true                         // auto start using the entry/exit lines
        }
    });
    return session;
}
```

Returns:

- [ActivityRecording.Session](/connect-iq/api-docs/Toybox/ActivityRecording/Session/) —

    一个新的 Session 对象；如果当前存在活动的 Session 且尚未保存或丢弃，则返回现有的 Session 对象。


Since:

API 级别 1.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果 `:autoLap` 选项字典中缺少必需选项或提供的选项无效，则抛出
