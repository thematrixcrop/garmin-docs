---
title: "ANT and ANT+"
---
# ANT 和 ANT+

Connect IQ 的 Sensor 模块让开发者可以访问设备的内置和配对传感器。Connect IQ 还提供对可用 ANT 通道的访问，使开发者能够与 Garmin 不支持的传感器通信。通过 FIT 记录系统，这些数据可以记录到 Activity 文件中并上传到 Garmin Connect。

在 [thisisant.com](http://thisisant.com/) 了解有关 ANT 和 ANT+ 的更多信息

| API |目的| API 级别 |
| --- | --- | --- |
| [Toybox.Ant](/connect-iq/api-docs/Toybox/Ant/) |提供通用ANT道的访问.这些 app道允许您的应用程序和ANT设备之间进行直接通信| 1.0.0 |
| [Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/) |允许与该设备相对的ANT设备访问.| 2.2.0 |

## 通用 ANT 通道

Connect IQ 提供与 ANT 和 ANT+ 传感器通信的低级接口。使用此接口，可以创建 ANT 通道来发送和接收 ANT 数据包。

使用ANT USB dongle,您可以在 Connect IQ模拟器中使用 Connect IQ ANT API.请注意,如果运行,Garmin Express将阻止访问ANT USB dongle,因此确保在使用 Connect IQ模拟器时关闭Garmin Express.

### 在 Linux 中使用 ANT 棒

为了在 Linux 中使用 ANT 棒,USB 设备必须可访问模拟器.必须安装在系统中一个 udev 规则,以便 ANT 棒充满非根特权.

查找ANT棒的供应商和产品ID

```bash
$ lsusb
```

在列表中找到 ANT 棒以及其供应商和产品 ID。例如：

```bash
Bus 001 Device 009: ID 0fcf:1009 Dynastream Innovations, Inc. ANTUSB-m Stick
```

创建该设备的 udev 规则

```bash
$ sudo touch /etc/udev/rules.d/50-connectiq-usbant.rules
$ sudo nano /etc/udev/rules.d/50-connectiq-usbant.rules
```

然后将下面的行添加到文件中并保存更改:CTRL-x

```bash
ACTION=="add", SUBSYSTEMS=="usb", ATTRS{idVendor}=="0fcf", ATTRS{idProduct}=="1009", MODE="664", GROUP="plugdev"
```

再启动 udev 服务并插入 ANT 棒

```bash
$ sudo /etc/init.d/udev restart
```

加入"插件"组

```bash
$ sudo usermod -a -G plugdev <userName>
```

##与温度传感器沟通

环境配置文件由像Garmin tempeTM无线环境传感器这样的传感器支持,可读取最低,最高和当前温度.

我们可以将ANT频道初始化成一个度传感器,

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

这个代码设置了ANT频道分配,设置了设备配置,并将它们传递到基层[Ant.GenericChannel](/connect-iq/api-docs/Toybox/Ant/GenericChannel/)类.设备配置设置为寻找任何环境传感器的野生卡.初始化器还设置了`onMessage`回调来处理接入的包.

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

呼叫回覆处理与附近的传感器结合,并交付接入的包.

MO2Display样品提供了采样应用程序,实现了肌肉氧 ANT 配置文件.ANT通用界面无法用于观看面孔.低和高优先搜索时间为传感器与基本的ANT 无线电规范不同,以允许与设备上本土的ANT 行为进行互操作.这些限制在分别最大的30秒和5秒的时间.

## 突发数据

*自 API 级别 2.2.0*

爆发数据传输提供了一个机制,可以通过ANT通用频道在设备之间传输大量数据. 开发人员通过一个听众通知爆发传输/接收事件的成功/失败.一次爆发数据传输限制在最高8Kb的数据.

这种常见使用情况包括密钥验证或设备之间发送/接收配置数据.

采用`GenericChannelBurst`样本提供传输和接收爆发数据的示范.

## ANT+ 配置文件

*自 API 级别 2.2.0*

[Toybox.AntPlus](/connect-iq/api-docs/Toybox/AntPlus/)模块允许访问与用户设备相对的ANT+传感器的信息,而不需要您自行设置和管理ANT频道.所有ANT+传感器的管理,如添加,删除,启用,禁用和校准,都由用户通过设备的常规传感器菜单来管理.

传感器特定的听器的扩展被传输到构造器中,用于[AntPlus.Device](/connect-iq/api-docs/Toybox/AntPlus/Device/)的传感器特定的扩展.如果有给定的类型的传感器与用户设备相对,则可以使用传感器特定的getters或通过[Device.getBatteryStatus()](/connect-iq/api-docs/Toybox/AntPlus/Device/#getBatteryStatus-instance_function)等常见的数据getters获取有关传感器的信息.

如果指定类型的传感器已配对，且相应信息通过 ANT 更新，则会自动调用 [AntPlus.DeviceListener](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/) 及其扩展中的回调。例如，当传感器的 ANT 通道从已连接变为搜索状态，或用户切换设备当前连接的指定类型传感器 ID 时，会调用 [DeviceListener.onDeviceStateUpdate()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onDeviceStateUpdate-instance_function)。通过 ANT 接收到功率传感器的新信息时，也会调用类似的回调。

某些ANT+传感器,如自行车灯,具有特殊的回调.例如,回调应应应用于了解光网络的状态而不是[DeviceListener.onDeviceStateUpdate()](/connect-iq/api-docs/Toybox/AntPlus/DeviceListener/#onDeviceStateUpdate-instance_function).[AntPlus.LightNetwork](/connect-iq/api-docs/Toybox/AntPlus/LightNetwork/)类将允许您对自行车灯模式进行更改,因为有自行车灯与用户设备配对,并且光网络完全形成.

不是所有由 Monkey C 提供的 ANT+ 配置文件都会由每个连接 IQ 兼容的设备支持.
