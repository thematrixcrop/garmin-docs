---
title: "模块：Toybox.Activity"
---
# 模块：Toybox.Activity

## 概述

Activity 模块提供了一种检索当前活动可用信息的方法。

Activity Info 会由 Data Fields 中的 [compute()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#compute-instance_function) 方法自动提供。[getActivityInfo()](/connect-iq/api-docs/Toybox/Activity/#getActivityInfo-instance_function) 方法可在应用内或其他情况下使用，例如数据字段初始化。

此模块还提供两组常量：

- SWIM\_STROKE：表示 [swimStrokeType()](/connect-iq/api-docs/Toybox/Activity/Info/#swimStrokeType-var)，例如自由泳、仰泳或蝶泳。

- TIMER\_STATE：表示活动记录的 [timerState()](/connect-iq/api-docs/Toybox/Activity/Info/#timerState-var)，例如已停止、已开始、已暂停等。


起始版本：

API 级别 1.0.0

## 命名空间下的类

类：[Info](/connect-iq/api-docs/Toybox/Activity/Info/), [ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/), [SplitInfo](/connect-iq/api-docs/Toybox/Activity/SplitInfo/), [WorkoutIntervalStep](/connect-iq/api-docs/Toybox/Activity/WorkoutIntervalStep/), [WorkoutStep](/connect-iq/api-docs/Toybox/Activity/WorkoutStep/), [WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/)

## 常量摘要

### SwimStrokeType

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SWIM\_STROKE\_FREESTYLE | 0 |
API 级别 1.2.2

|

自由泳划水

|
| SWIM\_STROKE\_BACKSTROKE | 1 |

API 级别 1.2.2

|

Backstroke

|
| SWIM\_STROKE\_BREASTSTROKE | 2 |

API 级别 1.2.2

|

Breaststroke

|
| SWIM\_STROKE\_BUTTERFLY | 3 |

API 级别 1.2.2

|

蝶泳划水

|
| SWIM\_STROKE\_DRILL | 4 |

API 级别 1.2.2

|

钻取模式

|
| SWIM\_STROKE\_MIXED | 5 |

API 级别 1.2.2

|

混合泳模式

|
| SWIM\_STROKE\_IM | 6 |

API 级别 1.2.2

|

混合间歇，蝶泳、仰泳、蛙泳和自由泳的次数相同，并按此顺序排列。

|

### TimerState

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TIMER\_STATE\_OFF | 0 |
API 级别 2.1.0

|

计时器已关闭。当前没有活动的记录

|
| TIMER\_STATE\_STOPPED | 1 |

API 级别 2.1.0

|

计时器已停止。记录处于活动状态，计时器已停止。

|
| TIMER\_STATE\_PAUSED | 2 |

API 级别 2.1.0

|

计时器已暂停。记录处于活动状态，计时器已暂停。当计时器处于活动状态但因自动暂停功能而停止时，会出现此状态。

|
| TIMER\_STATE\_ON | 3 |

API 级别 2.1.0

|

计时器已开启。记录处于活动状态，计时器正在运行。

|

### Sport

起始版本：

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SPORT\_GENERIC | 0 |
API 级别 3.2.0

 |  |
| SPORT\_RUNNING | 1 |

API 级别 3.2.0

 |  |
| SPORT\_CYCLING | 2 |

API 级别 3.2.0

 |  |
| SPORT\_TRANSITION | 3 |

API 级别 3.2.0

 |  |
| SPORT\_FITNESS\_EQUIPMENT | 4 |

API 级别 3.2.0

 |  |
| SPORT\_SWIMMING | 5 |

API 级别 3.2.0

 |  |
| SPORT\_BASKETBALL | 6 |

API 级别 3.2.0

 |  |
| SPORT\_SOCCER | 7 |

API 级别 3.2.0

 |  |
| SPORT\_TENNIS | 8 |

API 级别 3.2.0

 |  |
| SPORT\_AMERICAN\_FOOTBALL | 9 |

API 级别 3.2.0

 |  |
| SPORT\_TRAINING | 10 |

API 级别 3.2.0

 |  |
| SPORT\_WALKING | 11 |

API 级别 3.2.0

 |  |
| SPORT\_CROSS\_COUNTRY\_SKIING | 12 |

API 级别 3.2.0

 |  |
| SPORT\_ALPINE\_SKIING | 13 |

API 级别 3.2.0

 |  |
| SPORT\_SNOWBOARDING | 14 |

API 级别 3.2.0

 |  |
| SPORT\_ROWING | 15 |

API 级别 3.2.0

 |  |
| SPORT\_MOUNTAINEERING | 16 |

API 级别 3.2.0

 |  |
| SPORT\_HIKING | 17 |

API 级别 3.2.0

 |  |
| SPORT\_MULTISPORT | 18 |

API 级别 3.2.0

 |  |
| SPORT\_PADDLING | 19 |

API 级别 3.2.0

 |  |
| SPORT\_FLYING | 20 |

API 级别 3.2.0

 |  |
| SPORT\_E\_BIKING | 21 |

API 级别 3.2.0

 |  |
| SPORT\_MOTORCYCLING | 22 |

API 级别 3.2.0

 |  |
| SPORT\_BOATING | 23 |

API 级别 3.2.0

 |  |
| SPORT\_DRIVING | 24 |

API 级别 3.2.0

 |  |
| SPORT\_GOLF | 25 |

API 级别 3.2.0

 |  |
| SPORT\_HANG\_GLIDING | 26 |

API 级别 3.2.0

 |  |
| SPORT\_HORSEBACK\_RIDING | 27 |

API 级别 3.2.0

 |  |
| SPORT\_HUNTING | 28 |

API 级别 3.2.0

 |  |
| SPORT\_FISHING | 29 |

API 级别 3.2.0

 |  |
| SPORT\_INLINE\_SKATING | 30 |

API 级别 3.2.0

 |  |
| SPORT\_ROCK\_CLIMBING | 31 |

API 级别 3.2.0

 |  |
| SPORT\_SAILING | 32 |

API 级别 3.2.0

 |  |
| SPORT\_ICE\_SKATING | 33 |

API 级别 3.2.0

 |  |
| SPORT\_SKY\_DIVING | 34 |

API 级别 3.2.0

 |  |
| SPORT\_SNOWSHOEING | 35 |

API 级别 3.2.0

 |  |
| SPORT\_SNOWMOBILING | 36 |

API 级别 3.2.0

 |  |
| SPORT\_STAND\_UP\_PADDLEBOARDING | 37 |

API 级别 3.2.0

 |  |
| SPORT\_SURFING | 38 |

API 级别 3.2.0

 |  |
| SPORT\_WAKEBOARDING | 39 |

API 级别 3.2.0

 |  |
| SPORT\_WATER\_SKIING | 40 |

API 级别 3.2.0

 |  |
| SPORT\_KAYAKING | 41 |

API 级别 3.2.0

 |  |
| SPORT\_RAFTING | 42 |

API 级别 3.2.0

 |  |
| SPORT\_WINDSURFING | 43 |

API 级别 3.2.0

 |  |
| SPORT\_KITESURFING | 44 |

API 级别 3.2.0

 |  |
| SPORT\_TACTICAL | 45 |

API 级别 3.2.0

 |  |
| SPORT\_JUMPMASTER | 46 |

API 级别 3.2.0

 |  |
| SPORT\_BOXING | 47 |

API 级别 3.2.0

 |  |
| SPORT\_FLOOR\_CLIMBING | 48 |

API 级别 3.2.0

 |  |
| SPORT\_BASEBALL | 49 |

API 级别 3.2.0

 |  |
| SPORT\_SOFTBALL\_FAST\_PITCH | 50 |

API 级别 3.2.0

 |  |
| SPORT\_SOFTBALL\_SLOW\_PITCH | 51 |

API 级别 3.2.0

 |  |
| SPORT\_SHOOTING | 56 |

API 级别 3.2.0

 |  |
| SPORT\_AUTO\_RACING | 57 |

API 级别 3.2.0

 |  |
| SPORT\_WINTER\_SPORT | 58 |

API 级别 4.1.6

 |  |
| SPORT\_GRINDING | 59 |

API 级别 4.1.6

 |  |
| SPORT\_HEALTH\_MONITORING | 60 |

API 级别 4.1.6

 |  |
| SPORT\_MARINE | 61 |

API 级别 4.1.6

 |  |
| SPORT\_HIIT | 62 |

API 级别 4.1.6

 |  |
| SPORT\_VIDEO\_GAMING | 63 |

API 级别 4.1.6

 |  |
| SPORT\_RACKET | 64 |

API 级别 4.1.6

 |  |
| SPORT\_WHEELCHAIR\_PUSH\_WALK | 65 |

API 级别 4.1.6

 |  |
| SPORT\_WHEELCHAIR\_PUSH\_RUN | 66 |

API 级别 4.1.6

 |  |
| SPORT\_MEDITATION | 67 |

API 级别 4.1.6

 |  |
| SPORT\_PARA\_SPORT | 68 |

API 级别 4.1.6

 |  |
| SPORT\_DISC\_GOLF | 69 |

API 级别 4.1.6

 |  |
| SPORT\_TEAM\_SPORT | 70 |

API 级别 4.1.6

 |  |
| SPORT\_CRICKET | 71 |

API 级别 4.1.6

 |  |
| SPORT\_RUGBY | 72 |

API 级别 4.1.6

 |  |
| SPORT\_HOCKEY | 73 |

API 级别 4.1.6

 |  |
| SPORT\_LACROSSE | 74 |

API 级别 4.1.6

 |  |
| SPORT\_VOLLEYBALL | 75 |

API 级别 4.1.6

 |  |
| SPORT\_WATER\_TUBING | 76 |

API 级别 4.1.6

 |  |
| SPORT\_WAKESURFING | 77 |

API 级别 4.1.6

 |  |
| SPORT\_INVALID | 255 |

API 级别 3.2.0

 |  |

### SubSport

起始版本：

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SUB\_SPORT\_GENERIC | 0 |
API 级别 3.2.0

 |  |
| SUB\_SPORT\_TREADMILL | 1 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_STREET | 2 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_TRAIL | 3 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_TRACK | 4 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_SPIN | 5 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_INDOOR\_CYCLING | 6 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_ROAD | 7 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_MOUNTAIN | 8 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_DOWNHILL | 9 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_RECUMBENT | 10 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_CYCLOCROSS | 11 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_HAND\_CYCLING | 12 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_TRACK\_CYCLING | 13 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_INDOOR\_ROWING | 14 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_ELLIPTICAL | 15 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_STAIR\_CLIMBING | 16 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_LAP\_SWIMMING | 17 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_OPEN\_WATER | 18 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_FLEXIBILITY\_TRAINING | 19 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_STRENGTH\_TRAINING | 20 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_WARM\_UP | 21 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_MATCH | 22 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_EXERCISE | 23 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_CHALLENGE | 24 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_INDOOR\_SKIING | 25 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_CARDIO\_TRAINING | 26 |

API 级别 3.2.0

 |  |
| SUB\_SPORT\_INDOOR\_WALKING | 27 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_E\_BIKE\_FITNESS | 28 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BMX | 29 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_CASUAL\_WALKING | 30 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SPEED\_WALKING | 31 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BIKE\_TO\_RUN\_TRANSITION | 32 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_RUN\_TO\_BIKE\_TRANSITION | 33 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SWIM\_TO\_BIKE\_TRANSITION | 34 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ATV | 35 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_MOTOCROSS | 36 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BACKCOUNTRY | 37 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_RESORT | 38 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_RC\_DRONE | 39 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_WINGSUIT | 40 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_WHITEWATER | 41 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SKATE\_SKIING | 42 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_YOGA | 43 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_PILATES | 44 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_RUNNING | 45 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_GRAVEL\_CYCLING | 46 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_E\_BIKE\_MOUNTAIN | 47 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_COMMUTING | 48 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_MIXED\_SURFACE | 49 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_NAVIGATE | 50 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_TRACK\_ME | 51 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_MAP | 52 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SINGLE\_GAS\_DIVING | 53 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_MULTI\_GAS\_DIVING | 54 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_GAUGE\_DIVING | 55 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_APNEA\_DIVING | 56 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_APNEA\_HUNTING | 57 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_VIRTUAL\_ACTIVITY | 58 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_OBSTACLE | 59 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ASSISTANCE | 60 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INCIDENT\_DETECTED | 61 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BREATHING | 62 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_CCR\_DIVING | 63 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_AREA\_CALC | 64 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SAIL\_RACE | 65 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_EXPEDITION | 66 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ULTRA | 67 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_CLIMBING | 68 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BOULDERING | 69 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_HIIT | 70 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_GRINDING | 71 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_HUNTING\_WITH\_DOGS | 72 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_AMRAP | 73 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_EMOM | 74 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_TABATA | 75 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_FALL\_DETECTED | 76 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ESPORT | 77 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_TRIATHLON | 78 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_DUATHLON | 79 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BRICK | 80 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SWIM\_RUN | 81 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ADVENTURE\_RACE | 82 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_TRUCKER\_WORKOUT | 83 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_PICKLEBALL | 84 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_PADEL | 85 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_WHEELCHAIR\_WALK | 86 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_WHEELCHAIR\_RUN | 87 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INDOOR\_HAND\_CYCLING | 88 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ANCHOR | 89 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_FIELD | 90 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ICE | 91 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_ULTIMATE | 92 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_PLATFORM | 93 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_SQUASH | 94 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_BADMINTON | 95 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_RACQUETBALL | 96 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_TABLE\_TENNIS | 97 |

API 级别 4.1.6

 |  |
| SUB\_SPORT\_INVALID | 255 |

API 级别 3.2.0

 |  |

### WorkoutIntensity

起始版本：

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WORKOUT\_INTENSITY\_ACTIVE | 0 |
API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_REST | 1 |

API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_WARMUP | 2 |

API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_COOLDOWN | 3 |

API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_RECOVERY | 4 |

API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_INTERVAL | 5 |

API 级别 3.2.0

 |  |
| WORKOUT\_INTENSITY\_INVALID | 255 |

API 级别 3.2.0

 |  |

### WorkoutStepDurationType

起始版本：

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WORKOUT\_STEP\_DURATION\_TIME | 0 |
API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_DISTANCE | 1 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_HR\_LESS\_THAN | 2 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_HR\_GREATER\_THAN | 3 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_CALORIES | 4 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_OPEN | 5 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_STEPS\_COMPLETE | 6 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_TIME | 7 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_DISTANCE | 8 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_CALORIES | 9 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_HR\_LESS\_THAN | 10 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_HR\_GREATER\_THAN | 11 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_POWER\_LESS\_THAN | 12 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_POWER\_GREATER\_THAN | 13 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_LESS\_THAN | 14 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_GREATER\_THAN | 15 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_TRAINING\_PEAKS\_TRAINING\_STRESS\_SCORE | 16 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_POWER\_LAST\_LAP\_LESS\_THAN | 17 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_MAX\_POWER\_LAST\_LAP\_LESS\_THAN | 18 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_3S\_LESS\_THAN | 19 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_10S\_LESS\_THAN | 20 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_30S\_LESS\_THAN | 21 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_3S\_GREATER\_THAN | 22 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_10S\_GREATER\_THAN | 23 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_30S\_GREATER\_THAN | 24 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_LAP\_LESS\_THAN | 25 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_POWER\_LAP\_GREATER\_THAN | 26 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPEAT\_UNTIL\_TRAINING\_PEAKS\_TRAINING\_STRESS\_SCORE | 27 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPETITION\_TIME | 28 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_REPS | 29 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_DURATION\_INVALID | 255 |

API 级别 3.2.0

 |  |

### WorkoutStepTargetType

起始版本：

API 级别 3.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WORKOUT\_STEP\_TARGET\_SPEED | 0 |
API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_HEART\_RATE | 1 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_OPEN | 2 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_CADENCE | 3 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER | 4 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_GRADE | 5 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_RESISTANCE | 6 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER\_3S | 7 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER\_10S | 8 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER\_30S | 9 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER\_LAP | 10 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_SWIM\_STROKE | 11 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_SPEED\_LAP | 12 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_HEART\_RATE\_LAP | 13 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_INHALE\_DURATION | 14 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_INHALE\_HOLD\_DURATION | 15 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_EXHALE\_DURATION | 16 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_EXHALE\_HOLD\_DURATION | 17 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_POWER\_CURVE | 18 |

API 级别 3.2.0

 |  |
| WORKOUT\_STEP\_TARGET\_INVALID | 255 |

API 级别 3.2.0

 |  |

## 实例方法摘要 [collapse](#)

- [**getActivityInfo**](#getActivityInfo-instance_function)() as [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)

    获取当前活动信息。

- [**getCurrentWorkoutStep**](#getCurrentWorkoutStep-instance_function)() as [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) or **Null**

    获取当前锻炼步骤的信息。

- [**getNextWorkoutStep**](#getNextWorkoutStep-instance_function)() as [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) or **Null**

    获取下一个锻炼步骤的信息。

- [**getProfileInfo**](#getProfileInfo-instance_function)() as [Activity.ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/)

    获取当前配置文件的信息。


## 实例方法详情

### **getActivityInfo()** as [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)

获取当前活动信息。

返回：

- [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) —

    当前活动信息


起始版本：

API 级别 1.0.0

### **getCurrentWorkoutStep()** as [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) or **Null**

获取当前锻炼步骤的信息。

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

返回：

- [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) —

    如果锻炼处于活动状态，则返回相关值；否则返回 `null`


起始版本：

API 级别 3.2.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **getNextWorkoutStep()** as [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) or **Null**

获取下一个锻炼步骤的信息。

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

返回：

- [Activity.WorkoutStepInfo](/connect-iq/api-docs/Toybox/Activity/WorkoutStepInfo/) —

    如果锻炼处于活动状态且存在下一步，则返回下一步；否则返回 `null`


起始版本：

API 级别 3.2.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **getProfileInfo()** as [Activity.ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/)

获取当前配置文件的信息。

返回：

- [Activity.ProfileInfo](/connect-iq/api-docs/Toybox/Activity/ProfileInfo/) —

    当前配置


起始版本：

API 级别 3.2.0
