---
title: "Class: Toybox.WatchUi.Text"
---
# Class: Toybox.WatchUi.Text

Inherits:

Toybox.WatchUi.Drawable

- [Toybox.Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/)

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)

- [Toybox.WatchUi.Text](/connect-iq/api-docs/Toybox/WatchUi/Text/)


[show all](#)

## 概述

文本资源的表示。

## 另见：

- [Toybox.WatchUi.Drawable](/connect-iq/api-docs/Toybox/WatchUi/Drawable/)


Example:

```
using Toybox.Graphics;
using Toybox.WatchUi;

class MyTextView extends WatchUi.View {

    hidden var myText;

    function initialize() {
        View.initialize();
    }

    function onShow() {
        myText = new WatchUi.Text({
            :text=>"Hello World!",
            :color=>Graphics.COLOR_WHITE,
            :font=>Graphics.FONT_LARGE,
            :locX =>WatchUi.LAYOUT_HALIGN_CENTER,
            :locY=>WatchUi.LAYOUT_VALIGN_CENTER
        });
    }

    function onUpdate(dc) {
        dc.setColor(Graphics.COLOR_WHITE, Graphics.COLOR_BLACK);
        dc.clear();
        myText.draw(dc);
    }
}
```

Since:

API 级别 1.0.0

## 实例方法摘要 [collapse](#)

- [**draw**](#draw-instance_function)(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) as **Void**

    把文本绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

- [**initialize**](#initialize-instance_function)(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })

    Constructor.

- [**setBackgroundColor**](#setBackgroundColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置 Text 对象的背景色。

- [**setColor**](#setColor-instance_function)(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) as **Void**

    设置 Text 对象的前景色。

- [**setFont**](#setFont-instance_function)(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) as **Void**

    设置 Text 对象的字体。

- [**setJustification**](#setJustification-instance_function)(justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) as **Void**

    设置 Text 对象的对齐方式。

- [**setText**](#setText-instance_function)(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) as **Void**

    设置 Text 对象的文本字符串。


## 实例方法详情

### **draw(dc as [Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/))** as **Void**

把文本绘制到设备上下文（[Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)）。

Parameters:

- dc — ([Graphics.Dc](/connect-iq/api-docs/Toybox/Graphics/Dc/)) —

    设备上下文


Since:

API 级别 1.0.0

### **initialize(options as { :text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/), :color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :backgroundColor as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type), :font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type), :justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/), :identifier as [Lang.Object](/connect-iq/api-docs/Toybox/Lang/Object/), :locX as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :locY as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :width as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :height as [Lang.Numeric](/connect-iq/api-docs/Toybox/Lang/#Numeric-named_type), :visible as [Lang.Boolean](/connect-iq/api-docs/Toybox/Lang/Boolean/) })**

Constructor

Parameters:

- options — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    包含 Text 对象选项的 Dictionary

- :text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

        字符串资源的文本字符串或 ResourceId。

- :color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        表示所需文本颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值，默认为 COLOR\_WHITE

- :backgroundColor — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

        表示所需背景颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值，默认为 COLOR\_TRANSPARENT

- :font — ([Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type)) —

        表示所需字体的值，默认为 FONT\_MEDIUM

- :justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module), [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)) —

        表示所需对齐方式的一个 [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) 值，默认为 TEXT\_JUSTIFY\_LEFT


另见：

- [Drawable.initialize()](/connect-iq/api-docs/Toybox/WatchUi/Drawable/#initialize-instance_function)


Since:

API 级别 1.0.0

### **setBackgroundColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置 Text 对象的背景色。

Parameters:

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    表示所需背景颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值


Since:

API 级别 1.3.0

### **setColor(color as [Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type))** as **Void**

设置 Text 对象的前景色。

Parameters:

- color — ([Graphics.ColorType](/connect-iq/api-docs/Toybox/Graphics/#ColorType-named_type)) —

    表示所需文本颜色的一个 [Graphics.COLOR\_\*](/connect-iq/api-docs/Toybox/Graphics/#COLOR_WHITE-const) 值


Since:

API 级别 1.0.0

### **setFont(font as [Graphics.FontType](/connect-iq/api-docs/Toybox/Graphics/#FontType-named_type))** as **Void**

设置 Text 对象的字体。

Parameters:

- font — ([Graphics.FontDefinition](/connect-iq/api-docs/Toybox/Graphics/#FontDefinition-module)) —

    一个表示所需字体或来自 [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function) 的资源对象的 [Graphics.FONT\_\*](/connect-iq/api-docs/Toybox/Graphics/#FONT_XTINY-const) 值


另见：

- [WatchUi.loadResource()](/connect-iq/api-docs/Toybox/WatchUi/#loadResource-instance_function)


Since:

API 级别 1.0.0

### **setJustification(justification as [Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module) or [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/))** as **Void**

设置 Text 对象的对齐方式。

Parameters:

- justification — ([Graphics.TextJustification](/connect-iq/api-docs/Toybox/Graphics/#TextJustification-module)) —

    表示所需对齐方式的一个 [Graphics.TEXT\_JUSTIFY\_\*](/connect-iq/api-docs/Toybox/Graphics/#TEXT_JUSTIFY_RIGHT-const) 值


Since:

API 级别 1.0.0

### **setText(text as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/) or [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/))** as **Void**

设置 Text 对象的文本字符串。

Parameters:

- text — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.ResourceId](/connect-iq/api-docs/Toybox/Lang/ResourceId/)) —

    文本字符串或字符串 ResourceId。


Since:

API 级别 1.0.0
