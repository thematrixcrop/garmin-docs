---
title: "Class: Toybox.WatchUi.CustomMenu"
---
# Class: Toybox.WatchUi.CustomMenu

Inherits:

Toybox.WatchUi.Menu2

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/)


[show all](#)

## 概述

A representation of a custom menu.

A CustomMenu is a specialized [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) View that presents the user with a list of custom rendered options. After an option is selected, the registered [onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function) method will be called.

A CustomMenu is pushed using [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function), which provides a [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) as the input delegate.

## 另见：

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)

- [Toybox.WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


Example:

Build a CustomMenu programmatically

```
using Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() {
        var menu = new WatchUi.CustomMenu(80, Graphics.COLOR_BLACK, {});

        menu.addItem(
            new MyCustomMenuItem( // a WatchUi.CustomMenuItem
                :itemOne,
                {}
            )
        );
        menu.addItem(
            new MyCustomMenuItem( // a WatchUi.CustomMenuItem
                :itemTwo,
                {}
            )
        );
        var delegate = new MyMenu2Delegate(); // a WatchUi.Menu2InputDelegate
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

- [**addItem**](#addItem-instance_function)(item as [WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)) as **Void**

    将 CustomMenuItem 添加到 CustomMenu。

- [**drawFooter**](#drawFooter-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 页脚。

- [**drawForeground**](#drawForeground-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 前景。

- [**drawTitle**](#drawTitle-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 标题。

- [**initialize**](#initialize-instance_function)(itemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), options as { :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :focusItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :title as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :foreground as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :titleItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :footerItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)

    Constructor.

- [**setBackgroundColor**](#setBackgroundColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置背景颜色。

- [**setDividerType**](#setDividerType-instance_function)(divider as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null**) as **Void**

    设置或更改所需的分隔线类型。

- [**setFooter**](#setFooter-instance_function)(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置页脚 Drawable。

- [**setForeground**](#setForeground-instance_function)(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置前景 Drawable。

- [**setTitle**](#setTitle-instance_function)(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**) as **Void**

    设置标题 Drawable。


## 实例方法详情

### **addItem(item as [WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/))** as **Void**

将 CustomMenuItem 添加到 CustomMenu。

Parameters:

- item — ([WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)) —

    The CustomMenuItem to add to the CustomMenu. Other MenuItem variants cannot be added to a Custom Menu.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 item 不是 [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)，则抛出。

- ([WatchUi.InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/)) —

    如果 item 不是 [CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)，则抛出。


### **drawFooter(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 页脚。

This is called to render the menu footer region.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


Since:

API 级别 3.0.0

### **drawForeground(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 前景。

This is called after a menu's items and title have been rendered. It can be used to draw overlay content for the menu.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


Since:

API 级别 3.0.0

### **drawTitle(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 标题。

This is called to render the menu title region.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


Since:

API 级别 3.0.0

### **initialize(itemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), options as { :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :focusItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :title as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :foreground as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :titleItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :footerItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)**

Constructor

注意：

The options `:titleItemHeight` and `:footerItemHeight` are only supported with ConnectIQ 4.0.0 and later.

注意：

`:icon` 选项仅在支持子屏幕的 ConnectIQ 3.4.0 设备上使用。

注意：

The `:theme` option is only used on ConnectIQ 4.1.8 devices with menu theme support. The background color will not be used if themes are supported and the theme is non-null.

注意：

`:dividerType` 选项仅在支持分隔线的 ConnectIQ 5.0.1 设备上使用。

Parameters:

- itemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The pixel height of menu items rendered by this menu.

- backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    The color that will be used to fill the background of the menu.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含选项的 Dictionary。可以为 `null`

- :focus — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The index of the [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/) that should have initial focus. (optional)

- :focusItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The pixel height of the center menu item of this menu. This option is ignored on products with touch screens. (optional)

- :title — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        A Drawable that will render the title area. (optional)

- :footer — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        A Drawable that will render the area after the final item in the menu.(optional)

- :foreground — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        A Drawable to render on top of menu items. (optional)

- :titleItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The pixel height of the header menu item of this menu (optional)

- :footerItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        The pixel height of the footer menu item of this menu. (optional)

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        the default icon for the menu incase menuitem do not have it populated

- :theme — ([WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)) —

        菜单主题；传入 `null` 表示不使用主题。默认为 MENU_THEME_DEFAULT。

- :dividerType — ([Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)) —

        The divider type, if `null` is passed as value, divider will be disabled (non-visible). Defaults to DIVIDER\_TYPE\_DEFAULT.


另见：

- [Toybox.WatchUi.CustomMenu.setDividerType](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/#setDividerType-instance_function)


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if either `itemHeight` or `backgroundColor` are not of the expected type

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `:focusItemHeight`, `:titleItemHeight`, `:footerItemHeight`, or `:focus` options are provided and are not Number objects

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `:title`, `:footer`, or `:foreground` options are provided and are not Drawable objects.


### **setBackgroundColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置背景颜色。

Parameters:

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    The color to fill the background of the menu with.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if color is not a [Number](/connect-iq/api-docs/Toybox/Lang/Number/).


### **setDividerType(divider as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null**)** as **Void**

设置或更改所需的分隔线类型。

If set to [Menu2.DIVIDER\_TYPE\_ICON](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module). Icon from [CustomMenuItem.setDividerIcon](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#setDividerIcon-instance_function) will be rendered on the left side of the divider.

Set to `null` to disable divider which may also disable [MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module), [CustomMenuItem.draw](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#draw-instance_function) will be called with full width of menu item.

[Menu2.DIVIDER\_TYPE\_DEFAULT](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) 对于支持分隔符的设备，如果未设置，则使用该值。

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


### **setFooter(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置页脚 Drawable。

Parameters:

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    A drawable that will render the footer area or `null`.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。


### **setForeground(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置前景 Drawable。

Parameters:

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    A Drawable to render on top of the menu items or `null`.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。


### **setTitle(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置标题 Drawable。

Parameters:

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    A drawable that will render the title area or `null`.


Since:

API 级别 3.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。
