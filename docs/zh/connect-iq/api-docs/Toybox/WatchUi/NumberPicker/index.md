---
title: "类：Toybox.WatchUi.NumberPicker"
---
# 类：Toybox.WatchUi.NumberPicker

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/)


[显示全部](#)

## 概述

屏幕上数字选择器的表示。

NumberPicker 是一种特殊的 View，用于在应用中指定数值。使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 NumberPicker，并将 [NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/) 作为输入委托。

NumberPicker 类仅限于 [WatchUi.NUMBER\_PICKER\_\*](/connect-iq/api-docs/Toybox/WatchUi/#NUMBER_PICKER_DISTANCE-const) types 枚举所描述的八种特定模式。产品会为每种模式强制设置最小值和最大值，并调整 NumberPicker 的初始值，使其处于这些边界范围内。

**此项已弃用**

此类可能会在 System 3 之后移除。

## 另见：

- [Toybox.WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/)


注意：

数字选择器的外观和交互方式因设备而异。

示例：

按下 Menu 按钮时显示距离选择器

```
using Toybox.WatchUi;

class MyNumberPickerDelegate extends WatchUi.NumberPickerDelegate {
    function initialize() {
        NumberPickerDelegate.initialize();
    }

    function onNumberPicked(value) {
        myValue = value; // e.g. 1000f
    }
}

class MyInputDelegate extends WatchUi.BehaviorDelegate {
    var myPicker;

    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        if (WatchUi has :NumberPicker) {
            myPicker = new WatchUi.NumberPicker(
                WatchUi.NUMBER_PICKER_DISTANCE,
                myValue
            );
            WatchUi.pushView(
                myPicker,
                new MyNumberPickerDelegate(),
                WatchUi.SLIDE_IMMEDIATE
            );
        }
        return true;
    }
}
```

起始版本：

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


:::details 支持的设备

-   Approach® S60
-   Approach® S62
-   D2™ Bravo Titanium
-   D2™ Bravo
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   Descent™ Mk1
-   epix™
-   fēnix® 3 / tactix® Bravo / quatix® 3
-   fēnix® 3 HR
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® Chronos
-   Forerunner® 230
-   Forerunner® 235
-   Forerunner® 630
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 735xt
-   Forerunner® 920XT
-   Forerunner® 935
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® HR
-   vívoactive®

:::

## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)(mode as [WatchUi.NumberPickerMode](/connect-iq/api-docs/Toybox/WatchUi/#NumberPickerMode-module), initialValue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))

    Constructor.


## 实例方法详情

### **initialize(mode as [WatchUi.NumberPickerMode](/connect-iq/api-docs/Toybox/WatchUi/#NumberPickerMode-module), initialValue as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))**

构造函数

参数：

- mode — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    所需模式的 [NUMBER\_PICKER\_\*](/connect-iq/api-docs/Toybox/WatchUi/#NUMBER_PICKER_DISTANCE-const) 值

- initialValue — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    NumberPicker 的初始值，取决于指定的模式


起始版本：

API 级别 1.0.0
