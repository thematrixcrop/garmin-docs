---
title: "Application and System Modules"
---
# 应用和系统模块

Every application has to have a class that extends [Application.AppBase](/connect-iq/api-docs/Toybox/Application/AppBase/). 这个对象称为应用对象，是处理应用生命周期事件的处理器。

The Application object must be specified in the application `manifest.xml`. 构建工具使用此来指示在启动时加载哪个类。 See the [Manifest and Permissions](/connect-iq/core-topics/manifest-and-permissions/#manifest-file-and-permissions) section 更多信息.

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

*Since API level 4.2.0* 有四个主要的生命周期状态：已启动、活跃、不活跃和已暂停。

![](/connect-iq/resources/programmers-guide/app-lifecycle.png)

### 启动

应用加载后，应用对象将被实例化。 From that point forward it will be available throughout the application by calling [Application.getApp()](/connect-iq/api-docs/Toybox/Application/#getApp-instance_function).

在您的应用对象即时化后,将调用[AppBase.onStart()](/connect-iq/api-docs/Toybox/Application/AppBase/#onStart-instance_function)函数.这是您的机会启动应用程序并恢复状态.

If your application is launched via an [System.Intent](/connect-iq/api-docs/Toybox/System/Intent/), the state parameter will contain arguments passed via the intent. Do not attempt to push a [WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/) instance at this time. See the [Intents](/connect-iq/core-topics/intents/#intents) section 更多信息.

应用加载后，系统将请求应用的初始视图。 Depending on what functionality your application implements, you may have to implement several of the following handlers:

-[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function): 应用程序启动的主要方法. 返回您的手表面,数据场,小工具或设备应用程序的基本视图.

-   [AppBase.getGlanceView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGlanceView-instance_function): If your are implementing a widget that has a glance, this 将在...时调用 the user goes to browse your glance in the glance list. See the [Glances](/connect-iq/core-topics/glances/#glances) section 更多信息.

-   [AppBase.getGoalView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getGoalView-instance_function): If your watch face is overriding the goal views, 这为您提供了 an opportunity to present your goal view.

-   : If you are implementing an audio content provider, this method is called when 您需要 present playback options to the user.


所有这些函数都返回一个阵列:第一个项目是[WatchUi.View](/connect-iq/api-docs/Toybox/WatchUi/View/)实例,第二个是[WatchUi.InputDelegate](/connect-iq/api-docs/Toybox/WatchUi/InputDelegate/)实例,处理视图的输入.

从速览列表和活动菜单启动的应用行为不同。 If an app is launched from the glance list, a timeout will be applied to the app. If the user does not exit the app within a given time frame, 系统将 terminate the app and return to the home screen. If an app is launched from the activity menu, however, it will not time out, and the user must explicitly exit your application.

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

某些设备具有任务切换器，可以方便地在活动和设备上的应用之间切换。 This can switch your app from *active* to *inactive*. To take full advantage of the task switcher, 您需要 utilize the full app lifecycle.

| State |描述|
| --- | --- |
| Active |当您的应用程序从不活跃状态转向活跃状态时,[AppBase.onActive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onActive-instance_function)被调用.活跃应用程序的访问由应用程序类型定义.从不活跃到活跃时,将恢复访问传感器,ANT/BLE.|
| Inactive | [AppBase.onInactive()](/connect-iq/api-docs/Toybox/Application/AppBase/#onInactive-instance_function) 在从...转换时调用 the active to inactive state. |

根据应用运行的状态，您将拥有不同级别的系统资源访问权限：

| State | Active | Inactive |
| --- | --- | --- |
| Activity |您可以在获取许可的情况下启动和停止活动记录.|如果应用程序正在记录活动,则将继续记录.如果应用程序没有记录,则不允许启动或停止活动记录.|
| GPS |如果另一个应用程序记录活动,则可能会拒绝GPS访问.|如果应用程序正在记录活动和接收位置事件,它将继续接收不活跃状态的事件.如果应用程序没有记录活动,它将被阻止修改GPS状态.|
| ANT |如果另一个应用程序正在记录活动,则可能会拒绝ANT访问.|如果应用程序正在记录活动,则允许访问ANT. 如果应用程序没有记录活动,则将关闭所有开放道,并在从不活跃到活跃的转变时重新打开.|
| 高频传感器（加速度计、磁力计、陀螺仪） |如果应用程序正在记录活动,则允许访问.如果应用程序没有记录活动,则访问可能会以非致命的方式失败.|如果应用程序正在记录活动,则允许访问.否则,测量可以在最高10hz中获取.|
| Sensors |如果应用程序正在记录活动,则允许访问.如果应用程序没有记录活动,则访问可能会以非致命的方式失败.|如果应用程序正在记录活动,则允许访问.否则,传感器访问将会受到限制.|
| Attention |允许访问.|访问被拒绝.|

可能存在用户启动的应用超过系统资源支持的情况。 If your app is not active but is still running, the system may terminate your app to free up resources.

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

在 API 级别 4.0 及以下的设备上，存在小组件应用类型。 小部件是从表盘可访问的轮播中运行的应用。 On devices after API 4.0.0, widgets are now from the app launcher, and apps can have glances. The glance list is accessible to the user while they are in an activity, and your apps can be launched from the glance list while the user is recording an activity.

如果您正在构建应用程序,为您的应用程序创建一个视角,则用户可以启动您的应用程序的两种独特方式.

## 系统

The [Toybox.System](/connect-iq/api-docs/Toybox/System/) 模块提供 access to the device state, settings, and metadata. Here you can get runtime information about the device that is running your app, and exercise some execution control.

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
