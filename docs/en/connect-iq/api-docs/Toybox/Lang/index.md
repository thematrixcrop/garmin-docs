---
title: "Module: Toybox.Lang"
---
# Module: Toybox.Lang

## Overview

The Lang module contains Monkey C language basic types, and provides a method for formatting Strings.

Since:

API Level 1.0.0

## Classes Under Namespace

**Classes:** [Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/), [ByteArray](/connect-iq/api-docs/Toybox/Lang/ByteArray/), [Char](/connect-iq/api-docs/Toybox/Lang/Char/), [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Double](/connect-iq/api-docs/Toybox/Lang/Double/), [Exception](/connect-iq/api-docs/Toybox/Lang/Exception/), [Float](/connect-iq/api-docs/Toybox/Lang/Float/), [InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/), [InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/), [Long](/connect-iq/api-docs/Toybox/Lang/Long/), [Method](/connect-iq/api-docs/Toybox/Lang/Method/), [Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Object](/connect-iq/api-docs/Toybox/Lang/Object/), [OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/), [ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [SerializationException](/connect-iq/api-docs/Toybox/Lang/SerializationException/), [StorageFullException](/connect-iq/api-docs/Toybox/Lang/StorageFullException/), [String](/connect-iq/api-docs/Toybox/Lang/String/), [Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/), [UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/), [ValueOutOfBoundsException](/connect-iq/api-docs/Toybox/Lang/ValueOutOfBoundsException/), [WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)

## Constant Summary

### NumberFormat

Since:

API Level 1.0.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| NUMBER\_FORMAT\_FLOAT | 0 |
API Level 3.1.0

 |

IEEE 754 Single Precision Float Value (32-bits)

 |
| NUMBER\_FORMAT\_SINT16 | 1 |

API Level 3.1.0

 |

Signed 16-bit Integer Value

 |
| NUMBER\_FORMAT\_SINT32 | 2 |

API Level 3.1.0

 |

Signed 32-bit Integer Value

 |
| NUMBER\_FORMAT\_SINT8 | 3 |

API Level 3.1.0

 |

Signed 8-bit Integer Value

 |
| NUMBER\_FORMAT\_UINT16 | 4 |

API Level 3.1.0

 |

Unsigned 16-bit Integer Value

 |
| NUMBER\_FORMAT\_UINT32 | 5 |

API Level 3.1.0

 |

Unsigned 32-bit Integer Value

 |
| NUMBER\_FORMAT\_UINT8 | 6 |

API Level 3.1.0

 |

Unsigned 8-bit Integer Value

 |

### Endian

Since:

API Level 1.0.0

| Name | Value | Since | Description |
| --- | --- | --- | --- |
| ENDIAN\_LITTLE | 0 |
API Level 3.1.0

 |  |
| ENDIAN\_BIG | 1 |

API Level 3.1.0

 |  |

## Typedef Summary [collapse](#)

-   [**Comparable**](#Comparable-named_type) as interface {
    function compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
    }

    Comparable defines an ordering between an object and others.

-   [**Comparator**](#Comparator-named_type) as interface {
    function compare(a as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), b as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
    }

    Comparator defines an ordering between objects.

-   [**Decimal**](#Decimal-named_type) as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)
-   [**Integer**](#Integer-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)
-   [**Numeric**](#Numeric-named_type) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

## Instance Method Summary [collapse](#)

-   [**format**](#format-instance_function)(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Create a formatted String by substituting the given parameters into the given format at the corresponding locations.


## Typedef Details

### **Comparable** as interface {
function compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
}

Comparable defines an ordering between an object and others.

Comparator can be use to specify an ordering between an object and others.

Since:

API Level 5.0.0

### **Comparator** as interface {
function compare(a as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), b as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/);
}

Comparator defines an ordering between objects.

Comparator can be use to specify an ordering between objects.

Since:

API Level 5.0.0

### **Decimal** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Since:

API Level 1.0.0

### **Integer** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)

Since:

API Level 1.0.0

### **Numeric** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/) or [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)

Since:

API Level 1.0.0

## Instance Method Details

### **format(format as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), parameters as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Create a formatted String by substituting the given parameters into the given format at the corresponding locations.

Parameters:

-   format — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    A string using $1$, $2$, $3$... as substitution identifiers

-   parameters — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The Array of content to substitute into the formatted String


Example:

```
// Set the 'myString' variable to "Your next meeting is at 2:30 on Sep 4 in room 6820."
using Toybox.Lang
var myFormat = "Your next meeting is at $1$:$2$ on $3$ $4$ in room $5$.";
var myParams = [2, 30, "Sep", 4, "6820"];
var myString = Lang.format(myFormat, myParams);
```

Returns:

-   [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    A new String with the substituted content


Since:

API Level 1.0.0
