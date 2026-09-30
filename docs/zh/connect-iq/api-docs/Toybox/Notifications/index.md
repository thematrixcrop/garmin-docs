---
title: "Module: Toybox.Notifications"
---
# 模块：Toybox.Notifications

## 概述

Since:

API 级别 5.1.0

:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
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
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

需要权限：

- Notifications


## 命名空间下的类

类：[NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)

## 常量摘要

### NotificationMessageType

通知消息类型

Since:

API 级别 5.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| NOTIFICATION\_MESSAGE\_TYPE\_DISMISSED | 1 |
API 级别 5.1.0

|

用户关闭了通知

|
| NOTIFICATION\_MESSAGE\_TYPE\_SELECTED | 2 |

API 级别 5.1.0

|

用户选择了通知操作

|

## 类型定义摘要 [collapse](#)

- [**Action**](#Action-named_type) as { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) }

    通知操作。

- [**NotificationDataKeyType**](#NotificationDataKeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
- [**NotificationDataType**](#NotificationDataType-named_type) as [Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type), [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or **Null**
- [**NotificationMessageCallback**](#NotificationMessageCallback-named_type) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)) as **Void**
- [**ShowNotificationOptions**](#ShowNotificationOptions-named_type) as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :body as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type), :actions as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.Action](/connect-iq/api-docs/Toybox/Notifications/#Action-named_type)\>, :dismissPrevious as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

    通知选项。


## 实例方法摘要 [collapse](#)

- [**registerForNotificationMessages**](#registerForNotificationMessages-instance_function)(callback as [Notifications.NotificationMessageCallback](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageCallback-named_type) or **Null**) as **Void**

    注册用于接收通知消息的回调。

- [**showNotification**](#showNotification-instance_function)(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), subTitle as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as [Notifications.ShowNotificationOptions](/connect-iq/api-docs/Toybox/Notifications/#ShowNotificationOptions-named_type) or **Null**) as **Void**

    向显示屏推送通知。


## 类型定义详情

### **Action** as { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) }

通知操作

Since:

API 级别 5.1.0

### **NotificationDataKeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API 级别 5.1.0

### **NotificationDataType** as [Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type), [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or **Null**

Since:

API 级别 5.1.0

### **NotificationMessageCallback** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)) as **Void**

Since:

API 级别 5.1.0

### **ShowNotificationOptions** as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :body as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type), :actions as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.Action](/connect-iq/api-docs/Toybox/Notifications/#Action-named_type)\>, :dismissPrevious as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

通知选项

Since:

API 级别 5.1.0

## 实例方法详情

### **registerForNotificationMessages(callback as [Notifications.NotificationMessageCallback](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageCallback-named_type) or **Null**)** as **Void**

注册用于接收通知消息的回调。

每收到一条通知消息，都会调用一次回调。如果调用此函数时应用有排队等待处理的消息，回调将立即针对每条待处理消息调用一次。

Parameters:

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调的引用，该回调必须接收类型为 [NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/) 的 `data` 参数。


Example:

```
using Communications;

// set up phoneMessageCallback
function notificationMessageCallback(aMessage as NotificationMessage) as Void {
   System.println(aMessage.type);
   System.println(aMessage.data);
   System.println(aMessage.action);
}

// register callback to start receiving notifications when users interact with notifications or toasts
Notifications.registerForNotificationMessages(self.method(:notificationMessageCallback));
```

Since:

API 级别 5.1.0

### **showNotification(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), subTitle as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as [Notifications.ShowNotificationOptions](/connect-iq/api-docs/Toybox/Notifications/#ShowNotificationOptions-named_type) or **Null**)** as **Void**

向显示屏推送通知

Parameters:

- title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    通知的标题。

- subTitle — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    通知的副标题。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :body — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        通知正文。

- :data — ([Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)) —

        与通知关联的数据。选择通知操作时，该数据将传回应用以提供上下文。

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        要随此通知显示的图标。如果未提供图标且系统要求图标，则将使用应用程序图标。

- :actions — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        用于显示的操作字符串数组，以及在选择操作时传递给这些字符串的数据。选择通知操作时，所选操作将作为上下文传递给应用。没有 :data 的空 :action 数组将显示为无操作通知。关闭这些通知时不会触发通知。

- :dismissPrevious — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果为 true，则关闭应用之前发布的所有通知。请注意，如果未提供此值，则默认为 true。


Example:

```
 Notifications.showNotification("Jeff", "Something Happened", {
     :icon => Rez.Drawables.EmergencyIcon,
     :data => {},
     :actions => [
        { :label => Rez.Strings.ReplyAction, :data => MY_NOTIFICATION_ID_REPLY },
        { :label => Rez.Strings.ForwardAction, :data => MY_NOTIFICATION_ID_FORWARD },
     ],
});
```

Since:

API 级别 5.1.0
