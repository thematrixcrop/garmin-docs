---
title: "Authenticated Web Services"
---
# 经过身份验证的 Web 服务

开发者可以使用许多通过 OAuth 提供访问控制的 Web 服务。Connect IQ 的 **Communications** 模块中有 OAuth API，允许小工具和设备应用进行经过身份验证的调用。

## OAuth 入门

OAuth 为开发者提供了一种标准的身份验证方式，以获取对 Web API 的访问权限。在应用可以访问 Web API 之前，开发者必须向服务注册该应用。注册期间您必须提供一个重定向 URL，用于检索凭据。注册后，应用将获得 `client id`（客户端 ID）和 `secret`（密钥），这些对于登录过程是必需的。

![](/connect-iq/resources/programmers-guide/oauth_flow.png)

要访问 Web 服务，应用必须对用户进行身份验证。为此，应用将用户的 Web 浏览器重定向到 Web 服务的身份验证页面，提供密钥、客户端 ID 和重定向 URL。服务对用户进行身份验证后，它将用户的浏览器重定向回客户端并提供访问令牌。然后可以在后续对 Web 服务的调用中使用访问令牌。

## OAuth 与可穿戴设备

OAuth 标准基于网络浏览器和移动应用的世界，但人们通常不想在手表上输入用户名和密码。Connect IQ 添加了一些新 API，允许您编写启用 OAuth 的应用：

| 操作 | 函数 | API 级别 |
| --- | --- | --- |
| 从 OAuth 2.0 Web 端点请求凭据 | [Communications.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Communications/#makeOAuthRequest-instance_function) | 1.3.0 |
| 从 OAuth 2.0 Web 端点请求凭据 | [Authentication.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Authentication/#makeOAuthRequest-instance_function) | 3.3.0 |
| 注册用户完成时接收 OAuth 凭据的回调 | [Communications.registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function) | 1.3.0 |
| 注册用户完成时接收 OAuth 凭据的回调 | [Authentication.registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Authentication/#registerForOAuthMessages-instance_function) | 3.3.0 |

[Communications.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Communications/#makeOAuthRequest-instance_function) 和 [Authentication.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Authentication/#makeOAuthRequest-instance_function) 调用用于实现 OAuth 1.0 和 2.0 标准的凭据输入步骤。在使用 `makeOAuthRequest` 调用时，请务必使用以下重定向：

| API | 重定向 |
| --- | --- |
| [Communications.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Communications/#makeOAuthRequest-instance_function) | `http://localhost` |
| [Authentication.makeOAuthRequest()](/connect-iq/api-docs/Toybox/Authentication/#makeOAuthRequest-instance_function) | `connectiq://oauth` |

调用时，用户将收到一条手机通知，表明您的应用想要登录到 Web 服务。点击此通知将用户带到 Garmin Connect 移动应用（`Communications.makeOAuthRequest()`）或 Connect IQ 商店移动应用（`Authentication.makeOAuthRequest()`）中的网页视图，他们可以在其中输入登录信息。

![](/connect-iq/resources/programmers-guide/oauth_notification.png)

在此过程中，Connect IQ 应用应显示一个页面，指导用户打开相应应用。用户完成凭据输入后，Connect 会将 `resultKeys` 选项中指定的令牌发送回来，并将用户引导回可穿戴设备。

![](/connect-iq/resources/programmers-guide/oauth_complete.png)

您的应用应调用 [Communications.registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function) 或 [Authentication.registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Authentication/#registerForOAuthMessages-instance_function) 以接收登录过程的结果。登录可能需要很长时间，小工具可能在用户完成登录步骤之前超时。如果您的应用在登录过程完成之前关闭，结果将在设备上缓存，直到下次您的应用调用 [Communications.registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Communications/#registerForOAuthMessages-instance_function)，此时结果将立即传递给您的回调。获得访问令牌后，您可以将其作为参数传递给 [Communications.makeWebRequest()](/connect-iq/api-docs/Toybox/Communications/#makeWebRequest-instance_function)。
