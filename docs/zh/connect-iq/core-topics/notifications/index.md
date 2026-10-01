---
title: "通知"
---
<a id="notifications"></a>
# 通知

后台服务可以通过定时更新或事件唤醒的方式周期性运行。有时，您可能希望根据后台处理结果提示用户打开应用。

| API | 说明 | API 级别 |
| --- | --- | --- |
| [Background.requestApplicationWake()](/connect-iq/api-docs/Toybox/Background/#requestApplicationWake-instance_function) | 请求用户启动应用，并显示确认提示。 | 2.3.0 |
| [Notifications.showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) | 将后台事件通知用户，并显示为应用通知。 | 5.1.0 |
| [Notifications.registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) | 接收应用通知的状态。 | 5.1.0 |

## 唤醒应用

*自 API 级别 2.3.0 起支持*

[Background.requestApplicationWake()](/connect-iq/api-docs/Toybox/Background/#requestApplicationWake-instance_function) 可以打断用户当前操作，请求用户打开应用。调用后，系统会显示由您指定的确认消息。如果没有足够资源启动应用，系统可能会抑制此请求。

## 通知

*自 API 级别 5.1.0 起支持*

Notifications API 可以接入系统通知，并向用户提供可操作的通知。要显示通知，请使用 [Notifications.showNotification()](/connect-iq/api-docs/Toybox/Notifications/#showNotification-instance_function) API。通知可以包含以下内容：

- 标题字符串
- 副标题字符串
- 正文字符串
- 自定义图标。如果未指定，则使用应用图标。

通知的展示方式会匹配设备的 personality，因此不同设备上的显示效果可能不同。如果同时存在多条通知，系统会显示最新的一条。将 `:dismissPrevious` 选项设为 `true`，可以请求系统在显示新通知前清除来自应用的其他通知。

可以为通知定义一组 action。每个 action 由字符串和可序列化数据组成，并会随通知一起显示给用户。用户选择 action 后，系统会调用 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)，并在 `state` 字典的 `:launchedFromNotification` 中提供 action 数据。通知默认带有启动和关闭 action；使用 `:data` 选项可以为默认 action 关联数据。

[Notifications.registerForNotificationMessages()](/connect-iq/api-docs/Toybox/Notifications/#registerForNotificationMessages-instance_function) 可以让应用在通知 action 被触发或通知被关闭时收到通知。

## 示例

下面的代码会显示带有“回复”和“转发”选项的通知：

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

# 另请参阅

`Notification` 示例应用演示了如何使用通知。
