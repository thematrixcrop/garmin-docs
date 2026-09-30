---
title: "Module: Toybox.AntPlus"
---
# Module: Toybox.AntPlus

## 概述

The AntPlus module contains the interface for ANT+ data.

ANT+ 构建于 ANT 之上。它是一组相互约定的设备配置文件，用于定义通过 ANT 传输的信息含义。例如，心率监测器会根据 ANT+ 心率设备配置文件中的定义，通过 ANT 发送心率信息。CIQ 设备可以使用 [ANT Module](/connect-iq/api-docs/Toybox/Ant/) 实现 ANT+ 设备配置文件，并与附近同样实现了该 ANT+ 设备配置文件的设备通信，例如心率、骑行功率和健身器材控制。AntPlus 模块提供了用于以特定且标准化方式与 ANT+ 配置文件通信的 API，这些配置文件定义在下方链接所指向的文档“ANT+ Device Profiles”中。

## 另见：

- [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/)

- [ANT Basics](https://www.thisisant.com/developer/ant/ant-basics/#104_tab)

- [ANT Downloads & Resources (ANT+ Device Profiles)](https://www.thisisant.com/developer/resources/downloads/)


Since:

API 级别 2.2.0

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

:::

## 命名空间下的类

类：[AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/), [BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/), [BikeCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeCadence/), [BikeCadenceInfo](/connect-iq/api-docs/Toybox/AntPlus/BikeCadenceInfo/), [BikeCadenceListener](/connect-iq/api-docs/Toybox/AntPlus/BikeCadenceListener/), [BikeLight](/connect-iq/api-docs/Toybox/AntPlus/BikeLight/), [BikePower](/connect-iq/api-docs/Toybox/AntPlus/BikePower/), [BikePowerListener](/connect-iq/api-docs/Toybox/AntPlus/BikePowerListener/), [BikeRadar](/connect-iq/api-docs/Toybox/AntPlus/BikeRadar/), [BikeRadarListener](/connect-iq/api-docs/Toybox/AntPlus/BikeRadarListener/), [BikeSpeed](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeed/), [BikeSpeedCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadence/), [BikeSpeedCadenceInfo](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadenceInfo/), [BikeSpeedCadenceListener](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadenceListener/), [BikeSpeedInfo](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedInfo/), [BikeSpeedListener](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedListener/), [CalculatedCadence](/connect-iq/api-docs/Toybox/AntPlus/CalculatedCadence/), [CalculatedPower](/connect-iq/api-docs/Toybox/AntPlus/CalculatedPower/), [CalculatedWheelDistance](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelDistance/), [CalculatedWheelSpeed](/connect-iq/api-docs/Toybox/AntPlus/CalculatedWheelSpeed/), [CommonData](/connect-iq/api-docs/Toybox/AntPlus/CommonData/), [DerailleurStatus](/connect-iq/api-docs/Toybox/AntPlus/DerailleurStatus/), [Device](/connect-iq/api-docs/Toybox/AntPlus/Device/), [DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/), [DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/), [FitnessEquipment](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipment/), [FitnessEquipmentData](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentData/), [FitnessEquipmentListener](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentListener/), [FitnessEquipmentMode](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipmentMode/), [LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/), [LightNetworkListener](/connect-iq/api-docs/Toybox/AntPlus/LightNetworkListener/), [ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/), [PedalPowerBalance](/connect-iq/api-docs/Toybox/AntPlus/PedalPowerBalance/), [ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/), [RadarTarget](/connect-iq/api-docs/Toybox/AntPlus/RadarTarget/), [ResistanceSettings](/connect-iq/api-docs/Toybox/AntPlus/ResistanceSettings/), [RunningDynamics](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamics/), [RunningDynamicsData](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamicsData/), [RunningDynamicsListener](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamicsListener/), [SensorPosition](/connect-iq/api-docs/Toybox/AntPlus/SensorPosition/), [Shifting](/connect-iq/api-docs/Toybox/AntPlus/Shifting/), [ShiftingListener](/connect-iq/api-docs/Toybox/AntPlus/ShiftingListener/), [ShiftingStatus](/connect-iq/api-docs/Toybox/AntPlus/ShiftingStatus/), [SimulationSettings](/connect-iq/api-docs/Toybox/AntPlus/SimulationSettings/), [TargetPowerSettings](/connect-iq/api-docs/Toybox/AntPlus/TargetPowerSettings/), [TorqueEffectivenessPedalSmoothness](/connect-iq/api-docs/Toybox/AntPlus/TorqueEffectivenessPedalSmoothness/), [UserSettings](/connect-iq/api-docs/Toybox/AntPlus/UserSettings/)

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | FRONT\_GEAR\_INVALID | 7 |
API 级别 3.1.0

|

Invalid front gear index

|
| 类型 | INVALID\_CADENCE | \-1 |

API 级别 3.0.0

 |  |
| 类型 | INVALID\_SPEED | \-1 |

API 级别 3.0.0

|

Represents an invalid speed value

|
| 类型 | MAX\_GEARS\_INVALID | 0 |

API 级别 3.1.0

|

Invalid max gears value

|
| 类型 | REAR\_GEAR\_INVALID | 31 |

API 级别 3.1.0

|

Invalid rear gear index

|

### BatteryStatusValue

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BATT\_STATUS\_NEW | 1 |
API 级别 2.2.0

 |  |
| BATT\_STATUS\_GOOD | 2 |

API 级别 2.2.0

 |  |
| BATT\_STATUS\_OK | 3 |

API 级别 2.2.0

 |  |
| BATT\_STATUS\_LOW | 4 |

API 级别 2.2.0

 |  |
| BATT\_STATUS\_CRITICAL | 5 |

API 级别 2.2.0

 |  |
| BATT\_STATUS\_INVALID | 7 |

API 级别 2.2.0

 |  |
| BATT\_STATUS\_CNT | 8 |

API 级别 2.2.0

 |  |

### MessageSendStatus

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MESSAGE\_SENT\_SUCCESS | 0 |
API 级别 3.1.0

|

Message sent successfully

|
| MESSAGE\_SENT\_FAILED | 1 |

API 级别 3.1.0

|

Message sent failed

|
| MESSAGE\_SENT\_COUNT | 2 |

API 级别 3.1.0

 |  |

### MessageType

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MESSAGE\_TYPE\_MANUFACTURER | 0 |
API 级别 3.1.0

|

Manufacturer specific message sent

|
| MESSAGE\_TYPE\_PAGE\_REQUEST | 1 |

API 级别 3.1.0

|

Page request sent

|
| MESSAGE\_TYPE\_COUNT | 2 |

API 级别 3.1.0

 |  |

### DeviceCurrentState

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DEVICE\_STATE\_DEAD | 0 |
API 级别 2.2.0

|

设备不可用（未配对或已禁用）

|
| DEVICE\_STATE\_CLOSED | 1 |

API 级别 2.2.0

|

设备通道已关闭

|
| DEVICE\_STATE\_SEARCHING | 2 |

API 级别 2.2.0

|

设备通道已打开并正在搜索

|
| DEVICE\_STATE\_TRACKING | 3 |

API 级别 2.2.0

|

设备通道已打开并正在跟踪

|
| DEVICE\_STATE\_CNT | 4 |

API 级别 2.2.0

 |  |

### LightNetworkState

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LIGHT\_NETWORK\_STATE\_NOT\_FORMED | 0 |
API 级别 2.2.0

|

Light network is not yet formed

|
| LIGHT\_NETWORK\_STATE\_FORMING | 1 |

API 级别 2.2.0

|

Light network is forming

|
| LIGHT\_NETWORK\_STATE\_FORMED | 2 |

API 级别 2.2.0

|

Light network is formed

|

### LightNetworkMode

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LIGHT\_NETWORK\_MODE\_INDIVIDUAL | 0 |
API 级别 2.2.0

|

Light modes are set by the user

|
| LIGHT\_NETWORK\_MODE\_AUTO | 1 |

API 级别 2.2.0

|

Light modes are automatically set based on ambient light (or time of day if there is no ambient light sensor available)

|
| LIGHT\_NETWORK\_MODE\_HIGH\_VIS | 2 |

API 级别 2.2.0

|

Light modes are automatically placed in their highest-visibility mode

|

### LightMode

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LIGHT\_MODE\_OFF | 0 |
API 级别 2.2.0

 |  |
| LIGHT\_MODE\_ST\_81\_100 | 1 |

API 级别 2.2.0

|

Steady beam 81-100% intensity

|
| LIGHT\_MODE\_ST\_61\_80 | 2 |

API 级别 2.2.0

|

Steady beam 61-80% intensity

|
| LIGHT\_MODE\_ST\_41\_60 | 3 |

API 级别 2.2.0

|

Steady beam 41-60% intensity

|
| LIGHT\_MODE\_ST\_21\_40 | 4 |

API 级别 2.2.0

|

Steady beam 21-40% intensity

|
| LIGHT\_MODE\_ST\_0\_20 | 5 |

API 级别 2.2.0

|

Steady beam 0-20% intensity

|
| LIGHT\_MODE\_SLOW\_FLASH | 6 |

API 级别 2.2.0

|

Slow flash mode

|
| LIGHT\_MODE\_FAST\_FLASH | 7 |

API 级别 2.2.0

|

Fast flash mode

|
| LIGHT\_MODE\_RANDOM\_FLASH | 8 |

API 级别 2.2.0

|

Randomly timed flash mode

|
| LIGHT\_MODE\_AUTO | 9 |

API 级别 2.2.0

 |  |
| LIGHT\_MODE\_SIGNAL\_LEFT\_SC | 10 |

API 级别 2.2.0

|

Turn signal left self-cancelling

|
| LIGHT\_MODE\_SIGNAL\_LEFT | 11 |

API 级别 2.2.0

|

Turn signal left

|
| LIGHT\_MODE\_SIGNAL\_RIGHT\_SC | 12 |

API 级别 2.2.0

|

Turn signal right self-cancelling

|
| LIGHT\_MODE\_SIGNAL\_RIGHT | 13 |

API 级别 2.2.0

|

Turn signal right

|
| LIGHT\_MODE\_HAZARD | 14 |

API 级别 2.2.0

|

Hazard - right and left signals flash

|
| LIGHT\_MODE\_CUSTOM\_5 | 59 |

API 级别 2.2.0

|

自定义模式（由厂商定义）

|
| LIGHT\_MODE\_CUSTOM\_4 | 60 |

API 级别 2.2.0

|

自定义模式（由厂商定义）

|
| LIGHT\_MODE\_CUSTOM\_3 | 61 |

API 级别 2.2.0

|

自定义模式（由厂商定义）

|
| LIGHT\_MODE\_CUSTOM\_2 | 62 |

API 级别 2.2.0

|

自定义模式（由厂商定义）

|
| LIGHT\_MODE\_CUSTOM\_1 | 63 |

API 级别 2.2.0

|

自定义模式（由厂商定义）

|

### LightType

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LIGHT\_TYPE\_HEADLIGHT | 0 |
API 级别 2.2.0

|

Headlight light type

|
| LIGHT\_TYPE\_TAILLIGHT | 2 |

API 级别 2.2.0

|

Taillight light type

|
| LIGHT\_TYPE\_SIGNAL\_CONFIG | 3 |

API 级别 2.2.0

|

可配置的信号灯类型

|
| LIGHT\_TYPE\_SIGNAL\_LEFT | 4 |

API 级别 2.2.0

|

Left turn signal light type

|
| LIGHT\_TYPE\_SIGNAL\_RIGHT | 5 |

API 级别 2.2.0

|

Right turn signal light type

|
| LIGHT\_TYPE\_OTHER | 7 |

API 级别 2.2.0

|

Undefined light type

|

### BikePowerSensorType

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BIKE\_POWER\_SENSOR\_TYPE\_NONE | 0 |
API 级别 2.2.0

|

None

|
| BIKE\_POWER\_SENSOR\_TYPE\_POWER\_ONLY | 1 |

API 级别 2.2.0

|

Power output directly in Watts

|
| BIKE\_POWER\_SENSOR\_TYPE\_WHEEL\_TORQUE | 2 |

API 级别 2.2.0

|

Power output from torque on rear wheel

|
| BIKE\_POWER\_SENSOR\_TYPE\_CRANK\_TORQUE | 3 |

API 级别 2.2.0

|

Power output from torque at crank

|
| BIKE\_POWER\_SENSOR\_TYPE\_CRANK\_TORQUE\_FREQUENCY | 4 |

API 级别 2.2.0

|

Power output from torque frequency at crank

|
| BIKE\_POWER\_SENSOR\_TYPE\_CNT | 5 |

API 级别 2.2.0

 |  |

### ThreatLevel

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| THREAT\_LEVEL\_NO\_THREAT | 0 |
API 级别 3.0.0

|

No threat

|
| THREAT\_LEVEL\_VEHICLE\_APPROACHING | 1 |

API 级别 3.0.0

|

Vehicle is approaching

|
| THREAT\_LEVEL\_VEHICLE\_FAST\_APPROACHING | 2 |

API 级别 3.0.0

|

Vehicle is approaching fast

|

### ThreatSide

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| THREAT\_SIDE\_NO\_SIDE | 0 |
API 级别 3.0.0

|

Threat not on right or left

|
| THREAT\_SIDE\_RIGHT | 1 |

API 级别 3.0.0

|

Threat is on the right side

|
| THREAT\_SIDE\_LEFT | 2 |

API 级别 3.0.0

|

Threat is on the left side

|

### TrainerMode

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TRAINER\_MODE\_BASIC\_RESISTANCE | 0 |
API 级别 2.4.0

|

基本阻力健身器材训练模式 在此模式下，用户可以设置器材最大阻力的百分比

|
| TRAINER\_MODE\_TARGET\_POWER | 1 |

API 级别 2.4.0

|

Target power fitness equipment training mode In this mode the user may set the target wattage output of the equipment

|
| TRAINER\_MODE\_SIMULATION | 2 |

API 级别 2.4.0

|

Simulation fitness equipment training mode In this mode the user may set various fields to adjust resistance

|

### TrainerValue

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| TRAINER\_MODE | 7 |
API 级别 2.4.0

|

The training mode the fitness equipment is currently in. See TRAINER\_MODE\_\* enum for values

|
| TRAINER\_RESISTANCE | 8 |

API 级别 2.4.0

|

健身器材的基本阻力值。最大阻力的百分比，输入范围为 0 - 100，单位为 0.5%。

|
| TRAINER\_TARGET\_POWER | 9 |

API 级别 2.4.0

|

Target power setting of the fitness equipment. 0 - 4000W input range, unit 0.25W.

|
| TRAINER\_SLOPE | 10 |

API 级别 2.4.0

|

The simulated Slope/Grade setting of simulation training mode. -200% - 200% input range, unit 0.01%.

|
| TRAINER\_SURFACE | 11 |

API 级别 2.4.0

|

The simulated surface resistance coefficient setting of simulation training mode. 0 - 0.0127 input range, 5x10^-5 scale. Default value is set to 0xFF.

|
| TRAINER\_WIND\_COEFF | 12 |

API 级别 2.4.0

|

The simulated wind resistance coefficient setting of simulation training mode. 0.0 - 1.86 kg/m input range, 0.01 scale. Wind Resistance Coefficient \[kg/m\] = Frontal Surface Area \[m2\] x Drag Coefficient x Air Density \[kg/m3\] Default value is set to 0xFF.

|
| TRAINER\_WIND\_SPEED | 13 |

API 级别 2.4.0

|

The simulated wind speed setting of simulation training mode. -127 - +127 km/hr input range, (+)Head wind (-)Tail wind. 1 km/hr units. Simulated Wind Speed (km/h) = Raw Wind Speed Value – 127 km/h Default value is set to 0xFF.

|
| TRAINER\_WIND\_DRAFT\_FACTOR | 14 |

API 级别 2.4.0

|

The simulated wind drafting scale factor setting of simulation training mode. 0 - 1.0 input range, 0.01 scale. A draft factor of 0 removes all wind resistance, and 1.0 indicates no drafting effects.

|
| TRAINER\_USER\_WEIGHT | 15 |

API 级别 2.4.0

|

The user weight setting of simulation training mode. 0 - 655.34 kg input range, unit 0.01kg.

|
| TRAINER\_BIKE\_WEIGHT | 16 |

API 级别 2.4.0

|

The bike weight setting of simulation training mode. 0 - 50kg input range, unit 0.05kg

|
| TRAINER\_WHEEL\_DIAMETER | 17 |

API 级别 2.4.0

|

The wheel diameter setting of the fitness equipment. 0 - 2.54m input range, unit 0.01m

|
| TRAINER\_GEAR\_RATIO | 18 |

API 级别 2.4.0

|

The gear ratio setting of the fitness equipment. 0.03 - 7.65 input range, unit 0.03. gear ratio = value \* 0.03

|

### BodyLocation

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BODY\_LOCATION\_LEFT\_LEG | 0 |
API 级别 2.4.0

|

Left leg body location

|
| BODY\_LOCATION\_RIGHT\_LEG | 1 |

API 级别 2.4.0

|

Right leg body location

|
| BODY\_LOCATION\_TORSO\_FRONT | 17 |

API 级别 2.4.0

|

Front torso body location

|
| BODY\_LOCATION\_WAIST\_MID\_BACK | 36 |

API 级别 2.4.0

|

Waist, mid back body location

|
| BODY\_LOCATION\_WAIST\_FRONT | 37 |

API 级别 2.4.0

|

Waist, front body location

|
| BODY\_LOCATION\_WAIST\_LEFT | 38 |

API 级别 2.4.0

|

Waist, left body location

|
| BODY\_LOCATION\_WAIST\_RIGHT | 39 |

API 级别 2.4.0

|

Waist, right body location

|

### SensorOrientation

Since:

API 级别 2.2.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SENSOR\_ORIENTATION\_RIGHT\_SIDE\_UP | 0 |
API 级别 2.4.0

|

Right side up sensor orientation

|
| SENSOR\_ORIENTATION\_UPSIDE\_DOWN | 1 |

API 级别 2.4.0

|

Upside down sensor orientation

|
