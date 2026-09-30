---
title: "Native UI Controls"
---
# Native UI Controls

![](/connect-iq/resources/programmers-guide/artsy-monkey.png)

[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/)提供了一些本地插件来处理输入:

-   Menus

-   Generic Picker

-   Confirmation Dialog

-   Progress Bar

-   Page Loops

-   Toasts

-   Data Fields

-   Map Views


Two additional handlers provided by [Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/) 可用于 give feedback to the user: the confirmation dialog and progress dialog.

## Menus

Menus are full screen lists of options for the user. Menus 可用于 present options or settings for the user to choose from.

### Menu2

*Since API level 3.0.0*

[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)系统允许复杂的菜单用户界面.[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)类包括新的功能,如图形标题,可动地更新的菜单项,以及检查框等额外的菜单元素. Menu2 系统包括多个新的类.让我们从新菜单元素中最简单的开始.

以下是简单的[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)的 Menu2基本实现:

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

虽然[WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)示例是使用资源系统构建的,但上述[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)示例是编程构建的.让我们看看一些新功能:

new WatchUi.Menu2

[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)类是一个类似于[WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)的特殊[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)类,它向用户提供了选项列表.

MenuItem

menuItem对象构造器采用了四个参数:`label`,`subLabel`,`identifier`和`options`.每个`MenuItem`可以显示一个标签和子标签,由前两个参数定义.以下是图表显示了[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)中的标签和子标签布局:

图1. 标签和子标签的说明在 \`Menu2\`

![Illustration of label and sub-labels in Menu2](/connect-iq/resources/programmers-guide/Menu2_labels.png)

[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)`identifier`是一个对象,通常是一个字符串,用于识别事件调用中`MenuItem`对象.有一个第四个参数是`Dictionary`的选项,可以是`null`.

WatchUi.Menu2InputDelegate

新的[WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)类用于处理选定的Menu2项目.该对象使用三个方法处理这些选择:

-[Menu2InputDelegate.onBack()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onBack-instance_function)- 处理后键并将当前页面从堆中删除,如果没有被覆盖.

-[Menu2InputDelegate.onDone()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onDone-instance_function)- 用于专业的[WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/). 当未被重覆时,显示当前页面.

-[Menu2InputDelegate.onSelect()](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/#onSelect-instance_function)- 选择menu2项时处理.


查看与SDK共享的`Menu2Sample`样本应用.

#### Menu2 XML Resources

基本[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)可以在 XML 中定义为资源如下:

```xml
<menu2 id="MainMenu" title="@Strings.MainMenuTitle">
  <menu-item id="generic1" label="Generic 1" subLabel="With Sublabel"></menu-item>
  <menu-item id="generic2" label="Generic 2"></menu-item>
</menu2>
```

以下是定义为XML资源的[WatchUi.Menu2](/connect-iq/api-docs/Toybox/WatchUi/Menu2/)的属性和定义:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |`<menu-item>`的身份证|任何以字符开始的字符串| NA | Required |
| `title` |标签文本将作为标题显示|有效的[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)标识符,字符串资源或`String`| NA | optional |
| `icon` |在子窗口中显示的图标 (仅本能2)| Bitmap resource identifier | NA |  |
| `dividerType` |区分器的位置 (仅支持5.0.1+设备)| A | `WatchUi.Menu2.DIVIDER_TYPE_DEFAULT` | optional |
| `theme` |菜单项的背景颜色|一个或"残疾人"| `WatchUi.MENU_THEME_DEFAULT` | optional |
| `personality` |菜单的个性类|一个定义的人格类| NA | See [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

标签"通用1"的[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)使用标签和子标签. "通用2"的项目仅使用标签.

以下是定义为XML资源的[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)的属性和定义:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |`<menu-item>`的身份证|任何以字符开始的字符串| NA | Required |
| `label` |显示的标签文本| A valid string resource or `String` | NA | Required |
| `subLabel` |显示的子标签文本| A valid string resource or `String` | NA |  |
| `icon` |在子窗口中显示的图标 (仅本能2)| Bitmap resource identifier | NA |  |

Menu2最令人兴奋的部分是使用图标,选项框和开关.所有 Menu2 项目都可以以相同的方式创建和启动,但每个新的菜单项目都表现得独特.我们已经看到了基本的`MenuItem`类.我们谈谈使用其他时的具体细节.

#### Icon Menu Item

[WatchUi.IconMenuItem](/connect-iq/api-docs/Toybox/WatchUi/IconMenuItem/)类允许开发人员实现基于图标的菜单系统.[WatchUi.IconMenuItem](/connect-iq/api-docs/Toybox/WatchUi/IconMenuItem/)使用标签和子标签,但还包括一个标签和子标签文本的右或左边可显示的标签.

图 2. 在 \`Menu2\`中 \`IconMenuItem\`的说明

![Illustration of a \`IconMenuItem\` in in Menu2](/connect-iq/resources/programmers-guide/IconFigure.png)

以下是作为XML资源创建的`IconMenuItem`:

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

以下是`<icon-menu-item>`可用的属性:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |`<icon-menu-item>`的身份证|任何以字符开始的字符串| NA | Required |
| `label` |显示的标签文本| A valid string resource or `String` | NA | Required |
| `subLabel` |显示的子标签文本| A valid string resource or `String` | NA |  |
| `icon` |显示的图标| A valid drawable resource or custom drawable | NA | Required |

#### Checkbox and Toggle Menu Items

[WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)允许用户检查列表中的多个项目,并同时保存它们的状态 (即选择音乐内容的播放列表).[WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)类是使用[WatchUi.CheckboxMenu](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenu/)视图和[WatchUi.Menu2InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/Menu2InputDelegate/)扩展的类结合.

图3. 在 \`Menu2\`中 \`CheckboxMenuItem\`的说明

![Illustration of a \`CheckboxMenuItem\` in in Menu2](/connect-iq/resources/programmers-guide/CheckboxFigure.png)

开发人员使用XML定义[WatchUi.CheckboxMenuItem](/connect-iq/api-docs/Toybox/WatchUi/CheckboxMenuItem/)如下:

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

[WatchUi.ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/)类是指指一个菜单项在两个状态中的一个元素:`:enabled`或`:disabled`. 查看下图中的变化:

图 4. 在 \`Menu2\`中 \`ToggleMenuItem\`的说明

![Illustration of a \`ToggleMenuItem\` in in Menu2](/connect-iq/resources/programmers-guide/ToggleFigure.png)

您可以使用XML创建[WatchUi.ToggleMenuItem](/connect-iq/api-docs/Toybox/WatchUi/ToggleMenuItem/)作为资源:

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

在名称和函数上,`<checkbox-menu-item>`和`<toggle-menu-item>`属性相同:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |`<toggle-menu-item>`或`<checkbox-menu-item>`的ID|任何以字符开始的字符串| NA | Required |
| `label` |显示的标签文本| A valid string resource or `String` | NA | Required |
| `subLabel` |当`checked`是`true`时显示的子标签文本| A valid string resource or `String` | NA |  |
| `disabledSubLabel` |当`checked`是`false`时显示的子标签文本| A valid string resource or `String` | NA |  |
| `checked` |`<toggle-menu-item>`或`<checkbox-menu-item>`的布尔状态|对于`:enabled`而言`true`,对于`disabled`而言`false`| `false` |值即使在 XML 中未定义,也会发生变化|
| `icon` |在子窗口中显示的图标 (仅本能2)| Bitmap resource identifier | NA |  |
| `dividerType` |区分器的位置 (仅支持5.0.1+设备)| A | `WatchUi.Menu2.DIVIDER_TYPE_DEFAULT` | Optional |

`checked`属性自动创建为 一个 或对象的一部分,并且不需要在 XML 中定义.如果它不是在 XML 中定义的,那么它将默认为`false`.

对于使用图形元素如转换器和检查框的[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/),开发人员可以选择将元素对齐到[WatchUi.MenuItem](/connect-iq/api-docs/Toybox/WatchUi/MenuItem/)标签的左或右边.如果未定义,则元素将被对齐到右边,如上面的`defaultAlign`转换菜单中所看到的.使用一个具有所需的 \`MenuItem.MENU\_ITEM\_LABEL\_ALIGN\_\*\`值的`<param>`标签来设置图标,检查和转换器的对齐.开发人员还可以明确使用 \`MenuItem.MENU\_ITEM\_LABEL\_ALIGN\_RIGHT\`值对齐到右边.

### Action Menus

*Since API level 3.4.0*

动作视图是提供信息和提供文本中的动作菜单的屏幕.这些动作可能是可在可见信息上执行的下一步或任务.

查看[WatchUi.showActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/#showActionMenu-instance_function)API和个性图书馆的行动视图章.

### Original Menu API

[WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)是为用户提供选项列表的旧API.选项显示在匹配应用程序运行的设备的列表中.在资源XML文件中可以定义菜单,使用以下格式:

```xml
<menu id="MainMenu">
    <menu-item id="item_1" label="@Strings.menu_item_1_label" />
    <menu-item id="item_1" label="@Strings.menu_item_2_label" />
</menu>
```

资源编译器将接下来采用这个XML并在`Rez`模块中生成一个[WatchUi.Menu](/connect-iq/api-docs/Toybox/WatchUi/Menu/)对象.为了使用这个菜单,开发人员只需要按下菜单和使用[WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)的代表来使用菜单:

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

## Generic Picker

[WatchUi.Picker](/connect-iq/api-docs/Toybox/WatchUi/Picker/)类,以及[WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/)和[WatchUi.PickerFactory](/connect-iq/api-docs/Toybox/WatchUi/PickerFactory/)类,提供了应用程序在屏幕上创建用户可选择的对象列表的能力.选手包括一个或多个对象,标题,下一个和上一个箭头,以及确认按.下一个和上一个箭头和确认按是设备特定的,但可以在需要时重写.选手使用[WatchUi.pushView()](/connect-iq/api-docs/Toybox/WatchUi/#pushView-instance_function)推送,为输入代表提供[WatchUi.PickerDelegate](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/).一个[WatchUi.PickerFactory](/connect-iq/api-docs/Toybox/WatchUi/PickerFactory/)是要求指示每个可选的值显示的.

### User Interface

![Main components of a generic picker layout](/connect-iq/resources/programmers-guide/picker-layout.png)

上面的图像是对选号机在方形屏幕上应该看起来像什么的一般结构的表示.其他屏幕格式应该具有相同的布局,有一些尺寸差异,以考虑屏幕和按布局.

- 上面的红色标志着选手的标题.

- 在绿色盒子处,放上下箭头,可通过可用的选项滚动.

- 如果选手有多个可选项,最左边的蓝色框将显示您选择的最后一项.

- 中央蓝色框是您目前选择的物品.

- 白框将是列表中的下一个可选项或确认选择的按.


查看与SDK共享的`Picker`样本应用.

## Confirmation Dialog

[WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)和[WatchUi.ConfirmationDelegate](/connect-iq/api-docs/Toybox/WatchUi/ConfirmationDelegate/)提供了一个简单的是/否对话.

查看SDK共享的`ConfirmationDialog`样本应用程序,以及个性图书馆的确认部分.

## Progress Bar

进步对话框提供了标准的等待对话框.它有两个模式,一个显示了某个过程的完成,第二个显示了无限量的进步的等待计时器.进步的外观和感觉将是设备特定的.

查看 SDK 配备的`ProgressBar`样本应用程序和个性图书馆的进步条节.

# Page Loops

页面循环是视图的轮.当用户在页面循环中时,用户界面会呈现一组信息页面,为用户提供不同的数据和见解.进入下一个和上一个页面的标准行为.从最后页面前进通常将用户返回第一页.

查看[WatchUi.ViewLoop](/connect-iq/api-docs/Toybox/WatchUi/ViewLoop/)API和个性库页面循环部分.

## Toasts

*Since API level 3.4.0*

乾杯是部分屏幕横幅,有文本和可选的图标.用户无法与它们互动,并且它们在短时间后会被驳回.乾杯是为用户告知异步事件而不会破坏他们目前正在做的事情而有用的.

查看[WatchUi.showToast()](/connect-iq/api-docs/Toybox/WatchUi/#showToast-instance_function)API和个性图书馆的吐司部分.

## Data Field

数据字段作为加密器活动体验的插件.用户在从商店安装数据字段后,可以在其活动页面内放置它们.

On devices with touch screen support, an input delegate 可用于 accept input. Only the [InputDelegate.onTap()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function) behavior is supported and will be triggered when the user touches a point inside the data field when it is active on the screen. The behavior delegate should be the second element of the array that is returned from [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) as with other app types.

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

### Alerts

*Since API level 3.2.0*

当您希望您的数据字段通知用户特定事件时,您可以按一个扩展[WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/)的视图.[WatchUi.DataFieldAlert](/connect-iq/api-docs/Toybox/WatchUi/DataFieldAlert/)是[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)的一个特殊实例,可以用[DataField.showAlert()](/connect-iq/api-docs/Toybox/WatchUi/DataField/#showAlert-instance_function)呈现给用户.警报不会接受输入,并且将在标准警报期后停机.用户需要在训练警报设置中启用您的应用程序的警报.

## Mapping

*Since API level 3.0.0*

连接智商使开发人员能够将内载地图图的产品嵌入地图视图应用程序中.地图绘制可以通过两种方式访问:[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)和[WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/).

### MapViews

[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)类像其他任何[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)类一样推进,但具有一些独特的特性.即,[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)对象为您提供了一个设备内载地图的特定部分的染.[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)对象允许您使用两点类型来选择一个地图的部分.

基本[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)的设置如下:

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

让我们稍微分析一下,来了解视图本身:

MapView.initialize()

建议设置MapView的参数在`initialize()`函数中,如图.

MapView.setMapVisibleArea()

这种方法将`top_left`和`bottom_right`参数作为`Position.Location`对象.这两个位置创建了一个边界框,定义了地图的视角区域,这些区域是最初地图染上必须显示的最左上和右下`Location`对象.概念上,这将自己变成一个矩形部分的地图,必须集中在地图 Map视图的初始染上.

MapView.setScreenVisibleArea()

MapViews允许开发人员在顶部叠加UI项目.有时你希望整个屏幕具有地图图像,但有时你会想将显示器分为地图和UI元素.如果你希望地图区域不成为屏幕的中心,你可以使用这种方法来定义矩形区域.这种方法决定了`setMapVisibleArea()`调用中定义的地图的矩形区域应呈现的矩形区域.这里有一个图形来帮助说明蓝色矩形代表地图区域和红色矩形代表屏幕区域的关系.

图5.地图区与屏幕区之间的关系的说明

![Illustration of relationship between Map Area and the Screen Area](/connect-iq/resources/programmers-guide/MappingDiagram.png)

MapView.setMapMode()

这个调用设置地图模式为`MAP_MODE_*`enum值之一.

MapViews and MapTrackViews have two modes:

- **预览:** 用`MAP_MODE_PREVIEW`enum值选择. 这允许在屏幕上染一个不动地图.

- **浏览:** 用`MAP_MODE_BROWSE`enum值进行选择.这种模式允许用户使用系统默认控制来放大,浏览和移动地图.


### MapTrackView

MapTrackView在所有方面都与MapView相似,除了一个.MapTrackView将动态显示设备在屏幕上的活跃位置.

查看与SDK共享的`MapSample`样本应用.

### Mapping Artifacts

图可以添加语境与你的内容,但只有如果你能把它们结合在一起.幸运的是,不仅可以访问原生地图,你也可以从它们中绘制!子C有两个新的对象与图表互动:[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)和[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/).

#### MapPolyline

[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)对象允许开发人员在MapView映射图上绘制多个位置点的线.只允许一个[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)对象在视图中.

以下是[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)的一个例子,有四个点:

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

new WatchUi.MapPolyline

这会创建一个新的[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)对象.

setColor()

设置[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)的颜色为`COLOR_*`enum值.

setWidth()

设置用于绘制[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)的笔宽度.

addLocation()

这种方法取一个对象,并将其添加到`Array`的[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)对象中.这些位置构成绘制图上包含[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)表示的线路的点.

MapView.setPolyline()

这设置MapPolyline对象将在[WatchUi.MapView](/connect-iq/api-docs/Toybox/WatchUi/MapView/)或[WatchUi.MapTrackView](/connect-iq/api-docs/Toybox/WatchUi/MapTrackView/)的地图上呈现 . 在本例中,它使用存储为`polyline`的[WatchUi.MapPolyline](/connect-iq/api-docs/Toybox/WatchUi/MapPolyline/)对象 .

#### MapMarker

[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)对象将对象与BitmapResource结合起来,以创建一个标记,将在地图上绘制.在[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)对象中使用的每个Bitmap图像将有一个"热点"为图像.热点是图像的点,将在[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)所提供的宽度和长度上绘制.

以下是[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)对象的简单实现:

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

让我们看看上面的代码来更好地了解API.

new WatchUi.MapMarker

[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)对象被传递给`Location`对象的初始化.这是Bitmap资源的`MapMarker`热点被绘制的点.

bitmapMarker.setIcon(WatchUi.loadResource(Rez.Drawables.MapPin), 12, 24)

这个调用设置了[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)的标志,称为`bitmapMarker`的位地图资源`Rez.Drawables.MapPin`.热点设置为`12`的位地图的`x`坐标和`24`的`y`坐标的`MapPin`标志.

setLabel()

设置将[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)图标在映射地图上显示的标签.

defaultMarker.setIcon(WatchUi.MAP\_MARKER\_ICON\_PIN, 0, 0)

当设置图标时,这个[WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/)使用`MAP_MARKER_ICON_PIN`enum值,并使用系统默认图标记地图上的点.请注意,为热点`x, y`提供的值分别是`0, 0`.使用默认图标时,系统处理热点管理.

setMapMarker()

The method takes a [WatchUi.MapMarker](/connect-iq/api-docs/Toybox/WatchUi/MapMarker/) object and sets it on the map. In this example only the `defaultMarker` is set to be drawn on the map. However, it is acceptable to set multiple MapMarker objects by setting them in an [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/). For 示例：

```cpp
// Create an Array to hold the MapMarker objects
var markers = [];

// Add the MapMarkers to the Array
markers.add(bitmapMarker);
markers.add(defaultMarker);

// Set multiple markers in an Array
MapView.setMapMarker(markers);
```

### Simulating Maps

在模拟器中的地图工作时,Connect IQ使用网络API来检索地图图图像,模拟设备上的行为.模拟器和设备上映射覆盖范围因设备上映射而异.以下是模拟器的详细覆盖地图:

-   **Green:** Low detail

-   **Blue:** Medium detail

-   **Red:** High detail


图6. 在Connect IQ模拟器上可用的详细地图

![Detail map coverage guide for the Connect IQ Simulator](/connect-iq/resources/programmers-guide/MapCoverage.png)

目前,图形标题仅通过在`Menu2`中编程创建`MenuItem`元素来支持.将标题定义为可绘制资源将导致编译器错误.
