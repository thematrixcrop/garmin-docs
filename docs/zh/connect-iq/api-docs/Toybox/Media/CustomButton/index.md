---
title: "类：Toybox.Media.CustomButton"
---
# 类：Toybox.Media.CustomButton

继承：

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.Media.CustomButton](/connect-iq/api-docs/Toybox/Media/CustomButton/)


[显示全部](#)

## 概述

CustomButton 可执行除 PLAYBACK\_CONTROL\_\* 操作之外的媒体播放器操作。在媒体播放器中按下 CustomButton 时，将调用 ContentDelegate.onCustomButton(button) 函数，并将按下的按钮作为参数传入。

起始版本：

API 级别 3.0.3

## 实例方法摘要 [collapse](#)

- [**getImage**](#getImage-instance_function)(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

    由系统调用以绘制 Media Player 中的按钮。

- [**getState**](#getState-instance_function)() as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

    由系统调用以确定按钮的当前状态。

- [**getText**](#getText-instance_function)(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

    由系统调用以绘制按钮名称。


## 实例方法详情

### **getImage(image as [Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module), highlighted as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/) or [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) or **Null**

由系统调用以绘制 Media Player 中的按钮

注意：

[BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) 仅支持 CIQ 4.0.0 及更高版本。

参数：

- image — ([Media.ButtonImage](/connect-iq/api-docs/Toybox/Media/#ButtonImage-module)) —

    一个 BUTTON\_IMAGE\_\* 值

- highlighted — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果按钮已高亮显示，则为 `true`，否则为 `false`


返回：

- [WatchUi.BitmapResource](/connect-iq/api-docs/Toybox/WatchUi/BitmapResource/), [Graphics.BitmapReference](/connect-iq/api-docs/Toybox/Graphics/BitmapReference/) —

    按钮的位图表示


起始版本：

API 级别 3.0.3

### **getState()** as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)

由系统调用以确定按钮的当前状态

返回：

- [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module) —

    表示按钮当前状态的 BUTTON\_STATE\_\* 枚举值


起始版本：

API 级别 3.0.3

### **getText(state as [Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module))** as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or **Null**

由系统调用以绘制按钮名称

参数：

- state — ([Media.ButtonState](/connect-iq/api-docs/Toybox/Media/#ButtonState-module)) —

    一个表示按钮当前状态的 BUTTON\_STATE\_\* 值


返回：

- [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) —

    按钮的名称


起始版本：

API 级别 3.0.3
