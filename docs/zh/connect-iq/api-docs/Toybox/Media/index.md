---
title: "模块：Toybox.Media"
---
# 模块：Toybox.Media

## 概述

Media 模块提供用于实现音频内容提供商应用的对象和方法。

其中包括用于管理已下载媒体内容的接口，以及用于向系统提供播放所需信息的接口。

起始版本：

API 级别 3.0.0

应用类型与运行时上下文：

- 音频内容提供商

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

起始版本：

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PLAYBACK\_POSITION\_START | 0 |
API 级别 3.0.0

|

歌曲开始播放时的播放位置

|

### ContentType

起始版本：

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

起始版本：

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

WAV 音频编码类型

|

### ImageFormat

起始版本：

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

PNG 媒体内容图像格式

|

### PlaybackControl

起始版本：

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PLAYBACK\_CONTROL\_SHUFFLE | 2 |
API 级别 3.0.0

|

允许执行"随机播放"操作

|
| PLAYBACK\_CONTROL\_PREVIOUS | 3 |

API 级别 3.0.0

|

允许执行"上一曲目"操作

|
| PLAYBACK\_CONTROL\_NEXT | 4 |

API 级别 3.0.0

|

允许执行"下一曲目"操作

|
| PLAYBACK\_CONTROL\_SKIP\_FORWARD | 5 |

API 级别 3.0.0

|

允许执行"向前跳过 x 秒"操作

|
| PLAYBACK\_CONTROL\_SKIP\_BACKWARD | 6 |

API 级别 3.0.0

|

允许执行"向后跳过 x 秒"操作

|
| PLAYBACK\_CONTROL\_REPEAT | 7 |

API 级别 3.0.0

|

允许执行"重复"操作

|
| PLAYBACK\_CONTROL\_RATING | 9 |

API 级别 3.0.3

|

允许执行轨迹“评分”操作

|
| PLAYBACK\_CONTROL\_PLAYBACK | 10 |

API 级别 3.0.3

|

允许执行"播放/暂停"操作

|
| PLAYBACK\_CONTROL\_VOLUME | 11 |

API 级别 3.0.3

|

"volume" 按钮——如果未提供，则会添加到播放控件末尾

|
| PLAYBACK\_CONTROL\_SOURCE | 12 |

API 级别 3.0.3

|

"source" 按钮——如果未提供，则会添加到播放控件末尾

|
| PLAYBACK\_CONTROL\_LIBRARY | 13 |

API 级别 3.0.3

|

"library" 按钮——如果提供，则将用于库按钮 UI。

|

### SongEvent

起始版本：

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

起始版本：

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REPEAT\_MODE\_OFF | 0 |
API 级别 3.0.0

|

关闭重复播放

|
| REPEAT\_MODE\_ONE | 1 |

API 级别 3.0.0

|

重复播放当前轨迹

|
| REPEAT\_MODE\_ALL | 2 |

API 级别 3.0.0

|

重复播放所有轨迹

|

### ButtonState

起始版本：

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BUTTON\_STATE\_DEFAULT | 0 |
API 级别 3.0.3

|

按钮的默认状态。这是所有按钮的有效状态。

|
| BUTTON\_STATE\_DISABLED | 1 |

API 级别 3.0.3

|

按钮会显示，但不可选择。这是所有按钮的有效状态。

|
| BUTTON\_STATE\_ON | 2 |

API 级别 3.0.3

|

按钮被视为“开启”状态。这是 PLAYBACK\_CONTROL\_PLAYBACK、PLAYBACK\_CONTROL\_SHUFFLE 和 PLAYBACK\_CONTROL\_REPEAT 按钮的有效状态。

|
| BUTTON\_STATE\_OFF | 3 |

API 级别 3.0.3

|

按钮被视为“关闭”状态。这是 PLAYBACK\_CONTROL\_PLAYBACK、PLAYBACK\_CONTROL\_SHUFFLE 和 PLAYBACK\_CONTROL\_REPEAT 按钮的有效状态。

|
| BUTTON\_STATE\_ALL | 4 |

API 级别 3.0.3

|

按钮被视为“开启”和“全部”状态。这是 PLAYBACK\_CONTROL\_SHUFFLE（全部随机播放）和 PLAYBACK\_CONTROL\_REPEAT（全部重复播放）按钮的有效状态。

|
| BUTTON\_STATE\_POSITIVE | 5 |

API 级别 3.0.3

|

按钮被视为“正面”状态。这是 PLAYBACK\_CONTROL\_RATING 按钮的有效状态。

|
| BUTTON\_STATE\_NEGATIVE | 6 |

API 级别 3.0.3

|

按钮被视为“负面”状态。这是 PLAYBACK\_CONTROL\_RATING 按钮的有效状态。

|
| BUTTON\_STATE\_NEUTRAL | 7 |

API 级别 3.0.3

|

按钮被视为“中性”状态。这是 PLAYBACK\_CONTROL\_RATING 按钮的有效状态。

|

### ButtonImage

起始版本：

API 级别 3.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| BUTTON\_IMAGE\_ICON | 0 |
API 级别 3.0.3

|

正常尺寸的按钮图像

|
| BUTTON\_IMAGE\_DETAIL | 1 |

API 级别 3.0.3

|

图标高亮时使用的较大图像

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

    请求媒体播放器调用 [ContentIterator.getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function)。

- [**resetContentCache**](#resetContentCache-instance_function)() as **Void**

    删除缓存的媒体内容并重置应用的加密密钥。

- [**setAlbumArt**](#setAlbumArt-instance_function)(albumArt as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or **Null**) as **Void**

    设置当前播放歌曲的专辑封面。

- [**startPlayback**](#startPlayback-instance_function)(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type)) as **Void**

    退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以播放模式启动它。

- [**startSync**](#startSync-instance_function)() as **Void** deprecated

    退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以同步模式启动它。

- [**stopPlayback**](#stopPlayback-instance_function)() as **Void**

    如果播放由应用发起，则停止播放。


## 实例方法详情

### **deleteCachedItem(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/))** as **Void**

删除单个缓存的媒体项。

参数：

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    要删除的 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象的 ContentRef


起始版本：

API 级别 3.0.0

### **getCacheStatistics()** as [Media.CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/)

获取媒体缓存的当前大小统计信息。

返回：

- [Media.CacheStatistics](/connect-iq/api-docs/Toybox/Media/CacheStatistics/) —

    当前 CacheStatistics 对象


起始版本：

API 级别 3.0.0

### **getCachedContentObj(contentRef as [Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/))** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/)

根据 ID 从系统中已持久化的数据获取 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 对象。

参数：

- contentRef — ([Media.ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/)) —

    所需媒体 [Content](/connect-iq/api-docs/Toybox/Media/Content/) 的 ContentRef 对象


返回：

- [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    所需的 Content 对象


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 contentRef 参数不是有效的 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 对象，则会抛出此异常；如果内容类型设置为 CONTENT\_TYPE\_AUDIO，且所提供 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 对象的 ID 字段不是字符串，则会抛出此异常

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果提供的 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 具有无效的内容类型，则抛出


### **getContentRefIter(options as { :contentType as [Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module), :shuffle as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })** as [Media.ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/)

获取 [ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/) 对象。

ContentRefIterator 用于遍历调用应用在系统上缓存的所有媒体。

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :contentType — ([Media.ContentType](/connect-iq/api-docs/Toybox/Media/#ContentType-module)) —

        [CONTENT\_TYPE\_\*](/connect-iq/api-docs/Toybox/Media/#CONTENT_TYPE_INVALID-const) 值之一，用于指示缓存内容的类型。

- :shuffle — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

- 当为 `true` 时，将以随机顺序返回 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 对象

- 当为 `false` 时，将以系统决定的一致顺序返回 [ContentRef](/connect-iq/api-docs/Toybox/Media/ContentRef/) 对象



返回：

- [Media.ContentRefIterator](/connect-iq/api-docs/Toybox/Media/ContentRefIterator/)

起始版本：

API 级别 3.0.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果 :contentType 值无效，则会抛出此异常


### **notifySyncComplete(errorMessage as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**)** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

发送系统通知以指示同步已完成。

参数：

- errorMessage — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    如果发生失败，则为描述性错误消息。如果同步成功完成，则应将 `null` 传递给此方法。


另见：

- [Communications.notifySyncComplete()](/connect-iq/api-docs/Toybox/Communications/#notifySyncComplete-instance_function)


起始版本：

API 级别 3.0.0

### **notifySyncProgress(percentageComplete as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

发送系统通知以指示同步的整体进度。

参数：

- percentageComplete — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    一个从 0 到 100 的整数，表示完成百分比。


另见：

- [Communications.notifySyncProgress()](/connect-iq/api-docs/Toybox/Communications/#notifySyncProgress-instance_function)


起始版本：

API 级别 3.0.0

### **requestPlaybackProfileUpdate()** as **Void**

请求媒体播放器调用 [ContentIterator.getPlaybackProfile()](/connect-iq/api-docs/Toybox/Media/ContentIterator/#getPlaybackProfile-instance_function)

起始版本：

API 级别 3.0.3

### **resetContentCache()** as **Void**

删除缓存的媒体内容并重置应用的加密密钥。

起始版本：

API 级别 3.0.0

### **setAlbumArt(albumArt as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or **Null**)** as **Void**

设置当前播放歌曲的专辑封面

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

参数：

- albumArt — ([WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)) —

    要显示的专辑封面。如果为 `null`，则会显示系统默认的专辑封面。


起始版本：

API 级别 3.0.10

### **startPlayback(args as [Application.PersistableType](/connect-iq/api-docs/Toybox/Application/#PersistableType-named_type))** as **Void**

退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以播放模式启动它。

参数：

- args — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    应用以播放模式启动时传递给 [AudioContentProviderApp.getContentDelegate()](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/#getContentDelegate-instance_function) 的可序列化对象。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.SerializationException](/connect-iq/api-docs/Toybox/Lang/SerializationException/)) —

    如果给定参数无法序列化，或对于序列化来说过大，则抛出。


### **startSync()** as **Void**

**此项已弃用**

此方法可能在 System 9 之后移除。

退出当前模式下的 [AudioContentProviderApp](/connect-iq/api-docs/Toybox/Application/AudioContentProviderApp/)，并以同步模式启动它。

另见：

- [Communications.startSync()](/connect-iq/api-docs/Toybox/Communications/#startSync-instance_function)


起始版本：

API 级别 3.0.0

### **stopPlayback()** as **Void**

如果播放由应用发起，则停止播放。如果播放不是由应用发起的，调用 stopPlayback() 将不会执行任何操作。

起始版本：

API 级别 3.1.8
