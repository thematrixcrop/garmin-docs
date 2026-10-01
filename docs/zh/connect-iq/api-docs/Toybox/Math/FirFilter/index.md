---
title: "类：Toybox.Math.FirFilter"
---
# 类：Toybox.Math.FirFilter

继承：

Toybox.Math.Filter

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)

- [Toybox.Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/)


[显示全部](#)

## 概述

有限冲激响应（FIR）过滤器实现。

## 另见：

- [FIR 滤波器](https://en.wikipedia.org/wiki/Finite_impulse_response)


示例：

显示如何为加速度计数据筛选器的使用实现构造函数。内容借鉴了 SDK 中包含的 PitchCounter 示例。

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

起始版本：

API 级别 2.3.0

## 实例方法摘要 [collapse](#)

- [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>
- [**initialize**](#initialize-instance_function)(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })

    构造函数。


## 实例方法详情

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

起始版本：

API 级别 2.3.0

### **initialize(dictionary as { :coefficients as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\> or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :gain as [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) })**

构造函数

参数：

- dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含筛选设置的 Dictionary。

- :coefficients — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        指定滤波器系数的 Float 值数组。也可以在此处使用引用 JSON Array 资源的 ResourceId。

- :gain — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

        指定要应用于系数的乘数的一个 Float 值。


起始版本：

API 级别 2.3.0

抛出：

- ([Lang.InvalidOptionsException](/connect-iq/api-docs/Toybox/Lang/InvalidOptionsException/)) —

    如果 Dictionary 不包含有效的筛选器系数，或缺少 :gain 字段。如果为 coefficients 指定的不是数组的无效 JSON ResourceId，也会抛出此异常
