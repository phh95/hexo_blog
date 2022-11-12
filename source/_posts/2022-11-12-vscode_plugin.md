---
title: 又一款VSCode神级插件Marp，用Markdown来做PPT【效率工具指南】     
date: 2022-11-12 12:30:00               
tags: [Markdown,PPT,插件,VSCode]                                                                               
---

本文首发于我的 [Newsletter「效率工具指南」](https://penghh.zhubai.love/posts/2203059185087090688)，欢迎订阅。     
 

Hello 各位好，我是小豪。    

今天这篇文章，想来介绍一款很久之前在一个视频中看到的工具——Marp，正如文章标题写的那样，这是一款基于 Markdown 来做 PPT 的工具。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16681792907364.jpg)

Marp 官网：  
https://marp.app/   

我最初是在 doyoudo 创始人 @展哥 的前端视频中看到这款工具的，左侧是 Markdown 语法，右侧是渲染得到的幻灯片。  

因为对这款工具比较感兴趣，我也注意到了软件左上角的名称，就把软件名记到了「幕布」里，想着有一天买了 Mac 也要试一下这款软件。           

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16681794054239.jpg)


然后就一直被我遗忘到了现在，但实际情况是，这款软件也能在 Windows 或 Linux 系统上使用，并不局限于 macOS 系统。   

今天要介绍的是 Marp 推出的 VS Code 插件——**Marp for VS Code**，在 VS Code 安装了这个插件后，意味着我们也可用 VS Code 来制作幻灯片了。    

说到这，不得不再次感慨 VS Code 的强大——除了不能生孩子，啥都能做。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16681820992253.jpg)


安装了 Marp for VS Code 插件后，不需要任何配置，就能直接做 PPT。      

点击 VS Code「文件」选项卡，选择「新建文件」，在弹出的面板，文件类型选择 **Marp Markdown**。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16681779123091.jpg)

选择 Marp Markdown 文件后，会新建一个下图的文件，开头有一个配置选项 `marp: true`，表示使用 Marp 来创建 PPT。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682174486364.jpg)

点击文件右上角的「预览」按钮，就可以在右侧看到第一个幻灯片页面。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682193869163.jpg)

上面空空如也，接下来就轮到我们用 Markdown 语法大展身手了：  

对于熟悉 Markdown 的朋友不用多说，就像是写文章一样来写 PPT。   

如果想要创建第二个页面，只要在末尾添加 3 个短横线 `-`，下方就会多出一张新的幻灯片。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682195202992.jpg)

不过，如果我们想要在幻灯片中插入图片，就会略微麻烦一些。   

直接插入的本地图片，渲染后会显示为丢失，解决的方法是先将本地图片**上传到网上（图床）**，再粘贴图片链接🔗，图片才能正常显示。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682199694760.jpg)


插入的图片会显示为原始的大小，如果图片比较大，会占据整个幻灯片页面，影响其他内容的展示。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682203088914.jpg)

要想解决这个问题，只需要在 Markdown 图片名称的位置，配置一下图片的宽度或高度：  

`w:300 h:300`  

这里的 w 和 h 分别是 width 和 height 的缩写，注意 **w 和 h 必须是小写**。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682203796142.jpg)


## 更改全局主题

Marp 渲染得到的幻灯片默认为白底蓝/黑字，如果你不喜欢默认的样式，可以在 Markdown 文件的开头，更改 theme 字段的值，来更改幻灯片的全局主题。      

theme 字段有 3 个值：  

* default（默认值，可省略）   
* uncover   
* gaia     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682207136574.jpg)

下图是 uncover 主题的效果，所有内容都**居中显示**，引用内容的样式从竖线变为双引号。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682210046434.jpg)

下图是 gaia 主题的效果，白色背景更改为**浅黄色**，有点像一些阅读类 App 的暖光/护眼模式，但我不确定这种颜色是否真的护眼……        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682211160349.jpg)

如果想用 gaia 主题**浅黄色的背景**，但又想像 uncover 主题那样，让内容**居中显示**，可不可以做到呢？   

——Yes！   

只要在文件开头的配置中，再添加一个 class 字段，值设置为 lead 即可。   

不过最终的效果还是有一点差别，添加了引用和无序列表样式的内容，还是会保持原来的靠左显示。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682214200719.jpg)

## 更换单个幻灯片的背景和文字颜色

前面设置的主题，属于**全局样式**，会影响到所有幻灯片的背景颜色。  

如果我们想自定义其中一个或多个页面的颜色，也是可以做到的。   

在想要更改幻灯片背景色的页面开头，加上 `<!-- _backgroundColor: 颜色-->` 字段，就可以更改页面的背景色。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682220926219.jpg)

这里的颜色可以是颜色的英文，例如上面的蓝色 blue，也可以是 rgb 值，这有点像是在写 CSS 样式了😂          

更换背景色之后，如果新的背景色与文本内容的颜色区分不明显，就会影响到文本内容的正常观看，这时就需要更改文字的颜色啦。   

更改文本内容的颜色，需要在下面多配置一个选项 `<!-- _color: 颜色-->`，就能自定义文本的颜色。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682224461487.jpg)
 
既然可以修改单张幻灯片的背景色，那有些人可能就会想到：可不可以更改所有幻灯片的背景色呢？   

也是可以的～只要在文件开头新增一个选项 backgroundColor，就能自定义所有幻灯片的背景色。   

当然，**页面单独设置的背景色会覆盖掉全局设置的颜色**，正如你在下图看到的，即便我们将全局的背景色更改为黄色，第二页还是维持了单独设置的蓝色。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682227116421.jpg)


## 将幻灯片导出为 PDF

最后，无论用 Marp 和 VS Code 来写 PPT 有多么好，最终还是要落回到地面，思考一个问题：如何把你做好的 PPT 分享给其他人？如何让你兼容更多的人或场景呢？   

还好 Marp 也为我们考虑到了，支持将渲染得到的 PPT 导出为 PDF 文件。   

方法如下：  

点击 Marp Markdown 文件右上角的 Marp 图标（三角形图标），在弹出的面板，选择「Export Slide Deck」，就可以将 PPT 导出为 PDF 啦～       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16682231746370.jpg)


## ⚠️注意事项     

如果你的 VS Code 安装了 Markdown 渲染插件 Markdown Preview Enhanced，需要先将这个插件「禁用」或是「卸载」，转而使用 VS Code 后来集成的 Markdown 预览功能，才能正常看到渲染后的 PPT 页面。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/11/12/16681795751416.jpg)


## 了解更多

基于 Marp 制作 PPT 的基本用法，就介绍到这里啦，如果你想更深入地了解 Marp 的用法，可以查看 连玉君 老师博客上的一篇文章：   

[用Markdown制作幻灯片-五分钟学会Marp（下篇）-M110b](https://www.lianxh.cn/news/521900220dd33.html)     



## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)     











