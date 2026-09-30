---
title: "Class: Toybox.Graphics.AffineTransform"
---
# Class: Toybox.Graphics.AffineTransform

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)


[show all](#)

## 概述

一个二维仿射变换矩阵

This is a 2D transform, typically used for converting coordinates from one 2D coordinate system to another. These transformations can represent a sequence of rotations, scales, shears, and translations.

```
   | m00  m01  m02 |
   | m10  m11  m12 |
   |   0    0    1 |
```

Since:

API 级别 4.2.0

## 实例方法摘要 [collapse](#)

- [**concatenate**](#concatenate-instance_function)(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)) as **Void**

    Apply the given transform Assign self to the result of the following matrix-matrix product: | m00 m01 m02 | | x00 x01 x02 | | m10 m11 m12 | x | x10 x11 x12 | | 0 0 1 | | 0 0 1 |.

- [**getDeterminant**](#getDeterminant-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    Get the transform determinant.

- [**getMatrix**](#getMatrix-instance_function)() as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]

    Get the transform values Get the underlying values of this transform as an Array | m00 m01 m02 | | m10 m11 m12 | => \[ m00, m01, m02, m10, m11, m12 \] | 0 0 1 |.

- [**initialize**](#initialize-instance_function)()

    initialize self to the identity transform | 1 0 0 | | 0 1 0 | | 0 0 1 |.

- [**invert**](#invert-instance_function)() as **Void**

    Invert self.

- [**preConcatenate**](#preConcatenate-instance_function)(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)) as **Void**

    Apply the given transform Assign self to the result of the following matrix-matrix product: | x00 x01 x02 | | m00 m01 m02 | | x10 x11 x12 | x | m10 m11 m12 | | 0 0 1 | | 0 0 1 |.

- [**rotate**](#rotate-instance_function)(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Apply a rotation Assign self to the result of the following matrix-matrix product: | m00 m01 m02 | | cos -sin 0 | | m10 m11 m12 | x | sin cos 0 | | 0 0 1 | | 0 0 1 | Equivalent to var xform = new AffineTransform(); xform.setToRotation(theta); self.concatenate(xform);.

- [**scale**](#scale-instance_function)(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Apply a scale Assign self to the result of the following matrix-matrix product: | m00 m01 m02 | | sx 0 0 | | m10 m11 m12 | x | 0 sy 0 | | 0 0 1 | | 0 0 1 | Equivalent to var xform = new AffineTransform(); xform.setToScale(sx, sy); self.concatenate(xform);.

- [**setMatrix**](#setMatrix-instance_function)(m as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]) as **Void**

    Set the transform values | m00 m01 m02 | \[ m00, m01, m02, m10, m11, m12 \] => | m10 m11 m12 | | 0 0 1 |.

- [**setToRotation**](#setToRotation-instance_function)(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Set self to a rotation transform | cos -sin 0 | | sin cos 0 | | 0 0 1 |.

- [**setToScale**](#setToScale-instance_function)(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Set self to a scale transform | sx 0 0 | | 0 sy 0 | | 0 0 1 |.

- [**setToShear**](#setToShear-instance_function)(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Set self to a shear transform | 1 shx 0 | | shy 1 0 | | 0 0 1 |.

- [**setToTranslation**](#setToTranslation-instance_function)(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Set self to a translation transform | 1 0 tx | | 0 1 ty | | 0 0 1 |.

- [**shear**](#shear-instance_function)(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Apply a shear Assign self to the result of the following matrix-matrix product: | m00 m01 m02 | | 1 shx 0 | | m10 m11 m12 | x | shy 1 0 | | 0 0 1 | | 0 0 1 | Equivalent to var xform = new AffineTransform(); xform.setToShear(shx, shy); self.concatenate(xform);.

- [**transformPoint**](#transformPoint-instance_function)(pt as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)) as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)

    Apply transform to a 2D coordinate Transform a single point as if by generating the following matrix-vector product: | m00 m01 m02 | | ptx | | m10 m11 m12 | x | pty | | 0 0 1 | | 1 |.

- [**transformPoints**](#transformPoints-instance_function)(pts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>

    Apply transform to an Array of 2D coordinates Transform an array of coordinates.

- [**translate**](#translate-instance_function)(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    Apply translation Assign self to the result of the following matrix-matrix product: | m00 m01 m02 | | 1 0 tx | | m10 m11 m12 | x | 0 1 ty | | 0 0 1 | | 0 0 1 | Equivalent to var xform = new AffineTransform(); xform.setToTranslation(tx, ty); self.concatenate(xform);.


## 实例方法详情

### **concatenate(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/))** as **Void**

应用给定的变换

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | m00  m01  m02 |   | x00  x01  x02 |
   | m10  m11  m12 | x | x10  x11  x12 |
   |   0    0    1 |   |   0    0    1 |
```

Parameters:

- xform — ([Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/))

Since:

API 级别 4.2.0

### **getDeterminant()** as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

Get the transform determinant

Since:

API 级别 4.2.0

### **getMatrix()** as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]

Get the transform values

Get the underlying values of this transform as an Array

```
   | m00  m01  m02 |
   | m10  m11  m12 | => [ m00, m01, m02, m10, m11, m12 ]
   |   0    0    1 |
```

Since:

API 级别 4.2.0

### **initialize()**

initialize self to the identity transform

```
   |   1    0    0 |
   |   0    1    0 |
   |   0    0    1 |
```

Since:

API 级别 4.2.0

### **invert()** as **Void**

Invert self

Since:

API 级别 4.2.0

Throws:

- ValueOutOfBoundsException if self cannot be inverted.


### **preConcatenate(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/))** as **Void**

应用给定的变换

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | x00  x01  x02 |   | m00  m01  m02 |
   | x10  x11  x12 | x | m10  m11  m12 |
   |   0    0    1 |   |   0    0    1 |
```

Parameters:

- xform — ([Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/))

Since:

API 级别 4.2.0

### **rotate(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Apply a rotation

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | m00  m01  m02 |   | cos -sin    0 |
   | m10  m11  m12 | x | sin  cos    0 |
   |   0    0    1 |   |   0    0    1 |
```

等价于

```
     var xform = new AffineTransform();
     xform.setToRotation(theta);
     self.concatenate(xform);
```

Parameters:

- theta — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **scale(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Apply a scale

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | m00  m01  m02 |   |  sx    0    0 |
   | m10  m11  m12 | x |   0   sy    0 |
   |   0    0    1 |   |   0    0    1 |
```

等价于

```
     var xform = new AffineTransform();
     xform.setToScale(sx, sy);
     self.concatenate(xform);
```

Parameters:

- sx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- sy — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **setMatrix(m as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \])** as **Void**

Set the transform values

```
                                       | m00  m01  m02 |
```

m00, m01, m02, m10, m11, m12

- \=> | m10 m11 m12 |

    ```
                                           |   0    0    1 |
    ```


Since:

API 级别 4.2.0

Throws:

- UnexpectedTypeException if parameter is not an Array

- InvalidValueException if parameter does not have exactly 6 elements


### **setToRotation(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Set self to a rotation transform

```
   | cos -sin    0 |
   | sin  cos    0 |
   |   0    0    1 |
```

Parameters:

- theta — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **setToScale(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Set self to a scale transform

```
   |  sx    0    0 |
   |   0   sy    0 |
   |   0    0    1 |
```

Parameters:

- sx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- sy — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **setToShear(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Set self to a shear transform

```
   |   1  shx    0 |
   | shy    1    0 |
   |   0    0    1 |
```

Parameters:

- shx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- shy — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **setToTranslation(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Set self to a translation transform

```
   |   1    0   tx |
   |   0    1   ty |
   |   0    0    1 |
```

Parameters:

- tx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- ty — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **shear(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Apply a shear

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | m00  m01  m02 |   |   1  shx    0 |
   | m10  m11  m12 | x | shy    1    0 |
   |   0    0    1 |   |   0    0    1 |
```

等价于

```
     var xform = new AffineTransform();
     xform.setToShear(shx, shy);
     self.concatenate(xform);
```

Parameters:

- shx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- shy — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0

### **transformPoint(pt as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type))** as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)

Apply transform to a 2D coordinate

Transform a single point as if by generating the following matrix-vector product:

```
   | m00  m01  m02 |   | ptx |
   | m10  m11  m12 | x | pty |
   |   0    0    1 |   |   1 |
```

Parameters:

- pt — ([Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type))

Returns:

- [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)

Since:

API 级别 4.2.0

### **transformPoints(pts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>

Apply transform to an Array of 2D coordinates

Transform an array of coordinates

Parameters:

- pts — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/))

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

Since:

API 级别 4.2.0

### **translate(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

Apply translation

将 self 赋值为以下矩阵与矩阵乘积的结果：

```
   | m00  m01  m02 |   |   1    0   tx |
   | m10  m11  m12 | x |   0    1   ty |
   |   0    0    1 |   |   0    0    1 |
```

等价于

```
     var xform = new AffineTransform();
     xform.setToTranslation(tx, ty);
     self.concatenate(xform);
```

Parameters:

- tx — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))
- ty — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))

Since:

API 级别 4.2.0
