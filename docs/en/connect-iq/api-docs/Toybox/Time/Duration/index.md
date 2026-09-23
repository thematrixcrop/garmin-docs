---
title: "Class: Toybox.Time.Duration"
---
# Class: Toybox.Time.Duration

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)


[show all](#)

## Overview

A Duration is an immutable period of time.

Duration objects are closely related to [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) objects, and are frequently used together for time calculations. While a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) represents a single point in time, a Duration represents a span of time such as seven days.

Duration objects are stored as a the number of seconds that compose the span of time the Duration represents.

Since:

API Level 1.0.0

## Instance Method Summary [collapse](#)

-   [**add**](#add-instance_function)(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Add a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or another Duration to a Duration.

-   [**compare**](#compare-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Determine if a Duration is shorter or longer than another Duration.

-   [**divide**](#divide-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Divide a Duration by a value.

-   [**greaterThan**](#greaterThan-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if a Duration is longer than another Duration.

-   [**initialize**](#initialize-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Constructor.

-   [**lessThan**](#lessThan-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if a Duration is shorter than another Duration.

-   [**multiply**](#multiply-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Multiply a Duration by a value.

-   [**subtract**](#subtract-instance_function)(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

    Get the absolute difference between two Duration objects.

-   [**value**](#value-instance_function)() as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Get the value of a Duration.


## Instance Method Details

### **add(time as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Add a [Moment](/connect-iq/api-docs/Toybox/Time/Moment/) or another Duration to a Duration.

When adding a Moment to a Duration, this method functions the same as the [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function) method.

Parameters:

-   time — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/)) —

    The Duration or Moment to add to Duration


Example:

Add two Duration objects

```
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);
var threeHours = oneHour.add(twoHours);
```

Returns:

-   [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/), [Time.Moment](/connect-iq/api-docs/Toybox/Time/Moment/) —

    A Duration or Moment object that is the sum of self and the provided object:

    -   Duration + Moment = Moment

    -   Duration + Duration = Duration



See Also:

-   [Moment.add()](/connect-iq/api-docs/Toybox/Time/Moment/#add-instance_function)


Since:

API Level 1.0.0

### **compare(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Determine if a Duration is shorter or longer than another Duration.

This computes a Number representing the difference between the two Duration objects in seconds. The [subtract()](/connect-iq/api-docs/Toybox/Time/Duration/#subtract-instance_function) method can also be used to get the absolute difference between two Duration objects.

Parameters:

-   duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to compare to this Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.compare(twoHours)); // -3600, or one minute in the past
System.println(twoHours.compare(oneHour)); //  3600, or one minute in the future
```

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The Number of seconds difference between the two Duration objects. If the Duration supplied for comparison is longer than this Duration, the value will be negative.


Since:

API Level 1.0.0

### **divide(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Divide a Duration by a value.

Parameters:

-   value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value by which to divide the Duration


Example:

```
using Toybox.Time;
var fourHours  = new Time.Duration(Gregorian.SECONDS_PER_HOUR * 4);
var twoHours = fourHours.divide(2);
```

Returns:

-   [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The quotient of the Duration and the supplied value


Since:

API Level 1.0.0

### **greaterThan(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if a Duration is longer than another Duration.

Parameters:

-   duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to compare to this Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.greaterThan(twoHours)); // false
System.println(twoHours.greaterThan(oneHour)); // true
```

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if this Duration is longer than the Duration supplied for comparison, otherwise `false`


Since:

API Level 1.0.0

### **initialize(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Constructor

Parameters:

-   value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The Number of seconds with which to initialize the Duration


Example:

Create a Duration of one day with a number of seconds

```
using Toybox.Time;
var oneDay = new Time.Duration(86400);
```

Returns:

-   [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    A Duration representing the specified Number of seconds


See Also:

-   [Gregorian.duration()](/connect-iq/api-docs/Toybox/Time/Gregorian/#duration-instance_function)


Since:

API Level 1.0.0

### **lessThan(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if a Duration is shorter than another Duration.

Parameters:

-   duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to compare to this Duration


Example:

```
using Toybox.System;
using Toybox.Time;
var oneHour    = new Time.Duration(3600);
var twoHours   = new Time.Duration(7200);

System.println(oneHour.lessThan(twoHours)); // true
System.println(twoHours.lessThan(oneHour)); // false
```

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if this Duration is shorter than the Duration supplied for comparison, otherwise `false`


Since:

API Level 1.0.0

### **multiply(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Multiply a Duration by a value.

Parameters:

-   value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The value by which to multiply the Duration


Example:

```
using Toybox.Time;
var twoHours  = new Time.Duration(7200);
var fourHours = twoHours.multiply(2);
```

Returns:

-   [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The product of the Duration and the supplied value


Since:

API Level 1.0.0

### **subtract(duration as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)

Get the absolute difference between two Duration objects.

The computed Duration is always a positive value. The [compare()](/connect-iq/api-docs/Toybox/Time/Duration/#compare-instance_function) method can also be used to get the difference between two Duration objects.

Parameters:

-   duration — ([Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The Duration to subtract from this Duration


Example:

```
using Toybox.Time;
var twoHours   = new Time.Duration(7200);
var threeHours = new Time.Duration(10800);
var oneHour = threeHours.subtract(twoHours);
```

Returns:

-   [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/) —

    The difference between the two Duration objects


Since:

API Level 1.0.0

### **value()** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Get the value of a Duration.

Returns:

-   [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The value of the Duration in seconds


Since:

API Level 1.0.0
