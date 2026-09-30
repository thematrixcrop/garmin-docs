---
title: "类：Toybox.AntPlus.DeviceState"
---
# 类：Toybox.AntPlus.DeviceState

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)


[show all](#)

## 概述

表示设备状态的 DeviceState 对象。

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

示例：

```
using Toybox.AntPlus;

// Assumes AntPlus.Device.getDeviceState(); already called
var state = deviceState.state;
var deviceNumber = deviceState.deviceNumber;

System.println("Current device state is: " + state);
System.println("Current device number is: " + deviceNumber);
```

起始版本：

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    当前正在跟踪/搜索的设备 ID。

- [**state**](#state-var) as [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) or **Null**

    设备作为 [DEVICE\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const) 值时的状态。


## 实例属性详情

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

当前正在跟踪/搜索的设备 ID。

起始版本：

API 级别 2.2.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    设备 ID 号；如果设备状态为 [DEVICE\_STATE\_DEAD](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const)，则为 `null`


### var state as [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) or **Null**

设备作为 [DEVICE\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const) 值时的状态。

起始版本：

API 级别 2.2.0

返回：

- [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) —

    设备状态，值为 DEVICE\_STATE\_\* 枚举值
