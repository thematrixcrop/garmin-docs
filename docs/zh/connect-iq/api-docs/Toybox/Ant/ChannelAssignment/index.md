---
title: "类：Toybox.Ant.ChannelAssignment"
---
# 类：Toybox.Ant.ChannelAssignment

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Ant.ChannelAssignment](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/)


[显示全部](#)

## 概述

用于控制 ANT 无线通道分配的类。

起始版本：

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

可以将通道定义为主要发送数据（主设备）或接收数据（从设备）。通道类型通过传递给 [Ant.ChannelAssignment.initialize()](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/#initialize-instance_function) 函数的 [CHANNEL\_TYPE\_\*](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) 常量为 `channelType` 参数设置。

起始版本：

API 级别 1.0.0

### var network as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)

定义通道应在其上运行的网络类型。

通过传递给 [Ant.ChannelAssignment.initialize()](/connect-iq/api-docs/Toybox/Ant/ChannelAssignment/#initialize-instance_function) 函数 `network` 参数的 [NETWORK\_\*](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) 常量设置网络。

起始版本：

API 级别 1.0.0

## 实例方法详情

### **initialize(c as [Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module), n as [Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module))**

构造函数，默认情况下禁用后台扫描。

参数：

- c — ([Ant.ChannelType](/connect-iq/api-docs/Toybox/Ant/#ChannelType-module)) —

    通道类型说明符。必须使用以下常量之一：

- [CHANNEL\_TYPE\_TX\_NOT\_RX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_TX_NOT_RX-const) - 双向发送（主机）


- ANT+ 网络不允许主通道


- [CHANNEL\_TYPE\_RX\_NOT\_TX](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_NOT_TX-const) - 双向接收（从机）

- [CHANNEL\_TYPE\_RX\_ONLY](/connect-iq/api-docs/Toybox/Ant/#CHANNEL_TYPE_RX_ONLY-const) - 仅接收（从机）


- n — ([Ant.NetworkType](/connect-iq/api-docs/Toybox/Ant/#NetworkType-module)) —

    网络类型说明符。必须使用以下常量之一：

- [NETWORK\_PUBLIC](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PUBLIC-const) - ANT 公共网络

- [NETWORK\_PLUS](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PLUS-const) - ANT+ 网络

- [NETWORK\_PRIVATE](/connect-iq/api-docs/Toybox/Ant/#NETWORK_PRIVATE-const) - ANT 专用网络


- 必须为专用网络提供网络密钥

- 需要 64 位和 128 位密钥



示例：

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


起始版本：

API 级别 1.0.0

### **isBackgroundScanEnabled()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查是否已为通道分配启用后台扫描。

示例：

```
using Toybox.Ant;
// Assuming initialized channel
ChannelAssignment.isBackgroundScanEnabled();
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果启用了后台扫描，则返回 `true`；否则返回 `false`。


起始版本：

API 级别 1.2.0

### **setBackgroundScan(isBackgroundScanEnabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置启用或禁用后台扫描。

只能在仅接收通道上启用后台扫描。

参数：

- isBackgroundScanEnabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    值为 `true` 时启用后台扫描，否则为 `false`。


示例：

```
using Toybox.Ant;
// Assuming initialized channel
ChannelAssignment.setBackgroundScan(isBackgroundScanEnabled);
```

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功设置后台扫描属性，则返回 `true`；否则返回 `false`。


起始版本：

API 级别 1.2.0
