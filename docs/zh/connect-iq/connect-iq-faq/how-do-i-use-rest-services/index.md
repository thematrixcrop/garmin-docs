---
title: "How do I communicate with REST services?"
---
# How do I communicate with REST services?

The Connect IQ Communication API is the API that brings the wearable web to Garmin devices. However, there are some subtleties to how to expose a web service to a Garmin device.

## The Bluetooth Smart Connection

Because all of the communication takes place over a Bluetooth Smart (you may know this as Bluetooth LE or BLE) connection the device is bandwidth limited. Data transfers through the Connect IQ SDK will have a transfer speed less than 1 Kb/s, generally between 400 and 800 bytes/s. A single tweet being pulled from Twitter's API can be upwards of 2.5 Kb. We'll do some magic under the hood to minimize the amount of data that's transferred from the phone to the watch but you can quickly see how pulling a user's last few Tweets could be somewhat time consuming.

## Less Is More

This classic proverb couldn't be more true when considering JSON responses or messages between a Connect IQ app and a companion mobile app. If you are writing a web service to return tweets which your Connect IQ app will be calling consider what information you really need to have at the Connect IQ level. You can probably get away with only having the text of a Tweet and the username of the person who Tweeted said Tweet. Now you're looking at only having to transfer about 250 bytes per Tweet.

Referencing the example result on [this](https://dev.twitter.com/rest/reference/get/search/tweets) Twitter API page, a resulting Tweet's JSON would be:

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

Using your web service to parse and minimize the data down to the aforementioned fields would result in a much smaller JSON object:

```javascript
{
  "text": "Aggressive Ponytail #freebandnames",
  "username": "sean_cummings"
}
```

Limiting the data to just what you need to display, and use will result in a much faster communications transaction. Of course, writing and hosting your own web service can be a bit much for a simple, glanceable widget.
