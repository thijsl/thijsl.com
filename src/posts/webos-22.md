---
layout: base
title: webOS TV 22 - What's New?
date: 2022-07-03
description: webOS TV 22 updates.
tags: posts
---

LG released documentation on their latest webOS TV 22 operating system. So what should app developers take into account?

-   Versioning scheme
-   Simulators instead of emulators
-   VS Code instead of deprecated IDE
-   Chromium 87
-   No new formats / codecs supported

The LG webOS operating system (OS) versioning scheme is now using years. The previous OS version introduced in 2021 was called [webOS TV 6.0](https://ottball.com/webos-tv-6-0-whats-new/), but the new 2022 version is called webOS TV 22.

And, even though the new OS is called "webOS TV 22", its SDK is called [7.X.X](https://webostv.developer.lge.com/sdk/webos-tv-sdk/release-notes/).

webOS TV 22 no longer supports [emulators](https://webostv.developer.lge.com/sdk/tools/emulator/introduction-emulator/), and relies on [simulators](https://webostv.developer.lge.com/sdk/Simulator/introduction-simulator/) instead. Note that simulators don't support DRM, and that the audio and video specifications differ from real devices. Additionally, some native APIs aren't support on simulators.

The [webOS TV IDE is no longer supported](https://webostv.developer.lge.com/sdk/tools/ide/), and the VS Code extension should be used instead.

This version of webOS uses Chromium 87 instead of Chromium 79. The new user agent is listed below:

(You might want to check the relevant [Chromium release notes](https://developer.chrome.com/blog/new-in-chrome-80/).)

When comparing supported media formats between [webOS 22](https://webostv.developer.lge.com/discover/specifications/supported-media-formats/webos-22/) and [webOS 6.0](https://webostv.developer.lge.com/discover/specifications/supported-media-formats/webos-60/), it seems that no support for new codecs or formats has been added to webOS 22. The same statement is true for MSE and EME specifications, or DRM systems.

Interested in the changes visible to consumers? Check the links below.

-   <https://www.techweekmag.com/news/tv/webos-22-and-how-it-differs-from-webos-60/>
-   <https://www.gearrice.com/update/webos-22-proposes-big-changes-to-lgs-new-oleds-and-qneds/>
-   <https://beebom.com/lg-new-smart-tv-lineup-webos-22-ces-2022/>