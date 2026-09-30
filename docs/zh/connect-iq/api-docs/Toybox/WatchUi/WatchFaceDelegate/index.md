---
title: "Class: Toybox.WatchUi.WatchFaceDelegate"
---
# 类：Toybox.WatchUi.WatchFaceDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)


[show all](#)

## 概述

在表盘上接收事件。

## 另见：

- [Toybox.WatchUi.WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)


Since:

API 级别 2.3.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 实例方法摘要 [collapse](#)

- [**getComplicationDrawable**](#getComplicationDrawable-instance_function)(complication as [WatchFaceConfig.ComplicationRef](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/ComplicationRef/)) as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/) or **Null**

    获取用于高亮显示的 Drawable。

- [**onPowerBudgetExceeded**](#onPowerBudgetExceeded-instance_function)(powerInfo as [WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/)) as **Void**

    处理超出功耗预算的部分更新。

- [**onPress**](#onPress-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    用户触摸并按住时调用。

- [**onTap**](#onTap-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发生了一次屏幕点击事件。

- [**onWatchFaceConfigEdited**](#onWatchFaceConfigEdited-instance_function)(options as { :configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/), :type as [WatchUi.WatchFaceConfigType](/connect-iq/api-docs/Toybox/WatchUi/#WatchFaceConfigType-module) or **Null**, :committed as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }) as **Void**

    已发生表盘配置更改。

- [**setSelectedComplication**](#setSelectedComplication-instance_function)(complicationIdentifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置选中的复杂功能字段。


## 实例方法详情

### **getComplicationDrawable(complication as [WatchFaceConfig.ComplicationRef](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/ComplicationRef/))** as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/) or **Null**

获取用于高亮显示的 Drawable。

系统调用此方法获取指定复杂功能字段的 Drawable，以便进行高亮显示。此方法仅在 WatchFace 配置模式下可用。动画会围绕 Drawable 的中心进行缓动。传递给 Drawable.draw 函数的 Dc 对象与屏幕共享同一原点（例如 \\[0, 0\\]），因此可方便地与 drawable 坐标对齐。

Parameters:

- complication — (Complication) —

    要获取高亮可绘制对象的复杂功能字段。


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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/) —

    可用于高亮显示的 Drawable，或 `null`。对于 Drawable 类型，其边界框的左上角由 locX 和 locY 标记，宽度和高度表示其尺寸。对于 ComplicationDrawableRef，必须显式指定边界框或其他边界类型。


另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

### **onPowerBudgetExceeded(powerInfo as [WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/))** as **Void**

处理超出功耗预算的部分更新。

如果关联 [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/) 的 [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) 回调超出设备的功耗预算，则会调用此方法，并提供有关超出限制的信息。

Parameters:

- powerInfo — ([WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/))

另见：

- [Toybox.WatchUi.WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)

- [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function)


Since:

API 级别 2.3.0

### **onPress(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

用户触摸并按住时调用

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    点击事件


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   Instinct® 3 AMOLED 45mm
-   Instinct® 3 AMOLED 50mm
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® Crossover AMOLED
-   Instinct® E 40mm
-   Instinct® E 45mm
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 2 Plus
-   Venu® 2
-   Venu® 2S
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® Sq 2 Music
-   Venu® Sq 2
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- 如果点击事件已处理，则为 true，否则为 false。


Since:

API 级别 4.2.0

### **onTap(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发生了一次屏幕点击事件。

仅在 WatchFace 配置模式下可用。应用可以使用 [WatchFaceDelegate.setSelectedComplication()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#setSelectedComplication-instance_function) 重写此方法以更改选定的 `complication`

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    发生的点击事件


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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果事件已处理，则为 `true`，否则为 `false`。


另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

### **onWatchFaceConfigEdited(options as { :configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/), :type as [WatchUi.WatchFaceConfigType](/connect-iq/api-docs/Toybox/WatchUi/#WatchFaceConfigType-module) or **Null**, :committed as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })** as **Void**

已发生表盘配置更改。

仅在 WatchFace 配置模式下可用，应用可以调用 [WatchFaceConfig.getSettings()](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/#getSettings-instance_function) 来检索当前设置。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :configId — ([WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/)) —

        已更改的配置 ID。可以将其传递给 [WatchFaceConfig.getSettings()](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/#getSettings-instance_function) 以获取当前设置。

- :type — (Type) —

        已更改的配置类型。如果缺失或为 `null`，表示之前的编辑已结束。

- :committed — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果用户已提交更改，则为 `true`，否则为 `false`。


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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

### **setSelectedComplication(complicationIdentifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置选中的复杂功能字段。

应用处理 `onTap` 事件时可以调用，以更改选中的（高亮显示的）复杂功能。仅在表盘配置模式下有效。

Parameters:

- complicationIdentifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要设置为选中状态的 complication 唯一标识符。


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
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 970
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `complicationIdentifier` 是不允许的数据类型，则会抛出此异常。

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果表盘不处于配置模式，则抛出。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果在有效 complication 字段中找不到 `complicationIdentifier`，则会抛出此异常。
