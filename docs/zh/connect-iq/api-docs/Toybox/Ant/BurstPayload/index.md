---
title: "Class: Toybox.Ant.BurstPayload"
---
# Class: Toybox.Ant.BurstPayload

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Ant.BurstPayload](/connect-iq/api-docs/Toybox/Ant/BurstPayload/)


[show all](#)

## Overview

A class containing Burst payload data.

The payload data is provided in the form of [Ant.Message](/connect-iq/api-docs/Toybox/Ant/Message/) objects. The default max size of a `BurstPayload` is 8192 bytes, or 1024 [Message](/connect-iq/api-docs/Toybox/Ant/Message/) objects. However, this can vary by device.

Example:

```
using Toybox.Ant;
var burst = Ant.BurstPayload();  // Initialize the payload

burst.add(message.getPayload()); // Add a message payload to payload
burst.getSize();                 // The number of messages
```

Since:

API Level 2.2.0

## Instance Method Summary [collapse](#)

-   [**add**](#add-instance_function)(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as **Void**

    Add bytes to the end of the burst data.

-   [**getSize**](#getSize-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Return the number of bursts contained in the payload.

-   [**initialize**](#initialize-instance_function)()

    Constructor.


## Instance Method Details

### **add(message as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)\> or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as **Void**

Add bytes to the end of the burst data.

Note:

[ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) is supported with ConnectIQ 4.2.0 and later.

Parameters:

-   message — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) —

    An Array of integers representing the bytes of the data payload


Since:

API Level 2.2.0

### **getSize()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Return the number of bursts contained in the payload.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of Messages


Since:

API Level 2.2.0

### **initialize()**

Constructor

Since:

API Level 2.2.0
