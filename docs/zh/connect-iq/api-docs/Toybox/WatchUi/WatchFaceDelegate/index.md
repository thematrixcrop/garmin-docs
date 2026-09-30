---
title: "Class: Toybox.WatchUi.WatchFaceDelegate"
---
# Class: Toybox.WatchUi.WatchFaceDelegate

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)


[show all](#)

## 概述

Receive events on a Watch Face.

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

    Called when user does a touch and hold.

- [**onTap**](#onTap-instance_function)(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    发生了一次屏幕点击事件。

- [**onWatchFaceConfigEdited**](#onWatchFaceConfigEdited-instance_function)(options as { :configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/), :type as [WatchUi.WatchFaceConfigType](/connect-iq/api-docs/Toybox/WatchUi/#WatchFaceConfigType-module) or **Null**, :committed as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }) as **Void**

    已发生表盘配置更改。

- [**setSelectedComplication**](#setSelectedComplication-instance_function)(complicationIdentifier as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    Set the selected complication field.


## 实例方法详情

### **getComplicationDrawable(complication as [WatchFaceConfig.ComplicationRef](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/ComplicationRef/))** as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or [WatchUi.ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/) or **Null**

获取用于高亮显示的 Drawable。

Called by system to get a Drawable for the given complication field for highlighting purposes. Only available in WatchFace config mode. Animation will be easing around the center of the Drawable. The Dc object passed to the Drawable.draw function shares the same origin as screen, e.g. at \[0, 0\], so it's aligned with the drawable coordinates for convenience.

Parameters:

- complication — (Complication) —

    The complication field to get the highlight drawable for.


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

    The drawable that can be animated for highlighting purposes or `null`. In case of Drawable type, the bounding box is marked by the locX and locY as the top left corner, and the width and height as the size. In case of ComplicationDrawableRef, bounding box or other boundary type must be specified explicitly.


另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

### **onPowerBudgetExceeded(powerInfo as [WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/))** as **Void**

处理超出功耗预算的部分更新。

If the [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function) callback of the associated [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/) exceeds the power budget of the device, this method will be called with information about the limits that were exceeded.

Parameters:

- powerInfo — ([WatchUi.WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/))

另见：

- [Toybox.WatchUi.WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)

- [onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function)


Since:

API 级别 2.3.0

### **onPress(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Called when user does a touch and hold

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    Click event


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

- true if the click event is handled, otherwise false.


Since:

API 级别 4.2.0

### **onTap(clickEvent as [WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

发生了一次屏幕点击事件。

Only available in WatchFace config mode. Can be overridden by application to change the selected `complication`, using [WatchFaceDelegate.setSelectedComplication()](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#setSelectedComplication-instance_function)

Parameters:

- clickEvent — ([WatchUi.ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/)) —

    The click event that occurred


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

    `true` if the event was handled, `false` otherwise.


另见：

- [Toybox.Application.AppBase.onStart](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)


Since:

API 级别 5.1.0

### **onWatchFaceConfigEdited(options as { :configId as [WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/), :type as [WatchUi.WatchFaceConfigType](/connect-iq/api-docs/Toybox/WatchUi/#WatchFaceConfigType-module) or **Null**, :committed as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })** as **Void**

已发生表盘配置更改。

Only available in WatchFace config mode, application can call [WatchFaceConfig.getSettings()](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/#getSettings-instance_function) to retrieve the current settings.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :configId — ([WatchFaceConfig.Id](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/Id/)) —

        The config id that has changed. This can be passed to [WatchFaceConfig.getSettings()](/connect-iq/api-docs/Toybox/Application/WatchFaceConfig/#getSettings-instance_function) to retrieve the current settings.

- :type — (Type) —

        The type of config that has changed. if missing or `null`, indicates the end of previous editing.

- :committed — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        `true` if user has committed the change, `false` otherwise.


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

Set the selected complication field.

Can be called by application when handling `onTap` event, to change the selected (highlighted) complication. Only effective during WatchFace config mode.

Parameters:

- complicationIdentifier — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The unique identifier of complication to set as selected.


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

    Thrown if `complicationIdentifier` is a disallowed data type.

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if watch face not in config mode.

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if `complicationIdentifier` is not found among valid complication fields.
