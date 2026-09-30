---
title: "颜色"
---
<a id="color"></a>
# 颜色

产品采用的颜色取决于显示技术和产品的图形设计语言。

## 使用颜色选择器

Personality UI 提供了与上下文相关的颜色选择器，可以在资源系统和代码中使用。

### 示例

在布局中添加布局组件时，可以将颜色与其他选择器结合使用。

```xml
<!-- layout.xml -->

        <!-- 提示标题 -->
        <text-area text="@Strings.mainTitle" personality="
            system_color_dark__text
            prompt_size__title
            prompt_loc__title
            prompt_font__title
        "/>
```

### 示例

在 Monkey C 源代码中，可以直接引用颜色选择器。

```typescript
// View.mc

import Rez.Styles;

dc.setColor(
    system_color_dark__text.color,
    system_color_dark__text.background
);
```

## 浅色和深色主题

![设备在浅色和深色模式下的正面视图](/connect-iq/resources/personality-library/personality_ui_light_dark_modeshigh.jpg)

许多 Garmin® 产品同时提供浅色和深色主题。有些产品允许用户为每项活动选择主题，另一些产品则通过日间和夜间模式决定主题。Personality 设计系统中的组件都会使用 `color_light` 和 `color_dark` 选择器记录颜色。在某些产品上，尤其是 AMOLED 显示屏产品，这两个选择器的颜色相同。

如果应用不处理夜间模式，或不运行在支持夜间模式的产品上，请只使用 `color_dark` 选择器。

### 示例

```xml
<!-- drawables.xml -->

    <drawable-list id="DarkBackground">
        <shape type="rectangle" x="0" y="0" personality="
            system_size__screen
            system_color_dark__background
        " />
    </drawable-list>
```

### 示例

```xml
<!-- layout.xml -->

    <!-- 应用的主视图 -->
    <layout id="MainLayoutDark">
        <!-- 深色背景 -->
        <drawable id="DarkBackground" />

        <!-- 操作菜单提示 -->
        <bitmap id="actionMenuDark" personality="
            system_icon_dark__hint_action_menu
            system_loc__hint_action_menu" />

        <!-- 提示标题 -->
        <text-area text="@Strings.mainTitle" personality="
            system_color_dark__text
            prompt_size__title
            prompt_loc__title
            prompt_font__title
        "/>

        <!-- 提示正文 -->
        <text-area text="@Strings.mainPrompt" personality="
            system_color_dark__text
            prompt_size__body_with_title
            prompt_loc__body_with_title
            prompt_font__body_with_title
        " />
    </layout>
```

### 示例

出于性能考虑，与其每次更新都查询系统，不如在本地变量中跟踪日间或夜间模式。下面的示例将日间或夜间模式作为主题公开，应用中的页面可以访问该主题。

```typescript
//! Application.mb

import Toybox.Application;
import Toybox.Lang;
import Toybox.System;
import Toybox.WatchUi;

enum Theme {
    THEME_LIGHT,
    THEME_DARK
}

class MyApp extends Application {
    private var _theme as Theme;

    // 主题初始化
    public function initialize() {
        AppBase.initialize();

        // 检查夜间模式
        if (Styles.device_info.hasNightMode &&
            System.DeviceSettings has :isNightModeEnabled) {
            _theme = System.getDeviceSettings().isNightModeEnabled ? THEME_DARK : THEME_LIGHT;
        } else {
            _theme = THEME_LIGHT;
        }

    }

    // 应用程序处理昼夜模式变化
    public function onNightModeChanged() {
        // 处理夜间模式变化
        if (Styles.device_info.hasNightMode &&
            System.DeviceSettings has :isNightModeEnabled) {
            _theme = System.getDeviceSettings().isNightModeEnabled ? THEME_DARK : THEME_LIGHT;
        } else {
            _theme = THEME_LIGHT;
        }
        // 强制更新屏幕。
        WatchUi.requestUpdate();
    }

    // 主题访问器
    public function getTheme() as Theme {
        return _theme;
    }

}
```

### 示例

可以根据应用处于日间还是夜间模式加载不同布局。下面的示例跟踪当前模式，并在主题变化时更新布局。

```typescript
// View.mb

//! 显示应用主菜单的视图
class MainView extends WatchUi.View {
    private var _theme as Theme;

    //! 构造函数
    function initialize() {
        View.initialize();

        _theme = $.getApp().getTheme();
    }

    //! 处理布局
    function onLayout(dc as Dc) as Void {
        _theme = $.getApp().getTheme();
        setLayout(
            _theme == $.THEME_DARK ?
            Rez.Layouts.MainLayoutDark(dc) :
            Rez.Layouts.MainLayoutLight(dc)
        );
    }

    function onUpdate(dc as Dc) as Void {
        if ($.getApp().getTheme() != _theme) {
            onLayout(dc);
        }
        View.onUpdate(dc);
    }

}
```

## 选择器

| 选择器 | 使用场景 |
| --- | --- |
| `system_color_light__background`, `system_color_dark__background` | 默认系统背景色。 |
| `system_color_light__text`, `system_color_dark__text` | 默认系统文本颜色。 |
| `activity_color_light__background`, `activity_color_dark__background` | 默认活动背景色。 |
| `activity_color_light__text`, `activity_color_dark__text` | 默认活动文本颜色。 |
| `prompt_color_light__background`, `prompt_color_dark__background` | 默认提示背景色。 |
| `prompt_color_light__title`, `prompt_color_dark__title` | Prompt 标题字符串的文本颜色。 |
| `prompt_color_light__body`, `prompt_color_dark__body` | Prompt 正文的文本颜色。 |
| `confirmation_color_light__background`, `confirmation_color_dark__background` | 默认确认背景色。 |
| `confirmation_color_light__body`, `confirmation_color_dark__body` | 默认确认正文文本颜色。 |
