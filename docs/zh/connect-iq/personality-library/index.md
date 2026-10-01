---
title: "Personality UI"
---
<a id="personality-ui"></a>
# Personality UI

每款 Garmin® 产品都有独特的设备个性。这种个性可能来自工业设计、屏幕技术、可用输入方式以及系统软件的图形风格。虽然不同 Garmin 产品通常会共享一些组件和模式，但设备个性会改变用户与这些组件交互的方式。因此，开发者很难制作出符合设备原生体验的应用。

Personality UI 旨在帮助你应对这些设计差异：它提供了一套能够让设计语言适配 Garmin 设备的样式系统，以及一组可在应用中重复使用的组件。

## Monkey Style

Monkey Style 是一种用于管理样式元素的领域专用属性语言。它大量借鉴了 CSS，但针对 Monkey C 进行了定制。Monkey C 支持开发者创建能够适配不同 Garmin 产品的样式属性常量。

## 个性组件

个性组件是一套资源和 Monkey Style 定义库，开发者可以在创建应用时以此为基础进行构建。

## 如何阅读本指南

本指南中的组件结合使用资源系统、[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) 类和 personality 选择器。每个组件都提供了创建示例。示例代码按以下标题分类：

| Header | Explanation |
| --- | --- |
| `layout.xml` | 放在资源定义的 layouts 部分。 |
| `menus.xml` | 放在资源定义的 menus 元素中。 |
| `InputDelegate.mc` | 放在输入处理器实现中。 |
| `View.mc` | 放在视图实现中。 |

## 组件概览

| Chapter | Description |
| --- | --- |
| [Colors](/connect-iq/personality-library/colors/) | 了解设计系统如何表达颜色。 |
| [Iconography](/connect-iq/personality-library/iconography/) | 将系统图标集成到应用中。 |
| [Typography](/connect-iq/personality-library/typography/) | 选择合适的字体。 |
| [Input Hints](/connect-iq/personality-library/input-hints/) | 为用户的操作提供视觉提示。 |
| [Prompts](/connect-iq/personality-library/prompts/) | 向用户提供文本信息。 |
| [Confirmations](/connect-iq/personality-library/confirmations/) | 询问用户是否要继续。 |
| [Toasts](/connect-iq/personality-library/toasts/) | 提供简短的状态更新。 |
| [Action Views](/connect-iq/personality-library/action-views/) | 创建包含交互信息的页面。 |
| [Page Loops](/connect-iq/personality-library/page-loops/) | 将信息拆分到多个页面。 |
| [Progress Indicators](/connect-iq/personality-library/progress-bars/) | 显示长时间操作的进度。 |
