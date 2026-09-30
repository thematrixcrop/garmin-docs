---
title: "App Trials"
---
# 应用试用

*自 API 级别 2.3.0*

应用程序试验功能允许开发人员为他们的应用程序启用一个特殊的"试验"模式.通过在应用程序标签下添加一个新的标签来实现试验模式:

```xml
<iq:application entry="CommExample" id="a3421feed289106a538cb9547ab12095"
        name="AppName" launcherIcon="LauncherIcon" type="widget" minSdkVersion="1.3.1">
    <iq:trialMode enable="true">
        <iq:unlockURL>https://a.custom.unlock.url.info</iq:unlockURL>
    </iq:trialMode>
</iq:application>
```

解锁URL为应用商店提供一个终端点,以便将用户转移到您想要的应用程序"解锁"过程中.应用商店只会在上传您的 iq文件时接受安全的HTTPS-URL. 还要确保`trialMode`标签的启用属性设置为"真".

应用程序测试功能不支持手表面孔.

## 试用模式功能

Developers can query the [AppBase.isTrial()](/connect-iq/api-docs/Toybox/Application/AppBase/#isTrial-instance_function) method to determine if trial mode is active for their app, which 可用于 trigger special trial-mode functionality. App trials can also be time-based. The method [AppBase.getTrialDaysRemaining()](/connect-iq/api-docs/Toybox/Application/AppBase/#getTrialDaysRemaining-instance_function) should be overridden if you wish to support a time-based trial. [AppBase.getTrialDaysRemaining()](/connect-iq/api-docs/Toybox/Application/AppBase/#getTrialDaysRemaining-instance_function) must return a [Lang.Number](/connect-iq/api-docs/Toybox/Lang/Number/) that represents how many days are remaining in the trial, or null if time-based trials are to be disabled. If `0` is returned, the app will be prevented from running as the trial will be considered "expired".

By default, when an app is in trial mode, 系统将 push special trial notifications to the use either to inform them of how many days remain in their trial (if you've overridden [AppBase.getTrialDaysRemaining()](/connect-iq/api-docs/Toybox/Application/AppBase/#getTrialDaysRemaining-instance_function) to return a non-null value), or more generally that trial mode is active. If you do not wish for these notifications to be displayed to the user, you can override to return `false`.

## 试用应用服务器 API

一旦应用程序在商店中可用,用户可以通过点击商店中的解锁按来解锁应用程序.此时,应用商店将重定向到提供的解锁URL,并将这些参数添加到URL:

| 参数名称 |描述|
| --- | --- |
| `callbackUrl` |在您的侧面成功完成解锁过程后,必须调回的URL.|
| `appUnlockRequestId` |应用商店的内部解锁ID,可以由应用程序开发人员作为参考存储.|
| `appPageUrl` |应用程序详细介绍了要解锁的应用程序的页面. 在成功调用后,您应该转移到该页面,并要求用户下载用于其所需设备的解锁应用程序.|

这就是从应用商店到您的解锁URL的典型/完整调用样子:

```
https://your.unlock.url.com?appUnlockRequestId=1fe443e5-e76c-4e1c-b82b-2d084bd4c4fe
    &callbackUrl=https%3A%2F%2Fapps.garmin.com%2FappUnlock%3FappUnlockRequestId%3D1fe443e5-e76c-4e1c-b82b-2d084bd4c4fe
    &appPageUrl=https%3A%2F%2Fapps.garmin.com%2Fen-US%2Fapps%2Fbf1d944a-8a54-41fa-b7b0-24e651dc88e1
```

`callbackUrl`和`appPageUrl`都将通过URL编码形式.

如何使用`callbackUrl`

`callbackUrl`\-endpoint是安全的,只可使用 (单腿) OAuth1签名的请求.

您需要从应用商店的"开发者仪表板"中获取您的个人密钥/秘密凭证:

使用这些凭证,您只需创建一个标准的OAuth1请求,并将其发送到回调URL. (建议使用生成所有必要的OAuth-HTTP-Headers的框架.)

一个简单的Java示例 (使用Signpost图书馆和Apache的HttpClient) 将看起来像这样:

```java
HttpGet request = new HttpGet("callbackUrl");

OAuthConsumer consumer = new CommonsHttpOAuthConsumer("yourKey", "yourSecret");
consumer.sign(request);

HttpClient client = HttpClientBuilder.create().build();
HttpResponse response = client.execute(request);

System.out.println("Return code: " + org.springframework.http.HttpStatus.valueOf(response.getStatusLine().getStatusCode()));
```

预计将有以下退货代码:

| 状态代码 | 状态短语 |描述|
| --- | --- | --- |
| 200 | OK |应用程序被标记为"解锁".|
| 202 | Accepted |在成功的测试请求时 (见下面).|
| 401 | Unauthorized |如果授权 (OAuth) 是不正确的|
| 404 | 未找到 |当未找到所需解锁项时.|
| 409 | Conflict |当应用程序已经被标记为未锁在应用商店.|
| 410 | Gone |当应用程序成为孤儿时 (例如由于应用程序因GDPR而改变了所有权).|
| 510 | 内部服务器错误 |当发生意外错误时.|

您可以测试您的OAuth实现,而无需实际解锁请求.

通过你的身份证进行签名电话,并"测试"作为`appUnlockRequestId`.

```
https://apps.garmin.com/appUnlock?appUnlockRequestId=test
```

在收到202时,您可以确定您的OAuth处理正在工作.
