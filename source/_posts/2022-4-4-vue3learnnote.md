---
title: Vue 3 学习笔记（一）                                   
date: 2022-4-4 10:17:00               
tags: [Vue,前端,学习笔记]                                                                                 
--- 


Vue 是一种面向数据的编程，在 Vue 应用中定义了数据和模板，Vue 就会自动把数据和模板关联起来，变成 HTML 页面想要展示的效果。   

Vue 这种面向数据编程的模式，是参考了 MVVM 这种设计模式。  

M 代表 Model，也就是数据。  
V 代表 View，视图。对应 Vue 实例中的 template。     
VM 代表 ViewModel，视图数据连接层。把数据和模板关联起来，是 Vue 的**组件**帮我们做的。  

下图把 Vue 应用返回的根组件，起名叫做 vm。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16466608169086.jpg)


## Vue 的生命周期函数   

生命周期函数：在某一时刻会自动执行的函数。   


下面是 coderwhy 老师的视频课程：  

## Vue 在前端处于什么地位？  

主流的 3 大框架：Vue、React、Angular  

Angular：入门门槛较高，并且国内市场占有率较低；不否认本身是一个非常优秀的框架   

React：在国内外的市场占有率都是非常高的，作为前端工程师也是必须学习的一个框架   

Vue：在国内市场占有率是最高的，几乎所有的前端岗位都会对 Vue 有要求   

### 学习哪一门语言更容易找到工作？  

找后端的工作：优先推荐 Java、其次推荐 Go、再次推荐 Node  

找前端的工作：优先推荐 JS(TypeScript)、其次 Flutter、再次 Android(Java、Kotlin)、iOS(OC、Swift)  

在国内找前端工作，优先推荐学习 Vue，其次是 React。  

### 学习 Vue2 还是 Vue3？  

尤雨溪：**直接学 Vue 3 就行了**，基础概念是一样的。   

2020 年的 9 月 19 日，Vue3 正式发布，命名为 One Piece。  

Vue 3 带来了很多新的特性：更好的性能、更小的包体积、更好的 TypeScript 集成、更优秀的 API 设计。   


### Vue3 带来的变化（源码）

* 源码通过 monorepo 的形式来管理代码
* 源码使用 TypeScript 来进行重写（在 Vue2.x 的时候，Vue 使用 Flow 来进行类型检测）   

### Vue3 带来的变化（性能） 

* 使用 Proxy 进行数据劫持   
* 删除了一些不必要的 API   
* 编译方面的优化（生成 Block Tree、Slot 编译优化、diff 算法优化）  

### Vue3 带来的变化（新的 API）  

* 由 Options API 到 Composition API（Options API 包括 data、props、methods、computed、生命周期等等选项）   
* Hooks 函数增加代码的复用性（Vue2.x 通常通过 mixins 在多个组件之间共享逻辑）    

## 如何使用 Vue 呢？  

- 通过 CDN 的方式引入   
- 下载 Vue 的 JS 文件，手动引入   
- 通过 npm 包管理工具安装使用   
- 直接通过 Vue CLI 创建项目，并且使用它    

### CDN 引入   

CDN 称之为内容分发网络（Content Delivery Network 或 Content Distribution Network，缩写 CDN）。  

* CDN 是指通过相互连接的网络系统，利用最靠近每个用户的服务器；   
* 更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户；  
* 来提供高性能、可扩展性及低成本的网络内容传递给用户  

常用的 CDN 服务器可以大致分为两种：   

- 自己的 CDN 服务器
- 开源的 CDN 服务器：国际上使用比较多的是 unpkg、JSDelivr、cdnjs  

Vue 的 CDN 引入：   

```    

<script src="https://unpkg.com/vue@next"></script>   
```        

## MVVM 模型  

MVC 和 MVVM 都是一种软件的体系结构。   

MVC 是 Model-View-Controller 的简称，在前期被使用的架构模式，比如 iOS、前端；   

MVVM 是 Model-View-ViewModel 的简称，是目前非常流行的架构模式。  

通常情况下，我们也经常称 Vue 是一个 MVVM 的框架。   

Vue 官方其实有说明：Vue 虽然并没有完全遵守 MVVM 的模型，但是整个设计是受到它的启发的。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470544025119.jpg)

### template 属性  

HTML 原生提供了 `<template>` 标签，只不过 template 标签包含的内容，是不会被浏览器渲染的，它里面的内容可以被 js 读取。  

template 的两种写法：  

* 使用 script 标签（带有两个属性，一个是 `type="x-template"`，一个是 id）   
* 使用 template 标签（一个 id 属性）  

### data 属性   

data 属性：传入一个函数，并且该函数需要返回一个对象。  

在 Vue2.x 中，data 可以传入一个对象（虽然官方推荐是一个函数）；   
在 Vue3.x 中，必须传入一个函数，否则浏览器就会报错。   

data 中返回的对象会被 **Vue 的响应式系统劫持**，之后**对该对象的修改或访问**，都会在劫持中被处理。   

### methods 属性    

methods 属性：传入一个对象，在这个对象中可以定义很多方法。   

在该方法中，我们可以**使用 this 关键字**来直接访问到 data 中返回的对象的属性。   

官方文档中有这么一段话：  

> methods 中定义的函数，不能使用箭头函数，理由是**箭头函数绑定了父级作用域的上下文**，所以 this 将不会按照期望指向组件实例，`this.a` 将是 undefined。   

问题：  

* 为什么不能使用箭头函数？   
* 不使用箭头函数的情况下，this 到底指向的是什么？（可以作为一道面试题）  

为什么不能使用箭头函数？   

如果使用箭头函数，这个 this 会指向 window，而不是 data 字段中对象返回的属性。   

``` js    

methods: {
    btnClick: () => {
        console.log(this);
    }
}

```      

为什么是 window 呢？  

这里涉及箭头函数使用 **this 的查找规则**，它会在自己的上层作用域中来查找 this；最终刚好找到 script 作用域中的 this，所以就是 window。  


箭头函数中的 this 没有做任何的绑定，它会往上层作用域找（一层一层找），最终到达顶层作用域，在 script 标签这一层，找到 window。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470613709221.jpg)

this 到底是如何查找和绑定的呢？   




### 其他属性      

props、computed、watch、emits、setup 等等，也包含很多的生命周期函数。  

## Vue3 源码         

GitHub 地址：https://github.com/vuejs/core     

Vue 的源代码是通过 yarn 进行管理。  

终端需要安装 yarn，安装的命令：             

```        

npm install yarn -g    
```                  

从 GitHub 仓库直接下载 Vue3 源码的压缩包，需要在终端中安装一些额外的东西： 

进入 Vue3 源码解压后所在的路径，运行命令     

```      

yarn install      
```              

调试代码的步骤：         

勘误：下面的那一行代码，位于 `package.json` 文件中。    

修改之后，运行命令 `yarn dev`，执行打包操作。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470587663007.jpg)

## Vue 基础 - 模板语法    

### VS Code 添加代码片段         

生成代码片段的在线工具：https://snippet-generator.app/  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470753100267.jpg)


使用方法：将写好的一整个 html 代码复制到左侧的窗口，就会自动生成代码片段。  

在顶部两个输入框分别输入「代码片段的名称」、「快速插入代码片段的命令」   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470760844594.jpg)

回到 VS Code，选择 首选项 >> 用户片段，搜索 `html.json`，将复制的代码片段粘贴到其他的大括号即可。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470766359128.jpg)

VS Code 开启自动保存的方法：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16470765239563.jpg)

### 模板语法         

React 的开发模式（了解）：  

* React 使用的是 jsx，所以对应的代码都是编写的类似于 js 的一种语法；  
* 之后通过 Babel 将 jsx 编译成 React.createElement 函数调用。  

jsx 语法：将 js 和 html 融合在一起的书写方式  

``` js      

function() {
    return <div></div>    
}    

```         

Vue 也支持 jsx 的开发模式：  

但多数情况下，使用**基于 HTML 的模板语法**；
在模板中，允许开发者以声明式的方式将 **DOM** 和**底层组件实例的数据**绑定在一起； 
在底层的实现中，Vue 将模板编译成虚拟 DOM 渲染函数。      

下面是模板语法的例子：   

``` html       

<template>
    <div @click v-bind v-once>
    {{}}
    </div>
</template>      

```       

### v-bind 的属性绑定       

Vue2 template模板中只能有一个根元素，多个元素得包裹到一个div标签里； 
Vue3 允许template模板中有多个根元素。   
 
![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471028032192.jpg)

v-bind 绑定 class 有两种方式：   

* 对象语法   
* 数组语法

数组语法，数组中可以包含三元表达式，也可以包含对象。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471394179750.jpg)

v-bind 绑定 style 介绍   

v-bind:style 绑定 CSS 内联样式。   

CSS property 名可以用**驼峰式**(camelCase)或**短横线分隔**(kebab-case)来命名。      

绑定 class 有两种方式：     

* 对象语法
* 数组语法   


v-bind 动态绑定属性：绑定的属性名是不确定的，即用户自定义的属性名。   

写法：  

``` html
<div :[PropertyName]="PropertyValue">
</div>

<script>
data() {
    PropertyName: "自定义的属性名"
    PropertyValue: "属性值"
}
</script>

```        

v-bind 直接绑定一个对象：将一个对象的所有属性，绑定到 html 元素上的所有属性。        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471626696660.jpg)


### v-on 绑定事件    

前端开发中，需要经常和用户进行各种各样的**交互**，这时就必须监听用户发生的事件，比如：      

* 点击
* 拖拽   
* 键盘事件等   

在 Vue 中如何监听事件呢？使用 v-on 指令。   

v-on 可以绑定单个事件（单个函数），也可以绑定内联表达式(inline statement)和对象。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471817367790.jpg)

v-on 的参数传递   

v-on 绑定的函数需要传入多个对象的时候，event 对象前面要加多一个美元符号 $   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471824562895.jpg)

v-on 的修饰符  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471826574713.jpg)

## 条件渲染

Vue 提供了下面的指令来进行条件判断：   

* v-if   
* v-else   
* v-else-if   
* v-show   

### v-if 和 template 元素结合使用   

如果我们希望批量显示/隐藏多个元素，一般是在 template 中使用 div 元素进行包裹，但这样用于包裹的 div 最终会被渲染出来，增加了一个额外的 div 标签。    

```html
<template>
    <div v-if="isShow">
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
    </div>
    
    <div v-else>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
    </div>
</template>
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471904822289.jpg)

template 元素中可以嵌套 template 元素，它可以当做**不可见的包裹元素**，并且添加 v-if 指令，但是最终 template 不会被渲染出来，它有点类似于小程序中的 block。  

```html
<template>
    <template v-if="isShow">
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
        <h2>哈哈哈哈</h2>
    </template>
    
    <template v-else>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
        <h2>呵呵呵呵</h2>
    </template>
</template>
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16471907753775.jpg)


### v-show 和 v-if 的区别   
用法上的区别：   

* v-show 不支持 template;   
* v-show 不可以和 v-else 一起使用  

本质上的区别：  

* v-show 元素无论是否需要显示到浏览器上，它的 DOM 实际都是有渲染的，只是通过 CSS 的 display 属性来进行切换；  
* v-if 为 false 时，其对应的元素压根不会被渲染到 DOM 中。   

开发中如何进行选择呢？  

* 如果我们的元素需要在显示和隐藏之间频繁切换，那么使用 v-show（通过 CSS 来实现显示和隐藏间的切换，不会那么耗费性能）；      
* 如果不会频繁地发生切换，那么使用 v-if。  

### v-for 列表渲染   

v-for 支持遍历数组、对象和数字。  

v-for 遍历对象，支持有一二三个参数：  

* 一个参数：value in object    
* 二个参数：(value, key) in object   
* 三个参数：(value, key, index) in object     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16473058251414.jpg)

### v-for 中的 key 是什么？   

**认识 VNode**  

VNode 的全称是 Virtual Node，也就是虚拟节点。   

事实上，无论是组件还是元素，它们最终在 Vue 中表示出来的都是一个个 VNode；  

VNode 的本质是一个 JS 对象；  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16473642423596.jpg)


**虚拟 DOM**

虚拟 DOM：多个 VNode 形成的树结构  

虚拟 DOM 最大的优点在于，可以做**跨平台**，可以在服务端渲染，可以做移动端    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16473643775064.jpg)


Vue 中对于列表的更新是如何操作的呢？   

Vue 对于有 key 和没有 key 会调用两个不同的方法：  

有 key，就使用 patchKeyedChildren 方法；  
没有 key，那么就使用 patchUnkeyedChildren 方法。   


### Vue 的 diff 算法   

diff 算法用来比较新旧两个 VNode 列表。  

比较两个新旧节点的类型 type 和 key 是否相同。  

type 和 key 都一样的话，节点是不需要进行更新的。         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16475309445882.jpg)

如果新节点比旧节点多，会**挂载**(mount)新的节点。
如果旧节点比新节点多，会**卸载/销毁**(unmount)旧的、多余的节点。    

最后一步：新旧节点的排序比较混乱，尽可能地移动节点，移除新节点中没有的旧节点，新增旧节点中没有的新节点。  

尽可能在旧的节点列表里面，找到新的列表中对应的节点，比如新的节点里面有一个 h，就会尽可能地在旧节点里面找到 h。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16475342142617.jpg)

patch：  

如果 n1 非空，就进行更新操作；  
如果 n1 为 null，就进行挂载操作。   


### computed 计算属性

对 data 中的数据进行复杂处理（对数据进行运算后再在模板中使用的情况），会用到计算属性。   

复杂 data 的处理方式    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16475799391071.jpg)

计算属性的用法：  

* 选项：computed   
* 类型：{[key: string]: Function | {get: Function, set: Function}}   

key 的值是一个函数或者对象。  


插值语法(Mustache语法)的 3 个缺点：     

* 模板中存在大量的复杂逻辑，不便于维护（模板中使用表达式的初衷是用于简单的计算）；          
* 当有多次一样的逻辑时，存在重复的代码；
* 多次使用的时候，很多运算需要多次执行，**没有缓存**

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476228150335.jpg)

计算属性的缓存：  

* 计算属性会基于它们的依赖关系进行缓存
* 在数据不发生变化时，计算属性是不需要重新计算的    
* 但如果依赖的**数据发生变化**，在使用时，计算属性依然会重新进行计算   

### 计算属性的 setter 和 getter 方法   

计算属性的完整写法，应该是包含 setter 和 getter 方法的，需要写成**对象**的形式，但我们一般只用到 getter 方法，所以就会写成**函数**的形式，这个函数就是 getter 方法。  

老师上课的笔记：计算属性在大多数情况下，只需要一个 getter 方法即可，所以我们会**将计算属性直接写成一个函数**。     


下面是计算属性的完整写法：  

给计算属性传参（赋值）的时候，会调用计算属性的 setter 方法。       

```js       
computed: {
    fullName: {
        set: function(newValue) {
            console.log(newValue);
        },
        get: function() {
            return this.firstName + " " + this.lastName
        }
    }
}

```      

下面是计算属性的简略写法（只用到 getter 方法）：    

```js        
computed: {
    fullName() {
        return this.firstName + " " + this.lastName      
    }
}
```    

### 认识侦听器 watch        

在某些情况下，我们希望在**代码逻辑**中监听某个数据的变化，这个时候就需要用侦听器 watch 来完成了。     

侦听器的用法：  

* 选项：watch   
* 类型：{[key:string]: string|Function|Object|Array}   

watch 后面跟一个对象，对象里面是一个键值对，值可以是函数，也可以是字符串/对象/数组。    

侦听器的使用场景：侦听当 data 里面的数据发生变化时，想要进行一些**逻辑处理**（JavaScript，例如向服务器发送网络请求）    

watch 是 Vue 实例中的一个 option。   

watch 中的 question 侦听 data 中的属性的名称。    

watch 可以调用 methods 中定义的函数。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476678949655.jpg)


上图中的 `你问题${this.question}的回答是 哈哈哈哈哈哈` 是 ES6 中的模板字符串语法，可以很方便地进行字符串的拼接。   

**字符串拼接表达式**的时候，可以使用 ${} 来拼接。   

### 侦听器的配置选项   

* 深度侦听
* 立即执行   

下图的 info 是一个来自 data 中的对象，当对象里的一个键值对发生变化、而非整个对象发生变化时，watch 在默认情况下，无法监听到内部属性的变化。  

此时就需要给 watch 配置一个 **deep** 选项，实现深度侦听。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476783824194.jpg)

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476789743188.jpg)

### 侦听器 watch 的其他方式     

侦听器的其他写法：  

使用 $watch 的 API，需要配合**生命周期函数**一起使用         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476795876487.jpg)

生命周期函数与实例中的 data()、methods 选项处于同一层级。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476805015043.jpg)

  
### 浅拷贝和深拷贝    

**浅拷贝**在堆内存中的表现：  

浅拷贝只会拷贝第一层，如果内部嵌套了对象，还是会指向对象原来的内存地址。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16476928211960.jpg)

那如果要实现深拷贝，该怎么办呢？  

需要借助 JSON 的两个方法：   

* stringify()：先把对象转换成字符串     
* parse()：转成字符串之后，再对字符串进行还原，就会在内存中生成一个新的对象    

```js
const info = { name: 'phh', age: 28, friend: {name: 'angola peng'} };   

const obj = JSON.parse(JSON.stringify(info));   

```

经过上面两步，就可以实现深拷贝，生成一个新的对象 obj。   


## Vue3 的表单 

v-model 本质上是语法糖。  

双向绑定：可以将 data 中的值绑定到 input(表单)的 value 属性上面，同时当 input 的 value 发生变化时，会将最新的值更新到 data 中。 

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477028248176.jpg)

**v-model 修饰符 lazy**  

修饰符 lazy 的本质：将 v-model 内部绑定的 input 事件切换为 **change 事件**，只有在提交(比如按下回车键)时才会触发。        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477392862009.jpg)


v-model 修饰符 number：将输入的文本转换为数字类型       
v-model 修饰符 trim：去除用户输入的 value 前后的空格    

## Vue 组件化开发

组件化开发的思想：将页面拆分成一个个小的功能块，之后像**搭积木**一样，把组件组装到一起。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477445942339.jpg)

现在整个大前端开发都是组件化的天下，无论是三大框架，还是跨平台方案的 Flutter，甚至是移动端都在转向组件化开发，包括小程序的开发也是采用组件化开发的思想。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477449433308.jpg)

### 注册组件的方式  

注册组件分成两种：  

* 全局组件：在任何其他的组件中都可以使用的组件   
* 局部组件：只有在注册的组件中才能使用的组件   

**注册全局组件**   

全局组件：注册的组件可以在任何的组件模板中使用。  

```js
const app = Vue.createApp(App);

// 伪代码
// app.component("组件名称", 组件对象)

app.component("component-a", {
    template: '#component-a',
    data() {
        return {
            message: 'hello world'
        }
    }
})
```

实际开发中一般不推荐使用全局组件。   


**全局组件的逻辑**

组件本身也可以有自己的代码逻辑：比如 data、computed、methods 等。   


**组件的名称**   

通过 `app.component` 注册组件时，第一个参数是**组件的名称**，定义组件名的方式有两种：   

方式一：使用 kebab-case（短横线分隔符）   

```js
app.component('my-component-name', {
    /* … */
})
```

在引用这个组件时，也必须使用 kebab-case，例如 `<my-component-name>`      

方式二：使用 PascalCase（驼峰标识符）   

```js
app.component('ComponentName', {
    /* … */
})
```

组件命名一般采用**大驼峰**，首字母必须是大写。        

采用驼峰命名的方式，在模板中引用这个组件时，有两种写法：  

* `<component-name>`   
* `<ComponentName>`（实际开发中**不推荐使用**这种）        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477495715671.jpg)


**注册局部组件**   

局部组件：通过 **components 属性选项**来注册，这个选项与之前的 data、methods、computed 处于同一层级。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477501396196.jpg)

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477576075152.jpg)


## Vue 的开发模式    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477577826684.jpg)

单文件组件的后缀为 `.vue`，浏览器无法识别，因此还需要经过构建、打包的环节，借助 Webpack 或 Vite 将 `.vue` 转换为普通的 js 文件。   

```vue
<template>

</template>

<script>

</script>

<style>

</style>
```    

### 单文件的特点  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477582245705.jpg)

### 如何支持单文件组件  

想要使用这一单文件组件的 `.vue` 文件，比较常见的两种方式：   

* 方式一：使用 **Vue CLI** 来创建项目，项目会默认帮我们配置好所有的配置选项，可以在其中直接使用 `.vue` 文件（**脚手架本质上也是基于 Webpack 的**）  
* 方式二：自己使用 **Webpack** 或 rollup 或 Vite 这类打包工具，对其进行打包处理    

最终，无论是后期做项目，还是在公司进行开发，通常都会采用 Vue CLI 的方式来完成。    

在学习阶段，为了更好地理解 Vue CLI 打包项目的过程，会先讲解一部分 Webpack 的知识。   

## Webpack   

Webpack 的官方文档：https://webpack.js.org   
Webpack 的中文官方文档：https://webpack.docschina.org    

Webpack 依赖 Node 环境，因此需要先安装 nodejs。    

下面的内容基于最新的 Webpack 5。  

### 认识 Webpack   

三大框架的脚手架都是基于 Webpack 的。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477612953301.jpg)

Webpack is a static module bundler for modern JavaScript applications.        

Webpack 是一个静态的**模块化**打包工具。   

Webpack 默认支持各种模块化开发，包含 ES Module、CommonJS、AMD 等。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477616392501.jpg)

### Vue 项目加载的文件有哪些？  

Webpack 会对哪些文件进行打包？  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16477618774866.jpg)

### Webpack 的安装    

Webpack 的安装目前分为两个：**webpack**、**webpack-cli**     

当我们在命令行中使用 webpack，并且传入一些参数时，就需要用到 `webpack-cli`。     

webpack 在执行时是依赖 webpack-cli 的，如果没有安装就会报错。   

webpack 和 webpack-cli 的关系：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16478785840276.jpg)


全局安装 webpack 和 webpack-cli：  

```
npm install webpack webpack-cli -g
```

老师视频中使用的版本：   

webpack 5.37.1   
webpack-cli 4.7.0   

在实际开发中，很少会用全局的 webpack 来打包项目，一般都会针对项目单独安装一个 webpack 版本，这就需要用到局部 webpack。  

项目中会包含多个包(package)，使用 `package.json` 来管理这些包。  

生成 `package.json` 文件的方法：   

打开终端，输入 `npm init`，按下回车，需要给包起一个名字，接下去一路回车，就会生成 `package.json` 文件。   

这种生成 `package.json` 文件的方法，适用于文件包含有**中文名称**的情况。   


另外一个生成 `package.json` 文件的方式： 

```
npm init -y   
```  

-y 表示后面所有的选项都是 yes，可以快速创建 `package.json` 文件。   

局部安装的 Webpack 分为两类：   

* 开发阶段依赖的 Webpack：开发者开发时使用的        
* 生产阶段依赖的 Webpack：项目正式上线后，面向用户的            

在项目文件夹中直接运行 `npm install webpack webpack-cli`，默认安装生产依赖的 webpack（面向用户的）。    

开发时依赖的 Webpack 的安装命令：   

```  
npm install webpack webpack-cli --save-dev  
```        

上面的安装命令也可以简写成：       

```
npm install webpack webpack-cli -D   
```

运行局部 Webpack 的命令：  

```
npx webpack   
```    

Webpack 对项目进行打包，默认会去找 src 文件夹下面的 `index.js` 文件，这被称为**入口文件**。  

如果把 `index.js` 文件命名为其他的名字，例如 `main.js`，在运行打包命令的时候，要带上**额外的参数**，配置 `main.js`为入口文件：     

```
npx webpack --entry ./src/main.js    
```


### webpack 配置文件         

项目文件中单独创建一个 `webpack.config.js`文件，来对 webpack 进行配置：   

出口 output 的 path 属性，它的值应该为**绝对路径**，即完整的文件路径。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16479085335494.jpg)

但这个绝对路径比较长，我们通常会用 Node 中的 path 模块，来简化绝对路径的写法。   

调用 path 模块的 resolve 方法，对两个路径进行拼接：   

```
path.resolve(__dirname, "./build")  
```   

`__dirname` 是 `webpack.config.js` 文件所在的绝对路径，`./build`是打包后的文件存放位置的相对路径。   

将这两个路径拼接后，就可以找到打包文件所在的位置啦。   

配置文件的名称多数情况下为 `webpack.config.js`，如果你执意要更改文件的名称，例如更改为 `why.config.js`，需要在 `package.json`中作相应的调整，build 属性后面需要配置额外的参数：     

```
"build": "webpack --config why.config.js"
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16479958252520.jpg)


在 `package.json` 文件中配置好 webpack 和 webpack-cli 的依赖后，在终端输入 `npm install`，安装的就是局部的 webpack。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16480509148257.jpg)

### Webpack 打包的依赖关系图   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16480531421554.jpg)

### css-loader 的使用   

Webpack 需要 loader 来加载 CSS 文件。   

安装 css-loader：  

```
npm install css-loader -D    
```

loader 是什么呢？  

* loader 可以用于对模块的源代码进行转换   
* 我们可以**将 css 文件也看成是一个模块**，我们是通过 import 来加载这个 css 模块的    
* 在加载这个 css 模块时，Webpack 其实并不知道如何对其进行加载，必须制定对应的 loader 来完成这个功能   


**loader 的配置**    

css-loader 加载 css 文件的 3 种方式：  

* 内联方式   
* CLI 方式（Webpack5 中不再使用）    
* 配置方式（多采用这一种）

内联方式：使用较少，因为不方便管理。

在引入的 css 样式前加上使用的 loader，并且使用英文感叹号分割：  

```
import "css-loader!../css/style.css"   
```

**loader 的配置方式：**    

在 `webpack.js.config` 中写明我们用到的 loader。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481312600912.jpg)
  
### 认识 style-loader    

前面的 css-loader 只负责将 `.css` 文件进行解析，并不会将解析之后的 css 插入到页面中。    

如果想要把完成插入 style 的操作（将解析后的 css 插入到 html 中的 style 标签），还需要用到另外一个 loader——**style-loader**。   

安装 style-loader：  

```
npm install style-loader -D    
```

两个 loader 的执行顺序：先执行 css-loader，再执行 style-loader。   

但在 use 数组中，它是从后往前执行 loader 的，因此先执行的 css-loader 要写在后面。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481343531644.jpg)

### 如何处理 less 文件     

less 文件要先转换为普通的 CSS 文件，转换需要用到一个工具 less compiler，简称 lessc。  

lessc 与 Webpack 没有任何关系，它是一个独立的工具。   

局部安装 lessc：   

```       

npm install less -D     
``` 

将 lessc 工具与 Webpack 关联起来，需要安装 less-loader。实际上 less-loader 依赖 lessc 工具。   

局部安装 less-loader：  

```
npm install less-loader -D     
```   

之后同样需要在 `webpack.config.js` 文件中进行配置，处理 less 文件需要用到 3 个 loader：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481357156386.jpg)

### 认识 PostCSS 工具   

PostCSS 是一个**通过 JS 来转换 css 样式**的工具；   
这个工具可以帮助我们进行一些 CSS 的转换和适配，比如自动添加**浏览器前缀(user-select)**、css 样式的重置；   
但是实现这些功能，我们需要借助 PostCSS 对应的插件。   

使用 PostCSS 的两个步骤：   

1. 查找 PostCSS 在构建工具中的扩展，比如 webpack 中的 postcss-loader    
2. 选择可以添加你需要的 PostCSS 相关的插件，例如 autoprefixer 插件       

PostCSS 工具与 Webpack 无关，可以独立使用。   

安装 PostCSS：  

```
npm install postcss postcss-cli -D    
```

安装 autoprefixer 插件：  

```
npm install autoprefixer -D         
```     

在 Webpack 中使用 PostCSS，还需要安装 postcss-loader：   

```
npm install postcss-loader -D            
```     

`webpack.config.js` 中配置 postcss-loader 时，需要额外配置使用到的 autoprefixer 插件：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481376464344.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481376630475.jpg)

另外一个 postcss 插件：postcss-preset-env  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481378414151.jpg)

现代的 CSS 特性：**最新的 CSS 中表示颜色的十六进制可以有 8 位，例如 #12345678**，而不是只能有 6 位——#123456。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16481382257857.jpg)



局部安装插件：   

```
npm install postcss-preset-env -D     
```  

## Webpack 打包其他资源    

### file-loader   

加载图片这种资源，需要使用 file-loader。  


引用图片的两种方式：   

* 一种是给 div 设置图片背景，在 CSS 中使用 `background-image: url()`    
* 一种是在 img 元素的 src 属性引入图片         

在 CSS 中使用 `background-image: url()` 的配置方式：    

Webpack5 中使用 file-loader 打包图片，需要添加额外的配置：  

* options 中关闭 esModule 模块（file-loader 默认使用 ES6 模块解析），启用 file-loader 的 CommonJS 模块（不配置这个，html 文件中图片路径不对）   
* 后面要加多一个 type，否则会打包生成两张图片      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482304113249.jpg)

下图来自 Stackoverflow    
![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482304845203.jpg)

在 img 元素的 src 属性引入图片的配置方法：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482322835534.jpg)
 

在 template 中引用图片，图片会通过 vue-loader 进行编译。   


### 图片打包后生成文件的命名

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482325495717.jpg)
上图有个错别字，截图 ▶ 截取。   

file-loader 打包后的图片会放在 build(dist) 文件夹中，如果想把打包后的文件都归集到 img 文件中，需要给 file-loader 配置 **outputPath** 字段。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482605312293.jpg)

对打包后的图片进行命名       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482613068661.jpg)

实际开发中，可以把 outputPath 去掉，与 name 字段进行合并，同时指定保存的文件夹和打包生成的文件名。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482622582028.jpg)


### url-loader   

url-loader 和 file-loader 的工作方式是相似的，但是可以将较小的文件，转成 base64 的 URI。  

服务器「高并发」，经常会对**小的图片**进行处理，减少浏览器向服务器发送请求的次数：   

* 精灵图：将多张小的图片合并为一张图   
* 字体图标：iconfont，矢量图    
* 对小的图片进行编码：编码成 base64 的 URI   

安装 url-loader：  

```
npm install url-loader -D     
```

url-loader 和 file-loader 的区别：   

* 想把全部图片打包，就用 file-loader
* 想把部分小图片使用 base64 编码，就用 url-loader   

url-loader 配置时，需要增加一个字段 limit，划定使用 base64 编码的界限。  

如下图，当图片小于 100kb 时，使用 base64 进行编码。     

 ![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482638055212.jpg)

### 认识 asset module type    

在 Webpack5 之前，加载资源需要使用一些 loader，比如 **raw-loader、url-loader、file-loader**；   

从 Webpack5 开始，我们可以直接使用**资源模块类型(asset module type)**，来替代上面的这些 loader。    

**使用 asset module type，不需要安装任何模块**，可以直接使用。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482640706763.jpg)

`type: "asset"` 可以像之前的 url-loader 一样，对小于 100kb 的图片使用 base64 编码，不过它的配置方式比较特殊：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482648072239.jpg)

配置打包后的路径和文件名，使用字段 generator，需要注意的是，**filename 中的扩展名 [ext] 前面不需要加英文句号**。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482651041691.jpg)

### 加载字体文件   

在 src 文件中放入字体文件夹 font，里面包含 3 个字体文件和 2 个 css 文件。

接着在 `element.js` 中导入 `iconfont.css` 文件。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482736683933.jpg)

加载字体文件有两种方式：  

* 使用 file-loader 模块（参考加载图片的写法）  
* 使用 Webpack5 内置的资源模块类型(asset module type)     

在 `webpack.config.js` 中添加配置：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482742769686.jpg)

## Webpack 插件   

Webpack 的另一个核心是 Plugin。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482747955742.jpg)

### CleanWebpackPlugin   

前面每次修改了一些配置，重新打包时，都需要手动删除  build 文件夹。  

我们可以借助一个插件 CleanWebpackPlugin，来帮我们自动删除之前打包的文件。   

安装插件：  

```
npm install clean-webpack-plugin -D    
```

安装插件之后，还需要在 `webpack.config.js` 中导入：   

```js    
const { CleanWebpackPlugin } = require("clean-webpack-plugin");  
```

上面的 CleanWebpackPlugin 是一个类。  

导入后，在 `module.exports` 中使用插件：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482756531403.jpg)

每次运行 `npm run build` 时，插件会自动删除之前打包生成的 build 文件夹，生成新的 build。  

### HtmlWebpackPlugin   

之前写的代码，html 文件都是没有打包到 build 文件夹中，如果要对放在根目录下的 html 进行打包，需要用到另外一个插件——HtmlWebpackPlugin。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482759272641.jpg)

配置 HtmlWebpackPlugin 插件：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482762310525.jpg)

配置好插件后，我们可以把之前放在根目录下的 `index.html` 文件删除，因为这个插件会在打包后的 build 文件中生成一个 `index.html`。 

自动生成的 `index.html` 文件，是根据 ejs 的一个模板来生成的。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482768532420.jpg)

自定义 HTML 模板    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482769331352.jpg)

可以在根目录下创建一个 public 文件夹，存放自定义的 html 模板。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482778952822.jpg)

在 `webpack.config.js` 的 HtmlWebpackPlugin 插件传入我们自定义的 html 模板：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482779270604.jpg)

之后 Webpack 进行打包时，就会以自定义的 html 模板为基础进行打包，而不是使用 HtmlWebpackPlugin 插件的 ejs 模板。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482770468083.jpg)


### CopyWebpackPlugin  

放在 public 文件夹下的文件，例如 `favicon.ico`，一般在打包时会直接复制到 build 文件夹中。

要想实现**自动复制（文件拷贝）**，需要借助插件 CopyWebpackPlugin。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482864720518.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482807983680.jpg)

注意：直接使用最新版的 CopyWebpackPlugin 插件，打包时会报错，建议使用视频中 coderwhy 老师用到的 9.0.0 版本。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482850581542.jpg)

安装 CopyWebpackPlugin 插件：  

```
npm install copy-webpack-plugin@9.0.0 -D    
```

插件配置：  

在 `webpack.config.js` 中引入插件：  

```js
const CopyWebpackPlugin = require('copy-webpack-plugin');
```  

接着在下面的插件中 new 一个插件：  

把 `favicon.ico` 从 public 复制到 build 文件夹，并忽略 public 文件夹中所有叫 `index.html` 的文件。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482853972994.jpg)

### Webpack 的 Mode 配置   

不设置的话，默认是生产模式。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482880965326.jpg)

当我们把 mode 设置为 development(开发模式)，Webpack 会自动配置下面一大堆选项。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482881581774.jpg)

## Babel   

Webpack 打包 js 和 `.vue` 文件。   

Babel 是一个工具链，可以将 ES6+ 的代码转换为向后兼容的 JS。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482911713645.jpg)


安装 babel：  

```
npm install @babel/core @babel/cli -D    
```

一个小例子：将使用 ES6 语法写的 `demo.js` 转换成 ES5 语法   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482939122966.jpg)


局部安装的 babel，在终端调用的时候，要用 npx 命令：   

```
npx babel demo.js --out-dir dist   
```

`--out-dir` 指定文件输出的目录，输出到 dist 文件夹。   

如果想直接指定输出的文件名，可以改写一下命令：  

```
npx babel demo.js --out-file test.js 
```

这样输出的 `test.js` 文件就和 `demo.js` 在同一个路径下。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16482930906558.jpg)


运行 babel 时，转换箭头函数，就需要配置用到的插件：  

```
npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions          
```

babel 转换 ES6 块级作用域插件：transform-block-scoping   

ES6 块级作用域，指的是 ES6 中的关键字 const、let。      

安装插件：  

```
npm install @babel/plugin-transform-block-scoping -D        
```

在命令行中同时使用两个插件的写法，使用逗号进行分割：      

```
npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
```   


### Babel 的预设 preset  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483088835337.jpg)

安装 Babel 预设： 

```
npm install @babel/preset-env -D      
```

使用预设：  

```
npx babel demo.js --out-file test.js --presets=@babel/preset-env      
```

上面的命令就可以取代前面长长的命令啦，也不需要去安装两个插件，来分别实现 箭头函数、ES6 块级作用域 的转换。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483165117803.jpg)


### Babel 编译器执行原理（了解）    
  
![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483448938446.jpg)

### Babel-loader   

Webpack 对代码进行打包时，并不会将使用 ES6 编写的代码转换成 ES5，这样会存在一个问题：  

如果用户使用的浏览器不支持 ES6 语法，就会导致无法正常使用我们的服务。   

babel-loader：将 Babel 和 Webpack 结合起来，加载所有 js 结尾的文件，如果文件中含有 ES6 语法编写的代码，就会将 ES6 语法转换成 ES5。   

安装 babel-loader：   

```
npm install babel-loader -D   
```   

如果前面没有安装过 @babel/core，在安装 babel-loader 时也要同时安装：   

``` 
npm install babel-loader @babel/core -D   
```

安装之后，在 `webpack.config.js` 中添加配置：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483463722835.jpg)

因为用到的插件比较多，我们还可以使用 babel 预设，替代上面的插件：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483466039248.jpg)

### Babel 的配置文件    

像之前学习的 postcss 一样，我们可以把放在 `webpack.config.js` 中的 babel 配置信息，放到一个单独的文件中。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483468582440.jpg)

更常见的是使用第一种配置文件，创建 `babel.config.js`文件。   

在根目录下创建 `babel.config.js`文件：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483471767368.jpg)

接着在 `webpack.config.js` 调整一下之前的配置，可以写得很简洁了：       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483472441529.jpg)

## Vue 源码的打包    

首先要安装 Vue，在命令行中运行：  

```
npm install vue 
``` 

这一次不需要在 vue 后面加上 `-D` 的参数，因为 Vue 不仅是在开发时需要用到，项目正式上线的时候，也会用到 Vue。  

Vue 有多个版本，大致分为两个： 

* runtime + compiler(后面的 compiler 可以用来解析 Vue 代码中的 template 模板)
* runtime-only(这个版本的体积比较小，不支持对 template 模板进行解析)     


直接使用 `import { createApp } from 'vue'` 引入的 Vue 是 runtime-only 的版本，无法解析 template 模板，最终在 html 页面无法显示出来。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483500443459.jpg)

Vue 和 Webpack 一起使用，引入时需要使用包含 compiler 的 Vue 版本：   

```
`import { createApp } from 'vue/dist/vue.esm-bundler'`
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483517602689.jpg)

Vue 开发过程中，有 3 种方式来编写 DOM 元素：   

- template 模板的方式（之前一直在用的方式）  
- render 函数的方式      
- 通过 `.vue` 文件中的 template 元素来编写模板      

方式一需要通过 Vue 源码中的 compiler 来对 template 模板进行解析；   
方式三需要用到 vue-loader。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483521098331.jpg)


### VSCode 对 SFC 文件的支持    

SFC：单文件组件    

VS Code 中两个和 SFC 相关的插件：     

* Vetur    
* Volar，Vue 官方推荐的插件

### Vue-loader  

安装 Vue-loader，同样是开发时依赖：  

```
npm install vue-loader -D   
```

配置 Vue-loader：  

在 `webpack.config.js` 中配置好规则，还需要引入一个 VueLoaderPlugin 插件。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483627350073.jpg)


控制台会有一个警告信息：  

`__VUE_OPTIONS_API__`：是对 Vue2 进行适配的（Vue2 中会使用 Options，Vue3 开始就去掉了 Options）   

`__VUE_PROD_DEVTOOLS__`：在生产环境是否使用 Vue 调试工具。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483623132086.jpg)

要去除这个警告信息，可以在 `webpack.config.js` 的 DefinePlugin 插件中进行配置。   

配置之后，重新进行打包，控制台就不会出现这个警告信息了。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483625001041.jpg)

安装 Vue-loader 之后，内部有一个 `@vue/compiler-sfc` 模块，会对 template 模板进行解析，这时就不需要用到 Vue 源码中的 compiler。  

因此，我们可以把最开始使用的 runtime + compiler `vue.esm-bundler` 版本，切换为 只包含 runtime 的 `vue` 版本。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483632760489.jpg)


## Webpack 搭建本地服务器  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483722087543.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483725735450.jpg)

第一种开启 watch 的方式：在 `webpack.config.js` 的导出配置中，添加 `watch: true`   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483731701280.jpg)

在真实开发中，上面这种 watch 的配置方式，其实用得还是比较少。  

### webpack-dev-server  

上面的方式可以监听到文件的变化，但是事实上它本身是**没有自动刷新浏览器**的功能的：  

因为我们是借助 VS Code 中的 live-server 插件来完成自动刷新浏览器的；   

但是，我们希望在不使用 live-server 插件的情况下，可以具备 **live reloading(实时重新加载)** 的功能。  

安装 webpack-dev-server：   

```
npm install webpack-dev-server -D    
```

安装之后，在 `package.json` 文件的脚本字段，添加配置 `"serve": "webpack serve"`。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483979958580.jpg)

serve通过 webpack-cli 来帮助我们做解析的。   

webpack-dev-serve 在编译之后不会写入到任何输出文件，而是将 bundle 文件保留在**电脑内存**中。webpack-dev-serve 使用了一个 memfs 库。


接着在终端运行 `npm run serve`，就能看到 Webpack 帮我们搭建的本地服务。  

这个本地服务是基于 Node 的 express 框架搭建的本地服务器。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16483984801008.jpg)

如果有些资源没有从 Webpack 打包的文件中加载到，就会从 devServer 的 static 中配置的文件夹寻找。  

浏览器向 express 服务器请求某个资源的时候，如果在打包后的资源中找不到，express 就会去 devServer 的 static 中配置的文件夹寻找。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484760305252.jpg)

视频中老师用到的 contentBase 字段已经被弃用了。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484761398900.jpg)

在真实开发中，如果**希望有些资源在开发阶段暂时不要复制到打包的文件中，加快打包速度**，等到上线(生产)阶段再作复制，就需要给 devServer 的 static 配置路径。   

开发阶段：devServe 的 static 配置文件夹路径 `./public`     
打包(生产)阶段：使用 CopyWebpackPlugin


### 认识模块热替换(HMR)   

HMR 是 Hot Module Replacement，翻译为模块热替换。   

模块热替换是指在**应用程序运行过程中，替换、添加、删除模块**，而**无需重新刷新整个页面**。  

在 Webpack 中，一个文件就可以看成是一个模块。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484795771943.jpg)
  

### 开启 HMR

修改 webpack 的配置：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484806480170.jpg)

修改 webpack 配置后，修改文件后依然会刷新整个页面，这是因为我们要去**指定哪些模块发生更新**时，进行 HMR： 

增加 if 判断，当 `module.hot` 为 true，进行模块热替换。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484807844782.jpg)

开启模块热更新后，浏览器控制台会有下图的提示。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484811127696.jpg)

指定模块发生更新进行 HMR 后，当我们修改文件，控制台会打印下面的信息：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484811610635.jpg)

### Vue 框架的 HMR   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484814117106.jpg)


### HMR 的原理  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484824990220.jpg)

Socket 长连接 -> 即时通信（微信、直播间评论区、送礼物、进场消息） 
长连接：当服务器数据发生变化时，可以主动地向客户端发送请求      

Http 链接 -> 短连接 
客户端发送 http 请求 -> 和服务器建立连接 -> 服务器做出响应 -> 断开连接    

HMR 原理图   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484825865854.jpg)

### devServer 的其他配置    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484827807798.jpg)

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16484832451168.jpg)

### Proxy  



### Webpack 的 resolve 模块解析配置  

resolve 用于设置模块如何被解析：   

* 开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库；   
* resolve 可以帮助 webpack 从每个 require/import 语句中，找到需要引入的模块代码；   
* webpack 使用 enhanced-resolve 库来解析文件路径。    

webpack 能解析三种文件路径：  

* 绝对路径
* 相对路径
* 模块路径：在 resolve.modules 中指定的所有目录检索模块，默认值是 ['node_modules']，所以默认会从 node_modules 中查找文件；    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16485622946807.jpg)

如何确定导入的是一个文件还是文件夹？  

```
import { sum } from "./js/math";    
```  

如何确定导入的 math 是一个文件还是文件夹呢？   

如果是一个文件：   

* 如果文件具有扩展名，则直接打包文件；   
* 否则，将使用 resolve.extensions 选项作为文件扩展名解析；    

resolve.extensions 默认配置了一些扩展名，遇到没有后缀的文件，就会依次为文件加上后缀，去匹配文件夹中是否有对应的文件。   

```
resolve: {
    extensions: [".js", ".json", ".mjs", ".wasm"]     
}
```

如果是一个文件夹，会在文件夹中根据 resolve.mainFiles 配置选项中指定的文件顺序查找：   

* resolve.mainFiles 的默认值是 ["index"]；   
* 再根据 resolve.extensions 来解析扩展名；  


添加额外的扩展名，例如在配置中添加 `.vue`，之后从 `App.vue` 导入模块时，文件末尾就不需要带上 `.vue` 后缀了。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16485647015692.jpg)


alias：可以为路径起**别名**，简化导入模块时路径的书写。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16485648915673.jpg)

### 开发环境和生产环境分离   

之前我们把所有配置都写在了一个 `webpack.config.js` 中，里面混合了开发环境和生产环境的配置。   

接下来我们要对其进行分离，将配置写到两个不同的文件中。  

在根目录下创建一个 config 的文件夹，创建 3 个配置文件，一个公共的配置文件(comm)，一个是开发环境的配置文件(dev)，一个是生产环境的配置文件(prod)。       

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16486488190016.jpg)

接着修改 `package.json` 中的配置信息：  

给脚本的 build 和 serve 字段后面添加额外的配置，这样我们在终端中运行 `npm run build` 和 `npm run serve` 才不会报错。   

```
"build": "webpack --config ./config/webpack.prod.config.js",    
"serve": "webpack serve --config ./config/webpack.dev.config.js"     
```

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16486488999177.jpg)


## Vue CLI 脚手架    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16486491520254.jpg)

Vue CLI 本质上是一个工具，在使用之前需要先安装。  

### Vue CLI 安装和使用   

全局安装 Vue CLI：  

```
npm install @vue/cli@4.5.13 -g       
```

老师视频中安装的是 4.5.13 版本的脚手架，这里也安装相同的版本。   

安装好之后，通过 vue 的命令来创建项目：  

```
vue create 项目的名称   
```   

在 Mac 电脑上使用 `vue create 项目的名称` 创建项目可能会报错，报错信息：  

```
gyp: No Xcode or CLT version detected!   
```

解决方法：   

在终端分别输入两行命令  

```
sudo rm -rf $(xcode-select -print-path)   
sudo xcode-select --install     
```

之后重新运行创建 vue 项目的命令，覆盖之前创建的东西。   


用 Vue 脚手架创建的 demo 项目的目录，结构和前面学习的 Webpack 非常像：      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16487356417880.jpg)


`.browserslistrc` 文件：设置适配浏览器的范围


## 认识 Vite

Vite 是尤雨溪写的构建工具。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489530669622.jpg)

### Vite 的构造   

Vite 由两部分组成：   

* 一个开发服务器，它基于原生 ES 模块，提供了丰富的内建功能，HMR（模块热替换）的速度非常快速   
* 在构建阶段，它是一套构建指令，使用 rollup 打开我们的代码，并且它是预配置的，可以输出生产环境的优化过的静态资源    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489541314670.jpg)

版本比较新的浏览器支持 ES Module（**原生浏览器也是支持 ES Module 的**），不需要使用构建工具，也可以识别 ES Module 的代码。    

在 `index.html` 中引入包含 ES Module 的 js 文件，需要给 script 标签增加一个属性 type。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489580248866.jpg)


但这也存在一些弊端：  

* 浏览器无法识别某些文件，例如 ts、vue、less、scss    
* 如果用到的包，之间的依赖太多，会发送过多的网络请求    

因为存在这些弊端，我们还是需要使用构建工具。这两个弊端，就是 Vite 想帮我们解决的。   

### Vite 的安装和使用  

Vite 本身也是依赖 Node 的，所以也需要安装好 Node 环境。  

Vite 要求 Node 版本是大于 12 版本的。  

全局安装与局部安装 Vite：  

```
npm install vite -g   
npm install vite -D    
```

### Vite 对 css、less 和 postcss 的处理   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489652801181.jpg)

Vite 对 css 的处理，不像 webpack 需要安装 css-loader、style-loader，内部的代码可以直接对 css 进行处理。   

Vite 对 less 的处理，需要安装 less 工具：  

```       

npm install less -D     
```        

Vite 对 postcss 的处理，用来添加浏览器前缀，需要安装 `postcss` 和 `postcss-preset-env`。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489651769542.jpg)

在使用 postcss 时，需要在根目录创建一个配置文件 `postcss.config.js`：      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489652259662.jpg)


### Vite 对 TypeScript 的支持   

Vite 对 TypeScript 是原生支持的。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16489662171165.jpg)

### Vite 本地服务器的原理     

Vite 在本地搭建了一个服务器，基于 Connect 库，Vite 会将我们编写的 `mul.ts`、`title.less` 文件分别转换(编译)为 **ES6 的 js 代码**。  

当浏览器向本地服务器请求数据时，Vite 会将这些请求**拦截**，并**转发**给编译后的 ES6 js 代码，再将这些代码返回给浏览器。   

### Vite 对 Vue 的支持   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490002332134.jpg)

Vite 在处理 Vue 3 单文件组件(`App.vue` 文件)之前，需要安装插件 `@vitejs/plugin-vue`。  

安装插件之后，需要在根目录下创建一个配置文件 `vite.config.js`。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490016375055.jpg)

在 coderwhy 老师的视频中，添加配置文件后，运行 `npx vite` 还是会报错，这是因为这个插件还会依赖一个模块 `@vitejs/plugin-vue`。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490014994457.jpg)

但在新版的 Vite 中，已经不需要安装这个模块 `@vitejs/plugin-vue` 了。  

### Vite 打包项目  

完成开发后，在将项目部署到服务器之前，需要对项目进行打包（构建），Vite 也提供了打包的命令：  

```       

npx vite build    
```    

测试打包之后的文件是否有问题，可以运行另外一个命令：  

```        

npx vite preview   
```

在 `package.json` 的 scripts 字段添加相关的配置，就可以把之前的预览命令由 `npx vite preview` 替换为 `npm run preview`。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490026147789.jpg)


### ESBuild 解析  

Vite 打包的速度非常快，是因为它用到了 ESBuild。   

ESBuild 有点像是之前学习过的 Babel，但相对来说，ESBuild 的速度更快。      
ESBuild 是用 Go 语言实现的，而不是 JS。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490029090297.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490033471983.jpg)


### Vite 架手脚

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490036509066.jpg)


全局安装脚手架： 

```
npm install @vitejs/create-app -g   
```

安装 Vite 脚手架之后，在终端输入 `create-app + 项目名称`，就可以快速创建出一个使用 Vite 作为构建工具的项目。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/04/04/16490040081962.jpg)


