---
title: "操作视图"
---
# 操作视图

操作视图是同时提供信息和上下文操作菜单的页面。用户可以针对页面中显示的信息执行这些操作，例如完成某个步骤或任务。

![设备正面显示操作提示](/connect-iq/resources/personality-library/personality_ui_action_hinthigh.jpg)

每种产品都会提供标准提示，说明如何打开上下文操作菜单。

## 示例

```xml
<!-- layout.xml -->

        <!-- 操作菜单提示 -->
        <bitmap id="actionMenu" personality="
            system_icon_dark__hint_action_menu
            system_loc__hint_action_menu" />
```

操作菜单不支持图标。

## 示例

```xml
<!-- menu.xml -->

<action-menu id="ActionMenu">
    <action-menu-item id="edit" label="@Strings.edit" />
    <action-menu-item id="dismiss" label="@Strings.dismiss" />
</action-menu>
```

```typescript
// InputDelegate.mc

    function onKey(evt as KeyEvent) as Boolean {
        if (Styles.system_input__action_menu has :button &&
            evt.getKey() == Styles.system_input__action_menu.button) {
            showActionMenu();
            return true;
        }
        return false;
    }

    function onTap(evt as ClickEvent) as Boolean {
        if (!(Styles.system_input__action_menu has :button) &&
            $.isInActionArea(evt.getCoordinates())) {
            showActionMenu();
            return true;
        }
        return false;
    }

    function showActionMenu() as Void{
        WatchUi.showActionMenu(new WatchUi.ActionMenu(),
            new MyActionMenuDelegate());
    }
```

`system_input__action_menu` 会指示产品是通过按钮还是触摸区域打开上下文操作菜单。

## 示例

如果产品支持，您可以使用 [View.setActionMenuIndicator()](/connect-iq/api-docs/Toybox/WatchUi/View/#setActionMenuIndicator-instance_function) API 触发 `onActionMenu()` 调用（参见 [BehaviorDelegate.onActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onActionMenu-instance_function) 或 [PickerDelegate.onActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/#onActionMenu-instance_function)），从而显示上下文操作菜单。

```typescript
class ActionView extends WatchUi.View {

    function initialize() {
        View.initialize();

        if (View has :setActionMenuIndicator) {
            View.setActionMenuIndicator({:enabled=>true});
        }
    }
}

class ActionViewDelegate extends WatchUi.BehaviorDelegate {

    function onActionMenu() as Boolean {
        showActionMenu();
        return true;
    }

    function showActionMenu() as Void{
        WatchUi.showActionMenu(new WatchUi.ActionMenu(),
            new MyActionMenuDelegate());
    }
}
```

## 示例

```typescript
// 辅助函数：isInActionArea

//! 检查点击是否落在
//! 操作菜单的触摸区域内。
//! @param x 点击的 X 坐标
//! @param y 点击的 Y 坐标
//! @return 点击时为 true，否则为 false
function isInActionArea(coord as Array<Numeric>) as Boolean {
    if (Styles.system_input__action_menu has :x1 &&
        Styles.system_input__action_menu has :y1 &&
        Styles.system_input__action_menu has :x2 &&
        Styles.system_input__action_menu has :y2) {

        var x = coord[0];
        var y = coord[1];

        if (x >= Styles.system_input__action_menu.x1 &&
            x <= Styles.system_input__action_menu.x2 &&
            y >= Styles.system_input__action_menu.y1 &&
            y <= Styles.system_input__action_menu.y2) {
            return true;
        }
    }
    return false;
}
```

## Edge 2022 个性

采用 Edge 2022 个性的产品提供可配置的可选控制栏，用于显示上下文操作。您可以使用 [View.setControlBar()](/connect-iq/api-docs/Toybox/WatchUi/View/#setControlBar-instance_function) API 配置控制栏，使其包含操作菜单。

### 示例

```typescript
// View.mc

        if (View has :setControlBar) {
            setControlBar({:title=>Rez.Strings.infoPrompt,
                :leftButton=>WatchUi.CONTROL_BAR_LEFT_BUTTON_BACK,
                :rightButton=>WatchUi.CONTROL_BAR_RIGHT_BUTTON_MENU
                });
        }
```

上例使用 `has` 检查，因此可以与其他产品共享这段代码。
