---
title: "Getting Started with Connect IQ BLE Development"
---
<a id="getting-started-with-connect-iq-ble-development"></a>
# 开始 Connect IQ BLE 开发

![](/connect-iq/resources/programmers-guide/sculptor-monkey.png)

## 资源

阅读本指南时，建议准备好以下资源。

-   **Connect IQ BLE API 文档**

    请将 [API 文档](/connect-iq/api-docs/Toybox/BluetoothLowEnergy/) 放在手边，尤其是在本指南后面的步骤中。

-   **Nordic nRF52 DK**

    Connect IQ 团队已经让 Connect IQ SDK 工具兼容 [Nordic nRF52 DK](https://www.nordicsemi.com/Software-and-Tools/Development-Kits/nRF52-DK) Bluetooth 5 和 Bluetooth mesh nRF52810 开发套件。

-   **Nordic 文档页面**

    [Nordic 文档](https://www.nordicsemi.com/DocLib?Product=nRF52832%20core%20documentation&tags=nRF52832%2CnRF52+DK)提供了使用 nRF52 DK 所需的全部资源链接。

-   **nRF Connect for Desktop**

    [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) 可用于将新固件写入开发板、监控连接等。要让开发板与 Connect IQ Simulator 正常配合，必须安装此软件。

-   **最新的 Connect IQ SDK**

    要使用 BLE API，应使用当前版本的 Connect IQ SDK。

-   **nRF52 DK 固件**

    nRF52 DK 的内存布局需要刷入专用于 Connect IQ SDK 的固件。开发环境所需的固件如下：

    -   [nRF52 DK 固件](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_1m_with_s132_6.1.1.zip)

    -   [nRF52840 Dongle 固件](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_usb_with_s140_6.1.1.zip)


    **注意：** 对于 9.2.0 之前的 SDK，请使用：

    -   [nRF52 DK 固件（旧版）](https://developer.garmin.com/connect-iq/connectivity_2.0.1_115k2_with_s132_5.0.zip)

    -   [nRF52840 Dongle 固件（旧版）](https://developer.garmin.com/downloads/connect-iq/connectivity_1.0.0_usb_with_s132_5.1.0.zip)


## Windows

Windows 版 [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop) 的安装包包含与 nRF52 DK 通信所需的驱动和应用。安装应用及必要驱动后，nRF Connect for Desktop 应能找到 nRF52 DK。

接下来请继续阅读[使用 Nordic nRF Connect](#using-nordic-nrf-connect)部分。

## Mac

在 macOS 上，需要手动安装 JLink/JTrace USB 驱动，才能与 nRF52 DK 开发板通信。请下载并安装适用于 Mac 的 Segger JLink 安装包 [6.22g](https://www.segger.com/downloads/jlink/JLink_MacOSX_V622g.pkg)。

完成后，还需要安装适用于 Mac 的 [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)。

接下来请继续阅读[使用 Nordic nRF Connect](#using-nordic-nrf-connect)部分。

## Linux

在 Linux 上，需要手动安装 JLink/JTrace USB 驱动，才能与 nRF52 DK 开发板通信。请使用适用于 Linux 的 Segger JLink 安装程序下载并安装：

-   32 位：[JLink\_6.22g - 32](https://www.segger.com/downloads/jlink/JLink_Linux_V622g_i386.deb)

-   64 位：[JLink\_6.22g - 64](https://www.segger.com/downloads/jlink/JLink_Linux_V622g_x86_64.deb)


完成后，还需要安装适用于 Linux 的 [nRF Connect for Desktop](https://www.nordicsemi.com/Software-and-Tools/Development-Tools/nRF-Connect-for-desktop)。

![](/connect-iq/resources/programmers-guide/intent-launched.png)

<a id="using-nordic-nrf-connect"></a>
## 使用 Nordic nRF Connect

需要先安装 nRF Connect Desktop 应用。请参阅上面的平台说明获取相应链接。

1.  安装完成后启动应用，点击 *Add/remove apps*：


![](/connect-iq/resources/programmers-guide/nRFConnectLaunch.png)

![](/connect-iq/resources/programmers-guide/nRFConnectProgrammerLaunch.png)

![](/connect-iq/resources/programmers-guide/nRFConnectPrepMemoryLayout.png)

![](/connect-iq/resources/programmers-guide/nRFConnectWriteMemoryLayout.png)

<a id="finding-the-com-port"></a>
## 查找 COM 端口

开发板已经能够与计算机正常通信后，需要确定它使用的端口。

### Windows

打开设备管理器，在 `Ports` 下找到设备。

设备看起来类似这样：

![](/connect-iq/resources/programmers-guide/nRFJLinkDevMgr.png)

通信端口会显示在括号中。上面的示例使用 `COM4`。记下该端口，稍后设置时使用，然后继续阅读[设置 COM 端口](#setting-the-com-port)。

### Mac

打开终端并输入：

```
ls /dev/tty.usbmodem*
```

然后按 `Tab`。系统应以 `/dev/tty.usbmodem<number>` 格式列出端口信息。记下该端口，稍后设置时使用，然后继续阅读[设置 COM 端口](#setting-the-com-port)。

### Linux

打开终端并输入：

```
ls /dev/ttyACM*
```

然后按 `Tab`。系统应以 `/dev/ttyACM<number>` 格式列出端口信息。记下该端口，稍后设置时使用，然后继续阅读[设置 COM 端口](#setting-the-com-port)。

<a id="setting-the-com-port"></a>
### 设置 COM 端口

此时，nRF52 已经能够与开发环境正常通信，也已获得 COM 端口信息。最后一步是在 Connect IQ Simulator 中设置 COM 端口。

1.  通过 Visual Studio Code 或命令行工具启动 Simulator。

2.  选择 *Settings* > *BLE Settings*。

3.  在对话框中输入[查找 COM 端口](#finding-the-com-port)步骤获得的端口信息。


![](/connect-iq/resources/programmers-guide/nRFSetComPortSim.png)

1.  点击 *OK*。


如果遇到错误，通常是因为 Connect IQ Simulator 未能设置 COM 端口。此时可以检查以下事项：

1.  **再次检查 COM 端口分配：** 按照正确环境的步骤[查找 COM 端口](#finding-the-com-port)，确认端口是否正确。

2.  **确保没有复制或粘贴错误：** 仔细检查[设置 COM 端口](#setting-the-com-port)时输入的信息。


完成后，如果一切正常，Connect IQ Simulator 就会使用 nRF52 DK 上的 BLE 芯片组，根据 Connect IQ Bluetooth Low Energy API 与附近的 BLE 设备通信。有关 API 的更多信息，请参阅 [API 文档](/connect-iq/api-docs/)，以及 Connect IQ SDK 中包含的 `NordicThingy52` 和 `NordicThingy52CoinCollector` 示例应用。

还可以勾选 *Auto read memory*，让设备在每次执行操作时自动读取内存。
