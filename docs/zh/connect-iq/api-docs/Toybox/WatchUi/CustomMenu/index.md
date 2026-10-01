---
title: "类：Toybox.WatchUi.CustomMenu"
---
# 类：Toybox.WatchUi.CustomMenu

继承：

Toybox.WatchUi.Menu2

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/)


[显示全部](#)

## 概述

自定义菜单的表示。

CustomMenu 是一种专用的 [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) View，用于向用户显示自定义渲染的选项列表。选择选项后，将调用已注册的 [onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function) 方法。

使用 [pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推送 CustomMenu，该方法将 [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) 作为输入委托。

## 另见：

- [Toybox.WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)

- [Toybox.WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)

- [Toybox.WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)

- [Toybox.WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)

- [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)


示例：

以编程方式构建 CustomMenu

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

- [**addItem**](#addItem-instance_function)(item as [WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)) as **Void**

    将 CustomMenuItem 添加到 CustomMenu。

- [**drawFooter**](#drawFooter-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 页脚。

- [**drawForeground**](#drawForeground-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 前景。

- [**drawTitle**](#drawTitle-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    绘制 CustomMenu 标题。

- [**initialize**](#initialize-instance_function)(itemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), options as { :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :focusItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :title as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :foreground as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :titleItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :footerItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)

    构造函数。

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

参数：

- item — ([WatchUi.CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)) —

    要添加到 CustomMenu 的 CustomMenuItem。不能将其他 MenuItem 变体添加到 Custom Menu。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 item 不是 [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)，则抛出。

- ([WatchUi.InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/)) —

    如果 item 不是 [CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/)，则抛出。


### **drawFooter(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 页脚。

调用此函数以渲染菜单页脚区域。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


起始版本：

API 级别 3.0.0

### **drawForeground(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 前景。

菜单的项目和标题渲染完成后会调用此函数。它可用于为菜单绘制叠加内容。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


起始版本：

API 级别 3.0.0

### **drawTitle(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

绘制 CustomMenu 标题。

调用此函数以渲染菜单标题区域。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    菜单的绘制上下文


起始版本：

API 级别 3.0.0

### **initialize(itemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), options as { :focus as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :focusItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :title as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :footer as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :foreground as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), :icon as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :titleItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :footerItemHeight as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :theme as [WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module) or **Null**, :dividerType as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null** } or **Null**)**

构造函数

注意：

选项 `:titleItemHeight` 和 `:footerItemHeight` 仅支持 ConnectIQ 4.0.0 及更高版本。

注意：

`:icon` 选项仅在支持子屏幕的 ConnectIQ 3.4.0 设备上使用。

注意：

:theme 选项仅用于支持菜单主题的 ConnectIQ 4.1.8 设备。如果支持主题且主题不为 null，则不会使用背景颜色。

注意：

`:dividerType` 选项仅在支持分隔线的 ConnectIQ 5.0.1 设备上使用。

参数：

- itemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    此菜单渲染的菜单项的像素高度。

- backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    用于填充菜单背景的颜色。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含选项的 Dictionary。可以为 `null`

- :focus — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        应获得初始焦点的 [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/) 的索引。（可选）

- :focusItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        此菜单中心菜单项的像素高度。触摸屏产品会忽略此选项。（可选）

- :title — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        用于渲染标题区域的 Drawable。（可选）

- :footer — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        用于渲染菜单中最后一个项目之后区域的 Drawable。（可选）

- :foreground — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)) —

        用于渲染在菜单项上方的 Drawable（可选）。

- :titleItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        此菜单页眉菜单项的像素高度（可选）

- :footerItemHeight — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        此菜单页脚菜单项的像素高度。（可选）

- :icon — ([Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type), [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        菜单项未填充图标时菜单的默认图标

- :theme — ([WatchUi.MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)) —

        菜单主题；传入 `null` 表示不使用主题。默认为 MENU_THEME_DEFAULT。

- :dividerType — ([Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)) —

        分隔线类型；如果传入的值为 `null`，则禁用分隔线（不可见）。默认为 DIVIDER\_TYPE\_DEFAULT。


另见：

- [Toybox.WatchUi.CustomMenu.setDividerType](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/#setDividerType-instance_function)


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `itemHeight` 或 `backgroundColor` 不是预期类型，则会抛出此异常

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果提供了 `:focusItemHeight`、`:titleItemHeight`、`:footerItemHeight` 或 `:focus` 选项，且它们不是 Number 对象，则抛出

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果提供了 `:title`、`:footer` 或 `:foreground` 选项，且它们不是 Drawable 对象，则抛出。


### **setBackgroundColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置背景颜色。

参数：

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    用于填充菜单背景的颜色。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `color` 不是 [Number](/connect-iq/api-docs/Toybox/Lang/Number/)，则会抛出此异常。


### **setDividerType(divider as [Menu2.DividerType](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module) or **Null**)** as **Void**

设置或更改所需的分隔线类型。

如果设置为 [Menu2.DIVIDER\_TYPE\_ICON](/connect-iq/api-docs/Toybox/WatchUi/Menu2/#DividerType-module)。来自 [CustomMenuItem.setDividerIcon](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#setDividerIcon-instance_function) 的图标将呈现在分隔线左侧。

设置为 `null` 以禁用分隔线，这也可能会禁用 [MenuTheme](/connect-iq/api-docs/Toybox/WatchUi/#MenuTheme-module)，[CustomMenuItem.draw](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/#draw-instance_function) 将以菜单项的完整宽度调用。

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

起始版本：

API 级别 5.0.1

抛出：

- (WatchUi.InvalidValueException) —

    如果 divider 不是有效值，则抛出。

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 divider 不是有效类型，则抛出。


### **setFooter(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置页脚 Drawable。

参数：

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    用于渲染页脚区域的 drawable，或 `null`。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。


### **setForeground(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置前景 Drawable。

参数：

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    用于渲染在菜单项上方的 Drawable，或 `null`。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。


### **setTitle(drawable as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**)** as **Void**

设置标题 Drawable。

参数：

- drawable — ([WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), null) —

    用于渲染标题区域的 drawable，或 `null`。


起始版本：

API 级别 3.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 drawable 不是 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或 `null`，则抛出。
