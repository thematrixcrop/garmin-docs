---
title: "How do I create an Audio Content Provider?"
---
# 如何创建音频内容提供者？

In 2018 Garmin has launched [multiple music capable wearable products](https://buy.garmin.com/en-US/US/c10002-p1.html?FILTER_FEATURE_MUSICSTORAGE=true&sorter=featuredProducts-desc) that allow users to leave their phone at home while they live their active lifestyle. Users can copy their music library directly to the device, or they can install a Connect IQ audio content provider app that acts as a bridge between the wearable and a Content Delivery Network (CDN).

*Audio content providers* enable third-party music services to deliver protected content. They can download content from a CDN via Wi-Fi directly to the watch, and act as a plug-in to the native media player. The content is encrypted before it reaches disk and decrypted during playback.

This post explains all the roles an audio content provider fills as well as the basics of implementation.

## Syncing Content to the Device

The Garmin music wearables interact with third party services by syncing content to the device for later playback. Users can launch the music app in a *sync configuration* state that lets them select what content they want to sync down to the device.

![](/connect-iq/resources/faq/sync_config.png)

The sync configuration user interface is defined by the audio content provider app. If you want your interface to be consistent with the device look and feel, the WatchUi.Menu2 class will do much of your implementation for you. If you want to tailor your look and feel to your brand, the `WatchUi.CustomMenu` provides much more flexibility.

Audio content provider apps can download content from a content delivery network via restful services directly to the watch. To get a song onto the watch the following should occur:

1.  The Connect IQ app uses a web API to request an audio file download

2.  The back-end service will serve up the audio file from the CDN

3.  The Connect IQ app will store the downloaded audio file on the watch's file system. As the data is written to the filesystem the content is encrypted; no un-encrypted content ever gets written to the filesystem.


![](/connect-iq/resources/faq/downloading_music_content.png)

Content downloaded by audio content provider apps are protected in several ways:

1.  Music apps and audio files stored in hidden folders on device

2.  Apps and audio files are encrypted using AES-128.

3.  App can destroy all downloaded and reset encryption key in a single call


Each application gets access to a storage sandbox. The storage files are encrypted and cannot be accessed by any other apps on the system.

The system will initiate a sync after the configuration step. The user will be prompted to start a sync, and if they agree the device will activate Wi-Fi, and upon connection 系统将 request the app create a `SyncDelegate`. The delegate is used to notify the app that a sync has started, has been stopped, and to determine if a sync is needed. In the `onStart` method of the `SyncDelegate`, the app needs to download the songs chosen in the sync configuration step. The app notifies the system of the sync progress, so the UI can be updated.

![](/connect-iq/resources/faq/sync_flow.png)

## Playback

Once the content is downloaded, the Connect IQ app can serve up the audio files to the native media player for playback. They can either use the media controls to control playback, or the user can select what content they want to listen to by entering the playback configuration mode of the app.

![](/connect-iq/resources/faq/playback_tree.png)

### Playback Configuration

When the user enters playback configuration, the app should allow them to change their audio content (playlists, books, or podcasts) within the app. The interface for playback configuration is defined by the audio content provider.

![](/connect-iq/resources/faq/playback_configuration.png)

This flow allows a user to control what songs to playback. The app can allow the user to choose from playlists or individual songs. The app can choose to start playback from this flow using `Media.startPlayback()`, or let the user select play from the media player.

### Playback

Playback is driven by the media player, but the app can decide what media player controls to display and what content to play. This is enabled by defining a `Media.ContentDelegate` class.

The content delegate is responsible for providing a `Media.ContentIterator` that provides the media player an iterator of `Media.ContentRef` instances that represent the downloaded songs. The content iterator also provides a `Media.PlaybackProfile` that allows customization of the media player interface. The skip buttons can be disabled on a per-song basis, and `Media.ContentRef` metadata will display in the player.

As audio is played, the media player sends playback information to the `ContentDelegate` that can be used for reporting purposes. The Connect IQ app can store the reporting information for each play of a song and send it back to the provider via web calls, or during sync.

## Hints and Tips

The `Toybox.Media` module provide tools for downloading and interfacing with audio content, but for keeping reporting information you should take advantage of the `Toybox.Application.Storage` module. The Connect IQ storage system provides a simple key/value system for persisting content, but values are limited to 8KB.

If you're storing lots of playback information, it is important to design an approach with these limits in mind. It's best to use a flat structure, as nested tables will quickly grow past your 8 KB limit.

![](/connect-iq/resources/faq/music_storage.png)

Store playlist ids (`Px`) in a top-level array using a known key ("playlists"). Give each playlist and song id (`Sx`) their own dictionary entry in Storage. In playlists store the song id references, and in song ids store the `ContentRef` id and an array of plays. This allows each song to use most of the storage for song playback storage.

## Conclusion

With Connect IQ audio content provide apps you can:

-   Deliver your protected content securely to Garmin music-enabled wearables via your existing content delivery web services

-   Provide your users the ability to listen to their favorite content from your service while leaving their phone behind

-   Provide an experience that integrates seamlessly with the native watch user interface

-   Maintain accurate royalty calculations by caching playback information in encrypted app storage to send to your reporting services via the web during sync
