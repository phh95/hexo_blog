---
title: Windows 写作三件套：PicGo + Typora + 腾讯云           
date: 2021-5-13 00:00:00    
tags: [写作,Markdown,编辑器]             
---

Hello 大家好，我是安哥。   

之前发过的一些排版不太一样的文章，我都是在 Mac 上的 Markdown 写作软件 MWeb 中写的，因为我在 MWeb 中配置了腾讯云图床，每次写好文章后，使用 MWeb 内置的上传服务，将图片上传到腾讯云图床之后返回 Markdown 链接，就可以很方便地将文章分发到多个平台，**不会出现图片丢失**的情况。

![image-20210512115719307](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512115719307.png)

但由于 MWeb 是苹果生态独有的软件，没有 Windows 版本，这就导致我得在 Windows 上寻找其他的替代工具，来达到同样的目的。

先列一下我在 Windows 上写文章用到的工具：

* 写作工具：Typora
* 图片上传工具：PicGo

## PicGo

在 Windows 上使用 Markdown 格式来写文章，首先还是要解决**图床**的问题，这里我同样选择将图片上传到腾讯云。不过不像 MWeb 集成了图片上传功能，在 Windows 上传图片需要用到一个工具：**PicGo**。

PicGo，是一个开源免费的图片上传 + 管理工具，支持 macOS、Windows 和 Linux 系统。PicGo 配合我们等下要用到的写作工具 Typora，可以很方便地将图片上传到腾讯云图床上。

PicGo 下载链接：
*https://molunerfinn.com/PicGo/*

![image-20210512135204123](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512135204123.png)

看到这里，如果你还是有点稀里糊涂，可以将 PicGo 上传图片的过程，类比成你将本地的图片上传到 QQ 空间相册的操作，只不过我们上传的图片是存放在腾讯云、而非 QQ 空间上。

![image-20210512135929312](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512135929312.png)

使用 PicGo 上传本地图片之前，需要先对 PicGo 进行设置：

点击 PicGo 左侧栏的图床设置，由于我想将图片存放到腾讯云，图床这里就选择「腾讯云 COS」，将 COS 版本的版本切换到 v5。

下面还有几个必须要配置的参数：

* SecretId
* SecretKey
* APPID
* 存储空间名
* 存储区域

获取这些参数，需要在浏览器中打开腾讯云的官网：https://cloud.tencent.com/   

![image-20210512140635868](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512140635868.png)

打开腾讯云登录账号之后，点击右上角的邮箱账号，选择「**账号信息**」，在打开的页面中，就可以看到 **APPID** 信息。

![image-20210512141722265](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512141722265.png)

再次点击右上角的邮箱账号，选择「**访问管理**」，在打开的页面中，点击左侧栏的「访问密钥 >> API 密钥管理」，将页面中「**SecretId**」和「**SecretKey**」的值分别填入 PicGo 中。

![image-20210512145215009](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512145215009.png)

接着点击左上角的「云产品」，在弹出的面板中，选择「**对象存储**」，进入腾讯云图床的管理页面。

![image-20210512142141761](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512142141761.png)

点击左侧的「存储桶列表」，可以看到自己创建的图床，对于首次使用腾讯云图床的朋友，需要点击「创建存储桶」，创建存放图片的图床。

创建存储桶时，需要注意的是，我们要将「访问权限」设置为「公有读私有写」，这里的「公有读」是为了之后你将图片链接用于文章中，别人可以看到图片的内容，而不是图片显示为已丢失，「私有写」则是说只有你才有上传图片或管理图床的权限。

![image-20210512143147439](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512143147439.png)

创建好存储桶之后，回到存储桶列表的首页，「**存储桶名称**」的值就是 PicGo 中的**存储名**，「所属区域」下的「**ap-地名拼音**」对应 PicGo 就是 PicGo 中的**存储区域**。

![image-20210512142732590](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512142732590.png)

到这里，我们就完成了 PicGo 的配置，点击下方的「确定」按钮，桌面右下角会弹出「设置成功」的提示。

![image-20210512145731492](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512145731492.png)

此时，你可以切换到 PicGo 左侧栏的「上传区」，将桌面的任意一张图片拖拽到中间的「上传区域」，如果桌面右下角弹出「上传成功」的通知，则说明我们已经将 PicGo 配置好了。

![image-20210512150257700](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512150257700.png)

PicGo 有两种上传图片的方式：

* 拖拽图片到上传区域上传，或者使用「点击上传」打开本地文件夹、上传图片
* 读取系统剪贴板图片后上传图片

第二种上传图片的方式，就是将图片复制到系统剪贴板之后，点击「剪贴板图片」或者使用快捷键 **Ctrl + Shift + P**，就可以将剪贴板的图片上传到腾讯云图床。

![剪贴板两种上传方式](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/%E5%89%AA%E8%B4%B4%E6%9D%BF%E4%B8%A4%E7%A7%8D%E4%B8%8A%E4%BC%A0%E6%96%B9%E5%BC%8F.png)

但说实话，使用 PicGo 这两种上传图片的方式，对于想一气呵成写文章的人来说，还不够高效和优雅。

基于此，我们可以配合写作工具 Typora，借助其内置的「**上传服务**」功能，将添加到 Typora 中的图片**自动上传到腾讯云图床**，替代使用 PicGo 手动上传图片的流程。

## Typora

Typora，是一款开源免费的 Markdown 编辑器，支持 Windows、macOS 和 Linux 系统。Typora 的编辑界面非常简洁，就像是一张白纸（我将软件背景设置为了深色）一样。

![image-20210512161747802](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512161747802.png) 

Typora 官网：
*https://www.typora.io/*

为了将我们在 Typora 编辑器中添加的图片自动上传到图床，我们需要对软件进行设置，点击左上角的「文件」，选择「偏好设置」。

![image-20210512162922041](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512162922041.png)

切换到「图像」选项卡，首先将顶部的「插入图片时」的「无特殊操作」更改为「上传图片」，即我们往 Typora 添加图片的同时，自动执行上传图片的操作。

![image-20210512163837665](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512163837665.png)

接着勾选下方的两个选项——「对网络位置的图片应用」和「插入时自动转义图片 URL」。

![image-20210512163753994](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512163753994.png)

下面的**上传服务**选择「**PicGo（app）**」，PICGo 路径选择 PicGo 应用安装的位置。

![image-20210512164010827](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512164010827.png)

完成这些设置之后，回到 Typora 的编辑界面，当你将电脑本地的图片拖拽到 Typora、或者往 Typora 粘贴剪贴板中的图片时，插入图片的同时，它就会自动上传到腾讯云图床，并返回图片对应的 Markdown 链接。

![添加图片的同时自动上传图片](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/%E6%B7%BB%E5%8A%A0%E5%9B%BE%E7%89%87%E7%9A%84%E5%90%8C%E6%97%B6%E8%87%AA%E5%8A%A8%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87.gif)

至此，借助 PicGo 和 Typora 的上传服务，我们在文章中添加的图片，就存放在我们自家的图床上。这样当你把在 Typora 中写好的内容粘贴到其他的内容平台时，就再也不会遇到粘贴过去图片丢失的问题了。

值得一提的是，写稿子的人最怕遇到的一件事情，可能是写到一半还没保存的文档一不小就丢失了，如果你想把 Typora 作为你的主力编辑器，记得**先打开它的「自动保存」**，预防扑街。

![image-20210512165707339](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/PicGo/image-20210512165707339.png)

以上就是本次想和你分享的内容。 
看完文章如果觉得对你有帮助的话，别忘了点击底部的「点赞/在看」鼓励一下我，谢谢。

我的年度目标：公众号达到 1 万关注
目前进度 9086/10000
需要得到你的支持
公众号千千万，在比特世界相遇也是一种缘分
还没关注的朋友，请点下面👇👇的卡片关注   

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/04/27/gong-zhong-hao-xiao-lu-gong-ju-zhi-nan.png)   






