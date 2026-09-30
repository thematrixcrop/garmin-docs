---
title: "Module: Toybox.Complications"
---
# Module: Toybox.Complications

## 概述

The Complications module allows apps to both subscribe to and publish complications. Complications are exposed via an iterator, or can be queried by identifier. Watch faces can register a callback and subscribe to multiple complications. Device apps and audio content providers can publish complication information.

Since:

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

Units reported by a complication

Since:

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

System build-in complication type

Since:

API 级别 4.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| COMPLICATION\_TYPE\_INVALID | 0 |
API 级别 4.2.0

|

Invalid build-in complication type

|
| COMPLICATION\_TYPE\_BATTERY | 1 |

API 级别 4.2.0

|

Value is a non-negative Number percent 0 to 100 representing battery charge or `null`

|
| COMPLICATION\_TYPE\_STEPS | 2 |

API 级别 4.2.0

|

Value is a non-negative Number of steps for the current day, not available in wheelchair mode

|
| COMPLICATION\_TYPE\_CALORIES | 3 |

API 级别 4.2.0

|

Value is a non-negative Number of calories burned for the current day

|
| COMPLICATION\_TYPE\_FLOORS\_CLIMBED | 4 |

API 级别 4.2.0

|

Value is a non-negative Number of floors climbed, not available in wheelchair mode

|
| COMPLICATION\_TYPE\_INTENSITY\_MINUTES | 5 |

API 级别 4.2.0

|

Value is a non-negative Number of intensity minutes that resets weekly

|
| COMPLICATION\_TYPE\_DATE | 6 |

API 级别 4.2.0

|

Value is a String with the day of the month and the month e.g., 28 Mar

|
| COMPLICATION\_TYPE\_WEEKDAY\_MONTHDAY | 7 |

API 级别 4.2.0

|

Value is a String with the day of the week and the day of the month e.g., Mon 28

|
| COMPLICATION\_TYPE\_CURRENT\_WEATHER | 8 |

API 级别 4.2.0

|

Value is a [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const) for the current weather

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_1DAY | 9 |

API 级别 4.2.0

|

Value is a [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const) for the forecast weather one day in the future

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_2DAY | 10 |

API 级别 4.2.0

|

Value is a [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const) for the forecast weather two days in the future

|
| COMPLICATION\_TYPE\_FORECAST\_WEATHER\_3DAY | 11 |

API 级别 4.2.0

|

Value is a [Weather.CONDITION\_\*](/connect-iq/api-docs/Toybox/Weather/#CONDITION_CLEAR-const) for the forecast weather three days in the future

|
| COMPLICATION\_TYPE\_CALENDAR\_EVENTS | 12 |

API 级别 4.2.0

|

Value is a String with the time of your next calendar event or `null`

|
| COMPLICATION\_TYPE\_SUNRISE | 13 |

API 级别 4.2.0

|

Value is a non-negative Number representing seconds since midnight local time of the sunrise or `null`

|
| COMPLICATION\_TYPE\_SUNSET | 14 |

API 级别 4.2.0

|

Value is a non-negative Number representing seconds since midnight local time of the sunset or `null`

|
| COMPLICATION\_TYPE\_ALTITUDE | 15 |

API 级别 4.2.0

|

Value is a Float of the current altitude in meters or `null`. Prior to ConnectIQ API version 5.1.0, the value was a Number.

|
| COMPLICATION\_TYPE\_SEA\_LEVEL\_PRESSURE | 16 |

API 级别 4.2.0

|

Value is a Float in pascals of the current pressure or `null`

|
| COMPLICATION\_TYPE\_NOTIFICATION\_COUNT | 17 |

API 级别 4.2.0

|

Value is a non-negative Number of notifications or `null`

|
| COMPLICATION\_TYPE\_HEART\_RATE | 18 |

API 级别 4.2.0

|

Value is a non-negative Number in beats per minute or `null`

|
| COMPLICATION\_TYPE\_WEEKLY\_RUN\_DISTANCE | 19 |

API 级别 4.2.0

|

Value is a Float of your weekly run distance in meters

|
| COMPLICATION\_TYPE\_WEEKLY\_BIKE\_DISTANCE | 20 |

API 级别 4.2.0

|

Value is a Float of your weekly bike distance in meters

|
| COMPLICATION\_TYPE\_RECOVERY\_TIME | 21 |

API 级别 4.2.0

|

Value is a Number of minutes remaining in your recovery time

|
| COMPLICATION\_TYPE\_STRESS | 22 |

API 级别 4.2.0

|

Value is a Number representing your current stress level or `null`

|
| COMPLICATION\_TYPE\_BODY\_BATTERY | 23 |

API 级别 4.2.0

|

Value is a Number representing your current body battery or `null`

|
| COMPLICATION\_TYPE\_VO2MAX\_RUN | 24 |

API 级别 4.2.0

|

Value is a Number representing your running VO2 max or `null`

|
| COMPLICATION\_TYPE\_VO2MAX\_BIKE | 25 |

API 级别 4.2.0

|

Value is a Number representing your cycling VO2 max or `null`

|
| COMPLICATION\_TYPE\_TRAINING\_STATUS | 26 |

API 级别 4.2.0

|

Value is a String representing your training status

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_5K | 27 |

API 级别 4.2.0

|

Value is a Number representing your predicted 5K time in seconds

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_10K | 28 |

API 级别 4.2.0

|

Value is a Number representing your predicted 10k time in seconds

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_HALF\_MARATHON | 29 |

API 级别 4.2.0

|

Value is a Number representing your predicted half marathon time in seconds

|
| COMPLICATION\_TYPE\_RACE\_PREDICTOR\_MARATHON | 30 |

API 级别 4.2.0

|

Value is a Number representing your predicted your marathon time in seconds

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_5K | 31 |

API 级别 4.2.0

|

Value is a Float representing your 5k pace in meters/second

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_10K | 32 |

API 级别 4.2.0

|

Value is a Float representing your 10k pace in meters/second

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_HALF\_MARATHON | 33 |

API 级别 4.2.0

|

Value is a Float representing your half marathon pace in meters/second

|
| COMPLICATION\_TYPE\_RACE\_PACE\_PREDICTOR\_MARATHON | 34 |

API 级别 4.2.0

|

Value is a Float representing your marathon pace in meters/second

|
| COMPLICATION\_TYPE\_PULSE\_OX | 35 |

API 级别 4.2.0

|

Value is a non-negative Number as a percent from 0 to 100 representing your blood oxygen or `null`

|
| COMPLICATION\_TYPE\_RESPIRATION\_RATE | 36 |

API 级别 4.2.0

|

Value is a non-negative Number representing your breaths per minute or `null`

|
| COMPLICATION\_TYPE\_SOLAR\_INPUT | 37 |

API 级别 4.2.0

|

Value is a non-negative Number representing percent between 0 to 100 of solar charge or `null`

|
| COMPLICATION\_TYPE\_CURRENT\_TEMPERATURE | 38 |

API 级别 4.2.0

|

Value is a Float representing temperature in degrees Celsius or `null`. Prior to ConnectIQ API version 5.0.0, the value was a Number.

|
| COMPLICATION\_TYPE\_HIGH\_LOW\_TEMPERATURE | 39 |

API 级别 4.2.0

|

Value is a String providing the high and low temperature values in a format similar to "H &lt;high> / L &lt;low>"

|
| COMPLICATION\_TYPE\_WHEELCHAIR\_PUSHES | 40 |

API 级别 4.2.3

|

Value is a non-negative Number of pushes for the current day, only available in wheelchair mode

|
| COMPLICATION\_TYPE\_LAST\_GOLF\_ROUND\_SCORE | 41 |

API 级别 5.0.0

|

Value is a String in the format "&lt;LastRoundTotalScore>(&lt;Offset>)" where Offset is "E" for even-par, a negative value for under par, or a positive value for over par

|
| COMPLICATION\_TYPE\_SLEEP\_SCORE | 42 |

API 级别 6.0.2

|

Value is a non-negative number from 0 to 100 representing sleep score or `null`

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

    Launches the app associated with the complication.

- [**getComplication**](#getComplication-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)

    Given a complication Id, get the complication.

- [**getComplications**](#getComplications-instance_function)() as [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/)

    Provide an iterator over complication id that we have access to.

- [**registerComplicationChangeCallback**](#registerComplicationChangeCallback-instance_function)(callback as [Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type) or **Null**) as **Void**

    Register callback for notifications of complication updates.

- [**subscribeToUpdates**](#subscribeToUpdates-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Subscribes to complication.

- [**unsubscribeFromAllUpdates**](#unsubscribeFromAllUpdates-instance_function)() as **Void**

    Unsubscribes from all subscribed complications.

- [**unsubscribeFromUpdates**](#unsubscribeFromUpdates-instance_function)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as **Void**

    Unsubscribes from complication.

- [**updateComplication**](#updateComplication-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type)) as **Void**

    更新复杂功能数据。未在 \`data\` 中指定的值不会根据上次更新的内容或资源定义中指定的内容进行更新。


## 类型定义详情

### **ComplicationChangedCallback** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) as **Void**

用于通知订阅者复杂功能更新的回调

Since:

API 级别 4.2.0

### **Data** as { :shortLabel as [Complications.Label](/connect-iq/api-docs/Toybox/Complications/#Label-named_type), :value as [Complications.Value](/connect-iq/api-docs/Toybox/Complications/#Value-named_type), :unit as [Complications.Unit](/connect-iq/api-docs/Toybox/Complications/#Unit-module) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :ranges as [Complications.Ranges](/connect-iq/api-docs/Toybox/Complications/#Ranges-named_type) }

Since:

API 级别 4.2.0

### **Icon** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)

Since:

API 级别 4.2.0

### **Label** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Since:

API 级别 4.2.0

### **RangeValue** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Since:

API 级别 4.2.0

### **Ranges** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)\>

Since:

API 级别 4.2.0

### **Value** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Complications.RangeValue](/connect-iq/api-docs/Toybox/Complications/#RangeValue-named_type)

Since:

API 级别 4.2.0

## 实例方法详情

### **exitTo(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as **Void**

Launches the app associated with the complication

Parameters:

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    The complication Id to launch


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


Since:

API 级别 4.2.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if complication id is not a from a valid app


### **getComplication(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/)

Given a complication Id, get the complication

Parameters:

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    要获取的复杂功能 ID


Returns:

- [Complications.Complication](/connect-iq/api-docs/Toybox/Complications/Complication/) —

    Complication


Since:

API 级别 4.2.0

Throws:

- ([Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)) —

    如果找不到给定的 complication，则抛出。


### **getComplications()** as [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/)

Provide an iterator over complication id that we have access to

Returns:

- [Complications.Iterator](/connect-iq/api-docs/Toybox/Complications/Iterator/) —

    Iterator instance


Since:

API 级别 4.2.0

### **registerComplicationChangeCallback(callback as [Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type) or **Null**)** as **Void**

Register callback for notifications of complication updates

Parameters:

- callback — ([Complications.ComplicationChangedCallback](/connect-iq/api-docs/Toybox/Complications/#ComplicationChangedCallback-named_type)) —

    复杂功能发生更改或变得不可用时调用的回调。


Since:

API 级别 4.2.0

### **subscribeToUpdates(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Subscribes to complication. Information is sent to registered ComplicationChangedCallback method. Make sure you have registered your change callback.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果订阅成功，则为 `true`；如果无法订阅给定的复杂功能，则为 `false`


另见：

- [Toybox.Complications.registerComplicationChangeCallback](/connect-iq/api-docs/Toybox/Complications/#registerComplicationChangeCallback-instance_function)


Since:

API 级别 4.2.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if too many active subscriptions

- ([Complications.ComplicationNotFoundException](/connect-iq/api-docs/Toybox/Complications/ComplicationNotFoundException/)) —

    如果找不到给定的 complication，则抛出。


### **unsubscribeFromAllUpdates()** as **Void**

Unsubscribes from all subscribed complications

Since:

API 级别 4.2.0

### **unsubscribeFromUpdates(id as [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/))** as **Void**

Unsubscribes from complication

Parameters:

- id — ([Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/)) —

    要取消订阅的复杂功能 Td


Since:

API 级别 4.2.0

### **updateComplication(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type))** as **Void**

更新复杂功能数据。未在 \`data\` 中指定的值不会根据上次更新的内容或资源定义中指定的内容进行更新。

Parameters:

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要更新的应用复杂功能

- data — ([Complications.Data](/connect-iq/api-docs/Toybox/Complications/#Data-named_type)) —

    Updated values for the complication


Since:

API 级别 4.2.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if the id of the complication is not associated with this application
