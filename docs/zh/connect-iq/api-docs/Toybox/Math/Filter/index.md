---
title: "Class: Toybox.Math.Filter"
---
# 类：Toybox.Math.Filter

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)


[show all](#)

## 概述

This is the base class for filters.

过滤器是用于移除信号或数据集中的某些不需要的成分或特征的设备或过程。有关过滤器的更多详细示例，请参阅 [FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) 和 [IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) 定义。

## 另见：

- [Filters](https://en.wikipedia.org/wiki/Filter_(signal_processing)#Filters_for_removing_noise_from_data)


注意：

如果调用此方法的基础 Filter 类版本，将引发异常。

Example:

This shows how a filter's method can be used on a set of data

```
using Toybox.Math;
    var exampleFilter;
    var interestingCoefficients;
    var importantGain;
    var messyData;
    var filteredData;

    // Constructor
    function initialize() {

        // initialize filter
        var options = {
            :coefficients => [interestingCoefficients],
            :gain => importantGain
        };

        try {
            exampleFilter = new Math.FirFilter(options);
        }
        catch(e) {
            System.println(e.getErrorMessage());
        }
    }

    // apply filter
    function exampleApplyFilter(messyData) {
        filteredData = exampleFilter.apply(messyData);
        return filteredData;
    }
```

Since:

API 级别 2.3.0

## 直接已知子类

[Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/), [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/)

## 实例方法摘要 [collapse](#)

- [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

    将过滤器应用于样本数组。

- [**initialize**](#initialize-instance_function)(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))

    Constructor.


## 实例方法详情

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

将过滤器应用于样本数组。

注意：

如果调用此方法的基础 Filter 类版本，将引发 Exception。

Parameters:

- data —

    要应用滤波器的样本数组


Returns:

- 已应用滤波器的样本数组。


Since:

API 级别 2.3.0

Throws:

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    如果在基类 Filter 对象上调用


### **initialize(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))**

Constructor

Parameters:

- dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Unused. Preserves argument count for compatibility


Since:

API 级别 2.3.0
