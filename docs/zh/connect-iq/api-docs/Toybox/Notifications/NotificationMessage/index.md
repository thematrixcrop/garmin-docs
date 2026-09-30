---
title: "类：Toybox.Notifications.NotificationMessage"
---
# 类：Toybox.Notifications.NotificationMessage

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)


[显示全部](#)

## 概述

NotificationMessage 将由在 [registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) 中注册的回调接收。

起始版本：

API 级别 5.1.0

## 实例成员摘要 [collapse](#)

- [**action**](#action-var) as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

    与所选操作关联的操作负载。所选操作的值来自提供给 [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) 的 `:actions` 选项。

- [**data**](#data-var) as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

    与通知关联的数据负载。[showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) 提供的 `:data` 选项的值。

- [**type**](#type-var) as [Notifications.NotificationMessageType](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageType-module)

    通知消息类型。


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var action as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

与所选操作关联的操作负载

从提供给 [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) 的 `:actions` 选项中选定的操作值。如果选定操作的值为 `null`，或通知已被忽略，则为 `null`。

起始版本：

API 级别 5.1.0

### var data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

与通知关联的数据负载

提供给 [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) 的 `:data` 选项的值。如果未提供值或值为 `null`，则为 `null`。

起始版本：

API 级别 5.1.0

### var type as [Notifications.NotificationMessageType](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageType-module)

通知消息类型

起始版本：

API 级别 5.1.0

## 实例方法详情

### **initialize()**

构造函数

起始版本：

API 级别 5.1.0
