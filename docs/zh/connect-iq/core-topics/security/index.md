---
title: "安全"
---
# 安全

Garmin 重视设备和服务的安全性。Connect IQ 的安全模型旨在帮助开发者和用户确认其设备及信息在 Garmin 生态系统中受到保护。

Connect IQ 对应用有三级信任度：

-   **受信任** - 已通过应用商店审核的内容。这些应用通过了 Garmin 审核流程，可以从 Connect IQ 商店下载。

-   **开发者** - 由个人开发者编写但尚未在 Connect IQ 商店发布的内容。此内容可用于测试，但不是官方发布的应用。

-   **不受信任** - 不应在设备上运行的内容。

这些信任级别使用数字签名强制执行。密钥管理已整合到应用商店、设备和开发者 SDK 中。目标是确保从开发者加载的应用仅来自两个来源——应用商店或可信开发者。

## 开发者密钥

Connect IQ 编译器要求在编译和打包应用时提供开发者密钥进行签名。该密钥必须是 RSA 4096 位私钥。

**注意：** 跟踪用于签署应用包的密钥非常重要。您需要使用相同的密钥来签署商店中现有应用的更新。如果您丢失了原始签名密钥，将无法更新您的应用。

## 使用 Visual Studio Code 生成密钥

如果您已有开发者密钥，可以选择 *File > Preferences > Settings > Monkey C*，将 *Monkey C: Developer Key Path* 设置为该密钥的路径。如果您没有开发者密钥，可以使用命令面板中的 *Monkey C: Generate Developer Key* 命令创建，也可以在使用 *Monkey C: Verify Installation* 命令验证安装时由 Monkey C 扩展自动创建。

## 使用 OpenSSL 生成密钥

如果您通过命令行操作，可以使用 [OpenSSL](https://www.openssl.org/) 生成 RSA 密钥。以下命令会生成有效的签名密钥。

```bash
> openssl genrsa -out developer_key.pem 4096
> openssl pkcs8 -topk8 -inform PEM -outform DER -in developer_key.pem -out developer_key.der -nocrypt
```

此开发者密钥 `developer_key.der` 通过 `-y` 命令行选项传递给编译器。

## 在设备上运行

应用必须经过签名才能在 Garmin 设备上运行，未签名的应用会被设备删除。Monkey C 工具会根据您的密钥自动为应用签名。您的应用将以开发者权限级别运行；由应用商店签名的应用则以受信任权限级别运行。后者的 Object Store 内容会加密，Connect IQ 开发者工具无法读取。

应用商店要求 IQ 文件经过数字签名。如果您的开发者密钥在上次上传后发生更改，上传将被拒绝。
