---
title: "Action Views"
---
# 操作视图

动作视图是提供信息和文本中的动作菜单的屏幕.这些动作可能是可在可见信息上执行的步骤或任务.

![设备正面显示操作提示](/connect-iq/resources/personality-library/personality_ui_action_hinthigh.jpg)

每个产品都有标准提示,说明如何访问文本行动菜单.

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

`system_input__action_menu`将通知您产品是否使用按或触摸区域启动文本信息.

## 示例

当可用时,您可以使用[View.setActionMenuIndicator()](/connect-iq/api-docs/Toybox/WatchUi/View/#setActionMenuIndicator-instance_function)API触发对`onActionMenu()`的呼叫 (见[BehaviorDelegate.onActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/BehaviorDelegate/#onActionMenu-instance_function)或[PickerDelegate.onActionMenu()](/connect-iq/api-docs/Toybox/WatchUi/PickerDelegate/#onActionMenu-instance_function)),可将文本信息推进.

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

## Edge 2022 个性化设置

具有Edge 2022个性的产品具有可配置的可选控制,可提供文本操作.您可以使用[View.setControlBar()](/connect-iq/api-docs/Toybox/WatchUi/View/#setControlBar-instance_function)API配置这个以设置一个动作菜单.

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

在上述例子中使用`has`,您可以与其他产品共享此代码.
