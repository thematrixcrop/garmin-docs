---
title: "Module: Toybox.BluetoothLowEnergy"
---
# 模块：Toybox.BluetoothLowEnergy

## 概述

BluetoothLowEnergy 模块提供中心角色下的通用 BLE 通信功能，包括扫描外围设备、与传感器配对以及对外围设备执行 GATTC 操作的功能

此模块还提供以下几组常量：

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

读取请求失败

|
| STATUS\_WRITE\_FAIL | 14 |

API 级别 3.1.0

|

写入请求失败

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

对等方报告其密钥已丢失。

|
| STATUS\_ENCRYPTION\_SECURITY\_INSUFFICIENT | 102 |

API 级别 4.2.5

|

对等方尝试将密钥安全级别从先前的绑定状态降低

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

带响应写入

|
| WRITE\_TYPE\_DEFAULT | 1 |

API 级别 3.1.0

|

不带响应写入（默认写入类型）

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

    获取 CCCD Uuid。

- [**getAvailableConnectionCount**](#getAvailableConnectionCount-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    用于确定可用连接数量的访问器。

- [**getBondedDevices**](#getBondedDevices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取一个 Iterator，其中包含 Application 已配对且系统已保存配对信息的设备。

- [**getPairedDevices**](#getPairedDevices-instance_function)() as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

    获取应用程序可访问的所有当前已配对设备的迭代器。

- [**longToUuid**](#longToUuid-instance_function)(mostSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), leastSigBits as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)) as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    将 UUID 的长表示形式转换为 Uuid 对象。

- [**pairDevice**](#pairDevice-instance_function)(scanResult as [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) or **Null**

    将扫描中发现的外围设备与系统配对。

- [**registerProfile**](#registerProfile-instance_function)(profile as { :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :characteristics as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;{ :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :descriptors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)\> }> }) as **Void**

    注册 Bluetooth Profile 定义。调用此函数可定义应用程序中将使用的所有 Profile。

- [**setConnectionStrategy**](#setConnectionStrategy-instance_function)(connectionStrategy as [BluetoothLowEnergy.ConnectionStrategy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionStrategy-module)) as **Void**

    设置用于连接 BLE 设备的连接类型。

- [**setDelegate**](#setDelegate-instance_function)(delegate as [BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/)) as **Void**

    设置 Bluetooth 异步回调的委托处理器 一个应用只能注册 1 个委托。

- [**setScanState**](#setScanState-instance_function)(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module)) as **Void**

    启动 BLE 扫描操作。扫描开始后，接收到 Advertising 数据时，将在已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上调用 [onScanResults()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onScanResults-instance_function)。

- [**stringToUuid**](#stringToUuid-instance_function)(str as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

    将 UUID 的字符串表示形式转换为 Uuid 对象。

- [**unpairDevice**](#unpairDevice-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) as **Void**

    取消外围设备与系统的配对。如果设备已连接，BLE 子系统将断开与该设备的连接，并且不会尝试重新连接。


## 实例方法详情

### **cccdUuid()** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

获取 CCCD Uuid

Returns:

- [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/) —

    客户端特性配置描述符的 Uuid 对象


另见：

- [Toybox.BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)


Since:

API 级别 3.1.0

### **getAvailableConnectionCount()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

用于确定可用连接数量的访问器

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    可用连接数


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

    应用可用的已配对设备，类型为 [ScanResults](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)


Since:

API 级别 4.2.5

### **getPairedDevices()** as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)

获取应用程序可访问的所有当前已配对设备的迭代器

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

BLE 子系统将开始搜索 scanResult 参数指定的设备。找到并连接设备后，将在已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上调用 [onConnectedStateChanged()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onConnectedStateChanged-instance_function)，并传入关联的 [Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) 对象

此配对不会跨应用实例持久化。

Parameters:

- scanResult — ([BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/)) —

    应与设备配对的扫描结果。不能为 `null`。


Returns:

- [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/) —

    添加到已配对列表中的设备；如果设备无法配对，则为 `null`。


Since:

API 级别 3.1.0

Throws:

- ([BluetoothLowEnergy.DevicePairException](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/DevicePairException/)) —

    如果已达到配对设备的最大数量，或因未知原因导致配对失败，则抛出


### **registerProfile(profile as { :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :characteristics as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;{ :uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), :descriptors as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)\> }> })** as **Void**

注册 Bluetooth Profile 定义

调用此函数定义应用中将使用的所有 Profile。执行 GATT 操作时，只有已注册的特征和描述符可用

操作完成后，将在已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上调用 [onProfileRegister()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onProfileRegister-instance_function)，并传入 UUID 和 Status。

如果注册的 Profile 太多，注册可能会失败；当前限制为 3 个。

Parameters:

- profile — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Profile 定义。定义预期的 Profile UUID、Profile 特征和特征描述符。不能为 `null`。


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

默认值为 CONNECTION\_TYPE\_DEFAULT。使用 CONNECTION\_TYPE\_SECURE\_PAIR\_BOND 的值将在配对过程中对设备进行配对和绑定。

Parameters:

- connectionStrategy — ([BluetoothLowEnergy.ConnectionStrategy](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionStrategy-module)) —

    用于连接所有 BLE 设备的所需连接类型。


Since:

API 级别 5.1.0

### **setDelegate(delegate as [BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/))** as **Void**

设置 Bluetooth 异步回调的委托处理器

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

开始 BLE 扫描操作

扫描开始后，接收到 Advertising 数据时，将在已注册的 [BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/) 上调用 [onScanResults()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/#onScanResults-instance_function)。

Since:

API 级别 3.1.0

### **stringToUuid(str as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)

将 UUID 的字符串表示形式转换为 Uuid 对象

Parameters:

- str — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    Uuid 的字符串表示，格式为 "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"


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

取消外围设备与系统的配对

如果设备已连接，BLE 子系统将断开与设备的连接，且不会尝试重新连接。如果设备未连接，系统将停止搜索设备。

Parameters:

- device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    要从已配对设备存储中移除的设备。不能为 `null`


Since:

API 级别 3.1.0
