---
title: "如何与 REST 服务通信？"
---
# 如何与 REST 服务通信？

Connect IQ Communication API 将 Web 能力带到 Garmin 设备。不过，将 Web 服务暴露给 Garmin 设备时有一些细节需要注意。

## Bluetooth Smart 连接

由于所有通信都通过 Bluetooth Smart（也就是 Bluetooth LE 或 BLE）连接完成，设备带宽有限。通过 Connect IQ SDK 传输数据的速度低于 1 Kb/s，通常在 400 到 800 字节/s 之间。仅从 Twitter API 获取一条推文就可能超过 2.5 Kb。我们会在底层尽量减少从手机传到手表的数据量，但获取用户最近几条推文仍可能耗时。

## 少即是多

在 Connect IQ 应用与配套移动应用之间传输 JSON 响应或消息时，这句经典谚语再合适不过。如果您正在编写一个供 Connect IQ 应用调用、用于返回推文的 Web 服务，请考虑应用真正需要哪些信息。通常只需要推文文本和发布者用户名，这样每条推文只需传输约 250 字节。

参考 [Twitter API 页面](https://dev.twitter.com/rest/reference/get/search/tweets)中的示例结果，一条推文的完整 JSON 可能如下：

```javascript
{
  "coordinates": null,
  "favorited": false,
  "truncated": false,
  "created_at": "Mon Sep 24 03:35:21 +0000 2012",
  "id_str": "250075927172759552",
  "entities": {
    "urls": [

    ],
    "hashtags": [
      {
        "text": "freebandnames",
        "indices": [
          20,
          34
        ]
      }
    ],
    "user_mentions": [

    ]
  },
  "in_reply_to_user_id_str": null,
  "contributors": null,
  "text": "Aggressive Ponytail #freebandnames",
  "metadata": {
    "iso_language_code": "en",
    "result_type": "recent"
  },
  "retweet_count": 0,
  "in_reply_to_status_id_str": null,
  "id": 250075927172759552,
  "geo": null,
  "retweeted": false,
  "in_reply_to_user_id": null,
  "place": null,
  "user": {
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_sidebar_border_color": "C0DEED",
    "profile_background_tile": false,
    "name": "Sean Cummings",
    "profile_image_url": "http://a0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    "created_at": "Mon Apr 26 06:01:55 +0000 2010",
    "location": "LA, CA",
    "follow_request_sent": null,
    "profile_link_color": "0084B4",
    "is_translator": false,
    "id_str": "137238150",
    "entities": {
      "url": {
        "urls": [
          {
            "expanded_url": null,
            "url": "",
            "indices": [
              0,
              0
            ]
          }
        ]
      },
      "description": {
        "urls": [
        ]
      }
    },
    "default_profile": true,
    "contributors_enabled": false,
    "favourites_count": 0,
    "url": null,
    "profile_image_url_https": "https://si0.twimg.com/profile_images/2359746665/1v6zfgqo8g0d3mk7ii5s_normal.jpeg",
    "utc_offset": -28800,
    "id": 137238150,
    "profile_use_background_image": true,
    "listed_count": 2,
    "profile_text_color": "333333",
    "lang": "en",
    "followers_count": 70,
    "protected": false,
    "notifications": null,
    "profile_background_image_url_https": "https://si0.twimg.com/images/themes/theme1/bg.png",
    "profile_background_color": "C0DEED",
    "verified": false,
    "geo_enabled": true,
    "time_zone": "Pacific Time (US & Canada)",
    "description": "Born 330 Live 310",
    "default_profile_image": false,
    "profile_background_image_url": "http://a0.twimg.com/images/themes/theme1/bg.png",
    "statuses_count": 579,
    "friends_count": 110,
    "following": null,
    "show_all_inline_media": false,
    "screen_name": "sean_cummings"
  },
  "in_reply_to_screen_name": null,
  "source": "Twitter for Mac",
  "in_reply_to_status_id": null
}
```

通过 Web 服务解析数据，只保留上述字段，可以得到更小的 JSON 对象：

```javascript
{
  "text": "Aggressive Ponytail #freebandnames",
  "username": "sean_cummings"
}
```

只传输显示和使用所需的数据，可以显著加快通信过程。当然，对于一个只需快速查看信息的简单小组件，编写并托管自己的 Web 服务可能有些过于复杂。
