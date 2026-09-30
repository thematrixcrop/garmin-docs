---
title: "类：Toybox.PersistedContent.Route"
---
# 类：Toybox.PersistedContent.Route

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.PersistedContent.Route](/connect-iq/api-docs/Toybox/PersistedContent/Route/)


[显示全部](#)

## 概述

设备上以 .GPX 格式保存的 Route。

## 另见：

- [PersistedContent.getRoutes()](/connect-iq/api-docs/Toybox/PersistedContent/#getRoutes-instance_function)


起始版本：

API 级别 2.2.0

:::details 支持的设备

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
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
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rino® 7 Series
-   Venu® X1

:::

## 实例方法摘要 [collapse](#)

- [**getId**](#getId-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取唯一的可序列化 id。

- [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    获取内容的可读名称。

- [**remove**](#remove-instance_function)() as **Void**

    移除一条路线。

- [**toIntent**](#toIntent-instance_function)() as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

    获取内容的系统 Intent。


## 实例方法详情

### **getId()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取唯一的可序列化 id

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    唯一的可序列化 id


起始版本：

API 级别 2.2.0

### **getName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

获取内容的可读名称

返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    可读名称


起始版本：

API 级别 2.2.0

### **remove()** as **Void**

移除一条路线

起始版本：

API 级别 3.0.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    若给定内容不属于调用方应用则抛出。


### **toIntent()** as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

获取内容的系统 Intent

返回：

- [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) —

    内容的 System.Intent


起始版本：

API 级别 2.2.0
