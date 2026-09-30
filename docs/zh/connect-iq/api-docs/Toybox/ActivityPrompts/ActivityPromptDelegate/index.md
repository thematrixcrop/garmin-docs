---
title: "Class: Toybox.ActivityPrompts.ActivityPromptDelegate"
---
# Class: Toybox.ActivityPrompts.ActivityPromptDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)


[show all](#)

## 概述

Delegate used by the system to notify the app about activity prompts

Registered using [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) to allow an app to get notified when an activity prompt should be played.

Since:

API 级别 5.2.0

## 实例方法摘要 [collapse](#)

- [**onAudioOutputChange**](#onAudioOutputChange-instance_function)(selectedHandler as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    如果已调用 [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) 且用户更改了活动提示输出提供程序，则由系统调用。

- [**onPrompt**](#onPrompt-instance_function)(prompts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)\>, priority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Called by the system when an activity prompt is to be played.


## 实例方法详情

### **onAudioOutputChange(selectedHandler as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

如果已调用 [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) 且用户更改了活动提示输出提供程序，则由系统调用。

Parameters:

- selectedHandler — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    `true` if the app is now the activity prompt handler, `false` otherwise


Since:

API 级别 5.2.0

### **onPrompt(prompts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)\>, priority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Called by the system when an activity prompt is to be played

Parameters:

- prompts — (ActivityPrompt>) —

    The prompts to play

- priority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The priority of the prompt. Lower values should take precendence over higher values.


Since:

API 级别 5.2.0
