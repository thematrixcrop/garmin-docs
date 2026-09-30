---
title: "Exceptions and Errors"
---
# 异常和错误

子C支持对可恢复的非致命错误进行结构化例外处理.Java和JavaScript开发人员应该熟悉这个语法:

```java
try {
    // 要执行的代码
}
catch( ex instanceof AnExceptionClass ) {
    // 处理 AnExceptionClass 的抛出
}
catch( ex ) {
    // 捕获所有异常
}
finally {
    // 要执行的代码
}
```

您可以使用`throw`关键字来做一个例外.

##创造一个例外

如果您正在创建自己的例外,请遵循以下规则:

-   扩展 `Toybox.Lang.Exception`

- 在初始化器中初始化超级类

- 将字符串消息分配给`mMessage`成员变量


例如,应用程序特定的例外可以定义如下:

```typescript
class AppSpecificException extends Lang.Exception {
    //! 构造函数
    //! @param msg 解释原因的消息
    function initialize(msg) {
        Exception.initialize();
        self.mMessage = msg;
    }
}
```

## 错误

由于 Monkey C 使用动态打字,因此编译器无法检查许多错误.如果错误的严重程度足够高,它将导致致命的API错误,并导致您的应用程序在运行时终止.这些错误无法被捕获.

无限的排列

```
  An attempt is being made to reference an array outside of its allocated bounds
```

循环依赖

在模块或对象的依赖图中存在循环,阻止模块或对象的构建

通信错误

[低功耗蓝牙](https://en.wikipedia.org/wiki/Bluetooth_low_energy)通信中发生错误

找不到文件

应用文件无法找到,通常是试图从应用文件中加载资源时引起的

非法帧

堆上的返回地址是腐败的

初始化程序错误

启动器出现错误

无效值

转移到函数或方法的参数是无效的

Null 引用

从零值中请求一个值

忘记了

显示系统内存不再可用于分配

需要权限

尝试使用未经许可的限制 API

堆栈下溢

堆积指针超过了堆积内存限制的底部

Stack Overflow

堆积指针超过了堆积内存限制

找不到符号

尝试访问一个不存在于指定对象或方法中的变量或方法

系统错误

玩具盒API用于致命错误的通用错误

参数过多

一种方法使用过多的参数,目前仅限于10个参数

计时器过多

太多的`Timer::Timer`对象被启动了

意外的类型

表示一个因类型不支持的变量上进行的操作;例如,试图在两个字符串上执行一个位向 OR

未处理的异常

一个`Exception`被扔了,但没有被例外处理器抓住

看门狗已触发

一个子C函数已经执行了太长时间;监护犬阻止 program子C程序通过无限循环挂系统
