---
title: "如何使用自定义字体？"
---
<a id="how-do-i-use-custom-fonts"></a>
# 如何使用自定义字体？

*本文由南非 Connect IQ 开发者* [*Hermo Terblanche*](https://www.instagram.com/hermoterblanche/)*撰写。*

您是否在 Connect IQ 商店见过让您不禁感叹“太酷了，开发者是怎么做到的？”的应用？如果想让应用脱颖而出，可以尝试一些有趣的字体技巧。下面分享一些我在[自己创作的 Connect IQ 应用](https://apps.garmin.com/en-US/developer/400ba0d2-9316-44ca-8c14-60b68ddda4a5/apps)中积累的经验，希望能启发您为 Garmin Connect IQ 设备制作令人印象深刻的应用。

先介绍需要用到的工具：

-   [**BMFont**](http://www.angelcode.com/products/bmfont/)：将字体导出为 Connect IQ 所需的格式。更多信息请参阅[程序员指南](/connect-iq/core-topics/resources/#fonts)和[UX 指南](/connect-iq/user-experience-guidelines/)。

-   **图形编辑器或工具**：用于编辑字体 PNG 文件。我更喜欢使用 [Photoshop](https://www.adobe.com/products/photoshop.html) 实现所需效果，也可以使用 [GIMP](https://www.gimp.org/)。

## 字体反射

这种技巧非常简单，可以通过两种方式实现：

### 方法 A

在 **Summer Sunset** 表盘中，我下载了[免费字体 Sunset](https://www.dafont.com/sunset.font)，并使用 BMFont 将其导出为 PNG。

![](/connect-iq/resources/faq/summer_sunet_1.png)

该字体将每个数字及其对应的倒影合并为一个字形。因此，绘制数字时会同时绘制数字和倒影。

![](/connect-iq/resources/faq/reflecto_font.jpg)

这种方法的优点是效率高：只需使用一个字体，资源占用更少，编译后的 PRG 文件也更小。代码只需一条语句即可绘制数字，运行时开销更低，也不必单独管理倒影的位置，因此是最简单的实现方式。缺点是数字和倒影无法使用不同颜色，因为整个字形会被视为一个不可分割的字符，只能为整个字形应用一种颜色。

要在时间背后显示天际线，请先绘制天际线，再将字体背景色设为透明，最后在天际线上绘制时间：

```
//在这里绘制天际线
..
//加载自定义字体
var font = Ui.loadResource( Rez.Fonts.Sunset );

//设置时间颜色并绘制时间
dc.setColor(Gfx.COLOR_DK_GREEN, Gfx.COLOR_TRANSPARENT);
dc.drawText(timeX,timeY, font, timeStr, Gfx.TEXT_JUSTIFY_CENTER);
```

这是最直接的方法：使用 BMFont 导出字体后，无需进一步处理字体图像。

### 方法 B

**Reflection** 表盘稍微复杂一些，需要进行图像处理，但可以为时间和倒影指定不同颜色。

![](/connect-iq/resources/faq/reflections.png)

这种方法使用两个独立字体。我同样下载了一个免费字体，并使用 BMFont 将其导出为 PNG，然后复制 `*.PNG` 和 `*.FNT` 文件并改成有意义的名称，以便区分两种字体。接着使用 Photoshop 将复制的 PNG 文件中的每个字形转换为倒影字形。最好使用等宽字体，因为两个字体中的字形大小固定，更容易在绘制时对齐普通时间和倒影时间。具体步骤如下：

-   逐个处理每个字形：

    -   使用选择工具选中一个字形。

    -   在变换菜单中垂直翻转选区。

    -   使用变换菜单倾斜或扭曲选区，使字形达到所需角度。请注意不要倾斜过度，否则时间倒影可能无法放入屏幕。例如，上图中倒影“1”的底部已经接触屏幕边界，进一步倾斜会导致它被裁剪。这个步骤最具挑战性，但也最有成就感。

    -   移动变换后的选区，使其与其他变换后的字形对齐。这样更容易在 `*.FNT` 文件中指定字符坐标。

-   所有字形转换完成后，保存倒影字体的 PNG。

-   在 Photoshop 中使用选择工具获取每个变换后字形的新 x、y 坐标，并修改复制的 `*.FNT` 文件中的对应值。

-   确保复制的 `*.FNT` 文件中的文件属性指向复制的 `*.PNG`（倒影字体）。

-   在代码中加载两个字体。绘制普通时间后，使用倒影字体绘制相同的时间；绘制倒影时间时，需要将字符底部与普通时间字符的底部对齐。

下面展示普通字体中的一些字形及其在倒影字体中的对应字形。

![](/connect-iq/resources/faq/normal_and_reflected.jpg)

```
//加载普通时间的自定义字体
var normalFont = Ui.loadResource( Rez.Fonts.Normal );
//加载反射时间的自定义字体
var reflectedFont = Ui.loadResource( Rez.Fonts.Reflected );

//设置普通时间的颜色并绘制
dc.setColor(Gfx.COLOR_DK_GREEN, Gfx.COLOR_TRANSPARENT);
dc.drawText(timeX,timeY, normalFont, timeStr, Gfx.TEXT_JUSTIFY_CENTER);

//设置反射时间的颜色并绘制
dc.setColor(Gfx.COLOR_ORANGE, Gfx.COLOR_TRANSPARENT);
dc.drawText(offsetX,offsetY, reflectedFont, timeStr, Gfx.TEXT_JUSTIFY_CENTER);
```

## 两色字体

Connect IQ 的自定义字体只能使用一种颜色。这是因为字体 PNG 是灰度图像，只有一个通道，因此无法直接创建显示多种颜色的单个字体。下面的图片展示了单个字体无法实现的效果：

![](/connect-iq/resources/faq/wouldnt_this_be_nice.jpg)

不过，通过一些巧妙的处理可以实现多色字体效果。**Watch Me** 表盘使用两种颜色显示时间：白色边框和蓝色填充。

![](/connect-iq/resources/faq/two_color_face.png)

实现这种效果需要组合使用两个具有不同蒙版的字体。上方字体用于边框，下方字体用于内部填充。可以这样记忆：白色区域表示最终会以您或用户选择的颜色绘制到屏幕上的部分。

![](/connect-iq/resources/faq/mask_glyphs.jpg)

上方蒙版是使用 BMFont 导出的原始字体。下方蒙版是上方蒙版的副本，我将颜色反转，使它只绘制指定颜色的内部区域。

```
//加载边框的自定义字体
var borderFont = Ui.loadResource( Rez.Fonts.Border );
//加载内部填充的自定义字体
var innerFillFont = Ui.loadResource( Rez.Fonts.InnerFill );

//设置时间边框颜色并绘制
dc.setColor(Gfx.COLOR_DK_GREEN, Gfx.COLOR_TRANSPARENT);
dc.drawText(timeX,timeY, borderFont, timeStr, Gfx.TEXT_JUSTIFY_CENTER);

//设置时间内部填充颜色并绘制
dc.setColor(Gfx.COLOR_ORANGE, Gfx.COLOR_TRANSPARENT);
dc.drawText(timeX,timeY, innerFillFont, timeStr, Gfx.TEXT_JUSTIFY_CENTER);
```

## 带对角方向的字体

以非水平方式显示文字并不是我首创的想法，我是在商店中的另一款表盘中首次看到的。出于好奇，我也进行了尝试，结果就是 **South Africa** 表盘。时间可以根据用户偏好沿上升或下降方向显示，每种方向使用独立字体。

![](/connect-iq/resources/faq/south_africa_1.png)
![](/connect-iq/resources/faq/south_africa_2.jpg)

![](/connect-iq/resources/faq/rotated_glyphs.jpg)

对角绘制文字时，不能再将字符串作为一个整体绘制，否则只会得到一行字符倾斜的水平文字。真正的技巧是逐个绘制字符，并为每个字符适当调整 y 和 x 坐标。沿下降方向绘制时需要增加 y 坐标，沿上升方向绘制时需要减小 y 坐标；两种情况下 x 坐标都会增加。字形必须彼此重叠才能产生对角效果，这时透明背景色可以避免字符被裁剪。

![](/connect-iq/resources/faq/overlapping_rotated_glyphs.jpg)

字体的旋转角度由您自行决定，可以在图形编辑器中尝试不同的角度。为了确定下一个字符的绘制位置，可以维护一个坐标数组。使用等宽字体更容易管理和绘制对角文字，因为所有字符都可以使用相同的坐标间距，不会在相邻字符之间产生大小不同的空隙。

```typescript
//基于对角线角度和方向预定义坐标
var ascCoords = [[21,143],[42,129],[62,119],[73,108],[93,95]];
var descCoords = [[21,34],[42,48],[62,58],[73,69],[93,82]];

//将背景色设为透明以防止字符被裁剪
dc.setColor(Gfx.COLOR_WHITE, Gfx.COLOR_TRANSPARENT);

//要绘制的字符串
var time = clock.hour.format("d") + ":" + clock.min.format("d");

var coords, font;

//根据方向确定要使用的字体和坐标
if(Orientation == "Descending"){
        coords = descCoords;
        font = Ui.loadResource(Rez.Fonts.fontDesc);
}
else{
        coords = ascCoords;
        font = Ui.loadResource(Rez.Fonts.fontAsc);
}

//逐个绘制字符
for( var i = 0; i < time.length(); i++ ) {
        var char = time.substring(i,i+1);
        dc.drawText(coords[0], coords[1], font, char, Gfx.TEXT_JUSTIFY_LEFT);
}
```

## 动态颜色填充

在我的标志性表盘 [*NoFrills*](https://apps.garmin.com/en-US/apps/03030574-3c6e-484a-9bd8-ce2ca0249651) 中，我使用一个简单技巧让时间看起来像被水逐渐填满。它既可以作为活动跟踪的进度指示器，又能节省屏幕空间。

![](/connect-iq/resources/faq/no_frills.jpg)

这个技巧只需要一个字体，而且无需图像处理，仅凭 Connect IQ 就足以实现效果。同样，等宽字体能提供最佳效果，也更易于使用。

1.  确定要绘制的文字将在屏幕上占据的区域（矩形）的大小和坐标。

2.  在预定坐标绘制相应大小的填充矩形，矩形颜色应当是原本用于文字的颜色。

3.  在填充矩形上绘制特殊效果，但要在绘制文字之前完成。例如，在 NoFrills 中，填充矩形表示水位。

4.  将文字前景色设为透明，将背景色设为其他颜色，例如屏幕背景色。这样会创建一个蒙版，裁剪前面步骤绘制的内容。

5.  在所有内容上方绘制文字，然后编译并运行程序查看效果。

```typescript
//加载自定义字体
var font = Ui.loadResource( Rez.Fonts.MyFont );

//绘制填充矩形来表示文本颜色
dc.setColor(Gfx.COLOR_WHITE, Gfx.COLOR_WHITE);
dc.fillRectangle(rectX, rectY, width, height);

//绘制填充矩形来表示水位
dc.setColor(Gfx.COLOR_BLUE, Gfx.COLOR_BLUE);
dc.fillRectangle(effectX, effectY, width, effectHeight);

//创建并绘制裁剪蒙版
dc.setColor(Gfx.COLOR_TRANSPARENT, Gfx.COLOR_BLACK);
dc.drawText(timeX, timeY, font, timeString, Gfx.TEXT_JUSTIFY_CENTER);
```

您可以在 [Twitter](https://twitter.com/hermoter)、[Facebook](https://www.facebook.com/connectiqsa/)、[Instagram](https://www.instagram.com/hermoterblanche/) 和 [Connect IQ Developer Forum](https://forums.garmin.com/members/hermot) 找到 Hermo，也可以在 [Connect IQ Store](https://apps.garmin.com/en-US/developer/400ba0d2-9316-44ca-8c14-60b68ddda4a5/apps) 查看他的 Connect IQ 应用。
