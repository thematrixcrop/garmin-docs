---
title: "Module: Toybox.ActivityRecording"
---
# Module: Toybox.ActivityRecording

## 概述

The Activity Recording module will allow Apps to access the FIT file recording capabilities of the device.

Apps can use this module to allow the user to start and stop recordings, create laps, and save recorded data. SPORT\_\* and SUB\_SPORT\_\* constants are provided as enums.

The SPORT\_\* defines the type of activity, but is not guaranteed to change device behavior. This may cause different algorithms to be applied to the sensor data. For example, a device that does not natively support SPORT\_MULTISPORT recording will not gain SPORT\_MULTISPORT transition features. However, the FIT file can be defined as SPORT\_MULTISPORT and MULTI\_SPORT algorithms may be applied to the sensor data.

SUB\_SPORT\_\* allows for clarification of sport when recording.

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

Sport used for sports not on the list

|
| SPORT\_RUNNING | 1 |

API 级别 1.0.0

|

Sport used for running

|
| SPORT\_CYCLING | 2 |

API 级别 1.0.0

|

Sport used for multi-sport transitions

|
| SPORT\_TRANSITION | 3 |

API 级别 1.0.0

 |  |
| SPORT\_FITNESS\_EQUIPMENT | 4 |

API 级别 1.0.0

|

Sport used for ANT enabled exercise equipment

|
| SPORT\_SWIMMING | 5 |

API 级别 1.0.0

|

Sport used for swimming

|
| SPORT\_BASKETBALL | 6 |

API 级别 1.0.0

|

Sport used for basketball

|
| SPORT\_SOCCER | 7 |

API 级别 1.0.0

|

Sport used for soccer

|
| SPORT\_TENNIS | 8 |

API 级别 1.0.0

|

Sport used for Tennis

|
| SPORT\_AMERICAN\_FOOTBALL | 9 |

API 级别 1.0.0

|

Sport used for American football

|
| SPORT\_TRAINING | 10 |

API 级别 1.0.0

|

Sport used for activities such as strength training, cardio, etc

|
| SPORT\_WALKING | 11 |

API 级别 1.0.0

|

Sport used for walking

|
| SPORT\_CROSS\_COUNTRY\_SKIING | 12 |

API 级别 1.0.0

|

Sport used for cross-country skiing

|
| SPORT\_ALPINE\_SKIING | 13 |

API 级别 1.0.0

|

Sport used for alpine skiing

|
| SPORT\_SNOWBOARDING | 14 |

API 级别 1.0.0

|

Sport used for snowboarding

|
| SPORT\_ROWING | 15 |

API 级别 1.0.0

|

Sport used for rowing

|
| SPORT\_MOUNTAINEERING | 16 |

API 级别 1.0.0

|

Sport used for mountaineering

|
| SPORT\_HIKING | 17 |

API 级别 1.0.0

|

Sport used for hiking

|
| SPORT\_MULTISPORT | 18 |

API 级别 1.0.0

|

Sport used for multi-sport events

|
| SPORT\_PADDLING | 19 |

API 级别 1.0.0

|

Sport used for paddling

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

Sport used for flying

|
| SPORT\_E\_BIKING | 21 |

API 级别 3.0.10

|

Sport used for riding an e-bike

|
| SPORT\_MOTORCYCLING | 22 |

API 级别 3.0.10

|

Sport used for motorcycling

|
| SPORT\_BOATING | 23 |

API 级别 3.0.10

|

Sport used for boating

|
| SPORT\_DRIVING | 24 |

API 级别 3.0.10

|

Sport used for driving

|
| SPORT\_GOLF | 25 |

API 级别 3.0.10

|

Sport used for golfing

|
| SPORT\_HANG\_GLIDING | 26 |

API 级别 3.0.10

|

Sport used for hang gliding

|
| SPORT\_HORSEBACK\_RIDING | 27 |

API 级别 3.0.10

|

Sport used for horseback riding

|
| SPORT\_HUNTING | 28 |

API 级别 3.0.10

|

Sport used for hunting

|
| SPORT\_FISHING | 29 |

API 级别 3.0.10

|

Sport used for fishing

|
| SPORT\_INLINE\_SKATING | 30 |

API 级别 3.0.10

|

Sport used for inline skating

|
| SPORT\_ROCK\_CLIMBING | 31 |

API 级别 3.0.10

|

Sport used for rock climbing

|
| SPORT\_SAILING | 32 |

API 级别 3.0.10

|

Sport used for sailing

|
| SPORT\_ICE\_SKATING | 33 |

API 级别 3.0.10

|

Sport used for ice skating

|
| SPORT\_SKY\_DIVING | 34 |

API 级别 3.0.10

|

Sport used for sky diving

|
| SPORT\_SNOWSHOEING | 35 |

API 级别 3.0.10

|

Sport used for showshoeing

|
| SPORT\_SNOWMOBILING | 36 |

API 级别 3.0.10

|

Sport used for snowmobiling

|
| SPORT\_STAND\_UP\_PADDLEBOARDING | 37 |

API 级别 3.0.10

|

Sport used for paddle boarding

|
| SPORT\_SURFING | 38 |

API 级别 3.0.10

|

Sport used for surfing

|
| SPORT\_WAKEBOARDING | 39 |

API 级别 3.0.10

|

Sport used for wakeboarding

|
| SPORT\_WATER\_SKIING | 40 |

API 级别 3.0.10

|

Sport used for water skiing

|
| SPORT\_KAYAKING | 41 |

API 级别 3.0.10

|

Sport used for kayaking

|
| SPORT\_RAFTING | 42 |

API 级别 3.0.10

|

Sport used for rafting

|
| SPORT\_WINDSURFING | 43 |

API 级别 3.0.10

|

Sport used for windsurfing

|
| SPORT\_KITESURFING | 44 |

API 级别 3.0.10

|

Sport used for kite surfing

|
| SPORT\_TACTICAL | 45 |

API 级别 3.0.10

|

Sport used for tactical

|
| SPORT\_JUMPMASTER | 46 |

API 级别 3.0.10

|

Sport used for jumpmaster

|
| SPORT\_BOXING | 47 |

API 级别 3.0.10

|

Sport used for boxing

|
| SPORT\_FLOOR\_CLIMBING | 48 |

API 级别 3.0.10

|

Sport used for climbing

|
| SPORT\_BASEBALL | 49 |

API 级别 3.0.10

|

Sport used for baseball

|
| SPORT\_SOFTBALL\_FAST\_PITCH | 50 |

API 级别 3.0.10

|

Sport used for fast pitch softball

|
| SPORT\_SOFTBALL\_SLOW\_PITCH | 51 |

API 级别 3.0.10

|

Sport used for slow pitch softball

|
| SPORT\_SHOOTING | 56 |

API 级别 3.0.10

|

Sport used for shooting

|
| SPORT\_AUTO\_RACING | 57 |

API 级别 3.0.10

|

Sport used for auto racing

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

Sub-sport used if no other sub-sport is applicable

|
| SUB\_SPORT\_TREADMILL | 1 |

API 级别 1.0.0

|

Sub-sport for Running and Fitness Equipment

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

Sub-sport for Cycling and Fitness Equipment

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

Sub-sport for Rowing and Fitness Equipment

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

Sub-sport for Swimming

|
| SUB\_SPORT\_OPEN\_WATER | 18 |

API 级别 1.0.0

|

Sub-sport for Swimming

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

Sub-sport for Activity Warm-up

|
| SUB\_SPORT\_MATCH | 22 |

API 级别 1.0.0

|

Sub-sport for Sports with Matches (e.g. Tennis)

|
| SUB\_SPORT\_EXERCISE | 23 |

API 级别 1.0.0

|

Sub-sport for Exercise

|
| SUB\_SPORT\_CHALLENGE | 24 |

API 级别 1.0.0

|

Sub-sport for a Sport Challenge

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

Timer start event

|
| TIMER\_EVENT\_STOP | 1 |

API 级别 3.0.10

|

Timer stop event

|
| TIMER\_EVENT\_PAUSE | 2 |

API 级别 3.0.10

|

Timer pause event

|
| TIMER\_EVENT\_RESUME | 3 |

API 级别 3.0.10

|

Timer resume event

|
| TIMER\_EVENT\_LAP | 4 |

API 级别 3.0.10

|

Timer lap event

|
| TIMER\_EVENT\_RESET | 5 |

API 级别 3.0.10

|

Timer reset

|
| TIMER\_EVENT\_WORKOUT\_STEP\_COMPLETE | 6 |

API 级别 3.0.10

|

Workout step complete

|
| TIMER\_EVENT\_NEXT\_MULTISPORT\_LEG | 7 |

API 级别 3.0.10

|

Multisport leg started

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

Only one Session object is allowed to exist at a time. If there is an existing object that has not been closed using the [save()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#save-instance_function) or [discard()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#discard-instance_function) methods, this method will return that object instead of creating a new one. On some products running the 1.x virtual machine, creating a Session object requires a large memory allocation. To free this memory, the Session must first be successfully saved or discarded, and then app references to the Session object should be set to `null`.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing session creation options.

- :sport — ([ActivityRecording.Sport](/connect-iq/api-docs/Toybox/ActivityRecording/#Sport-named_type), [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

        The primary sport being recorded (SPORT\_GENERIC by default).

- :subSport — ([ActivityRecording.SubSport](/connect-iq/api-docs/Toybox/ActivityRecording/#SubSport-module), [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module)) —

        The sport subcategory being recorded (SUB\_SPORT\_GENERIC by default).

- :name — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        Required. This is the name that will be associated with the sport being recorded. The suggested maximum length of the name is 15 characters (some devices support longer names).

- :poolLength — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        This is the length of the pool in meters for this activity. If this session object is configured with `:sport=>SPORT_SWIMMING` and `:subSport=>SUB_SPORT_LAP_SWIMMING`, this option is required to configure the system in this mode. If it is not provided, activity data may have undefined behavior. For all other sport modes, this option is ignored.

- :autoLap — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        A dictionary containing auto-lap detection options. If present, this dictionary must have a `:type` key; If the value of `:type` is `:lines`, the `:entry` and `:exit` keys are required. The values associated with `:entry` and `:exit` describe the endpoints of the auto lap entry and exit line segments, each being defined as an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of two [Location](/connect-iq/api-docs/Toybox/Position/Location/) objects. (added in 3.0.10)

- :sensorLogger — ([SensorLogging.SensorLogger](/connect-iq/api-docs/Toybox/SensorLogging/SensorLogger/)) —

        The SensorLogger to use to record this session.


Example:

Create a Session with auto lap detection using entry/exit lines

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

    A new Session object, or the existing Session object if a Session is active and has not been saved or discarded.


Since:

API 级别 1.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if required options are missing or provided options are invalid in `:autoLap` options dictionary
