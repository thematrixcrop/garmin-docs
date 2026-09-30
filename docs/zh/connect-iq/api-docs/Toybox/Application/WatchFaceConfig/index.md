---
title: "Module: Toybox.Application.WatchFaceConfig"
---
# 模块：Toybox.Application.WatchFaceConfig

## 概述

WatchFaceConfig 模块便于访问持久化的表盘配置。表盘可以有多个配置设置，每个设置都由唯一标识符表示。

Since:

API 级别 5.1.0

:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

## 命名空间下的类

类：[Color](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Color/), [ComplicationRef](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/ComplicationRef/), [Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/), [Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/)

## 实例方法摘要 [collapse](#)

- [**getIds**](#getIds-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/)\> or **Null**

    返回所有已保存的表盘配置设置的 ID。

- [**getSettings**](#getSettings-instance_function)(configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**) as [WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/) or **Null**

    返回给定唯一标识符对应的表盘配置设置。

- [**setSettings**](#setSettings-instance_function)(configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**, settings as [WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/)) as **Void**

    使用给定的唯一标识符 `configId` 设置或更新表盘配置设置。


## 实例方法详情

### **getIds()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/)\> or **Null**

返回所有已保存的表盘配置设置的 ID。

:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    如果表盘不支持表盘配置，则为 `null`。


Since:

API 级别 5.1.0

### **getSettings(configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**)** as [WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/) or **Null**

返回给定唯一标识符对应的表盘配置设置。

Parameters:

- configId — (Id) —

    要获取的表盘配置设置的唯一标识符；如果为 null，则返回默认设置或活动设置。


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/) —

    如果表盘不支持表盘配置，则为 `null`。


Since:

API 级别 5.1.0

### **setSettings(configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/) or **Null**, settings as [WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/))** as **Void**

使用给定的唯一标识符 `configId` 设置或更新表盘配置设置。

Parameters:

- configId — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要保存或更新的表盘配置设置的唯一标识符；如果为 `null`，则更新默认设置。

- settings — ([WatchFaceConfig.Settings](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Settings/)) —

    要应用的表盘配置设置。


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `settings` 是不允许的数据类型，则会抛出此异常。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果设置包含无效值，则抛出。
