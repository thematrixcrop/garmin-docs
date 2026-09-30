---
title: "Class: Toybox.WatchUi.SimpleDataField"
---
# Class: Toybox.WatchUi.SimpleDataField

Inherits:

Toybox.WatchUi.DataField

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/)

- [Toybox.WatchUi.SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/)


[show all](#)

## 概述

Create a SimpleDataField.

A SimpleDataField is a special View that automatically provides [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) once per second via the [compute()](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/#compute-instance_function) method.

Just like in a [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/), a SimpleDataField automatically provides [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) once per second via the [compute()](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/#compute-instance_function) method. In exchange for the flexibility offered in a DataField, all field layout is handled automatically in a SimpleDataField.

A SimpleDataField requires two items:

- A [compute()](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/#compute-instance_function) method should return the value to be displayed by the SimpleDataField. Allowed types are Number, Float, Long, Double, Duration, and String.

- A "label" variable, which should be assigned a String label for the field.


## 另见：

- [Toybox.WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/)

- [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)


注意：

The system will call the onUpdate() method inherited from View when a Data Field is displayed by the system. Because compute() and onUpdate() are asynchronous, there is no guarantee that compute() will be called before onUpdate(). For this reason, variables should never be initialized in compute().

Example:

A SimpleDataField that displays current heart rate

```
using Toybox.WatchUi;

class MySimpleHRField extends WatchUi.SimpleDataField {

    // Set the label of the field here
    function initialize() {
        SimpleDataField.initialize();
        label = "My Current HR";
    }

    // Specify the Activity info to display in the field here
    function compute(info) {
        return info.currentHeartRate;
    }
}
```

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


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

## 实例成员摘要 [collapse](#)

- [**label**](#label-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    字段标签 String。


## 实例方法摘要 [collapse](#)

- [**compute**](#compute-instance_function)(info as [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    在 SimpleDataField 中获取 [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)。

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

字段标签 String。

Since:

API 级别 1.0.0

## 实例方法详情

### **compute(info as [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/))** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

在 SimpleDataField 中获取 [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)。

This method is called once per second and automatically provides [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/) to the SimpleDataField object for display or additional computation. It is necessary to override `compute()` when implementing a SimpleDataField. The value to be displayed in the field must be returned by this method.

Parameters:

- info — ([Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)) —

    The updated Activity.Info object


Example:

```
function compute(info) {
    return info.currentHeartRate;
}
```

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), null —

    The value to be displayed in the field or `null`


另见：

- [Activity.Info](/connect-iq/api-docs/Toybox/Activity/Info/)


Since:

API 级别 1.0.0

### **initialize()**

Constructor

Since:

API 级别 1.0.0
