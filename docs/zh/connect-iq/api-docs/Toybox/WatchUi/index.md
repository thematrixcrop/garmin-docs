---
title: "模块：Toybox.WatchUi"
---
# 模块：Toybox.WatchUi

## 概述

WatchUi 模块包含应用中可用的用户界面元素。

WatchUi 提供了几个表示视图（即设备屏幕上显示内容）的类。此外，还提供了屏幕菜单、进度条、按钮和各种选择器等 UI 元素。更抽象的类表示所有可绘制对象，例如位图和文本。

注意：

key types 枚举中列在 EXTENDED\_KEYS (16) 之后的所有键，都是在 ConnectIQ 1.1.2 版本之后添加的。在计算这些键之前，请使用 `has` 检查确认这些键是否可用：if (Toybox.WatchUi has :EXTENDED\_KEYS) [...](/connect-iq/api-docs/)

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| KEY\_POWER | 0 |
API 级别 1.0.0

|

电源键

|
| KEY\_LIGHT | 1 |

API 级别 1.0.0

|

灯光键

|
| KEY\_ZIN | 2 |

API 级别 1.0.0

|

放大键

|
| KEY\_ZOUT | 3 |

API 级别 1.0.0

|

缩小键

|
| KEY\_ENTER | 4 |

API 级别 1.0.0

|

回车键

|
| KEY\_ESC | 5 |

API 级别 1.0.0

|

转义键

|
| KEY\_FIND | 6 |

API 级别 1.0.0

|

查找键

|
| KEY\_MENU | 7 |

API 级别 1.0.0

|

菜单键

|
| KEY\_DOWN | 8 |

API 级别 1.0.0

|

向下键。

|
| KEY\_DOWN\_LEFT | 9 |

API 级别 1.0.0

|

向左下键

|
| KEY\_DOWN\_RIGHT | 10 |

API 级别 1.0.0

|

向下键。

|
| KEY\_LEFT | 11 |

API 级别 1.0.0

|

左键

|
| KEY\_RIGHT | 12 |

API 级别 1.0.0

|

右键

|
| KEY\_UP | 13 |

API 级别 1.0.0

|

向上键

|
| KEY\_UP\_LEFT | 14 |

API 级别 1.0.0

|

左上

|
| KEY\_UP\_RIGHT | 15 |

API 级别 1.0.0

|

向右上键

|
| EXTENDED\_KEYS | 16 |

API 级别 1.1.2

|

表示支持扩展按键

|
| KEY\_PAGE | 17 |

API 级别 1.1.2

|

页面键

|
| KEY\_START | 18 |

API 级别 1.1.2

|

开始键

|
| KEY\_LAP | 19 |

API 级别 1.1.2

|

圈键

|
| KEY\_RESET | 20 |

API 级别 1.1.2

|

重置键

|
| KEY\_SPORT | 21 |

API 级别 1.1.2

|

运动项目键

|
| KEY\_CLOCK | 22 |

API 级别 1.1.2

|

时钟键

|
| KEY\_MODE | 23 |

API 级别 1.1.2

|

模式键

|
| KEY\_ACTION\_MENU | 24 |

API 级别 5.1.1

|

操作菜单键

|

### AnimationType

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| PRESS\_TYPE\_DOWN | 0 |
API 级别 1.1.2

|

按键按下

|
| PRESS\_TYPE\_UP | 1 |

API 级别 1.1.2

|

按键释放

|
| PRESS\_TYPE\_ACTION | 2 |

API 级别 1.1.2

|

执行键的操作

|

### ClickType

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MAP\_MARKER\_ICON\_PIN | 0 |
API 级别 3.0.0

|

默认的 Garmin 地图标记图钉图标

|

### MapMode

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MAP\_MODE\_PREVIEW | 0 |
API 级别 3.0.0

|

[MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 的预览模式

|
| MAP\_MODE\_BROWSE | 1 |

API 级别 3.0.0

|

[MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 的浏览模式

|

### SwipeDirection

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| DRAG\_TYPE\_START | 0 |
API 级别 3.3.0

|

屏幕拖动开始

|
| DRAG\_TYPE\_CONTINUE | 1 |

API 级别 3.3.0

|

屏幕拖动的延续

|
| DRAG\_TYPE\_STOP | 2 |

API 级别 3.3.0

|

屏幕拖动结束

|

### ControlBarLeftButton

起始版本：

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

起始版本：

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

设置模拟时钟指针的状态

起始版本：

API 级别 3.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| ANALOG\_CLOCK\_STATE\_RESTING | 0 |
API 级别 3.3.0

|

将时钟指针设置为静止位置

|
| ANALOG\_CLOCK\_STATE\_SYSTEM\_TIME | 1 |

API 级别 3.3.0

|

将时钟指针设置为系统时间

|
| ANALOG\_CLOCK\_STATE\_HOLDING | 2 |

API 级别 3.3.0

|

将时钟指针设置为指定位置

|

### WatchFaceConfigType

WatchFace 配置类型。

起始版本：

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

起始版本：

API 级别 4.1.8

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| MENU\_THEME\_DEFAULT | 0 |
API 级别 4.1.8

|

设备指定的默认主题颜色。

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

起始版本：

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

此枚举可能会在 System 3 之后移除。

起始版本：

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

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| SLIDE\_IMMEDIATE | 0 |
API 级别 1.0.0

|

无过渡。

|
| SLIDE\_LEFT | 1 |

API 级别 1.0.0

|

View 向左滑动。

|
| SLIDE\_RIGHT | 2 |

API 级别 1.0.0

|

View 向右滑动。

|
| SLIDE\_DOWN | 3 |

API 级别 1.0.0

|

View 向下滑动。

|
| SLIDE\_UP | 4 |

API 级别 1.0.0

|

View 向上滑动。

|
| SLIDE\_BLINK | 5 |

API 级别 3.1.0

|

View 淡入。

|

### LayoutVerticalAlignment

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LAYOUT\_VALIGN\_TOP | \-0x7FFFFFFF |
API 级别 1.2.0

|

将 Drawable 对象的 locY 属性设置为此值，使其与设备上下文的顶边缘对齐 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_VALIGN\_BOTTOM | \-0x7FFFFFFE |

API 级别 1.2.0

|

将 Drawable 对象的 locY 属性设置为此值，使其与设备上下文的底边缘对齐 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_VALIGN\_CENTER | \-0x7FFFFFFD |

API 级别 1.2.0

|

将 Drawable 对象的 locY 属性设置为此值，使其在设备上下文中垂直居中 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_VALIGN\_START | \-0x7FFFFFFC |

API 级别 1.2.0

|

将 Drawable 对象的 locY 属性设置为此值，使其等于其父对象的 locY 属性。

|

### LayoutHorizontalAlignment

起始版本：

API 级别 1.0.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| LAYOUT\_HALIGN\_LEFT | \-0x7FFFFFFF |
API 级别 1.2.0

|

将 Drawable 对象的 locX 属性设置为此值，使其沿设备上下文的左边缘对齐 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_HALIGN\_RIGHT | \-0x7FFFFFFE |

API 级别 1.2.0

|

将 Drawable 对象的 locX 属性设置为此值，使其沿设备上下文的右边缘对齐 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_HALIGN\_CENTER | \-0x7FFFFFFD |

API 级别 1.2.0

|

将 Drawable 对象的 locX 属性设置为此值，使其在设备上下文中水平居中 ([Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))。

|
| LAYOUT\_HALIGN\_START | \-0x7FFFFFFC |

API 级别 1.2.0

|

将 Drawable 对象的 locX 属性设置为此值，使其等于其父对象的 locX 属性。

|

### AnimationEvent

起始版本：

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

ActionMenu 的主题

起始版本：

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

起始版本：

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

    向显示屏推送操作菜单。

- [**showToast**](#showToast-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) } or **Null**) as **Void**

    向显示屏推送 Toast 通知。

- [**startUserReview**](#startUserReview-instance_function)(token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/)) as **Void**

    启动应用评价 UI 流程。

- [**switchToView**](#switchToView-instance_function)(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) as **Void**

    从 View 堆栈中弹出当前 View，并推入一个新的 View。


## 类型定义详情

### **InputDelegates** as [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) or [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) or [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) or [WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/) or [WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/) or [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/) or [WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/) or [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/) or [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) or [WatchUi.ViewLoopDelegate](/connect-iq/api-docs/Toybox/WatchUi/ViewLoopDelegate/)

起始版本：

API 级别 1.0.0

### **Resource** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) or [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) or [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/) or [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

起始版本：

API 级别 1.0.0

### TouchEventSettings，格式为 { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

起始版本：

API 级别 1.0.0

### **Views** as [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) or [WatchUi.TextPicker](/connect-iq/api-docs/Toybox/WatchUi/TextPicker/) or [WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/) or [WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) or [WatchUi.NumberPicker](/connect-iq/api-docs/Toybox/WatchUi/NumberPicker/) or [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/)

起始版本：

API 级别 1.0.0

## 实例方法详情

### **animate(object as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), property as [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/), type as [WatchUi.AnimationType](/connect-iq/api-docs/Toybox/WatchUi/#AnimationType-module), start as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), stop as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), period as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), callback as **Null** or [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)() as **Void**)** as **Void**

为对象设置动画。

Animate 通过随时间改变对象属性来工作，例如 Drawable 的 x 位置。动画会在调用后开始，并持续指定的时长。在此期间，View 对象的 onUpdate() 方法将以更高频率调用，以便实现动画。

注意：

如果从后台应用或数据字段应用调用，或在低功耗模式下从表盘调用，将导致应用崩溃

参数：

- object — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要设置动画的对象

- property — ([Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)) —

    要设置动画的对象属性的 Symbol（例如：:locX、:locY 等）

- type — ([WatchUi.AnimationType](/connect-iq/api-docs/Toybox/WatchUi/#AnimationType-module)) —

    一个 [WatchUi.ANIM\_TYPE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ANIM_TYPE_LINEAR-const) 值

- start — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    属性的起始值

- stop — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    属性的结束值

- period — ([Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)) —

    动画持续时间，单位为秒

- callback — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    动画完成时调用的 Method；可以为 `null`


示例：

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


起始版本：

API 级别 1.0.0

### **cancelAllAnimations()** as **Void**

取消由 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 启动的动画

停止所有通过 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 启动的动画。这会使所有动画停留在最终帧，就像 [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 已运行完成一样。

另见：

- [WatchUi.animate()](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function)


起始版本：

API 级别 3.1.7

### **configureTouchEvents(options as [WatchUi.TouchEventSettings](/connect-iq/api-docs/Toybox/WatchUi/#TouchEventSettings-named_type))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

配置触摸事件设置；仅当 Watch Apps 和音频内容提供程序以前台模式运行时允许配置。

参数：

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

返回：

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果操作成功，则为 true，否则为 false。


起始版本：

API 级别 5.2.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果由既不是 Watch App 也不是 Audio Content Provider 的应用类型调用，或在后台模式下调用。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果提供了无效选项。


### **getCurrentView()** as \[ [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) or **Null**, [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null** \]

获取 UI 中当前显示的视图

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含视图和委托的数组。


起始版本：

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

返回：

- [Graphics.BoundingBox](/connect-iq/api-docs/Toybox/Graphics/BoundingBox/) —

    如果不存在子屏幕，或者存在虚拟子屏幕但未用于普通视图，则为 object 或 `null`。


起始版本：

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

返回：

- [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) —

    当前触摸事件设置。


起始版本：

API 级别 5.2.0

### **loadResource(resource as [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as [WatchUi.Resource](/connect-iq/api-docs/Toybox/WatchUi/#Resource-named_type)

从可执行文件加载资源。

注意：

在 CIQ 4.0.0 及更高版本中，[Toybox::Graphics::BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 和 [Toybox::Graphics::FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/) 会针对 [Toybox::WatchUi::BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) 和 [Toybox::WatchUi::FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/) 返回。

参数：

- resource — ([Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    项目 `resources.xml` 文件中定义的资源标识符


示例：

加载 String 资源

```
// The resources.xml file contents:
// <resources>
//     <string id="AppName">APEELingApp</string>
// </resources>
using Toybox.WatchUi;

var banana = WatchUi.loadResource(Rez.Strings.AppName);
```

返回：

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [WatchUi.AnimationResource](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [WatchUi.FontResource](/connect-iq/api-docs/Toybox/WatchUi/FontResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [Graphics.FontReference](/connect-iq/api-docs/Toybox/Graphics/FontReference/)

起始版本：

API 级别 1.0.0

### **makeReviewTokenRequest(callback as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(responseStatus as [WatchUi.ReviewRequestStatus](/connect-iq/api-docs/Toybox/WatchUi/#ReviewRequestStatus-module), token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/) or **Null**) as **Void**)** as **Void**

发起请求以邀请用户评价此应用

参数：

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

起始版本：

API 级别 3.4.2

### **popView(transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

从 View 堆栈中弹出当前 View。

参数：

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


起始版本：

API 级别 1.0.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果从后台、数据字段、速览或表盘应用调用，或者从小组件的基础页面调用，则会抛出此异常


### **pushView(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

将 View 推入 View 堆栈。

参数：

- view — ([WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)) —

    要推送的 View

- delegate — ([WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/), [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/), [WatchUi.MenuInputDelegate](/connect-iq/api-docs/Toybox/WatchUi/MenuInputDelegate/), [WatchUi.NumberPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/NumberPickerDelegate/), [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/), [WatchUi.TextPickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/TextPickerDelegate/), [WatchUi.WatchFaceDelegate](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/)) —

    用于处理 View 输入的输入委托。

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


起始版本：

API 级别 1.0.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 view 是 [MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 类型且可见地图区域参数无效，则抛出

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果从后台、数据字段、速览或表盘应用调用，或者新视图是 [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/)、[GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 或 [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)，则会抛出此异常


### **requestUpdate()** as **Void**

请求为当前 View 调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 方法。

另见：

- [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)


起始版本：

API 级别 1.0.0

### **showActionMenu(menu as [WatchUi.ActionMenu](/connect-iq/api-docs/Toybox/WatchUi/ActionMenu/), delegate as [WatchUi.ActionMenuDelegate](/connect-iq/api-docs/Toybox/WatchUi/ActionMenuDelegate/))** as **Void**

向显示屏推送操作菜单

注意：

操作菜单会在用户选择菜单项或按下返回按钮时自动关闭。

参数：

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

起始版本：

API 级别 3.4.0

### **showToast(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), options as { :icon as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) } or **Null**)** as **Void**

向显示屏推送 Toast 通知

参数：

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    要在通知提示中显示的文本。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典。

- :icon — ([Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        要随此通知显示的图标。如果未提供图标且系统要求 Toast 使用图标，则将使用应用程序图标。


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

起始版本：

API 级别 3.4.0

### **startUserReview(token as [WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/))** as **Void**

启动应用评价 UI 流程

参数：

- token — ([WatchUi.ReviewResponseToken](/connect-iq/api-docs/Toybox/WatchUi/ReviewResponseToken/)) —

    在 [makeReviewTokenRequest](/connect-iq/api-docs/Toybox/WatchUi/#makeReviewTokenRequest-instance_function) 中成功调用 callback 参数时作为参数传递的令牌。


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

起始版本：

API 级别 3.4.2

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果 `token` 不是 ReviewResponseToken。


### **switchToView(view as [WatchUi.Views](/connect-iq/api-docs/Toybox/WatchUi/#Views-named_type), delegate as [WatchUi.InputDelegates](/connect-iq/api-docs/Toybox/WatchUi/#InputDelegates-named_type) or **Null**, transition as [WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module))** as **Void**

从 View 堆栈中弹出当前 View，并推入一个新的 View。

注意：

在 ConnectIQ 3.1 之前，此方法仅支持切换到用户定义的 View 对象，并且对于给定 View 的委托，仅接受 InputDelegate 或 BehaviorDelegate 对象。

参数：

- view — ([WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)) —

    要推送的 View 对象

- delegate — ([WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/), [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)) —

    用于处理 View 输入的输入委托。

- transition — ([WatchUi.SlideType](/connect-iq/api-docs/Toybox/WatchUi/#SlideType-module)) —

    一个 [WatchUi.SLIDE\_\*](/connect-iq/api-docs/Toybox/WatchUi/#SLIDE_IMMEDIATE-const) 值


起始版本：

API 级别 1.0.0

抛出：

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果从后台、数据字段、速览或表盘应用调用，或者从小组件的基础页面调用且新视图为原生视图，或者新视图是 [DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/)、[GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 或 [WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)，则会抛出此异常
