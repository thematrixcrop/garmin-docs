---
title: "Class: Toybox.Communications.OAuthMessage"
---
# Class: Toybox.Communications.OAuthMessage

Inherits:

Toybox.Communications.Message

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Communications.Message](/connect-iq/api-docs/Toybox/Communications/Message/)

-   [Toybox.Communications.OAuthMessage](/connect-iq/api-docs/Toybox/Communications/OAuthMessage/)


[show all](#)

## Overview

An OAuthMessage received by the callback registered in [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function).

Unlike the `data` in the [Message](/connect-iq/api-docs/Toybox/Communications/Message/) parent class, data in an OAuthMessage should always be a [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/).

Since:

API Level 1.3.0

## Instance Member Summary [collapse](#)

-   [**responseCode**](#responseCode-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    An HTTP response code (positive value) or BLE error code (negative value).


## Instance Method Summary [collapse](#)

-   [**initialize**](#initialize-instance_function)()

    Constructor.


## Instance Attribute Details

### var responseCode as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

An HTTP response code (positive value) or BLE error code (negative value).

Note:

The value in this field is unreliable and should not be referenced. It is generally safer to examine the message payload to check the status of the response.

Since:

API Level 1.3.0

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

## Instance Method Details

### **initialize()**

Constructor

Since:

API Level 1.3.0
