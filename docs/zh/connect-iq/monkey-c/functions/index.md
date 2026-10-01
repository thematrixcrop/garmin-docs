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
Sys.println( a == b );  // Prints true
Sys.println( a == c );  // Prints false
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

### 调用方法和函数

要在自己的类或模块中调用方法，只需使用函数调用语法：

```typescript
function foo( a ) {
    // Assume foo does something really impressive
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
    // Do something
} else if ( b == true ) {
    // Do something else
} else {
    // If all else fails
}

// Monkey C also supports the ternary operator
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

本指南稍后会详细介绍 `instanceof` 运算符。

当被 switch 的对象等于 `case` 中定义的值，或是该值的实例时，`case` 后的语句会一直执行到遇到 `break`。每个 `break` 都会终止外层 `switch`。如果没有 `break`，就会发生 case 贯穿：匹配的 `case` 标签之后的所有语句会按顺序执行，不考虑后续 `case` 标签的表达式，直到遇到 `break`。最后一个 `case` 不需要 `break`，因为控制流会自然离开 `switch`。

一个 `switch` 还可以包含一个可选的 `default` 分支，且不要求位于末尾。`default` 会处理所有没有被其他 `case` 显式处理的对象。

### Switch 代码块变量作用域

`switch` 语句的主体称为“switch 代码块”。在 switch 代码块中声明的变量，其作用域为 switch 代码块；在 case 代码块花括号中定义的变量，其作用域为该代码块。此外，由于 case 会贯穿执行，在后续 `case` 中使用 switch 代码块级别定义的变量前，必须先初始化它们。例如：

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
       var aaa = true; // Scoped at the code block level within the curly braces, no scoping conflict with variable aaa at the switch block level
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

### 循环

Monkey C 支持 `for`、`while` 和 `do/while` 循环。`while` 和 `do/while` 循环的语法与常见语言类似：

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

循环必须使用花括号包围，因为不支持单行循环：

```java
// Monkey C does allow for variable declaration in for loops
for( var i = 0; i < array.size(); i++ ) {
    // Code to do in a loop
}
```

可以使用 `break` 和 `continue` 语句控制循环，它们的行为与常见语言类似：

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
// Check to see if value is a number
if ( value instanceof Toybox.Lang.Number )
{
    System.println( "Value is a number" );
}
```

`has` 运算符可以检查对象是否具有某个符号，该符号可以是 public 方法、实例变量，甚至类定义或模块。需要检查的符号位于运算符之后。例如，假设 `Toybox.Sensor.Magnetometer` 中存在磁力计库，但并非所有产品都支持磁力计。下面的示例根据这一条件选择实现：

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

Monkey C 的面向对象设计模式结合 `has` 和 `instanceof` 运算符，可以让同一个代码库支持多种设备实现。

## 回调

Monkey C 中的函数不是一等对象，不能直接将它们作为对象传递给其他函数。不过，类实例可以使用从 `Toybox.Lang.Object` 继承的 `method()` 函数创建 `Method` 对象，从而将方法作为回调调用。

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

`Method` 对象会在创建它的对象实例上调用方法，并且会持有源对象的强引用。

与类不同，Module 不继承自 Object，因此无法访问 `method()` 函数。不过，可以创建新的 `Method` 实例，让模块级函数以类似方式作为回调调用：

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

素食者吃豆腐，堪萨斯人吃烧烤……
