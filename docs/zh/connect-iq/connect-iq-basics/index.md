---
title: "Welcome to Connect IQ"
---
<a id="welcome-to-connect-iq"></a>

# 欢迎使用 Connect IQ

Connect IQ 融合了三个 W：

- **Wear（穿戴）**：Garmin 设备不会放在桌面上或装在口袋里，而是佩戴在手腕上或安装在自行车上，帮助用户超越昨天。Garmin 在电源管理、活动跟踪以及 [ANT 和 ANT+](http://www.thisisant.com/developer/ant-plus/ant-antplus-defined/) 传感器方面的经验，让用户可以把更多时间花在使用产品上，而不是给设备充电。

- **Where（位置）**：位置感知是 Garmin 产品的核心。即使不与智能手机配对，这些设备仍然功能完善；而启动配对流程后，Garmin 设备将获得一系列全新的功能。

- **Ware（软件）**：Garmin 全新的 Connect IQ 应用系统允许开发者将应用扩展到 Garmin 可穿戴设备生态系统。


Connect IQ 产品结合了 Garmin 擅长的精美设计、位置感知和高效电源管理。开发者可以使用 Connect IQ SDK 为 Connect IQ 设备创建应用，并通过 Connect IQ 商店发布。

Connect IQ 应用使用 Monkey C 编写。Monkey C 是一种面向对象的语言，旨在简化应用开发，让开发者更多关注用户，而不是资源限制。它使用引用计数自动回收内存，减少手动管理内存的负担；资源编译器还可以导入字体和图像，并轻松将它们转换为适用于不同设备的资源。如果您使用过 Java™、PHP、Ruby 或 Python™ 等动态语言，应该会很快熟悉 Monkey C。

## 设备和 API

*API 碎片化*是应用开发者面临的挑战。如果开发者使用新 API，应用可能只能面向用户较少的新设备；如果只使用成熟 API，应用又无法利用新功能。

每款 Garmin 设备都有差异：屏幕可能是圆形或方形，输入方式可能是触摸或按键，传感器配置也会因设备用途而不同。Java 的“编写一次，随处运行”理念很有价值，但要创建一个覆盖所有 Garmin 设备的通用 API，最终必然只能取各设备能力的最低公分母。

Connect IQ API 不会掩盖设备差异，而是针对 API 所运行的设备进行设计。如果设备配备磁力计，就应提供磁力计 API；如果两台设备都配备磁力计，它们使用的 API 应保持一致；如果设备没有磁力计，就不会提供该 API。

要查看兼容 Connect IQ 的设备及其能力，请参阅[设备参考](/connect-iq/device-reference/#device-reference)。

## 系统级别与 API 级别

Connect IQ 使用两种版本编号：*API 级别*和*系统编号*。

*API 级别*是由三个数字组成（`major.minor.micro`）的版本号，表示设备可能支持的 API。并非每台设备都支持该级别的所有 API；但如果产品的 API 级别低于某个 API 所需级别，则一定不支持该 API。

*系统编号*是与最低 API 级别关联的单个数字，用于表示满足该最低 API 级别的一组设备。

运行最新系统的产品最有可能获得 API 更新和错误修复。未运行最新系统的产品也可能在必要时获得更新。

## Connect IQ 之道

Monkey C 的设计遵循以下原则，以便开发者更容易支持 Garmin 生态系统中的产品：

1. **开发人员选择支持哪些设备**

Connect IQ 应用可以运行在多台设备上，但支持哪些设备由开发者决定。并非每台设备都适合开发者的目标市场或用户体验，开发者不应被迫支持不需要的设备。

2.  **开发者工具应帮助开发者支持多种设备**

开发者工具会降低支持多台设备的负担。资源编译器会隐藏设备特有的调色板和方向，还允许按设备覆盖资源，从而在资源 XML 中指定不同的图像、字体和页面布局。模拟器只暴露目标设备支持的 API，让开发者可以测试设备兼容性。

3.  **相似设备应具有相似的 API**

设备并不完全相同，但通常具有共同能力。两款手表可能采用不同的显示技术，却都支持位图、字体、用户事件、[ANT/ANT+](http://www.thisisant.com/developer/ant-plus/ant-antplus-defined/) 和 [BLE](https://en.wikipedia.org/wiki/Bluetooth_low_energy)。开发体育应用的开发者不应为了支持多台设备而完全重写应用。

4. **在运行时,开发人员可以询问系统"有什么"**

Connect IQ 应用会在运行时与系统动态链接。如果应用引用了特定系统中不存在的 API，只有在实际引用该 API 时才会运行失败，而不是像 C++ 那样在加载时失败。应用可以利用 `has` 运算符先检查能力，从而避免调用不存在的 API。


## 概述

| 部分 | 说明 |
| --- | --- |
| [入门](/connect-iq/connect-iq-basics/getting-started/#getting-started) | 分步安装 Connect IQ 工具 |
| [您的第一个应用](/connect-iq/connect-iq-basics/your-first-app/#your-first-connect-iq-app) | 使用 Connect IQ 创建第一个表盘 |
| [应用类型](/connect-iq/connect-iq-basics/app-types/#app-types) | 了解表盘应用类型及其注意事项 |

有经验的 Connect IQ 开发者可能会疑惑，我们是不是想让“fetch”流行起来。答案是肯定的，毕竟它确实很“fetch”。
