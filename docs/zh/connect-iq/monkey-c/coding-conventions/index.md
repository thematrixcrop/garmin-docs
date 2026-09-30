---
title: "编码约定"
---
<a id="coding-conventions"></a>
# 编码约定

以下是 Monkey C 代码的编写建议。

## 命名

- 模块和类使用首字母大写的驼峰命名法。
- 函数使用首字母小写的驼峰命名法。
- 私有类成员变量使用驼峰命名法，首字符为下划线（`_`），后接小写字母。
- 公有类成员变量使用首字母小写的驼峰命名法。
- 模块变量应使用首字母小写的驼峰命名法。
- 枚举值必须使用共同前缀，例如 *COLOR_RED*、*COLOR_BLUE*。
- 对于 POMO（Plain Old Monkey C Objects），可以将所有成员声明为公有成员。

## 源代码

- 每个 Monkey C 源文件放置一个类。
- Monkey C 代码的每级缩进使用四个空格。Monkey C editor 会自动将空格转换为制表符，并删除行尾空白。
- 定义模块、类、函数和枚举时，将左大括号放在定义所在行；右大括号与定义的首字符对齐。

## 定义

- 尽量避免使用纯全局变量。
- 模块并非纯粹的词法容器，而且会产生运行时内存开销，因此可以将类定义放在全局模块中。
- 避免在类定义中使用公有静态成员；应将这些定义移到父模块中。
- 在类的 `initialize` 函数第一行始终调用超类的 `initialize`。

## 示例

下面是一个示例：

```cpp
class SampleName extends Toybox.Application.AppBase
{
    public var publicVar;
    private var _privateVar;

    function initialize() {
        AppBase.initialize();
    }
    // onStart() 在应用启动时调用
    function onStart(state) {
    }

    // onStop() 在应用退出时调用
    function onStop(state) {
    }

    // 在此返回应用的初始视图
    function getInitialView(){
        return [new SampleNameView(), new SampleNameDelegate()];
    }
 }
```
