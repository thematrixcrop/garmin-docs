---
title: "Input Handling"
---
# 输入处理

仿佛输入处理还不是UI工具包中最重要和最复杂的部分之一,Garmin设备将复杂性提高到一个水平.与现代智能手机的触摸式闪光矩形不同,Garmin设备有很多形状和尺寸.触摸屏并不总是适合所有手表产品,因此存在输入风格和屏幕技术的混合.这是UI工具包的工作,使这对开发人员一致.

## 输入和应用类型

并非所有应用程序类型都能完全访问输入.一个手表面只能知道它是否是[pressed](/connect-iq/api-docs/Toybox/WatchUi/WatchFaceDelegate/#onPress-instance_function)和数据字段只能知道它们是否是[tapped](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function).小工具和视图可以接收输入 (可能在某些设备上受到限制),而手表应用程序将具有最多的输入能力.

## 输入委托

委托对象实现了对输入处理的特定界面.子C提供了一个低级的[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/),允许在基本级别处理事件.这对于应用程序需要以特定的方式处理按按或触摸屏交互时很有用.

| API |目的| API 级别 |
| --- | --- | --- |
| [InputDelegate.onDrag()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onDrag-instance_function) |当用户拖动触摸屏时发送| 3.3.0 |
| [InputDelegate.onFlick()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onFlick-instance_function) |当用户点击触摸屏时,| 3.3.0 |
| [InputDelegate.onKey()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKey-instance_function) | 实体按钮已按下并释放 | 1.0.0 |
| [InputDelegate.onKeyPressed()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKeyPressed-instance_function) | 实体按钮已按下 | 1.1.2 |
| [InputDelegate.onKeyReleased()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onKeyReleased-instance_function) | 实体按钮按下后已释放 | 1.1.2 |
| [InputDelegate.onTap()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onTap-instance_function) |当触摸屏被打时发送 (快速触摸和释放)| 1.0.0 |
| [InputDelegate.onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function) |当触摸屏被触摸而未释放时,| 1.0.0 |
| [InputDelegate.onRelease()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onRelease-instance_function) |这只会在[InputDelegate.onHold()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onHold-instance_function)事件之后发送,一旦触摸屏上的屏幕被释放| 1.0.0 |
| [InputDelegate.onSwipe()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSwipe-instance_function) |这是在触摸屏被滑动时发送| 1.0.0 |
| [InputDelegate.onSelectable()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSelectable-instance_function) |在[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)的状态发生变化时,| 2.1.0 |

要处理输入事件，请扩展 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)，并重写适当的处理函数。如果处理函数返回 `true`，系统会认为该事件已处理；返回 `false` 则会告知系统继续处理输入。

查看与SDK共享的`Input`样本应用.

## 行为

Garmin制作产品有目的,而这个目的可以改变一个产品线的设计.决定产品是否有触摸屏或有按可以取决于用户将使用的环境.例如,如果产品是用于水中 (游泳,划艇,船上),它可能没有触摸屏.这些决定使得优质的产品,但也增加了设备碎片化导致开发人员的挫折.

大多数产品都会支持常见行为 (下一页,后一页),但用户的执行方式可能根据可用的输入类型而异.为了帮助解决这个困境,子C将行为层面的事件暴露出来.行为将高层次的意图与实际输入类型下一页与屏幕压力分开.[WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)是[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)的超级类型,并将其低层次的输入映射到多个产品中的常见操作中.使用[WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)可以导致更便携的代码.

| API |目的| API 级别 |
| --- | --- | --- |
| [BehaviorDelegate.onBack()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onBack-instance_function) |处理用户执行后背行为| 1.0.0 |
| [BehaviorDelegate.onMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onMenu-instance_function) |处理执行菜单行为的用户| 1.0.0 |
| [BehaviorDelegate.onNextPage()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onNextPage-instance_function) |在页面循环行为中执行下一个页面的用户操作| 1.0.0 |
| [BehaviorDelegate.onPreviousPage()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onPreviousPage-instance_function) |在页面循环行为中执行前页面的用户操作| 1.0.0 |
| [BehaviorDelegate.onSelect()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onSelect-instance_function) |处理用户执行选定的行为| 1.0.0 |

## 可选择项和按钮

### 可选择项

*自 API 级别 2.1.0*

子C为具有大型触摸屏 (和几个按) 的产品提供了一个接口,以轻松定义屏幕上可触摸的物体,称为[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/).

[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)是一个状态驱动的对象,支持基于触摸相互作用设置的四个可选内置状态:

-   默认（`:stateDefault`）- 初始状态

- 突出 (`:stateHighlighted`) - 现在正在按下可选择

-   已选择（`:stateSelected`）- 可选项被按下并释放（即点击）

-   已禁用（`:stateDisabled`）- 可选择项已被禁用


一旦发生状态变化,发送一个[WatchUi.SelectableEvent](/connect-iq/api-docs/Toybox/WatchUi/SelectableEvent/),结果是对[InputDelegate.onSelectable()](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/#onSelectable-instance_function)进行调用,该调用将当前的选项实例和之前的状态符号进行比较,并允许随着状态变化而进行自定义操作.选项必须通过[View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function)调用注册作为视图布局的一部分,以便视图了解它们和直接接触事件到对象.堆叠的选项实例将根据其顺序向[View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function)进行输入.

每个四个状态必须被映射到0xRRGGBB形式的[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/),Graphics.COLOR常数或24位整数.状态可选地定义并在[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)构造器中指定,或作为实例成员进行手动修改.每个[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)将使用定义的`locX`和`locY`坐标作为抵消的当前状态绘制.如果已定义,建议将[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)扩展到额外状态,并且可以使用[Selectable.getState()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#getState-instance_function)和[Selectable.setState()](/connect-iq/api-docs/Toybox/WatchUi/Selectable/#setState-instance_function)程序来改变默认状态机 (参见可选样本应用程序).

[WatchUi.Button](/connect-iq/api-docs/Toybox/WatchUi/Button/)来自[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)并增加了在[WatchUi.BehaviorDelegate](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/)中定义背景和地图互动的能力,用于现有或新的定制方法 (即`onMenu()`).

### 仅按钮和触摸屏界面

可以使用[View.setKeyToSelectableInteraction()](/connect-iq/api-docs/Toybox/WatchUi/View/#setKeyToSelectableInteraction-instance_function)来启用与只按的产品兼容模式.[View.setKeyToSelectableInteraction()](/connect-iq/api-docs/Toybox/WatchUi/View/#setKeyToSelectableInteraction-instance_function)可以被调用,使上下键通过查看的[View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function)调用程序登录的选项列表循环,该调用程序设置了在[WatchUi.Selectable](/connect-iq/api-docs/Toybox/WatchUi/Selectable/)上突出状态,直到通过输入键放入选项状态.

### 在布局中定义可选择项和按钮

像其母语[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)一样,选择式和按都支持布局系统.选择式和按XML资源由状态ID和可选参数列表组成.创建XML选择式,在XML资源文件中定义`<selectable>`:

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` |选项的身份证|任何以字符开始的字符串| 不适用 |  |
| `x` |选择区域左上角的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| N/A | 必需 |
| `y` |选择区域左上角的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| N/A | 必需 |
| `width` |可选择区域的宽度|使用"%"或`fill`的像素值或相对维度| N/A | 必需 |
| `height` |可选择区域的高度|使用"%"或`fill`的像素值或相对维度| N/A | 必需 |

`<button>`资源扩大了`<selectable>`的定义,并添加了以下内容:

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `behavior` |在视图注册的行为代表中存在的方法| 方法符号 | `null` | 可选 / 参数 |
| `background` |按的背景颜色|颜色常数或形式`0xRRGGBB`的24位整数| `Graphics.COLOR_TRANSPARENT` | 可选 / 参数 |

`<selectable>`和`<button>`标签都使用`<state>`作为儿童节点来定义其构建状态.每个状态是可选定义的,但定义为以下:

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 按钮/可选择项的状态标识 | `stateDefault`、`stateHighlighted`、`stateSelected` 或 `stateDisabled` | N/A | 必需 |
| `bitmap` |在选项/按来源中绘制的布局中的位图资源|`WatchUi.Bitmap`对象| N/A |要求或必须指定`color`或`drawable`|
| `color` |在可选择/按区域上应用颜色填充|颜色常数或形式`0xRRGGBB`的24位整数| `Graphics.COLOR_TRANSPARENT` |要求或必须指定`bitmap`或`drawable`|
| `drawable` |在选项/按来源中绘制的布局中可绘制的对象|`WatchUi.Drawable`对象| N/A |要求或必须指定`bitmap`或`color`|

一个包含两个菜单和后面按的示例布局:

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

查看与SDK共享的`Selectable`样本应用.
