---
title: "类：Toybox.WatchUi.ActionMenuItem"
---
# 类：Toybox.WatchUi.ActionMenuItem

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/)


[显示全部](#)

## 概述

表示操作菜单项的类。

起始版本：

API 级别 3.4.0

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
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G1 / G1 Solar
-   Descent™ G2
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
-   eTrex® Touch
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
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 945 LTE
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

## 类型定义摘要 [collapse](#)

- [**Options**](#Options-named_type) as { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) }

## 实例方法摘要 [collapse](#)

- [**getId**](#getId-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    获取 MenuItem 标识符。

- [**getLabel**](#getLabel-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    获取 MenuItem 标签。

- [**initialize**](#initialize-instance_function)(options as [ActionMenuItem.Options](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/#Options-named_type), identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)

    构造函数。


## 类型定义详情

### Options，格式为 { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) }

起始版本：

API 级别 3.4.0

## 实例方法详情

### **getId()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

获取 MenuItem 标识符。

返回：

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    MenuItem 的标识符。


起始版本：

API 级别 3.4.0

### **getLabel()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

获取 MenuItem 标签。

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    MenuItem 的文本标签


起始版本：

API 级别 3.4.2

### **initialize(options as [ActionMenuItem.Options](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/#Options-named_type), identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)**

构造函数

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :label — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        MenuItem 的标签字符串或字符串 ResourceId

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    此 MenuItem 的标识符


起始版本：

API 级别 3.4.0
