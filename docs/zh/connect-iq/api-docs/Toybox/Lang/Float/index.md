---
title: "Class: Toybox.Lang.Float"
---
# Class: Toybox.Lang.Float

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)


[show all](#)

## Overview

Floats are 32-bit floating point values.

By default, decimal values in Monkey C are Floats.

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**abs**](#abs-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    Get the absolute value of a Float.

-   [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Compare the numeric value of self to some other numeric value.

-   [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Format a Float using a formatting String.

-   [**toDouble**](#toDouble-instance_function)() as [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

    Convert a Float to a Double.

-   [**toFloat**](#toFloat-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    Convert a Float to a Float.

-   [**toLong**](#toLong-instance_function)() as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

    Convert a Float to a Long.

-   [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Float to a Number.


## Instance Method Details

### **abs()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

Get the absolute value of a Float.

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    The absolute value of the Float


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


### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Format a Float using a formatting String.

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

Convert a Float to a Double.

Returns:

-   [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) —

    A Double representation of the Float


Since:

API Level 1.0.0

### **toFloat()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

Convert a Float to a Float.

Returns:

-   [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) —

    A Float representation of the Float


Since:

API Level 1.0.0

### **toLong()** as [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

Convert a Float to a Long.

Returns:

-   [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) —

    A Long representation of the Float


Since:

API Level 1.0.0

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Float to a Number.

The Float value will be rounded toward 0 upon conversion. For example, 6.8 becomes 6 and -5.7 becomes -5.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    A Number representation of the Float


Since:

API Level 1.0.0
