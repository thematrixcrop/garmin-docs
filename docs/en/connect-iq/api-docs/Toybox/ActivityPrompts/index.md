---
title: "Module: Toybox.ActivityPrompts"
---
# Module: Toybox.ActivityPrompts

## Overview

The ActivityPrompts module allows a data field to handle audio output during an activity.

Using this module will cause to all activity prompts during an activity to no longer play through the device or any connected devices such as headphones. The user must select the data field as the activity prompt handler in the device menus.

Prompts will be passed to [ActivityPromptDelegate.onPrompt()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onPrompt-instance_function) when they are to be played. If more than one prompt is passed to `ActivityPromptDelegate::onPrompt()`, they are meant to be played together uninterrupted.

Since:

API Level 5.2.0

App Types and Runtime Contexts:

-   Data Field

-   Glance


:::details Supported Devices

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

Requires Permission:

-   ActivityPrompts


## Classes Under Namespace

**Classes:** [ActivityPrompt](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/), [ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)

## Typedef Summary [collapse](#)

-   [**ActivityPromptContextValue**](#ActivityPromptContextValue-named_type) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or **Null**

## Instance Method Summary [collapse](#)

-   [**registerActivityPromptsListener**](#registerActivityPromptsListener-instance_function)(delegate as [ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Register as the activity prompt output provider.

-   [**setActivityPromptTextLanguage**](#setActivityPromptTextLanguage-instance_function)(languages as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Set the language for [ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var).

-   [**unregisterActivityPromptsListener**](#unregisterActivityPromptsListener-instance_function)() as **Void**

    Unregister as the activity prompt output handler.


## Typedef Details

### **ActivityPromptContextValue** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[ActivityPrompts.ActivityPromptContextValue](/connect-iq/api-docs/Toybox/ActivityPrompts/#ActivityPromptContextValue-named_type)\> or **Null**

Since:

API Level 5.2.0

## Instance Method Details

### **registerActivityPromptsListener(delegate as [ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/), options as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Register as the activity prompt output provider. `true` will only be returned only if the data field is the selected activity prompt output provider. If `false` is returned, [ActivityPromptDelegate.onAudioOutputChange()](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/#onAudioOutputChange-instance_function) will be called with `true` if the data field becomes the selected activity prompt output provider.

Parameters:

-   delegate — ([ActivityPrompts.ActivityPromptDelegate](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPromptDelegate/)) —

    The delegate to handle audio prompts from the system

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Reserved for future use


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the app was registered succesfully, `false` otherwise


Since:

API Level 5.2.0

### **setActivityPromptTextLanguage(languages as [System.Language](/connect-iq/api-docs/Toybox/System/#Language-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Set the language for [ActivityPrompt.text](/connect-iq/api-docs/Toybox/ActivityPrompts/ActivityPrompt/#text-var).

Parameters:

-   languages — ([System.Language](/connect-iq/api-docs/Toybox/System/#Language-module)) —

    The language to receive prompt text


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the language is available and the data field is the current activity prompt output provider, `false` otherwise.


Since:

API Level 5.2.0

### **unregisterActivityPromptsListener()** as **Void**

Unregister as the activity prompt output handler. Activity prompt output will return to the default provider if the data field is the current provider.

Since:

API Level 5.2.0
