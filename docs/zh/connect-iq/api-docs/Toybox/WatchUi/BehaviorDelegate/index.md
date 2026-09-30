---
title: "Class: Toybox.WatchUi.BehaviorDelegate"
---
# Class: Toybox.WatchUi.BehaviorDelegate

Inherits:

Toybox.WatchUi.InputDelegate

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)


[show all](#)

## 概述

BehaviorDelegate handles behavior input events.

A BehaviorDelegate differs from an [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) in that it acts upon device-independent behaviors, such as "next page" and "previous page" instead of device-specific button presses. For example, these behaviors might be mapped to swipe left and swipe right inputs on touch screen devices, while on non-touch screen devices these behaviors might be mapped to physical buttons.

Since BehaviorDelegate extends InputDelegate, so it can also act on basic inputs as well. If a BehaviorDelegate returns `true` for a function (indicating the input was used) then the InputDelegate function that corresponds to the behavior will not be called.

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


Example:

```
using Toybox.System;
using Toybox.WatchUi;

class MyBehaviorDelegate extends BehaviorDelegate {
    // Detect Menu behavior
    function onMenu() {
        System.println("Menu behavior triggered");
        return false; // allow InputDelegate function to be called
    }
    // Detect Menu button input
    function onKey(keyEvent) {
        System.println(keyEvent.getKey()); // e.g. KEY_MENU = 7
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


## 实例方法摘要 [collapse](#)

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**onActionMenu**](#onActionMenu-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Action* *Menu* 行为。

- [**onBack**](#onBack-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Back* 行为。

- [**onMenu**](#onMenu-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Menu* 行为。

- [**onNextMode**](#onNextMode-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Next* 行为。

- [**onNextPage**](#onNextPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Next* *Page* 行为。

- [**onPreviousMode**](#onPreviousMode-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Previous* *Mode* 行为。

- [**onPreviousPage**](#onPreviousPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Previous* *Page* 行为。

- [**onSelect**](#onSelect-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Selection* 行为。


## 实例方法详情

### **initialize()**

Constructor

Since:

API 级别 1.0.0

### **onActionMenu()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Action* *Menu* 行为。

按下操作菜单时会触发此事件。调用 [WatchUi.showActionMenu](/connect-iq/api-docs/Toybox/WatchUi/#showActionMenu-instance_function) 可推送操作菜单。

:::details 支持的设备

-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 5.1.1

### **onBack()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Back* 行为。

This is typically triggered by the back button ([KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const)).

注意：

Some devices interpret [SWIPE\_RIGHT](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_RIGHT-const) [SwipeEvents](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) as [KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const) events. On these devices, returning `false` will cause [onKey()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKey-instance_function) to be called rather than [onSwipe()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSwipe-instance_function).

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onMenu()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Menu* 行为。

This is typically triggered by the menu button ([KEY\_MENU](/connect-iq/api-docs/Toybox/WatchUi/#KEY_MENU-const)).

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onNextMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Next* 行为。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onNextPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Next* *Page* 行为。

这通常由向下按钮（[KEY\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#KEY_DOWN-const)）或触摸屏上的 [SWIPE\_UP](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 触发。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onPreviousMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Previous* *Mode* 行为。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onPreviousPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Previous* *Page* 行为。

This is typically triggered by the up button ([KEY\_UP](/connect-iq/api-docs/Toybox/WatchUi/#KEY_UP-const))) or by a [SWIPE\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_DOWN-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) on a touch screen.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.0.0

### **onSelect()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Selection* 行为。

This is typically triggered by the Start/Enter button ([KEY\_ENTER](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ENTER-const)) or by a [CLICK\_TYPE\_TAP](/connect-iq/api-docs/Toybox/WatchUi/#CLICK_TYPE_TAP-const) [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/) on a touch screen.

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


Since:

API 级别 1.2.0
