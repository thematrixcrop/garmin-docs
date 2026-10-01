---
title: "如何使用 Connect IQ Mobile SDK"
---
<a id="how-do-i-use-the-connect-iq-mobile-sdk"></a>
# 如何使用 Connect IQ Mobile SDK

编写由合作伙伴应用驱动的 Connect IQ 应用，第一步是建立合作伙伴应用与 Connect IQ 应用之间的连接。Partner SDK 提供了所需工具，您可以根据应用流程选择最合适的集成方式。

## 获取最新的 Connect IQ Mobile SDK

请确保使用开发者网站上的最新 [Partner SDK](/connect-iq/sdk/)。保持 SDK 更新，可以使用最新的 API 和功能。

***注意：*** *iOS 开发者应从开发者网站获取最新 SDK。iOS Mobile SDK 已进行重要更新，以支持即将推出的设备。*

## 检查 Garmin Connect Mobile

Partner SDK 设计为与 Garmin Connect Mobile 协同工作。因此，合作伙伴应用的用户需要安装 Garmin Connect Mobile。Partner SDK 提供了用于检查 Connect Mobile 状态的 API，也提供了用于打开 Garmin Connect Mobile 商店页面的 API（可选择显示一个简单对话框）。

![](/connect-iq/resources/faq/Included_versus_custom_install_dialogs.png)

## 先建立连接

您可能会使用 Connect IQ 应用来扩展合作伙伴应用或现有移动应用的功能。此时，您通常不希望用户在使用移动应用的其他功能之前就必须选择设备。可以提供一个用于选择设备的菜单项；即使应用要求连接设备，这也是一个不错的选择，因为用户可以在应用内更换已连接的设备。用户选择该菜单项后，应用会打开新页面，列出已连接的设备，保存用户选择的设备，然后关闭该页面。

![](/connect-iq/resources/faq/Select_Device_Flow.png)

在 iOS 中，调用 `showConnectIQDeviceSelection` 会打开 GCM 显示设备列表，然后重新启动您的应用，并传入已配对的 Connect IQ 设备列表。要使此流程正常工作，必须将应用配置为可由 GCM 重新启动。

## 检查 Connect IQ 应用是否已安装

无论使用哪种连接流程，最后都需要确保 Connect IQ 应用已安装在用户选择的设备上。Partner SDK 提供了用于检查应用状态的 API。如果应用尚未安装，应提示用户先安装 Connect IQ 应用，再继续后续操作。Partner SDK 还提供了用于在 Connect Mobile 中打开 Connect IQ 商店并进入应用商店页面的 API。iOS 使用 `showConnectIQStoreForApp:` API，Android 使用 `openStore` API。

设备连接建立后，可以使用 [Communications.transmit](/connect-iq/api-docs/Toybox/Communications/#transmit-instance_function) API 直接从 Connect IQ 应用向可穿戴设备发送消息，也可以使用 `sendMessage` 将消息从移动应用放入 Connect IQ 应用的邮箱。请注意，如果 Connect IQ 应用当前未运行，消息会一直保留，直到用户打开应用。因此，即使手表应用尚未运行，手机应用也能更新其中的信息。
