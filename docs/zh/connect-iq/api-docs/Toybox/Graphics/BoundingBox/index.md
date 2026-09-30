---
title: "Class: Toybox.Graphics.BoundingBox"
---
# 类：Toybox.Graphics.BoundingBox

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)


[show all](#)

## 概述

表示 UI 中边界框的对象

Since:

API 级别 3.2.7

## 实例成员摘要 [collapse](#)

- [**height**](#height-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    表示边界框的高度。

- [**width**](#width-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    表示边界框的宽度。

- [**x**](#x-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    表示边界框原点的 x 坐标。

- [**y**](#y-var) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

    表示边界框原点的 y 坐标。


## 实例方法摘要 [collapse](#)

- [**addBoundingBox**](#addBoundingBox-instance_function)(box as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) as **Void**

    扩展 self 以包含边界框 更新 `self` 以包含指定的完整边界框。

- [**addCircle**](#addCircle-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), radius as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    扩展 self 以包含圆形 更新 `self` 以包含指定的圆形。

- [**addEllipse**](#addEllipse-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), a as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), b as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    扩展 self 以包含椭圆 更新 `self` 以包含指定的椭圆。

- [**addPoint**](#addPoint-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    向边界框添加一个点。更新 `self` 以包含指定的点。

- [**addPoints**](#addPoints-instance_function)(points as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;\[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]>) as **Void**

    向边界框添加一个或多个点。更新 `self` 以包含所有指定的点。

- [**addRectangle**](#addRectangle-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    扩展 self 以包含矩形 更新 `self` 以包含指定的矩形。

- [**expand**](#expand-instance_function)(dx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), dy as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    按照给定偏移量扩展 self 按照指定的 x 和 y 偏移量扩展 `self`。

- [**includesPoint**](#includesPoint-instance_function)(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    确定 self 是否包含一个点 由于添加边界框边缘上的点不会使边界框扩展，因此边缘上的点也被视为包含在内。

- [**normalize**](#normalize-instance_function)() as **Void**

    Update self to ensure non-negative width and height values Repair `self` to so that `width` and `height` are non-negative, updating the `x` and `y` coordinates as appropriate.

- [**reset**](#reset-instance_function)() as **Void**

    将 self 重置为无效状态。

- [**valid**](#valid-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    复选框有效。


## 实例属性详情

### var height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

表示边界框的高度

Since:

API 级别 3.2.7

### var width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

表示边界框的宽度

Since:

API 级别 3.2.7

### var x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

表示边界框原点的 x 坐标

Since:

API 级别 3.2.7

### var y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**

表示边界框原点的 y 坐标

Since:

API 级别 3.2.7

## 实例方法详情

### **addBoundingBox(box as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/))** as **Void**

扩展 self 以包含边界框

Update `self` to include the full bounding box specified. If `self` is not valid, sets `self` to `box`.

Parameters:

- box — ([Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/)) —

    The bounding box to add.


Since:

API 级别 5.1.0

### **addCircle(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), radius as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

扩展 self 以包含圆形

Update `self` to include the circle specified. If `self` is not valid, sets `self` to the bounding box that contains the given circle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the circle to add.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the circle to add.

- radius — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the circle to add.


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `x` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `y` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `radius` is not a Number.


### **addEllipse(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), a as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), b as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

扩展 self 以包含椭圆

Update `self` to include the ellipse specified. If `self` is not valid, sets `self` to the bounding box that contains the given ellipse.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the ellipse to add.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the ellipse to add.

- a — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the ellipse to add along the x axis

- b — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The radius of the ellipse to add along the y axis


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `x` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `y` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `a` is not a Number.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `b` is not a Number.


### **addPoint(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

向边界框添加一个点

Update `self` to include the point specified. If `self` is not valid, sets `self` to the bounding box that contains the given point.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the point to add.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the point to add.


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `x` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `y` 不是 Number 则抛出。


### **addPoints(points as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;\[ [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) \]>)** as **Void**

向边界框添加一个或多个点

Update `self` to include all of the points specified. If `self` is not valid, sets `self` to the bounding box that contains all of the given points.

Parameters:

- points — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    The array of points to add.


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `points` is not an Array of points.


### **addRectangle(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), width as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), height as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

扩展 self 以包含矩形

Update `self` to include the rectangle specified. If `self` is not valid, sets `self` to the bounding box that contains the given rectangle.

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the rectangle to add.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the rectangle to add.

- width — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The width of the box to rectangle.

- height — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The height of the box to rectangle.


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `x` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `y` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `width` is not a Number.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `height` is not a Number.


### **expand(dx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), dy as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

按照给定偏移量扩展 self

按照指定的 x 和 y 偏移量扩展 `self`。使用负值收缩 self。

Parameters:

- dx — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    沿 x 轴扩展的量。

- dy — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    沿 y 轴扩展的量。


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `dx` is not a Number.

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `dy` is not a Number.


### **includesPoint(x as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), y as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

确定 self 是否包含一个点

框边缘上的点被视为包含在内，因为将此类点添加到框中不会使框扩展。

Parameters:

- x — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The x coordinate of the point to check.

- y — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The y coordinate of the point to check.


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果此框包含给定点，则为 `true`。


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `x` 不是 Number 则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    若 `y` 不是 Number 则抛出。


### **normalize()** as **Void**

Update self to ensure non-negative width and height values

修复 `self`，使 `width` 和 `height` 为非负数，并在必要时更新 `x` 和 `y` 坐标。如果 `self` 无效或已经规范化，则不执行任何操作。

Since:

API 级别 5.1.0

### **reset()** as **Void**

将 self 重置为无效状态

Since:

API 级别 5.1.0

### **valid()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

复选框有效

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果 `self` 描述的是有效的边界框，则为 `true`。


Since:

API 级别 5.1.0
