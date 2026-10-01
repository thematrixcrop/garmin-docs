---
title: "Exceptions and Errors"
---
<a id="exceptions-and-errors"></a>
# 异常和错误

Monkey C 支持对可恢复的非致命错误进行结构化异常处理。Java 和 JavaScript 开发者应该会熟悉以下语法：

```java
try {
    // Code to execute
}
catch( ex instanceof AnExceptionClass ) {
    // Code to handle the throw of AnExceptionClass
}
catch( ex ) {
    // Code to catch all execeptions
}
finally {
    // Code to execute when
}
```

可以使用 `throw` 关键字抛出异常。

## 创建异常

如果要创建自定义异常，请遵循以下规则：

- 继承 `Toybox.Lang.Exception`。
- 在初始化函数中初始化超类。
- 将字符串消息赋给 `mMessage` 成员变量。

例如，可以按如下方式定义应用专用异常：

```typescript
class AppSpecificException extends Lang.Exception {
    //! Constructor
    //! @param msg Message explaining cause
    function initialize(msg) {
        Exception.initialize();
        self.mMessage = msg;
    }
}
```

## 错误

由于 Monkey C 使用动态类型，编译器无法检查许多错误。如果错误严重到一定程度，系统会抛出致命 API 错误，并在运行时终止应用。这些错误无法通过异常处理器捕获。

**数组越界**

尝试访问数组已分配范围之外的元素。

**循环依赖**

模块或对象的依赖关系图中存在循环，导致模块或对象无法构造。

**通信错误**

[Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) 通信发生错误。

**找不到文件**

找不到应用文件，通常是因为尝试从应用文件中加载资源。

**非法栈帧**

栈上的返回地址已损坏。

**初始化错误**

初始化函数发生错误。

**无效值**

传给函数或方法的参数无效。

**空引用**

尝试从空值读取数据。

**内存不足**

系统没有更多可用于分配的内存。

**需要权限**

尝试在没有权限的情况下使用受限 API。

**栈下溢**

栈指针越过栈内存限制的底部。

**栈溢出**

栈指针越过栈内存限制的顶部。

**找不到符号**

尝试访问指定对象或方法中不存在的变量或方法。

**系统错误**

Toybox API 用于表示致命错误的通用错误。

**参数过多**

方法使用了过多参数，目前限制为 10 个参数。

**计时器过多**

为目标设备启动的 `Timer::Timer` 对象过多。

**类型错误**

对变量执行了其类型不支持的操作，例如尝试对两个字符串执行按位 OR。

**未处理的异常**

抛出了 `Exception`，但没有被异常处理器捕获。

**看门狗触发**

Monkey C 函数执行时间过长；看门狗会阻止 Monkey C 程序因无限循环而挂起系统。
