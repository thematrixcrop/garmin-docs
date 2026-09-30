---
title: "Personality UI"
---
# 个性化 UI

每个Garmin®产品都有独特的设备个性.这种个性可能是工业设计,屏幕技术,可用的输入和系统软件的图形风格的组合.虽然 Garmin产品中经常存在共同的组件和模式,但设备个性改变了用户与这些组件的接口方式.这使得开发人员难以制作对设备原生感觉的应用程序.

个性UI的目标是通过提供一种风格系统来帮助您导航这些设计变化,以适应您的设计语言到Garmin设备,以及一组可重复使用的部件.

## Monkey 风格

子风格是用于管理风格元素的域名特定属性语言.它从CSS中很大程度上借用,但已经针对子C进行了定制.子C允许开发人员创建可以适应不同的Garmin产品之间的风格属性常量.

## 个性组件

个性组件是您创建应用程序时可以建立的资产和子风格定义库.

##如何阅读这本指南

在本指南中概述的组件采用资源系统,[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/)类和个性选择器的组合.每个组件都有一组概述如何创建的例子.样本代码的示例与下列列的标题分开.

| Header | Explanation |
| --- | --- |
| `layout.xml` |属于您的资源定义的布局部分.|
| `menus.xml` |属于资源定义的菜单元素.|
| `InputDelegate.mc` | 属于输入处理程序实现。 |
| `View.mc` | 属于视图实现。 |

## 组件概览

| Chapter | 说明 |
| --- | --- |
| [Colors](/connect-iq/personality-library/colors/) |了解设计系统中的颜色表达方式.|
| [图标](/connect-iq/personality-library/iconography/) | 将系统图标集成到您的应用中。 |
| [Typography](/connect-iq/personality-library/typography/) |选择适当的字体.|
| [输入提示](/connect-iq/personality-library/input-hints/) |为用户提供视觉指导.|
| [提示](/connect-iq/personality-library/prompts/) |为用户提供文本信息.|
| [Confirmations](/connect-iq/personality-library/confirmations/) |问用户是否愿意继续.|
| [Toast 提示](/connect-iq/personality-library/toasts/) |提供一个小的状态更新.|
| [操作视图](/connect-iq/personality-library/action-views/) |创建具有互动信息的页面.|
| [页面循环](/connect-iq/personality-library/page-loops/) | 跨多个页面拆分信息。 |
| [进度指示器](/connect-iq/personality-library/progress-bars/) |提供长期行动的状态.|
