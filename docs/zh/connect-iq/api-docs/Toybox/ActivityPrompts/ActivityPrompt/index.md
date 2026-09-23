---
title: "Class: Toybox.ActivityPrompts.ActivityPrompt"
---
# Class: Toybox.ActivityPrompts.ActivityPrompt

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)


[show all](#)

## Overview

Informtion about the activity prompt.

Created by the system and passed to [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function) when an activity prompt is to be played.

Since:

API Level 5.2.0

## Instance Member Summary [collapse](#)

-   [**context**](#context-var) as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

    Data for the prompt.

-   [**templateName**](#templateName-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    The prompt identifier.

-   [**text**](#text-var) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    The text-to-speech text to be spoken.


## Instance Attribute Details

### var context as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\>

Data for the prompt. The usage of this depends on the value of [ActivityPrompt.templateName](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#templateName-var).

Since:

API Level 5.2.0

### var templateName as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

The prompt identifier.

Since:

API Level 5.2.0

### var text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

The text-to-speech text to be spoken.

Since:

API Level 5.2.0
