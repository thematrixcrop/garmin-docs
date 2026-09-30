---
title: "Class: Toybox.Ant.ChannelAssignment"
---
# 类：Toybox.Ant.ChannelAssignment

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/)


[show all](#)

## 概述

用于控制 ANT 无线通道分配的类。

Since:

API 级别 1.0.0

## 实例成员摘要 [collapse](#)

- [**channelType**](#channelType-var) as [Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module)

    定义通道的类型。

- [**network**](#network-var) as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)

    定义通道应在其上运行的网络类型。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(c as [Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module), n as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module))

    构造函数，默认情况下禁用后台扫描。

- [**isBackgroundScanEnabled**](#isBackgroundScanEnabled-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查是否已为通道分配启用后台扫描。

- [**setBackgroundScan**](#setBackgroundScan-instance_function)(isBackgroundScanEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置启用或禁用后台扫描。


## 实例属性详情

### var channelType as [Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module)

定义通道的类型。

The channel can be defined to primarily send data (master) or receive data(slave). The channel type is set via the [CHANNEL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) constant passed to the [Ant.ChannelAssignment.initialize()](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/#initialize-instance_function) function for the `channelType` parameter.

Since:

API 级别 1.0.0

### var network as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)

定义通道应在其上运行的网络类型。

The network is set via the [NETWORK\_\*](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) constant passed to the [Ant.ChannelAssignment.initialize()](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/#initialize-instance_function) function for the `network` parameter.

Since:

API 级别 1.0.0

## 实例方法详情

### **initialize(c as [Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module), n as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module))**

构造函数，默认情况下禁用后台扫描。

Parameters:

- c — ([Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module)) —

    The channel type specifier. Must use one of the following constants:

- [CHANNEL\_TYPE\_TX\_NOT\_RX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) - 双向发送（主机）


- ANT+ 网络不允许主通道


- [CHANNEL\_TYPE\_RX\_NOT\_TX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_NOT_TX-const) - 双向接收（从机）

- [CHANNEL\_TYPE\_RX\_ONLY](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_ONLY-const) - 仅接收（从机）


- n — ([Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)) —

    The network type specifier. Must use one of the following constants:

- [NETWORK\_PUBLIC](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) - ANT 公共网络

- [NETWORK\_PLUS](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PLUS-const) - ANT+ 网络

- [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) - ANT 专用网络


- 必须为 Private Network 提供网络密钥

- 需要 64 位和 128 位密钥



Example:

```
using Toybox.Ant;

var channelType = Ant.CHANNEL_TYPE_RX_NOT_TX  // Bidirectional Receive (Slave)
var network = Ant.NETWORK_PUBLIC;             // Ant public network
// Get the channel
channelAssign = new Ant.ChannelAssignment(channelType, network);

// Initialize the channel - assumes message callback method
GenericChannel.initialize(method(:onMessage), channelAssign);
```

另见：

- [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/)


Since:

API 级别 1.0.0

### **isBackgroundScanEnabled()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查是否已为通道分配启用后台扫描。

Example:

```
using Toybox.Ant;
// Assuming initialized channel
ChannelAssignment.isBackgroundScanEnabled();
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果启用了后台扫描，则返回 `true`；否则返回 `false`。


Since:

API 级别 1.2.0

### **setBackgroundScan(isBackgroundScanEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置启用或禁用后台扫描。

只能在仅接收通道上启用后台扫描。

Parameters:

- isBackgroundScanEnabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Value is `true` to enable background scan, otherwise `false`.


Example:

```
using Toybox.Ant;
// Assuming initialized channel
ChannelAssignment.setBackgroundScan(isBackgroundScanEnabled);
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功设置后台扫描属性，则返回 `true`；否则返回 `false`。


Since:

API 级别 1.2.0
