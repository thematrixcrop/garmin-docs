---
title: "Module: Toybox.ScanCode"
---
# Module: Toybox.ScanCode

## 概述

The ScanCode module provides functionality to for generating machine readable code images.

Since:

API 级别 6.0.0

## 常量摘要

### QrCodeEcc

Since:

API 级别 6.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| QR\_CODE\_ECC\_LOW | 0 |
API 级别 6.0.0

|

Tolerate up to 7% error

|
| QR\_CODE\_ECC\_MEDIUM | 1 |

API 级别 6.0.0

|

Tolerate up to 15% error

|
| QR\_CODE\_ECC\_QUARTILE | 2 |

API 级别 6.0.0

|

Tolerate up to 25% error

|
| QR\_CODE\_ECC\_HIGH | 3 |

API 级别 6.0.0

|

Tolerate up to 30% error

|

### QrCodeMask

Since:

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

    Create a Quick Response Code image.


## 类型定义详情

### **QrCodeOptions** as { :minVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maxVersion as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maskValue as [ScanCode.QrCodeMask](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeMask-module), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) }

Since:

API 级别 6.0.0

### **QrCodeValue** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>

Since:

API 级别 6.0.0

## 实例方法详情

### **createQrCodeImage(value as [ScanCode.QrCodeValue](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeValue-named_type), ecc as [ScanCode.QrCodeEcc](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeEcc-module), imageSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), options as [ScanCode.QrCodeOptions](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeOptions-named_type) or **Null**)** as [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/)

Create a Quick Response Code image

Parameters:

- value — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The value(s) to encode in the QR code image

- ecc — ([ScanCode.QrCodeEcc](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeEcc-module)) —

    The error correction level

- imageSize — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width and height of the resulting QR code image in pixels.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Dictionary of options.

- :minVersion — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The minimum QR code version. Default is 1.

- :maxVersion — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The maximum QR code version. Default is 40.

- :maskValue — ([ScanCode.QrCodeMask](/connect-iq/api-docs/Toybox/ScanCode/#QrCodeMask-module)) —

        The mask value. Default is QR\_CODE\_MASK\_AUTO.

- :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        The foreground color. Default is COLOR\_BLACK.

- :backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        The background color. Default is COLOR\_WHITE.


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

Returns:

- [Graphics.BufferedBitmap](/connect-iq/api-docs/Toybox/Graphics/BufferedBitmap/) —

    包含 QR 码图像的位图


Since:

API 级别 6.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if an option or parameter is invalid.

- ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if an option or parameter value is out of bounds.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if an option or parameter is an unexpected type.

- ([Graphics.OutOfGraphicsMemoryException](/connect-iq/api-docs/Toybox/Graphics/OutOfGraphicsMemoryException/)) —

    Thrown if insufficient graphics memory is available for the resulting image.
