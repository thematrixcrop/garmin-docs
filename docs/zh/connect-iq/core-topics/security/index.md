---
title: "Security"
---
# 安全

在 Garmin，我们专注于设备和服务的安全性。Connect IQ 的安全模型旨在为开发者和用户提供工具，让他们知道其设备和信息在 Garmin 中是安全的。

Connect IQ 对应用有三级信任度：

-   **受信任** - 已通过应用商店审核的内容。这些应用通过了 Garmin 审核流程，可以从 Connect IQ 商店下载。

-   **开发者** - 由个人开发者编写但尚未在 Connect IQ 商店发布的内容。此内容可用于测试，但不是官方发布的应用。

-   **不受信任** - 不应在设备上运行的内容。

这些信任级别使用数字签名强制执行。密钥管理已整合到应用商店、设备和开发者 SDK 中。目标是确保从开发者加载的应用仅来自两个来源——应用商店或可信开发者。

## 开发者密钥

Connect IQ 编译器要求在编译和打包应用时提供开发者密钥以进行签名。所需密钥必须是 RSA 4096 位私钥。

**注意：** 跟踪用于签署应用包的密钥非常重要。您需要使用相同的密钥来签署商店中现有应用的更新。如果您丢失了原始签名密钥，将无法更新您的应用。

## 使用 Visual Studio Code 生成密钥

如果您有开发者密钥，可以通过选择 *文件 > 偏好设置 > 设置 > Monkey C* 并设置 *Monkey C: Developer Key Path* 为其路径。如果您没有开发者密钥，可以使用命令面板中的 *Monkey C: Generate Developer Key* 命令创建一个，或者当您使用 *Monkey C: Verify Installation* 命令验证安装时，Monkey C 扩展会自动为您创建一个。

## 使用 OpenSSL 生成密钥

如果您从命令行工作，您可以使用 [OpenSSL](https://www.openssl.org/) 生成 RSA 密钥。以下命令将生成一个有效的签名密钥。

```bash
> openssl genrsa -out developer_key.pem 4096
> openssl pkcs8 -topk8 -inform PEM -outform DER -in developer_key.pem -out developer_key.der -nocrypt
```

此开发者密钥 `developer_key.der` 通过 `-y` 命令行选项传递给编译器。

## 在设备上运行

应用必须签名才能在 Garmin 设备上运行，未签名的应用将被设备删除。Monkey C 工具将根据您的密钥自动签署您的应用。您的应用将以开发者特权级别运行。由应用商店签名的应用以受信任特权级别运行。它们对象存储的内容将被加密，Connect IQ 开发者工具无法读取。

应用商店要求 IQ 文件经过数字签名。如果您的开发者密钥自上次上传后已更改，您的上传将被拒绝。
