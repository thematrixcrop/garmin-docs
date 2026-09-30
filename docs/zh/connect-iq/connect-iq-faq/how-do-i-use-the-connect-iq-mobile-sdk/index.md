---
title: "How do I use the Connect IQ Mobile SDK"
---
# 如何使用 Connect IQ 移动 SDK

创建合作伙伴的Connect IQ应用程序的第一步是连接你的合作伙伴应用程序和Connect IQ应用程序.

## 获取最新的连接智能手机SDK

保持最新的消息,使您与最新的API和功能保持同步.

*** 注:*** *iOS开发人员应该从开发者网站获得最新的SDK. iOS移动SDK进行了重要更新,以支持即将推出的设备.*

##查看Garmin连接手机

合作伙伴 SDK 旨在与 Garmin Connect Mobile 兼容.这意味着您的合作伙伴应用程序的用户需要安装 Garmin Connect Mobile.合作伙伴 SDK 提供了 API 来检查 Connect Mobile 的状态以及一个 API 来打开 Garmin Connect Mobile 商店页面 (可选的简单对话).

![](/connect-iq/resources/faq/Included_versus_custom_install_dialogs.png)

## 首先连接

您可能正在使用 Connect IQ 应用程序来增强您的合作伙伴应用程序/现有移动应用程序的功能.如果这样的话,您也可能不想迫使用户在使用其余的移动应用程序之前选择设备.我们将通过提供选择设备的菜单选项来处理这种情况;即使您需要设备连接,这也是一个很好的选项,以便用户能够更改应用程序中连接的设备.当用户选择该菜单选项时,我们将启动一个新页面,列出连接设备,保存用户选择的设备,然后关闭页面.

![](/connect-iq/resources/faq/Select_Device_Flow.png)

在iOS中,`showConnectIQDeviceSelection`调用将启动GCM用于设备列表,并将重新启动您的应用程序,并使用配对CIQ设备列表.

##检查连接智能应用程序是否安装

最后,您需要确保您的Connect IQ应用程序安装在用户选择的设备上,无论您使用的连接流量如何.合作伙伴SDK提供API来检查应用程序的状态.如果应用程序没有安装,则您需要要求用户在继续之前安装Connect IQ应用程序.您需要要求用户在继续之前安装Connect IQ应用程序.合作伙伴SDK提供API来打开Connect Mobile  Mobile内的 IQ商店.在iOS中使用`showConnectIQStoreForApp:`API或在Android中使用`openStore`API.

现在你已经建立了与设备的连接,你现在可以使用[Communications.transmit](/connect-iq/api-docs/Toybox/Communications/#transmit-instance_function)API直接从Connect IQ应用程序发送消息到可穿戴设备和SendMessage将消息放入移动应用程序的Connect IQ应用程序邮箱中.请注意,如果Connect IQ应用程序不运行,则该消息将持续到用户打开应用程序之前.这允许电话应用程序更新观察应用程序的信息,即使手表应用程序目前没有运行.
