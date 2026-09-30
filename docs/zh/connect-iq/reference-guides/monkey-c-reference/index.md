---
title: "Monkey C Language Reference"
---
# Monkey C 语言参考

![](/connect-iq/resources/programmers-guide/smart-monkey.png)

子C是一个从头开始构建的基于对象的语言,旨在轻松在可穿戴设备上开发应用程序.如果你过去曾经使用JavaTM,PHP,Ruby或PythonTM等动态语言,子C应该非常熟悉.

子C的目标是将应用程序开发的尖端边缘圆圆,允许开发人员更多地关注客户而不是减少资源限制.子C编译成字节代码,由虚拟机解释,类似于Java.

## 语言基础

### 数据类型

子C是一个[duck typed](https://en.wikipedia.org/wiki/Duck_typing)语言,并没有真正的原始类型.[Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/),[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/),[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/),[Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/),[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/)和[Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/)类型都是对象,这意味着原始类型可以像其他对象一样有方法.在Java或C++等语言中,必须对每个函数参数和返回值进行类型声明. however子C编译器会选择验证类型安全性,然而,当函数不处理对象时会出现运行时间错误.使用[`instanceof` and `has`](#instanceof-and-has)这样的操作员可以帮助避免潜在的键字问题.

子C支持的基本数据类型是:

| 类型 | 说明 | Example |
| --- | --- | --- |
| [Number](/connect-iq/api-docs/Toybox/Lang/Number/) | 32 位有符号整数 | `var x = 5;` |
| [Float](/connect-iq/api-docs/Toybox/Lang/Float/) |32位浮点号码| `var y = 6.0;` |
| [Long](/connect-iq/api-docs/Toybox/Lang/Long/)\* | 64 位有符号整数 | `var l = 5l;` |
| [Double](/connect-iq/api-docs/Toybox/Lang/Double/)\* |64位浮点号码| `var d = 4.0d;` |
| [Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) |`true`和`false`| `var bool = true;` |
| [Char](/connect-iq/api-docs/Toybox/Lang/Char/) | UTF-32 字符 | `var c = 'x';` |
| [String](/connect-iq/api-docs/Toybox/Lang/String/)\* |一个字符的序列| `var str = "Hello";` |
| [Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/) |一个轻量级的恒定识别器 (查看[Symbols](#symbols)更多信息)| `var sym = :mySymbol;` |

Monkey C 还支持两种容器类型：

| 类型 | 说明 | Example |
| --- | --- | --- |
| [Array](/connect-iq/api-docs/Toybox/Lang/Array/)\* |固定尺寸 (不是链接列表),数值索引,单维物体列表| `var arr = new [1, 2, 3];` |
| [Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)\* |交配阵列或哈希表,将键映射到值| `var dict = {one=>1, two=>2};` |

需要堆积分配,需要比32位类型更多的内存.

在 Monkey C 编程语言中,有几个关键字,操作符和保留的单词,不能作为程序中的变量或符号:

| Operator | 说明 | Example |
| --- | --- | --- |
| `and` |逻辑 AND,相当于`&&`| 请参阅 [Logical Operators](#logical-operators) |
| `as` |指定一个以`using`语句表示的模块的号| 请参阅 [Using Statements](#using-statements) |
| `break` |从循环或开关区块中脱| 请参阅 [Loops](#loops) 和 [Switch-Case Statements](#switch-case-statements) |
| `catch` |抓住一个抛出的[Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)| 请参阅 [Exception Handling](#exception-handling) |
| `case` |指定`switch`区块中的一个案例| 请参阅 [Switch-Case Statements](#switch-case-statements) |
| `class` |宣布一个新的类型| 请参阅 [Classes and Objects](#classes-and-objects) |
| `const` |声明一个新的常数| 请参阅 [Constants](#constants) |
| `continue` |继续执行电流,主要在循环中使用| 请参阅 [Loops](#loops) |
| `default` |在`switch`区块中指定默认案例| 请参阅 [Switch-Case Statements](#switch-case-statements) |
| `do` |启动`do`循环| 请参阅 [Loops](#loops) |
| `else` |在`if`区块中指定一个替代案例| 请参阅 [If Statements](#if-statements) |
| `enum` |声明一个新的清单| 请参阅 [Enumerations](#enumerations) |
| `extends` |声明从另一个类中继承的类型| 请参阅 [Classes and Objects](#classes-and-objects) |
| `false` | 逻辑 `false` | 请参阅 [If Statements](#if-statements) |
| `finally` |指定一个代码区块,在`try`区块中总是执行| 请参阅 [Exception Handling](#exception-handling) |
| `for` |启动`for`循环| 请参阅 [Loops](#loops) |
| `function` |声明一个新函数| 请参阅 [Functions](#functions) |
| `has` |检查对象是否具有特定的符号| 请参阅 [Instanceof and Has](#instanceof-and-has) |
| `hidden` |指定一个受保护对象成员,相当于`protected`| 请参阅 [Data Hiding](#data-hiding) |
| `if` |启动一个`if`区块| 请参阅 [If Statements](#if-statements) |
| `instanceof` |检查对象类型| 请参阅 [Instanceof and Has](#instanceof-and-has) |
| `me` |参照当前的对象实例| 请参阅 [Classes and Objects](#classes-and-objects) |
| `module` |声明一个新的模块| 请参阅 [Modules](#modules) |
| `NaN` |无效或未定义的值",不是数字"| NA |
| `native` |用于内部使用| NA |
| `new` |创建一个对象的新实例| 请参阅 [Miscellaneous Operators](#miscellaneous-operators) |
| `null` |一个零值| 请参阅 [Declaring Variables](#declaring-variables) |
| `or` |〇等于 `的逻辑 OR||` | 请参阅 [Logical Operators](#logical-operators) |
| `private` |指定一个私有对象成员| 请参阅 [Data Hiding](#data-hiding) |
| `protected` |指定受保护对象成员| 请参阅 [Data Hiding](#data-hiding) |
| `public` |指定一个公共对象成员| 请参阅 [Data Hiding](#data-hiding) |
| `return` |指定从函数返回值| 请参阅 [Functions](#functions) |
| `self` |参照当前的对象实例| 请参阅 [Classes and Objects](#classes-and-objects) |
| `static` |声明静态变量或函数| 请参阅 [Static Members](#static-members) |
| `switch` |启动一个`switch`区块| 请参阅 [Switch-Case Statements](#switch-case-statements) |
| `throw` |放一个例外| 请参阅 [Exception Handling](#exception-handling) |
| `true` | 逻辑 `true` | 请参阅 [If Statements](#if-statements) |
| `try` |启动一个试捕区块来处理例外| 请参阅 [Exception Handling](#exception-handling) |
| `using` |进口用于应用程序的模块| 请参阅 [Using Statements](#using-statements) |
| `var` |声明一个新的变量| 请参阅 [Declaring Variables](#declaring-variables) |
| `while` |启动新的`while`循环或设置`do`循环的条件| 请参阅 [Loops](#loops) |

### 运算符

在下面的例子中,假设`a = 10`,`b = 5`,`x = 1`,`y = 0`,`m = true`和`n = false`.

#### 算术运算符

| Operator | 说明 | Example |
| --- | --- | --- |
| `+` | 加法：两个操作数；一元正号 |`a + b`结果为 15;`+a`是 10|
| `-` |减去第二个操作数从第一个;单数负|`a - b`结果为 5;`-a`是 -10|
| `*` | 将两个操作数相乘 | `a * b` 的结果为 50 |
| `/` |按分数分配股息| `a / b` 的结果为 2 |
| `%` |模块,在分开后提供剩余部分| `a % b` 的结果为 0 |
| `++` |增加一个数字值,可以是前置或后置| `a++` 的结果为 11 |
| `--` |一个数值的减值,可以是前或后| `a--` 的结果为 9 |

**注:**`+`运算符也用于连接[String](/connect-iq/api-docs/Toybox/Lang/String/)值.

#### 关系运算符

| Operator | 说明 | Example |
| --- | --- | --- |
| `==` |检查两个操作数是否等等|`a == b`是`false`|
| `!=` |检查两个操作数是否不等等|`a != b`是`true`|
| `>` |检查左边操作数是否大于右边操作数|`a > b`是`true`|
| `<` |检查左边操作数是否小于右边操作数|`a < b`是`false`|
| `>=` |检查左边操作数是否大于右边操作数或等于右边操作数|`a >= b`是`false`|
| `<=` |检查左边操作数是否小于右边操作数|`a <= b`是`false`|

#### 逻辑运算符

| Operator | 说明 | Example |
| --- | --- | --- |
|`&&`, '和'|逻辑 AND,如果两个值都是正确的`true`|`m && n`是`false`|
| `||` |逻辑 OR,如果任何值都是正确的,则是`true`| `m |||
| `!` |逻辑NOT,反转一个逻辑表达式的值|`!(m && n)`是`true`|

在子C中,适用于:

- 如果一个对象不是`null`,则被评为`true`.

- 对`Number`或`Long`应用的`!`与`~`的应用相同.


比较逻辑表达式中的非布尔值时：

- 表达式`x && y`首先评估`x`. 如果`x`是`false`,则返回它的值;否则,`y`被评估,结果值被返回.

- 表达式`x || y`首先评估`x`. 如果`x`是`true`,则返回它的值;否则,`y`被评估,结果值被返回.


#### 位运算符

位向运算者对二进制值进行操作,比分比分.这些运算遵循以下真相表所示的公约:

| p | q | p & q | p | q | p ^ q |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 |

假设`p = 3`和`q = 1`.如果写为字节值,`p`是`0000 0011`和`q`是`0000 0001`.

| Operator | 说明 | Example |
| --- | --- | --- |
| `&` |如果它存在于两种操作中,则将结果复制为 bitwise AND| `p & q` 的结果为 1（0000 0001） |
| `|` |如果它存在于任何一个操作中,它可以对结果进行复制| `p |` (0000 0011)|
| `^` |如果它存在于任何一个操作数中,但不是两个| `p ^ q` 的结果为 2（0000 0010） |
| `~` |两人的恭喜,这实际上"翻了"两部分| `~q` 的结果为 -2（1111 1110） |

** 注:** 子C中的所有数字值都是签名值,由高序位表示

#### 赋值运算符

| Operator | 说明 | Example |
| --- | --- | --- |
| `=` |从右操作数到左操作数分配值|`b = a`将`b`赋予`a`(10) 的值|
| `+=` |添加右操作和左操作,将结果分配到左操作|`a += b`相当于`a = a + b`(15)|
| `-=` |减去右操作数从左操作数,将结果分配到左操作数|`a -= b`相当于`a = a - b`(5)|
| `*=` |乘以左运行对右运行对左运行对结果分配|相当于`a *= b`和`a = a * b`(50)|
| `/=` |分开左运算与右运算,将结果分配到左运算|`a /= b`相当于`a = a / b`(2)|
| `%=` |分开左运行器与右运行器,将其余的分配到左运行器| `a %= b` 的结果为 0 |
| `<<=` |移动左运行对右运行对左运行对右运行对结果分配|`x <<= y`相当于`x = x << y`(1)|
| `>>=` |右移动左运行对右运行对右运行对左运行分配结果|`x >>= y`相当于`x = x >> y`(1)|
| `&=` |位向和右运行对左运行,将结果分配给左运行|`x &= y`相当于`x = x & y`(0)|
| `|=` |位向或右运行对左运行对应,并将结果分配给左运行对应| `x |= y` equivalent to `x = x | y` (1) |
| `^=` |位向 XOR 右操作数与左操作数,并将结果分配到左操作数|`x ^= y`相当于`x = x ^ y`(1)|

#### 其他运算符

| Operator | 说明 | Example |
| --- | --- | --- |
|`?`和`:`|三角形运算器,[if-else](#if-statements)的缩写形式| `var myBool = a > 5 ? true : false` |
| `new` |创建一个对象的新实例| `var myTimer = new Toybox.Timer.Timer` |

#### 运算符优先级

运算器优先级决定了表达式的哪些部分将首先进行评估.下列列表将运算器按优先级组分,表顶部出现的最高,下部出现的最低.

| Precedence | Operators |
| --- | --- |
| 1 | `new ! ~ ()` |
| 2 | `* / % & << >>` |
| 3 | `+ -` |
| 4 | `== != < <= > >=` |
| 5 | `&& and` |
| 6 | `|| or` |

## 变量和表达式

### 注释

编译器忽略了评论的声明.子C支持多行 (`/* */`) 和单行 (`//`) 的评论.以下是多行评论的一个例子:

```cpp
/*
This is a multi-line comment. Notice that the information
continues to appear as a comment as long as it remains
inside the comment delimiters.
*/
```

单行评论可能会出现在自己的行上,或可能出现在其他子C代码的行上:

```cpp
using Toybox.System;

// This is a single-line comment on its own line
System.println("Hello World!");  // This comment shares a line with code that will execute
```

### 声明变量

所有变量必须在使用`var`关键字之前被声明.由于子C是[duck typed](https://en.wikipedia.org/wiki/Duck_typing)语言,因此不需要注意每个变量的类型.

```cpp
var x = 5;            // A 32-bit integer value
var myString = "";    // An empty string
var n = null;         // Null value
var f = 4.0d;         // A 64-bit floating point value
```

ck,,,,,,,.

```cpp
var arr = new[10];     // Create a new array; since the values are unassigned, they are initialized as 'null'
var z = arr[0] + 5;    // Attempt to add a Number to a null array element. UnexpectedTypeException!
```

### 常量

常数以`const`关键字声明,它们是名字的,可支持所有基本数据类型的不可变值.这些值对于存储可重复使用的不变值来有用.常数必须在模块或类级别上声明,并且不能在函数内声明.重要的是,`const`以类似Java的`final`关键字的方式运行.例如,`const`数组可以防止数组被新实例取代,但数组的元素可以被修改.

```cpp
const PI = 3.14;
const EAT_BANANAS = true;
const BANANA_YELLOW = "#FFE135";
```

### 符号

[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)对象是轻量级的常数识别器.当子C编译器找到一个新的符号时,它将赋予它一个新的独特值.这允许符号作为常数使用,而不明确声明一个常数:

```cpp
using Toybox.System;

var a = :symbol_1;
var b = :symbol_1;
var c = :symbol_2;
System.println(a == b);  // Prints true
System.println(a == c);  // Prints false
```

象征也作为数据结构中的关键,如字典:

```cpp
var person = {:title=>"George", :name=>"Taylor"};
```

符号的另一个重要用途是引用[Object.method()](/connect-iq/api-docs/Toybox/Lang/Object/#method-instance_function)的调用方法实现或在[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)的调用后分配.在这种情况下,如果已实现`myMethod{...}`的方法,可以使用`:myMethod`的符号引用它作为调用后.查看[Callbacks](#callbacks)的部分,以了解更多详细的例子.

### 枚举

编号是从[Lang.Symbol](/connect-iq/api-docs/Toybox/Lang/Symbol/)到[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)值的恒定映射,使用`enum`关键词创建.除非明确设置,则编号中的第一个符号被赋予`0`的值,每一个后续符号都被自动赋予前一个未分配的符号加一个的值.编号符号可以像常数一样使用 (这基本上是它们的),并且像常数一样,编号必须在模块或类层面宣布.

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

[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)对象是固定尺寸的 (不是链接列表),数值索引的对象列表.一个阵列的所有成员不需要是相同类型的对象.就像变量一样,子C中的阵列是无类型的,因此不需要声明阵列的类型.创建一个新的阵列有两种方法:

```cpp
// A new array with ten empty slots, initialized to 'null'
var myArray = new[10];

// A new five-slot array with assigned values
var myArray = [1, 2, 3, 4, 5];
```

阵列元素是表达式,所以也可以构建多维阵列:

```cpp
var myArray = [[1, 2], ["one", "two"]];
```

虽然子C没有直接的方式来创建一个空的二维数组,但可以做到:

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

** 注:**使用这种技术时,很重要要注意数组尺寸.上面的例子只做了三次[Array](/connect-iq/api-docs/Toybox/Lang/Array/)分配,以提供200个插槽,但如果维度逆转,这将使得101个分配,使用更多的内存来提供相同的插槽数量.

### 字典

[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)对象,也称为关联阵列或哈希表,是类似于[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)对象的数据结构,它们映射键值对.键和值可以是任何类型的[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/),每个键值对不需要在给定的词典中是相同类型的组合.

```cpp
using Toybox.System;

var x = {};                                 // Declare a new, empty Dictionary
var myDictionary = { "a" => 1, "b" => 2 };  // Declare a new Dictionary with initialized values
myDictionary.put("c", "three");             // Add a new key-value pair with a String value
System.println(myDictionary["a"]);          // Prints "1"
System.println(myDictionary["c"]);          // Prints "three"
System.println(myDictionary["d"]);          // Prints "null" (there is no key "d")
```

[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)类有内置的[Object.hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function)方法,它自动将添加到字典中的密钥 (索引) 哈希 (索引).这提供了一个高效的方法来查找任意排序的字典值.字典随着添加或删除项目的自动变大和重新改大小,这使得它们非常灵活,但成本:

- 如果过度调整大小和重新调整,插入和删除字典内容可能会导致性能问题

- 词典不像[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)或[Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)类型的对象那么空间效率,因为它们需要额外的内存分配空间


在大多数情况下,内置的[Object.hashCode()](/connect-iq/api-docs/Toybox/Lang/Object/#hashCode-instance_function)方法是足够的,但如果在字典中使用自定义[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)类型的密钥,则可能是有益的,以避免索引碰撞并减少搜索时间:

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

###如果声明

在子C中,`if`语句是可用的流量控制语句中最基本的语句.它们用于执行特定部分的代码 *只有*如果特定的布尔式表达式评估为`true`.由`if`语句评估的表达式不能是赋值.将评估为`true`的值或对象包括:

-`true`的值

- 不为零的[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)

- 一个非零的[Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)


例如,当`result`的值超过零时,它会打印一个信息给控制台:

```cpp
using Toybox.System;

var result = 5;
if (result > 0) {
    System.println("Result is greater than zero");
}
```

关键字`else`可以添加到`if`区块中,以便更复杂的分分类.一旦表达式被评价为`true`,其相关的语句区块会执行,并且在`if`区块中的任何剩余语句都会被跳过:

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

在下面的示例中,`b`和`c`仅在`a`等于1:

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

最后,子C支持三位数运算符,这是一个简单的,替代语法.

```
var result = testExpression ? whenTrueExpression : whenFalseExpression
```

在`testExpression`被评估以确定它是否是`true`,`whenTrueExpression`是`true`结果,`whenFalseExpression`是`false`结果.结果表达式的值被分配给`result`变量.如果结果表达式没有达到值 (例如类似于[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function)语句),`result`变量被分配为`null`的值.

```cpp
// If 'a' is true, 'myValue' is assigned a value of 1; otherwise, it is assigned a value of 2.
var myValue = a ? 1 : 2;
```

### Switch-Case 语句

一个`switch`语句是另一种流量控制语句,它可能具有多个执行路径,而不是`if`语句提供的单一路径.一个`switch`语句首先评估一个条件,必须是对象分配不允许.任何数量的连续`case`语句都被允许在开关区块内,每个语句都被对象或`instanceof`表达式接下来.当`switch`评估是等于或是`case`语句的一个实例时,匹配案例区块将执行.例如,这两个例子运行类似:

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

匹配案例区块之后的所有语句,包括随后的案例区块,都在顺序执行,直到遇到`break`语句.此时,开关区块结束,剩余的案例区块被跳过.这种行为称为*fall through*,如下:

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

一个开关区块也可以有一个单个,可选的`default`案例,它处理所有未明确处理的案例.最后一个`break`声明不需要,因为控制流量自然会在区块末端掉入开关区块,但如果首选的话,可以包括.

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

决定是否使用`switch`而不是`if`通常是个人偏好的问题.在某些情况下,交换区块可能更可读,特别是当有相对大量的案例需要考虑时.根据特定应用程序的需求,落后也可以是一个有用的工具.

#### Switch 代码块中的作用域

Variables declared within the switch block are scoped at the switch block level. Variables may also be enclosed by curly braces within a case block to limit scope to that case block. All variables defined at the switch block level must be initialized before being used in any subsequent `case` statements. For 示例：

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

### 循环

子C支持`for`,`while`和`do-while`循环.循环用于重复语句,直到一个表达式指定的条件达到.所有循环都需要关闭其语句块的支,而单线循环不支持.

`while`和`do-while`循环具有熟悉的语法:

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

子C允许在`for`循环中变量声明,这些循环也具有熟悉的语法:

```cpp
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.size(); i++) {
    // Do something until 'i' is greater than or equal to the array size
}
```

通过使用`break`和`continue`语句来控制循环中的流量:

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

### 异常处理

子C支持结构化[Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)处理,以防止`try-catch`块的非致命错误:

```cpp
try {
    // Attempt to execute this code
} catch (e) {
    // Catch and handle any exceptions thrown
}
```

多个`catch`语句可以处理多个可能的例外类型.当一个例外被扔时,第一个匹配的捕获区块将执行,所有随后的捕获区块将被跳过 (如果使用通用[Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)处理器,这是一个好主意的位置).可选的`finally`语句可以放在试捕获区块的尽头,这将执行不论是否投放了例外.

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

要抛出[Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/),使用`throw`关键字:

```cpp
throw new Lang.Exception();
```

如果不处理例外,运行时会出现 *未处理的例外* 错误.连接 IQ API 在一些实例中会抛出例外,如[Lang.SymbolNotAllowedException](/connect-iq/api-docs/Toybox/Lang/SymbolNotAllowedException/)和[Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/). 查看[API 文档](/connect-iq/api-docs/)有关各种[Lang.Exception](/connect-iq/api-docs/Toybox/Lang/Exception/)类型的更多详情.

## 函数

函数 (也称为方法) 是应用程序的基础,定义了单独的可调用代码单元.它们可以存在于一个类,模块或出现在全球模块中.

定义一个函数

子C函数可以采用参数,但由于子C是一个动态键字语言,所以参数类型不被声明.下面是一个简单的函数,采用一个'myValue'参数并乘以两个:

```cpp
function myFunction(myValue) {
    var result = myValue * 2;
}
```

** 注:** 动态打字可以轻松地意外地写函数,可能在所有情况下都不会工作.上面的例子很好,如果你提供一个数字作为参数,但如果它通过一个字符串,它不会那么快乐.

### 返回函数的值

由于动态键入,不必声明函数的返回值,但在子C中的所有函数仍然会返回值.可以用`return`关键字指定返回值:

```cpp
function myFunction(myValue) {
    var result = myValue * 2;
    return result;
}
```

`return`语句是可选的,如果函数没有一个,它将从调用者的角度返回一个"垃圾"值.

### 调用函数

要使用函数或方法,只需使用函数调用语法:

```cpp
// Call myFunction() and pass it an argument of '2', but do nothing with the result
myFunction(2);

// Call myFunction(), pass it an argument of '2', and assign the result to the 'myResult' variable
var myResult = myFunction(2);
```

在另一个函数或方法中还可以调用函数或方法:

```cpp
function myOtherFunction() {
    var result = myFunction(2);
    // Do some other stuff with the result here
}
```

## 类和对象

类是将数据和操作捆绑在一起的蓝图,将其组建成一个类的实例,称为 *对象*.变量,函数和其他类 (通常称为 *members*) 可以在子C类内定义.对象被编译,不能在运行时进行修改,因此所有变量必须在使用之前在本地函数,类实例或母模块中声明.

### 定义类

一个类是使用`class`关键词定义的.例如,这里有一个简单的类,定义了一个圆形,其中有一个`mRadius`成员,代表一个圆形的半径:

```cpp
class Circle {
    var mRadius;
}
```

### 创建对象

为了创建一个类的实例,使用`new`关键字:

```cpp
var myCircle = new Circle();
```

这还没有做太多有用的事情.然而,当一个对象被使用`new`关键字即时化时,对象的内存被分配,其`initialize()`方法被自动调用,作为构造器.在下面的圆圈类中已经实现了`initialize()`方法,每当创建新的圆圈时都设定一个半径值:

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

如果类是嵌入式的,最远的类必须首先在此之前进行实时化,并且可以在附带的类中进行实时化.

### 进入课堂成员

在一个方法实现中,当前的对象实例可以用`self`或`me`关键字来引用.这些可以用于从本地变量中分歧的实例变量,或者简单来澄清.例如,这里有新的方法来计算它的周围和表面积,使用`self`关键字来引用`mRadius`实例变量:

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

** 注:**子C中嵌入的类别无法访问附加类的成员.

### 继承

继承允许一个类基于另一个类,这有助于加快开发时间并促进代码重复使用.而不是为类似对象定义完全新的类,新的类可以继承现有类的成员.例如,可以通过使用`extends`关键字来定义一个新的球类,通过从圆类继承了许多相同的属性:

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

唯一没有从母类继承的东西 (也称为基类或超级类) 是一个`initialize()`方法,该方法必须单独用于球体. 在这种情况下,它只是调用母类的`initialize()`方法来设置半径.

** 注:** 子C不隐含地调用母类的`initialize()`方法,因此小类必须明确地调用基类构造器.可以在任何扩展`View`类的 Connect IQ SDK分布式样本中看到这一点.

循环类的`getArea()`方法不会适用于球体,因此也实施了一个新的`getArea()`方法,以*过渡*`getArea()`的循环类的方法.最后,每个类都添加了`describe()`方法,让每个对象类型描述自己.让我们把这些类进行工作:

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

注意从Sphere的`describe()`方法直接使用母类的符号来调用母类的`describe()`方法.`superclass.memberMethod()`在子C中有效,但`superclass.memberVariable`语法不支持.

### 静态成员

在某些情况下,某些类成员需要在对象内访问,而不需要创建对象的实例.例如,想象一下只包含单元转换常数的单元转换类:

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

通常情况下,在使用该类内的任何成员之前,首先需要创建转换类的实例,包括变量,常数,编号或函数.如果`static`关键字被应用到常数上,但在不实例化转换类的情况下,可以使用它们:

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

静态成员的另一个优势是,它们属于类而不是类的特定实例.这意味着类似于静态变量的东西可以在类的多个实例之间共享,如果在一个实例中改变其值,新的值就会在所有实例中立即可用:

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

### 数据隐藏

类成员有三个访问级别*私*,*保护*,和*公共*.`private`修改器指定了成员只能在自己的类中访问.`protected`修改器指定了成员只能通过自己的类或其子类访问.`hidden`关键字是`protected`关键字的同义词.一个`public`访问修改器是默认的,但也可以明确指定.当`public`修改器用于列表,变量或函数时,这些成员可见于所有其他类.

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

变量是`public`或`protected`可以使用以下任何一个格式访问:

```cpp
var x = mMmemberVariable;
var y = self.mMemberVariable;
```

** 注:** 隐藏数据仅可在类成员级别上使用. 子C中的[Modules](#modules)没有隐藏数据的概念,而[classes](#classes-and-objects)总是公开的.

### Instanceof 和 Has

子C提供两个运营商进行运行时间类型检查,需要特别注意:`instanceof`和`has`.子C的对象导向设计模式与`has`和`instanceof`运营商结合,可以在一个代码库中实现许多设备的软件.

`instanceof`操作符检查对象实例是否继承给定的类别:

```cpp
using Toybox.System;

var value = 5;
if (value instanceof Lang.Number) {
    System.println("Value is a number");
}
```

The `has` operator checks whether a given object has a particular symbol, which may be a public method, instance variable, or even a class definition or module. For example, accelerometer data is available in [Sensor.Info](/connect-iq/api-docs/Toybox/Sensor/Info/), but not all products have an accelerometer. Attempting to use this data on certain products may cause the app to crash with a *Symbol Not Found* error. To avoid this, the `has` operator 可用于 check for accelerometer support:

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

子C中的函数不是一级,因此不能作为参数传递到其他函数以作为回调.由于函数与它们创建的对象绑定,因此必须使用[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)对象来创建回调.

一种方法是使用函数及其对象实例的组合:

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

与类不同的是,模块不会继承[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/),因此无法访问`method()`函数.然而,可以创建一个新的[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)实例,允许模块级函数以类似的方式被调用为回调:

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

一个[Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)对象将在它来自的对象的实例上调用一种方法,并保持对源对象的强烈引用.

### 弱引用

run子C是*引用数*,这意味着运行时间系统将释放内存,当引用该内存的对象数量减少到零时.引用数允许内存非常快速获得,这在低内存环境中很重要.引用数的基普顿化是*圆形引用*.当引用链中形成循环时,循环引用发生.例如,想象对象C引用对象A,而对象A引用对象B *和*对象B引用对象A:

![](/connect-iq/resources/programmers-guide/weak-reference-1.png)

在一段时间后,C被邀请坐下一个酷孩子的桌子上,所以它放弃了A去和其真正的朋友在一起:

![](/connect-iq/resources/programmers-guide/weak-reference-2.png)

在此点,A和B的内存应该被释放,但A和B都有一个引用数,因为它们引用 *彼此*.A和B所使用的内存现在不适用于冷幼儿表中的对象,这通常不是一件好事.然而,有时A和B确实需要相互引用.在这些情况下,你可以使用 *弱引用*,保留对象的引用数,但不会增加引用数.这意味着对象引用可以被破坏,这是一个应处理的案例.

![](/connect-iq/resources/programmers-guide/weak-reference-3.png)

为了创建一个弱的参考,使用`weak()`方法,这是所有子C对象可用的[Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)方法.

```cpp
// We would make a "Hans and Franz" reference here but certain advertising has probably made them uncool.
var weakReference = myObject.weak()
```

如果调用`weak()`在不可变的类型之一 ([Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/),[Lang.Float](/connect-iq/api-docs/Toybox/Lang/Float/),[Lang.Char](/connect-iq/api-docs/Toybox/Lang/Char/),[Lang.Long](/connect-iq/api-docs/Toybox/Lang/Long/),[Lang.Double](/connect-iq/api-docs/Toybox/Lang/Double/),[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)),则它将返回对象本身.否则,它将返回一个[Lang.WeakReference](/connect-iq/api-docs/Toybox/Lang/WeakReference/)实例.弱引用有`stillAlive()`方法来检查一个弱引用是否仍然有效,并有`get()`方法来创建一个强 reference对象:

```cpp
if (weakReference.stillAlive()) {
    var strongReference = weakReference.get();
    strongReference.myMethod();
}
```

记住只能在必要范围内保持强烈的参考!

## 模块

子C模块的目的类似于Java包,但可以包含变量,函数,类型和其他模块:

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

常见的是,静态方法存在于模块层面,而不是属于特定类别.与类别不同,模块没有遗传或隐藏数据的概念 (模块不支持`extends`和`hidden`关键字).

### Using 语句

模块可以通过`using`关键字进口到另一个类或模块中,将模块扩展到它们定义的类或模块.

```cpp
using Toybox.System;

function myFunction() {
    System.print("Hello");
}
```

模块也可能被赋予`as`条款的别名,可用于缩短模块名称或更喜欢不同的命名方案:

```cpp
using Toybox.System as Sys;

function myFunction() {
    Sys.print("Hello");
}
```

一旦进口,一个模块内的所有类必须通过其母模块引用.

## 作用域

子C是一个通过消息的语言.当调用函数时,虚拟机在运行时以以下顺序搜索一个等级来找到函数:

1. 班级成员

2.超级级级成员

3. 类的静态成员

4. 主模块的成员,以及全球名称空间的主模块

5. 超级级级的母模块成员到全球名称空间

6. 主模块的公共静态成员,至全球命名空间

7. 超级级级的母模块的公共静态成员到全球名称空间


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

在某些情况下,使用全球范围的混合符号`$`来搜索全球名称空间而不是当前范围可能更有效:

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

由于 global子C是动态键入的,引用一个全球变量将在最终找到全球变量之前搜索对象的遗产结构和模块层次结构. 相反,我们可以直接使用 symbol子符号搜索全球:

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

虽然子C通常会在整个对象层次结构中搜索一个对象,但当使用 bling 符号时,只会检查全球空间.如果没有发现任何东西,虚拟机将不会回过对象层次结构,而是会返回 *Symbol Not Found* 错误.

** 注:** 切换块有一些额外的范围规则,可以在[Switch-Case Statements](#scoping-in-switch-blocks)部分找到.

## 注解

子C允许将符号与类或模块方法和变量联系起来.注释用于向编译器传达额外的意图,有时也用于在不改变子C语法的情况下添加新功能.例如,运行无恶测试需要注释来区分仅用于测试的代码部分:

```cpp
// A test class containing a Run No Evil test method denoted by (:test)
class TestMethods {
    (:test)
    static function testThisClass(x)
}
```

下列注释对子C编译器具有特殊意义:

**:background**

表示[Background](/connect-iq/api-docs/Toybox/Background/)过程可用的代码区块.

**:debug**

在编译时,以此注释装饰的代码块不会被包含在发布构建中.

**:release**

在编译时,用此注释装饰的代码区块不会被包含在调试构建中.

**:test**

表示[Run No Evil](/connect-iq/core-topics/unit-testing/#unit-testing)测试[Test](/connect-iq/api-docs/Toybox/Test/)模块可用的代码块

编译器在构建项目时将注释写入项目"bin"目录中生成的`debug.xml`文件中.
