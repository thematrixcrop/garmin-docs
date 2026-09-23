---
title: "Module: Toybox.Notifications"
---
# Module: Toybox.Notifications

## Overview

Since:

API Level 5.1.0

:::details Supported Devices

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

Requires Permission:

-   Notifications


## Classes Under Namespace

**Classes:** [NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)

## Constant Summary

### NotificationMessageType

Notification message types

Since:

API Level 5.1.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| NOTIFICATION\_MESSAGE\_TYPE\_DISMISSED | 1 |
API Level 5.1.0

 |

The notification was dismissed by the user

 |
| NOTIFICATION\_MESSAGE\_TYPE\_SELECTED | 2 |

API Level 5.1.0

 |

The notification action was selected by the user

 |

## Typedef Summary [collapse](#)

-   [**Action**](#Action-named_type) as { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) }

    A notification action.

-   [**NotificationDataKeyType**](#NotificationDataKeyType-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)
-   [**NotificationDataType**](#NotificationDataType-named_type) as [Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type), [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or **Null**
-   [**NotificationMessageCallback**](#NotificationMessageCallback-named_type) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)) as **Void**
-   [**ShowNotificationOptions**](#ShowNotificationOptions-named_type) as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :body as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type), :actions as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.Action](/connect-iq/api-docs/Toybox/Notifications/#Action-named_type)\>, :dismissPrevious as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

    Notification options.


## Instance Method Summary [collapse](#)

-   [**registerForNotificationMessages**](#registerForNotificationMessages-instance_function)(callback as [Notifications.NotificationMessageCallback](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageCallback-named_type) or **Null**) as **Void**

    Register a callback for receiving notification messages.

-   [**showNotification**](#showNotification-instance_function)(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), subTitle as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as [Notifications.ShowNotificationOptions](/connect-iq/api-docs/Toybox/Notifications/#ShowNotificationOptions-named_type) or **Null**) as **Void**

    Push a notification to the display.


## Typedef Details

### **Action** as { :label as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type) }

A notification action

Since:

API Level 5.1.0

### **NotificationDataKeyType** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Since:

API Level 5.1.0

### **NotificationDataType** as [Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Notifications.NotificationDataKeyType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataKeyType-named_type), [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)\> or **Null**

Since:

API Level 5.1.0

### **NotificationMessageCallback** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Notifications.NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/)) as **Void**

Since:

API Level 5.1.0

### **ShowNotificationOptions** as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :body as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :data as [Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type), :actions as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Notifications.Action](/connect-iq/api-docs/Toybox/Notifications/#Action-named_type)\>, :dismissPrevious as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

Notification options

Since:

API Level 5.1.0

## Instance Method Details

### **registerForNotificationMessages(callback as [Notifications.NotificationMessageCallback](/connect-iq/api-docs/Toybox/Notifications/#NotificationMessageCallback-named_type) or **Null**)** as **Void**

Register a callback for receiving notification messages.

The callback will be called once for each notification message. If there are messages queued for the app when this function is called, the callback will immediately be called once for each pending message.

Parameters:

-   callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    A reference to a callback, which must receive a `data` argument of the type [NotificationMessage](/connect-iq/api-docs/Toybox/Notifications/NotificationMessage/).


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

API Level 5.1.0

### **showNotification(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), subTitle as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as [Notifications.ShowNotificationOptions](/connect-iq/api-docs/Toybox/Notifications/#ShowNotificationOptions-named_type) or **Null**)** as **Void**

Push a notification to the display

Parameters:

-   title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The title of the notification.

-   subTitle — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The subTitle of the notification.

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary of options.

    -   :body — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The body of the notification.

    -   :data — ([Notifications.NotificationDataType](/connect-iq/api-docs/Toybox/Notifications/#NotificationDataType-named_type)) —

        The data associated with the notification. Will be passed back to the application for context when a notification action is selected.

    -   :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The icon to display with this notification. If no icon is provided and the system requires an icon, the app icon will be used.

    -   :actions — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

        An array of action strings to display, and the data for those strings when the action is selected. The selected action will be passed to the application for context when the notification action is selected. An empty :action array with no :data will appear as an actionless notification. These notifications will not trigger a notification when dismissed.

    -   :dismissPrevious — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        If true, dismiss all prior notifications that the app has posted. Note that this defaults to true if not provided.


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

API Level 5.1.0
