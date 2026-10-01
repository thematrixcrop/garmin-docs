---
title: "Monkey Motion"
---
<a id="monkey-motion"></a>
# Monkey Motion

可以使用 Monkey Motion UI 工具或命令行导入动画。

## 使用 Monkey Motion UI

要使用 Monkey Motion 的图形界面，请从命令行启动 `monkeymotion`（Windows/Linux）或 `monkeymotion.app`（Mac），也可以在 Visual Studio Code 的 Monkey C 扩展中打开命令面板，选择 *Monkey C: Open Monkey Motion*。

首次启动时，工具会列出支持 Connect IQ Animation 的设备：

图 1：Monkey Motion 工具

![Monkey Motion 工具](/connect-iq/resources/programmers-guide/monkey_motion.png)

开发者可以选择要为哪些设备编码动画。也可以将 Connect IQ 项目的 Manifest 文件加载到工具中；工具会自动选中项目支持且支持 Connect IQ Animation 的设备。如果希望使用默认设置以外的文件编码设置，可以在高级选项卡中进行调整：

图 2：Monkey Motion 工具高级设置

![Monkey Motion 工具高级设置](/connect-iq/resources/programmers-guide/monkey_motion_advanced.png)

Monkey Motion 工具会为每个处理的动画生成一个 Monkey Motion Manifest（`.mmm`）文件。Manifest 会建立设备与 Monkey Motion（`.mm`）文件之间的映射，`.mm` 文件包含编码后的二进制数据。同一个动画可能生成多个 `.mm` 文件，因为工具会根据视频目标分辨率和设备每像素位数创建不同的编码。

除生成编码文件外，工具还可以用于拖动查看已编码的动画：

图 3：Monkey Motion 预览

![Monkey Motion 预览](/connect-iq/resources/programmers-guide/monkey_motion_scrubber.png)

如果要预览已经编码的动画，可以在 *File* 菜单中选择 *Load Animation*。该选项接受 Monkey Motion Manifest 文件作为输入。

## 使用命令行

也可以使用 `monkeym` 脚本在命令行编码视频。可用选项如下：

| 参数 | 定义 | 有效值 | 默认值 | 备注 |
| --- | --- | --- | --- | --- |
| `-a <arg>` | 目标 `YUV` 编码视频文件的 alpha 通道掩码 | 有效且可解析的 `YUV` 编码视频文件 | 不适用 | 可选 |
| `-c <arg>` | 动画的首选颜色深度（每个颜色通道的位数）。更多信息请参阅[AMOLED 设备的颜色深度](#color-depth-for-amoled-devices) | 1 到 6 之间的值 | 6 | 可选 |
| `-d <arg>` | 目标设备 | 用冒号（`:`）分隔的设备限定符；支持切换方向的设备应追加 `-portrait` 或 `-landscape`，以确定全屏动画编码时使用的分辨率 | 不适用 | 必需 |
| `-e <arg>` | 要随 Monkey Motion 编码文件一起导出的动画资源标识符 | 以字母开头的任意值 | 不适用 | 可选 |
| `-f <arg>` | 动画的目标帧率 | 建议为 1 到 10；更高帧率会受动画解码速度限制。更多信息请参阅[帧率注意事项](#frame-rate-considerations) | YUV 视频为 10；GIF 可以在动画中编码延迟率，未指定时使用该延迟率 | 可选 |
| `-h` | 输出帮助信息 | 不适用 | 不适用 | 可选 |
| `-m <arg>` | 指定构建目标设备的 Manifest 文件 | 项目 Manifest 文件路径 | 空 | 可选 |
| `-o <arg>` | 输出文件路径 | 有效且可解析的文件路径 | 目标动画文件路径 | 可选 |
| `-p <arg>` | 编码动画的目标压缩级别 | 1 到 7。更多信息请参阅[压缩级别影响](#compression-level-impact) | 5 | 可选 |
| `-q <arg>` | 编码动画的目标图像质量 | 1 到 3。更多信息请参阅[注意事项](#considerations) | 3 | 可选 |
| `-r <arg>` | 动画的目标分辨率（不是设备屏幕尺寸时使用） | `<width>x<height>`，其中 `width` 和 `height` 是目标分辨率的数字值，例如 `40x40` | 不适用 | 可选 |
| `-s <arg>` | 动画的目标图像缩放质量 | 1 到 3 之间的值 | 如果适用则为 3 | 可选 |
| `-v <arg>` | 目标动画文件 | 有效且可解析的 `YUV` 或 `GIF` 文件 | 不适用 | 必需 |
| `-w` | 输出 Monkey Motion 警告 | 不适用 | 不适用 | 可选 |

## 注意事项

Monkey Motion 工具提供了多个高级设置选项，需要在多个方面进行权衡。本节通过提示、案例和更深入的信息，帮助开发者找到最合适的视频编码配置。

<a id="considerations"></a>
### 图像质量注意事项

指定图像质量 3 会使用无损压缩（这里的“无损”是指编码器始终为每个像素使用调色板中最接近的可用颜色）。指定 2 或 1 则可能进一步压缩，但会用颜色替换换取更高的压缩率，属于有损压缩。

<a id="frame-rate-considerations"></a>
### 帧率注意事项

动画的最大帧率同时受解码时间和输入视频运动量限制。压缩级别越高，解码时间通常越长。

**注意：** Connect IQ 设备不支持垂直同步，因此高帧率可能导致画面撕裂。

<a id="compression-level-impact"></a>
### 压缩级别影响

压缩级别会同时影响压缩率和解码开销。画面大部分内容在帧与帧之间不变的视频，可以使用较高压缩级别（例如 7），而性能影响很小。对于整个画面都有大量运动的视频，较高压缩级别可能导致播放变慢，因为解压缩需要更多开销。下面是一个高复杂度 `GIF` 在 Fēnix 5 Plus 上运行时，压缩级别与解码时间的关系：

| 压缩级别 | Monkey Motion 文件大小（KB） | 帧解码时间（ms） |
| --- | --- | --- |
| 1 | 981 | 30 |
| 2 | 883 | 36 |
| 3 | 798 | 38 |
| 4 | 758 | 39 |
| 5 | 728 | 39 |
| 6 | 711 | 40 |
| 7 | 703 | 40 |

对于运动量大、难以压缩的视频，较低压缩级别有时反而会生成更小的文件。下面是另一个高复杂度 `GIF` 在 Venu 上运行时的对比：

| 压缩级别 | Monkey Motion 文件大小（KB） | 帧解码时间（ms） |
| --- | --- | --- |
| 1 | 602 | 58 |
| 2 | 602 | 60 |
| 3 | 602 | 60 |
| 4 | 601 | 61 |
| 5 | 600 | 64 |
| 6 | 599 | 71 |
| 7 | 600 | 84 |

压缩级别 6 生成的文件最小。不过在这个例子中，接受几乎可以忽略的文件大小增加并使用压缩级别 1 会更好，因为解码开销小得多。对于运动量大的视频，如果要尝试获得最高帧率，建议从压缩级别 1 开始逐步提高，同时注意帧率和文件大小可能变差。

**注意：** 在高色彩分辨率设备上，解码时间可能受到更明显的影响。

### 复杂度级别影响

与视频压缩级别一样，视频复杂度也会直接影响动画文件大小和解码性能。复杂度由同一帧内部的变化以及连续帧之间的变化共同决定。

下面的示例 GIF 均针对 Fēnix 5 Plus，使用压缩级别 5 编码，以测试复杂度的影响。

#### 低复杂度

-   帧数：30

-   Monkey Motion 文件大小：107 KB

-   平均帧解码时间：8 ms


![](/connect-iq/resources/programmers-guide/giphy.gif)

#### 中等复杂度

-   帧数：25

-   Monkey Motion 文件大小：412 KB

-   平均帧解码时间：26 ms


![](/connect-iq/resources/programmers-guide/clock.gif)

#### 高复杂度

-   帧数：24

-   Monkey Motion 文件大小：758 KB

-   平均帧解码时间：39 ms


![](/connect-iq/resources/programmers-guide/swirl.gif)

<a id="color-depth-for-amoled-devices"></a>
### AMOLED 设备的颜色深度

AMOLED 设备使用 RGB565 颜色格式，也就是说红色和蓝色每像素最多使用 5 位。对于 AMOLED 设备指定颜色深度 5，会将绿色从每像素 6 位降低到 5 位；考虑到 256 色调色板限制，这可能在视觉差异不明显的情况下改善动画压缩效果。

### 内存影响

每个动画都算作一个渲染层。将动画添加到 `View` 后，系统会为其分配一个帧缓冲区（以 BufferedBitmap 的形式），大小相当于一帧原始像素数据。例如，颜色深度为 8 位时，240x240 的动画大约会从 Connect IQ 应用内存预算中占用 58 KB（240 x 240 x 1）。

#### 覆盖层帧内存

在包含动画的 `View` 中，添加到 `View` 的原生 drawable 会组合成一个称为“overlay”的图层。为了保证播放流畅，需要按需创建 overlay 帧。目前 overlay 缓冲区会从应用内存预算中占用一整屏的内存（与动画一样，以 BufferedBitmap 形式存在）。

#### 案例研究

下面的表格展示了 Fēnix 5 Plus 播放动画时的内存影响。该设备的屏幕分辨率为 240x240，颜色深度为 8 bpp。

包含两个动画且没有原生 drawable 的 `View`：

| 图层 | 分辨率 | 帧缓冲区大小（KB） |
| --- | --- | --- |
| Animation 1 | 240x240 | 58 |
| Animation 2 | 40x40 | 1.6 |
| 覆盖层（Overlay） | 不适用 | 0 |

总计：60 KB

包含两个动画和原生 drawable 的 `View`：

| 图层 | 分辨率 | 帧缓冲区大小（KB） |
| --- | --- | --- |
| Animation 1 | 240x240 | 58 |
| Animation 2 | 40x40 | 1.6 |
| 覆盖层（Overlay） | 240x240（固定） | 58 |

总计：118 KB
