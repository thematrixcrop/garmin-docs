---
title: "How do I Override The Goal Animation?"
---
# 如何覆盖目标动画？

*Since API level 1.3.0*

当实现活动跟踪目标时显示的屏幕可以被激活的表表面覆盖.通过在应用程序的`AppBase`类中实现`getGoalView()`函数.

```java
class AppBase {
    function getGoalView(goalType);
}
```

The 'getGoalView()' function is passed one of the supported goal view types: 'GOAL\_TYPE\_STEPS', 'GOAL\_TYPE\_FLOORS\_CLIMBED', or 'GOAL\_TYPE\_ACTIVE\_MINUTES'. Not all types are supported on every product. The application can return a view to be displayed from this function, or null to allow the system to display the default goal display. Goal Views can start animations, similar to the main WatchFace view when onExitSleep() is triggered. Goal Views are displayed for approximately 10 seconds. When they expire, 系统将 call 'getInitialView()' to switch back to the main WatchFace view.
