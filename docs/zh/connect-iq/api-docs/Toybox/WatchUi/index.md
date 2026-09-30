---
title: "Module: Toybox.WatchUi"
---
# 模块：Toybox.WatchUi

## 概述

The WatchUi module contains user interface elements available within apps.

WatchUi provides several classes that represent Views, or what is displayed on the screen of a device. Also available are UI elements like on-screen menus, progress bars, buttons, and various pickers. More abstract classes represent all drawable objects, such as bitmaps and text.

注意：

key types 枚举中列在 EXTENDED\_KEYS (16) 之后的所有键，都是在 ConnectIQ 1.1.2 版本之后添加的。在计算这些键之前，请使用 `has` 检查确认这些键是否可用：if (Toybox.WatchUi has :EXTENDED\_KEYS) [...](/connect-iq/api-docs/)

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 背景（自 API Level 5.1.0 起支持）

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 命名空间下的类

类：[ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/), [ActionMenuDelegate](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuDelegate/), [ActionMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuItem/), [AnimationDelegate](/connect-iq/api-docs/Toybox/WatchUi/AnimationDelegate/), [AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/), [AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), [BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), [Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/), [BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Button](/connect-iq/api-docs/Toybox/WatchUi/Button/), [CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/), [CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/), [ClickEvent](/connect-iq/api-docs/Toybox/WatchUi/ClickEvent/), [ComplicationDrawableRef](/connect-iq/api-docs/Toybox/WatchUi/ComplicationDrawableRef/), [Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/), [ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/), [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/), [CustomMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CustomMenuItem/), [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/), [DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/), [DragEvent](/connect-iq/api-docs/Toybox/WatchUi/DragEvent/), [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/), [FlickEvent](/connect-iq/api-docs/Toybox/WatchUi/FlickEvent/), [FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/), [GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/), [GlanceViewDelegate](/connect-iq/api-docs/Toybox/WatchUi/GlanceViewDelegate/), [IconMenuItem](/connect-iq/api-docs/Toybox/WatchUi/IconMenuItem/), [InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/), [InvalidMenuItemTypeException](/connect-iq/api-docs/Toybox/WatchUi/InvalidMenuItemTypeException/), [InvalidPointException](/connect-iq/api-docs/Toybox/WatchUi/InvalidPointException/), [InvalidSelectableStateException](/connect-iq/api-docs/Toybox/WatchUi/InvalidSelectableStateException/), [KeyEvent](/connect-iq/api-docs/Toybox/WatchUi/KeyEvent/), [Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/), [MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/), [MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/), [MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/), [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/), [Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/), [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/), [Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/), [MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/), [MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/), [NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/), [NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/), [Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/), [PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/), [PickerFactory](/connect-iq/api-docs/Toybox/WatchUi/PickerFactory/), [ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/), [ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/), [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/), [SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/), [SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/), [SwipeEvent](/connect-iq/api-docs/Toybox/WatchUi/SwipeEvent/), [Text](/connect-iq/api-docs/Toybox/WatchUi/Text/), [TextArea](/connect-iq/api-docs/Toybox/WatchUi/TextArea/), [TextPicker](/connect-iq/api-docs/Toybox/WatchUi/TextPicker/), [TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/), [ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/), [TransparentProgressBar](/connect-iq/api-docs/Toybox/WatchUi/TransparentProgressBar/), [View](/connect-iq/api-docs/Toybox/WatchUi/View/), [ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/), [ViewLoopDelegate](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopDelegate/), [ViewLoopFactory](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopFactory/), [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/), [WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/), [WatchFacePowerInfo](/connect-iq/api-docs/Toybox/WatchUi/WatchFacePowerInfo/)

## 常量摘要

### Key

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| KEY\_POWER | 0 |
API 级别 1.0.0

|

The power key

|
| KEY\_LIGHT | 1 |

API 级别 1.0.0

|

The light key

|
| KEY\_ZIN | 2 |

API 级别 1.0.0

|

The zoom in key

|
| KEY\_ZOUT | 3 |

API 级别 1.0.0

|

The zoom out key

|
| KEY\_ENTER | 4 |

API 级别 1.0.0

|

The enter key

|
| KEY\_ESC | 5 |

API 级别 1.0.0

|

The escape key

|
| KEY\_FIND | 6 |

API 级别 1.0.0

|

The find key

|
| KEY\_MENU | 7 |

API 级别 1.0.0

|

The menu key

|
| KEY\_DOWN | 8 |

API 级别 1.0.0

|

向下键。

|
| KEY\_DOWN\_LEFT | 9 |

API 级别 1.0.0

|

The down left key

|
| KEY\_DOWN\_RIGHT | 10 |

API 级别 1.0.0

|

向下键。

|
| KEY\_LEFT | 11 |

API 级别 1.0.0

|

The left key

|
| KEY\_RIGHT | 12 |

API 级别 1.0.0

|

The right key

|
| KEY\_UP | 13 |

API 级别 1.0.0

|

The up key

|
| KEY\_UP\_LEFT | 14 |

API 级别 1.0.0

|

The up-left

|
| KEY\_UP\_RIGHT | 15 |

API 级别 1.0.0

|

The up-right key

|
| EXTENDED\_KEYS | 16 |

API 级别 1.1.2

|

表示支持扩展按键

|
| KEY\_PAGE | 17 |

API 级别 1.1.2

|

The page key

|
| KEY\_START | 18 |

API 级别 1.1.2

|

The start key

|
| KEY\_LAP | 19 |

API 级别 1.1.2

|

The lap key

|
| KEY\_RESET | 20 |

API 级别 1.1.2

|

The reset key

|
| KEY\_SPORT | 21 |

API 级别 1.1.2

|

The sport key

|
| KEY\_CLOCK | 22 |

API 级别 1.1.2

|

The clock key

|
| KEY\_MODE | 23 |

API 级别 1.1.2

|

The mode key

|
| KEY\_ACTION\_MENU | 24 |

API 级别 5.1.1

|

The action menu key

|

### AnimationType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ANIM\_TYPE\_LINEAR | 0 |
API 级别 1.0.0

|

速度恒定的动画

|
| ANIM\_TYPE\_EASE\_IN | 1 |

API 级别 1.0.0

|

从开始到结束速度逐渐提高的动画

|
| ANIM\_TYPE\_EASE\_OUT | 2 |

API 级别 1.0.0

|

从开始到结束速度逐渐降低的动画

|
| ANIM\_TYPE\_EASE\_IN\_OUT | 3 |

API 级别 1.0.0

|

从开始时速度逐渐提高，然后在接近结束时速度逐渐降低的动画

|

### KeyPressType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PRESS\_TYPE\_DOWN | 0 |
API 级别 1.1.2

|

The key is pressed down

|
| PRESS\_TYPE\_UP | 1 |

API 级别 1.1.2

|

The key is released

|
| PRESS\_TYPE\_ACTION | 2 |

API 级别 1.1.2

|

The key's action is performed

|

### ClickType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CLICK\_TYPE\_TAP | 0 |
API 级别 1.0.0

|

点击屏幕

|
| CLICK\_TYPE\_HOLD | 1 |

API 级别 1.0.0

|

长按屏幕

|
| CLICK\_TYPE\_RELEASE | 2 |

API 级别 1.0.0

|

释放对屏幕的按住操作

|

### MapMarkerIcon

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MAP\_MARKER\_ICON\_PIN | 0 |
API 级别 3.0.0

|

The default Garmin map marker pin icon

|

### MapMode

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MAP\_MODE\_PREVIEW | 0 |
API 级别 3.0.0

|

The preview mode for a [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)

|
| MAP\_MODE\_BROWSE | 1 |

API 级别 3.0.0

|

The browse mode for a [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)

|

### SwipeDirection

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SWIPE\_UP | 0 |
API 级别 1.0.0

|

向上滑动

|
| SWIPE\_RIGHT | 1 |

API 级别 1.0.0

|

向右滑动

|
| SWIPE\_DOWN | 2 |

API 级别 1.0.0

|

向下滑动

|
| SWIPE\_LEFT | 3 |

API 级别 1.0.0

|

向左滑动

|

### DragType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DRAG\_TYPE\_START | 0 |
API 级别 3.3.0

|

Start of a screen drag

|
| DRAG\_TYPE\_CONTINUE | 1 |

API 级别 3.3.0

|

屏幕拖动的延续

|
| DRAG\_TYPE\_STOP | 2 |

API 级别 3.3.0

|

Stop of a screen drag

|

### ControlBarLeftButton

Since:

API 级别 4.1.2

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONTROL\_BAR\_LEFT\_BUTTON\_BACK | 0 |
API 级别 4.1.2

 |  |
| CONTROL\_BAR\_LEFT\_BUTTON\_CANCEL | 1 |

API 级别 4.1.2

 |  |

### ControlBarRightButton

Since:

API 级别 4.1.2

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONTROL\_BAR\_RIGHT\_BUTTON\_ACCEPT | 2 |
API 级别 4.1.2

 |  |
| CONTROL\_BAR\_RIGHT\_BUTTON\_MENU | 3 |

API 级别 4.1.2

 |  |

### AnalogClockState

Set the state for analog clock hands

Since:

API 级别 3.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ANALOG\_CLOCK\_STATE\_RESTING | 0 |
API 级别 3.3.0

|

Set the clock hands to resting position

|
| ANALOG\_CLOCK\_STATE\_SYSTEM\_TIME | 1 |

API 级别 3.3.0

|

Set the clock hands to system time

|
| ANALOG\_CLOCK\_STATE\_HOLDING | 2 |

API 级别 3.3.0

|

Set the clock hands to the specified position

|

### WatchFaceConfigType

WatchFace config types.

Since:

API 级别 5.1.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| WATCH\_FACE\_CONFIG\_TYPE\_STYLE | 0 |
API 级别 5.1.0

 |  |
| WATCH\_FACE\_CONFIG\_TYPE\_COMPLICATION | 1 |

API 级别 5.1.0

 |  |
| WATCH\_FACE\_CONFIG\_TYPE\_ACCENT\_COLOR | 2 |

API 级别 5.1.0

 |  |
| WATCH\_FACE\_CONFIG\_TYPE\_COMPLICATION\_COLOR | 3 |

API 级别 5.1.0

 |  |

### MenuTheme

支持的设备的菜单主题

Since:

API 级别 4.1.8

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MENU\_THEME\_DEFAULT | 0 |
API 级别 4.1.8

|

The default theme color as specified by the device.

|
| MENU\_THEME\_BLUE | 1 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_CYAN | 2 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_GREEN | 3 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_YELLOW | 4 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_ORANGE | 5 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_RED | 6 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_PINK | 7 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_PURPLE | 8 |

API 级别 4.1.8

 |  |
| MENU\_THEME\_GREEN\_YELLOW | 9 |

API 级别 4.1.8

 |  |

### Confirm

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| CONFIRM\_NO | 0 |
API 级别 1.0.0

 |  |
| CONFIRM\_YES | 1 |

API 级别 1.0.0

 |  |

### NumberPickerMode

**此项已弃用**

This enum may be removed after System 3.

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| NUMBER\_PICKER\_DISTANCE | 0 |
API 级别 1.0.0

|

以米（m）为单位的一个 Float

|
| NUMBER\_PICKER\_TIME | 1 |

API 级别 1.0.0

|

一个 Duration

|
| NUMBER\_PICKER\_TIME\_MIN\_SEC | 2 |

API 级别 1.0.0

|

一个 Duration

|
| NUMBER\_PICKER\_TIME\_OF\_DAY | 3 |

API 级别 1.0.0

|

表示自午夜起经过的秒数的 Duration

|
| NUMBER\_PICKER\_WEIGHT | 4 |

API 级别 1.0.0

|

以千克（kg）为单位的 Float

|
| NUMBER\_PICKER\_HEIGHT | 5 |

API 级别 1.0.0

|

以米（m）为单位的一个 Float

|
| NUMBER\_PICKER\_CALORIES | 6 |

API 级别 1.0.0

|

一个数字

|
| NUMBER\_PICKER\_BIRTH\_YEAR | 7 |

API 级别 1.0.0

|

一个数字

|

### SlideType

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SLIDE\_IMMEDIATE | 0 |
API 级别 1.0.0

|

No transition.

|
| SLIDE\_LEFT | 1 |

API 级别 1.0.0

|

The View slides to the left.

|
| SLIDE\_RIGHT | 2 |

API 级别 1.0.0

|

The View slides to the right.

|
| SLIDE\_DOWN | 3 |

API 级别 1.0.0

|

The View slides down.

|
| SLIDE\_UP | 4 |

API 级别 1.0.0

|

The View slides up.

|
| SLIDE\_BLINK | 5 |

API 级别 3.1.0

|

The View fades in.

|

### LayoutVerticalAlignment

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LAYOUT\_VALIGN\_TOP | \-0x7FFFFFFF |
API 级别 1.2.0

|

Set a Drawable object's locY property to this to align it to the top edge of the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_VALIGN\_BOTTOM | \-0x7FFFFFFE |

API 级别 1.2.0

|

Set a Drawable object's locY property to this to align it to the bottom edge of the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_VALIGN\_CENTER | \-0x7FFFFFFD |

API 级别 1.2.0

|

Set a Drawable object's locY property to this to center it vertically in the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_VALIGN\_START | \-0x7FFFFFFC |

API 级别 1.2.0

|

Set a Drawable object's locY property to this to make it equal to its parent's locY property.

|

### LayoutHorizontalAlignment

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LAYOUT\_HALIGN\_LEFT | \-0x7FFFFFFF |
API 级别 1.2.0

|

Set a Drawable object's locX property to this to align it along the left edge of the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_HALIGN\_RIGHT | \-0x7FFFFFFE |

API 级别 1.2.0

|

Set a Drawable object's locX property to this to align it along the right edge of the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_HALIGN\_CENTER | \-0x7FFFFFFD |

API 级别 1.2.0

|

Set a Drawable object's locX property to this to center it horizontally in the device context ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)).

|
| LAYOUT\_HALIGN\_START | \-0x7FFFFFFC |

API 级别 1.2.0

|

Set a Drawable object's locX property to this to make it equal to its parent's locX property.

|

### AnimationEvent

Since:

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ANIMATION\_EVENT\_COMPLETE | 0 |
API 级别 3.1.0

|

表示动画完成。

|
| ANIMATION\_EVENT\_CANCELED | 1 |

API 级别 3.1.0

|

表示取消动画播放

|

### ActionMenuTheme

The theme for the ActionMenu

Since:

API 级别 3.4.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ACTION\_MENU\_THEME\_DARK | 0 |
API 级别 3.4.0

|

操作菜单的深色主题

|
| ACTION\_MENU\_THEME\_LIGHT | 1 |

API 级别 3.4.0

|

操作菜单的浅色主题

|

### ReviewRequestStatus

用于 makeReviewTokenRequest 返回状态的枚举类

Since:

API 级别 3.4.2

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| REVIEW\_REQUEST\_STATUS\_GRANTED | 0 |
API 级别 3.4.2

 |  |
| REVIEW\_REQUEST\_STATUS\_DENIED | 1 |

API 级别 3.4.2

 |  |
| REVIEW\_REQUEST\_STATUS\_FAILED | 2 |

API 级别 3.4.2

 |  |

## 类型定义摘要 [collapse](#)

- [**InputDelegates**](#InputDelegates-named_type) as [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) or [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) or [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) or [WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/) or [WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/) or [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/) or [WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/) or [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) or [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) or [WatchUi.ViewLoopDelegate](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopDelegate/)
- [**Resource**](#Resource-named_type) as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)
- [**TouchEventSettings**](#TouchEventSettings-named_type) as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }
- [**Views**](#Views-named_type) as [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) or [WatchUi.TextPicker](/connect-iq/api-docs/Toybox/WatchUi/TextPicker/) or [WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/) or [WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) or [WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/) or [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/)

## 实例方法摘要 [collapse](#)

- [**animate**](#animate-instance_function)(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), property as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), type as [WatchUi.AnimationType](/connect-iq/api-docs/Toybox/WatchUi/#AnimationType-module), start as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), stop as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), period as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), callback as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**) as **Void**

    为对象设置动画。

- [**cancelAllAnimations**](#cancelAllAnimations-instance_function)() as **Void**

    取消由 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 启动的动画 停止所有由 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 启动的动画。

- [**configureTouchEvents**](#configureTouchEvents-instance_function)(options as [WatchUi.TouchEventSettings](/connect-iq/api-docs/Toybox/WatchUi/#TouchEventSettings-named_type)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    配置触摸事件设置；仅当 Watch Apps 和音频内容提供程序以前台模式运行时允许配置。

- [**getCurrentView**](#getCurrentView-instance_function)() as \[ [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or **Null**, [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null** \]

    获取 UI 中当前显示的视图。

- [**getSubscreen**](#getSubscreen-instance_function)() as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) or **Null**

    获取显示屏中的子屏幕区域。

- [**getTouchEventsConfiguration**](#getTouchEventsConfiguration-instance_function)() as [WatchUi.TouchEventSettings](/connect-iq/api-docs/Toybox/WatchUi/#TouchEventSettings-named_type)

    返回当前触摸事件设置。

- [**loadResource**](#loadResource-instance_function)(resource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as [WatchUi.Resource](/connect-iq/api-docs/Toybox/WatchUi/#Resource-named_type)

    从可执行文件加载资源。

- [**makeReviewTokenRequest**](#makeReviewTokenRequest-instance_function)(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseStatus as [WatchUi.ReviewRequestStatus](/connect-iq/api-docs/Toybox/WatchUi/#ReviewRequestStatus-module), token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/) or **Null**) as **Void**) as **Void**

    发起请求以邀请用户评价此应用。

- [**popView**](#popView-instance_function)(transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) as **Void**

    从 View 堆栈中弹出当前 View。

- [**pushView**](#pushView-instance_function)(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) as **Void**

    将 View 推入 View 堆栈。

- [**requestUpdate**](#requestUpdate-instance_function)() as **Void**

    请求为当前 View 调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 方法。

- [**showActionMenu**](#showActionMenu-instance_function)(menu as [WatchUi.ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/), delegate as [WatchUi.ActionMenuDelegate](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuDelegate/)) as **Void**

    Push an action menu to the display.

- [**showToast**](#showToast-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) } or **Null**) as **Void**

    Push a toast notification to the display.

- [**startUserReview**](#startUserReview-instance_function)(token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/)) as **Void**

    Start the app review UI flow.

- [**switchToView**](#switchToView-instance_function)(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) as **Void**

    从 View 堆栈中弹出当前 View，并推入一个新的 View。


## 类型定义详情

### **InputDelegates** as [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) or [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) or [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) or [WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/) or [WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/) or [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/) or [WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/) or [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) or [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) or [WatchUi.ViewLoopDelegate](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopDelegate/)

Since:

API 级别 1.0.0

### **Resource** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

Since:

API 级别 1.0.0

### **TouchEventSettings** as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

Since:

API 级别 1.0.0

### **Views** as [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) or [WatchUi.TextPicker](/connect-iq/api-docs/Toybox/WatchUi/TextPicker/) or [WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/) or [WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) or [WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/) or [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/)

Since:

API 级别 1.0.0

## 实例方法详情

### **animate(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), property as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), type as [WatchUi.AnimationType](/connect-iq/api-docs/Toybox/WatchUi/#AnimationType-module), start as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), stop as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), period as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), callback as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**)** as **Void**

为对象设置动画。

Animate 通过随时间改变对象属性来工作，例如 Drawable 的 x 位置。动画会在调用后开始，并持续指定的时长。在此期间，View 对象的 onUpdate() 方法将以更高频率调用，以便实现动画。

注意：

Will cause an app crash if called from background or data field app, or from watch face while in low power mode

Parameters:

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The object to animate

- property — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    The Symbol of the object's property to animate (e.g. :locX, :locY, etc.)

- type — ([WatchUi.AnimationType](/connect-iq/api-docs/Toybox/WatchUi/#AnimationType-module)) —

    一个 [WatchUi.ANIM\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ANIM_TYPE_LINEAR-const) 值

- start — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The starting value of the property

- stop — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    The ending value of the property

- period — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    The duration of the animation in seconds

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    动画完成时调用的 Method；可以为 `null`


Example:

将位图从左向右横跨屏幕移动

```
using System.WatchUi;

square = new Ui.Bitmap({
    :rezId=>Rez.Drawables.square,
    :locX=>10,
    :locY=>30
});
WatchUi.animate(square, :locX, Ui.ANIM_TYPE_LINEAR, 10, 200, 10, null);
```

另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Bitmap](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/)


Since:

API 级别 1.0.0

### **cancelAllAnimations()** as **Void**

取消由 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 启动的动画

Stop all animations that were started with [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function). This will leave all animations at their final frame, as if [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) ran to completion.

另见：

- [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function)


Since:

API 级别 3.1.7

### **configureTouchEvents(options as [WatchUi.TouchEventSettings](/connect-iq/api-docs/Toybox/WatchUi/#TouchEventSettings-named_type))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

配置触摸事件设置；仅当 Watch Apps 和音频内容提供程序以前台模式运行时允许配置。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    触摸事件设置字典。

- :enabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        用于在应用于前台运行时启用或禁用触摸事件的主标志。


:::details 支持的设备

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
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
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    True if the operation was successful, false otherwise.


Since:

API 级别 5.2.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果由既不是 Watch App 也不是 Audio Content Provider 的应用类型调用，或在后台模式下调用。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供了无效选项。


### **getCurrentView()** as \[ [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or **Null**, [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null** \]

获取 UI 中当前显示的视图

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含视图和委托的数组。


Since:

API 级别 3.4.0

### **getSubscreen()** as [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) or **Null**

获取显示屏中的子屏幕区域。

:::details 支持的设备

-   Descent™ G1 / G1 Solar
-   Instinct® 2 / Solar / Dual Power / dēzl Edition
-   Instinct® 2S / Solar / Dual Power
-   Instinct® 2X Solar
-   Instinct® 3 Solar 45mm / 50mm
-   Instinct® E 40mm
-   Instinct® E 45mm

:::

Returns:

- [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) —

    object or `null` if no subscreen is present or if a virtual subscreen is present but not used for normal views.


Since:

API 级别 3.2.7

### **getTouchEventsConfiguration()** as [WatchUi.TouchEventSettings](/connect-iq/api-docs/Toybox/WatchUi/#TouchEventSettings-named_type)

返回当前触摸事件设置。

:::details 支持的设备

-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
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
-   MARQ® (Gen 2) Athlete / Adventurer / Captain / Golfer / Carbon Edition / Commander - Carbon Edition
-   MARQ® (Gen 2) Aviator
-   Venu® 3
-   Venu® 3S
-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 5
-   vívoactive® 6

:::

Returns:

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) —

    当前触摸事件设置。


Since:

API 级别 5.2.0

### **loadResource(resource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as [WatchUi.Resource](/connect-iq/api-docs/Toybox/WatchUi/#Resource-named_type)

从可执行文件加载资源。

注意：

在 CIQ 4.0.0 及更高版本中，[Toybox::Graphics::BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 和 [Toybox::Graphics::FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 会针对 [Toybox::WatchUi::BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 和 [Toybox::WatchUi::FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) 返回。

Parameters:

- resource — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    项目 `resources.xml` 文件中定义的资源标识符


Example:

加载 String 资源

```
// The resources.xml file contents:
// <resources>
//     <string id="AppName">APEELingApp</string>
// </resources>
using Toybox.WatchUi;

var banana = WatchUi.loadResource(Rez.Strings.AppName);
```

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

Since:

API 级别 1.0.0

### **makeReviewTokenRequest(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseStatus as [WatchUi.ReviewRequestStatus](/connect-iq/api-docs/Toybox/WatchUi/#ReviewRequestStatus-module), token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/) or **Null**) as **Void**)** as **Void**

发起请求以邀请用户评价此应用

Parameters:

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    审查令牌请求完成时调用的回调。


:::details 支持的设备

-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
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
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
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

Since:

API 级别 3.4.2

### **popView(transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

从 View 堆栈中弹出当前 View。

Parameters:

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


Since:

API 级别 1.0.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if called from background, data field, glance, or watch face app; or of called from the base page of a widget


### **pushView(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

将 View 推入 View 堆栈。

Parameters:

- view — ([WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)) —

    要推送的 View

- delegate — ([WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/), [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/), [WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/), [WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/), [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/), [WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/), [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)) —

    用于处理 View 输入的输入委托。

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


Since:

API 级别 1.0.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown when view is type [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) and the visible map area parameters are invalid

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if called from background, data field, glance, or watch face app; or if the new view is a [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/), a [GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/), or a [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)


### **requestUpdate()** as **Void**

请求为当前 View 调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 方法。

另见：

- [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)


Since:

API 级别 1.0.0

### **showActionMenu(menu as [WatchUi.ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/), delegate as [WatchUi.ActionMenuDelegate](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuDelegate/))** as **Void**

Push an action menu to the display

注意：

操作菜单会在用户选择菜单项或按下返回按钮时自动关闭。

Parameters:

- menu — ([WatchUi.ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/)) —

    操作菜单对象。

- delegate — ([WatchUi.ActionMenuDelegate](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuDelegate/)) —

    操作菜单委托对象。


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 945 LTE
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

Since:

API 级别 3.4.0

### **showToast(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) } or **Null**)** as **Void**

Push a toast notification to the display

Parameters:

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    The text to display in the notification toast.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :icon — ([Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        The icon to display with this notification. If no icon is provided and the system requires an icon for a toast, the app icon will be used.


:::details 支持的设备

-   Approach® S50
-   Approach® S70 42mm
-   Approach® S70 47mm
-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G1 / G1 Solar
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
-   eTrex® Touch
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
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
-   Forerunner® 570 42mm
-   Forerunner® 570 47mm
-   Forerunner® 70
-   Forerunner® 945 LTE
-   Forerunner® 955 / Solar
-   Forerunner® 965
-   Forerunner® 970
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

Since:

API 级别 3.4.0

### **startUserReview(token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/))** as **Void**

Start the app review UI flow

Parameters:

- token — ([WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/)) —

    The token that was passed as a parameter to a successful call to the callback parameter in [makeReviewTokenRequest](/connect-iq/api-docs/Toybox/WatchUi/#makeReviewTokenRequest-instance_function).


:::details 支持的设备

-   D2™ Air X10
-   D2™ Mach 1
-   D2™ Mach 2 Pro
-   D2™ Mach 2
-   Descent™ G2
-   Descent™ Mk2 / Mk2i
-   Descent™ Mk2 S
-   Descent™ Mk3 43mm / Mk3i 43mm
-   Descent™ Mk3i 51mm
-   Enduro™ 3
-   Enduro™
-   epix™ (Gen 2) / quatix® 7 Sapphire
-   epix™ Pro (Gen 2) 42mm
-   epix™ Pro (Gen 2) 47mm / quatix® 7 Pro
-   epix™ Pro (Gen 2) 51mm / D2™ Mach 1 Pro / tactix® 7 – AMOLED Edition
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
-   fēnix® E
-   Forerunner® 165 Music
-   Forerunner® 165
-   Forerunner® 170 Music
-   Forerunner® 170
-   Forerunner® 255 Music
-   Forerunner® 255
-   Forerunner® 255s Music
-   Forerunner® 255s
-   Forerunner® 265
-   Forerunner® 265s
-   Forerunner® 55
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
-   MARQ® Adventurer
-   MARQ® Athlete
-   MARQ® Aviator
-   MARQ® Captain / MARQ® Captain: American Magic Edition
-   MARQ® Commander
-   MARQ® Driver
-   MARQ® Expedition
-   MARQ® Golfer
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

Since:

API 级别 3.4.2

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果 `token` 不是 ReviewResponseToken。


### **switchToView(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

从 View 堆栈中弹出当前 View，并推入一个新的 View。

注意：

Prior to ConnectIQ 3.1, this method only supported switching to user-defined View objects, and would only accept InputDelegate or BehaviorDelegate objects as delegates for the given View.

Parameters:

- view — ([WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)) —

    The View object to push

- delegate — ([WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)) —

    用于处理 View 输入的输入委托。

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


Since:

API 级别 1.0.0

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    Thrown if called from background, data field, glance, or watch face app; or of called from the base page of a widget and the new view is native; or if the new view is a [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/), a [GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/), or a [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)
