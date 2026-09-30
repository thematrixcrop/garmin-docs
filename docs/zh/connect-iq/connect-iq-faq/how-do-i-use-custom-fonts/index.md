---
title: "How do I use custom fonts?"
---
# 如何使用自定义字体？

*这个客人帖子是由*[*Hermo Terblanche*](https://www.instagram.com/hermoterblanche/)*在南非的Connect IQ开发者撰写的.*

Have you ever seen an app in the Connect IQ app store that made you wonder, "That is so cool! How did the developer do that?" In order to draw attention to your app 您需要 stand out from the rest, by for example applying some really cool font tricks. I am going to let you in on some of my secrets from [my own Connect IQ creations](https://apps.garmin.com/en-US/developer/400ba0d2-9316-44ca-8c14-60b68ddda4a5/apps). Hopefully this will inspire you to create your very own jaw-dropping apps for Garmin Connect IQ devices.

让我们直接进入魔术吧!

-[**BMFont**](http://www.angelcode.com/products/bmfont/)- 为了将字体导出到Connect IQ所需的格式.您可以阅读更多关于[in the Programmer's Guide](/connect-iq/core-topics/resources/#fonts)和[UX Guide](/connect-iq/user-experience-guidelines/)

- **图形编辑器 / 工具** - - 为编辑字体png文件.我更喜欢使用[Photoshop](https://www.adobe.com/products/photoshop.html)来实现所需的效果,但也可以使用[GIMP](https://www.gimp.org/)


## 字体反射

这种技术非常简单,可以通过两种方式实现:

### 接近A

我使用了[free font called Sunset](https://www.dafont.com/sunset.font)下载并将其出口到 PNG 时刻使用BMFont.

![](/connect-iq/resources/faq/summer_sunet_1.png)

这种字体将每个数字及其相应的反射结合成一个字体.这意味着当你绘制一个数字时,它将数字和反射都绘制成一个字符.

![](/connect-iq/resources/faq/reflecto_font.jpg)

这种方法的好处是效率:你只需要单个字体,它需要更少的资源,并导致一个较小的编译PRG文件. 此外,你的代码也更便宜,因为你只需要单个语句来绘制更适合电池的数字.最后,你不需要单独管理绘制数字的反射的定位,这使得这是最简单的方法.缺点是,你不能为数字和反射有单独的颜色,因为字体被视为一个原子字符,并且只能将一个颜色应用于整个字体.

为了看到时间背后的地平线,你首先绘制地平线,然后指定字体的透明背景颜色,

```
//在这里绘制天际线
..
//加载自定义字体
var font = Ui.loadResource( Rez.Fonts.Sunset );

//设置时间颜色并绘制时间
dc.setColor(Gfx.COLOR_DK_GREEN, Gfx.COLOR_TRANSPARENT);
dc.drawText(timeX,timeY, font, timeStr, Gfx.TEXT_JUSTIFY_CENTER);
```

这种方法是最简单的,在使用BMFont工具出口后,不需要进一步处理字体的图像.

### 方法 B

**反射**表面稍微先进,涉及一些图像处理,但它提供了指定时间和反射的不同颜色的好处.

![](/connect-iq/resources/faq/reflections.png)

这种方法使用两个独立的字体.我还下载了一个免费的字体,并使用BMFont将其导出到PNG.然后我复制了`*.PNG`和`*.FNT`文件,并将它们改名为有意义的东西,以便我可以轻松区分两种不同的字体的文件.使用一些Photoshop技巧,我将复制的PNG文件中的每一个字体转换为反射字体.重要的是要记住这一方法是,它最适合单空间字体;在两种字体中具有恒定的字体大小,使得平衡正常和反射时间变得更容易.没有过于深入图像处理细节,以下是确切的步骤:

- 每个字体 (一次一次):

- 使用选择工具来选择一个字体

- 使用转换菜单并垂直翻选

- 使用转换菜单,要么曲解或扭曲选择,以获得角色所需的角度.请记住,因为您希望时间的反射仍然适合屏幕.在上面的截图中,您将注意到反射的"1"的底部触及屏幕边界.更曲解的效果会导致反射的"1"被剪切.您必须尝试几次才能得到正确的.这步骤是最具挑战性的,但也是最有价值的!

- 你必须移动转换的选择,以将其与其他转换的字体相结合. 这使得更容易指定FNT文件中的字符坐标.*.

- 一旦所有字体被转换后,保存png为反射字体.

- 在Photoshop中,使用选择工具找到每个转换的字体的新x,y坐标,并在重复的FNT文件中更改相应的值.

- 确保重复 \*.FNT文件中的文件属性被重复 \*.PNG (反射字体) 指向.

-   In code load your two fonts, and after you've drawn the normal time, you draw the same time using the reflection font. For the reflected time, 您需要 align the characters with the bottom of the normal time's characters.


下面是从正常字体中的一些字体和它们相应的反射字体中的反射字体的插图.

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

连接IQ支持自定义字体中只有一种颜色.这是因为字体的PNG是灰色尺度图像,因此只有一个频道.您不能创建一个字体显示多种颜色.下面是一个概念的插图,在单个字体内不可能:

![](/connect-iq/resources/faq/wouldnt_this_be_nice.jpg)

但是不要害怕!用一些聪明的技巧,你可以创建一个显示多种颜色的字体效果. 腕表面**Watch Me**使用两个颜色显示时间:白色边框和蓝色填充.

![](/connect-iq/resources/faq/two_color_face.png)

这种技巧背后的魔力包括两种不同面具的字体组合.下面是两种不同字体面具的一些字体插图.上面的图像是边界的字体,而下面的字体是内部的填写.记住哪个字体,简单的方法是记住白色是你或用户选择的颜色将在屏幕上绘制的区域.

![](/connect-iq/resources/faq/mask_glyphs.jpg)

顶面膜是原始的字体,是通过BMFont工具出口的.对于下面面膜,我创建了顶面膜的复制品,然后基本上翻了颜色,以确保它只会用特定颜色绘制内部区域.

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

## 字体具有斜面方向

写文本的想法不是我创新的东西;我第一次在商店里看到它.作为一个好奇的开发者,我不得不自己尝试它.这项实验的结果可以在我的手表面**南非**上看到.时间显示在一个上升或下降的方向上,根据用户的偏好.每个方向都是用自己的独立字体创建的.

![](/connect-iq/resources/faq/south_africa_1.png)
![](/connect-iq/resources/faq/south_africa_2.jpg)

![](/connect-iq/resources/faq/rotated_glyphs.jpg)

When drawing text diagonally, you can no longer draw the string as a single entity; otherwise you'll just end up with a horizontal line of text with tilted characters, similar to what you now see in the above illustration. The real trick is to draw each character individually, but for each character adjust the y and x coordinates appropriately. For descending orientation, 您需要 increase the y coordinates, and for ascending 您需要 decrease it. The x coordinate will always increase in both scenarios. The glyphs have to overlap each other in order to create the diagonal effect. This is where a transparent background color does the trick!

![](/connect-iq/resources/faq/overlapping_rotated_glyphs.jpg)

您想要为您的字体的旋转角度取决于您,您可以在您的图形编辑器中实验不同的旋转度.为了知道下一个字符的绘制地点,您可以保持一个坐标阵列.使用单空间字体更容易管理和绘制横向文本,因为任何字符都可以在同一坐标上绘制,而不会造成相邻字符之间的差距.

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

在我的标志性腕表面孔[*NoFrills*](https://apps.garmin.com/en-US/apps/03030574-3c6e-484a-9bd8-ce2ca0249651)中,我使用一个简单的技巧来创建一个特殊效应,使时间充满水.它有效地作为活动跟踪的进展指标,同时节省屏幕上的房地产.谈论双重用途的钟!

![](/connect-iq/resources/faq/no_frills.jpg)

你只需要一个字体来完成这个技巧,最好的是:没有图像处理.只需要Connect IQ的功率才能实现这一点!再次,一个单空间字体提供了最好的结果,并且更简单地使用.

1. 确定你想要绘制的文本将在屏幕上占据的区域 (矩形) 的尺寸和坐标.

2. 在预定坐标上绘制一幅满面的矩形.该矩形的颜色应该是你通常使用的颜色.

3. 在填充矩形上绘制任何特殊效果,但在绘制文本之前.在NoFrills的情况下,我绘制了填充矩形,代表水平面.

4. 设置您的文本前景颜色为透明,背景颜色为其他东西,比如屏幕的背景颜色. 这有效地创造了一个面具,切断了您在前几步中绘制的一切.

5. 现在把你的文字绘制在上面,编译并运行它,最后着惊叹地看着你的惊人的制作!


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

您可以在*[Twitter](https://twitter.com/hermoter)*,*[Facebook](https://www.facebook.com/connectiqsa/)*,*[Instagram](https://www.instagram.com/hermoterblanche/)*和*[Connect IQ Developer Forum](https://forums.garmin.com/members/hermot)*上找到Hermo.
