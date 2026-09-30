---
title: "Build Configuration"
---
# 构建配置

连接IQ支持各种Garmin设备,如手表,自行车电脑和手持电脑.即使在这些更广泛的类别内,设备也可以具有不同的屏幕尺寸,形状和分辨率.应用程序开发人员可能希望为某些设备或设备家庭定义特定资源,如字体和位图图形,以获得更好的用户体验.例如,应用程序可能需要使用圆形设备的圆形背景图像和方形设备的方形背景图像.

连接智商提供管理应用资源的一些方法:设备和家庭资格,林和构建排斥.

## Device, Family, and 本地化 Qualifiers

The simplest way to override resources is with device, family, and localization qualifiers, which are added to a resources folder by adding a hyphen (`-`) followed by a valid qualifier value. Let's take a look at an 示例：

图1.图1:使用fēnix 5设备资源资格的项目

![](/connect-iq/resources/programmers-guide/qualifier-project.png)

在图1中,`resources-fenix5`目录使用`-fenix5`资格分类专门用于fēnix5的资源.当这个项目为fēnix5构建时,`resources-fenix5`目录中的布局和绘制可用于显示与更通用的`resources`目录中不同的背景图像.所有其他支持产品将与默认资源进行编译.

** 注:** 单个文件上可以使用通过字符串分开的多个资格,但设备资格不允许与相同文件名称的家庭资格共存 (例如`resources-round-fenix3`)) ,如果遇到,资源编译器将会跳过.

### 设备限定符

设备资格格格式允许资源针对特定设备 (如图1所示).包含设备资格格的文件中的资源将在构建相关设备时覆盖基础资源文件中定义的相同ID的资源.设备资格也优先于较少特定的资格,如家庭资格.

### 系列限定符

家庭资格格格式允许资源针对特定设备家庭,这是由共享屏幕特性区分的设备组.有两个家庭资格:

- **屏幕形状:**屏幕的形状 (例如`round`,`rectangle`等)

- **屏幕尺寸:** 屏幕的物理尺寸在像素中 (例如`218x218`,`148x205`等)


在使用家庭资格表示器时,必须总是指定屏幕形状,并且可以添加屏幕大小以进一步完善目标家庭.以下是一些有效和无效的家庭资格表示器示例:

-`resources-round`: *有效*针对圆屏设备,如Fēnix3系列和Fēnix5系列

-`resources-round-218x218`: *有效*目标218px x 218px,圆屏设备,如fēnix 3和fēnix 5S (但不是5或5X,因为它们有240px x 240px的屏幕)

-`resources-218x218`: *无效*资源编译器会忽略这个,因为没有指定屏幕形状

-`resources-218x218-round`: *无效*屏幕形状未被先指定


具有更具体的资格的资源总是优先于更少的资格,因此在一个圆形的218px x218px设备上,任何包含在`resources-round-218x218`资源文件中的资源都会被使用,如果它们共享ID.此外,任何载有家庭资格的资源文件将总是转移到设备资格的资源文件.

### 本地化 Qualifiers

本地化 qualifiers are a way to specify language-specific string resources, and are specified as an [ISO 639–2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php). These qualifiers may be combined with either device or family qualifiers, and are always specified last in the qualifier naming scheme. For 示例：

-`resources-fre`:为所有设备提供法语语言特定的字符串资源

-`resources-round-fre`:仅为圆形设备提供法语特定字符串资源

-`resources-fenix5s-fre`:仅为fēnix 5设备提供法语特定字符串资源


## 通过 Jungles 进行构建配置

连接智商运行在各种目的构建设备上.由于输入,屏幕形状和资源的多样性,通常需要包含针对特定条件的代码和资源.例如,在一个方形设备上,进步可能是矩形,但在一个圆的设备上,它可能看起来更好,像一个围绕屏幕的弧形.

林允许开发人员为子C项目编写自定义构建配置.

- 定义每个设备或每个设备的源和资源目录的家庭路径

- 排除注释的源代码部分

- 指定项目建设时应包含的[Monkey Barrels](/connect-iq/core-topics/shareable-libraries/#shareable-libraries).


### 按设备配置

林允许对所有产品,屏幕形状或特定产品设置源路径,资源路径和排斥.

|姓名|描述|
| --- | --- |
| `base` |配置适用于所有产品|
| `round` |配置适用于圆屏产品|
| `semiround` |配置适用于半圆屏幕的产品|
| `rectangle` |配置适用于矩形或方形屏幕的产品|
| `semioctagon` |配置适用于具有子窗口的八角屏幕的产品|
| `<product id>` |配置适用于特定产品.`<product id>`与表格文件中使用的相同|

对于`round`,`semiround`,`semi-octagon`和`rectangle`标识符,可添加可选的`-<width>x<height>`后音,以缩小范围.

假设您正在编写一个可穿戴的应用程序,该应用程序为圆形,半圆形和矩形布局提供不同的资源. Venu 还有一个AMOLED特定的实现. 林让在一个地方更容易管理项目构建配置:

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

这些指令将所有设备的源路径设置为`source`. 它告诉构建系统分别使用圆,半圆和矩形的`resource-round`,`resource-semiround`和`resource-rectangle`路径.最后,Venu增加了额外的源和资源文件.

### 感到被排除在外

现在,假设我们在应用程序中有一些代码只应该运行在圆形产品上,

```typescript
(:roundVersion)
function drawThis(dc) {
    // Implementation
}

(:regularVersion)
function drawThis(dc) {

}
```

我们不想将这两个版本都包含在任何可执行的版本中,因为其中一个版本只是死码. 林允许我们使用排除来指定这一点.

```bash
# Say that all products exclude declarations
# with the annotation :roundVersion
base.excludeAnnotations = roundVersion
# Now say that the round products exclude
# the regular version
round.excludeAnnotations = regularVersion
```

在构建产品应用程序时,圆型产品将排除`drawThis`的版本与`:regularVersion`注释,其余的产品将排除`drawThis`的版本与`:roundVersion`注释.

更多关于如何使用林的信息请参阅[Jungle Reference Guide](/connect-iq/reference-guides/jungle-reference/#jungle-reference-guide).
