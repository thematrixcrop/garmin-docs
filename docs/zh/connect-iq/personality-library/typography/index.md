---
title: "排版"
---
# 排版

产品所使用的字体会综合考虑可读性、产品的视觉语言和其他审美因素。

## 系统字体和数字字体

Garmin® 产品通常提供两组字体：系统字体用于文本信息，数字字体用于数值信息。每组字体都包含多种可用字号。设备参考中列出了各产品支持的字体。

布局系统中的字体选择器对应不同使用场景下可用的字体。选择器通常同时指定字号和对齐方式，并依赖其他选择器确定颜色、位置和边界区域。

### 示例

下面的示例定义了带标题提示中的正文文本。

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

| 选择器 | 使用场景 |
| --- | --- |
| `confirmation_font__body` | 确认页面正文所使用的字体。 |
| `prompt_font__title` | 提示标题所使用的字体。 |
| `prompt_font__body_no_title` | 无标题提示正文所使用的字体。 |
| `prompt_font__body_with_title` | 带文本标题或图标标题的提示正文所使用的字体。 |
