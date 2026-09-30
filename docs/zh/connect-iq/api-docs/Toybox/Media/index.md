---
title: "Module: Toybox.Media"
---
# 模块：Toybox.Media

## 概述

The Media module provides objects and methods for implementing audio content provider apps.

This includes interfaces and methods for managing downloaded media content as well as interfaces used to provide required information to the system for playback.

Since:

API 级别 3.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 后台

- 速览


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5X Plus
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
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
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 170 Music
-   Forerunner® 245 Music
-   Forerunner® 255 Music
-   Forerunner® 255s Music
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 745
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 命名空间下的类

类：[ActiveContent](/connect-iq/api-docs/Toybox/Media/ActiveContent/), [AlbumArt](/connect-iq/api-docs/Toybox/Media/AlbumArt/), [AudioFormat](/connect-iq/api-docs/Toybox/Media/AudioFormat/), [CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/), [Content](/connect-iq/api-docs/Toybox/Media/Content/), [ContentDelegate](/connect-iq/api-docs/Toybox/Media/ContentDelegate/), [ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/), [ContentMetadata](/connect-iq/api-docs/Toybox/Media/ContentMetadata/), [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/), [ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/), [CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/), [PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/), [PlayerColors](/connect-iq/api-docs/Toybox/Media/PlayerColors/), [ProviderIconInfo](/connect-iq/api-docs/Toybox/Media/ProviderIconInfo/), [SyncDelegate](/connect-iq/api-docs/Toybox/Media/SyncDelegate/), [SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)

## 常量摘要

### PlaybackPosition

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PLAYBACK\_POSITION\_START | 0 |
API 级别 3.0.0

|

The playback position when the song has begun to play

|

### ContentType

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONTENT\_TYPE\_INVALID | 0 |
API 级别 3.0.0

|

无效的内容类型

|
| CONTENT\_TYPE\_AUDIO | 1 |

API 级别 3.0.0

|

音频的内容类型

|

### Encoding

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ENCODING\_INVALID | 0 |
API 级别 3.0.0

|

无效的编码类型

|
| ENCODING\_ADTS | 1 |

API 级别 3.0.0

|

ADTS 音频编码类型

|
| ENCODING\_MP3 | 2 |

API 级别 3.0.0

|

MP3 音频编码类型

|
| ENCODING\_M4A | 3 |

API 级别 3.0.0

|

M4A 音频编码类型

|
| ENCODING\_WAV | 4 |

API 级别 3.0.0

|

WAV audio encoding type

|

### ImageFormat

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| IMAGE\_FORMAT\_INVALID | 0 |
API 级别 3.0.0

|

无效的媒体内容图像格式

|
| IMAGE\_FORMAT\_JPEG | 1 |

API 级别 3.0.0

|

JPEG 媒体内容图像格式

|
| IMAGE\_FORMAT\_PNG | 2 |

API 级别 3.0.0

|

PNG media content image format

|

### PlaybackControl

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PLAYBACK\_CONTROL\_SHUFFLE | 2 |
API 级别 3.0.0

|

The "shuffle" operation is allowed

|
| PLAYBACK\_CONTROL\_PREVIOUS | 3 |

API 级别 3.0.0

|

The "previous track" operation is allowed

|
| PLAYBACK\_CONTROL\_NEXT | 4 |

API 级别 3.0.0

|

The "next track" operation is allowed

|
| PLAYBACK\_CONTROL\_SKIP\_FORWARD | 5 |

API 级别 3.0.0

|

The "skip forward x seconds" operation is allowed

|
| PLAYBACK\_CONTROL\_SKIP\_BACKWARD | 6 |

API 级别 3.0.0

|

The "skip backward x seconds" operation is allowed

|
| PLAYBACK\_CONTROL\_REPEAT | 7 |

API 级别 3.0.0

|

The "repeat" operation is allowed

|
| PLAYBACK\_CONTROL\_RATING | 9 |

API 级别 3.0.3

|

The track "rating" operation is allowed

|
| PLAYBACK\_CONTROL\_PLAYBACK | 10 |

API 级别 3.0.3

|

The "play/pause" operation is allowed

|
| PLAYBACK\_CONTROL\_VOLUME | 11 |

API 级别 3.0.3

|

The "volume" button - if not provided it will be added to the end of the playback controls

|
| PLAYBACK\_CONTROL\_SOURCE | 12 |

API 级别 3.0.3

|

The "source" button - if not provided it will be added to the end of the playback controls

|
| PLAYBACK\_CONTROL\_LIBRARY | 13 |

API 级别 3.0.3

|

The "library" button - If provided it will be used for the library button UI.

|

### SongEvent

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 | 另见 |
| --- | --- | --- | --- | --- |
| SONG\_EVENT\_START | 0 |
API 级别 3.0.0

|

表示歌曲从头开始播放。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_SKIP\_NEXT | 1 |

API 级别 3.0.0

|

表示歌曲已跳过，并请求播放下一首歌曲。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_SKIP\_PREVIOUS | 2 |

API 级别 3.0.0

|

表示歌曲已跳过，并请求播放上一首歌曲。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_PLAYBACK\_NOTIFY | 3 |

API 级别 3.0.0

|

表示歌曲已播放 [PlaybackProfile.playbackNotificationThreshold](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#playbackNotificationThreshold-var) 中设置的时长。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_COMPLETE | 4 |

API 级别 3.0.0

|

表示歌曲已播放完成。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_STOP | 5 |

API 级别 3.0.0

|

表示歌曲在播放过程中停止。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_PAUSE | 6 |

API 级别 3.0.0

|

表示歌曲在播放过程中暂停。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_RESUME | 7 |

API 级别 3.0.0

|

表示歌曲在暂停后恢复播放。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_SKIP\_FORWARD | 8 |

API 级别 4.2.4

|

指示歌曲已向前跳过 [PlaybackProfile.skipForwardTimeDelta](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#skipForwardTimeDelta-var) 中指定的秒数。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|
| SONG\_EVENT\_SKIP\_BACKWARD | 9 |

API 级别 4.2.4

|

指示歌曲已向前跳过 [PlaybackProfile.skipBackwardTimeDelta](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/#skipBackwardTimeDelta-var) 中指定的秒数。

| -   [ContentDelegate.onSong()](/connect-iq/api-docs/Toybox/Media/ContentDelegate/#onSong-instance_function)
|

### RepeatMode

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REPEAT\_MODE\_OFF | 0 |
API 级别 3.0.0

|

Repeat is off

|
| REPEAT\_MODE\_ONE | 1 |

API 级别 3.0.0

|

Repeat the current track

|
| REPEAT\_MODE\_ALL | 2 |

API 级别 3.0.0

|

Repeat all tracks

|

### ButtonState

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BUTTON\_STATE\_DEFAULT | 0 |
API 级别 3.0.3

|

The default state for a button. This is a valid state for all buttons.

|
| BUTTON\_STATE\_DISABLED | 1 |

API 级别 3.0.3

|

The button is shown but not selectable. This is a valid state for all buttons.

|
| BUTTON\_STATE\_ON | 2 |

API 级别 3.0.3

|

The button is considered "on". This is a valid state for the PLAYBACK\_CONTROL\_PLAYBACK, PLAYBACK\_CONTROL\_SHUFFLE, and PLAYBACK\_CONTROL\_REPEAT buttons.

|
| BUTTON\_STATE\_OFF | 3 |

API 级别 3.0.3

|

The button is considered "off". This is a valid state for the PLAYBACK\_CONTROL\_PLAYBACK, PLAYBACK\_CONTROL\_SHUFFLE, and PLAYBACK\_CONTROL\_REPEAT buttons.

|
| BUTTON\_STATE\_ALL | 4 |

API 级别 3.0.3

|

The button is considered in the "on" and "all" states. This is a valid state the for the PLAYBACK\_CONTROL\_SHUFFLE (shuffle all) and PLAYBACK\_CONTROL\_REPEAT (repeat all) buttons.

|
| BUTTON\_STATE\_POSITIVE | 5 |

API 级别 3.0.3

|

The button is considered in the "positive" state. This is a valid state the for the PLAYBACK\_CONTROL\_RATING button.

|
| BUTTON\_STATE\_NEGATIVE | 6 |

API 级别 3.0.3

|

The button is considered in the "negative" state. This is a valid state the for the PLAYBACK\_CONTROL\_RATING button.

|
| BUTTON\_STATE\_NEUTRAL | 7 |

API 级别 3.0.3

|

The button is considered in the "neutral" state. This is a valid state the for the PLAYBACK\_CONTROL\_RATING button.

|

### ButtonImage

Since:

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BUTTON\_IMAGE\_ICON | 0 |
API 级别 3.0.3

|

The normal sized button image

|
| BUTTON\_IMAGE\_DETAIL | 1 |

API 级别 3.0.3

|

The larger image for when the icon is highlighted

|

## 实例方法摘要 [collapse](#)

- [**deleteCachedItem**](#deleteCachedItem-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) as **Void**

    删除单个缓存的媒体项。

- [**getCacheStatistics**](#getCacheStatistics-instance_function)() as [Media.CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/)

    获取媒体缓存的当前大小统计信息。

- [**getCachedContentObj**](#getCachedContentObj-instance_function)(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

    根据 ID 从系统中已持久化的数据获取 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象。

- [**getContentRefIter**](#getContentRefIter-instance_function)(options as { :contentType as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module), :shuffle as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }) as [Media.ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/)

    获取 [ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/) 对象。

- [**notifySyncComplete**](#notifySyncComplete-instance_function)(errorMessage as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**) as **Void** deprecated

    发送系统通知以指示同步已完成。

- [**notifySyncProgress**](#notifySyncProgress-instance_function)(percentageComplete as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void** deprecated

    发送系统通知以指示同步的整体进度。

- [**requestPlaybackProfileUpdate**](#requestPlaybackProfileUpdate-instance_function)() as **Void**

    Request that the media player call [ContentIterator.getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function).

- [**resetContentCache**](#resetContentCache-instance_function)() as **Void**

    删除缓存的媒体内容并重置应用的加密密钥。

- [**setAlbumArt**](#setAlbumArt-instance_function)(albumArt as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or **Null**) as **Void**

    Set the album art for the currently playing song.

- [**startPlayback**](#startPlayback-instance_function)(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type)) as **Void**

    退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以播放模式启动它。

- [**startSync**](#startSync-instance_function)() as **Void** deprecated

    退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以同步模式启动它。

- [**stopPlayback**](#stopPlayback-instance_function)() as **Void**

    Stops playback if it was initiated by the app.


## 实例方法详情

### **deleteCachedItem(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/))** as **Void**

删除单个缓存的媒体项。

Parameters:

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    The ContentRef for the [Content](/connect-iq/api-docs/Toybox/Media/Content/) object to be deleted


Since:

API 级别 3.0.0

### **getCacheStatistics()** as [Media.CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/)

获取媒体缓存的当前大小统计信息。

Returns:

- [Media.CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/) —

    The current CacheStatistics object


Since:

API 级别 3.0.0

### **getCachedContentObj(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/))** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

根据 ID 从系统中已持久化的数据获取 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象。

Parameters:

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    The ContentRef object for the desired media [Content](/connect-iq/api-docs/Toybox/Media/Content/)


Returns:

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    The desired Content object


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if contentRef parameter is not a valid [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) object Thrown if ID field of provided [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) object is not a string but content type is set to CONTENT\_TYPE\_AUDIO

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if provided [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) has an invalid content type


### **getContentRefIter(options as { :contentType as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module), :shuffle as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })** as [Media.ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/)

获取 [ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/) 对象。

The ContentRefIterator is used to iterate over all cached media on the system for the calling app.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :contentType — ([Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)) —

        [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) 值之一，用于指示缓存内容的类型。

- :shuffle — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

- When `true`, the [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) objects will be returned in a random order

- When `false`, the [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) objects will be returned in a consistent order that is system dependent



Returns:

- [Media.ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/)

Since:

API 级别 3.0.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Thrown if :contentType value is invalid


### **notifySyncComplete(errorMessage as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**)** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

发送系统通知以指示同步已完成。

Parameters:

- errorMessage — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    如果发生失败，则为描述性错误消息。如果同步成功完成，则应将 `null` 传递给此方法。


另见：

- [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function)


Since:

API 级别 3.0.0

### **notifySyncProgress(percentageComplete as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

发送系统通知以指示同步的整体进度。

Parameters:

- percentageComplete — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个从 0 到 100 的整数，表示完成百分比。


另见：

- [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function)


Since:

API 级别 3.0.0

### **requestPlaybackProfileUpdate()** as **Void**

Request that the media player call [ContentIterator.getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function)

Since:

API 级别 3.0.3

### **resetContentCache()** as **Void**

删除缓存的媒体内容并重置应用的加密密钥。

Since:

API 级别 3.0.0

### **setAlbumArt(albumArt as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or **Null**)** as **Void**

Set the album art for the currently playing song

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- albumArt — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)) —

    The album art to display. If `null` then the system's default album art will be displayed.


Since:

API 级别 3.0.10

### **startPlayback(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type))** as **Void**

退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以播放模式启动它。

Parameters:

- args — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    应用以播放模式启动时传递给 [AudioContentProviderApp.getContentDelegate()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getContentDelegate-instance_function) 的可序列化对象。


Since:

API 级别 3.0.0

Throws:

- ([Lang.SerializationException](/connect-iq/api-docs/Toybox/Lang/SerializationException/)) —

    Thrown when the given argument cannot be serialized or is too large for serialization.


### **startSync()** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以同步模式启动它。

另见：

- [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function)


Since:

API 级别 3.0.0

### **stopPlayback()** as **Void**

Stops playback if it was initiated by the app. If playback was not initiated by the app, calling stopPlayback() will do nothing.

Since:

API 级别 3.1.8
