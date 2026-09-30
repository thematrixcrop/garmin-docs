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

An app may have multiple View objects representing things like menus and other app states. Each View contains a Layout, which in turn contain [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) objects, such as [Bitmaps](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/) and [Text](/connect-iq/api-docs/Toybox/WatchUi/Text/). View objects also handle the life cycle of each app, which varies depending on the app type:

Widgets and Watch Apps

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) → [onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function)

Watch Faces

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

    Return the index of the layer from the bottom of the view layer stack.

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

    Set action menu indicator options for this view.

- [**setClockHandPosition**](#setClockHandPosition-instance_function)(options as { :clockState as [WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null** }) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    设置时钟指针的位置。

- [**setControlBar**](#setControlBar-instance_function)(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**) as **Void**

    设置此视图的控制栏选项。

- [**setKeyToSelectableInteraction**](#setKeyToSelectableInteraction-instance_function)(enable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    进入 Selectable 交互模式。

- [**setLayout**](#setLayout-instance_function)(layout as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)\> or **Null**) as **Void**

    设置 View 的布局。


## 类型定义详情

### **ActionMenuIndicatorOptions** as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

Since:

API 级别 1.0.0

### **ControlBarOptions** as { :leftButton as [WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module), :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :rightButton as [WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) }

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

    Thrown if the `layer` is not a WatchUi.Layer


### **clearLayers()** as **Void**

清除已添加到视图中的所有图层

Since:

API 级别 3.1.0

### **findDrawableById(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

按 ID 查找 Drawable。

此方法的一个常见用途是获取布局信息，以便格式化动态内容，例如运行时更新的字符串。

Parameters:

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The identifier of the Drawable to find


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

Return the index of the layer from the bottom of the view layer stack

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

    position in the layer stack to insert layer.


Since:

API 级别 3.1.0

### **onHide()** as **Void**

隐藏 View。

This is called before the View is removed from the foreground. This occurs when a new View object is pushed on top of the current one, when the current View is popped, or when the app is closed. Resources should be freed from memory at this point if the current View will be left on the page stack.

Since:

API 级别 1.0.0

### **onLayout(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

View 的入口点。

onLayout() is called before the View is shown to load resources and set up the layout of the View.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 1.0.0

### **onShow()** as **Void**

显示 View。

This is called when the View is brought into the foreground. Resources should be loaded into system memory for use in the View at this point.

Since:

API 级别 1.0.0

### **onUpdate(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

更新 View。

This is called when a View is brought to the foreground, after the call to [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function). While a View is active, this method is generally used to update dynamic content in the View. There are also some special cases when it will be invoked:

- On [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) calls within Widgets and Watch Apps

- Once per minute in Watch Faces when in low power mode

- Once per second in Watch Faces when in high power mode

- Once per second in Data Fields

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

Set action menu indicator options for this view. If enabled, [BehaviorDelegate.onActionMenu](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onActionMenu-instance_function) or [PickerDelegate.onActionMenu](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/#onActionMenu-instance_function) will be called when the action menu is pushed. Supported view types are [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/), [WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/), [WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/) and [WatchUi.Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/). Ignored when called on other view types.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Optional parameters for action menu indicator settings. If null, the action menu indicator will be disabled.

- :enabled — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

        The flag to enable or disable action menu indicator.


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

    Options for setting the analog clock state.

- :clockState — ([WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module)) —

        表示时钟状态的 ANALOG\_CLOCK\_STATE\_\* 值

- :hour — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Position for the hour hand in degrees clockwise from the 12 o'clock position

- :minute — ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        Position for the minute hand in degrees clockwise from the 12 o'clock position


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

    Thrown if invalid or no value is passed in for :clockState.

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if no :hour and :minute values are specified for the :clockState value of ANALOG\_CLOCK\_STATE\_HOLDING.


### **setControlBar(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**)** as **Void**

设置此视图的控制栏选项。

Use of this method has many restrictions.

With [View](/connect-iq/api-docs/Toybox/WatchUi/View/), the control bar can be hidden by passing `null`. If options is non-null, the `:leftButton` option must be provided. All values for [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module) and [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) are allowed.

With [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) and [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/), the `options` parameter cannot be `null`; the control bar is always shown. The `:leftButton` option must be set to [CONTROL\_BAR\_LEFT\_BUTTON\_BACK](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module). The `:rightButton` option may be `null`, for no button, or [CONTROL\_BAR\_RIGHT\_BUTTON\_ACCEPT](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module).

尝试在任何其他派生自 View 的类上调用此方法，或为给定视图类型使用不受支持的选项，将导致异常。

注意：

从 [onLayout](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 或 [onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 进行的控制栏可见性更改将导致异常。

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Optional parameters for control bar. If null, the control bar will be hidden.

- :leftButton — ([WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module)) —

        The icon to use for the left button. Must be a [CONTROL\_BAR\_LEFT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module) value.

- :rightButton — ([WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module)) —

        The icon to use for the right button. Must be a [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) value. If the value is `null` or not provided, no button will be shown.

- :title — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

        The title to display in the control bar. If the view is of type Menu2, the Menu2 title will be given priority and will be displayed in the control bar. If no title is specified, the application name will be used.


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

    Thrown if called on a view type that does not support control bar changes, or if called from [onLayout](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) or [onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function).

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    如果指定的一个或多个选项对该视图类型无效，则抛出。


### **setKeyToSelectableInteraction(enable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/))** as **Void**

进入 Selectable 交互模式。

When enabled, physical buttons may be used to cycle through on-screen [Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) objects. The first registered Selectable in the current layout will be highlighted initially.

Parameters:

- enable — ([Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) —

    Set to `true` if the mode should be enabled, otherwise `false`


Example:

Toggle the Selectable interaction mode with the Menu button

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

Set the array of Drawable objects to be managed by this View. The specified Drawables will be:

- 通过调用 [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 自动绘制

- Searched via calls to [findDrawableById()](/connect-iq/api-docs/Toybox/WatchUi/View/#findDrawableById-instance_function)


Parameters:

- layout — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    包含 Drawable 的数组，或 `null`。


Since:

API 级别 1.0.0
