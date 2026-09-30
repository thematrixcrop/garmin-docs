---
title: "Class: Toybox.Media.SystemButton"
---
# Class: Toybox.Media.SystemButton

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)


[show all](#)

## 概述

A SystemButton allows an app to override a default media player button. The button can be overridden by providing a new [Toybox::WatchUi::BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Toybox::Graphics::BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or a [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) representing a 24-bit RRGGBB color value. If a color value is provided then the system default button will be used but will drawn using the given color.

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Since:

API 级别 3.0.3

## 实例方法摘要 [collapse](#)

- [**getImage**](#getImage-instance_function)(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or **Null**

    Called by the system to draw the button in the Media Player.

- [**initialize**](#initialize-instance_function)(type as [Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module), options as { :disabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)

    Constructor.


## 实例方法详情

### **getImage(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or **Null**

Called by the system to draw the button in the Media Player

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- image — ([Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module)) —

    一个 BUTTON\_IMAGE\_\* 值

- state — ([Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) —

    一个表示按钮当前状态的 BUTTON\_STATE\_\* 值

- highlighted — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Set to `true` if the button is highlighted, otherwise `false`


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) —

    A bitmap representation of the button or a 24-bit RRGGBB color


Since:

API 级别 3.0.3

### **initialize(type as [Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module), options as { :disabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)**

Constructor

Parameters:

- type — ([Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module)) —

    A PLAYBACK\_CONTROL\_\* value for the button.

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :disabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        Set to `true` if the button is disabled, otherwise `false`


Since:

API 级别 3.0.3
