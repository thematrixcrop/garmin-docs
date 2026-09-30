---
title: "Monkey Types"
---
# Monkey 类型

子类型是 histor子C语言的逐步类型系统. 类型系统旨在识别子C的历史性子类型性质,但在编译时添加必要的组件来编写检查应用程序.

子类型的目标如下:

1.  **兼容性** - Breaking changes to the Monkey C language would require rework to thousands of Connect IQ apps. Monkey Types extends the Monkey C grammar but avoids breaking changes. Monkey Types is also designed to not rely on additional run time information. Because of this, you can use Monkey Types for apps that run on all Connect IQ compatible devices.

2. **使用方便** - 子C的哲学是要是你不知道你已经知道的语言*.我们希望写子C的经验就像 deja-vu.同样,子类型在设计中借鉴了科特林,斯威夫特和类型.

3. **灵活性** - 子类型是一个渐进式类型系统.您可以选择将类型的架子放开,或者您可以严格输入您的应用程序.


连接IQ类型检查器默认被禁用,并通过`-l`编译器选项启用.类型检查有四个级别:

| Option | Level | 说明 |
| --- | --- | --- |
| `-l 0` | Silent |没有类型检查; 保持所有动态类型|
| `-l 1` | Gradual |输入检查任何输入可以推断的语句,否则保持沉默|
| `-l 2` | Informative | 仅检查已输入的类型，对歧义发出警告 |
| `-l 3` | Strict | 不允许编译器产生歧义 |

让我们来介绍一种新的语法来将类型信息传达到类型系统.

## 作为条款

子类型引入了新的关键字`as`.您使用`as`将类型绑定到成员变量,模块变量,函数参数或函数返回值.本地总是在分配时推断类型.

一旦一个类型被绑定到一个值,编译器只允许分配该类型的值.

```typescript
using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number = 0;

function hasANumber() {
    globalX = 2;  // 允许
    globalX = "2"; // 不允许
    System.println("globalX = " + globalX);
}
```

在这个例子中,我们将声明全球变量`globalX`只会接受`Toybox.Lang.Number`的值.一旦已经声明,编译器只允许该类型的值被分配给`globalX`.

由于子C是一种型语言,只允许单个类型与变量绑定是过于限制性的.如果变量接受多种类型,则允许一个`as`条款附加一个`or`条款.

```typescript
using Toybox.Lang;
using Toybox.System;

var globalX as Lang.Number or Lang.String = 0;

function hasANumber() {
    globalX = 2;  // 允许
    globalX = "2"; // 允许
    System.println("globalX = " + globalX);
}
```

##进口声明

在传统的子C中,`using`语句将`module`后音带入正在处理的文件名称空间中.

对于添加类型信息,所有模块前置都是令人烦的. ?? 子类型引入`import`语句.当您使用`import`时,它将 *模块后置和模块中的所有类进入类型命名空间.* 这使得模块中的类可以访问而不需要模块后置,从而更容易打字.功能仍然需要访问模块后置.

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

注:`import`不支持使用`as`在源文件中的模块重新命名.

## 命名类型与匿名类型

您可以从上述例子中看到,类型系统可以允许复杂的类型定义.有时候,类型模式重复,只需要用名字引用它.

一个`typedef`语句允许你在应用名空间中创建一个*命名类型*.例如,以下将在全球名空间中创建一个名为`Numeric`的多类型. 函数`add`然后将`Numeric`绑定到参数`a`和`b`及其返回值,使`as`条款引用`Numeric`类型声明.

```typescript
import Toybox.Lang;

typedef Numeric as Number or Float or Long or Double;

function add(a as Numeric, b as Numeric) as Numeric {
    return a + b;
}
```

如果您不想命名您的类型声明,您总是可以使用`as`条款构建类型声明为匿名类型.

## 类型

子类型允许您在子C代码中添加一层类型架构. 类型系统不仅仅允许将变量与类别联系在一起.

本节将概述您可以使用的类型声明.

### 任意

任何变量,函数参数或函数返回值,没有类型绑定到它是类型 Any. 任何类型可以是任何东西,包括什么都不存在. 类型 Any 的值遵循传统的子类型规则.

为了将 Any 绑定到一个值,不要在声明中添加一个`as`条款.没有关键字来将 Any 绑定到一个值.

### Void

虚空类型仅适用于返回值,并传达一个函数不允许返回值.它还传达了一个函数不应该通过调用这个函数来预期返回值.

```typescript
import Toybox.Lang;

function doNothing() as Void {
    // 编译器错误 - 此处未能
    // 什么都不做。
    return true;
}

function doSomething() as String {
    // 编译器错误 - 无法从
    // 不返回任何值的函数中赋值
    var x = doNothing();
    // 编译器错误 - doSomething 应该
    // 返回 String
}
```

### 具体

具体类型是程序命名空间中声明的类型的单一引用.这是打字的最传统和最熟悉的使用方式.如果值与具体类型相结合,它只会接受该类或任何衍生类的值.

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
    // 允许
    processSheep(new Sheep());
    processSheep(new BlackSheep());
    // 不允许
    processSheep(new Wool());
}
```

Note that concrete types do not implicitly accept `null` as a value. If you want a value to also accept `null` you must make a poly type (see [`Null`](#null) 更多信息).

### Poly

多类型允许多种类型连接到一个类型. 这允许类型系统模拟子C的子类型性质.创建多类型时,您只需在定义类型时使用`or`条款.

一个多型的将接受:

1. 一个值,其类型与聚类型中的一种类型结合

2. 一个与一个类型属于目的类型定义的聚类型结合的值


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
    // 允许
    var x as Addable = add("1", "2");
    // 不允许；Addable 包含 String，而它
    // 不属于 Numeric
    var y as Numeric = subtract(x, 2);
}
```

### 接口

界面类型需要一个类包含一组成员声明.成员可以是成员变量和函数.

```typescript
import Toybox.Lang;

typedef LittleBoys as interface {
    var frogs as Array<Frogs>;
    var snails as Array<Snails>;
    var puppyDogTails as Array<PuppyDogTails>;
};

// 实现 LittleBoys 接口
class MaleChild {
    var frogs as Array<Frogs>;
    var snails as Array<Snails>;
    var puppyDogTails as Array<PuppyDogTails>;
}
```

请注意,该类不需要额外的装饰来实现接口.这允许在函数参数中定义匿名接口.

```typescript
// 处理
function example(you as interface {
    var frogs as Array<Frogs>;
})
```

### 容器

子C语言有两个原生容器类型,`Array`和`Dictionary`.虽然子类型系统不支持通用,但它允许开发人员输入`Array`的值类型或`Dictionary`的关键和值类型.

```typescript
import Toybox.Lang;

typedef ContainerA as Array<Number>;
typedef ContainerB as Dictionary<String, Number>;
```

容器类型只能匹配其他容器类型,如果键类型和值类型均等.一个`Array<String>`只匹配一个`Array<String>`而不是一个`Array<String or Number>`.

Monkey C does not infer container types at this time, so you will need to declare your containers. If you want to create a new typed array or dictionary 您可以使用以下语法：

```typescript
class ContainerClass {
    // 只接受数字的 10 项数组
    var typedArray as Array<Number> = new Array<Number>[10];
    // 已初始化的数组
    var initializedArray as Array<Number> = [1, 2, 3, 4, 5] as Array<Number>;
    // 已初始化的字典
    var initializedDictionary as Dictionary<String, String> = {"this"=>"that"} as Dictionary<String, String>;
}
```

### 元组

在子C中,一个常见的模式是使用阵列作为结构化的组合.子类型通过将索引的项目绑定到类型来建模阵列.

设想Tuple类型,如字典类型,除了关键是顺序所暗示的.在下面的例子中,返回的数组将自动输入为`[StartView, StartDelegate]`类型的Tuple. 这与允许返回值`[Views, InputDelegates]`进行输入,并发现相匹配:

```typescript
function getInitialView() as [Views] or [Views, InputDelegates] {
    return [ new StartView(), new StartDelegate() ] ;
}
```

图普勒类A与图普勒类B相匹配的规则如下:

- A和 B 双 length必须是相同的长度

- 对于每个指数,A中的每个类型都必须是B的实例


采用`[ value, value...]`语法创建的阵列现在将被打字为Tuple而不是`Array<Any>`.如果更好地匹配您正在实现的模式,则可以使用容器类型,但Tuples与容器类型具有自然兼容性.如果A,B和C类型在容器类型的多型定义中,则`[A, B, C]`类型的Tuples将是`Array<A or B or C>`的实例.

```typescript
function sumArray(x as Array<Numeric>) as Number {
    var result = 0;
    for (var i = 0; i < x.size(); i++) {
        result += x[i];
    }
    return result;
}

function sumThisTuple() as Number{
    // 这应该通过类型检查，因为
    // Tuple [Number, Number... ] 应该是 Array<Numeric> 的实例
    return sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}
```

图普尔类型也更可变.随着底层阵列的变化,只要类型系统能够跟上,它们就会被修改.类型系统不会跟踪图普尔类型的变化,当被作为参数转移到另一种方法时.

```typescript
function foo(x as [Number, Number, Number]) as [Number, Number, Number] {
    x[1] = "Hello"; // 允许，类型现在是 [Number, String, Number]
    return x; // 错误，类型不匹配
}
```

### 字典

在子C中,使用选项词典作为参数是一种常见模式.这允许扩展的API.子类型允许通过将关键字体绑定到类型来建模选项词典.

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

如果一个词典被声明为线条,编译器会跟踪与值绑定的类型,然后检查所有值类型是否匹配.它不会要求提供所有键,如果添加额外的键,它不会错误.

```typescript
doWork({:option1=>"x", :option3=>true})
```

### 枚举

列表现在可以通过添加一个名称到声明中命名类型.列表值将与其列表类型以及其值类型结合.

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
    // 返回狗的名称
    return dog.toString();
}
```

### 回调

子C的基对象包含`method`方法来创建`Method`回调对象.回调类型允许您根据预期参数和返回值输入`Method`对象.

```typescript
import Toybox.Lang;

function doWork(
    x as Method(a as Number) as String
) as String {
    return x.invoke(2);
}
```

### Null

子类型将零视为其独特类型.更重要的是,如果`null`是允许值,则需要明确声明.

```typescript
function doWork() as Number or Null
```

`?`可用于单型声明,使其成为无效接受的多型.

```typescript
function doWork() as Number?
```

##类型匹配和模糊性

由于子C的子类型性质,模糊性是子类型继承的.理想情况下,类型系统会有非常明确的规则,如果一个类型是否匹配或不匹配,但子类型有真,错,也许.

假设我们有以下情况:

```
var a as A;
var b as B;

a = b; // 允许此赋值吗？
```

您可以使用以下表

| A↓ B→ | Any | Concrete | Poly | Interface | Container | Dictionary | Enum | Callback | Null |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Any** | True | True | True | True | True | True | True | True | True |
| **Concrete** | Maybe |如果B是A或延伸 A|如果B中的多种类型之一与A相匹配,否则是错误的| False |如果A是字典或阵列|如果A是字典,否则是假的.|如果 enum 值类型与A相匹配,则是正确的| False | False |
| **Poly** | Maybe |如果B是A内的一种类型,则是正确的,否则是假的|如果所有引用都存在于A和B中,也许如果B中存在某些类型,而不是A中.如果B和A之间没有匹配类型,则错误|如果B是A内的一种类型,则是正确的,否则是假的|如果B是A内的一种类型,则是正确的,否则是假的|如果B是A内的一种类型,则是正确的,否则是假的|如果B是A内的一种类型,则是正确的,否则是假的|如果B是A内的一种类型,则是正确的,否则是假的|如果B是A内的一种类型,则是正确的,否则是假的|
| **Interface** | Maybe |如果B是包含A接口的所有成员的对象,则是真假|如果聚合物包含相匹配的类型|如果B的界面包含A中的所有成员,则是真的.|如果类 Array 或 Dictionary 包含接口的所有成员,则是 True,否则是 False|如果类词典包含所有界面成员,则是正确的,否则是假的| False | False | False |
| **Container** | Maybe | False |如果B中的多种类型之一与A相匹配,否则是错误的| False |如果容器类型和关键/值类型完全一致,否则是假的| False | False | False | False |
| **Dictionary** | Maybe | False |如果B中的多种类型之一与A相匹配,否则是错误的| False |如果所有键与键类型相匹配,并且值与值类型相匹配 (如适用),否则是错误的|如果所有键与键类型相匹配,并且值与值类型相匹配 (如适用),否则是错误的| False | False | False |
| **Enum** | Maybe |如果 enum值B的值类型与混凝土类型A相匹配,则是正确的|如果B中的多种类型之一与A相匹配,否则是错误的| False | False | False |如果 enum 类型相匹配,则是正确的.| False | False |
| **Callback** | Maybe | False |如果B中的多种类型之一与A相匹配,否则是错误的| False | False | False | False |如果函数签名一致,则是正确的,否则是假的.| False |
| **Null** | Maybe | False |如果B中的多种类型之一与A相匹配,否则是错误的| False | False | False | False | False | True |

根据您的舒适度,类型检查器可以在三个不同层面上运行.

1. **沉默** - 类型匹配故障被标记为错误,但忽略了模糊性

2. **警告** - 类型匹配故障标记为错误,模糊性标记为警告

3. **错误** - 类型匹配故障和模糊性被标记为错误


编译一个含糊不清的代码基础可以发现明显的类型错误,而编译代码时在含糊上错误需要在整个代码中添加类型架.子类型是为了让您可以选择攻击性打字,而如果您不这样做,则仍然添加价值.

## 在函数中指定类型

虽然这使得代码非常可读和明确,但它可以增加大量的炉板.

与类实例变量不同,子类型系统将通过跟踪任务推断本地变量的类型.

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
    // 根据赋值，Animal 的类型将是 Dog。
    // 无需声明其类型
    var animal = new OldMacDonaldsFarm.Dog();
    // 允许，animal 当前被赋予 Dog 值
    handleDog(animal, here, there, everywhere);
    // 根据赋值，Animal 的类型现在将是 Cat
    animal = new OldMacDonaldsFarm.Cat();
    // 允许，animal 当前被赋予 Cat 值
    handleCat(animal, here, there, everywhere);
}
```

如果基于哪个分支的类型不清楚,类型系统将在下一个任务之前对选项进行多类型.

```typescript
import Toybox.Lang;

function process(a as Boolean) as Boolean? {
    var x = null;

    if(a) {
        x = true;
    }
    // 此时，x 的多类型为
    // Boolean 或 Null
    return x;
}
```

当一个值有已知类型定义时,类型检查器会验证是否允许调用方法.

```typescript
import Toybox.Lang;

class A {
    function foo() {};
    function bar() {};
}

function process() {
    var a = new A();
    a.foo(); // 允许
    a.bar(); // 允许
    a.fonz(); // 不允许
}
```

在容器类型中,也可以将类型绑定到初始值. 这将对容器分配的内容进行控制,但允许本地具有任何值.

```typescript
import Toybox.Lang;

function example() {
    var a = {} as Dictionary<String, String>;
    a["key"] = "value" // <-- 对 a 的值进行赋值必须遵守类型

    a = null; // <-- a 是 Any，可以赋值为 null
}
```

### 返回价值和虚空

如果将类型绑定到函数返回值,类型检查器将确保您返回该类型的值.

```typescript
import Toybox.Lang;

function isTrue() as Boolean {
    return "true"; // 不允许
}
```

如果你的函数没有返回值,你可以使用`Void`类型. 这将确保函数不返回值和错误,如果函数试图分配函数的返回值.

###任何和类型的模糊性

任何没有绑定类型的函数参数都会是 Any类型.参数的模糊性将会穿透到它在表达式中交互的任何成员.如果你提供所有类型定义,类型检查可以保护它们免受许多类型的常见错误.然而,只有一点模糊性可以防止任何级别的检查.

```typescript
import Toybox.Lang;

function foo(a) as Integer? {
    // a 的类型是 Any，因此 Monkey Types 无法确定调用的是哪个 doThis()
    var x = a.doThis();
    // x 的类型是 Any，因此我们无法知道结果类型
    var y = x + 3;
    // Y 是什么？Why 是什么？Love 是什么？
    return y;
}
```

由于`a`是任何,子类型无法对其任何成员做出任何决定,

###类型的选

在表达式中,`as`关键字也可以用于输入给另一个类型的值.如果类型对类型系统不清楚,这可能是有用的.

```typescript
import Toybox.WatchUi;

function process(a as View) {
    (a as MyView).specialMyViewMethod();
}
```

由于子类型是纯粹的词典,并且只存在于编译时间,因此类型造不会导致运行时间的变化.

### 运行时间类型检查

子类型的目标之一是不增加任何运行时间的额外费用.这允许 Typ子类型在门外工作所有连接IQ兼容的产品,但在运行时间检查方面确实增加了成本.简单地说:在编译时,您可以访问表达式类型系统,但在运行时间`instanceof`和`has`具有相同的限制.对于涉及多种类型的混凝土类型的情况,这可以很好地工作.

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

不幸的是,不是每一个情况都能以这种方式解决.

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

在`handleCandleStick`的情况下,接口`Nimble`和`Quick`是词汇类型,只存在于编译时.这将导致编译错误,因为`instanceof`只能用于具体类型而不是词汇类型.在这种情况下,我们可以使用`has`来解决这个问题.

```typescript
function handleCandleStick(jack as Nimble or Quick) {
    if(jack has :isNimble and jack has :isQuick and jack has :jumpOverCandleStick) {
        if(jack.isNimble() and jack.isQuick()) {
            jack.jumpOverCandleStick();
        }
    }
}
```

###如果-分开

在Java等语言中,一个对象的类型被假设是它被宣布为什么.这可能导致一些非常冗余的 casting或生成大量不必要的本地人来向编译器沟通某个东西不是它被宣布为什么.

```java
public boolean foo(SomeInterfaceType x) {
    if(x instanceof SomeConcreteType) {
        // 如果创建一个新变量，事情会容易很多，
        // 尽管本应可以假设 x 是
        // SomeConcreteType
        SomeConcreteType y = (SomeConcreteType)x;
        // 对 y 执行操作
    }
}
```

子C类型系统将利用 如果-splitting,其中分支表达导致变量类型在真实和虚假情况下发生突变.

```typescript
import Toybox.Lang;

public function foo(x as Number?) as Boolean {
    if(x != null) {
        // 在此代码块中，假设 x 是 Number 且不为 null
    } else {
        // 在此代码块中，假设 x 为 null
    }
}
```

==, !=,和`instanceof`操作符将根据以下规则突变类型

| type | \== | != | instanceof |的例子|
| --- | --- | --- | --- | --- |
| Any | Ignore | Ignore |转变类型为`instanceof`类型| Ignore |
| Concrete | Ignore | Ignore |转变类型为`instanceof`类型| Ignore |
| Poly |如果 == 是`null`, 转变为零类型|如果 !=是`null`, 转变为多型减去`null`.|转变类型为`instanceof`类型|从`instanceof`转换为多型减值型|
| Interface | Ignore | Ignore |转变类型为`instanceof`类型| Ignore |
| Container | Ignore | Ignore | Ignore | Ignore |
| Dictionary | Ignore | Ignore | Ignore | Ignore |
| Enum |变为enum值类型| Ignore | Ignore | Ignore |
| Callback | Ignore | Ignore | Ignore | Ignore |
| Null | Ignore | Ignore | Ignore | Ignore |

术语也可以通过&&和 &&的运算符进行修改. 随着&&运算符的使用,突变将通过表达式进行修改,随着表达式的继续.

```typescript
import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;

public function foo(x as Addable?) {
    // 在第一个子句中，x 被修改为从多类型中移除 null。
    // 在第二个子句中，新的多类型被修改为 String 具体类型。
    if(x != null &&
       x instanceof String) {
        // 在此代码块中，假设 x 是字符串
    }
}
```

随着这些操作的结果,建立了一个新的聚类型

```typescript
import Toybox.Lang;

typedef Addable as Number or Float or Long or Double or String;

public function foo(x as Addable?) {
    if(x instanceof Number ||
       x instanceof Float) {
        // 在此代码块中，假设 x 是 Number 或 Float
    }
}
```

如果分为成员变量时,如果调用函数,则将删除所有类型突变.

## 为模块和类指定类型

与本地变量不同,成员变量不会根据分配推断类型.将类型架子添加到成员变量和名字添加到列表将允许更强的类型检查.常量按分配输入.

```typescript
class Example {
    // 成员变量
    private var _x as Number = 0;

    // 可以显式分配枚举值，否则默认使用
    // 按数字递增的值。
    enum NamedEnum {
        NAMED_ENUM;
    }

    // 常量通过赋值推断其类型
    private const _constant = "Constant";
}
```

如果添加类型架架,则必须初始化变量或允许它是`null`.下面的例子会导致编译器错误:

```typescript
import Toybox.Lang;
import Toybox.System;

// 请勿射击
class Messenger {
    private var _message as String;

    public function shareTheMessage() as Void {
        System.println(_message);
    }
}
```

错误的原因是,`_message`被声明为字符串,但只剩下它被初始化为`null`.模块变量要么在声明时初始化或被允许是`null`,而对象成员也可以在`initialize`函数中初始化.以下将解决错误:

```typescript
import Toybox.Lang;
import Toybox.System;

// 请勿射击
class Messenger {
    private var _message as String;

    public function initialize() {
       // 初始化消息
        _message = "";
    }

    public function shareTheMessage() {
        System.println(_message);
    }
}
```

### 类型和继承

在扩展类型时,类型系统将使用以下规则:

1. 如果从母函数扩展一个函数,但不添加类型装饰,则对参数的类型和返回值将从母函数实现中被字面上转移

2. 如果从母函数扩展一个函数,并添加类型装饰,则必须与数量的参数和类型装饰相匹配,否则编译器会错误


这允许现有的子C代码扩展`Toybox`类型,在不需要添加任何类型装饰的情况下利用类型检查.

##应用范围类型检查

类型检查器试图验证从模块或类中获取的任何成员都与调用者相同的应用范围中可用.如果开发人员确信他们的代码是安全的应用范围,并且类型检查器仍然抱怨,则可以通过分别使用注释`:typecheck(disableBackgroundCheck)`或`:typecheck(disableGlanceCheck)`来禁用此检查.

首先,`as`现在在语法中具有一个全新的含义,并且使用它为模块重命名是困惑的.另外,在子C中重命名模块使得写好可共享的示例代码变得非常困难,因为每个人都根据自己的偏好重命名每个模块.是的,`Gregorian`是一个很大的词,并且很烦人打字,但这就是我们有自动完成的原因.

对于评估自助书籍的即将推出的"方法方法" (The Method Method) 则不应该混为一谈.

我刚刚见到你,这很疯狂,但我是一个很适合的人吗?
