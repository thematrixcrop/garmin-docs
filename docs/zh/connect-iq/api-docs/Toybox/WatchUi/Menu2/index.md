---
title: "Class: Toybox.WatchUi.Menu2"
---
# 类：Toybox.WatchUi.Menu2

Inherits:

Toybox.WatchUi.View

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)


[show all](#)

## 概述

屏幕上菜单的表示。Menu2 是一种特殊的 View，类似于 [Toybox::WatchUi::Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)，用于向用户呈现选项列表。Menu2 提供的功能多于 [Toybox::WatchUi::Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)，例如图形标题、可动态更新的菜单项，以及复选框等其他菜单元素。

选择选项后，将调用已注册的 [onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function) 方法。虽然可以通过编程方式生成 Menu2，但通常应将其创建为资源。

使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 Menu2，该方法将 [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) 作为输入委托。

## 另见：

- [Toybox.WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

- [Toybox.WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


注意：

The look and feel of a Menu2 is device-specific.

Example:

以编程方式构建简单的 Menu2

```
using Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        var menu = new WatchUi.Menu2({:title=>"My Menu2"});
        var delegate;
        menu.addItem(
            new MenuItem(
                "Item 1 Label",
                "Item 1 subLabel",
                "itemOneId",
                {}
            )
        );
        menu.addItem(
            new MenuItem(
                "Item 2 Label",
                "Item 2 subLabel",
                "itemTwoId",
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

## 直接已知子类

[WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/), [WatchUi.CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/)

## 常量摘要

### DividerType

支持的设备的分隔符类型

Since:

API 级别 5.0.1

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DIVIDER\_TYPE\_DEFAULT | 0 |
API 级别 5.0.1

|

默认分隔符类型

|
| DIVIDER\_TYPE\_ICON | 1 |

API 级别 5.0.1

|

图标分隔线类型

|

## 实例方法摘要 [collapse](#)

- [**addItem**](#addItem-instance_function)(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)) as **Void**

    将 MenuItem 添加到 Menu2。

- [**deleteItem**](#deleteItem-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

    从 Menu2 中删除 MenuItem。

- [**findItemById**](#findItemById-instance_function)(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    在 Menu2 中按 ID 查找 MenuItem。

- [**getIcon**](#getIcon-instance_function)() as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    获取图标。检索此 Menu2 的图标。

- [**getItem**](#getItem-instance_function)(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) or **Null**

    从 Menu2 获取 MenuItem。

- [**initialize**](#initialize-instance_function)(options as { :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)

    Constructor.

- [**setDividerType**](#setDividerType-instance_function)(divider as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null**) as **Void**

    设置或更改所需的分隔线类型。

- [**setFocus**](#setFocus-instance_function)(focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**) as **Void**

    设置 Menu2 中 MenuItem 的焦点。

- [**setFooter**](#setFooter-instance_function)(footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置 Menu2 页脚。

- [**setIcon**](#setIcon-instance_function)(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**) as **Void**

    Set the icon Set the icon to display in the subscreen area when the focused MenuItem does not have an icon.

- [**setTheme**](#setTheme-instance_function)(theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**) as **Void**

    Set the theme.

- [**setTitle**](#setTitle-instance_function)(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置 Menu2 标题。

- [**updateItem**](#updateItem-instance_function)(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/), index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    更新 Menu2 中的 MenuItem。


## 实例方法详情

### **addItem(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/))** as **Void**

将 MenuItem 添加到 Menu2。

Parameters:

- item — ([WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)) —

    The MenuItem to add to the Menu2

- 不能是 [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)



Since:

API 级别 3.0.0

Throws:

- ([WatchUi.InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/)) —

    Thrown if item is a [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 item 不是有效类型，则抛出


### **deleteItem(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) or **Null**

从 Menu2 中删除 MenuItem。

Parameters:

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The index of the [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) that should be deleted from the Menu2.


Returns:

- [Toybox::Lang::Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) 如果项目存在，则为 `true`；如果指定索引超出菜单项数组的范围，则为 `null`。


Since:

API 级别 3.0.0

### **findItemById(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

在 Menu2 中按 ID 查找 MenuItem。

Parameters:

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The identifier for which to search


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    The index of the [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) assigned the supplied identifier

- 未找到时为 \-1



Since:

API 级别 3.0.0

### **getIcon()** as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

获取图标

Retrieve the icon for this Menu2.

:::details 支持的设备

-   Descent™ G1 / G1 Solar
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® E 40mm
-   Instinct® E 45mm

:::

Returns:

- [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) —

    图标


Since:

API 级别 3.4.0

### **getItem(index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) or **Null**

从 Menu2 获取 MenuItem。

Parameters:

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The index of the [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) to get


Returns:

- [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)

Since:

API 级别 3.0.0

### **initialize(options as { :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)**

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

        应具有初始焦点的 [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 的索引。

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The icon to display in the subscreen area when the focused MenuItem does not have an icon.

- :theme — ([WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)) —

        菜单主题；传入 `null` 表示不使用主题。默认为 MENU_THEME_DEFAULT。

- :dividerType — ([Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)) —

        The divider type, Defaults to DIVIDER\_TYPE\_DEFAULT.


另见：

- [Toybox.WatchUi.Menu2.setDividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#setDividerType-instance_function)


Since:

API 级别 3.0.0

### **setDividerType(divider as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null**)** as **Void**

设置或更改所需的分隔线类型。

如果设置为 [Menu2.DIVIDER\_TYPE\_ICON](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)。

对于 [IconMenuItem](/connect-iq/api-docs/Toybox/WatchUi/IconMenuItem/) 和 [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)，如果项目采用 [MenuItem.MENU\_ITEM\_LABEL\_ALIGN\_LEFT](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/#Alignment-module) 或 `default` 对齐，图标和复选框将渲染在分隔线左侧。

对于 [ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/)，仅当项目采用 [MenuItem.MENU\_ITEM\_LABEL\_ALIGN\_LEFT](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/#Alignment-module) 对齐时，切换图标才会渲染在分隔线左侧。

[Menu2.DIVIDER\_TYPE\_DEFAULT](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) 对于支持分隔符的设备，如果未设置或传入 `null`，则使用该值。

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

- (WatchUi.InvalidValueException) —

    如果 divider 不是有效值，则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 divider 不是有效类型，则抛出。


### **setFocus(focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**)** as **Void**

设置 Menu2 中 MenuItem 的焦点。

Parameters:

- focus — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The index of the [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) that should have focus


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if focus is not a valid type


### **setFooter(footer as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置 Menu2 页脚。

Parameters:

- footer — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

    The menu footer text, `null`, a string ResourceId, or a Drawable


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if footer is not a valid type


### **setIcon(icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or **Null**)** as **Void**

设置图标

Set the icon to display in the subscreen area when the focused MenuItem does not have an icon. If this menu does not have an icon, the app icon will be shown instead.

Parameters:

- icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

    图标


:::details 支持的设备

-   Descent™ G1 / G1 Solar
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® E 40mm
-   Instinct® E 45mm

:::

Since:

API 级别 3.4.0

### **setTheme(theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**)** as **Void**

Set the theme

Parameters:

- theme — ([WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)) —

    The theme for this menu.


:::details 支持的设备

-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   fēnix® 8 43mm
-   fēnix® 8 47mm / 51mm / tactix® 8 47mm / 51mm / quatix® 8 47mm / 51mm
-   fēnix® 8 Pro 47mm / 51mm / MicroLED / quatix® 8 Pro 47mm / 51mm
-   fēnix® 9 43mm
-   fēnix® 9 47mm / 51mm
-   fēnix® 9 Pro 43mm
-   fēnix® 9 Pro 47mm
-   fēnix® 9 Pro 51mm
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 965
-   Forerunner® 970
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® Crossover AMOLED
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 4.1.8

### **setTitle(title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置 Menu2 标题。

Parameters:

- title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

    The menu title text, `null`, a string ResourceId, or a Drawable


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if title is not a valid type


### **updateItem(item as [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/), index as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

更新 Menu2 中的 MenuItem。

Parameters:

- item — ([WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)) —

    The MenuItem to update

- index — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The index of the MenuItem to update


Since:

API 级别 3.0.0
