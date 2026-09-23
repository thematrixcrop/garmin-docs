---
title: "Class: Toybox.Lang.Object"
---
# Class: Toybox.Lang.Object

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)


[show all](#)

## Overview

Object is the root object for the Monkey C class hierarchy.

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Test if an Object instance is equal to another instance of an Object.

-   [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get a hash code value for an Object.

-   [**method**](#method-instance_function)(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

    Retrieve a callback to a Method.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert an Object to a String.

-   [**weak**](#weak-instance_function)() as [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

    Get a WeakReference to an Object.


## Instance Method Details

### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Test if an Object instance is equal to another instance of an Object.

Parameters:

-   other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to test against


Example:

```
var a = 1;
var b = 1;
var c = 1.0;
a.equals(b); // returns true
a.equals(c); // returns false
```

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if Objects are equal, otherwise `false`


Since:

API Level 1.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get a hash code value for an Object.

This computes a 32-bit Number that is typically used as an index when placing Objects into a Dictionary. Hash code values have the following characteristics:

-   The computed hash code is constant for the lifetime of an Object

-   If two Objects are equal, their hash codes will be equal


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A hash code for the Object


See Also:

-   [Hash Function](https://en.wikipedia.org/wiki/Hash_function)

-   [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API Level 1.0.0

### **method(methodName as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/))** as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)

Retrieve a callback to a Method.

This is typically used when supplying a callback function to another method.

Parameters:

-   methodName — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The Symbol of the specified Method


Returns:

-   [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) —

    A Method object for the specified Symbol


See Also:

-   [Toybox.Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)


Since:

API Level 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert an Object to a String.

Example:

```
var myNumber = 3219;
var myString = myNumber.toString();
```

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the Object


Since:

API Level 1.0.0

### **weak()** as [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

Get a WeakReference to an Object.

A weak reference is an object that keeps a reference to an object but does not increment the reference count. This means the object reference can be destroyed, so is a case that should be handled.

Note:

Immutable types (Number, Float, Long, Double, Boolean, String) will return their values. Other Object types will return a WeakReference object.

Returns:

-   [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/) —

    A WeakReference to the Object


See Also:

-   [Toybox.Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)


Since:

API Level 1.2.0
