---
title: "Class: Toybox.WatchUi.ProgressBar"
---
# Class: Toybox.WatchUi.ProgressBar

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/)


[show all](#)

## 概述

A representation of an on-screen progress bar.

A ProgressBar is a special View that presents the user with a progress indicator. These can display a string and either an incremental progress bar from 0-100% or a "busy" indicator. A ProgressBar is pushed using [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function), which provides either `null` or a [BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/). If a BehaviorDelegate is provided, the [onBack()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onBack-instance_function) method will be called if Back button is pressed while the ProgressBar is displayed.

注意：

The look and feel of a progress bar is device-specific.

Example:

Create a simple busy progress indicator

```
using Toybox.WatchUi;

class MyProgressDelegate extends Ui.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onBack() {
        return true;
    }
}

class MyBehaviorDelegate extends Ui.BehaviorDelegate {
    var progressBar;

    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onSelect() {
        progressBar = new WatchUi.ProgressBar(
            "Processing...",
            null
        );
        Ui.pushView(
            progressBar,
            new MyProgressDelegate(),
            Ui.SLIDE_DOWN
        );
        return true;
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

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(displayString as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), startValue as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**)

    Constructor.

- [**setDisplayString**](#setDisplayString-instance_function)(displayString as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as **Void**

    设置要在 ProgressBar 上显示的字符串。

- [**setProgress**](#setProgress-instance_function)(progressValue as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**) as **Void**

    设置 ProgressBar 的值。


## 实例方法详情

### **initialize(displayString as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), startValue as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**)**

Constructor

Parameters:

- displayString — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要在 ProgressBar 上显示的字符串。

- startValue — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The initial value for the ProgressBar:

- 从 0 到 100 的增量

- `null` 表示“忙”



Since:

API 级别 1.0.0

### **setDisplayString(displayString as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as **Void**

设置要在 ProgressBar 上显示的字符串。

Parameters:

- displayString — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要在 ProgressBar 上显示的字符串。


Since:

API 级别 1.0.0

### **setProgress(progressValue as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or **Null**)** as **Void**

设置 ProgressBar 的值。

Parameters:

- progressValue — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The current value of the ProgressBar:

- 从 0 到 100 的增量

- `null` 表示“忙”



Since:

API 级别 1.0.0
