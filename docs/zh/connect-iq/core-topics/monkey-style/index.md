---
title: "Monkey Style"
---
<a id="monkey-style"></a>
# Monkey Style

Monkey Style 是一种用于管理样式元素的领域专用属性语言。它大量借鉴了 CSS，但针对 Monkey C 进行了定制。借助 Monkey Style，开发者可以创建能够适配不同 Garmin 产品的样式属性常量。

## 个性类（Personality Class）

Monkey Style 支持创建由常量组成的个性类。可以使用以下语法定义个性类：

```css
personality_class {
    property: "constant";
}
```

个性类和属性必须使用符合 Monkey C 规则的名称，并且值可以是以下类型：

| 类型 | 示例 |
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

## 资源编译器

资源编译器元素可以通过 `personality` 属性引用个性类。`personality` 属性可以引用多个以空格分隔的个性类。

例如，可以定义如下个性类：

```css
layout1__time {
    x: "center";
    y: 10%;
    font: Graphics.FONT_LARGE;
    justification: Graphics.TEXT_JUSTIFY_CENTER;
    color: Graphics.COLOR_BLUE;
}
```

然后可以在布局中引用它：

```xml
<layout id="WatchFace">
    <drawable class="Background" />
    <label id="TimeLabel" personality="layout1__time" />
</layout>
```

## 在源代码中使用个性类

定义的任何个性类都可以通过 `Rez.Styles` 命名空间访问。该类会被定义为一个包含常量值的模块，可以通过类名访问这些值。

```typescript
dc.setFont(Rez.Styles.layout1__time.font);
```

以这种方式引用时，编译器可以在编译时替换常量引用，并从运行时中移除个性类。

## 配置个性类

可以在 Jungle 中配置一系列 Monkey Style 样式表。这样可以为每个产品指定不同的样式表，同时让样式内容在不同产品之间保持通用。可以使用 `personality` 选择器配置个性类：

```properties
fenix7system6preview.personality=$(fenix7system6preview.personality);resources-fenix2022
```
