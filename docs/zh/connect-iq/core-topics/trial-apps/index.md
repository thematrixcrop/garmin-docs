---
title: "应用试用"
---
<a id="app-trials"></a>
# 应用试用

*自 API 级别 2.3.0 起支持*

应用试用功能允许开发者为应用启用特殊的“试用”模式。要启用试用模式，请在 `application` 标签下添加以下标签：

```xml
<iq:application entry="CommExample" id="a3421feed289106a538cb9547ab12095"
        name="AppName" launcherIcon="LauncherIcon" type="widget" minSdkVersion="1.3.1">
    <iq:trialMode enable="true">
        <iq:unlockURL>https://a.custom.unlock.url.info</iq:unlockURL>
    </iq:trialMode>
</iq:application>
```

解锁 URL 是应用商店将用户重定向到应用解锁流程的入口。上传 iq 文件时，应用商店只接受安全的 HTTPS URL。还要确保 `trialMode` 标签的 `enable` 属性设置为 `"true"`。

应用试用功能不支持表盘。

## 试用模式功能

开发者可以调用 [AppBase.isTrial()](/connect-iq/api-docs/Toybox/Application/AppBase/#isTrial-instance_function)，判断应用是否处于试用模式，并据此启用特殊的试用功能。试用也可以按时间限制。要支持按时间计算的试用，应重写 [AppBase.getTrialDaysRemaining()](/connect-iq/api-docs/Toybox/Application/AppBase/#getTrialDaysRemaining-instance_function)。该方法必须返回一个 [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/)，表示剩余试用天数；如果要禁用按时间限制的试用，则返回 `null`。返回 `0` 时，试用会被视为“已过期”，应用将无法运行。

默认情况下，应用处于试用模式时，系统会向用户推送试用通知。如果重写 [AppBase.getTrialDaysRemaining()](/connect-iq/api-docs/Toybox/Application/AppBase/#getTrialDaysRemaining-instance_function) 并返回非 `null` 值，通知会显示剩余天数；否则只会告知用户试用模式已启用。如果不希望向用户显示这些通知，可以重写相应方法并返回 `false`。

## 试用应用服务器 API

应用在商店上架后，用户可以点击商店中的解锁按钮来解锁应用。此时，应用商店会将用户重定向到你提供的解锁 URL，并向 URL 添加以下参数：

| 参数名称 | 说明 |
| --- | --- |
| `callbackUrl` | 您的解锁流程成功完成后必须调用的 URL。 |
| `appUnlockRequestId` | 应用商店内部的解锁 ID，开发者可以将其保存为参考。 |
| `appPageUrl` | 要解锁的应用详情页。成功调用 callback URL 后，应将用户重定向到此页面，并提示用户为目标设备下载已解锁的应用。 |

因此，应用商店向解锁 URL 发出的典型完整请求如下：

```
https://your.unlock.url.com?appUnlockRequestId=1fe443e5-e76c-4e1c-b82b-2d084bd4c4fe
    &callbackUrl=https%3A%2F%2Fapps.garmin.com%2FappUnlock%3FappUnlockRequestId%3D1fe443e5-e76c-4e1c-b82b-2d084bd4c4fe
    &appPageUrl=https%3A%2F%2Fapps.garmin.com%2Fen-US%2Fapps%2Fbf1d944a-8a54-41fa-b7b0-24e651dc88e1
```

`callbackUrl` 和 `appPageUrl` 都会以 URL 编码形式传入。

## 使用 `callbackUrl`

`callbackUrl` 端点受到保护，只能通过使用单方 OAuth 1 签名的请求调用。

您需要从应用商店的 Developer Dashboard 获取专属的 key/secret 凭证。

使用这些凭证创建标准 OAuth 1 请求，并将请求发送到 callback URL。建议使用能够生成所需 OAuth HTTP header 的框架。

下面是使用 Signpost 库和 Apache HttpClient 的简单 Java 示例：

```java
HttpGet request = new HttpGet("callbackUrl");

OAuthConsumer consumer = new CommonsHttpOAuthConsumer("yourKey", "yourSecret");
consumer.sign(request);

HttpClient client = HttpClientBuilder.create().build();
HttpResponse response = client.execute(request);

System.out.println("Return code: " + org.springframework.http.HttpStatus.valueOf(response.getStatusLine().getStatusCode()));
```

可能返回以下状态码：

| 状态码 | 状态短语 | 说明 |
| --- | --- | --- |
| 200 | OK | 请求成功，应用已在商店中标记为该用户已解锁。 |
| 202 | Accepted | 测试请求成功（见下文）。 |
| 401 | Unauthorized | OAuth 授权不正确。 |
| 404 | Not Found | 找不到请求的解锁项。 |
| 409 | Conflict | 应用商店正在将该应用标记为已解锁。 |
| 410 | Gone | 应用已成为孤立应用，例如因 GDPR 导致应用所有权变更。 |
| 510 | Internal Server Error | 发生意外错误。 |

无需实际的解锁请求，也可以测试 OAuth 实现。

使用您的凭证发起签名请求，并将 `appUnlockRequestId` 设为 `test`：

```
https://apps.garmin.com/appUnlock?appUnlockRequestId=test
```

收到 202 响应时，即可确认 OAuth 处理正常工作。
