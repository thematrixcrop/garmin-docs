---
title: "Class: Toybox.Media.ContentIterator"
---
# Class: Toybox.Media.ContentIterator

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Media.ContentIterator](/connect-iq/api-docs/Toybox/Media/ContentIterator/)


[show all](#)

## Overview

A user-defined iterator that returns referenced to media content on the system for use by the system media player.

Since:

API Level 3.0.0

## Instance Method Summary [collapse](#)

-   [**canSkip**](#canSkip-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if the the current track can be skipped.

-   [**get**](#get-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the current media content object.

-   [**getPlaybackProfile**](#getPlaybackProfile-instance_function)() as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

    Get the current media content playback profile.

-   [**next**](#next-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the next media content object.

-   [**peekNext**](#peekNext-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the next media content object without incrementing the iterator.

-   [**peekPrevious**](#peekPrevious-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the previous media content object without decrementing the iterator.

-   [**previous**](#previous-instance_function)() as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

    Get the previous media content object.

-   [**repeatMode**](#repeatMode-instance_function)() as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

    Get the current repeat state.

-   [**shuffling**](#shuffling-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if playback is currently set to shuffle.


## Instance Method Details

### **canSkip()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if the the current track can be skipped.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Returns `true` if the current track can be skipped, otherwise `false`.


Since:

API Level 3.0.0

### **get()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the current media content object.

Returns:

-   [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    -   A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the current track

    -   `null` if no tracks remain

    -   An error object if an error has occurred. This can be anything that inherits from [Object](/connect-iq/api-docs/Toybox/Lang/Object/), but it must implement toString()



Since:

API Level 3.0.0

### **getPlaybackProfile()** as [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/) or **Null**

Get the current media content playback profile

Returns:

-   [Media.PlaybackProfile](/connect-iq/api-docs/Toybox/Media/PlaybackProfile/)

Since:

API Level 3.0.0

### **next()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the next media content object.

Returns:

-   [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    -   A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the next track

    -   `null` if no tracks remain

    -   An error object if an error occurred. This can be anything that inherits from [Object](/connect-iq/api-docs/Toybox/Lang/Object/), but it must implement toString().



Since:

API Level 3.0.0

### **peekNext()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the next media content object without incrementing the iterator.

Returns:

-   [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    -   A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the current track

    -   `null` if no tracks remain

    -   An error object if an error has occurred. This can be anything that inherits from [Object](/connect-iq/api-docs/Toybox/Lang/Object/), but it must implement toString()



Since:

API Level 3.0.0

### **peekPrevious()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the previous media content object without decrementing the iterator.

Returns:

-   [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    -   A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the current track

    -   `null` if no tracks remain

    -   An error object if an error has occurred. This can be anything that inherits from [Object](/connect-iq/api-docs/Toybox/Lang/Object/), but it must implement toString()



Since:

API Level 3.0.0

### **previous()** as [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) or **Null**

Get the previous media content object.

Returns:

-   [Media.Content](/connect-iq/api-docs/Toybox/Media/Content/) —

    -   A [Content](/connect-iq/api-docs/Toybox/Media/Content/) object representing the next track.

    -   `null` if no tracks remain.

    -   An error object if an error occurred. This can be anything that inherits from [Object](/connect-iq/api-docs/Toybox/Lang/Object/), but it must implement toString().



Since:

API Level 3.0.0

### **repeatMode()** as [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) or **Null**

Get the current repeat state

Returns:

-   [Media.RepeatMode](/connect-iq/api-docs/Toybox/Media/#RepeatMode-module) —

    The [REPEAT\_MODE\_\*](/connect-iq/api-docs/Toybox/Media/#REPEAT_MODE_OFF-const) enum value that represents the current repeat state


Since:

API Level 3.0.0

### **shuffling()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if playback is currently set to shuffle.

Returns `true` if shuffle is on, otherwise `false`.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Since:

API Level 3.0.0
