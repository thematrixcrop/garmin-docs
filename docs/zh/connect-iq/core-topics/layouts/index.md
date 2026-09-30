---
title: "Layouts"
---
# Layouts

资源编译器允许页面布局在不改变任何子C代码的情况下定制到特定设备上.此外,可绘制列表对象也可以定义,它们是[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)对象,可以绘制一些图形原始.

在XML中定义布局时,简单地列出列出的可绘制物体,在列出的布局标签中包含在列出的布局标签中.列出的每一个可绘制物体将转化为子C[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)物体,并将一个接一个地绘制.由于此,如果您的布局中的两个可绘制物重叠,定义的第二个可绘制物体将在定义的第一个可绘制物体上绘制.以下是基本布局的一个例子:

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

To use this layout in your code simply call [View.setLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#setLayout-instance_function) inside the [View.onLayout()](/connect-iq/api-docs/Toybox/WatchUi/View/#onLayout-instance_function) function. Call the parent [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) if you plan on using the [View.onUpdate()](/connect-iq/api-docs/Toybox/WatchUi/View/#onUpdate-instance_function) function to update dynamic values on the screen. For 示例：

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

## Layout

在`layout`标签中支持以下属性:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |用于Rez模块中的布局引用|任何以字母开始的值| NA | Required |

## Label

文本可以包含在布局中. 为了包含文本,使用支持以下属性的`label`标签:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |标签的手柄.在这里提供的ID引用了资源XML文件中定义的标签|任何以字母开始的值| NA |  |
| `text` |显示的文本| NA | An empty string |  |
| `font` |在绘制文本时使用的字体| See [font references](#font-references) | `Graphics.FONT_MEDIUM` |  |
| `x` |文本将被证明是对的点的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |文本将被证明为合理的点的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |
| `justification` |如何根据X&Y位置证明文本的合理性| `Graphics` text justify constant | `Graphics.TEXT_JUSTIFY_LEFT` |  |
| `color` |文本的颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数| `Graphics.COLOR_WHITE` |  |
| `background` |文本的背景颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数| `Gfx.COLOR_TRANSPARENT` |  |
| `visible` |图纸可见|`true`或`false`| `true` |仅支持ConnectIQ 3.3.0及后版本的设备|

## Text Area

*Since API level 3.1.0*

文本也可以作为文本区的布局中包含.文本区类似于文本标签,但它将试图通过选择适当的字体,添加行间歇或使用缩短来将文本插入给定的区域.

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |文本区域的手柄.在这里提供的ID指的是资源XML文件中定义的文本区域|任何以字母开始的值| NA |  |
| `text` |显示的文本| NA | An empty string |  |
| `font` |在绘制文本时使用的字体| See [font references](#font-references) | `Graphics.FONT_MEDIUM` |如果提供字体序列,不能使用|
| `x` |文本将被证明是对的点的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |文本将被证明为合理的点的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |
| `width` |适合文本的区域宽度|像素值,使用"%"或`fill`的相对维度| `0` |  |
| `height` |适合文本的区域的高度|像素值,使用"%"或`fill`的相对维度| `0` |  |
| `justification` |如何根据X&Y位置证明文本的合理性| `Graphics` text justify constant | `Graphics.TEXT_JUSTIFY_LEFT` |  |
| `color` |文本的颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数| `Graphics.COLOR_WHITE` |  |
| `background` |文本的背景颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数| `Gfx.COLOR_TRANSPARENT` |  |
| `visible` |图纸可见|`true`或`false`| `true` |仅支持ConnectIQ 3.3.0及后版本的设备|

一个文本区域可以从一个序列中选择一个字体,以最大限度地减少缩小.文本区域将在指定顺序中尝试字体,直到文本可以在给定的区域中无缩小绘制.如果没有找到避免缩小的字体,则该序列中的最后一个字体将被使用,文本将被缩小.每个字体元素的有效值与`font`属性相同.一个字体序列的`text-area`示例:

```xml
<text-area id="BlockOfText" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." x="10%" y="10%" width="80%" height="80%">
    <fonts>
        <font>Gfx.FONT_MEDIUM</font>
        <font>@Rez.Fonts.MySmallFont</font>
        <font>Gfx.FONT_XTINY</font>
    </fonts>
</text-area>
```

### Font References

在布局定义中,有三种方法可以引用字体:

| Reference | Description | Example |
| --- | --- | --- |
| System font reference |在[Toybox.Graphics](/connect-iq/api-docs/Toybox/Graphics/)模块中引用标准FONT编号.| `Graphics.FONT_SMALL` |
| Custom font reference |在[application resources](/connect-iq/core-topics/resources/#fonts)中引用字体.| `@Rez.Fonts.MySmallFont` |
| Scalable font reference | Reference a system scalable font. This is the font name or names optionally separated by a comma and the pixel size separated by a colon. See [Scalable Fonts](/connect-iq/core-topics/graphics/#scalable-fonts) 更多信息. | `"#BionicBold,Roboto:12"` |

## Drawables

绘图器 (bitmap 和可绘图的XML资源) 也可以在使用`drawable`标签的布局中包含.以下属性由`drawable`标签支持:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |图形的手柄.在这里提供的ID指的是资源XML文件中定义的图形|任何以字母开始的值| NA |需要;可绘制的必须在资源XML文件中定义|
| `x` |左上角对母元素的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |对于母元素的左上角的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |

## Drawable List

图形XML资源由基本图形列表组成:位图和形状.为了创建一个XML图形,在XML资源文件中定义一个`<drawable-list>`.`<bitmap>`和`<shape>`标签都应该作为`<drawable-list>`内部的子节点放置.一个图形列表:

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

为了使用这个可抽象的代码,请做以下事情:

```java
function onUpdate( dc as Dc ) as Void {
    var mySmiley = new Rez.Drawables.Smiley();
    mySmiley.draw( dc );
}
```

`<drawable-list>`标签支持以下属性:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |抽取机的身份证|任何以字符开始的字符串| NA | Required |
| `x` |左上角对母元素的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |对于母元素的左上角的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |
| `width` |图表的宽度.|像素值,使用"%"或`fill`的相对维度| `fill` |  |
| `height` |抽取列表的高度.|像素值,使用"%"或`fill`的相对维度| `fill` |  |
| `foreground` |图纸中的元素 (形状和文本) 的颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数|现在的图文背景的前景颜色|  |
| `background` |画机的背景颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数| `Gfx.COLOR_TRANSPARENT` |  |

查看与SDK共享的`Drawable`样本应用.

## Shape

`<shape>`标签支持以下属性:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `type` |图形的类型| `rectangle`, `ellipse`, `circle`, or `polygon` | NA | Required |
| `x` |对圆圈和圆:对母体的X坐标;对其他一切:对母体的X坐标.|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |圆圈和圆:与母体相比的形状中心的Y坐标;其他所有:与母体相比的左上角的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |
| `points` |定义`polygon`的点列表|`[[x1, y1], [x2, y2], ... , [xN, yN]]`,点可以使用'%'  relative来相对位置| NA |要求`polygon`;必须至少有3分|
| `width` |图形的宽度|像素值,使用"%"或`fill`的相对维度| `fill` |对于`rectangle`所需|
| `height` |图形的高度|像素值,使用"%"或`fill`的相对维度| `fill` |对于`rectangle`所需|
| `a` |图画的圆的 一个值|像素值,使用"%"或`fill`的相对维度| `fill` |对于`ellipse`所需|
| `b` |应绘制的圆的b值|像素值,使用"%"或`fill`的相对维度| `fill` |对于`ellipse`所需|
| `color` |图形的颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数|现在的图文背景的前景颜色|  |
| `corner_radius` |`rectangle`圆角的半径|像素值| `0` |仅适用于`rectangle`|
| `radius` |`circle`的半径|使用"%"的像素值或相对维度| `0` |对于`circle`所需|
| `border_width` |形状周围边界的宽度|像素值| `0` |仅适用于`rectangle`,`ellipse`和`circle`|
| `border_color` |形状周围边界的颜色|`Graphics`颜色常数或形式`0xRRGGBB`的24位整数|现在的图文背景的前景颜色|仅适用于`rectangle`,`ellipse`和`circle`|

查看与SDK共享的`Drawable`样本应用.

## Bitmap

`<bitmap>`标签支持以下属性:

| Attribute | Definition | Valid Values |默认值| Notes |
| --- | --- | --- | --- | --- |
| `id` |抽取机的身份证|任何以字符开始的字符串| NA | Required |
| `x` |左上角对母元素的X坐标|像素值,使用'%',`center`,`left`,`right`或`start`的相对位置| `0` |  |
| `y` |对于母元素的左上角的Y坐标|像素值,使用'%',`center`,`top`,`bottom`或`start`的相对位置| `0` |  |
| `filename` |应该显示的图像相对路径| A valid, relative path | NA | Required |
| `visible` |图纸可见|`true`或`false`| `true` |仅支持ConnectIQ 3.3.0及后版本的设备|

## Custom Drawables

在某些情况下,在布局点内有可绘制的输入用于扩展[WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)的定制定义类,或其直接已知的子类.这是通过使用`<drawable>`标签的`class`属性来实现的.

```xml
<layout>
    <drawable id="MoveBar" class="CustomMoveBar" />
</layout>
```

上面的可绘制入口将添加`CustomMoveBar`类的新实例到布局中.然后你可以通过取消`draw(dc)`函数来定义`CustomMoveBar`如何绘制.

```java
import Toybox.WatchUi;

class CustomMoveBar extends WatchUi.Drawable {
    function draw(dc as Dc) as Void {
        // Draw the move bar here
    }
}
```

### 转换参数到定制抽

如果可以将值传递到自定义的Drawable中.这样做,您将`<param>`儿童定义在`<drawable>`标签中.`<param>`标签应该使用`name`属性定义参数名称和内容的值.内容值将被传递到自定义的Drawable中.这意味着如果你想传递一个字符串,你必须用引用包裹内容.

```xml
<layout>
    <drawable id="MoveBar" class="CustomMoveBar">
        <param name="color">Gfx.COLOR_RED</param>
        <param name="string">"Hello Custom Drawable!"</param>
    </drawable>
</layout>
```

在XML中定义的参数被传递到自定义Drawable的初始化函数作为字典.名称被传递为符号,值被传递在XML中出现时.

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
