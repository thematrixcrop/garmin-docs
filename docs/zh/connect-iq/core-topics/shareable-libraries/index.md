---
title: "可共享库"
---
<a id="shareable-libraries"></a>
# 可共享库

开发者可以创建自定义 Monkey C 库，称为 Monkey Barrel，其中包含源代码和资源信息，便于在不同 Connect IQ 项目之间共享。

Monkey Barrel 可以方便地存储和复用有用的通用代码和资源。例如，许多开发者希望快速计算日出或日落时间。借助 Monkey Barrel，可以将这段代码与其他通用代码一起保存，在需要时引入不同项目，从而节省时间和精力，让开发者专注于创造更多内容。

## 创建 Monkey Barrel

在 Visual Studio Code 中，可以将 Barrel 创建为一种新的项目类型：

1.  使用 *Ctrl + Shift + P*（Mac 使用 *Command + Shift + P*）打开命令面板。

2.  输入 “New Project”，选择 *Monkey C: New Project*。

3.  出现 *Set Project Name* 提示时，输入新项目名称。

4.  选择项目类型 *Monkey Barrel*。

5.  选择最低 API 级别。

6.  设置新项目的父目录。


项目创建后，可以在 *manifest.xml* 中编辑支持的产品和权限。更多信息请参阅[编辑支持的产品](/connect-iq/connect-iq-basics/your-first-app/#editing-the-supported-products)。系统会进行专门检查，确保开发者不能将 Barrel 命名为 “Toybox”。Barrel 创建完成后，就可以向其中添加内容了。

可以将 Barrel 看作自定义模块，实际也应按这种方式设置：

```cpp
module FooBarrel {

    (:Bars)           // Notice the annotations above the submodule names
    module Bars {
        // Create a counter var for the "Current Bars"
        var currentBars = 0;

        // Draw a "Bar"
        function drawBar() {
           // . . . draw a super awesome "Bar"
           return Bar;
        }

        // Increment the Bar counter
        function addBar(currentBars) {
           bars = currentBars;
           bars ++;
           return bars;
        }

        // Get the current Bars
        function getCurrentBars() {
            return currentBars;
        }
    }

    (:BarsToo)        // Notice this here too
    module BarsToo {
        function fancyBars() {
            // . . . Do a fancy thing
            return somethingFancy;
        }
    }

    (:Empty)          // An empty annotation
    module Empty {

        // A sub-module without an annotation
        module AlsoEmpty {
        }
    }

    // This module throws an error
    module throwsError {
    }
}
```

可以使用注解标记 Barrel 中的子模块。带注解的子模块（例如上面的 `(:Bars)` 注解）允许开发者只导入代码的特定部分，而不必导入整个 Barrel。如果编译时发现命名空间直接下方的模块没有注解，系统会生成警告。在带注解模块内部发现缺少注解的模块时，也会生成警告（例如上面的 `AlsoEmpty` 模块）。有关如何包含 Barrel 和指定注解的详细信息，请参阅相关文档。

还必须在 Barrel 项目的 Manifest 中配置注解：

1.  双击 Barrel 的 `manifest.xml`。

2.  打开命令面板并运行 *Monkey C: Edit Annotations*。

3.  选择 *Add Annotation*。

4.  输入注解名称。


之后即可在 Barrel 项目中使用这些注解。

Barrel 也可以包含资源。资源在 Barrel 中以与普通应用相同的格式创建和保存，并使用 XML 定义。有关资源的更多信息，请参阅 Programmer's Guide 中的相关章节。

编译器会将资源模块构建为 Barrel 模块的子模块。例如，名为 `IconLibrary` 的 Barrel 会生成如下模块：

```cpp
IconLibrary {                       // Barrel Level
    Rez {                           // Rez Level
        Drawables {                 // Drawables Level
            var myIcon = 123;       // Resource
        }
    }
}
```

可以使用以下语法引用 Barrel 中的资源：

```cpp
@IconLibrary.Drawables.myIcon
```

这样就可以在项目中直接使用这些资源，无需额外修改。Barrel 使用的所有文件都必须位于 Barrel 项目根目录中，该目录由 `manifest.xml` 所在目录确定；系统不支持导入项目外部的文件。

## Barrel 和版本

每个 Barrel 都有唯一的版本 ID，编号方式与 Connect IQ SDK 相同（`Major.Minor.Micro.Qualifier` 或 `#.#.#.X`）。版本限定符只能包含字母、数字和下划线。

## 导出 Monkey Barrel

Monkey C 编译器会打包 Monkey Barrel，以对源代码执行基本的语法检查。**注意：**Barrel 虽然提供了代码库机制，但其中包含 Barrel 项目的全部未修改源代码。

导出 Monkey Barrel 的步骤如下：

1.  确保 Manifest 文件指定了应用支持的所有产品。

2.  使用 *Monkey C: Export Project* 命令生成 `.barrel` 文件。


如果没有错误，Barrel 就可以使用了。

## 如何包含 Barrel

要使用 Barrel，需要将其添加到当前项目。可以通过 Visual Studio Code 扩展添加，也可以手动编辑项目的 Jungle 和 Manifest 文件。

### 使用 Visual Studio Code 向项目添加 Barrel

可以通过命令面板向项目添加新的 Barrel：

1.  使用 *Monkey C: Configure Monkey Barrel* 命令。

2.  选择 *Add Monkey Barrel*。

3.  选择将其作为预编译的 `.barrel` 文件添加，还是链接到 Barrel 项目。

4.  根据上一步的选择，选择预编译的 `.barrel` 文件或 Barrel 项目的 `.jungle` 文件。


Barrel 会自动添加到默认的 Barrel Jungle 文件中，Manifest 文件也会更新这些 Barrel 依赖项。如果 Barrel 支持注解，必须针对各个 Barrel 手动配置注解，以便将带注解的部分导入项目：

```bash
# All products include the code
# annotated with 'Bars' and 'BarsToo'
# of the 'FooBarrel' barrel
base.FooBarrel.annotations = Bars;BarsToo
```

**注意：**如需直接在 Jungle 配置文件中处理 Barrel，请参阅[构建配置](/connect-iq/core-topics/build-configuration/#build-configuration)部分。

完成后，选定的 Barrel 就会添加到项目中。

## 使用 Monkey Barrel

将 Barrel 添加到项目后，使用它们非常直接。无需在源文件中使用 `using` 语句导入 Barrel；但如果要为 Barrel 使用别名，则需要使用 `using` 语句：

```cpp
// This is a normal Toybox "using" statment
using Toybox.System;

// This sets up an alias for a "submodule" within a barrel
using FooBarrel.Bars as Bars;
```

此时别名已经建立，Barrel 代码也已在项目中可用。

```cpp
// This is a normal Connect IQ call
System.println("Cool Bars");

// This is a general Barrels call (No using statment needed)
FooBarrel.BarsToo.fancyBars();

// This is a specific Barrels call (Alias)
var globalBars = Bars.getCurrentBars();

// This is a call to use a resource held in a Barrel
var icon = UserInterface.loadResource(IconLibrary.Rez.Drawables.myIcon)
```

## 使用 Run No Evil 测试 Monkey Barrel

可以将 Barrel 与 Run No Evil 测试框架结合，测试独立的代码片段。有关 Run No Evil 测试框架的更多信息，请参阅 [Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing) 文档。

1.  右键点击 Barrel 项目根文件夹。

2.  选择 *Run Tests*。


带有正确测试注解的 Barrel 代码（请参阅 [Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing) 文档）会在 Run No Evil 测试框架中运行。

## 在命令行中使用 Barrel

可以通过命令行编译和测试 Barrel。

`barrelbuild`

调用 Monkey C Barrel 编译器。与 `monkeyc` 类似，`barrelbuild` 会从多个文件读取代码，并将其包含到库（`.barrel` 文件）中。由于 Manifest 文件路径在 Barrel 的一个 Jungle 文件中指定，因此必须提供 `-f` 参数。运行不带参数的 `barrelbuild`，可以查看全部参数定义。

```
> barrelbuild -o <output.barrel> -f <barrel.jungle>
```

`barreltest`

在 `.barrel` 文件上执行 Run No Evil 测试。需要使用 `-d` 参数指定有效的设备 ID。

```
> barreltest -o <output.barrel> -f <barrel.jungle> -d <device_id>
```

Connect IQ 团队提供了一些有用的示例 Barrel。要使用这些 Barrel，请访问 Garmin Connect IQ [GitHub 仓库](https://github.com/garmin/connectiq-apps)，克隆或下载所需的 Barrel，然后使用上面介绍的方法之一将它们添加到项目中。
