---
title: "Iconography"
---
# 图标

Garmin® 产品采用了共同的图标系统. 虽然图标的意图和形状在产品中共享,但它们的视觉风格被改变以匹配产品个性.

在个人图书馆里有系统图标的子集,你可以将其集成到应用程序中.个人图书馆中的图标资产在前中有图标.

## 资源颜色

人格系统中的图标的所有颜色都用`light`和`dark`选择器记录.在某些产品上,特别是具有AMOLED显示器的产品上,这些选择器是相同的.如果您的应用程序不考虑夜间模式或不运行在夜间模式的产品上,只使用黑暗选择器.

组件也可能具有`positive`或`destructive`颜色来表示积极或破坏性行为. 并非每个资产都有积极或破坏性变化.

## 尺寸和位置

图标的尺寸和屏幕放置取决于正在制作的页面类型.位置选择器在预सर्ग中有`loc`,而尺寸选择器在预सर्ग中有`size`.通过使用这些选择器,您可以将您的图像适应多个产品.

## 示例

下面的例子将警告图标放在文本提示的标题中.

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

| Selector | Icon | Context |
| --- | --- | --- |
| `system_icon_light__about`, `system_icon_dark__about` | ![About symbol](/connect-iq/resources/personality-library/personality_ui_abouthigh.svg)
 |用于说明信息或帮助页面.|
| `system_icon_light__check`, `system_icon_dark__check`, `system_icon_positive__check` | ![Save symbol](/connect-iq/resources/personality-library/vivomove_trend_savehigh.svg)
 |用于呈现确认操作.|
| `system_icon_light__cancel`, `system_icon_dark__cancel`, `system_icon_destructive__cancel` | ![Exit symbol](/connect-iq/resources/personality-library/vivomove_trend_cancel_xhigh.svg)
 |用于表达取消行动.|
| `system_icon_light__discard`, `system_icon_dark__discard`, `system_icon_destructive__discard` | ![Delete symbol](/connect-iq/resources/personality-library/vivomove_trend_deletehigh.svg)
 |用于识别涉及丢弃记录信息的行动.|
| `system_icon_light__question`, `system_icon_dark__question` | ![Question symbol](/connect-iq/resources/personality-library/personality_ui_questionhigh.svg)
 |在用户必须回答查询的页面上使用.|
| `system_icon_light__revert`, `system_icon_dark__revert` | ![Undo symbol](/connect-iq/resources/personality-library/personality_ui_undohigh.svg)
 |用于表示撤销或撤销之前的操作.|
| `system_icon_light__save`, `system_icon_dark__save` | ![Save symbol](/connect-iq/resources/personality-library/vivomove_trend_savehigh.svg)
 |使用用于存储信息的操作.|
| `system_icon_light__search`, `system_icon_dark__search` | ![Search symbol](/connect-iq/resources/personality-library/personality_ui_searchhigh.svg)
 |使用来突出查询或浏览操作.|
| `system_icon_light__warning`, `system_icon_dark__warning`, `system_icon_destructive__warning` | ![Warning symbol](/connect-iq/resources/personality-library/personality_ui_warninghigh.svg)
 |用于警告用户可能产生有害影响的行为.|
