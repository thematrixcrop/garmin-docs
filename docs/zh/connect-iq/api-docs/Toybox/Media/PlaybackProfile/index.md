---
title: "Class: Toybox.Media.PlaybackProfile"
---
# 类：Toybox.Media.PlaybackProfile

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/)


[show all](#)

## 概述

Provides the media player with specific rules about what playback options are supported.

Example:

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

Since:

API 级别 3.0.0

## 实例成员摘要 [collapse](#)

- [**attemptSkipAfterThumbsDown**](#attemptSkipAfterThumbsDown-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    定义执行点踩操作时是否跳过当前歌曲。

- [**playbackControls**](#playbackControls-var) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module) or [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/) or [Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)\> or **Null**

    应在播放器中渲染的播放控件。

- [**playbackNotificationThreshold**](#playbackNotificationThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The number of seconds a song must play to trigger a "played" notification.

- [**playerColors**](#playerColors-var) as [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/) or **Null**

    The colors for the media player.

- [**requirePlaybackNotification**](#requirePlaybackNotification-var) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    定义系统是否在每首歌曲播放时通知应用。

- [**skipBackwardTimeDelta**](#skipBackwardTimeDelta-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The number of seconds to move backward in a track during a skip backward event.

- [**skipForwardTimeDelta**](#skipForwardTimeDelta-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The number of seconds to move forward in a track during a skip forward event.

- [**skipPreviousThreshold**](#skipPreviousThreshold-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    The amount of time a song must be played so that pressing back restarts the track and requires a second back press to skip to the previous track in seconds.


## 实例属性详情

### var attemptSkipAfterThumbsDown as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

定义执行点踩操作时是否跳过当前歌曲

Since:

API 级别 3.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var playbackControls as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module) or [Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/) or [Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)\> or **Null**

应在播放器中渲染的播放控件。

This is an Array that holds a combination of [PLAYBACK\_CONTROL\_\*](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module), [CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/), and [SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/) values defined by the developer. The values in this Array determine which native media player control options are rendered and available to the end user of the current device. The first entry in the array may be used as a hotkey in the media player. This is device dependent.

Since:

API 级别 3.0.0

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

### var playbackNotificationThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The number of seconds a song must play to trigger a "played" notification. A value of 0 means notify as soon as the song begins playing.

Since:

API 级别 3.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var playerColors as [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/) or **Null**

The colors for the media player. If set to `null` the default colors that are device-dependent will be used.

Since:

API 级别 3.0.3

Returns:

- [Media.PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/)

### var requirePlaybackNotification as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

定义系统是否在每首歌曲播放时通知应用

Since:

API 级别 3.0.0

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

### var skipBackwardTimeDelta as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The number of seconds to move backward in a track during a skip backward event. If set to `null` the default value of 30 seconds will be used.

注意：

When overriding the default value, it will be necessary to provide a custom icon for the skip backward button, as the default indicates 30 seconds. This can be done by returning a [PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) with custom [playbackControls](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#playbackControls-var) from [getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function).

Since:

API 级别 4.2.4

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var skipForwardTimeDelta as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The number of seconds to move forward in a track during a skip forward event. If set to `null` the default value of 30 seconds will be used.

注意：

When overriding the default value, it will be necessary to provide a custom icon for the skip forward button, as the default indicates 30 seconds. This can be done by returning a [PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) with custom [playbackControls](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#playbackControls-var) from [getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function).

Since:

API 级别 4.2.4

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

### var skipPreviousThreshold as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

The amount of time a song must be played so that pressing back restarts the track and requires a second back press to skip to the previous track in seconds. If set to `null` a default value that is device-dependent will be used.

Since:

API 级别 3.0.0

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)
