---
title: "Class: Toybox.Media.SystemButton"
---
# 类：Toybox.Media.SystemButton

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.SystemButton](/connect-iq/api-docs/Toybox/Media/SystemButton/)


[show all](#)

## 概述

SystemButton 允许应用覆盖默认的媒体播放器按钮。可以通过提供新的 [Toybox::WatchUi::BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/)、[Toybox::Graphics::BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/)，或表示 24 位 RRGGBB 颜色值的 [Toybox::Lang::Number](/connect-iq/api-docs/Toybox/Lang/Number/) 来覆盖按钮。如果提供颜色值，则会使用系统默认按钮，但使用给定颜色绘制。

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Since:

API 级别 3.0.3

## 实例方法摘要 [collapse](#)

- [**getImage**](#getImage-instance_function)(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or **Null**

    由系统调用以绘制 Media Player 中的按钮。

- [**initialize**](#initialize-instance_function)(type as [Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module), options as { :disabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)

    Constructor.


## 实例方法详情

### **getImage(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [Graphics.BitmapType](/connect-iq/api-docs/Toybox/Graphics/#BitmapType-named_type) or [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type) or **Null**

由系统调用以绘制 Media Player 中的按钮

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅在 CIQ 4.0.0 及更高版本中受支持

Parameters:

- image — ([Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module)) —

    一个 BUTTON\_IMAGE\_\* 值

- state — ([Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) —

    一个表示按钮当前状态的 BUTTON\_STATE\_\* 值

- highlighted — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果按钮被高亮显示，则设置为 `true`；否则设置为 `false`


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) —

    按钮的位图表示或 24 位 RRGGBB 颜色


Since:

API 级别 3.0.3

### **initialize(type as [Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module), options as { :disabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) } or **Null**)**

Constructor

Parameters:

- type — ([Media.PlaybackControl](/connect-iq/api-docs/Toybox/Media/#PlaybackControl-module)) —

    按钮对应的 PLAYBACK\_CONTROL\_\* 值。

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    选项字典

- :disabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        如果按钮被禁用，则设置为 `true`；否则设置为 `false`


Since:

API 级别 3.0.3
