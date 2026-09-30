---
title: "How do I optimize bitmaps in my app?"
---
# 如何在应用中优化位图？

![](/connect-iq/resources/faq/cake_undithered.jpg)
![](/connect-iq/resources/faq/cake_dithered.png)

在我们的HTML,megapixel和gigabyte的世界里,很容易忘记位图图像的资源使用.Connect IQ的局限嵌入式环境要求开发人员在制作页面时考虑位图的成本.幸运的是,Connect IQ SDK提供了许多工具来控制您的图像成本,同时制作出一款看起来很棒的应用程序.

## Bit Depth

图像的比特深度是指用来表示每个像素的比特数量.每一个比特的每一个比特,你可以增加两倍的颜色数量,以及对整个图像的使用数量.这会影响图像中可以表示多少颜色,以及图像将使用的存储量.在本表中,我们显示了颜色数量和100 x100图像的存储量.比特深度越高,你可以使用更多颜色以牺牲更多的存储量.

| **Bit Depth** | **Colors** | **Image Size (KB)** |
| --- | --- | --- |
| 1 | 2 | 1.22 |
| 2 | 4 | 2.44 |
| 4 | 16 | 4.88 |
| 8 | 256 | 9.77 |
| 16 | 65536 | 19.53 |

连接 IQ支持1 BPP,2 BPP,4 BPP,8 BPP和16 BPP的位深度图像.

## Palettes

不同的Connect IQ设备具有不同的显示位深度.有些产品能够显示数千种颜色,而其他产品仅限于16种颜色.

- 16色调:产品只能显示16种颜色

- RGB222:该产品可显示64种颜色.在这种情况下,可为红色,绿色和蓝色提供2位.

- RGB565:该产品可显示65535种颜色. 在这种情况下,红色和蓝色可用5位,绿色可用6位.


[\`Dc.setColor API\`](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function)将RGB888颜色作为输入. 它将始终将输入颜色映射到设备上最接近可用的颜色.

| **Product** | **Colors** | **Bit Depth** |
| --- | --- | --- |
| Fenix 3 | 16 (Palette) | 4 |
| Fenix 3 HR | 16 (Palette) | 4 |
| Quatix 3 | 16 (Palette) | 4 |
| D2 Bravo | 16 (Palette) | 4 |
| D2 Bravo Titanium | 16 (Palette) | 4 |
| Forerunner 230 | 16 (Palette) | 4 |
| Forerunner 235 | 16 (Palette) | 4 |
| Forerunner 630 | 16 (Palette) | 4 |
| Forerunner 735xt | 16 (Palette) | 4 |
| Forerunner 920xt | 16 (Palette) | 4 |
| EPIX | 64 (RGB222) | 8 |
| Fenix 5 | 64 (RGB222) | 8 |
| Fenix 5 Plus | 64 (RGB222) | 8 |
| Fenix 6 Series | 64 (RGB222) | 8 |
| Forerunner 245 | 64 (RGB222) | 8 |
| Forerunner 645 | 64 (RGB222) | 8 |
| Forerunner 945 | 64 (RGB222) | 8 |
| Vivoactive | 64 (RGB222) | 8 |
| Vivoactive HR | 64 (RGB222) | 8 |
| Vivoactive 3 | 64 (RGB222) | 8 |
| Vivoactive 3 Music | 64 (RGB222) | 8 |
| Venu | 65535 (RGB565) | 16 |
| EDGE 520 | 65535 (RGB565) | 16 |
| EDGE 820 | 65535 (RGB565) | 16 |
| EDGE 820 Explore | 65535 (RGB565) | 16 |
| EDGE 1000 | 65535 (RGB565) | 16 |
| EDGE 1000 Explore | 65535 (RGB565) | 16 |
| Oregon 7 Series | 65535 (RGB565) | 16 |
| Rino 7 Series | 65535 (RGB565) | 16 |

## 16 Color Palette

虽然目标是始终提供最佳显示屏,但有时设备被使用的显示技术或底层屏幕缓冲器所使用的内存量限制.只支持16色调的选择通常是为了牺牲颜色深度而牺牲其他产品功能.

对于使用16种颜色调色的设备,颜色被编程到设备中.[Graphics color constants](/connect-iq/api-docs/Toybox/Graphics/)地图直接向16种可用的颜色

![](/connect-iq/resources/faq/16_color_palette.png)

## RGB222

一些设备有64种可用的颜色.这些颜色是使用红色的2位,绿色的2位,蓝色的2位来选择的.图形系统将内部表示每像素的8位.

## RGB565

一些设备有65535种可用的颜色.这些颜色是使用红色的5位,绿色的6位和蓝色的5位来选择的.图形系统将内部表示每像素的16位.

## Resources

连接智能有多种选项来帮助开发人员确定他们想要如何进口图像.

```xml
<!-- Use the dithering option to enable or disable auto dithering of the image -->
    <bitmap id="Logo" x="center" y="12" filename="Logo.png" dithering="none">
        <!-- The palette option allows you to reduce the bit depth of an image. Connect IQ will pick a bit depth
               based on the number of colors specified in the palette. If your image does not have transparency,
               use the disableTransparency option to remove the extra color used to represent transparent -->
        <palette disableTransparency="true">
            <!-- Logo is black on white text, so using four colors to get shading while reducing the color depth to 2 bpp -->
            <color>FFFFFF</color>
            <color>AAAAAA</color>
            <color>555555</color>
            <color>000000</color>
        <palette>
    </bitmap>
```

这块区有很多选择,所以让我们一个接一个来看看.

## Dithering

默认连接IQ在输入图像时使用[Floyd-Steinberg dithering](https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering). 旋算法在将高颜色图像映射到低颜色空间表示时有助于纠正错误. 在输入照片时最好,但在输入图形时可以引入不需要的随机像素.

```xml
<bitmap id="Logo" x="center" y="12" filename="Logo.png" dithering="none">
```

## Palette

在进口图像时,Connect IQ将始终默认调整为设备的最佳可用位深度.这意味着在16种颜色设备上,图像将被导入为4位的图像,而在RGB222设备上,图像将被导入为8位64色图像.我们希望确保Doge尽可能可识别.

![](/connect-iq/resources/faq/doge.png)

这也意味着,默认情况下, Vivoactive 的图像将占Fenix 3 的图像的存储量两倍.如果您有一个图像表面,那就很好,但在数据场的紧密限制下,

如果您的图像颜色较低,减少位深度可以节省宝贵的运行时间内存.

```xml
        <palette disableTransparency="true">
            <!-- Logo is black on white text, so using four colors to get shading while reducing the color depth to 2 bpp -->
            <color>FFFFFF</color>
            <color>AAAAAA</color>
            <color>555555</color>
            <color>000000</color>
        <palette>
```

这块说明图片只应该使用四种颜色 - 白色,浅灰色,深灰色和黑色. 色板与设备上可用的颜色相结合.如果你指定设备上不可用的颜色,它们将被映射到可用的最接近的颜色.

在16色和RGB222设备上,资源编译器自动使用额外的颜色 - 透明色 - 来表示透明区域.禁用透明度告诉资源编译器图像没有透明区域,节省转换图像中的一个颜色,并可能减少位深度.使用四种颜色和透明度编译器创建了4位图像;没有透明度,它将创建一个2位图像,节省50%的内存.

总体来说,使用低位深度图像以保存内存,尽可能.如果您有一个可以用少量颜色表示的标志,请使用调色板并禁用色,以更低位深度的图像做出更敏的图像.请记住:看起来很棒的16色图像将在所有可穿戴设备上工作.64色图像增加了一些阴影选项,但您需要权衡图像质量和存储内存的平衡.边缘自行车电脑具有更好的颜色表示,但使用高位深度图像可以快速消耗您的运行时间内存.
