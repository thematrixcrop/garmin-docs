---
title: "活动提示"
---
# 活动提示

*自 API 级别 5.2.0 起支持*

[Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/) 模块允许数据字段拦截并抑制活动语音提示。借此可以将设备自带的文本转语音（TTS）引擎集成到活动体验中。

安装使用 [Toybox.ActivityPrompts](/connect-iq/api-docs/Toybox/ActivityPrompts/) API 的应用时，系统会向用户显示确认提示，询问是否允许应用控制语音提示。用户可以在音频提示菜单或设备设置中选择该应用作为音频提示处理器。注意，并非所有设备都提供设备端音频提示菜单。

可以调用 [ActivityPrompts.registerActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function)，注册应用来处理活动提示。如果用户已选择由应用处理活动提示，该调用会返回 `true`。如果用户在活动期间启用或禁用了应用对活动提示的处理，系统会调用你的 [ActivityPromptDelegate.onAudioOutputChange()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onAudioOutputChange-instance_function) delegate 函数，并传入状态变化。

激活后，当用户触发分段、训练或其他音频提示时，系统会将一个 ActivityPrompt 对象传给 [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function)。[ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var) 包含当前语言下适合 TTS 的字符串。可以调用 [ActivityPrompts.setActivityPromptTextLanguage()](/connect-iq/api-docs/Toybox/ActivityPrompts/#setActivityPromptTextLanguage-instance_function) 更改文本语言；如果不支持该语言，调用会返回 `false`。该调用不会更改系统语言。

如果外部 TTS 引擎不可用，可以调用 [ActivityPrompts.unregisterActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#unregisterActivityPromptsListener-instance_function) 禁用音频提示处理器。设备随后会回退到系统音频提示处理器。

这些 API 需要 `ActivityPrompts` 权限：

| 函数或类 | 用途 | API 版本 |
| --- | --- | --- |
| [ActivityPrompts.registerActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) | 注册应用作为活动提示输出提供者 | 5.2.0 |
| [ActivityPrompts.setActivityPromptTextLanguage()](/connect-iq/api-docs/Toybox/ActivityPrompts/#setActivityPromptTextLanguage-instance_function) | 设置 [ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var) 的语言 | 5.2.0 |
| [ActivityPrompts.unregisterActivityPromptsListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#unregisterActivityPromptsListener-instance_function) | 取消注册活动提示输出处理器 | 5.2.0 |
