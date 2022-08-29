---
template: post
title: 如何使用Obsidian_to_Anki
slug: Obsidian-to-Anki
socialImage: /media/image-2.jpg
draft: false
date: 2022-08-29
description: 很久以前在一些重要考試就會斷斷續續地使用Anki作為快速複習的工具，關於Anki的好，網上已有太多教學。近幾年卡片盒學習法開始成為顯學，Obsidian又是其中最廣為人使用的軟體，而現在的問題是：如何利用外掛的搭配，讓我們隨時隨地可以複習我們在Obsidian中的重點，以下接紹插件：Obsidian_to_Anki
category: tutorial
---

## 背景
很久以前在一些重要考試就會斷斷續續地使用Anki作為快速複習的工具，關於Anki的好，網上已有太多教學。近幾年卡片盒學習法開始成為顯學，Obsidian又是其中最廣為人使用的軟體，而現在的問題是：如何利用外掛的搭配，讓我們隨時隨地可以複習我們在Obsidian中的重點，以下接紹插件：Obsidian\_to\_Anki

## 方法
### 前提：
* 本身對於Obsidian跟Anki的使用已經蠻了解的，這篇文給想要結合兩者的人。
### AnkiConnect
* AnkiConnect key: `2055492159`
* Config
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
### Obsidian_to_Anki
* Obsidian\_to\_Anki Settings: `Note type settings`>`Basic`
* 貼上下面這段表達式：
```
^\- ((?:.+\n)*?)\n*[\t ]+((\- )?.+(?:\n(?:^.{4}(?<!<!--)(?<!\- ..).*))*)(?:\n^$)?
```

* Defaults: Deck: `Obsidian`
* Hotkeys: Obsidian\_to\_Anki: Scan Vault: ` ⌘ ⌃ A `

## 結果
* 只要在製作筆記時以如下格式：`- 問題`，然後換行、縮排`- 答案`

![image_22-08-29_14_35_54](https://i.imgur.com/sfh1Pev.png)

* 按下設定好的快速鍵: ` ⌘ ⌃ A `
* 如此以來，我們即可以一鍵將大量的筆記轉成一則則可以馬上複習的Anki卡片
