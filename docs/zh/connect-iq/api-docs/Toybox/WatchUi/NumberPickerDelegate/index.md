---
title: "Class: Toybox.WatchUi.NumberPickerDelegate"
---
# Class: Toybox.WatchUi.NumberPickerDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/)


[show all](#)

## 概述

NumberPickerDelegate responds to a NumberPicker selection.

This class should be extended to handle the specified number.

**此项已弃用**

This class may be removed after System 3.

## 另见：

- [Toybox.WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/)


Example:

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

- [**onNumberPicked**](#onNumberPicked-instance_function)(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    A number was entered in a NumberPicker.


## 实例方法详情

### **onNumberPicked(value as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) or [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

A number was entered in a NumberPicker.

This method is called when a number has been specified by a NumberPicker, and receives the numeric value as an argument.

Parameters:

- value — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/), [Time.Duration](/connect-iq/api-docs/Toybox/Time/Duration/)) —

    The entered number (type dependent upon the NumberPicker mode)


Since:

API 级别 1.0.0
