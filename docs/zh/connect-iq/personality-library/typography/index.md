---
title: "Typography"
---
# 排版

对于产品使用的字体的选择取决于可读性,产品的视觉语言和其他审美考虑.

##系统和数字字体

Garmin® 产品通常有两组字体.系统字体用于纹理信息,而数字字体用于数值信息.每个字体都有一组可用的尺寸.设备参考概述了每个产品上可用的字体.

布局系统中的字体选择器为每个使用环境提供可用的字体. 选择器通常提供字体大小和理由,并且依赖于其他选择器的颜色,位置和边界面积.

### 示例

下面的示例描述了一个标题的提示中显示的体格文本.

```xml
<!-- layout.xml -->

        <!-- Prompt body -->
        <text-area text="@Strings.warningPrompt" personality="
            prompt_color_dark__body
            prompt_size__body_with_title
            prompt_loc__body_with_title
            prompt_font__body_with_title
        " />
```

## 选择器

| Selector | Context |
| --- | --- |
| `confirmation_font__body` |在确认中使用体文字的字体.|
| `prompt_font__title` |快速标题的字体.|
| `prompt_font__body_no_title` |字体文本的字体在没有标题的提示中.|
| `prompt_font__body_with_title` |字体为标题字符串或图标的提示.|
