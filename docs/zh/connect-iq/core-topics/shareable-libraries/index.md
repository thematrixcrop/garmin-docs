---
title: "Shareable Libraries"
---
# Shareable Libraries

开发人员可以创建自定义的子C库,称为 source子桶,包含源代码和资源信息,可以轻松共享在Connect IQ项目中.

子桶提供了一个简单的方法来存储和重复使用开发人员发现有用的共同代码和资源.例如,许多开发人员希望快速计算日出或日落时间的方法.使用 Barr子桶,开发人员可以存储此代码与其他共同代码一起,并在有用时将其拉入其各种项目中.这节省了时间和精力,使开发人员能够拥有最大的创造力.

##做一个子

从视觉工作室代码,Barrels可以作为一个新的项目类型创建:

1. 使用*Ctrl + Shift + P* (*在Mac上命令 + Shift + P*) 调用命令

2. 输入"新项目"并选择*子C:新项目*

3. 当被*设置项目名称* 提示时,输入您的新项目名称

4. 选择项目类型 *子桶*

5. 选择最低 API 级别

6. 设置您的新项目


Once the project is created, you can edit your supported products and permissions in the *manifest.xml*. See [Editing the 支持ed Products](/connect-iq/connect-iq-basics/your-first-app/#editing-the-supported-products) 更多信息. A specific check is in place to ensure that developers cannot have a Barrel with the name "Toybox". The Barrel has now been created—now it's time to fill it!

开发人员可以将桶作为定制模块,实际上它们应该是这样设置的:

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

Developers can use annotations to denote sub-modules within their Barrels. Sub-modules with annotations (i.e. the `(:Bars)` annotation above) allow developers to import certain sections of code without importing the entire Barrel. If a module directly below the namespace is found at compile time that is not decorated with an annotation, a warning will be generated. A module lacking an annotation that is found within a module decorated with an annotation will also generate a warning (i.e. `AlsoEmpty` module above). See 更多信息 on how to include Barrels and specific annotations.

对于桶项目的表格还必须配置说明:

1. 双击桶`manfest.xml`

2. 调用命令,然后运行*子C:编辑注释*命令

3.  Select *Add Annotation*

4.  Input your annotation name


这些注释将可用于桶项目.

桶也可以包含资源.资源在桶内创建和保持在正规应用程序相同的格式中,并被定义在XML格式中.查看程序员指南的部分.

编译器将构建资源模块作为桶模块的子模块.例如,在称为`IconLibrary`的桶中,模块将像这样:

```cpp
IconLibrary {                       // Barrel Level
    Rez {                           // Rez Level
        Drawables {                 // Drawables Level
            var myIcon = 123;       // Resource
        }
    }
}
```

开发人员可以通过使用以下语法引用桶内资源:

```cpp
@IconLibrary.Drawables.myIcon
```

这使得开发人员可以轻松地将这些资源带入他们的项目中,而不会发生任何变化.所有由Barrel使用的文件都必须存在于Barrel项目的根目录中,该目录由 manifest.xml文件的目录决定,因为对项目外部文件的进口不支持.

## Barrels and Versions

每个桶都有一个独特的版本ID号码.这遵循与Connect IQ SDK (`Major.Minor.Micro.Quailifier`或`#.#.#.X`) 的相同的编号系统.版本合格符只能由字母,数字和突显组成.

##出口子

Barr子桶由 comp子C编译器包装,以满足源代码的基本语法检查. ** 注:** 虽然子桶提供了代码库的机制,但它们包含了您的 project子项目的所有未修改的源.

要出口你的子桶,请做以下操作:

1. 确保表格文件中指定应用程序支持的所有产品

2. 使用*C:出口项目*命令生成`.barrel`文件.


如果没有错误,桶就准备好使用!

## 如何将桶纳入

为了使用Barrel,开发人员需要将其添加到当前的项目中.这可以通过视觉工作室代码扩展或通过手动编辑一个项目的林和表格文件.

通过视觉工作室代码添加桶子

开发人员可以通过下列命令添加新的桶到他们的项目中:

1. 使用*子C:配置 Bar子桶*命令

2.  Select *Add Monkey Barrel*

3. 选择是否要添加它作为预编译的`.barrel`文件或作为桶项目链接

4. 根据之前的选择,选择预编译的`.barrel`文件或子桶项目`.jungle`文件


桶将自动添加到默认的桶林文件中.明示文件也将更新到这些桶依赖性.如果桶支持注释,这些必须为单个桶进行手动配置,这将将注释部分的桶进口到项目中:

```bash
# All products include the code
# annotated with 'Bars' and 'BarsToo'
# of the 'FooBarrel' barrel
base.FooBarrel.annotations = Bars;BarsToo
```

** 注:** 查看[Build Configuration](/connect-iq/core-topics/build-configuration/#build-configuration)部分,以直接处理" Barr林"配置文件中的桶.

完成后,选定的桶将被添加到您的项目中.

## Using Monkey Barrels

一旦它们被添加到一个项目中,使用桶是直接的和简单的.开发人员不需要将桶进口到源文件中,但如果他们选择使用号的话,他们需要使用语句:

```cpp
// This is a normal Toybox "using" statment
using Toybox.System;

// This sets up an alias for a "submodule" within a barrel
using FooBarrel.Bars as Bars;
```

在这个时候,已建立了号,并且该项目中已提供了桶代码.

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

## Run No Evil and Monkey Barrels

桶可以与 Run No Evil 测试框架结合使用,以测试单独的代码部分.对于 Run No Evil 测试框架的更多信息,开发人员可以参考[Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing)文档.

1.右键点击Barrel项目根文件

2.  Select *Run Tests*


配合正确测试注释的桶代码 (见[Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing)文档),将在 Run No Evil测试框架中进行测试.

## 桶在指挥线

通过命令行可以编译和测试桶.

`barrelbuild`

调用子C桶编译器.就像`monkeyc`一样,`barrelbuild`号调用从多个文件中取代代码,以便将其包含在库 (.桶文件).由于显示文件路径在Barrel的林文件之一中指定,因此需要`-f`参数.

```
> barrelbuild -o <output.barrel> -f <barrel.jungle>
```

`barreltest`

在`.barrel`文件中执行 Run No Evil 测试. 需要一个有效的设备ID的`-d`参数.

```
> barreltest -o <output.barrel> -f <barrel.jungle> -d <device_id>
```

Connect IQ团队为开发人员提供了一些有用的例子.使用这些桶,请访问 Garmin Connect IQ[GitHub repository](https://github.com/garmin/connectiq-apps). 克隆或下载所需的桶,并使用前面讨论的方法之一将它们添加到项目中.
