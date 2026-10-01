---
title: "图标"
---
# 图标

Garmin® 产品使用统一的系统图标。不同产品共享图标的含义和基本形状，但会调整视觉风格，以匹配各自的产品个性。

Personality Library 提供了一部分系统图标，您可以将它们集成到应用中。Personality Library 中的图标资源使用 `icon` 作为前缀。

## 资源颜色

Personality 系统会使用 `light` 和 `dark` 选择器记录图标的颜色。在某些产品上，尤其是采用 AMOLED 显示屏的产品，这两个选择器的颜色相同。如果应用不处理夜间模式，或不运行在支持夜间模式的产品上，请只使用 `dark` 选择器。

组件还可能提供 `positive` 或 `destructive` 颜色，用于表示积极或破坏性操作。并非每个资源都有这两种变体。

## 尺寸和位置

图标的尺寸和屏幕位置取决于页面类型。位置选择器的前缀包含 `loc`，尺寸选择器的前缀包含 `size`。组合使用这些选择器，可以让图像适配多个产品。

## 示例

下面的示例会将警告图标放在文本提示的标题区域。

```xml
<!-- layout.xml -->

    <!-- Warning icon in prompt header -->
        <bitmap id="warningIcon" personality="
            system_icon_light__warning
            prompt_loc__title_icon
            prompt_size__title_icon
        " />
```

## 选择器

| 选择器 | 图标 | 使用场景 |
| --- | --- | --- |
| `system_icon_light__about`, `system_icon_dark__about` | ![关于图标](/connect-iq/resources/personality-library/personality_ui_abouthigh.svg) | 用于说明信息或帮助页面。 |
| `system_icon_light__check`, `system_icon_dark__check`, `system_icon_positive__check` | ![保存图标](/connect-iq/resources/personality-library/vivomove_trend_savehigh.svg) | 用于表示确认操作。 |
| `system_icon_light__cancel`, `system_icon_dark__cancel`, `system_icon_destructive__cancel` | ![退出图标](/connect-iq/resources/personality-library/vivomove_trend_cancel_xhigh.svg) | 用于表示取消操作。 |
| `system_icon_light__discard`, `system_icon_dark__discard`, `system_icon_destructive__discard` | ![删除图标](/connect-iq/resources/personality-library/vivomove_trend_deletehigh.svg) | 用于表示会丢弃已记录信息的操作。 |
| `system_icon_light__question`, `system_icon_dark__question` | ![问题图标](/connect-iq/resources/personality-library/personality_ui_questionhigh.svg) | 用于需要用户回答问题的页面。 |
| `system_icon_light__revert`, `system_icon_dark__revert` | ![撤销图标](/connect-iq/resources/personality-library/personality_ui_undohigh.svg) | 用于表示撤销或恢复之前操作的动作。 |
| `system_icon_light__save`, `system_icon_dark__save` | ![保存图标](/connect-iq/resources/personality-library/vivomove_trend_savehigh.svg) | 用于表示保存信息的操作。 |
| `system_icon_light__search`, `system_icon_dark__search` | ![搜索图标](/connect-iq/resources/personality-library/personality_ui_searchhigh.svg) | 用于突出搜索或浏览操作。 |
| `system_icon_light__warning`, `system_icon_dark__warning`, `system_icon_destructive__warning` | ![警告图标](/connect-iq/resources/personality-library/personality_ui_warninghigh.svg) | 用于警告用户某项操作可能带来不良影响。 |
