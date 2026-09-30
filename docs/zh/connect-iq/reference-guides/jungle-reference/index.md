---
title: "Jungle Reference Guide"
---
# Jungle 参考指南

欢迎来到 Jungles，这是 Connect IQ 应用的构建语言。本指南将涵盖以下主题：

-  Z林的[syntax](/connect-iq/reference-guides/jungle-reference/#jungle-syntax)构建语言

- 使用[build exclusions](/connect-iq/reference-guides/jungle-reference/#excluded-annotations)来定制您的应用程序在构建时

-   管理 [monkey barrels](/connect-iq/reference-guides/jungle-reference/#monkey-barrel-management)

- 使用林[with Visual Studio Code](/connect-iq/reference-guides/jungle-reference/#using-jungles-with-visual-studio-code)或从[command line](/connect-iq/reference-guides/jungle-reference/#using-jungles-from-the-command-line)


## Jungle 语法

林文件包含*构建指令*由*资格*,*本地变量*和*值组成. Jung林文件也可能包含*评论*.每个构建指令由由一个等值符号 (`=`) 分开的资格值或变量值对组成,并以一个新的行字符结束.

资格是类似于上一节所描述的[device and family qualifiers](/connect-iq/core-topics/build-configuration/#device-family-and-localization-qualifiers).它们被视为保留的单词,只能与其他资格等同,并且具有全球范围.资格和其属性可以与Dereference运算器`$(VAR)`一起使用,并且在处理所有项目林文件后进行评估.

### 项目限定符

项目资格指定在整个项目中适用的全球信息.项目资格有x属性,可以通过使用点 (`.`) 和属性的名称引用`project`:

| Qualifier | 说明 |
| --- | --- |
| `manifest` |项目公开文件的路径|
| `optimization` |指定项目优化水平.详细见[`--optimization` compiler option](/connect-iq/monkey-c/compiler-options/#compiler-options)|
| `typecheck` |指定类型检查水平.详见[`--typecheck` compiler option](/connect-iq/monkey-c/compiler-options/#compiler-options)|

### 设备限定符

设备资格有六个属性,可以通过一个点 (`.`) 和属性名称的资格进行引用:

| Qualifier | 说明 |
| --- | --- |
| `annotations` |适用于本资格的子桶注释|
| `barrelPath` |适用于本资格的 file子桶文件 (`.barrel`) 路径|
| `exclude注解` | 注解 to exclude when building for this qualifier |
| `lang` |支持本资格的语言(|
| `personality` |适用于本资格的 file子格式文件 (`.mss`) 路径|
| `resourcePath` |适用于本资格的资源文件 (`.xml`) 路径|
| `sourcePath` |适用于本资格的源文件 (`.mc`) 路径|

### 局部变量

变量是重用值的便捷方式，例如长路径字符串。与限定符不同，局部变量没有属性，不能设置为等于限定符，并且是局部作用域。 Variables can be used with the dereference operator `$(VAR)` and are evaluated after the Jungle file in which they are defined has been processed.

### 值

值列表是一个或多个字符串值的列表,代表特定的资格符,资格符属性或本地变量的值.多个列表项由半柱分开 (`;`).

字符串值中的空间必须包含在引用中.例如,包含空间的源或资源路径应以以下方式定义:

```
fenix5.sourcePath = "my projects/my source/file.mc";"my fenix5 source"
```

### 注释

之前使用哈希标记 (`#`) 的行列被视为评论,并被编译器忽视.

一个基本的 Jungle 文件构建说明将使用此模式 (评论是可选的):

```
# This is a comment
qualifier[.property] = value
```

林文件必须以`.jungle`扩展命名,并存储在Connect IQ项目的根部.

**注:** fer惰评价的例外是当一个合格或本地变量在设置该合格或变量时被fer置,在 Jungle 文件处理过程中评估该合格或变量.

## 源代码和资源

设置源路径和资源路径是 Jungles 常用的.除了针对特定设备定制源代码和资源来改善用户体验,它还可以帮助管理内存,因为只有 Jungle 文件中定义的来源才被编译成可执行的.

作为一个实用的例子,假设一个应用程序将使用一个共享的资源组用于fēnix设备,包含在一个`fenix-resources`目录的项目根部.由于这些产品都不是相同的[families](/connect-iq/core-topics/build-configuration/#family-qualifiers),必须编写一个自定义的林文件,告诉编译器这些设备应该使用这个共享资源文件.我们可以从设置fēnix的资源路径开始5:

```
# Set the fenix 5 resource directory
fenix5.resourcePath = $(fenix5.resourcePath);fenix-resources
```

让我们把这件事分解一下:

fenix5.resourcePath

在默认 jungle 文件中定义的 fēnix 5 设备资格,其次是 resourcePath 属性

$(fenix5.resourcePath);

通过Dereference操作符`$(VAR)`访问的fenix5.resourcePath属性的原始值.

默认的 Jungle 文件定义了基础资源路径为项目根部中的`resource`目录,所有设备都继承了这一定义.它还定义了可以隐含地在任何项目中使用的设备特定和家庭特定资源目录.在资源路径中包含这一点,确保设备仍然可以在这些目录中查找资源,如果需要的资源不在更特定的设备位置.如果此遗漏,它将告诉编译器只在`fenix-resources`目录中查找fenix 5资源.

fenix-resources

我们想要添加的共享目录作为设备资源位置.

如果这看起来很熟悉,那是因为它在概念上相当类似于设置[PATH environment variables](https://en.wikipedia.org/wiki/PATH_(variable)).  comp林文件中的路径优先级从左到右,因此编译器将首先处理在"enix-resources"中发现的资源之前,然后处理遗传资源,这可能会覆盖已经定义的资源.将`fenix-resources`目录添加到其他ēnienix设备中只需要每个额外设备的类似指示:

```
# Set the fenix 5 resource locations
fenix5.resourcePath = $(fenix5.resourcePath);fenix-resources

# Set the fenix 3 resource locations
fenix3.resourcePath = $(fenix3.resourcePath);fenix-resources
...
```

设置源路径基本上是相同的,允许应用程序选择性地在每个设备或每个设备家庭基础上包含特定源代码.例如,考虑一个应用程序,该应用程序在`source`文件中的所有产品和其他文件中的产品线特定源代码都有共同代码:可穿戴设备的`wearable-source`,自行车计算机的`edge-source`和手持地图单位的`handheld-source`.下列说明如何使用林来配置这个项目:

```
# Reset the base source path to include only source files in the source folder. The
# default source path includes source files in the project folder and all subfolders.
base.sourcePath = source

# Set the source path for wearable devices by device family
round.sourcePath = $(round.sourcePath);wearable-source
semiround.sourcePath = $(semiround.sourcePath);wearable-source

# Set the source path for edge devices by device
edge530.sourcePath = $(edge530.sourcePath);edge-source
edge830.sourcePath = $(edge830.sourcePath);edge-source
edge1030.sourcePath = $(edge1030.sourcePath);edge-source

# Set source path for handheld devices by device
gpsmap66.sourcePath = $(gpsmap66.sourcePath);handheld-source
oregon7xx.sourcePath = $(oregon7xx.sourcePath);handheld-source
rino7xx.sourcePath = $(rino7xx.sourcePath);handheld-source
```

### 本地化资源

本地化 strings are a kind of resource in Connect IQ, but have a slightly different syntax since multiple languages may be supported by a single device or device family. Suppose an application supports both English and Spanish, and all of the fēnix English localization resources are stored in a `fenix-resources-eng` directory, while the Spanish localization resources are kept in a `fenix-resources-spa` directory.

```
# Set the fenix 5 English language resource location
fenix5.lang.eng = $(fenix5.lang.eng);fenix-resources-eng

# Set the fenix 5 Spanish language resource location
fenix5.lang.spa = $(fenix5.lang.spa);fenix-resources-spa

# Set the fenix 3 English language resource location
fenix3.lang.eng = $(fenix3.lang.eng);fenix-resources-eng

# Set the fenix 3 Spanish language resource location
fenix3.lang.spa = $(fenix3.lang.spa);fenix-resources-spa
...
```

在此构建说明中,使用`lang`资格的属性来指定一个本地化资源正在设置,其后则是另一个[ISO 639–2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php)本地化资格,以指示提供的资源位置是用于哪种语言的.支持本地化资格的列表可以在[Strings](/connect-iq/core-topics/resources/#strings)部分找到.指定一个不支持本地化资格将导致编译时的错误.

在 Jungle 文件中指定本地化资源时,支持的语言也必须设置在项目表格中,否则将忽略相关本地化覆盖.

## 排除的注解

在某些情况下,只有一个子组的设备才能使用特定的模块,类,方法或变量,但排除整个源文件是过分的.`exclude注解`资格特征允许构建说明指定特定的[annotations](/connect-iq/monkey-c/annotations/#annotations)将被排除在应用程序构建时.这可能有助于在设备上执行应用程序时节省内存.

排除源源的常见原因是,应用程序使用一种利用新设备上最新API的算法,但必须在没有最新API的旧设备上使用更简单的算法.例如,下面的例子显示一个应用程序有两个方法,一个使用了新[Sensor.AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/),一个依赖于[Info.accel](/connect-iq/api-docs/Toybox/Sensor/Info/#accel-var)数据:

```cpp
import Toybox.WatchUi;

const experimental = Toybox.Sensor has :AccelerometerData;

class MyAmazingAppView extends WatchUi.View {

    function onUpdate(dc) {

        sharedLogic();

        if (experimental) {
            // If a newer device, call the new logic
            newHotnessLogic();
        } else {
            // If an older device, call the old logic
            oldAndBoringLogic();
        }
    }

    function newHotnessLogic() {
        // Advanced functionality using Sensor.AccelerometerData
    }

    function oldAndBoringLogic() {
        // Basic functionality using Sensor.Info.accel data
    }

    function sharedLogic() {
        // Shared logic
    }
}
```

如果应用程序接近内存限制,则可能很有用排除未使用的方法,特别是如果该方法足够大,并且影响可用内存.为了这样做,设置Jungle文件中的`exclude注解`资格属性为适当的注释值:

```
# By default, exclude the new, experimental logic
base.exclude注解 = experimental
# Exclude the old, boring logic from fenix 5
fenix5.exclude注解 = boring
```

然后,更新应用程序以使用注释:

```cpp
import Toybox.WatchUi;

(:boring) const experimental = false;
(:experimental) const experimental = Toybox.Sensor has :AccelerometerData;

class MyAmazingAppView extends WatchUi.View {

    function onUpdate(dc) {
        // If a newer device, call the new logic
        // otherwise, call the old logic
        myAlgorithm();
    }

    (:experimental)
    function myAlgorithm() {
        sharedLogic();
        if (experimental) {
            newHotnessLogic();
        } else {
            throw new MyException("Toybox.Sensor.AccelerometerData not supported!");
        }
    }

    (:boring)
    function myAlgorithm() {
        sharedLogic();
        oldAndBoringLogic();
    }

    (:experimental)
    function newHotnessLogic() {
        // Advanced functionality using Sensor.AccelerometerData
    }

    (:boring)
    function oldAndBoringLogic() {
        // Basic functionality using Sensor.Info.accel data
    }

    function sharedLogic() {
        // Shared logic
    }
}
```

## Monkey Barrel 管理

manu也可以手动添加到该项目的主要林文件中,使用`barrelPath`资格属性:

```
# Include all the Barrels from the 'barrels' directory at the root of the project
base.barrelPath = barrels

# Include a specific Barrel from the 'barrels' directory
base.barrelPath = barrels/IconLibrary.barrel

# Include multiple, specific Barrels from the 'barrels' directory
base.barrelPath = barrels/IconLibrary.barrel;barrels/GraphLibrary.barrel
```

也可以使用`annotations`资格性属性来进口一个桶的选定的注释部分.当一个桶包含一个类和方法的库时,这是有用的,但应用程序只需要使用图书馆的碎片.例如,假设上面进口的图书馆桶包含了几个不同的图形方法,但应用程序只需要使用条图.Barrel作者足够善于注释每个方法,所以我们可以限制进口代码到只需要的方法:

```
# Import the 'bar' annotated method from the GraphLibrary Barrel
base.GraphLibrary.annotations = bar
```

为了让编译器能够正确解决子桶,还必须在项目表文件中添加rel子依赖性:

```cpp
<iq:barrels>
    <iq:depends name="IconLibrary" version="0.0.0"/>
</iq:barrels>
```

一旦完成,所指定的桶将可用于项目中.

## 定义项目依赖项

如果开发人员在开发过程中对一个依赖应用程序的桶代码进行快速变化呢?这将会让[export a barrel](/connect-iq/core-topics/shareable-libraries/#exporting-a-monkey-barrel)变得繁,并且每次在桶项目的代码变更时都会更新 manifest.xml 中的依赖.连接 IQ 应用程序项目可以有直接的子桶项目依赖,从而消除了这些步骤的需要.

添加一个桶项目的依赖性是通过指定`barrelPath`中依赖的项目或项目的 Jung林文件或文件 . Jung林文件可以单独指定或组装在`barrelPath`中 .

例如,一个开发人员正在创建一个应用程序,但她想包括一个标准的标志组,定义她的品牌.她意识到在开发中她需要添加更多的标志,并决定最终创建她总是需要的超级专业功能.她可以在两个项目上动态工作,并通过添加Barrel项目的Jungle文件到`barrePath`来将她的应用程序项目与她的桶代码联系起来.

```
# Include a specific Barrel project
base.barrelPath = MyIconBarrel/MyIconBarrel.jungle
```

另一个开发人员正在开发一个密集的数学应用程序.幸运的是,有人已经创建了一个广泛的数学库桶,他已经拉进了.他还有一个本地 MyIcon Library Barrel 项目,有一些标准图标.他有一组图标为在`roundIcons.jungle`文件中定义的圆型设备,他希望在他的应用中使用.他包括包装的数学库桶和他在本地桶项目中定义的自己的圆形图标.

```
# Include a specific Barrel from the 'barrels' directory and a Jungle from a Barrel project
base.barrelPath = barrels/MathLibrary.barrel;MyIconBarrel/roundIcons.jungle
```

我们的第二个开发人员意识到,他也希望支持矩形设备.这些设备已被定义在`rectangleIcons.jungle`.他包括来自MyIconBarrel的多个构建指令,通过将林文件集成到`[]`的方形括号中,如下:

```
# Include a specific Barrel from the 'barrels' directory and multiple Jungles from a Barrel project
base.barrelPath = barrels/MathLibrary.barrel;[MyIconBarrel/roundIcons.jungle;MyIconBarrel/rectangleIcons.jungle]
```

了解更多关于子桶和如何使用的信息,请查看 (../Core\_Topics/Shareable.md图书馆#shareablelibraries) 章.

## 默认 Jungle 文件

连接IQ SDK包括默认的林文件,即使没有自定义的 Jung林文件都适用于项目.它定义了一个`base`资格,代表了项目中包含的所有源文件 (`.mc`),以及在Connect IQ项目的根部的`resources`中发现的所有资源文件.它还定义了默认设备,家庭和语言资格,这是上一节描述的资格方案的基础.

当一个项目被构建时,首先应用于默认的 jungle 文件中的指示,然后应用于自定义的 jungle 文件中的任何指示. 这使得可进行定制,以取代默认的构建指示.

## 在 Visual Studio Code 中使用 Jungles

默认情况下,每个项目都设置在项目根部寻找一个`monkey.jungle`文件,如果它存在,则会使用它.然而,如果一个项目有不同的组织或更喜欢不同的Jungle文件名称,那么通过进入 *File > 首选 > 设置*和编辑 *Monkey C*设置可以轻松设置Jungle文件位置:


![Visual Studio Code 中的 Jungle 文件规范](/connect-iq/resources/programmers-guide/vscode-jungles.png)

## 从命令行使用 Jungles

对于那些更喜欢使用`monkeyc`[shell command](/connect-iq/reference-guides/monkey-c-command-line-setup/#basic-commands)来构建项目而不是视觉工作室代码的人来说,需要`-f`选项,并接受由半柱 (`;`) 或柱 (`:`) 分开的 list林文件列表:

```
monkeyc -o myApp.prg myApp.mc -d fenix5 -f monkey.jungle;monkey2.jungle
```

取而代之的是`-z`选项指定资源路径,`-x`选项指定构建排除,`-m`选项指定表格文件,以及指定源路径的功能已经过时,将在未来的SDK版本中被删除.以下是如何工作的一般描述:

- 在使用`-f`选项指定一个林文件时,首先将[default Jungle file](/connect-iq/reference-guides/jungle-reference/#the-default-jungle-file)应用于该项目之前,然后将指定的林文件应用于

- 如果`-f`选项后提供了多个Jungle文件,则将优先考虑列表中的最后一个Jungle文件中的构建说明

- 如果没有指定资源或源选项,编译器将试图将[default Jungle file](/connect-iq/reference-guides/jungle-reference/#the-default-jungle-file)应用到项目中

- 不允许使用`-f`选项和任何过时选项的组合,并会导致编译错误


项目明示文件必须在命令行传递的林文件中指定,任何林都可以包含此规范.

```
project.manifest = manifest.xml
```

在提供的林文件集中只能定义一个表格文件.当 relative林文件中使用相对路径时,路径将与 Jung林文件的主目录解决.`default.jungle`中的相对路径将与发现的表格文件的主目录解决.

** 注:**使用`-m`,`-x`,`-z`和/或在命令行提供源文件的遗产项目将导致编译器警告.

抵制冲动...做出...参考...

当发现多个表现时,一个必须摧毁另一个并吸收它的力量,成为最强大的表现.
