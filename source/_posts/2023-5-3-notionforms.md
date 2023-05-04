---
title: NotionForms：第三方Notion表单工具，用来做调查问卷收集数据【效率工具指南】 
date: 2023-5-3 22:05:00               
tags: [Notion,表单,效率工具,在线工具]                                                                                       
---

本文首发于微信公众号「[效率工具指南](https://mp.weixin.qq.com/s/qbGei1gvEqdra0PV0Re5Hg)」
文/彭宏豪     

Hello 各位好，我是小豪。   

好久没写 Notion 相关的内容了，今天想起放假前看到的一个使用案例，因此这篇文章，来介绍一下在 Notion 中使用表单或调查问卷的方法。   

## 表单/调查问卷的使用场景  

说起表单或调查问卷，很多人应该并不陌生，在过去 3 年疫情期间我们填了各式各样的信息申报问卷……      

除了用于收集信息，表单/调查问卷还有多种用途：  

* 调查和研究：如果您正在进行市场调查或者社会科学研究，表单可以用于收集参与者的观点和反馈。
* 注册和申请：许多活动或者服务需要参与者或者用户填写表单来完成注册或者申请。例如，工作坊的注册、课程的申请、产品试用的申请（内测申请）等。  
* 反馈和评价：企业和机构可能需要通过表单收集用户或者员工的反馈和评价，以改进产品或者服务。
* 测试和测验：在教育和培训中，表单可以用于创建测试和测验，检查学生或者参与者的理解和掌握情况。
* 订单和预定：商家可以使用表单来接收客户的订单和预定。  


在我上周看到的例子，有一位博主把表单用作 Notion 博客的**留言板**，如下图，用户可以在表单中写下留言或者自己的问题，且所有用户写下的留言会汇总到 Notion 的 database 中。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16830872724502.jpg)

表单留言 ➡️ Notion 数据库：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831042047231.jpg)


如果你想实现同样的效果，**在 Notion 中使用表单来收集数据，且同时将收集到的数据存放在 Notion 的数据库中**，不妨跟着下面的方法进行操作：    

Notion 本身没有表单功能，因此要在 Notion 中使用表单来收集数据，得借助外部的应用，这里我们用到的第三方工具是 **NotionForm**s。    

## NotionForms

NotionForms，为 Notion 而生的表单构建工具，创建漂亮的表单来填充 Notion 表格（数据库），帮助 Notion 用户使用他们喜欢的工具实现更多的目标。      

简言之，有了 NotionForms，即便 Notion 没有表单功能，你也可以**在 Notion 中直接使用基于 NotionForms 制作的表单**，用于收集数据或用户反馈。    

NotionForms 官网：   
https://notionforms.io/      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16830869104828.jpg)

NotionForms 创建表单的步骤如下：  

打开 NotionForms 官网，注册一个 NotionForms 帐户，完成注册后，点击 NotionForms 页面左侧的按钮，与 Notion 的 Workspace(工作区) 相关联。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831064171223.jpg)


在 Notion 工作区中新建一个页面，在页面添加一个数据库，没有特殊要求的话，选择 Database - Inline(数据库只占页面的一小部分) 即可。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831067221382.jpg)

创建的数据库，默认会有两个属性（两列）——Name 和 Tags，这里我们要根据后面创建的**表单要收集的信息**，适当地修改 property name(属性名) 和 type(类型)。       


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831073291274.jpg)

以前面的「博客留言板」表单为例，我们想要收集**留言、昵称、来源**这 3 个字段（信息），因此数据库也要相应地添加这 3 个属性：  

* 留言：其实就是数据库中每一个页面的 Title(标题)，无法修改类型   
* 昵称：Text 文本类型
* 来源：统计用户来自哪个渠道，为方便用户选择，这里将其设置为 Select 类型      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831176172559.jpg)


设置好数据库的属性名和类型后，回到 NotionForms，点击左侧的 Create a form，查看右侧列出的数据库，是否包含了你刚创建的页面。  

如果没有展示出来，则可以尝试在上方的输入框输入数据库或者页面的名称。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831187131529.jpg)


输入之后还是搜不到的话，可以点击下图的蓝色文本 My Notion database is not here。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831188786559.jpg)


点击下图的 Share my database，重新关联一下 Notion 数据库和 NotionForms，这样应该就能找到刚创建的包含有数据库的页面。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831038024564.jpg)

进入到表单的编辑页面，左侧可以编辑表单的标题、描述，输入之后可以在右侧实时预览效果。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831191205040.jpg)

向下滑动左侧的面板，来到表单结构，这里会把我们在 Notion 数据库中添加的属性，作为表单的**字段**。  

将鼠标指针移动到字段的右侧，会显示隐藏的星号 * ，把星号点亮变为红色，可以把当前字段设置为「**必填项**」，即用户不输入的情况下，无法提交表单。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831200424005.jpg)

完成以上设置后，点击左上角的 Save changes，保存修改，会打开下图的页面，点击表单链接右侧的「复制」按钮，复制链接。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831202940642.jpg)

回到 Notion 页面中，粘贴表单链接，选择 Create embed，将表单嵌入页面。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831204004851.jpg)

NotionForms 表单嵌入 Notion 页面的效果👇👇     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831204709252.jpg)

当有用户在表单提交了信息，我们也能在 Notion 数据库中及时地看到通过 NotionForms 采集的信息～ 


除了上面介绍的 NotionForms，如果我们只是想在 Notion 页面中收集数据，而对收集到的数据的后续处理放在别的应用中，那我们也可以考虑在 Notion 中嵌入**表单应用**的链接。  


## 谷歌表单 Google Forms

谷歌表单，是 Google Workspace 套件的一部分，提供了一个免费、易用、灵活的在线表单制作和管理工具。它允许用户轻松创建表单，以收集数据、进行调查、组织活动等。  

我们可以先在谷歌表单中设计好表单，再把表单链接嵌入 Notion 页面中，就可以在 Notion 中借由表单来收集信息。   

不过在 Notion 中填写谷歌表单之前，需要先进行登录操作，体验不是很好。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831211464447.jpg)


## 腾讯文档表单

腾讯文档表单不支持嵌入 Notion 页面，它会把我们想嵌入的链接转为书签的形式。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16830836498360.jpg)


## 石墨文档表单

石墨文档也有创建表单的功能，同样地，将我们在石墨文档中创建的表单嵌入 Notion 页面，就能很方便地收集相关信息。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16830848707207.jpg)

经由石墨表单收集到的数据，我们可以在石墨文档的后台，点击「在表格中查看」，会发现石墨文档提供了 2 个选项：   

* 在专业表格中查看：其实就是普通的 Excel 表格
* 在应用表格中查看：类似于飞书或者腾讯文档的多维表格   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/05/04/16831215610302.jpg)



## 扫码加入我在知识星球上创建的社群「效率工具指南」  

![48844555552858T2](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2023/03/25/48844555552858t2.JPG)


## 订阅我在竹白上创建的 Newsletter   

如果对你有帮助的话，别忘了点击下方的链接，订阅我的 Newsletter，之后发布了新的内容，就能第一时间收到通知啦～  

[👉在竹白上订阅效率工具指南](https://penghh.zhubai.love/)         


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)   

