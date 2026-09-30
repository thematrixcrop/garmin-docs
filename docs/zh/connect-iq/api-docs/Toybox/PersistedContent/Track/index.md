---
title: "Class: Toybox.PersistedContent.Track"
---
# 类：Toybox.PersistedContent.Track

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.PersistedContent.Track](/connect-iq/api-docs/Toybox/PersistedContent/Track/)


[show all](#)

## 概述

设备上以 .GPX 格式保存的 Track。

## 另见：

- [PersistedContent.getTracks()](/connect-iq/api-docs/Toybox/PersistedContent/#getTracks-instance_function)


Since:

API 级别 2.2.0

:::details 支持的设备

-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rino® 7 Series

:::

## 实例方法摘要 [collapse](#)

- [**getId**](#getId-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    获取唯一的可序列化 id。

- [**getName**](#getName-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    获取内容的可读名称。

- [**remove**](#remove-instance_function)() as **Void**

    Remove a track.

- [**toIntent**](#toIntent-instance_function)() as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

    获取内容的系统 Intent。


## 实例方法详情

### **getId()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

获取唯一的可序列化 id

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    唯一的可序列化 id


Since:

API 级别 2.2.0

### **getName()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

获取内容的可读名称

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    可读名称


Since:

API 级别 2.2.0

### **remove()** as **Void**

Remove a track

Since:

API 级别 3.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    若给定内容不属于调用方应用则抛出。


### **toIntent()** as [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/)

获取内容的系统 Intent

Returns:

- [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) —

    内容的 System.Intent


Since:

API 级别 2.2.0
