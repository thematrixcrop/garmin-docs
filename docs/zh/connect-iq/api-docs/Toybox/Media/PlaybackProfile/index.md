---
title: "类：Toybox.Media.PlaybackProfile"
---
# 类：Toybox.Media.PlaybackProfile

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/)


[显示全部](#)

## 概述

为媒体播放器提供有关支持哪些播放选项的具体规则。

示例：

PlaybackProfile 对象的示例

```
// Returns the playback profile
function getPlaybackProfile() {
   var profile = new PlaybackProfile();

   // Set the parameters for the PlaybackProfile.playbackControls
   profile.playbackControls = [
       Media.PLAYBACK_CONTROL_PLAYBACK,      // Allow Play/Pause control
       Media.PLAYBACK_CONTROL_SHUFFLE,       // Allow Shuffle control
       Media.PLAYBACK_CONTROL_PREVIOUS,      // Allow Previous control
       Media.PLAYBACK_CONTROL_NEXT,          // Allow Next control
       Media.PLAYBACK_CONTROL_SKIP_FORWARD,  // Allow Skip-Forward control
       Media.PLAYBACK_CONTROL_SKIP_BACKWARD, // Allow Skip-Backward control
       Media.PLAYBACK_CONTROL_REPEAT,        // Allow Repeat control
       Media.PLAYBACK_CONTROL_RATING         // Allow Ratings control
   ];

   // Skip media content on thumbs-down
   profile.attemptSkipAfterThumbsDown = true;

   // Do not require playback notification
   profile.requirePlaybackNotification = false;

   // Set the notification threshold to 30 seconds
   profile.playbackNotificationThreshold = 30;

   // Set the skip previous threshold to 5 seconds
   profile.skipPreviousThreshold = 5;

   return profile;
}
```

起始版本：

API 级别 3.0.0

## 实例成员摘要 [collapse](#)

- [**attemptSkipAfterThumbsDown**](#attemptSkipAfterThumbsDown-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    定义执行点踩操作时是否跳过当前歌曲。

- [**playbackControls**](#playbackControls-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module) or [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/) or [Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)\> or **Null**

    应在播放器中渲染的播放控件。

- [**playbackNotificationThreshold**](#playbackNotificationThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    歌曲必须播放的秒数，达到该时长后才会触发“已播放”通知。

- [**playerColors**](#playerColors-var) as [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/) or **Null**

    媒体播放器的颜色。

- [**requirePlaybackNotification**](#requirePlaybackNotification-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    定义系统是否在每首歌曲播放时通知应用。

- [**skipBackwardTimeDelta**](#skipBackwardTimeDelta-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    发生向后跳过事件时，曲目向后移动的秒数。

- [**skipForwardTimeDelta**](#skipForwardTimeDelta-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    发生向前跳过事件时，曲目向前移动的秒数。

- [**skipPreviousThreshold**](#skipPreviousThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    歌曲必须播放的时长，单位为秒；超过此时长后按返回键会重新开始当前曲目，再次按返回键才会跳到上一曲目。


## 实例属性详情

### var attemptSkipAfterThumbsDown as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

定义执行点踩操作时是否跳过当前歌曲

起始版本：

API 级别 3.0.0

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var playbackControls as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module) or [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/) or [Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)\> or **Null**

应在播放器中渲染的播放控件。

这是一个 Array，其中包含开发者定义的 [PLAYBACK\_CONTROL\_\*](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module)、[CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/) 和 [SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/) 值的组合。此 Array 中的值决定当前设备为最终用户呈现并提供哪些原生媒体播放器控制选项。数组中的第一项可用作媒体播放器中的快捷键。这取决于设备。

起始版本：

API 级别 3.0.0

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var playbackNotificationThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

歌曲必须播放的秒数，达到该时长后才会触发“已播放”通知。值为 0 表示歌曲开始播放后立即通知。

起始版本：

API 级别 3.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var playerColors as [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/) or **Null**

媒体播放器的颜色。如果设置为 `null`，将使用依赖设备的默认颜色。

起始版本：

API 级别 3.0.3

返回：

- [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/)

### var requirePlaybackNotification as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

定义系统是否在每首歌曲播放时通知应用

起始版本：

API 级别 3.0.0

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var skipBackwardTimeDelta as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

发生向后跳过事件时，曲目向后移动的秒数。如果设置为 `null`，则使用默认值 30 秒。

注意：

覆盖默认值时，需要为向后跳过按钮提供自定义图标，因为默认图标表示 30 秒。可以通过从 [getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function) 返回带有自定义 [playbackControls](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#playbackControls-var) 的 [PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) 来实现。

起始版本：

API 级别 4.2.4

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var skipForwardTimeDelta as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

发生向前跳过事件时，曲目向前移动的秒数。如果设置为 `null`，则使用默认值 30 秒。

注意：

覆盖默认值时，需要为向前跳过按钮提供自定义图标，因为默认图标表示 30 秒。可以通过从 [getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function) 返回带有自定义 [playbackControls](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#playbackControls-var) 的 [PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) 来实现。

起始版本：

API 级别 4.2.4

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var skipPreviousThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

歌曲必须播放的时长，单位为秒；超过此时长后按返回键会重新开始当前曲目，再次按返回键才会跳到上一曲目。如果设置为 `null`，则使用依赖设备的默认值。

起始版本：

API 级别 3.0.0

返回：

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
