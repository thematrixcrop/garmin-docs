---
title: "Requesting Reviews"
---
# 请求评价

作为开发者，您希望用户在拥有积极体验后评价您的应用。理想情况下，这应该是一个低摩擦的体验，以最大化留下正面评价的用户数量。

对于兼容的设备，留下评价的步骤如下：

-   请求评价令牌

-   从商店接收令牌

-   启动评价流程


## 请求评价令牌

为了防止骚扰用户，应用必须向应用商店请求执行评价请求的权限。应用商店验证多个因素，包括您是否最近向用户请求过评价，以及用户是否正在使用应用的最新版本。令牌请求可以通过 [WatchUi.makeReviewTokenRequest()](/connect-iq/api-docs/Toybox/WatchUi/#makeReviewTokenRequest-instance_function) 调用发出。此调用是异步的，您必须为此调用提供 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 回调以捕获响应。

## 接收令牌

当服务器响应您的评价请求时，您的回调将被调用并带有服务器响应代码和可选的评价令牌。响应代码如下：

| 响应 | 描述 | API 级别 |
| --- | --- | --- |
| REVIEW_REQUEST_STATUS_GRANTED | 请求已获批准，且已提供令牌 | 4.2.0 |
| REVIEW_REQUEST_STATUS_DENIED | 用户不符合评价要求 | 4.2.0 |
| REVIEW_REQUEST_STATUS_FAILED | 目前无法进行评价请求 | 4.2.0 |

如果您收到令牌，它应该在当天有效。

## 请求评价

当您准备好让用户评价应用时，您可以使用 [WatchUi.startUserReview()](/connect-iq/api-docs/Toybox/WatchUi/#startUserReview-instance_function) 配合令牌响应中的有效令牌。这将使用户进入评价流程。

## 提示

跟踪用户的正面和负面体验，仅当用户对应用有总体正面体验时才请求评价。骚扰用户留下正面评价可能导致他们留下负面评价，这会违背请您评价应用的初衷。
