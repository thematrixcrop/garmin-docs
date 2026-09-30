---
title: "Module: Toybox.Application"
---
# 模块：Toybox.Application

## 概述

Application 模块包含每个 Connect IQ 应用的基类。

Application 模块包含负责控制应用生命周期的 [AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 类。该模块还包含用于控制 Object Store 中保存的设置和属性值的 set 和 get 方法，以及定义可触发的不同目标类型的 GOAL\_TYPE 枚举。

## 另见：

- [Core Topics - Persisting Data](/connect-iq/core-topics/persisting-data/)


Since:

API 级别 1.0.0

## 命名空间下的模块

模块：[Application.Properties](/connect-iq/api-docs/Toybox/Application/Properties/)、[Application.Storage](/connect-iq/api-docs/Toybox/Application/Storage/)、[Application.WatchFaceConfig](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/)

## 命名空间下的类

类：[AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/), [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/), [ObjectStoreAccessException](/connect-iq/api-docs/Toybox/Application/ObjectStoreAccessException/)

## 常量摘要

### GoalType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| GOAL\_TYPE\_STEPS | 0 |
API 级别 1.3.0

 |  |
| GOAL\_TYPE\_FLOORS\_CLIMBED | 1 |

API 级别 1.3.0

 |  |
| GOAL\_TYPE\_ACTIVE\_MINUTES | 2 |

API 级别 1.3.0

 |  |

## 类型定义摘要 [collapse](#)

- [**PersistableType**](#PersistableType-named_type) as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)
- [**PropertyKeyType**](#PropertyKeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
- [**PropertyValueType**](#PropertyValueType-named_type) as [Application.PropertyKeyType](/connect-iq/api-docs/Toybox/Application/#PropertyKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Application.PropertyKeyType](/connect-iq/api-docs/Toybox/Application/#PropertyKeyType-named_type), [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)\> or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**
- [**ResourceReferenceType**](#ResourceReferenceType-named_type) as [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)
- [**ResourceType**](#ResourceType-named_type) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/)

## 实例方法摘要 [collapse](#)

- [**getApp**](#getApp-instance_function)() as [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)

    获取当前正在运行的 AppBase [Object](/connect-iq/api-docs/Toybox/Lang/Object/)。

- [**loadResource**](#loadResource-instance_function)(resource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as [Application.ResourceType](/connect-iq/api-docs/Toybox/Application/#ResourceType-named_type) or [Application.ResourceReferenceType](/connect-iq/api-docs/Toybox/Application/#ResourceReferenceType-named_type)

    从可执行文件加载资源。


## 类型定义详情

### **PersistableType** as [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)

Since:

API 级别 1.0.0

### **PropertyKeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API 级别 1.0.0

### **PropertyValueType** as [Application.PropertyKeyType](/connect-iq/api-docs/Toybox/Application/#PropertyKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Application.PropertyKeyType](/connect-iq/api-docs/Toybox/Application/#PropertyKeyType-named_type), [Application.PropertyValueType](/connect-iq/api-docs/Toybox/Application/#PropertyValueType-named_type)\> or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [BluetoothLowEnergy.ScanResult](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/ScanResult/) or [Complications.Id](/connect-iq/api-docs/Toybox/Complications/Id/) or [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**

Since:

API 级别 1.0.0

### **ResourceReferenceType** as [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

Since:

API 级别 1.0.0

### **ResourceType** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/)

Since:

API 级别 1.0.0

## 实例方法详情

### **getApp()** as [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)

获取当前正在运行的 AppBase [Object](/connect-iq/api-docs/Toybox/Lang/Object/)。

Returns:

- [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) —

    The currently running AppBase object


Since:

API 级别 1.0.0

### **loadResource(resource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as [Application.ResourceType](/connect-iq/api-docs/Toybox/Application/#ResourceType-named_type) or [Application.ResourceReferenceType](/connect-iq/api-docs/Toybox/Application/#ResourceReferenceType-named_type)

从可执行文件加载资源。

注意：

在 CIQ 4.0.0 及更高版本中，[Toybox::Graphics::BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 和 [Toybox::Graphics::FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 会针对 [Toybox::WatchUi::BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 和 [Toybox::WatchUi::FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) 返回。

Parameters:

- resource — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    项目 `resources.xml` 文件中定义的资源标识符


Example:

加载 String 资源

```
// The resources.xml file contents:
// <resources>
//     <string id="AppName">APEELingApp</string>
// </resources>
using Toybox.Application;

var banana = Application.loadResource(Rez.Strings.AppName);
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

Since:

API 级别 3.1.0
