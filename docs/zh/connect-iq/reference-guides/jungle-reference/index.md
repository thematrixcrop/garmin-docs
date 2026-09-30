---
title: "Jungle 参考指南"
---
# Jungle 参考指南

欢迎使用 Jungle，这是 Connect IQ 应用的构建语言。本指南将涵盖以下主题：

-  Jungle 构建语言的[语法](/connect-iq/reference-guides/jungle-reference/#jungle-syntax)

- 使用[构建排除项](/connect-iq/reference-guides/jungle-reference/#excluded-annotations)在构建时定制应用

-   管理 [Monkey Barrel](/connect-iq/reference-guides/jungle-reference/#monkey-barrel-management)

- 使用 Jungle 与 [Visual Studio Code](/connect-iq/reference-guides/jungle-reference/#using-jungles-with-visual-studio-code) 配合，或从[命令行](/connect-iq/reference-guides/jungle-reference/#using-jungles-from-the-command-line)使用 Jungle


## Jungle 语法

Jungle 文件包含由*限定符*、*局部变量*和*值*组成的*构建指令*。Jungle 文件也可以包含*注释*。每条构建指令由等号 (`=`) 分隔的限定符-值或变量-值对组成，并以换行符结束。

限定符类似于上一节所述的[设备和系列限定符](/connect-iq/core-topics/build-configuration/#device-family-and-localization-qualifiers)。它们被视为保留字，只能设置为其他限定符的值，并且具有全局作用域。限定符及其属性可以与解引用运算符 `$(VAR)` 一起使用，并在处理完项目中的所有 Jungle 文件后求值。

### 项目限定符

项目限定符指定适用于整个项目的全局信息。项目限定符具有多个属性，可以在 `project` 后加点号 (`.`) 和属性名来引用：

| 限定符 | 说明 |
| --- | --- |
| `manifest` | 项目 Manifest 文件的路径 |
| `optimization` | 指定项目的优化级别。详情请参阅 [`--optimization` 编译器选项](/connect-iq/monkey-c/compiler-options/#compiler-options)。 |
| `typecheck` | 指定类型检查级别。详情请参阅 [`--typecheck` 编译器选项](/connect-iq/monkey-c/compiler-options/#compiler-options)。 |

### 设备限定符

设备限定符有六个属性，可以在限定符后加点号 (`.`) 和属性名来引用：

| 限定符 | 说明 |
| --- | --- |
| `annotations` | 适用于此限定符的 Monkey Barrel 注解 |
| `barrelPath` | 适用于此限定符的 Monkey Barrel 文件（`.barrel`）路径 |
| `excludeAnnotations` | 构建此限定符时要排除的注解 |
| `lang` | 此限定符支持的语言 |
| `personality` | 适用于此限定符的 Monkey Style 文件（`.mss`）路径 |
| `resourcePath` | 适用于此限定符的资源文件（`.xml`）路径 |
| `sourcePath` | 适用于此限定符的源文件（`.mc`）路径 |

### 局部变量

变量是重用值的便捷方式，例如长路径字符串。与限定符不同，局部变量没有属性，不能设置为等于限定符，并且是局部作用域。变量可以与解引用运算符 `$(VAR)` 一起使用，并在定义它们的 Jungle 文件处理完成后求值。

### 值

值列表是一个或多个字符串值的列表，表示特定限定符、限定符属性或局部变量的值。多个列表项用分号 (`;`) 分隔。

字符串值中的空格必须放在引号内。例如，包含空格的源路径或资源路径应按以下方式定义：

```
fenix5.sourcePath = "my projects/my source/file.mc";"my fenix5 source"
```

### 注释

以井号 (`#`) 开头的行会被视为注释，并被编译器忽略。

一个基本的 Jungle 文件构建说明将使用此模式 (评论是可选的):

```
# 这是注释
qualifier[.property] = value
```

Jungle 文件必须使用 `.jungle` 扩展名，并存储在 Connect IQ 项目的根目录中。

**注：**限定符会延迟求值：针对特定设备构建时，会在处理完所有 Jungle 文件后解析该设备的所有限定符及属性；局部变量则在处理定义它们的 Jungle 文件后求值。唯一的例外是在设置限定符或局部变量时对其进行解引用，此时会在处理 Jungle 文件期间立即求值。

## 源代码和资源

设置源路径和资源路径是 Jungle 的常见用途。除了针对特定设备定制源代码和资源以改善用户体验，这也有助于管理内存，因为只有 Jungle 文件中定义的源文件才会被编译到可执行文件中。

例如，假设应用要使用一组供 fēnix 设备共享的资源，这些资源位于项目根目录的 `fenix-resources` 文件夹中。由于这些产品并不属于同一[设备系列](/connect-iq/core-topics/build-configuration/#family-qualifiers)，必须编写自定义 Jungle 文件，告诉编译器这些设备应使用该共享资源文件。我们可以先设置 fēnix 5 的资源路径：

```
# Set the fenix 5 resource directory
fenix5.resourcePath = $(fenix5.resourcePath);fenix-resources
```

下面分解说明这条指令：

fenix5.resourcePath

默认 Jungle 文件中定义的 fēnix 5 设备限定符，后跟 `resourcePath` 属性。

$(fenix5.resourcePath);

通过解引用运算符 `$(VAR)` 访问的 `fenix5.resourcePath` 属性原始值。

默认 Jungle 文件将项目根目录中的 `resource` 文件夹定义为基础资源路径，所有设备都会继承该定义。它还定义了可以在任何项目中隐式使用的设备专属和系列专属资源目录。将原路径保留在资源路径中，可以确保设备在更具体的位置找不到所需资源时仍会搜索这些目录。如果省略原路径，编译器将只在 `fenix-resources` 目录中查找 fēnix 5 资源。

fenix-resources

要添加为设备资源位置的共享目录。

如果这看起来很熟悉，是因为它在概念上类似于设置 [PATH 环境变量](https://en.wikipedia.org/wiki/PATH_(variable))。Jungle 文件中的路径优先级从左到右，因此编译器会先处理继承的资源，再处理 `fenix-resources` 中的资源；后者可以覆盖已定义的资源。将 `fenix-resources` 目录添加到其他 fēnix 设备时，只需为每台设备添加类似指令：

```
# Set the fenix 5 resource locations
fenix5.resourcePath = $(fenix5.resourcePath);fenix-resources

# Set the fenix 3 resource locations
fenix3.resourcePath = $(fenix3.resourcePath);fenix-resources
...
```

设置源路径的方式基本相同，可以让应用按设备或设备系列选择性地包含源代码。例如，应用可能在 `source` 文件夹中包含所有产品共用的代码，并在其他文件夹中包含产品线专属代码：可穿戴设备使用 `wearable-source`，自行车电脑使用 `edge-source`，手持地图设备使用 `handheld-source`。下面演示如何使用 Jungle 配置此项目：

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

本地化字符串是 Connect IQ 中的一类资源，但语法略有不同，因为同一设备或设备系列可能支持多种语言。假设应用同时支持英语和西班牙语，所有 fēnix 英语本地化资源存储在 `fenix-resources-eng` 目录中，西班牙语本地化资源存储在 `fenix-resources-spa` 目录中。

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

在此构建指令中，使用 `lang` 限定符属性表示正在设置本地化资源，后面跟着一个额外的 [ISO 639–2 语言代码](https://www.loc.gov/standards/iso639-2/php/code_list.php)限定符，用于指明资源位置对应的语言。支持的本地化限定符列表请参阅[字符串资源](/connect-iq/core-topics/resources/#strings)。指定不受支持的本地化限定符会导致编译错误。

在 Jungle 文件中指定本地化资源时，还必须在项目清单中设置支持的语言，否则会忽略相关的本地化覆盖。

## 排除的注解

在某些情况下，只有部分设备可以使用特定的模块、类、方法或变量，但排除整个源文件过于极端。`excludeAnnotations` 限定符属性允许构建指令指定应用构建时要排除的[注解](/connect-iq/monkey-c/annotations/#annotations)。这有助于减少应用在设备上运行时的内存占用。

一种常见情况是，应用在新设备上使用利用最新 API 的算法，但在不支持最新 API 的旧设备上必须使用更简单的算法。下面的示例展示了两个方法：一个使用新的 [Sensor.AccelerometerData](/connect-iq/api-docs/Toybox/Sensor/AccelerometerData/)，另一个依赖 [Info.accel](/connect-iq/api-docs/Toybox/Sensor/Info/#accel-var) 数据：

```cpp
import Toybox.WatchUi;

const experimental = Toybox.Sensor has :AccelerometerData;

class MyAmazingAppView extends WatchUi.View {

    function onUpdate(dc) {

        sharedLogic();

        if (experimental) {
            // 如果是较新的设备，调用新逻辑
            newHotnessLogic();
        } else {
            // 如果是较旧的设备，调用旧逻辑
            oldAndBoringLogic();
        }
    }

    function newHotnessLogic() {
        // 使用 Sensor.AccelerometerData 的高级功能
    }

    function oldAndBoringLogic() {
        // 使用 Sensor.Info.accel 数据的基本功能
    }

    function sharedLogic() {
        // 共享逻辑
    }
}
```

如果应用接近内存限制，排除未使用的方法可能会有所帮助，尤其是在方法较大并会影响可用内存时。为此，请在 Jungle 文件中将 `excludeAnnotations` 限定符属性设置为适当的注解值：

```
# By default, exclude the new, experimental logic
base.excludeAnnotations = experimental
# Exclude the old, boring logic from fenix 5
fenix5.excludeAnnotations = boring
```

然后，更新应用以使用这些注解：

```cpp
import Toybox.WatchUi;

(:boring) const experimental = false;
(:experimental) const experimental = Toybox.Sensor has :AccelerometerData;

class MyAmazingAppView extends WatchUi.View {

    function onUpdate(dc) {
        // 如果是较新的设备，调用新逻辑
        // 否则调用旧逻辑
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
        // 使用 Sensor.AccelerometerData 的高级功能
    }

    (:boring)
    function oldAndBoringLogic() {
        // 使用 Sensor.Info.accel 数据的基本功能
    }

    function sharedLogic() {
        // 共享逻辑
    }
}
```

## Monkey Barrel 管理

也可以使用 `barrelPath` 限定符属性，将 Monkey Barrel 手动添加到项目的主 Jungle 文件中：

```
# Include all the Barrels from the 'barrels' directory at the root of the project
base.barrelPath = barrels

# Include a specific Barrel from the 'barrels' directory
base.barrelPath = barrels/IconLibrary.barrel

# Include multiple, specific Barrels from the 'barrels' directory
base.barrelPath = barrels/IconLibrary.barrel;barrels/GraphLibrary.barrel
```

也可以使用 `annotations` 限定符属性导入 Barrel 中带有指定注解的部分。当 Barrel 包含一个类和方法库，而应用只需要其中一部分时，这很有用。例如，假设上面导入的库 Barrel 包含多个图形方法，但应用只需要条形图方法。Barrel 作者已经为每个方法添加了注解，因此我们可以将导入的代码限制为所需方法：

```
# Import the 'bar' annotated method from the GraphLibrary Barrel
base.GraphLibrary.annotations = bar
```

为了让编译器能够正确解析 Monkey Barrel，还必须在项目 Manifest 文件中添加 Barrel 依赖项：

```cpp
<iq:barrels>
    <iq:depends name="IconLibrary" version="0.0.0"/>
</iq:barrels>
```

完成后，指定的 Barrel 就可以在项目中使用。

## 定义项目依赖项

如果开发人员在开发过程中频繁修改应用依赖的 Barrel 代码，会发生什么？每次代码变更都[导出 Barrel](/connect-iq/core-topics/shareable-libraries/#exporting-a-monkey-barrel)并更新 `manifest.xml` 中的依赖会很繁琐。Connect IQ 应用项目可以直接依赖 Barrel 项目，从而省去这些步骤。

添加 Barrel 项目依赖的方式，是在 `barrelPath` 中指定依赖项目的 Jungle 文件或文件列表。可以单独指定 Jungle 文件，也可以将多个文件组合到 `barrelPath` 中。

例如，开发人员正在创建一个应用，希望包含一组定义其品牌的标准图标。她意识到开发过程中还需要添加更多图标，并决定最终创建一个包含常用功能的库。她可以同时处理两个项目，并将 Barrel 项目的 Jungle 文件添加到 `barrelPath`，从而将应用项目连接到 Barrel 代码。

```
# Include a specific Barrel project
base.barrelPath = MyIconBarrel/MyIconBarrel.jungle
```

另一位开发人员正在开发一个计算密集型数学应用。幸运的是，已有一个完善的数学库 Barrel，他已经将其引入项目。他还有一个包含标准图标的本地 MyIcon Library Barrel 项目，并在 `roundIcons.jungle` 文件中为圆形设备定义了一组图标，希望在应用中使用。他需要同时包含打包的数学库 Barrel 和本地 Barrel 项目中定义的圆形图标。

```
# Include a specific Barrel from the 'barrels' directory and a Jungle from a Barrel project
base.barrelPath = barrels/MathLibrary.barrel;MyIconBarrel/roundIcons.jungle
```

这位开发人员后来还希望支持矩形设备，这些设备已在 `rectangleIcons.jungle` 中定义。他可以将 Jungle 文件放入方括号 `[]`，从 MyIconBarrel 导入多个构建指令：

```
# Include a specific Barrel from the 'barrels' directory and multiple Jungles from a Barrel project
base.barrelPath = barrels/MathLibrary.barrel;[MyIconBarrel/roundIcons.jungle;MyIconBarrel/rectangleIcons.jungle]
```

有关 Barrel 及其用法的更多信息，请参阅[可共享库](/connect-iq/core-topics/shareable-libraries/#shareable-libraries)一章。

## 默认 Jungle 文件

Connect IQ SDK 包含一个默认 Jungle 文件，即使没有自定义 Jungle 文件也会应用到项目。它定义了 `base` 限定符，代表项目中包含的所有源文件 (`.mc`) 以及 Connect IQ 项目根目录 `resources` 文件夹中的所有资源文件。它还定义了默认的设备、系列和语言限定符，这些限定符构成上一节所述限定符方案的基础。

构建项目时，会先应用默认 Jungle 文件中的指令，再应用自定义 Jungle 文件中的指令。这样可以通过自定义指令覆盖默认构建设置。

## 在 Visual Studio Code 中使用 Jungles

默认情况下，每个项目都会在项目根目录查找 `monkey.jungle` 文件，并在找到时使用它。如果项目采用不同的目录结构，或希望使用其他 Jungle 文件名，可以通过 *文件 > 首选项 > 设置* 编辑 *Monkey C* 设置来指定 Jungle 文件位置：


![Visual Studio Code 中的 Jungle 文件规范](/connect-iq/resources/programmers-guide/vscode-jungles.png)

## 从命令行使用 Jungles

如果您更喜欢使用 `monkeyc`[Shell 命令](/connect-iq/reference-guides/monkey-c-command-line-setup/#basic-commands)而不是 Visual Studio Code 构建项目，则需要使用 `-f` 选项，并提供由分号 (`;`) 或冒号 (`:`) 分隔的 Jungle 文件列表：

```
monkeyc -o myApp.prg myApp.mc -d fenix5 -f monkey.jungle;monkey2.jungle
```

使用 `-z` 选项指定资源路径、`-x` 选项指定构建排除、`-m` 选项指定 Manifest 文件，以及直接指定源路径的功能已经弃用，并将在未来的 SDK 版本中移除。其工作方式如下：

- 使用 `-f` 选项指定 Jungle 文件时，会先将[默认 Jungle 文件](/connect-iq/reference-guides/jungle-reference/#the-default-jungle-file)应用到项目，然后应用指定的 Jungle 文件。

- 如果 `-f` 选项后提供了多个 Jungle 文件，则列表中最后一个 Jungle 文件的构建指令优先级最高。

- 如果未指定资源或源代码选项，编译器会尝试将[默认 Jungle 文件](/connect-iq/reference-guides/jungle-reference/#the-default-jungle-file)应用到项目中。

- 不允许同时使用 `-f` 选项和任何已弃用的选项，否则会导致编译错误。


项目清单文件必须在通过命令行传递的 Jungle 文件中指定，任何 Jungle 文件都可以包含此声明。

```
project.manifest = manifest.xml
```

提供的 Jungle 文件集合中只能定义一个清单文件。在 Jungle 文件中使用相对路径时，路径相对于该 Jungle 文件所在目录解析。`default.jungle` 中的相对路径则相对于找到的清单文件所在目录解析。

**注意：**使用 `-m`、`-x`、`-z`，或在命令行提供源文件的旧项目会触发编译器警告。

如果找到多个 Manifest，其中一个必须替换并吸收其他 Manifest 的配置，才能成为最终使用的 Manifest。
