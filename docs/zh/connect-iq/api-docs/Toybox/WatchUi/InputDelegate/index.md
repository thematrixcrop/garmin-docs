---
title: "Class: Toybox.WatchUi.InputDelegate"
---
# Class: Toybox.WatchUi.InputDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


[show all](#)

## 概述

InputDelegate handles basic input events.

There are four types of basic inputs InputDelegate can handle:

- Key, represented by [KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)

- Touch, represented by [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)

- Swipe, represented by [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)

- Selectable, represented by [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


This class is the base class for [BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), which goes beyond simple key and screen-based input.

## 另见：

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class MyInputDelegate extends WatchUi.InputDelegate {
    function onKey(keyEvent) {
        System.println(keyEvent.getKey());         // e.g. KEY_MENU = 7
        return true;
    }

    function onTap(clickEvent) {
        System.println(clickEvent.getType());      // e.g. CLICK_TYPE_TAP = 0
        return true;
    }

    function onSwipe(swipeEvent) {
        System.println(swipeEvent.getDirection()); // e.g. SWIPE_DOWN = 2
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


## 直接已知子类

[WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)

## 实例方法摘要 [collapse](#)

- [**onDrag**](#onDrag-instance_function)(dragEvent as [WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏拖动事件。

- [**onFlick**](#onFlick-instance_function)(flickEvent as [WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏快速滑动事件。

- [**onHold**](#onHold-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏按住事件。

- [**onKey**](#onKey-instance_function)(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已按下并释放物理按钮。

- [**onKeyPressed**](#onKeyPressed-instance_function)(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已按下物理按钮。

- [**onKeyReleased**](#onKeyReleased-instance_function)(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已释放物理按钮。

- [**onRelease**](#onRelease-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏释放事件。

- [**onSelectable**](#onSelectable-instance_function)(selectableEvent as [WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    The state of a [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) has changed.

- [**onSwipe**](#onSwipe-instance_function)(swipeEvent as [WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏滑动事件。

- [**onTap**](#onTap-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发生了一次屏幕点击事件。


## 实例方法详情

### **onDrag(dragEvent as [WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏拖动事件。

This is sent when the touch screen is dragged.

Parameters:

- dragEvent — ([WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/)) —

    The drag event that has occurred


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 550
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/)


Since:

API 级别 3.3.0

### **onFlick(flickEvent as [WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏快速滑动事件。

This is sent when the touch screen is flicked.

Parameters:

- flickEvent — ([WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)) —

    The flick event that has occurred


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 7 / quatix® 7
-   fēnix® 7 Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7 Pro
-   fēnix® 7S Pro
-   fēnix® 7S
-   fēnix® 7X / tactix® 7 / quatix® 7X Solar / Enduro™ 2
-   fēnix® 7X Pro - Solar Edition (no Wi-Fi)
-   fēnix® 7X Pro
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 8 Solar 47mm
-   fēnix® 8 Solar 51mm / tactix® 8 Solar 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® 9 Pro Solar 47mm
-   fēnix® 9 Pro Solar 51mm
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® H1 / H1i Plus
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Rey™
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Mercedes-Benz® Collection
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® Sq
-   Venu® Sq. Music Edition
-   Venu® X1
-   Venu®
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)


Since:

API 级别 3.3.0

### **onHold(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏按住事件。

This is sent when the touch screen is touched and not released.

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    已发生的点击事件


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


Since:

API 级别 1.0.0

### **onKey(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已按下并释放物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

Parameters:

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    发生的按键事件。


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


Since:

API 级别 1.0.0

### **onKeyPressed(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已按下物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

Parameters:

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    The key event that occurred.


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


Since:

API 级别 1.1.2

### **onKeyReleased(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已释放物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

Parameters:

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    发生的按键事件。


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


Since:

API 级别 1.1.2

### **onRelease(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏释放事件。

This is only sent after an [onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function) event, once the hold on the touch screen is released.

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    已发生的点击事件


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


Since:

API 级别 1.0.0

### **onSelectable(selectableEvent as [WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

The state of a [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) has changed.

Parameters:

- selectableEvent — ([WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)) —

    The selectable event containing the information about the Selectable whose state has changed


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


Since:

API 级别 2.1.0

### **onSwipe(swipeEvent as [WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏滑动事件。

This is sent when the touch screen is swiped.

Parameters:

- swipeEvent — ([WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)) —

    The swipe event that has occurred


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)


Since:

API 级别 1.0.0

### **onTap(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发生了一次屏幕点击事件。

This is sent when the touch screen is tapped (a quick touch and release).

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    发生的点击事件


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


Since:

API 级别 1.0.0
