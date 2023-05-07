---
title: 看不懂英文？这4个翻译软件总有一款能帮你｜谷歌翻译替代工具【效率工具指南】        
date: 2023-4-9 17:21:00    
tags: [Mac,效率工具,插件,AI]
---


本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/LtYmGgy9ovgbO0Um2v2c3g)」       
文/彭宏豪    


Hello 各位好，我是小豪。  

很久以前，我写过一篇汇总了多款翻译工具的文章《[不吹不黑，看懂外国网站的翻译工具都在这里了](https://mp.weixin.qq.com/s/7TfMWng00vkT2pudE_a1Aw)》，发表于 2021 年，随着时间的流逝，里面介绍的一些工具，现在看来有些「陈旧」，尤其是 ChatGPT 出现之后，它在**语言翻译**方面，也有惊人的表现，因此就着这个由来已久的话题，重新写一篇文章，希望下面分享的工具，能帮到有需要的朋友。    


## Bob

Bob 是一款 macOS 平台上的翻译和 OCR 软件，使用 Bob 的系统要求 macOS 10.13 以上，可从 Mac App Store 安装。    

Bob 最开始推出时，是完全免费的，后来作者把应用上架到了苹果电脑的应用商店 Mac App Store，可免费下载，但免费版每天的翻译次数是有限的，如果高频使用的话，建议花 50 块钱购入终身版，很香的。                 

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16808803007730.jpg)

Bob 内置的功能如下图所示：   

* 常规功能：划词翻译、输入翻译、剪贴板翻译    
* 高级一点的功能：截图翻译（截图 OCR + 翻译）、截图 OCR     

这里着重说一下「截图翻译」功能的使用场景，有时我们看到的英文内容是以图片的形式存在（或者处于**无法选中**的状态），不像文本内容可以直接复制后翻译，往常的做法可能是，在翻译工具中手敲一篇英文内容，或是借用第三方的 OCR 工具，先识别图片中包含的文本内容，再翻译识别后的内容。

而使用 Bob 的截图翻译功能，就可以**一步到位**，截取图片或无法选中的文本，就可以直接得到翻译后的结果。         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16808835345875.jpg)

打开 Bob 的设置面板，切换到「服务 >> 文本翻译」，可以看到 Bob 的翻译功能是基于内置的「系统翻译」和「金山词霸」。  

除此之外，我们还可以通过**安装插件**的方式，给 Bob 加入新的文本翻译服务。    

下图中的 OpenAI Translator 就是一个额外安装的**翻译插件**，可以实现在 Bob 中直接调用 ChatGPT（OpenAI API） 来翻译文本内容，而不是每次想翻译英文的时候，得专门打开 ChatGPT 的官网。                  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16808849646256.jpg)

下面是 Bob 安装了翻译插件后，在我们翻译文本内容时，它会在下方多出一个由 ChatGPT 返回的翻译结果。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810082459201.jpg)

这里多说一句，我相信，即便是 ChatGPT 在国内火得一塌糊涂，但应该还是有不少人觉得这东西和自己无关、或是这东西对自己没用……

有用和没用都是相对的，觉得没用，可能只是没有找到合适的使用场景，而这里说到的，**用 ChatGPT 将各种语言翻译为中文**，起到类似**谷歌翻译**的作用，就是一个非常好的应用场景。    

只不过这一切的前提是，你得先有一个 ChatGPT 账号。    


如果你也想给 Bob 安装翻译插件 OpenAI Translator，可以先从下面的网盘下载 Bob 翻译插件：         

**链接：https://pan.quark.cn/s/14e9ee1ca2cf**   

打开 Bob 设置面板，切换到「插件列表」，点击下方的「**安装插件**」，安装你从网盘下载到本地的翻译插件。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810095097431.jpg)

接着切换到「服务」选项卡，点击左下角的加号 + ，在列表中找到插件 OpenAI Translator 并单击，就能将其添加到上面的文本翻译服务中。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810097110208.jpg)

选中刚添加的文本翻译 OpenAI Translator 服务，需要在右侧的 API KEY 中填入 **OpenAI 的 API**，这个翻译插件才能正常工作。         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810098691860.jpg)

在浏览器打开下面的链接，登录 ChatGPT 账号，点击页面的「Create new secret key」，就能得到一个 API KEY，将生成的密钥粘贴到 Bob 中，就能使用 OpenAI Translator 插件来帮我们翻译各种内容啦。    

获取 OpenAI API Key：   
https://platform.openai.com/account/api-keys 


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810117072639.jpg)

**吃水不忘掘井人**，这里介绍的 Bob 翻译插件 OpenAI Translator，是由 GitHub 上一位开发者 yetone 开发的工具，如果这个工具帮到了你，你可以打开这个工具的 GitHub 页面，点亮右上角的 Star，对他表示感谢。    

GitHub 项目「bob-plugin-openai-translator」页面：    
https://github.com/yetone/bob-plugin-openai-translator      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810118843411.jpg)


## OpenAI Translator

前面说到，Bob 是 Mac 电脑专属的翻译工具，手里没有苹果电脑的朋友，也就无法用上 Bob 翻译插件 OpenAI Translator。   

不过看到这里，你也不用灰心，因为开发者 yetone 也考虑到了这种情况，为使用 Windows 系统的朋友，提供了 2 种用上这款应用的方式：   

* 浏览器插件
* 电脑客户端：支持 Windows 和 macOS 系统   

开发者 yetone 在 GitHub 项目的 Release 页面放了插件和电脑客户端的下载链接，如果你无法打开 GitHub，可以从下面的网盘下载对应的安装包。

**链接：https://pan.quark.cn/s/8eb19e458b52**

> 为方便各位找到自己需要的安装包，我在每个安装包前面都加上了标注，各位在使用的时候就不会不知道下载哪一个文件了。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810213693498.jpg)


浏览器插件目前已上架 Chrome 和 Firefox 浏览器插件应用商店，如果你可以打开 Chrome 应用商店，也可以直接从应用商店安装。   

而如果你使用的是微软的 Edge 浏览器，则可以从前面的网盘下载浏览器插件安装包，解压后再手动安装到 Edge 浏览器。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810124186750.jpg)


浏览器插件「OpenAI Translator」安装地址：  
https://chrome.google.com/webstore/detail/openai-translator/ogjibjphoadhljaoicdnjnmgokohngcc/related    


在浏览器安装了插件后，点击浏览器右上角的插件图标，在弹出的面板，同样需要在 API Key 输入框中填入 OpenAI 的 API Key。   

关于如何获取 API Key，可以参考上一部分介绍 Bob 插件的内容，操作是一样的。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810221649065.jpg)


配置好插件后，刷新页面，用鼠标**滑选**要翻译的内容，文本上方就会显示插件的图标，点击图标，会弹出一个面板，它就会调用 OpenAI 来为我们翻译选中的文本内容。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16808791530711.jpg)

电脑客户端的用法和 Bob 插件、浏览器插件的用法是类似的，这里就不再赘述。    

## 中英文对照翻译

除了直接翻译获得结果，目前市面上还有另外一种比较有特色的翻译工具，它在**得到翻译结果的同时，可以保留翻译前的内容**，即**中英文对照翻译**，这种就比较适合想学英语的人，或者是觉得翻译的结果不太理想，想对照看一下翻译前的英文。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810293108203.jpg)


就中英文对照翻译工具而言，我之前一直用的是浏览器插件「**彩云小译**」，这款插件最开始可以免费使用，用多了之后就会提示「彩云朵不足」，得升级为会员，才能享受不限次数的翻译服务。    

我去年买了一年的会员，整体使用下来还不错，就是受不了有 2 次在浏览器中弹出一些营销信息……           

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810289113842.jpg)

另外一款中英文对照翻译工具，则是前几天在网上看到的浏览器插件「**沉浸式翻译**」，这款插件上架到了 Chrome/Edge/Firefox 浏览器的应用商店，各位可以根据自己在用的浏览器去到对应的商店安装。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810299033143.jpg)

浏览器插件「沉浸式翻译」- Edge 浏览器安装地址：      
https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg     


沉浸式翻译插件**集成了多种翻译服务（翻译引擎）**，点击浏览器右上角的插件图标，选择「翻译服务」，在弹出的面板，可切换使用不同的翻译服务，包含：   

* 谷歌翻译  
* Deepl
* OpenAI   
* 微软翻译   
* 彩云小译   
* ……   

**图方便地话，选择「谷歌翻译」就好**，正好 Chrome 浏览器去年下掉了自带的「英翻中」功能，这个插件就很适合作为一个「补丁」，弥补 Chrome 浏览器缺少翻译功能的不足。   

如果是切换为其他翻译服务，例如 Deepl、OpenAI 或者彩云小译，在使用之前，需要去掉对应产品的官网，获取 API 或者 Token，在插件中配置之后，才能正常使用。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810302856098.jpg)

实测切换到 OpenAI，可能是因为 API 调用的限制，它**不能把整个网页一次性翻译为中文**，而是需要手动操作，点击英文末尾的「刷新」按钮，才能将未翻译的英文翻译为中文，使用体验不如谷歌翻译或者前面提到的彩云小译。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810309732371.jpg)

值得一提的是，点击沉浸式翻译插件面板右下角的「更多」按钮，可以看到它内置的其他功能：    

* 制作双语 Epub 电子书   
* 翻译本地 PDF 文件    
* 翻译 HTML/txt 文件     

有需要用到这些功能、或是感兴趣的朋友，可以自行点开尝试一下。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/04/09/16810311537491.jpg)


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)


## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png) 








