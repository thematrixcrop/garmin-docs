---
title: "Background Services"
---
# 后台服务

*自 API 级别 2.3.0*

应用程序可以注册背景服务. 服务可以在各种事件发生时注册运行. 这些事件包括当用户达到目标目标时,当睡眠和觉醒时间发生时,当达到步骤门时,或在规定的时间.背景流程可用的模块与其母应用程序的不同.

服务可在任何时候终止前景应用程序的自由内存. 如果在开放后30秒内服务不出正确,则也将自动终止.

## 报名活动

在您的应用程序运行时,您可以通过使用[Toybox.Background](/connect-iq/api-docs/Toybox/Background/)模块的呼叫进行注册,以参加活动.

| Event |描述|登记| API 级别 |
| --- | --- | --- | --- |
| 活动已完成 |当用户完成活动时,唤醒您的背景服务| [Background.registerForActivityCompletedEvent()](/connect-iq/api-docs/Toybox/Background/#registerForActivityCompletedEvent-instance_function) | 3.1.0 |
| Goal |当用户达到其活动目标之一时,唤醒您的背景服务| [Background.registerForGoalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForGoalEvent-instance_function) | 2.3.0 |
| OAUTH 响应 |当用户完成OAUTH流时,唤醒您的背景服务| [Background.registerForOAuthResponseEvent()](/connect-iq/api-docs/Toybox/Background/#registerForOAuthResponseEvent-instance_function) | 2.3.0 |
| 手机应用消息 |当应用程序从移动 SDK 收到消息时,会唤醒您的背景服务| [Background.registerForPhoneAppMessageEvent()](/connect-iq/api-docs/Toybox/Background/#registerForPhoneAppMessageEvent-instance_function) | 3.2.0 |
| Sleep |唤醒您的背景服务,用户设置的时间作为他们的睡眠时间| [Background.registerForSleepEvent()](/connect-iq/api-docs/Toybox/Background/#registerForSleepEvent-instance_function) | 2.3.0 |
| Steps |唤醒您的背景服务每1000个用户所做的步骤| [Background.registerForStepsEvent()](/connect-iq/api-docs/Toybox/Background/#registerForStepsEvent-instance_function) | 2.3.0 |
| Temporal |允许您的服务在特定时间或在特定的间隔中重复被唤醒 (最多每五分钟).| [Background.registerForTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) | 2.3.0 |

##做一个`ServiceDelegate`

当启动后台服务时,调用[AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function).这种方法返回[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)并调用相应于触发事件的方法.一旦后台服务完成了任何必要任务,它应该使用[Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)方法退出.这种方法需要一个包含数据的参数,以将数据发送到主过程中.使用 null来提供没有数据.

### 应用程序作用域

背景服务可以随时运行,包括用户在活动中.为了实现这一目标,背景服务可用的内存库比应用程序可用的小得多.在许多情况下,应用程序的可执行代码将比可用的内存库大.

连接 IQ 编译器允许您选择使用`:background`注释在背景中运行所需的代码.只有装饰`:background`注释的模块,类,函数和成员变量将被编译到您的背景服务中.这意味着您必须用注释装饰所有相关代码 (包括您的应用程序类).

```typescript
import Toybox.Application;
import Toybox.Background;
import Toybox.System;
import Toybox.Time;

// 由于应用程序对象的构造函数引用了此内容，
// 因此必须将其标记为后台运行。
(:background)
var globalMember;

// 应用程序对象必须标记为后台运行，
// 这样才能引用服务委托
(:background)
class MyApp extends Application.AppBase {

    // 构造函数。请记住，此函数引用的所有内容
    // 都必须标记为后台运行
    public function initialize() {
        // 注册为每五分钟运行一次
        if(Background.getTemporalEventRegisteredTime() != null) {
            Background.registerForTemporalEvent(new Time.Duration(5 * 60))
        }
        // 初始化全局成员
        $.globalMember = true;
    }

    public function getServiceDelegate() as [System.ServiceDelegate] {
        return [new MyServiceDelegate()];
    }

}

// 服务委托必须标记为后台运行，
// 这样才能处理服务回调
(:background)
class MyServiceDelegate extends System.ServiceDelegate {

    public function onTemporalEvent() as Void {
        // 在此执行任务
    }

}
```

如果类型检查级别为 `informative` 或更高，编译器会检测后台服务或其引用的对象是否尝试引用未标记为后台对象的内容。更多信息请参阅 [Monkey Types](/connect-iq/monkey-c/monkey-types/#monkey-types)。

资源编译器也可以控制资源的作用域级别。更多信息请参阅[资源](/connect-iq/core-topics/resources/#resource-scopes)一节。

## 模拟后台服务

在Connect IQ模拟器中,在模拟菜单中添加了一个选项,允许手动启动后台服务.手动启动服务时,将加载最近运行的应用程序的后台服务,无论应用程序是否已注册该事件,[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)中的相应调用将启动.
