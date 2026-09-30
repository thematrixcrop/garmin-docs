---
title: "Monkey Style"
---
# Monkey Style

Monkey style 是一种用于管理样式元素的专业领域属性语言。 它大量借鉴了 CSS，但已针对 Monkey C 进行了定制。 Monkey style 允许开发者创建可以在 Garmin 产品之间适应的样式属性常量。

## Personality Classes

Monkey style allow you to create personality classes of constants. These classes can be defined using the following syntax:

```css
personality_class {
    property: "constant";
}
```

Personality classes and properties have to be named with Monkey C legal names and can have the following value types:

| Type | Example |
| --- | --- |
| Number | 500 |
| Percent | 80% |
| String | “What’s the deal with style sheets?” |
| Boolean | true |
| Color | #555555 |
| Symbol | `:myBitmap` |
| Resource | `@Rez.Strings.promptTitle` |
| API Constant | `Graphics.TEXT_JUSTIFY_CENTER` |
| Array | `[Graphics.FONT_SMALL, Graphics.FONT_TINY]` |

## Resource Compiler

Personality classes can be referenced by resource compiler elements using the `personality` attribute. The `personality` attribute can reference multiple space-separated personality classes.

For example, you can have a personality class with the following definition:

```css
layout1__time {
    x: "center";
    y: 10%;
    font: Graphics.FONT_LARGE;
    justification: Graphics.TEXT_JUSTIFY_CENTER;
    color: Graphics.COLOR_BLUE;
}
```

This can then be referenced in your layout:

```xml
<layout id="WatchFace">
    <drawable class="Background" />
    <label id="TimeLabel" personality="layout1__time" />
</layout>
```

## Using Personality Classes in Source

Any personality class you define is addressable from the `Rez.Styles` namespace. The class is defined as a module of constant values that you can address via its name.

```typescript
dc.setFont(Rez.Styles.layout1__time.font);
```

以这种方式引用时，编译器可以在编译时替换常量引用并从运行时中消除个性类。

## Configuring Personalities

您可以在丛林中配置一系列 monkey 样式表。 This allows you to have specific style sheets for each product while keeping the content universal across products. You can configure the personality with the `personality` selector:

```properties
fenix7system6preview.personality=$(fenix7system6preview.personality);resources-fenix2022
```
