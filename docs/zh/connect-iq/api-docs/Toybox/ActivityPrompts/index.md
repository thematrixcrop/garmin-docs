---
title: "Module: Toybox.ActivityPrompts"
---
# 模块：Toybox.ActivityPrompts

## 概述

ActivityPrompts 模块允许数据字段在活动期间处理音频输出。

使用此模块会导致活动期间的所有活动提示不再通过设备或任何已连接的设备（例如耳机）播放。用户必须在设备菜单中选择该数据字段作为活动提示处理程序。

提示将在需要播放时传递给 [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function)。如果向 `ActivityPromptDelegate::onPrompt()` 传递多个提示，则这些提示应连续播放且不中断。

Since:

API 级别 5.2.0

应用类型与运行时上下文：

- 数据字段

- 速览


:::details 支持的设备

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
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
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

需要权限：

- ActivityPrompts


## 命名空间下的类

类：[ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/), [ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)

## 类型定义摘要 [collapse](#)

- [**ActivityPromptContextValue**](#ActivityPromptContextValue-named_type) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or **Null**

## 实例方法摘要 [collapse](#)

- [**registerActivityPromptsListener**](#registerActivityPromptsListener-instance_function)(delegate as [ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    注册为活动提示输出提供程序。

- [**setActivityPromptTextLanguage**](#setActivityPromptTextLanguage-instance_function)(languages as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置 [ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var) 的语言。

- [**unregisterActivityPromptsListener**](#unregisterActivityPromptsListener-instance_function)() as **Void**

    取消注册为活动提示输出处理程序。


## 类型定义详情

### **ActivityPromptContextValue** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or **Null**

Since:

API 级别 5.2.0

## 实例方法详情

### **registerActivityPromptsListener(delegate as [ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

注册为活动提示输出提供程序。仅当该数据字段是选定的活动提示输出提供程序时，才会返回 `true`。如果返回 `false`，当该数据字段成为选定的活动提示输出提供程序时，将使用 `true` 调用 [ActivityPromptDelegate.onAudioOutputChange()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onAudioOutputChange-instance_function)。

Parameters:

- delegate — ([ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)) —

    用于处理系统音频提示的委托

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    保留供将来使用


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果应用注册成功，则为 `true`，否则为 `false`


Since:

API 级别 5.2.0

### **setActivityPromptTextLanguage(languages as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置 [ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var) 的语言。

Parameters:

- languages — ([System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)) —

    用于接收提示文本的语言


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果语言可用且数据字段是当前活动提示输出提供程序，则为 `true`，否则为 `false`。


Since:

API 级别 5.2.0

### **unregisterActivityPromptsListener()** as **Void**

取消注册为活动提示输出处理程序。如果数据字段是当前提供程序，活动提示输出将恢复为默认提供程序。

Since:

API 级别 5.2.0
