---
title: "类：Toybox.Communications.SyncDelegate"
---
# 类：Toybox.Communications.SyncDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)


[show all](#)

## 概述

用户实现的委托对象，用于响应系统发出的同步请求。

起始版本：

API 级别 3.1.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
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
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
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
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
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
-   GPSMAP® H1 / H1i Plus
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

- [**isSyncNeeded**](#isSyncNeeded-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查是否需要同步。

- [**onStartSync**](#onStartSync-instance_function)() as **Void**

    系统启动同步时调用。

- [**onStopSync**](#onStopSync-instance_function)() as **Void**

    活动同步被取消时调用。


## 实例方法详情

### **isSyncNeeded()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查是否需要同步。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

- 当值为 `true` 时，需要同步

- 当值为 `false` 时，不需要同步；如果为此应用触发同步，则不会调用 [onStartSync](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/#onStartSync-instance_function)



起始版本：

API 级别 3.1.0

### **onStartSync()** as **Void**

系统启动同步时调用。

应使用此方法启动应用同步过程。这包括获取准备同步所需数据的任何设置工作，以及首次调用 [makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 以下载第一段内容。请注意，使用此方法时，必须手动将 makeWebRequest() 调用串联起来。此外，必须间歇性调用 [notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function)，以便在设备的原生用户界面中显示同步进度更新。最后，必须在同步成功完成或发生错误时调用 [notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function)，以便正确通知设备同步过程已结束。

起始版本：

API 级别 3.1.0

### **onStopSync()** as **Void**

活动同步被取消时调用。

用户取消活动同步时会调用此方法。应用负责调用 [cancelAllRequests()](/connect-iq/api-docs/Toybox/Communications/#cancelAllRequests-instance_function)，以取消为同步过程发出的任何请求。应用还负责通过调用 [notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function) 通知系统同步已成功取消。

起始版本：

API 级别 3.1.0
