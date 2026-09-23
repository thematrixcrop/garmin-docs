---
title: "Class: Toybox.Lang.ByteArray"
---
# Class: Toybox.Lang.ByteArray

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)


[show all](#)

## Overview

ByteArray objects are fixed size, numerically indexed, single dimensional, and take Numbers with a value >= -128 and &lt;= 255 as members.

Since:

API Level 3.0.0

## Instance Method Summary [collapse](#)

-   [**add**](#add-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Add a byte to the end of a ByteArray.

-   [**addAll**](#addAll-instance_function)(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Add a ByteArray or an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of bytes to the end of a ByteArray.

-   [**decodeNumber**](#decodeNumber-instance_function)(format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) }) as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

    Decodes a portion of the array to a number based on a specified format.

-   [**encodeNumber**](#encodeNumber-instance_function)(value as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) }) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Encodes a number into the byte array.

-   [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Test if an Object instance is equal to another instance of an Object.

-   [**hashCode**](#hashCode-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get a hash code value for a ByteArray.

-   [**indexOf**](#indexOf-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the index of a byte within the ByteArray.

-   [**remove**](#remove-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Remove a byte from a ByteArray.

-   [**removeAll**](#removeAll-instance_function)(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Remove bytes from a ByteArray.

-   [**reverse**](#reverse-instance_function)() as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Return a new ByteArray that contains the elements of a source ByteArray in reverse order.

-   [**size**](#size-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the size of a ByteArray.

-   [**slice**](#slice-instance_function)(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

    Get a new ByteArray containing a portion of an existing ByteArray.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a ByteArray to a String.


## Instance Method Details

### **add(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Add a byte to the end of a ByteArray.

When adding a byte, the ByteArray size is increased and new bytes are inserted at the end.

Parameters:

-   byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    The Number or Char byte to be added


Returns:

-   [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A ByteArray composed of the original ByteArray plus the added byte


Since:

API Level 3.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if a type other than [Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Char](/connect-iq/api-docs/Toybox/Lang/Char/) is provided

-   ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if a [Number](/connect-iq/api-docs/Toybox/Lang/Number/) greater than 255 or less than -128 is provided, or if a [Char](/connect-iq/api-docs/Toybox/Lang/Char/) with a code point greater than 127 is provided. Negative numbers added are interpreted as the positive 8-bit unsigned equivalent once added to the ByteArray.


### **addAll(array as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/))** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Add a ByteArray or an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of bytes to the end of a ByteArray.

When adding an array of bytes, the ByteArray is expanded by the size of the provided ByteArray or Array, and all of the new elements are inserted starting at the new index.

Parameters:

-   array — ([Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The ByteArray or Array of bytes to be added to the ByteArray


Returns:

-   [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A ByteArray composed of the original ByteArray plus the added byte(s)


Since:

API Level 3.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if a type other than ByteArray or an [Array](/connect-iq/api-docs/Toybox/Lang/Array/) of bytes is provided


### **decodeNumber(format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) })** as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)

Decodes a portion of the array to a number based on a specified format

Parameters:

-   format — ([Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module)) —

    A [Lang.NUMBER\_FORMAT\_\*](/connect-iq/api-docs/Toybox/Lang/#NUMBER_FORMAT_FLOAT-const) value representing the number format to decode.

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing conversion options

    -   :offset — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The 0 based offset in the array to begin decode. Default value is 0.

    -   :endianness — ([Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module)) —

        A [Lang.ENDIAN\_\*](/connect-iq/api-docs/Toybox/Lang/#Endian-module) value representing the endianness of the number to decode. Default value is [Lang.ENDIAN\_LITTLE](/connect-iq/api-docs/Toybox/Lang/#ENDIAN_LITTLE-const).


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    Converted Number.


Since:

API Level 3.1.0

Throws:

-   ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Indicates that one of the options provided is not valid.


### **encodeNumber(value as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), format as [Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module), options as { :offset as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :endianness as [Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module) })** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Encodes a number into the byte array

Parameters:

-   value — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The value to encode

-   format — ([Lang.NumberFormat](/connect-iq/api-docs/Toybox/Lang/#NumberFormat-module)) —

    A [Lang.NUMBER\_FORMAT\_\*](/connect-iq/api-docs/Toybox/Lang/#NUMBER_FORMAT_FLOAT-const) value representing the number format to encode.

-   options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    A Dictionary containing conversion options

    -   :offset — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The 0 based offset in the array to begin encoding. Default value is 0.

    -   :endianness — ([Lang.Endian](/connect-iq/api-docs/Toybox/Lang/#Endian-module)) —

        A [Lang.ENDIAN\_\*](/connect-iq/api-docs/Toybox/Lang/#Endian-module) value representing the endianness of the number to encode. Default value is [Lang.ENDIAN\_LITTLE](/connect-iq/api-docs/Toybox/Lang/#ENDIAN_LITTLE-const).


Since:

API Level 3.1.0

Throws:

-   ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    Indicates that one of the options provided is not valid.


### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Test if an Object instance is equal to another instance of an Object.

Parameters:

-   other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to test against


Example:

```
var a = [ 1, 2 ]b;
var b = [ 1, 2 ]b;
var c = [ 1, 2 ];
a.equals(b); // returns true
a.equals(c); // returns false
```

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if Objects are equal, otherwise `false`


Since:

API Level 3.0.0

### **hashCode()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get a hash code value for a ByteArray.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The hash code for the ByteArray


Since:

API Level 3.0.0

### **indexOf(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the index of a byte within the ByteArray.

Parameters:

-   byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    The byte whose index is to be found


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The index of the first instance of the provided byte in the ByteArray. If the byte is not found, -1 is returned.


Since:

API Level 3.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if a type other than [Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Char](/connect-iq/api-docs/Toybox/Lang/Char/) is provided

-   ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if a [Number](/connect-iq/api-docs/Toybox/Lang/Number/) greater than 255 or less than -128 is provided, or if a [Char](/connect-iq/api-docs/Toybox/Lang/Char/) with a code point greater than 127 is provided. Negative numbers provided are interpreted as the positive 8-bit unsigned equivalent when searching the ByteArray.


### **remove(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Remove a byte from a ByteArray.

If the passed byte is found, the ByteArray size is decreased by one and elements beyond it are shifted to the next lower index. If the ByteArray has multiple matches, the matching byte at the lowest index will be removed but the other matching bytes will not be removed.

If no byte is provided as an argument, the ByteArray will remain unchanged and `remove()` will return `false`.

Parameters:

-   byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    The byte to remove from the ByteArray


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Returns `true` if instances of the byte are found, otherwise `false`


Since:

API Level 3.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if a type other than [Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Char](/connect-iq/api-docs/Toybox/Lang/Char/) is provided

-   ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if a [Number](/connect-iq/api-docs/Toybox/Lang/Number/) greater than 255 or less than -128 is provided, or if a [Char](/connect-iq/api-docs/Toybox/Lang/Char/) with a code point greater than 127 is provided. Negative numbers provided are interpreted as the positive 8-bit unsigned equivalent when searching the ByteArray.


### **removeAll(byte as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Remove bytes from a ByteArray.

For each instance of the byte that is found, the ByteArray size is decreased by one and elements beyond it are shifted to the next lower index.

If no byte is given as an argument, the ByteArray will remain unchanged and `removeAll()` will return `false`.

Parameters:

-   byte — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)) —

    The byte to remove from the ByteArray


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    Returns `true` if instances of the byte are found, otherwise `false`.


Since:

API Level 3.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if a type other than [Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Char](/connect-iq/api-docs/Toybox/Lang/Char/) is provided

-   ([Lang.ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/)) —

    Thrown if a [Number](/connect-iq/api-docs/Toybox/Lang/Number/) greater than 255 or less than -128 is provided, or if a [Char](/connect-iq/api-docs/Toybox/Lang/Char/) with a code point greater than 127 is provided. Negative numbers provided are interpreted as the positive 8-bit unsigned equivalent when searching the ByteArray.


### **reverse()** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Return a new ByteArray that contains the elements of a source ByteArray in reverse order.

Returns:

-   [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A new ByteArray with elements in reversed order


Since:

API Level 3.0.0

### **size()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the size of a ByteArray.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The number of elements in the ByteArray.


Since:

API Level 3.0.0

### **slice(startIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, endIndex as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/)

Get a new ByteArray containing a portion of an existing ByteArray.

Parameters:

-   startIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    A zero-based index of the start of the new ByteArray. If a negative `startIndex` is provided, it will offset from the end of the ByteArray. If the `startIndex` is `null`, the slice will begin at 0. An out-of-bounds index will be truncated to the ByteArray limits.

-   endIndex — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), null) —

    A zero-based index of the end of the new ByteArray. Items are included up to, but not including `endIndex`. If a negative `endIndex` is provided, it will offset from the end of the ByteArray. If `endIndex` is `null`, the slice will end at the last element. An out-of-bounds index is truncated to the ByteArray limits.


Returns:

-   [Lang.ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/) —

    A new ByteArray containing the elements from `startIndex` to `endIndex`


Since:

API Level 3.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a ByteArray to a String.

This does not convert the elements of the ByteArray into Strings, but transforms the entire ByteArray into a String.

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A String representation of the ByteArray


Since:

API Level 3.0.0
