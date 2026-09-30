---
title: "Monkey Style"
---
# Monkey 风格

Monkey style 是一种用于管理样式元素的专业领域属性语言。 它大量借鉴了 CSS，但已针对 Monkey C 进行了定制。 Monkey style 允许开发者创建可以在 Garmin 产品之间适应的样式属性常量。

## 个性类

子风格允许你创建常数的个性类.这些类可以通过以下语法定义:

```css
personality_class {
    property: "constant";
}
```

人格类和属性必须以 legal子C的法定名称命名,并且可以具有以下值类型:

|类型| Example |
| --- | --- |
| Number | 500 |
| Percent | 80% |
| 字符串 |style 什么是风格表的交易?|
| 布尔值 | true |
| Color | #555555 |
| Symbol | `:myBitmap` |
| Resource | `@Rez.Strings.promptTitle` |
| API 常量 | `Graphics.TEXT_JUSTIFY_CENTER` |
| 数组 | `[Graphics.FONT_SMALL, Graphics.FONT_TINY]` |

## 资源编译器

人格类可以通过使用`personality`属性进行资源编译元件引用.`personality`属性可以引用多个空间分离的人格类.

例如,您可以有以下定义的个性类别:

```css
layout1__time {
    x: "center";
    y: 10%;
    font: Graphics.FONT_LARGE;
    justification: Graphics.TEXT_JUSTIFY_CENTER;
    color: Graphics.COLOR_BLUE;
}
```

在您的布局中可以引用:

```xml
<layout id="WatchFace">
    <drawable class="Background" />
    <label id="TimeLabel" personality="layout1__time" />
</layout>
```

## 在源代码中使用个性类

您定义的任何个性类都可以从`Rez.Styles`命名空间中进行地址.该类是定义为一个通过名称可以地址的常数值的模块.

```typescript
dc.setFont(Rez.Styles.layout1__time.font);
```

以这种方式引用时，编译器可以在编译时替换常量引用并从运行时中消除个性类。

## 配置个性化设置

您可以在丛林中配置一系列 monkey 样式表。 This allows you to have specific style sheets for each product while keeping the content universal across products. You can configure the personality with the `personality` selector:

```properties
fenix7system6preview.personality=$(fenix7system6preview.personality);resources-fenix2022
```
