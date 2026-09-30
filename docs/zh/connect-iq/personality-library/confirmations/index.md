---
title: "Confirmations"
---
# 确认

确认要求用户对一个问题作出"是"或"不"的答案.确认通常仅仅是文本.确认是增加少量的摩擦到重要决策的有用方法,以确保用户理解它们的意义.

![设备正面显示“是”确认界面](/connect-iq/resources/personality-library/personality_ui_confirmationhigh.jpg)

一个是/不是确认给用户提供了确认行动的机会.

## 示例

下面的示例使用[WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)来显示"是/否"确认.

```typescript
// InputDelegate.mc

using Toybox.WatchUi;

var message = "Continue?";
dialog = new WatchUi.Confirmation(message);
WatchUi.pushView(
    dialog,
    new ConfirmationDelegate(),
    WatchUi.SLIDE_IMMEDIATE
);
```

## 删除确认

![设备正面显示删除确认界面](/connect-iq/resources/personality-library/personality_ui_delete_confirmationhigh.jpg)

删除确认要求用户确认是否想要删除一个项目.

## 示例

[WatchUi.Confirmation](/connect-iq/api-docs/Toybox/WatchUi/Confirmation/)不支持删除确认,但您可以使用选择器构建自己的确认.

```xml
<!-- layout.xml -->

    <!-- 删除确认页面 -->
    <layout id="DeleteConfirmationPage">
        <!-- 确认 -->
        <bitmap id="confirmIcon" personality="
            confirmation_icon__hint_confirm
            confirmation_loc__hint_confirm
        " />

        <!-- 删除 -->
        <bitmap id="deleteIcon" personality="
            confirmation_icon__hint_delete
            confirmation_loc__hint_delete
        " />

        <!-- 提示正文 -->
        <text-area text="@Strings.deletePrompt" personality="
            confirmation_color_dark__body
            confirmation_size__body
            confirmation_loc__body
            confirmation_font__body
        " />
```

```typescript
// InputDelegate.mc

    function onKey(evt as KeyEvent) as Boolean {
        if (Styles.confirmation_input__confirm has :button &&
            evt.getKey() == Styles.confirmation_input__confirm.button) {
            doConfirmAction();
            return true;
        } else if (Styles.confirmation_input__reject has :button &&
            evt.getKey() == Styles.confirmation_input__reject.button) {
            doRejectAction();
            return true;
        }
        return false;
    }

    function onTap(evt as ClickEvent) as Boolean {
        if (!(Styles.confirmation_input__confirm has :button) &&
            $.isInRejectArea(evt.getCoordinates())) {
            doConfirmAction();
            return true;
        } else if (!(Styles.confirmation_input__reject has :button) &&
            $.isInRejectArea(evt.getCoordinates())) {
            doRejectAction();
            return true;
        }
        return false;
    }
```

```typescript
// 辅助函数

import Rez.Styles;

//! 检查点击是否落在
//! 确认触摸区域内。
//! @param x 点击的 X 坐标
//! @param y 点击的 Y 坐标
//! @return 点击时为 true，否则为 false
function isInConfirmArea(coord as Array<Numeric>) as Boolean {
    if (Styles.confirmation_input__confirm has :x1 &&
        Styles.confirmation_input__confirm has :y1 &&
        Styles.confirmation_input__confirm has :x2 &&
        Styles.confirmation_input__confirm has :y2) {

        var x = coord[0];
        var y = coord[1];

        if (x >= Styles.confirmation_input__confirm.x1 &&
            x <= Styles.confirmation_input__confirm.x2 &&
            y >= Styles.confirmation_input__confirm.y1 &&
            y <= Styles.confirmation_input__confirm.y2) {
            return true;
        }
    }
    return false;
}

//! 检查点击是否落在
//! 拒绝触摸区域内。
//! @param x 点击的 X 坐标
//! @param y 点击的 Y 坐标
//! @return 点击时为 true，否则为 false
function isInRejectArea(coord as Array<Numeric>) as Boolean {
    if (Styles.confirmation_input__reject has :x1 &&
        Styles.confirmation_input__reject has :y1 &&
        Styles.confirmation_input__reject has :x2 &&
        Styles.confirmation_input__reject has :y2) {

        var x = coord[0];
        var y = coord[1];

        if (x >= Styles.confirmation_input__reject.x1 &&
            x <= Styles.confirmation_input__reject.x2 &&
            y >= Styles.confirmation_input__reject.y1 &&
            y <= Styles.confirmation_input__reject.y2) {
            return true;
        }
    }
    return false;
}
```
