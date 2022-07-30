---
title: 我拿回属于自己的笔记数据，怎么了？｜将印象笔记导入笔记软件Notion                             
date: 2022-7-30 22:48:00               
tags: [数字难民,Notion,笔记软件,GitHub]                                                                                   
--- 

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/c0efVv8C3-kzpsdNsWmqvQ)」         
文/彭宏豪     


Hello 各位好，我是小豪。  

今天的这篇文章，可以看成是前一篇文章《[印象笔记又开始作了？保住自己的笔记要紧](https://mp.weixin.qq.com/s/OO6PYsCkz3X7YBBTCc-h9w)》的后续，先说一下发出前一篇文章后发生的一些事情：  

* 公众号后台提供的旧版印象笔记下载链接🔗没多久就失效了，我猜测是被人举报了    
* 下载链接失效了还不是最糟糕的，失效了我可以重新分享出来，更恶心的是，有朋友反馈说，安装了旧版的应用后，首次启动会弹出下面的提示，不更新到最新版本，就无法查看存储在软件中的笔记

这不是明摆着不让用户用回旧版的应用吗？**为了阻止用户转移本应属于自己的笔记数据，真是什么下三滥的招都用出来**。       

![iShot_2022-07-30_11.11.37](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/ishot20220730111137.png)

不过，即便这样，我还是找到了另外一个从印象笔记导出 enex 格式的方法，这个方法稍微有一点麻烦，需要用到 Python 和命令行。       

这个方法用了国外一位开发者 vzhd1701 写的一个项目「evernote-backup」，有用 GitHub 的朋友也可以去到 GitHub 给这个项目点个 Star，共同感谢这位开发者的付出。   

GitHub 项目「evernote-backup」地址：   

https://github.com/vzhd1701/evernote-backup

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591866903796.jpg)

## 安装 Python      

使用 evernote-backup 导出笔记之前，请先在自己的电脑上安装 Python。   

Python 官网：  
https://www.python.org/   

使用 Mac 电脑的朋友，除了从 Python 官网下载安装包，也可以通过终端的 Homebrew 进行安装，具体方法，可以参考我之前发布的一篇文章：  

[学 Python 前的准备工作｜人生苦短，我选 Python](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649912923&idx=1&sn=26e8b3b8a7a12983c03781551b67b96f&chksm=83a87276b4dffb60265b4cc75eab2fe6e7992e924ad2577e2ae45af9a0f2ba1202c27f2f4670&token=1775818589&lang=zh_CN#rd)   

而使用 Windows 电脑的朋友，安装完 Python 之后可能还需要配置一下「环境变量」，如果不清楚如何配置，可以自行上网搜索。   

## 安装 evernote-backup   

安装好 Python 后，我们还要安装一下前面提到的项目，这里需要打开电脑上的终端（Mac）、Powershell（Windows）或者 CMD（Windows）。   

下面以 Mac 上的终端为例： 

打开终端，在终端粘贴下面的命令，按下回车键，就能完成导出工具的安装。    

```
pip install evernote-backup
```

除了使用 Python 的 pip 命令安装，开发者还提供了另外的安装方式——    

使用 Mac 的 Homebrew 安装： 

```
brew install evernote-backup
```


使用 pipx 安装：  

```
pipx install evernote-backup
```

不过由于 pipx 不是 Python 自带的命令，在使用之前，我们需要先安装这个命令：   

```
pip install pipx    
```

## 使用导出工具

这个导出工具的使用，分为 3 个步骤：   

* 初始化数据库
* 下载笔记数据
* 输出 enex 格式的文件   

我们一一来看：   


## 初始化数据库   

在终端粘贴下面的命令，并按下回车键。      

```
evernote-backup init-db --backend china
```

这里需要注意的是，这个项目既可以导出 Evernote 的笔记，也能导出中国版 Evernote 印象笔记的数据，如果是导出印象笔记，这个初始化数据库命令的末尾就要加上 `--backend china`，如果是导出 Evernote 的数据，就要把上面命令中的 `--backend china` 去掉。   


终端会提示让你**输入印象笔记的账户**和**密码**，按照提示输入即可，如果程序能顺利运行，终端最终会返回一句 Successfully initialized database for user。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591880882942.jpg)



但我在运行这个命令的时候，遇到了一个错误，报错信息如下：  

```
SSLCertVerificationError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1123)
```

这个我不确定是不是我开了代理的原因，不过在网友「无声」的帮助下，我找到了解决方法，在终端粘贴下面的命令：  

```
ln -s /etc/ssl/* /Library/Frameworks/Python.framework/Versions/3.9/etc/openssl
```

网友「无声」还给出了找到这个解决方法的出处，来自 stackoverflow：  

https://stackoverflow.com/questions/52805115/certificate-verify-failed-unable-to-get-local-issuer-certificate

如果你也遇到类似的问题，可以试着用上面的方法，如果还是不行，也可以尝试项目作者提供的另外一种方法，在终端粘贴下面的命令：  

```
/Applications/Python\ 3.9/Install\ Certificates.command      
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591885073911.jpg)

运行前面的命令解决遇到的这个问题后，再运行最初的初始化数据库的命令，顺利的话，电脑本地就会多出一个名为 `en_backup.db` 的文件。   


## 下载笔记数据

接着在终端粘贴下面的命令，并按下回车，就能同步拿到账号中的数据。   

```
evernote-backup sync
```

如果你的账号里有比较多的数据，这一步运行起来会花费较多的时间，如果刚好遇上你要关机或者出门，那么没关系，你可以随时终止这个命令的运行。  

因为这个工具支持**断点下载**，你可以在中途随时停止，之后重新运行这个命令，它会从上一次停止的地方继续下载，不需要重头再来。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591891303912.jpg)


## 输出 enex 格式的文件 

等到第二步完成之后，就可以将笔记数据下载为本地的 enex 文件了。   

在终端粘贴下面的命令，并按下回车： 

```
evernote-backup export output_dir/
```

等待程序走完，就会在本地生成一个名为 `output_dir` 的文件夹，里面就存放了我们导出的所有 enex 文件，如下图所示。   

需要说明的是，下图中每一个 enex 文件，实际上对应的是印象笔记中的每一个「笔记本」，如果你在笔记本里创建了多条笔记，那每个 enex 文件里就会包含多条笔记的。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591894673026.jpg)

得到所有的 enex 文件后，我试着将其中一个名为「得到 App 笔记」的 enex 文件导入 OneNote，导入后的效果如下：  

这个 enex 文件包含了我在使用「得到」App 阅读不同电子书划线、评论或转发的内容，导入的效果还能接受。  

我也终于拿回了本该属于我的数据。           

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/16591896552414.jpg)


## 将 enex 文件导入 Notion   

除了导入微软的 OneNote，我们还可以将 enex 文件导入笔记软件 Notion。   

Notion 默认不支持直接导入 enex 文件，但我们可以使用这位开发者写的另外一个工具「enex2notion」，这里的数字 2 是 to，即把 enex 导入 Notion。  

关于这个工具的使用，可以查看一位博主「Jerry Zhu」写的文章《[印象笔记近乎完美的迁移至Notion](https://imho.plus/form-evernote-to-notion/)》，这里就不复读了，他也写得很详细了：   


![QRcode_A — a1 -2-](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/07/30/qrcodea--a1-2.jpg)


## 写在最后

最后再来说说印象笔记这款产品：

它从最初是一款比较小众的产品，到后来被很多人自发安利（曾经还有一群人叫印象笔记布道师？），或是在微博评论区随处可见的 `@我的印象笔记`，变成好多人都熟知的笔记产品，可以说开头或者中间的发展阶段都很好。  

但不知道为什么后来就变成这样了呢：   

* 产品内无处不在的广告，付费的会员也会经常看到「提示你续费」的广告     
* 在国内抢注 Notion 的商标
* 产品功能越加越多，整成一个四不像     
* 新出的产品抄袭 flomo、Notion  
* 到最新的更改导出格式，阻止用户流失或转移数据  

我也不知道它咋变成了现在这个样子？       

看到这里，如果你知道身边的朋友有在用印象笔记的，不妨把这篇文章转发给 TA 们，有些用了多年印象笔记的用户，却对 TA 在用的产品变成这样浑然不知，想想也是非常可怕的一件事，对吧？    

**印象笔记，终于活成了自己最讨厌的样子。**    


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)         




 






