---
title: "Class: Toybox.ActivityPrompts.ActivityPrompt"
---
# 类：Toybox.ActivityPrompts.ActivityPrompt

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)


[show all](#)

## 概述

Informtion about the activity prompt.

由系统创建，并在需要播放活动提示时传递给 [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function)。

Since:

API 级别 5.2.0

## 实例成员摘要 [collapse](#)

- [**context**](#context-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

    提示的数据。

- [**templateName**](#templateName-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    提示标识符。

- [**text**](#text-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    要通过文本转语音播报的文本。


## 实例属性详情

### var context as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

提示的数据。其用法取决于 [ActivityPrompt.templateName](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#templateName-var) 的值。

Since:

API 级别 5.2.0

### var templateName as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

提示标识符。

Since:

API 级别 5.2.0

### var text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

要通过文本转语音播报的文本。

Since:

API 级别 5.2.0
