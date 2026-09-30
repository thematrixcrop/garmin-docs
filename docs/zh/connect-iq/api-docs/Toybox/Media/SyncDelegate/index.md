---
title: "Class: Toybox.Media.SyncDelegate"
---
# 类：Toybox.Media.SyncDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.SyncDelegate](/connect-iq/api-docs/Toybox/Media/SyncDelegate/)


[show all](#)

## 概述

用户实现的委托对象，用于响应系统发出的媒体同步请求。

**此项已弃用**

This class may be removed after System 9.

## 另见：

- [Toybox.Communications.SyncDelegate](/connect-iq/api-docs/Toybox/Communications/SyncDelegate/)


Since:

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

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

- 当值为 `true` 时，需要同步

- 当值为 `false` 时，不需要同步；如果为此应用触发同步，则不会调用 [onStartSync](/connect-iq/api-docs/Toybox/Media/SyncDelegate/#onStartSync-instance_function)



Since:

API 级别 3.0.0

### **onStartSync()** as **Void**

系统启动同步时调用。

This method should be used to kick-off the application sync process. This includes any setup required to fetch the data needed to prepare the sync, as well as the initial call to [makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function) to download the first piece of audio content. Note that, when using this method, you must chain your makeWebRequest() calls together manually. Additionally, you must call [notifySyncProgress()](/connect-iq/api-docs/Toybox/Media/#notifySyncProgress-instance_function) intermittently to enable sync progress updates to be displayed in the native user interface for the device. Finally, [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function) must be called either when the sync has successfully completed, or if an error occurs, so that the device can be properly notified that the sync process is finished.

Since:

API 级别 3.0.0

### **onStopSync()** as **Void**

活动同步被取消时调用。

用户取消活动同步时会调用此方法。应用负责调用 [cancelAllRequests()](/connect-iq/api-docs/Toybox/Communications/#cancelAllRequests-instance_function)，以取消为同步过程发出的任何请求。应用还负责通过调用 [notifySyncComplete()](/connect-iq/api-docs/Toybox/Media/#notifySyncComplete-instance_function) 通知系统同步已成功取消。

Since:

API 级别 3.0.0
