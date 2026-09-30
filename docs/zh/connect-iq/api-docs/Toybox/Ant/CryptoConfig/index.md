---
title: "Class: Toybox.Ant.CryptoConfig"
---
# 类：Toybox.Ant.CryptoConfig

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.CryptoConfig](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/)


[show all](#)

## 概述

用于处理 ANT 无线数据加密的类。

## 另见：

- [ANT Downloads & Resources - ANT Message Protocol](https://www.thisisant.com/developer/resources/downloads/)


Example:

```
using Toybox.Ant;
// Use a set of constants for configuration
const ENCRYPTION_ID = 4294967295;             // Define ID
const ENCRYPTION_KEY = [                      // Define Key
    0x00, 0x01, 0x02, 0x03,
    0x04, 0x05, 0x06, 0x07,
    0x08, 0x09, 0x0a, 0x0b,
    0x0c, 0x0d, 0x0e, 0x0f
];
const ENCRYPTION_USER_INFO_STRING = [         // String "hello world" in hex
    0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x20,
    0x77, 0x6f, 0x72, 0x6c, 0x64, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00
];
const ENCRYPTION_DECIMATION_RATE = 1;         // Define Decimation Rate

// Define the CryptoConfig
cryptoConfig = new Ant.CryptoConfig({
    :encryptionID => ENCRYPTION_ID,
    :encryptionKey => ENCRYPTION_KEY,
    :userInfoString => ENCRYPTION_USER_INFO_STRING,
    :decimateRate => ENCRYPTION_DECIMATION_RATE
});
```

Since:

API 级别 2.3.0

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

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | DEFAULT\_ENCRYPTION\_ID | 0 |
API 级别 2.3.0

 |  |
| 类型 | DEFAULT\_USER\_INFO\_STRING | 0 |

API 级别 2.3.0

 |  |
| 类型 | ENCRYPTION\_KEY\_LENGTH | 16 |

API 级别 2.3.0

 |  |
| 类型 | USER\_INFO\_STRING\_LENGTH | 19 |

API 级别 2.3.0

 |  |

## 类型定义摘要 [collapse](#)

- [**EncryptionKey**](#EncryptionKey-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]
- [**UserInfoString**](#UserInfoString-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

## 实例成员摘要 [collapse](#)

- [**decimationRate**](#decimationRate-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加密计数器的除法因子。

- [**encryptionId**](#encryptionId-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    加密主设备或协商从设备的唯一 4 字节标识符。

- [**encryptionKey**](#encryptionKey-var) as [CryptoConfig.EncryptionKey](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#EncryptionKey-named_type)

    用于加密/解密 ANT 数据包的 128 位加密密钥。

- [**userInfoString**](#userInfoString-var) as [CryptoConfig.UserInfoString](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#UserInfoString-named_type) or **Null**

    加密协商成功后要发送到主通道的（可选）用户信息 String（仅限从通道）。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :encryptionId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :encryptionKey as [CryptoConfig.EncryptionKey](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#EncryptionKey-named_type), :userInfoString as [CryptoConfig.UserInfoString](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#UserInfoString-named_type), :decimationRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })

    Constructor.


## 类型定义详情

### **EncryptionKey** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API 级别 2.3.0

### **UserInfoString** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API 级别 2.3.0

## 实例属性详情

### var decimationRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加密计数器的除法因子

Since:

API 级别 2.3.0

### var encryptionId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

加密主设备或协商从设备的唯一 4 字节标识符。

Since:

API 级别 2.3.0

### var encryptionKey as [CryptoConfig.EncryptionKey](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#EncryptionKey-named_type)

用于加密/解密 ANT 数据包的 128 位加密密钥。

Since:

API 级别 2.3.0

### var userInfoString as [CryptoConfig.UserInfoString](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#UserInfoString-named_type) or **Null**

加密协商成功后要发送到主通道的（可选）用户信息 String（仅限从通道）。

Since:

API 级别 2.3.0

## 实例方法详情

### **initialize(options as { :encryptionId as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :encryptionKey as [CryptoConfig.EncryptionKey](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#EncryptionKey-named_type), :userInfoString as [CryptoConfig.UserInfoString](/connect-iq/api-docs/Toybox/Ant/CryptoConfig/#UserInfoString-named_type), :decimationRate as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    配置选项的 Dictionary

- :encryptionId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        用于在加密协商期间唯一标识设备的 Number（uint32）

- :encryptionKey — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        用于以字节数组形式加密/解密 ANT 数据包的键

- :userInfoString — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        协商期间发送到主通道的 String，形式为字节数组（仅当通道配置为从通道时使用）

- :decimationRate — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        一个范围为 1-255 的 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，用于将主通道速率除以从通道的速率


Since:

API 级别 2.3.0
