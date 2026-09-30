---
title: "容器"
---
<a id="containers"></a>
# 容器

Monkey C 语言内置两种容器类型：数组（Array）和字典（Dictionary）。

## 数组

Monkey C 中的数组和变量一样不带固定类型，因此不需要声明数据类型。创建新数组有两种形式。要创建固定 `size` 的空数组，请使用：

```typescript
// 创建无类型数组
var untypedArray = new [size];
// 创建有类型数组
var typedArray = new Array<Number>[size];
```

要预先填充数组，可以使用以下语法：

```typescript
// 新建数组，将被作为元组进行类型化
// [Number, Number, Number, Number, Number]
var untypedArray = [1, 2, 3, 4, 5];
// 新建类型化数组
var typedArray = [1, 2, 3, 4, 5] as Array<Number>;
```

数组元素是表达式，因此可以使用以下语法创建多维数组：

```typescript
var array = [ [1,2], [3,4] ];
```

Monkey C 没有直接创建空二维数组的语法，但可以使用以下方式初始化：

```typescript
// 向在场的所有 Java 程序员致意
var array = new [first_dimension_size];

// 初始化子数组
for( var i = 0; i < first_dimension_size; i += 1 ) {
    array[i] = new [second_dimension_size];
}
```

## 字典

字典（也称关联数组）是 Monkey C 内置的数据结构：

```java
var dict = { "a" => 1, "b" => 2 };  // 创建字典
System.println( dict["a"] );        // 打印 "1"
System.println( dict["b"] );        // 打印 "2"
System.println( dict["c"] );        // 打印 "null"
```

要初始化空字典，请使用以下语法：

```typescript
var x = {};                         // 空字典
```

创建新的 [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/) 对象时，可以添加类型后缀以限制键和值的类型：

```typescript
var x = {} as Dictionary<Symbol, String>;
// 有效
x[:option] = "value";
// 无效
x["option"] = "value";
```

默认情况下，对象使用引用值进行哈希。要改变某个类型的哈希函数，应在 `Toybox.Lang.Object` 中重写 `hashCode()` 方法：

```java
class Person
{
    // 返回作为哈希码的数字。请记住，两个相等对象的哈希码必须
    // 相同。
    // @return 哈希码值
    function hashCode() {
        // 使用唯一的人员 ID 作为哈希码
        return mPersonId;
    }
}
```

字典会随着内容增加或减少自动调整大小并重新哈希。这使字典非常灵活，但也有代价：如果发生意外或过于频繁的扩容和重新哈希，插入和删除元素可能带来性能问题。此外，哈希表需要额外的分配空间，因此空间效率不如对象或数组。
