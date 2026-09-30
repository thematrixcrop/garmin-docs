---
title: "Progress Indicators"
---
# 进度指示器

在您的应用程序需要执行异步操作时,例如加载更新或新视图时,您应该向用户表示他们需要等待.进步指标提供一个全页的体验,通知用户在等待期间过程正在进行.

## 百分比进度指示器

如果您要量化完成流程所需的进度百分比或时间，可以使用百分比进度指示器向用户展示进度。

### 示例

查看UI.ProgressBar显示进步百分比,如果您将其初始化为0到100之间的值,请调用[ProgressBar.setProgress()](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/#setProgress-instance_function)更新显示的进步.

```typescript
// InputDelegate.mc

    progressBar = new WatchUi.ProgressBar(
        "Processing...",
        0
    );
    WatchUi.pushView(
        progressBar,
        new MyProgressDelegate(),
        Ui.SLIDE_DOWN
    );
```

## 无限进度指示器

如果您没有已知的进步终点,则可以使用无限进步模式. 这显示一个旋转指标,以显示任务正在进行.

### 示例

如果您以`null`值初始化,[WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/)显示一个繁忙的进展.

```typescript
// InputDelegate.mc

    progressBar = new WatchUi.ProgressBar(
        "Processing...",
        null
    );
    WatchUi.pushView(
        progressBar,
        new MyProgressDelegate(),
        Ui.SLIDE_DOWN
    );
```
