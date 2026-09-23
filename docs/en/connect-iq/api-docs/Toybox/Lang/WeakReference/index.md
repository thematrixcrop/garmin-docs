---
title: "Class: Toybox.Lang.WeakReference"
---
# Class: Toybox.Lang.WeakReference

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


[show all](#)

## Overview

A weak reference is a loosely bound reference to another object. If all strong references have been freed, the `WeakReference.get()` method will return `null`. This allows the developer to avoid circular references.

## See Also:

-   [Object.weak()](/connect-iq/api-docs/Toybox/Lang/Object/#weak-instance_function)

-   [https://en.wikipedia.org/wiki/Weak\_reference](https://en.wikipedia.org/wiki/Weak_reference)


Since:

API Level 1.2.0

## Instance Method Summary [collapse](#)

-   [**get**](#get-instance_function)() as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    Get the Object referenced by the WeakReference.

-   [**stillAlive**](#stillAlive-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine whether a WeakReference is still alive.


## Instance Method Details

### **get()** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

Get the Object referenced by the WeakReference

Returns:

-   [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The Object referenced, or `null` if the Object no longer exists


Since:

API Level 1.2.0

### **stillAlive()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine whether a WeakReference is still alive.

Note:

I feel FANTASTIC and I am still alive. When you're dying I'll be still alive. And when you're dead I will be still alive.

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if object is still alive, otherwise `false`


See Also:

-   [http://knowyourmeme.com/memes/still-alive-portal-end-theme](http://knowyourmeme.com/memes/still-alive-portal-end-theme)


Since:

API Level 1.2.0
