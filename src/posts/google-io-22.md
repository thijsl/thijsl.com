---
layout: base
title: OTT news at Google I/O 2022
date: 2022-05-15
description: OTT news at Google I/O 2022
tags: posts
---

# OTT news at Google I/O 2022

_I watched Google I/O 2022 so you don't have to! Below are crisp summaries of what Google has in store for us on Google TV, Android TV, Android Media and ExoPlayer._

Google I/O is Google's yearly developer conference. If you're a video streaming enthusiast, I'd recommend you to spend 30 minutes watching the presentations on "[What's new with Android TV and Google TV](https://www.youtube.com/watch?v=uZTOaKFnNTw)" and "[What's new in Android media](https://www.youtube.com/watch?v=Ba70zmFZgk0)". If you can spare two hours, you could watch the [keynote](https://io.google/2022/program/8e80903f-955f-4a5b-9118-b0ce4acdb0e6/) – or skim a [recap](https://www.theverge.com/2022/5/11/23066583/google-io-2022-biggest-announcements-pixel-watch-6a-buds-tablet).

The next two sections outline these first two presentations. Click the timecode in "the timeline" (below the video) to be taken to that part of the presentation. (_You might need to click the Play-button again on some devices to resume video playback._)

What's new with Android TV and Google TV (in 2022)
==================================================

This talk focuses on reviewing their recent progress, recapping Android 12, and highlighting the (upcoming) Android 13 updates.

https://www.youtube.com/watch?v=uZTOaKFnNTw

The timeline:

*   02:23: Majority of the newly activated devices run Google TV instead of Android TV. Remember: Google TV is the successor of Android TV.
*   02:40: Profiles & Kids profiles (personalized)
*   04:49: Virtual remote (with the Google TV app)
*   05:30: Cast from Google TV app (which aggregates content)
*   07:58: Android 12 recap (framerate switching; 4K UI; text scaling; kids profiles)
*   09:00: Android 13 (performance & quality; input & accessibility; multitasking)
    *   09:12: AudioManager (useful to find best audio format for the active device)
    *   11:09: HDMI state changes (e.g. pause content if HDMI device is no longer the active source)
    *   11:26: Keyboard layouts
    *   12:08: Audio description (system-wide preference that allows users to enable audio descriptions across apps through AccessibilityManager API)
    *   12:45: Picture-in-Picture (including expanded PiP and Keep-clear API)
    *   16:18: Media Controller Test
    *   16:45: MediaSession Validator

What's new in Android media
===========================

[Media3](https://developer.android.com/jetpack/androidx/releases/media3) is Android's collection of libraries related to media playback, including ExoPlayer. This talk focuses on the new Android 13 capabilities, as well as updates to ExoPlayer.

https://www.youtube.com/watch?v=Ba70zmFZgk0

The timeline:

*   00:50: New platform capabilities in Android 13
    *   01:06: HDR video (for use cases related to editing)
    *   04:52: Spatial Audio through the Spatializer Class
        *   ExoPlayer 2.17 has support for spatial audio
    *   07:20: MIDI 2.0
*   07:48: Media3 & ExoPlayer
    *   09:01: New features in ExoPlayer
    *   09:43: Performance Class and Jetpack Core Performance Library
    *   11:55: Using AV1 for content delivery

const spans = document.querySelectorAll('.post-content ul li span'); for (let i = 0; i < spans.length; i++) { const span = spans\[i\]; const videoId = parseInt(span.parentElement.parentElement.dataset.videoid); const youtubeId = (videoId == 0) ? "uZTOaKFnNTw" : "Ba70zmFZgk0"; const iframe = document.querySelectorAll('iframe')\[videoId\]; span.addEventListener('click', () => { let start = span.innerText.split(":"); start = parseInt(start\[0\])\*60+parseInt(start\[1\]); iframe.src = "https://www.youtube.com/embed/"+youtubeId+"?autoplay=1&start="+start+"&feature=oembed"; }); }

That's it. That's the post. 🏳