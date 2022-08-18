---
template: post
title: 終於讓我找到最省力的方法，在Anki中自動產生Note feat. Obsidian
slug: Obsidian to Anki
socialImage: /media/image-2.jpg
draft: true
date: 2022-08-18
description: 這個人很懶不想打介紹
category: tutorial
---

```json
{
    "apiKey": null,
    "apiLogPath": null,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOrigin": "http://localhost",
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
```
### Reference:
[与Anki联动的最佳实践？ · Discussion #21 · obsidianzh/forum](https://github.com/obsidianzh/forum/discussions/21)
[obsidian与anki联用教程 - 知乎](https://zhuanlan.zhihu.com/p/343080728)
[AnkiConnect - AnkiWeb](https://ankiweb.net/shared/info/2055492159)
[Custom syntax request · Issue #192 · Pseudonium/Obsidian_to_Anki](https://github.com/Pseudonium/Obsidian_to_Anki/issues/192)
```
^\- ((?:.+\n)*?)\n*[\t ]+((\- )?.+(?:\n(?:^.{4}(?<!<!--)(?<!\- ..).*))*)(?:\n^$)?
```
[Regex · Pseudonium/Obsidian_to_Anki Wiki](https://github.com/Pseudonium/Obsidian_to_Anki/wiki/Regex)
[regex101: build, test, and debug regex](https://regex101.com/)
