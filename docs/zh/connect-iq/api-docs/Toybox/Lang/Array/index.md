---
title: "Class: Toybox.Lang.Array"
---
# Class: Toybox.Lang.Array

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)


[show all](#)

## Overview

Array objects are fixed size (not a linked list), numerically indexed, single dimensional, and take any Objects (including Arrays) as members. Array keys must be Numbers, but Array values may be any type of Object.

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**add**](#add-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    Add an Object to the end of an Array.

-   [**addAll**](#addAll-instance_function)(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    Add an Array of Objects to the end of an Array.

-   [**indexOf**](#indexOf-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the index of an Object within the Array.

-   [**remove**](#remove-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Remove an Object from an Array.

-   [**removeAll**](#removeAll-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Remove Objects from an Array.

-   [**reverse**](#reverse-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    Return a new Array that contains the elements of a source Array in reverse order.

-   [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the size of an Array.

-   [**slice**](#slice-instance_function)(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    Get a new Array containing a portion of an existing Array.

-   [**sort**](#sort-instance_function)(comparator as [Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type) or **Null**) as **Void**

    Sort an Array.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert an Array to a String.


## Instance Method Details

### **add(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

Add an Object to the end of an Array.

When adding an Object, the Array size is increased by one and the new Object is inserted at the new index.

Parameters:

-   object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to be added to the Array


Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    self


Since:

API Level 1.3.0

### **addAll(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

Add an Array of Objects to the end of an Array.

When adding an Array of Objects, the Array is expanded by the size of the provided Array, and all of the new elements are inserted starting at the new index.

Parameters:

-   array — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The Array of Objects to be added to the Array


Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    self


Since:

API Level 1.3.0

### **indexOf(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the index of an Object within the Array.

Parameters:

-   object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object whose index is to be found


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The index of the first instance of the provided Object in the Array. If the Object is not found, -1 is returned.


Since:

API Level 1.3.0

### **remove(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Remove an Object from an Array.

If the passed Object is found, the Array size is decreased by one and elements beyond it are shifted to the next lower index. If the Array has multiple matches, the matching Object at the lowest index will be removed but the other matching Objects will not be removed.

Parameters:

-   object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The object to be removed from the Array


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if instances of the object are found, otherwise `false`


Since:

API Level 1.3.0

### **removeAll(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Remove Objects from an Array.

For each instance of the Object that is found, the Array size is decreased by one and elements beyond it are shifted to the next lower index.

Parameters:

-   object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to be removed from the Array


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if instances of the Object are found, otherwise `false`


Since:

API Level 1.3.0

### **reverse()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

Return a new Array that contains the elements of a source Array in reverse order.

Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A new Array with elements in reversed order


Since:

API Level 1.3.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the size of an Array.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of elements in the Array


Since:

API Level 1.0.0

### **slice(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

Get a new Array containing a portion of an existing Array.

Parameters:

-   startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    A zero-based index of the start of the new Array. If a negative `startIndex` is provided, it will offset from the end of the Array. If the `startIndex` is `null`, the slice will begin at 0. An out-of-bounds index will be truncated to the array limits.

-   endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    A zero-based index of the end of the new Array. Items are included up to, but not including `endIndex`. If a negative `endIndex` is provided, it will offset from the end of the Array. If `endIndex` is `null`, the the slice will end at the last element. An out-of-bounds index will be truncated to the Array limits.


Example:

```
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get the first five elements of the Array
var newArray1 = myArray.slice(0, 5);     // [1, 2, 3, 4, 5]

// Get the last element of the Array
var newArray2 = myArray.slice(-1, null); // [10]

// Slice off the first and last elements from the Array
var myArray3 = myArray.slice(1, -1);     // [2, 3, 4, 5, 6, 7, 8, 9]
```

Returns:

-   [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    A new Array containing the elements from `startIndex` to `endIndex`


Since:

API Level 1.3.0

### **sort(comparator as [Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type) or **Null**)** as **Void**

Sort an Array

Parameters:

-   comparator — ([Lang.Comparator](/connect-iq/api-docs/Toybox/Lang/#Comparator-named_type), null) —

    An object that 可用于 specify the order of Objects relative to others. If `comparator` is `null`, a default comparator will be used. The default comparator will sort values in ascending order, and is able to compare Numeric, Boolean, and Char values, or String values.


Example:

```
var myArray = [2, 1, 3.0f, 0.0d];
myArray.sort(null); // [0.0d, 1, 2, 3.0f]

var myStrings = ["bb", "a", "aa", "b"];
myStrings.sort(null); // ["a", "aa", "b", "bb"]

var myProblem = ["1", 1];
myProblem.sort(null); // UnexpectedTypeException
```

Since:

API Level 5.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the default comparator is used to compare values that are not directly comparable.


### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert an Array to a String.

This does not convert the elements of the Array into Strings, but transforms the entire Array into a String.

Example:

```
using Toybox.System;
var myArray = [1, 2, 3, 4, 5];
System.println(myArray[1]);                // prints 1

var myString = myArray.toString();
System.println(myString);                  // "[1, 2, 3, 4, 5]"
System.println(myString[1]);               // UnexpectedTypeException
System.println(myString.substring(0, 5));  // "[1, 2"
```

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the Array


Since:

API Level 1.0.0
