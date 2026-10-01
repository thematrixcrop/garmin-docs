---
title: "Resources"
---
<a id="resources"></a>
# 资源

![](/connect-iq/resources/programmers-guide/sculptor-monkey.png)

资源编译器会将图像、文本和静态数据编译到资源数据库中，应用可以在运行时访问这些资源。资源编译器与 Monkey C 编译器集成，输入为 XML 文件：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <bitmap id="bitmap_id" filename="path/for/image" />
    <font id="font_id" filename="path/to/fnt" />
    <string id="string_id">Hello World!</string>
</resources>
```

## 资源模块（也称为 Rez）

资源编译器会自动生成一个名为 `Rez` 的 Monkey C 模块，其中包含资源文件的资源 ID。这些 [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/) 类型的标识符用于引用资源。

代码可以使用 `Rez` 模块在运行时引用资源。可以使用以下 API：

| API | 用途 | API 级别 |
| --- | --- | --- |
| [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) | 将 PRG 中的资源加载到内存 | 1.0.0 |
| [Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function) | 将 PRG 中的资源加载到内存 | 3.1.0 |

例如，假设要在视图中使用一张位图。应用使用位图前，必须先从资源文件加载它：

```typescript
image = Application.loadResource( Rez.Drawables.bitmap_id ) as BitmapResource;
```

然后可以在更新处理器中绘制位图：

```typescript
dc.drawBitmap( 50, 50, image );
```

资源和其他 Monkey C 对象一样采用引用计数。加载资源可能开销较大，因此不要在处理屏幕更新时加载资源。

### 在资源文件中引用资源

也可以在一个资源文件中引用另一个资源文件中的资源。使用语法 `@<module>.<id>` 即可。例如，下面的代码在菜单定义中引用字符串资源：

```xml
<string id="menu_item_1_label">Item 1</string>

<menu id="MainMenu">
    <menu-item id="item_1" label="@Strings.menu_item_1_label" />
</menu>
```

该代码会使用 ID 为 `menu_item_1_label` 的字符串作为菜单项标签。

<a id="resource-scopes"></a>
## 资源作用域

*自 API 级别 3.1.0*

向应用添加资源会产生少量运行时内存开销。虽然开销不大，但可能明显减少后台服务和 Glance 可用的内存。为降低这项开销，Connect IQ 为以下资源标签提供了 `scope` 属性：`<layout>`、`<drawable-list>`、`<bitmap>`、`<string>`、`<font>` 和 `<jsonData>`。`scope` 告诉资源编译器该资源应在哪种应用模式下可用。有效值为 `background`、`glance` 和 `foreground`。如果未指定，资源默认属于 `foreground` 作用域。下面是为字符串资源使用 `scope` 的示例：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <string id="MyBackgroundString" scope="background">Background String</string>
    <string id="MyGlanceString" scope="glance">Glance String</string>
    <string id="MyForegroundString" scope="foreground">Foreground String</string>
</resources>
```

使用 `scope` 属性可以节省 Glance 或后台服务的内存。所有 `background` 作用域资源都可供 Glance 和前台应用使用；所有 `glance` 作用域资源都可供前台应用使用，但后台服务无法使用；`foreground` 作用域资源只能供前台应用使用。

| 应用模式 | MyBackgroundString | MyGlanceString | MyForegroundString |
| --- | --- | --- | --- |
| 后台服务 | X |  |  |
| Glance | X | X |  |
| 前台应用 | X | X | X |

在上例中，`MyBackgroundString` 在所有有效应用模式下都可用；`MyGlanceString` 可供 Glance 和前台应用使用，但后台服务无法使用；`MyForegroundString` 只能供前台应用使用。借助这种层次结构，开发者可以更准确地决定每个资源的作用域。

更多信息请参阅[后台服务](/connect-iq/core-topics/backgrounding/#background-services)和 [Glance](/connect-iq/core-topics/glances/#glances)。

## 字符串

Connect IQ 产品面向全球用户，用户希望应用以自己的语言显示。Connect IQ 支持通过字符串资源文件添加文本：

```xml
<strings>
    <string id="identifier">String Value</string>
</strings>
```

运行时可以使用 [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) 加载字符串。字符串定义支持以下属性：

| 属性 | 必需 | 描述 |
| --- | --- | --- |
| `id` | 是 |字符串的标识符|
| `scope` | 否 |参见[资源作用域](#resource-scopes)。字符串可以具有额外的 `settings` 作用域，从而将其从运行时删除。当字符串仅在设置定义中使用时，这很有用。|
| `translatable` | 否 |设置为 `false` 可标记字符串无需翻译。|

通过资源文件夹的[本地化限定符](/connect-iq/core-topics/build-configuration/#device-family-and-localization-qualifiers)，可以为不同语言提供不同的字符串。将以下后缀添加到资源文件夹名称，即可为相应语言添加字符串文件。

| 限定符 | 语言 | 备注 |
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

如有需要，可以将这些限定符与设备、系列和屏幕限定符组合，为每台设备定制字符串。

![带限定符的资源文件夹](/connect-iq/resources/programmers-guide/resources-strings.png)

请参阅 `Strings` 示例应用，了解字符串资源系统的用法。

## 位图

Garmin 设备的外形、屏幕尺寸和显示技术各不相同，因此位图需要针对每台设备进行转换。资源编译器会为每个目标产品生成资源，因此开发者可以分别为黑白设备、彩色设备和大屏设备提供资源。资源编译器支持 `JPG/JPEG`、`BMP/WBMP`、`GIF`、`SVG` 和 `PNG` 文件格式。

每台设备都有自己的调色板，但开发者可以为图像指定调色板。资源编译器会将开发者调色板中的颜色映射到设备调色板中最接近的颜色，并只使用这些颜色。可以使用以下语法定义调色板：

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

下表列出了 `<bitmap>` 定义支持的一些有效属性。

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 用于在 Rez 模块中引用位图的句柄 | 以字母开头的任意值 | 不适用 | 必需 |
| `filename` | 图像文件的相对路径 | 有效且可解析的图像文件路径 | 不适用 | 必需 |
| `dithering` | 编译图像时使用的抖动方式 | `floyd_steinberg` 或 `none` | `floyd_steinberg` |  |
| `compress` |表示编译的位图应压缩以减少 .PRG 尺寸|`true`或`false`| `false` |  |
| `automaticPalette` |在编译图像时,自动确定使用的减少色调.16位色调设备的图像将被限制在256种颜色.|`true`或`false`| 对于 16 位颜色设备为 `true` |  |
| `packingFormat` |将图像编码到 PRG 的格式| `default`、`png`、`jpg`、`yuv` | `default` | 除 `default` 之外的选项仅在某些设备上可用。请参阅 [位图打包格式](#bitmap-packing-formats) |
| `scaleX` | 图像在 X 方向应如何缩放 | 像素尺寸或百分比 | 设置了 `scaleY` 时默认使用 `scaleY` 的值，否则默认为图像宽度的 100% | 请参阅 `scaleRelativeTo` |
| `scaleY` | 图像在 Y 方向应如何缩放 | 像素尺寸或百分比 | 设置了 `scaleX` 时默认使用 `scaleX` 的值，否则默认为图像高度的 100% | 请参阅 `scaleRelativeTo` |
| `scaleRelativeTo` | 缩放因子的基准 | `screen` 或 `image` | `screen` | 设置相对缩放的基准。设为 `screen` 时，图像会在编译时根据目标产品重新缩放 |
| `personality` | 元素使用的 personality 类 | personality 类 | 无 | 请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

`<palette>` 定义支持以下属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `disableTransparency` | 编译器是否允许图像中的透明像素 | `true` 或 `false` | `false` |  |

### 位图打包格式

*自 API 级别 4.0.0*

图像可能增大可执行文件的体积，导致用户安装或更新应用时等待更久。可以使用以下位图打包格式，减少资源对可执行文件大小的影响。

每种格式都有其优点和缺点:

| 格式 | 优点 | 缺点 | 使用场景 |
| --- | --- | --- | --- |
| `default` | 适用于所有产品，加载最快，支持 Alpha 通道 | 不压缩 | API 级别 4.0.0 之前的设备；低细节图像的运行时开销可能很小 |
| `png` | 无损压缩并支持 Alpha 通道 | 加载最慢；频繁从图形库卸载和重新加载时可能增加运行时开销 | 不带或带 Alpha 通道的非照片图像 |
| `jpg` | 压缩率高，加载快 | 有损格式，不支持 Alpha 通道 | 不带 Alpha 通道的照片图像 |
| `yuv` | 压缩率较高，支持 Alpha 通道，加载快 | 有损格式 | 带 Alpha 通道的照片图像 |

## 字体

资源编译器可以读取 `TXT` 或 `PNG` 格式的字体。可以使用 [BMFont](http://www.angelcode.com/products/bmfont/) 将多种格式的字体转换为兼容格式。导出前，请确保 BMFont 的 *Font Settings* 指定了 Unicode 字符集。下图展示了推荐的导出选项：

图 1：BMFont 导出选项

![BMFont 导出选项](/connect-iq/resources/programmers-guide/bmfont_options.png)

可以使用 [Dc.setColor()](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) 设置字体颜色。位图字体可能占用大量运行时内存，因此字体转换器默认使用非抗锯齿的 1 位字体来节省内存。如果设备有足够的运行时内存，可以通过 `antialias` 选项启用抗锯齿。

```xml
<!-- Domo arigato mister font -->
<font id="font_id" filename="roboto.fnt" antialias="true" />
```

如果创建大字体，有时只需要包含特定字符，例如表盘上的数字。可以使用 `filter` 属性指定要包含的字符：

```xml
<!-- Only include digits from this large font -->
<font id="font_id" filename="big_font.fnt" filter="0123456789:"/>
```

`font` 元素支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `id` | 字符串 | 是 | 无 |字体的唯一标识符|
| `filename` | 字符串 | 是 | 无 |BMFont 生成的 `.fnt` 文件|
| `filter` | 字符串 | 否 | 无 |指定要从字体中包含的字符|
| `antialias` | 布尔值 | 否 | `false` |指定字体是否应导入抗锯齿信息|
| `scope` | 字符串 | 否 | `foreground` | 请参阅 [资源作用域](#resource-scopes) |
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

## 菜单

菜单是 Connect IQ 产品中常见的 UI 元素。菜单资源允许在资源定义中声明菜单。

### 标准菜单

菜单使用带有以下属性的 `<menu2>` 元素定义：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `id` | 字符串 | 是 | 无 |菜单的唯一标识符|
| `title` | 字符串 | 否 | 无 | 字符串、字符串资源标识符或可绘制资源标识符 |
| `icon` | 可绘制对象引用 | 否 | 无 |用于 Instinct 2 子屏幕图标。|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

`<menu2>` 元素可以包含 `<menu-item>`、`<toggle-menu-item>` 或 `<icon-menu-item>` 元素。

#### 标准菜单项

标准菜单项包含在 `<menu-item>` 元素中，支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `id` | 字符串 | 是 | 无 |菜单项的唯一标识符|
| `label` | 字符串 | 是 | 无 |菜单项的字符串标题|
| `subLabel` | 字符串 | 否 | 无 |菜单项的字符串副标题|
| `icon` | 可绘制对象引用 | 否 | 无 |在 Instinct 2 子屏幕中显示的可绘制图标|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

#### 切换菜单项

切换菜单项包含在 `<toggle-menu-item>` 元素中。除[标准菜单项](#standard-menu-items)中的属性外，还支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `disabledSubLabel` | 字符串 | 否 | 无 |切换项禁用时显示的副标签|
| `checked` | 布尔值 | 否 | `false` |启用切换时为 `true`，否则为 `false`|

#### 图标菜单项

图标菜单项由 `<icon-menu-item>` 元素定义，`icon` 属性指定要在菜单项中显示的图标。

### 复选框菜单

复选框菜单使用 `<checkbox-menu>` 元素定义，并支持与[标准菜单](#standard-menus)相同的属性。复选框菜单可以包含多个 `<checkbox-menu-item>` 元素。

#### 复选框菜单项

复选框菜单项使用 `<checkbox-menu-item>` 元素定义。除[标准菜单项](#standard-menu-items)中的属性外，还支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `checked` | 布尔值 | 否 | `false` |启用复选框时为 `true`，否则为 `false`|

### 操作菜单

Action menu 是与页面相关的上下文菜单，使用 `<action-menu>` 元素定义，并支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `id` | 字符串 | 是 | 无 |菜单的唯一标识符|
| `theme` |[`WatchUi.ACTION_MENU_THEME_DARK`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module)或[`WatchUi.ACTION_MENU_THEME_LIGHT`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module)| 否 | [`WatchUi.ACTION_MENU_THEME_DARK`](/connect-iq/api-docs/Toybox/WatchUi/#ActionMenuTheme-module) |用于设置动作菜单的显示主题（深色或浅色）。并非所有产品都支持设置此选项。|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

#### 操作菜单项

Action menu 项包含在 `<action-menu-item>` 元素中，支持以下属性：

| 属性 | 类型 | 必需 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| `id` | 字符串 | 是 | 无 |菜单项的唯一标识符|
| `label` | 字符串 | 是 | 无 |菜单项的字符串标题|
| `personality` | 个性类 | 否 | 无 | 元素的 personality 类。更多信息请参阅 [Monkey Style](/connect-iq/core-topics/monkey-style/#monkey-style) |

## 动画

*自 API 级别 3.1.0*

Connect IQ SDK 随附的 Monkey Motion 工具可用于为兼容的 Connect IQ 产品生成动画资源。

Monkey Motion 工具支持导入 [`YUV`](https://github.com/cota/streamit-2.1.1/blob/master/apps/library_only/mpeg2/c/doc/mpeg2enc.doc) 和 `GIF` 文件格式。由于 `YUV` 是接近原始数据的真实色彩格式，建议在向 Monkey Motion 编码工具输入高质量动画时使用它。如有需要，可以使用 [FFmpeg](https://ffmpeg.org/) 转换视频格式。例如，创意团队提供其他格式的视频时，可以先将其转换为 `YUV`：

```
> ffmpeg -i input.mp4 -vf format=yuv420p output.y4m
```

此外，由于 `YUV` 格式不支持透明度（不同于 `GIF` 文件格式），Monkey Motion 工具接受额外的 `YUV` 文件作为输入。该视频文件应表示原始透明动画的 alpha 通道掩码。同样，FFmpeg 是创建此类视频的便捷工具。`alphaextract` 选项可用于接收带 alpha 通道的输入流，并返回只包含 alpha 分量灰度值的视频：

```
> ffmpeg -i input.gif -vf alphaextract,format=yuv420p output.y4m
```

![](/connect-iq/resources/programmers-guide/app_settings_editor.png)

出于与位图相同的原因，动画也必须针对每台设备进行转换。为了方便将动画导入 Connect IQ 应用，Monkey Motion 工具可以批量将视频转换为所选设备的二进制编码。

### 在 Monkey C 项目中包含动画资源

要将动画资源加入 Monkey C 项目，请定义动画资源。可以手动定义，也可以使用 Monkey Motion 工具完成。下表列出了 `<animation>` 资源的所有有效属性：

| 属性 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `id` | 用于在 Rez 模块中引用动画的句柄 | 以字母开头的任意值 | 不适用 | 必需 |
| `filename` | Monkey Motion 清单文件的相对路径 | 有效且可解析的 Monkey Motion 清单文件路径 | 不适用 | 必需 |
| `personality` | 元素使用的 personality 类 | 已定义的 personality 类 | 不适用 | 可选 |

动画 XML 资源示例：

```xml
<resources xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="http://developer.garmin.com/downloads/connect-iq/resources.xsd">
    <animation id="swirl" filename="swirl.mmm" />
</resources>
```

要在代码中加载此动画资源，请创建一个 [WatchUi.AnimationLayer](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/)，然后将其添加到 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)：

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

更多信息请参阅 [Monkey Motion 参考](/connect-iq/reference-guides/monkey-motion-reference/#monkey-motion)、[API 文档](/connect-iq/api-docs/Toybox/WatchUi/AnimationResource/)、[AnimationLayer 文档](/connect-iq/api-docs/Toybox/WatchUi/AnimationLayer/) 以及 `AnimationWatchFace` 示例中的动画。

## JSON 数据

JSON 数据资源可以在应用中存储相对大量的数据，而不必始终将其保留在内存中。它适合存储运行时需要查询但不会修改的信息表。

这些资源通过资源文件中的 `jsonData` 标签声明，由资源编译器读取，并在运行时按需加载。`jsonData` 标签支持以下属性：

| 属性 | 定义 | 有效值 |
| --- | --- | --- |
| `id` | JSON 资源的标识符 | 以字母开头的任意字符串 |
| `filename` | 包含 JSON 数据的文件名 | 有效且可解析的数据文件路径 |

JSON 数据资源可以直接作为 `jsonData` 的值提供，也可以通过 `filename` 属性引用独立文件，具体取决于哪种方式更便于管理数据。使用独立文件时，文件只能包含 JSON 数据。下面是几个示例：

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

可以使用 [Application.loadResource()](/connect-iq/api-docs/Toybox/Application/#loadResource-instance_function)，通过 `jsonData` ID 加载 JSON 数据。例如，要加载上例中的 `jsonArray`：

```typescript
var array = Application.loadResource(Rez.JsonData.jsonArray);
```

更多信息请参阅 SDK 随附的 `JsonDataResources` 示例应用。
