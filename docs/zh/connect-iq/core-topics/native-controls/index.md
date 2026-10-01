---
title: "原生 UI 控件"
---
<a id="native-ui-controls"></a>
# 原生 UI 控件

![](/connect-iq/resources/programmers-guide/artsy-monkey.png)

[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) 提供了多种原生控件，用于处理输入：

-   菜单

-   通用选择器

-   确认对话框

-   进度条

-   页面循环

-   Toast

-   数据字段

-   地图视图


此外，[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) 还提供确认对话框和进度对话框，用于向用户反馈状态。

## 菜单

菜单是向用户显示选项的全屏列表，可用于呈现供用户选择的选项或设置。

### Menu2

*自 API 级别 3.0.0*

[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 系统用于构建复杂的菜单界面。[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 类提供了图形标题、可动态更新的菜单项以及复选框等额外元素。Menu2 系统包含多个新类，先从最简单的菜单元素开始。

下面是使用简单 [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 的基本 Menu2 实现：

```cpp
import Toybox.WatchUi;

class MyBehaviorDelegate extends WatchUi.BehaviorDelegate {
    function initialize() {
        BehaviorDelegate.initialize();
    }

    function onMenu() as Boolean{
        var menu = new WatchUi.Menu2({:title=>"My Menu2"});
        var delegate;

        // Add a new MenuItem to the Menu2 object
        menu.addItem(
            new MenuItem(

                // Set the 'Label' parameter
                "Item 1 Label",

                // Set the `subLabel` parameter
                "Item 1 subLabel",

                // Set the `identifier` parameter
                "itemOneId",
                // Set the options, in this case `null`
                {}
            )
        );

        menu.addItem(
            new MenuItem(
                "Item 2 Label",
                "Item 2 subLabel",
                "itemTwoId",
                {}
            )
        );

        // Create a new Menu2InputDelegate
        delegate = new MyMenu2Delegate(); // a WatchUi.Menu2InputDelegate

        // Push the Menu2 View set up in the initializer
        WatchUi.pushView(menu, delegate, WatchUi.SLIDE_IMMEDIATE);
        return true;
    }
}
```

上面的 [WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 示例通过代码构建，而 [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) 示例使用资源系统。下面介绍示例中展示的一些新功能。

### WatchUi.Menu2

[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 类是一种特殊的 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)，类似于 [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)，用于向用户显示选项列表。

### MenuItem

`MenuItem` 构造函数接收四个参数：`label`、`subLabel`、`identifier` 和 `options`。前两个参数分别定义菜单项的主标签和副标签。下面的图示展示了 [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 中主标签和副标签的布局：

图 1：`Menu2` 中主标签和副标签的示意图

![Menu2 中标签和子标签的示例](/connect-iq/resources/programmers-guide/Menu2_labels.png)

[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 的 `identifier` 是一个对象，通常为字符串，用于在事件回调中标识 `MenuItem`。第四个参数是一个可为 `null` 的 `Dictionary`，用于传递选项。

### WatchUi.Menu2InputDelegate

新的 [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) 类用于处理选中的 Menu2 项目。它通过以下三个方法处理选择：

- [Menu2InputDelegate.onBack()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onBack-instance_function)：处理返回键；如果未重写，会将当前页面从视图栈移除。

- [Menu2InputDelegate.onDone()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onDone-instance_function)：与专用的 [WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/) 配合使用；如果未重写，会弹出当前页面。

- [Menu2InputDelegate.onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function)：处理用户选中 Menu2 项目的事件。


更多信息请参阅 SDK 随附的 `Menu2Sample` 示例应用。

#### Menu2 XML 资源

可以在 XML 中将基本的 [WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 定义为资源：

```xml
<menu2 id="MainMenu" title="@Strings.MainMenuTitle">
  <menu-item id="generic1" label="Generic 1" subLabel="With Sublabel"></menu-item>
  <menu-item id="generic2" label="Generic 2"></menu-item>
</menu2>
```

下面是作为 XML 资源定义的 [WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/) 的属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | `<menu-item>` 的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `title` | 要作为标题显示的文本 | 有效的 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 标识符、字符串资源或 `String` | 不适用 | 可选 |
| `icon` | 在子窗口中显示的图标（仅 Instinct 2） | 位图资源标识符 | 不适用 |  |
| `dividerType` | 分隔线位置（仅 5.0.1 及更高版本设备支持） | 有效的分隔线类型 | `WatchUi.Menu2.DIVIDER_TYPE_DEFAULT` | 可选 |
| `theme` | 菜单项背景颜色 | 有效的主题值或 `"disabled"` | `WatchUi.MENU_THEME_DEFAULT` | 可选 |
| `personality` | 菜单使用的 personality 类 | 已定义的 personality 类 | 不适用 | 请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

ID 为 `generic1` 的 [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 同时使用主标签和副标签；`generic2` 仅使用主标签。

下面是作为 XML 资源定义的 [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/) 的属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | `<menu-item>` 的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `label` | 要显示的主标签文本 | 有效的字符串资源或 `String` | 不适用 | 必需 |
| `subLabel` | 要显示的副标签文本 | 有效的字符串资源或 `String` | 不适用 |  |
| `icon` | 在子窗口中显示的图标（仅 Instinct 2） | 位图资源标识符 | 不适用 |  |

Menu2 最有用的特性之一是在菜单中使用图标、复选框和切换项。所有 Menu2 项都可以用相同方式创建和启动，但不同类型的菜单项有各自的行为。前面已经介绍了基本的 `MenuItem` 类，下面说明其他类型的具体用法。

#### 图标菜单项

[WatchUi.IconMenuItem](/connect-iq/api-docs/Toybox/WatchUi/IconMenuItem/) 类用于实现基于图标的菜单。它使用主标签和副标签，并额外提供一个图标，可显示在标签文本的左侧或右侧。

图 2：`Menu2` 中 `IconMenuItem` 的示意图

![Menu2 中的 \`IconMenuItem\` 示例](/connect-iq/resources/programmers-guide/IconFigure.png)

下面是作为 XML 资源创建的 `IconMenuItem`：

```xml
<menu2 id="IconMenu" title="@Strings.IconMenuTitle">
    <icon-menu-item id="defaultAlign" label="@Strings.IconDefaultLabel" subLabel="@Strings.IconDummySubLabel"
     icon="@Drawables.LauncherIcon" />
    <icon-menu-item id="right" label="@Strings.IconRightLabel" subLabel="@Strings.IconDummySubLabel"
     icon="@Drawables.LauncherIcon">
        <param name="alignment">WatchUi.MenuItem.MENU_ITEM_LABEL_ALIGN_RIGHT</param>
    </icon-menu-item>
</menu2>
```

`<icon-menu-item>` 支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | `<icon-menu-item>` 的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `label` | 要显示的主标签文本 | 有效的字符串资源或 `String` | 不适用 | 必需 |
| `subLabel` | 要显示的副标签文本 | 有效的字符串资源或 `String` | 不适用 |  |
| `icon` | 要显示的图标 | 有效的可绘制资源或自定义可绘制对象 | 不适用 | 必需 |

#### 复选框和切换菜单项

[WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/) 允许用户在菜单列表中勾选多个项目，并一次性保存这些状态，例如选择音乐播放列表。[WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/) 通常与继承 [WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/) 的 View 以及 [WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/) 配合使用。

图 3：`Menu2` 中 `CheckboxMenuItem` 的示意图

![Menu2 中的 \`CheckboxMenuItem\` 示例](/connect-iq/resources/programmers-guide/CheckboxFigure.png)

可以使用 XML 按如下方式定义 [WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)：

```xml
<checkbox-menu id="CheckMenu" title="@Strings.CheckMenuTitle">
    <checkbox-menu-item id="defaultAlign" label="@Strings.CheckDefaultLabel" subLabel="@Strings.CheckDefaultSubLabel"
     checked="true" />
    <checkbox-menu-item id="right" label="@Strings.CheckRightLabel" subLabel="@Strings.CheckRightSubLabel"
     checked="false">
        <param name="alignment">Ui.MenuItem.MENU_ITEM_LABEL_ALIGN_RIGHT</param>
    </checkbox-menu-item>
</checkbox-menu>
```

[WatchUi.ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/) 表示处于两种状态之一的菜单项：`:enabled` 或 `:disabled`。下图展示了这两种状态的差异：

图 4：`Menu2` 中 `ToggleMenuItem` 的示意图

![Menu2 中的 \`ToggleMenuItem\` 示例](/connect-iq/resources/programmers-guide/ToggleFigure.png)

可以使用 XML 将 [WatchUi.ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/) 创建为资源：

```xml
<menu2 id="ToggleMenu" title="@Strings.ToggleMenuTitle">
    <toggle-menu-item id="defaultAlign" label="@Strings.ToggleLabel1" subLabel="@Strings.ToggleOnSubLabel"
     disabledSubLabel="@Strings.ToggleOffSubLabel" checked="true" />
    <toggle-menu-item id="left" label="@Strings.ToggleLabel2" subLabel="@Strings.ToggleOnSubLabel"
     disabledSubLabel="@Strings.ToggleOffSubLabel" checked="false">
        <param name="alignment">WatchUi.MenuItem.MENU_ITEM_LABEL_ALIGN_LEFT</param>
    </toggle-menu-item>
</menu2>
```

`<checkbox-menu-item>` 和 `<toggle-menu-item>` 的属性名称和作用相同：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | `<toggle-menu-item>` 或 `<checkbox-menu-item>` 的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `label` | 要显示的主标签文本 | 有效的字符串资源或 `String` | 不适用 | 必需 |
| `subLabel` | `checked` 为 `true` 时显示的副标签文本 | 有效的字符串资源或 `String` | 不适用 |  |
| `disabledSubLabel` | `checked` 为 `false` 时显示的副标签文本 | 有效的字符串资源或 `String` | 不适用 |  |
| `checked` | `<toggle-menu-item>` 或 `<checkbox-menu-item>` 的布尔状态 | `:enabled` 使用 `true`，`disabled` 使用 `false` | `false` | 即使未在 XML 中定义，值也会发生变化 |
| `icon` | 在子窗口中显示的图标（仅 Instinct 2） | 位图资源标识符 | 不适用 |  |
| `dividerType` | 分隔线位置（仅 5.0.1 及更高版本设备支持） | 有效的分隔线类型 | `WatchUi.Menu2.DIVIDER_TYPE_DEFAULT` | 可选 |

`checked` 属性会在相应的菜单项对象创建时自动生成，因此不必在 XML 中定义。如果没有在 XML 中定义，默认值为 `false`。

对于包含切换项和复选框等图形元素的 [WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)，可以将这些元素对齐到菜单项标签的左侧或右侧。未指定时，元素默认右对齐，如上面的 `defaultAlign` 切换菜单项所示。使用 `<param>` 标签并传入所需的 `MenuItem.MENU_ITEM_LABEL_ALIGN_*` 值，可以设置图标、复选框和切换项的对齐方式；也可以显式使用 `MenuItem.MENU_ITEM_LABEL_ALIGN_RIGHT` 右对齐。

### 操作菜单

*自 API 级别 3.4.0*

Action view 是同时提供信息和上下文操作菜单的屏幕。这些操作可以是针对当前信息的下一步或待执行任务。

更多信息请参阅 [WatchUi.showActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/#showActionMenu-instance_function) API 和 Personality Library 中的 Action Views 章节。

### 原始菜单 API

[WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) 是用于向用户提供选项列表的旧 API。选项会以适合应用运行设备的形式显示。可以在资源 XML 文件中按以下格式定义菜单：

```xml
<menu id="MainMenu">
    <menu-item id="item_1" label="@Strings.menu_item_1_label" />
    <menu-item id="item_1" label="@Strings.menu_item_2_label" />
</menu>
```

资源编译器会根据 XML 在 `Rez` 模块中生成一个 [WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/) 对象。要使用此菜单，只需通过 [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 将菜单和对应的 delegate 推入视图栈：

```java
class MyView extends WatchUi.View {
    function openTheMenu() {
        WatchUi.pushView( new Rez.Menus.MainMenu(), new MyMenuDelegate(), Ui.SLIDE_UP );
    }
}

class MyMenuDelegate extends WatchUi.MenuInputDelegate {
    function onMenuItem(item) {
        if ( item == :item_1 ) {
            // Do something here
        } else if ( item == :item_2 ) {
            // Do something else here
        }
    }
}
```

## 通用选择器

[WatchUi.Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/)、[WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/) 和 [WatchUi.PickerFactory](/connect-iq/api-docs/Toybox/WatchUi/PickerFactory/) 类可以在屏幕上创建供用户选择的对象列表。Picker 包含一个或多个对象、标题、上一项和下一项箭头，以及确认按钮。箭头和确认按钮的外观因设备而异，但可以按需覆盖。通过 [WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function) 推入 Picker 时，需要提供 [WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/) 作为输入 delegate。[WatchUi.PickerFactory](/connect-iq/api-docs/Toybox/WatchUi/PickerFactory/) 用于指定每个可选值的显示方式。

### 用户界面

![通用选择器布局的主要组件](/connect-iq/resources/programmers-guide/picker-layout.png)

上图展示了 Picker 在方形屏幕上的一般布局。其他屏幕格式也采用相同的布局，但会根据屏幕和按键排列调整尺寸。

- 顶部红色区域显示 Picker 的标题。

- 绿色区域显示上下箭头，用于浏览可用选项。

- 如果 Picker 有多个可选项，最左侧的蓝色区域显示上一个已选项目。

- 中央蓝色区域显示当前正在选择的项目。

- 白色区域显示列表中的下一个可选项目，或显示确认选择的按钮。


更多信息请参阅 SDK 随附的 `Picker` 示例应用。

## 确认对话框

[WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/) 和 [WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/) 提供了简单的“是/否”对话框，适合让用户做出简单选择。

更多信息请参阅 SDK 随附的 `ConfirmationDialog` 示例应用，以及 Personality Library 中的 Confirmations 章节。

## 进度条

进度对话框提供标准的等待对话框。它有两种模式：一种显示某个过程的完成进度，另一种作为等待计时器显示不确定的进度。进度条的外观和交互方式取决于设备。

更多信息请参阅 SDK 随附的 `ProgressBar` 示例应用，以及 Personality Library 中的 Progress Bars 章节。

# 页面循环

页面循环是由多个视图组成的轮播界面。用户进入页面循环后，界面会展示一组信息页，为用户提供不同的数据和信息。系统提供切换到上一页和下一页的标准行为，从最后一页继续前进通常会回到第一页。

更多信息请参阅 [WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/) API，以及 Personality Library 中的 Page Loops 章节。

## Toast

*自 API 级别 3.4.0*

Toast 是带有文本和可选图标的局部屏幕横幅。用户无法与其交互，它会在短时间后自动消失。Toast 适合在不打断用户当前操作的情况下，提示异步事件的结果。

更多信息请参阅 [WatchUi.showToast()](/connect-iq/api-docs/Toybox/WatchUi/#showToast-instance_function) API，以及 Personality Library 中的 Toasts 章节。

## 数据字段

数据字段是 Garmin 活动体验的插件。用户从商店安装数据字段后，可以将它们放置在 Garmin 活动的活动页面中。

在支持触摸屏的设备上，输入委托可用于接收输入。这里只支持 [InputDelegate.onTap()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function) 行为；当数据字段在屏幕上处于活动状态且用户触摸字段内部的某个点时，会触发该行为。与其他应用类型一样，行为委托应作为 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) 返回数组的第二个元素。

```java
// This data field accepts touch input
class DataFieldApp extends App.AppBase {
    // Data field view with associated behavior delegate
    function getInitialView() {
        return [ new DataFieldView(), new DataFieldDelegate() ];
    }
}

class DataFieldDelegate extends Ui.InputDelegate {
    // Handle touch events
    function onTap(evt) {
        // Process the touch event
    }
}
```

### 警报

*自 API 级别 3.2.0*

如果希望数据字段在特定事件发生时通知用户，可以推入一个继承 [WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/) 的视图。[WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/) 是 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 的特殊实例，可通过 [DataField.showAlert()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#showAlert-instance_function) 呈现给用户。Alert 不接收输入，并会在标准提示时长后超时。用户必须在活动警报设置中为应用启用警报。

## 地图

*自 API 级别 3.0.0*

Connect IQ 允许开发者在配备内置地图的产品上，将地图视图嵌入应用。地图功能有两种访问方式：[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 和 [WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/)。

### MapView

[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 类的推入方式与其他 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 类相同，但具有一些独特特性。具体来说，[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 对象可以渲染设备内置地图的指定区域。您可以使用两个 `Position.Location` 点来选择地图中需要关注的区域。

下面是基本 [WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 的设置：

```cpp
import Toybox.WatchUi;
import Toybox.Position;

class MyMapView extends MapView {

    // Initialize the MapView
    function initialize() {
        MapView.initialize();

        // Set the top left Location object for the Map Visible Area
        var topLeft = new Position.Location({:latitude => 38.85695, :longitude =>-94.80051, :format => :degrees});

        // Set the bottom right Location object for the Map Visible Area
        var bottomRight = new Position.Location({:latitude => 38.85391, :longitude =>-94.7963, :format => :degrees});

        // Set the area of the map to be displayed
        MapView.setMapVisibleArea(topLeft, bottomRight);

        // Set the area in which to display the selected map area
        MapView.setScreenVisibleArea(0, 0, 240, 240/2);

        // Set the map mode
        MapView.setMapMode(WatchUi.MAP_MODE_PREVIEW);
    }
}
```

下面逐项说明这些调用的作用：

MapView.initialize()

建议像示例一样，在 `initialize()` 函数中设置 MapView 的参数。

MapView.setMapVisibleArea()

此方法接收 `Position.Location` 类型的 `top_left` 和 `bottom_right` 参数。这两个位置构成一个边界框，定义初始渲染时必须显示的地图区域，也就是地图视图中最左上和最右下的 `Location`。从概念上说，它指定了初始渲染时需要聚焦的矩形地图区域。

MapView.setScreenVisibleArea()

MapView 允许在地图上叠加 UI 元素。有时需要让地图铺满整个屏幕，有时则需要在地图旁显示其他 UI。如果地图区域不应占据屏幕中央，可以使用此方法定义矩形区域。该矩形决定了 `setMapVisibleArea()` 指定的地图区域将在屏幕的哪个区域渲染。下图中，蓝色矩形表示地图区域，红色矩形表示屏幕区域。

图 5：地图区域与屏幕区域的关系

![地图区域与屏幕区域之间关系的示例](/connect-iq/resources/programmers-guide/MappingDiagram.png)

MapView.setMapMode()

此调用将地图模式设置为某个 `MAP_MODE_*` 枚举值。

MapView 和 MapTrackView 有两种模式：

- **预览**：使用 `MAP_MODE_PREVIEW` 枚举值选择。此模式会在屏幕上渲染不可移动的地图。

- **浏览**：使用 `MAP_MODE_BROWSE` 枚举值选择。此模式允许用户使用系统默认控件缩放、平移和移动地图。


### MapTrackView

MapTrackView 与 MapView 基本相同，但会在屏幕上动态渲染设备的当前位置。

更多信息请参阅 SDK 随附的 `MapSample` 示例应用。

### 地图图形

地图可以为内容提供上下文，而将两者结合使用才能发挥作用。除了访问设备原生地图，还可以在地图上绘制内容。Monkey C 提供了两个用于与地图交互的新对象：[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 和 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)。

#### MapPolyline

[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象可以在 MapView 渲染的地图上连接多个位置点并绘制线条。一个视图中只能有一个 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象。

下面是一个包含四个点的 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 示例：

```cpp
    // Initialize a new MapPolyline object
    var polyline = new WatchUi.MapPolyline();

    //Set the color of the MapPolyline
    polyline.setColor(Toybox.Graphics.COLOR_RED);

    // Set the pen width to draw the MapPolyline
    polyline.setWidth(2);

    // Set the Locations on the MapPolyline
    polyline.addLocation(
        new Position.Location({
            :latitude => 38.85391,
            :longitude =>-94.79630,
            :format => :degrees
        })
    );
    polyline.addLocation(
        new Position.Location({
            :latitude => 38.85465,
            :longitude =>-94.79922,
            :format => :degrees
        })
    );
    polyline.addLocation(
        new Position.Location({
            :latitude => 38.85508,
            :longitude =>-94.79959,
            :format => :degrees
        })
    );
    polyline.addLocation(
        new Position.Location({
            :latitude => 38.85557,
            :longitude =>-94.79864,
            :format => :degrees
        })
    );

    // Set the MapPolyline object to draw on the map
    MapView.setPolyline(polyline);
```

### new WatchUi.MapPolyline

这会创建一个新的 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象。

setColor()

使用 `COLOR_*` 枚举值设置 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 的颜色。

setWidth()

设置绘制 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 时使用的像素笔宽。

addLocation()

此方法接收一个 `Position.Location` 对象，并将其添加到 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 的位置数组中。这些位置点共同组成地图上绘制折线的路径。

MapView.setPolyline()

此方法将 MapPolyline 对象设置为在 [WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/) 或 [WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/) 的地图上渲染。本例使用存储在 `polyline` 中的 [WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/) 对象。

#### MapMarker

[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象将一个位置与 BitmapResource 结合，创建可绘制在地图上的标记。每个位图都有一个“热点”，表示该图像中应放置在 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 指定纬度和经度上的点。

下面是一个简单的 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 实现：

```cpp
    // Initialize a map marker with a Location object
    var bitmapMarker = new WatchUi.MapMarker(
        new Position.Location({
            :latitude => 38.85391,
            :longitude =>-94.79630,
            :format => :degrees
        })
    );
            bitmapMarker.setIcon(WatchUi.loadResource(Rez.Drawables.MapPin), 12, 24);
            bitmapMarker.setLabel("Custom Icon");

    var defaultMarker = new WatchUi.MapMarker(
        new Position.Location({
            :latitude => 38.85508,
            :longitude =>-94.79959,
            :format => :degrees
        })
    );
            defaultMarker.setIcon(WatchUi.MAP_MARKER_ICON_PIN, 0, 0);
            defaultMarker.setLabel("Predefined Icon");

    // Set the Map Marker for the view
    MapView.setMapMarker(defaultMarker);
```

下面逐项说明示例中的 API：

### new WatchUi.MapMarker

创建 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 时传入 `Location` 对象。该位置就是 BitmapResource 的 MapMarker 热点要绘制到的点。

bitmapMarker.setIcon(WatchUi.loadResource(Rez.Drawables.MapPin), 12, 24)

此调用将名为 `bitmapMarker` 的 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 图标设置为位图资源 `Rez.Drawables.MapPin`。热点设为该 MapPin 位图的 `x = 12`、`y = 24`。

setLabel()

设置地图上显示的 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 图标标签。

defaultMarker.setIcon(WatchUi.MAP\_MARKER\_ICON\_PIN, 0, 0)

设置图标时，此 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 使用 `MAP_MARKER_ICON_PIN` 枚举值，即系统默认的地图标记图标。这里为热点提供的 `x`、`y` 值分别为 `0`、`0`；使用默认图标时，热点由系统管理。

setMapMarker()

此方法接收一个 [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) 对象，并将其设置为地图上的标记。本例只绘制 `defaultMarker`，但也可以将多个 MapMarker 对象放入 [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) 后一次设置。例如：

```cpp
// Create an Array to hold the MapMarker objects
var markers = [];

// Add the MapMarkers to the Array
markers.add(bitmapMarker);
markers.add(defaultMarker);

// Set multiple markers in an Array
MapView.setMapMarker(markers);
```

### 模拟地图

在模拟器中使用地图时，Connect IQ 会通过 Web API 获取地图图像，以模拟设备上的行为。模拟器和设备上的地图覆盖范围可能不同，因为设备上的地图取决于具体设备及其可用地图。下面是模拟器的详细覆盖范围：

-   **绿色**：低细节

-   **蓝色**：中等细节

-   **红色**：高细节


图 6：Connect IQ 模拟器中的地图详细程度

![Connect IQ 模拟器的详细地图覆盖范围指南](/connect-iq/resources/programmers-guide/MapCoverage.png)

目前，只有通过代码在 `Menu2` 中创建 `MenuItem` 元素时，才支持图形标题。将标题定义为可绘制资源会导致编译器错误。
