---
title: "类：Toybox.AntPlus.Device"
---
# 类：Toybox.AntPlus.Device

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)


[显示全部](#)

## 概述

Device 对象表示一个 ANT+ 设备实例。

起始版本：

API 级别 2.2.0

## 直接已知子类

[AntPlus.BikeCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeCadence/), [AntPlus.BikePower](/connect-iq/api-docs/Toybox/AntPlus/BikePower/), [AntPlus.BikeRadar](/connect-iq/api-docs/Toybox/AntPlus/BikeRadar/), [AntPlus.BikeSpeed](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeed/), [AntPlus.BikeSpeedCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadence/), [AntPlus.FitnessEquipment](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipment/), [AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/), [AntPlus.RunningDynamics](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamics/), [AntPlus.Shifting](/connect-iq/api-docs/Toybox/AntPlus/Shifting/)

## 实例方法摘要 [collapse](#)

- [**getBatteryStatus**](#getBatteryStatus-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) or **Null**

    获取指定组件标识符的电池状态。

- [**getComponentIdentifiers**](#getComponentIdentifiers-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    获取此设备的已知组件标识符列表。

- [**getDeviceState**](#getDeviceState-instance_function)() as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)

    获取设备状态。

- [**getManufacturerInfo**](#getManufacturerInfo-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) or **Null**

    获取指定组件标识符的制造商信息。

- [**getProductInfo**](#getProductInfo-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) or **Null**

    获取指定组件标识符的产品信息。

- [**sendManufacturerMessage**](#sendManufacturerMessage-instance_function)(message as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**

    发送制造商消息。

- [**sendPageRequest**](#sendPageRequest-instance_function)(pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    发送页面请求 请求连接的传感器广播 2 个页面。


## 实例方法详情

### **getBatteryStatus(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) or **Null**

获取指定组件标识符的电池状态。

参数：

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要获取电池状态的组件标识符

- 单分量时返回 `null`

- 自行车灯的灯光索引。



示例：

```
using Toybox.AntPlus;

// Assumes valid component identifier enum value (for bike lights)
// or null for a single component device

var batteryStatus = AntPlus.getBatteryStatus(null);  // Get the batteryStatus Enum value
                                                     // for a single component system.
if (batteryStatus == AntPlus.BATT_STATUS_OK) {
    System.println("Battery Status: Okay!");
} else {
    // display another battery status message
}
```

返回：

- [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) —

    此标识符对应的当前电池状态；如果标识符未知，则为 `null`


起始版本：

API 级别 2.2.0

### **getComponentIdentifiers()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

获取此设备的已知组件标识符列表。

此列表可能会随着时间推移而更新，因为包含多个组件的 ANT+ 设备会定期发送有关其各个组件的信息。设备会在 [CommonData.numComponents](/connect-iq/api-docs/Toybox/AntPlus/CommonData/#numComponents-var) 中报告其组件总数。返回的数组只包含 ANT+ 设备已提供组件标识符的组件条目。

示例：

```
using Toybox.AntPlus;

// Get the list of known components as an Array
var componentList = AntPlus.getComponentIdentifiers();
```

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    已知组件标识符列表

- 没有已知组件标识符时为 `null`



起始版本：

API 级别 2.2.0

### **getDeviceState()** as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)

获取设备状态。

示例：

```
using Toybox.AntPlus;

// Get the DEVICE_STATE_* enum value
var deviceState = AntPlus.getDeviceState(null);
```

返回：

- [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/) —

    当前设备状态


起始版本：

API 级别 2.2.0

### **getManufacturerInfo(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) or **Null**

获取指定组件标识符的制造商信息。

参数：

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要获取制造商信息的组件标识符

- 单分量时返回 `null`

- 自行车灯的灯光索引



示例：

```
using Toybox.AntPlus;

// Get the ManufacturerInfo object
var manufacturerInfo = AntPlus.getManufacturerInfo(null);
```

返回：

- [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) —

    此标识符对应的当前制造商信息

- 如果标识符未知，则为 `null`



起始版本：

API 级别 2.2.0

### **getProductInfo(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) or **Null**

获取指定组件标识符的产品信息。

参数：

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要获取产品信息的组件标识符

- 单分量时返回 `null`

- 自行车灯的灯光索引



示例：

```
using Toybox.AntPlus;

// Get the ProductInfo object
var productInfo = AntPlus.getProductInfo(null);
```

返回：

- [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) —

    此标识符对应的当前产品信息

- 如果标识符未知，则为 `null`



起始版本：

API 级别 2.2.0

### **sendManufacturerMessage(message as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as **Void**

发送制造商消息

参数：

- message — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    要发送的 Ant 消息。仅允许使用探索页面（0xE0-0xEF）和制造商特定页面（0xF0-0xFF）。使用探索页面时，建议通过 thisisant.com 联系 ANT+ 组织。将调用 [onSentMessage()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onSentMessage-instance_function) 以指示已发送的制造商消息状态。


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


起始版本：

API 级别 3.1.0

抛出：

- ([AntPlus.AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/)) —

    如果页码（字节 0）超出探索页面和制造商页面范围，则抛出。


### **sendPageRequest(pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

发送页面请求 请求连接的传感器广播 2 个页面。使用 [onMessage()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onMessage-instance_function) 处理传感器广播的请求页面。

参数：

- pageNumber — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    请求的页面编号。不允许请求 ANTFS 页面（0x43）。页面请求可能会更改传感器的页面轮换，因此不允许过于频繁地发送页面请求。页面请求最多每 2 秒发送一次。


起始版本：

API 级别 3.1.0

抛出：

- ([AntPlus.AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/)) —

    如果请求 ANTFS 页面、pageNumber 超出 0-255 范围，或过于频繁地发送页面请求，则抛出。
