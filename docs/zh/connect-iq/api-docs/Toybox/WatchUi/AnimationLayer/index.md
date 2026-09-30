---
title: "类：Toybox.WatchUi.AnimationLayer"
---
# 类：Toybox.WatchUi.AnimationLayer

继承：

Toybox.WatchUi.Layer

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)

- [Toybox.WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)


[show all](#)

## 概述

表示 Animation 图层的类

起始版本：

API 级别 3.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


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
-   eTrex® Touch
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
-   GPSMAP® 67 / 67i
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® Crossover AMOLED
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**getDc**](#getDc-instance_function)() as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

    getDc 始终返回 `null`，因为用户无法更新动画的 dc 缓冲区。

- [**getResource**](#getResource-instance_function)() as [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)

    获取动画资源。

- [**initialize**](#initialize-instance_function)(rez as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)

    Constructor.

- [**play**](#play-instance_function)(options as { :delegate as [WatchUi.AnimationDelegate](/connect-iq/api-docs/Toybox/WatchUi/AnimationDelegate/) } or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    播放动画；动画必须先添加到 View 中且不能从 View 中移除，然后才能播放。

- [**stop**](#stop-instance_function)() as **Void**

    停止正在播放的动画。


## 实例方法详情

### **getDc()** as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) or **Null**

getDc 始终返回 `null`，因为用户无法更新动画的 dc 缓冲区。

起始版本：

API 级别 3.1.0

### **getResource()** as [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)

获取动画资源

返回：

- [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) —

    [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)


起始版本：

API 级别 3.1.0

### **initialize(rez as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), options as { :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :visibility as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)**

Constructor

参数：

- rez — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)) —

    动画 ResourceId 或 [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含选项的 Dictionary，可以为 `null`

- :locX — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Animation 对象在屏幕上的初始绝对 x 坐标（可选，默认为 0）

- :locY — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Animation 对象在屏幕上的初始绝对 y 坐标（可选，默认为 0）

- :identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        用于标识的唯一对象（可选）

- :visibility — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果图层可见，则为 `true`，否则为 `false`（可选，默认为 +true+）


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `rez` 不是动画资源或 ResourceId，则抛出


### **play(options as { :delegate as [WatchUi.AnimationDelegate](/connect-iq/api-docs/Toybox/WatchUi/AnimationDelegate/) } or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

播放动画；动画必须先添加到 View 中且不能从 View 中移除，然后才能播放。

此项将先停止现有播放。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含选项的 Dictionary，可以为 `null`

- :delegate — ([WatchUi.AnimationDelegate](/connect-iq/api-docs/Toybox/WatchUi/AnimationDelegate/)) —

        An [AnimationDelegate](/connect-iq/api-docs/Toybox/WatchUi/AnimationDelegate/)


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果已开始播放，则为 `true`，否则为 `false`


起始版本：

API 级别 3.1.0

### **stop()** as **Void**

停止正在播放的动画。

```
  The last frame of the animation will be persisted in the frame buffer.
```

起始版本：

API 级别 3.1.0
