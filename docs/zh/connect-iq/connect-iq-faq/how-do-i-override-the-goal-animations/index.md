---
title: "如何覆盖目标动画？"
---
# 如何覆盖目标动画？

*自 API 级别 1.3.0*

达到活动跟踪目标时显示的屏幕，可以由当前活动的表盘覆盖。要实现这一点，请在应用的 `AppBase` 类中实现 `getGoalView()` 函数。

```java
class AppBase {
    function getGoalView(goalType);
}
```

`getGoalView()` 函数会接收以下受支持的目标视图类型之一：`GOAL_TYPE_STEPS`、`GOAL_TYPE_FLOORS_CLIMBED` 或 `GOAL_TYPE_ACTIVE_MINUTES`。并非每种产品都支持所有类型。应用可以从该函数返回要显示的视图，也可以返回 `null`，让系统显示默认目标视图。目标视图可以启动动画，类似于触发 `onExitSleep()` 时的主表盘视图。目标视图显示约 10 秒；超时后，系统会调用 `getInitialView()` 切换回主表盘视图。
