---
title: "Class: Toybox.Ant.GenericChannel"
---
# Class: Toybox.Ant.GenericChannel

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.GenericChannel](/connect-iq/api-docs/Toybox/Ant/GenericChannel/)


[show all](#)

## 概述

A class for controlling an ANT wireless channel.

The GenericChannel provides the methods necessary for initialization, life cycle, and encryption of ANT channels.

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**close**](#close-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    关闭通用 ANT 通道。

- [**disableEncryption**](#disableEncryption-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    禁用此通道上的加密。

- [**enableEncryption**](#enableEncryption-instance_function)(configuration as [Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Set the encryption configuration and enable encryption on this channel.

- [**getDeviceConfig**](#getDeviceConfig-instance_function)() as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)

    获取当前 ANT 通道配置。

- [**initialize**](#initialize-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**, channelAssignment as [Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/))

    Constructor.

- [**open**](#open-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Open a generic ANT Channel.

- [**release**](#release-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Release the generic ANT Channel back to the system.

- [**sendAcknowledge**](#sendAcknowledge-instance_function)(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Send an acknowledge message.

- [**sendBroadcast**](#sendBroadcast-instance_function)(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Send a broadcast message.

- [**sendBurst**](#sendBurst-instance_function)(burstData as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) as **Void**

    Send an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of [Messages](/connect-iq/api-docs/Toybox/Ant/Message/) as a burst across the ANT channel.

- [**setBurstListener**](#setBurstListener-instance_function)(listener as [Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)) as **Void**

    Set the [BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/) for burst events.

- [**setDeviceConfig**](#setDeviceConfig-instance_function)(configuration as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Set the current ANT channel configuration.


## 实例方法详情

### **close()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

关闭通用 ANT 通道。

Example:

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.close();
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 1.0.0

### **disableEncryption()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

禁用此通道上的加密。

Example:

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.disableEncryption();
```

:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
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
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
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
-   fēnix® Chronos
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
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 2.3.0

### **enableEncryption(configuration as [Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Set the encryption configuration and enable encryption on this channel.

Parameters:

- configuration — ([Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)) —

    The CryptoConfig object to set for the current channel


Example:

```
using Toybox.Ant;
var cryptoConfig = new Ant.CryptoConfig({});

// Assumes a valid GenericChannel object
genericChannel.enableEncryption(cryptoConfig);
```

:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
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
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
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
-   fēnix® Chronos
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
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6
-   vívoactive® HR

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)


Since:

API 级别 2.3.0

Throws:

- ([Ant.EncryptionInvalidSettingsException](/connect-iq/api-docs/Toybox/Ant/EncryptionInvalidSettingsException/)) —

    Thrown if invalid encryption settings are used

- ([Ant.UnableToAcquireEncryptedChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireEncryptedChannelException/)) —

    Thrown if an ecrypted channel cannot be acquired because all channels are in use


### **getDeviceConfig()** as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)

获取当前 ANT 通道配置。

Example:

```
using Toybox.Ant;
var devConfig = genericChannel.getDeviceConfig();
// devConfig fields can now be accessed for configuration info
```

Returns:

- [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/) —

    The DeviceConfig object with current channel device configuration.


另见：

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


Since:

API 级别 1.0.0

### **initialize(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**, channelAssignment as [Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/))**

Constructor

Parameters:

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    The Method object to call with channel messages

- channelAssignment — ([Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/)) —

    The ChannelAssignment object for the channel


Example:

```
using Toybox.Ant;

// Assumes a listenerCallback method and ChannelAssignment object supplied
// as parameters upon initialization
GenericChannel.initialize(method(:listenerCallback), channelAssign);
```

Since:

API 级别 1.0.0

Throws:

- ([Ant.UnableToAcquireChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireChannelException/)) —

    Thrown if the the system does not have a channel available.


### **open()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Open a generic ANT Channel.

注意：

Multitasking: Ant channel connection can not be changed while in inacitve mode and ant channels opened during active mode will be closed when app becomes inactive, and re-opened automatically when is active again. These state changes are denoted by calls to AppBase.onActive() and AppBase.onInactive().

Example:

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.open();
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 1.0.0

### **release()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Release the generic ANT Channel back to the system.

If the channel is open it will be automatically closed.

Example:

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.release();
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


Since:

API 级别 1.0.0

### **sendAcknowledge(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Send an acknowledge message.

You can expect to receive either [MSG\_CODE\_EVENT\_TRANSFER\_TX\_COMPLETED](/connect-iq/api-docs/Toybox/Ant/#MSG_CODE_EVENT_TRANSFER_TX_COMPLETED-const) or [MSG\_CODE\_EVENT\_TRANSFER\_TX\_FAILED](/connect-iq/api-docs/Toybox/Ant/#MSG_CODE_EVENT_TRANSFER_TX_FAILED-const) if the message succeeded/failed going to the recipient.

Parameters:

- data — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    其负载为由数字组成的 8 字节 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 的消息


Example:

```
using Toybox.Ant;
// create a data Array to format Message
var data = new[8];
for (var i = 0; i < 8; i++) {
    data[i] = i + 1;    // Set the values of each member
}
var message = new Ant.Message();
message.setPayload(data);   // Assumes valid data

// Assumes a valid GenericChannel object
genericChannel.sendAcknowledge(message);
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


Since:

API 级别 1.0.0

### **sendBroadcast(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Send a broadcast message.

Parameters:

- data — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    其负载为由数字组成的 8 字节 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 的消息


Example:

```
using Toybox.Ant;
// create a data Array to format Message
var data = new[8];
for (var i = 0; i < 8; i++) {
    data[i] = i + 1;    // Set the values of each member
}
var message = new Ant.Message();
message.setPayload(data);   // Assumes valid data

// Assumes a valid GenericChannel object
genericChannel.sendBroadcast(message);
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


Since:

API 级别 1.0.0

### **sendBurst(burstData as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))** as **Void**

Send an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of [Messages](/connect-iq/api-docs/Toybox/Ant/Message/) as a burst across the ANT channel.

Success or Fail is received by the [BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/).

Parameters:

- burstData — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) —

    The data to burst across the channel


Example:

```
using Toybox.Ant;
var burstData = new Ant.BurstPayload(); // Create new payload

// Message must contain a valid payload
burstData.add(message);                 // Add Message object to payload

// Assumes a valid GenericChannel object
genericChannel.sendBurst(burstData);    // Send Message
```

另见：

- [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


Since:

API 级别 2.2.0

Throws:

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **setBurstListener(listener as [Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/))** as **Void**

Set the [BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/) for burst events.

Failed bursts or those larger than the specified threshold will be discarded.

Parameters:

- listener — ([Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)) —

    An extension of the BurstListener class


Example:

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
// Assumes a valid BurstListener object as a parameter
genericChannel.setBurstListener(listener);
```

另见：

- [Toybox.Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)


Since:

API 级别 2.2.0

Throws:

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **setDeviceConfig(configuration as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Set the current ANT channel configuration.

Parameters:

- configuration — ([Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)) —

    The DeviceConfig object to set for the current ANT channel


Example:

```
using Toybox.Ant;
var configuration = new Ant.DeviceConfig({});

// Assumes a valid GenericChannel object
genericChannel.setDeviceConfig(configuration);
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


Since:

API 级别 1.0.0

Throws:

- (Lang.UnexpectedTypeError) —

    Thrown if configuration values in configuration are not of the correct type.
