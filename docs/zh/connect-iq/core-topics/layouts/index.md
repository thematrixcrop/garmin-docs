---
title: "Layouts"
---
<a id="layouts"></a>
# 布局

资源编译器可以针对特定设备定制页面布局，而无需修改任何 Monkey C 代码。此外，还可以定义可绘制列表对象。它们是能够绘制多种图形基本元素的 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 对象。

在 XML 中定义布局时，只需在一组 `layout` 标签中列出要包含的可绘制对象。每个对象都会转换为 Monkey C 的 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 对象，并按列出的顺序绘制。因此，如果布局中的两个可绘制对象相互重叠，后定义的对象会绘制在先定义的对象之上。下面是一个基本布局示例：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <layout id="MainLayout">
        <drawable id="MainBackground" />
        <label text="Page Heading" x="10" y="25" font="Gfx.FONT_LARGE" color="Gfx.COLOR_BLACK" />
        <label text="Your information goes here." x="50%" y="50%" font="Gfx.FONT_MEDIUM" color="Gfx.COLOR_DK_GRAY" />
    </layout>
</resources>
```

要在代码中使用此布局，请在 [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) 函数中调用 [View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function)。如果计划使用 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) 更新屏幕上的动态值，请调用父类的 [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function)。例如：

```java
class MainView extends WatchUi.View {
    public function onLayout( dc as Dc ) as Void {
        setLayout( Rez.Layouts.MainLayout( dc ) );
    }

    public function onUpdate( dc as Dc) as Void {
        // Call parent's onUpdate(dc) to redraw the layout
        View.onUpdate( dc );

        // Include anything that needs to be updated here
    }
}
```

## 布局

`layout` 标签支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 布局的句柄，用于在 Rez 模块中引用该布局 | 以字母开头的任意值 | 不适用 | 必需 |

## 标签

布局中可以包含文本。要添加文本，请使用 `label` 标签，它支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 标签的句柄。此处提供的 ID 用于引用资源 XML 文件中定义的标签 | 以字母开头的任意值 | 不适用 |  |
| `text` | 要显示的文本 | 不适用 | 空字符串 |  |
| `font` | 绘制文本时使用的字体 | 请参阅 [字体引用](#font-references) | `Graphics.FONT_MEDIUM` |  |
| `x` | 文本对齐基准点的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 文本对齐基准点的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |
| `justification` | 文本相对于 X、Y 位置的对齐方式 | `Graphics` 文本对齐常量 | `Graphics.TEXT_JUSTIFY_LEFT` |  |
| `color` | 文本颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Graphics.COLOR_WHITE` |  |
| `background` | 文本背景颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Gfx.COLOR_TRANSPARENT` |  |
| `visible` | 是否显示该可绘制对象 | `true` 或 `false` | `true` | 仅支持 Connect IQ 3.3.0 及更高版本的设备 |

## 文本区域

*自 API 级别 3.1.0 起支持*

布局中也可以使用文本区域。文本区域类似于文本标签，但会通过选择合适的字体、插入换行或截断文本，尝试将文本放入指定区域。要添加文本区域，请使用 `text-area` 元素，它支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 文本区域的句柄。此处提供的 ID 用于引用资源 XML 文件中定义的文本区域 | 以字母开头的任意值 | 不适用 |  |
| `text` | 要显示的文本 | 不适用 | 空字符串 |  |
| `font` | 绘制文本时使用的字体 | 请参阅 [字体引用](#font-references) | `Graphics.FONT_MEDIUM` | 提供字体序列时不能使用 |
| `x` | 文本对齐基准点的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 文本对齐基准点的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |
| `width` | 文本区域的宽度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `0` |  |
| `height` | 文本区域的高度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `0` |  |
| `justification` | 文本相对于 X、Y 位置的对齐方式 | `Graphics` 文本对齐常量 | `Graphics.TEXT_JUSTIFY_LEFT` |  |
| `color` | 文本颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Graphics.COLOR_WHITE` |  |
| `background` | 文本背景颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Gfx.COLOR_TRANSPARENT` |  |
| `visible` | 是否显示该可绘制对象 | `true` 或 `false` | `true` | 仅支持 Connect IQ 3.3.0 及更高版本的设备 |

文本区域可以从字体序列中选择字体，以尽量减少截断。它会按指定顺序尝试字体，直到文本能够在给定区域内完整绘制。如果没有字体能够避免截断，则使用序列中的最后一个字体，并截断文本。每个 `font` 元素的有效值与 `font` 属性相同。下面是包含字体序列的 `text-area` 示例：

```xml
<text-area id="BlockOfText" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." x="10%" y="10%" width="80%" height="80%">
    <fonts>
        <font>Gfx.FONT_MEDIUM</font>
        <font>@Rez.Fonts.MySmallFont</font>
        <font>Gfx.FONT_XTINY</font>
    </fonts>
</text-area>
```

<a id="font-references"></a>
### 字体引用

在布局定义中，可以通过以下三种方式引用字体：

| 引用方式 | 说明 | 示例 |
| --- | --- | --- |
| 系统字体引用 | 引用 [Toybox.Graphics](/connect-iq/api-docs/Toybox/Graphics/) 模块中的标准 FONT 枚举值 | `Graphics.FONT_SMALL` |
| 自定义字体引用 | 引用 [应用资源](/connect-iq/core-topics/resources/#fonts) 中的字体 | `@Rez.Fonts.MySmallFont` |
| 可缩放字体引用 | 引用系统可缩放字体。可以指定一个字体名称，或用逗号分隔多个名称，并在末尾用冒号指定像素大小。详情请参阅[可缩放字体](/connect-iq/core-topics/graphics/#scalable-fonts) | `"#BionicBold,Roboto:12"` |

## 可绘制对象

位图和可绘制 XML 资源都可以通过 `drawable` 标签包含在布局中。`drawable` 标签支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 可绘制对象的句柄。此处提供的 ID 用于引用资源 XML 文件中定义的对象 | 以字母开头的任意值 | 不适用 | 必需；该对象也必须在资源 XML 文件中定义 |
| `x` | 相对于父元素左上角的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 相对于父元素左上角的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |

## 可绘制列表

可绘制 XML 资源由位图和形状等基本可绘制对象组成。要创建 XML 可绘制资源，请在资源 XML 文件中定义 `<drawable-list>`。`<bitmap>` 和 `<shape>` 标签都应作为 `<drawable-list>` 的子节点。下面是一个示例：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <drawable-list id="Smiley" background="Gfx.COLOR_YELLOW">
        <shape type="circle" x="10" y="10" radius="5" color="Gfx.COLOR_BLACK" />
        <shape type="circle" x="30" y="10" radius="5" color="Gfx.COLOR_BLACK" />
        <bitmap id="mouth" x="15" y="25" filename="../bitmaps/mouth.png" />
    </drawable-list>
</resources>
```

要在代码中使用此可绘制对象，请执行以下操作：

```java
function onUpdate( dc as Dc ) as Void {
    var mySmiley = new Rez.Drawables.Smiley();
    mySmiley.draw( dc );
}
```

`<drawable-list>` 标签支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 可绘制对象的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `x` | 相对于父元素左上角的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 相对于父元素左上角的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |
| `width` | 可绘制列表的宽度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` |  |
| `height` | 可绘制列表的高度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` |  |
| `foreground` | 列表中绘制的元素（形状和文本）的颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | 当前绘图上下文的前景色 |  |
| `background` | 可绘制对象的背景颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | `Gfx.COLOR_TRANSPARENT` |  |

更多信息请参阅 SDK 随附的 `Drawable` 示例应用。

## 形状

`<shape>` 标签支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `type` | 要绘制的形状类型 | `rectangle`、`ellipse`、`circle` 或 `polygon` | 不适用 | 必需 |
| `x` | 对于圆和椭圆，是相对于父元素的形状中心 X 坐标；对于其他形状，是相对于父元素左上角的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 对于圆和椭圆，是相对于父元素的形状中心 Y 坐标；对于其他形状，是相对于父元素左上角的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |
| `points` | 定义 `polygon` 的点列表 | `[[x1, y1], [x2, y2], ... , [xN, yN]]`，点可以使用 `%` 表示相对位置 | 不适用 | `polygon` 必需；至少包含 3 个点 |
| `width` | 要绘制的形状宽度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` | `rectangle` 必需 |
| `height` | 要绘制的形状高度 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` | `rectangle` 必需 |
| `a` | 要绘制的椭圆的 a 值 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` | `ellipse` 必需 |
| `b` | 要绘制的椭圆的 b 值 | 像素值，或使用 `%` 或 `fill` 的相对尺寸 | `fill` | `ellipse` 必需 |
| `color` | 要绘制的形状颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | 当前绘图上下文的前景色 |  |
| `corner_radius` | `rectangle` 圆角半径 | 像素值 | `0` | 仅适用于 `rectangle` |
| `radius` | `circle` 半径 | 像素值，或使用 `%` 的相对尺寸 | `0` | `circle` 必需 |
| `border_width` | 形状边框宽度 | 像素值 | `0` | 仅适用于 `rectangle`、`ellipse` 和 `circle` |
| `border_color` | 形状边框颜色 | `Graphics` 颜色常量，或形式为 `0xRRGGBB` 的 24 位整数 | 当前绘图上下文的前景色 | 仅适用于 `rectangle`、`ellipse` 和 `circle` |

更多信息请参阅 SDK 随附的 `Drawable` 示例应用。

## 位图

`<bitmap>` 标签支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 可绘制对象的 ID | 以字符开头的任意字符串 | 不适用 | 必需 |
| `x` | 相对于父元素左上角的 X 坐标 | 像素值，或使用 `%`、`center`、`left`、`right` 或 `start` 的相对位置 | `0` |  |
| `y` | 相对于父元素左上角的 Y 坐标 | 像素值，或使用 `%`、`center`、`top`、`bottom` 或 `start` 的相对位置 | `0` |  |
| `filename` | 要显示图像的相对路径 | 有效的相对路径 | 不适用 | 必需 |
| `visible` | 是否显示该可绘制对象 | `true` 或 `false` | `true` | 仅支持 Connect IQ 3.3.0 及更高版本的设备 |

## 自定义可绘制对象

有时需要让布局中的可绘制项指向一个自定义类。该类应继承 [WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/) 或其已知的直接子类。可以通过 `drawable` 标签的 `class` 属性实现：

```xml
<layout>
    <drawable id="MoveBar" class="CustomMoveBar" />
</layout>
```

上面的可绘制项会向布局中添加一个 `CustomMoveBar` 类的新实例。然后可以通过重写 `draw(dc)` 函数定义 `CustomMoveBar` 的绘制方式。

```java
import Toybox.WatchUi;

class CustomMoveBar extends WatchUi.Drawable {
    function draw(dc as Dc) as Void {
        // Draw the move bar here
    }
}
```

### 向自定义可绘制对象传递参数

有时需要向自定义 Drawable 传递值。为此，请在 `drawable` 标签中定义 `<param>` 子节点。`<param>` 标签通过 `name` 属性指定参数名称，并将参数值放在标签内容中。内容会原样传递给自定义 Drawable；如果要传递字符串，必须将内容放在引号中。

```xml
<layout>
    <drawable id="MoveBar" class="CustomMoveBar">
        <param name="color">Gfx.COLOR_RED</param>
        <param name="string">"Hello Custom Drawable!"</param>
    </drawable>
</layout>
```

XML 中定义的参数会以字典形式传递给自定义 Drawable 的初始化函数。参数名称会作为符号传递，参数值则保持 XML 中的原样。

```typescript
import Toybox.WatchUi;

class CustomMoveBar extends WatchUi.Drawable {

    private var _color, _string;

    public function initialize(params as Dictionary) {
        // You should always call the parent's initializer and
        // in this case you should pass the params along as size
        // and location values may be defined.
        Drawable.initialize(params);

        // Get any extra values you wish to use out of the params Dictionary
        _color = params.get(:color);
        _string = params.get(:string);
    }
}
```
