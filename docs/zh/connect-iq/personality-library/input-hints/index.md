---
title: "输入提示"
---
# 输入提示

![设备正面显示按钮提示](/connect-iq/resources/personality-library/personality_ui_button_hintshigh.jpg)

Garmin® 软件遵循常见的交互模式。在页面上提供提示，说明用户可以执行哪些操作非常重要。

## 物理按钮提示

在没有触摸屏的产品上，软件应告诉用户下一步要按哪个按钮。按钮提示会突出显示相应的实体按钮，引导用户完成操作。

### 示例

```xml
<!-- layout.xml -->

        <!-- Left top hint -->
        <bitmap id="leftTop" personality="
            system_icon_dark__hint_button_left_top
            system_loc__hint_button_left_top" />
```

## 选择器

并非每种产品都支持所有选择器。为产品构建资源时，如果该产品没有对应位置的按钮，应用于该位置的提示会自动排除。

| 资源选择器 | 位置选择器 | 上下文 |
| --- | --- | --- |
| `system_icon_light__hint_button_left_top`, `system_icon_dark__hint_button_left_top` | `system_loc__hint_button_left_top`, `system_size__hint_button_left_top` | 五按钮配置可穿戴设备的左上按钮。 |
| `system_icon_light__hint_button_left_middle`, `system_icon_dark__hint_button_left_middle` | `system_loc__hint_button_left_middle`, `system_size__hint_button_left_middle` | 五按钮配置可穿戴设备的左中按钮。 |
| `system_icon_light__hint_button_left_bottom`, `system_icon_dark__hint_button_left_bottom` | `system_loc__hint_button_left_bottom`, `system_size__hint_button_left_bottom` | 五按钮配置可穿戴设备的左下按钮。 |
| `system_icon_light__hint_button_right_top`, `system_icon_dark__hint_button_right_top` | `system_loc__hint_button_right_top`, `system_size__hint_button_right_top` | 五按钮、三按钮或双按钮配置可穿戴设备的右上按钮。 |
| `system_icon_light__hint_button_right_middle`, `system_icon_dark__hint_button_right_middle` | `system_loc__hint_button_right_middle`, `system_size__hint_button_right_middle` | 三按钮配置可穿戴设备的右中按钮。 |
| `system_icon_light__hint_button_right_bottom`, `system_icon_dark__hint_button_right_bottom` | `system_loc__hint_button_right_bottom`, `system_size__hint_button_right_bottom` | 五按钮、三按钮或双按钮配置可穿戴设备的右下按钮。 |
