---
title: "Class: Toybox.ActivityPrompts.ActivityPromptDelegate"
---
# Class: Toybox.ActivityPrompts.ActivityPromptDelegate

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)


[show all](#)

## Overview

Delegate used by the system to notify the app about activity prompts

Registered using [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) to allow an app to get notified when an activity prompt should be played.

Since:

API Level 5.2.0

## Instance Method Summary [collapse](#)

-   [**onAudioOutputChange**](#onAudioOutputChange-instance_function)(selectedHandler as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    Called by the system if [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) has been called and the user has changed the activity prompt output provider.

-   [**onPrompt**](#onPrompt-instance_function)(prompts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)\>, priority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Called by the system when an activity prompt is to be played.


## Instance Method Details

### **onAudioOutputChange(selectedHandler as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

Called by the system if [ActivityPrompts.registerActivityPromptListener()](/connect-iq/api-docs/Toybox/ActivityPrompts/#registerActivityPromptsListener-instance_function) has been called and the user has changed the activity prompt output provider.

Parameters:

-   selectedHandler — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    `true` if the app is now the activity prompt handler, `false` otherwise


Since:

API Level 5.2.0

### **onPrompt(prompts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/)\>, priority as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Called by the system when an activity prompt is to be played

Parameters:

-   prompts — (ActivityPrompt>) —

    The prompts to play

-   priority — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The priority of the prompt. Lower values should take precendence over higher values.


Since:

API Level 5.2.0
