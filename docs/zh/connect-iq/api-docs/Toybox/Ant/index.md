---
title: "模块：Toybox.Ant"
---
# 模块：Toybox.Ant

## 概述

此模块提供 ANT 无线协议的接口。

ANT 无线协议是一种低级通信协议，通过直接控制设备上的无线电来实现非常高效的数据传输。ANT 模块提供了一系列常量，用于模块中提供的不同类对象和方法。这些包括：

- [MSG\_ID\_\*](/connect-iq/api-docs/Toybox/Ant/#MSG_ID_RF_EVENT-const) 常量 - 消息 ID

- [MSG\_CODE\_\*](/connect-iq/api-docs/Toybox/Ant/#MSG_CODE_RESPONSE_NO_ERROR-const) 常量 - 响应事件的消息代码

- [NETWORK\_\*](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) 常量 - 网络类型

- [CHANNEL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) 常量 - 通道类型

- [BURST\_ERROR\_\*](/connect-iq/api-docs/Toybox/Ant/#BURST_ERROR_OUT_OF_MEMORY-const) 常量 - Burst 错误类型


可通过以下链接获取 ANT 资源和文档。

## 另见：

- [Core Topics - ANT and ANT Plus](/connect-iq/core-topics/ant-and-ant-plus/)

- [ANT Basics](https://www.thisisant.com/developer/ant/ant-basics/#104_tab)

- [ANT Downloads & Resources](https://www.thisisant.com/developer/resources/downloads/)


起始版本：

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 后台

- 数据字段

- 速览

- 手表应用

- 微件


:::details 支持的设备

-   Approach® S50
-   Approach® S60
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Bravo Titanium
-   D2™ Bravo
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
-   Edge® 1000 / Explore
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
-   Edge® 520 Plus
-   Edge® 520
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
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
-   epix™
-   eTrex® Touch
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
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
-   Forerunner® 230
-   Forerunner® 235
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 45
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 735xt
-   Forerunner® 745
-   Forerunner® 920XT
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Garmin Swim™ 2
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
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
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
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
-   vívoactive®

:::

需要权限：

- Ant


## 命名空间下的类

类：[BurstListener](/connect-iq/api-docs/Toybox/Ant/BurstListener/), [BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/), [BurstPayloadIterator](/connect-iq/api-docs/Toybox/Ant/BurstPayloadIterator/), [ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/), [CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/), [DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/), [EncryptionInvalidSettingsException](/connect-iq/api-docs/Toybox/Ant/EncryptionInvalidSettingsException/), [GenericChannel](/connect-iq/api-docs/Toybox/Ant/GenericChannel/), [Message](/connect-iq/api-docs/Toybox/Ant/Message/), [UnableToAcquireChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireChannelException/), [UnableToAcquireEncryptedChannelException](/connect-iq/api-docs/Toybox/Ant/UnableToAcquireEncryptedChannelException/)

## 常量摘要

### MessageId

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MSG\_ID\_RF\_EVENT | 0x01 |
API 级别 1.0.0

 |  |
| MSG\_ID\_UNASSIGN\_CHANNEL | 0x41 |

API 级别 1.0.0

 |  |
| MSG\_ID\_ASSIGN\_CHANNEL | 0x42 |

API 级别 1.0.0

 |  |
| MSG\_ID\_CHANNEL\_ID | 0x51 |

API 级别 1.0.0

 |  |
| MSG\_ID\_CHANNEL\_PERIOD | 0x43 |

API 级别 1.0.0

 |  |
| MSG\_ID\_SEARCH\_TIMEOUT | 0x44 |

API 级别 1.0.0

 |  |
| MSG\_ID\_CHANNEL\_RF\_FREQUENCY | 0x45 |

API 级别 1.0.0

 |  |
| MSG\_ID\_NETWORK\_KEY | 0x46 |

API 级别 1.0.0

 |  |
| MSG\_ID\_TRANSMIT\_POWER | 0x47 |

API 级别 1.0.0

 |  |
| MSG\_ID\_CHANNEL\_TRANSMIT\_POWER | 0x60 |

API 级别 1.0.0

 |  |
| MSG\_ID\_LOW\_PRIORITY\_SEARCH\_TIMEOUT | 0x63 |

API 级别 1.0.0

 |  |
| MSG\_ID\_LIB\_CONFIG | 0x6E |

API 级别 1.0.0

 |  |
| MSG\_ID\_PROXIMITY\_SEARCH | 0x71 |

API 级别 1.0.0

 |  |
| MSG\_ID\_RESET\_SYSTEM | 0x4A |

API 级别 1.0.0

 |  |
| MSG\_ID\_OPEN\_CHANNEL | 0x4B |

API 级别 1.0.0

 |  |
| MSG\_ID\_CLOSE\_CHANNEL | 0x4C |

API 级别 1.0.0

 |  |
| MSG\_ID\_BROADCAST\_DATA | 0x4E |

API 级别 1.0.0

 |  |
| MSG\_ID\_ACKNOWLEDGED\_DATA | 0x4F |

API 级别 1.0.0

 |  |
| MSG\_ID\_CHANNEL\_RESPONSE\_EVENT | 0x40 |

API 级别 1.0.0

 |  |

### MessageCode

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MSG\_CODE\_RESPONSE\_NO\_ERROR | 0x00 |
API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_RX\_SEARCH\_TIMEOUT | 0x01 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_RX\_FAIL | 0x02 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_TX | 0x03 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_TRANSFER\_RX\_FAILED | 0x04 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_TRANSFER\_TX\_COMPLETED | 0x05 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_TRANSFER\_TX\_FAILED | 0x06 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_CHANNEL\_CLOSED | 0x07 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_RX\_FAIL\_GO\_TO\_SEARCH | 0x08 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_CHANNEL\_IN\_WRONG\_STATE | 0x15 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_CHANNEL\_ID\_NOT\_SET | 0x18 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_TRANSFER\_IN\_PROGRESS | 0x1F |

API 级别 1.0.0

 |  |
| MSG\_CODE\_INVALID\_MESSAGE | 0x28 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_QUE\_OVERFLOW | 0x35 |

API 级别 1.0.0

 |  |
| MSG\_CODE\_EVENT\_CRYPTO\_NEGOTIATION\_SUCCESS | 0x38 |

API 级别 2.3.0

 |  |
| MSG\_CODE\_EVENT\_CRYPTO\_NEGOTIATION\_FAIL | 0x39 |

API 级别 2.3.0

 |  |
| MSG\_CODE\_EVENT\_CONNECTION\_REJECTED | 0xFF |

API 级别 5.1.0

|

用户拒绝了 Ant 连接。

|

### NetworkType

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| NETWORK\_PUBLIC | 0 |
API 级别 1.0.0

 |  |
| NETWORK\_PLUS | 1 |

API 级别 1.0.0

 |  |
| NETWORK\_PRIVATE | 2 |

API 级别 1.2.0

 |  |

### ChannelType

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CHANNEL\_TYPE\_TX\_NOT\_RX | 0x10 |
API 级别 1.0.0

|

双向传输（主设备）

|
| CHANNEL\_TYPE\_RX\_NOT\_TX | 0x00 |

API 级别 1.0.0

|

双向接收（从设备）

|
| CHANNEL\_TYPE\_RX\_ONLY | 0x40 |

API 级别 1.2.0

|

仅接收（从设备）

|
| CHANNEL\_TYPE\_SHARED\_BIDIRECTIONAL\_RECEIVE | 0x20 |

API 级别 3.1.0

|

共享双向接收（从设备）

|
| CHANNEL\_TYPE\_SHARED\_BIDIRECTIONAL\_TRANSMIT | 0x30 |

API 级别 3.1.0

|

共享双向传输（主设备）

|

### BurstError

传递给 BurstListener 中失败函数的错误代码

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BURST\_ERROR\_OUT\_OF\_MEMORY | 0 |
API 级别 2.2.0

|

没有足够的可用内存来发送/接收突发消息

|
| BURST\_ERROR\_SEQUENCE\_NUMBER\_FAIL | 1 |

API 级别 2.2.0

|

收到的突发数据包顺序错误，整个消息已被丢弃

|
| BURST\_ERROR\_RF\_FAIL | 2 |

API 级别 2.2.0

|

空中传输突发数据失败

|
| BURST\_ERROR\_TRANSFER\_IN\_PROGRESS | 3 |

API 级别 2.2.0

|

突发传输被原生系统代码中的另一个突发传输阻止

|
