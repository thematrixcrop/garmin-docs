---
title: "Containers"
---
# 容器

子C有两个集装箱类型:阵列和词典.

## 数组

子C中的数组,就像变量一样,是无类型的,不需要声明数据类型.创建新数组有两种形式.创建固定`size`的空格数组,请使用以下方法:

```typescript
// 创建无类型数组
var untypedArray = new [size];
// 创建有类型数组
var typedArray = new Array<Number>[size];
```

为了预先启动数组,可以使用这个语法:

```typescript
// 新建数组，将被作为元组进行类型化
// [Number, Number, Number, Number, Number]
var untypedArray = [1, 2, 3, 4, 5];
// 新建类型化数组
var typedArray = [1, 2, 3, 4, 5] as Array<Number>;
```

元素是表达式,因此可以使用这个语法创建多维数组:

```typescript
var array = [ [1,2], [3,4] ];
```

子C没有直接的方式来创建一个空的二维数组,一个可以用这个语法初始化:

```typescript
// 向在场的所有 Java 程序员致意
var array = new [first_dimension_size];

// 初始化子数组
for( var i = 0; i < first_dimension_size; i += 1 ) {
    array[i] = new [second_dimension_size];
}
```

## 字典

词典或关联阵列是子C中内置的数据结构:

```java
var dict = { "a" => 1, "b" => 2 };  // 创建字典
System.println( dict["a"] );        // 打印 "1"
System.println( dict["b"] );        // 打印 "2"
System.println( dict["c"] );        // 打印 "null"
```

为了启动空白字典,使用以下语法:

```typescript
var x = {};                         // 空字典
```

在创建新的[Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)对象时可以添加类型后:

```typescript
var x = {} as Dictionary<Symbol, String>;
// 有效
x[:option] = "value";
// 无效
x["option"] = "value";
```

默认情况下,对象按其参考值进行哈希.类别应在`Toybox.Lang.Object`中取代`hashCode()`方法,以更改其类型的哈希函数:

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

词典随着内容的增长或缩小,自动地改变大小和重写.这使得它们非常灵活,但有成本.如果有意外或过度的重写和重写,插入和删除内容可能会导致性能问题.
