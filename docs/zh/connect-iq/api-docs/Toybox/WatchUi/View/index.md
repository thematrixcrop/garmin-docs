---
title: "Class: Toybox.WatchUi.View"
---
# 类：Toybox.WatchUi.View

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)


[show all](#)

## 概述

View 是表示应用内页面的对象。

应用可能有多个 View 对象，用于表示菜单和其他应用状态。每个 View 都包含一个 Layout，而 Layout 又包含 [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 对象，例如 [Bitmaps](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/) 和 [Text](/connect-iq/api-docs/Toybox/WatchUi/Text/)。View 对象还负责处理每个应用的生命周期，该生命周期取决于应用类型：

小组件和手表应用

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) → [onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function)

表盘

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)

数据字段

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)

如果数据字段的大小自上次 onUpdate() 以来发生变化，则会在 onUpdate() 之前调用 onLayout()。但是，对于 [SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/) 对象，不会调用 onLayout()、onShow() 和 onUpdate()。

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Example:

基本的小组件 View 类定义

```
using Toybox.WatchUi;

class MyWidgetView extends WatchUi.View {
    function initialize() {
        View.initialize();
    }

    // Resources are loaded here
    function onLayout(dc) {
        setLayout(Rez.Layouts.MainLayout(dc));
    }

    // onShow() is called when this View is brought to the foreground
    function onShow() {
    }

    // onUpdate() is called periodically to update the View
    function onUpdate(dc) {
        View.onUpdate(dc);
    }

    // onHide() is called when this View is removed from the screen
    function onHide() {
    }
}
```

Since:

API 级别 1.0.0

应用类型与运行时上下文：

- 音频内容提供者

- 数据字段

- 速览

- 手表应用

- 表盘

- 微件


## 直接已知子类

[WatchUi.DataField](/connect-iq/api-docs/Toybox/WatchUi/DataField/), [WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/), [WatchUi.GlanceView](/connect-iq/api-docs/Toybox/WatchUi/GlanceView/), [WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/), [WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/), [WatchUi.Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/), [WatchUi.WatchFace](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/)

## 类型定义摘要 [collapse](#)

- [**ActionMenuIndicatorOptions**](#ActionMenuIndicatorOptions-named_type) as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }
- [**ControlBarOptions**](#ControlBarOptions-named_type) as { :leftButton as [WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module), :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :rightButton as [WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) }

## 实例方法摘要 [collapse](#)

- [**addLayer**](#addLayer-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) as **Void**

    在视图的图层堆栈顶部添加一个 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)。

- [**clearLayers**](#clearLayers-instance_function)() as **Void**

    清除已添加到视图中的所有图层。

- [**findDrawableById**](#findDrawableById-instance_function)(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    按 ID 查找 Drawable。

- [**getLayerIndex**](#getLayerIndex-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    返回视图层堆栈中从底部开始的图层索引。

- [**getLayers**](#getLayers-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)\> or **Null**

    获取当前添加到视图的图层堆栈副本，并按绘制顺序排序，即

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**insertLayer**](#insertLayer-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/), idx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    将图层插入图层堆栈中的给定索引处，这将停止动画播放。

- [**onHide**](#onHide-instance_function)() as **Void**

    隐藏 View。

- [**onLayout**](#onLayout-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    View 的入口点。

- [**onShow**](#onShow-instance_function)() as **Void**

    显示 View。

- [**onUpdate**](#onUpdate-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    更新 View。

- [**removeLayer**](#removeLayer-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    从 View 图层堆栈中移除一个图层，这将停止动画播放。

- [**setActionMenuIndicator**](#setActionMenuIndicator-instance_function)(options as [View.ActionMenuIndicatorOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ActionMenuIndicatorOptions-named_type) or **Null**) as **Void**

    为此视图设置操作菜单指示器选项。

- [**setClockHandPosition**](#setClockHandPosition-instance_function)(options as { :clockState as [WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null** }) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置时钟指针的位置。

- [**setControlBar**](#setControlBar-instance_function)(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**) as **Void**

    设置此视图的控制栏选项。

- [**setKeyToSelectableInteraction**](#setKeyToSelectableInteraction-instance_function)(enable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    进入 Selectable 交互模式。

- [**setLayout**](#setLayout-instance_function)(layout as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)\> or **Null**) as **Void**

    设置 View 的布局。


## 类型定义详情

### ActionMenuIndicatorOptions，格式为 { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

Since:

API 级别 1.0.0

### ControlBarOptions，格式为 { :leftButton as [WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module), :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :rightButton as [WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) }

Since:

API 级别 1.0.0

## 实例方法详情

### **addLayer(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as **Void**

在视图的图层堆栈顶部添加一个 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)。用户无需手动将图层绘制到屏幕上；将图层添加到视图后，系统会在屏幕更新期间绘制所有图层，其中包括 View 更新（例如 onUpdate/onPartialUpdate）和动画播放。

对 DataFiled 和后台应用禁用

Parameters:

- layer — ([WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) —

    一个要添加的 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) 对象


Since:

API 级别 3.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `layer` 不是 WatchUi.Layer，则抛出


### **clearLayers()** as **Void**

清除已添加到视图中的所有图层

Since:

API 级别 3.1.0

### **findDrawableById(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

按 ID 查找 Drawable。

此方法的一个常见用途是获取布局信息，以便格式化动态内容，例如运行时更新的字符串。

Parameters:

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    要查找的 Drawable 的标识符


Example:

将时钟时间格式化为居中的蓝色文本

```
// The layout.xml file contents:
// <layout id="WatchFace">
//      <label id="TimeLabel" x="center" y="center" font="Graphics.FONT_LARGE" justification="Graphics.TEXT_JUSTIFY_CENTER" color="Graphics.COLOR_BLUE" />
// </layout>

using Toybox.Graphics;
using Toybox.Lang;
using Toybox.System;
using Toybox.WatchUi.View;

var clockTime = System.getClockTime();
var timeString = Lang.format(
    "$1$:$2$",
    [clockTime.hour, clockTime.min.format("%02d")]
);
var view = View.findDrawableById("TimeLabel");
view.setText(timeString);
```

Returns:

- [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) —

    找到的 Drawable，否则为 `null`


另见：

- [System.getClockTime()](/connect-iq/api-docs/Toybox/System/#getClockTime-instance_function)


Since:

API 级别 1.0.0

### **getLayerIndex(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

返回视图层堆栈中从底部开始的图层索引

Parameters:

- layer —

    一个 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) 图层对象


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    图层堆栈中从底部开始的图层索引


Since:

API 级别 3.1.0

### **getLayers()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)\> or **Null**

获取当前添加到视图的图层堆栈副本，并按绘制顺序排序，即从底部到顶部。

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    包含 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) 或 `null` 的数组


Since:

API 级别 3.1.0

### **initialize()**

Constructor

Since:

API 级别 2.1.0

### **insertLayer(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/), idx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

将图层插入图层堆栈中的给定索引处，这将停止动画播放。

Parameters:

- layer — ([WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) —

    要插入的层。

- idx — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

    要插入图层的图层堆栈位置。


Since:

API 级别 3.1.0

### **onHide()** as **Void**

隐藏 View。

从前景移除 View 之前会调用此函数。当新的 View 对象被推送到当前 View 顶部、当前 View 被弹出或应用关闭时，就会发生这种情况。如果当前 View 将从页面堆栈中移除，此时应释放内存中的资源。

Since:

API 级别 1.0.0

### **onLayout(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

View 的入口点。

onLayout() 会在 View 显示前被调用，用于加载资源并设置 View 的布局。

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 1.0.0

### **onShow()** as **Void**

显示 View。

View 被置于前景时会调用此函数。此时应将资源加载到系统内存中，以供 View 使用。

Since:

API 级别 1.0.0

### **onUpdate(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

更新 View。

在调用 [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) 后，View 被置于前景时会调用此函数。当 View 处于活动状态时，此方法通常用于更新 View 中的动态内容。在以下特殊情况下也会调用此方法：

- 在 Widgets 和 Watch Apps 中调用 [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) 时

- 低功耗模式下的 Watch Faces 每分钟一次

- 高功耗模式下的 Watch Faces 每秒一次

- Data Fields 中每秒一次

- 当 [animation](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) 处于活动状态时以更高频率进行

- View 转换期间可能会多次调用 onUpdate()


如果继承 View 的类未实现此函数，则 View 中包含的任何 Drawable 对象都会自动绘制。

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


另见：

- [WatchFace.onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function)


Since:

API 级别 1.0.0

### **removeLayer(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

从 View 图层堆栈中移除一个图层，这将停止动画播放。

Parameters:

- layer —

    一个要从图层堆栈中移除的 [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)。


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果成功移除图层，则为 `true`，否则为 `false`


Since:

API 级别 3.1.0

### **setActionMenuIndicator(options as [View.ActionMenuIndicatorOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ActionMenuIndicatorOptions-named_type) or **Null**)** as **Void**

为此视图设置操作菜单指示器选项。如果启用操作菜单，则在推送操作菜单时会调用 [BehaviorDelegate.onActionMenu](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onActionMenu-instance_function) 或 [PickerDelegate.onActionMenu](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/#onActionMenu-instance_function)。支持的视图类型为 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)、[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)、[WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/) 和 [WatchUi.Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/)。在其他视图类型上调用时会被忽略。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    用于操作菜单指示器设置的可选参数。如果为 null，则禁用操作菜单指示器。

- :enabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        用于启用或禁用操作菜单指示器的标志


:::details 支持的设备

-   Venu® 4 41mm
-   Venu® 4 45mm / D2™ Air X15
-   Venu® X1
-   vívoactive® 6

:::

Since:

API 级别 5.1.1

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果指定的一个或多个选项对该视图类型无效，则抛出。


### **setClockHandPosition(options as { :clockState as [WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null** })** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

设置时钟指针的位置。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    设置模拟时钟状态的选项。

- :clockState — ([WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module)) —

        表示时钟状态的 ANALOG\_CLOCK\_STATE\_\* 值

- :hour — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        时针位置，以从 12 点位置顺时针计算的角度表示

- :minute — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        分针位置，以从 12 点位置顺时针计算的角度表示


:::details 支持的设备

-   Instinct® Crossover AMOLED
-   Instinct® Crossover

:::

Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    如果更改模拟指针的请求成功，则为 `true`，否则为 `false`。


Since:

API 级别 3.3.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果为 :clockState 传递了无效值或未传递值，则会抛出此异常。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果未为 ANALOG\_CLOCK\_STATE\_HOLDING 的 :clockState 值指定 :hour 和 :minute 值，则抛出。


### **setControlBar(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**)** as **Void**

设置此视图的控制栏选项。

使用此方法有许多限制。

使用 [View](/connect-iq/api-docs/Toybox/WatchUi/View/) 时，可以通过传递 `null` 隐藏控制栏。如果 options 非 null，则必须提供 `:leftButton` 选项。[CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module) 和 [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) 的所有值均允许。

使用 [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 和 [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/) 时，`options` 参数不能为 `null`；控制栏始终显示。`:leftButton` 选项必须设置为 [CONTROL\_BAR\_LEFT\_BUTTON\_BACK](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module)。`:rightButton` 选项可以为 `null`（表示无按钮）或 [CONTROL\_BAR\_RIGHT\_BUTTON\_ACCEPT](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module)。

尝试在任何其他派生自 View 的类上调用此方法，或为给定视图类型使用不受支持的选项，将导致异常。

注意：

从 [onLayout](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 或 [onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 进行的控制栏可见性更改将导致异常。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    控制栏的可选参数。如果为 null，则隐藏控制栏。

- :leftButton — ([WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module)) —

        左按钮要使用的图标。必须为 [CONTROL\_BAR\_LEFT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module) 值。

- :rightButton — ([WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module)) —

        右按钮要使用的图标。必须为 [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) 值。如果值为 `null` 或未提供，则不会显示按钮。

- :title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        要显示在控制栏中的标题。如果视图类型为 Menu2，则优先使用 Menu2 标题，并将其显示在控制栏中。如果未指定标题，则使用应用名称。


:::details 支持的设备

-   Edge® 1040 / 1040 Solar
-   Edge® 1050
-   Edge® 540 / 540 Solar
-   Edge® 550
-   Edge® 840 / 840 Solar
-   Edge® 850
-   Edge® Explore 2
-   Edge® MTB

:::

Since:

API 级别 4.1.2

Throws:

- ([Lang.OperationNotAllowedException](/connect-iq/api-docs/Toybox/Lang/OperationNotAllowedException/)) —

    如果在不支持控制栏更改的视图类型上调用，或者从 [onLayout](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 或 [onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 调用，则会抛出此异常。

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果指定的一个或多个选项对该视图类型无效，则抛出。


### **setKeyToSelectableInteraction(enable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

进入 Selectable 交互模式。

启用后，可使用实体按钮循环浏览屏幕上的 [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 对象。当前布局中注册的第一个 Selectable 最初会被高亮显示。

Parameters:

- enable — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    如果应启用该模式，则设置为 `true`；否则设置为 `false`


Example:

使用菜单按钮切换可选择交互模式

```
var selectableMode = false;
function onMenu() {
    selectableMode = !selectableMode;
    // currentView is a View containing Selectable objects
    currentView.setKeyToSelectableInteraction(selectableMode);
    return true;
}
```

Since:

API 级别 2.1.0

Throws:

- ([Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)) —

    在数据字段应用中调用时抛出


### **setLayout(layout as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)\> or **Null**)** as **Void**

设置 View 的布局。

设置由此 View 管理的 Drawable 对象数组。指定的 Drawable 将：

- 通过调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 自动绘制

- 通过调用 [findDrawableById()](/connect-iq/api-docs/Toybox/WatchUi/View/#findDrawableById-instance_function) 进行搜索


Parameters:

- layout — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 Drawable 的数组，或 `null`。


Since:

API 级别 1.0.0
