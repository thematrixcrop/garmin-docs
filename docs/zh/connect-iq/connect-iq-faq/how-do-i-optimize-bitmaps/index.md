---
title: "如何优化应用中的位图？"
---
<a id="how-do-i-optimize-bitmaps-in-my-app"></a>
# 如何优化应用中的位图？

![](/connect-iq/resources/faq/cake_undithered.jpg)
![](/connect-iq/resources/faq/cake_dithered.png)

在 HTML、百万像素和 GB 已成为日常概念的今天，很容易忘记位图图像也会占用资源。Connect IQ 的嵌入式环境资源有限，开发者在制作页面时必须考虑位图的成本。Connect IQ SDK 提供了多种工具，帮助您控制图像的资源消耗，同时制作出外观出色的应用。

## 位深度

图像的位深度是指用于表示每个像素的位数。每增加 1 位，每个像素可表示的颜色数量会翻倍，整张图像占用的内存也会翻倍。位深度会影响图像能够表示的颜色数量，以及从资源加载图像时所占用的内存。下表展示了 100 x 100 图像的颜色数量和内存大小。位深度越高，可使用的颜色越多，但占用的内存也越多。

| **位深度** | **颜色数** | **图像大小（KB）** |
| --- | --- | --- |
| 1 | 2 | 1.22 |
| 2 | 4 | 2.44 |
| 4 | 16 | 4.88 |
| 8 | 256 | 9.77 |
| 16 | 65536 | 19.53 |

Connect IQ 支持 1 BPP、2 BPP、4 BPP、8 BPP 和 16 BPP 的图像。

## 调色板

不同 Connect IQ 设备的显示位深度不同。有些产品能够显示数千种颜色，有些产品则只能显示 16 种颜色。通常可以分为以下三类：

-   **16 色调色板**：产品只能显示 16 种颜色。

-   **RGB222**：产品可以显示 64 种颜色。此时红、绿、蓝三个通道各使用 2 位。

-   **RGB565**：产品可以显示 65535 种颜色。此时红色和蓝色各使用 5 位，绿色使用 6 位。


[`Dc.setColor API`](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) 接受 RGB888 颜色作为输入，并始终将输入颜色映射到设备上最接近的可用颜色。

| **产品** | **颜色数** | **位深度** |
| --- | --- | --- |
| Fenix 3 | 16（调色板） | 4 |
| Fenix 3 HR | 16（调色板） | 4 |
| Quatix 3 | 16（调色板） | 4 |
| D2 Bravo | 16（调色板） | 4 |
| D2 Bravo Titanium | 16（调色板） | 4 |
| Forerunner 230 | 16（调色板） | 4 |
| Forerunner 235 | 16（调色板） | 4 |
| Forerunner 630 | 16（调色板） | 4 |
| Forerunner 735xt | 16（调色板） | 4 |
| Forerunner 920xt | 16（调色板） | 4 |
| EPIX | 64（RGB222） | 8 |
| Fenix 5 | 64（RGB222） | 8 |
| Fenix 5 Plus | 64（RGB222） | 8 |
| Fenix 6 Series | 64（RGB222） | 8 |
| Forerunner 245 | 64（RGB222） | 8 |
| Forerunner 645 | 64（RGB222） | 8 |
| Forerunner 945 | 64（RGB222） | 8 |
| Vivoactive | 64（RGB222） | 8 |
| Vivoactive HR | 64（RGB222） | 8 |
| Vivoactive 3 | 64（RGB222） | 8 |
| Vivoactive 3 Music | 64（RGB222） | 8 |
| Venu | 65535（RGB565） | 16 |
| EDGE 520 | 65535（RGB565） | 16 |
| EDGE 820 | 65535（RGB565） | 16 |
| EDGE 820 Explore | 65535（RGB565） | 16 |
| EDGE 1000 | 65535（RGB565） | 16 |
| EDGE 1000 Explore | 65535（RGB565） | 16 |
| Oregon 7 Series | 65535（RGB565） | 16 |
| Rino 7 Series | 65535（RGB565） | 16 |

## 16 色调色板

虽然目标始终是提供最佳显示效果，但设备有时会受到显示技术或底层屏幕缓冲区内存大小的限制。选择只支持 16 色调色板，通常是为了牺牲颜色深度，以换取其他产品功能。

对于使用 16 色调色板的设备，颜色已预先编程到设备中。[Graphics 颜色常量](/connect-iq/api-docs/Toybox/Graphics/) 会直接映射到这 16 种可用颜色。

![](/connect-iq/resources/faq/16_color_palette.png)

## RGB222

有些设备提供 64 种可用颜色。这些颜色分别使用红、绿、蓝三个通道的 2 位进行选择。图形系统会在内部将位图表示为每像素 8 位。

## RGB565

有些设备提供 65535 种可用颜色。这些颜色分别使用红色 5 位、绿色 6 位和蓝色 5 位进行选择。图形系统会在内部将位图表示为每像素 16 位。

## 资源

Connect IQ 提供了多种选项，帮助开发者指定图像的导入方式。

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

上面的代码包含许多选项，下面逐一说明。

## 抖动

Connect IQ 导入图像时默认使用 [Floyd-Steinberg dithering](https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering)。将高颜色图像映射到低颜色空间时，抖动算法有助于校正误差。导入照片时，这种效果通常很理想；但导入图形时，可能会引入不需要的随机像素。要直接映射颜色，请将 `dithering` 属性设为 `"none"`。

```xml
<bitmap id="Logo" x="center" y="12" filename="Logo.png" dithering="none">
```

## 调色板

导入图像时，Connect IQ 默认会为设备选择最佳可用位深度。这意味着在 16 色设备上，图像会作为经过抖动处理的 4 位图像导入；在 RGB222 设备上，图像会作为经过抖动处理的 8 位、64 色图像导入。这样可以让图像尽可能清晰可辨。

![](/connect-iq/resources/faq/doge.png)

这也意味着，默认情况下，Vivoactive 上的图像占用的内存会是 Fenix 3 上图像的两倍。如果是只有一张图像的表盘（Watch Face），这通常没有问题；但对于资源非常受限的数据字段，这可能决定应用能否运行。

如果图像使用的颜色较少，降低位深度可以节省宝贵的运行时内存。通过设置导入调色板，可以指定图像应使用的颜色总数。

```xml
        <palette disableTransparency="true">
            <!-- Logo is black on white text, so using four colors to get shading while reducing the color depth to 2 bpp -->
            <color>FFFFFF</color>
            <color>AAAAAA</color>
            <color>555555</color>
            <color>000000</color>
        <palette>
```

这段配置表示图像只能使用四种颜色：白色、浅灰色、深灰色和黑色。调色板会受设备可用颜色的限制。如果指定了设备不支持的颜色，系统会将其映射到最接近的可用颜色。

在 16 色和 RGB222 设备上，资源编译器会自动增加一种颜色，即透明色，用于表示透明区域。禁用透明度会告诉资源编译器图像不包含透明区域，从而在转换后的图像中省出一种颜色，并可能降低位深度。设置四种颜色并启用透明度时，资源编译器会创建 4 位图像；禁用透明度时，会创建 2 位图像，节省 50% 的内存。

一般来说，应尽可能使用低位深度图像来节省内存。如果 Logo 可以用少量颜色表示，请使用调色板并禁用抖动，以较低位深度生成更清晰的图像。请记住，外观出色的 16 色图像可以在所有可穿戴设备上运行。64 色图像提供了更多阴影选择，但需要在图像质量和内存节省之间权衡。Edge 自行车电脑的颜色表现更好，但高位深度图像同样会很快耗尽运行时内存。
