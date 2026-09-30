---
title: "Module: Toybox.BluetoothLowEnergy"
---
# 模块：Toybox.BluetoothLowEnergy

## 概述

The BluetoothLowEnergy module provides access to Generic BLE communication functionality in the central role. Including the ability to scan for peripheral devices, pair with sensors, and performing GATTC operations on a peripheral

This module also provides several sets of constants:

Since:

API 级别 3.1.0

应用类型与运行时上下文：

- 音频内容提供者

- 后台

- 数据字段

- 速览

- 手表应用

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
-   Descent™ G1 / G1 Solar
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
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
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

需要权限：

- BluetoothLowEnergy


## 命名空间下的类

类：[BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/), [Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), [Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), [Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), [DevicePairException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/DevicePairException/), [InvalidRequestException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/InvalidRequestException/), [Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/), [ProfileRegistrationException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ProfileRegistrationException/), [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/), [Service](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Service/), [Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), [UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/)

## 常量摘要

### Status

Since:

API 级别 3.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| STATUS\_SUCCESS | 0 |
API 级别 3.1.0

|

操作成功

|
| STATUS\_NOT\_ENOUGH\_RESOURCES | 1 |

API 级别 3.1.0

|

由于资源不足，操作失败

|
| STATUS\_READ\_FAIL | 12 |

API 级别 3.1.0

|

Read Request Failed

|
| STATUS\_WRITE\_FAIL | 14 |

API 级别 3.1.0

|

Write Request Failed

|
| STATUS\_GATT\_INSUFFICIENT\_AUTHENTICATION\_FAIL | 18 |

API 级别 4.2.5

|

GATT 操作因身份验证不足而失败

|
| STATUS\_GATT\_INSUFFICIENT\_ENCRYPTION\_FAIL | 19 |

API 级别 4.2.5

|

GATT 操作因加密不足而失败

|
| STATUS\_ENCRYPTION\_BOND\_FAIL | 100 |

API 级别 4.2.5

|

初始配对过程失败

|
| STATUS\_ENCRYPTION\_PEER\_KEYS\_LOST | 101 |

API 级别 4.2.5

|

Peer reports that its keys have been lost.

|
| STATUS\_ENCRYPTION\_SECURITY\_INSUFFICIENT | 102 |

API 级别 4.2.5

|

Peer Attempted to Reduce Key Security Level from a previous bond

|

### ScanState

Since:

API 级别 3.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SCAN\_STATE\_OFF | 0 |
API 级别 3.1.0

|

BLE 扫描已禁用

|
| SCAN\_STATE\_SCANNING | 1 |

API 级别 3.1.0

|

BLE 扫描已启用

|

### ConnectionState

Since:

API 级别 3.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONNECTION\_STATE\_DISCONNECTED | 0 |
API 级别 3.1.0

|

设备已断开连接

|
| CONNECTION\_STATE\_CONNECTED | 1 |

API 级别 3.1.0

|

设备已连接

|
| CONNECTION\_STATE\_REJECTED | 2 |

API 级别 5.1.0

|

由于安全性不足，用户拒绝了设备连接

|

### WriteType

Since:

API 级别 3.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WRITE\_TYPE\_WITH\_RESPONSE | 0 |
API 级别 3.1.0

|

Write with response

|
| WRITE\_TYPE\_DEFAULT | 1 |

API 级别 3.1.0

|

Write without response (Default write type)

|

### ConnectionStrategy

Since:

API 级别 3.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONNECTION\_STRATEGY\_DEFAULT | 0 |
API 级别 5.1.0

|

配对设备，之后可能会请求绑定。

|
| CONNECTION\_STRATEGY\_SECURE\_PAIR\_BOND | 1 |

API 级别 5.1.0

|

配对设备并建立安全绑定。设备可能会在配对过程中完成绑定。

|

## 实例方法摘要 [collapse](#)

- [**cccdUuid**](#cccdUuid-instance_function)() as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    Retrieves the CCCD Uuid.

- [**getAvailableConnectionCount**](#getAvailableConnectionCount-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    用于确定可用连接数量的访问器。

- [**getBondedDevices**](#getBondedDevices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取一个 Iterator，其中包含 Application 已配对且系统已保存配对信息的设备。

- [**getPairedDevices**](#getPairedDevices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    Retrieve an Iterator of all currently paired devices accessible to the Application.

- [**longToUuid**](#longToUuid-instance_function)(mostSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), leastSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)) as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    将 UUID 的长表示形式转换为 Uuid 对象。

- [**pairDevice**](#pairDevice-instance_function)(scanResult as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) or **Null**

    将扫描中发现的外围设备与系统配对。

- [**registerProfile**](#registerProfile-instance_function)(profile as { :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :characteristics as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;{ :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :descriptors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)\> }> }) as **Void**

    Registers a Bluetooth Profile Definition Call this function to define all of the Profiles that will be used in the application.

- [**setConnectionStrategy**](#setConnectionStrategy-instance_function)(connectionStrategy as [BluetoothLowEnergy.ConnectionStrategy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionStrategy-module)) as **Void**

    设置用于连接 BLE 设备的连接类型。

- [**setDelegate**](#setDelegate-instance_function)(delegate as [BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/)) as **Void**

    Sets the Delegate Handler for Bluetooth Asynchronous Callbacks An application can only have 1 registered delegate.

- [**setScanState**](#setScanState-instance_function)(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module)) as **Void**

    Starts the BLE Scanning Operations Once scanning is started [onScanResults()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onScanResults-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) as Advertising data is received.

- [**stringToUuid**](#stringToUuid-instance_function)(str as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    将 UUID 的字符串表示形式转换为 Uuid 对象。

- [**unpairDevice**](#unpairDevice-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) as **Void**

    Unpairs a peripheral device from the system If the device is connected the BLE Subsystem will disconnect from the device and will not attempt to reconnect.


## 实例方法详情

### **cccdUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

Retrieves the CCCD Uuid

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    Uuid Object for the Client Characteristic Configuration Descriptor


另见：

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


Since:

API 级别 3.1.0

### **getAvailableConnectionCount()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

用于确定可用连接数量的访问器

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of available connections


Since:

API 级别 3.1.0

### **getBondedDevices()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取一个 Iterator，其中包含 Application 已配对且系统已保存配对信息的设备。

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

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    Bonded devices available to the App as [ScanResults](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)


Since:

API 级别 4.2.5

### **getPairedDevices()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

Retrieve an Iterator of all currently paired devices accessible to the Application

Returns:

- [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/) —

    应用可用的所有已配对设备


Since:

API 级别 3.1.0

### **longToUuid(mostSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), leastSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/))** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

将 UUID 的长表示形式转换为 Uuid 对象

Parameters:

- mostSigBits — ([Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)) —

    UUID 的最高有效 64 位

- leastSigBits — ([Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)) —

    UUID 的最低有效 64 位


Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    Uuid 对象


另见：

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


Since:

API 级别 3.1.0

### **pairDevice(scanResult as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/))** as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) or **Null**

将扫描中发现的外围设备与系统配对。

The BLE Subsystem will begin to search for the device specified by the scanResult parameter. Once the device is found and connected, [onConnectedStateChanged()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onConnectedStateChanged-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) with the associated [Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) object

This pairing does not persist across application instances.

Parameters:

- scanResult — ([BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) —

    应与设备配对的扫描结果。不能为 `null`。


Returns:

- [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) —

    the device that was added to the paired list or `null` if the device could not be paired.


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.DevicePairException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/DevicePairException/)) —

    Thrown if the maximum number of paired devices has already been reached, or if pairing failed for unkown reason


### **registerProfile(profile as { :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :characteristics as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;{ :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :descriptors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)\> }> })** as **Void**

Registers a Bluetooth Profile Definition

调用此函数定义应用中将使用的所有 Profile。执行 GATT 操作时，只有已注册的特征和描述符可用

When the operation is completed, [onProfileRegister()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onProfileRegister-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) with the UUID and a Status.

Registration can fail if too many profiles are registered, the current limit is 3.

Parameters:

- profile — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Profile Definition. Defines the expected Profile UUID, Profile Characteristics and Characteristic Descriptors. Cannot be `null`.


Example:

```
using Toybox.BluetoothLowEnergy;

   function registerProfiles() {
       var profile = {                                                  // Set the Profile
           :uuid => Ble.stringToUuid("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),
           :characteristics => [ {                                      // Define the characteristics
                   :uuid => Ble.stringToUuid("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),     // UUID of the first characteristic
                   :descriptors => [                                    // Descriptors of the characteristic
                       Ble.stringToUuid("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),
                       Ble.stringToUuid("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") ] }, {
                   :uuid => Ble.stringToUuid("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx") }]   // UUID of the second characteristic
       };

       // Make the registerProfile call
       BluetoothLowEnergy.registerProfile( profile );
  }
```

Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.ProfileRegistrationException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ProfileRegistrationException/)) —

    如果无法完成注册


### **setConnectionStrategy(connectionStrategy as [BluetoothLowEnergy.ConnectionStrategy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionStrategy-module))** as **Void**

设置用于连接 BLE 设备的连接类型。

注意：

The default value is CONNECTION\_TYPE\_DEFAULT. Using the value of CONNECTION\_TYPE\_SECURE\_PAIR\_BOND will pair and bond the device as part of the pairing process.

Parameters:

- connectionStrategy — ([BluetoothLowEnergy.ConnectionStrategy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionStrategy-module)) —

    The desired connection type to use for connecting to all the BLE devices.


Since:

API 级别 5.1.0

### **setDelegate(delegate as [BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/))** as **Void**

Sets the Delegate Handler for Bluetooth Asynchronous Callbacks

一个应用只能注册一个委托。后续调用此函数将覆盖当前委托

Parameters:

- delegate — ([BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/)) —

    要注册为回调处理程序的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 类的实现，或用于注销当前处理程序的 `null`。


Example:

```
using Toybox.BluetoothLowEnergy as Ble;
class Handler extends Ble.BleDelegate {
    function initialize() {
        BleDelegate.initialize();
    }
}

var handler = new Handler();
Ble.setDelegate(handler);
```

Since:

API 级别 3.1.0

### **setScanState(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module))** as **Void**

Starts the BLE Scanning Operations

Once scanning is started [onScanResults()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onScanResults-instance_function) will be called on the registered [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) as Advertising data is received.

Since:

API 级别 3.1.0

### **stringToUuid(str as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

将 UUID 的字符串表示形式转换为 Uuid 对象

Parameters:

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    String Representation of the Uuid formatted as "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"


Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    Uuid 对象


另见：

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.UuidFormatException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/UuidFormatException/)) —

    如果字符串格式无效


### **unpairDevice(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/))** as **Void**

Unpairs a peripheral device from the system

如果设备已连接，BLE 子系统将断开与设备的连接，且不会尝试重新连接。如果设备未连接，系统将停止搜索设备。

Parameters:

- device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    the device to remove from the paired device store. Cannot be `null`


Since:

API 级别 3.1.0
