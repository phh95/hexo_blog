---
title: GitHub 搭配快捷指令，自动记录每天的起床时间                       
date: 2021-12-26 22:03:00               
tags: [GitHub,快捷指令]                                                                           
---  

Hello 各位好。

今天想和各位分享一个有意思的小项目——用快捷指令 App 和 GitHub，自动记录每天的起床时间。  

这个项目源于之前介绍过的 [running_page](https://mp.weixin.qq.com/s?__biz=MzAxMjY0NTY5OA==&mid=2649917925&idx=1&sn=08dc018b0d3e65be81c1b5bc8572ce18&chksm=83a88dc8b4df04dee5b2716977fc1dba3b56a4a6952a164198d6c448335a8b4c288568b4a23c&token=1842935800&lang=zh_CN#rd) 作者 @yihong0618 的另外一个项目「早起记录」，它可以实现的效果如下：  

每天起床关闭闹钟后，触发快捷指令 App 运行程序，在 GitHub issue 下面会生成一段话，包含**今天的气温、起床时间（具体到秒）、随机的一句诗**。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405091835253.jpg)

我觉得这个小项目挺有意思的，不仅可以记录每天起床的时间，还能体会到自动化程序在我们日常生活中的应用。 

在项目作者 @yihong0618 老师的指导下，我也顺利了弄出了相同的程序，从此就可以记录我这只懒猪🐷的起床时间啦：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405106317511.jpg)

原作者 @yihong 0618 项目地址：  
*https://github.com/yihong0618/2021/blob/main/get_up.py*      

我的起床时间项目地址：   
*https://github.com/phh95/get_up*   

下面是实现自动记录起床时间的过程：  

## 创建一个 GitHub 仓库   

在 GitHub 上创建一个仓库，名字可以随意取，这里我将仓库取名为 get_up。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405112684921.jpg)

## 复制代码 

从我的 get_up 仓库中复制 3 个文件，分别是：   

* .github/workflows 路径下的 `get_up.yml` 文件
* `get_up.py` 文件
* `requirements.txt` 文件    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405113468011.jpg)

## 修改代码  

打开复制的 `get_up.py` 文件，定位到第 11 行代码，你可以修改中间的「懒猪🐷起床啦，赶紧去跑步，上班不迟到。」，这里的语句，决定了最终在 issue 中生成的内容，你可以将它改为你喜欢的内容。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405116523398.jpg)

定位到第 50 行代码，如果你每天起床的时间早于 6 点，那就需要将 6 更改为更小的数字，例如 4 或 5，这样程序才会正常运行。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405118489432.jpg)

## 创建 issue 

点击切换到 issues 选项卡，接着点击页面右侧的绿色按钮 **New issue**，创建一个 issue。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405115411040.jpg)

创建 issue 时，需要填入 issue 标题和内容，填入的内容可参考下图👇：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405120509132.jpg)

## 获取 Token  

首先打开网页 `https://github.com/settings/tokens`，点击右上角的 Generate new token，生成一个新的 Token。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16327915810978.jpg)

生成 Token 时，有两个注意点，将 Token 的**有效期 Expiration** 设置为 **No expiration**(长期有效)，**勾选下面的所有复选框**，将所有权限都打开。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405123026874.jpg)

生成的 Token，是一长串英文和数字混合的字符串，点击右侧的复制按钮，复制到剪贴板。  

**注意：这个 Token 后面还要用到，最好将 Token 保存到本地的 txt 或 word 文件中。**  

打开仓库的 Settings 页面，左侧切换到 Secrets 选项卡，点击右上角的 **New repository secret**。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405124726993.jpg)

在打开的页面中，Name 输入 **G_T**，Value 粘贴刚复制到剪贴板的 Token。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405125338000.jpg)

## 获取 GitHub Actions ID 

打开电脑的**终端**（Windows 系统上叫做**cmd** 或者 **Powershell**），在终端中粘贴下方的语句。   

`curl https://api.github.com/repos/替换成你的GitHubId/这里替换成GitHub仓库名称/actions/workflows -H "Authorization: token 这里的中文替换成GitHub仓库的Token"`

粘贴之前，这个语句有 3 处需要替换：  

* 你的 GitHub ID
* 你的 GitHub 仓库名称  
* 你在前面操作中获得的 Token   

粘贴修改好的语句，按下 Enter 键，下方会返回 ID，这个 ID 会复制到本地的 txt 或者 word 中，等下会用到。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/16405151424900.jpg)

## 在手机上添加快捷指令 

前面说到，让程序自动运行的触发条件是，关闭手机闹钟。  

因此，我们还需要在手机上进行配置，如果你的手机是 iPhone，可以使用快捷指令 App，如果是安卓手机，可以使用 tasker。

关于 tasker 的配置，可以参考下面的文章：

https://chenzaichun.github.io/post/2021-09-21-github-action-trigger-by-curl-tasker/    

下面介绍 iPhone 上快捷指令 App 的配置： 

扫描下方的二维码，将快捷指令添加到 App 中。  

![QRcode_A — a1 -1-](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/qrcodea--a1-1.jpg)

除了扫描二维码，还可以将下面的链接复制到 Safari 浏览器打开。   

二维码 ➡️ 链接：https://www.icloud.com/shortcuts/703420fd5f2247a089a849f7849282c5  

添加快捷指令「早起时间 分享版」后，点击快捷指令右上角的三个小点点，进入快捷指令的配置页面。  

我们需要配置 4 个值： 

* GitHub_Name：填入你的 GitHub ID 
* Rep_Name：填入你创建的仓库名  
* GitHub_Token：填入前面获取的 Token
* Action_ID：填入前面从终端获得的 ID    

配置好 4 个参数后，回到「所有快捷指令」的页面，点击快捷指令「早起时间 分享版」，程序就会自动运行。     

![IMG_A97DB46CCFFE-1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/imga97db46ccffe1.jpeg)

稍等一小会，回到 GitHub 仓库的 issue 选项卡，在评论区就能见到程序运行后的结果。   

如果想让快捷指令在每次关闭闹钟后自动运行，可以切换到快捷指令的「**自动化**」页面，研究刚添加的快捷指令，在自动化里面创建一个同样的命令。  

![IMG_4AE19A6D2939-1](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/12/26/img4ae19a6d29391.jpeg)

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)      












