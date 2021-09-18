---
title: 在网页中使用 icon 字体图标 | 前端开发               
date: 2021-9-19 01:30:00       
tags: [前端,icon]                                 
---    

![HTML5 网页告诉你 30 种濒临灭绝的物种  轻单](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/html5-wang-ye-gao-su-ni-30-zhong-bin-lin-mie-jue-d.png)


最近在 B 站上看 Pink 老师的前端视频，简单总结一下在网页中使用 icon 图标的两种方法。   



## 直接插入字体图标



这里说的字体图标，是指既有普通 icon 图标的外观，又带有字体特征的图标，可以像调整字体那样、调整图标的大小和颜色，且图标放大之后不会失真变模糊。  



我们一般是从网上下载字体图标的，譬如国内的阿里巴巴旗下的矢量素材网站 **iconfont**、国外的 **IcoMoon** 等。 

去年写过一篇文章《[微信小程序开发 | 如何在小程序中使用自定义 icon 图标](https://mp.weixin.qq.com/s/yxQ4Rrx8r9An2dqreTkndA)》，其中介绍了 iconfont 图标的使用，这回介绍一下使用来自 IcoMoon 的图标的方法。  

打开 IcoMoon 图标官网，从中挑选你想使用的 icon 图标，底部的 Selection 会统计你选中的图标数量，选好图标之后，点击右下角的 **Generate Font**，生成字体图标。  

![1631932008295](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/1631932008295.png)


在打开的页面，会显示我们刚才挑选的所有 icon 图标，并且提供图标的 unicode 编码，这些编码等下要用到，但现在先不管。点击右下角的 **Download**，下载生成的字体图标文件。  

![1631932359827](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/1631932359827.png)


IcoMoon 图标下载：
*https://icomoon.io/app/#/select*



解压下载的压缩文件，其中包含下面这些文件，我们需要用到其中的 fonts 文件夹。

![image-20210918214014532](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210918214014532.png)


fonts 文件中包含了 4 个字体文件，这是因为不同浏览器所支持的字体格式是不一样的，考虑到兼容性，fonts 文件夹就包含了主流浏览器支持的字体文件：  

* TrueType 字体(.ttf)：是 Windows 和 Mac 最常见的字体
* Web Open Font Format 字体(.woff)：支持的浏览器有 IE 9+、Firefox 3.5+、Chrome 6+、Safari 3.6+、Opera 11.1+
* Embedded Open Type 字体(.eot)：是 IE 专用的字体，支持的浏览器有 IE 4+     
* SVG 字体(.svg)：是基于 SVG 字体渲染的一种格式，支持的浏览器有 Chrome 4+、Safari 3.1+、Opera 10.0+、iOS Mobile Safari 3.2+

![image-20210918215027965](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210918215027965.png)


将 fonts 文件夹复制到网页的项目文件夹📂中，譬如放在与  `index.html` 文件同级的路径下。 

打开 HTML 文件，在 **style 标签**中粘贴下方的代码，定义我们等下需要用到的字体 icomoon。需要注意的是，如果 fonts 文件与 html 文件在同个路径下，就不需要修改下方代码中的 url 地址。

```css
<style>
  @font-face {
              font-family: 'icomoon';
              src: url('fonts/icomoon.eot?bawtoo');
              src: url('fonts/icomoon.eot?bawtoo#iefix') format('embedded-opentype'),
                  url('fonts/icomoon.ttf?bawtoo') format('truetype'),
                  url('fonts/icomoon.woff?bawtoo') format('woff'),
                  url('fonts/icomoon.svg?bawtoo#icomoon') format('svg');
              font-weight: normal;
              font-style: normal;	
              font-display: block;
          }
</style>
```

粘贴代码之后，先来看一下我们最终想要实现的效果，如下图，下方的红色爱心❤️图标，就是前面说到的字体图标。根据最终想要实现的效果，我们要去到 html 文件中书写相应的代码。

![image-20210918225727566](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210918225727566.png)

在 html 文件的 **body 标签**中输入下方的一行代码，中间的 **span 标签**包含的**方块 **，其实就是爱心图标，只不过它无法在 html 文件中正常显示。

```html
<p>我 <span></span> 你</p>
```

这个方块  也不是随意输入的，还得从我们前面下载的压缩文件夹中的 `demo.html` 查看。

![image-20210918232918454](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210918232918454.png)


在浏览器中打开 `demo.html` ，移动到爱心图标右下角的区域，框选有时看得到、有时看不到的**方块字符 **，复制到剪贴板，接着粘贴到 html 文件中。 

![image-20210918233454678](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210918233454678.png)


将方块字符粘贴到 html 中，如果此时在浏览器中预览网页效果的话，还是无法看到刚添加的字体图标的，因为还缺少对字体图标设置 CSS 样式——**声明字体图标所使用的字体**。 

html：

```html
<p>
  我<span></span>你
</p>
```

css：

```css
p span {
		font-family: 'icomoon';
}
```

此时在浏览器中重新打开 html 文件，我们所使用的字体图标就会正常显示了。

如果你还想调整字体图标的**大小**和**颜色**，可以在 CSS 中增加另外两个属性：**font-size** 和 **color**。

css：

```css
p span {
  	font-family: 'icomoon';
  	font-size: 50px;
  	color: red;
}
```

一番设置之后，重新在浏览器中刷新页面，就可以看到最终的效果啦。



## 通过伪类选择器使用字体图标

前面介绍的第一种方法，需要同时在 body 标签(html) 和 style 标签(css) 中同时书写相关的代码，如果我们想让 html 文件的结构更加简单，我们可以通过第二种方法——在  style 标签(css) 中通过**伪类选择器**使用字体图标，这样就只需要在 style 标签或 css 文件中书写相关的代码。  

先来看一下我们最终想要实现的效果，如下图所示，给输入框的右侧添加一个**向下的小三角🔽图标**。

![image-20210919001244754](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919001244754.png)


想制作这个效果，同样是先从前面介绍的 IcoMoon 网站下载字体图标，将解压后的文件中的 fonts 文件夹放到与 `index.html` 同级的路径下，接着在 html 的 **style 标签**中粘贴下方的代码：

```html
<style>
  @font-face {
              font-family: 'icomoon';
              src: url('fonts/icomoon.eot?bawtoo');
              src: url('fonts/icomoon.eot?bawtoo#iefix') format('embedded-opentype'),
                  url('fonts/icomoon.ttf?bawtoo') format('truetype'),
                  url('fonts/icomoon.woff?bawtoo') format('woff'),
                  url('fonts/icomoon.svg?bawtoo#icomoon') format('svg');
              font-weight: normal;
              font-style: normal;	
              font-display: block;
          }
</style>
```

在 html 的 **body 标签**中插入一个空白的盒子 div 标签：

```html
<body>
  <div></div>
</body>
```

接着在 style 标签中，给 div 盒子设置宽度、高度，并给它设置一个粗细为 1 px 的黑色边框：

```html
<style>
  div {
    width: 200px;
    height: 40px;
    border: 1px solid gray;
  }
</style>
```

此时在浏览器中打开 html 文件，就可以看到下图所示的孤零零的输入框。

![image-20210919002544501](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919002544501.png)


接着继续给这个输入框「添砖加瓦」——添加一个向下的小三角🔽，继续在 style 标签中书写代码：

```html
div::after {
	content: '';
	font-family: 'icomoon';
}
```

稍微解释一下这个代码，在 div 后面加上**两个英文中的冒号**，并且跟上单词 **after 或者 before**，就是所谓的**伪类选择器**，在我目前的认知范围内，**伪类选择器就是用 css 代码来给 html 页面添加额外的元素**，我们也确实可以在网页中看到添加的小三角，如下图。但这段代码是写在 css 而非 html 文件中，一定程度上可以简化 html 文件的代码。

![image-20210919003524108](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919003524108.png)


到这里，我们就顺利地在 html 页面中添加了字体图标，值得一提的是，伪类选择器中 **content 属性**的值，除了可以是字体图标对应的**方块字符**，还可以是**字体图标下方的编号**。

以下图为例，爱心图标的编号是 e9da，因此 content 属性的值也可以是 `\e9da` ，通过编号来调用字体图标的时候，需要在编号的最前面加多一个反斜杆 \ 。

```html
div::after {
	content: '\e9da';
	font-family: 'icomoon';
}
```

![image-20210919003833891](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919003833891.png)


引入字体图标之后，字体图标默认位于输入框的左上角，为了将字体图标移动到右侧居中的位置，这里还需要用到另外的知识——**定位**，包含**相对定位**和**绝对定位**。

![image-20210919003524108](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919003524108.png)


关于定位的知识，这里暂时就不过多展开了，可以记住一个口诀「**子绝父相**」，即子元素设置绝对定位，父元素设置相对定位，就可以达到**自由移动下拉小三角位置**的目的。

分别给 div 和伪元素选择器 div::after 添加另外的样式：

```html
div {
	position: relative;
}
```

```html
div::after {
	position: absolute;
	top: 12px;
	right: 10px;
}
```

这里的 top 和 right 属性的值，并不是唯一的，需要根据实际情况，配合浏览器的开发者工具进行调整，最终得到看起来比较舒适的值（主要就是调整到小三角可以位于输入框水平居中的位置），最终效果如下。

![image-20210919001244754](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/09/19/image20210919001244754.png)


## 欢迎关注     

以上，就是本次想和你分享的内容，希望能够对你有一点帮助。     

![公众号：效率工具指南](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2021/05/28/gong-zhong-hao-wei-bu-er-wei-ma-dailogo.png)      