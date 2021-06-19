---
title: 用 Python 爬取 B 站视频弹幕，生成词云图     
date: 2021-6-19 18:00:00    
tags: [Python,爬虫,B站]             
---

Hello 大家好，我是安哥。

最近 B 站上有一个超火且非常洗脑的视频《蜜雪冰城主题曲MV 中英双语版》，视频中原来的歌词是「**你爱我，我爱你，蜜雪冰城甜蜜蜜**」。

看到有些网友在弹幕中把它篡改成「**你碍我，我碍你，你学编程天灭你**」，哈哈哈哈哈。

![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640.png)


为了弄清这些有趣的网友都在弹幕中说了啥，结合我之前学会的一点 **Python 爬虫**的知识，我用 Python 抓取了这个视频的所有弹幕，并将弹幕做成了如下的**词云图**：



词云图会自动将比较长的弹幕拆分成单个的词汇，之后根据单个词汇出现的频率来决定字号的大小，**字号越大，说明在弹幕中出现的频率越高**。



显而易见，出现次数最多的弹幕当属「**哈哈哈哈哈哈**」，即便长大了，听到这可爱的儿歌，看到这萌萌哒雪人，还是会觉得欢乐无穷。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210847892.png)



看完上面的词云图，如果你想知道词云图是怎么生成的，可以继续看下面的文章。



我也将用到的源码放到了 GitHub 上，有需要的朋友可以前往 GitHub 下载或复制代码，跟着我一起「**改代码**」，之后就能**随意抓取任意 B 站视频的弹幕了**。

![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210858176.png)  

**抓取 B 站视频弹幕 Python 代码**：   
https://github.com/phh95/pythonProject/tree/main/%E6%8A%93%E5%8F%96B%E7%AB%99%E5%BC%B9%E5%B9%95       

**制作词云图的流程**是这样的：先使用 **dammu_spider.py** 抓取视频的弹幕，得到一个**包含所有弹幕的 txt 文件**，再用 **词云.py** 将得到的 txt 文件导出为**词云图**。

## **01. 安装 Python**



打开 Python 官网，下载最新版的 Python3.9.5，它支持 Windows、macOS 和 Linux 系统。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210822844.png)



**Python 官网地址：**

*https://www.python.org/downloads/*



下载之后，打开 Python 安装程序，先勾选安装面板下方的「**Add Python 3.x to PATH**」，再点击「**Install Now**」，一直点下一步等待 Python 完成安装。



![图片来自网络](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210815165.png)



安装好 Python 之后，为了确认我们配置好了 Python 环境，可以按下 **Win + S** 打开 Windows 自带的搜索，输入 **cmd**，打开「**命令提示符**」。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210914887.png)



在打开的窗口中，输入 **python** 后按下回车，如果下方**返回 Python 的版本号**，例如我这里返回的版本号是 **Python 3.9.2** ，则说明 Python 已经配置妥当了。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210922315.png)



## **02. 安装 Python 开发工具**



写 Python 代码有很多工具，如下图所示，这些工具被统称为 **IDE**，这是英文 Integrated Development Environment 的缩写，中文翻译为「**集成开发环境**」。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210929929.png)



目前我用过的开发工具有两个，一个是社区版的 [**PyCharm**](http://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649912923&idx=1&sn=26e8b3b8a7a12983c03781551b67b96f&chksm=83a87276b4dffb60265b4cc75eab2fe6e7992e924ad2577e2ae45af9a0f2ba1202c27f2f4670&scene=21#wechat_redirect)，一个是微软推出的 VS Code。



如果你贪图方便的话，可以使用 PyCharm，而如果你用的是 VS Code，还需要给 VS Code 安装一个名为「**Python**」的插件。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210938217.png)



关于如何让 VS Code 的语言变成**中文**以及**安装插件**的问题，可以看之前我写过的一篇文章：



[**那些排版好看的公众号，都在偷偷用这些神器！**](http://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649881449&idx=1&sn=56c9016004fb2cb9960d8300c230a079&chksm=83abff44b4dc7652e2957e8dfd63c5bcca8f667731bc3fd1272aa908664695313b5e8ac0c6f7&scene=21#wechat_redirect)



**PyCharm 下载地址：**

*https://www.jetbrains.com/pycharm/download/*



**VS Code 下载地址：**

*https://code.visualstudio.com/*



## **03. 安装第三方 Python 库**



爬取 B 站弹幕的代码中，用到了 Python 没有内置的第三方库，为了不影响后续程序的运行，我们先安装一下这些第三方库：



- requests
- jieba
- wordcloud



安装这些库也非常简单，先打开 **Windows** 自带的「**命令提示符**」窗口，如果你用的是 Mac 电脑，则打开 **macOS** 系统自带的「**终端**」。



在命令提示符窗口中分别输入 **pip3 install + 第三方库的名称**，例如安装 wordcloud 库，就输入 **pip3 install wordcloud** 。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210950937.png)



如果程序可以顺利安装的话，在末尾会提示「**Successfully installed**」，至于最末尾出现的黄色警告文字「WARNING」，它是警告信息而不是报错，可以忽略它们。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210956347.png)



重复上面的操作，分别逐一安装三个第三方库 requests、jieba 和 wordcloud。



安装好第三方库之后，就可以开始修改代码啦。由于我在 Windows 电脑上用的 IDE 是 **VS Code**，下面就以 VS Code 来演示如何修改 Python 代码：



## **04. 修改抓取视频弹幕的代码**



在 VS Code 中使用快捷键 **Ctrl + N** 新建一份文档，刚开始我们需要确定我们想使用的编程语言。



点击文档第一行的蓝色文字「**选择语言**」，在弹出的输入框中输入 Python，点击下方返回的 Python。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211003487.png)



打开 GitHub 上的 danmu_spider.py 文件，用鼠标选中所有代码，右击选择「复制」。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211009372.png)



将复制的代码粘贴到 VS Code 中，我们最先要更改的代码是 **url 的值**，这个 url 指向的是**视频的弹幕地址**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211014766.png)



打开你想抓取弹幕的 B 站视频，按下 **F12** 键，打开**浏览器开发者工具**，切换到 **Network** 选项卡，再点击视频右侧弹幕列表的「**展开**」按钮。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211019811.png)



拖动开发者工具右下角的滑钮，将其拖拽到底部，接着点击弹幕列表底部的「查看历史弹幕」，随意选择一个日期。



例如我选择查看 **6 月 10 日**的弹幕，下方的开发者工具，会新增一个后缀为 **data=2020-06-10** 的记录。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210656010-20210619211025852.png)



点击这条记录，在右侧展开的 General >> **Request URL**，就可以看到获取这一天的所有弹幕的链接地址，**复制 Request URL 后面的 https 链接**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211031366.png)



将其粘贴到 VS Code 中的 url 处，并**将链接末尾的日期，替换为 {date}**，这是为了后面更灵活地指定抓取的弹幕所在的日期。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211035945.png)



url 上方的 range(5,18) 就可以用来指定我们想**抓取哪几天的弹幕**，这里的 (**5,18**) 意思就是我想抓取蜜雪冰城视频，从 6 月 5 号到 6 月 18 号这段时间的所有视频弹幕。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211041265.png)



至于你需要如何修改这两个参数，可以查看对应视频的**历史弹幕小日历**，来决定你要如何设置这两个参数。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211047607.png)



接着代码中要修改的参数是 **cookie**，这个参数记录了你的登录信息，因此只有在浏览器中**登录自己的 B 站账号**，才能找到这个我们需要的参数。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211055382.png)



cookie 同样可以在开发者工具面板中找到，在刚点开的 06-10 记录中，向下滑动右侧的滑动，就可以在 **Request Headers** 中看到 **cookie** 了。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211101597.png)



将 cookie 的值复制到 VS Code 中进行替换，原本有好几行的 cookie 值会变成一行：



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211107753.png)



这里复制的 cookie 值还有一个**小问题**，cookie 值里面包含了一个**英文的单引号**，这在 Python 中会让程序**误以为 cookie 值到这里就结束了**，实际上并没有。



为了解决这个问题，我们需要在这个单引号的前面加一个反斜杠 \ ，通过**转义**的方式，让它变成一个**普通的单引号**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211205866.png)



接着还需要**修改一下保存抓取的弹幕的 txt 文件的名称**，名称可以随你起，可以是中文，也可以是英文，记得名称末尾需要**带上格式后缀 .txt** 。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211215478)



修改好以上代码之后，右击鼠标，选择「**在终端中运行 Python 文件**」，Python 就会开始运行当前的代码。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211221472.png)



运行程序没有报错、顺利的话，你就可以得到一个包含有多个弹幕的 **txt 文件**，这个文件位于 **C 盘 >> 用户 >> 用户名** 路径下。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211227217.png)



如果你在这个路径下找不到 txt 文件，可以使用 Windows 自带的搜索，以 txt 文件名进行搜索，应该就可以找到这个文件。



## **05. 修改导出词云图的代码**



得到所有弹幕文本之后，我们还需要将得到的文本再作进一步的处理，才能得到最终想要的词云图。



同样在 VS Code 中新建一个文档，将 GitHub 上的 **词云.py** 的代码复制到文档中。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211239037.png)



首先修改第 6 行的代码，这里需要替换成你在上一步抓取得到的**弹幕 txt 文件的名称**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211244415)



接着来到第 25、26 行代码，这里需要设置导出的词云图所使用的字体，如果你用的是 Windows 系统，那么就使用第 25 行代码，将 26 行代码删除。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211248486.png)



如果你的电脑系统是 **macOS**，那么就使用第 26 行代码，将字体设置为苹果系统自带的**苹方字体**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210703139-20210619211253542.png)



接着来到文档的最后一行代码，这里用来**设置导出的词云图的名称**，同样图片的名称可以随意设置，最后别忘了加上**格式后缀 .png**。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619210703761.png)



修改好之后，同样右击鼠标，选择「**在终端中运行 Python 文件**」，运行修改好的 Python 程序。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211303730.png)



程序运行完毕，和之前导出的弹幕文件相同路径下，即 **C 盘 >> 用户 >> 用户名** 路径，就可以看到导出的词云图了。



![图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/640-20210619211309259.png)



以上，就是使用 Python 抓取 B 站视频弹幕、并导出词云图的过程了，仅说明了如何修改现成的代码，如果要说清代码是如何写出的，那就要花费更多的功夫了。

本文的代码参考了一个视频和一篇文章，在此也一并列出，感兴趣的朋友可以去看一下：


[1] 【Python】爬取B站弹幕，看哪个弹幕更有梗？，https://www.bilibili.com/video/BV1UK4y137Ye    

[2] [**Python爬取B站弹幕并制作词云图**](https://mp.weixin.qq.com/s?__biz=MzIwNDY5OTI2OA==&mid=2247484638&idx=1&sn=262ff53eaafb742387ab6e936cafef9c&scene=21#wechat_redirect)

## **欢迎关注**

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   


以上就是本次想和你分享的内容。
看完文章如果觉得对你有帮助的话，别忘了点击底部的「**点赞/在看**」鼓励一下我，谢谢。
