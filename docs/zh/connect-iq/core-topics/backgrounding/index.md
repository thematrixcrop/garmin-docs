---
title: "Background Services"
---
<a id="background-services"></a>
# 后台服务

*自 API 级别 2.3.0 起支持*

应用可以注册后台服务，在各种事件发生时运行。例如，用户达到活动目标、进入或结束睡眠时间、步数达到阈值，或到达预定时间时，都可以触发后台服务。后台进程可用的模块与其所属的前台应用可能不同。

当需要为前台应用释放内存时，系统可能随时终止后台服务。如果后台服务启动后未能在 30 秒内正常退出，系统也会自动终止它。

## 注册事件

应用运行时，可以通过 [Toybox.Background](/connect-iq/api-docs/Toybox/Background/) 模块中的方法注册要订阅的事件。

| 事件 | 说明 | 注册方法 | API 级别 |
| --- | --- | --- | --- |
| 活动完成 | 用户完成活动时唤醒后台服务 | [Background.registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) | 3.1.0 |
| 目标达成 | 用户达到某个活动目标时唤醒后台服务 | [Background.registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) | 2.3.0 |
| OAuth 响应 | 用户完成 OAuth 流程时唤醒后台服务 | [Background.registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) | 2.3.0 |
| 手机应用消息 | 应用从 Mobile SDK 收到消息时唤醒后台服务 | [Background.registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) | 3.2.0 |
| 睡眠 | 到达用户设置的睡眠时间时唤醒后台服务 | [Background.registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) | 2.3.0 |
| 步数 | 用户每走 1,000 步时唤醒后台服务 | [Background.registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) | 2.3.0 |
| 定时 | 允许服务在指定时间或固定间隔重复唤醒，最短间隔为 5 分钟 | [Background.registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) | 2.3.0 |

## 创建 `ServiceDelegate`

启动后台服务时，系统会调用 [AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function)。此方法返回一个 [System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)，系统随后会调用与触发事件对应的方法。后台服务完成必要任务后，应使用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function) 退出。该方法接收一个要发送给主进程的数据参数；如果没有数据，请传入 `null`。

### 应用作用域

后台服务可以随时运行，包括用户正在进行活动时。为此，后台服务可用的内存池远小于应用可用的内存池，很多时候应用的可执行代码会大于后台服务可用的内存池。

Connect IQ 编译器允许使用 `:background` 注解选择后台运行所需的代码。只有标记了 `:background` 注解的模块、类、函数和成员变量才会编译到后台服务中。因此，所有相关代码（包括 Application 类）都必须添加该注解。

```typescript
import Toybox.Application;
import Toybox.Background;
import Toybox.System;
import Toybox.Time;

// Because this is referenced in the application object
// constructor, it must be marked as background.
(:background)
var globalMember;

// Your application object has to be marked as background
// so that the service delegate can be referenced
(:background)
class MyApp extends Application.AppBase {

    // Constructor. Remember everything referenced in this function
    // must be marked as background
    public function initialize() {
        // Register to run every five minutes
        if(Background.getTemporalEventRegisteredTime() != null) {
            Background.registerForTemporalEvent(new Time.Duration(5 * 60))
        }
        // Initialize a global member
        $.globalMember = true;
    }

    public function getServiceDelegate() as [System.ServiceDelegate] {
        return [new MyServiceDelegate()];
    }

}

// Your service delegate has to be marked as background
// so it can handle your service callbacks
(:background)
class MyServiceDelegate extends System.ServiceDelegate {

    public function onTemporalEvent() as Void {
        // Do fun stuff here
    }

}
```

如果类型检查级别为 `informative` 或更高，编译器会检测后台服务及其引用的对象是否尝试引用未标记为后台代码的内容。更多信息请参阅 [Monkey Types](/connect-iq/monkey-c/monkey-types/#monkey-types)。

资源编译器也可以控制资源的作用域级别。更多信息请参阅[资源](/connect-iq/core-topics/resources/#resource-scopes)章节。

## 模拟后台服务

在 Connect IQ Simulator 中，Simulation 菜单提供了手动触发后台服务的选项。手动触发服务时，模拟器会加载最近运行应用的后台服务，并调用 [System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 中对应的回调，无论应用是否注册了该事件。
