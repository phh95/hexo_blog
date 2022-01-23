---
title: VSCode 添加 Vue 模板                            
date: 2022-1-23 10:21:00               
tags: [Vue,前端]                                                                                   
--- 

Hello 大家好，我是小豪。  

昨晚在看 coderwhy 老师的 Vue 视频，其中有一小节讲到，[如何在 WebStorm 里添加 Vue 模板](https://www.bilibili.com/video/BV15741177Eh?p=12)。

但我用的编辑器是 VS Code，且视频中没有讲到「**如何在 VS Code 中添加 Vue 模板**」，后来在网上搜了一下，找到了解决方法，写下这篇短文章作为记录。

本文想实现的需求是，在 HTML 中输入 `vue`，再按下 Tab 键，就可以快速添加下面👇的 **Vue 模板（代码片段）**。  

```
<div id="app">
    {{message}}
</div>

<script src="js/vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: '你好啊'
        }
    })
</script>
```

按照下面的路径，打开 VS Code 的**用户片段**。 

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/01/23/16429006381714.jpg)

在打开的窗口搜索 `html`，点击下方返回的 `html.json`。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/01/23/16429008140008.jpg)

如果你之前没有自定义代码片段，打开的 json 文件里，应该只有一个注释的示例。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/01/23/16429009345746.jpg)

在注释的代码下方，粘贴代码：  

```
"Print to console": {
		"prefix": "vue",
		"body": [
		"<div id=\"app\">",
		"\t{{message}}",
		"</div> \n",
		"<script src=\"js/vue.js\"></script>",
		"<script>",
		"\tconst app = new Vue({",
		"\t\tel: '#app',",
		"\t\tdata: {",
		"\t\t\tmessage: '你好啊'",
		"\t\t}",
		"\t})",
		"</script>",
		],
		"description": "Log output to console"
		}
	}
```

粘贴的代码，就是从文章开头的 Vue 模板（代码片段）演变而来的。  

要点：

* 原先的代码片段，每一行开头和结尾都要加上引号，且末尾要加上英文逗号
* 两行代码之间有空行的，要在前一行代码末尾加上换行符 `\n`
* 设置缩进的，需要在每一行代码的开头加上 `\t`
* html 标签设置的属性值，引号前面要加上转义符 `\`
* "prefix" 的值 "vue"，就是触发插入代码片段的文本，如果你不喜欢这个，可以更改为其他更好记的文本

## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)        





