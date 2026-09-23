---
title: "Class: Toybox.Lang.Double"
---
# Class: Toybox.Lang.Double

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)


[show all](#)

## Overview

Double represents a 64-bit floating point number.

To use a double in Monkey C add 'd' to the end of the number.

Example:

```
var e = 2.718281828459045d;
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**abs**](#abs-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Get the absolute value of a Double.

-   [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Compare the numeric value of self to some other numeric value.

-   [**equals**](#equals-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Test if an Object instance is equal to another instance of an Object.

-   [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Format a Double using a formatting String.

-   [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Convert a Double to a Double.

-   [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    Convert a Double to a Float.

-   [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    Convert a Double to a Long.

-   [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Double to a Number.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Double to a String.


## Instance Method Details

### **abs()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Get the absolute value of a Double.

Returns:

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    The absolute value of the Double


Since:

API Level 1.0.0

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Compare the numeric value of self to some other numeric value. NaN is

```
  considered greater than all numbers and equal to itself.
```

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


### **equals(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**)** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Test if an Object instance is equal to another instance of an Object.

Parameters:

-   other — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The Object to test against


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if the Objects are equal, otherwise `false`


Since:

API Level 1.3.0

### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Format a Double using a formatting String.

The formatting string is similar to that available in `printf` from the C stdio library, though the `length` option is not available:

```
    "%[flags][width][.precision]specifier"
```

specifiers

-   **d** or **i** - signed decimal integer

-   **e** - scientific notation (mantissa/exponent) using 'e' character

-   **E** - scientific notation (mantissa/exponent) using 'E' character

-   **f** - decimal floating point

-   **o** - signed octal

-   **u** - unsigned decimal integer

-   **x** - unsigned hexadecimal integer

-   **X** - unsigned hexadecimal integer (capital letters)


flags

-   \+ - Prepends the result with a plus or minus sign ('+' or '-'), including positive numbers. By default, only negative numbers are preceded with a '-' sign.

-   **0** - Left-pads the number with zeros (0) instead of spaces, where padding is specified (see width sub-specifier).


width

supports only numbers (\* is not supported)

.precision

supports only numbers (\* is not supported)

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A formatted String


Since:

API Level 1.0.0

### **toDouble()** as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Convert a Double to a Double.

Returns:

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    A Double representation of the Double


Since:

API Level 1.0.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

Convert a Double to a Float.

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    A Float representation of the Double


Since:

API Level 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

Convert a Double to a Long.

Returns:

-   [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    A Long representation of the Double


Since:

API Level 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Double to a Number.

The Double value will be rounded toward 0 upon conversion. For example, 6.8 becomes 6 and -5.7 becomes -5.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A Number representation of the Double


Since:

API Level 1.0.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Double to a String.

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    The String representation of the Double


Since:

API Level 1.0.0
