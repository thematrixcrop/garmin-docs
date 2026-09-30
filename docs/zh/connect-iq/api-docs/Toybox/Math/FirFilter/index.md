---
title: "Class: Toybox.Math.FirFilter"
---
# 类：Toybox.Math.FirFilter

Inherits:

Toybox.Math.Filter

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)

- [Toybox.Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/)


[show all](#)

## 概述

Finite Impulse Response (FIR) filter implementation.

## 另见：

- [FirFilters](https://en.wikipedia.org/wiki/Finite_impulse_response)


Example:

Shows the constructor and implementation for filter use with accelerometer data. Borrowed from the PitchCounter sample included in the SDK.

```
using Toybox.Math;
var mX = [0];
var mY = [0];
var mZ = [0];
var mFilter;

// Constructor
function initialize() {
    // initialize FIR filter
    var options = {
        :coefficients => [ -0.0278f, 0.9444f, -0.0278f ],
        :gain => 0.001f
    };

    try {
        mFilter = new Math.FirFilter(options);
    }
    catch(e) {
        System.println(e.getErrorMessage());
    }
}

// Callback to receive accelerometer data
function accel_callback(sensorData) {
    mX = mFilter.apply(sensorData.accelerometerData.x);
    mY = sensorData.accelerometerData.y;
    mZ = sensorData.accelerometerData.z;
    onAccelData();
}
```

Since:

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>
- [**initialize**](#initialize-instance_function)(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })

    Constructor.


## 实例方法详情

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

Since:

API 级别 2.3.0

### **initialize(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })**

Constructor

Parameters:

- dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含筛选设置的 Dictionary。

- :coefficients — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        指定滤波器系数的 Float 值数组。也可以在此处使用引用 JSON Array 资源的 ResourceId。

- :gain — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        指定要应用于系数的乘数的一个 Float 值。


Since:

API 级别 2.3.0

Throws:

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    If the Dictionary does not have valid coefficients for filter or the :gain field is missing. Will also be thrown if an invalid JSON ResourceId is specified for coefficients instead of an array
