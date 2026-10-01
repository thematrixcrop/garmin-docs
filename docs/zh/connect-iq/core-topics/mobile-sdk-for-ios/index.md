---
title: "iOS 移动 SDK"
---
<a id="mobile-sdk-for-ios"></a>
# iOS 移动 SDK

Connect IQ Mobile SDK 可用于创建与 Garmin 可穿戴设备上运行的 Monkey C 应用交互的 iOS 配套应用。您可以从可穿戴设备获取远程数据，或将消耗资源的任务转移到 iOS 设备，从而构建功能丰富的用户体验。本文介绍如何在 iOS 项目中添加 Mobile SDK，以及如何使用 SDK API 与 Monkey C 应用通信。

## 配置项目以使用 Mobile SDK

### 将框架添加到项目

iOS Mobile SDK 以 iOS framework package 的形式发布，可从 [Connect IQ Mobile SDK 的 Garmin GitHub 仓库](https://github.com/garmin/connectiq-companion-app-sdk-ios)获取。要启用该 framework，请在 `Project > Package Dependencies` 面板中添加依赖项，点击 Packages 列表底部的 `+` 按钮即可。

![将框架添加到 iOS 项目](/connect-iq/resources/programmers-guide/ios-image1.png)

在弹出的对话框中选择要添加的依赖包。在搜索框中输入 `https://github.com/garmin/connectiq-companion-app-sdk-ios`。

![搜索 Mobile SDK package](/connect-iq/resources/programmers-guide/ios-image2.png)

#### 将 ConnectIQ framework 作为二进制文件嵌入

要让项目能够使用 Mobile SDK 构建，请为项目的每个 target 嵌入该 framework：勾选每个 target 对应的复选框，然后点击 `Add Package`。

![将 framework 作为二进制文件嵌入](/connect-iq/resources/programmers-guide/ios-image3.png)

#### 添加必需的链接器标志

iOS Mobile SDK 内部使用了 category 方法。导入使用 category 方法的库时，必须添加额外标志，才能正确链接该库。请将 `-ObjC` 标志添加到 `Target > Build Settings > Linking > Other Linker Flags` 设置中。

![为 target 设置链接器标志](/connect-iq/resources/programmers-guide/ios-image4.png)

#### 注册 URL scheme

与 Android Mobile SDK 不同，使用 iOS Mobile SDK 创建的应用是独立应用，不直接依赖 Garmin Connect Mobile（GCM）与可穿戴设备通信。不过，应用仍需要 GCM 来首次发现可通信的 Connect IQ 兼容设备，或在可穿戴设备上安装 Monkey C 应用。配套应用与 GCM 通过 iOS URL scheme 系统相互启动并交换信息。为此，应用必须注册一个 GCM 可以向其发送数据的 URL scheme。请在 `Target > Info > URL Types` 面板中添加条目，并选择一个不太可能与 iOS 设备上其他应用冲突的字符串。详情请参阅 Apple 关于[自定义 URL scheme](https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/Inter-AppCommunication/Inter-AppCommunication.html#//apple_ref/doc/uid/TP40007072-CH6-SW1) 的文档。

![为 target 注册 URL scheme](/connect-iq/resources/programmers-guide/ios-image5.png)

如果使用 iOS 9 或更高版本的 SDK 编译，需要在应用的 Info.plist 中将 `gcm-ciq` 添加到 [LSApplicationQueriesSchemes](https://developer.apple.com/library/ios/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW14)。这样 SDK 才能检查 GCM 是否已安装。如果 Info.plist 中没有该键，需要手动添加。

如果项目尚未在 Info.plist 中设置 [CFBundleDisplayName](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html)，也需要添加定义。不确定使用什么值时，可以将其设置为 `${PRODUCT_NAME}`。

#### 设置蓝牙使用说明

从 iOS 10 开始，必须设置说明应用为何需要访问 BLE 外设的字符串。为了通过 iTunes Connect 审核，必须在 Info.plist 中设置 [NSBluetoothPeripheralUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW20)，说明应用对 BLE 的使用方式。如果 Info.plist 中没有该键，需要手动添加。

#### 设置后台执行模式（可选）

当已连接的蓝牙设备有数据要发送时，iOS 系统可以唤醒与其通信的应用，并允许应用在后台执行。对于需要为可穿戴设备上的 Monkey C 应用处理请求的配套应用，这一功能很有用。要启用它，请在 `Target > Capabilities > Background Modes` 面板中打开 `Uses Bluetooth LE accessories` 选项。

![为 target 设置后台执行模式（可选）](/connect-iq/resources/programmers-guide/ios-image6.png)

#### 初始化 SDK

与 Mobile SDK 的所有交互都通过 `ConnectIQ` 类完成。应用启动时，必须使用项目的 URL scheme 和 UI override delegate 初始化该类。通常可以在 app delegate 的 `application:didFinishLaunchingWithOptions:` 方法中完成。

```objective-c
[[ConnectIQ sharedInstance] initializeWithUrlScheme:@"exapp-123456"
                                 uiOverrideDelegate:self];
```

URL scheme 应与“配置项目以使用 Mobile SDK”第 4 步中选择的字符串一致。当调用需要安装 GCM 的 `ConnectIQ` 类方法，而 iOS 系统中没有安装 GCM 时，默认会向用户显示一个 alert dialog，允许用户前往 Apple App Store 的 GCM 页面进行安装。此处传入符合 `IQUIOverrideDelegate` 协议的对象实例后，可以自定义这种情况下的行为或 UI。要使用默认 alert dialog 和默认行为，请传入 `nil`。

#### 实现 UI override delegate

如果指定了 UI override delegate，并且执行了需要安装 GCM 的操作，`ConnectIQ` 类会调用该 delegate 的 `needsToInstallConnectMobile` 方法。应用应告知用户该操作需要 GCM，并让用户选择打开 Apple App Store 中的 GCM 页面，或取消触发该操作。如果用户选择安装 GCM，可以调用 `showAppStoreForConnectMobile` 方法。

```objective-c
- (void)needsToInstallConnectMobile {
    // Show alert to user with choice to install GCM
    if (alert.result == YES) {
       [[ConnectIQ sharedInstance] showAppStoreForConnectMobile];
    }
}
```

上面的示例是同步的。如果需要向用户显示 UI，应在用户执行选择后调用 `showAppStoreForConnectMobile`，而不是直接在 `needsToInstallConnectMobile` 方法中调用。

## 使用设备

#### 查找兼容 Connect IQ 的设备

iOS Mobile SDK 可以通过 Bluetooth 直接与 Connect IQ 兼容设备通信。不过，应用必须先知道哪些设备可用。为此，配套应用必须调用 `showConnectIQDeviceSelection` 方法。

```objective-c
[[ConnectIQ sharedInstance] showConnectIQDeviceSelection];
```

此方法会将 GCM 调到前台，并允许用户选择要与配套应用共享的已配对 Connect IQ 兼容设备。如果未安装 GCM 且设置了 UI override delegate，则会调用其 `needsToInstallConnectMobile` 方法。

请注意，启动 GCM 会使配套应用进入后台，应用可能因此被挂起。**调用此方法时，配套应用必须预期自己会被挂起。**

用户选择要共享的配对设备后，GCM 会通过已注册的 URL scheme 启动配套应用，并将设备列表作为序列化的 URL 查询项传入。配套应用应重写 app delegate 的 `application:openURL:sourceApplication:annotation:` 方法来接收这些数据，然后调用 `parseDeviceSelectionResponseFromURL:`，将查询项解析为可供 Mobile SDK 使用的 `NSArray<IQDevice *>` 对象。

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

上例将解析出的设备保存到字典，供应用后续使用，但没有将设备缓存到任何持久化存储中。

**注意：** 为避免频繁启动 GCM 来发现设备，**配套应用应将设备缓存到持久化存储中。** GCM 返回设备列表后，配套应用应清除此前缓存的所有设备引用。**始终只使用用户最新授权的设备列表。**

#### 监听设备事件

配套应用从 GCM 获取一个或多个 `IQDevice` 实例后，可以通过调用 `registerForDeviceEvents:delegate:` 向 `ConnectIQ` 注册，以便在设备连接状态变化时收到通知。

```objective-c
[[ConnectIQ sharedInstance] registerForDeviceEvents:device
                                           delegate:self];
```

传入的 delegate 必须是符合 `IQDeviceEventDelegate` 协议的类实例。注册后，设备连接状态变化时会调用 delegate 的 `deviceStatusChanged:status:` 方法。也可以调用 `getDeviceStatus:` 获取设备当前连接状态。这两个方法都会返回 `IQDeviceStatus` 值。

**注意：** 配套应用必须先注册接收设备事件，才能调用针对设备或应用的方法，例如 `getDeviceStatus:` 或 `sendMessage:toApp:progress:completion:`。

要停止监听设备事件，可以调用 `unregisterForDeviceEvents:delegate:` 或 `unregisterForAllDeviceEvents:`。

```objective-c
// Stop listening to a single device
[[ConnectIQ sharedInstance] unregisterForDeviceEvents:device
                                             delegate:self];
// ... or unregister all devices for this listener
[[ConnectIQ sharedInstance] unregisterForAllDeviceEvents:self];
```

## 使用应用

#### 创建应用实例

在 Mobile SDK 中，应用由 `IQApp` 类实例表示。一个 `IQApp` 实例代表一台设备上的一个应用。因此，如果要操作安装在两台不同设备上的同一个应用，配套应用需要创建两个 `IQApp` 实例：它们拥有相同的应用 ID，但分别对应一台设备。要创建应用实例，请使用 `IQApp` 类的 `appWithUUID:device:` 方法。

```objective-c
NSUUID *uuid = [[NSUUID alloc] initWithUUIDString:@”<YourAppID>”];
IQApp *app = [IQApp appWithUUID:uuid device:device];
```

#### 请求应用状态

创建 `IQApp` 实例并将应用 ID 与 `IQDevice` 实例关联后，配套应用可以调用 `getAppStatus:completion:` 请求该设备上的应用状态。

```objective-c
[[ConnectIQ sharedInstance] getAppStatus:app
                              completion:^(IQAppStatus *appStatus) {
    if (appStatus != nil && appStatus.isInstalled) {
        NSLog(@”App is installed! Version: %d”, appStatus.version);
    }
}];
```

此方法通过 Bluetooth 与设备通信，因此是异步的。设备返回响应或请求超时后，才会调用 completion block。请求成功时，completion block 会收到一个 `IQAppStatus` 实例。配套应用可以检查该状态，了解应用是否已安装，以及安装的版本号，然后决定是否显示建议用户升级设备上应用的 UI。如果设备当前未连接或请求超时，completion block 会收到 `nil` 状态。

#### 安装、升级或管理应用

如果配套应用发现某个应用版本过旧或尚未安装，可以通过在 GCM 中打开 Connect IQ 商店，让用户安装或升级该应用。只需调用 `showConnectIQStoreForApp:`。

```objective-c
[[ConnectIQ sharedInstance] showConnectIQStoreForApp:app];
```

即使应用已经安装且版本最新，也可以调用此方法，让用户管理或卸载设备上的应用。

**注意：** 与 `showConnectIQDeviceSelection` 一样，启动 GCM 会使配套应用进入后台，并可能导致应用被挂起。**调用此方法时，配套应用必须预期自己会被挂起。**

#### 在 Garmin 设备上打开应用

配套应用可以请求在目标设备上打开 CIQ 应用。请求后，Garmin 设备会向用户显示提示，询问是否打开该应用。用户选择打开后，应用会立即启动。可以通过调用 `openAppRequest:` 实现。

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

配套应用确认应用已安装在已连接设备上后，可以调用 `sendMessage:toApp:progress:completion:`，通过 Bluetooth 将消息发送到该应用的邮箱。该方法接收消息对象、目标 `IQApp`，以及两个 block：一个在数据传输过程中定期调用，另一个在传输完成后调用。

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

**注意：** 传给此方法的消息对象会先由 SDK 转换为 Monkey C 兼容类型，然后发送到设备上的应用邮箱。因此，**只有能够直接转换为对应 Monkey C 类型的 Objective-C 类型才有效。**

有效的消息类型包括 `NSString`、`NSNumber`、`NSArray`、`NSDictionary` 和 `NSNull`。可以在 `NSArray` 或 `NSDictionary` 中嵌套其他类型，构造复杂消息。`NSNumber` 对象中的值会在设备上转换为最合适的 Monkey C 值类型。

**注意：** 与 iOS 设备相比，可穿戴设备的内存和处理能力有限。**消息应尽可能小。** 但频繁发送小消息也会带来性能和电池消耗成本。因此，偶尔发送较大的消息通常比频繁发送许多极小的消息更合适。**配套应用应只在必要时发送消息，并尽量减小消息大小，在内存和性能成本之间取得平衡。**

#### 接收消息

配套应用可以调用 `registerForAppMessages:delegate:`，注册接收设备上应用发送的消息。该方法接收要监听的 `IQApp`，以及一个符合 `IQAppMessageDelegate` 协议的监听器对象。注册后，成功收到该应用的消息时，系统会调用监听器的 `receivedMessage:fromApp:` 方法。要停止监听应用消息，可以调用 `unregisterForAppMessages:delegate:` 或 `unregisterForAllAppMessages:`。

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

**注意：** 配套应用可以注册接收来自多个设备上多个应用的消息。但是，**多个配套应用不应注册接收同一个应用的消息。** iOS 上的 Bluetooth 通信机制无法让 Mobile SDK 判断应该把消息交付给哪个配套应用，因此多个配套应用注册接收同一应用的消息会导致未定义行为。

![多个手表应用可以与一个手机应用通信](/connect-iq/resources/programmers-guide/ios-image8.png)
![一个手表应用无法与多个手机应用通信](/connect-iq/resources/programmers-guide/ios-image9.png)
