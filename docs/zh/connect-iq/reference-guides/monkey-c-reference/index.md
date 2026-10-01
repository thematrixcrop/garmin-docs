---
title: "Monkey C 语言参考"
---
# Monkey C 语言参考

![](/connect-iq/resources/programmers-guide/smart-monkey.png)

Monkey C 是一种从头构建的面向对象语言，旨在让可穿戴设备上的应用开发更加轻松。如果你使用过 Java、PHP、Ruby 或 Python 等动态语言，Monkey C 应该会让你感到熟悉。

Monkey C 的目标是减少应用开发中的底层工作，让开发者更多关注用户，而不是设备的资源限制。Monkey C 会编译为由虚拟机解释执行的字节码，类似于 Java。

## 语言基础

### 数据类型

Monkey C 是一种[鸭子类型](https://en.wikipedia.org/wiki/Duck_typing)语言，没有真正的原始类型。[Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/)、[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)、[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)、[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/) 和 [Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/) 类型都是对象，因此原始类型可以像其他对象一样拥有方法。在 Java 或 C++ 等语言中，必须为每个函数参数和返回值声明类型。不过，Monkey C 编译器会尝试验证类型安全性；当函数处理的不是对象时，仍可能出现运行时错误。使用 [`instanceof` 和 `has`](#instanceof-and-has) 等运算符可以帮助避免潜在的类型问题。

Monkey C 支持以下基本数据类型：

| 类型 | 说明 | 示例 |
| --- | --- | --- |
| [Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 32 位有符号整数 | `var x = 5;` |
| [Float](/connect-iq/api-docs/Toybox/Lang/Float/) | 32 位浮点数 | `var y = 6.0;` |
| [Long](/connect-iq/api-docs/Toybox/Lang/Long/)\* | 64 位有符号整数 | `var l = 5l;` |
| [Double](/connect-iq/api-docs/Toybox/Lang/Double/)\* | 64 位浮点数 | `var d = 4.0d;` |
| [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) | `true` 和 `false` | `var bool = true;` |
| [Char](/connect-iq/api-docs/Toybox/Lang/Char/) | UTF-32 字符 | `var c = 'x';` |
| [String](/connect-iq/api-docs/Toybox/Lang/String/)\* | 字符序列 | `var str = "Hello";` |
| [Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) | 轻量级常量标识符（详见 [Symbols](#symbols)） | `var sym = :mySymbol;` |

Monkey C 还支持两种容器类型：

| 类型 | 说明 | 示例 |
| --- | --- | --- |
| [Array](/connect-iq/api-docs/Toybox/Lang/Array/)\* | 固定大小、数值索引的一维对象列表（不是链表） | `var arr = new [1, 2, 3];` |
| [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)\* | 将键映射到值的关联数组或哈希表 | `var dict = {one=>1, two=>2};` |

带星号的类型需要堆分配，比 32 位类型占用更多内存。

Monkey C 中有一些关键字、运算符和保留字，不能用作程序中的变量或符号：

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `and` |逻辑 AND，等价于 `&&`| 请参阅[逻辑运算符](#logical-operators) |
| `as` |指定使用 `using` 语句导入的模块| 请参阅[using 语句](#using-statements) |
| `break` |退出循环或 `switch` 代码块| 请参阅[循环](#loops)和 [Switch-Case 语句](#switch-case-statements) |
| `catch` |捕获抛出的 [Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)| 请参阅[异常处理](#exception-handling) |
| `case` |指定 `switch` 代码块中的一个分支| 请参阅 [Switch-Case 语句](#switch-case-statements) |
| `class` |声明新类型| 请参阅[类和对象](#classes-and-objects) |
| `const` |声明新常量| 请参阅[常量](#constants) |
| `continue` |继续执行当前循环的下一次迭代| 请参阅[循环](#loops) |
| `default` |在 `switch` 代码块中指定默认分支| 请参阅 [Switch-Case 语句](#switch-case-statements) |
| `do` |启动 `do` 循环| 请参阅[循环](#loops) |
| `else` |在 `if` 代码块中指定备用分支| 请参阅 [if 语句](#if-statements) |
| `enum` |声明新枚举| 请参阅[枚举](#enumerations) |
| `extends` |声明继承自另一个类的类型| 请参阅[类和对象](#classes-and-objects) |
| `false` |逻辑值 `false`| 请参阅 [if 语句](#if-statements) |
| `finally` |指定总是在 `try` 代码块中执行的代码块| 请参阅[异常处理](#exception-handling) |
| `for` |启动 `for` 循环| 请参阅[循环](#loops) |
| `function` |声明新函数| 请参阅[函数](#functions) |
| `has` |检查对象是否具有特定符号| 请参阅 [instanceof 和 has](#instanceof-and-has) |
| `hidden` |指定受保护的对象成员，作用等同于 `protected`| 请参阅[数据隐藏](#data-hiding) |
| `if` |启动 `if` 代码块| 请参阅 [if 语句](#if-statements) |
| `instanceof` |检查对象类型| 请参阅 [instanceof 和 has](#instanceof-and-has) |
| `me` |引用当前对象实例| 请参阅[类和对象](#classes-and-objects) |
| `module` |声明新模块| 请参阅[模块](#modules) |
| `NaN` |无效或未定义的值，表示“不是数字”| 不适用 |
| `native` |用于内部使用| 不适用 |
| `new` |创建对象的新实例| 请参阅[其他运算符](#miscellaneous-operators) |
| `null` |空值| 请参阅[声明变量](#declaring-variables) |
| `or` |逻辑 OR，等价于 `||`| 请参阅[逻辑运算符](#logical-operators) |
| `private` |指定私有对象成员| 请参阅[数据隐藏](#data-hiding) |
| `protected` |指定受保护对象成员| 请参阅[数据隐藏](#data-hiding) |
| `public` |指定公共对象成员| 请参阅[数据隐藏](#data-hiding) |
| `return` |指定函数返回值| 请参阅[函数](#functions) |
| `self` |引用当前对象实例| 请参阅[类和对象](#classes-and-objects) |
| `static` |声明静态变量或函数| 请参阅[静态成员](#static-members) |
| `switch` |启动 `switch` 代码块| 请参阅 [Switch-Case 语句](#switch-case-statements) |
| `throw` |抛出异常| 请参阅[异常处理](#exception-handling) |
| `true` |逻辑值 `true`| 请参阅 [if 语句](#if-statements) |
| `try` |启动用于处理异常的 `try` 代码块| 请参阅[异常处理](#exception-handling) |
| `using` |导入供应用使用的模块| 请参阅[using 语句](#using-statements) |
| `var` |声明新变量| 请参阅[声明变量](#declaring-variables) |
| `while` |启动新的 `while` 循环，或设置 `do` 循环的条件| 请参阅[循环](#loops) |

### 运算符

下面的示例假设 `a = 10`、`b = 5`、`x = 1`、`y = 0`、`m = true`、`n = false`。

#### 算术运算符

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `+` | 加法两个操作数；一元正号 | `a + b` 的结果为 15；`+a` 的结果为 10 |
| `-` | 用第一个操作数减去第二个操作数；一元负号 | `a - b` 的结果为 5；`-a` 的结果为 -10 |
| `*` | 将两个操作数相乘 | `a * b` 的结果为 50 |
| `/` | 用被除数除以除数 | `a / b` 的结果为 2 |
| `%` | 取模，返回除法后的余数 | `a % b` 的结果为 0 |
| `++` | 增加数值，可前置或后置 | `a++` 的结果为 11 |
| `--` | 减少数值，可前置或后置 | `a--` 的结果为 9 |

**注意：**`+` 运算符也用于连接 [String](/connect-iq/api-docs/Toybox/Lang/String/) 值。

#### 关系运算符

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `==` | 检查两个操作数是否相等 | `a == b` 的结果为 `false` |
| `!=` | 检查两个操作数是否不相等 | `a != b` 的结果为 `true` |
| `>` | 检查左侧操作数是否大于右侧操作数 | `a > b` 的结果为 `true` |
| `<` | 检查左侧操作数是否小于右侧操作数 | `a < b` 的结果为 `false` |
| `>=` | 检查左侧操作数是否大于或等于右侧操作数 | `a >= b` 的结果为 `false` |
| `<=` | 检查左侧操作数是否小于或等于右侧操作数 | `a <= b` 的结果为 `false` |

<a id="logical-operators"></a>

#### 逻辑运算符

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `&&`、`and` | 逻辑 AND，两个值都为 `true` 时结果为 `true` | `m && n` 的结果为 `false` |
| `||`、`or` | 逻辑 OR，任一值为 `true` 时结果为 `true` | `m || n` 的结果为 `true` |
| `!` | 逻辑 NOT，反转逻辑表达式的值 | `!(m && n)` 的结果为 `true` |

在 Monkey C 中：

- 非 `null` 对象的计算结果为 `true`。

- 对 `Number` 或 `Long` 使用 `!`，效果与使用 `~` 相同。


比较逻辑表达式中的非布尔值时：

- 表达式 `x && y` 先计算 `x`。如果 `x` 为 `false`，就返回它的值；否则计算 `y` 并返回结果。

- 表达式 `x || y` 先计算 `x`。如果 `x` 为 `true`，就返回它的值；否则计算 `y` 并返回结果。


#### 位运算符

位运算符对二进制值进行操作。这些运算遵循以下真值表：

| p | q | p & q | p | q | p ^ q |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |

假设 `p = 3`、`q = 1`。以字节表示时，`p` 是 `0000 0011`，`q` 是 `0000 0001`。

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `&` | 对两个操作数执行按位 AND | `p & q` 的结果为 1（0000 0001） |
| `|` | 对两个操作数执行按位 OR | `p | q` 的结果为 3（0000 0011） |
| `^` | 对两个操作数执行按位 XOR | `p ^ q` 的结果为 2（0000 0010） |
| `~` | 按位取反，翻转每一位 | `~q` 的结果为 -2（1111 1110） |

**注意：**Monkey C 中的所有数值都是有符号值，最高位表示符号。

#### 赋值运算符

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `=` | 将右侧操作数的值赋给左侧操作数 | `b = a` 将 `a`（10）赋给 `b` |
| `+=` | 将左右操作数相加，并将结果赋给左侧操作数 | `a += b` 等价于 `a = a + b`（15） |
| `-=` | 用左侧操作数减去右侧操作数，并将结果赋给左侧操作数 | `a -= b` 等价于 `a = a - b`（5） |
| `*=` | 将左右操作数相乘，并将结果赋给左侧操作数 | `a *= b` 等价于 `a = a * b`（50） |
| `/=` | 用左侧操作数除以右侧操作数，并将结果赋给左侧操作数 | `a /= b` 等价于 `a = a / b`（2） |
| `%=` | 取模，并将余数赋给左侧操作数 | `a %= b` 的结果为 0 |
| `<<=` | 将左侧操作数左移，并将结果赋给左侧操作数 | `x <<= y` 等价于 `x = x << y`（1） |
| `>>=` | 将左侧操作数右移，并将结果赋给左侧操作数 | `x >>= y` 等价于 `x = x >> y`（1） |
| `&=` | 对左右操作数执行按位 AND，并将结果赋给左侧操作数 | `x &= y` 等价于 `x = x & y`（0） |
| `|=` |对左操作数和右操作数执行按位或，并将结果赋给左操作数| `x |= y` 等价于 `x = x | y`（1）|
| `^=` | 对左右操作数执行按位 XOR，并将结果赋给左侧操作数 | `x ^= y` 等价于 `x = x ^ y`（1） |

<a id="miscellaneous-operators"></a>

#### 其他运算符

| 运算符 | 说明 | 示例 |
| --- | --- | --- |
| `?` 和 `:` | 三元运算符，[if-else](#if-statements) 的简写形式 | `var myBool = a > 5 ? true : false` |
| `new` | 创建对象的新实例 | `var myTimer = new Toybox.Timer.Timer` |

#### 运算符优先级

运算符优先级决定表达式中哪些部分先计算。下表按优先级分组，表顶部优先级最高，底部最低。

| 优先级 | 运算符 |
| --- | --- |
| 1 | `new ! ~ ()` |
| 2 | `* / % & << >>` |
| 3 | `+ -` |
| 4 | `== != < <= > >=` |
| 5 | `&& and` |
| 6 | `|| or` |

## 变量和表达式

### 注释

编译器会忽略注释内容。Monkey C 支持多行注释（`/* */`）和单行注释（`//`）。下面是多行注释示例：

```cpp
/*
This is a multi-line comment. Notice that the information
continues to appear as a comment as long as it remains
inside the comment delimiters.
*/
```

单行注释可以单独占一行，也可以与其他 Monkey C 代码写在同一行：

```cpp
using Toybox.System;

// This is a single-line comment on its own line
System.println("Hello World!");  // This comment shares a line with code that will execute
```

<a id="declaring-variables"></a>

### 声明变量

所有变量都必须在使用前通过 `var` 关键字声明。由于 Monkey C 是[鸭子类型](https://en.wikipedia.org/wiki/Duck_typing)语言，无需为每个变量声明类型。

```cpp
var x = 5;            // A 32-bit integer value
var myString = "";    // An empty string
var n = null;         // Null value
var f = 4.0d;         // A 64-bit floating point value
```

数组元素未赋值时会初始化为 `null`。

```cpp
var arr = new[10];     // Create a new array; since the values are unassigned, they are initialized as 'null'
var z = arr[0] + 5;    // Attempt to add a Number to a null array element. UnexpectedTypeException!
```

<a id="constants"></a>

### 常量

常量使用 `const` 关键字声明，是支持所有基本数据类型的命名不可变值。这些值适合存储代码中会反复使用且不会变化的内容。常量必须在模块或类级别声明，不能在函数内声明。需要注意的是，`const` 的行为类似 Java 的 `final`：`const` 数组不能替换为新实例，但数组元素仍然可以修改。

```cpp
const PI = 3.14;
const EAT_BANANAS = true;
const BANANA_YELLOW = "#FFE135";
```

<a id="symbols"></a>

### 符号

[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) 对象是轻量级的常量标识符。Monkey C 编译器发现新符号时，会为其分配唯一值。因此，无需显式声明常量，就可以将符号用作常量：

```cpp
using Toybox.System;

var a = :symbol_1;
var b = :symbol_1;
var c = :symbol_2;
System.println(a == b);  // Prints true
System.println(a == c);  // Prints false
```

符号也可以作为数据结构（例如字典）中的键：

```cpp
var person = {:title=>"George", :name=>"Taylor"};
```

符号的另一个重要用途是引用 [Object.method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function) 要调用的方法，或在调用 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 时传入方法。如果实现了 `myMethod{...}`，可以使用符号 `:myMethod` 引用它进行调用。更多示例请参阅[回调](#callbacks)。

<a id="enumerations"></a>

### 枚举

枚举是从 [Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) 到 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) 值的常量映射，使用 `enum` 关键字创建。除非显式指定，否则枚举中的第一个符号值为 `0`，之后每个符号都会自动获得前一个符号值加一。枚举符号可以像常量一样使用，并且必须在模块或类级别声明。

```cpp
// Automatically incremented enumeration
enum {
    Sunday,     // 0
    Monday,     // 1
    Tuesday,    // 2
    Wednesday,  // 3
    Thursday,   // 4
    Friday,     // 5
    Saturday    // 6
}
```

```cpp
// Enumeration initialized with an explicit starting value
enum {
    x = 1337,   // x = 1337
    y,          // y = 1338
    z,          // z = 1339
    a = 0,      // a = 0
    b,          // b = 1
    c           // c = 2
}
```

### 数组

[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/) 对象是固定大小、数值索引的对象列表（不是链表）。数组中的成员不必是相同类型。和变量一样，Monkey C 中的数组没有类型标注要求。创建数组有两种方式：

```cpp
// A new array with ten empty slots, initialized to 'null'
var myArray = new[10];

// A new five-slot array with assigned values
var myArray = [1, 2, 3, 4, 5];
```

数组元素是表达式，因此也可以构建多维数组：

```cpp
var myArray = [[1, 2], ["one", "two"]];
```

Monkey C 没有直接创建空二维数组的语法，但可以这样实现：

```cpp
// Specify the array sizes
var first_dimension_size = 2;
var second_simension_size = 100;

// Create an empty one-dimensional array
var myArray = new [first_dimension_size];

// Initialize the sub-arrays to complete the two-dimensional array
for(var i = 0; i < first_dimension_size; i += 1) {
    myArray[i] = new [second_dimension_size];
}
```

**注意：**使用此技术时，必须注意数组大小。上面的示例只执行了 3 次 [Array](/connect-iq/api-docs/Toybox/Lang/Array/) 分配，就提供了 200 个槽位；如果反转两个维度，则需要 101 次分配，使用更多内存才能提供相同数量的槽位。

### 字典

[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 对象也称为关联数组或哈希表，是一种映射键值对的数据结构，类似于 [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)。键和值可以是任意 [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) 类型，同一个字典中的键值对不必使用相同类型。

```cpp
using Toybox.System;

var x = {};                                 // Declare a new, empty Dictionary
var myDictionary = { "a" => 1, "b" => 2 };  // Declare a new Dictionary with initialized values
myDictionary.put("c", "three");             // Add a new key-value pair with a String value
System.println(myDictionary["a"]);          // Prints "1"
System.println(myDictionary["c"]);          // Prints "three"
System.println(myDictionary["d"]);          // Prints "null" (there is no key "d")
```

[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) 类提供内置的 [Object.hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function) 方法，会自动对加入字典的键（索引）进行哈希处理，从而高效查找字典值。字典会随着项目的添加或删除自动扩容和调整大小，这很灵活，但也有代价：

- 频繁扩容和缩容可能导致插入、删除字典内容时出现性能问题。

- 字典的空间效率不如 [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) 或 [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)，因为它需要额外的内存分配。


大多数情况下，内置的 [Object.hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function) 方法已经足够。但如果字典使用自定义 [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) 类型作为键，实现自定义哈希可能有助于避免索引冲突并缩短搜索时间：

```cpp
class Monkey
{
    var mLengthInCentimeters;
    var mWeightInKilograms;

    initialize(length, weight) {
        mLengthInCentimeters = length;
        mWeightInKilograms = weight;
    }

    // Return a unique Number as the hash code for Monkey objects used as keys in Dictionaries.
    // For the record, this is a pretty terrible hashing function.
    function hashCode() {
        return (Math.pow(self.mLengthInCentimeters, self.mWeightInKilograms)).toNumber();;
    }
}

var rhesusMacaque = new Monkey(53.4, 7.7);
var capuchin = new Monkey(48.3, 4.2);
var mandrill = new Monkey(82.9, 32.3);

var monkeyContinents = {
    rhesusMacaque => "Asia",
    capuchin => "South America",
    mandrill => "Africa"
}
```

## 流程控制

<a id="if-statements"></a>

### if 语句

在 Monkey C 中，`if` 语句是最基本的流程控制语句。只有当布尔表达式的计算结果为 `true` 时，才会执行其中的代码。`if` 语句中的表达式不能是赋值。以下值或对象的计算结果为 `true`：

- `true`

- 非零的 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- 非 `null` 的对象


例如，当 `result` 大于零时，下面的代码会向控制台打印消息：

```cpp
using Toybox.System;

var result = 5;
if (result > 0) {
    System.println("Result is greater than zero");
}
```

可以在 `if` 代码块中加入 `else`，构建更复杂的分支。表达式一旦计算为 `true`，对应的代码块就会执行，`if` 代码块中的其余分支会被跳过：

```cpp
using Toybox.System;

var a = false;
var b = true;

if (a == true) {
    // 'a' is false, so this will not execute
    System.println("The variable 'a' is true!");
} else if (b == true) {
    // 'b' is true, so this block will execute
    System.println("The variable 'b' is true!");
} else {
    // Since the previous block has executed, this is skipped
    System.println("Neither is true!");
}
```

下面的示例中，只有当 `a` 等于 1 时，才会检查 `b` 和 `c`：

```cpp
using Toybox.System;

if (a == 1) {
    if (b == true) {
        System.println("The variable 'b' is true!");
    } else if (c == true) {
        System.println("The variable 'c' is true!");
    }
}
```

最后，Monkey C 支持三元运算符，它提供了一种简洁的替代语法。

```
var result = testExpression ? whenTrueExpression : whenFalseExpression
```

计算 `testExpression` 以确定其是否为 `true`；为 `true` 时使用 `whenTrueExpression`，为 `false` 时使用 `whenFalseExpression`。结果表达式的值会赋给 `result`。如果结果表达式没有返回值（例如调用 [System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function)），`result` 会被赋值为 `null`。

```cpp
// If 'a' is true, 'myValue' is assigned a value of 1; otherwise, it is assigned a value of 2.
var myValue = a ? 1 : 2;
```

<a id="switch-case-statements"></a>

### Switch-Case 语句

`switch` 是另一种流程控制语句，可以提供多个执行路径。它首先计算一个条件，该条件必须是对象，不能是赋值。switch 代码块中可以包含任意数量的连续 `case`，每个 `case` 后面跟着要比较的对象或 `instanceof` 表达式。当 switch 的结果等于某个 `case` 的值，或是该值的实例时，就会执行匹配的代码块。下面两个示例的运行效果相似：

```cpp
using Toybox.System;

// An if-else block checking the myValue variable
if (myValue == 1) {
    System.println("The value is 1!");
} else if (myValue == 2) {
    System.println("The value is 2!");
} else {
    System.println("The value is not 1 or 2!");
}

// A switch-case block checking the myValue variable
switch (myValue) {
    case 1:
        System.println("The value is 1!");
        break;
    case 2:
        System.println("The value is 2!");
        break;
    default:
        System.println("The value is not 1 or 2!");
}
```

匹配的 case 代码块之后的所有语句（包括后续 case）会按顺序执行，直到遇到 `break`。此时 switch 代码块结束，剩余 case 会被跳过。这种行为称为 *fall through*：

```cpp
using Toybox.System;

switch (myValue) {
    case 1:
        System.println("The value is 1!");
        // Since there is no 'break', this will "fall through" and execute
        // the code in the next case block until its break statement is reached
    case 2:
        System.println("The value is 2!");
        break;
    default:
        System.println("The value is not 1 or 2!");
}
```

switch 代码块还可以包含一个可选的 `default` case，用于处理所有未显式处理的情况。最后一个 `break` 不是必需的，因为控制流会自然离开 switch 代码块；如果需要，也可以显式写出。

由于`switch`语句可以启动对象或对象类型,因此可以执行更复杂的操作.下面是接收的应用程序的摘录,根据信息编码方式必须处理不同:

```cpp
var payload = message.getPayload();

switch (payload[MESSAGE_CODE_INDEX]) {
    case instanceof Number:
        System.println("Valid code!");
    case Toybox.Ant.MSG_CODE_EVENT_CHANNEL_CLOSED:
        // Open the channel
        ...
        break;
    case Toybox.Ant.MSG_CODE_EVENT_RX_FAIL_GO_TO_SEARCH:
        // Search for device
        ...
        break;
    case Toybox.Ant.MSG_CODE_EVENT_CRYPTO_NEGOTIATION_FAIL:
        // Data not encrypted, so handle appropriately
        ...
        break;
     case Toybox.Ant.MSG_CODE_EVENT_CRYPTO_NEGOTIATION_SUCCESS:
        // Data  encrypted, so handle appropriately
        ...
        break;
    case Toybox.Ant.MSG_CODE_EVENT_TX:
        // Update data and send out the next part of the message
        ...
    default:
        System.println("Invalid response!");
}
```

使用 `switch` 还是 `if` 通常取决于个人偏好。在需要处理较多 case 时，switch 代码块有时更易读。根据具体应用的需求，fall through 也可以成为有用的工具。

<a id="scoping-in-switch-blocks"></a>

#### Switch 代码块中的作用域

在 switch 代码块中声明的变量，其作用域为整个 switch 代码块。也可以在 case 代码块中使用花括号包围变量，将其作用域限制在该 case 代码块内。在后续 `case` 语句中使用 switch 代码块级别声明的变量之前，必须先完成初始化。例如：

```cpp
switch (myValue) {
    case true:
        // Variable 'a' is scoped at the switch block level
        var a = 1;
    case 1:
        // Results in a compiler error because 'a' was not initialized in this case block
        var z = a;
        break;
    case "B": {
        // Variable 'a' is scoped at the code block level within the curly braces, so no scoping
        // conflict with 'a' at the switch block level
        var a = true;
        break;
    }
    case instanceof MyClass:
        // Results in a compiler error because 'a' has already been defined in the switch block
        var a = "Hello!"
    default:
        // No errors because 'a' was defined in the first case and initialized at the beginning of
        // the default case
        a = 0;
        var b = a;
}
```

<a id="loops"></a>

### 循环

Monkey C 支持 `for`、`while` 和 `do-while` 循环。循环会重复执行语句，直到表达式指定的条件满足。所有循环都必须用花括号包围，因为不支持单行循环。

`while` 和 `do-while` 循环的语法与常见语言类似：

```cpp
// A do-while loop
var myCounter = 0;
do {
    // Do something
    myCounter++;
}
while (myCounter < 10);

// A while loop
myCounter = 0;
while (myCounter < 10) {
    // Do something
    myCounter++;
}
```

Monkey C 允许在 `for` 循环中声明变量，其语法也与常见语言类似：

```cpp
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.size(); i++) {
    // Do something until 'i' is greater than or equal to the array size
}
```

可以使用 `break` 和 `continue` 语句控制循环：

```cpp
using Toybox.System;

// This for loop should only print the values 5, 6, and 7.
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

<a id="exception-handling"></a>

### 异常处理

Monkey C 支持结构化处理 [Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)，用于处理 `try-catch` 代码块中的非致命错误：

```cpp
try {
    // Attempt to execute this code
} catch (e) {
    // Catch and handle any exceptions thrown
}
```

多个 `catch` 可以处理不同的异常类型。抛出异常时，第一个匹配的 catch 代码块会执行，后续 catch 代码块都会跳过（使用通用 [Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/) 处理器时尤其如此）。可选的 `finally` 语句可以放在 try-catch 代码块末尾，无论是否抛出异常都会执行。

```cpp
try {
    // Attempt to execute this code
} catch (e instanceof MyExceptionClass) {
    // Catch and handle the MyExceptionClass exception
} catch (e) {
    // Catch all other exception types
} finally {
    // Execute this after the preceding try and catch statements are completed
}
```

要抛出 [Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)，请使用 `throw` 关键字：

```cpp
throw new Lang.Exception();
```

如果不处理异常，运行时会出现 *未处理异常* 错误。Connect IQ API 在某些情况下会抛出异常，例如 [Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/) 和 [Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)。有关各种 [Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/) 类型的详情，请参阅 [API 文档](/connect-iq/api-docs/)。

<a id="functions"></a>

## 函数

函数（也称为方法）是应用程序的基础，用于定义可独立调用的代码单元。函数可以位于类或模块中，也可以出现在全局模块中。

### 定义函数

Monkey C 函数可以接受参数，但由于 Monkey C 是动态类型语言，不会声明参数类型。下面的简单函数接受 `myValue` 参数并将其乘以 2：

```cpp
function myFunction(myValue) {
    var result = myValue * 2;
}
```

**注意：**动态类型让函数很容易被错误调用，导致它在某些情况下无法工作。上面的示例在参数为数字时没有问题，但传入字符串就会出错。

### 从函数返回值

由于动态类型，无需声明函数的返回值，但 Monkey C 中的所有函数仍会返回值。可以使用 `return` 关键字指定返回值：

```cpp
function myFunction(myValue) {
    var result = myValue * 2;
    return result;
}
```

`return` 语句是可选的。如果函数没有 `return`，从调用者角度看，它会返回一个“垃圾”值。

### 调用函数

要使用函数或方法，只需使用函数调用语法：

```cpp
// Call myFunction() and pass it an argument of '2', but do nothing with the result
myFunction(2);

// Call myFunction(), pass it an argument of '2', and assign the result to the 'myResult' variable
var myResult = myFunction(2);
```

也可以在另一个函数或方法中调用函数或方法：

```cpp
function myOtherFunction() {
    var result = myFunction(2);
    // Do some other stuff with the result here
}
```

<a id="classes-and-objects"></a>

## 类和对象

类是将数据和操作捆绑在一起的蓝图，类的实例称为 *对象*。变量、函数和其他类（统称为 *成员*）都可以在 Monkey C 类中定义。对象在编译时确定，不能在运行时修改，因此所有变量都必须在使用前在局部函数、类实例或父模块中声明。

### 定义类

使用 `class` 关键字定义类。例如，下面的简单类定义了一个表示圆半径的 `mRadius` 成员：

```cpp
class Circle {
    var mRadius;
}
```

### 创建对象

使用 `new` 关键字创建类的实例：

```cpp
var myCircle = new Circle();
```

上面的类目前还没有太多功能。不过，使用 `new` 实例化对象时，会为对象分配内存，并自动调用其 `initialize()` 方法作为构造函数。下面的 Circle 类实现了 `initialize()`，每次创建新 Circle 时都会设置半径：

```cpp
class Circle {
    var mRadius;
    function initialize(aRadius) {
        mRadius = aRadius;
    }
}

// Create a new circle with a radius of 2
var myCircle = new Circle(2);
```

如果类是嵌套的，必须先实例化外层类，之后才能实例化嵌套类。

### 进入课堂成员

在方法实现中，可以使用 `self` 或 `me` 关键字引用当前对象实例。它们可以用来区分实例变量和局部变量，也可以让代码更清晰。例如，下面的方法使用 `self` 引用 `mRadius`，计算圆的周长和面积：

```cpp
using Toybox.Math as Math;

class Circle {
    var mRadius;
    function initialize(aRadius) {
        mRadius = aRadius;
    }

    function getCircumference() {
        return 2 * Math.PI * Math.pow(self.mRadius, 2);  // 2*PI*r
    }

    function getArea() {
        return Math.PI * Math.pow(self.mRadius, 2);      // PI*r^2
    }
}
```

**注意：**Monkey C 中的嵌套类无法访问外层类的成员。

### 继承

继承允许一个类基于另一个类，从而加快开发并促进代码复用。与其为相似对象定义全新类，不如让新类继承已有类的成员。例如，可以使用 `extends` 关键字定义 Sphere 类，并从 Circle 继承许多属性：

```cpp
using Toybox.Math as Math;
using Toybox.System as System;

class Circle {
    var mRadius;
    function initialize(aRadius) {
        mRadius = aRadius;
    }

    function getCircumference() {
        return 2 * Math.PI * Math.pow(self.mRadius, 2);   // 2*PI*r
    }

    function getArea() {
        return Math.PI * Math.pow(self.mRadius, 2);     // PI*r^2
    }

    function describe() {
        System.println("Circle!");
    }
}

class Sphere extends Circle {
    function initialize(aRadius) {
        Circle.initialize(aRadius);
    }

    // Notice Sphere has no getCircumference() method implemented here. Instead, it inherits the
    // getCircumference() method from the Circle class and may use it as if it were its own method.

    function getArea() {
        return 4 * Math.PI * Math.pow(self.mRadius, 2);  // 4*PI*r^2
    }

    function describe() {
        System.print("I'm a Sphere! My parent is a ");
        Circle.describe();
    }
}
```

唯一不会从父类（也称为基类或超类）继承的是 `initialize()` 方法；Sphere 必须单独实现该方法。在这里，它只是调用父类的 `initialize()` 来设置半径。

**注意：**Monkey C 不会隐式调用父类的 `initialize()`，因此子类必须显式调用基类构造函数。在 Connect IQ SDK 中扩展 `View` 类的示例里可以看到这一点。

Circle 类的 `getArea()` 不适用于 Sphere，因此 Sphere 实现了新的 `getArea()`，以*覆盖* Circle 的方法。最后，为两个类添加 `describe()` 方法，让每种对象类型描述自己。现在运行这些类：

```cpp
// Create new objects
var myCircle = new Circle(5);
var mySphere = new Sphere(5);

System.println(myCircle.getCircumference());  // 31.415928
System.println(myCircle.getArea());           // 78.539818
myCircle.describe();                          // "Circle!"

System.println(mySphere.getCircumference());  // 31.415928 (same as a circle of the same radius)
System.println(mySphere.getArea());           // 314.159271
mySphere.describe();                          // "I'm a Sphere! My parent is a Circle!"
```

注意，Sphere 的 `describe()` 方法直接使用父类名称调用父类的 `describe()`。`superclass.memberMethod()` 在 Monkey C 中有效，但不支持 `superclass.memberVariable` 语法。

<a id="static-members"></a>

### 静态成员

有时需要访问类成员，但不希望创建类实例。例如，可以定义一个只包含单位转换常量的 Conversion 类：

```cpp
class Conversion {
    const FEET_PER_METER      = 3.28084;
    const MILE_PER_KILOMETER  = 0.621371;
    const TABLESPOONS_PER_CUP = 16;
    ...
}

var meters = 32;
var myConverter = new Conversion(); // Create an instance of the Conversion class
System.println(meters * myConverter.FEET_PER_METER + " feet"); // Prints "104.986877 feet"
```

通常，使用类中的变量、常量、枚举或函数前必须先实例化该类。如果给常量添加 `static` 关键字，就可以在不实例化 Conversion 的情况下使用它们：

```cpp
class Conversion {
    static const FEET_PER_METER      = 3.28084;
    static const MILE_PER_KILOMETER  = 0.621371;
    static const TABLESPOONS_PER_CUP = 16;
    ...
}

var meters = 32;
System.println(meters * Conversion.FEET_PER_METER + " feet"); // Prints "104.986877 feet"
```

静态成员的另一个优势是属于类本身，而不是某个实例。因此，静态变量可以在类的多个实例之间共享；在一个实例中修改它的值后，所有实例都会立即看到新值：

```cpp
class BananaBunch {
    static var mNumberOfBananas = 10;
}

var bunchOne = new BananaBunch();
var bunchTwo = new BananaBunch();

System.println(bunchOne.mNumberOfBananas); // 10
System.println(bunchTwo.mNumberOfBananas); // 10

bunchOne.mNumberOfBananas = 12; // Change the value of the static variable

System.println(bunchOne.mNumberOfBananas); // 12
System.println(bunchTwo.mNumberOfBananas); // 12 - notice this one also reflects the change!
```

<a id="data-hiding"></a>

### 数据隐藏

类成员有三个访问级别：*private*、*protected* 和 *public*。`private` 修饰符表示成员只能在所属类中访问；`protected` 表示成员只能在所属类或子类中访问；`hidden` 是 `protected` 的同义词。`public` 是默认访问级别，也可以显式指定。使用 `public` 修饰枚举、变量或函数时，这些成员对其他类可见。

```cpp
using Toybox.System as System;

class MyClass {
    protected var mVariable;
}

// This will produce a runtime error since it's trying to access a protected variable from myClass
function myFunction() {
    var myObject = new MyClass();
    System.println(myObject.mVariable);
}
```

`public` 或 `protected` 变量可以使用以下任一格式访问：

```cpp
var x = mMmemberVariable;
var y = self.mMemberVariable;
```

**注：**隐藏数据只能用于类成员级别。Monkey C 中的[模块](#modules)没有隐藏数据的概念，而[类](#classes-and-objects)始终是公开的。

<a id="instanceof-and-has"></a>

### instanceof 和 has

Monkey C 提供 `instanceof` 和 `has` 两个运算符执行运行时类型检查。Monkey C 的面向对象设计模式结合这两个运算符，可以让同一个代码库支持多种设备实现。

`instanceof` 运算符检查对象实例是否继承自给定类：

```cpp
using Toybox.System;

var value = 5;
if (value instanceof Lang.Number) {
    System.println("Value is a number");
}
```

`has` 运算符用于检查给定对象是否具有特定符号。该符号可以是公共方法、实例变量，甚至是类定义或模块。例如，加速度计数据可通过 [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/) 获取，但并非所有产品都配备加速度计。在某些产品上尝试使用这些数据可能导致应用因 *Symbol Not Found* 错误而崩溃。为避免此问题，可以使用 `has` 运算符检查是否支持加速度计：

```cpp
using Toybox.Sensor as Sensor;

var sensorInfo = Sensor.getInfo();
if (sensorInfo has :accel && sensorInfo.accel != null) {
    var accel = sensorInfo.accel;
    var xAccel = accel[0];
    var yAccel = accel[1];
    System.println("x: " + xAccel + ", y: " + yAccel);
}
```

### 回调

Monkey C 中的函数不是一等对象，因此不能直接作为参数传递给其他函数作为回调。由于函数与创建它们的对象绑定，必须使用 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 对象创建回调。

一种方式是组合使用函数和对象实例：

```cpp
class MyClass {
    function operation(a, b) {
        // The code here is really amazing. Like mind blowing amazing.
    }
}

function myFunction() {
    var myObject = new MyClass();                // Create a new instance of MyClass
    var myMethod = myObject.method(:operation);  // Get a callback for the "operation" method from myObject
    myMethod.invoke(1, 2);                       // Invoke myObjects's "operation" method
}
```

与类不同，模块不继承 [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)，因此无法访问 `method()` 函数。不过，可以创建新的 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 实例，让模块级函数以类似方式作为回调调用：

```cpp
using Toybox.Lang as Lang;

module MyModule
{
    function operation() {
        // Some more amazing code. Only an infinite number of monkeys typing randomly over an
        // infinite period of time could write something this good.
    }
}

function myFunction() {
    var myMethod = new Lang.Method(MyModule, :operation);
    myMethod.invoke();
}
```

[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 对象会在创建它的对象实例上调用方法，并持有源对象的强引用。

### 弱引用

Monkey C 使用*引用计数*，这意味着当引用某块内存的对象数量降至零时，运行时系统会释放该内存。引用计数可以快速回收内存，这在低内存环境中很重要。引用计数的缺点是*循环引用*：当引用链形成环时，就会发生循环引用。例如，假设对象 C 引用对象 A，而对象 A 引用对象 B，*并且*对象 B 又引用对象 A：

![](/connect-iq/resources/programmers-guide/weak-reference-1.png)

一段时间后，C 被加入另一组对象，因此它放弃了对 A 的引用，转而持有真正需要的对象：

![](/connect-iq/resources/programmers-guide/weak-reference-2.png)

此时 A 和 B 所占用的内存本应释放，但由于它们*彼此*引用，引用计数都不会降为零。A 和 B 使用的内存无法被其他对象使用，这通常不是好事。不过，有时 A 和 B 确实需要相互引用。此时可以使用*弱引用*，保留对象引用但不增加引用计数。这样引用可以在必要时断开，应用也能处理对象被释放的情况。

![](/connect-iq/resources/programmers-guide/weak-reference-3.png)

要创建弱引用，请使用 `weak()` 方法。这是所有 Monkey C 对象都可用的 [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/) 方法。

```cpp
// We would make a "Hans and Franz" reference here but certain advertising has probably made them uncool.
var weakReference = myObject.weak()
```

如果对不可变类型（[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)、[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)、[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/)、[Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/)、[Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)、[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)）调用 `weak()`，它会返回对象本身。否则会返回 [Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/) 实例。弱引用提供 `stillAlive()` 方法检查引用是否有效，并提供 `get()` 方法创建强引用对象：

```cpp
if (weakReference.stillAlive()) {
    var strongReference = weakReference.get();
    strongReference.myMethod();
}
```

请记住，只在必要的范围内保留强引用！

<a id="modules"></a>

## 模块

Monkey C 模块类似于 Java 包，但可以包含变量、函数、类型和其他模块：

```cpp
module MyModule
{
    class MyClass {
        var mValue;
    }
    var moduleVariable;
}

function myFunction() {
    MyModule.moduleVariable = new MyModule.MyClass();
}
```

静态方法通常位于模块级别，而不是属于某个类。与类不同，模块没有继承或数据隐藏的概念（模块不支持 `extends` 和 `hidden` 关键字）。

<a id="using-statements"></a>

### using 语句

可以使用 `using` 关键字将模块导入其他类或模块，从而在当前类或模块中使用其中定义的内容。

```cpp
using Toybox.System;

function myFunction() {
    System.print("Hello");
}
```

也可以使用 `as` 子句为模块指定别名，以缩短模块名称或采用不同的命名方案：

```cpp
using Toybox.System as Sys;

function myFunction() {
    Sys.print("Hello");
}
```

导入模块后，其中的类必须通过父模块引用。

## 作用域

Monkey C 是一种基于消息的语言。调用函数时，虚拟机会在运行时按以下顺序搜索函数：

1. 类成员

2. 超类成员

3. 类的静态成员

4. 父模块的成员，以及全局命名空间中的父模块

5. 沿父模块链向上搜索，直到全局命名空间

6. 父模块的 public 静态成员，直到全局命名空间

7. 沿父模块链向上搜索 public 静态成员，直到全局命名空间


以下代码示例说明了：

```cpp
using Toybox.System;

// A globally visible function
function globalFunction() {
    System.println("This is the global function!");
}

module Parent
{
    function parentFunction() {
        System.println("This is the parent's function!");
        globalFunction();  // May call a globally visible function
    }

    class Child {
        function childFunction() {
            System.println("This is the child's function!");
            globalFunction();       // May call a globally visible function
            parentFunction();       // May call a function in our parent module
            staticChildFunction();  // May call a static function within the class

        }

        static function staticChildFunction() {
            System.println("This is the child's static function!");
            globalFunction();  // May call a globally visible function
            parentFunction();  // May call a function in our parent module
            // Static methods can't call instance methods (childFunction) but still have access to parent modules!
        }
    }
}
```

在某些情况下，使用全局作用域的 bling 符号 `$` 搜索全局命名空间，而不是当前作用域，可能更高效：

```cpp
using Toybox.System as System;
function myFunction() {
    System.println("Hello Hello");
}

class MyClass {
    function myFunction() {
        System.println("Every time I say goodbye you say hello");
    }

    function() {
        $.myFunction();  // Call the global myFunction()
        myFunction();    // Call the instance myFunction()
    }
}
```

由于 Monkey C 是动态类型语言，引用全局变量时，会先搜索对象的继承结构和模块层级，最后才查找全局变量。相反，可以使用 bling 符号直接搜索全局命名空间：

```cpp
using Toybox.System as System;

var familyFortune = "There's always money in the banana stand.";

module BluthCompany
{
    class BananaStand {
        function getMoney() {
            // At runtime, the VM will search:
            //   1. The BananaStand
            //   2. The BananaStand's superclass, Toybox.Lang.Object
            //   3. The BluthCompany module
            //   4. The BluthCompany module's parent globals
            // ...and finally finds the family fortune!
            System.println(familyFortune);

            // This will search only the global namespace for the family fortune. Thanks bling!
            System.println($.familyFortune);
        }
    }
}
```

Monkey C 通常会在整个对象层级中搜索对象；使用 bling 符号时，只检查全局命名空间。如果找不到目标，虚拟机不会回到对象层级搜索，而是返回 *Symbol Not Found* 错误。

**注意：**switch 代码块还有其他作用域规则，详见 [Switch-Case Statements](#scoping-in-switch-blocks)。

## 注解

Monkey C 允许将符号关联到类或模块的方法和变量。注解用于向编译器传达额外意图，有时也用于在不改变 Monkey C 语法的情况下增加功能。例如，Run No Evil 测试使用注解标识仅用于测试的代码：

```cpp
// A test class containing a Run No Evil test method denoted by (:test)
class TestMethods {
    (:test)
    static function testThisClass(x)
}
```

下面的注解对 Monkey C 编译器具有特殊意义：

**:background**

表示可用于 [Background](/connect-iq/api-docs/Toybox/Background/) 进程的代码块。

**:debug**

编译时，使用此注解修饰的代码块不会包含在发布构建中。

**:release**

编译时，使用此注解修饰的代码块不会包含在调试构建中。

**:test**

表示可用于 [Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing) 测试 [Test](/connect-iq/api-docs/Toybox/Test/) 模块的代码块。

构建项目时，编译器会将注解写入项目 `bin` 目录生成的 `debug.xml` 文件。
