---
title: "类：Toybox.WatchUi.Menu2InputDelegate"
---
# 类：Toybox.WatchUi.Menu2InputDelegate

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)


[show all](#)

## 概述

Menu2InputDelegate 响应 Menu2 选择。

应扩展此类以处理选中的 Menu2 项。

## 另见：

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)


示例：

```
using Toybox.WatchUi;
using Toybox.System;

class MyMenu2InputDelegate extends WatchUi.Menu2InputDelegate {
    function initialize() {
        Menu2InputDelegate.initialize();
    }

    function onSelect(item) {
        System.println(item.getId());
    }
}
```

起始版本：

API 级别 3.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


:::details 支持的设备

-   Approach® S50
-   Approach® S62
-   Approach® S70 42mm
-   Approach® S70 47mm
-   Captain Marvel
-   D2™ Air X10
-   D2™ Air
-   D2™ Charlie
-   D2™ Delta PX
-   D2™ Delta S
-   D2™ Delta
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Darth Vader™
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk1
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1030 / Bontrager
-   Edge® 1030 Plus
-   Edge® 1030
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 520 Plus
-   Edge® 530
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 820 / Explore
-   Edge® 830
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® Explore
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
-   fēnix® 5 / quatix® 5
-   fēnix® 5 Plus
-   fēnix® 5S Plus
-   fēnix® 5S
-   fēnix® 5X / tactix® Charlie
-   fēnix® 5X Plus
-   fēnix® 6 / 6 Solar / 6 Dual Power
-   fēnix® 6 Pro / 6 Sapphire / 6 Pro Solar / 6 Pro Dual Power / quatix® 6
-   fēnix® 6S / 6S Solar / 6S Dual Power
-   fēnix® 6S Pro / 6S Sapphire / 6S Pro Solar / 6S Pro Dual Power
-   fēnix® 6X Pro / 6X Sapphire / 6X Pro Solar / tactix® Delta Sapphire / Delta Solar / Delta Solar - Ballistics Edition / quatix® 6X / 6X Solar / 6X Dual Power
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
-   fēnix® Chronos
-   fēnix® E
-   First Avenger
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 245 Music
-   Forerunner® 245
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 645 Music
-   Forerunner® 645
-   Forerunner® 70
-   Forerunner® 745
-   Forerunner® 935
-   Forerunner® 945 LTE
-   Forerunner® 945
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
-   GPSMAP® 66s / 66i / 66sr / 66st
-   GPSMAP® 67 / 67i
-   GPSMAP® 86s / 86sc / 86i / 86sci
-   GPSMAP® H1 / H1i Plus
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® Crossover
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
-   Montana® 7 Series
-   Oregon® 7 Series
-   Rey™
-   Rino® 7 Series
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
-   vívoactive® 3 Mercedes-Benz® Collection
-   vívoactive® 3 Music LTE
-   vívoactive® 3 Music
-   vívoactive® 3
-   vívoactive® 4
-   vívoactive® 4S
-   vívoactive® 5
-   vívoactive® 6

:::

## 实例方法摘要 [collapse](#)

- [**onBack**](#onBack-instance_function)() as **Void**

    按下了 Menu2 返回键。

- [**onDone**](#onDone-instance_function)() as **Void**

    选择了 Menu2 完成项。

- [**onFooter**](#onFooter-instance_function)() as **Void**

    已选择 CustomMenu 页脚。

- [**onNextPage**](#onNextPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Next* *Page* 行为。

- [**onPreviousPage**](#onPreviousPage-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    表示 *Previous* *Page* 行为。

- [**onSelect**](#onSelect-instance_function)(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)) as **Void**

    已选择一个 Menu2 MenuItem。

- [**onTitle**](#onTitle-instance_function)() as **Void**

    已选择 CustomMenu 标题。

- [**onWrap**](#onWrap-instance_function)(key as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Menu2 正在准备换行。


## 实例方法详情

### **onBack()** as **Void**

按下了 Menu2 返回键。如果未重写此方法，它将弹出活动视图。

起始版本：

API 级别 3.0.0

### **onDone()** as **Void**

选择了 Menu2 完成项。此方法仅由 [CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/) 触发。如果未重写此方法，它将弹出活动视图。

起始版本：

API 级别 3.0.0

### **onFooter()** as **Void**

已选择 CustomMenu 页脚。

在支持触摸输入的产品上，用户选择 CustomMenu 的页脚区域时会触发此方法。

注意：

在 ConnectIQ API 版本 5.1.0 之前，此函数仅在 [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/) 上调用。现在它用于所有 [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 类型。

起始版本：

API 级别 3.0.0

### **onNextPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Next* *Page* 行为。

通常在菜单底部收到向下按钮（[KEY\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#KEY_DOWN-const)）或 [SWIPE\_UP](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_UP-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 输入时触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 5.1.0

### **onPreviousPage()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

表示 *Previous* *Page* 行为。

通常在菜单顶部收到向上按钮（[KEY\_UP](/connect-iq/api-docs/Toybox/WatchUi/#KEY_UP-const)）或 [SWIPE\_DOWN](/connect-iq/api-docs/Toybox/WatchUi/#SWIPE_DOWN-const) [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/) 输入时触发。

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    若已处理则返回 `true`，否则返回 `false`


起始版本：

API 级别 5.1.0

### **onSelect(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/))** as **Void**

已选择一个 Menu2 MenuItem。

参数：

- item — ([WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)) —

    选定的 MenuItem。


起始版本：

API 级别 3.0.0

### **onTitle()** as **Void**

已选择 CustomMenu 标题。

在支持触摸输入的产品上，用户选择 CustomMenu 的标题区域时会触发此方法。

注意：

在 ConnectIQ API 版本 5.1.0 之前，此函数仅在 [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/) 上调用。现在它用于所有 [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 类型。

起始版本：

API 级别 3.0.0

### **onWrap(key as [WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Menu2 正在准备换行。

当用户尝试在菜单末端继续导航时，基于按钮的产品会触发此方法。如果此方法返回 `false`，列表将不会循环到另一端。如果不重写此方法，它将返回 `true`，允许菜单循环。

参数：

- key — ([WatchUi.Key](/connect-iq/api-docs/Toybox/WatchUi/#Key-module)) —

    触发菜单循环的 [WatchUi.KEY\_\*](/connect-iq/api-docs/Toybox/WatchUi/#KEY_POWER-const) 枚举中的键。


返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果允许换行，则为 `true`，否则为 `false`


起始版本：

API 级别 3.0.0
