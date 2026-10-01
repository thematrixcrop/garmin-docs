---
title: "请求评价"
---
<a id="requesting-reviews"></a>
# 请求评价

作为开发者，您希望用户在获得良好体验后评价应用。理想情况下，评价流程应尽量简单，帮助更多用户留下正面评价。

在兼容设备上，用户留下评价的流程如下：

- 请求评价令牌
- 从商店接收令牌
- 启动评价流程

## 请求评价令牌

为了避免打扰用户，应用必须先向应用商店请求发起评价的许可。应用商店会检查多个条件，包括您是否近期已经向用户请求过评价，以及用户是否使用应用的最新版本。可以调用 [WatchUi.makeReviewTokenRequest()](/connect-iq/api-docs/Toybox/WatchUi/#makeReviewTokenRequest-instance_function) 请求令牌。该调用是异步的，必须传入 [Lang.Method](/connect-iq/api-docs/Toybox/Lang/Method/) 回调来接收响应。

## 接收令牌

服务器响应评价请求后，系统会调用回调，并传入服务器响应代码以及可能存在的评价令牌。响应代码如下：

| 响应 | 说明 | API 级别 |
| --- | --- | --- |
| `REVIEW_REQUEST_STATUS_GRANTED` | 请求已获批准，并已提供令牌 | 4.2.0 |
| `REVIEW_REQUEST_STATUS_DENIED` | 用户不满足评价条件 | 4.2.0 |
| `REVIEW_REQUEST_STATUS_FAILED` | 当前无法发起评价请求 | 4.2.0 |

如果收到令牌，该令牌应在当天有效。

## 发起评价

准备好让用户评价应用时，可以将令牌响应中的有效令牌传给 [WatchUi.startUserReview()](/connect-iq/api-docs/Toybox/WatchUi/#startUserReview-instance_function)。该调用会将用户带入评价流程。

## 建议

关注用户的正面和负面体验，仅在用户对应用总体满意时请求评价。反复打扰用户要求留下正面评价，可能导致用户留下负面评价，反而违背请求评价的初衷。
