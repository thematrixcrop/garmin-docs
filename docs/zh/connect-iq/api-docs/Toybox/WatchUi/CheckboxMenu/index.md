---
title: "Class: Toybox.WatchUi.CheckboxMenu"
---
# Class: Toybox.WatchUi.CheckboxMenu

Inherits:

Toybox.WatchUi.Menu2

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/)


[show all](#)

## 概述

A representation of a check box menu.

A CheckboxMenu is a specialized [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) View that presents the user with a list of check box options. After an option is selected, the registered [onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function) method will be called. While a CheckboxMenu can be generated programmatically, they should generally be created as a resource.

A CheckboxMenu is pushed using [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function), which provides a [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) as the input delegate.

## 另见：

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)

- [Toybox.WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


注意：

The look and feel of a CheckboxMenu is device-specific.

Example:

Build a simple CheckboxMenu programmatically

```
using Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        var menu = new WatchUi.CheckboxMenu({:title=>"My CheckboxMenu"});
        var delegate;
        menu.addItem(
            new CheckboxMenuItem(
                "Item 1 Label",
                "Item 1 subLabel",
                "itemOneId",
                true,
                {}
            )
        );
        menu.addItem(
            new CheckboxMenuItem(
                "Item 2 Label",
                "Item 2 subLabel",
                "itemTwoId",
                false,
                {}
            )
        );
        delegate = new MyMenu2Delegate(); // a WatchUi.Menu2InputDelegate
        WatchUi.pushView(menu, delegate, WatchUi.SLIDE_IMMEDIATE);
        return true;
    }
}
```

Since:

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

- [**addItem**](#addItem-instance_function)(item as [WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)) as **Void**

    将 CheckboxMenuItem 添加到 CheckboxMenu。

- [**initialize**](#initialize-instance_function)(options as { :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)

    Constructor.


## 实例方法详情

### **addItem(item as [WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/))** as **Void**

将 CheckboxMenuItem 添加到 CheckboxMenu。

Parameters:

- item — ([WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)) —

    The CheckboxMenuItem to add to the CheckboxMenu


Since:

API 级别 3.0.0

Throws:

- ([WatchUi.InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/)) —

    Thrown if item is not a \[Toybox::WatchUi::CheckboxMenuItem\]

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 item 不是有效类型，则抛出


### **initialize(options as { :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)**

Constructor

注意：

`:icon` 选项仅在支持子屏幕的 ConnectIQ 3.4.0 设备上使用。

注意：

`:theme` 选项仅用于支持菜单主题的 ConnectIQ 4.1.8 设备。

注意：

`:dividerType` 选项仅在支持分隔线的 ConnectIQ 5.0.1 设备上使用。

注意：

`:footer` 选项仅用于 ConnectIQ 5.1.0 设备。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- 可以为 `null`


- :title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        菜单标题。

- :footer — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        菜单页脚。

- :focus — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        应具有初始焦点的 [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/) 的索引。

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        the default icon for menu items

- :theme — ([WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)) —

        菜单主题；传入 `null` 表示不使用主题。默认为 MENU_THEME_DEFAULT。

- :dividerType — ([Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)) —

        The divider type, Defaults to DIVIDER\_TYPE\_DEFAULT or when `null` is passed as value.


另见：

- [Toybox.WatchUi.Menu2.setDividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#setDividerType-instance_function)


Since:

API 级别 3.0.0
