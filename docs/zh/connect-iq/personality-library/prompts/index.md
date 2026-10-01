---
title: "提示"
---
# 提示

提示页面用于向用户展示文本信息，可以传达重要信息，也可以提供有用的建议或解释用户无法执行某项操作的原因。

![设备正面显示无标题提示](/connect-iq/resources/personality-library/personality_ui_prompts_no_titlehigh.jpg)

提示通常是不带标题的页面，并会在短时间后自动消失。

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

## 带文本标题的提示

![设备正面显示带标题提示](/connect-iq/resources/personality-library/personality_ui_prompts_with_titlehigh.jpg)

文本标题可以为提示提供额外的上下文信息。

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

## 带图标标题的提示

![设备正面显示带图标提示](/connect-iq/resources/personality-library/personality_ui_prompts_with_iconhigh.jpg)

您可以用图标代替文本标题，以更快地传达上下文，或强调提示的含义。

### 示例

下面的示例会在提示正文上方放置一个图标。

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
