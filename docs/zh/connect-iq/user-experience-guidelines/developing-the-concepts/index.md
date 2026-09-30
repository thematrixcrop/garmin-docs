---
title: "Developing the Concepts"
---
# 发展概念

现在我们可以开始研究重要内容和工作流程,以实现用户的目标.

## 应用类型

与其他平台不同,Connect IQ应用程序具有特定的环境类型,定义了它们在设备接口中的位置,以及它们的交互模式.您选择的应用类型应基于用户的问题声明.您的目标是增强训练体验吗?您应该创建一个数据字段.您是否希望让用户在活动之外监测一个指标?您应该使用应用程序.您的应用程序是否有信息在一天内更新? 添加一击设备应用程序.

应用程序类型影响您的工作流程,通过限制潜在的工作流程:

- 观看面孔和数据字段不采用用户输入,但用户可以在设备上输入应用定义的设置流程或在移动中编辑设置.

- 如果用户达到里程碑,数据字段可以通过用户的许可显示警报.

- 数据领域可以将额外的信息记录在活动文件中.

-  widget 的基本页面设置了对输入的限制,以允许用户在车轮导航.在按产品上,这通常是通过上下按完成的.


### 表盘

腕表面孔是Garmin可穿戴设备的首页屏幕.它们不接受直接用户输入,但它们可以在Connect IQ移动应用程序中进行编辑的设置.在API级3.2的设备上,腕表面孔可以具有可启动的设备配置流.

![表盘](/connect-iq/resources/ux-guide/watch-face.png)

### 数据字段

数据字域是可以在 Garmin 活动中显示信息的插件.安装后,用户可以在其活动页面循环中任何地方放置数据字段.为了保护 Garmin 体验,数据字段不被允许输入.它们可以在 Connect IQ 移动应用程序中进行编辑的设置.在 API 级别 3.2 的设备上,腕表面孔可以具有可启动的设备配置流.

![数据字段](/connect-iq/resources/ux-guide/data-fields.png)

### 小组件和概览

Widgets are a carousel of apps that the user can quickly navigate through. The base page has limited input but can push pages to let the user go deeper 更多信息. In 2019 Garmin introduced Glances. Glances are a scrollable list of key data, and each list item has a displayable metric. The user can select any glance to dig in further. Both widgets and glances will time out after a period of inactivity.

Widgets

![小组件](/connect-iq/resources/ux-guide/widgets.png)

Glances

![快捷视图](/connect-iq/resources/ux-guide/glances.png)

### 音频内容提供程序

音频内容提供商作为音乐播放器的插件.用户可以选择它们作为其音频源.用户启动音频播放器时,他们将获得与应用程序通信的媒体控制,但用户可以通过进入媒体播放器子菜单并点击应用程序图标进行更深入的互动.从这里,您可以添加下载和管理内容并开始播放的流.

![音频内容提供商](/connect-iq/resources/ux-guide/audio-content-providers.png)

### 设备应用

设备应用程序是可启动的体验,不会停机.设备应用程序可以接收输入,操纵页面堆,并与云和无线传感器通信.用户通过退出主页后退.在API级别4.0的设备上,您可以添加设备应用程序的视图.设备应用程序的例子包括记录活动,游戏和应用程序,将丰富的内容集成到设备上.

![设备应用](/connect-iq/resources/ux-guide/device-apps.png)

## Connect IQ 应用和信息架构

Connect IQ apps are typically “information forward,” meaning the key information is presented up front, and there are limited interactions 更多信息:

- 数据领域总是显示关键信息.任何定制设置流都要求用户进入数据领域设置.

-  widget 应该始终在基页上显示核心信息.它们可以让用户进入流量来查看更多信息.
