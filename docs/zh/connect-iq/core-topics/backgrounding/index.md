---
title: "Background Services"
---
# Background Services

*Since API level 2.3.0*

应用程序可以注册背景服务. 服务可以在各种事件发生时注册运行. 这些事件包括当用户达到目标目标时,当睡眠和觉醒时间发生时,当达到步骤门时,或在规定的时间.背景流程可用的模块与其母应用程序的不同.

服务可在任何时候终止前景应用程序的自由内存. 如果在开放后30秒内服务不出正确,则也将自动终止.

## 报名活动

在您的应用程序运行时,您可以通过使用[Toybox.Background](/connect-iq/api-docs/Toybox/Background/)模块的呼叫进行注册,以参加活动.

| Event |描述|登记| API Level |
| --- | --- | --- | --- |
| Activity Completed |当用户完成活动时,唤醒您的背景服务| [Background.registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) | 3.1.0 |
| Goal |当用户达到其活动目标之一时,唤醒您的背景服务| [Background.registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) | 2.3.0 |
| OAUTH Response |当用户完成OAUTH流时,唤醒您的背景服务| [Background.registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) | 2.3.0 |
| Phone App Message |当应用程序从移动 SDK 收到消息时,会唤醒您的背景服务| [Background.registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) | 3.2.0 |
| Sleep |唤醒您的背景服务,用户设置的时间作为他们的睡眠时间| [Background.registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) | 2.3.0 |
| Steps |唤醒您的背景服务每1000个用户所做的步骤| [Background.registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) | 2.3.0 |
| Temporal |允许您的服务在特定时间或在特定的间隔中重复被唤醒 (最多每五分钟).| [Background.registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) | 2.3.0 |

##做一个`ServiceDelegate`

当启动后台服务时,调用[AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function).这种方法返回[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)并调用相应于触发事件的方法.一旦后台服务完成了任何必要任务,它应该使用[Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)方法退出.这种方法需要一个包含数据的参数,以将数据发送到主过程中.使用 null来提供没有数据.

### Application Scope

背景服务可以随时运行,包括用户在活动中.为了实现这一目标,背景服务可用的内存库比应用程序可用的小得多.在许多情况下,应用程序的可执行代码将比可用的内存库大.

连接 IQ 编译器允许您选择使用`:background`注释在背景中运行所需的代码.只有装饰`:background`注释的模块,类,函数和成员变量将被编译到您的背景服务中.这意味着您必须用注释装饰所有相关代码 (包括您的应用程序类).

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

If your type check level is at `informative` or above, the compiler will detect if your background service or any objects referenced is attempting to reference something not marked as background. See [Monkey Types](/connect-iq/monkey-c/monkey-types/#monkey-types) 更多信息.

The resource compiler can control the scope level of your resources as well. See the [Resources](/connect-iq/core-topics/resources/#resource-scopes) section 更多信息.

## Simulating Background Services

在Connect IQ模拟器中,在模拟菜单中添加了一个选项,允许手动启动后台服务.手动启动服务时,将加载最近运行的应用程序的后台服务,无论应用程序是否已注册该事件,[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)中的相应调用将启动.
