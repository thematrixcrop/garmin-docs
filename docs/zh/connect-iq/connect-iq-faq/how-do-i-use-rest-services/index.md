---
title: "How do I communicate with REST services?"
---
# 如何与 REST 服务通信？

连接IQ通信API是将可穿戴网络带到Garmin设备的API.

##蓝牙智能连接

由于所有通信都通过蓝牙智能 (您可能知道这为蓝牙LE或BLE) 连接进行,设备带宽有限.通过Connect IQ SDK传输数据的传输速度将低于1Kb/s,通常在400至800字节/s之间.从Twitter的API中抽取单个推文可能高达2.5Kb.我们将在罩杯下进行一些魔法,以最大限度地减少从手机传输到手表的数据量,但您可以快速看到如何抽取用户最后几条推文可能会耗时.

## 减少是更多的

如果您正在编写一个网络服务来返回您的Connect IQ应用程序将打电话,请考虑您真正需要在Connect IQ级别上拥有哪些信息.您可能只能使用Twitter的文本和 Tweet的用户名.现在您只需要将每条 Tweet 转移约250字节.

在[this](https://dev.twitter.com/rest/reference/get/search/tweets)Twitter API 页面上引用示例结果时,结果的推文的 JSON 将是:

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

使用您的网页服务分析和最小化数据到上述领域将导致一个更小的JSON对象:

```javascript
{
  "text": "Aggressive Ponytail #freebandnames",
  "username": "sean_cummings"
}
```

Limiting the data to just what 您需要 display, and use will result in a much faster communications transaction. Of course, writing and hosting your own web service can be a bit much for a simple, glanceable widget.
