---
title: "Hello Monkey C!"
---
# 你好，Monkey C！

![](/connect-iq/resources/programmers-guide/smart-monkey.png)

学习 Monkey C 最好的方式就是直接动手实践。让我们来看看表盘的 application 对象：

```java
using Toybox.Application as App;
using Toybox.System;

class MyProjectApp extends App.AppBase {

    // onStart() 在应用启动时调用
    function onStart(state) {
    }

    // onStop() 在应用退出时调用
    function onStop(state) {
    }

    // 在此返回应用的初始视图
    function getInitialView() {
        return [ new MyProjectView() ];
    }
}
```

如果这看起来熟悉且不具威胁性，那就对了。Monkey C 旨在成为你不知不觉中已经知道的语言。

顶部是一个 using 语句，类似于 C++ 的 `using` 语句，或 Java™、Ruby、Python™ 中的 `import`。`using` 语句将模块词法地引入我们的命名空间。在 `using` 子句之后，我们可以通过其简写名称（在本例中为 `System`）来引用模块。`Toybox` 是 Monkey C 系统模块的根模块；所有好玩的东西都在里面。

要打印值到调试控制台，请使用：

```typescript
System.println( "Hello Monkey C!" );
```

`System` 引用我们通过 `using` 语句导入的 `Toybox.System` 模块。与 Java 命名空间不同，Monkey C 中的模块是静态对象，可以包含函数、类和变量。`println()` 函数对于 Java 程序员来说应该很熟悉——它打印字符串并自动添加新行。`System` 模块有很多有用的函数：

-   `print` 和 `println` 将输出发送到控制台

-   `getTimer` 返回当前毫秒计时器。该值是一个 32 位整数，表示系统运行的毫秒数。该值可用于计时，但允许回绕。

-   `getSystemStats` 提供来自运行时系统的统计信息

-   `exit` 将终止您的应用

-   `error` 将在记录错误消息的同时退出您的应用


## 与其他语言的区别

如意大利语和西班牙语源自拉丁语一样，Monkey C 大量借鉴了其他流行语言。C、Java™、JavaScript、Python™、Lua、Ruby 和 PHP 都影响了 Monkey C 的设计。如果您熟悉这些语言中的任何一种，Monkey C 应该很容易上手。

### Java

与 Java 类似，Monkey C 编译成由虚拟机解释的字节码。也与 Java 类似，所有对象都在堆上分配，并且虚拟机清理内存（Java 通过垃圾回收，Monkey C 通过引用计数）。与 Java 不同，Monkey C 没有基本类型——整数、浮点数和字符都是对象。这意味着原始类型可以像其他对象一样拥有方法。

虽然 Java 是静态类型语言，但 Monkey C 是[鸭子类型](https://en.wikipedia.org/wiki/Duck_typing)。在 Java 中，开发者必须声明函数的所有参数类型，并声明返回值类型。Java 编译器在编译时检查这些以确保类型安全。鸭子类型的概念是"如果它走起来像鸭子，叫起来像鸭子，那么它就是鸭子"。例如：

```typescript
function add( a, b ) {
    return a + b;
}

function thisFunctionUsesAdd() {
    var a = add( 1, 3 ); // 返回 4
    var b = add( "Hello ", "World" ); // 返回 "Hello World"
}
```

Monkey C 编译器不验证类型安全，如果函数处理不当方法，则会引发运行时错误。

Monkey C 模块的作用与 Java 包相似，但与包不同，模块可以包含变量和函数。静态方法存在于模块中而不是特定类中是很常见的。

### Lua/JavaScript

JavaScript 或 Lua 与 Monkey C 的主要区别在于 Monkey C 中的函数不是第一类的。在 JavaScript 中，可以将函数传递给处理回调：

```javascript
function wakeMeUpBeforeYouGoGo() {
    // 处理完成
}

// 执行长时间运行任务，并在完成后传递回调进行调用。
doLongRunningTask( wakeMeUpBeforeYouGoGo );
```

在 Lua 中，要创建对象，您需要将函数绑定到哈希表：

```lua
function doSomethingFunction( me ) {
    // 在这里做一些事情
}

// MyObject 的构造函数
function newMyObject() {
    local result = {};
    result["doSomething"] = doSomethingFunction;
}
```

这两种技术在 Monkey C 中都不起作用，因为函数绑定到创建它们的对象。

要在 Monkey C 中创建回调，请创建一个 *Method 对象*。Method 对象是函数与其起源的对象实例或模块的组合。

### Ruby、Python 和 PHP

Ruby 和 Python 中的对象是哈希表，并具有哈希表的许多属性。可以在运行时将函数和变量添加到对象中。

Monkey C 对象已编译，不能在运行时修改。必须在本地函数、类实例或父模块中声明所有变量才能使用它们。

导入模块时，模块内的所有类都必须通过其父模块进行引用。您导入的是模块，而不是类进入您的命名空间。

这与猴子打字不同，其中一千只猴子在无限时间内写出莎士比亚的作品。
