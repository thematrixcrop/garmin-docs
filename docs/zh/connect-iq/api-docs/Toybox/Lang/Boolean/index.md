---
title: "Class: Toybox.Lang.Boolean"
---
# Class: Toybox.Lang.Boolean

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)


[show all](#)

## Overview

Boolean objects represent a true or false value.

You can use the `true` or `false` keyword to create a Boolean.

Example:

```
var myBoolean = true;
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**compareTo**](#compareTo-instance_function)(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Compare the numeric value of self to some other numeric value.


## Instance Method Details

### **compareTo(other as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Compare the numeric value of self to some other numeric value. false is

```
  considered numerically zero and true is considered numerically 1.
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
