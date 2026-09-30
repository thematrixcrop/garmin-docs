---
title: "ANT 和 ANT+"
---
<a id="ant-and-ant-plus"></a>
# ANT 和 ANT+

Connect IQ 的 Sensor 模块让开发者可以访问设备内置的传感器和已配对的传感器。Connect IQ 还提供对可用 ANT 通道的访问，使开发者能够与 Garmin 不支持的传感器通信。通过 FIT 记录系统，可以将这些指标记录到活动文件并上传到 Garmin Connect。

更多 ANT 和 ANT+ 信息请参阅 [thisisant.com](http://thisisant.com/)。

| API | 用途 | API 级别 |
| --- | --- | --- |
| [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/) | 提供对通用 ANT 通道的访问，使应用可以直接与 ANT 设备通信。 | 1.0.0 |
| [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/) | 访问已与设备配对的 ANT 设备。 | 2.2.0 |

## 通用 ANT 通道

Connect IQ 提供了与 ANT 和 ANT+ 传感器通信的低级接口。通过该接口，可以创建 ANT 通道来发送和接收 ANT 数据包。

使用 ANT USB 适配器（dongle），可以在 Connect IQ Simulator 中使用 Connect IQ ANT API。请注意，Garmin Express 运行时会阻止访问 ANT USB 适配器，因此在 Connect IQ Simulator 中使用它时，请先关闭 Garmin Express。

### 在 Linux 中使用 ANT USB 适配器

要在 Linux 中使用 ANT USB 适配器，Simulator 必须能够访问该 USB 设备。系统中必须安装 udev 规则，使适配器能够在非 root 权限下使用。

查找 ANT USB 适配器的厂商和产品 ID：

```bash
$ lsusb
```

在列表中找到 ANT USB 适配器以及对应的厂商和产品 ID。例如：

```bash
Bus 001 Device 009: ID 0fcf:1009 Dynastream Innovations, Inc. ANTUSB-m Stick
```

为此设备创建 udev 规则：

```bash
$ sudo touch /etc/udev/rules.d/50-connectiq-usbant.rules
$ sudo nano /etc/udev/rules.d/50-connectiq-usbant.rules
```

将下面一行添加到文件中并保存，按 `CTRL-X`：

```bash
ACTION=="add", SUBSYSTEMS=="usb", ATTRS{idVendor}=="0fcf", ATTRS{idProduct}=="1009", MODE="664", GROUP="plugdev"
```

重启 udev 服务并插入 ANT USB 适配器：

```bash
$ sudo /etc/init.d/udev restart
```

将当前用户添加到 `plugdev` 组：

```bash
$ sudo usermod -a -G plugdev <userName>
```

## 与 tempe 传感器通信

Garmin tempe™ 无线环境传感器等设备支持环境配置文件（Environment Profile），可以读取最低、最高和当前温度。

可以使用以下代码将 ANT 通道初始化为 tempe 传感器：

```typescript
    // 构造函数
    function initialize() {
        // 获取通道
        chanAssign = new Ant.ChannelAssignment(
            Ant.CHANNEL_TYPE_RX_NOT_TX,
            Ant.NETWORK_PLUS);
        GenericChannel.initialize(method(:onMessage), chanAssign);

        // 设置配置
        deviceCfg = new Ant.DeviceConfig( {
            :deviceNumber => 0,                 // 将搜索设为通配
            :deviceType => DEVICE_TYPE,
            :transmissionType => 0,
            :messagePeriod => PERIOD,
            :radioFrequency => 57,              // ANT+ 频率
            :searchTimeoutLowPriority => 10,    // 25 秒超时
            :searchTimeoutHighPriority => 2,    // 5 秒超时
            :searchThreshold => 0} );           // 与所有正在发射的传感器配对
        GenericChannel.setDeviceConfig(deviceCfg);

        data = new TempeData();
        searching = true;
    }
```

此代码设置 ANT 通道分配和设备配置，并将它们传递给基类 [Ant.GenericChannel](/connect-iq/api-docs/Toybox/Ant/GenericChannel/)。设备配置使用通配搜索，以查找任意环境传感器。初始化代码还设置了 `onMessage` 回调，用于处理收到的数据包。

```typescript
    // 处理传入信息
    function onMessage(msg as Message) {
        // 解析负载
        var payload = msg.getPayload();

        if( Ant.MSG_ID_BROADCAST_DATA == msg.messageId ) {
            if( TempeDataPage.PAGE_NUMBER == (payload[0].toNumber() & 0xFF) ) {
                // 是否正在搜索？
                if(searching) {
                    searching = false;

                    // 更新设备配置，主要用于查看
                    // 已配对传感器的设备编号
                    deviceCfg = GenericChannel.getDeviceConfig();
                }
                var dp = new TempeDataPage();
                dp.parse( msg.getPayload(), data );
                tempDataAvailable = true;
                // 检查数据是否发生变化，以及是否需要更新 UI
                if( pastEventCount != data.eventCount ) {
                    pastEventCount = data.eventCount;
                }
            }
        } // 广播数据结束

        else if( Ant.MSG_ID_CHANNEL_RESPONSE_EVENT == msg.messageId ) {
            if( Ant.MSG_ID_RF_EVENT == (payload[0] & 0xFF) ) {
                if( Ant.MSG_CODE_EVENT_CHANNEL_CLOSED == (payload[1] & 0xFF) ) {
                    open();
                }
                else if( Ant.MSG_CODE_EVENT_RX_FAIL_GO_TO_SEARCH  == (payload[1] & 0xFF) ) {
                    searching = true;
                }
            }
            else{
                // 这是通道响应。
            }
        } // 通道响应事件结束

    } // 消息处理结束
```

此回调负责与附近的传感器配对，并处理收到的数据包。

`MO2Display` 示例实现了 Muscle Oxygen ANT 配置文件。ANT Generic 接口不能用于表盘。为了与设备上的原生 ANT 行为互操作，传感器的低优先级和高优先级搜索超时与基础 ANT 无线电规范不同，最大值分别限制为 30 秒和 5 秒。

## Burst 数据

*自 API 级别 2.2.0 起可用*

Burst 数据传输允许通过 ANT Generic Channel 在设备之间传送大量数据。开发者会通过监听器收到 Burst 发送或接收事件成功或失败的通知。每次 Burst 数据传输最多支持 8 KB 数据。

常见用途包括使用 passkey 进行身份验证，以及在设备之间发送或接收配置数据。

`GenericChannelBurst` 示例展示了如何发送和接收 Burst 数据。

## ANT+ 配置文件（Profiles）

*自 API 级别 2.2.0 起可用*

[Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/) 模块允许访问用户设备上已配对的 ANT+ 传感器信息，无需开发者自行设置和管理 ANT 通道。添加、移除、启用、禁用和校准等 ANT+ 传感器管理操作，都由用户通过设备的常规传感器菜单完成。

创建 [AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/) 的特定传感器扩展时，需要传入对应的传感器监听器扩展。如果用户设备上已配对指定类型的传感器，可以使用该传感器扩展的 getter 获取信息，也可以使用 [Device.getBatteryStatus()](/connect-iq/api-docs/Toybox/AntPlus/Device/#getBatteryStatus-instance_function) 等通用 getter。对于大多数不支持多组件的传感器类型，标识符可以传入 `null`。

如果指定类型的传感器已配对，且相应信息通过 ANT 更新，[AntPlus.DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/) 及其扩展中的回调会自动调用。例如，当传感器的 ANT 通道从已连接状态变为搜索状态，或用户切换设备当前连接的该类型传感器 ID 时，会调用 [DeviceListener.onDeviceStateUpdate()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onDeviceStateUpdate-instance_function)。通过 ANT 收到功率传感器的新信息时，也会调用相应回调。

某些 ANT+ 传感器（例如自行车灯）具有专用回调。例如，应使用专用回调了解灯光网络状态，而不是使用 [DeviceListener.onDeviceStateUpdate()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onDeviceStateUpdate-instance_function)。如果用户设备上已配对自行车灯且灯光网络已建立，[AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/) 类允许您修改自行车灯模式。

并非所有由 Monkey C 提供的 ANT+ 配置文件都受到每个 Connect IQ 兼容设备的支持。
