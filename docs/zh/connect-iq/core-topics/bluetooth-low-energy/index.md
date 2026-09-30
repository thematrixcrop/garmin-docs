---
title: "Getting Started with Connect IQ BLE Development"
---
# 开始 Connect IQ BLE 开发

![](/connect-iq/resources/programmers-guide/sculptor-monkey.png)

## 资源

在阅读这本指南时,开发人员会想让一些事情随时掌握.

-   **Connect IQ BLE API 文档**

接近[API 文档](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/)将是关键的 (特别是在本文的后期阶段).

-   **Nordic nRF52 DK**

连接智能团队已经开发了连接智能 SDK工具,以兼容[Nordic nRF52 DK](https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52-DK)蓝牙5和蓝牙网格开发套件 nRF52810.


-   **Nordic 文档 Page**

[Nordic 文档](https://www.nordicsemi.com/DocLib?Product=nRF52832%20core%20documentation&tags=nRF52832%2CnRF52+DK)链接到使用nRF52 DK所需的所有资源.

- **NRF连接机器**

[nRF Connect For Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)应用程序允许开发人员将新的固件闪存到板上,监控连接等.

-   **最新的 Connect IQ SDK**

为了使用BLE API,开发人员应该使用Connect IQ SDK的当前版本.

- **为nRF52 DK**的固件

需要将 nRF52 DK 的内存布局转移到不同的固件,以便与Connect IQ SDK 使用.

    -   [nRF52 DK 固件](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_1m_with_s132_6.1.1.zip)

    -   [nRF52840 Dongle 固件](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_usb_with_s140_6.1.1.zip)


** 注:** 9.2.0 之前的 SDK 使用:

    -   [nRF52 DK 固件（旧版）](https://developer.garmin.com/connect-iq/connectivity_2.0.1_115k2_with_s132_5.0.zip)

    -   [nRF52840 Dongle 固件（旧版）](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_usb_with_s132_5.1.0.zip)


## 窗口

在Windows平台的[nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)安装中,需要与nRF52DK通信的驱动程序和应用程序都包含在内.一旦安装了该应用程序以及必要的驱动程序,nRF52DK应由nRF Connect 用于 Desktop应用程序找到.

在此点,继续到[Using Nordic nRF Connect](#using-nordic-nrf-connect)节.

## Mac

在使用macOS时,开发人员需要手动安装JLink/JTrace USB驱动器,以便与nRF52 DK板通信.

一旦完成,开发人员需要安装Mac的[nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop).

在此点,继续到[Using Nordic nRF Connect](#using-nordic-nrf-connect)节.

## Linux

在使用Linux时,开发人员需要手动安装JLink/JTrace USB驱动程序,以便与nRF52 DK板通信.

-   32 位：[JLink\_6.22g - 32](https://www.segger.com/downloads/jlink/JLink_Linux_V622g_i386.deb)

-   64 位：[JLink\_6.22g - 64](https://www.segger.com/downloads/jlink/JLink_Linux_V622g_x86_64.deb)


一旦完成,开发人员需要安装Linux的[nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop).

![](/connect-iq/resources/programmers-guide/intent-launched.png)

## 使用 Nordic nRF Connect

需要安装 nRF 连接桌面应用程序.请参阅上述部分,查看适当的链接.

1. 一旦安装,启动应用程序. 点击*添加/删除应用程序*:


![](/connect-iq/resources/programmers-guide/nRFConnectLaunch.png)

![](/connect-iq/resources/programmers-guide/nRFConnectProgrammerLaunch.png)

![](/connect-iq/resources/programmers-guide/nRFConnectPrepMemoryLayout.png)

![](/connect-iq/resources/programmers-guide/nRFConnectWriteMemoryLayout.png)

## 找到COM端口

现在,电脑已经与电脑进行了正确的通信, 现在是时候弄清楚它使用哪个端口.

### 窗口

打开设备管理器，在 `Ports` 下找到您的设备。

这将像这样:

![](/connect-iq/resources/programmers-guide/nRFJLinkDevMgr.png)

通信端口在括号中列出.上面的示例中,通信端口是`COM4`. 复制此以后一步使用,然后继续到[Setting the COM Port](#setting-the-com-port).

### Mac

打开一个终端,输入:

```
ls /dev/tty.usbmodem*
```

然后点击`Tab`. 这应该列出`/dev/tty.usbmodem<number>`格式的端口信息 . 复制后一步使用并继续到[Setting the COM Port](#setting-the-com-port).

### Linux

打开一个终端,输入:

```
ls /dev/ttyACM*
```

然后点击`Tab`. 这应该列出`/dev/ttyACM<number>`格式的端口信息 . 复制后一步使用并继续到[Setting the COM Port](#setting-the-com-port).

###设置COM端口

在此时,nRF52正与开发环境进行正确沟通,并获取了电源端口信息.最后一步是设置Connect IQ模拟器中的COM端口.

1. 通过视觉工作室代码或命令行工具启动模拟器.

2,选择 *设置* > *BLE设置*

3. 在对话框中,输入来自[Finding the COM Port](#finding-the-com-port)的COM端口信息.


![](/connect-iq/resources/programmers-guide/nRFSetComPortSim.png)

1.  点击 *确定*。


开发人员可能会遇到错误.这可能是由于无法设置Connect IQ模拟器的COM端口.如果出现错误,开发人员可以检查一些事情.

1. ** 双重检查COM端口分配:** 按照[find](#finding-the-com-port)的步骤查看正确的环境,并确认COM端口.

2. **确保没有复制/粘贴错误:** 检查[setting the COM Port](#setting-the-com-port)时输入的信息.


如果一切顺利,Connect IQ模拟器将使用nRF52 DK板BLE芯片组来与Connect IQ蓝牙低能 API通信. 更多关于API的信息请参阅Connect IQ SDK中包含的[API documentation](/connect-iq/api-docs/)和`NordicThingy52`和`NordicThingy52CoinCollector`样本应用程序.

开发人员也可以检查自动阅读内存的选项框,以便每次采取行动时自动阅读设备内存.
