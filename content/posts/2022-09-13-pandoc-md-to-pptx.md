---
template: post
title: 懶人必備！一行指令將文字轉ppt檔
slug: pandoc-md-to-pptx
socialImage: /media/md-to-pptx.png
draft: false
date: 2022-09-13
description: 每天做投影片的你，是否在剪貼中懷疑人生？有了pandoc後，只要一行命令，就可以將markdown文件轉成pptx格式，帥！
category: tutorial
---

## 一個指令自動生成投影片(.PPTX檔)
最近因為常常要準備投影片上課，這種投影片主就是從教科書弄內容出來，標題加條列式為主，並不需要許多太複雜的排版，但在弄排版就很花時間(怒怒)。雖然有很多markdown自動變成投影片播放的功能，但就不能套用自己常用的樣式風格，也不容易交換檔案。發現 [What? Slides? From Markdown? | by Peter Conrad | Medium](https://stymied.medium.com/what-slides-from-markdown-5239ed31e7ac)介紹了用pandoc轉檔的方式，因此去看了官方文檔整理如下。

## TL;DR

* 首先要下載pandoc [Pandoc - Installing pandoc](https://pandoc.org/installing.html)
* 我們要準備好markdown檔案(.md)，跟範本檔案(.pptx)，放在同一個資料，cd到資料夾下後輸入以下指令：

```shell=
pandoc 來源檔.md -o 投影片名.pptx --reference-doc 範本檔.pptx
```

範本檔可以下載我的簡單NEJM風： [blog/nejm.pptx · htlin222/blog](https://github.com/htlin222/blog/blob/master/static/media/nejm.pptx)，載好後打開母片編輯，對照下面的說明。


## 範本檔設計

打開一個空白的pptx檔案，編輯母片，重新命名每個版面配置，最主要有以下七種(少一個都不行，每個字都要一樣，大小寫也要一樣)
詳見： [Pandoc - Pandoc User’s Guide](https://pandoc.org/MANUAL.html)

### Title Slide

This layout is used for the initial slide, which is generated and filled from the metadata fields date, author, and title, if they are present.
意思是在你的mardkwon 文件最前面三行新增以下以`%`開頭的內容

```
%title
%author
%date
```

### Section Header

This layout is used for what pandoc calls “title slides”, i.e. slides which start with a header which is above the slide level in the hierarchy.
單獨一行的一級標題

```
# Section
```

### Two Content

This layout is used for two-column slides, i.e. slides containing a div with class columns which contains at least two divs with class column.
只要有以下語法，就可以實現兩欄效果，適合用來圖文搭配，如果要加入圖片的話，也是用markdown圖片的語法`![image title](image path)`：

```
## 預設都是二級標題開頭

:::: {.columns}
::: {.column}

左邊

- Bullet
- Bullet
- Bullet

:::
::: {.column}

右邊

- Bullet
- Bullet
- Bullet

:::
::::

```

### Comparison

This layout is used instead of “Two Content” for any two-column slides in which at least one column contains text followed by non-text (e.g. an image or a table).

```
## 預設都是二級標題開頭

:::: {.columns}
::: {.column}

Left

![]()

:::
::: {.column}

Left

![]()

:::
::::

```

### Content with Caption

This layout is used for any non-two-column slides which contain text followed by non-text (e.g. an image or a table).

```
## 預設都是二級標題開頭

一些字

|表格|表格|
|---|---|
|內容|內容|
```

或

```
## 預設都是二級標題開頭

一些字

![圖片]()

```

### Blank
This layout is used for any slides which only contain blank content, e.g. a slide containing only speaker notes, or a slide containing only a non-breaking space.
標題空白成## 然後加上加上註解，註解的寫法是用三個`:`後面加上`notes`，每頁都可以加上註解，個人會把reference都放在這個區域，到時候再貼上

```
##

::: notes
空白頁，到時候要放一張滿版大圖
:::
```

### Title and Content

This layout is used for all slides which do not match the criteria for another layout.
所有不符合上面規則的文件都會算成Title and Contnet，也是最常用的

```
## title

- point
- point
- point

```

## Last but not least

* 注意所有標題前後都要有空行，不然可能會排版出錯
* 可以新增其他排版嗎？不行，這些是程式設計一開始就規定好的
* 如果你也想要自己創一個模版，記得每一個上面提到的版式都要建(就算你最後沒有用到)，不然會報錯

