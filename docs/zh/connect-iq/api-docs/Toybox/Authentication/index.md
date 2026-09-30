---
title: "模块：Toybox.Authentication"
---
# 模块：Toybox.Authentication

## 概述

Authentication 模块提供身份验证工具。

借助 Authentication 模块，Connect IQ 应用可以发起通过 Connect IQ 移动应用重定向的 OAuth 请求。

起始版本：

API 级别 3.3.0

## 命名空间下的类

类：[Message](/connect-iq/api-docs/Toybox/Authentication/Message/), [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)

## 常量摘要

### OAuthResultType

起始版本：

API 级别 3.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| OAUTH\_RESULT\_TYPE\_URL | 0 |
API 级别 3.3.0

|

OAuth 令牌在最后一步中的返回方式。

|

### OAuthSigningMethod

起始版本：

API 级别 3.3.0

| 名称 | 值 | 自 | 说明 |
| --- | --- | --- | --- |
| OAUTH\_SIGNING\_METHOD\_HMAC\_SHA1 | 0 |
API 级别 3.3.0

|

OAuth 请求的签名方式

|

## 实例方法摘要 [collapse](#)

- [**makeOAuthRequest**](#makeOAuthRequest-instance_function)(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>) as **Void**

    通过 Garmin Connect IQ Mobile App 请求 OAuth 登录。手机上将触发通知，点击通知后会显示一个网页视图，其中包含 `requestUrl`。

- [**registerForOAuthMessages**](#registerForOAuthMessages-instance_function)(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Authentication.OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)) as **Void**) as **Void**

    注册用于接收 OAuth 消息的回调。


## 实例方法详情

### **makeOAuthRequest(requestUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), requestParams as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>, resultUrl as [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), resultType as [Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module), resultKeys as [Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)&lt;[Lang.String](/connect-iq/api-docs/Toybox/Lang/String/), [Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)\>)** as **Void**

通过 Garmin Connect IQ Mobile App 请求 OAuth 登录

手机上将触发通知；点击该通知后会显示一个展示 `requestUrl` 的 Web 视图。如果用户授予应用权限，则 [registerForOAuthMessages()](/connect-iq/api-docs/Toybox/Authentication/#registerForOAuthMessages-instance_function) 注册的回调将使用 OAuth 响应中的 [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/) 进行调用。

参数：

- requestUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    要在 WebView 中加载以开始身份验证的 URL。

- requestParams — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    用于 `requestUrl` 的未进行 URL 编码的参数

- resultUrl — ([Lang.String](/connect-iq/api-docs/Toybox/Lang/String/)) —

    包含 `resultKeys` 的身份验证最终页面的 URL。

- resultType — ([Authentication.OAuthResultType](/connect-iq/api-docs/Toybox/Authentication/#OAuthResultType-module)) —

    用于指定结果格式的 OAUTH\_RESULT\_TYPE\_\* 值

- resultKeys — ([Lang.Dictionary](/connect-iq/api-docs/Toybox/Lang/Dictionary/)) —

    传递给回调方法的所需 OAuth 响应值。键映射到实际的 OAuth 响应键，值映射到 [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/) 数据的键。


示例：

```
using Toybox.Authentication;
using Toybox.System;

const CLIENT_ID = "myClientID";
const OAUTH_CODE = "myOAuthCode";
const OAUTH_ERROR = "myOAuthError";

// register a callback to capture results from OAuth requests
Authentication.registerForOAuthMessages(method(:onOAuthMessage));

// wrap the OAuth request in a function
function getOAuthToken() {
   status = "Look at OAuth screen\n";
   Ui.requestUpdate();

   // set the makeOAuthRequest parameters
   var params = {
       "redirect_uri" => "connectiq://oauth",
       "response_type" => "code",
       "client_id" => $.CLIENT_ID
   };

   // makeOAuthRequest triggers login prompt on mobile device.
   // "responseCode" and "responseError" are the parameters passed
   // to the resultUrl. Check the oauth provider's documentation
   // to determine the correct strings to use.
   Auth.makeOAuthRequest(
       "https://requesturl.com",
       params,
       "http://resulturl.com",
       Auth.OAUTH_RESULT_TYPE_URL,
       {"responseCode" => $.OAUTH_CODE, "responseError" => $.OAUTH_ERROR}
   );
}

// implement the OAuth callback method
function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[$.OAUTH_CODE];
        var error = message.data[$.OAUTH_ERROR];
    } else {
        // return an error
    }
}
// the OAuth service can now be used with a makeWebRequest() call
```

起始版本：

API 级别 3.3.0

### **registerForOAuthMessages(method as [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)(message as [Authentication.OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/)) as **Void**)** as **Void**

注册用于接收 OAuth 消息的回调。

每接收到一条 OAuth 消息，都会调用一次回调。如果调用此函数时有消息正在等待应用处理，回调会立即针对每条等待中的消息调用一次。

参数：

- method — ([Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/)) —

    对回调的引用，该回调必须接收类型为 [OAuthMessage](/connect-iq/api-docs/Toybox/Authentication/OAuthMessage/) 的 `data` 参数。


示例：

```
using Toybox.Authentication;

function onOAuthMessage(message) {
    if (message.data != null) {
        var code = message.data[OAUTH_CODE];
        var error = message.data[OAUTH_ERROR];
    } else {
        // return an error
    }
}
Authentication.registerForOAuthMessages(method(:onOAuthMessage));
```

起始版本：

API 级别 3.3.0
