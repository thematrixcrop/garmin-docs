---
title: "Functions"
---
# 函数

函数是程序的核心。函数定义了独立的代码调用单元。

Monkey C 函数可以接受参数，但由于 Monkey C 是动态类型语言，参数类型未被声明；仅有名称。 此外，无需声明函数的返回值，甚至无需声明函数是否返回值，因为所有函数都返回值。

函数可以存在于类或模块中，也可以出现在全局模块中。

## Variables, Expressions, and Operators

子C支持的基本类型是:

-   **Integers** - 32-bit signed integers

-   **Floats** - 32-bit floating point numbers

- **长度**  64-64位签名整数

- **双式**  64-64位浮点数字

-   **Booleans** - `true` and `false`

-   **Chars** - Unicode characters

- **字符串**

- **对象**  实时对象 (用类关键字定义)

- **阵列** - 配分为`new [X]`语法,其中"X"是计算阵列大小的表达式

- **词典** - 配套阵列,配合`{}`语法


### Keywords

以下是子C编程语言的关键字列表.您不能在程序中使用以下任何变量或符号.关键字`native`和`alias`是保留的,尽管目前不使用.`true`,`false`,`null`,`NaN`,`new`,`and`和`or`可能看起来像关键字,但它们实际上是字体和运算符;您不能在程序中使用它们作为标识符.

标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签: 标签

### Declaring Variables

All local variables must be declared ahead of time using the `var` keyword. 在 Monkey C 语言中，所有值（包括数值）都是对象。

```java
var n = null;               // Null reference
var x = 5;                  // 32-bit signed integers
var y = 6.0;                // 32-bit floating point
var l = 5l;                 // 64-bit signed integers
var d = 4.0d;               // 64-bit floating point
var bool = true;            // Boolean (true or false)
var c = 'x';                // Unicode character
var str = "Hello";          // String
var arr = new [20 + 30];    // Array of size 50
var dict = { x=>y };        // Dictionary: key is 5, value is 6.0
var z = arr[2] + x;         // Null pointer waiting to happen
```

子C支持以下操作符:

| Precedence | Operator | Description |
| --- | --- | --- |
| 1 | `new` | creation |
|  | `!` | logical NOT |
|  | `~` | bitwise NOT |
|  | `( )` | function invocation |
| 2 | `*` | multiplication |
|  | `/` | division |
|  | `%` | modulo |
|  | `&` | bitwise AND |
|  | `<<` | left shift |
|  | `>>` | right shift |
| 3 | `+` | addition |
|  | `-` | subtraction |
|  | `|` | bitwise OR |
|  | `^` | bitwise XOR |
| 4 | `<` | less than |
|  | `<=` | less than or equals |
|  | `>` | greater than |
|  | `>=` | greater than or equals |
|  | `==` | equals |
|  | `!=` | not equals |
| 5 | `&&` | logical AND |
|  | `and` |  |
| 6 | `||` | logical OR |
|  | `or` |  |
| 7 | `?:` | conditional |

### Symbols

符号是轻量级的常数标识符.当子C编译器找到一个新的符号时,它将赋予它一个新的独特值.这允许符号作为键或常数使用,而不明确声明一个 const或 enum:

```java
var a = :symbol_1;
var b = :symbol_1;
var c = :symbol_2;
Sys.println( a == b );  // Prints true
Sys.println( a == c );  // Prints false
```

符号可以在不需要声明enum的情况下创建键时有用:

```java
var person = { :firstName=>"Bob", :lastName=>"Jones" };
```

### Constants

常量是以`const`关键字声明的不变值.这些值用于存储在代码中可重复使用的不变值.常量必须在模块或类级别上声明;它们不能在函数内声明.

常数支持与[listed for variables](#declaring-variables)相同的类型.重要的是要注意,在像数组这样的数据结构中,`const`的功能类似于Java的`final`关键字.例如,`const`数组阻止数组被新实例取代,但数组的元素可能会被修改.

```java
const PI = 3.14;
const EAT_BANANAS = true;
const BANANA_YELLOW = "#FFE135";
```

### Enumerations

列表是从符号到整数的明确或自动增长常数映射.除非有明确的集合 (见第二例),否则每一个接下来的符号自动分配其前身加一个的值,从`0`开始.因此,在下面的例子中,星期一符号自动分配值`0`,星期二分配值`1`,等等.这些符号可以像常数变量一样使用 (这基本上是它们的).Enums必须在模块或类级级别上声明;它们不能在函数内声明.

```java
enum {
    Monday,   // Monday = 0
    Tuesday,  // Tuesday = 1
    Wednesday // Wednesday = 2
    // ...and so on
}
```

```java
enum {
    x = 1337, // x = 1337
    y,        // y = 1338
    z,        // z = 1339
    a = 0,    // a = 0
    b,        // b = 1
    c         // c = 2
}
```

### Calling Methods and Functions

要在自己的类或模块中调用方法,只需使用函数调用语法:

```typescript
function foo( a ) {
    //Assume foo does something really impressive
}

function bar() {
    foo( "hello" );
}
```

如果调用一个对象的实例,请先使用对象和"`.`"来调用.

在访问类成员时,应使用以下任何一个格式访问`public`和`protected`变量:

```typescript
var x = mMemberVariable;
var y = self.mMemberVariable;
```

通过以下语法访问过失的母会成员函数:

```typescript
class A
{
    function overridableMethod() {
        System.println("I am A!");
    }
}

class B extends A
{
    function overridableMethod() {
        System.println("B wins!");
        A.overridableMethod();
    }
}
```

在子C语言中,`SuperClass.memberVariable`的语法不支持.总是使用`self`访问超级类的成员变量.

###如果声明

`if` statements allow branch points in your code:

```java
myInstance.methodToCall( parameter );

if ( a == true ) {
    // Do something
} else if ( b == true ) {
    // Do something else
} else {
    // If all else fails
}

// Monkey C also supports the ternary operator
var result = a ? 1 : 2;
```

要求`if`语句中的表达式是表达式;分配不允许.

-   `true`

- 不为零的整数

- 非零的对象


### Switch Statements

与`if`语句一样,`switch`语句也允许您的代码中的分支点.决定是否使用`if`语句或`switch`语句是基于可读性和语句正在测试的表达.

一个`switch`语句测试仅基于一个对象的表达式.就像`if`语句一样,`switch`语句内的表达式必须是表达式;分配不允许.你可以在`switch`语句内拥有任何数量的`case`语句.每一个`case`都会被对比的对象或`instanceof`对象和一个直角接下来:

```typescript
switch ( obj ) {
    case true:
    // Do something
    break;
    case 1:
    // Do something
    break;
    case "B": {
        // Do something
        break;
    }
    // Executed based on the type
    // instead of the value
    case instanceof MyClass:
    // Do something
    break;
    default:
    // If all else fails
    break;
}

// Monkey C also supports fall-through into the next case statement
switch ( obj ) {
    case false:
    // Do something
    // Fall through and execute the code in the next case block
    case 2: {
        // Do something
        break;
    }
    case instanceof MyOtherClass:
    // Do something
    break;
    case "B":
    // Do something
    // Fall through and execute the code in the default block
    default:
    // If all else fails
    break;
}
```

在本指南中详细介绍了`instanceof`运算器

当被启动的对象要么是`case`语句中定义的值的等值或实例时,接下来的语句是`case`将执行到`break`语句达到.每一个`break`语句终止附加的`switch`语句.没有`break`语句,`case`语句都会发生:匹配的`case`标签后的所有语句都是顺序执行的,无论随后的`case`标签的表达如何,直到遇到`break`语句.最后的`case`0语句不需要,因为控制流将自然而然从`case`1语句中掉下来.

一个`switch`语句也可以有一个单个可选的`default`语句,它不需要出现在`switch`语句末尾.`default`语句处理所有不是明确处理的物体.

### Switch Block Variable Scoping

`switch`语句的体体被称为"开关区块".开关区块内声明的变量将在开关区块水平上进行范围检测.在一个案例区块的卷曲式支中定义的变量将在该代码区块水平检测范围检测.此外,由于发生的事件性质,在任何随后的`case`语句中使用之前,必须初始化开关区块水平上定义的所有变量.例如:

```java
switch ( obj ) {
    case true:
    var aaa = 1; // Scoped at the switch block level
    ...
    case 1:
    var zzz = aaa; // Results in a compiler error because aaa was not initialized in this case block
    ...
    break;
    case "B": {
       var aaa = true; // Scoped at the code block level within the curly braces, no scoping conflict with variable aaa at the swtich block level
       ...
       break;
    }
    case instanceof MyClass:
    var aaa = "Hello!" // Results in a compiler error because aaa has already been defined in the switch block
    ...
    default:
    aaa = 0; // aaa was defined in the first case and initialized at the beginning of the default case, no errors!
    var good = aaa;
    ...
    break;
}
```

### Loops

子C支持`for`循环,`while`循环和`do/while`循环.`while`和`do/while`循环具有熟悉的语法:

```java
// do/while loop
do {
    // Code to do in a loop
}
while( expression );

// while loop
while( expression ) {
    // Code to do in a loop
}
```

循环必须周围有支,因为单线循环不支持:

```java
// Monkey C does allow for variable declaration in for loops
for( var i = 0; i < array.size(); i++ ) {
    // Code to do in a loop
}
```

循环中的控制可以通过使用`break`和`continue`语句进行管理.这些语句也应该具有熟悉的行为:

```java
// This for loop should only print 5, 6, and 7.
for (var i = 0; i < 10; i += 1) {
    if (i < 5) {
        continue;
    }
    System.println(i);
    if (7 == i) {
        break;
    }
}
```

### 返回函数的值

所有函数在 Monkey C 中返回值.你可以用`return`关键字明确设置返回值:

```java
return expression;
```

这个表达式是可选的.没有返回语句的函数自动返回最后操作的值.

### Instanceof and Has

作为一个型语言,子C给程序员提供了很大的灵活性,但缺点是编译器无法执行C,C++或Java中的类型检查.子C提供了两个工具来执行运行时间类型检查`instanceof`和`has`.

`instanceof`运算器提供了检查对象实例是否继承给定的类的能力.第二个参数是检查类名称:

```java
var value = 5;
// Check to see if value is a number
if ( value instanceof Toybox.Lang.Number )
{
    System.println( "Value is a number" );
}
```

`has`操作符允许您检查给定对象是否具有符号,这可能是公共方法,实例变量,甚至类定义或模块.第二个参数是检查的符号.例如,假设我们在`Toybox.Sensor.Magnetometer`中有磁铁仪库,但不是所有的产品都有磁铁仪.以下是基于这些标准的实现更改的一个例子:

```java
var impl;
// Check to see if the Magnetometer module exists in Toybox
if ( Toybox has :Magnetometer )
{
    impl = new ImplementationWithMagnetometer();
}
else
{
    impl = new ImplementationWithoutMagnetometer();
}
```

子C的对象导向设计模式与`has`和`instanceof`操作符结合,使得软件能够在一个代码库中实现许多设备的实现.

## Callbacks

子C中的函数不是第一类,这意味着您不能直接将它们作为对象用于其他函数.然而,使用从`Toybox.Lang.Object`继承的`method()`函数,一个类实例可以创建一个`Method`对象,这提供了一个方法来调用它作为回调方法.

```java
class Foo
{
    function operation(a, b) {
        // The code here is really amazing. Like mind blowing amazing. You wish this method was in your program.
    }
}
function usageSample() {
    // Create a new instance of Foo
    var v = new Foo();
    // Get the callback for the operation method from the instance of Foo.
    var m = v.method(:operation);
    // Invoke v's operation method.
    m.invoke(1,2);
}
```

一个`Method`对象将在它来自的对象实例上调用一种方法.它保持着对源对象的强烈引用.

与类不同,模块不会继承从对象,因此无法访问`method()`函数.然而,可以创建一个新的`Method`实例,允许模块级函数以类似的方式被调用为回调:

```typescript
import Toybox.Lang;

module Foo
{
    function operation() {
        // Do something
    }
}
function moduleSample() {
    var v = new Method(Foo, :operation);
    v.invoke();
}
```

豆腐给素食者,烧烤给堪萨斯人...
