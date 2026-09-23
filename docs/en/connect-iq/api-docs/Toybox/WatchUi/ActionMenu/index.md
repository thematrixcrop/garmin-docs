---
title: "Class: Toybox.WatchUi.ActionMenu"
---
# Class: Toybox.WatchUi.ActionMenu

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.WatchUi.ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/)


[show all](#)

## Overview

Class that represents an action menu view.

Since:

API Level 3.4.0

App Types and Runtime Contexts:

-   Audio Content Provider

-   Data Field

-   Glance

-   Watch App

-   Watch Face

-   Widget


:::details Supported Devices

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

## Typedef Summary [collapse](#)

-   [**Options**](#Options-named_type) as { :theme as [WatchUi.ActionMenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module) }

## Instance Method Summary [collapse](#)

-   [**addItem**](#addItem-instance_function)(item as [WatchUi.ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/)) as **Void**

    Add Menuitem to an ActionMenu.

-   [**initialize**](#initialize-instance_function)(options as [ActionMenu.Options](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/#Options-named_type) or **Null**)

    Constructor for the ActionMenu.


## Typedef Details

### **Options** as { :theme as [WatchUi.ActionMenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module) }

Since:

API Level 3.4.0

## Instance Method Details

### **addItem(item as [WatchUi.ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/))** as **Void**

Add Menuitem to an ActionMenu

Parameters:

-   item — ([WatchUi.ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/)) —

    The ActionMenuItem to add to the ActionMenu


Since:

API Level 3.4.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if item is not an [ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/)


### **initialize(options as [ActionMenu.Options](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/#Options-named_type) or **Null**)**

Constructor for the ActionMenu.

Parameters:

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Options for the ActionMenu.

    -   :theme — ([WatchUi.ActionMenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module)) —

        theme for the action menu UI.


Since:

API Level 3.4.0

Throws:

-   ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    If invalid theme is provided
