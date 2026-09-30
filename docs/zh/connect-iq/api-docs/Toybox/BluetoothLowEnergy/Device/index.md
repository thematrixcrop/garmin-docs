---
title: "Class: Toybox.BluetoothLowEnergy.Device"
---
# Class: Toybox.BluetoothLowEnergy.Device

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)


[show all](#)

## 概述

Represents a Bluetooth Low Energy Device that has been paired with the system.

This class cannot be instantiated, access to paired system devices is done through the use of [getPairedDevices()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#getPairedDevices-instance_function) or by calling [pairDevice()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#pairDevice-instance_function) after receiving a [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) for a device

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    Retrieves the Name of the sensor according to the device name that is available in the GAP Service.

- [**getService**](#getService-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) or **Null**

    Retrieves the service with a specified UUID If access to a specific service is required, use this function to directly access the service based on a UUID.

- [**getServices**](#getServices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Retrieves an Iterator over the services provided by the device.

- [**isBonded**](#isBonded-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Gets the Bonded State of the Device.

- [**isConnected**](#isConnected-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Gets the connected status of the device.

- [**requestBond**](#requestBond-instance_function)() as **Void**

    Requests that a bond is formed with the Device If the device is not currently bonded this will initiate the bonding procedure.


## 实例方法详情

### **getName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Retrieves the Name of the sensor according to the device name that is available in the GAP Service

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    the name of the device. `null` if the device is not connected or name has not been received yet.


Since:

API 级别 3.1.0

### **getService(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) or **Null**

Retrieves the service with a specified UUID

If access to a specific service is required, use this function to directly access the service based on a UUID.

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    The UUID of the service to search for


Returns:

- [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) —

    The service represented by the UUID if the service exists or, `null` if the service does not exist or the UUID has not been registered


Since:

API 级别 3.1.0

### **getServices()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Retrieves an Iterator over the services provided by the device.

This will only provide Services that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Iterator of [Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) objects provided by a device.


Since:

API 级别 3.1.0

### **isBonded()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Gets the Bonded State of the Device

:::details 支持的设备

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
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the device is bonded `false` if the device is not bonded


Since:

API 级别 4.2.5

### **isConnected()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Gets the connected status of the device

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the sensor is connected `false` if sensor is disconnected


Since:

API 级别 3.1.0

### **requestBond()** as **Void**

Requests that a bond is formed with the Device

If the device is not currently bonded this will initiate the bonding procedure.

操作完成后，将以便用操作状态调用已注册 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上的 [onEncryptionStatus()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onEncryptionStatus-instance_function)

:::details 支持的设备

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
-   GPSMAP® H1 / H1i Plus
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.2.5

Throws:

- ([BluetoothLowEnergy.InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/)) —

    if the device is not connected or is already bonded.
