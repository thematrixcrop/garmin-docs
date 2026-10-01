---
title: "Entry Points"
---
<a id="entry-points"></a>
# 入口点

Connect IQ 提供了多种方式，让开发者的内容与设备集成。根据应用类型，应用可能会出现在多个入口中。以下是完整列表：

**活动数据字段屏幕**（*Data fields*）——在 Garmin 原生活动中，用户可以通过页面循环查看可用的指标，也可以编辑活动页面的内容。用户可以将 Connect IQ 数据字段作为指标添加到页面中。添加后，数据字段会在指定区域内自行渲染。

在 API level 3.2 及更高版本的产品上，用户可以在设备上配置数据字段的设置，这会进入由应用定义的工作流。

**活动列表**（*Device apps*）——在设备主页上，用户可以按下开始按钮，或点击触摸屏上的相应位置，进入支持的活动列表。Connect IQ 应用会与 Garmin 原生活动一起列出。用户可以在设备上或 Garmin Connect Mobile 应用中编辑列表顺序。

用户从活动列表启动应用后，应用会一直运行，直到用户明确从第一页返回退出。

**Glance 列表**（*Device apps、Widgets*）——Glance 是 Widget 概念的演进形式。Widget 的信息会被压缩成一个可快速浏览的条目，并以列表形式呈现。选择列表中的条目即可进入相应体验。用户可以从基础页面返回退出；如果一段时间没有操作，系统也会终止已启动的应用。

在 API level 3.1 的产品上，Widget 是唯一支持 Glance 的应用类型。API level 4.0 起，Device app 也支持 Glance。

**媒体播放器**（*Audio content providers*）——在支持音乐的产品上，用户可以选择音乐来源。来源可以是设备上的音乐文件、手机上的音乐播放器，或 Audio Content Provider 应用中的音乐。

用户切换到 Connect IQ Audio Content Provider 后，系统会显示初始视图。应用可以借此提供引导流程，例如让用户登录云服务并指导其下载音乐。用户返回媒体播放器后，可以使用媒体控件播放内容；如果要更换播放列表或下载更多内容，也可以返回应用界面。

**Watch Face**（*Watch faces*）——在 Garmin 可穿戴设备上，用户可以选择 Watch Face 作为主页，包括已安装的 Connect IQ Watch Face。用户返回主页时，Watch Face 应用会启动。Watch Face 不接收用户输入。

Watch Face 会根据设备支持的方式进行渲染：

-   *MIP standard* —— Watch Face 每分钟请求一次更新。用户抬腕查看 Watch Face 时，Watch Face 会在短时间内开始每秒请求更新。

-   *MIP always active* —— Watch Face 每分钟请求一次完整更新，但允许每秒更新屏幕的一小部分。用户抬腕查看 Watch Face 时，Watch Face 会在短时间内开始每秒请求更新。

-   *AMOLED standard* —— 屏幕默认关闭。用户抬腕查看 Watch Face 时，显示屏会启用，Watch Face 会在短时间内开始每秒请求更新。

-   *AMOLED always active (version 1)* —— Watch Face 使用防烧屏机制，防止任何像素持续启用超过 4 分钟，也防止 Watch Face 使用超过 10% 的屏幕像素。用户抬腕查看 Watch Face 时，显示屏会开启，像素限制会解除，Watch Face 会在短时间内开始每秒请求更新。

-   *AMOLED always active (version 2)* —— Watch Face 使用的屏幕像素不会超过屏幕总像素的 10%。用户抬腕查看 Watch Face 时，显示屏会开启，像素限制会解除，Watch Face 会在短时间内开始每秒请求更新。


**Widget Loop**（*Widgets*）——在支持 Widget 的可穿戴设备上，用户可以从 Watch Face 执行上一个或下一个操作，进入 Widget Loop。在自行车电脑上，用户可以从屏幕顶部向下滑动，然后向左或向右滑动，或使用导航箭头在 Widget 页面之间移动。

如果 Widget 位于基础页面，用户可以使用上一个或下一个操作浏览 Widget Loop。Widget 也可以捕获其他交互，并将页面推入页面循环。一段时间没有操作后，Widget 会终止，用户返回主页。

## 最佳实践

-   设计 Widget 时，同时考虑从 Widget 启动（全屏）以及从 Glance 启动（从列表条目进入全屏）两种情况。

-   从 Glance 启动时，Widget 或应用的基础页面不受以 Widget 方式启动时的输入限制。

-   在某些设备上，Device app 可以从 Glance 启动。如果应用有可追踪的指标，可以考虑为该指标创建 Glance。
