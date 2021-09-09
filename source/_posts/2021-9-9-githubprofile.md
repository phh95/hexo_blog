---
title: 在 GitHub 个人主页展示今年的时间进度            
date: 2021-9-9 14:00:00       
tags: [GitHub,公益]                           
---    

本文首发于公众号「效率工具指南」     
文/彭宏豪   

今天给大家介绍一个稍微有点意思的小玩意——在 GitHub 个人主页显示今年的时间进度，大概效果如下图所示：   

今年的时间进度为 68.77%      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311485821541.jpg)

值得一提的是，这个时间进度条用到了 GitHub 的 Actions 功能，**每隔 6 个小时会自动更新时间进度**，它就像是个自动报时的**机器人**，全程无需人工干预。    

下面简单讲一下实现的方法，有 GitHub 账号、且有兴趣的朋友，可以跟着操作一下：   

先**创建一个和你的 GitHub ID 同名的 GitHub 仓库**，例如我的 GitHub ID 是 phh95，创建的仓库名就为 phh95。  

创建的同名仓库，它是一个特殊的仓库，会显示在 GitHub 个人主页的顶部。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311496978928.jpg)

如果你之前创建了同名的仓库，这里就不需要再创建了。  

我们需要在同名仓库中添加两个文件，一个是实现自动更新时间进度条的 **workflows** 文件，一个是设置生成的进度条样式的 `index.js` 文件。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311636796285.jpg)

点击仓库右上角的 Add file 按钮，选择 Create new file 创建一个新文件。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311637035972.jpg)

首先对新创建的文件进行命名，输入 `.github/workflows/main.yml`，文件名就包含了文件所在的路径。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311639061546.jpg)

接着在 yml 文件中添加如下的代码，

```
name: Progress Bar CI

on:
  workflow_dispatch:
  schedule:
    - cron: '0 */6 * * *'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14.x'
    - name: Update README.md
      run: node index.js > README.md
    - name: Commit change & Push
      run: |
          git config user.name 'github-actions[bot]'
          git config user.email '602646761+github-actions[bot]@users.noreply.github.com'
          git commit -am "bot: update README.md automatically"
          git push
```

其中要将第 24 行代码中的邮箱前缀 `602646761` 更换为你自己的 GitHub 邮箱前缀。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311641702282.jpg)

接着在仓库中创建另外一个文件，文件名为 `index.js`。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311642870095.jpg)

在文件中粘贴下方的代码：  

```
const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
---
⏰ Updated on ${new Date().toUTCString()}
---
```   

在仓库中创建了这两个文件之后，你应该就可以在你的 GitHub Profile 页面看到今年的时间进度条了。    

需要说明的是，这里用到的两段代码都不是我写的，这些代码来自 GitHub 上的一位用户 @liununu，作者的 GitHub 主页戳这里👉👉：*https://github.com/liununu*     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311645337397.jpg)

除了本文介绍的「时间进度条」，你还可以在 GitHub 个人主页添加其他的小部件，例如**你常用的编程语言、提交次数的统计**以及**你在使用的生产力工具**，详情可以参考我之前写的一篇文章：  

[如何美化 GitHub 个人主页？](https://mp.weixin.qq.com/s/kYx3Txa3mMzpmY8fAj5UkQ)     

## 一起捐赠一本书  

今天是 9 月 9 日，其实也是一个普通的日子，但从 2015 年起，腾讯联合了国内多个公益组织发起一场名为「99公益日」的活动。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/16311646670237.jpg)

我是从这两年才开始关注这个活动的，可以看到腾讯在公益上做的一些努力，思考如何让公益与自己的产品、拥有的海量用户结合起来，在产品侧也做了不少有意思的活动，比如今年的**一起组队、向贫困山区的孩子捐赠一本书**，每位用户捐赠 3 元，微信支付会随机配捐一定的金额，把平常我们在一些电商 App 看到的「帮砍一刀」、组团优惠的手法，化用到了公益产品上，我觉得这种微创新非常有意义。  

我昨天发起了一个一起捐书的组队，目前还差一位朋友就能捐出一本书，少喝一瓶肥宅快乐水，就能给山区的孩子捐赠一本书，有意向的朋友可以扫码加入我的队伍，做一点点小事，**涓涓细流，汇成大海**。      

![IMG_0178](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/09/img0178.PNG)

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)            



