---
title: Image Endpoint
---

## `/image`

Kiosk exposes a `/image` endpoint that serves up a raw image rather then HTML.

### Accepted configuration
The endpoint accepts all of the "bucket" options (`album`, `person`, `date` and `tag`).

Examples:
- `http://{URL}/image?album=ALBUM_ID`
- `http://{URL}/image?person=PERSON_ID`
- `http://{URL}/image?date=last-30-days`
- `http://{URL}/image?tag=TAG_VALUE`
- `http://{URL}/image?tag=TAG_VALUE&album=ALBUM_ID&person=PERSON_ID`


### Use Cases
- As a background URL for your Home Assistant dashboards.
- As a REST endpoint to leveage the power of Kiosk's randomisation engine in your project.


## `/image/reload` :badge[New]{variant=note}

The `/image/reload` endpoint does the same as [`/image`](#image) but wraps the supplied image in a lightweight HTML page that auto reloads.

### Accepted configuration
The endpoint accepts the same options as [`/image`](#image) but also accepts:
- [`refresh`](/configuration/behavior/#refresh).
- [`image_fit`](/configuration/image-fit)

Examples:
- `http://{URL}/image/reload?album=ALBUM_ID`
- `http://{URL}/image/reload?person=PERSON_ID&refresh=10`
- `http://{URL}/image/reload?date=last-30-days`
- `http://{URL}/image/reload?tag=TAG_VALUE&image_fit=contain`
- `http://{URL}/image/reload?tag=TAG_VALUE&image_fit=cover&album=ALBUM_ID&person=PERSON_ID`


### Use Cases
- To create a simple slideshow on a old or low power devices e.g. a Kindle
