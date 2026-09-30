---
title: "Objects, Modules, and Memory"
---
# 对象、模块和内存

类允许数据和操作在对象上被绑定在一起.在子C中,变量,函数和其他类可以在类中定义.

## 构造函数

当用`new`关键词实时化一个对象时,将内存分配到`initialize`方法:

```typescript
class Circle
{
    protected var mRadius;
    public function initialize( aRadius ) {
      mRadius = aRadius;
    }
}

function createCircle() {
    var c = new Circle( 1.5 );
}
```

在方法实现中,您可以使用`self`或`me`关键字来引用您的当前实例.

```java
class A
{
    public var x;
    public var y;
    public function initialize() {
        me.x = "Hello"; // 设置当前实例的 x 变量
        self.y = "Hello"; // 设置当前实例的 y 变量
    }
}
```

要实现嵌套类的内部类,首先必须实现外部类.然而,与Java不同,子C中的嵌套类没有访问附加类的成员.

## 继承

子C使用`extends`关键字来支持类继承:

```typescript
import Toybox.System;

class A
{
    function print() {
        System.print( "Hello!" );
    }
}

class B extends A
{

}

function usageSample() {
    var inst = new B();
    inst.print();           // 打印 "Hello!"
}
```

通过使用超级类的符号来调用超级类的方法:

```java
import Toybox.System;

class A
{
    function print() {
        System.print( "Hello!" );
    }
}

class B extends A
{
    function print() {
        // 调用父类实现
        A.print();

        // 修改输出
        System.println( "Hola!" );
    }
}

function usageSample() {
    var inst = new B();
    inst.print();           // 打印 "Hello! Hola!"
}
```

## 数据隐藏

班子成员有三级接入:`public`,`protected`和`private`.

`public`是默认的,但它也可以明确指定.当使用`public`访问修改器为enum,变量或函数时,这些成员可见于所有其他类.

`private`修改器指定该成员只能在自己的类中访问.

`protected`修改器指定该成员只能通过自己的类或其子类访问.`hidden`关键字与`protected`关键字同义.子C版本 1.0仅有两个可见性水平:`public`和`hidden`.`hidden`仍然用于反向兼容性目的,但可以被认为是`protected`相同的.

```typescript
import Toybox.System;

class Foo
{
    public var publicVar;
    protected var _protectedVar
    private var _privateVar;

    public function initialize() {
        publicVar = "a";
        _protectedVar = "b";
        _privateVar = "c";
    }
}

class Bar extends Foo {
    public function initialize() {
        // 初始化父类
        Foo.initialize();
        publicVar = "b";
        _protectedVar = "c";
        // 错误 - 无法访问私有成员
        _privateVar = "d";
    }
}

function usageSample() {
    var v = new Foo();
    System.println( v.publicVar );
    // 错误 - 无法访问受保护成员
    System.println( v._protectedVar );
    // 错误 - 无法访问私有成员
    System.println( v._privateVar );
}
```

## 多态

大多数对象导向语言都支持*多形函数*的概念,其中函数可以根据输入参数数量和类型具有多个定义.部分原因是由于它的型性质,子C不支持这种运行时间多形.

由于函数参数是类型,因此可以使用`instanceof`运算器实现某种多形性水平:

```typescript
import Toybox.Lang;

function aPolymorphicFunction(a) {
    switch(a) {
        case instanceof String:
            return doTheStringVersion(a);
        case instanceof Number:
        case instanceof Long:
            return doTheNumericVersion(a);
        default:
            throw new UnexpectedTypeException();
    }

}
```

如果您的函数需要预期多个输入,另一个模式是使用选项词典.您可以使用符号来定义键来最大化处理效率:

```typescript
x = aPolymorphicFunction({
    :param1=>"Foo",
    :param2=>"Bar"
})
```

这种模式是很好的,如果你想让一个API在未来扩展的空间.

## 强引用和弱引用

Monkey C 使用引用计数，这意味着当引用某块内存的对象数量降至零时，运行时系统会释放该内存。引用计数可以快速回收内存，这在低内存环境中很重要。引用计数的缺点是*循环引用*：当引用链形成环时，就会发生循环引用。例如，假设对象 C 引用对象 A，对象 A 引用对象 B，*并且*对象 B 又引用对象 A。


![presentation](/connect-iq/resources/programmers-guide/weak-reference-1.png)

一段时间后，C 被邀请加入另一组对象，因此它放弃了对 A 的引用，转而与真正需要的对象保持联系。


![弱引用](/connect-iq/resources/programmers-guide/weak-reference-2.png)

这形成了一个无处可去的循环引用。此时 A 和 B 所占用的内存本应释放，但由于它们相互引用，因此都仍保有引用计数。A 和 B 使用的内存无法被其他对象使用。

有时 B 确实需要引用 A。此时可以使用*弱引用*。弱引用会保留对对象的引用，但不会增加引用计数，因此引用可以被断开，应用也能处理对象被释放的情况。


![弱引用](/connect-iq/resources/programmers-guide/weak-reference-3.png)

为了创建一个弱引用,你使用`weak()`方法. 弱是`Lang.Object`中的一种方法,可用于所有子C对象.

```java
// 我本想提到 “Hans and Franz”，但
// 某些广告让他们显得不酷了。
var weakRef = obj.weak()
```

如果您正在调用`weak`在不可变的类型之一 (`Number`,`Float`,`Char`,`Long`,`Double`,`String`),则它将返回对象本身.否则它将返回一个[Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)实例.

```typescript
//! 弱引用是对另一个对象的松散绑定引用。
//! 如果所有强引用都已释放，get() 方法将返回 null。
//! 这使开发者能够避免循环引用。
//! @since 1.2.0
class WeakReference
{
    //! 返回引用是否仍然有效。
    //! @return 如果对象仍然有效则为 true，否则为 false。
    //!    当你死去时，我仍然活着
    //!    我感觉棒极了，而我仍然活着
    function stillAlive();

    //! 获取被引用的对象。
    //! @return 被引用的对象；如果不再有效则为 null。
    function get();
}
```

您可以使用`stillAlive`方法来检查引用是否已清除.使用`get`创建对象的强烈引用.只保持强烈引用在您需要的范围内!

```java
// 这是一次胜利……
if( weakRef.stillAlive() ) {
    var strongRef = weakRef.get();
    strongRef.doTheThing();
}
```

### 句柄和堆分配

从2.4.x版本开始,Connect IQ使用动态分配的堆积用于内存手柄.每个独特的对象都占据了一个内存手柄.对象引用没有独特的分配,只引用对象的内存手柄.Connect IQ的旧版本对设备定义的对象具有较小的静态限制.在任何版本中达到对象限制将导致运行时间错误.

## 模块

Monkey C 中的模块允许对类和函数进行作用域限定。与 Java 包不同，Monkey C 模块具有许多与类相同的属性。您可以在模块级别声明变量、函数、类和其他模块：

```java
module MyModule
{
    class Foo
    {
        var mValue;
    }
    var moduleVariable;
}

function usageSample() {
    MyModule.moduleVariable = new MyModule.Foo();
}
```

然而,与子C类不同,模块没有继承或隐藏数据的概念 (模块不支持`extends`,`private`和`protected`关键字).

### Import 和 Using 语句

您可以使用`import`关键字将模块带入您的范围级别.使用`import`时,它将 *模块后音和模块中的所有类型带入类型命名空间.* 这使得模块中的类型可以访问而不用模块后音,从而更容易打字.函数调用仍然需要访问模块后音.

```typescript
import Toybox.Lang;
import Toybox.System;

// import 让你可以告别
// 模块前缀
var globalX as Number or String = 0;

function hasANumber() {
    globalX = 2;  // 允许
    globalX = "2"; // 允许
    // 代码中仍然需要前缀
    System.println("globalX = " + globalX);
}
```

您还可以使用`using`关键字将模块带入您的范围水平.`using`允许通过符号将模块导入另一个类或模块:

```java
using Toybox.System;

function foo() {
    System.print( "Hello" );
}
```

`as`条款提供了一个方法来将模块分配到范围内的不同名称. 这对于缩短模块名称或当您简单地不同意我们的命名方案时有用:

```java
using Toybox.System as Sys;

function foo() {
    Sys.print( "Hello" );
}
```

在`using`语句中,它们的定义范围为类或模块.

`import`将模块名称和类名称带入命名空间,而`using`只将模块名称带入命名空间.如果你使用[Monkey Types](/connect-iq/monkey-c/monkey-types/#monkey-types),你应该使用`import`独家,因为它将节省你很多冗余的模块引用.最后,`as`条款仅支持`using`语句.

## 作用域

子C是一个通过消息的语言.当调用函数时,虚拟机在运行时进行搜索操作,以找到正在调用的函数.以下是它将搜索的等级:

1. 班级成员

2.超级级级成员

3. 类的静态成员

4. 主模块的成员,以及全球名称空间的主模块

5. 超级级级的母模块成员到全球名称空间

6. 主模块的公共静态成员,至全球命名空间

7. 超级级级的母模块的公共静态成员到全球名称空间


例如,如果函数`a()`在`Child()`的实例上被调用,它将能够访问非成员函数`b()`,`c()`和`d()`当:

-`b()`是对象的母模块的成员

-`c()`是对象的静态成员

-`d()`是母模块母模块的成员,也称为全球模块


下面的代码试图澄清:

```typescript
import Toybox.System;

// 全局可见的函数
function d() {
    System.print( "this is D!" );
}

module Parent
{
    // 模块函数。
    function b() {
        System.print( "This is B!" );
        d(); // 调用全局可见的函数
    }

    // Parent 模块的子类
    class Child
    {
        // Child 的实例方法
        function a() {
            System.print( "This is A!" );
            b(); // 调用父模块中的函数
            c(); // 调用类中的静态函数。
            d(); // 调用全局可见的函数。
        }

        // Child 的静态函数。
        // 注意，静态方法无法调用实例方法，但仍然可以
        // 访问父模块。
        static function c() {
            System.print( "This is C!" );
            b(); // 调用父模块中的方法。
            d(); // 调用全局可见的函数
        }
    }
}
```

有时你想从全球名字空间运行搜索,而不是你的当前范围.你可以使用`$`的模糊符号来完成这项搜索.

```java
function helloFunction() {
    System.println("Hello Hello");
}

class A {
     function helloFunction() {
        System.println("Every time I say goodbye you say hello");
     }

    function b() {
        // 调用全局 helloFunction
        $.helloFunction();
        // 调用实例 helloFunction
        helloFunction();
    }
}
```

如果您指的是一个全球变量,则使用bling可以提高运行时间的性能:

```java
var globalScopedVariable = "Global String";

module A
{
    class B
    {
        function c() {
            // 为查找 globalScopedVariable，VM 将在运行时搜索：
            //     B 实例
            //     B 实例的父类 Toybox.Lang.Object
            //     A 模块
            //     A 模块的父级全局模块
            // 最终找到 globalScopedVariable。
            System.println(globalScopedVariable);
            // 这只会在全局命名空间中搜索 globalScopedVariable。
            // 多亏了 bling！
            System.println($.globalScopedVariable);
        }
    }
}
```

由于子C是动态打字的,所以引用一个全球变量将在最终找到全球变量之前搜索对象的继承结构和模块层次结构.使用 symbol符号,我们可以直接搜索全球.

这并不是发生在作者身上.

别忘了把你的子和巧合相匹配,你都不能够了.
