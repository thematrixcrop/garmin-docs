---
title: "Module: Toybox.FitContributor"
---
# 模块：Toybox.FitContributor

## 概述

FitContributor 模块允许应用程序和数据字段在活动期间将 [Field](/connect-iq/api-docs/Toybox/FitContributor/Field/) 数据记录到设备文件系统上的 FIT 文件中。这对于记录设备尚未计算的数据非常有用，这些数据可以同步到 Garmin Connect 等服务。

FitContributor 有三种可用的消息类型：

MESG\_TYPE\_SESSION

会话数据在每次记录会话结束时写入一次，用于存储与整个会话相关的数据（例如平均速度）。

MESG\_TYPE\_LAP

每圈数据在会话中每圈写入一次，用于记录与每圈相关的数据（例如平均圈速）。

MESG\_TYPE\_RECORD

根据设备不同，记录数据每秒写入一次，或在有新数据时写入（智能记录），但写入频率绝不会高于每秒一次。此消息类型用于瞬时值（例如当前速度）。

数据类型常量也可用于 [createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function) 方法。

## 另见：

- [Session.createField()](/connect-iq/api-docs/Toybox/ActivityRecording/Session/#createField-instance_function)

- [Learn more about the FIT format](http://www.thisisant.com/resources/fit)


Example:

在 SimpleDataField 应用中使用 FitContributor Field

```
using Toybox.FitContributor;
using Toybox.WatchUi;
class BananasEarnedView extends WatchUi.SimpleDataField
{
    var bananasEarnedField = null;
    var totalBananas = 0.0;

    const CALORIES_PER_BANANA = 105.0;
    const BANANAS_FIELD_ID = 0;

    function initialize() {
        SimpleDataField.initialize();

        // Create the custom FIT data field we want to record.
        bananasEarnedField = createField(
            "bananas_earned",
            BANANAS_FIELD_ID,
            FitContributor.DATA_TYPE_FLOAT,
            {:mesgType=>Fit.MESG_TYPE_RECORD, :units=>"B"}
        );

        bananasEarnedField.setData(0.0);
    }

    function compute(info) {
        if (info != null && info.calories != null) {
            // Calculate and set data to be written to the Field
            totalBananas = (info.calories / CALORIES_PER_BANANA).toFloat();
            bananasEarnedField.setData(totalBananas);
        }
        // Display the data on the screen of the device
        return totalBananas;
    }
}
```

Since:

API 级别 1.3.0

应用类型与运行时上下文：

- 数据字段

- 速览

- 手表应用


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

- FitContributor


## 命名空间下的类

类：[Field](/connect-iq/api-docs/Toybox/FitContributor/Field/)

## 常量摘要

### MessageType

Since:

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MESG\_TYPE\_SESSION | 18 |
API 级别 1.3.0

|

会话消息的消息类型。

|
| MESG\_TYPE\_LAP | 19 |

API 级别 1.3.0

|

圈消息的消息类型。

|
| MESG\_TYPE\_RECORD | 20 |

API 级别 1.3.0

|

记录消息的消息类型。

|

### DataType

Since:

API 级别 1.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DATA\_TYPE\_SINT8 | 1 |
API 级别 1.3.0

 |  |
| DATA\_TYPE\_UINT8 | 2 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_SINT16 | 3 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_UINT16 | 4 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_SINT32 | 5 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_UINT32 | 6 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_STRING | 7 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_FLOAT | 8 |

API 级别 1.3.0

 |  |
| DATA\_TYPE\_DOUBLE | 9 |

API 级别 1.3.0

 |  |
