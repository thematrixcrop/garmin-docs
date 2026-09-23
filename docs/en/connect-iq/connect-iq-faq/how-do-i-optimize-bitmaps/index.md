---
title: "How do I optimize bitmaps in my app?"
---
# How do I optimize bitmaps in my app?

![](/connect-iq/resources/faq/cake_undithered.jpg)
![](/connect-iq/resources/faq/cake_dithered.png)

In our world of HTML, megapixels, and gigabytes it can be easy to forget the resource usage of bitmap images. Connect IQ's constrained embedded environment requires developers to consider the cost of bitmaps when making pages. Thankfully, the Connect IQ SDK provides a number of tools to control your image costs while make a great looking app.

## Bit Depth

The bit depth of the image refers to how many bits are being used to represent each pixel. For every bit you add per pixel, you double the number of colors you can represent as well as double the memory used for the entire image. This affects how many colors you can represent in the image, and the amount of memory the image will use when it is loaded from resources. In this table, we show the number of colors and the memory size of a 100 x 100 image. The higher the bit depth, the more colors you can use at the cost of more memory used.

| **Bit Depth** | **Colors** | **Image Size (KB)** |
| --- | --- | --- |
| 1 | 2 | 1.22 |
| 2 | 4 | 2.44 |
| 4 | 16 | 4.88 |
| 8 | 256 | 9.77 |
| 16 | 65536 | 19.53 |

Connect IQ supports images of bit depth of 1 BPP, 2 BPP, 4 BPP, 8 BPP, and 16 BPP.

## Palettes

Different Connect IQ devices have different display bit depths. Some products are able to display thousands of colors, while others are constrained to 16 colors. In general devices fall under three categories:

-   16 Color Palette: The product is only able to display 16 colors

-   RGB222: The product is able to display 64 colors. In this scenario, 2 bits are available for red, green, and blue.

-   RGB565: The product is able to display 65535 colors. In this scenario, 5 bits are available for red and blue, and 6 bits are available for green.


The [\`Dc.setColor API\`](/connect-iq/api-docs/Toybox/Graphics/Dc/#setColor-instance_function) takes an RGB888 color as an input. It will always map the input color to the closest color available on the device.

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

While the goal is to always provide the best display possible, sometimes a device are constrained by the display technology used or by the amount of memory used by the underlying screen buffer. The choice to only support a 16 color palette is often made to sacrifice color depth at the expense of other product features.

For devices that use a 16 color palette, the colors are programmed into the device. The [Graphics color constants](/connect-iq/api-docs/Toybox/Graphics/) map directly to the 16 available colors

![](/connect-iq/resources/faq/16_color_palette.png)

## RGB222

Some devices have 64 available colors. These colors are chosen using 2 bits for red, 2 bits for green, and 2 bits for blue. The graphics system will internally represent bitmaps as 8 bits per pixel.

## RGB565

Some devices have 65535 available colors. These colors are chosen using 5 bits for red, 6 bits for green, and 5 bits for blue. The graphics system will internally represent bitmaps as 16 bits per pixel.

## Resources

Connect IQ has a number of options to help developers specify how they want their images imported.

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

There's a lot of options in that block, so let's go through them one by one.

## Dithering

Connect IQ by default uses [Floyd-Steinberg dithering](https://en.wikipedia.org/wiki/Floyd%E2%80%93Steinberg_dithering) when importing images. The dithering algorithm helps correct for the error when mapping a high color image to a low color space representation. This is preferable when importing a photograph, but when importing a graphic it can introduce random pixels that are not wanted. To directly map colors, set the dithering attribute to "none".

```xml
<bitmap id="Logo" x="center" y="12" filename="Logo.png" dithering="none">
```

## Palette

When importing images, Connect IQ will always default to the best available bit depth for the device. This means on 16 color devices the images will be imported as dithered 4 bit images, while on RGB222 devices the images will import as dithered 8 bit 64 color images. We want to make sure the Doge looks as recognizable as possible.

![](/connect-iq/resources/faq/doge.png)

This also means that, by default, images for a Vivoactive will take twice as much memory as images for the Fenix 3. That's fine if you have a one image watch face, but in the tight constraints of a data field it could be the difference between working and running out of memory.

If you have a low color image, reducing the bit depth can save precious runtime memory. By setting the import palette, you can communicate the total number of colors the image should use.

```xml
        <palette disableTransparency="true">
            <!-- Logo is black on white text, so using four colors to get shading while reducing the color depth to 2 bpp -->
            <color>FFFFFF</color>
            <color>AAAAAA</color>
            <color>555555</color>
            <color>000000</color>
        <palette>
```

This block says the image should only use four colors - white, light gray, dark gray, and black. The palette is bound to the colors available on a device. If you specify colors not available on a device, they will be mapped to the closest available colors.

On 16 color and RGB222 devices the resource compiler automatically uses an extra color - the transparent color - to represent transparent areas. Disabling transparency tells the resource compiler that the image doesn't have any transparent areas, saving one color in the converted image and potentially reducing bit depth. With the four colors set and transparency resource compiler creates a 4 bit image; with no transparency it will create a 2 bit image for a 50% memory savings.

In general, use low bit depth images to save memory when possible. If you have a logo that can be represented with a small number of colors, use the palette and disable dithering to make a sharper image with a lower bit depth. Remember: great looking 16 color images will work across all wearables. 64 color images add some shading options, but you'll need to weigh the balance of image quality and memory savings. Edge bike computers have better color representation, but using high bit depth images can quickly eat your runtime memory as well.
