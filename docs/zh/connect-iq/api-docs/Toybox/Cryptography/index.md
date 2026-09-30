---
title: "Module: Toybox.Cryptography"
---
# Module: Toybox.Cryptography

## 概述

The Cryptography Module will allow the application to create a [Cipher](/connect-iq/api-docs/Toybox/Cryptography/Cipher/) object that can encrypt and decrypt [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) objects.

Since:

API 级别 3.0.0

:::details 支持的设备

-   Approach® S50
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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 520 Plus
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
-   eTrex® Touch
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
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

:::

## 命名空间下的类

类：[Cipher](/connect-iq/api-docs/Toybox/Cryptography/Cipher/), [CipherBasedMessageAuthenticationCode](/connect-iq/api-docs/Toybox/Cryptography/CipherBasedMessageAuthenticationCode/), [Hash](/connect-iq/api-docs/Toybox/Cryptography/Hash/), [HashBasedMessageAuthenticationCode](/connect-iq/api-docs/Toybox/Cryptography/HashBasedMessageAuthenticationCode/), [InvalidBlockSizeException](/connect-iq/api-docs/Toybox/Cryptography/InvalidBlockSizeException/), [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/), [KeyAgreement](/connect-iq/api-docs/Toybox/Cryptography/KeyAgreement/), [KeyPair](/connect-iq/api-docs/Toybox/Cryptography/KeyPair/)

## 常量摘要

### HashAlgorithm

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 | 注意 |
| --- | --- | --- | --- | --- | --- |
| HASH\_SHA1 | 0 |
API 级别 3.0.0

|

SHA-1 implementation for Hash objects

| -   [https://en.wikipedia.org/wiki/SHA-1](https://en.wikipedia.org/wiki/SHA-1)
|

The SHA-1 algorithm has known vulnerabilities and should not be used for security purposes.

|
| HASH\_SHA256 | 1 |

API 级别 3.0.0

|

SHA-256 implementation for Hash objects

| -   [https://en.wikipedia.org/wiki/SHA-2](https://en.wikipedia.org/wiki/SHA-2)
     |  |
| HASH\_MD5 | 2 |

API 级别 3.0.0

|

MD5 implementation for Hash objects

| -   [https://en.wikipedia.org/wiki/MD5](https://en.wikipedia.org/wiki/MD5)
|

The MD5 algorithm has known vulnerabilities and should not be used for security purposes.

|

### CipherAlgorithm

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| CIPHER\_AES128 | 0 |
API 级别 3.0.0

|

AES128 implementation for Cipher objects

| -   [https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
|
| CIPHER\_AES256 | 1 |

API 级别 3.0.0

|

AES256 implementation for Cipher objects

| -   [https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
|

### EncryptionMode

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| MODE\_ECB | 0 |
API 级别 3.0.0

|

Electronic Code Book (ECB)

This is the simplest encryption mode. Each plaintext block is directly encrypted into a ciphertext block, independent of any other block. This mode exposes frequency of symbols in your plaintext. Other modes (e.g. CBC) are recommended.

| -   [https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation#Electronic\_Codebook\_(ECB)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Electronic_Codebook_(ECB))
|
| MODE\_CBC | 1 |

API 级别 3.0.0

|

Cipher-Block Chaining

Each ciphertext block depends on the current and all previous plaintext blocks. An Initialization Vector (IV) is required. The IV is a data block to be transmitted to the receiver. The IV can be made public, but it must be authenticated by the receiver and it should be picked randomly.

| -   [https://en.wikipedia.org/wiki/Block\_cipher\_mode\_of\_operation#Cipher\_Block\_Chaining\_(CBC)](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#Cipher_Block_Chaining_(CBC))
|

### KeyPairAlgorithm

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| KEY\_PAIR\_ELLIPTIC\_CURVE\_SECP224R1 | 0 |
API 级别 3.0.0

|

224-bit secp224r1 Elliptic Curve

基于有限域上椭圆曲线的代数结构。与非 ECC 加密相比，ECC 使用更小的密钥即可提供同等的安全性。

| -   [https://en.wikipedia.org/wiki/Elliptic-curve\_cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)
|
| KEY\_PAIR\_ELLIPTIC\_CURVE\_SECP256R1 | 1 |

API 级别 3.0.0

|

256-bit secp256r1 Elliptic Curve

基于有限域上椭圆曲线的代数结构。与非 ECC 加密相比，ECC 使用更小的密钥即可提供同等的安全性。

| -   [https://en.wikipedia.org/wiki/Elliptic-curve\_cryptography](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography)
|

### KeyAgreementProtocol

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| KEY\_AGREEMENT\_ECDH | 0 |
API 级别 3.0.0

|

Elliptic Curve Diffie-Hellman (ECDH)

| -   [https://en.wikipedia.org/wiki/Elliptic-curve\_Diffie%E2%80%93Hellman](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman)
|

## 实例方法摘要 [collapse](#)

- [**createPublicKey**](#createPublicKey-instance_function)(algorithm as [Cryptography.HashAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#HashAlgorithm-module), bytes as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)

    从要添加到 [KeyAgreement](/connect-iq/api-docs/Toybox/Cryptography/KeyAgreement/) 的字节创建公共 [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) 对象。

- [**randomBytes**](#randomBytes-instance_function)(size as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    生成经过密码学安全处理的随机字节。


## 实例方法详情

### **createPublicKey(algorithm as [Cryptography.HashAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#HashAlgorithm-module), bytes as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)

从要添加到 [KeyAgreement](/connect-iq/api-docs/Toybox/Cryptography/KeyAgreement/) 的字节创建公共 [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) 对象。

If a public key is received from another party, it can be converted to a [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) object using this method.

注意：

bytes is expected to be in little-endian byte order.

Parameters:

- algorithm — ([Cryptography.HashAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#HashAlgorithm-module)) —

    The hash algorithm to use as a [KEY\_PAIR\_ELLIPTIC\_CURVE\_\*](/connect-iq/api-docs/Toybox/Cryptography/#KEY_PAIR_ELLIPTIC_CURVE_SECP224R1-const) constant

- bytes — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    The public key bytes to be used to generate the [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)


:::details 支持的设备

-   Approach® S50
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
-   Edge® 1030 Plus
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
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
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
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
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)

另见：

- [Toybox.Cryptography.KeyAgreement](/connect-iq/api-docs/Toybox/Cryptography/KeyAgreement/)


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果参数类型不正确，则抛出

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if the ByteArray provided is not the correct size for the selected algorithm, or the algorithm selected is not supported.


### **randomBytes(size as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

生成经过密码学安全处理的随机字节。

Parameters:

- size — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The number of requested random bytes


Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A ByteArray of the requested size filled with cryptographically random bytes


Since:

API 级别 3.0.0
