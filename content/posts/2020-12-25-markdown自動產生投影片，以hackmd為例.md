---
template: post
title: markdown自動產生投影片，以hackmd為例
slug: medical-chart
socialImage: /media/image-4.jpg
draft: false
date: 2020-11-25T06:41:58.778Z
description: 最近老胡啟動了大哈讀書計畫，要花兩年的時間把整本3000多頁的大磚塊唸完。痛點在於每次做簡報很煩，要把教科書的內容變成投影片，會有很多機械式的剪貼跟排版。做到讓人覺得厭世。因此想研究如何在有限時間內用最快的速度做簡報(此方法也適用報paper)。
category: tutorial
tags:
  - tutorial
---
最近老胡啟動了大哈讀書計畫，要花兩年的時間把整本3000多頁的大磚塊唸完。痛點在於每次做簡報很煩，要把教科書的內容變成投影片，會有很多機械式的剪貼跟排版。做到讓人覺得厭世。因此想研究如何在有限時間內用最快的速度做簡報(此方法也適用報paper)。
在這樣的背景下，只要能把重點條列式地呈現出來就可以。第二順位就是要快。通常美編不重要，字不要太小就好。以下是摸索出的解決方法。主要使用hackmd的簡報功能。
1. 先把要的內容一次全部貼到hackmd裡
2. 段落變成條列式，自動分行加list：大致把每句話當成是一個重點，以全文搜尋Shift-Ctrl-R (Win) / Shift-Cmd-Option-F (Mac)  「. 」(句號加一個空格，如果單搜句號會搜到一些小數點)，取代為「. \n * 」(句號+一個空格+一個反斜線+n+一個空格+一個米字號+一個空格)；「\n」是markdown的換行；「* 」是項目符號
原來是 sentence1. sentence2. sentence3. 操作後就變：
sentence1.
* sentence2.
* sentence3.
*
再把頭尾的標號加一下，done，如果連這步都懶，可以研究正規表達式做更進階的搜尋(我還在學)
3. 其他部分依照官網說明做成簡報：https://hackmd.io/s/how-to-create-slide-deck-tw
我的建議是投影片標題用h3 即###
用---分頁
4. 貼圖片：Win+Shift+S(windows系統) / shift+ctrl+cmd+4 (Mac) 局部截圖然後直接貼上就可以傳到圖床去
5. Final touch：用 ==文字==把要的重點標起來、修文字；另外我會適度加一點emoji；用上面提到的取代功能把所有的is/are/can be 變成👉 
emoji 參考list
ikatyang/emoji-cheat-sheet: A markdown version emoji cheat sheet (github.com)
#結論：
實測大概一個單元一個小時內就可以變成一分完整的簡報，大哈一章大概8頁；step (1)+(2)5分鐘；step(3)10分鐘；step(4)5分鐘；step (5)比較花時間，要消化內容，大約30分鐘

![](https://i.imgur.com/Dqe2k33_d.webp?maxwidth=1520&fidelity=grand)
![](https://i.imgur.com/73RAMSy_d.webp?maxwidth=1520&fidelity=grand)
