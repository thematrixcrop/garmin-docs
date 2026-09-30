---
title: "Resources"
---
# 资源

![](/connect-iq/resources/programmers-guide/sculptor-monkey.png)

资源编译器将图像,文本和静态数据编译成一个资源数据库,该应用程序可以在运行时间访问.资源编译器被绑定到子C编译器中.其输入是XML文件:

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <bitmap id="bitmap_id" filename="path/for/image" />
    <font id="font_id" filename="path/to/fnt" />
    <string id="string_id">Hello World!</string>
</resources>
```

##资源模块 (也称为Rez)

资源编译器自动生成一个名为`Rez`的子C模块,其中包含资源文件的资源ID.这些类型的[Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)识别符用于引用您的资源:

代码可以使用`Rez`类来引用运行时间的资源.

| API |目的| API 级别 |
| --- | --- | --- |
| [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) |输入一个资源从PRG到内存中| 1.0.0 |
| [Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function) |输入一个资源从PRG到内存中| 3.1.0 |

例如,假设您在您的视图中想要使用的位地图.

```typescript
image = Application.loadResource( Rez.Drawables.bitmap_id ) as BitmapResource;
```

现在可以在更新处理器中绘制位图:

```typescript
dc.drawBitmap( 50, 50, image );
```

资源是参考数量的,就像其他 C子C对象一样.加载资源可能是一项昂贵的操作,因此在处理屏幕更新时不要加载资源.

### 在资源文件中引用资源

资源也可以从其他资源文件中引用. 为此,使用语法`@<module>.<id>`. 例如,您可以使用以下代码引用菜单定义中的字符串资源.

```xml
<string id="menu_item_1_label">Item 1</string>

<menu id="MainMenu">
    <menu-item id="item_1" label="@Strings.menu_item_1_label" />
</menu>
```

这代码将使用用`menu_item_1_label`的ID定义的字符串作为菜单项的标签.

## 资源作用域

*自 API 级别 3.1.0*

添加资源到应用程序中带来较小的运行时间内存成本.虽然成本很小,但它可以严重削减可用的后台服务和视图内存.为了减轻这些成本,Connect IQ 具有额外的`scope`属性,用于以下资源标签:`<layout>`,`<drawable-list>`,`<bitmap>`,`<string>`,`<font>`,`<jsonData>`.`scope`属性告诉资源编译器该资源应提供的应用类型.`scope`属性的有效值为`background`,`<layout>`0和`<layout>`1 .如果属性不指定给某个资源,则默认将被认为是`<layout>`2范围的一部分.使用`<layout>`3属性配备资源的例子:

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <string id="MyBackgroundString" scope="background">Background String</string>
    <string id="MyGlanceString" scope="glance">Glance String</string>
    <string id="MyForegroundString" scope="foreground">Foreground String</string>
</resources>
```

使用`scope`属性来存储您的视角或背景服务中的内存.所有背景范围资源将可用于视角和前景应用.所有视角范围资源将可用于前景应用,但不是背景服务.前景范围资源将只可用于前景应用.

| 应用模式 | MyBackgroundString | MyGlanceString | MyForegroundString |
| --- | --- | --- | --- |
| 后台服务 | X |  |  |
| Glance | X | X |  |
| Foreground | X | X | X |

在上述例子中,`MyBackgroundString`将在任何有效模式下运行应用程序时可用.`MyGlanceString`将可用于视线和前景应用程序,但如果存在,则不会用于背景服务.`MyForegroundString`仅可用于前景应用程序.通过提供这种层次结构,开发人员可以更好地确定如何将其资源进行范围.

更多信息请参阅[后台服务](/connect-iq/core-topics/backgrounding/#background-services)或[速览](/connect-iq/core-topics/glances/#glances)。

## 字符串

连接智商产品在世界各地使用,这些用户希望应用程序在他们的语言中工作.连接智商支持使用字符串资源文件添加字符串:

```xml
<strings>
    <string id="identifier">String Value</string>
</strings>
```

在运行时,您可以使用[WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function)加载这个字符串.字符串定义采用以下属性:

| Attribute | 必需 |描述|
| --- | --- | --- |
| `id` | Yes |字符串的标识符|
| `scope` | No |参见[resource scopes](#resource-scopes). 字符串可以具有额外的`settings`范围,从而将其从运行时间中删除.当字符串仅在设置定义中使用时,这很有用.|
| `translatable` | No |设置为`false`以标记一个字符串不需要翻译.|

使用您的资源文件的[localization qualifiers](/connect-iq/core-topics/build-configuration/#device-family-and-localization-qualifiers),您可以为不同的语言提供不同的字符串.将下列后音符添加到您的资源文件中,将允许您添加各种语言的字符串文件

| Qualifier | Language | 备注 |
| --- | --- | --- |
| 无限定符 | 基础语言 | 未提供语言时使用这些字符串。如果特定语言没有提供某个字符串的翻译，系统会使用基础语言版本作为替代。 |
| `ara` | 阿拉伯语 |  |
| `bul` | 保加利亚语 |  |
| `ces` | 捷克语 |  |
| `dan` | 丹麦语 |  |
| `deu` | 德语 |  |
| `dut` | 荷兰语 |  |
| `eng` | 英语 |  |
| `est` | 爱沙尼亚语 |  |
| `fin` | 芬兰语 |  |
| `fre` | 法语 |  |
| `hrv` | 克罗地亚语 |  |
| `hun` | 匈牙利语 |  |
| `ind` | 印度尼西亚语 |  |
| `ita` | 意大利语 |  |
| `jpn` | 日语 |  |
| `kor` | 韩语 |  |
| `lav` | 拉脱维亚语 |  |
| `lit` | 立陶宛语 |  |
| `nob` | 挪威语博克马尔文 |  |
| `pol` | 波兰语 |  |
| `por` | 葡萄牙语 |  |
| `slo` | 斯洛伐克语 |  |
| `slv` | 斯洛文尼亚语 |  |
| `spa` | 西班牙语 |  |
| `swe` | 瑞典语 |  |
| `rus` | 俄语 |  |
| `ron` | 罗马尼亚语 |  |
| `tha` | 泰语 |  |
| `tur` | 土耳其语 |  |
| `ukr` | 乌克兰语 |  |
| `vie` | 越南语 |  |
| `zsm` | 标准马来语 |  |
| `zhs` | 简体中文 |  |
| `zht` | 繁体中文 |  |

您可以将这些资格与设备,家庭和屏幕资格结合起来,以设置适应每个设备的字符串.

![带限定符的资源文件夹](/connect-iq/resources/programmers-guide/resources-strings.png)

查看`Strings`样本为使用字符串资源系统的一个例子.

## 位图

Garmin设备具有不同的形式因素,屏幕尺寸和屏幕技术,因此,每台设备都需要明确转换位图.资源编译器将为每个预期的产品生成资源,这允许开发人员拥有一组黑白产品资源,一组彩色产品资源,一组更大的屏幕尺寸等.资源编译器支持`JPG/JPEG`,`BMP/WBMP`,`GIF`,`SVG`和`PNG`文件格式.

虽然每个设备都有一个独特的调色板,但开发人员可以指定用于图像的调色板.资源编译器将在开发人员的调色板中定义的颜色映射到设备调色板中最接近的颜色,只使用这些颜色.一个调色板可以使用以下语法定义:

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <bitmap id="bitmap_id" filename="path/for/image">
        <palette disableTransparency="false">
            <color>FF0000</color>
            <color>FFFFFF</color>
            <color>0000FF</color>
        </palette>
    </bitmap>
</resources>
```

下面的表显示了`<bitmap>`定义的有效属性.

| Attribute | Definition | 有效值 |默认值| 备注 |
| --- | --- | --- | --- | --- |
| `id` |用于引用Rez模块中的布局的布局手柄|任何以字母开始的值| NA | 必需 |
| `filename` |图像文件的相对路径|一个有效,可解决的图像文件的路径| NA | 必需 |
| `dithering` |在编译图像时使用的旋的类型|`floyd_steinberg`或`none`| `floyd_steinberg` |  |
| `compress` |表示编译的位图应压缩以减少 .PRG 尺寸|`true`或`false`| `false` |  |
| `automaticPalette` |在编译图像时,自动确定使用的减少色调.16位色调设备的图像将被限制在256种颜色.|`true`或`false`| 对于 16 位颜色设备为 `true` |  |
| `packingFormat` |将图像编码到PRG的格式| `default`, `png`, `jpg`, `yuv`. | `default` | 除 `default` 之外的选项仅在某些设备上可用。请参阅 [Bitmap Packing Formats](#bitmap-packing-formats) |
| `scaleX` |在x维度上,该图像应该如何扩展?| 像素大小或百分比 |如果设置`scaleY`,则将默认地设置为`scaleY`s值.否则将默认地设置为100%的图像宽度| 请参阅 `scaleRelativeTo` |
| `scaleY` |在x维度上,该图像应该如何扩展?| 像素大小或百分比 |如果设置`scaleX`,则将默认设置为`scaleX`s值.否则将默认设置为100%的图像高度.| 请参阅 `scaleRelativeTo` |
| `scaleRelativeTo` |规模因素应该基于什么?|`screen`或`image`| `screen` |设置对相对扩展的基础. 如果设置为屏幕,图像将根据编译时正在构建的产品重新扩展|
| `personality` |元素的个性类|个性类| None | 请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

对于`<palette>`定义的有效属性如下表.

| Attribute | Definition | 有效值 |默认值| 备注 |
| --- | --- | --- | --- | --- |
| `disableTransparency` |编译器应该允许图像中透明的像素吗?|`true`或`false`| `false` |  |

### 位图打包格式

*自 API 级别 4.0.0*

图像可以增加您的执行式尺寸,这可以增加用户安装或更新您的应用程序时的额外等待. 为了减少可执行式膨胀,使用这些位图属性将图像包装到您的执行式中.

每种格式都有其优点和缺点:

| Format | Advantage | Disadvantage | 使用场景 |
| --- | --- | --- | --- |
| `default` |可在所有产品上使用,最快加载,支持阿尔法频道| 不压缩 |应用程序在API前4.0.0级设备上运行.低调图像可能具有非常小的运行时间成本|
| `png` | 无损、已压缩并支持 Alpha 通道 |最慢的加载,如果经常从图形库中清除和重新加载,这可以增加运行时间成本|进口带或无带阿尔法频道的非照片图像|
| `jpg` |压缩非常好,快速加载| 有损格式，不支持 alpha 通道 | 导入不带 alpha 通道的照片图像 |
| `yuv` |压缩良好,支持阿尔法通道,快速加载| 有损格式 |通过阿尔法频道进口照片图像|
|  |  |  |  |

## 字体

资源编译器可以读取`TXT`或`PNG`格式的字体.您可以使用BMFont工具 (可在[http://www.angelcode.com/products/bmfont/](http://www.angelcode.com/products/bmfont/)上使用) 来将字体从许多不同的格式转换为兼容格式. 在出口之前,请确保BMFont的 *字体设置*指定Unicode字符集.下面的图片中显示出所建议的出口选项:

图1.BMFont出口选择

![BMFont 导出选项](/connect-iq/resources/programmers-guide/bmfont_options.png)

颜色可以使用[Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)设置.由于位图字体可以耗费大量的运行时间内存,字体转换器默认设置为非-反-aliased 1-bit字体来存储内存.如果你知道你将有运行时间内存,你可以使用`antialias`选项启动字体反-aliasing.

```xml
<!-- Domo arigato mister font -->
<font id="font_id" filename="roboto.fnt" antialias="true" />
```

如果您正在创建一个大字体,有时,只需要特定的字体大小 (就像手表面的数字一样). 使用过属性来指定特定的字体,包括:

```xml
<!-- Only include digits from this large font -->
<font id="font_id" filename="big_font.fnt" filter="0123456789:"/>
```

字体元素接受以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `id` | 字符串 | Yes | None |字体的唯一标识符|
| `filename` | 字符串 | Yes | None |在BMFont生成的`.fnt`文件中|
| `filter` | 字符串 | No | None |选项字符串概述所有字符从字体中输入|
| `antialias` | 布尔值 | No | `false` |布尔字体识别是否应进口与反化信息|
| `scope` | 字符串 | No | `foreground` | 请参阅 [resource scopes](#resource-scopes) |
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

## 菜单

菜单是Connect IQ产品中常见的UI元素.菜单资源允许您在资源定义中定义菜单.

### 标准菜单

菜单使用以下属性的`<menu2>`元素定义:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `id` | 字符串 | Yes | None |菜单的唯一标识符|
| `title` | 字符串 | No | None | 字符串、字符串资源标识符或可绘制资源标识符 |
| `icon` | 可绘制对象引用 | No | None |用于 Instinct 2 子屏幕图标.|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

在`<menu2>`元素内可以有`<menu-item>`,`<toggle-menu-item>`或`<icon-menu-item>`类型的数组.

#### 标准菜单项

标准菜单项目包含在`<menu-item>`元素中,具有以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `id` | 字符串 | Yes | None |菜单项的唯一标识符|
| `label` | 字符串 | Yes | None |菜单项的字符串标题|
| `subLabel` | 字符串 | No | None |菜单项的字符串字幕|
| `icon` | 可绘制对象引用 | No | None |在 Instinct 2 子屏幕中显示的可画图标|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

#### 切换菜单项

调节菜单项包含在`<toggle-menu-item>`元素中.除了[standard menu items](#standard-menu-items)中提到的属性外,它们有以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `disabledSubLabel` | 字符串 | No | None |独立的子标签,用于在禁用状态下切换ID时|
| `checked` | 布尔值 | No | `false` |`true`如果必须启用转换,`false`不然|

#### 图标菜单项

标签菜单项由`<icon-menu-item>`元素定义. 标签菜单图标,`icon`属性显示在菜单项中.

### 复选框菜单

查询框菜单是用`<checkbox-menu>`元素定义的,它具有与[standard menus](#standard-menus)相同的属性.查询框菜单内可以包含`<checkbox-menu-item>`元素的序列.

#### 复选框菜单项

查询框菜单项是用`<checkbox-menu-item>`元素定义的.除了[standard menu items](#standard-menu-items)中提到的属性外,它们有以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `checked` | 布尔值 | No | `false` |`true`如果必须启用转换,`false`不然|

### 操作菜单

动作菜单是与页面相关的文本菜单. 动作菜单是用`<action-menu>`元素定义的,它可以具有以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `id` | 字符串 | Yes | None |菜单的唯一标识符|
| `theme` |[`WatchUi.ACTION_MENU_THEME_DARK`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module)或[`WatchUi.ACTION_MENU_THEME_LIGHT`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module)| 否 | [`WatchUi.ACTION_MENU_THEME_DARK`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module) |用于设置动作菜单的显示主题（深色或浅色）。并非所有产品都支持设置此选项。|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

#### 操作菜单项

动作菜单项目包含在`<action-menu-item>`元素中,具有以下属性:

| Attribute |类型| 必需 | Default |描述|
| --- | --- | --- | --- | --- |
| `id` | 字符串 | Yes | None |菜单项的唯一标识符|
| `label` | 字符串 | Yes | None |菜单项的字符串标题|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

## 动画

*自 API 级别 3.1.0*

Connect IQ SDK 中包含的 Monkey Motion 工具可用于为兼容的 Connect IQ 产品生成动画资源。

tool子动作工具支持从[`YUV`](https://github.com/cota/streamit-2.1.1/blob/master/apps/library_only/mpeg2/c/doc/mpeg2enc.doc)和`GIF`文件格式导入.由于`YUV`是真正的颜色,接近原始的文件格式,它是将高质量的动画输入子动作编码工具时建议的格式.如果需要,[FFmpeg](https://ffmpeg.org/)是转换视频文件格式的方便工具.例如,如果您的创意团队已经提供了其他流行的格式的视频,则将文件转换为`YUV`格式:

```
> ffmpeg -i input.mp4 -vf format=yuv420p output.y4m
```

此外，由于 `YUV` 格式不支持透明度（不同于 `GIF` 文件格式），Monkey Motion 工具接受额外的 `YUV` 文件作为输入。该视频文件应表示原始透明动画的 alpha 通道掩码。同样，FFmpeg 是创建此类视频的便捷工具。`alphaextract` 选项可用于接收带 alpha 通道的输入流，并返回只包含 alpha 分量灰度值的视频：

```
> ffmpeg -i input.gif -vf alphaextract,format=yuv420p output.y4m
```

![](/connect-iq/resources/programmers-guide/app_settings_editor.png)

由于上述部分所述相同的原因,动画必须明确转换为每个设备. 为了轻松地将其进口到您的Connect IQ应用程序中,Monkey Motion工具批量将视频转换为您选择的设备的二进制编码.

### 包含动画资源在子C项目中

为了将动画资源纳入子C项目的,定义动画资源.这可以手动或使用子运动工具.下表显示了`<animation>`资源的所有有效属性:

| Attribute | Definition | 有效值 |默认值| 备注 |
| --- | --- | --- | --- | --- |
| `id` |用于引用Rez模块中的布局的布局手柄|任何以字母开始的值| NA | 必需 |
| `filename` |子运动宣言文件的相对路径|一个有效的,可解决的路径到一个子运动表现文件| NA | 必需 |
| `personality` |元素的个性类|一个定义的人格类| NA | 可选 |

动画 XML 资源示例：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <animation id="swirl" filename="swirl.mmm" />
</resources>
```

要将此动画资源加载到代码中,创建一个[WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)然后将其添加到一个[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/):

```typescript
class MyAnimationView extends WatchUi.View {

   var mySwirl;

   function initialize( dc ) {
       var dev = System.getDeviceSettings();
       var x = ( dev.screenWidth - mySwirl.getWidth() ) / 2;
       var y = ( dev.screenHeight - mySwirl.getHeight() ) / 2;

       // create a new AnimationLayer with the resource then add it to the view
       // as a WatchUi.Layer
       mySwirl = new WatchUi.AnimationLayer(Rez.Drawables.swirl, {:locX=>x, :locY=>y});
       view.addLayer( mySwirl );
    }

    function onShow() {
        mySwirl.play();
        View.onShow();
    }

    function onUpdate(dc) {
        // override 'onUpdate' to clear the screen
        dc.clear();
    }
}
```

阅读更多关于[Monkey Motion reference](/connect-iq/reference-guides/monkey-motion-reference/#monkey-motion),[API documentation](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/),[AnimationLayer documentation](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)和`AnimationWatchFace`样本中的动画

## JSON 数据

JSON 数据资源可以在应用程序中存储相对大量的数据,而无需随时存储其在内存中.这可以用于存储类似在运行时需要引用的信息表的东西,但不会被修改.

这些资源是用`jsonData`标签声明在资源文件中,由资源编译器读取,并在运行时按需加载.`jsonData`标签支持以下属性:

| Attribute | Definition | 有效值 |
| --- | --- | --- |
| `id` |JSON 资源的标识符|任何以字母开始的字符串|
| `filename` |包含JSON数据的文件名称|一个有效的,可解决的数据文件路径|

JSON 数据资源可以作为一个`jsonData`值或作为一个由`filename`属性引用的文件提供,取决于资源文件内或单独的 JSON 文件中是否更容易管理数据.如果使用文件,它可能只包含 JSON 数据.以下是几个例子:

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <jsonData id="jsonDictionary">{"key":"value", "3":"three", "three":3}</jsonData>
    <jsonData id="jsonArray">[1,2,3,4,5,6]</jsonData>
    <jsonData id="jsonMix">[1,{"1":"one"},["a","b","c"]]</jsonData>
    <jsonData id="jsonPrimitive">5</jsonData>
    <jsonData id="jsonFile" filename="data.json"/>
</resources>
```

通过通过`jsonData`ID来加载JSON数据,采用[Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function)方法.例如,从上面的示例中加载`jsonArray`数据,将使用以下代码:

```typescript
var array = Application.loadResource(Rez.JsonData.jsonArray);
```

查看与SDK共享的`JsonDataResources`样本应用.

我们把[Toybox.WatchUi](/connect-iq/api-docs/Toybox/WatchUi/)移动了.

我们将设置一个子屏幕图标.

他们的语言和视频文件格式?
