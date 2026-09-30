---
title: "类：Toybox.Ant.GenericChannel"
---
# 类：Toybox.Ant.GenericChannel

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.GenericChannel](/connect-iq/api-docs/Toybox/Ant/GenericChannel/)


[show all](#)

## 概述

用于控制 ANT 无线通道的类。

GenericChannel 提供 ANT 通道的初始化、生命周期管理和加密所需的方法。

起始版本：

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**close**](#close-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    关闭通用 ANT 通道。

- [**disableEncryption**](#disableEncryption-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    禁用此通道上的加密。

- [**enableEncryption**](#enableEncryption-instance_function)(configuration as [Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置加密配置并在此通道上启用加密。

- [**getDeviceConfig**](#getDeviceConfig-instance_function)() as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)

    获取当前 ANT 通道配置。

- [**initialize**](#initialize-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**, channelAssignment as [Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/))

    Constructor.

- [**open**](#open-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    打开通用 ANT 通道。

- [**release**](#release-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    将通用 ANT 通道释放回系统。

- [**sendAcknowledge**](#sendAcknowledge-instance_function)(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发送确认消息。

- [**sendBroadcast**](#sendBroadcast-instance_function)(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发送广播消息。

- [**sendBurst**](#sendBurst-instance_function)(burstData as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) as **Void**

    将 [Messages](/connect-iq/api-docs/Toybox/Ant/Message/) 的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 作为突发数据通过 ANT 通道发送。

- [**setBurstListener**](#setBurstListener-instance_function)(listener as [Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)) as **Void**

    设置突发事件使用的 [BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)。

- [**setDeviceConfig**](#setDeviceConfig-instance_function)(configuration as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置当前 ANT 通道配置。


## 实例方法详情

### **close()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

关闭通用 ANT 通道。

示例：

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.close();
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **disableEncryption()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

禁用此通道上的加密。

示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


起始版本：

API 级别 2.3.0

### **enableEncryption(configuration as [Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置加密配置并在此通道上启用加密。

参数：

- configuration — ([Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)) —

    要为当前通道设置的 CryptoConfig 对象


示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)


起始版本：

API 级别 2.3.0

抛出：

- ([Ant.EncryptionInvalidSettingsException](/connect-iq/api-docs/Toybox/Ant/EncryptionInvalidSettingsException/)) —

    如果使用了无效的加密设置，则会抛出此异常

- ([Ant.UnableToAcquireEncryptedChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireEncryptedChannelException/)) —

    如果由于所有通道都在使用中而无法获取加密通道，则会抛出此异常


### **getDeviceConfig()** as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)

获取当前 ANT 通道配置。

示例：

```
using Toybox.Ant;
var devConfig = genericChannel.getDeviceConfig();
// devConfig fields can now be accessed for configuration info
```

返回：

- [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/) —

    包含当前通道设备配置的 DeviceConfig 对象。


另见：

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


起始版本：

API 级别 1.0.0

### **initialize(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**, channelAssignment as [Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/))**

Constructor

参数：

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    用于调用通道消息的 Method 对象

- channelAssignment — ([Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/)) —

    通道的 ChannelAssignment 对象


示例：

```
using Toybox.Ant;

// Assumes a listenerCallback method and ChannelAssignment object supplied
// as parameters upon initialization
GenericChannel.initialize(method(:listenerCallback), channelAssign);
```

起始版本：

API 级别 1.0.0

抛出：

- ([Ant.UnableToAcquireChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireChannelException/)) —

    如果系统没有可用通道，则抛出。


### **open()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

打开通用 ANT 通道。

注意：

多任务：处于非活动模式时无法更改 Ant 通道连接；在活动模式期间打开的 Ant 通道会在应用变为非活动状态时关闭，并在再次变为活动状态时自动重新打开。这些状态变化通过调用 AppBase.onActive() 和 AppBase.onInactive() 表示。

示例：

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.open();
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **release()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

将通用 ANT 通道释放回系统。

如果通道处于打开状态，则会自动关闭。

示例：

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
genericChannel.release();
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


起始版本：

API 级别 1.0.0

### **sendAcknowledge(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发送确认消息。

如果消息成功/失败发送给接收方，您可以预期收到 [MSG\_CODE\_EVENT\_TRANSFER\_TX\_COMPLETED](/connect-iq/api-docs/Toybox/Ant/#MSG_CODE_EVENT_TRANSFER_TX_COMPLETED-const) 或 [MSG\_CODE\_EVENT\_TRANSFER\_TX\_FAILED](/connect-iq/api-docs/Toybox/Ant/#MSG_CODE_EVENT_TRANSFER_TX_FAILED-const)。

参数：

- data — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    其负载为由数字组成的 8 字节 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 的消息


示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


起始版本：

API 级别 1.0.0

### **sendBroadcast(data as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发送广播消息。

参数：

- data — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    其负载为由数字组成的 8 字节 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 的消息


示例：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


起始版本：

API 级别 1.0.0

### **sendBurst(burstData as [Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/))** as **Void**

将 [Messages](/connect-iq/api-docs/Toybox/Ant/Message/) 的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 作为突发数据通过 ANT 通道发送。

[BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/) 会收到成功或失败结果。

参数：

- burstData — ([Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)) —

    要通过通道突发传输的数据


示例：

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


起始版本：

API 级别 2.2.0

抛出：

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **setBurstListener(listener as [Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/))** as **Void**

设置突发事件使用的 [BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)。

失败的突发数据或大于指定阈值的数据将被丢弃。

参数：

- listener — ([Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)) —

    BurstListener 类的扩展


示例：

```
using Toybox.Ant;

// Assumes a valid GenericChannel object
// Assumes a valid BurstListener object as a parameter
genericChannel.setBurstListener(listener);
```

另见：

- [Toybox.Ant.BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/)


起始版本：

API 级别 2.2.0

抛出：

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **setDeviceConfig(configuration as [Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置当前 ANT 通道配置。

参数：

- configuration — ([Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)) —

    要为当前 ANT 通道设置的 DeviceConfig 对象


示例：

```
using Toybox.Ant;
var configuration = new Ant.DeviceConfig({});

// Assumes a valid GenericChannel object
genericChannel.setDeviceConfig(configuration);
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    成功时返回 `true`，否则返回 `false`。


另见：

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


起始版本：

API 级别 1.0.0

抛出：

- (Lang.UnexpectedTypeError) —

    如果 configuration 中的配置值类型不正确，则会抛出此异常。
