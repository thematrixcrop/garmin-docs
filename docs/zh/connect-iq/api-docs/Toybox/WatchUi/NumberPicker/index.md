---
title: "Class: Toybox.WatchUi.NumberPicker"
---
# Class: Toybox.WatchUi.NumberPicker

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/)


[show all](#)

## 概述

A representation of an on-screen number picker.

NumberPicker 是一种特殊的 View，用于在应用中指定数值。使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 NumberPicker，并将 [NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/) 作为输入委托。

The NumberPicker class is limited to the eight specific modes described by the [WatchUi.NUMBER\_PICKER\_\*](/connect-iq/api-docs/Toybox/WatchUi/#NUMBER_PICKER_DISTANCE-const) types enum. There are set minimum and maximum values enforced by the product for each mode, and the initial value of the NumberPicker will be adjusted to fall within these bounds.

**此项已弃用**

此类可能会在 System 3 之后移除。

## 另见：

- [Toybox.WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/)


注意：

The look and feel of a number picker is device-specific.

Example:

Display a distance picker when the Menu button is pressed

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

Since:

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

Constructor

Parameters:

- mode — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The [NUMBER\_PICKER\_\*](/connect-iq/api-docs/Toybox/WatchUi/#NUMBER_PICKER_DISTANCE-const) value for the desired mode

- initialValue — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The initial value for the NumberPicker, dependent on the specified mode


Since:

API 级别 1.0.0
