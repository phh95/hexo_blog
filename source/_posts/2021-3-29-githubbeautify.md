---
title: 如何美化 GitHub 个人主页？          
date: 2021-3-29 22:00:00       
tags: GitHub             
---   
![GitHub G1 Chip octocat developer tools developer github app icon app i](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/github-g1-chip-octocat-developer-tools-developer-g.png)

Hello 大家好，我是安哥。   

之前在 GitHub 上找东西的时候，无意间看到一位网友的 GitHub 主页弄得很好看：   

![-w1399](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170226251048.jpg)

对比 GitHub 主页原来默认的样式，好了不止一点两点。附上 GitHub 主页默认的样式（不要误会，我并没有批评下图的作者的意思，这张图是我随便找的）：    

![-w1433](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170227763856.jpg)

我后来在网上搜了一下，发现实现这个效果也不难，依葫芦画瓢做了一下，效果如下。对比原版还是有点丑，但我已经挺满意了。   

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170222939614.jpg)

下面简单讲一下实现方法：   

在 GitHub 中创建一个与 GitHub ID 同名的仓库，例如我的 GitHub ID 为 phh95，因此创建的仓库名也为 phh95。   

由于我已创建了这个仓库，所以 GitHub 会在下方提示我已经创建过同名的仓库了。     

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170231333641.jpg)

创建时记得勾选从下方的「Add a README file」，在仓库中添加一个 README 的 Markdown 文件，等会我们就是要在这个文件中创建我们最终想要的个人主页样式。          

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170233210242.jpg)

创建仓库之后，点击右上角的个人头像，选择「Your profile」回到你的 GitHub 主页，你应该就可以看到 Hi there 👋 的文本内容。  

![-w1441](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170236462097.jpg)

点击右侧的编辑按钮，进入 REMDME 文件的编辑状态。   

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170237918890.jpg)

进入编辑状态，这个文档是使用 **Markdown 语法**来编辑的，如果你之前用过 Markdown 的话，编辑起来应该非常简单，如果你没接触过，想学的话十分钟也可以入门。  

只需要记住一点，上一行结束时，要在最末尾加多至少两个空格，才能实现换行，否则本来想分行的两行内容会连在一起。       

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170240040252.jpg)

编辑的过程中，点击上方的「**Preview changes**」选项卡，查看 Markdown 渲染后的效果。   

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170242625606.jpg)

这里着重说一下个人主页中一个看起来比较高级的「小牌子」的实现方法：   

![-w989](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170244947247.jpg)

上面这个小牌子其实是一个 **svg 图片**，生成这个 svg 图片需要用到一个在线工具「Shields.io」。   

![-w1461](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170249379436.jpg)

这是个外国的网站，我使用浏览器自带的翻译功能将其翻译成中文。  

前面我们说的小牌子，对应的英文为 **BADGE**，浏览器翻译为了「**徽章**」。   

以前面的小牌子「写作工具｜VS Code」为例，生成这个小牌子的方法如下：   

![](https://img.shields.io/badge/%E5%86%99%E4%BD%9C%E5%B7%A5%E5%85%B7-VS%20Code-blue)     

在网页 Shields.io 从左到右的三条短横线上填写：写作工具、VS Code、以及从颜色库中挑选一个颜色（这个颜色决定了第二个文本 VS Code 的背景色），最后点击右侧的「制作徽章」。   

![-w1461](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170252694705.jpg)

页面会返回生成的 svg 图片，效果如下图所示，觉得满意的话，复制页面地址栏的网址。   

![-w1461](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170255242593.jpg)

回到刚刚在编辑的 MD 文件中，先输入如下的字符，接着将刚才复制到剪贴板的链接 🔗 粘贴到英文括号 () 中，即以图片的形式将生成的 svg 图片添加到我们的 MD 文档中。     

`![]()`

![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170259342090.jpg)

将 README 文档切换到渲染视图，就可以看到我们想要的小牌子了。   

​这里只讲最简单的小牌子的制作方法，下图中的第四个 Git 小牌子制作起来会复杂一些些，其实就是在 svg 图片链接中加多了一个参数，感兴趣的朋友可以去下载别人的 GitHub 同名仓库进行拆解，这里不多讲。 
​
![-w1475](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/16170261067119.jpg)

Shields.io 官网： 
*https://shields.io/*  

如果你觉得我还是没讲清小牌子的用法，可以参考来自少数派上的一位作者 @SpencerWoo 写的文章《用 Substats 和 Shields.io 为你的个人主页定制动态数据小牌子》：    

![QRcode_A — a1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/qrcodea--a1.png)

以上，希望有帮助。 

本文首发于我的公众号「效率工具指南」，欢迎关注。   

![公众号尾部二维码 带logo](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/03/29/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)

