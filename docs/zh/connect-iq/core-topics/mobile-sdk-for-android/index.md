---
title: "Mobile SDK for Android"
---
#移动SDK用于Android

移动SDK允许您创建在用户手机上运行的伴手应用程序,并与您的应用程序在其可穿戴设备上交互.这允许在可穿戴设备上执行某些任务可能会乏味或耗费资源的更丰富的功能用户体验.

## 将移动SDK添加到一个项目中

移动 SDK 在 Maven Central 在[ConnectIQ Companion App SDK](https://central.sonatype.com/artifact/com.garmin.connectiq/ciq-companion-app-sdk)上公开可用 . 要将 AAR 添加到您的项目中,将下列行添加到您的 build.gradle 文件

```kotlin
   implementation "com.garmin.connectiq:ciq-companion-app-sdk:<latest_version>@aar"
```

## 其他要求

In order for your companion application to communicate with a Connect IQ device the user must also install Garmin Connect Mobile onto their phone. All communication for companion applications running on Android goes through a Garmin Connect Mobile service to reach the device. When initializing the SDK with a wireless connection type this requirement is checked and initialization will fail if Garmin Connect Mobile is not installed. If true is passed to the auto UI parameter of initialize, a message is displayed to the user that they need to either install or upgrade Garmin Connect Mobile and provides them a way to go directly to the application in the Google Play Store. See `Displaying a UI message automatically when initialization fails` 更多信息.

##与SDK互动

连接 IQ 应用程序和伴侣应用程序之间的所有互动都通过`ConnectIQ`类进行.

```java
  ConnectIQ connectIQ = ConnectIQ.getInstance(ConnectIQ.IQConnectType.<protocol>);
```

`ConnectIQ.IQConnectType` 提供两个选项：

- 无线 - 通过BLE与Connect IQ模拟器或真实设备进行通信.

- TETHERED - 用于通过Android调试桥与Connect IQ模拟器通信.


##启动SDK

启动SDK是一个异步的过程,需要一个`ConnectIQListener`来处理SDK返回状态.在调用任何额外的API方法之前,您必须等到`onSdkReady()`调用.

```java
connectIQ.initialize(context, true, new ConnectIQListener() {

    // Called when the SDK has been successfully initialized
    @Override
    public void onSdkReady() {

        // Do any post initialization setup.
    }

    // Called when the SDK has been shut down

    @Override
    public void onSdkShutDown() {

        // Take care of any post shutdown requirements
    }

    // Called when initialization fails.
    @Override
    public void onInitializationError(IQSdkErrorStatus status) {

        // A failure has occurred during initialization. Inspect
        // the IQSdkErrorStatus value 更多信息 regarding
        // the failure.
    }

});
```

## 当初始化失败时自动显示UI消息

如果由于 Garmin Connect Mobile 不安装在用户的手机上,或者如果需要升级,则可以显示一个消息,促使用户采取行动.你可以告诉 SDK 通过通过通过 true 作为`initialize()`方法的第二个参数来自动显示这个消息.默认情况下,UI 将向用户显示一个对话消息,要求他们采取行动.构成对话符串的字符串是默认的英语字符串.这些字符串可以通过简单地添加一些预定义字符串到您的项目`strings.xml`文件来完全定制.

### 可自定义字符串

-`install_needed_title`--- 需要安装 Garmin Connect Mobile 的对话标题.

-`install_needed_message`--- 需要安装 Garmin Connect Mobile 的对话信息.

-`install_needed_yes`--- 按文字,让用户确认他们想访问Google Play商店安装Garmin Connect Mobile.

-`install_needed_cancel`--- 按文字使用户取消对话框,而不安装Garmin Connect Mobile.

-`upgrade_needed_title`--- 在 Garmin Connect Mobile 需要升级到支持 SDK 的版本时使用对话标题.

-`upgrade_needed_message`--- 在需要升级到支持SDK的版本时,Garmin Connect Mobile的对话信息.

-`upgrade_needed_yes`--- 按文字,让用户确认他们想访问Google Play商店升级Garmin Connect移动.

-`upgrade_needed_cancel`--- 按文字使用户取消对话框,而不是升级Garmin Connect Mobile.


##与设备合作

### 查找兼容 Connect IQ 的设备

在您可以与Connect IQ设备进行交互之前,您必须获得代表其的`IQDevice`对象实例的引用.

`getKnownDevices()`将返回 Garmin Connect Mobile 中已搭配的任何 Connect IQ 设备的列表.这些设备可能在 API 调用时连接或不连接.

```java
List<IQDevice> paired = connectIQ.getKnownDevices();

if (paired != null && paired.size() > 0) {
    // get the status of the devices
    for (IQDevice device : paired) {
        IQDeviceStatus status = connectIQ.getStatus(device);
        if (status == IQDeviceStatus.CONNECTED) {
            // Work with the device
        }
    }
}
```

`getConnectedDevices()` will return a list of currently connected devices. Because these devices could become disconnected at any time, it is good practice to register to receive a notification when the device connects or disconnects. See the next section 更多信息.

```java
List<IQDevice> devices = connectIQ.getConnectedDevices();

if (devices != null && devices.size() > 0) {

    // Work with devices.
}
```

### 听到设备事件

您可以通过调用`registerForDeviceEvents(IQDevice, IQDeviceEventListener)`请求通知设备状态发生变化. 一旦已注册,任何设备状态变化将调用新状态的`IQDeviceEventListener.onDeviceStatusChanged()`. 当您不再需要收到设备更新时,您应该调用`unregisterForDeviceEvents(IQDevice)`释放任何相关资源.

```java
// Register to receive status updates
connectIQ.registerForDeviceEvents(device, new IQDeviceEventListener() {

    @Override
    public void onDeviceStatusChanged(IQDevice device, IQDeviceStatus newStatus) {

        // Handle new status
    }
});

// Get the current status
IQDeviceStatus current = device.getStatus();

// Unregister when we no longer need status updates
connectIQ.unregisterForDeviceEvents(device);
```

#### 可能的设备状态

-`CONNECTED`--- 设备连接,可以与其通信.

-`NOT_CONNECTED`--- 该设备与 Garmin Connect Mobile 结合,但目前没有连接,无法与此通信.

-`NOT_PAIRED`--- 该设备不配合Garmin Connect Mobile,无法与此通信.


##与应用程序合作

### 获得IQApp的实例

应用程序在移动SDK中被表示为`IQApp`类的实例.虽然您可以自行创建一个`IQApp`实例,但建议通过`getApplicationInfo()`方法获得一个完全拥挤的`IQApp`实例.您可以通过将应用程序 UUID,`IQDevice`和`IQApplicationInfoListener`传入`getApplicationInfo()`调用来确定您的Connect IQ应用程序是否安装在用户设备上.如果应用程序安装在手表上,则将`IQApplicationInfoListener.onApplicationInfoReceived( IQApp )`调用,如果应用程序不存在在手表上,则将`IQApplicationInfoListener.onApplicationNotInstalled( String )`调用.如果用户已使用`IQApp`0方法检查该应用程序的状态,则将`onApplicationInfoReceived`号码被调用.如果状态是`IQApp`1 ,则您的号码也将被调用,以便确定用户是否拥有最新版本的应用程序.

```java
connectIQ.getApplicationInfo(MY_APPLICATION_ID, device, new IQApplicationInfoListener() {
    @Override
    public void onApplicationInfoReceived( IQApp app ) {
        if (app != null) {
            if (app.getStatus() == INSTALLED) {
                if (app.getVersion() < MY_CURRENT_VERSION) {
                    // Prompt the user to upgrade
                }
            }
        }
    }
    @Override
    public void onAPplicationNotInstalled( String applicationId ) {
        // Prompt user with information
        AlertDialog.Builder dialog = new AlertDialog.Builder( this );
        dialog.setTitle( "Missing Application" );
        dialog.setMessage( "Corresponding IQ application not installed" );
        dialog.setPositiveButton( android.R.string.ok, null ); dialog.create().show();
    }
});
```

#### 可能的应用状态

应用程序安装在设备上,已填写版本信息.

- NOT\_INSTALLED --- 该应用程序目前不安装在设备上,但支持.

- NOT\_SUPPORTED --- 该应用程序不安装在设备上,并且设备不支持.


### 在设备上打开应用程序

您可能希望要求用户在设备上打开Connect IQ应用程序.此目的可以使用`openApplication`API.设备的响应将返回您的`IQOpenApplicationListener`.

```java
connectIQ.openApplication(device, app, new IQOpenApplicationListener() {

    @Override
    public void onOpenApplicationResponse(IQDevice device, IQApp app, IQOpenApplicationStatus status) {
        // Handle the response here
    }

});
```

#### 可能的打开应用状态

-   设备上已显示 PROMPT\_SHOWN\_ON\_DEVICE

-   设备上未显示 PROMPT\_NOT\_SHOWN\_ON\_DEVICE

-   APP\_IS\_NOT\_INSTALLED

-   APP\_IS\_ALREADY\_RUNNING

-   UNKNOWN\_FAILURE


### 打开连接智能商店

如果用户没有安装你的应用程序 (`NOT_INSTALLED`状态),或者需要升级到最新版本,您可以直接在应用程序中打开Connect IQ存储器. 简单地调用`openStore()`传递在存储器中包含与应用程序相关的公共 UUID中的字符串中. 注意,如果您使用TETHERED连接选项,这将无法工作.

```java
connectIQ.openStore( MY_STORE_ID );
```

## 发送消息

You can send messages to your Connect IQ application on a connected device using any of the Java equivalent Monkey C data types (see *支持ed Data Types* table below). Calling `sendMessage()` will deliver the message to your applications mailbox.

```java
List<Object> message = new ArrayList<String>() {"hello pi", 3.14159};

connectIQ.sendMessage(device, app, message, new IQSendMessageListener() {

    @Override
    public void onMessageStatus( IQDevice device, IQApp app, IQMessageStatus status ) {
        Toast.makeText( this, status.name(), Toast.LENGTH_LONG ).show();
        if (status != IQMessageStatus.SUCCESS) {
            // Evalute status for cause of the failure
        }
    }
});
```

## 接收消息

为了从Connect IQ应用程序接收数据消息,您必须首先注册接收应用程序事件.一旦通过`registerForAppEvents()`注册,当从Connect IQ应用程序接收新的消息时,它将被传递到注册时通过的`onMessageReceived()`方式.当您不再希望接收接入的消息时,您应该打电话给`unregisterForAppEvents()`释放任何相关资源.

一个伴侣应用程序可以注册接收来自多个应用程序的消息在多个设备上.然而,多个伴侣应用程序不能注册接收来自同一连接IQ应用程序的消息.SDK将在每次调用到`registerForAppEvents()`时取消任何以前的注册.

```java
// Register to receive messages from our application
connectIQ.registerForAppEvents(device, app, new IQApplicationEventListener() {

    @Override
    public void onMessageReceived(IQDevice device, IQApp app, List<Object> messageData, IQMessageStatus status) {
        // First inspect the status to make sure this
        // was a SUCCESS. If not then the status will indicate why there
        // was an issue receiving the message from the Connect IQ application.
        if (status == IQMessageStatus.SUCCESS) {
            // Handle the message.
        }
    }
});

// unregister when we no longer care about messages coming from our app.
connectIQ.unregisterForAppEvents(device, app);
```

## 支持ed Data Types

|Java数据类型|子C类型| 备注 |
| --- | --- | --- |
| int、Integer | 整数 |  |
| long、Long | 整数、长整数 |如果长的值足够小以表示为整数,则将转换为节省空间.|
| float、Float | 浮点数 |  |
| double、Double | 浮点数、双精度浮点数 |如果倍数的值在最近的浮动的5个相匹配的重要分数数字内,则将转换为浮动,以节省空间.|
| 布尔值、Boolean | 布尔值 |  |
| char | Char |  |
| 字符串 | 字符串 |  |
|列表| 数组 |如果列表中包含未支持的数据类型,则会提出例外.|
| Map | Dictionary |如果地图包含未支持的数据类型,则会提出例外.|
