---
title: "Mobile SDK for iOS"
---
# iOS 移动 SDK

连接IQ移动SDK允许创建与 Garmin可穿戴设备运行的 Monkey C应用程序互动的 iOS 应用程序.这允许通过从可穿戴设备中获取远程数据或将资源密集型任务从 iOS 设备中建立功能丰富的用户体验.本文档将引导您在 iOS 项目中添加移动SDK,以及介绍 SDK s API 和如何与您的 Monkey C 应用程序进行通信.

## 配置一个项目使用移动SDK

#### 加入项目框架

移动 SDK for iOS 以 iOS 框架包形式分发，可在 [Garmin Connect IQ Mobile SDK GitHub 仓库](https://github.com/garmin/connectiq-companion-app-sdk-ios)中找到。

![将框架添加到 iOS 项目](/connect-iq/resources/programmers-guide/ios-image1.png)

在搜索框中输入"https://github.com/garmin/connectiq-companion-app-sdk-ios"![](/connect-iq/resources/programmers-guide/ios-image2.png)

##### 嵌入ConnectIQ框架作为二进制

为了允许一个项目使用移动 SDK 构建,将框架嵌入为每个项目的目标的二进制,通过对每个目标的框点击并点击`Add Package`.

![将框架嵌入为二进制文件](/connect-iq/resources/programmers-guide/ios-image3.png)

#### 添加必需的链接器标志

移动SDK用于iOS内部使用类别方法.在使用类别方法的库中,必须指定一个额外的旗,以允许库正确链接.为了这样做,将`–ObjC`旗添加到`Target > Build Settings > Linking > Other Linker Flags`设置中.

![为目标设置链接器标志](/connect-iq/resources/programmers-guide/ios-image4.png)

#####注册一个URL方案

与 Android 移动 SDK 不同，使用 iOS 移动 SDK 创建的应用程序是独立应用，不直接依赖 Garmin Connect Mobile（GCM）与可穿戴设备通信。不过，应用程序仍需要 GCM 首次发现可用于通信的 Connect IQ 兼容设备，或在可穿戴设备上安装 Monkey C 应用程序。配套应用和 GCM 通过 iOS URL 方案系统相互启动并交换信息。为此，应用程序必须注册一个 GCM 可以向其发送数据的 URL 方案。请在 `Target > Info > URL Types` 面板中添加条目，并选择一个不太可能与 iOS 设备上其他应用冲突的字符串。有关详细信息，请参阅 Apple 关于[自定义 URL 方案](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html#//apple_ref/doc/uid/TP40007072-CH6-SW1)的文档。

![为目标注册 URL 方案](/connect-iq/resources/programmers-guide/ios-image5.png)

如果您正在编译与iOS 9SDK或以上版本,则需要在您的app Infos Info.plist中添加`gcm-ciq`到[LSApplicationQueriesSchemes](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW14)的输入.这是为了确保SDK能够验证是否安装了GCM.如果这个键不在您的 Info.plist中,则需要添加.

如果您的项目尚未设置[CFBundleDisplayName](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html)在您的app Infos Info.plist中,则需要添加一个定义.

#### 设置蓝牙使用说明

从iOS 10开始,需要设置解释使用BLE外围访问的字符串.[NSBluetoothPeripheralUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW20)键必须设置在Info.plist中,以解释您的应用程序使用BLE,以便iTunes Connect接受.如果这个键不在您的Info.plist中,则需要添加.

#### 设置后台执行模式（可选）

iOS系统允许与蓝牙设备通信的应用程序在连接设备有数据要发送时在背景中执行.这对于在可穿戴设备上处理各自的子C应用程序的伴侣应用程序来说是有用的.

![可选地为目标设置后台执行模式](/connect-iq/resources/programmers-guide/ios-image6.png)

#####启动SDK

所有与移动SDK的互动都通过`ConnectIQ`类进行.该类必须在项目的URL方案和UI过失代表程序中启动应用程序启动时.通常是在应用程序的`application:didFinishLaunchingWithOptions:`方法中进行.

```objective-c
[[ConnectIQ sharedInstance] initializeWithUrlScheme:@"exapp-123456"
                                 uiOverrideDelegate:self];
```

URL方案应是#配置一个项目使用移动SDK的4步中选择的相同字符串.在调用一个要求GCM安装的`ConnectIQ`类的方法时,并且不存在于iOS系统上,默认情况下将向用户显示一个警告对话框,允许他们进入果应用商店页面以便安装GCM.通过通过一个符合`IQUIOverrideDelegate`协议的对象的实例,在此情况下可以指定自定义行为或专门的UI.

#################

如果指定了 UI 覆盖代表,并且执行了需要安装 GCM 的操作,`ConnectIQ`类将对该代表调用`needsToInstallConnectMobile`方法.应用程序应该通知用户,该操作需要GCM,并允许用户为GCM打开果应用商店页面或取消引发的操作.如果用户选择安装GCM,则可以调用`showAppStoreForConnectMobile`方法.

```objective-c
- (void)needsToInstallConnectMobile {
    // Show alert to user with choice to install GCM
    if (alert.result == YES) {
       [[ConnectIQ sharedInstance] showAppStoreForConnectMobile];
    }
}
```

注意这个例子是同步的,但如果用户显示UI,`showAppStoreForConnectMobile`方法应该被调用为用户输入的结果而不是直接在`needsToInstallConnectMobile`方法.

###与设备合作

#### 查找兼容 Connect IQ 的设备

移动SDK可以通过蓝牙直接与连接智商兼容的设备进行通信.然而,首先必须知道哪些设备可用.

```objective-c
[[ConnectIQ sharedInstance] showConnectIQDeviceSelection];
```

这种方法将GCM引入前景,允许用户选择与Connect IQ兼容的设备进行配合.如果没有安装GCM并且设置了UI过失代表,则将被调用为`needsToInstallConnectMobile`.

注意,通过启动GCM,这种方法会导致伴侣应用程序进入后台,可能导致应用程序被暂停. **在调用这种方法时,伴侣应用程序应该预计会被暂停.

一旦用户选择了与伴侣应用程序共享的配对设备,GCM将启动伴侣应用程序 (通过其注册的URL方案),将设备列表作为序列化URL查询项.伴侣应用程序应取代其应用程序代表 SD的`application:openURL:sourceApplication:annotation:`方法来听取此.伴侣应用程序可以调用`parseDeviceSelectionResponseFromURL:`方法来提取查询项到`NSArray`的`IQDevice`对象中,它可以使用移动SDK.

```objective-c
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {
    if ([url.scheme isEqualToString:ReturnURLScheme] &&
        [sourceApplication isEqualToString:IQGCMBundle]) {

        NSArray *devices = [[ConnectIQ sharedInstance]
                             parseDeviceSelectionResponseFromURL:url];
        if (devices != nil) {
            [self.devices removeAllObjects];
            for (IQDevice *device in devices) {
                self.devices[device.uuid] = device;
            }
            return YES;
        }
    }
    return NO;
}
```

请注意,在本例中,解析设备被存储在应用程序中后期使用的词典中,但不会在任何类型的持久存储中缓存.

**注:**为了避免需要过度启动GCM来发现设备, **伴侣应用应将设备缓存到永久存储中.**当GCM返回设备列表时,伴侣应用应清除他们可能知道的设备上所有以前缓存的引用. **总是只使用用户授权的最新设备列表.**

##### 听到设备事件

一旦伴手应用程序拥有GCM的一个或多个`IQDevice`实例,它可以注册到`ConnectIQ`类,在该设备的连接状态改变时通过调用`registerForDeviceEvents:delegate:`接收通知.

```objective-c
[[ConnectIQ sharedInstance] registerForDeviceEvents:device
                                           delegate:self];
```

传递的代表必须是符合`IQDeviceEventDelegate`协议的类型. 一旦注册,当设备的连接状态发生变化时,将调用delegate Zs`deviceStatusChanged:status:`方法.也可以调用`getDeviceStatus:`方法来获取设备的当前连接状态.这两种方法都将设备的状态返回为`IQDeviceStatus`值.

** 注:** 配套应用程序必须在调用在设备或应用程序上运行的方法,如`getDeviceStatus:`或`sendMessage:toApp:progress:completion:`之前注册接收设备事件.

为了停止听取设备事件,伴手应用程序可以调用`unregisterForDeviceEvents:delegate:`或`unregisterForAllDeviceEvents:`方法.

```objective-c
// Stop listening to a single device
[[ConnectIQ sharedInstance] unregisterForDeviceEvents:device
                                             delegate:self];
// ... or unregister all devices for this listener
[[ConnectIQ sharedInstance] unregisterForAllDeviceEvents:self];
```

###与应用程序合作

创建一个应用程序实例

应用程序在移动SDK中表示为`IQApp`类的实例.一个`IQApp`类的实例代表一个单个设备上的应用程序.这意味着,为了与两个不同的设备上安装的应用程序一起工作,伴手应用程序需要两个相同的`IQApp`类的实例,每个设备都需要一个应用程序ID.创建应用程序实例,使用`IQApp`类的`appWithUUID:device:`方法.

```objective-c
NSUUID *uuid = [[NSUUID alloc] initWithUUIDString:@”<YourAppID>”];
IQApp *app = [IQApp appWithUUID:uuid device:device];
```

#####请求一个应用程序的状态

一旦创建了一个`IQApp`实例,将应用程序ID链接到一个`IQDevice`实例,伴手应用程序可以通过调用`getAppStatus:completion:`方法请求该设备上的应用程序状态.

```objective-c
[[ConnectIQ sharedInstance] getAppStatus:app
                              completion:^(IQAppStatus *appStatus) {
    if (appStatus != nil && appStatus.isInstalled) {
        NSLog(@”App is installed! Version: %d”, appStatus.version);
    }
}];
```

这种方法通过蓝牙与设备通信,因此是异步的.当设备响应或请求时,完成区块将被调用.如果请求成功,完成区块将被调用为`IQAppStatus`类的实例.一个伴侣应用程序可以检查这种状态,以发现应用程序是否安装在设备上,如果是这样,该应用程序的版本是什么.伴侣应用程序可能会显示用户界面建议用户升级应用程序在设备上.如果设备目前没有连接或请求时,完成区块将被调用为`nil`状态.

#####安装,升级或管理应用程序

如果一个伴侣应用程序确定应用程序已过时或未安装,它可能允许用户通过启动GCM中Connect IQ商店安装或升级该应用程序.

```objective-c
[[ConnectIQ sharedInstance] showConnectIQStoreForApp:app];
```

一个伴手应用程序也可以调用这种方法,即使应用程序安装在设备上并更新,允许用户从设备中管理或卸载应用.

** 注:** 与`showConnectIQDeviceSelection`方法一样,通过启动GCM,这种方法会导致伴侣应用进入后台,可能导致应用程序被暂停. **在调用这种方法时,伴侣应用程序应该预计会被暂停.

##### 在Garmin设备上打开应用

随机应用程序可以要求在目标设备上打开CIQ应用程序.这样做时,将在Garmin设备上显示一个提示,以查看是否应该打开应用程序.如果用户选择打开应用程序,则将立即打开.这可以通过调用`openAppRequest:`方法完成.

```objective-c
[[ConnectIQ sharedInstance] openAppRequest:app
                                completion:^(IQSendMessageResult result) {
    switch(result) {
        case IQSendMessageResult_Success: NSLog(@”Popup was displayed”); break;
        case IQSendMessageResult_Failure_PromptNotDisplayed: NSLog(@”Popup was
                displayed”); break;
        case IQSendMessageResult_Failure_AppAlreadyRunning: NSLog(@”Popup was
                displayed”); break;
    }
}];
```

#### 发送消息

一旦一个伴侣应用程序确定了一个应用程序安装在连接设备上,伴侣应用程序可以通过`sendMessage:toApp:progress:completion:`方法通过蓝牙发送信息到该应用程序的邮箱.该方法将一个对象作为消息,一个`IQApp`作为目的地,以及两个区块 - 一个随着数据传输的进展而定期调用,一个调用后传输完成.

```objective-c
NSArray *message = @[@”hello pi”, @(3.14159)];
[[ConnectIQ sharedInstance] sendMessage:message
                                  toApp:app
                               progress:^(uint32_t sent, uint32_t total) {
    float percent = 100 * sent / (float)total;
    NSLog(@"%02.2f%% - %u/%u", percent, sent, total);
} completion:^(IQSendMessageResult result) {
    NSLog(@"Send message finished with result %@",
        NSStringFromSendMessageResult(result));
}];
```

** 注:** 将传输到这种方法的消息对象首先由SDK转换为一个与子C兼容的类型,然后将其发送到设备上的appbox的邮箱.因此,只有**可直接转换到可比较的子C类型的Objective-C类型才有效.**

有效的消息类型包括`NSString`,`NSNumber`,`NSArray`,`NSDictionary`和`NSNull`.利用其他类型嵌入`NSArray`或`NSDictionary`中形成复杂的消息.`NSNumber`对象中的值将转换为设备上最合适的子C值类型.

** 注:** 请记住,可穿戴设备与iOS设备相比,具有有限的内存和处理能力. **消息应尽可能小.** 然而,频繁发送小消息可能会带来性能和电池寿命成本.因此,偶尔发送大消息比频繁发送许多小消息更理想. **伴侣应用程序应该通过只需要时只发送消息,并将消息大小降至最低. ***

#### 接收消息

随机应用程序可以通过调用`registerForAppMessages:delegate:`方法注册接收来自应用程序的消息.该方法需要一个`IQApp`来听取消息,以及一个符合`IQAppMessageDelegate`协议的对象的实例作为听众.在注册后,当从该应用程序发出的消息被成功接收时,听众将调用`receivedMessage:fromApp:`方法.为了停止听取应用程序消息,随机应用程序可以调用未注册ForAppMessages:delegate:或未注册ForAllAppMessages:方法.

```objective-c
- (void)viewWillAppear:(BOOL)animated {
    [[ConnectIQ sharedInstance] registerForAppMessages:self.app delegate:self];
}

- (void)viewDidDisappear:(BOOL)animated {
    [[ConnectIQ sharedInstance] unregisterForAllAppMessages:self];
}

- (void)receivedMessage:(id)message fromApp:(IQApp *)app {
    NSLog(@"Received message from app %@: '%@'", app, message);
}
```

** 注:** 一个伴侣应用程序可以在许多设备上注册接收来自多个应用程序的消息.然而, ** 多个伴侣应用程序永远不应该注册接收来自同一应用程序的消息**.iOS上的蓝牙通信的性质阻止移动SDK决定交送信息的伴侣应用程序.因此,由于多个伴侣应用程序注册接收来自同一应用程序的消息,不定义的行为将会产生.

![多个手表应用可以与单个手机应用通信](/connect-iq/resources/programmers-guide/ios-image8.png)
![单个手表应用无法与多个手机应用通信](/connect-iq/resources/programmers-guide/ios-image9.png)
