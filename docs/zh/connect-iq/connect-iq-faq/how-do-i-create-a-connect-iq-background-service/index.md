---
title: "How do I create a Connect IQ Background Service?"
---
# 如何创建 Connect IQ 后台服务？

*这篇文章是由AZ州尼克斯的Connect IQ开发人员Jim Miller撰写的.*

在 API 级别 2.3.0 的新功能之一是 *背景服务*,或者连接 IQ 应用程序可以运行服务,即使主应用程序没有运行.背景服务与主程序有不同的功能;一个表面或数据场面不能自行进行通信,但背景过程可以!目前最常见的例子是一个表面显示来自互联网的天气信息.当背景下发生什么事情时,该过程可以选择地提示用户如果他们想启动主应用程序,或者背景只能收集下次主应用程序运行的数据.

我会谈到利用时间事件的背景服务.简单来说,这是一个以时间驱动的过程:它运行每"x"分钟,或者可以设置在特定时间.时间事件可以每五分钟开启,每次运行都会运行最多30秒.这里将重点放在背景过程上,这些过程不会试图启动主应用程序,但只会收集主要过程的数据.

我在第一篇文章中创建了一个非常基本的手表面,在项目[developer forum](https://forums.garmin.com/developer/connect-iq/f/discussion/5287/very-simple-sample-of-a-watch-face-with-a-background-process)和[included a .zip](https://forums.garmin.com/cfs-file/__key/communityserver-discussions-components-files/12/7750.vsbgwf.zip)上有一个背景服务,这样你就可以看到代码,然后自己尝试它.手表面本身显示时间,最后的数据从背景服务中看到 (加上计数器等).而背景只能返回一个带有"hh:mm"时间标签的字符串.虽然它不有用,但它确实显示了与时间事件背景的基础.在这种情况下,[View](/connect-iq/api-docs/Toybox/WatchUi/View/)类中真的没有很多东西,但要看的是App类和背景过程中的文件 -[ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/).

在应用程序的背景下,有几个东西会发挥作用. 在样本项目中,你会看到这些部分如何合并.

##背景注释

为了存储内存,每次背景服务运行时只加载必要的代码.背景服务有32 KB的堆积,所以事情可以紧张! (:背景) 注释用于表示背景服务运行时需要有哪些类,模块和变量.主[App](/connect-iq/api-docs/Toybox/Application/AppBase/)类默认加载,但您希望在[ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)和它可能使用或引用的任何东西上使用注释.

```typescript
(:background)
class BgbgServiceDelegate extends Toybox.System.ServiceDelegate {
```

使用它并不意味着它只在背景服务中;类,模块和变量将在主进程和背景进程中都可用.

## 服务委托

后台服务可以由不同类型的系统事件触发:步骤目标实现,睡眠/觉醒时间和时间事件,以下讨论.[System.ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)允许您定义当这些事件发生时您的应用程序应该执行什么.[AppBase.getServiceDelegate()](/connect-iq/api-docs/Toybox/Application/AppBase/#getServiceDelegate-instance_function)是您的代码中的服务代表如何找到.使用[Toybox.Background](/connect-iq/api-docs/Toybox/Background/)模块中的方法来注册您的服务,以启动给定的触发器.

## 时间事件

在示例代码中,我在检查后,以确保应用程序在支持背景事件的设备上运行后,作为[AppBase.getInitialView()](/connect-iq/api-docs/Toybox/Application/AppBase/#getInitialView-instance_function)的一部分.

```typescript
        //register for temporal events if they are supported
        if(Toybox.System has :ServiceDelegate) {
            canDoBG=true;
            Background.registerForTemporalEvent(new Time.Duration(5 * 60));
        } else {
            Sys.println("****background not available on this device****");
        }
```

随意,[Background.deleteTemporalEvent()](/connect-iq/api-docs/Toybox/Background/#deleteTemporalEvent-instance_function)可以关闭后台进程.通过这些调用组合,您可以控制时间事件运行时间.例如,您可以做一些事情,如不启动时间事件,直到连接到手机,删除时间事件,当您的应用程序不再需要它,等等. ** 注:** 通常,当您启动时间事件过程时,即使家长应用程序不运行,它也会运行.

在某些时间事件中,你可能想将错误状态转移到主进程而不是数据.一个很好的例子就是一个进行通信的背景服务.在许多情况下,你会将收到的数据转移回来 (我通常只会从回调中转移词典),但在错误的情况下,我只会转移一个代表错误的数字.然后在[AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)中,我使用Number的实例来检查我是否收到数据或错误,并根据需要处理错误或数据.以下是一个简单的例子:

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

通过[Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)在[ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)中将数据从背景服务传输到主过程中

```typescript
    function onTemporalEvent() {
        var now=Sys.getClockTime();
        var ts=now.hour+":"+now.min.format("d");
        Sys.println("bg exit: "+ts);
        //just return the timestamp
        Background.exit(ts);
    }
```

[AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)是主要过程从[Background.exit()](/connect-iq/api-docs/Toybox/Background/#exit-instance_function)返回的服务中获取最新数据的方式.在主要过程中,当它首次启动时,我会查看数据是否在对象存储中,如果是这样,那么你会显示它为"最后一个已知值".如果你不用手表面做这样的事情,每次离开手表面并回来,直到背景再次运行之前,就不会有任何数据.

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

您不能在背景过程中使用[AppBase.setProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#setProperty-instance_function)来传递对象存储或设置中的数据;如果您尝试,则会抛出例外.您也不能在主进程和背景之间传递信息,使用全球变量.这里"进程"这个词很重要:全球变量是每个进程的,因此相同的全球变量仅为该进程的全球.在主进程和背景过程中都存在一个全球定义的变量,但每个都保持了自己的副本,它们从未同步.这就是说,将数据从主应用程序传输到背景服务的唯一方法是作为一个属性.您的[ServiceDelegate](/connect-iq/api-docs/Toybox/System/ServiceDelegate/)可以用[AppBase.getProperty()](/connect-iq/api-docs/Toybox/Application/AppBase/#getProperty-instance_function)获取它.它可以是对象存储或从设置中的某种东西.请确保处理背景可能没有它需要的数据的情况,因为这里可能还没有有效的值.

后台可以在主进程在[AppBase.onBackgroundData()](/connect-iq/api-docs/Toybox/Application/AppBase/#onBackgroundData-instance_function)中看到之前运行一次以上. 主进程只能看到最后一个,而不是全部,但在后台过程中,你可以使用[Background.getBackgroundData()](/connect-iq/api-docs/Toybox/Background/#getBackgroundData-instance_function)来获取目前为主进程排队的内容,但尚未交付.你可以将其与后台进程的内容结合起来,然后返回所有内容.

## 其他要点

- **WatchFaces** - 时钟面对比其他应用程序的时间有点不同,如果/当背景服务运行时,这是设计的.时钟面对的背景服务只会运行,如果该时钟面对是"活跃"时钟面 (目前选择使用的).想象一下你安装了两个时钟面对的情况,两者都从同一来源中获取天气数据,每天的请求限制.不活跃的时钟面对的背景服务运行没有理由,因为它只会消耗每天的请求量.

- ** 响应大小来做WebRequest() 调用** - 如果您在背景过程中进行[Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)调用,请记住您回复的响应大小. 背景过程的内存有限. 当收到响应时,必须有足够的内存,以包含响应和建立传递到您的回调的词典.

- ** 关于模拟器的注释:** - - 您可以在模拟器中测试背景.在时间事件的情况下,它们会按计划发生,但在"模拟"菜单下,您可以启动背景进程.


有一个已知问题在背景应用程序的模拟器:模拟器会运行你在上面测试的应用程序的背景服务,即使不是测试的"活跃"应用程序.所以如果你正在测试"app 一个"然后切换到"app b","app 一个"的背景将运行,以及"app b"的背景.即使你的当前目标没有背景服务,模拟器也可能会尝试启动它.Connect IQ团队意识到这个问题,并将在即将发布的版本中解决它

您可以看到,背景服务是Connect IQ玩具盒的强大新增.它们允许您的应用程序定期在互联网进行调查,以获取信息,包括表格面孔和数据字段.

"2015年初,我有一个先驱15个,喜欢GPS和步骤跟踪.然后宣布了原始的vívoactive,我预订了它,并下载了CIQ 1.0.0 SDK同一个星期!"你可以看到他的*[*apps on the app store*](https://apps.garmin.com/en-US/developer/b73df9e6-4021-4059-b2e8-f9cfa04947c3/apps)*,并找到他在*[*Instagram*](https://www.instagram.com/jim.m.58/)*,他的*[*Connect IQ Facebook Page*](https://www.facebook.com/connectiqaz)*,或在*[*Connect IQ forums*](https://forums.garmin.com/members/jim_5f00_m_5f00_58)*.*
