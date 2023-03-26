---
title: 如何批量导出飞书文档？【效率工具指南】     
date: 2023-3-26 14:47:00               
tags: [数据迁移,飞书,在线文档,飞书文档]                                                                                     
---

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/eTAs8T5m8YVYwH9hHQHzug)」   
文/彭宏豪    


Hello 各位好，我是小豪。   

最近飞书开了一年一度的大会「春季未来无限大会」，开会的时候是上班时间，老实说我没看，也没有怎么关注……      

不说大会，来说说飞书中和个人用户更密切相关的一项应用——飞书文档。   

今年应该是飞书「商业化」的关键之年（用户养肥了可以开始收钱了），在飞书官网可以看到一个「版本对比｜飞书」的页面，如下图，列出了不同版本的价格。   

照目前的付费方案看，飞书虽然集成了众多功能，但它并不按单项功能来卖，而是把所有功能打包到一起出售。

如果你只用其中的「飞书文档」，想拥有更大的云文档空间，只能升级到 50 元/人/月，一年最少 600 块，就买这一项功能，我猜很多个人用户就会觉得太贵了……              

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16797290297420.jpg)

飞书开始商业化之后，原先的免费版权益也有所调整，说我留意到的一个，云文档空间从原本的 200 GB 下调到 50 GB。  

在网上看到有人吐槽，空间变小了，想升级到更大的空间，客服和他说：亲，个人用户无法直接升级，您需要先创建一个企业，以企业用户的身份，才能进行升级到「商业版」……想给飞书送钱，还得这么折腾，果然是先进生产力工具啊……            

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16797279146083.jpg)


说到这，可以引出今天这篇文章的主题了：      

如果你觉得飞书文档给的免费空间太小，或是一年 600 起步的价格太高，不想再用飞书了，这时就会有一个问题：**如何批量导出存放在飞书上的文档呢？**         

数据迁移或导出，一直是国内很多产品被诟病的地方……有些比较良心一点的，譬如腾讯文档，它提供了「批量导出」功能，只不过是要花钱💰，而有些产品，干脆不提供这一功能，被用户问到，就说这需求以后会做的，只是没告诉你，**这需求它永远排不上期**的哈哈哈哈     

这里我从网上找到了一位个人开发者制作的一个工具 **feishu-backup**，它可以比较方便地批量导出飞书文档，且导出的文档为 Markdown 格式。          

不过需要注意的是，feishu-backup **只能批量导出存放在企业用户（飞书组织）里的文档**，如果你之前把文档都放在了个人身份的账户里，那就无法使用这个工具了……     

还有一点，**如果你想用这个工具从你就职的公司批量导出你创建过的所有文档，那也别想了**……因为后面的操作有一步是需要企业的管理员审核的，你这么操作，别人会怎么想你呢？     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16797986209783.jpg)


feishu-backup GitHub 项目链接：  
https://github.com/dicarne/feishu-backup      

下面简单介绍从飞书企业版中批量导出飞书文档的步骤：  

## 飞书开放平台创建企业应用

在浏览器打开飞书开放平台 `open.feishu.cn/`，点击「创建应用」。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16797999508294.jpg)


点击下方的「创建企业自建应用」


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798000351297.jpg)

在下图填入应用的名称、应用描述，这里可以随便填，没有特殊要求

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798002639876.jpg)

进入到应用的配置页面，点击「创建版本」，在下方输入「应用版本号」和「更新说明」，接着把页面滑动到底部，点击「保存」按钮。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798011382277.jpg)


创建版本后，点击右上角的「申请线上发布」，这时它会向企业的管理员发起「审批」流程。        


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798053837664.jpg)


打开飞书的首页 `feishu.cn`，点击「飞书网页版」，打开飞书的 IM 页面。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798007612762.jpg)

企业管理员的「开发者小助手」会收到一条消息，点击「进入管理后台审核」，在打开的页面中，点击右侧的「审核」，选择「通过」即可。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798072039628.jpg)

回到飞书开放平台的后台，点击「权限管理」>>「云文档」，勾选「权限名称」左侧的复选框，全选云文档的 10 项权限，点击右上角的「批量开通」，一键开通所有权限。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798004949956.jpg)

## 获取 App ID 和 App Secret  

点击飞书开放平台后台左侧栏的「凭证与基础信息」，可以看到应用的 App ID 和密钥 App Secret。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798074884077.jpg)

## 配置 feishu-backup   

在浏览器打开 `https://dicarne.github.io/feishu-backup/#/config`，填写上面的 App ID 和 App Secret。  

点击下方的「计算」，重定向URL 输入框会生成一个链接，复制生成的链接。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798097848507.jpg)

将复制的链接粘贴到飞书开放平台「安全设置」的重定向 URL 中，点击右侧的「添加」按钮。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798099417483.jpg)

回到 feishu-backup 的配置页面，在浏览器打开底部的备份 URL。  

注：**如果你之后时不时想用 feishu-backup 导出存放在飞书中的文档，请妥善保存这个备份 URL 链接，可以把它保存到备忘录或是收藏起来**。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798101463993.jpg)


打开备份 URL 链接会弹出下面的提示，点击「授权」即可。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798102692523.jpg)

## 导出飞书文档

授权之后，就来到了导出飞书文档的页面，点击上方的「下载云空间文档」，接着点击「选择文件」，下拉弹窗会显示云空间的所有文档。  

勾选文档左侧的复选框，再点击右侧的「下载选中文件」，feishu-backup 就会把选中的文档**批量下载**到本地。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798105438371.jpg)

下载会得到一个压缩包，打开压缩包，就能看到导出的 Markdown 格式的文档（后缀为 `.md`），另外它会将文档中包含的所有图片，放在名为 assets 的文件夹中，这与 Notion 自带的导出 Markdown 文件是相似的。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/26/16798109141605.jpg)

最后还是要说一声感谢，感谢这位开发者开发了这么一个工具，虽然它还不能兼容所有的情况，但有这个工具，多少还是能帮到那些把文档放在飞书企业版上的用户，让他们的数字资产得以自由迁移到其他应用中。    


## 扫码加入我在知识星球上创建的社群「效率工具指南」  

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)


## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png) 

   


