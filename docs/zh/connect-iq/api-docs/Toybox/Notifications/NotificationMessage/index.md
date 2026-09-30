---
title: "Class: Toybox.Notifications.NotificationMessage"
---
# 类：Toybox.Notifications.NotificationMessage

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)


[show all](#)

## 概述

NotificationMessage 将由在 [registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) 中注册的回调接收。

Since:

API 级别 5.1.0

## 实例成员摘要 [collapse](#)

- [**action**](#action-var) as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

    The action payload associated with the selected action The value of the selected action from the `:actions` option provided to [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function).

- [**data**](#data-var) as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

    The data payload associated with the notification The value of the `:data` option provided to [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function).

- [**type**](#type-var) as [Notifications.NotificationMessageType](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageType-module)

    The notification message type.


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.


## 实例属性详情

### var action as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

The action payload associated with the selected action

The value of the selected action from the `:actions` option provided to [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function). This will be `null` if the selected action had a `null` value, or if the notification was dismissed.

Since:

API 级别 5.1.0

### var data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) or **Null**

The data payload associated with the notification

The value of the `:data` option provided to [showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function). This will be `null` if no value was provided or it was `null`.

Since:

API 级别 5.1.0

### var type as [Notifications.NotificationMessageType](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageType-module)

The notification message type

Since:

API 级别 5.1.0

## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 5.1.0
