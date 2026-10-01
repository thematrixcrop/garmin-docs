---
title: "对象、模块和内存"
---
<a id="objects-modules-and-memory"></a>
# 对象、模块和内存

对象使用 `class` 关键字创建。类可以将数据和操作绑定到对象上。在 Monkey C 中，可以在类中定义变量、函数和其他类。

## 构造函数

使用 `new` 关键字实例化对象时，系统会分配内存并调用 `initialize` 方法：

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

在方法实现中，可以使用 `self` 或 `me` 关键字引用当前实例。

```java
class A
{
    public var x;
    public var y;
    public function initialize() {
        me.x = "Hello"; // Set current instance x variable
        self.y = "Hello"; // Set current instance y variable
    }
}
```

要实例化嵌套类中的内部类，必须先实例化外部类。不过，与 Java 不同，Monkey C 中的嵌套类无法访问其外部类的成员。

## 继承

Monkey C 使用 `extends` 关键字支持类继承：

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
    inst.print();           // Prints "Hello!"
}
```

使用父类名称调用父类的方法：

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
        // Call the super class implementation
        A.print();

        // Amend the output
        System.println( "Hola!" );
    }
}

function usageSample() {
    var inst = new B();
    inst.print();           // Prints "Hello! Hola!"
}
```

## 数据隐藏

类成员有三个访问级别：`public`、`protected` 和 `private`。

`public` 是默认级别，也可以显式指定。将 `public` 访问修饰符用于 enum、变量或函数时，这些成员对所有其他类可见。

`private` 修饰符表示成员只能在所属类中访问。

`protected` 修饰符表示成员只能由所属类或其子类访问。`hidden` 关键字与 `protected` 同义。Monkey C 1.0 只有 `public` 和 `hidden` 两个可见性级别；为保持向后兼容，仍保留 `hidden`，但可以将其视为 `protected`。

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
        // Initialize the parent
        Foo.initialize();
        publicVar = "b";
        _protectedVar = "c";
        // Error - can't access private member
        _privateVar = "d";
    }
}

function usageSample() {
    var v = new Foo();
    System.println( v.publicVar );
    // Error - cannot access protected member
    System.println( v._protectedVar );
    // Error - cannot access private member
    System.println( v._privateVar );
}
```

## 多态

大多数面向对象语言都支持*多态函数*，即根据输入参数的数量和类型为同一个函数提供多个定义。由于 Monkey C 采用鸭子类型等原因，它不支持这种运行时多态。

由于函数参数采用鸭子类型，可以使用 `instanceof` 运算符实现一定程度的多态：

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

如果函数需要接收多个输入，可以使用选项字典模式。使用符号定义键，还能提高处理效率：

```typescript
x = aPolymorphicFunction({
    :param1=>"Foo",
    :param2=>"Bar"
})
```

如果希望未来为 API 留出扩展空间，这种模式很有用。

## 强引用和弱引用

Monkey C 使用引用计数，这意味着当引用某块内存的对象数量降至零时，运行时系统会释放该内存。引用计数可以快速回收内存，这在低内存环境中很重要。引用计数的缺点是*循环引用*：当引用链形成环时，就会发生循环引用。例如，假设对象 C 引用对象 A，对象 A 引用对象 B，*并且*对象 B 又引用对象 A。


![presentation](/connect-iq/resources/programmers-guide/weak-reference-1.png)

一段时间后，C 被加入另一组对象，因此它放弃了对 A 的引用，转而持有真正需要的对象。


![弱引用](/connect-iq/resources/programmers-guide/weak-reference-2.png)

这形成了一个无处可去的循环引用。此时 A 和 B 所占用的内存本应释放，但由于它们相互引用，因此都仍保有引用计数。A 和 B 使用的内存无法被其他对象使用。

有时 B 确实需要引用 A。此时可以使用*弱引用*。弱引用会保留对对象的引用，但不会增加引用计数，因此引用可以被断开，应用也能处理对象被释放的情况。


![弱引用](/connect-iq/resources/programmers-guide/weak-reference-3.png)

要创建弱引用，请使用 `weak()` 方法。`weak()` 是 `Lang.Object` 中的方法，所有 Monkey C 对象都可以使用。

```java
// I would make a "Hans and Franz" reference but I
// think certain advertising has made them uncool.
var weakRef = obj.weak()
```

如果对不可变类型（`Number`、`Float`、`Char`、`Long`、`Double`、`String`）调用 `weak()`，它会返回对象本身；否则会返回一个 [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/) 实例。

```typescript
//! A weak reference is a loosely bound reference to
//! another object. If all strong references have been
//! freed, the get() method will return null.
//! This allows the developer to avoid circular references.
//! @since 1.2.0
class WeakReference
{
    //! Return if the reference is still alive.
    //! @return true if object is still alive, false otherwise.
    //!    When you are dead I will be STILL ALIVE
    //!    I feel fantastic and I am STILL ALIVE
    function stillAlive();

    //! Return the referenced object.
    //! @return The referenced object, or null if no longer valid.
    function get();
}
```

可以使用 `stillAlive` 方法检查引用是否仍然有效，使用 `get` 创建对象的强引用。只在需要的范围内保留强引用！

```java
// We would make a "Hans and Franz" reference here but certain advertising has probably made them uncool.
if( weakRef.stillAlive() ) {
    var strongRef = weakRef.get();
    strongRef.doTheThing();
}
```

### 句柄和堆分配

从 2.4.x 版本开始，Connect IQ 使用动态分配的堆来存储内存句柄。每个独立对象占用一个内存句柄；对象引用不会单独分配内存，只引用对象的内存句柄。旧版本 Connect IQ 对设备定义的对象有较小的静态限制。在任何版本中达到对象数量限制都会导致运行时错误。

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

与 Monkey C 类不同，模块没有继承或数据隐藏的概念（模块不支持 `extends`、`private` 和 `protected` 关键字）。

### `import` 和 `using` 语句

可以使用 `import` 关键字将模块引入当前作用域。使用 `import` 后，*模块后缀及模块中的所有类型都会进入类型命名空间*，因此可以不写模块后缀访问类型，更易于添加类型标注。调用函数仍然需要模块后缀。

```typescript
import Toybox.Lang;
import Toybox.System;

// Import lets you say goodbye to
// module prefixes
var globalX as Number or String = 0;

function hasANumber() {
    globalX = 2;  // Allowed
    globalX = "2"; // Allowed
    // Still require prefixes in code
    System.println("globalX = " + globalX);
}
```

也可以使用 `using` 关键字将模块引入当前作用域。`using` 允许通过符号将模块导入其他类或模块：

```java
using Toybox.System;

function foo() {
    System.print( "Hello" );
}
```

`as` 子句可以为作用域内的模块指定别名，适合缩短模块名称或采用不同的命名方案：

```java
using Toybox.System as Sys;

function foo() {
    Sys.print( "Hello" );
}
```

在 `using` 语句中，模块中的定义会在当前类或模块作用域内可用。

`import` 会将模块名称和类名称引入命名空间，而 `using` 只引入模块名称。如果使用 [Monkey Types](/connect-iq/monkey-c/monkey-types/#monkey-types)，建议只使用 `import`，这样可以减少冗余的模块引用。最后，`as` 子句仅支持 `using` 语句。

## 作用域

Monkey C 是一种基于消息的语言。调用函数时，虚拟机会在运行时搜索要调用的函数，顺序如下：

1. 类成员

2. 超类成员

3. 类的静态成员

4. 父模块的成员，以及全局命名空间中的父模块

5. 沿父模块链向上搜索，直到全局命名空间

6. 父模块的 public 静态成员，直到全局命名空间

7. 沿父模块链向上搜索 public 静态成员，直到全局命名空间


例如，如果在 `Child` 实例上调用函数 `a()`，它可以访问非成员函数 `b()`、`c()` 和 `d()`，前提是：

- `b()` 是对象父模块的成员。

- `c()` 是对象的静态成员。

- `d()` 是父模块的父模块的成员，也称为全局模块。


下面的代码试图澄清:

```typescript
import Toybox.System;

// A globally visible function
function d() {
    System.print( "this is D!" );
}

module Parent
{
    // Module function
    function b() {
        System.print( "This is B!" );
        d(); // May call a globally visible function
    }

    // A subclass of the Parent module
    class Child
    {
        // Child instance method
        function a() {
            System.print( "This is A!" );
            b(); // May call a function in our parent module
            c(); // May call a static function within the class
            d(); // May call a globally visible function
        }

        // Child static function
        // Static methods can't call instance methods but still have access
        // to parent modules.
        static function c() {
            System.print( "This is C!" );
            b(); // May call a function in our parent module
            d(); // May call a globally visible function
        }
    }
}
```

有时需要从全局命名空间搜索，而不是当前作用域。可以使用 `$` bling 符号执行此搜索。

```java
function helloFunction() {
    System.println("Hello Hello");
}

class A {
     function helloFunction() {
        System.println("Every time I say goodbye you say hello");
     }

    function b() {
        // Call the global helloFunction
        $.helloFunction();
        // Call the instance helloFunction
        helloFunction();
    }
}
```

引用全局变量时，使用 bling 可以提高运行时性能：

```java
var globalScopedVariable = "Global String";

module A
{
    class B
    {
        function c() {
            // At runtime, the VM will search:
            //     The B instance
            //     The B instance's parent class, Toybox.Lang.Object
            //     The A module
            //     The A module's parent globals
            // ...and finally find globalScopedVariable.
            System.println(globalScopedVariable);
            // This searches only the global namespace for globalScopedVariable.
            // Thanks bling!
            System.println($.globalScopedVariable);
        }
    }
}
```

由于 Monkey C 是动态类型语言，引用全局变量时会先搜索对象的继承结构和模块层级，最后才查找全局变量。使用 bling 符号可以直接搜索全局命名空间。
