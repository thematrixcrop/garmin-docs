---
title: "Class: Toybox.Lang.Char"
---
# Class: Toybox.Lang.Char

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)


[show all](#)

## Overview

Chars are Unicode characters.

Since:

API Level 1.3.0

## Instance Method Summary [collapse](#)

-   [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Compare the unicode code point self to some other numeric value.

-   [**toLower**](#toLower-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    Convert a Char to lowercase.

-   [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Char to a Number.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Char to a String.

-   [**toUpper**](#toUpper-instance_function)() as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

    Convert a Char to uppercase.


## Instance Method Details

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Compare the unicode code point self to some other numeric value.

Parameters:

-   other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The right hand side of a comparison.


Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A negative value if self is less than other, zero if the objects are equivalent, and a positive value if self is greater than other.


Since:

API Level 5.0.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if other is not of type [Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), or [Char](/connect-iq/api-docs/Toybox/Lang/Char/).


### **toLower()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Convert a Char to lowercase.

Returns:

-   [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    A new lowercase Char


Since:

API Level 1.3.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Char to a Number.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The UTF-32 representation of the Char interpreted as a Number


Since:

API Level 1.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Char to a String.

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the Char


Since:

API Level 1.3.0

### **toUpper()** as [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)

Convert a Char to uppercase.

Returns:

-   [Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/) —

    A new uppercase Char


Since:

API Level 1.3.0
