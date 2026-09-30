---
title: "Class: Toybox.AntPlus.DeviceState"
---
# Class: Toybox.AntPlus.DeviceState

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)


[show all](#)

## 概述

The DeviceState object represents the state of the device.

字段可能返回 `null`，因此在使用前应先对值做 `null` 检查。

Example:

```
using Toybox.AntPlus;

// Assumes AntPlus.Device.getDeviceState(); already called
var state = deviceState.state;
var deviceNumber = deviceState.deviceNumber;

System.println("Current device state is: " + state);
System.println("Current device number is: " + deviceNumber);
```

Since:

API 级别 2.2.0

## 实例成员摘要 [collapse](#)

- [**deviceNumber**](#deviceNumber-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The current Device ID being tracked/searched for.

- [**state**](#state-var) as [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) or **Null**

    The state of the device as an [DEVICE\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const) value.


## 实例属性详情

### var deviceNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The current Device ID being tracked/searched for.

Since:

API 级别 2.2.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The device ID number or `null` if device state is [DEVICE\_STATE\_DEAD](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const)


### var state as [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) or **Null**

The state of the device as an [DEVICE\_STATE\_\*](/connect-iq/api-docs/Toybox/AntPlus/#DEVICE_STATE_CLOSED-const) value.

Since:

API 级别 2.2.0

Returns:

- [AntPlus.DeviceCurrentState](/connect-iq/api-docs/Toybox/AntPlus/#DeviceCurrentState-module) —

    The device state as DEVICE\_STATE\_\* enum value
