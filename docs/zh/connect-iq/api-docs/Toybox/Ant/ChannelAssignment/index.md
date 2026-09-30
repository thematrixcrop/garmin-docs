---
title: "Class: Toybox.Ant.ChannelAssignment"
---
# Class: Toybox.Ant.ChannelAssignment

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/)


[show all](#)

## 概述

A class to control the assignment of an ANT wireless channel.

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

    See if background scanning is enabled for the channel assignment.

- [**setBackgroundScan**](#setBackgroundScan-instance_function)(isBackgroundScanEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Set background scan to be enabled or disabled.


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

- [CHANNEL\_TYPE\_TX\_NOT\_RX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) - Bidirectional Transmit (Master)


- Master Channels are not allowed on the ANT+ Network


- [CHANNEL\_TYPE\_RX\_NOT\_TX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_NOT_TX-const) - Bidirectional Receive (Slave)

- [CHANNEL\_TYPE\_RX\_ONLY](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_ONLY-const) - Receive Only (Slave)


- n — ([Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)) —

    The network type specifier. Must use one of the following constants:

- [NETWORK\_PUBLIC](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) - ANT public network

- [NETWORK\_PLUS](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PLUS-const) - ANT+ network

- [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) - ANT private network


- A network key must be provided for an Private Network

- Both 64 and 128 bit keys are required



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

See if background scanning is enabled for the channel assignment.

Example:

```
using Toybox.Ant;
// Assuming initialized channel
ChannelAssignment.isBackgroundScanEnabled();
```

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Returns `true` if background scan is enabled, otherwise `false`.


Since:

API 级别 1.2.0

### **setBackgroundScan(isBackgroundScanEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Set background scan to be enabled or disabled.

Enabling background scan can only be done on Receive Only channels.

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

    Return `true` if the background scan property was successfully set, otherwise `false`.


Since:

API 级别 1.2.0
