---
title: "Glances"
---
<a id="glances"></a>
# Glance

*自 API 级别 3.1.0 起支持*

Widget 的设计初衷，是让用户能够一眼看到重要信息。应用轮播可以快速导航，但用户可能需要启动多个应用，才能在循环中找到所需内容，而且每个应用都会占用整个屏幕。

fēnix® 6 引入了 Glance，将 Widget 的展示方式变成仪表板。用户看到的不再是应用轮播，而是一组指标列表。选择列表项后，系统会启动对应的 Widget。API 级别 3.1.0 开始支持开发者实现此功能。

## 相关 API

| API | 用途 | API 级别 |
| --- | --- | --- |
| [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function) | 系统调用此方法获取 Glance | 3.1.0 |
| [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) | 在 Glance 列表中实现应用的 Glance 视图 | 3.1.0 |

## 在 Widget 中启用 Glance

[WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 允许应用实现 Glance。可以将它看作一个小型画布，用于展示 Widget 的摘要信息。它与其他 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 对象类似，但应仅用于实现 Glance。重写 [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function)，并返回 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 的实现，即可添加 Glance 支持。

在 API 级别 4.0.0 之前的设备上，如果 Widget 未重写 `getGlanceView()`，系统会使用默认的 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/)，只显示 Widget 名称。从 API 级别 4.0.0 开始，应用和 Widget 必须实现 Glance 视图，才能出现在 Glance 列表中。

![Glance 页面](/connect-iq/resources/programmers-guide/glance_page.png)

## Widget 如何在 Glance 页面启动

Widget 作为 Glance 页面的一部分显示时，会以 Glance 模式启动，并且只能使用有限的内存（大多数设备为 32 KB）。

与[后台服务](/connect-iq/core-topics/backgrounding/#background-services)类似，开发者可以使用 `:glance` 注解，指出 Widget 在 Glance 模式下运行所需的模块和类。选择性地添加该注解，可以限制 Glance 模式下的内存使用。

设计 Widget 和 Glance 时，最好将两者视为可以协同工作的相对独立的部分。不能保证 Widget 总是以 Glance 模式启动，例如它可能先以 Glance 模式启动，随后切换到标准 Widget 模式。

## Glance 生命周期

根据设备的资源限制，[WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 有两种更新方式。

### 实时 UI 更新

资源充足的设备会以 Glance 模式启动 Widget，并保持其运行。系统会按需更新提供的 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/)，调用 [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) 也会按预期触发 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 更新。

**注意：** 强烈建议将更新频率保持在 1 Hz 以下，以获得更流畅的滚动体验。

### 后台 UI 更新

内存较少的设备只会在系统认为合适时启动应用，调用 [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) 不会产生效果。此类设备会在 Glance 变为可见（激活）且距上次更新至少经过 30 秒后更新 Glance 视图。

后台更新期间，Widget 及其 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 会经历完整的生命周期。[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 的 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function) 和 [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function) 会被调用，以启动应用并获取视图。获取到 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 后，会依次调用 `View` 的 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function)、[View.onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function)、[View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 和 [View.onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function)。应用终止时会调用 [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function)，随后应用关闭。

渲染到传入的 [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/) 的所有内容都会缓存到文件系统，并持续用于显示，直到系统决定进行下一次更新。

### 最佳实践

Widget 支持的大多数功能在 Glance 模式下仍然可用，例如访问应用存储和发起 Web 请求。不过，开发者应让 [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/) 尽快加载，并将 CPU 密集型工作转移到后台服务。

支持音乐的可穿戴设备从不跳过“腿部训练”。

不支持音乐的可穿戴设备则在节食 RAM。
