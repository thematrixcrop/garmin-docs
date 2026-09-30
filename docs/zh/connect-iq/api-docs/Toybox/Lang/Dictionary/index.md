---
title: "Class: Toybox.Lang.Dictionary"
---
# Class: Toybox.Lang.Dictionary

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)


[show all](#)

## 概述

A Dictionary is a hash table or associative array used to map keys to values.

Both the keys and values can be any Object type, though they do not all need to be of the same type. Objects used as a keys should override the [hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function) method. Due to the nature of hash tables, the order of Dictionary elements are not guaranteed to match the insertion order.

## 另见：

- [Hash Table](https://en.wikipedia.org/wiki/Hash_table)


Example:

```
using Toybox.System;
var myDict = {
    "One" => 1,
    "Two" => 2,
    "Three" => 3
};
System.println(myDict);         // {Two=>2, One=>1,Three=>3}
var keys = myDict.keys();       // [Two, One, Three]
var values = myDict.values();   // [2, 1, 3]

myDict.put("Four", 4);
System.println(myDict);         // {Two=>2, One=>1, Three=>3, Four=>4}
numItems = myDict.size();       // 4

myDict = {}                     // Empty the dictionary
System.println(myDict.isEmpty()); // true
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**get**](#get-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

    Retrieve a value from a Dictionary for a given key.

- [**hasKey**](#hasKey-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine whether a key exists within a Dictionary.

- [**isEmpty**](#isEmpty-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine whether a Dictionary is empty.

- [**keys**](#keys-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>

    Retrieve the keys in the Dictionary.

- [**put**](#put-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as **Void**

    Place a value in the Dictionary with a given key.

- [**remove**](#remove-instance_function)(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as **Void**

    Delete an item from a Dictionary.

- [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Retrieve the number of elements in a Dictionary.

- [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Dictionary to a String.

- [**values**](#values-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

    Retrieve the values in the Dictionary.


## 实例方法详情

### **get(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**

Retrieve a value from a Dictionary for a given key.

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key to check against


Returns:

- [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) —

    The value for the specified key, or `null` if the key does not exist


Since:

API 级别 1.0.0

### **hasKey(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine whether a key exists within a Dictionary.

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key to check against


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the key is in the Dictionary, otherwise `false`


Since:

API 级别 1.0.0

### **isEmpty()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine whether a Dictionary is empty.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the Dictionary is empty, otherwise `false`


Since:

API 级别 1.0.0

### **keys()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)\>

Retrieve the keys in the Dictionary.

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array of keys in the Dictionary


Since:

API 级别 1.0.0

### **put(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), value as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as **Void**

Place a value in the Dictionary with a given key.

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key for the value being inserted into the Dictionary

- value — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to insert into the Dictionary


Since:

API 级别 1.0.0

### **remove(key as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as **Void**

Delete an item from a Dictionary.

Parameters:

- key — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The key of the value to be removed


Since:

API 级别 1.0.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Retrieve the number of elements in a Dictionary.

Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of elements in the Dictionary


Since:

API 级别 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Dictionary to a String.

Due to the nature of hash tables, the order of Dictionary elements are not guaranteed to match the insertion order when converting to a String.

Example:

```
using Toybox.System;
myDict = {
    "One" => 1,
    "Two" => 2,
    "Three" => 3
};
System.println(myDict.get("One"));        // prints 1

var myString = myDict.toString();
System.println(myString);                 // "{Two=>2, One=>1, Three=>}"
System.println(myString.get("One"));      // Symbol Not Found Error
System.println(myString.substring(0, 5)); // "{Two="
```

Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the Dictionary


另见：

- [Hash Tables](https://en.wikipedia.org/wiki/Hash_table)


Since:

API 级别 1.0.1

### **values()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**\>

Retrieve the values in the Dictionary.

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    An Array of values in the Dictionary


Since:

API 级别 1.0.0
