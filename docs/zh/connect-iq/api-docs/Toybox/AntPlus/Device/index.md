---
title: "Class: Toybox.AntPlus.Device"
---
# 类：Toybox.AntPlus.Device

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)


[show all](#)

## 概述

The Device object represents an ANT+ Device instance.

Since:

API 级别 2.2.0

## 直接已知子类

[AntPlus.BikeCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeCadence/), [AntPlus.BikePower](/connect-iq/api-docs/Toybox/AntPlus/BikePower/), [AntPlus.BikeRadar](/connect-iq/api-docs/Toybox/AntPlus/BikeRadar/), [AntPlus.BikeSpeed](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeed/), [AntPlus.BikeSpeedCadence](/connect-iq/api-docs/Toybox/AntPlus/BikeSpeedCadence/), [AntPlus.FitnessEquipment](/connect-iq/api-docs/Toybox/AntPlus/FitnessEquipment/), [AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/), [AntPlus.RunningDynamics](/connect-iq/api-docs/Toybox/AntPlus/RunningDynamics/), [AntPlus.Shifting](/connect-iq/api-docs/Toybox/AntPlus/Shifting/)

## 实例方法摘要 [collapse](#)

- [**getBatteryStatus**](#getBatteryStatus-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) or **Null**

    获取指定组件标识符的电池状态。

- [**getComponentIdentifiers**](#getComponentIdentifiers-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

    获取此 Device 的已知组件标识符列表。

- [**getDeviceState**](#getDeviceState-instance_function)() as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)

    获取设备状态。

- [**getManufacturerInfo**](#getManufacturerInfo-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) or **Null**

    获取指定组件标识符的制造商信息。

- [**getProductInfo**](#getProductInfo-instance_function)(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) or **Null**

    获取指定组件标识符的产品信息。

- [**sendManufacturerMessage**](#sendManufacturerMessage-instance_function)(message as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) as **Void**

    Send Manufacturer Message.

- [**sendPageRequest**](#sendPageRequest-instance_function)(pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Send Page request Request 2 broadcast pages from connected sensor.


## 实例方法详情

### **getBatteryStatus(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) or **Null**

获取指定组件标识符的电池状态。

Parameters:

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The component identifier to retrieve battery status for

- 单分量时返回 `null`

- 自行车灯的灯光索引。



Example:

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

Returns:

- [AntPlus.BatteryStatus](/connect-iq/api-docs/Toybox/AntPlus/BatteryStatus/) —

    The current battery status for this identifier, or `null` if unknown identifier


Since:

API 级别 2.2.0

### **getComponentIdentifiers()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or **Null**

获取此 Device 的已知组件标识符列表。

This list may update over time as ANT+ devices with >1 component periodically send information about each of their components. The device reports its total number of components in [CommonData.numComponents](/connect-iq/api-docs/Toybox/AntPlus/CommonData/#numComponents-var). The returned Array will only contain entries for components that the ANT+ device has provided a component identifier for.

Example:

```
using Toybox.AntPlus;

// Get the list of known components as an Array
var componentList = AntPlus.getComponentIdentifiers();
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    已知组件标识符列表

- 没有已知组件标识符时为 `null`



Since:

API 级别 2.2.0

### **getDeviceState()** as [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/)

获取设备状态。

Example:

```
using Toybox.AntPlus;

// Get the DEVICE_STATE_* enum value
var deviceState = AntPlus.getDeviceState(null);
```

Returns:

- [AntPlus.DeviceState](/connect-iq/api-docs/Toybox/AntPlus/DeviceState/) —

    The current device state


Since:

API 级别 2.2.0

### **getManufacturerInfo(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) or **Null**

获取指定组件标识符的制造商信息。

Parameters:

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The component identifier to retrieve manufacturer information for

- 单分量时返回 `null`

- 自行车灯的灯光索引



Example:

```
using Toybox.AntPlus;

// Get the ManufacturerInfo object
var manufacturerInfo = AntPlus.getManufacturerInfo(null);
```

Returns:

- [AntPlus.ManufacturerInfo](/connect-iq/api-docs/Toybox/AntPlus/ManufacturerInfo/) —

    The current manufacturer information for this identifier

- 如果标识符未知，则为 `null`



Since:

API 级别 2.2.0

### **getProductInfo(identifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) or **Null**

获取指定组件标识符的产品信息。

Parameters:

- identifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The component identifier to retrieve product information for

- 单分量时返回 `null`

- 自行车灯的灯光索引



Example:

```
using Toybox.AntPlus;

// Get the ProductInfo object
var productInfo = AntPlus.getProductInfo(null);
```

Returns:

- [AntPlus.ProductInfo](/connect-iq/api-docs/Toybox/AntPlus/ProductInfo/) —

    The current product information for this identifier

- 如果标识符未知，则为 `null`



Since:

API 级别 2.2.0

### **sendManufacturerMessage(message as [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/))** as **Void**

Send Manufacturer Message

Parameters:

- message — ([Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)) —

    The Ant message to send. Only exploration (0xE0-0xEF) and manufacturer specific (0xF0-0xFF) pages are allowed. It is recommended to contact the ANT+ group when exploration pages are used at thisisant.com. The [onSentMessage()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onSentMessage-instance_function) will be called to indicate sent manufacturer message status.


另见：

- [Toybox.Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/)


Since:

API 级别 3.1.0

Throws:

- ([AntPlus.AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/)) —

    Thrown if the page number (byte 0) is outside the exploration and manufacturer page range.


### **sendPageRequest(pageNumber as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Send Page request Request 2 broadcast pages from connected sensor. Use [onMessage()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onMessage-instance_function) to process requested page broadcasts from the sensor.

Parameters:

- pageNumber — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The requested page number. Requesting the ANTFS page (0x43) isn't allowed. Page request can change the page rotation of the sensor so they will not be allowed to be sent too frequently. Sending page requests is limited to once every 2 seconds.


Since:

API 级别 3.1.0

Throws:

- ([AntPlus.AntPlusNotAllowedException](/connect-iq/api-docs/Toybox/AntPlus/AntPlusNotAllowedException/)) —

    Thrown if the ANTFS page is requested, if pageNumber is outside the range 0-255, or if page requests are sent to frequently.
