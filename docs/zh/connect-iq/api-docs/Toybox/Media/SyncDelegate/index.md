---
title: "类：Toybox.Media.SyncDelegate"
---
# 类：Toybox.Media.SyncDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.SyncDelegate](/connect-iq/api-docs/Toybox/Media/SyncDelegate/)


[show all](#)

## 概述

用户实现的委托对象，用于响应系统发出的媒体同步请求。

**此项已弃用**

此类可能会在 System 9 之后移除。

## 另见：

- [Toybox.Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)


起始版本：

API 级别 3.0.0

## 实例方法摘要 [collapse](#)

- [**isSyncNeeded**](#isSyncNeeded-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    检查是否需要同步。

- [**onStartSync**](#onStartSync-instance_function)() as **Void**

    系统启动同步时调用。

- [**onStopSync**](#onStopSync-instance_function)() as **Void**

    活动同步被取消时调用。


## 实例方法详情

### **isSyncNeeded()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

检查是否需要同步。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

- 当值为 `true` 时，需要同步

- 当值为 `false` 时，不需要同步；如果为此应用触发同步，则不会调用 [onStartSync](/connect-iq/api-docs/Toybox/Media/SyncDelegate/#onStartSync-instance_function)



起始版本：

API 级别 3.0.0

### **onStartSync()** as **Void**

系统启动同步时调用。

应使用此方法启动应用同步过程。这包括获取准备同步所需数据的任何设置工作，以及首次调用 [makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) 以下载第一段音频内容。请注意，使用此方法时，必须手动将 makeWebRequest() 调用串联起来。此外，必须间歇性调用 [notifySyncProgress()](/connect-iq/api-docs/Toybox/Media/#notifySyncProgress-instance_function)，以便在设备的原生用户界面中显示同步进度更新。最后，必须在同步成功完成或发生错误时调用 [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function)，以便正确通知设备同步过程已结束。

起始版本：

API 级别 3.0.0

### **onStopSync()** as **Void**

活动同步被取消时调用。

用户取消活动同步时会调用此方法。应用负责调用 [cancelAllRequests()](/connect-iq/api-docs/Toybox/Communications/#cancelAllRequests-instance_function)，以取消为同步过程发出的任何请求。应用还负责通过调用 [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function) 通知系统同步已成功取消。

起始版本：

API 级别 3.0.0
