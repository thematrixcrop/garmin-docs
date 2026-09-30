---
title: "Class: Toybox.Cryptography.KeyAgreement"
---
# 类：Toybox.Cryptography.KeyAgreement

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Cryptography.KeyAgreement](/connect-iq/api-docs/Toybox/Cryptography/KeyAgreement/)


[show all](#)

## 概述

与公钥结合以生成共享密钥的本地私钥。

Example:

使用 KeyAgreement 创建共享密钥

```
// > openssl ec -in key.pem -text -noout
// 读取 EC 密钥
// 私钥：（224 位）
// 私钥：
//     00:89:01:46:f8:bd:64:ce:75:e0:83:02:d0:fc:e1:
//     1d:ce:fd:eb:66:f8:81:1d:68:64:49:05:d3:ee
// 公钥：
//     04:1d:ba:39:9a:16:6e:62:0b:56:e3:16:73:f7:38:
//     b0:d1:b7:2d:40:ca:92:3a:f8:94:26:24:22:e6:6f:
//     d7:61:db:e8:9b:47:03:33:da:46:0e:6b:36:c9:34:
//     a6:75:6d:d1:10:9f:c2:d7:c6:07:72:bc
// ASN1 OID：secp224r1
// NIST 曲线：P-224

using Toybox.Cryptography;
using Toybox.System;

const PRIVATE_KEY_SECP224R1 = [
    // 第一个字节不是密钥的一部分，因此将其省略
    // 0x00,

    // 字节序交换后的 28 字节（224 位）字
    0xee, 0xd3, 0x05, 0x49, 0x64, 0x68, 0x1d, 0x81, 0xf8, 0x66, 0xeb, 0xfd, 0xce, 0x1d,
    0xe1, 0xfc, 0xd0, 0x02, 0x83, 0xe0, 0x75, 0xce, 0x64, 0xbd, 0xf8, 0x46, 0x01, 0x89,
]b;

const PUBLIC_KEY_SECP224R1 = [
    // 第一个字节不是密钥的一部分，因此将其省略
    // 0x04,

    // 字节序交换后的 28 字节（224 位）字
    0xe6, 0x22, 0x24, 0x26, 0x94, 0xf8, 0x3a, 0x92, 0xca, 0x40, 0x2d, 0xb7, 0xd1, 0xb0,
    0x38, 0xf7, 0x73, 0x16, 0xe3, 0x56, 0x0b, 0x62, 0x6e, 0x16, 0x9a, 0x39, 0xba, 0x1d,

    0xbc, 0x72, 0x07, 0xc6, 0xd7, 0xc2, 0x9f, 0x10, 0xd1, 0x6d, 0x75, 0xa6, 0x34, 0xc9,
    0x36, 0x6b, 0x0e, 0x46, 0xda, 0x33, 0x03, 0x47, 0x9b, 0xe8, 0xdb, 0x61, 0xd7, 0x6f,
]b;

// Alice 从私钥生成密钥对
var keyPairAlice = new Cryptography.KeyPair({
    :algorithm => Cryptography.KEY_PAIR_ELLIPTIC_CURVE_SECP224R1,
    :privateKey => PRIVATE_KEY_SECP224R1
});

var publicKeyAlice = PUBLIC_KEY_SECP224R1;

// 验证 Alice 的公钥是否与预期匹配
System.println(keyPairAlice.getPublicKey().equals(publicKeyAlice)); // 打印 'true'

// Bob 从头生成密钥对
var keyPairBob = new Cryptography.KeyPair({
    :algorithm => Cryptography.KEY_PAIR_ELLIPTIC_CURVE_SECP224R1
});

var publicKeyBob = keyPairBob.getPublicKey().getBytes();

//
// Alice 和 Bob 交换公钥
//

// Alice 使用她的私钥创建密钥协商
var keyAgreementAlice = new Cryptography.KeyAgreement({
    :protocol => Cryptography.KEY_AGREEMENT_ECDH,
    :privateKey => keyPairAlice.getPrivateKey()
});

// Alice 使用 Bob 的公钥生成只有 Bob 和她自己知道的密钥
keyAgreementAlice.addKey(keyPairBob.getPublicKey());
var secretKeyAliceAndBob = keyAgreementAlice.generateSecret();

// Bob 使用他的私钥创建密钥协商
var keyAgreementBob = new Cryptography.KeyAgreement({
    :protocol => Cryptography.KEY_AGREEMENT_ECDH,
    :privateKey => keyPairBob.getPrivateKey()
});

// Bob 使用 Alice 的公钥生成只有 Alice 和他自己知道的密钥
keyAgreementBob.addKey(keyPairAlice.getPublicKey());
var secretKeyBobAndAlice = keyAgreementBob.generateSecret();

// Bob 和 Alice 现在拥有共享密钥，且没有暴露任一方的
// 私钥。此密钥可用于对 Bob 和 Alice 之间的消息进行签名或加密。
// 验证两者的共享密钥相同。
System.println(secretKeyAliceAndBob.equals(secretKeyBobAndAlice)); // 打印 'true'
```

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

## 实例方法摘要 [collapse](#)

- [**addKey**](#addKey-instance_function)(key as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)) as **Void**

    将一个公共 [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) 添加到 KeyAgreement。

- [**generateSecret**](#generateSecret-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    为 KeyAgreement 生成共享密钥。

- [**initialize**](#initialize-instance_function)(options as { :protocol as [Cryptography.KeyAgreementProtocol](/connect-iq/api-docs/Toybox/Cryptography/#KeyAgreementProtocol-module), :privateKey as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) })

    Constructor.


## 实例方法详情

### **addKey(key as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/))** as **Void**

将一个公共 [Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) 添加到 KeyAgreement。

Parameters:

- key — ([Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)) —

    要添加到协议中的公钥


Since:

API 级别 3.0.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果指定的密钥对于所选算法无效，则抛出


### **generateSecret()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

为 KeyAgreement 生成共享密钥。

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    KeyAgreement 的机密


Since:

API 级别 3.0.0

### **initialize(options as { :protocol as [Cryptography.KeyAgreementProtocol](/connect-iq/api-docs/Toybox/Cryptography/#KeyAgreementProtocol-module), :privateKey as [Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    KeyAgreement 的选项字典

- :protocol — ([Cryptography.KeyAgreementProtocol](/connect-iq/api-docs/Toybox/Cryptography/#KeyAgreementProtocol-module)) —

        用作 [KEY\_AGREEMENT\_\*](/connect-iq/api-docs/Toybox/Cryptography/) 值的协议

- :privateKey — ([Cryptography.Key](/connect-iq/api-docs/Toybox/Cryptography/Key/)) —

        KeyAgreement 中的私钥


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果参数类型不正确，则抛出

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果指定的私钥对于所选算法大小不正确，或所选协议不受支持，则抛出
