---
title: "Class: Toybox.Sensor.SensorDelegate"
---
# Class: Toybox.Sensor.SensorDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Sensor.SensorDelegate](/connect-iq/api-docs/Toybox/Sensor/SensorDelegate/)


[show all](#)

## 概述

Delegate for handling native sensor pairing process.

The members of this object get called by the system to delegate scanning and pairing of different sensors.

Since:

API 级别 5.1.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
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
-   eTrex® Touch
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**onPair**](#onPair-instance_function)(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Pair the sensor.

- [**onScan**](#onScan-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Start the sensor scan process.

- [**onUnpair**](#onUnpair-instance_function)(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Unpair the sensor.

- [**pairingRequired**](#pairingRequired-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Is sensor pairing required? Is called by the system to check if sensor pairing is required.


## 实例方法详情

### **onPair(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Pair the sensor.

Is called by the system to pair the sensor, during the native sensor pairing process.

Parameters:

- sensor —

    [Toybox::Sensor::SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) object


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if the sensor was paired successfully, false otherwise


Since:

API 级别 5.1.0

### **onScan()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Start the sensor scan process.

Is called by the system to start the sensor scan process, during the native sensor pairing process.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if the scan was started successfully, false otherwise


Since:

API 级别 5.1.0

### **onUnpair(sensor as [Sensor.SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Unpair the sensor.

Is called by the system to unpair the sensor, during the native sensor removing process.

Parameters:

- sensor —

    [Toybox::Sensor::SensorInfo](/connect-iq/api-docs/Toybox/Sensor/SensorInfo/) object


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if the sensor was paired successfully, false otherwise


Since:

API 级别 5.1.0

### **pairingRequired()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Is sensor pairing required?

Is called by the system to check if sensor pairing is required.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    true if sensor pairing is required, false otherwise


Since:

API 级别 5.1.0
