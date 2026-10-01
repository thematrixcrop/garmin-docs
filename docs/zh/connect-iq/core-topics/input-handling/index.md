---
title: "Input Handling"
---
<a id="input-handling"></a>
# 输入处理

输入处理本来就是 UI 工具包中最重要、最复杂的部分之一，而 Garmin 设备又增加了更多变化。现代智能手机通常只有可触摸的发光矩形屏幕，Garmin 设备却有多种形状和尺寸。触摸屏并不适合所有手表产品，因此设备同时采用了多种输入方式和屏幕技术。UI 工具包需要将这些差异统一起来，让开发者能够以一致的方式使用。

## 输入与应用类型

并非所有应用类型都能完整访问输入。表盘只能知道用户是否执行了[按压](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPress-instance_function)，数据字段只能知道用户是否[点击](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function)。小工具和 Glance 可以接收输入（部分设备上可能受限），而设备应用具备最完整的输入能力。

## 输入代理

代理对象实现了输入处理专用的接口。Monkey C 提供低级别的 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，用于在基础层面处理事件。当应用需要以特定方式处理按键或触摸屏交互时，可以使用它。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [InputDelegate.onDrag()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onDrag-instance_function) | 用户拖动触摸屏时触发 | 3.3.0 |
| [InputDelegate.onFlick()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onFlick-instance_function) | 用户在触摸屏上快速滑动时触发 | 3.3.0 |
| [InputDelegate.onKey()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKey-instance_function) | 物理按键被按下并释放时触发 | 1.0.0 |
| [InputDelegate.onKeyPressed()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKeyPressed-instance_function) | 物理按键按下时触发 | 1.1.2 |
| [InputDelegate.onKeyReleased()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKeyReleased-instance_function) | 先按下物理按键、随后释放时触发 | 1.1.2 |
| [InputDelegate.onTap()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function) | 用户点击触摸屏（快速触碰后释放）时触发 | 1.0.0 |
| [InputDelegate.onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function) | 用户触摸触摸屏但尚未释放时触发 | 1.0.0 |
| [InputDelegate.onRelease()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onRelease-instance_function) | 仅在 [InputDelegate.onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function) 事件之后、用户释放触摸屏时触发 | 1.0.0 |
| [InputDelegate.onSwipe()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSwipe-instance_function) | 用户在触摸屏上滑动时触发 | 1.0.0 |
| [InputDelegate.onSelectable()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSelectable-instance_function) | [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 的状态发生变化时触发 | 2.1.0 |

要处理输入事件，请继承 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，并重写相应的处理操作。如果处理函数返回 `true`，系统会认为事件已处理；返回 `false` 则会让系统继续处理该输入。

更多信息请参阅 SDK 随附的 `Input` 示例应用。

## 行为

Garmin 会根据产品用途设计产品，不同产品线的设计可能因此不同。产品是否配备触摸屏或按键，可能取决于用户使用它的环境。例如，如果产品用于游泳、划艇或船上活动，它可能不会配备触摸屏。这些设计选择能够带来更适合场景的产品，但也会因为设备碎片化增加开发难度。

大多数产品都支持常见行为，例如下一页和返回上一页，但用户执行这些行为的方式可能因可用输入类型而异。为了解决这个问题，Monkey C 在行为层提供了事件。行为将用户的高层意图与实际输入类型分离，例如“下一页”与“按下屏幕”。[WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) 是 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 的超类，可将低级输入映射为跨产品通用的操作。使用 [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) 可以让代码更容易移植。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [BehaviorDelegate.onBack()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onBack-instance_function) | 处理用户执行返回行为 | 1.0.0 |
| [BehaviorDelegate.onMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onMenu-instance_function) | 处理用户执行菜单行为 | 1.0.0 |
| [BehaviorDelegate.onNextPage()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onNextPage-instance_function) | 处理分页循环中的下一页行为 | 1.0.0 |
| [BehaviorDelegate.onPreviousPage()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onPreviousPage-instance_function) | 处理分页循环中的上一页行为 | 1.0.0 |
| [BehaviorDelegate.onSelect()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onSelect-instance_function) | 处理用户执行选择行为 | 1.0.0 |

## 可选择项和按钮

### 可选择项

*自 API 级别 2.1.0 起支持*

Monkey C 为配备大尺寸触摸屏（按键较少）的产品提供了 [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)，用于轻松定义屏幕上可触摸的对象。

[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 是由状态驱动的对象，根据触摸交互支持以下四种可选的内置状态：

- 默认（`:stateDefault`）：初始状态
- 高亮（`:stateHighlighted`）：当前正在按下可选择项
- 已选择（`:stateSelected`）：可选择项已按下并释放，即完成点击
- 已禁用（`:stateDisabled`）：可选择项已被禁用

状态发生变化后，系统会发送 [WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/)，从而调用 [InputDelegate.onSelectable()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSelectable-instance_function)。该调用会同时传入当前 Selectable 实例和之前状态的符号，便于比较状态并执行自定义操作。必须通过视图的 [View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) 调用，将可选择项注册为布局的一部分，视图才能识别它们并将触摸事件转发给对象。多个可选择项重叠时，输入会根据传递给 [View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) 的顺序分发（后加入的对象优先绘制并优先选中）。

四种状态都必须映射到 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)、`Graphics.COLOR` 常量，或形式为 `0xRRGGBB` 的 24 位整数。状态可以在 [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 构造函数中定义和指定，也可以作为实例成员手动修改。如果定义了当前状态，[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 会使用 `locX` 和 `locY` 坐标作为偏移量绘制该状态。建议通过扩展 [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/) 添加更多状态，并使用 [Selectable.getState()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#getState-instance_function) 和 [Selectable.setState()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#setState-instance_function) 修改默认状态机；可参考 Selectable 示例应用中的复选框示例。

[WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/) 继承自 [WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)，增加了定义背景以及将交互映射到 [WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/) 中现有或自定义方法（例如 `onMenu()`）的能力。

### 仅按键和触摸屏界面

要让同一个用户界面同时适用于仅有按键的产品和触摸屏产品，可以使用 [View.setKeyToSelectableInteraction()](/connect-iq/api-docs/Toybox/WatchUi/View/#setKeyToSelectableInteraction-instance_function) 启用兼容模式。调用该函数后，上下键可以循环浏览通过视图的 [View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) 注册的可选择项，并将当前项设为高亮状态，直到用户通过回车键将其设为已选择状态。

### 在布局中定义可选择项和按钮

与其父类 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 类似，可选择项和按钮都支持布局系统。Selectable 和 Button 的 XML 资源由状态 ID 和可选参数列表组成。要创建 XML Selectable，请在资源 XML 文件中定义 `<selectable>`：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | Selectable 的 ID | 以字符开头的任意字符串 | 不适用 |  |
| `x` | Selectable 区域左上角的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | 不适用 | 必需 |
| `y` | Selectable 区域左上角的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | 不适用 | 必需 |
| `width` | Selectable 区域宽度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | 不适用 | 必需 |
| `height` | Selectable 区域高度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | 不适用 | 必需 |

`<button>` 资源扩展了 `<selectable>` 的定义，并增加以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `behavior` | 视图注册的 BehaviorDelegate 中存在的方法 | 方法符号 | `null` | 可选参数 |
| `background` | Button 的背景颜色 | 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Graphics.COLOR_TRANSPARENT` | 可选参数 |

`<selectable>` 和 `<button>` 标签都使用 `<state>` 子节点定义构造时的状态。每个状态都可以选择定义，属性如下：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | Button 或 Selectable 的状态 ID | `stateDefault`、`stateHighlighted`、`stateSelected` 或 `stateDisabled` | 不适用 | 必需 |
| `bitmap` | 在 Selectable 或 Button 原点绘制的布局位图资源 | `WatchUi.Bitmap` 对象 | 不适用 | 必须指定，或指定 `color`、`drawable` 之一 |
| `color` | 应用于 Selectable 或 Button 区域的填充颜色 | 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Graphics.COLOR_TRANSPARENT` | 必须指定，或指定 `bitmap`、`drawable` 之一 |
| `drawable` | 在 Selectable 或 Button 原点绘制的布局可绘制对象 | `WatchUi.Drawable` 对象 | 不适用 | 必须指定，或指定 `bitmap`、`color` 之一 |

下面是包含菜单按钮和返回按钮的布局示例：

```xml
<layout id="ButtonLayout">
    <button x="40" y="center" width="50" height="50" background="Gfx.COLOR_BLACK" behavior="onBack">
        <state id="stateDefault" bitmap="@Drawables.DefaultBackButton" />
        <state id="stateHighlighted" bitmap="@Drawables.PressedBackButton" />
        <state id="stateSelected" bitmap="@Drawables.PressedBackButton" />
        <state id="stateDisabled" color="Graphics.COLOR_BLACK" />
    </button>
    <button x="115" y="center" width="50" height="50">
        <state id="stateDefault" bitmap="@Drawables.DefaultMenuButton" />
        <state id="stateHighlighted" bitmap="@Drawables.PressedMenuButton" />
        <state id="stateSelected" bitmap="@Drawables.PressedMenuButton" />
        <state id="stateDisabled" color="Graphics.COLOR_BLACK" />
        <param name="background">Graphics.COLOR_BLACK</param>
        <param name="behavior">onMenu</param>
    </button>
</layout>
```

更多信息请参阅 SDK 随附的 `Selectable` 示例应用。
