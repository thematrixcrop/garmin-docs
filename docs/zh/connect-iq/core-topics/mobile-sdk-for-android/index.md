---
title: "Android 移动 SDK"
---
<a id="mobile-sdk-for-android"></a>
# Android 移动 SDK

Mobile SDK 可用于创建运行在用户手机上的配套应用，并与可穿戴设备上的应用交互。这样，某些在可穿戴设备上执行起来繁琐或消耗资源的任务，就可以交给手机处理，从而提供更丰富的用户体验。

## 将 Mobile SDK 添加到项目

Mobile SDK 已通过 [Connect IQ Companion App SDK](https://central.sonatype.com/artifact/com.garmin.connectiq/ciq-companion-app-sdk) 公开发布到 Maven Central。要将 AAR 添加到项目中，请在 `build.gradle` 文件中加入以下行：

```kotlin
   implementation "com.garmin.connectiq:ciq-companion-app-sdk:<latest_version>@aar"
```

## 其他要求

要让配套应用与 Connect IQ 设备通信，用户必须在手机上安装 Garmin Connect Mobile。Android 配套应用的所有通信都会通过 Garmin Connect Mobile 服务到达设备。使用无线连接类型初始化 SDK 时，系统会检查这一要求；如果手机未安装 Garmin Connect Mobile，初始化将失败。如果将 `true` 传给 `initialize` 方法的自动 UI 参数，SDK 会向用户显示消息，要求其安装或升级 Garmin Connect Mobile，并提供直接前往 Google Play 商店应用页面的入口。详情请参阅“初始化失败时自动显示 UI 消息”。

## 使用 SDK

配套应用与 Connect IQ 应用之间的所有交互都通过 `ConnectIQ` 类完成。使用该类前，必须先获取其实例并进行初始化。

```java
  ConnectIQ connectIQ = ConnectIQ.getInstance(ConnectIQ.IQConnectType.<protocol>);
```

`ConnectIQ.IQConnectType` 提供两个选项：

- `WIRELESS`：通过 BLE 与 Connect IQ 模拟器或真实设备通信。这是默认选项。
- `TETHERED`：通过 Android Debug Bridge 与 Connect IQ 模拟器通信。

## 初始化 SDK

SDK 初始化是异步过程，需要使用 `ConnectIQListener` 处理 SDK 返回的状态。必须等待 `onSdkReady()` 被调用后，才能调用其他 API；提前调用会导致 `InvalidStateException`。

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
        // the IQSdkErrorStatus value for more information regarding
        // the failure.
    }

});
```

## 初始化失败时自动显示 UI 消息

如果初始化失败的原因是用户手机未安装 Garmin Connect Mobile，或当前版本需要升级，可以显示消息提示用户处理。将 `true` 作为 `initialize()` 方法的第二个参数传入，即可让 SDK 自动显示该消息。默认情况下，UI 会显示一个对话框，要求用户采取行动。对话框字符串默认只有英文，但您可以在项目的 `strings.xml` 文件中添加预定义字符串来完全自定义这些文本。

### 可自定义的字符串

- `install_needed_title`：需要安装 Garmin Connect Mobile 时显示的对话框标题。
- `install_needed_message`：需要安装 Garmin Connect Mobile 时显示的对话框消息。
- `install_needed_yes`：用户确认前往 Google Play 商店安装 Garmin Connect Mobile 的按钮文字。
- `install_needed_cancel`：用户取消对话框、不安装 Garmin Connect Mobile 的按钮文字。
- `upgrade_needed_title`：需要将 Garmin Connect Mobile 升级到支持 SDK 的版本时显示的对话框标题。
- `upgrade_needed_message`：需要将 Garmin Connect Mobile 升级到支持 SDK 的版本时显示的对话框消息。
- `upgrade_needed_yes`：用户确认前往 Google Play 商店升级 Garmin Connect Mobile 的按钮文字。
- `upgrade_needed_cancel`：用户取消对话框、不升级 Garmin Connect Mobile 的按钮文字。

## 使用设备

### 查找兼容 Connect IQ 的设备

与 Connect IQ 设备交互前，必须先获取一个代表该设备的 `IQDevice` 实例。可以通过以下两种方式之一完成。

`getKnownDevices()` 会返回已在 Garmin Connect Mobile 中配对的所有 Connect IQ 设备。这些设备在调用 API 时可能已经连接，也可能尚未连接。

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

`getConnectedDevices()` 会返回当前已连接的设备。由于设备随时可能断开连接，建议注册设备事件，以便在设备连接或断开时收到通知。详情请参阅下一节。

```java
List<IQDevice> devices = connectIQ.getConnectedDevices();

if (devices != null && devices.size() > 0) {

    // Work with devices.
}
```

### 监听设备事件

调用 `registerForDeviceEvents(IQDevice, IQDeviceEventListener)` 可以请求在设备状态发生变化时收到通知。注册后，每次设备状态变化都会调用 `IQDeviceEventListener.onDeviceStatusChanged()`，并传入新状态。不再需要接收某个设备的更新时，应调用 `unregisterForDeviceEvents(IQDevice)` 释放相关资源。

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

- `CONNECTED`：设备已连接，可以进行通信。
- `NOT_CONNECTED`：设备已与 Garmin Connect Mobile 配对，但当前未连接，无法通信。
- `NOT_PAIRED`：设备未与 Garmin Connect Mobile 配对，无法通信。

## 使用应用

### 获取 IQApp 实例

在 Mobile SDK 中，应用由 `IQApp` 类的实例表示。虽然可以自行创建 `IQApp` 实例，但建议通过 `getApplicationInfo()` 获取包含完整信息的实例。将应用 UUID、`IQDevice` 和 `IQApplicationInfoListener` 传给 `getApplicationInfo()`，即可确定 Connect IQ 应用是否安装在用户设备上。如果应用已安装在手表上，将调用 `IQApplicationInfoListener.onApplicationInfoReceived( IQApp )`；如果手表上不存在该应用，则调用 `IQApplicationInfoListener.onApplicationNotInstalled( String )`。`onApplicationInfoReceived` 会收到一个 IQApp 对象，可以通过 `getStatus()` 检查应用状态。如果状态为 `INSTALLED`，对象还会包含版本号，以便判断用户是否使用最新版本。

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

- `INSTALLED`：应用已安装在设备上，并且已填充版本信息。
- `NOT_INSTALLED`：应用当前未安装在设备上，但设备支持它。
- `NOT_SUPPORTED`：应用未安装在设备上，且设备不支持它。

### 在设备上打开应用

如果希望提示用户在设备上打开 Connect IQ 应用，可以使用 `openApplication` API。设备会向 `IQOpenApplicationListener` 返回响应。

```java
connectIQ.openApplication(device, app, new IQOpenApplicationListener() {

    @Override
    public void onOpenApplicationResponse(IQDevice device, IQApp app, IQOpenApplicationStatus status) {
        // Handle the response here
    }

});
```

#### 可能的打开应用状态

- `PROMPT_SHOWN_ON_DEVICE`
- `PROMPT_NOT_SHOWN_ON_DEVICE`
- `APP_IS_NOT_INSTALLED`
- `APP_IS_ALREADY_RUNNING`
- `UNKNOWN_FAILURE`

### 打开 Connect IQ 商店

如果用户尚未安装应用（状态为 `NOT_INSTALLED`），或需要升级到最新版本，可以直接打开 Connect IQ 商店中的应用页面。调用 `openStore()` 并传入应用在商店中对应的公共 UUID 字符串即可。注意，使用 `TETHERED` 连接选项时，此功能不可用。

```java
connectIQ.openStore( MY_STORE_ID );
```

## 发送消息

您可以使用与 Monkey C 数据类型对应的 Java 类型，向已连接设备上的 Connect IQ 应用发送消息（请参阅下方的“支持的数据类型”表）。调用 `sendMessage()` 会将消息传递到应用的邮箱。

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

要接收来自 Connect IQ 应用的数据消息，必须先注册应用事件。通过 `registerForAppEvents()` 注册后，Connect IQ 应用发来新消息时，消息会传递给注册时提供的监听器的 `onMessageReceived()` 方法。不再需要接收消息时，应调用 `unregisterForAppEvents()` 释放相关资源。

一个配套应用可以注册接收来自多个设备上多个应用的消息。但是，多个配套应用不能同时注册接收同一个 Connect IQ 应用的消息。每次调用 `registerForAppEvents()` 时，SDK 都会覆盖之前的注册。

```java
// Register to receive messages from our application
connectIQ.registerForAppEvents(device, app, new IQApplicationEventListener() {

    @Override
    public void onMessageReceived(IQDevice device, IQApp app, List<Object> messageData, IQMessageStatus status) {
        // First inspect the status to make sure this
        // was a SUCCESS. If not then the status will indicate why
        // there was an issue receiving the message from the Connect IQ application.
        if (status == IQMessageStatus.SUCCESS) {
            // Handle the message.
        }
    }
});

// unregister when we no longer care about messages coming from our app.
connectIQ.unregisterForAppEvents(device, app);
```

## 支持的数据类型

| Java 数据类型 | Monkey C 类型 | 备注 |
| --- | --- | --- |
| `int`、`Integer` | `Integer` |  |
| `long`、`Long` | `Integer`、`Long` | 如果 long 的值足够小、可以用 integer 表示，SDK 会将其转换为 integer 以节省空间。 |
| `float`、`Float` | `Float` |  |
| `double`、`Double` | `Float`、`Double` | 如果 double 与最近的 float 之间仅相差 5 位有效小数，SDK 会将其转换为 float 以节省空间。 |
| `boolean`、`Boolean` | `Boolean` |  |
| `char` | `Char` |  |
| `String` | `String` |  |
| `List&lt;?>` | `Array` | 列表只能包含受支持的数据类型；包含不受支持的类型时会抛出异常。 |
| `Map` | `Dictionary` | Map 的键和值都必须是受支持的数据类型；包含不受支持的类型时会抛出异常。 |
