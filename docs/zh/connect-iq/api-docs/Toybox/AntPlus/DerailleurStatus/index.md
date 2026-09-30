---
title: "类：Toybox.AntPlus.DerailleurStatus"
---
# 类：Toybox.AntPlus.DerailleurStatus

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.DerailleurStatus](/connect-iq/api-docs/Toybox/AntPlus/DerailleurStatus/)


[show all](#)

## 概述

存储已连接变速器当前状态信息的类

起始版本：

API 级别 3.1.0

:::details 支持的设备

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
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
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
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
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1

:::

## 实例成员摘要 [collapse](#)

- [**gearIndex**](#gearIndex-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    当前档位索引（对于前拨链器为 0 - 6，[Toybox::AntPlus::FRONT\_GEAR\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#FRONT_GEAR_INVALID-const) = 未知档位索引/错误）（对于后拨链器为 0 - 30，[Toybox::AntPlus::REAR\_GEAR\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#REAR_GEAR_INVALID-const) = 未知档位索引/错误）。

- [**gearMax**](#gearMax-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    已安装齿轮数量（1 - 7，[Toybox::AntPlus::MAX\_GEARS\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#MAX_GEARS_INVALID-const) = 未知齿轮数量 / 错误）（1 - 31，[Toybox::AntPlus::MAX\_GEARS\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#MAX_GEARS_INVALID-const) = 未知齿轮数量 / 错误）。

- [**gearSize**](#gearSize-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    当前档位大小（齿数，0 - 255）。

- [**invalidInboardShiftCount**](#invalidInboardShiftCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    无效内侧换挡次数（0 - 255）。

- [**invalidOutboardShiftCount**](#invalidOutboardShiftCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    无效外侧换挡次数（0 - 255）。

- [**shiftFailureCount**](#shiftFailureCount-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    换挡失败次数（0 - 255）。


## 实例属性详情

### var gearIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前档位索引（对于前拨链器为 0 - 6，[Toybox::AntPlus::FRONT\_GEAR\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#FRONT_GEAR_INVALID-const) = 未知档位索引/错误）（对于后拨链器为 0 - 30，[Toybox::AntPlus::REAR\_GEAR\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#REAR_GEAR_INVALID-const) = 未知档位索引/错误）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var gearMax as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

已安装齿轮数量（1 - 7，[Toybox::AntPlus::MAX\_GEARS\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#MAX_GEARS_INVALID-const) = 未知齿轮数量 / 错误）（1 - 31，[Toybox::AntPlus::MAX\_GEARS\_INVALID](/connect-iq/api-docs/Toybox/AntPlus/#MAX_GEARS_INVALID-const) = 未知齿轮数量 / 错误）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var gearSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

当前档位大小（齿数，0 - 255）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var invalidInboardShiftCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

无效内侧换挡次数（0 - 255）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var invalidOutboardShiftCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

无效外侧换挡次数（0 - 255）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var shiftFailureCount as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

换挡失败次数（0 - 255）

起始版本：

API 级别 3.1.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
