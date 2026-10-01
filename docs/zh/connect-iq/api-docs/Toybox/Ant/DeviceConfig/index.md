---
title: "类：Toybox.Ant.DeviceConfig"
---
# 类：Toybox.Ant.DeviceConfig

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.DeviceConfig](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/)


[显示全部](#)

## 概述

用于定义 ANT 无线通道设备配置的类。

## 另见：

- [ANT Downloads & Resources - ANT Message Protocol](https://www.thisisant.com/developer/resources/downloads/)

- [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/)


示例：

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

起始版本：

API 级别 1.0.0

## 常量摘要

### 常量变量

| 类型 | 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- | --- |
| 类型 | DEFAULT\_DEVICE\_NUMBER | 123 |
API 级别 1.0.0

|

设备配置的默认值

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

网络密钥长度

|

## 类型定义摘要 [collapse](#)

- [**NetworkKey128Bit**](#NetworkKey128Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]
- [**NetworkKey64Bit**](#NetworkKey64Bit-named_type) as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

## 实例成员摘要 [collapse](#)

- [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    唯一设备编号（ANT-id）。

- [**deviceType**](#deviceType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    1 字节的设备类型标识符。

- [**messagePeriod**](#messagePeriod-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    传感器使用的消息周期。

- [**networkKey128Bit**](#networkKey128Bit-var) as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

    一个 128 位网络密钥。

- [**networkKey64Bit**](#networkKey64Bit-var) as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

    一个 64 位网络密钥。

- [**radioFrequency**](#radioFrequency-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    传感器运行所使用的射频。

- [**searchThreshold**](#searchThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    接近阈值区间。

- [**searchTimeoutHighPriority**](#searchTimeoutHighPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    高优先级搜索超时时间，接收通道将在该时间内等待，以开始跟踪主设备 \* 以 2.5 秒为增量进行测量 \* 最大限制为 5 秒（范围为 0 到 2）。

- [**searchTimeoutLowPriority**](#searchTimeoutLowPriority-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    接收通道等待开始跟踪主设备的低优先级搜索超时时间 \* 以 2.5s 为增量测量 \* 最大限制为 30 秒（范围为 0 到 12）。

- [**transmissionType**](#transmissionType-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    厂商特定的传输类型和扩展设备号。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })

    构造函数。


## 类型定义详情

### **NetworkKey128Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

起始版本：

API 级别 1.0.0

### **NetworkKey64Bit** as \[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]

起始版本：

API 级别 1.0.0

## 实例属性详情

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

唯一设备编号（ANT-id）

起始版本：

API 级别 1.0.0

### var deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

一个 1 字节设备类型标识符

起始版本：

API 级别 1.0.0

### var messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

传感器使用的消息周期

起始版本：

API 级别 1.0.0

### var networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) or **Null**

一个 128 位网络密钥

起始版本：

API 级别 1.2.0

### var networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type) or **Null**

一个 64 位网络密钥

起始版本：

API 级别 1.2.0

### var radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

传感器运行所使用的射频

起始版本：

API 级别 1.0.0

### var searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

接近阈值区间

起始版本：

API 级别 1.0.0

### var searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

高优先级搜索超时时间，接收通道将在该时间内等待，以开始跟踪主设备

- 以 2.5 秒为增量进行测量

- 最多限制为 5 秒（范围为 0 到 2）


起始版本：

API 级别 1.0.0

### var searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

接收通道等待开始跟踪主设备的低优先级搜索超时时间

- 以 2.5 秒为增量进行测量

- 最多限制为 30 秒（范围为 0 到 12）


起始版本：

API 级别 1.0.0

### var transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

制造商特定的传输类型和扩展设备编号。

起始版本：

API 级别 1.0.0

## 实例方法详情

### **initialize(options as { :deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :deviceType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :transmissionType as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :messagePeriod as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :radioFrequency as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutLowPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchTimeoutHighPriority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :searchThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :networkKey64Bit as [DeviceConfig.NetworkKey64Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey64Bit-named_type), :networkKey128Bit as [DeviceConfig.NetworkKey128Bit](/connect-iq/api-docs/Toybox/Ant/DeviceConfig/#NetworkKey128Bit-named_type) })**

构造函数

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    初始化选项

- :deviceNumber — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        要搜索的设备 ANT-id。不设置则启用通配符搜索

- :deviceType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        1 字节设备类型标识符

- :transmissionType — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        制造商特定的传输类型和扩展设备编号。

- :messagePeriod — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        传感器使用的消息周期

- :radioFrequency — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        传感器运行所使用的射频。范围为 2 至 80。

- :searchTimeoutLowPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        接收通道等待开始跟踪主设备的低优先级搜索超时时间

- 低优先级搜索能够在不干扰设备上其他通道的情况下搜索主设备

- 范围为 0 到 12（每次递增 2.5 秒）

- 默认值为 6（15 秒）


- :searchTimeoutHighPriority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        接收通道为开始跟踪主设备而等待的高优先级搜索超时时间

- 低优先级搜索模式超时后触发

- 将中断其他通道

- 在该设备上优先于任何其他打开的通道

- 如果它与另一个通道重叠，则高优先级搜索具有优先权，另一个通道将被阻塞

- 建议仅在通过低优先级搜索获取主设备非常困难时，才启用此搜索类型

- 数据字段中禁用高优先级搜索，并且对于该应用类型将忽略高优先级搜索

- 范围为 0 到 2（每次递增 2.5 秒）

- 默认值为 0（已禁用）


- :searchThreshold — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        以 Number 表示的接近度阈值区间

- 配置从设备将搜索的 RSSI 阈值，该阈值实际上表示从设备愿意与主设备保持的距离

- 值对应于 0（禁用）、1（最近）和 10（最远）


- :networkKey64Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        64 位网络密钥

- 在通道分配中选择 [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) 时设置此项


- :networkKey128Bit — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        128 位网络密钥

- 在通道分配中选择 NETWORK\_PRIVATE 时设置此项



另见：

- [ANT Downloads & Resources - ANT Message Protocol and Usage](https://www.thisisant.com/developer/resources/downloads/)


起始版本：

API 级别 1.2.0
