---
title: "Class: Toybox.Ant.DeviceConfig"
---
# Class: Toybox.Ant.DeviceConfig

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


[show all](#)

## 概述

A class to define the ANT wireless channel device configuration.

## 另见：

- [ANT Downloads & Resources - ANT Message Protocol](https://www.thisisant.com/developer/resources/downloads/)

- [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/)


Example:

```
// Set the configuration
deviceCfg = new Ant.DeviceConfig({
    :deviceNumber => 0,                 // Wild card our search
    :deviceType => 31,                  // 1 byte type identifier
    :transmissionType => 0,             // Manufacturer-specific transport type
    :messagePeriod => 8192,             // The message period
    :radioFrequency => 57,              // Ant+ Frequency
    :searchTimeoutLowPriority => 10,    // Timeout in 25s
    :searchThreshold => 0               // Pair to all transmitting sensors
});
genericChannel.setDeviceConfig(deviceCfg);
```

Since:

API 级别 1.0.0

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | DEFAULT\_DEVICE\_NUMBER | 123 |
API 级别 1.0.0

|

The default values for a device configuration

|
| 类型 | DEFAULT\_DEVICE\_TYPE | 1 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_MESSAGE\_PERIOD | 8192 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_NETWORK\_KEY | 0 |

API 级别 1.2.0

 |  |
| 类型 | DEFAULT\_RADIO\_FREQUENCY | 10 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_SEARCH\_TIMEOUT\_HIGH | 0 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_SEARCH\_TIMEOUT\_LOW | 6 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_THRESHOLD | 0 |

API 级别 1.0.0

 |  |
| 类型 | DEFAULT\_TRANSMISSION\_TYPE | 0 |

API 级别 1.0.0

 |  |
| 类型 | NETWORK\_KEY\_LENGTH\_128BIT | 16 |

API 级别 1.2.0

 |  |
| 类型 | NETWORK\_KEY\_LENGTH\_64BIT | 8 |

API 级别 1.2.0

|

Network key lengths

|

## 类型定义摘要 [collapse](#)

- [**NetworkKey128Bit**](#NetworkKey128Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]
- [**NetworkKey64Bit**](#NetworkKey64Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

## 实例成员摘要 [collapse](#)

- [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The unique device number (ANT-id).

- [**deviceType**](#deviceType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    1 字节的设备类型标识符。

- [**messagePeriod**](#messagePeriod-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The Message period that the sensor uses.

- [**networkKey128Bit**](#networkKey128Bit-var) as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

    一个 128 位网络密钥。

- [**networkKey64Bit**](#networkKey64Bit-var) as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

    一个 64 位网络密钥。

- [**radioFrequency**](#radioFrequency-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The radio frequency that the sensor operates on.

- [**searchThreshold**](#searchThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The proximity threshold bin.

- [**searchTimeoutHighPriority**](#searchTimeoutHighPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    High Priority search timeout that a receiving channel will wait for in order to start tracking a master \* Measured in 2.5s increments \* Limited to a maximum of 5 seconds (Range of 0 to 2).

- [**searchTimeoutLowPriority**](#searchTimeoutLowPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    The low Priority search timeout that a receiving channel will wait for in order to start tracking a master \* Measured in 2.5s increments \* Limited to a maximum of 30 seconds (Range of 0 to 12).

- [**transmissionType**](#transmissionType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    厂商特定的传输类型和扩展设备号。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })

    Constructor.


## 类型定义详情

### **NetworkKey128Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API 级别 1.0.0

### **NetworkKey64Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

Since:

API 级别 1.0.0

## 实例属性详情

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The unique device number (ANT-id)

Since:

API 级别 1.0.0

### var deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

一个 1 字节设备类型标识符

Since:

API 级别 1.0.0

### var messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The Message period that the sensor uses

Since:

API 级别 1.0.0

### var networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

一个 128 位网络密钥

Since:

API 级别 1.2.0

### var networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

一个 64 位网络密钥

Since:

API 级别 1.2.0

### var radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The radio frequency that the sensor operates on

Since:

API 级别 1.0.0

### var searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The proximity threshold bin

Since:

API 级别 1.0.0

### var searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

High Priority search timeout that a receiving channel will wait for in order to start tracking a master

- 以 2.5 秒为增量进行测量

- Limited to a maximum of 5 seconds (Range of 0 to 2)


Since:

API 级别 1.0.0

### var searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

The low Priority search timeout that a receiving channel will wait for in order to start tracking a master

- 以 2.5 秒为增量进行测量

- Limited to a maximum of 30 seconds (Range of 0 to 12)


Since:

API 级别 1.0.0

### var transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

制造商特定的传输类型和扩展设备编号。

Since:

API 级别 1.0.0

## 实例方法详情

### **initialize(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    The initialization options

- :deviceNumber — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The ANT-id of the device to search for. Not setting enables a wild card search

- :deviceType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        1 字节设备类型标识符

- :transmissionType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        制造商特定的传输类型和扩展设备编号。

- :messagePeriod — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The message period that the sensor uses

- :radioFrequency — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The radio frequency that the sensor operates on. Range of 2 to 80.

- :searchTimeoutLowPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The Low Priority search timeout that a receiving channel will wait for in order to start tracking a master

- Low Priority search provides the capability of searching for a master without interrupting other channels on the device

- Range of 0 to 12 (2.5s increments)

- Default 6 (15s)


- :searchTimeoutHighPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The High Priority search timeout that a receiving channel will wait for in order to start tracking a master

- Is triggered after the Low Priority search mode times out

- Will interrupt other channels

- Will take priority over any other open channels on that device

- If it overlaps another channel the High Priority search takes priority and that other channel is blocked

- Keeping this search type disabled unless you have great difficulty acquiring a master through Low Priority search is recommended

- High Priority searches are disabled in data-fields, and will be ignored for that application type

- Range of 0 to 2 (2.5s increments)

- Default 0 (disabled)


- :searchThreshold — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        A proximity threshold bin as a Number

- Configures the RSSI threshold a slave channel will search for which is effectively the distance at which a slave is willing to be from a master

- Values are 0 (disabled), 1 (closest), 10 (farthest)


- :networkKey64Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        64 位网络密钥

- Set this when [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) was chosen in the channel assignment


- :networkKey128Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        128 位网络密钥

- Set this when NETWORK\_PRIVATE was chosen in the channel assignment



另见：

- [ANT Downloads & Resources - ANT Message Protocol and Usage](https://www.thisisant.com/developer/resources/downloads/)


Since:

API 级别 1.2.0
