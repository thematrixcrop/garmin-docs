---
title: "模块：Toybox.Complications"
---
# 模块：Toybox.Complications

## 概述

Complications 模块允许应用订阅和发布复杂功能。复杂功能通过迭代器公开，也可以按标识符查询。表盘可以注册回调并订阅多个复杂功能。设备应用和音频内容提供商可以发布复杂功能信息。

起始版本：

API 级别 4.2.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
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
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

## 命名空间下的类

类：[Complication](/connect-iq/api-docs/Toybox/Complications/Complication/), [ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/), [Id](/connect-iq/api-docs/Toybox/Complications/Id/), [Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/)

## 常量摘要

### Unit

Complication 报告的单位

起始版本：

API 级别 4.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| UNIT\_INVALID | 0 |
API 级别 4.2.0

 |  |
| UNIT\_DISTANCE | 1 |

API 级别 4.2.0

|

复杂功能表示距离；值以米为单位

|
| UNIT\_ELEVATION | 2 |

API 级别 4.2.0

|

复杂功能表示海拔；值以米为单位

|
| UNIT\_HEIGHT | 3 |

API 级别 4.2.0

|

复杂功能表示高度；值以米为单位

|
| UNIT\_SPEED | 4 |

API 级别 4.2.0

|

复杂功能表示速度；值以米/秒为单位

|
| UNIT\_TEMPERATURE | 5 |

API 级别 4.2.0

|

复杂功能表示温度；值以摄氏度为单位

|
| UNIT\_WEIGHT | 6 |

API 级别 4.2.0

|

复杂功能表示重量；值以克为单位

|

### 类型

系统内置的 complication 类型

起始版本：

API 级别 4.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| COMPLICATION\_TYPE\_INVALID | 0 |
API 级别 4.2.0

|

无效的内置复杂功能类型

|
| COMPLICATION\_TYPE\_BATTERY | 1 |

API 级别 4.2.0

|

值是表示电池电量百分比（0 到 100）的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_STEPS | 2 |

API 级别 4.2.0

|

值是当天步数的非负 Number，在轮椅模式下不可用

|
| COMPLICATION\_TYPE\_CALORIES | 3 |

API 级别 4.2.0

|

当天消耗卡路里数量的值为非负 Number

|
| COMPLICATION\_TYPE\_FLOORS\_CLIMBED | 4 |

API 级别 4.2.0

|

已爬楼层数的值为非负 Number，在轮椅模式下不可用

|
| COMPLICATION\_TYPE\_INTENSITY\_MINUTES | 5 |

API 级别 4.2.0

|

每周重置的高强度分钟数的值为非负 Number

|
| COMPLICATION\_TYPE\_DATE | 6 |

API 级别 4.2.0

|

值是包含日期和月份的 String，例如 28 Mar

|
| COMPLICATION\_TYPE\_WEEKDAY\_MONTHDAY | 7 |

API 级别 4.2.0

|

值是包含星期几和日期的 String，例如 Mon 28

|
| COMPLICATION\_TYPE\_CURRENT\_WEATHER | 8 |

API 级别 4.2.0

|

当前天气的值为 [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const)

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_1DAY | 9 |

API 级别 4.2.0

|

未来一天的预报天气值为 [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const)

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_2DAY | 10 |

API 级别 4.2.0

|

未来两天的预报天气值为 [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const)

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_3DAY | 11 |

API 级别 4.2.0

|

未来三天的预报天气值为 [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const)

|
| COMPLICATION\_TYPE\_CALENDAR\_EVENTS | 12 |

API 级别 4.2.0

|

值是表示您下一个日历事件时间的 String，或为 `null`

|
| COMPLICATION\_TYPE\_SUNRISE | 13 |

API 级别 4.2.0

|

值是表示日出当地时间午夜以来秒数的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_SUNSET | 14 |

API 级别 4.2.0

|

值是表示日落当地时间午夜以来秒数的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_ALTITUDE | 15 |

API 级别 4.2.0

|

当前海拔的值为以米表示的 Float，或为 `null`。在 ConnectIQ API 5.1.0 之前，该值为 Number。

|
| COMPLICATION\_TYPE\_SEA\_LEVEL\_PRESSURE | 16 |

API 级别 4.2.0

|

当前气压的值为以帕斯卡表示的 Float，或为 `null`

|
| COMPLICATION\_TYPE\_NOTIFICATION\_COUNT | 17 |

API 级别 4.2.0

|

通知数量的值为非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_HEART\_RATE | 18 |

API 级别 4.2.0

|

心率的值为以每分钟心跳次数表示的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_WEEKLY\_RUN\_DISTANCE | 19 |

API 级别 4.2.0

|

每周跑步距离的值为以米表示的 Float

|
| COMPLICATION\_TYPE\_WEEKLY\_BIKE\_DISTANCE | 20 |

API 级别 4.2.0

|

每周骑行距离的值为以米表示的 Float

|
| COMPLICATION\_TYPE\_RECOVERY\_TIME | 21 |

API 级别 4.2.0

|

值是恢复时间剩余分钟数的 Number

|
| COMPLICATION\_TYPE\_STRESS | 22 |

API 级别 4.2.0

|

值是表示您当前压力水平的 Number，或为 `null`

|
| COMPLICATION\_TYPE\_BODY\_BATTERY | 23 |

API 级别 4.2.0

|

值是表示您当前身体电量的 Number，或为 `null`

|
| COMPLICATION\_TYPE\_VO2MAX\_RUN | 24 |

API 级别 4.2.0

|

值是表示您跑步 VO2 max 的 Number，或为 `null`

|
| COMPLICATION\_TYPE\_VO2MAX\_BIKE | 25 |

API 级别 4.2.0

|

值是表示您骑行 VO2 max 的 Number，或为 `null`

|
| COMPLICATION\_TYPE\_TRAINING\_STATUS | 26 |

API 级别 4.2.0

|

值是表示您训练状态的 String

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_5K | 27 |

API 级别 4.2.0

|

值是表示您预测的 5K 用时（秒）的 Number

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_10K | 28 |

API 级别 4.2.0

|

值是表示您预测的 10K 用时（秒）的 Number

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_HALF\_MARATHON | 29 |

API 级别 4.2.0

|

值是表示您预测的半程马拉松用时（秒）的 Number

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_MARATHON | 30 |

API 级别 4.2.0

|

值是表示您预测的马拉松用时（秒）的 Number

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_5K | 31 |

API 级别 4.2.0

|

5 公里配速的值为以米/秒表示的 Float

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_10K | 32 |

API 级别 4.2.0

|

10 公里配速的值为以米/秒表示的 Float

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_HALF\_MARATHON | 33 |

API 级别 4.2.0

|

半程马拉松配速的值为以米/秒表示的 Float

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_MARATHON | 34 |

API 级别 4.2.0

|

马拉松配速的值为以米/秒表示的 Float

|
| COMPLICATION\_TYPE\_PULSE\_OX | 35 |

API 级别 4.2.0

|

血氧的值为介于 0 到 100 之间的非负 Number（百分比），或为 `null`

|
| COMPLICATION\_TYPE\_RESPIRATION\_RATE | 36 |

API 级别 4.2.0

|

值是表示您每分钟呼吸次数的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_SOLAR\_INPUT | 37 |

API 级别 4.2.0

|

值是表示太阳能充电百分比（0 到 100）的非负 Number，或为 `null`

|
| COMPLICATION\_TYPE\_CURRENT\_TEMPERATURE | 38 |

API 级别 4.2.0

|

温度的值为以摄氏度表示的 Float，或为 `null`。在 ConnectIQ API 5.0.0 之前，该值为 Number。

|
| COMPLICATION\_TYPE\_HIGH\_LOW\_TEMPERATURE | 39 |

API 级别 4.2.0

|

值是一个 `String`，以类似于 "H &lt;high> / L &lt;low>" 的格式提供最高温和最低温。

|
| COMPLICATION\_TYPE\_WHEELCHAIR\_PUSHES | 40 |

API 级别 4.2.3

|

值是当天推送次数的非负 Number，仅在轮椅模式下可用

|
| COMPLICATION\_TYPE\_LAST\_GOLF\_ROUND\_SCORE | 41 |

API 级别 5.0.0

|

值是一个 `String`，格式为 "&lt;LastRoundTotalScore>(&lt;Offset>)"。其中，`Offset` 为 "E" 表示平标准杆，为负数表示低于标准杆，为正数表示高于标准杆。

|
| COMPLICATION\_TYPE\_SLEEP\_SCORE | 42 |

API 级别 6.0.2

|

睡眠评分的值为介于 0 到 100 之间的非负 number，或为 `null`

|

## 类型定义摘要 [collapse](#)

- [**ComplicationChangedCallback**](#ComplicationChangedCallback-named_type) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as **Void**

    用于通知订阅者复杂功能更新的回调。

- [**Data**](#Data-named_type) as { :shortLabel as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type), :value as [Complications.Value](/connect-iq/api-docs/Toybox/Complications/#Value-named_type), :unit as [Complications.Unit](/connect-iq/api-docs/Toybox/Complications/#Unit-module) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :ranges as [Complications.Ranges](/connect-iq/api-docs/Toybox/Complications/#Ranges-named_type) }
- [**Icon**](#Icon-named_type) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)
- [**Label**](#Label-named_type) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)
- [**RangeValue**](#RangeValue-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)
- [**Ranges**](#Ranges-named_type) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)\>
- [**Value**](#Value-named_type) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)

## 实例方法摘要 [collapse](#)

- [**exitTo**](#exitTo-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as **Void**

    启动与复杂功能关联的应用。

- [**getComplication**](#getComplication-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)

    给定一个 complication Id，获取该 complication。

- [**getComplications**](#getComplications-instance_function)() as [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/)

    提供一个迭代器，用于遍历我们有权访问的 complication id。

- [**registerComplicationChangeCallback**](#registerComplicationChangeCallback-instance_function)(callback as [Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type) or **Null**) as **Void**

    注册 complication 更新通知回调。

- [**subscribeToUpdates**](#subscribeToUpdates-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    订阅 complication。

- [**unsubscribeFromAllUpdates**](#unsubscribeFromAllUpdates-instance_function)() as **Void**

    取消订阅所有已订阅的 Complication。

- [**unsubscribeFromUpdates**](#unsubscribeFromUpdates-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as **Void**

    取消订阅 Complication。

- [**updateComplication**](#updateComplication-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type)) as **Void**

    更新复杂功能数据。未在 \`data\` 中指定的值不会根据上次更新的内容或资源定义中指定的内容进行更新。


## 类型定义详情

### ComplicationChangedCallback，格式为 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as Void

用于通知订阅者复杂功能更新的回调

起始版本：

API 级别 4.2.0

### Data，格式为 { :shortLabel as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type), :value as [Complications.Value](/connect-iq/api-docs/Toybox/Complications/#Value-named_type), :unit as [Complications.Unit](/connect-iq/api-docs/Toybox/Complications/#Unit-module) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :ranges as [Complications.Ranges](/connect-iq/api-docs/Toybox/Complications/#Ranges-named_type) }

起始版本：

API 级别 4.2.0

### **Icon** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)

起始版本：

API 级别 4.2.0

### **Label** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

起始版本：

API 级别 4.2.0

### **RangeValue** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

起始版本：

API 级别 4.2.0

### **Ranges** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)\>

起始版本：

API 级别 4.2.0

### **Value** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)

起始版本：

API 级别 4.2.0

## 实例方法详情

### **exitTo(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as **Void**

启动与复杂功能关联的应用

参数：

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    要启动的复杂功能 ID


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
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
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

另见：

- [Toybox.System.exitTo](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function)


起始版本：

API 级别 4.2.0

抛出：

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果 complication id 不是来自有效应用，则会抛出此异常


### **getComplication(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)

给定一个 complication Id，获取该 complication

参数：

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    要获取的复杂功能 ID


返回：

- [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/) —

    Complication


起始版本：

API 级别 4.2.0

抛出：

- ([Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)) —

    如果找不到给定的 complication，则抛出。


### **getComplications()** as [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/)

提供一个迭代器，用于遍历我们有权访问的 complication id

返回：

- [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/) —

    迭代器实例


起始版本：

API 级别 4.2.0

### **registerComplicationChangeCallback(callback as [Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type) or **Null**)** as **Void**

注册 complication 更新通知回调

参数：

- callback — ([Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type)) —

    复杂功能发生更改或变得不可用时调用的回调。


起始版本：

API 级别 4.2.0

### **subscribeToUpdates(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

订阅 complication。信息会发送到已注册的 ComplicationChangedCallback 方法。请确保已注册更改回调。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果订阅成功，则为 `true`；如果无法订阅给定的复杂功能，则为 `false`


另见：

- [Toybox.Complications.registerComplicationChangeCallback](/connect-iq/api-docs/Toybox/Complications/#registerComplicationChangeCallback-instance_function)


起始版本：

API 级别 4.2.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果活动订阅过多，则抛出

- ([Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)) —

    如果找不到给定的 complication，则抛出。


### **unsubscribeFromAllUpdates()** as **Void**

取消订阅所有已订阅的 Complication

起始版本：

API 级别 4.2.0

### **unsubscribeFromUpdates(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as **Void**

取消订阅 Complication

参数：

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    要取消订阅的复杂功能 Td


起始版本：

API 级别 4.2.0

### **updateComplication(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type))** as **Void**

更新复杂功能数据。未在 \`data\` 中指定的值不会根据上次更新的内容或资源定义中指定的内容进行更新。

参数：

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要更新的应用复杂功能

- data — ([Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type)) —

    Complication 的更新值


起始版本：

API 级别 4.2.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果 complication 的 id 未与此应用关联，则抛出
