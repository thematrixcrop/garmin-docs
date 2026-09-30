---
title: "Class: Toybox.BluetoothLowEnergy.Device"
---
# 类：Toybox.BluetoothLowEnergy.Device

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)


[show all](#)

## 概述

表示一个已与系统配对的 Bluetooth Low Energy 设备。

This class cannot be instantiated, access to paired system devices is done through the use of [getPairedDevices()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#getPairedDevices-instance_function) or by calling [pairDevice()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#pairDevice-instance_function) after receiving a [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) for a device

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    根据 GAP Service 中可用的设备名称获取传感器名称。

- [**getService**](#getService-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) or **Null**

    获取具有指定 UUID 的服务。如果需要访问特定服务，请使用此函数根据 UUID 直接访问该服务。

- [**getServices**](#getServices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取一个 Iterator，用于遍历设备提供的服务。

- [**isBonded**](#isBonded-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取设备的绑定状态。

- [**isConnected**](#isConnected-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取设备的连接状态。

- [**requestBond**](#requestBond-instance_function)() as **Void**

    请求与设备建立绑定。如果设备当前未绑定，则会启动绑定过程。


## 实例方法详情

### **getName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

根据 GAP Service 中可用的设备名称获取传感器名称

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    the name of the device. `null` if the device is not connected or name has not been received yet.


Since:

API 级别 3.1.0

### **getService(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/))** as [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) or **Null**

获取具有指定 UUID 的服务

如果需要访问特定服务，请使用此函数根据 UUID 直接访问该服务。

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    The UUID of the service to search for


Returns:

- [BluetoothLowEnergy.Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) —

    The service represented by the UUID if the service exists or, `null` if the service does not exist or the UUID has not been registered


Since:

API 级别 3.1.0

### **getServices()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取一个 Iterator，用于遍历设备提供的服务。

This will only provide Services that have been registered using [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    设备提供的 [Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/) 个对象的迭代器。


Since:

API 级别 3.1.0

### **isBonded()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取设备的绑定状态

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

    如果设备已绑定，则为 `true`；如果设备未绑定，则为 `false`


Since:

API 级别 4.2.5

### **isConnected()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取设备的连接状态

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果传感器已连接，则为 `true`；如果传感器已断开连接，则为 `false`


Since:

API 级别 3.1.0

### **requestBond()** as **Void**

请求与设备建立绑定

如果设备当前尚未配对，则会启动配对过程。

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

    如果设备未连接或已配对。
