---
title: "构建配置"
---
# 构建配置

Connect IQ 支持各种 Garmin 设备，例如手表、自行车电脑和手持设备。即使属于同一类别，设备也可能具有不同的屏幕尺寸、形状和分辨率。开发者可以为特定设备或设备系列定义字体、位图等资源，以获得更好的用户体验。例如，圆形设备可能需要圆形背景图像，而方形设备需要方形背景图像。

Connect IQ 提供多种管理应用资源的方式：设备限定符、系列限定符、本地化限定符、Jungle 和构建排除。

## 设备、系列和本地化限定符

覆盖资源最简单的方法是使用设备、系列和本地化限定符：在 resources 文件夹名称后添加连字符（`-`）和有效的限定符值。下面来看一个示例：

图 1：使用 fēnix 5 设备限定符的项目

![](/connect-iq/resources/programmers-guide/qualifier-project.png)

在图 1 中，`resources-fenix5` 目录使用 `-fenix5` 限定符，专门存放 fēnix 5 的资源。针对 fēnix 5 构建项目时，系统会使用该目录中的布局和可绘制资源来显示不同于通用 `resources` 目录的背景图像。其他支持的产品仍会使用默认资源进行编译。

**注意：** 一个文件夹名称可以包含多个以连字符分隔的限定符，但设备限定符不能与系列限定符同时出现在同一个名称中（例如 `resources-round-fenix3`）。如果遇到这种名称，资源编译器会跳过该文件夹。

### 设备限定符

设备限定符允许资源针对特定设备（如图 1 所示）。使用设备限定符的文件夹中的资源，在为对应设备构建时会覆盖基础资源文件夹中具有相同 ID 的资源。设备限定符的优先级也高于系列限定符等更宽泛的限定符。

### 系列限定符

系列限定符允许资源针对特定设备系列，即由共同屏幕特征区分的一组设备。系列限定符有两种：

- **屏幕形状**：屏幕的形状（例如 `round`、`rectangle`）。

- **屏幕尺寸**：屏幕的像素尺寸（例如 `218x218`、`148x205`）。


使用系列限定符时必须指定屏幕形状，也可以添加屏幕尺寸来进一步缩小目标范围。以下是有效和无效的示例：

- `resources-round`：*有效*，针对圆形屏幕设备，例如 fēnix 3 和 fēnix 5 系列。

- `resources-round-218x218`：*有效*，针对 218 x 218 像素的圆形屏幕设备，例如 fēnix 3 和 fēnix 5S（不包括屏幕为 240 x 240 像素的 fēnix 5 和 5X）。

- `resources-218x218`：*无效*，因为没有指定屏幕形状，资源编译器会忽略它。

- `resources-218x218-round`：*无效*，屏幕形状必须排在尺寸之前。


更具体的限定符始终优先于更宽泛的限定符。因此，在 218 x 218 像素的圆形设备上，如果资源 ID 相同，会优先使用 `resources-round-218x218` 中的资源，而不是 `resources-round` 中的资源。此外，带系列限定符的资源文件夹始终让位于带设备限定符的文件夹。

### 本地化限定符

本地化限定符用于指定特定语言的字符串资源，其值采用 [ISO 639-2 语言代码](https://www.loc.gov/standards/iso639-2/php/code_list.php)。这些限定符可以与设备或系列限定符组合，并且在限定符命名方案中始终放在最后。例如：

- `resources-fre`：为所有设备提供法语字符串资源。

- `resources-round-fre`：仅为圆形设备提供法语字符串资源。

- `resources-fenix5s-fre`：仅为 fēnix 5S 设备提供法语字符串资源。


## 通过 Jungles 进行构建配置

Connect IQ 运行在用途各异的专用设备上。由于输入方式、屏幕形状和资源存在差异，通常需要为特定条件提供相应的代码和资源。例如，进度条在方形设备上可以是矩形，在圆形设备上则可能更适合显示为环绕屏幕的弧线。

Jungle 允许开发者为 Monkey C 项目编写自定义构建配置。

- 为每台设备或设备系列定义源代码和资源目录路径。

- 使用注解排除部分源代码。

- 指定构建项目时应包含的 [Monkey Barrel](/connect-iq/core-topics/shareable-libraries/#shareable-libraries)。


### 按设备配置

Jungle 允许按所有产品、屏幕形状或特定产品设置源代码路径、资源路径和排除项。

| 名称 | 说明 |
| --- | --- |
| `base` | 配置适用于所有产品 |
| `round` | 配置适用于圆形屏幕产品 |
| `semiround` | 配置适用于半圆形屏幕产品 |
| `rectangle` | 配置适用于矩形或方形屏幕产品 |
| `semioctagon` | 配置适用于带子窗口的八边形屏幕产品 |
| `<product id>` | 配置适用于特定产品。`<product id>` 与清单文件中使用的值相同 |

对于 `round`、`semiround`、`semi-octagon` 和 `rectangle` 标识符，可以添加可选的 `-<width>x<height>` 后缀来缩小范围。

假设您正在编写一个可穿戴应用，为圆形、半圆形和矩形布局提供不同资源，且 Venu 还有专用的 AMOLED 实现。Jungle 可以让您在一个地方管理项目构建配置：

```
base.sourcePath = source

# Configure paths based on screen shape
round.resourcePath = $(base.resourcePath);resource-round
semiround.resourcePath = $(base.resourcePath);resource-semiround
rectangle.resourcePath = $(base.resourcePath);resource-rectangle

# Set the venu source and resource paths
venu.sourcePath = $(base.sourcePath);source-venu
venu.resourcePath = $(base.resourcePath);resource-venu
```

这些指令将所有设备的源路径设为 `source`，并告诉构建系统分别为圆形、半圆形和矩形设备使用 `resource-round`、`resource-semiround` 和 `resource-rectangle` 路径。最后，为 Venu 添加额外的源代码和资源目录。

### 感到被排除在外

现在假设应用中有一段代码只应在圆形产品上运行：

```typescript
(:roundVersion)
function drawThis(dc) {
    // Implementation
}

(:regularVersion)
function drawThis(dc) {

}
```

我们不希望两个版本都编译进任何可执行文件，因为其中一个版本会成为无效代码。Jungle 可以通过排除项表达这一点。

```bash
# Say that all products exclude declarations
# with the annotation :roundVersion
base.excludeAnnotations = roundVersion
# Now say that the round products exclude
# the regular version
round.excludeAnnotations = regularVersion
```

为产品构建应用时，圆形产品会排除带 `:regularVersion` 注解的 `drawThis` 版本，其他产品会排除带 `:roundVersion` 注解的版本。

有关 Jungle 用法的更多信息，请参阅 [Jungle 参考指南](/connect-iq/reference-guides/jungle-reference/#jungle-reference-guide)。
