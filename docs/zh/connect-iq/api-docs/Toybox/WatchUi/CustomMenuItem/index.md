---
title: "Class: Toybox.WatchUi.CustomMenuItem"
---
# Class: Toybox.WatchUi.CustomMenuItem

Inherits:

Toybox.WatchUi.MenuItem

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)

- [Toybox.WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)


[show all](#)

## 概述

A representation of a custom item in a CustomMenu.

A CustomMenuItem is a element of a [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/) View that represents one of the items in the menu. When selected, the onSelect() delegate callback will be invoked. The selected state of the item may change when it is being selected. This state can be evaluated using the isSelected() method and can be used to control the look of a selected item.

A CustomMenuItem can be added to a CustomMenu using the [addItem()](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/#addItem-instance_function) method.

## 另见：

- [Toybox.WatchUi.CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/)

- [Toybox.WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)


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

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    CustomMenuItem 的绘制方法。

- [**getDividerIcon**](#getDividerIcon-instance_function)() as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    获取分隔图标。

- [**initialize**](#initialize-instance_function)(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, options as { :alignment as [MenuItem.Alignment](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/#Alignment-module), :drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :dividerIcon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) })

    Constructor.

- [**isFocused**](#isFocused-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取 CustomMenuItem 的焦点状态。

- [**isSelected**](#isSelected-instance_function)() as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    获取 CustomMenuItem 的选中状态。

- [**setDividerIcon**](#setDividerIcon-instance_function)(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**) as **Void**

    设置或更改菜单图标。

- [**setDrawable**](#setDrawable-instance_function)(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置 CustomMenuItem Drawable。


## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

CustomMenuItem 的绘制方法。

This is called when a menu item is rendering.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    The item's drawing context


Since:

API 级别 3.0.0

### **getDividerIcon()** as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

获取分隔图标。

:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
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

:::

Returns:

- [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) —

    图标


另见：

- [CustomMenuItem.setDividerIcon()](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#setDividerIcon-instance_function)


Since:

API 级别 5.0.1

### **initialize(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) or **Null**, options as { :alignment as [MenuItem.Alignment](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/#Alignment-module), :drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :dividerIcon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) })**

Constructor

注意：

`:icon` 选项仅在支持子屏幕的 ConnectIQ 3.4.0 设备上使用。

Parameters:

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The identifier for this item which is typically a [String](/connect-iq/api-docs/Toybox/Lang/String/)

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        A Drawable that draws the item. (required)

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        用于菜单项获得焦点时的子屏幕区域

- :dividerIcon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        icon for the divider area.


另见：

- [MenuItem.initialize()](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/#initialize-instance_function)

- [CustomMenuItem.setDividerIcon()](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#setDividerIcon-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `:drawable` option is not a [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or is `null`.


### **isFocused()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取 CustomMenuItem 的焦点状态。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    The current focus state of the CustomMenuItem


Since:

API 级别 3.0.0

### **isSelected()** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

获取 CustomMenuItem 的选中状态。

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    The current selected state of the CustomMenuItem


Since:

API 级别 3.0.0

### **setDividerIcon(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**)** as **Void**

设置或更改菜单图标。

If device support [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) and parent menu is set to [DIVIDER\_TYPE\_ICON](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module), `icon` (if not +null+) will be rendered on the left side of the divider.

Parameters:

- icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

    The Drawable or ResourceId used to render the icon for this item


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Enduro™ 3
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

:::

Since:

API 级别 5.0.1

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if icon is not a valid type.


### **setDrawable(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置 CustomMenuItem Drawable。

Parameters:

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

    A Drawable to render on top of the menu items, or `null`.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if `drawable` is not a [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or is `null`.
