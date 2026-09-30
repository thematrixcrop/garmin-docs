---
title: "Class: Toybox.Cryptography.CipherBasedMessageAuthenticationCode"
---
# 类：Toybox.Cryptography.CipherBasedMessageAuthenticationCode

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Cryptography.CipherBasedMessageAuthenticationCode](/connect-iq/api-docs/Toybox/Cryptography/CipherBasedMessageAuthenticationCode/)


[show all](#)

## 概述

基于密码的消息认证码（CMAC）对象。

CipherBasedMessageAuthenticationCode 是一个可使用 CMAC 算法计算消息验证码的对象。

## 另见：

- [http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-38b.pdf](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-38b.pdf)


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
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**digest**](#digest-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    返回认证码的摘要。

- [**initialize**](#initialize-instance_function)(options as { :algorithm as [Cryptography.CipherAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#CipherAlgorithm-module), :key as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) })

    Constructor.

- [**update**](#update-instance_function)(message as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    通过处理下一段数据继续计算 CMAC。


## 实例方法详情

### **digest()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

返回认证码的摘要。

对象状态已重置，可以使用相同选项计算新的身份验证代码。

Returns:

- [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    以网络字节序表示的计算所得消息验证码


Since:

API 级别 3.0.0

### **initialize(options as { :algorithm as [Cryptography.CipherAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#CipherAlgorithm-module), :key as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :algorithm — ([Cryptography.CipherAlgorithm](/connect-iq/api-docs/Toybox/Cryptography/#CipherAlgorithm-module)) —

        一个指定此 CMAC 计算所用加密算法的 [CIPHER\_\*](/connect-iq/api-docs/Toybox/Cryptography/) 值；CIPHER\_AES128 是 Connect IQ 3.x 中唯一支持的算法。（必需）

- :key — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

        The secret key used by selected cipher algorithm, which must be the appropriate length for chosen encryption type (required)


Since:

API 级别 3.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果不支持指定的算法，则抛出

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果为 `:key` 选项提供的类型不是 [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)，为 `:algorithm` 选项提供的类型不是 [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/)，或者未提供任一选项，则抛出


### **update(message as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

通过处理下一段数据继续计算 CMAC。

重复调用等价于用所有参数拼接后调用一次。

Parameters:

- message — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    待哈希消息的下一块数据


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若提供 [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) 以外的类型则抛出
