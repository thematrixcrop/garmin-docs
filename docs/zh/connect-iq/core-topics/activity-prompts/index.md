---
title: "Activity Prompts"
---
# Activity Prompts

*Since API 5.2.0*

The [Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/) module allows for a data field to intercept and suppress the voice prompts of an activity. This 可用于 integrate a device with its own text-to-speech (TTS) engine with the activity experience.

在安装使用[Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/)API的应用程序时,用户会得到确认,要求他们是否同意允许应用程序控制语音提示.用户可以在音频提示菜单或设备设置中选择该应用程序作为音频提示处理器.请注意,并非所有设备都有设备上的音频提示菜单.

您可以拨打[ActivityPrompts.registerActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function)注册您的应用程序来处理活动提示.如果用户选择了您的应用程序来处理活动提示,则该电话将返回真实.如果用户选择启用或禁用您的应用程序活动期间处理活动提示,则您的[ActivityPromptDelegate.onAudioOutputChange()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onAudioOutputChange-instance_function)委托函数将随着状态变更被调用.

当激活时,[ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function)将通过 ActivityPrompt 对象,当用户触发圈子,训练和其他音频提示时.[ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var)将包含当前语言中的TTS友好的字符串.您可以使用它来更改文字符串的语言.如果语言不支持,这将返回`false`.调用不会改变系统语言.

如果您的外部TTS引擎无法使用,调用[ActivityPrompts.unregisterActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#unregisterActivityPromptsListener-instance_function)将禁用音频提示处理器.设备将回到系统音频提示处理器.

这些API需要`ActivityPrompts`许可:

|函数或类型|目的|应用程序版本|
| --- | --- | --- |
| [ActivityPrompts.registerActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) |注册一个作为活动提示输出提供者| 5.2.0 |
| [ActivityPrompts.setActivityPromptTextLanguage()](/connect-iq/api-docs/Toybox/ActivityPrompts/#setActivityPromptTextLanguage-instance_function) |设置语言为[ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var)| 5.2.0 |
| [ActivityPrompts.unregisterActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#unregisterActivityPromptsListener-instance_function) |取消作为活动提示输出处理器的注册| 5.2.0 |
