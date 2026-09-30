---
title: "Application and System Modules"
---
# 应用和系统模块

每个应用程序都必须包含一个继承自 [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/) 的类。这个对象称为应用对象，负责处理应用程序生命周期事件。

必须在应用程序的 `manifest.xml` 中指定 Application 对象，以告知构建工具启动时要加载哪个类。更多信息请参阅[清单和权限](/connect-iq/core-topics/manifest-and-permissions/#manifest-file-and-permissions)一节。

## 安装和卸载

*自 API 级别 3.0.0*

您的[Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/)有两个处理器,在安装和更新过程中被调用:

| API |描述| API 级别 |
| --- | --- | --- |
| [AppBase.onAppInstall()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppInstall-instance_function) |在安装应用程序时在背景中触发的回调方法| 3.0.0 |
| [AppBase.onAppUpdate()](/connect-iq/api-docs/Toybox/Application/AppBase/#onAppUpdate-instance_function) |当应用程序更新时在背景中启动的回调方法| 3.0.0 |

这两项都要求您的应用程序具有`Background`许可. 潜在的使用情况包括在安装或启动身份验证方法时注册背景服务.

这些方法的运行不保证。不要依赖它们实现关键功能。

## 应用生命周期

*自 API 级别 4.2.0 起*，应用程序有四种主要生命周期状态：已启动、活跃、不活跃和已暂停。

![](/connect-iq/resources/programmers-guide/app-lifecycle.png)

### 启动

应用加载后，系统会实例化应用对象。此后，您可以在应用程序中的任何位置调用 [Application.getApp()](/connect-iq/api-docs/Toybox/Application/#getApp-instance_function) 获取该对象。

在您的应用对象即时化后,将调用[AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)函数.这是您的机会启动应用程序并恢复状态.

如果应用程序通过 [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/) 启动，state 参数将包含 intent 传入的参数。此时不要尝试推入 [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) 实例。更多信息请参阅 [Intents](/connect-iq/core-topics/intents/#intents) 一节。

应用加载后，系统会请求应用程序的初始视图。根据应用程序实现的功能，您可能需要实现以下若干处理器：

-[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function): 应用程序启动的主要方法. 返回您的手表面,数据场,小工具或设备应用程序的基本视图.

-   [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function)：如果您正在实现带有速览界面的小组件，当用户在速览列表中查看该速览时，系统会调用此方法。更多信息请参阅[速览](/connect-iq/core-topics/glances/#glances)一节。

-   [AppBase.getGoalView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGoalView-instance_function)：如果您的表盘要覆盖目标视图，此方法可用于呈现目标视图。

-   如果您正在实现音频内容提供者，当需要向用户显示播放选项时，系统会调用相应方法。


所有这些函数都返回一个阵列:第一个项目是[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)实例,第二个是[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)实例,处理视图的输入.

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

某些设备具有任务切换器，便于在设备上的活动和应用程序之间切换。这可能会使您的应用程序从*活跃*状态切换到*不活跃*状态。若要充分利用任务切换器，您需要使用完整的应用程序生命周期。

| 状态 | 描述 |
| --- | --- |
| Active |当您的应用程序从不活跃状态转向活跃状态时,[AppBase.onActive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onActive-instance_function)被调用.活跃应用程序的访问由应用程序类型定义.从不活跃到活跃时,将恢复访问传感器,ANT/BLE.|
| 不活跃 | 从活跃状态转换为不活跃状态时调用 [AppBase.onInactive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onInactive-instance_function)。 |

根据应用运行的状态，您将拥有不同级别的系统资源访问权限：

| 状态 | 活跃 | 不活跃 |
| --- | --- | --- |
| Activity |您可以在获取许可的情况下启动和停止活动记录.|如果应用程序正在记录活动,则将继续记录.如果应用程序没有记录,则不允许启动或停止活动记录.|
| GPS |如果另一个应用程序记录活动,则可能会拒绝GPS访问.|如果应用程序正在记录活动和接收位置事件,它将继续接收不活跃状态的事件.如果应用程序没有记录活动,它将被阻止修改GPS状态.|
| ANT |如果另一个应用程序正在记录活动,则可能会拒绝ANT访问.|如果应用程序正在记录活动,则允许访问ANT. 如果应用程序没有记录活动,则将关闭所有开放道,并在从不活跃到活跃的转变时重新打开.|
| 高频传感器（加速度计、磁力计、陀螺仪） |如果应用程序正在记录活动,则允许访问.如果应用程序没有记录活动,则访问可能会以非致命的方式失败.|如果应用程序正在记录活动,则允许访问.否则,测量可以在最高10hz中获取.|
| Sensors |如果应用程序正在记录活动,则允许访问.如果应用程序没有记录活动,则访问可能会以非致命的方式失败.|如果应用程序正在记录活动,则允许访问.否则,传感器访问将会受到限制.|
| Attention |允许访问.|访问被拒绝.|

用户可能会启动超出系统资源承载能力的应用程序。如果您的应用程序仍在运行但处于非活跃状态，系统可能会终止它以释放资源。

当这种情况发生时,您的[AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function)将被调用一个:暂停选项,以通知您即将终止.您可以使用此调用来维持您的状态,直到您恢复.当用户返回您的应用程序时,您将被调用一个`:resume`选项在[AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)上.

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

如果您不做任何事情,用户将回到您的应用程序,好像它刚刚启动.

### 应用终止

当您的应用程序终止时,将调用[AppBase.onStop()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStop-instance_function)函数. 这使您的应用程序有机会在终止之前保存状态.

## 小组件

*自 API 级别 4.0.0*

在 API 级别 4.0 及以下的设备上，存在小组件应用类型。小组件是在表盘可访问的轮播界面中运行的应用程序。在 API 级别高于 4.0.0 的设备上，小组件改为从应用启动器启动，应用程序还可以提供速览。用户进行活动时也可以访问速览列表，并在记录活动期间从列表启动应用程序。

如果您正在构建应用程序,为您的应用程序创建一个视角,则用户可以启动您的应用程序的两种独特方式.

## 系统

[Toybox.System](/connect-iq/api-docs/Toybox/System/) 模块提供对设备状态、设置和元数据的访问。您可以在此获取运行应用程序的设备的运行时信息，并控制部分执行行为。

| API |描述| API 级别 |
| --- | --- | --- |
| [System.error()](/connect-iq/api-docs/Toybox/System/#error-instance_function) |写错误到控制台,然后退出系统| 1.0.0 |
| [System.exit()](/connect-iq/api-docs/Toybox/System/#exit-instance_function) |终止执行当前应用程序| 1.0.0 |
| [System.exitTo()](/connect-iq/api-docs/Toybox/System/#exitTo-instance_function) |退出当前的应用程序并启动新的应用程序| 2.2.0 |
| [System.getClockTime()](/connect-iq/api-docs/Toybox/System/#getClockTime-instance_function) |查看当前的时间| 1.0.0 |
| [System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function) |获取设备的用户设置以及设备的元数据| 1.0.0 |
| [System.getSystemStats()](/connect-iq/api-docs/Toybox/System/#getSystemStats-instance_function) |获取当前运行时间统计数据| 1.0.0 |
| [System.isAppInstalled()](/connect-iq/api-docs/Toybox/System/#isAppInstalled-instance_function) |查询系统是否安装了另一个应用| 3.2.0 |
| [System.print()](/connect-iq/api-docs/Toybox/System/#print-instance_function)、[System.println()](/connect-iq/api-docs/Toybox/System/#println-instance_function) |写一个信息到控制台或应用日志| 1.0.0 |

连接IQ最热门的API是[System.getDeviceSettings()](/connect-iq/api-docs/Toybox/System/#getDeviceSettings-instance_function). 这个API有一切:用户警报,设备设置,连接状态,单元,连接IQAPI水平,子...
