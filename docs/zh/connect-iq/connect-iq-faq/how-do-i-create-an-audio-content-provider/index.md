---
title: "如何创建音频内容提供商？"
---
<a id="how-do-i-create-an-audio-content-provider"></a>
# 如何创建音频内容提供商？

Garmin 于 2018 年推出了[多款支持音乐的可穿戴产品](https://buy.garmin.com/en-US/US/c10002-p1.html?FILTER_FEATURE_MUSICSTORAGE=true&sorter=featuredProducts-desc)，让用户在进行日常活动时可以把手机留在家里。用户可以直接将音乐库复制到设备，也可以安装 Connect IQ Audio Content Provider 应用，作为可穿戴设备与内容分发网络（CDN）之间的桥梁。

*Audio Content Provider* 允许第三方音乐服务传送受保护的内容。它们可以通过 Wi-Fi 直接从 CDN 将内容下载到手表，并作为原生媒体播放器的插件。内容在写入磁盘前会加密，播放时再解密。

本文介绍 Audio Content Provider 所承担的各项职责，以及实现它所需的基础知识。

## 将内容同步到设备

Garmin 音乐可穿戴设备通过将内容同步到设备，以便之后播放，从而与第三方服务交互。用户可以在*同步配置*状态下启动音乐应用，选择要同步到设备的内容。

![](/connect-iq/resources/faq/sync_config.png)

同步配置界面由 Audio Content Provider 应用定义。如果希望界面与设备的外观和交互风格一致，WatchUi.Menu2 类可以完成大部分实现工作。如果希望根据品牌定制外观和交互风格，`WatchUi.CustomMenu` 会提供更大的灵活性。

Audio Content Provider 应用可以通过 REST 服务直接从 CDN 将内容下载到手表。要将歌曲下载到手表，需要经过以下步骤：

1.  Connect IQ 应用通过 Web API 请求下载音频文件。

2.  后端服务从 CDN 提供音频文件。

3.  Connect IQ 应用将下载的音频文件保存到手表文件系统。数据写入文件系统时会加密，文件系统中不会写入未加密的内容。


![](/connect-iq/resources/faq/downloading_music_content.png)

Audio Content Provider 应用下载的内容会受到多重保护：

1.  音乐应用和音频文件存储在设备的隐藏文件夹中。

2.  应用和音频文件使用 AES-128 加密。

3.  应用可以通过一次调用销毁所有已下载内容并重置加密密钥。


每个应用都有独立的存储沙箱。存储文件经过加密，系统中的其他应用无法访问。

配置步骤完成后，系统会启动同步。系统会提示用户开始同步；如果用户同意，设备会启用 Wi-Fi，并在连接后请求应用创建一个 `SyncDelegate`。该委托用于通知应用同步已开始或已停止，并确定是否需要同步。在 `SyncDelegate` 的 `onStart` 方法中，应用需要下载用户在同步配置步骤中选择的歌曲。应用会将同步进度通知系统，以便更新界面。

![](/connect-iq/resources/faq/sync_flow.png)

## 播放

内容下载完成后，Connect IQ 应用可以将音频文件提供给原生媒体播放器播放。用户可以使用媒体控件控制播放，也可以进入应用的播放配置模式，选择要收听的内容。

![](/connect-iq/resources/faq/playback_tree.png)

### 播放配置

用户进入播放配置后，应用应允许用户在应用内选择或更改音频内容（播放列表、书籍或播客）。播放配置界面由 Audio Content Provider 定义。

![](/connect-iq/resources/faq/playback_configuration.png)

在此流程中，用户可以选择要播放的歌曲。应用可以让用户从播放列表或单首歌曲中进行选择，也可以通过 `Media.startPlayback()` 从此流程开始播放，或者让用户在媒体播放器中选择播放内容。

### 播放

播放由媒体播放器驱动，但应用可以决定显示哪些媒体播放器控件以及播放哪些内容。实现 `Media.ContentDelegate` 类即可启用这些功能。

ContentDelegate 负责提供一个 `Media.ContentIterator`，为媒体播放器提供代表已下载歌曲的 `Media.ContentRef` 实例迭代器。ContentIterator 还提供 `Media.PlaybackProfile`，用于自定义媒体播放器界面。您可以针对每首歌曲禁用跳过按钮，`Media.ContentRef` 的元数据也会显示在播放器中。

播放音频时，媒体播放器会将播放信息发送给 `ContentDelegate`，供报告用途使用。Connect IQ 应用可以保存每次播放歌曲的报告信息，并通过 Web 请求或同步将其发送回服务提供商。

## 提示和技巧

`Toybox.Media` 模块提供下载音频内容以及与音频内容交互所需的工具；要保存报告信息，则应使用 `Toybox.Application.Storage` 模块。Connect IQ Storage 系统提供了简单的键值存储来持久化内容，但每个值的大小上限为 8 KB。

如果要保存大量播放信息，设计存储方案时必须考虑这一限制。最好使用扁平结构，因为嵌套表很快就会超过 8 KB 的限制。

![](/connect-iq/resources/faq/music_storage.png)

使用已知键（`playlists`）将播放列表 ID（`Px`）存储在顶层数组中。在 Storage 中为每个播放列表 ID 和歌曲 ID（`Sx`）建立字典条目。在播放列表条目中保存歌曲 ID 引用，在歌曲条目中保存 `ContentRef` ID 和播放记录数组。这样，每首歌曲都可以使用大部分存储空间保存播放记录。

## 结论

借助 Connect IQ Audio Content Provider 应用，您可以：

-   通过现有的内容分发 Web 服务，将受保护的内容安全地传送到支持 Garmin 音乐功能的可穿戴设备。

-   让用户在不携带手机的情况下，收听服务中的喜爱内容。

-   提供与原生手表用户界面自然融合的体验。

-   将播放信息缓存在加密的应用存储中，并在同步期间通过 Web 发送到报告服务，从而保持准确的版权费用计算。
