---
title: "进度指示器"
---
# 进度指示器

当应用需要执行异步操作（例如加载更新或新视图）时，应告诉用户需要等待。进度指示器通过全屏界面告知用户操作仍在进行。

## 百分比进度指示器

如果可以量化完成流程所需的百分比或时间，可以使用百分比进度指示器向用户展示进度。

### 示例

使用 0 到 100 之间的值初始化 `WatchUi.ProgressBar`，即可显示百分比进度。调用 [ProgressBar.setProgress()](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/#setProgress-instance_function) 可以更新显示的进度。

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

如果无法确定进度何时结束，可以使用不确定进度模式。该模式显示旋转指示器，表示任务仍在进行。

### 示例

使用 `null` 值初始化 [WatchUi.ProgressBar](/connect-iq/api-docs/Toybox/WatchUi/ProgressBar/) 时，会显示不确定进度。

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
