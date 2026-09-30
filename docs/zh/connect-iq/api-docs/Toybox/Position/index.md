---
title: "Module: Toybox.Position"
---
# 模块：Toybox.Position

## 概述

Position 模块为位置信息和定位传感器提供接口。

此模块还提供两组常量：

- GEO：用于指定 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 格式。

- QUALITY：表示计算 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 信息时的 GPS 定位质量


Example:

```
using Toybox.Position;
using Toybox.System;
Position.enableLocationEvents(Position.LOCATION_ONE_SHOT, method(:onPosition));
function onPosition(info) {
    var myLocation = info.position.toDegrees();
    System.println("Latitude: " + myLocation[0]); // e.g. 38.856147
    System.println("Longitude: " + myLocation[1]); // e.g -94.800953
}
```

Since:

API 级别 1.0.0

## 命名空间下的类

类：[Info](/connect-iq/api-docs/Toybox/Position/Info/), [Location](/connect-iq/api-docs/Toybox/Position/Location/)

## 常量摘要

### Constellation

**此项已弃用**

此枚举可能会在 System 10 之后移除。

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONSTELLATION\_GPS | 0 |
API 级别 3.2.0

|

使用 GPS 卫星星座

|
| CONSTELLATION\_GLONASS | 1 |

API 级别 3.2.0

|

使用 GLONASS 卫星星座

|
| CONSTELLATION\_GALILEO | 2 |

API 级别 3.2.0

|

使用 GALILEO 卫星星座

|

### Configuration

已知 GNSS 配置的配置值

Since:

API 级别 3.3.6

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONFIGURATION\_GPS | 1 |
API 级别 3.3.6

|

GPS L1

|
| CONFIGURATION\_GPS\_GLONASS | 2 |

API 级别 3.3.6

|

GPS L1 和 GLONASS

|
| CONFIGURATION\_GPS\_GALILEO | 3 |

API 级别 3.3.6

|

GPS L1 和 GALILEO L1

|
| CONFIGURATION\_GPS\_BEIDOU | 4 |

API 级别 3.3.6

|

GPS L1 和 BEIDOU L1

|
| CONFIGURATION\_GPS\_GLONASS\_GALILEO\_BEIDOU\_L1 | 5 |

API 级别 3.3.6

|

GPS L1, GLONASS, GALILEO L1, BEIDOU L1

fenix7 和 edge1040 等 System 6 设备支持此选项

|
| CONFIGURATION\_GPS\_GLONASS\_GALILEO\_BEIDOU\_L1\_L5 | 6 |

API 级别 3.3.6

|

GPS L1, GPS L5, GLONASS, GALILEO L1A, GALILEO L5, BEIDOU L1, BEIDOU L5

Referred to as Multi-GNSS Multi-band on Edge 1040.

fenix7 和 edge1040 等 System 6 设备支持此选项

|
| CONFIGURATION\_SAT\_IQ | 255 |

API 级别 3.3.6

|

AutoGNSS (SatIQ™)

|

### CoordinateFormat

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| GEO\_DEG | 0 |
API 级别 1.0.0

|

十进制度格式：ddd.dddddd（例如 38.278652）

| -   [Decimal Degrees](https://en.wikipedia.org/wiki/Decimal_degrees)
|
| GEO\_DM | 1 |

API 级别 1.0.0

|

度/十进制度分格式：dddmm.mmm（例如 38 27.865'）

 |  |
| GEO\_DMS | 2 |

API 级别 1.0.0

|

度/分/秒（DMS）格式：ddd mm ss（例如 38 27' 8"）

 |  |
| GEO\_MGRS | 3 |

API 级别 1.0.0

|

军事网格参考系统，即 MGRS（例如 4QFJ12345678）

| -   [Military Grid Reference System](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)
|

### Quality

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| QUALITY\_NOT\_AVAILABLE | 0 |
API 级别 1.0.0

|

GPS 不可用

 |  |
| QUALITY\_LAST\_KNOWN | 1 |

API 级别 1.0.0

|

该 Location 基于最近一次已知的 GPS 定位结果。

 |  |
| QUALITY\_POOR | 2 |

API 级别 1.0.0

|

该 Location 使用较差的 GPS 定位结果计算得出。仅可用 2-D GPS 定位结果，可能是由于跟踪到的卫星数量有限。

 |  |
| QUALITY\_USABLE | 3 |

API 级别 1.0.0

|

该 Location 使用可用的 GPS 定位结果计算得出。可用 3-D GPS 定位结果，但 HDOP（水平精度因子）处于临界水平

| -   [Dilution of Precision](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation))
|
| QUALITY\_GOOD | 4 |

API 级别 1.0.0

|

该 Location 使用良好的 GPS 定位结果计算得出。可用 3-D GPS 定位结果，并且 HDOP（水平精度因子）为良好至优秀。

| -   [Dilution of Precision](https://en.wikipedia.org/wiki/Dilution_of_precision_(navigation))
|

### LocationAcquisitionType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LOCATION\_ONE\_SHOT | 0 |
API 级别 1.0.0

|

启用一次性位置获取

|
| LOCATION\_CONTINUOUS | 1 |

API 级别 1.0.0

|

启用持续位置跟踪

|
| LOCATION\_DISABLE | 2 |

API 级别 1.0.0

|

禁用位置跟踪

|

### PositioningMode

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| POSITIONING\_MODE\_NORMAL | 0 |
API 级别 3.2.0

|

默认用于健身活动的标准定位模式

|
| POSITIONING\_MODE\_AVIATION | 1 |

API 级别 3.2.0

|

为需要支持更高海拔的航空用例启用特殊模式。

|

## 实例方法摘要 [collapse](#)

- [**createBoundingBox**](#createBoundingBox-instance_function)(locations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>) as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] or **Null**

    从 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象数组创建边界框。

- [**enableLocationEvents**](#enableLocationEvents-instance_function)(options as { :acquisitionType as [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), :constellations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Constellation](/connect-iq/api-docs/Toybox/Position/#Constellation-module)\>, :configuration as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module), :mode as [Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module) } or [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(loc as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)) as **Void**) as **Void**

    请求 Location 事件。

- [**getInfo**](#getInfo-instance_function)() as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

    获取当前 [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)。

- [**hasConfigurationSupport**](#hasConfigurationSupport-instance_function)(config as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定设备是否支持请求的 GPS 配置。

- [**parse**](#parse-instance_function)(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

    将 String 转换为 Location 对象。


## 实例方法详情

### **createBoundingBox(locations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)\>)** as \[ [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/), [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) \] or **Null**

从 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象数组创建边界框。

Parameters:

- locations — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象数组。


Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含用于指定输入数组边界的 [Location](/connect-iq/api-docs/Toybox/Position/Location/) 对象的数组；如果输入数组为空，则为 `null`。第一个元素描述左上角，第二个元素描述右下角。


Since:

API 级别 3.0.3

### **enableLocationEvents(options as { :acquisitionType as [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), :constellations as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Position.Constellation](/connect-iq/api-docs/Toybox/Position/#Constellation-module)\>, :configuration as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module), :mode as [Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module) } or [Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module), listener as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(loc as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)) as **Void**)** as **Void**

请求 Location 事件。

使用此 API 需要启用定位权限。只有设备应用和小组件可以使用此 API。

注意：

仅 ConnectIQ 3.2.0 及更高版本支持传递 options [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)。

注意：

仅 ConnectIQ 3.3.6 或更高版本支持传递 `:configuration` 选项。

注意：

多任务：应用进入非活动状态时，位置事件将被禁用，并在再次变为活动状态时重新启用。这些状态变化通过调用 AppBase.onActive() 和 AppBase.onInactive() 表示。

Parameters:

- options — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    一个 LOCATION\_\* 值或选项中的 [Toybox::Lang::Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)。

- :acquisitionType — ([Position.LocationAcquisitionType](/connect-iq/api-docs/Toybox/Position/#LocationAcquisitionType-module)) —

        指示要使用的位置获取类型的 LOCATION\_\* 枚举值。

- :constellations — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        用于指定要启用哪些星座的 CONSTELLATION\_\* 枚举值数组。如果未提供，默认使用 CONSTELLATION\_GPS。

- :configuration — ([Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) —

        指定要启用哪项配置的 CONFIGURATION\_\* 值。仅 ConnectIQ 3.3.6 及更高版本可用。

- :mode — ([Position.PositioningMode](/connect-iq/api-docs/Toybox/Position/#PositioningMode-module)) —

        指定要使用模式的 POSITIONING\_MODE\_\* 值。如果为 `null`，默认使用 POSITIONING\_MODE\_NORMAL。

- listener — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对侦听器方法的引用：

- 收到位置更新时调用

- 接收一个 Position.Info 对象



Example:

```
using Toybox.Position;

var options = {
    :acquisitionType => Position.LOCATION_CONTINUOUS
};

if (Position has :POSITIONING_MODE_AVIATION) {
    options[:mode] = Position.POSITIONING_MODE_AVIATION;
}

if (Position has :hasConfigurationSupport) {
    if ((Position has :CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5)) {
        options[:configuration] = Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1_L5;
    } else if ((Position has :CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1)) {
        options[:configuration] = Position.CONFIGURATION_GPS_GLONASS_GALILEO_BEIDOU_L1;
    } else if ((Position has :CONFIGURATION_GPS) &&
       Position.hasConfigurationSupport(Position.CONFIGURATION_GPS)) {
        options[:configuration] = Position.CONFIGURATION_GPS;
    }
} else if (Position has :CONSTELLATION_GLONASS) {
    // this can fail with InvalidValueException if combination is not supported by device
    options[:constellations] = [ Position.CONSTELLATION_GPS, Position.CONSTELLATION_GLONASS ];
} else {
    options = Position.LOCATION_CONTINUOUS;
}

// Continuous location updates using selected options
Position.enableLocationEvents(options, method(:onPosition));

function onPosition(info) {
    var myLocation = info.position.toDegrees();
}
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

Since:

API 级别 1.0.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果 :acquisitionType 无效、设备不支持特定的 CONSTELLATION\_\* 值，或指定了无效的星座值组合，则会抛出此异常。


### **getInfo()** as [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

获取当前 [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)。

使用此 API 需要启用定位权限。这对于在 [Timer](/connect-iq/api-docs/Toybox/Timer/Timer/) 中按需或定期获取当前位置信息很有用。

Example:

每秒获取一次位置信息

```
using Toybox.Position;
using Toybox.System;
using Toybox.Timer;
var dataTimer = new Timer.Timer();
dataTimer.start(method(:timerCallback), 1000, true); // A one-second timer
function timerCallback() {
    var positionInfo = Position.getInfo();
    if (positionInfo has :altitude && positionInfo.altitude != null) {
        var altitude = positionInfo.altitude;
        System.println("Altitude: " + altitude);
    }
}
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

Returns:

- [Position.Info](/connect-iq/api-docs/Toybox/Position/Info/)

Since:

API 级别 1.0.0

### **hasConfigurationSupport(config as [Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定设备是否支持请求的 GPS 配置

Parameters:

- config — ([Position.Configuration](/connect-iq/api-docs/Toybox/Position/#Configuration-module)) —

    指定要启用哪项配置的 CONFIGURATION\_\* 枚举值。仅 ConnectIQ 3.3.6 及更高版本可用。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
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
-   eTrex® Touch
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
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Since:

API 级别 3.3.6

### **parse(string as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), format as [Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module))** as [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/)

将 String 转换为 Location 对象。

输入 String 必须采用 [Position.GEO\_\*](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module) 常量描述的四种格式之一。

Parameters:

- string — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要解析的 String

- format — ([Position.CoordinateFormat](/connect-iq/api-docs/Toybox/Position/#CoordinateFormat-module)) —

    一个 Position.GEO\_\* 值


Example:

```
using Toybox.Position;
using Toybox.System;
var locString = "38.856147, -94.800953";
var myLocation = Position.parse(locString, Position.GEO_DEG);
System.println(myLocation.toRadians()); // [0.678168, -1.654589]
```

Returns:

- [Position.Location](/connect-iq/api-docs/Toybox/Position/Location/) —

    表示输入 String 所描述位置的 Location 对象


Since:

API 级别 1.0.0
