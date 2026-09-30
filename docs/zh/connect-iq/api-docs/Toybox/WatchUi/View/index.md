---
title: "Class: Toybox.WatchUi.View"
---
# Class: Toybox.WatchUi.View

Inherits:

Toybox.Lang.Object

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)


[show all](#)

## 概述

A View is an object that represents a page within an app.

An app may have multiple View objects representing things like menus and other app states. Each View contains a Layout, which in turn contain [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) objects, such as [Bitmaps](/connect-iq/api-docs/Toybox/WatchUi/Bitmap/) and [Text](/connect-iq/api-docs/Toybox/WatchUi/Text/). View objects also handle the life cycle of each app, which varies depending on the app type:

Widgets and Watch Apps

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) → [onHide()](/connect-iq/api-docs/Toybox/WatchUi/View/#onHide-instance_function)

Watch Faces

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)

Data Fields

[onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) → [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function) → [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)

If the size of the data field has changed since the last onUpdate(), onLayout() will be called prior to onUpdate(). However, onLayout(), onShow(), and onUpdate() are not called for [SimpleDataField](/connect-iq/api-docs/Toybox/WatchUi/SimpleDataField/) objects.

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Example:

A basic widget View class definition

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

    Add a [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) on the top of view's layer stack.

- [**clearLayers**](#clearLayers-instance_function)() as **Void**

    Clear all layers that are added to the view.

- [**findDrawableById**](#findDrawableById-instance_function)(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

    按 ID 查找 Drawable。

- [**getLayerIndex**](#getLayerIndex-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

    Return the index of the layer from the bottom of the view layer stack.

- [**getLayers**](#getLayers-instance_function)() as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)\> or **Null**

    Get a copy of the layer stack currently added to the view, sorted by the drawing order, i.e.

- [**initialize**](#initialize-instance_function)()

    Constructor.

- [**insertLayer**](#insertLayer-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/), idx as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    将图层插入图层堆栈中的给定索引处，这将停止动画播放。

- [**onHide**](#onHide-instance_function)() as **Void**

    隐藏 View。

- [**onLayout**](#onLayout-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    The entry point for the View.

- [**onShow**](#onShow-instance_function)() as **Void**

    Show the View.

- [**onUpdate**](#onUpdate-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    Update the View.

- [**removeLayer**](#removeLayer-instance_function)(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Remove a layer from the view layer stack, this will stop animation playback.

- [**setActionMenuIndicator**](#setActionMenuIndicator-instance_function)(options as [View.ActionMenuIndicatorOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ActionMenuIndicatorOptions-named_type) or **Null**) as **Void**

    Set action menu indicator options for this view.

- [**setClockHandPosition**](#setClockHandPosition-instance_function)(options as { :clockState as [WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null** }) as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

    Set the clock hands position.

- [**setControlBar**](#setControlBar-instance_function)(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**) as **Void**

    Set control bar options for this view.

- [**setKeyToSelectableInteraction**](#setKeyToSelectableInteraction-instance_function)(enable as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)) as **Void**

    进入 Selectable 交互模式。

- [**setLayout**](#setLayout-instance_function)(layout as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)\> or **Null**) as **Void**

    Set the layout for the View.


## 类型定义详情

### **ActionMenuIndicatorOptions** as { :enabled as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) }

Since:

API 级别 1.0.0

### **ControlBarOptions** as { :leftButton as [WatchUi.ControlBarLeftButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module), :title as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), :rightButton as [WatchUi.ControlBarRightButton](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) }

Since:

API 级别 1.0.0

## 实例方法详情

### **addLayer(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as **Void**

Add a [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) on the top of view's layer stack. Users do not need to draw the layer on the screen manually, instead, once a layer is added to the view, the system will draw all layers during screen updates which include View update (e.g. onUpdate/onPartialUpdate) and animation playback.

Disabled for DataFiled and Background Apps

Parameters:

- layer — ([WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)) —

    a [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) object to add


Since:

API 级别 3.1.0

Throws:

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    Thrown if the `layer` is not a WatchUi.Layer


### **clearLayers()** as **Void**

Clear all layers that are added to the view

Since:

API 级别 3.1.0

### **findDrawableById(identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/))** as [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) or **Null**

按 ID 查找 Drawable。

A common use for this method is to get layout information to format dynamic content, such as a string that updates at runtime.

Parameters:

- identifier — ([Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)) —

    The identifier of the Drawable to find


Example:

Formatting the clock time as centered, blue text

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

    A Drawable if found, otherwise `null`


另见：

- [System.getClockTime()](/connect-iq/api-docs/Toybox/System/#getClockTime-instance_function)


Since:

API 级别 1.0.0

### **getLayerIndex(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

Return the index of the layer from the bottom of the view layer stack

Parameters:

- layer —

    a [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) a layer object


Returns:

- [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) —

    index of the layer from the bottom of the layer stack


Since:

API 级别 3.1.0

### **getLayers()** as [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/)\> or **Null**

Get a copy of the layer stack currently added to the view, sorted by the drawing order, i.e. from the bottom to the top.

Returns:

- [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) —

    an array of [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) or `null`


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

    a layer to insert.

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

The entry point for the View.

onLayout() is called before the View is shown to load resources and set up the layout of the View.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 1.0.0

### **onShow()** as **Void**

Show the View.

This is called when the View is brought into the foreground. Resources should be loaded into system memory for use in the View at this point.

Since:

API 级别 1.0.0

### **onUpdate(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

Update the View.

This is called when a View is brought to the foreground, after the call to [onShow()](/connect-iq/api-docs/Toybox/WatchUi/View/#onShow-instance_function). While a View is active, this method is generally used to update dynamic content in the View. There are also some special cases when it will be invoked:

- On [WatchUi.requestUpdate()](/connect-iq/api-docs/Toybox/WatchUi/#requestUpdate-instance_function) calls within Widgets and Watch Apps

- Once per minute in Watch Faces when in low power mode

- Once per second in Watch Faces when in high power mode

- Once per second in Data Fields

- At an increased rate while an [animation](/connect-iq/api-docs/Toybox/WatchUi/#animate-instance_function) is active

- More than one call to onUpdate() may occur during View transitions


If a class that extends View does not implement this function then any Drawable objects contained in the View will automatically be drawn.

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


另见：

- [WatchFace.onPartialUpdate()](/connect-iq/api-docs/Toybox/WatchUi/WatchFace/#onPartialUpdate-instance_function)


Since:

API 级别 1.0.0

### **removeLayer(layer as [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/))** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Remove a layer from the view layer stack, this will stop animation playback.

Parameters:

- layer —

    a [WatchUi.Layer](/connect-iq/api-docs/Toybox/WatchUi/Layer/) to remove from the layer stack.


Returns:

- [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) —

    `true`, if layer is removed successfully, otherwise `false`


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

    Thrown if one or more of the specified options is not valid for the view type.


### **setClockHandPosition(options as { :clockState as [WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module), :hour as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null**, :minute as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) or **Null** })** as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)

Set the clock hands position.

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    Options for setting the analog clock state.

- :clockState — ([WatchUi.AnalogClockState](/connect-iq/api-docs/Toybox/WatchUi/#AnalogClockState-module)) —

        An ANALOG\_CLOCK\_STATE\_\* value for the clock state

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

    `true` if the request to change the analog hands was successful, `false` otherwise.


Since:

API 级别 3.3.0

Throws:

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if invalid or no value is passed in for :clockState.

- ([Lang.InvalidValueException](/connect-iq/api-docs/Toybox/Lang/InvalidValueException/)) —

    Thrown if no :hour and :minute values are specified for the :clockState value of ANALOG\_CLOCK\_STATE\_HOLDING.


### **setControlBar(options as [View.ControlBarOptions](/connect-iq/api-docs/Toybox/WatchUi/View/#ControlBarOptions-named_type) or **Null**)** as **Void**

Set control bar options for this view.

Use of this method has many restrictions.

With [View](/connect-iq/api-docs/Toybox/WatchUi/View/), the control bar can be hidden by passing `null`. If options is non-null, the `:leftButton` option must be provided. All values for [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module) and [CONTROL\_BAR\_RIGHT\_BUTTON\_\*](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module) are allowed.

With [Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) and [CustomMenu](/connect-iq/api-docs/Toybox/WatchUi/CustomMenu/), the `options` parameter cannot be `null`; the control bar is always shown. The `:leftButton` option must be set to [CONTROL\_BAR\_LEFT\_BUTTON\_BACK](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarLeftButton-module). The `:rightButton` option may be `null`, for no button, or [CONTROL\_BAR\_RIGHT\_BUTTON\_ACCEPT](/connect-iq/api-docs/Toybox/WatchUi/#ControlBarRightButton-module).

Attempting to call this method on any other class derived from View, or with an unsupported option for the given view type, will result in an exception.

注意：

Control bar visibility changes made from [onLayout](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) or [onUpdate](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) will result in an exception.

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

    Thrown if one or more of the specified options is not valid for the view type.


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

Set the layout for the View.

Set the array of Drawable objects to be managed by this View. The specified Drawables will be:

- Drawn automatically via calls to [onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)

- Searched via calls to [findDrawableById()](/connect-iq/api-docs/Toybox/WatchUi/View/#findDrawableById-instance_function)


Parameters:

- layout — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)) —

    An array of Drawables or `null`.


Since:

API 级别 1.0.0
