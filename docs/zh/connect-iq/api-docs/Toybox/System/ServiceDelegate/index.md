---
title: "Class: Toybox.System.ServiceDelegate"
---
# Class: Toybox.System.ServiceDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)


[show all](#)

## 概述

ServiceDelegate is a class used to service [Background](/connect-iq/api-docs/Toybox/Background/) events.

This class is used as the main entry point for background processes. A callback function within the delegate can be used to initiate other system events (e.g. [Communications](/connect-iq/api-docs/Toybox/Communications/)), but only the delegate function is guaranteed to complete. The Background process may be shut down at any time to handle higher priority processes.

## 另见：

- [Toybox.Background](/connect-iq/api-docs/Toybox/Background/)


Example:

```
using Toybox.Background;
using Toybox.Communications;
using Toybox.System;

(:background)
class MyServiceDelegate extends System.ServiceDelegate {
    // When a scheduled background event triggers, make a request to
    // a service and handle the response with a callback function
    // within this delegate.
    function onTemporalEvent() {
        Communications.makeWebRequest(
            "https://myrequesturl.com",
            {},
            {},
            method(:responseCallback)
        );
    }

    function responseCallback(responseCode, data) {
        // Do stuff with the response data here and send the data
        // payload back to the app that originated the background
        // process.
        Background.exit(backgroundData);
    }
}
```

Since:

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**onActivityCompleted**](#onActivityCompleted-instance_function)(activity as { :sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), :subSport as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) }) as **Void**

    The callback method that is triggered when an activity is completed.

- [**onGoalReached**](#onGoalReached-instance_function)(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) as **Void**

    A callback method that is triggered in the background when a fitness goal is reached.

- [**onOAuthResponse**](#onOAuthResponse-instance_function)() as **Void**

    The callback method that is triggered in the background when an OAuth response is received from the system.

- [**onPhoneAppMessage**](#onPhoneAppMessage-instance_function)(msg as [Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/)) as **Void**

    The callback method that is triggered when a phone app message arrives for this app.

- [**onSleepTime**](#onSleepTime-instance_function)() as **Void**

    The callback method that is triggered in the background at the configured sleep time.

- [**onSteps**](#onSteps-instance_function)() as **Void**

    The callback method that is triggered in the background when a step goal is reached.

- [**onTemporalEvent**](#onTemporalEvent-instance_function)() as **Void**

    A callback method that is triggered in the background when time-based events occur.

- [**onWakeTime**](#onWakeTime-instance_function)() as **Void**

    A callback method that is triggered in the background at the configured wake time.


## 实例方法详情

### **onActivityCompleted(activity as { :sport as [Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module), :subSport as [Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module) })** as **Void**

The callback method that is triggered when an activity is completed

Parameters:

- activity — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A dictionary containing information about the completed activity.

- :sport — ([Activity.Sport](/connect-iq/api-docs/Toybox/Activity/#Sport-module)) —

        The primary sport of the completed activity.

- :subSport — ([Activity.SubSport](/connect-iq/api-docs/Toybox/Activity/#SubSport-module)) —

        The sport subcategory of the completed activity.


Since:

API 级别 3.0.10

### **onGoalReached(goalType as [Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module))** as **Void**

A callback method that is triggered in the background when a fitness goal is reached.

Parameters:

- goalType — ([Application.GoalType](/connect-iq/api-docs/Toybox/Application/#GoalType-module)) —

    An Application.GOAL\_TYPE\_\* value, representing the goal type that is being registered.


Since:

API 级别 2.3.0

### **onOAuthResponse()** as **Void**

The callback method that is triggered in the background when an OAuth response is received from the system

Since:

API 级别 2.3.0

### **onPhoneAppMessage(msg as [Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/))** as **Void**

The callback method that is triggered when a phone app message arrives for this app

Parameters:

- msg — ([Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/)) —

    The message received.


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
-   Descent™ G1 / G1 Solar
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
-   Edge® 130 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
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
-   Forerunner® 55
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
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 3.2.0

### **onSleepTime()** as **Void**

The callback method that is triggered in the background at the configured sleep time.

Since:

API 级别 2.3.0

### **onSteps()** as **Void**

The callback method that is triggered in the background when a step goal is reached.

Step goals occur at 1000 step increments.

Since:

API 级别 2.3.0

### **onTemporalEvent()** as **Void**

A callback method that is triggered in the background when time-based events occur.

Since:

API 级别 2.3.0

### **onWakeTime()** as **Void**

A callback method that is triggered in the background at the configured wake time.

Since:

API 级别 2.3.0
