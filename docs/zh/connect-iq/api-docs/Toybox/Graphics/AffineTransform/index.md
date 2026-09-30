---
title: "Class: Toybox.Graphics.AffineTransform"
---
# 类：Toybox.Graphics.AffineTransform

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)


[show all](#)

## 概述

一个二维仿射变换矩阵

这是一个二维变换，通常用于将坐标从一个二维坐标系转换到另一个二维坐标系。这些变换可以表示旋转、缩放、错切和平移的序列。

```
   | m00  m01  m02 |
   | m10  m11  m12 |
   |   0    0    1 |
```

Since:

API 级别 4.2.0

## 实例方法摘要 [collapse](#)

- [**concatenate**](#concatenate-instance_function)(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)) as **Void**

    应用给定的变换 将自身赋值为以下矩阵乘积的结果：| m00 m01 m02 | | x00 x01 x02 | | m10 m11 m12 | x | x10 x11 x12 | | 0 0 1 | | 0 0 1 |。

- [**getDeterminant**](#getDeterminant-instance_function)() as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)

    获取变换行列式。

- [**getMatrix**](#getMatrix-instance_function)() as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]

    Get the transform values Get the underlying values of this transform as an Array | m00 m01 m02 | | m10 m11 m12 | => \[ m00, m01, m02, m10, m11, m12 \] | 0 0 1 |.

- [**initialize**](#initialize-instance_function)()

    将自身初始化为单位变换 | 1 0 0 | | 0 1 0 | | 0 0 1 |。

- [**invert**](#invert-instance_function)() as **Void**

    反转自身。

- [**preConcatenate**](#preConcatenate-instance_function)(xform as [Graphics.AffineTransform](/connect-iq/api-docs/Toybox/Graphics/AffineTransform/)) as **Void**

    应用给定的变换 将自身赋值为以下矩阵乘积的结果：| x00 x01 x02 | | m00 m01 m02 | | x10 x11 x12 | x | m10 m11 m12 | | 0 0 1 | | 0 0 1 |。

- [**rotate**](#rotate-instance_function)(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    应用旋转 将自身赋值为以下矩阵乘积的结果：| m00 m01 m02 | | cos -sin 0 | | m10 m11 m12 | x | sin cos 0 | | 0 0 1 | | 0 0 1 |。等价于 var xform = new AffineTransform(); xform.setToRotation(theta); self.concatenate(xform);。

- [**scale**](#scale-instance_function)(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    应用缩放 将自身赋值为以下矩阵乘积的结果：| m00 m01 m02 | | sx 0 0 | | m10 m11 m12 | x | 0 sy 0 | | 0 0 1 | | 0 0 1 |。等价于 var xform = new AffineTransform(); xform.setToScale(sx, sy); self.concatenate(xform);。

- [**setMatrix**](#setMatrix-instance_function)(m as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]) as **Void**

    Set the transform values | m00 m01 m02 | \[ m00, m01, m02, m10, m11, m12 \] => | m10 m11 m12 | | 0 0 1 |.

- [**setToRotation**](#setToRotation-instance_function)(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    将自身设置为旋转变换 | cos -sin 0 | | sin cos 0 | | 0 0 1 |。

- [**setToScale**](#setToScale-instance_function)(sx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), sy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    将自身设置为缩放变换 | sx 0 0 | | 0 sy 0 | | 0 0 1 |。

- [**setToShear**](#setToShear-instance_function)(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    将自身设置为剪切变换 | 1 shx 0 | | shy 1 0 | | 0 0 1 |。

- [**setToTranslation**](#setToTranslation-instance_function)(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    将自身设置为平移变换 | 1 0 tx | | 0 1 ty | | 0 0 1 |。

- [**shear**](#shear-instance_function)(shx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), shy as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    应用切变 将自身赋值为以下矩阵乘积的结果：| m00 m01 m02 | | 1 shx 0 | | m10 m11 m12 | x | shy 1 0 | | 0 0 1 | | 0 0 1 |。等价于 var xform = new AffineTransform(); xform.setToShear(shx, shy); self.concatenate(xform);。

- [**transformPoint**](#transformPoint-instance_function)(pt as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)) as [Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)

    将变换应用于二维坐标 通过生成以下矩阵向量乘积来变换单个点：| m00 m01 m02 | | ptx | | m10 m11 m12 | x | pty | | 0 0 1 | | 1 |。

- [**transformPoints**](#transformPoints-instance_function)(pts as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.Point2D](/connect-iq/api-docs/Toybox/Graphics/#Point2D-named_type)\>

    将变换应用于二维坐标数组 变换坐标数组。

- [**translate**](#translate-instance_function)(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) as **Void**

    应用平移 将自身赋值为以下矩阵乘积的结果：| m00 m01 m02 | | 1 0 tx | | m10 m11 m12 | x | 0 1 ty | | 0 0 1 | | 0 0 1 |。等价于 var xform = new AffineTransform(); xform.setToTranslation(tx, ty); self.concatenate(xform);。


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

获取变换行列式

Since:

API 级别 4.2.0

### **getMatrix()** as \[ [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) \]

获取变换值

获取此变换的底层值组成的 Array

```
   | m00  m01  m02 |
   | m10  m11  m12 | => [ m00, m01, m02, m10, m11, m12 ]
   |   0    0    1 |
```

Since:

API 级别 4.2.0

### **initialize()**

将自身初始化为恒等变换

```
   |   1    0    0 |
   |   0    1    0 |
   |   0    0    1 |
```

Since:

API 级别 4.2.0

### **invert()** as **Void**

反转自身

Since:

API 级别 4.2.0

Throws:

- 如果 self 无法求逆，则为 ValueOutOfBoundsException。


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

应用旋转

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

应用缩放

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

设置变换值

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

- 如果参数不是数组，则为 UnexpectedTypeException

- 如果参数不恰好包含 6 个元素，则抛出 InvalidValueException


### **setToRotation(theta as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

将自身设置为旋转变换

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

将自身设置为缩放变换

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

将自身设置为剪切变换

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

将自身设置为平移变换

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

应用切变

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

将变换应用于二维坐标

变换单个点，就像生成以下矩阵-向量乘积一样：

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

将变换应用于二维坐标数组

变换坐标数组

Parameters:

- pts — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/))

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)

Since:

API 级别 4.2.0

### **translate(tx as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), ty as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/))** as **Void**

应用平移

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
