---
title: "Glances"
---
# 速览

*自 API 级别 3.1.0 起*

小部件的初衷是让各种对用户重要的信息一目了然。虽然应用轮播确实允许快速导航，但浏览循环可能需要启动大量应用才能找到您正在寻找的内容。它还占用给定上下文的整个屏幕。

速览随着 fēnix® 6 设备引入，将小部件的展示变成了仪表板。用户看到的不是轮播而是指标列表。选择列表项将启动该小部件。API 级别 3.1.0 添加了支持此功能开发者的能力。

## 相关 API

| API | 用途 | API 级别 |
| --- | --- | --- |
| [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function) | 系统调用以获取您的速览 | 3.1.0 |
| [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) | 在速览列表中实现应用速览视图 | 3.1.0 |

## 如何在 Widget 中启用速览支持

[WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 允许应用实现速览。可以将 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 视为一个小型画布，用于展示来自小部件的执行摘要。[WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 与其他 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 对象类似，但仅应用于实现速览。重写 [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function) 并返回您对 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 的实现以添加速览支持。

在 API 级别 4.0.0 之前的设备上，如果小部件不重写，将使用默认 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/)，它仅显示小部件的名称。在 API 级别 4.0.0 及以上版本中，应用和小部件必须实现速览视图才能出现在速览列表中。


![速览页面](/connect-iq/resources/programmers-guide/glance_page.png)

## 小部件如何在"速览页面"启动

当小部件作为"速览页面"的一部分显示时，它将在已分配有限内存（大多数设备为 32KB）的速览模式下启动。

类似于 [后台服务]（/connect-iq/core-topics/backgrounding/#background-services），开发者可以使用 `:glance` 注解来指示在速览模式下运行小部件时哪些模块和/或类是必需的。就像后台服务一样，选择性使用注解允许开发者限制速览模式下的内存使用。

在设计小部件和小部件速览时，最好将它们视为独立项目但能协同工作。无法保证小部件总是以速览模式启动，例如在转换到其标准小部件模式之前。

## 速览生命周期

根据设备的资源限制，[WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 可以通过两种不同方式进行更新。

### 实时 UI 更新

资源充足的设备将在速览模式下启动小部件并保持其活跃状态。系统将按需更新提供的 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/)，对 [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) 的调用将按预期触发 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 更新。

**注意：** 强烈建议更新速率保持在 1HZ 以下以提供更好的滚动体验。

### 后台 UI 更新

内存较少的设备仅在系统认为适当时启动应用，并且对 [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) 的调用将不起作用。此类设备在其可见时（激活时）和距上次更新至少 30 秒时会更新他们的速览视图。

在后台更新期间，小部件及其 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 将通过完整生命周期运行。[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 函数 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)、[AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function) 将被调用来启动应用并获取视图。一旦检索到 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/)，将调用 `View` 函数 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function)、[View.onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function)、[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 和 [View.onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function)。应用终止时将调用 [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function) 函数，应用将关闭。

呈现给传递给 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 的所有内容将在文件系统中缓存并用于显示，直到系统下次决定进行更新。

### 最佳实践

小部件支持的大部分功能在作为速览运行时仍然受支持，例如访问应用存储和发出 Web 请求。然而，开发者应专注于使 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 快速加载并将 CPU 密集型工作移到后台服务。
