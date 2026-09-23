---
title: "How do I Override The Goal Animation?"
---
# How do I Override The Goal Animation?

*Since API level 1.3.0*

The screen displayed when activity tracking goals are reached can be overridden by the active watchface. This is done by implementing the `getGoalView()` function in the application's `AppBase` class.

```java
class AppBase {
    function getGoalView(goalType);
}
```

The 'getGoalView()' function is passed one of the supported goal view types: 'GOAL\_TYPE\_STEPS', 'GOAL\_TYPE\_FLOORS\_CLIMBED', or 'GOAL\_TYPE\_ACTIVE\_MINUTES'. Not all types are supported on every product. The application can return a view to be displayed from this function, or null to allow the system to display the default goal display. Goal Views can start animations, similar to the main WatchFace view when onExitSleep() is triggered. Goal Views are displayed for approximately 10 seconds. When they expire, the system will call 'getInitialView()' to switch back to the main WatchFace view.
