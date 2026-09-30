---
title: "Class: Toybox.Attention.VibeProfile"
---
# 类：Toybox.Attention.VibeProfile

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Attention.VibeProfile](/connect-iq/api-docs/Toybox/Attention/VibeProfile/)


[show all](#)

## 概述

定义振动模式。

振动有两个特征：占空比和长度。这些特征用于定义单个 VibeProfile 对象，然后可以将其与其他 VibeProfile 对象组成 Array，并传递给 vibrate() 方法。vibrate() 方法将按顺序播放 Array 中的每个 VibeProfile 对象。

Example:

构建一组 VibeProfile 对象

```
if (Attention has :vibrate) {
    vibeData =
    [
        new Attention.VibeProfile(25, 2000),
        new Attention.VibeProfile(50, 2000),
        new Attention.VibeProfile(100, 2000)
    ];
}
```

Since:

API 级别 1.0.0

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
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   epix™
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
-   Forerunner® 45
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
-   Garmin Swim™ 2
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

- [**dutyCycle**](#dutyCycle-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    振动强度。

- [**length**](#length-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    振动持续时间，单位为毫秒（ms）。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(dutyCycleVal as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), lengthVal as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))

    Constructor.


## 实例属性详情

### var dutyCycle as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

振动强度。

占空比表示感受到的振动强度，在实际应用中类似于振动频率。其值范围为 0 到 100%，其中 0 表示无振动，100 表示最强振动。

Since:

API 级别 1.0.0

另见：

- [Duty Cycle](https://en.wikipedia.org/wiki/Duty_cycle)


### var length as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

振动持续时间，单位为毫秒（ms）。

Since:

API 级别 1.0.0

## 实例方法详情

### **initialize(dutyCycleVal as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), lengthVal as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))**

Constructor

Parameters:

- dutyCycleVal — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    振动强度

- lengthVal — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    振动的时长，单位为毫秒 (ms)


Since:

API 级别 1.0.0
