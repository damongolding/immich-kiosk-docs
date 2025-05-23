---
title: Changing settings via URL
---

You can configure settings for individual devices through the URL. This feature is particularly useful when you need different settings for different devices, especially if the only input option available is a URL, such as with kiosk devices.

Example:
```http
https://{URL}?refresh=120&background_blur=false&transition=none
```

The above would set refresh to 120 seconds (2 minutes), turn off the background blurred image and remove all transitions for this device/browser.
