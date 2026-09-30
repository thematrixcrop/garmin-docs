---
title: "类：Toybox.WatchUi.TextArea"
---
# 类：Toybox.WatchUi.TextArea

继承：

Toybox.WatchUi.Drawable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.TextArea](/connect-iq/api-docs/Toybox/WatchUi/TextArea/)


[显示全部](#)

## 概述

文本区域的表示，该文本区域会自动换行，以适应尽可能多的文本。

## 另见：

- [Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


示例：

```
using Toybox.Graphics;
using Toybox.WatchUi;

class MyTextAreaView extends WatchUi.View {

    hidden var myTextArea;

    function initialize() {
        View.initialize();
    }

    function onShow() {
        myTextArea = new WatchUi.TextArea({
            :text=>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            :color=>Graphics.COLOR_WHITE,
            :font=>[Graphics.FONT_MEDIUM, Graphics.FONT_SMALL, Graphics.FONT_XTINY],
            :locX =>WatchUi.LAYOUT_HALIGN_CENTER,
            :locY=>WatchUi.LAYOUT_VALIGN_CENTER,
            :width=>160,
            :height=>160
        });
    }

    function onUpdate(dc) {
        dc.setColor(Graphics.COLOR_WHITE, Graphics.COLOR_BLACK);
        dc.clear();
        myTextArea.draw(dc);
    }
}
```

起始版本：

API 级别 3.1.0

## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    把文本绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**initialize**](#initialize-instance_function)(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>, :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

- [**setBackgroundColor**](#setBackgroundColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置 Text 对象的背景色。

- [**setColor**](#setColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置 Text 对象的前景色。

- [**setFont**](#setFont-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>) as **Void**

    设置 Text 对象的字体。

- [**setJustification**](#setJustification-instance_function)(justification as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置 Text 对象的对齐方式。

- [**setText**](#setText-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

    设置 Text 对象的文本字符串。


## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

把文本绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

参数：

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


起始版本：

API 级别 3.1.0

### **initialize(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>, :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

构造函数

参数：

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Text 对象选项的 Dictionary

- :text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        字符串资源的文本字符串或 ResourceId。

- :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        表示所需文本颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值，默认为 COLOR\_WHITE

- :backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        表示所需背景颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值，默认为 COLOR\_TRANSPARENT

- :font — ([Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/), [Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

        一个表示所需字体的 [Graphics.FONT\_\*](/connect-iq/api-docs/Toybox/Graphics/#FONT_XTINY-const) 值，或包含此类值的数组。默认为 FONT\_MEDIUM

- :justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module)) —

        表示所需对齐方式的一个 [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) 值，默认为 TEXT\_JUSTIFY\_LEFT


另见：

- [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


起始版本：

API 级别 3.1.0

### **setBackgroundColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置 Text 对象的背景色。

参数：

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    表示所需背景颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 color 不是有效类型，则抛出


### **setColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置 Text 对象的前景色。

参数：

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    表示所需文本颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 color 不是有效类型，则抛出


### **setFont(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type) or [Lang.Array](/connect-iq/api-docs/Toybox/Lang/Array/)&lt;[Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)\>)** as **Void**

设置 Text 对象的字体。

参数：

- font — ([Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

    一个表示所需字体或来自 [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) 的资源对象的 [Graphics.FONT\_\*](/connect-iq/api-docs/Toybox/Graphics/#FONT_XTINY-const) 值，或包含此类值的 [Array](/connect-iq/api-docs/Toybox/Lang/Array/)。


另见：

- [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function)


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `font` 不是有效类型，则会抛出此异常


### **setJustification(justification as [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置 Text 对象的对齐方式。

参数：

- justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module)) —

    表示所需对齐方式的一个 [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) 值


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 `justification` 不是有效类型，则会抛出此异常


### **setText(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

设置 Text 对象的文本字符串。

参数：

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    文本字符串或字符串 ResourceId。


起始版本：

API 级别 3.1.0

抛出：

- ([Lang.UnexpectedTypeException](/connect-iq/api-docs/Toybox/Lang/UnexpectedTypeException/)) —

    如果 text 不是有效类型，则抛出
