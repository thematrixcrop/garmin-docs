---
title: "Containers"
---
<a id="containers"></a>
# 容器

Monkey C 语言内置两种容器类型：数组（Array）和字典（Dictionary）。

## 数组

Monkey C 中的数组和变量一样不带固定类型，因此不需要声明数据类型。创建新数组有两种形式。要创建固定 `size` 的空数组，请使用：

```typescript
// Create a typeless array
var untypedArray = new [size];
// Create a typed array
var typedArray = new Array<Number>[size];
```

要预先填充数组，可以使用以下语法：

```typescript
// New array. Will be typed as a Tuple
// [Number, Number, Number, Number, Number]
var untypedArray = [1, 2, 3, 4, 5];
// New typed array
var typedArray = [1, 2, 3, 4, 5] as Array<Number>;
```

数组元素是表达式，因此可以使用以下语法创建多维数组：

```typescript
var array = [ [1,2], [3,4] ];
```

Monkey C 没有直接创建空二维数组的语法，但可以使用以下方式初始化：

```typescript
// Shout out to all the Java programmers in the house
var array = new [first_dimension_size];

// Initialize the sub-arrays
for( var i = 0; i < first_dimension_size; i += 1 ) {
    array[i] = new [second_dimension_size];
}
```

## 字典

字典（也称关联数组）是 Monkey C 内置的数据结构：

```java
var dict = { "a" => 1, "b" => 2 };  // Creates a dictionary
System.println( dict["a"] );        // Prints "1"
System.println( dict["b"] );        // Prints "2"
System.println( dict["c"] );        // Prints "null"
```

要初始化空字典，请使用以下语法：

```typescript
var x = {};                         // Empty dictionary
```

创建新的 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 对象时，可以添加类型后缀以限制键和值的类型：

```typescript
var x = {} as Dictionary<Symbol, String>;
// Valid
x[:option] = "value";
// Invalid
x["option"] = "value";
```

默认情况下，对象使用引用值进行哈希。要改变某个类型的哈希函数，应在 `Toybox.Lang.Object` 中重写 `hashCode()` 方法：

```java
class Person
{
    // Return a number as the hash code. Remember that the hash code must be
    // the same for two objects that are equal.
    // @return Hash code value
    function hashCode() {
        // Using the unique person id for the hash code
        return mPersonId;
    }
}
```

字典会随着内容增加或减少自动调整大小并重新哈希。这使字典非常灵活，但也有代价：如果发生意外或过于频繁的扩容和重新哈希，插入和删除元素可能带来性能问题。此外，哈希表需要额外的分配空间，因此空间效率不如对象或数组。
