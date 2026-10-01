---
title: "Monkey 类型"
---
<a id="monkey-types"></a>
# Monkey 类型

Monkey Types 是 Monkey C 语言的渐进式类型系统。它承认 Monkey C 历史上采用鸭子类型的特点，同时增加了在编译时检查应用所需的组件。

Monkey Types 的目标如下：

1.  **兼容性**：Monkey C 语言的破坏性变更会导致数千个 Connect IQ 应用需要返工。Monkey Types 扩展 Monkey C 语法，同时避免破坏性变更。它也不依赖额外的运行时信息，因此可以用于所有 Connect IQ 兼容设备。

2.  **易用性**：Monkey C 的理念是成为“一门您不知不觉已经熟悉的语言”。我们希望编写 Monkey C 时有似曾相识的感觉。Monkey Types 的设计也大量借鉴 Kotlin、Swift 和 TypeScript。

3.  **灵活性**：Monkey Types 是渐进式类型系统。您可以不添加类型标注，也可以对应用进行严格类型检查。


Connect IQ 类型检查器默认禁用，可以使用 `-l` 编译器选项启用。类型检查分为四个级别：

| 选项 | 级别 | 说明 |
| --- | --- | --- |
| `-l 0` | 静默 | 不进行类型检查；保持所有动态类型 |
| `-l 1` | 渐进 | 检查可以推断类型的语句，否则保持沉默 |
| `-l 2` | 信息 | 仅检查已标注的类型，并对歧义发出警告 |
| `-l 3` | 严格 | 不允许编译器产生歧义 |

下面介绍用于向类型系统提供类型信息的新语法。

## `as` 子句

Monkey Types 引入了新的关键字 `as`。可以使用 `as` 将类型绑定到成员变量、模块变量、函数参数或函数返回值。局部变量总是在赋值时推断类型。

一旦类型绑定到值，编译器就只允许为其赋予该类型的值。

```typescript
using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number = 0;

function hasANumber() {
    globalX = 2;  // Allowed
    globalX = "2"; // Not allowed
    System.println("globalX = " + globalX);
}
```

此示例声明全局变量 `globalX` 只接受 `Toybox.Lang.Number` 值。声明完成后，编译器只允许将该类型的值赋给 `globalX`。

由于 Monkey C 使用鸭子类型，只允许变量绑定单一类型会过于严格。如果变量可以接受多种类型，可以在 `as` 子句后附加 `or` 子句。

```typescript
using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number or Lang.String = 0;

function hasANumber() {
    globalX = 2;  // Allowed
    globalX = "2"; // Allowed
    System.println("globalX = " + globalX);
}
```

## `import` 语句

在传统 Monkey C 中，`using` 语句会将 `module` 后缀引入当前处理文件的命名空间。访问函数、变量或类定义时，仍必须引用该模块后缀。

在添加类型信息时，一直写模块前缀会很繁琐。Monkey Types 引入了 `import` 语句。使用 `import` 后，*模块后缀及模块中的所有类都会进入类型命名空间*，因此可以不写模块后缀就访问类；函数仍然需要模块后缀。

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

注意：`import` 不支持在源文件中使用 `as` 重命名模块。

## 命名类型和匿名类型

上面的示例说明类型系统可以表达复杂类型定义。有时同一种类型模式会重复出现，这时可以为它命名并直接引用。

`typedef` 语句可以在应用命名空间中创建*命名类型*。例如，下面的代码会在全局命名空间中创建名为 `Numeric` 的多类型；函数 `add` 通过 `as` 子句将 `Numeric` 绑定到参数 `a`、`b` 和返回值。

```typescript
import Toybox.Lang;

typedef Numeric as Number or Float or Long or Double;

function add(a as Numeric, b as Numeric) as Numeric {
    return a + b;
}
```

如果不想为类型声明命名，也可以使用 `as` 子句直接构建匿名类型。

## 类型

Monkey Types 允许在 Monkey C 代码上添加一层类型标注。类型系统的能力不止是将变量与类关联起来。

本节概述可以使用的类型声明。

### Any

没有绑定类型的变量、函数参数或函数返回值都属于 Any 类型。Any 可以表示任何内容，也可以表示没有内容。Any 类型的值遵循 Monkey C 传统的鸭子类型规则。

要将值保持为 Any，只需不在声明中添加 `as` 子句。没有专门用于绑定 Any 的关键字。

### Void

Void 类型只用于返回值，表示函数不返回值，也表示调用方不应期待该函数返回值。

```typescript
import Toybox.Lang;

function doNothing() as Void {
    // Compiler error - this is failing to
    // do nothing.
    return true;
}

function doSomething() as String {
    // Compiler error - cannot assign value
    // from a function that returns nothing
    var x = doNothing();
    // Compiler error - doSomething should
    // return a String
}
```

### Concrete

Concrete 类型是对程序命名空间中已声明类的单一引用，是最传统、最熟悉的类型用法。如果值绑定到 Concrete 类型，它只能接受该类或其派生类的值。

```typescript
import Toybox.Lang;
import WoolMarket;

class Wool {
    public var bagsFull;

    public function initialize(bags as Number) {
        bagsFull = bags;
    }
}

class Sheep {
    public var wool as Wool;

    public function initialize() {
        wool = new Wool(1);
    }
}

class BlackSheep extends Sheep {
    public function initialize() {
        Sheep.initialize();
        wool = new Wool(3);
    }
}

function processSheep(baa as Sheep) {
    if(baa.wool != null) {
        WoolMarket.sellWool(baa.wool);
    }
}

function example() {
    // Allowed
    processSheep(new Sheep());
    processSheep(new BlackSheep());
    // Not allowed
    processSheep(new Wool());
}
```

请注意，Concrete 类型不会隐式接受 `null` 作为值。如果希望某个值同时接受 `null`，必须创建 Poly 类型（有关详细信息，请参阅 [`Null`](#null)）。

### Poly

Poly 类型可以将多个类型合并为一个类型，从而让类型系统模拟 Monkey C 的鸭子类型特性。定义类型时，使用 `or` 子句即可创建 Poly 类型。

Poly 类型接受以下值：

1. 类型绑定到 Poly 类型中任一类型的值。

2. 类型绑定到另一个 Poly 类型的值，且该 Poly 类型包含的类型都属于目标类型的定义。


```typescript
import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;
typedef Numeric as Number or Float or Long or Double;

function add(a as Addable, b as Addable) as Addable {
    return a + b;
}

function subtract(a as Numeric, b as Numeric) as Numeric {
    return a - b;
}

function doWork() {
    // Allowed
    var x as Addable = add("1", "2");
    // Not allowed; Addable has String which is
    // not within Numeric
    var y as Numeric = subtract(x, 2);
}
```

### Interface

Interface 类型要求类包含一组成员声明。成员可以是成员变量或函数。

```typescript
import Toybox.Lang;

typedef LittleBoys as interface {
    var frogs as Array<Frogs>;
    var snails as Array<Snails>;
    var puppyDogTails as Array<PuppyDogTails>;
};

// Implements LittleBoys interface
class MaleChild {
    var frogs as Array<Frogs>;
    var snails as Array<Snails>;
    var puppyDogTails as Array<PuppyDogTails>;
}
```

类无需额外的修饰即可实现 Interface，因此可以在函数参数中定义匿名 Interface。

```typescript
// Processing
function example(you as interface {
    var frogs as Array<Frogs>;
})
```

### Container

Monkey C 语言有两种原生容器类型：`Array` 和 `Dictionary`。Monkey Types 不支持泛型，但允许为 `Array` 指定元素类型，或为 `Dictionary` 指定键和值的类型。

```typescript
import Toybox.Lang;

typedef ContainerA as Array<Number>;
typedef ContainerB as Dictionary<String, Number>;
```

只有键和值类型都相同的容器类型才能互相匹配。`Array<String>` 只能匹配 `Array<String>`，不能匹配 `Array<String or Number>`。

Monkey C 目前不会推断容器类型，因此需要显式声明容器。要创建类型化数组或字典，可以使用以下语法：

```typescript
class ContainerClass {
    // Array of 10 items that takes only numbers
    var typedArray as Array<Number> = new Array<Number>[10];
    // Initialized array
    var initializedArray as Array<Number> = [1, 2, 3, 4, 5] as Array<Number>;
    // Initialized dictionary
    var initializedDictionary as Dictionary<String, String> = {"this"=>"that"} as Dictionary<String, String>;
}
```

### Tuple

在 Monkey C 中，常见做法是使用数组表示结构化组合。Monkey Types 通过将索引项绑定到类型来为数组建模。

可以把 Tuple 类型看作 Dictionary 类型，只是键由顺序隐含表示。下面的示例中，返回的数组会自动推断为 `[StartView, StartDelegate]` Tuple。它与允许的返回值 `[Views, InputDelegates]` 进行类型匹配，并被判定为兼容：

```typescript
function getInitialView() as [Views] or [Views, InputDelegates] {
    return [ new StartView(), new StartDelegate() ] ;
}
```

Tuple 类型 A 与 Tuple 类型 B 匹配时遵循以下规则：

- Tuple A 和 Tuple B 的长度必须相同。

- 对于每个索引，A 中的每个类型都必须是 B 中对应类型的实例。


使用 `[value, value...]` 语法创建的数组现在会被推断为 Tuple，而不是 `Array<Any>`。如果容器类型更符合要实现的模式，也可以使用容器类型；但 Tuple 与容器类型天然兼容。如果容器类型的 Poly 定义包含 A、B 和 C，那么 `[A, B, C]` 类型的 Tuple 就是 `Array<A or B or C>` 的实例。

```typescript
function sumArray(x as Array<Numeric>) as Number {
    var result = 0;
    for (var i = 0; i < x.size(); i++) {
        result += x[i];
    }
    return result;
}

function sumThisTuple() as Number{
    // This should pass type checking because the
    // Tuple [Number, Number... ] should be an instanceOf Array<Numeric>
    return sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
```

Tuple 类型也更具可变性。底层数组发生变化时，只要类型系统能够跟踪，Tuple 类型也会随之更新。当 Tuple 作为参数传递给其他方法时，类型系统不会跟踪其中类型的变化。

```typescript
function foo(x as [Number, Number, Number]) as [Number, Number, Number] {
    x[1] = "Hello"; // Allowed, type is now [Number, String, Number]
    return x; // Error, type mismatch
}
```

### Dictionary

在 Monkey C 中，将选项字典作为参数是一种常见模式，可以构建可扩展的 API。Monkey Types 允许将键字面量绑定到类型，从而为选项字典建模。

```typescript
import Toybox.Lang;

function doWork(options as {
    :option1 as String,
    :option2 as {
        "name" as String,
        "value" as Number
    }
})
```

如果字典以内联形式声明，编译器会跟踪值绑定的类型，并检查所有值类型是否匹配。它不会要求提供所有键，也不会因添加额外键而报错。

```typescript
doWork({:option1=>"x", :option3=>true})
```

### Enumerations

为枚举声明追加名称后，枚举就可以成为命名类型。枚举值会同时绑定到枚举类型和自身的值类型。

```typescript
import Toybox.Lang;

enum Dog {
    SPOT = "Spot",
    LUKE = "Luke",
    POCO = "Poco",
    COMMODORE = "Commodore",
    BINGO = "B_I_N_G_O"
}

function getDogName(dog as Dog) as String {
    // Return the dog name
    return dog.toString();
}
```

### Callback

Monkey C 的基对象包含用于创建 `Method` 回调对象的 `method` 方法。Callback 类型允许根据预期参数和返回值为 `Method` 对象指定类型。

```typescript
import Toybox.Lang;

function doWork(
    x as Method(a as Number) as String
) as String {
    return x.invoke(2);
}
```

### Null

Monkey Types 将 Null 视为独立的类型。更重要的是，如果允许使用 `null`，必须显式声明。

```typescript
function doWork() as Number or Null
```

对单一类型声明使用 `?`，可以将其转换为接受 null 的 Poly 类型。

```typescript
function doWork() as Number?
```

## 类型匹配和歧义

由于 Monkey C 的鸭子类型特性，Monkey Types 中不可避免地存在歧义。理想情况下，类型系统应明确规定类型是否匹配，但 Monkey Types 的结果可能是 True、False 或 Maybe。

假设有以下代码：

```
var a as A;
var b as B;

a = b; // 是否允许此赋值？
```

可以参考下表：

| A↓ B→ | Any | Concrete | Poly | Interface | Container | Dictionary | Enum | Callback | Null |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Any** | True | True | True | True | True | True | True | True | True |
| **Concrete** | Maybe | B 是 A 或 A 的派生类时为 True | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | A 是 Dictionary 或 Array 时为 Maybe | A 是 Dictionary 时为 Maybe，否则为 False | 枚举值类型与 A 匹配时为 True，否则为 False | False | False |
| **Poly** | Maybe | B 是 A 包含的类型时为 True，否则为 False | A 和 B 包含所有相同类型时为 True；B 中有部分类型不在 A 中时为 Maybe；没有任何匹配类型时为 False | B 是 A 包含的类型时为 True，否则为 False | B 是 A 包含的类型时为 True，否则为 False | B 是 A 包含的类型时为 True，否则为 False | B 是 A 包含的类型时为 True，否则为 False | B 是 A 包含的类型时为 True，否则为 False | B 是 A 包含的类型时为 True，否则为 False |
| **Interface** | Maybe | B 是包含 A 接口全部成员的对象时为 True，否则为 False | Poly 包含匹配类型时为 Maybe | B 的 Interface 包含 A 的全部成员时为 True | Array 或 Dictionary 类包含 Interface 的全部成员时为 True，否则为 False | Dictionary 类包含 Interface 的全部成员时为 True，否则为 False | False | False | False |
| **Container** | Maybe | False | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | 容器类型及键/值类型完全匹配时为 True，否则为 False | False | False | False | False |
| **Dictionary** | Maybe | False | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | 所有键都匹配键类型且值都匹配值类型（如适用）时为 True，否则为 False | 所有键都匹配键类型且值都匹配值类型（如适用）时为 True，否则为 False | False | False | False |
| **Enum** | Maybe | 枚举值 B 的值类型与 Concrete 类型 A 匹配时为 True | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | False | False | 枚举类型匹配时为 True，否则为 False | False | False |
| **Callback** | Maybe | False | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | False | False | False | 函数签名匹配时为 True，否则为 False | False |
| **Null** | Maybe | False | B 的 Poly 类型中有一种类型与 A 匹配时为 Maybe，否则为 False | False | False | False | False | False | True |

根据您对歧义的接受程度，类型检查器可以在三个级别运行：

1.  **静默**：类型匹配失败会标记为错误，但忽略歧义。

2.  **警告**：类型匹配失败会标记为错误，歧义会标记为警告。

3.  **错误**：类型匹配失败和歧义都会标记为错误。


在关闭歧义错误的情况下编译代码库，可以发现明显的类型错误；在歧义上报错，则需要在整个代码库中添加类型标注。Monkey Types 让您可以逐步采用更严格的类型检查，即使不这样做也能获得类型检查的价值。

## 在函数中指定类型

前面一直在显式添加类型标注。这样代码更易读、更明确，但也会增加大量样板代码。

与类实例变量不同，Monkey Types 会通过跟踪赋值来推断局部变量的类型。

```typescript
import Toybox.Lang;
import OldMacDonaldsFarm;

function handleDog(dog as Dog, here as Array, there as Array, everywhere as Array) {
    here.add(dog.woofWoof());
    there.add(dog.woofWoof());
    everywhere.add(dog.woofWoof());
}

function handleCat(cat as Cat, here as Array, there as Array, everywhere as Array) {
    here.add(cat.meowMeow());
    there.add(cat.meowMeow());
    everywhere.add(cat.meowMeow());
}

function eieio() {
    var here = [], there = [], everywhere = [];
    // Animal will be typed as a Dog based
    // on the assignment. No need to declare
    // its type
    var animal = new OldMacDonaldsFarm.Dog();
    // Allowed, animal is currently assigned a Dog value
    handleDog(animal, here, there, everywhere);
    // Animal will now be typed as a Cat based on
    // the assignment
    animal = new OldMacDonaldsFarm.Cat();
    // Allowed, animal is currently assigned a Cat value
    handleCat(animal, here, there, everywhere);
}
```

类型推断会沿着分支继续进行。如果无法根据所走的分支确定类型，类型系统会将各个选项组成 Poly 类型，直到下一次赋值。

```typescript
import Toybox.Lang;

function process(a as Boolean) as Boolean? {
    var x = null;

    if(a) {
        x = true;
    }
    // At this point, x is now the poly type
    // Boolean or Null
    return x;
}
```

当值具有明确的类型定义时，类型检查器会验证是否允许调用相应方法。

```typescript
import Toybox.Lang;

class A {
    function foo() {};
    function bar() {};
}

function process() {
    var a = new A();
    a.foo(); // Allowed
    a.bar(); // Allowed
    a.fonz(); // Not allowed
}
```

对于容器类型，也可以将类型绑定到初始化值。这会限制可以赋给容器的内容，同时允许局部变量本身接受任意值。

```typescript
import Toybox.Lang;

function example() {
    var a = {} as Dictionary<String, String>;
    a["key"] = "value" // <-- Assignments to a's value must obey type

    a = null; // <-- a is Any and can be assigned to null
}
```

### 返回值和 Void

默认情况下，函数返回 Any。将类型绑定到函数返回值后，类型检查器会确保函数返回该类型的值。

```typescript
import Toybox.Lang;

function isTrue() as Boolean {
    return "true"; // Not allowed
}
```

如果函数没有返回值，可以使用 `Void` 类型。这会确保函数不返回值；如果其他函数试图使用该函数的返回值，也会报错。

### Any 和类型歧义

未绑定类型的函数参数都属于 Any。参数的歧义会传播到它在表达式中访问的任何成员。如果提供完整的类型定义，类型检查可以避免许多常见错误；但只要存在一点歧义，就可能导致任何级别的检查都无法进行。下面的示例中，函数检查了结果，却没有为参数 `a` 指定类型。

```typescript
import Toybox.Lang;

function foo(a) as Integer? {
    // a is of type Any, so Monkey Types can't identify what doThis() is being called
    var x = a.doThis();
    // x is of type Any, so we can't know what the result type is
    var y = x + 3;
    // What is Y? What is Why? What is Love?
    return y;
}
```

由于 `a` 是 Any，Monkey Types 无法判断它的任何成员；因此，也无法判断访问这些成员所得的结果。

### 类型转换

`as` 关键字也可以在表达式中将值转换为另一种类型。当类型系统无法确定类型时，这很有用。

```typescript
import Toybox.WatchUi;

function process(a as View) {
    (a as MyView).specialMyViewMethod();
}
```

Monkey Types 只存在于编译时，是纯粹的词法类型系统，因此类型转换不会改变运行时行为。

### 运行时类型检查

Monkey Types 的目标之一是不增加运行时开销。这让它可以直接用于所有兼容 Connect IQ 的产品，但运行时类型检查仍有一些限制。简单来说，编译时可以使用丰富的类型系统；运行时的 `instanceof` 和 `has` 则与之前具有相同限制。对于 Concrete 类型组成的 Poly 类型，这通常可以正常工作。

```typescript
import Toybox.Lang;

function example(x as Number or Float) as Boolean {
    switch(x) {
        case instanceof Number:
            doNumberImpl(x);
            break;
        case instanceof Float:
            doFloatImpl(x);
            break;
    }
}
```

遗憾的是，并非所有场景都能这样解决。例如，考虑以下情况：

```typescript
typedef Nimble as interface {
    function isNimble() as Boolean;
};

typedef Quick as interface {
    function isQuick() as Boolean;
};

function handleCandleStick(jack as Nimble or Quick) {
    if(jack instanceof Nimble and jack instanceof Quick) {
        if(jack.isNimble() and jack.isQuick() and jack has :jumpOverCandleStick) {
            jack.jumpOverCandleStick();
        }
    }
}
```

在 `handleCandleStick` 中，Interface `Nimble` 和 `Quick` 是词法类型，只存在于编译时。由于 `instanceof` 只能用于 Concrete 类，不能用于词法类型，这段代码会产生编译错误。此时可以使用 `has` 解决问题。

```typescript
function handleCandleStick(jack as Nimble or Quick) {
    if(jack has :isNimble and jack has :isQuick and jack has :jumpOverCandleStick) {
        if(jack.isNimble() and jack.isQuick()) {
            jack.jumpOverCandleStick();
        }
    }
}
```

### 条件拆分（If-Splitting）

在 Java 等语言中，对象的类型通常被认为就是声明时的类型。这会导致大量冗余的类型转换，或需要创建许多不必要的局部变量，才能向编译器说明对象实际并非声明的类型。

```java
public boolean foo(SomeInterfaceType x) {
    if(x instanceof SomeConcreteType) {
        // My life will just be easier if I make
        // a new variable, even though it should
        // be possible to assume that x is
        // a SomeConcreteType
        SomeConcreteType y = (SomeConcreteType)x;
        // Do operations on y
    }
}
```

Monkey C 类型系统会利用条件拆分（If-Splitting）：分支表达式会使变量类型在条件为真和为假时分别发生变化。

```typescript
import Toybox.Lang;

public function foo(x as Number?) as Boolean {
    if(x != null) {
        // Within this block assume x is Number and not null
    } else {
        // Within this block assume x is null
    }
}
```

`==`、`!=` 和 `instanceof` 运算符会按照以下规则改变类型：

| 类型 | `==` | `!=` | `instanceof` | `!instanceof` |
| --- | --- | --- | --- | --- |
| Any | 忽略 | 忽略 | 将类型变为 `instanceof` 类型 | 忽略 |
| Concrete | 忽略 | 忽略 | 将类型变为 `instanceof` 类型 | 忽略 |
| Poly | 如果 `==` 为 `null`，将类型变为 Null 类型 | 如果 `!=` 为 `null`，将类型变为去除 `null` 的 Poly 类型 | 将类型变为 `instanceof` 类型 | 将类型变为从 `instanceof` 类型中去除相应类型的 Poly 类型 |
| Interface | 忽略 | 忽略 | 将类型变为 `instanceof` 类型 | 忽略 |
| Container | 忽略 | 忽略 | 忽略 | 忽略 |
| Dictionary | 忽略 | 忽略 | 忽略 | 忽略 |
| Enum | 将类型变为枚举值类型 | 忽略 | 忽略 | 忽略 |
| Callback | 忽略 | 忽略 | 忽略 | 忽略 |
| Null | 忽略 | 忽略 | 忽略 | 忽略 |

表达式也可以使用 `&&` 和 `||` 运算符进行组合。使用 `&&` 时，类型变化会沿表达式传递，并随着表达式继续计算而进一步变化。

```typescript
import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;

public function foo(x as Addable?) {
    // In the first clause, x is modified to remove the null
    // from the poly type. In the second clause, the new polytype
    // is modified to be a String concrete type.
    if(x != null &&
       x instanceof String) {
        // Within this block assume x is a string
    }
}
```

使用 `||` 时，会根据两个操作的结果创建新的 Poly 类型。

```typescript
import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;

public function foo(x as Addable?) {
    if(x instanceof Number ||
       x instanceof Float) {
        // Within this block assume x is a Number or Float
    }
}
```

对成员变量进行条件拆分时，如果调用函数，所有类型变化都会被清除。

## 为模块和类指定类型

类成员变量默认绑定为 Any。与局部变量不同，成员变量不会根据赋值推断类型。为成员变量添加类型标注并为枚举命名，可以进行更严格的类型检查。常量的类型由赋值推断。

```typescript
class Example {
    // Member variable
    private var _x as Number = 0;

    // Enum values can be explicitly assigned, or by default will
    // be numerically incremented values.
    enum NamedEnum {
        NAMED_ENUM;
    }

    // Constants assume their type by assignment
    private const _constant = "Constant";
}
```

添加类型标注后，必须初始化变量，或允许它为 `null`。下面的示例会导致编译器错误：

```typescript
import Toybox.Lang;
import Toybox.System;

// Don't shoot
class Messenger {
    private var _message as String;

    public function shareTheMessage() as Void {
        System.println(_message);
    }
}
```

产生错误的原因是 `_message` 被声明为 String，但未进行初始化，因此它会被初始化为 `null`。模块变量必须在声明时初始化，或允许为 `null`；对象成员还可以在 `initialize` 函数中初始化。下面的代码可以解决错误：

```typescript
import Toybox.Lang;
import Toybox.System;

// Don't shoot
class Messenger {
    private var _message as String;

    public function initialize() {
       // Initialize message
        _message = "";
    }

    public function shareTheMessage() {
        System.println(_message);
    }
}
```

### 类型和继承

扩展类时，类型系统遵循以下规则：

1.  如果从父类继承参数数量相同的函数，但不添加类型标注，则参数和返回值的类型会从父类实现中原样继承。

2.  如果从父类继承参数数量相同的函数并添加类型标注，则参数数量和类型标注必须完全匹配，否则编译器会报错。


这样，扩展 `Toybox` 类型的现有 Monkey C 代码无需添加任何类型标注，也能使用类型检查。

## 应用范围类型检查

类型检查器会尝试验证：从模块或类中获取的成员，在调用方所处的所有应用范围内都可用。如果开发者确信代码在应用范围内是安全的，但类型检查器仍然报错，可以分别使用注解 `:typecheck(disableBackgroundCheck)` 或 `:typecheck(disableGlanceCheck)`，禁用对后台或 glance 范围的检查。要同时禁用两者，请使用注解 `:typecheck([disableBackgroundCheck, disableGlanceCheck])`。

这项设计存在争议。首先，`as` 在语法中已经有了全新的含义，用它重命名模块会造成混淆。其次，在 Monkey C 中重命名模块会让可共享示例代码很难编写，因为每个人都会按自己的偏好重命名所有模块。确实，`Gregorian` 这个词很长，输入起来很烦，但这正是自动补全存在的原因。

返回 `Method` 的 `method` 方法不要与我即将出版的自助书籍评测书《The Method Method》混淆。

我刚刚见到你，这很疯狂，但我是 Any，所以类型匹配结果是 Maybe……
