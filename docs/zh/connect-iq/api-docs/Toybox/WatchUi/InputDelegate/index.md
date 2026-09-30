---
title: "类：Toybox.WatchUi.InputDelegate"
---
# 类：Toybox.WatchUi.InputDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


[显示全部](#)

## 概述

InputDelegate 处理基本输入事件。

InputDelegate 可以处理四种基本输入类型：

- 由 [KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/) 表示的键

- 触摸，由 [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/) 表示

- 由 [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 表示的滑动

- 由 [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/) 表示的可选择项


此类是 [BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) 的基类，提供了超越简单按键和基于屏幕输入的功能。

## 另见：

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)


示例：

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

起始版本：

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

    [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 的状态已更改。

- [**onSwipe**](#onSwipe-instance_function)(swipeEvent as [WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    已发生触摸屏滑动事件。

- [**onTap**](#onTap-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发生了一次屏幕点击事件。


## 实例方法详情

### **onDrag(dragEvent as [WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏拖动事件。

触摸屏被拖动时会发送此事件。

参数：

- dragEvent — ([WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/)) —

    已发生的拖动事件


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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/)


起始版本：

API 级别 3.3.0

### **onFlick(flickEvent as [WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏快速滑动事件。

触摸屏被快速滑动时会发送此事件。

参数：

- flickEvent — ([WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)) —

    已发生的轻扫事件


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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/)


起始版本：

API 级别 3.3.0

### **onHold(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏按住事件。

触摸屏被触摸但未释放时会发送此事件。

参数：

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    已发生的点击事件


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


起始版本：

API 级别 1.0.0

### **onKey(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已按下并释放物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

参数：

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    发生的按键事件。


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


起始版本：

API 级别 1.0.0

### **onKeyPressed(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已按下物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

参数：

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    已发生的按键事件。


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


起始版本：

API 级别 1.1.2

### **onKeyReleased(keyEvent as [WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已释放物理按钮。

要确定按下了哪个键，请使用 [KeyEvent.getKey()](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/#getKey-instance_function) 获取按钮的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举值。

参数：

- keyEvent — ([WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)) —

    发生的按键事件。


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/)


起始版本：

API 级别 1.1.2

### **onRelease(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏释放事件。

只有在 [onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function) 事件之后、触摸屏上的按压被释放后，才会发送此事件。

参数：

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    已发生的点击事件


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


起始版本：

API 级别 1.0.0

### **onSelectable(selectableEvent as [WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

[Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 的状态已更改。

参数：

- selectableEvent — ([WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)) —

    包含状态已更改的 Selectable 信息的可选择事件


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)

- [Toybox.WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)


起始版本：

API 级别 2.1.0

### **onSwipe(swipeEvent as [WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

已发生触摸屏滑动事件。

触摸屏被滑动时会发送此事件。

参数：

- swipeEvent — ([WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)) —

    已发生的滑动事件


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/)


起始版本：

API 级别 1.0.0

### **onTap(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发生了一次屏幕点击事件。

触摸屏被点击时会发送此事件（快速触摸并释放）。

参数：

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    发生的点击事件


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


另见：

- [Toybox.WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)


起始版本：

API 级别 1.0.0
