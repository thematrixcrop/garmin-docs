---
title: "Class: Toybox.BluetoothLowEnergy.BleDelegate"
---
# Class: Toybox.BluetoothLowEnergy.BleDelegate

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.BluetoothLowEnergy.BleDelegate](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/BleDelegate/)


[show all](#)

## Overview

Delegate Class for Bluetooth Low Energy Callbacks.

Applications must extend this Class and register an instance with the BLE Subsystem using [setDelegate()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setDelegate-instance_function) to support asynchronous operations.

Since:

API Level 3.1.0

## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)()

    Constructor.

-   [**onCharacteristicChanged**](#onCharacteristicChanged-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    After enabling notifications or indications on a characteristic by enabling the appropriate bit of the CCCD of the characteristic this function will be called after every change to the characteristic.

-   [**onCharacteristicRead**](#onCharacteristicRead-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    After requesting a read operation on a Characteristic with [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestRead-instance_function), this function will be called when the operation is completed.

-   [**onCharacteristicWrite**](#onCharacteristicWrite-instance_function)(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    After requesting a write operation on a Characteristic with [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestWrite-instance_function), this function will be called when the operation is completed.

-   [**onConnectedStateChanged**](#onConnectedStateChanged-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), state as [BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module)) as **Void**

    After pairing a device this will be called after the connection is made.

-   [**onDescriptorRead**](#onDescriptorRead-instance_function)(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    After requesting a read operation on a Descriptor with [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestRead-instance_function) this function will be called when the operation is completed.

-   [**onDescriptorWrite**](#onDescriptorWrite-instance_function)(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    After requesting a write operation on a Descriptor with [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestWrite-instance_function) this function will be called when the operation is completed.

-   [**onEncryptionStatus**](#onEncryptionStatus-instance_function)(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    After requesting a new bond or reconnecting to a device with a previously established bond, this function will be called with the current encryption status.

-   [**onProfileRegister**](#onProfileRegister-instance_function)(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    After Registering a UUID this callback will notify of the result of the registration request.

-   [**onScanResults**](#onScanResults-instance_function)(scanResults as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)) as **Void**

    If a scan is running this will be called when new ScanResults are received.

-   [**onScanStateChange**](#onScanStateChange-instance_function)(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) as **Void**

    When the state of scanning is modified the system will call this function with the new state and a status indicating the result of the last call to [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function).


## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 3.1.0

### **onCharacteristicChanged(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

After enabling notifications or indications on a characteristic by enabling the appropriate bit of the CCCD of the characteristic this function will be called after every change to the characteristic.

Parameters:

-   characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that changed

-   value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    The updated value of the characteristic


Since:

API Level 3.1.0

### **onCharacteristicRead(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

After requesting a read operation on a Characteristic with [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestRead-instance_function), this function will be called when the operation is completed.

Parameters:

-   characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that was read.

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the result of the operation

-   value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    Characteristic value that was read. `null` if status is not [STATUS\_SUCCESS](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)


Since:

API Level 3.1.0

### **onCharacteristicWrite(characteristic as [BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

After requesting a write operation on a Characteristic with [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/#requestWrite-instance_function), this function will be called when the operation is completed.

Parameters:

-   characteristic — ([BluetoothLowEnergy.Characteristic](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Characteristic/)) —

    The characteristic that was written.

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the result of the operation


Since:

API Level 3.1.0

### **onConnectedStateChanged(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), state as [BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module))** as **Void**

After pairing a device this will be called after the connection is made

Parameters:

-   device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    the device state that was changed

-   state — ([BluetoothLowEnergy.ConnectionState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ConnectionState-module)) —

    A [CONNECTION\_STATE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#CONNECTION_STATE_DISCONNECTED-const) indicating the state of the connection


Since:

API Level 3.1.0

### **onDescriptorRead(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module), value as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

After requesting a read operation on a Descriptor with [requestRead()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestRead-instance_function) this function will be called when the operation is completed.

Parameters:

-   descriptor — ([BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)) —

    The descriptor that was read

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the result of the operation

-   value — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    Descriptor value that was read. `null` if status is not [STATUS\_SUCCESS](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const)


Since:

API Level 3.1.0

### **onDescriptorWrite(descriptor as [BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

After requesting a write operation on a Descriptor with [requestWrite()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/#requestWrite-instance_function) this function will be called when the operation is completed.

Parameters:

-   descriptor — ([BluetoothLowEnergy.Descriptor](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Descriptor/)) —

    The descriptor that was written

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the result of the operation


Since:

API Level 3.1.0

### **onEncryptionStatus(device as [BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

After requesting a new bond or reconnecting to a device with a previously established bond, this function will be called with the current encryption status.

Parameters:

-   device — ([BluetoothLowEnergy.Device](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Device/)) —

    the device state that was changed

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the status of the encryption operation.


:::details Supported Devices

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

API Level 4.2.5

### **onProfileRegister(uuid as [BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

After Registering a UUID this callback will notify of the result of the registration request

Parameters:

-   uuid — ([BluetoothLowEnergy.Uuid](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Uuid/)) —

    Profile UUID that this callback is related to

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    A [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) indicating the result of a call to [registerProfile()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#registerProfile-instance_function)


Since:

API Level 3.1.0

### **onScanResults(scanResults as [BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/))** as **Void**

If a scan is running this will be called when new ScanResults are received

Parameters:

-   scanResults — ([BluetoothLowEnergy.Iterator](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/Iterator/)) —

    An iterator of [ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) objects for all of the advertisements seen since the last call to this callback


Since:

API Level 3.1.0

### **onScanStateChange(scanState as [BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module), status as [BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module))** as **Void**

When the state of scanning is modified the system will call this function with the new state and a status indicating the result of the last call to [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function).

Parameters:

-   scanState — ([BluetoothLowEnergy.ScanState](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#ScanState-module)) —

    A [SCAN\_STATE\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#SCAN_STATE_OFF-const) enum value indicating the new Scan State of the system

-   status — ([BluetoothLowEnergy.Status](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#Status-module)) —

    The [STATUS\_\*](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#STATUS_SUCCESS-const) result of the last call to [setScanState()](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/#setScanState-instance_function)


Since:

API Level 3.1.0
