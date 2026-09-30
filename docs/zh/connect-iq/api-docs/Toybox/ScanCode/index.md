---
title: "模块：Toybox.ScanCode"
---
# 模块：Toybox.ScanCode

## 概述

ScanCode 模块提供生成机器可读代码图像的功能。

起始版本：

API 级别 6.0.0

## 常量摘要

### QrCodeEcc

起始版本：

API 级别 6.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| QR\_CODE\_ECC\_LOW | 0 |
API 级别 6.0.0

|

允许最多 7% 的误差

|
| QR\_CODE\_ECC\_MEDIUM | 1 |

API 级别 6.0.0

|

允许最多 15% 的误差

|
| QR\_CODE\_ECC\_QUARTILE | 2 |

API 级别 6.0.0

|

允许最多 25% 的误差

|
| QR\_CODE\_ECC\_HIGH | 3 |

API 级别 6.0.0

|

允许最多 30% 的误差

|

### QrCodeMask

起始版本：

API 级别 6.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| QR\_CODE\_MASK\_AUTO | \-1 |
API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_0 | 0 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_1 | 1 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_2 | 2 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_3 | 3 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_4 | 4 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_5 | 5 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_6 | 6 |

API 级别 6.0.0

 |  |
| QR\_CODE\_MASK\_7 | 7 |

API 级别 6.0.0

 |  |

## 类型定义摘要 [collapse](#)

- [**QrCodeOptions**](#QrCodeOptions-named_type) as { :minVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maxVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maskValue as [ScanCode.QrCodeMask](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeMask-module), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) }
- [**QrCodeValue**](#QrCodeValue-named_type) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>

## 实例方法摘要 [collapse](#)

- [**createQrCodeImage**](#createQrCodeImage-instance_function)(value as [ScanCode.QrCodeValue](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeValue-named_type), ecc as [ScanCode.QrCodeEcc](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeEcc-module), imageSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), options as [ScanCode.QrCodeOptions](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeOptions-named_type) or **Null**) as [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)

    创建快速响应码图像。


## 类型定义详情

### QrCodeOptions，格式为 { :minVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maxVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maskValue as [ScanCode.QrCodeMask](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeMask-module), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) }

起始版本：

API 级别 6.0.0

### **QrCodeValue** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>

起始版本：

API 级别 6.0.0

## 实例方法详情

### **createQrCodeImage(value as [ScanCode.QrCodeValue](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeValue-named_type), ecc as [ScanCode.QrCodeEcc](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeEcc-module), imageSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), options as [ScanCode.QrCodeOptions](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeOptions-named_type) or **Null**)** as [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)

创建快速响应码图像

参数：

- value — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    要在 QR code 图像中编码的值

- ecc — ([ScanCode.QrCodeEcc](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeEcc-module)) —

    纠错级别

- imageSize — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    生成的 QR code 图像的宽度和高度，单位为像素。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :minVersion — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        最小 QR 码版本。默认值为 1。

- :maxVersion — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        最大 QR 码版本。默认值为 40。

- :maskValue — ([ScanCode.QrCodeMask](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeMask-module)) —

        掩码值。默认值为 QR\_CODE\_MASK\_AUTO。

- :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        前景色。默认为 COLOR\_BLACK。

- :backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        背景颜色。默认值为 COLOR\_WHITE。


:::details 支持的设备

-   D2™ Mach 2 Pro
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® MTB
-   Enduro™ 3
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
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

返回：

- [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) —

    包含 QR 码图像的位图


起始版本：

API 级别 6.0.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果选项或参数无效，则会抛出此异常。

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    如果选项或参数值超出范围，则会抛出此异常。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果选项或参数的类型出乎意料，则会抛出此异常。

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    如果生成的图像没有足够的图形内存可用，则会抛出此异常。
