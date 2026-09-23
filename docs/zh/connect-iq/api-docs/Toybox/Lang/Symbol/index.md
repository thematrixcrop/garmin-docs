---
title: "Class: Toybox.Lang.Symbol"
---
# Class: Toybox.Lang.Symbol

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)


[show all](#)

## Overview

A Symbol is a lightweight constant identifier.

The Monkey C compiler will assign a new value when it encounters a new Symbol. This allows a developer to use Symbol objects as keys or constant values without explicitly declaring a `constant` or `enum`. While Symbol values are constant for a build, their values may change across builds.

For this reason, Symbol objects should not be used for persistent data.

Example:

```
var person = {:first_name=>"Bob", :last_name=>"Jones"};
```

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**toNumber**](#toNumber-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Convert a Symbol to a Number This will return a number containing the integer value of the symbol.

-   [**toString**](#toString-instance_function)() as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

    Convert a Symbol to a String This will return the string for the name of the symbol in development builds.


## Instance Method Details

### **toNumber()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Convert a Symbol to a Number

This will return a number containing the integer value of the symbol.

Returns:

-   Number —

    The number representation of the Symbol


Since:

API Level 2.3.0

### **toString()** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)

Convert a Symbol to a String

This will return the string for the name of the symbol in development builds. Because Monkey C does not contain runtime reflection information in release builds, the returned string will be different and will follow the format "symbol (num)". In this format, "num" is the integer value of the symbol.

Returns:

-   String —

    The String representation of the Symbol


Since:

API Level 1.0.0
