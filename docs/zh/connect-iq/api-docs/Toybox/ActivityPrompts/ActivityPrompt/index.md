---
title: "Class: Toybox.ActivityPrompts.ActivityPrompt"
---
# Class: Toybox.ActivityPrompts.ActivityPrompt

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)


[show all](#)

## 概述

Informtion about the activity prompt.

Created by the system and passed to [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function) when an activity prompt is to be played.

Since:

API 级别 5.2.0

## 实例成员摘要 [collapse](#)

- [**context**](#context-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

    Data for the prompt.

- [**templateName**](#templateName-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The prompt identifier.

- [**text**](#text-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    The text-to-speech text to be spoken.


## 实例属性详情

### var context as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

Data for the prompt. The usage of this depends on the value of [ActivityPrompt.templateName](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#templateName-var).

Since:

API 级别 5.2.0

### var templateName as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The prompt identifier.

Since:

API 级别 5.2.0

### var text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

The text-to-speech text to be spoken.

Since:

API 级别 5.2.0
