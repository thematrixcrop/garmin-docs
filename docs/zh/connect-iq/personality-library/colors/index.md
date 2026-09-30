---
title: "Color"
---
# 颜色

产品的颜色取决于显示技术和产品的图形设计语言.

## 使用颜色选择器

个性UI提供了特定环境的颜色选择器,可以在资源系统和代码中使用.

### 示例

在布局中,在添加布局组件时,将颜色与其他选择器结合起来.

```xml
<!-- layout.xml -->

        <!-- Prompt Title -->
        <text-area text="@Strings.mainTitle" personality="
            system_color_dark__text
            prompt_size__title
            prompt_loc__title
            prompt_font__title
        "/>
```

### 示例

在子C源中,你可以直接引用颜色选择器在代码中.

```typescript
// View.mc

import Rez.Styles;

dc.setColor(
    system_color_dark__text.color,
    system_color_dark__text.background
);
```

## 浅色和深色主题


![设备正面显示浅色和深色模式](/connect-iq/resources/personality-library/personality_ui_light_dark_modeshigh.jpg)

许多Garmin®产品都有光和暗的主题.有些产品允许客户选择每个活动的主题,而其他产品都有昼夜模式,决定主题.个性设计系统中的组件的所有颜色都用`color_light`和`color_dark`选择器记录.在某些产品上,特别是那些具有AMOLED显示屏的产品上,这些选择器是相同的.

如果您的应用程序不考虑夜间模式或不运行在夜间模式的产品上,只使用`color_dark`选择器.

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

    <!-- The Main View for our app -->
    <layout id="MainLayoutDark">
        <!-- Dark Background -->
        <drawable id="DarkBackground" />

        <!-- ActionMenu hint -->
        <bitmap id="actionMenuDark" personality="
            system_icon_dark__hint_action_menu
            system_loc__hint_action_menu" />

        <!-- Prompt Title -->
        <text-area text="@Strings.mainTitle" personality="
            system_color_dark__text
            prompt_size__title
            prompt_loc__title
            prompt_font__title
        "/>

        <!-- Prompt Body -->
        <text-area text="@Strings.mainPrompt" personality="
            system_color_dark__text
            prompt_size__body_with_title
            prompt_loc__body_with_title
            prompt_font__body_with_title
        " />
    </layout>
```

### 示例

由于性能原因,在您的本地变量中更快地跟踪白天或夜间模式,而不是在每次更新中查询系统.下面的例子揭示白天或夜间模式是应用中的页面可以访问的主题.

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

    // Theme initialization
    public function initialize() {
        AppBase.initialize();

        // Test for night mode
        if (Styles.device_info.hasNightMode &&
            System.DeviceSettings has :isNightModeEnabled) {
            _theme = System.getDeviceSettings().isNightModeEnabled ? THEME_DARK : THEME_LIGHT;
        } else {
            _theme = THEME_LIGHT;
        }

    }

    // Application handler for changes in day/night mode
    public function onNightModeChanged() {
        // Handle a change in night mode
        if (Styles.device_info.hasNightMode &&
            System.DeviceSettings has :isNightModeEnabled) {
            _theme = System.getDeviceSettings().isNightModeEnabled ? THEME_DARK : THEME_LIGHT;
        } else {
            _theme = THEME_LIGHT;
        }
        // Force a screen update.
        WatchUi.requestUpdate();
    }

    // Theme accessor
    public function getTheme() as Theme {
        return _theme;
    }

}
```

### 示例

根据您的应用程序是否在白天或夜间模式下,您可以加载不同的布局.下面的例子跟踪当前模式,并在主题变化时更改它.

```typescript
// View.mb

//! View that shows the main menu for the app
class MainView extends WatchUi.View {
    private var _theme as Theme;

    //! Constructor
    function initialize() {
        View.initialize();

        _theme = $.getApp().getTheme();
    }

    //! Handle layout
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

| Selector | Context |
| --- | --- |
| `system_color_light__background`, `system_color_dark__background` | 默认系统背景色。 |
| `system_color_light__text`, `system_color_dark__text` | 默认系统文本颜色。 |
| `activity_color_light__background`, `activity_color_dark__background` | 默认活动背景色。 |
| `activity_color_light__text`, `activity_color_dark__text` | 默认活动文本颜色。 |
| `prompt_color_light__background`, `prompt_color_dark__background` | 默认提示背景色。 |
| `prompt_color_light__title`, `prompt_color_dark__title` |在提示中标题字符串的文本颜色.|
| `prompt_color_light__body`, `prompt_color_dark__body` |提示的体文本的文本颜色.|
| `confirmation_color_light__background`, `confirmation_color_dark__background` | 默认确认背景色。 |
| `confirmation_color_light__body`, `confirmation_color_dark__body` | 默认确认正文文本颜色。 |
