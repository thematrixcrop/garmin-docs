---
title: "Notifications"
---
# 通知

后台服务可以通过调度更新或被事件唤醒来定期运行。有时您可能希望根据后台处理请求用户打开您的应用。

| API | 描述 | API 级别 |
| --- | --- | --- |
| [Background.requestApplicationWake()](/connect-iq/api-docs/Toybox/Background/#requestApplicationWake-instance_function) | 请求用户启动应用。这显示为确认对话框。 | 2.3.0 |
| [Notifications.showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) | 通知用户来自后台的事件。这显示为应用通知。 | 5.1.0 |
| [Notifications.registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) | 接收应用通知的状态。 | 5.1.0 |

## 唤醒应用

*自 API 级别 2.3.0 起*

[Background.requestApplicationWake()](/connect-iq/api-docs/Toybox/Background/#requestApplicationWake-instance_function) 允许您中断用户并请求他们打开您的应用。调用时，用户将看到您选择的确认消息。如果资源不足以启动应用，系统可能会阻止此请求。

## 通知

*自 API 级别 5.1.0 起*

Notifications API 允许您连接到通知系统并向用户提供可操作的通知。要向用户显示通知，请使用 [Notifications.showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) API。通知可以包含以下项目：

-   标题字符串

-   副标题字符串

-   正文字符串

-   自定义图标。如果不指定此项，则使用应用图标。


展示将匹配设备的个性风格，不能保证在不同设备上显示相同。如果有多个通知存在，将显示最新的通知。您可以将 `:dismissPrevious` 选项设置为 true，以在显示新通知之前请求系统清除您应用的其他通知。

您可以为通知定义一个动作数组。动作定义为字符串和可序列化数据。动作字符串与通知一起呈现给用户。如果用户选择其中一个动作，您的 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function) 的 `state` 字典将被调用，其中包含 `:launchedFromNotification`（带有动作数据）。默认情况下，通知具有与之关联的启动和关闭动作。使用 `:data` 选项允许您将数据与默认动作关联。

[Notifications.registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) 允许应用在通知动作被触发或通知被取消时收到通知。

## 示例

以下内容将显示带有"回复"和"关闭"选项的通知：

```typescript
Notifications.showNotification("Jeff", "Something Happened", {
     :icon => Rez.Drawables.EmergencyIcon,
     :data => {},
     :actions => [
        { :label => Rez.Strings.ReplyAction, :data => MY_NOTIFICATION_ID_REPLY },
        { :label => Rez.Strings.ForwardAction, :data => MY_NOTIFICATION_ID_FORWARD },
     ],
});
```

# 另见

Notification 示例展示了如何使用通知。
