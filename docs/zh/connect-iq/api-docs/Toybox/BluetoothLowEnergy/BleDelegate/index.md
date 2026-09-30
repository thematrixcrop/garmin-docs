---
title: "Class: Toybox.BluetoothLowEnergy.BleDelegate"
---
# 类：Toybox.BluetoothLowEnergy.BleDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/)


[show all](#)

## 概述

用于 Bluetooth Low Energy 回调的委托类。

应用必须扩展此类，并使用 [setDelegate()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setDelegate-instance_function) 注册一个实例到 BLE 子系统，以支持异步操作。

Since:

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**onCharacteristicChanged**](#onCharacteristicChanged-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    通过启用该特征的 CCCD 中相应的位来启用通知或指示后，每次特征发生更改时都会调用此函数。

- [**onCharacteristicRead**](#onCharacteristicRead-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    使用 [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestRead-instance_function) 请求读取特征后，操作完成时将调用此函数。

- [**onCharacteristicWrite**](#onCharacteristicWrite-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    使用 [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestWrite-instance_function) 请求写入特征后，操作完成时将调用此函数。

- [**onConnectedStateChanged**](#onConnectedStateChanged-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), state as [BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module)) as **Void**

    设备配对后，将在建立连接后调用此方法。

- [**onDescriptorRead**](#onDescriptorRead-instance_function)(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    使用 [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestRead-instance_function) 请求读取描述符后，操作完成时将调用此函数。

- [**onDescriptorWrite**](#onDescriptorWrite-instance_function)(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    使用 [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestWrite-instance_function) 请求写入描述符后，操作完成时将调用此函数。

- [**onEncryptionStatus**](#onEncryptionStatus-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    请求建立新的绑定或重新连接到之前已建立绑定的设备后，将使用当前加密状态调用此函数。

- [**onProfileRegister**](#onProfileRegister-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    注册 UUID 后，此回调将通知注册请求的结果。

- [**onScanResults**](#onScanResults-instance_function)(scanResults as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)) as **Void**

    如果扫描正在运行，则在收到新的 ScanResults 时调用此函数。

- [**onScanStateChange**](#onScanStateChange-instance_function)(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    扫描状态发生修改时，系统将使用新状态以及上次调用 [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function) 的结果状态调用此函数。


## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 3.1.0

### **onCharacteristicChanged(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

通过启用该特征的 CCCD 中相应的位来启用通知或指示后，每次特征发生更改时都会调用此函数。

Parameters:

- characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that changed

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    The updated value of the characteristic


Since:

API 级别 3.1.0

### **onCharacteristicRead(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

使用 [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestRead-instance_function) 请求读取特征后，操作完成时将调用此函数。

Parameters:

- characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that was read.

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    表示操作结果的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    已读取的特征值。如果状态不是 [STATUS\_SUCCESS](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)，则为 `null`


Since:

API 级别 3.1.0

### **onCharacteristicWrite(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

使用 [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestWrite-instance_function) 请求写入特征后，操作完成时将调用此函数。

Parameters:

- characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that was written.

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    表示操作结果的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)


Since:

API 级别 3.1.0

### **onConnectedStateChanged(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), state as [BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module))** as **Void**

设备配对后，将在建立连接后调用此方法

Parameters:

- device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    已更改的设备状态。

- state — ([BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module)) —

    一个表示连接状态的 [CONNECTION\_STATE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#CONNECTION_STATE_DISCONNECTED-const)


Since:

API 级别 3.1.0

### **onDescriptorRead(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

使用 [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestRead-instance_function) 请求读取描述符后，操作完成时将调用此函数。

Parameters:

- descriptor — ([BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)) —

    The descriptor that was read

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    表示操作结果的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)

- value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    已读取的描述符值。当状态不是 [STATUS\_SUCCESS](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) 时为 `null`


Since:

API 级别 3.1.0

### **onDescriptorWrite(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

使用 [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestWrite-instance_function) 请求写入描述符后，操作完成时将调用此函数。

Parameters:

- descriptor — ([BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)) —

    The descriptor that was written

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    表示操作结果的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)


Since:

API 级别 3.1.0

### **onEncryptionStatus(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

请求建立新的绑定或重新连接到之前已建立绑定的设备后，将使用当前加密状态调用此函数。

Parameters:

- device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    已更改的设备状态。

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    一个表示加密操作状态的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)。


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

### **onProfileRegister(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

注册 UUID 后，此回调将通知注册请求的结果

Parameters:

- uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    此回调所关联的 Profile UUID

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    一个表示调用 [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function) 结果的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)


Since:

API 级别 3.1.0

### **onScanResults(scanResults as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/))** as **Void**

如果扫描正在运行，则在收到新的 ScanResults 时调用此函数

Parameters:

- scanResults — ([BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)) —

    自上次调用此回调以来所看到的所有广告的 [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) 对象迭代器


Since:

API 级别 3.1.0

### **onScanStateChange(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

扫描状态发生修改时，系统将使用新状态以及上次调用 [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function) 的结果状态调用此函数。

Parameters:

- scanState — ([BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module)) —

    一个表示系统新扫描状态的 [SCAN\_STATE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#SCAN_STATE_OFF-const) 枚举值

- status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    上次调用 [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function) 的 [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) 结果


Since:

API 级别 3.1.0
