---
title: "Prompts"
---
# 提示

提示是用户的文本信息页面.提示可以是提供重要信息的有价值的工具.它可以包含有帮助的提示或信息,解释用户为什么无法执行特定行动.

![设备正面显示不带标题的提示](/connect-iq/resources/personality-library/personality_ui_prompts_no_titlehigh.jpg)

提示通常是没有标题的页面,在短时间后自动消失.

## 示例

```xml
<!-- layout.xml -->

    <!-- Informational Prompt -->
    <layout id="InfoPromptDark" >
        <!-- Dark Background -->
        <drawable id="DarkBackground" />

        <!-- Prompt Body -->
        <text-area id="mainLabel" text="@Strings.informationPrompt" personality="
            prompt_color_dark__body
            prompt_size__body_no_title
            prompt_loc__body_no_title
            prompt_font__body_no_title
        " />
    </layout>
```

## 有文本标题的提示

![设备正面显示带标题的提示](/connect-iq/resources/personality-library/personality_ui_prompts_with_titlehigh.jpg)

提示的文本标题提供了额外的文本.

### 示例

```xml
<!-- layout.xml -->

    <!-- Informational Prompt -->
    <layout id="TitlePromptDark" >
        <!-- Dark Background -->
        <drawable id="DarkBackground" />

        <!-- Prompt Title -->
        <text-area id="title" text="@Strings.mainTitle" personality="
            prompt_color_dark__title
            prompt_size__title
            prompt_loc__title
            prompt_font__title
        " />
        <!-- Prompt Body -->
        <text-area id="mainLabel" text="@Strings.informationPrompt" personality="
            prompt_color_dark__body
            prompt_size__body_with_title
            prompt_loc__body_with_title
            prompt_font__body_with_title
        " />
    </layout>
```

## 标签标题的提示

![设备正面显示带图标的提示](/connect-iq/resources/personality-library/personality_ui_prompts_with_iconhigh.jpg)

您可以使用图标代替文本标题,以更快地提供文本,或以更大的重点.

### 示例

下面的示例将警告图标放在提示体文本上.

```xml
<!-- layout.xml -->

        <!-- About page prompt -->
    <layout id="AboutPageLight">
        <!-- Light Background -->
        <drawable id="LightBackground" />

        <bitmap id="aboutIconLight" personality="
            system_icon_light__about
            prompt_loc__title_icon
            prompt_size__title_icon
        " />

        <text-area text="@Strings.aboutPrompt" personality="
            prompt_color_light__body
            prompt_size__body_with_title
            prompt_loc__body_with_title
            prompt_font__body_with_title
        " />

    </layout>
```
