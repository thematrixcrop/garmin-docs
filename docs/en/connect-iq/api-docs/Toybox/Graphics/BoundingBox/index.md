---
title: "Class: Toybox.Graphics.BoundingBox"
---
# Class: Toybox.Graphics.BoundingBox

Inherits:

Toybox.Lang.Object

-   [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

-   [Toybox.Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)


[show all](#)

## Overview

An object representing a bounding box in the UI

Since:

API Level 3.2.7

## Instance Member Summary [collapse](#)

-   [**height**](#height-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Represents the height of the bounding box.

-   [**width**](#width-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Represents the width of the bounding box.

-   [**x**](#x-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Represents the x coordinate for the origin of the bounding box.

-   [**y**](#y-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    Represents the y coordinate for the origin of the bounding box.


## Instance Method Summary [collapse](#)

-   [**addBoundingBox**](#addBoundingBox-instance_function)(box as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) as **Void**

    Expand self to include a bounding box Update `self` to include the full bounding box specified.

-   [**addCircle**](#addCircle-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), radius as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Expand self to include a circle Update `self` to include the circle specified.

-   [**addEllipse**](#addEllipse-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), a as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), b as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Expand self to include an ellipse Update `self` to include the ellipse specified.

-   [**addPoint**](#addPoint-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Add a point to the bounding box Update `self` to include the point specified.

-   [**addPoints**](#addPoints-instance_function)(points as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;\[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]>) as **Void**

    Add one or more points to a bounding box Update `self` to include all of the points specified.

-   [**addRectangle**](#addRectangle-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Expand self to include a rectangle Update `self` to include the rectangle specified.

-   [**expand**](#expand-instance_function)(dx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), dy as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Expand self by the given offsets Expand `self` by the x and y offsets specified.

-   [**includesPoint**](#includesPoint-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Determine if self includes a point Points on the edge of a box are considered to be included since the box would not expand if such a point were added to the box.

-   [**normalize**](#normalize-instance_function)() as **Void**

    Update self to ensure non-negative width and height values Repair `self` to so that `width` and `height` are non-negative, updating the `x` and `y` coordinates as appropriate.

-   [**reset**](#reset-instance_function)() as **Void**

    Reset self to an invalid state.

-   [**valid**](#valid-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Check box is valid.


## Instance Attribute Details

### var height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Represents the height of the bounding box

Since:

API Level 3.2.7

### var width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Represents the width of the bounding box

Since:

API Level 3.2.7

### var x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Represents the x coordinate for the origin of the bounding box

Since:

API Level 3.2.7

### var y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

Represents the y coordinate for the origin of the bounding box

Since:

API Level 3.2.7

## Instance Method Details

### **addBoundingBox(box as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/))** as **Void**

Expand self to include a bounding box

Update `self` to include the full bounding box specified. If `self` is not valid, sets `self` to `box`.

Parameters:

-   box — ([Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) —

    The bounding box to add.


Since:

API Level 5.1.0

### **addCircle(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), radius as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Expand self to include a circle

Update `self` to include the circle specified. If `self` is not valid, sets `self` to the bounding box that contains the given circle.

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the circle to add.

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the circle to add.

-   radius — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the circle to add.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `x` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `y` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `radius` is not a Number.


### **addEllipse(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), a as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), b as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Expand self to include an ellipse

Update `self` to include the ellipse specified. If `self` is not valid, sets `self` to the bounding box that contains the given ellipse.

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the ellipse to add.

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the ellipse to add.

-   a — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the ellipse to add along the x axis

-   b — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the ellipse to add along the y axis


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `x` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `y` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `a` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `b` is not a Number.


### **addPoint(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Add a point to the bounding box

Update `self` to include the point specified. If `self` is not valid, sets `self` to the bounding box that contains the given point.

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the point to add.

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the point to add.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `x` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `y` is not a Number.


### **addPoints(points as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;\[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]>)** as **Void**

Add one or more points to a bounding box

Update `self` to include all of the points specified. If `self` is not valid, sets `self` to the bounding box that contains all of the given points.

Parameters:

-   points — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The array of points to add.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `points` is not an Array of points.


### **addRectangle(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Expand self to include a rectangle

Update `self` to include the rectangle specified. If `self` is not valid, sets `self` to the bounding box that contains the given rectangle.

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the rectangle to add.

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the rectangle to add.

-   width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width of the box to rectangle.

-   height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The height of the box to rectangle.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `x` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `y` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `width` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `height` is not a Number.


### **expand(dx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), dy as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

Expand self by the given offsets

Expand `self` by the x and y offsets specified. Use negative values to contract self.

Parameters:

-   dx — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The amount to expand along the x axis.

-   dy — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The amount to expand along the y axis.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `dx` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `dy` is not a Number.


### **includesPoint(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Determine if self includes a point

Points on the edge of a box are considered to be included since the box would not expand if such a point were added to the box.

Parameters:

-   x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the point to check.

-   y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the point to check.


Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if this box includes the given point.


Since:

API Level 5.1.0

Throws:

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `x` is not a Number.

-   ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `y` is not a Number.


### **normalize()** as **Void**

Update self to ensure non-negative width and height values

Repair `self` to so that `width` and `height` are non-negative, updating the `x` and `y` coordinates as appropriate. If `self` is not valid or is already normalized, has no effect.

Since:

API Level 5.1.0

### **reset()** as **Void**

Reset self to an invalid state

Since:

API Level 5.1.0

### **valid()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Check box is valid

Returns:

-   [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true` if `self` describes a valid bounding box.


Since:

API Level 5.1.0
