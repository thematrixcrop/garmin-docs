---
title: "Class: Toybox.Application.AudioContentProviderApp"
---
# Class: Toybox.Application.AudioContentProviderApp

Inherits:

Toybox.Application.AppBase

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)

- [Toybox.Application.AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)


[show all](#)

## 概述

The base class for audio content provider apps.

This object extends [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) and adds new methods for getting different initial view types based on what mode the app needs to be started in.

Since:

API 级别 3.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 后台

- 速览


## 实例方法摘要 [collapse](#)

- [**getContentDelegate**](#getContentDelegate-instance_function)(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type)) as [Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)

    Get a [ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/) for use by the system to get and iterate through media content on the device.

- [**getPlaybackConfigurationView**](#getPlaybackConfigurationView-instance_function)() as \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type) \] or \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) \]

    Override to provide the initial View and Input Delegate for configuring playback.

- [**getProviderIconInfo**](#getProviderIconInfo-instance_function)() as [Media.ProviderIconInfo](/connect-iq/api-docs/Toybox/Media/ProviderIconInfo/) or **Null**

    Get audio provider icon information.

- [**getSyncConfigurationView**](#getSyncConfigurationView-instance_function)() as \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type) \] or \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) \]

    Override to provide the initial View and Input Delegate for configuring sync.

- [**getSyncDelegate**](#getSyncDelegate-instance_function)() as [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) or **Null** deprecated

    Get a [SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) object that communicates sync status to the system for syncing media content to the device.

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例方法详情

### **getContentDelegate(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type))** as [Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)

Get a [ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/) for use by the system to get and iterate through media content on the device.

注意：

此方法必须在派生类中重写；若被直接调用，会导致应用崩溃。

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
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
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
-   Forerunner® 170 Music
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

Returns:

- [Media.ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/)

Since:

API 级别 3.0.0

### **getPlaybackConfigurationView()** as \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type) \] or \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) \]

Override to provide the initial View and Input Delegate for configuring playback.

注意：

此方法必须在派生类中重写；若被直接调用，会导致应用崩溃。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 以及可选的 [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)、[WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)、[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)、[WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)、[WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/)、[WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/)、[WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/) 或 [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) 的数组


Since:

API 级别 3.0.0

### **getProviderIconInfo()** as [Media.ProviderIconInfo](/connect-iq/api-docs/Toybox/Media/ProviderIconInfo/) or **Null**

Get audio provider icon information.

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
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
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
-   Forerunner® 170 Music
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

Returns:

- [Toybox::Media::ProviderIconInfo](/connect-iq/api-docs/Toybox/Media/ProviderIconInfo/) The icon for the audio content provider


Since:

API 级别 3.0.0

### **getSyncConfigurationView()** as \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type) \] or \[ [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) \]

Override to provide the initial View and Input Delegate for configuring sync.

注意：

此方法必须在派生类中重写；若被直接调用，会导致应用崩溃。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 以及可选的 [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)、[WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)、[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)、[WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/)、[WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/)、[WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/)、[WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/) 或 [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) 的数组


Since:

API 级别 3.0.0

### **getSyncDelegate()** as [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) or **Null**

**此项已弃用**

此方法可能在 System 9 之后移除。

Get a [SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/) object that communicates sync status to the system for syncing media content to the device.

Returns:

- [Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)

另见：

- [AppBase.getSyncDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getSyncDelegate-instance_function)


Since:

API 级别 3.0.0

### **initialize()**

Constructor

Since:

API 级别 3.0.0
