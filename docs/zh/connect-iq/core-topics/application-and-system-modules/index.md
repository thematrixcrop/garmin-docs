---
title: "Application and System Modules"
---
# 应用和系统模块

每个应用都必须包含一个继承自 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 的类。这个对象称为应用对象，负责处理应用生命周期事件。

必须在应用的 `manifest.xml` 中指定 Application 对象，以便构建工具知道启动时要加载哪个类。更多信息请参阅[清单和权限](/connect-iq/core-topics/manifest-and-permissions/#manifest-file-and-permissions)。

## 安装和卸载

*自 API 级别 3.0.0*

您的 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 提供两个会在安装和更新期间调用的处理器：

| API | 说明 | API 级别 |
| --- | --- | --- |
| [AppBase.onAppInstall()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppInstall-instance_function) | 应用安装时在后台触发的回调方法 | 3.0.0 |
| [AppBase.onAppUpdate()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppUpdate-instance_function) | 应用更新时在后台触发的回调方法 | 3.0.0 |

这两个方法都要求应用具有 `Background` 权限。典型用途包括在安装时注册后台服务，或启动身份验证流程。

这些方法的运行不保证。不要依赖它们实现关键功能。

## 应用生命周期

*自 API 级别 4.2.0 起*，应用程序有四种主要生命周期状态：已启动、活跃、不活跃和已暂停。

![](/connect-iq/resources/programmers-guide/app-lifecycle.png)

### 启动

应用加载后，系统会实例化应用对象。此后，您可以在应用程序中的任何位置调用 [Application.getApp()](/connect-iq/api-docs/Toybox/Application/#getApp-instance_function) 获取该对象。

应用对象实例化后，系统会调用 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)。您可以在此初始化应用并恢复状态。

如果应用程序通过 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 启动，state 参数将包含 intent 传入的参数。此时不要尝试推入 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 实例。更多信息请参阅 [Intents](/connect-iq/core-topics/intents/#intents) 一节。

应用加载后，系统会请求应用程序的初始视图。根据应用程序实现的功能，您可能需要实现以下若干处理器：

- [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)：应用启动的主要方法。返回表盘、数据字段、小工具或设备应用的基础视图。

-   [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function)：如果您正在实现带有速览界面的小组件，当用户在速览列表中查看该速览时，系统会调用此方法。更多信息请参阅[速览](/connect-iq/core-topics/glances/#glances)一节。

-   [AppBase.getGoalView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGoalView-instance_function)：如果您的表盘要覆盖目标视图，此方法可用于呈现目标视图。

-   如果正在实现音频内容提供商，系统会在需要向用户显示播放选项时调用相应的方法。


这些函数都返回一个数组：第一个元素是 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 实例，第二个元素是处理该视图输入的 [WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/) 实例。

从速览列表和活动菜单启动的应用程序行为不同。从速览列表启动时，应用程序会受到超时限制。如果用户未在规定时间内退出，系统会终止应用程序并返回主屏幕。不过，从活动菜单启动的应用程序不会超时，用户必须主动退出应用程序。

您可以使用以下方法检测用户进入应用的方式：

```typescript
class MySuperApp extends Application.AppBase {
    // if state contains the :resume key and the value
    // is true, then restore app state

    function onStart(state) {
         if ((state != null) && (state.get(:launchedFromGlance)) {
            // Launched from glance
        } else {
            // Launched from activity menu
        }
    }
}
```

### 活动、非活动和暂停

*自 API 级别 4.2.0*

某些设备具有任务切换器，方便用户在设备上的活动和应用之间切换。这可能会使应用从*活跃*状态切换为*不活跃*状态。要充分利用任务切换器，需要使用完整的应用生命周期。

| 状态 | 描述 |
| --- | --- |
| 活跃 | 应用从不活跃状态转为活跃状态时调用 [AppBase.onActive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onActive-instance_function)。活跃应用可访问的资源由应用类型决定；从不活跃转为活跃时，会恢复对传感器、ANT 和 BLE 的访问。 |
| 不活跃 | 从活跃状态转换为不活跃状态时调用 [AppBase.onInactive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onInactive-instance_function)。 |

根据应用运行的状态，您将拥有不同级别的系统资源访问权限：

| 状态 | 活跃 | 不活跃 |
| --- | --- | --- |
| 活动 | 获得权限后，可以开始和停止活动记录。 | 如果应用正在记录活动，记录会继续；否则不能开始或停止活动记录。 |
| GPS | 如果其他应用正在记录活动，GPS 访问可能会被拒绝。 | 如果应用正在记录活动并接收位置事件，会继续接收；否则不能修改 GPS 状态。 |
| ANT | 如果其他应用正在记录活动，ANT 访问可能会被拒绝。 | 如果应用正在记录活动，可以访问 ANT；否则所有打开的通道都会关闭，并在恢复活跃状态时重新打开。 |
| 高频传感器（加速度计、磁力计、陀螺仪） | 如果应用正在记录活动，可以访问；否则访问可能以非致命方式失败。 | 如果应用正在记录活动，可以访问；否则测量频率最高为 10 Hz。 |
| 传感器 | 如果应用正在记录活动，可以访问；否则访问可能以非致命方式失败。 | 如果应用正在记录活动，可以访问；否则传感器访问会受到限制。 |
| 提示 | 允许访问。 | 访问被拒绝。 |

用户可能会启动超出系统资源承载能力的应用程序。如果您的应用程序仍在运行但处于非活跃状态，系统可能会终止它以释放资源。

发生这种情况时，系统会调用您的 [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function)，并传入 `:suspend` 选项，通知您应用即将被终止。您可以在此保存状态，以便稍后恢复。用户返回应用时，系统会在 [AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function) 中传入 `:resume` 选项。

```typescript
class MyApp  extends Application.AppBase {
    // if state contains the :resume key and the value is true
    // then restore app state
    function onStart(state) {
        if ((state != null) && (state.get(:resume)) {
                restoreState();
        }
    }

    // if state contains the :suspend key and the value is
    // true, then save app state
     function onStop(state) {
        if ((state != null) && (state.get(:suspend)) {
            saveState();
        }
    }
}
```

如果不进行任何处理，用户返回应用时，应用会像刚刚启动一样运行。

### 应用终止

应用终止时会调用 [AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function)，应用可以在终止前保存状态。

## 小组件

*自 API 级别 4.0.0*

在 API 级别 4.0 及以下的设备上，存在小组件应用类型。小组件是在表盘可访问的轮播界面中运行的应用程序。在 API 级别高于 4.0.0 的设备上，小组件改为从应用启动器启动，应用程序还可以提供速览。用户进行活动时也可以访问速览列表，并在记录活动期间从列表启动应用程序。

不过，如果您正在构建设备应用，为应用创建速览后，用户就多了一种启动应用的方式。

## 系统

[Toybox.System](/connect-iq/api-docs/Toybox/System/) 模块提供对设备状态、设置和元数据的访问。您可以在此获取运行应用程序的设备的运行时信息，并控制部分执行行为。

| API |描述| API 级别 |
| --- | --- | --- |
| [System.error()](/connect-iq/api-docs/Toybox/System/#error-instance_function) | 将错误写入控制台并退出系统 | 1.0.0 |
| [System.exit()](/connect-iq/api-docs/Toybox/System/#exit-instance_function) | 结束当前应用的执行 | 1.0.0 |
| [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) | 退出当前应用并启动另一个应用 | 2.2.0 |
| [System.getClockTime()](/connect-iq/api-docs/Toybox/System/#getClockTime-instance_function) | 获取当前时钟时间 | 1.0.0 |
| [System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function) | 获取设备的用户设置和设备元数据 | 1.0.0 |
| [System.getSystemStats()](/connect-iq/api-docs/Toybox/System/#getSystemStats-instance_function) | 获取当前运行时的统计信息 | 1.0.0 |
| [System.isAppInstalled()](/connect-iq/api-docs/Toybox/System/#isAppInstalled-instance_function) | 查询系统是否安装了另一个应用 | 3.2.0 |
| [System.print()](/connect-iq/api-docs/Toybox/System/#print-instance_function)、[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function) | 将消息写入控制台或应用日志 | 1.0.0 |

Connect IQ 最“热门”的 API 是 [System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function)。这个 API 几乎无所不知：用户闹钟、设备设置、连接状态、单位、Connect IQ API 级别，以及猴子……
