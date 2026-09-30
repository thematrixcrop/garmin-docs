---
title: "Class: Toybox.Media.CustomButton"
---
# Class: Toybox.Media.CustomButton

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/)


[show all](#)

## 概述

A CustomButton allows for a media player action other than one of the PLAYBACK\_CONTROL\_\* actions. When a CustomButton is pressed in the media player the ContentDelegate.onCustomButton(button) function is called with the pressed button as a parameter.

Since:

API 级别 3.0.3

## 实例方法摘要 [collapse](#)

- [**getImage**](#getImage-instance_function)(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

    由系统调用以绘制 Media Player 中的按钮。

- [**getState**](#getState-instance_function)() as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

    Called by the system to determine if the current state of the button.

- [**getText**](#getText-instance_function)(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    Called by the system to draw the name of the button.


## 实例方法详情

### **getImage(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

由系统调用以绘制 Media Player 中的按钮

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅支持 CIQ 4.0.0 及更高版本。

Parameters:

- image — ([Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module)) —

    一个 BUTTON\_IMAGE\_\* 值

- highlighted — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果按钮已高亮显示，则为 `true`，否则为 `false`


Returns:

- [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) —

    按钮的位图表示


Since:

API 级别 3.0.3

### **getState()** as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

Called by the system to determine if the current state of the button

Returns:

- [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module) —

    A BUTTON\_STATE\_\* enum value representing the current state of the button


Since:

API 级别 3.0.3

### **getText(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

Called by the system to draw the name of the button

Parameters:

- state — ([Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) —

    一个表示按钮当前状态的 BUTTON\_STATE\_\* 值


Returns:

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    the name of the button


Since:

API 级别 3.0.3
