---
title: "如何创建 Connect IQ 后台服务？"
---
<a id="how-do-i-create-a-connect-iq-background-service"></a>
# 如何创建 Connect IQ 后台服务？

*本文由亚利桑那州 Phoenix 的 Connect IQ 开发者 Jim Miller 撰写。*

API level 2.3.0 引入的新功能之一是 *后台服务*：Connect IQ 应用可以拥有一个服务，即使主应用没有运行，该服务仍可运行。后台服务与主进程拥有不同的能力；Watch Face 或数据字段本身可能无法通信，但后台进程可以。现在最常见的例子是 Watch Face 从互联网获取天气信息并显示出来。后台发生事件时，后台进程可以提示用户是否启动主应用，也可以只收集数据，供主应用下次运行时使用。

本文介绍利用时间事件的后台服务。简单来说，这是一个由时间驱动的进程：每隔 “x” 分钟运行一次，或者设置为在指定时间运行。时间事件最多每 5 分钟触发一次，每次最多运行 30 秒。本文重点介绍不主动启动主应用、只为主进程收集数据的后台进程。

我在 [开发者论坛](https://forums.garmin.com/developer/connect-iq/f/discussion/5287/very-simple-sample-of-a-watch-face-with-a-background-process) 创建了一个非常基础的带后台服务的 Watch Face，并在首帖中[附上了项目 ZIP 文件](https://forums.garmin.com/cfs-file/__key/communityserver-discussions-components-files/12/7750.vsbgwf.zip)，方便你查看代码并亲自尝试。Watch Face 本身显示时间、后台服务最近提供的数据以及计数器等内容。后台服务只返回一个带有 “hh:mm” 时间戳的字符串。虽然这个示例没有实际用途，但展示了时间事件后台处理的基本方式。在此示例中，[View](/connect-iq/api-docs/Toybox/WatchUi/View/) 类中没有太多内容，应该重点查看 App 类和后台进程文件中的 [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)。

实现带后台服务的应用时，需要考虑几个方面。示例项目展示了这些部分如何组合在一起。

## Background 注解

为了节省内存，后台服务每次运行时只会加载必要的代码。后台服务的堆大小为 32 KB，因此可用空间很紧张。`:background` 注解用于标记后台服务运行时需要使用的类、模块和变量。主 [App](/connect-iq/api-docs/Toybox/Application/AppBase/) 类默认会加载，但 [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 及其可能使用或引用的对象也需要添加该注解。

```typescript
(:background)
class BgbgServiceDelegate extends Toybox.System.ServiceDelegate {
```

使用该注解并不意味着这些类、模块和变量只能在后台服务中使用；它们在主进程和后台进程中都可用。

## 服务委托

后台服务可以由多种系统事件触发：步数目标达成、睡眠或唤醒时间，以及下面将介绍的时间事件。[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 用于定义这些事件发生时应用应执行的操作。[AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function) 用于获取代码中的 service delegate。使用 [Toybox.Background](/connect-iq/api-docs/Toybox/Background/) 模块中的方法，可以注册服务并指定触发条件。

## 时间事件

[Background.registerForTemporalEvents()](/connect-iq/api-docs/Toybox/Background/#registerForTemporalEvent-instance_function) 用于设置后台时间事件的运行频率。在示例代码中，我在 [AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function) 中先检查设备是否支持后台服务，然后注册时间事件。

```typescript
        //register for temporal events if they are supported
        if(Toybox.System has :ServiceDelegate) {
            canDoBG=true;
            Background.registerForTemporalEvent(new Time.Duration(5 * 60));
        } else {
            Sys.println("****background not available on this device****");
        }
```

[Background.deleteTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#deleteTemporalEvent-instance_function) 可以按需关闭后台进程。组合使用这些方法，就可以控制时间事件的运行时机。例如，可以等手机连接后再启动时间事件，也可以在应用不再需要时删除时间事件。**注意：**通常，时间事件进程启动后，即使父应用没有运行，它仍会继续运行。对于 Watch Face，只有当前选中的 Watch Face 的时间事件会运行。

对于某些时间事件，可能需要向主进程传回错误状态，而不是数据。例如，执行通信的后台服务通常会传回收到的数据（我通常直接传回回调中的字典）；发生错误时，则传回表示错误的 Number。然后在 [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) 中使用 `instanceof Number` 判断收到的是数据还是错误，并按需处理。下面是一个简单示例：

```typescript
function onBackgroundData(data) {
    if(data instanceof Number) {
        //indicates there was an error, and "data" is the error code
    } else {
        //got good "data"
    }
}
```

## 进程间通信

在 [ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 中使用 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)，可以将数据从后台服务传递给主进程：

```typescript
    function onTemporalEvent() {
        var now=Sys.getClockTime();
        var ts=now.hour+":"+now.min.format("d");
        Sys.println("bg exit: "+ts);
        //just return the timestamp
        Background.exit(ts);
    }
```

[AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) 用于让主进程获取服务通过 [Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function) 返回的最新数据。主进程首次启动时，可以检查 Object Store 中是否已有数据；如果有，就将其显示为“上次已知值”。对于 Watch Face，如果不这样处理，用户每次离开再返回 Watch Face 时，都要等后台再次运行后才会有数据。

```typescript
    function onBackgroundData(data) {
        $.counter++;
        var now=Sys.getClockTime();
        var ts=now.hour+":"+now.min.format("d");
        Sys.println("onBackgroundData="+data+" "+counter+" at "+ts);
        bgdata=data;
        App.getApp().setProperty(OSDATA,bgdata);
        Ui.requestUpdate();
}
```

后台进程不能使用 [AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function) 将数据写入 Object Store 或 Settings；尝试这样做会抛出异常。主进程和后台进程之间也不能通过全局变量传递信息。“进程”这个词很重要：全局变量是进程级别的，同一个全局变量只对当前进程全局可见。全局定义的变量会同时存在于主进程和后台进程中，但两个进程各自维护一份副本，彼此不会同步。也就是说，将数据从主应用传给后台服务的唯一方式是使用 property。[ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/) 可以通过 [AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function) 读取这个 property，它可以来自 Object Store 或 Settings。请处理后台服务尚未获得所需数据的情况，因为某些值可能还没有有效内容。

在主进程通过 [AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function) 看到数据之前，后台服务可能已经运行多次。主进程只能看到最后一次数据，而不是所有数据。不过，后台进程可以使用 [Background.getBackgroundData()](/connect-iq/api-docs/Toybox/Background/#getBackgroundData-instance_function) 获取当前已为主进程排队但尚未交付的数据，再将其与本次后台运行产生的新数据合并后全部返回。

## 其他注意事项

-   **Watch Face**：Watch Face 的后台服务是否运行与其他应用略有不同，这是有意设计的。只有当前处于活动状态（即用户当前选中的）的 Watch Face，其后台服务才会运行。例如，设备上安装了两个都从同一来源获取天气数据的 Watch Face，而服务每天的请求次数有限；非活动 Watch Face 的后台服务没有必要运行，因为它只会消耗每日请求配额。

-   **`makeWebRequest()` 的响应大小**：如果后台进程调用 [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)，请注意返回响应的大小。后台进程的内存有限。收到响应时，内存必须同时容纳响应本身以及传递给回调的字典。

-   **Simulator 注意事项**：可以在 Simulator 中测试后台服务。对于时间事件，它们会按计划发生；也可以在 *Simulation* 菜单中手动触发后台进程。


Simulator 对后台应用存在一个已知问题：即使应用不是当前正在测试的“活动”应用，Simulator 也会运行你之前测试过的应用的后台服务。例如，测试 “app a” 后切换到 “app b”，app a 和 app b 的后台服务都会运行。即使当前目标没有后台服务，Simulator 也可能尝试启动它。Connect IQ 团队已知晓此问题，并将在后续版本中修复。

后台服务是 Connect IQ 工具箱中的强大功能，可以让应用定期从互联网获取信息，包括 Watch Face 和数据字段的信息。你可以利用它们实现哪些功能？

**关于作者**：*Jim Miller 是一位在亚利桑那州工作的 Connect IQ 开发者。他写道：“2015 年初，我拥有一块 Forerunner 15，很喜欢它的 GPS 和步数跟踪功能。后来 Garmin 发布了第一代 vívoactive，我预订了一块，并在同一周下载了 CIQ 1.0.0 SDK！”你可以查看他的* [*应用商店应用*](https://apps.garmin.com/en-US/developer/b73df9e6-4021-4059-b2e8-f9cfa04947c3/apps)*、关注他的* [*Instagram*](https://www.instagram.com/jim.m.58/)*、访问他的* [*Connect IQ Facebook 页面*](https://www.facebook.com/connectiqaz)*，或在* [*Connect IQ 论坛*](https://forums.garmin.com/members/jim_5f00_m_5f00_58)*找到他。*
