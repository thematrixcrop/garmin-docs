---
title: "Module: Toybox.Communications"
---
# Module: Toybox.Communications

## 概述

通信模块提供通信工具。

通过通信模块，小部件和应用可通过蓝牙低功耗（BLE）与手机通信。手机可与设备共享数据，也可作为应用与互联网之间的桥接。这样设备便成为物联网的一部分。

注意：

此模块自 API 5.0.0 起对前台数据字段可用

Since:

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

- Communications


## 命名空间下的类

类：[ConnectionListener](/connect-iq/api-docs/Toybox/Communications/ConnectionListener/), [MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/), [Message](/connect-iq/api-docs/Toybox/Communications/Message/), [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/), [PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/), [SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)

## 常量摘要

### Error

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| UNKNOWN\_ERROR | 0 |
API 级别 1.0.0

|

未知错误。

|
| BLE\_ERROR | \-1 |

API 级别 1.0.0

|

通用 BLE 错误。

|
| BLE\_HOST\_TIMEOUT | \-2 |

API 级别 1.0.0

|

等待主机响应超时。

|
| BLE\_SERVER\_TIMEOUT | \-3 |

API 级别 1.0.0

|

等待服务器响应超时。

|
| BLE\_NO\_DATA | \-4 |

API 级别 1.0.0

|

响应不含数据。

|
| BLE\_REQUEST\_CANCELLED | \-5 |

API 级别 1.0.0

|

请求被系统取消。

|
| BLE\_QUEUE\_FULL | \-101 |

API 级别 1.0.0

|

请求过多。

|
| BLE\_REQUEST\_TOO\_LARGE | \-102 |

API 级别 1.0.0

|

请求的序列化输入数据过大。

|
| BLE\_UNKNOWN\_SEND\_ERROR | \-103 |

API 级别 1.0.0

|

发送失败，未知原因。

|
| BLE\_CONNECTION\_UNAVAILABLE | \-104 |

API 级别 1.0.0

|

无可用 BLE 连接。

|
| INVALID\_HTTP\_HEADER\_FIELDS\_IN\_REQUEST | \-200 |

API 级别 1.0.0

|

请求包含无效的 HTTP 头字段。

|
| INVALID\_HTTP\_BODY\_IN\_REQUEST | \-201 |

API 级别 1.0.0

|

请求包含无效的 HTTP 正文。

|
| INVALID\_HTTP\_METHOD\_IN\_REQUEST | \-202 |

API 级别 1.0.0

|

请求使用了无效的 HTTP 方法。

|
| NETWORK\_REQUEST\_TIMED\_OUT | \-300 |

API 级别 1.0.0

|

在收到响应前请求超时。

|
| INVALID\_HTTP\_BODY\_IN\_NETWORK\_RESPONSE | \-400 |

API 级别 1.0.0

|

响应正文数据对请求类型无效。

|
| INVALID\_HTTP\_HEADER\_FIELDS\_IN\_NETWORK\_RESPONSE | \-401 |

API 级别 1.0.0

|

响应包含无效的 HTTP 头字段。

|
| NETWORK\_RESPONSE\_TOO\_LARGE | \-402 |

API 级别 1.0.0

|

序列化响应过大。

|
| NETWORK\_RESPONSE\_OUT\_OF\_MEMORY | \-403 |

API 级别 3.0.0

|

处理网络响应时内存不足。

|
| STORAGE\_FULL | \-1000 |

API 级别 2.2.0

|

文件系统空间不足，无法存储响应数据。

|
| SECURE\_CONNECTION\_REQUIRED | \-1001 |

API 级别 2.3.0

|

表示请求需要 HTTPS 连接。

|
| UNSUPPORTED\_CONTENT\_TYPE\_IN\_RESPONSE | \-1002 |

API 级别 2.4.1

|

响应中给出的内容类型不受支持或不匹配期望值。

|
| REQUEST\_CANCELLED | \-1003 |

API 级别 2.4.2

|

HTTP 请求被系统取消。

|
| REQUEST\_CONNECTION\_DROPPED | \-1004 |

API 级别 3.0.0

|

在获取响应前连接丢失。

|
| UNABLE\_TO\_PROCESS\_MEDIA | \-1005 |

API 级别 3.0.2

|

下载的媒体文件无法读取。

|
| UNABLE\_TO\_PROCESS\_IMAGE | \-1006 |

API 级别 3.0.3

|

下载的图像文件无法处理。

|
| UNABLE\_TO\_PROCESS\_HLS | \-1007 |

API 级别 3.0.10

|

HLS 内容无法下载。通常发生在请求和提供的比特率不匹配时。

|

### TokenResult

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| OAUTH\_RESULT\_TYPE\_URL | 0 |
API 级别 1.3.0

|

OAuth 令牌在最终步骤如何返回。

|

### SigningMethod

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| OAUTH\_SIGNING\_METHOD\_HMAC\_SHA1 | 0 |
API 级别 1.3.0

|

OAuth 请求将如何签名

|

### HttpRequestMethod

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| HTTP\_REQUEST\_METHOD\_GET | 1 |
API 级别 1.2.0

|

指定使用 GET 方法执行请求。

|
| HTTP\_REQUEST\_METHOD\_PUT | 2 |

API 级别 1.2.0

|

指定使用 PUT 方法执行请求。

|
| HTTP\_REQUEST\_METHOD\_POST | 3 |

API 级别 1.2.0

|

指定使用 POST 方法执行请求。

|
| HTTP\_REQUEST\_METHOD\_DELETE | 4 |

API 级别 1.2.0

|

指定使用 DELETE 方法执行请求。

|

### HttpResponseContentType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| HTTP\_RESPONSE\_CONTENT\_TYPE\_JSON | 0 |
API 级别 1.3.0

|

响应的内容类型应为 JSON 类型。内容类型字符串必须为 "application/json"。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_URL\_ENCODED | 1 |

API 级别 1.3.0

|

响应的内容类型应表示 URL 编码。内容类型字符串必须为 "application/x-www-form-urlencoded"。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_GPX | 2 |

API 级别 2.2.0

|

响应的内容类型应为 GPX 类型。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_FIT | 3 |

API 级别 2.2.0

|

响应的内容类型应为 FIT 类型。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_AUDIO | 4 |

API 级别 3.0.0

|

Content type specifier for response is expected to be an audio type. Content type string must be of the "audio/\*" format.

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_TEXT\_PLAIN | 5 |

API 级别 3.0.0

|

响应的内容类型应为纯文本类型。内容类型字符串必须为 "text/plain"。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_HLS\_DOWNLOAD | 6 |

API 级别 3.0.10

|

响应的内容类型应为 HLS 数据类型。内容类型字符串必须为 "application/vnd.apple.mpegurl" 或 "audio/mpegurl"。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_ANIMATION\_MANIFEST | 7 |

API 级别 3.1.0

|

响应的内容类型应为 CIQ 动画清单数据类型。内容类型字符串必须为 "application/vnd.garmin.connectiq.animation.manifest"。

|
| HTTP\_RESPONSE\_CONTENT\_TYPE\_ANIMATION | 8 |

API 级别 3.1.0

|

响应的内容类型应为 CIQ 动画数据类型。内容类型字符串必须为 "image/vnd.garmin.connectiq.animation"。

|

### WifiConnectionStatus

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WIFI\_CONNECTION\_STATUS\_LOW\_BATTERY | 1 |
API 级别 3.2.0

|

错误状态：电池电量过低，无法启动 WIFI 连接。

|
| WIFI\_CONNECTION\_STATUS\_NO\_ACCESS\_POINTS | 2 |

API 级别 3.2.0

|

错误状态：设备上未存储接入点。

|
| WIFI\_CONNECTION\_STATUS\_UNSUPPORTED | 3 |

API 级别 3.2.0

|

错误状态：当前设备不支持 WIFI。

|
| WIFI\_CONNECTION\_STATUS\_USER\_DISABLED | 4 |

API 级别 3.2.0

|

错误状态：WIFI 被用户禁用。

|
| WIFI\_CONNECTION\_STATUS\_BATTERY\_SAVER\_ACTIVE | 5 |

API 级别 3.2.0

|

错误状态：WIFI 被电池节省模式禁用。

|
| WIFI\_CONNECTION\_STATUS\_STEALTH\_MODE\_ACTIVE | 6 |

API 级别 3.2.0

|

错误状态：WIFI 被隐身模式禁用。

|
| WIFI\_CONNECTION\_STATUS\_AIRPLANE\_MODE\_ACTIVE | 7 |

API 级别 3.2.0

|

Specifies an error condition, WIFI is disabled by airplane mode.

|
| WIFI\_CONNECTION\_STATUS\_POWERED\_DOWN | 8 |

API 级别 3.2.0

|

错误状态：WIFI 被设备禁用。

|
| WIFI\_CONNECTION\_STATUS\_UNKNOWN | 9 |

API 级别 3.2.0

|

错误状态：WIFI 不可用但状态未知。

|
| WIFI\_CONNECTION\_STATUS\_CANNOT\_CONNECT\_TO\_ACCESS\_POINT | 10 |

API 级别 3.3.0

|

错误状态：WIFI 无法连接到已保存的接入点。

|
| WIFI\_CONNECTION\_STATUS\_TRANSFER\_ALREADY\_IN\_PROGRESS | 11 |

API 级别 3.3.0

|

错误状态：WIFI 传输已在进行中

|

### HttpRequestContentType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REQUEST\_CONTENT\_TYPE\_URL\_ENCODED | 0 |
API 级别 1.2.0

|

内容类型为 application/x-www-form-urlencoded

|
| REQUEST\_CONTENT\_TYPE\_JSON | 1 |

API 级别 1.2.0

|

内容类型为 application/json

|

### PackingFormat

图像请求使用的图像打包格式。

打包格式描述请求图像在传输时应使用的编码。编码影响传输大小、解码时间和图像质量。

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PACKING\_FORMAT\_DEFAULT | 0 |
API 级别 4.2.0

|

图像数据以设备原生格式编码，这是一种所有设备都可用的无损编码。解码效率很高，但通常导致较大的传输大小，因此下载较慢。

|
| PACKING\_FORMAT\_YUV | 1 |

API 级别 4.2.0

|

图像数据以 YUV 格式编码。这是有损编码，经压缩，加载速度快。适合带透明度的照片图像。

|
| PACKING\_FORMAT\_PNG | 2 |

API 级别 4.2.0

|

图像数据以 PNG 格式编码。这是无损编码，经压缩，但加载相对较慢。适合非照片图像。

|
| PACKING\_FORMAT\_JPG | 3 |

API 级别 4.2.0

|

图像数据以 JPG 格式编码。这是有损编码，经压缩，加载速度合理。适合照片图像。

|

### HlsBandwidth

TVM 将选择带宽最高且不超过最大值的 HLS 音频流

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| HLS\_AUDIO\_BANDWIDTH\_48K | 49152 |
API 级别 3.0.10

 |  |
| HLS\_AUDIO\_BANDWIDTH\_128K | 131072 |

API 级别 3.0.10

 |  |
| HLS\_AUDIO\_BANDWIDTH\_256K | 262144 |

API 级别 3.0.10

 |  |

### Dithering

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| IMAGE\_DITHERING\_NONE | 1 |
API 级别 1.2.0

|

不对图像应用抖动。

|
| IMAGE\_DITHERING\_FLOYD\_STEINBERG | 2 |

API 级别 1.2.0

|

对图像应用 Floyd-Steinberg 抖动。

|

### PhoneAppMessageError

Since:

API 级别 6.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PHONE\_APP\_MESSAGE\_ERROR\_OUT\_OF\_MEMORY | 0 |
API 级别 6.0.0

 |  |
| PHONE\_APP\_MESSAGE\_ERROR\_OUT\_OF\_STORAGE | 1 |

API 级别 6.0.0

 |  |

## 类型定义摘要 [collapse](#)

- [**PhoneMessageCallback**](#PhoneMessageCallback-named_type) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/)) as **Void**
- [**PhoneMessageErrorCallback**](#PhoneMessageErrorCallback-named_type) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(error as [Communications.PhoneAppMessageError](/connect-iq/api-docs/Toybox/Communications/#PhoneAppMessageError-module)) as **Void**
- [**TransmitKeyType**](#TransmitKeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
- [**TransmitType**](#TransmitType-named_type) as [Communications.TransmitKeyType](/connect-iq/api-docs/Toybox/Communications/#TransmitKeyType-named_type) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Communications.TransmitKeyType](/connect-iq/api-docs/Toybox/Communications/#TransmitKeyType-named_type), [Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type)\> or **Null**

## 实例方法摘要 [collapse](#)

- [**cancelAllRequests**](#cancelAllRequests-instance_function)() as **Void**

    取消所有待处理的 JSON 和图像请求。

- [**checkWifiConnection**](#checkWifiConnection-instance_function)(connectionStatusCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(result as { :wifiAvailable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :errorCode as [Communications.WifiConnectionStatus](/connect-iq/api-docs/Toybox/Communications/#WifiConnectionStatus-module) }) as **Void**) as **Void**

    检查是否有可用的互联网 WIFI 接入点并可连接。

- [**emptyMailbox**](#emptyMailbox-instance_function)() as **Void** deprecated

    清空邮箱内容。

- [**encodeURL**](#encodeURL-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    将 URL 字符串转换为百分号编码字符串。

- [**generateSignedOAuthHeader**](#generateSignedOAuthHeader-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), params as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>, requestMethod as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), signatureMethod as [Communications.SigningMethod](/connect-iq/api-docs/Toybox/Communications/#SigningMethod-module), token as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**, tokenSecret as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), consumerKey as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), consumerSecret as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) deprecated

    生成 OAuth 1.0a 请求中 "Authorization" 头的值。

- [**getMailbox**](#getMailbox-instance_function)() as [Communications.MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/) deprecated

    获取该应用邮箱的 MailboxIterator。

- [**makeImageRequest**](#makeImageRequest-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, options as { :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>, :maxWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maxHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :dithering as [Communications.Dithering](/connect-iq/api-docs/Toybox/Communications/#Dithering-module), :packingFormat as [Communications.PackingFormat](/connect-iq/api-docs/Toybox/Communications/#PackingFormat-module) }, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**) as **Void**) as **Void**

    发起图像下载请求。

- [**makeJsonRequest**](#makeJsonRequest-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\> or **Null**, options as { :method as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), :headers as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) } or **Null**, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**) as **Void**) as **Void** deprecated

    发起下载请求。

- [**makeOAuthRequest**](#makeOAuthRequest-instance_function)(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Communications.TokenResult](/connect-iq/api-docs/Toybox/Communications/#TokenResult-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>) as **Void**

    通过 Garmin Connect Mobile 请求 OAuth 登录。

- [**makeWebRequest**](#makeWebRequest-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\> or **Null**, options as { :method as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), :headers as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), :responseType as [Communications.HttpResponseContentType](/connect-iq/api-docs/Toybox/Communications/#HttpResponseContentType-module), :context as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, :maxBandwidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :fileDownloadProgressCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(totalBytesTransferred as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), fileSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as **Void** } or **Null**, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**) as **Void** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**, context as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**) as **Void**

    发起下载请求。

- [**notifySyncComplete**](#notifySyncComplete-instance_function)(errorMessage as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**) as **Void**

    发送系统通知以指示同步已完成。

- [**notifySyncProgress**](#notifySyncProgress-instance_function)(percentageComplete as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    发送系统通知以指示同步的整体进度。

- [**openWebPage**](#openWebPage-instance_function)(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), params as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**) as **Void**

    请求 GCM 发出将打开网页的手机通知。

- [**registerForOAuthMessages**](#registerForOAuthMessages-instance_function)(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(data as [Communications.OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)) as **Void**) as **Void**

    注册用于接收 OAuth 消息的回调。

- [**registerForPhoneAppMessageErrors**](#registerForPhoneAppMessageErrors-instance_function)(method as [Communications.PhoneMessageErrorCallback](/connect-iq/api-docs/Toybox/Communications/#PhoneMessageErrorCallback-named_type) or **Null**) as **Void**

    注册接收 Phone App 消息错误的回调。

- [**registerForPhoneAppMessages**](#registerForPhoneAppMessages-instance_function)(method as [Communications.PhoneMessageCallback](/connect-iq/api-docs/Toybox/Communications/#PhoneMessageCallback-named_type) or **Null**) as **Void**

    注册接收 Phone App 消息的回调。

- [**setMailboxListener**](#setMailboxListener-instance_function)(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(mailboxIterator as [Communications.MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/)) as **Void**) as **Void** deprecated

    Add a listener for mailbox events.

- [**startSync**](#startSync-instance_function)() as **Void**

    退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动。

- [**startSync2**](#startSync2-instance_function)(options as { :message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) } or **Null**) as **Void**

    退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动，带提供的消息。

- [**transmit**](#transmit-instance_function)(content as [Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, listener as [Communications.ConnectionListener](/connect-iq/api-docs/Toybox/Communications/ConnectionListener/)) as **Void**

    通过 BLE 链路发送数据。


## 类型定义详情

### **PhoneMessageCallback** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(msg as [Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/)) as **Void**

Since:

API 级别 1.0.0

### **PhoneMessageErrorCallback** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(error as [Communications.PhoneAppMessageError](/connect-iq/api-docs/Toybox/Communications/#PhoneAppMessageError-module)) as **Void**

Since:

API 级别 1.0.0

### **TransmitKeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API 级别 1.0.0

### **TransmitType** as [Communications.TransmitKeyType](/connect-iq/api-docs/Toybox/Communications/#TransmitKeyType-named_type) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Communications.TransmitKeyType](/connect-iq/api-docs/Toybox/Communications/#TransmitKeyType-named_type), [Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type)\> or **Null**

Since:

API 级别 1.0.0

## 实例方法详情

### **cancelAllRequests()** as **Void**

取消所有待处理的 JSON 和图像请求。

Connect IQ 平台上并行运行的活动请求数量有限。此调用将取消所有未完成的请求。

Since:

API 级别 1.2.0

### **checkWifiConnection(connectionStatusCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(result as { :wifiAvailable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), :errorCode as [Communications.WifiConnectionStatus](/connect-iq/api-docs/Toybox/Communications/#WifiConnectionStatus-module) }) as **Void**)** as **Void**

Checks if an internet-enabled WIFI access point is visible and can be connected to

Parameters:

- connectionStatusCallback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    连接测试完成后将调用的回调。此回调接受单个字典参数。该字典有两个键：

- :wifiAvailable — 如果可以连接到具有互联网访问的接入点则为 `true`，否则为 `false`

- :errorCode — 如果 :wifiAvailable 为 `false`，值将为 [WIFI\_CONNECTION\_STATUS\_\*](/connect-iq/api-docs/Toybox/Communications/#WIFI_CONNECTION_STATUS_LOW_BATTERY-const)，指示连接不可用的原因。



Since:

API 级别 3.2.0

### **emptyMailbox()** as **Void**

**此项已弃用**

此方法可能在 System 4 之后移除。

清空邮箱内容。

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
-   Edge® 130 Plus
-   Edge® 130
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
-   vívoactive®

:::

另见：

- [Communications.registerForPhoneAppMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForPhoneAppMessages-instance_function)


Since:

API 级别 1.0.0

### **encodeURL(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

将 URL 字符串转换为百分号编码字符串。

字符串中的保留字符将被替换为相应的十六进制值对。遵循 RFC 3986 中详述的 URI 编码方案。

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要编码的 URL 字符串


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    百分号编码的字符串


另见：

- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)


Since:

API 级别 1.1.2

### **generateSignedOAuthHeader(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), params as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>, requestMethod as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), signatureMethod as [Communications.SigningMethod](/connect-iq/api-docs/Toybox/Communications/#SigningMethod-module), token as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**, tokenSecret as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), consumerKey as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), consumerSecret as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

**此项已弃用**

此方法可能在 System 10 之后移除。

生成 OAuth 1.0a 请求中 "Authorization" 头的值。

The returned value can be set as the "Authorization" header for [makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function).

注意：

It is recommended to use OAuth 2.0 instead of OAuth 1.0a. See [Toybox::Communications#makeOAuthRequest](/connect-iq/api-docs/Toybox/Communications/#makeOAuthRequest-instance_function).

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    请求 URL

- params — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    请求参数

- requestMethod — ([Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module)) —

    HTTP\_REQUEST\_METHOD\_\* 值

- signatureMethod — ([Communications.SigningMethod](/connect-iq/api-docs/Toybox/Communications/#SigningMethod-module)) —

    OAUTH\_SIGNING\_METHOD\_\* 值

- token — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), null) —

    OAuth 服务提供的令牌

- 可以为 `null`


- tokenSecret — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The token secret given by the OAuth service. Used to sign the request

- consumerKey — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    标识应用的密钥

- consumerSecret — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    用于签名请求的消费者密钥


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    "Authorization" 头的值


Since:

API 级别 1.3.0

### **getMailbox()** as [Communications.MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/)

**此项已弃用**

此方法可能在 System 4 之后移除。

获取该应用邮箱的 MailboxIterator。

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
-   Edge® 130 Plus
-   Edge® 130
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
-   vívoactive®

:::

Returns:

- [Communications.MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/) —

    邮箱的迭代器


另见：

- [Communications.registerForPhoneAppMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForPhoneAppMessages-instance_function)


Since:

API 级别 1.0.0

### **makeImageRequest(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, options as { :palette as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\>, :maxWidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :maxHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :dithering as [Communications.Dithering](/connect-iq/api-docs/Toybox/Communications/#Dithering-module), :packingFormat as [Communications.PackingFormat](/connect-iq/api-docs/Toybox/Communications/#PackingFormat-module) }, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**) as **Void**)** as **Void**

发起图像下载请求。

GCM 将根据设备能力缩放和抖动图像，但用户可以传递额外选项（如将图像抖动为单色）

注意：

This method can be used when connected to WiFi or a mobile device over Bluetooth.

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要请求的图像的 URL

- parameters — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), null) —

    键值对的字典

- 附加到 URL

- 可以为 `null`


- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    额外的图像选项

- :palette — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        限制图像抖动的颜色板。使用较小的调色板可减小图像数据大小以加快传输速度

- :maxWidth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图像应缩放的最大宽度

- :maxHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        图像应缩放的最大高度

- :dithering — ([Communications.Dithering](/connect-iq/api-docs/Toybox/Communications/#Dithering-module)) —

        处理图像时使用的抖动类型。默认为 [IMAGE\_DITHERING\_FLOYD\_STEINBERG](/connect-iq/api-docs/Toybox/Communications/#IMAGE_DITHERING_FLOYD_STEINBERG-const)

- :packingFormat — ([Communications.PackingFormat](/connect-iq/api-docs/Toybox/Communications/#PackingFormat-module)) —

        要请求的图像数据格式。默认为 [PACKING\_FORMAT\_DEFAULT](/connect-iq/api-docs/Toybox/Communications/#PACKING_FORMAT_DEFAULT-const)

- responseCallback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调方法的引用，该方法必须接受两个参数：

- responseCode: The server response code or a BLE\_\* error type

- data: A [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) from a successful request, or `null` on error



Example:

```
using Toybox.System;
using Toybox.Communications;

var image;
var responseCode;

    // Set up the responseCallback function to return an image or null
    function responseCallback(responseCode, data) {
        responseCode = responseCode;
        if (responseCode == 200) {
            image = data;
        } else {
            image = null;
        }
    }

    // wrap the request in a function
    function makeRequest() {
        var url = "http://www.garmin.com/image-path";           // set the image url
        var parameters = null;                                  // set the parameters
        var options = {                                         // set the options
            :palette => [ Gfx.COLOR_ORANGE,                     // set the palette
                          Gfx.COLOR_DK_BLUE,
                          Gfx.COLOR_BLUE,
                          Gfx.COLOR_BLACK ],
            :maxWidth => 100,                                   // set the max width
            :maxHeight => 100,                                  // set the max height
            :dithering => Communications.IMAGE_DITHERING_NONE   // set the dithering
        };

        // Make the image request
        Communications.makeImageRequest(url, parameters, options, method(:responseCallback));
    }
```

Since:

API 级别 1.2.0

### **makeJsonRequest(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\> or **Null**, options as { :method as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), :headers as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) } or **Null**, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**) as **Void**)** as **Void**

**此项已弃用**

此方法可能在 System 4 之后移除。

发起下载请求。

The request is asynchronous; the responseCallback will be called when the request returns.

注意：

This method can be used when connected to WiFi or a mobile device over Bluetooth.

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    正在请求的 URL

- parameters — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary of keys and values

- 附加到 URL for GET/DELETE request

- 作为 POST/PUT 请求的正文

- 这些值必须进行 URL 编码

- 可以为 `null`


- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- 可以为 `null`


- :method — ([Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module)) —

        请求的 HTTP 方法。此选项应为 HTTP\_REQUEST\_METHOD\_\* 值。

- :headers — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        A Dictionary of HTTP headers to include in the request

- The "Content-Type" header for the body of the request can be specified using a REQUEST\_CONTENT\_TYPE\_\* value


- This is only valid for methods PUT and POST (you cannot set a body for a GET or DELETE request)

- If the content type is not specified, it will default to "application/json" for GET and DELETE requests, and will default to "application/x-www-form-urlencoded" for POST and PUT requests


- responseCallback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调方法的引用，该方法必须接受两个参数：

- responseCode: the server response code

- data: the content if the request was successful, or `null`



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

另见：

- [Communications.makeWebRequest().](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)


Since:

API 级别 1.0.0

### **makeOAuthRequest(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Communications.TokenResult](/connect-iq/api-docs/Toybox/Communications/#TokenResult-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>)** as **Void**

通过 Garmin Connect Mobile 请求 OAuth 登录。

手机将触发通知，点击后显示包含 `requestUrl` 的网页视图。如果用户授予应用权限，则调用 [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function) 注册的回调，并传入 OAuth 响应中的 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)。

注意：

This method can only be used when connected to a mobile device over Bluetooth.

Parameters:

- requestUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URL to load in the web view to begin authentication

- requestParams — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Non-URL encoded parameters for the `requestUrl`

- resultUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URL of the final page of authentication that contains the `resultKeys`

- resultType — (TokenResult) —

    指定结果格式的 OAUTH\_RESULT\_TYPE\_\* 值

- resultKeys — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    传递给回调方法的期望 OAuth 响应值。键映射到实际的 OAuth 响应键，值映射到 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) 数据的键。


Example:

```
using Toybox.Communications;
using Toybox.System;

const CLIENT_ID = "myClientID";
const OAUTH_CODE = "myOAuthCode";
const OAUTH_ERROR = "myOAuthError";

// register a callback to capture results from OAuth requests
Communications.registerForOAuthMessages(method(:onOAuthMessage));

// wrap the OAuth request in a function
function getOAuthToken() {
   status = "Look at OAuth screen\n";
   Ui.requestUpdate();

   // set the makeOAuthRequest parameters
   var params = {
       "scope" => Comm.encodeURL("https://www.serviceurl.com/"),
       "redirect_uri" => "https://localhost",
       "response_type" => "code",
       "client_id" => $.CLIENT_ID
   };

   // makeOAuthRequest triggers login prompt on mobile device.
   // "responseCode" and "responseError" are the parameters passed
   // to the resultUrl. Check the oauth provider's documentation
   // to determine the correct strings to use.
   Comm.makeOAuthRequest(
       "https://requesturl.com",
       params,
       "http://resulturl.com",
       Comm.OAUTH_RESULT_TYPE_URL,
       {"responseCode" => $.OAUTH_CODE, "responseError" => $.OAUTH_ERROR}
   );
}

// implement the OAuth callback method
function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[$.OAUTH_CODE];
        var error = message.data[$.OAUTH_ERROR];
    } else {
        // return an error
    }
}
// the OAuth service can now be used with a makeWebRequest() call
```

Since:

API 级别 1.3.0

### **makeWebRequest(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\> or **Null**, options as { :method as [Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module), :headers as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), :responseType as [Communications.HttpResponseContentType](/connect-iq/api-docs/Toybox/Communications/#HttpResponseContentType-module), :context as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, :maxBandwidth as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :fileDownloadProgressCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(totalBytesTransferred as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), fileSize as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as **Void** } or **Null**, responseCallback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**) as **Void** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), data as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [PersistedContent.Iterator](/connect-iq/api-docs/Toybox/PersistedContent/Iterator/) or **Null**, context as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**)** as **Void**

发起下载请求。

Web 请求是异步的。提供的响应回调方法将在请求返回时调用。

注意：

This method can be used when connected to WiFi or a mobile device over Bluetooth.

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    正在请求的 URL

- parameters — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    键值对的字典。

- 这些值不应进行 URL 编码。

- 可以为 `null`。


- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :method — ([Communications.HttpRequestMethod](/connect-iq/api-docs/Toybox/Communications/#HttpRequestMethod-module)) —

        The HTTP method of the request. This should be an HTTP\_REQUEST\_METHOD\_\* value.

- :headers — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

        A Dictionary of HTTP headers to include in the request.

- The "Content-Type" header for the body of the request can be specified using a [REQUEST\_CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Communications/) value.

- If the content type is not specified, it will default to "application/json" for GET and DELETE requests, and will default to "application/x-www-form-urlencoded" for POST and PUT requests.

- By default, DELETE requests will have their parameters appended to the URL.

- Setting the method as DELETE as well as a "Content-Type" header will result in the parameters being set in the body of the request and they will not be appended to the URL.

- GET requests can only have their parameters appended to the URL, specifying the "Content-Type" header will not set the body.


- :responseType — ([Communications.HttpResponseContentType](/connect-iq/api-docs/Toybox/Communications/#HttpResponseContentType-module)) —

        响应格式。

- This should be an [HTTP\_RESPONSE\_CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Communications/) value.

- If HTTP\_RESPONSE\_CONTENT\_TYPE\_FIT or HTTP\_RESPONSE\_CONTENT\_TYPE\_GPX is given, the system will attempt to download and parse a FIT or GPX file and store the contained data in the device, based on the contents of the file.

- If not given, the system will use the Content-Type header from the server response to determine the format of the response body. If the Content-Type header from the response is not one of the known HTTP\_RESPONSE\_CONTENT\_TYPE\_\* types, an error will occur.


- :context — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

        传递给响应回调的用户特定上下文对象。如果填充了此值，回调需要接受第三个参数。

- :mediaEncoding — ([Media.Encoding](/connect-iq/api-docs/Toybox/Media/#Encoding-module)) —

        The encoding of the audio content that is being downloaded. Should be a [Media.ENCODING\_\*](/connect-iq/api-docs/Toybox/Media/) value.

- :maxBandwidth — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        最大带宽。TVM 将选择带宽最高且不超过最大值的音频流。此选项仅在处理 HLS 内容时有效

- :fileDownloadProgressCallback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

        必须接受两个参数的回调方法

- totalBytesTransferred：当前文件下载传输的总字节数

- fileSize：正在下载的文件大小。注意，如果无法从服务器确定文件大小，此值可能为 `null`。

- 此选项仅支持媒体文件下载进度

- 此选项自 CIQ 3.2.0 起支持


- responseCallback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调方法的引用，该方法必须接受两个参数：

- responseCode: The server response code or a BLE\_\* error type

- data: The content if the request was successful, or `null`



Example:

```
// It is common for developers to wrap a makeWebRequest() call in a function
// as displayed below. The function defines the variables for each of the
// necessary arguments in a Communications.makeWebRequest() call, then passes
// these variables as the arguments. This allows for a clean layout of your web
// request and expandability.
using Toybox.System;
using Toybox.Communications;

   // set up the response callback function
   function onReceive(responseCode, data) {
       if (responseCode == 200) {
           System.println("Request Successful");                   // print success
       }
       else {
           System.println("Response: " + responseCode);            // print response code
       };

   };

   function makeRequest() {
       var url = "https://www.garmin.com";                         // set the url

       var params = {                                              // set the parameters
              "definedParams" => "123456789abcdefg"
       };

       var options = {                                             // set the options
           :method => Communications.HTTP_REQUEST_METHOD_GET,      // set HTTP method
           :headers => {                                           // set headers
                   "Content-Type" => Communications.REQUEST_CONTENT_TYPE_URL_ENCODED},
                                                                   // set response type
           :responseType => Communications.HTTP_RESPONSE_CONTENT_TYPE_URL_ENCODED
       };

       var responseCallback = method(:onReceive);                  // set responseCallback to
                                                                   // onReceive() method
       // Make the Communications.makeWebRequest() call
       Communications.makeWebRequest(url, params, options, responseCallback);
  }
```

Since:

API 级别 1.3.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if a required option for a particular request is omitted

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    Thrown if a given :responseType option is not supported for the device the request is being made from. An example would be using HTTP\_RESPONSE\_CONTENT\_TYPE\_AUDIO on a device that does not support audio content provider apps


### **notifySyncComplete(errorMessage as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**)** as **Void**

发送系统通知以指示同步已完成。

Parameters:

- errorMessage — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    失败时的错误描述消息。如果同步成功完成，应将此方法传递 `null`。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
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
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
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

Since:

API 级别 3.1.0

### **notifySyncProgress(percentageComplete as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

发送系统通知以指示同步的整体进度。

Parameters:

- percentageComplete — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    0 到 100 的整数，表示完成百分比。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
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
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
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

Since:

API 级别 3.1.0

### **openWebPage(url as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), params as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)** as **Void**

请求 GCM 发出将打开网页的手机通知。

此方法将推送必须由用户接受的手机通知。如果用户接受，将在手机默认浏览器中打开此方法定义的网页。

注意：

This method can only be used when connected to a mobile device over Bluetooth.

Parameters:

- url — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    The URL to open.

- params — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    The URL parameters used to add to the pages web page URL. Parameters should not be URL encoded.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Additional options for the request


Example:

```
using Toybox.Communications;
Communications.openWebPage(
   "http://www.bing.com/images/search",
   {"q" => "cute kitten"},
   null
);
// passes the url: http://bing.com/images/search?q=cute kitten to the
// browser on the phone
```

Since:

API 级别 1.3.0

### **registerForOAuthMessages(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(data as [Communications.OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)) as **Void**)** as **Void**

注册用于接收 OAuth 消息的回调。

每接收一条 OAuth 消息调用一次回调。如果调用此函数时有消息等待应用，回调将立即为每条等待消息调用一次。

Parameters:

- method — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调的引用，该回调必须接收类型为 [OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/) 的 `data` 参数。


Example:

```
using Toybox.Communications;

function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[OAUTH_CODE];
        var error = message.data[OAUTH_ERROR];
    } else {
        // return an error
    }
}
Communications.registerForOAuthMessages(method(:onOAuthMessage));
```

Since:

API 级别 1.3.0

### **registerForPhoneAppMessageErrors(method as [Communications.PhoneMessageErrorCallback](/connect-iq/api-docs/Toybox/Communications/#PhoneMessageErrorCallback-named_type) or **Null**)** as **Void**

注册接收 Phone App 消息错误的回调。

当消息无法接收时调用回调。如果调用此函数时有消息等待应用，回调将立即被调用。

Example:

```
using Communications;

function phoneMessageErrorCallback(err as PhoneAppMessageError) as Void {
   System.println(Lang.format("Error: $1$", [ err ]));
}

// register for message errors where supported
if (Communications has :registerForPhoneAppMessageErrors) {
  Communications.registerForPhoneAppMessageErrors(method(:phoneMessageErrorCallback));
}
```

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

另见：

- [Communications.registerForPhoneAppMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForPhoneAppMessages-instance_function)


Since:

API 级别 6.0.0

### **registerForPhoneAppMessages(method as [Communications.PhoneMessageCallback](/connect-iq/api-docs/Toybox/Communications/#PhoneMessageCallback-named_type) or **Null**)** as **Void**

注册接收 Phone App 消息的回调。

每接收一条消息调用一次回调。如果调用此函数时有消息等待应用，回调将立即为每条等待消息调用一次。

Parameters:

- method — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调的引用，该回调必须接收类型为 [PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/) 的 `data` 参数。


Example:

```
using Communications;

function phoneMessageCallback(msg as PhoneAppMessage) as Void {
   System.println(Lang.format("Data: $1$", [ msg.data ]));
}

// register for messages
Communications.registerForPhoneAppMessages(method(:phoneMessageCallback));
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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
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
-   vívoactive®

:::

另见：

- [Toybox.Communications.PhoneAppMessage](/connect-iq/api-docs/Toybox/Communications/PhoneAppMessage/)

- [Communications.registerForPhoneAppMessageErrors()](/connect-iq/api-docs/Toybox/Communications/#registerForPhoneAppMessageErrors-instance_function)


Since:

API 级别 1.4.0

### **setMailboxListener(listener as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(mailboxIterator as [Communications.MailboxIterator](/connect-iq/api-docs/Toybox/Communications/MailboxIterator/)) as **Void**)** as **Void**

**此项已弃用**

此方法可能在 System 4 之后移除。

Add a listener for mailbox events.

The listener method is called whenever a new message is received.

Parameters:

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A reference to a callback method which must accept an iterator. The iterator is the mailbox iterator for the app


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
-   Edge® 130 Plus
-   Edge® 130
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
-   vívoactive®

:::

另见：

- [Communications.registerForPhoneAppMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForPhoneAppMessages-instance_function)


Since:

API 级别 1.0.0

### **startSync()** as **Void**

退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动。

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
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
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
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

Since:

API 级别 3.1.0

### **startSync2(options as { :message as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) } or **Null**)** as **Void**

退出 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 并以同步模式启动，带提供的消息。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    a dictionary of options, can be null

- :message — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        the sync message to display


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 4.0.4

### **transmit(content as [Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**, listener as [Communications.ConnectionListener](/connect-iq/api-docs/Toybox/Communications/ConnectionListener/))** as **Void**

通过 BLE 链路发送数据。

支持 for transmittable types has been expanded over time.

- [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) (Since 6.0.0)


Parameters:

- content — ([Communications.TransmitType](/connect-iq/api-docs/Toybox/Communications/#TransmitType-named_type)) —

    The object to be sent

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Additional transmit options for future proofing. For now, an empty Dictionary is used.

- listener — ([Communications.ConnectionListener](/connect-iq/api-docs/Toybox/Communications/ConnectionListener/)) —

    An extension of the ConnectionListener class


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
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 130 Plus
-   Edge® 130
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
-   vívoactive®

:::

Since:

API 级别 1.0.0
