---
title: "函数"
---
<a id="functions"></a>
# 函数

函数是程序的核心，用于定义可独立调用的代码单元。

Monkey C 函数可以接受参数，但由于 Monkey C 是动态类型语言，不会声明参数类型，只声明参数名称。此外，无需声明函数的返回值，甚至无需声明函数是否返回值，因为所有函数都会返回值。

函数可以存在于类或模块中，也可以出现在全局模块中。

## 变量、表达式和运算符

Monkey C 支持以下基本类型：

-   **整数**：32 位有符号整数

-   **浮点数**：32 位浮点数

-   **Long**：64 位有符号整数

-   **Double**：64 位浮点数

-   **布尔值**：`true` 和 `false`

-   **字符**：Unicode 字符

-   **字符串**：字符序列

-   **对象**：实例化的对象（使用 `class` 关键字定义）

-   **数组**：使用 `new [X]` 语法分配，其中 `X` 是计算数组大小的表达式

-   **字典**：使用 `{}` 语法分配的关联数组


### 关键字

下面列出了 Monkey C 编程语言中的关键字。程序中不能将这些关键字用作变量或符号。`native` 和 `alias` 虽然当前未使用，但仍是保留字。`true`、`false`、`null`、`NaN`、`new`、`and` 和 `or` 看起来像关键字，但实际上是字面量或运算符，同样不能用作标识符。

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| `as` | `const` | `enum` | `has` | `module` | `self` | `using` |
| `break` | `continue` | `extends` | `hidden` | `private` | `static` | `var` |
| `case` | `default` | `finally` | `if` | `protected` | `switch` | `while` |
| `catch` | `do` | `for` | `instanceof` | `public` | `throw` |  |
| `class` | `else` | `function` | `me` | `return` | `try` |  |

<a id="declaring-variables"></a>
### 声明变量

所有局部变量都必须提前使用 `var` 关键字声明。在 Monkey C 中，所有值（包括数值）都是对象。

```java
var n = null;               // Null 引用
var x = 5;                  // 32 位有符号整数
var y = 6.0;                // 32 位浮点数
var l = 5l;                 // 64 位有符号整数
var d = 4.0d;               // 64 位浮点数
var bool = true;            // 布尔值（true 或 false）
var c = 'x';                // Unicode 字符
var str = "Hello";          // String
var arr = new [20 + 30];    // 大小为 50 的数组
var dict = { x=>y };        // 字典：键为 5，值为 6.0
var z = arr[2] + x;         // 即将发生的空指针错误
```

Monkey C 支持以下运算符：

| Precedence | Operator | 说明 |
| --- | --- | --- |
| 1 | `new` | 创建对象 |
|  | `!` | 逻辑 NOT |
|  | `~` | 按位非 |
|  | `( )` | 函数调用 |
| 2 | `*` | 乘法 |
|  | `/` | 除法 |
|  | `%` | 取模 |
|  | `&` | 按位与 |
|  | `<<` | 左移 |
|  | `>>` | 右移 |
| 3 | `+` | 加法 |
|  | `-` | 减法 |
|  | `|` | 按位或 |
|  | `^` | 按位异或 |
| 4 | `<` | 小于 |
|  | `<=` | 小于或等于 |
|  | `>` | 大于 |
|  | `>=` | 大于或等于 |
|  | `==` | 等于 |
|  | `!=` | 不等于 |
| 5 | `&&` | 逻辑 AND |
|  | `and` |  |
| 6 | `||` | 逻辑 OR |
|  | `or` |  |
| 7 | `?:` | 条件运算 |

### 符号

符号是轻量级的常量标识符。Monkey C 编译器发现新符号时，会为其分配唯一值。因此，无需显式声明 `const` 或 `enum`，就可以将符号用作键或常量：

```java
var a = :symbol_1;
var b = :symbol_1;
var c = :symbol_2;
Sys.println( a == b );  // 打印 true
Sys.println( a == c );  // 打印 false
```

如果不想声明 Enum，符号可以方便地用来创建键：

```java
var person = { :firstName=>"Bob", :lastName=>"Jones" };
```

### 常量

常量是使用 `const` 关键字声明的命名不可变值，适合存储代码中会反复使用且不会变化的值。常量必须在模块或类级别声明，不能在函数内声明。

常量支持[变量声明](#declaring-variables)中列出的所有类型。对于数组等数据结构，需要注意 `const` 的行为类似于 Java 的 `final`：`const` 数组不能替换为新实例，但数组元素仍然可以修改。

```java
const PI = 3.14;
const EAT_BANANAS = true;
const BANANA_YELLOW = "#FFE135";
```

### 枚举

枚举是从符号到整数的显式或自动递增的常量映射。除非显式指定（参见第二个示例），否则每个后续符号会自动获得前一个符号加一的值，从 `0` 开始。下面的示例中，Monday 自动获得 `0`，Tuesday 获得 `1`，依此类推。这些符号可以像常量变量一样使用。Enum 必须在模块或类级别声明，不能在函数内声明。

```java
enum {
    Monday,   // Monday = 0
    Tuesday,  // Tuesday = 1
    Wednesday // Wednesday = 2
    // ……以此类推
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

### 调用方法和函数

要在自己的类或模块中调用方法，只需使用函数调用语法：

```typescript
function foo( a ) {
    // 假设 foo 会执行非常出色的操作
}

function bar() {
    foo( "hello" );
}
```

如果要在对象实例上调用方法，请在调用前加上对象和 `.`。

访问类成员时，应使用以下任一格式访问 `public` 和 `protected` 变量：

```typescript
var x = mMemberVariable;
var y = self.mMemberVariable;
```

使用以下语法访问被重写的父类成员函数：

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

Monkey C 不支持 `SuperClass.memberVariable` 语法。始终使用 `self` 访问父类的成员变量。

### If 语句

`if` 语句允许在代码中设置分支点：

```java
myInstance.methodToCall( parameter );

if ( a == true ) {
    // 执行某些操作
} else if ( b == true ) {
    // 执行其他操作
} else {
    // 如果其他情况都不满足
}

// Monkey C 也支持三元运算符
var result = a ? 1 : 2;
```

`if` 语句中的内容必须是表达式，不允许赋值。以下内容的计算结果为 true：

-   `true`

- 不为零的整数

- 非 null 的对象


### Switch 语句

与 `if` 语句一样，`switch` 语句也允许在代码中设置分支点。使用 `if` 还是 `switch`，取决于可读性以及要测试的表达式。

`switch` 语句只根据一个对象测试表达式。与 `if` 语句一样，`switch` 中的内容必须是表达式，不允许赋值。一个 `switch` 中可以包含任意数量的 `case` 语句；每个 `case` 后面跟着要比较的对象或 `instanceof` 对象，并以冒号结尾：

```typescript
switch ( obj ) {
    case true:
    // 执行某些操作
    break;
    case 1:
    // 执行某些操作
    break;
    case "B": {
        // 执行某些操作
        break;
    }
    // 根据类型而不是值执行
    case instanceof MyClass:
    // 执行某些操作
    break;
    default:
    // 如果其他情况都不满足
    break;
}

// Monkey C 也支持贯穿到下一个 case 语句
switch ( obj ) {
    case false:
    // 执行某些操作
    // 贯穿并执行下一个 case 代码块中的代码
    case 2: {
        // 执行某些操作
        break;
    }
    case instanceof MyOtherClass:
    // 执行某些操作
    break;
    case "B":
    // 执行某些操作
    // 贯穿并执行 default 代码块中的代码
    default:
    // 如果其他情况都不满足
    break;
}
```

本指南稍后会详细介绍 `instanceof` 运算符。

当被 switch 的对象等于 `case` 中定义的值，或是该值的实例时，`case` 后的语句会一直执行到遇到 `break`。每个 `break` 都会终止外层 `switch`。如果没有 `break`，就会发生 case 贯穿：匹配的 `case` 标签之后的所有语句会按顺序执行，不考虑后续 `case` 标签的表达式，直到遇到 `break`。最后一个 `case` 不需要 `break`，因为控制流会自然离开 `switch`。

一个 `switch` 还可以包含一个可选的 `default` 分支，且不要求位于末尾。`default` 会处理所有没有被其他 `case` 显式处理的对象。

### Switch 代码块变量作用域

`switch` 语句的主体称为“switch 代码块”。在 switch 代码块中声明的变量，其作用域为 switch 代码块；在 case 代码块花括号中定义的变量，其作用域为该代码块。此外，由于 case 会贯穿执行，在后续 `case` 中使用 switch 代码块级别定义的变量前，必须先初始化它们。例如：

```java
switch ( obj ) {
    case true:
    var aaa = 1; // 作用域为 switch 代码块级别
    ...
    case 1:
    var zzz = aaa; // 由于 aaa 未在此 case 代码块中初始化，将导致编译器错误
    ...
    break;
    case "B": {
       var aaa = true; // 作用域为花括号内的代码块级别，与 switch 代码块级别的变量 aaa 不冲突
       ...
       break;
    }
    case instanceof MyClass:
    var aaa = "Hello!" // 由于 aaa 已在 switch 代码块中定义，将导致编译器错误
    ...
    default:
    aaa = 0; // aaa 已在第一个 case 中定义，并在 default 开始处初始化，不会出错！
    var good = aaa;
    ...
    break;
}
```

### 循环

Monkey C 支持 `for`、`while` 和 `do/while` 循环。`while` 和 `do/while` 循环的语法与常见语言类似：

```java
// do/while 循环
do {
    // 循环中执行的代码
}
while( expression );

// while 循环
while( expression ) {
    // 循环中执行的代码
}
```

循环必须使用花括号包围，因为不支持单行循环：

```java
// Monkey C 允许在 for 循环中声明变量
for( var i = 0; i < array.size(); i++ ) {
    // 循环中执行的代码
}
```

可以使用 `break` 和 `continue` 语句控制循环，它们的行为与常见语言类似：

```java
// 此 for 循环应只打印 5、6 和 7。
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

### 从函数返回值

Monkey C 中的所有函数都会返回值。可以使用 `return` 关键字显式设置返回值：

```java
return expression;
```

表达式是可选的。没有 `return` 语句的函数会自动返回最后一次操作的值。

### Instanceof 和 Has

作为鸭子类型语言，Monkey C 为程序员提供了很大灵活性，但代价是编译器无法像 C、C++ 或 Java 那样执行类型检查。Monkey C 提供 `instanceof` 和 `has` 两个工具执行运行时类型检查。

`instanceof` 运算符可以检查对象实例是否继承自给定类。需要检查的类名位于运算符之后：

```java
var value = 5;
// 检查值是否为数字
if ( value instanceof Toybox.Lang.Number )
{
    System.println( "Value is a number" );
}
```

`has` 运算符可以检查对象是否具有某个符号，该符号可以是 public 方法、实例变量，甚至类定义或模块。需要检查的符号位于运算符之后。例如，假设 `Toybox.Sensor.Magnetometer` 中存在磁力计库，但并非所有产品都支持磁力计。下面的示例根据这一条件选择实现：

```java
var impl;
// 检查 Toybox 中是否存在 Magnetometer 模块
if ( Toybox has :Magnetometer )
{
    impl = new ImplementationWithMagnetometer();
}
else
{
    impl = new ImplementationWithoutMagnetometer();
}
```

Monkey C 的面向对象设计模式结合 `has` 和 `instanceof` 运算符，可以让同一个代码库支持多种设备实现。

## 回调

Monkey C 中的函数不是一等对象，不能直接将它们作为对象传递给其他函数。不过，类实例可以使用从 `Toybox.Lang.Object` 继承的 `method()` 函数创建 `Method` 对象，从而将方法作为回调调用。

```java
class Foo
{
    function operation(a, b) {
        // 这里的代码非常出色，令人惊叹。你会希望自己的程序中也有这个方法。
    }
}
function usageSample() {
    // 创建 Foo 的新实例
    var v = new Foo();
    // 从 Foo 实例获取 operation 方法的回调。
    var m = v.method(:operation);
    // 调用 v 的 operation 方法。
    m.invoke(1,2);
}
```

`Method` 对象会在创建它的对象实例上调用方法，并且会持有源对象的强引用。

与类不同，Module 不继承自 Object，因此无法访问 `method()` 函数。不过，可以创建新的 `Method` 实例，让模块级函数以类似方式作为回调调用：

```typescript
import Toybox.Lang;

module Foo
{
    function operation() {
        // 执行某些操作
    }
}
function moduleSample() {
    var v = new Method(Foo, :operation);
    v.invoke();
}
```

素食者吃豆腐，堪萨斯人吃烧烤……
