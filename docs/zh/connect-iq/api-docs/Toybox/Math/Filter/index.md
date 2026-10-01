---
title: "类：Toybox.Math.Filter"
---
# 类：Toybox.Math.Filter

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Math.Filter](/connect-iq/api-docs/Toybox/Math/Filter/)


[显示全部](#)

## 概述

这是筛选器的基类。

过滤器是用于移除信号或数据集中的某些不需要的成分或特征的设备或过程。有关过滤器的更多详细示例，请参阅 [FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/) 和 [IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/) 定义。

## 另见：

- [滤波器](https://en.wikipedia.org/wiki/Filter_(signal_processing)#Filters_for_removing_noise_from_data)


注意：

如果调用此方法的基础 Filter 类版本，将引发异常。

示例：

此项展示了如何对一组数据使用筛选器的方法

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

起始版本：

API 级别 2.3.0

## 直接已知子类

[Math.FirFilter](/connect-iq/api-docs/Toybox/Math/FirFilter/), [Math.IirFilter](/connect-iq/api-docs/Toybox/Math/IirFilter/)

## 实例方法摘要 [collapse](#)

- [**apply**](#apply-instance_function)(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

    将过滤器应用于样本数组。

- [**initialize**](#initialize-instance_function)(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))

    构造函数。


## 实例方法详情

### **apply(data as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type)\>)** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)\>

将过滤器应用于样本数组。

注意：

如果调用此方法的基础 Filter 类版本，将引发 Exception。

参数：

- data —

    要应用滤波器的样本数组


返回：

- 已应用滤波器的样本数组。


起始版本：

API 级别 2.3.0

抛出：

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    如果在基类 Filter 对象上调用


### **initialize(dictionary as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/))**

构造函数

参数：

- dictionary — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    未使用。为保持兼容性而保留参数计数


起始版本：

API 级别 2.3.0
