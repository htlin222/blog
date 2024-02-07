---
template: post
title: 在 Mac 中運作 Python 的正確方法
slug: pyenv-jupyter-in-macos
socialImage: https://i.imgur.com/XF57xPc.png
draft: false
date: 2022-08-22
description: 有時，我們只想寫一段小程式，並不需要 anaconda 的那一堆程式，這個時候開速搭建一個虛擬環境，為這個環境建立專用的 python 執行檔、及專用的 pip3，我們就可以輕量化自己的開發環境，下面介紹 pyenv - python 的虛擬環境管理方法。
category: tutorial
---

## 前言

如果之前沒有跟 python 打過交道，想在 mac 上安裝 python 時，首先就會面對到：我是誰？我在哪裡的問題，因為 mac 本身自帶一個 python3，如果在終端機裡執行的話，也是可以`print("hellow world")`，接著，我們可能就會想開心地利用系統的 pip 來安裝需要的套件，然後這樣做是很危險的，因此 pip 時不時會提醒你要不要更新 pip，但 mac 系統中其實有很多套件，可能需要比較低版本的 python 才能執行，更新可能造成不可逆的崩潰，因此，另外下載一個 python 來安裝是很重要的。

接下來就會面對另一個問題：要載哪個版本？最直覺得做法就是到[Python.org](https://www.python.org/downloads/)下載最新的版本，打開後下一步下一步安裝完成。另外也可以`brew install python3`來安裝。同時也會有人建議用 anaconda 來安裝一些必要的套件。到最後，我們的電腦裡就會充斥著各種版本的 python，大概像下面這張圖一樣：
![python_environment.png (492×487)](https://imgs.xkcd.com/comics/python_environment.png)

這時就容易會出現問題，常常我們建立了某個.py 檔，在某些情況下可以正常 import 某些 package，但當我們用其他軟體打開時，如 jupyter lab、pycharm 時，又會發現某些 pip 沒安裝到的套件。這樣我們的開發/學習環境變得很不固定，或是會重覆在不同地方安裝了相同的套件。

要解決這個問題，首先要學會兩組常用得指令：

- 在終端機中執行：

```sh
which python3
```

- 或在 python 中跑這組程式碼：

```python
import sys
print("User Current Version:-", sys.version)
```

- 這兩個方法都可以告訴我們目前的 python 環境 a.k.a.我是誰、我在哪裡。
  > 有時，我們只想寫一段小程式，並不需要 anaconda 的那一堆程式，這個時候開速搭建一個虛擬環境，為這個環境建立專用的 python 執行檔、及專用的 pip3，我們就可以輕量化自己的開發環境，下面介紹 pyenv - python 的虛擬環境管理方法。

---

## 方法

### 安裝 pyenv 跟 virtualenv

- 如果還沒安裝 homebrew 請參考[用 Homebrew 來安裝需要的 App 跟套件](https://htlin.site/posts/homebrew-basic)

```sh
brew install pyenv
brew install virtualenv
```

### 建立你的環境

- 安裝所需要的 python 版本，如 3.10.5

```sh
pyenv install 3.10.5
```

- 將安裝好的 python 版本指定到我們自行命名的環境中

```sh
pyenv virtualenv 3.10.5 "YOUR_PROJECT"
```

- 建一個資料夾，並進入

```sh
mkdir "YOUR_PROJECT"
cd "YOUR_PROJECT"
```

- 將這個資料夾指定成我們剛剛命名的開發環境

```
pyenv local "YOUR_PROJECT"
```

- 啟動開發環境

```
pyenv activate "YOUR_PROJECT"
```

### 如何在環境中使用 jupyter lab/notebook

如果你之前有用任何方法安裝過 jupyter 相關的套件，輸入`jupyter notebook`啟動 jupyter 時，會發現目前的 python 是 ipykernal，並不是我們指定環境下的 python，而且還會被自動安裝了很多套件，因此需要用 pip 的方式重新安裝 jupyter，並將目前環境的 python 指定為 python 的 kernel。

- 首先在開發環境中安裝一些常用的套件

```sh
# 先更新 pip 本身，確保是最新版
pip install --upgrade pip
# 安裝主角 jupyter
pip install pandas jupyter notebook matplotlib seaborn
# 最後安裝 ipykernal
pip install ipykernal
```

- 將環境的 kernel 指定為 jupyter 的 kernel

```
python -m ipykernel install --user --name $(pyenv version-name) --display-name "Python: $(pyenv version-name)"
```

- 這個時候，我們運行`jupyter lab`，就可以看到新增 notebook 時，就有我們環境的 kernel

### TL;DR，直接將上面提到的指令打包成 zsh 的 function

- 在`~/.zshrc`裡加入以下行：

```sh
function pyenv-new() {
  pyenv virtualenv $1 "$2"
  mkdir ~/$2
  cd ~/$2
  pyenv local $2
  pyenv activate $2
}
function pyenv-jupyter(){
  pip install --upgrade pip
  pip install pandas jupyter notebook
}
function pyenv-kernel() {
  python -m ipykernel install --user --name $(pyenv version-name) --display-name "Python: $(pyenv version-name)"
}
```

- 存檔後執行以程式碼來載入我們的變更

```sh
source ~/.zshrc
```

---

## 結果

```sh
# 創建一個環境
pyenv-new 3.10.5 "PROJECT_NAME"
# 安裝 Jupyter 相關的套件
pyenv-jupyter
# 安裝 ipykernel
pip3 install ipykernel
# 以目前環境的 python 為名創建一個 kernel
pyenv-kernel
# 開啟 jupyter lab
jupyter lab
```

---

## 討論

在初學 python 時，我是傻傻地裝了 anaconda 整組，它下載了很多套件，但當我寫好了一些 scripts，想在系統裡執行時，卻常常在 import module 時出錯，因此還要花很多時間跟環境變數奮鬥。但
開始用 pyenv 管理後，我想調用不同版本的 python，只要輸入`$HOME/.pyenv/versions/YOUR_PYENV_NAME/bin/python`即可，例如我可以在 automator 裡建立一個快速動作：[自動縮網址](https://bit.ly/3K9630K)，用快速鍵來觸發它。他需要用`pyperclip`、`bitlyshortener`這兩個套件，我只需要建立一個 automator 專屬的環境：

```sh
pyenv-new 3.10.5 automator
pip install pyperclip bitlyshortener
# 新增一個檔檔，貼入程式碼
touch ~/automator/bitly.py
```

- 如下圖輸入

```sh
$HOME/.pyenv/versions/YOUR_PYENV_NAME/bin/python $HOME/automator/bitly.py
```

![image_22-08-22_16_02_39](https://i.imgur.com/XF57xPc.png)

- 再把服務指定給某組快速鍵，就可以拿來縮網址了
  > 有用再來分享怎麼用 python 串 bitly api 來縮網址

---

## Reference

[Using Jupyter Notebook in Virtual Environments for Python Data Science Projects | by Christine Egan | Towards Data Science](https://towardsdatascience.com/jupyter-notebooks-i-getting-started-with-jupyter-notebooks-f529449797d2)
