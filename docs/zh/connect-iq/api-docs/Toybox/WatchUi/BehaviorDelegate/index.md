---
title: "类：Toybox.WatchUi.BehaviorDelegate"
---
# 类：Toybox.WatchUi.BehaviorDelegate

继承：

Toybox.WatchUi.InputDelegate

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)


[显示全部](#)

## 概述

BehaviorDelegate 处理行为输入事件。

BehaviorDelegate 与 [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的区别在于，它作用于与设备无关的行为，例如“下一页”和“上一页”，而不是特定于设备的按键操作。例如，在触摸屏设备上，这些行为可能映射到向左滑动和向右滑动输入；而在非触摸屏设备上，这些行为可能映射到实体按键。

由于 BehaviorDelegate 扩展了 InputDelegate，因此它也可以处理基本输入。如果 BehaviorDelegate 为某个函数返回 `true`（表示输入已被使用），则不会调用与该行为对应的 InputDelegate 函数。

## 另见：

- [Toybox.WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)


示例：

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

起始版本：

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

    构造函数。

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

构造函数

起始版本：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 5.1.1

### **onBack()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Back* 行为。

通常由返回按钮（[KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const)）触发。

注意：

某些设备会将 [SWIPE\_RIGHT](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_RIGHT-const) [滑动事件](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 解释为 [KEY\_ESC](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ESC-const) 事件。在这些设备上，返回 `false` 将导致调用 [onKey()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKey-instance_function)，而不是 [onSwipe()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSwipe-instance_function)。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onMenu()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Menu* 行为。

通常由菜单按钮（[KEY\_MENU](/connect-iq/api-docs/Toybox/WatchUi/#KEY_MENU-const)）触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onNextMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Next* 行为。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onNextPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Next* *Page* 行为。

这通常由向下按钮（[KEY\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#KEY_DOWN-const)）或触摸屏上的 [SWIPE\_UP](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onPreviousMode()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Previous* *Mode* 行为。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onPreviousPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Previous* *Page* 行为。

通常由向上按钮（[KEY\_UP](/connect-iq/api-docs/Toybox/WatchUi/#KEY_UP-const)）或触摸屏上的 [SWIPE\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_DOWN-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.0.0

### **onSelect()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Selection* 行为。

通常由开始/确认按钮（[KEY\_ENTER](/connect-iq/api-docs/Toybox/WatchUi/#KEY_ENTER-const)）或触摸屏上的 [CLICK\_TYPE\_TAP](/connect-iq/api-docs/Toybox/WatchUi/#CLICK_TYPE_TAP-const) [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/) 触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 1.2.0
