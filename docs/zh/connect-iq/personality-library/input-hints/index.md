---
title: "Input Hints"
---
# Input Hints

![Front views of devices displaying button hints](/connect-iq/resources/personality-library/personality_ui_button_hintshigh.jpg)

Garmin® 软件遵循常见的交互模式. 重要的是在页面上提供指导,以说明用户可采取哪些行动.

## Physical Button Hints

在没有触摸屏的产品上,软件应该向用户传达引发下一步的按.按提示突出了适当的物理按来引导用户.

### Example

```xml
<!-- layout.xml -->

        <!-- Left top hint -->
        <bitmap id="leftTop" personality="
            system_icon_dark__hint_button_left_top
            system_loc__hint_button_left_top" />
```

# Selectors

不是每个产品都有选择器,在构建该产品时,在没有按的产品上应用的提示将自动被排除在外.

| Asset Selector | Placement Selector | Context |
| --- | --- | --- |
| `system_icon_light__hint_button_left_top`, `system_icon_dark__hint_button_left_top` | `system_loc__hint_button_left_top`, `system_size__hint_button_left_top` |在左上方按的五按配置的可穿戴设备.|
| `system_icon_light__hint_button_left_middle`, `system_icon_dark__hint_button_left_middle` | `system_loc__hint_button_left_middle`, `system_size__hint_button_left_middle` |middle 穿戴式五按配置的左中按.|
| `system_icon_light__hint_button_left_bottom`, `system_icon_dark__hint_button_left_bottom` | `system_loc__hint_button_left_bottom`, `system_size__hint_button_left_bottom` |bottom 五按配置的可穿戴设备的左下按.|
| `system_icon_light__hint_button_right_top`, `system_icon_dark__hint_button_right_top` | `system_loc__hint_button_right_top`, `system_size__hint_button_right_top` |五按,三按或两按配置的可穿戴设备右上按.|
| `system_icon_light__hint_button_right_middle`, `system_icon_dark__hint_button_right_middle` | `system_loc__hint_button_right_middle`, `system_size__hint_button_right_middle` |按三键配置的可穿戴设备中右键.|
| `system_icon_light__hint_button_right_bottom`, `system_icon_dark__hint_button_right_bottom` | `system_loc__hint_button_right_bottom`, `system_size__hint_button_right_bottom` |bottom 五按,三按或两按配置的可穿戴设备的右下按.|
