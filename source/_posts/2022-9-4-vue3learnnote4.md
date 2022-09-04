---
title: 前端框架 Vue3 学习笔记（四）                                   
date: 2022-9-4 22:20:00               
tags: [Vue,前端,学习笔记]                                                                                 
---    

注：学习笔记来自 coderwhy 老师的 Vue3 课程。    


## VueRouter 路由使用  

### 认识前端路由

路由器主要维护的是一个**映射表**：ip 地址和真实电脑的 mac 地址间的映射。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16601512331215.jpg)

后端路由阶段（后端渲染）   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16601515472630.jpg)

前后端分离阶段（前端渲染）

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16601523401862.jpg)


SPA开发阶段

SPA：是 Single Page Application 的缩写，单页面应用。  


当我们改变 URL 路径的时候，不要向静态服务器发起请求（页面不要发生刷新），该怎么实现呢？ 

有两种方法：  

* 改变 URL 的哈希值  
* HTML5 的 History 模式  

这两种方法本质上是一样的：**根据不同的路径，前端渲染不同的内容**（映射）。            

### URL 的哈希值    

路由的原理，其实就是监听 URL 的哈希值，当哈希值变化的时候，改变页面中的组件，实现页面内容的变化。


哈希的优势就是兼容性更好，在老版 IE 中也可以运行，但是缺陷是 URL 有一个井号 #，显得不像一个真实的路径。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16603558153951.jpg)


下图是 URL 哈希值变化的一个 demo，通过监听哈希值的变化，修改 div 容器中的内容。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16603548692169.jpg)


### HTML5 的 History

History 是 HTML5 新增的对象（接口）。这个接口有 6 种模式改变 URL 而不刷新页面：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16603650369565.jpg)


当路径改变的时候，不会向服务器发起请求，而是由前端决定我们要渲染什么样的内容。  

history 的 pushState 是压栈操作，当我们点击超链接时，打开的内容会堆叠在前一个内容上方，当点击浏览器左上角的「后退」按钮，回退到前一个页面，当前的内容就会弹出栈。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16603651142023.jpg)


### 认识 Vue 路由  

Vue Router 是路径和组件之间的映射关系。  

在 Vue Router 的单页面应用中，页面的路径的改变就是组件的切换。  

使用 Vue Router 之前，需要先安装路由：   

```
npm install vue-router@4  
```

### 路由的基本使用流程  

创建一个 router 文件夹，存放路由的配置文件 `index.js`：   

声明一个数组 routes，每一个元素是一个对象，用于**配置路径和组件之间的映射关系**。     

接着使用 createRouter() 创建一个路由对象 router，将数组传入函数，同时 history 字段指定我们要用哪种模式的路由——hash 还是 history。  

最后导出路由对象。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604397790321.jpg)

在项目的入口文件 `main.js` 中，导入路由对象，调用 app 的 use() 方法安装 router 对象，类似于之前使用插件一样。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604400548426.jpg)

在 `App.vue` 使用时，使用 `router-view` 进行占位。  

`router-view` 和 `router-link` 是 Vue 内置的组件，无需注册就能直接使用。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604402847974.jpg)

### 路由的默认路径

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604686696052.jpg)


当我们直接打开 `localhost:8081` 时，控制台会有一个警告，提示路径 `/` 无法匹配。     

对于这个问题，我们需要在路由配置中，给路径 `/` 配置一个重定向，重定向到路径 `/home` 所在的主页。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604407290804.jpg)

在数组 routes 给路径 `/` 添加重定向之后，当我们在浏览器打开 `localhost:8081`，它就会自动重定向到 Home 组件所在的页面 `localhost:8081/#/home`。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604418469923.jpg)


### router-link

router-link 是 Vue 内置的组件，经过浏览器渲染最终会变成 a 标签。   

这个组件可以配置多个属性：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604907719588.jpg)


active-class 属性的默认值为 router-link-active，如果你觉得这个类名太长，可以给 router-link 添加 active-class 属性，用来自定义激活 a 元素后的类名。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16604910070625.jpg)


### 路由懒加载  

如果一个页面添加了很多个路由（组件），在构建（打包）的时候，默认会将所有组件都打包到 `app.js` 中，打包的文件太大，不利于网页的首次加载。   

我们可以参考以前在处理大组件的「异步组件」的操作，对路由进行**分包**的操作，将暂时不需要用到的组件单独打包，在需要用到、或者浏览器闲置的时候，再从网上下载下来。  

那想要实现路由懒加载，该如何修改之前写好的代码呢？   

来到路由文件夹 router 下的 `index.js` 文件中，注释通过 import…from 导入组件的方式，修改映射关系中的配置：  

将组件更改为通过 import() 函数导入，下面是箭头函数的写法。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605203942418.jpg)

更改代码之后，重新运行 `npm run build` 进行打包，dist > js 文件夹就会多出 4 个 js 文件，这 4 个文件就分别对应分包的 Home 和 About 组件。  

如果我们想知道，分包的 js 文件具体对应哪一个组件，我们可以使用 Webpack 的**魔法注释**（magic comments）：    

在 import() 函数传入的参数，最前面加多一个 webpackChunkName 的注释。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605209249996.jpg)


### 路由的其他属性 

在路由的 `index.js` 文件配置映射关系时，我们可以给 routes 数组中的 route 对象添加 2 个其他的属性：   

* name：给 route 对象起一个名字  
* meta：元数据，给 route 对象添加额外的信息    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605756221257.jpg)

### 动态路由基本匹配   

路由的路径不是写死的，给路径一个**占位的默认值**，就像下图的 `/:username` 就是占位的默认值，在使用时通过 router-link 的 to 属性传入一个具体的值。  

之后在对应的组件里面，通过 $route 获取到。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605789454841.jpg)

给占位的默认值传入一个具体的值 phh。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605791970654.jpg)

### 获取动态路由的值    

如果我们想拿到路径中包含的具体值，可以通过 $route 对象。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605802341899.jpg)

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605793853940.jpg)

如果想在 setup() 中拿到具体的值，需要用到 Vue-router 提供的一个 hook——useRoute。   

 ![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605800588180.jpg)


### 动态路由匹配多个参数

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16605803017751.jpg)


### Not Found 

当用户输入的路径与我们在 router 文件夹下的 `index.js` 文件中的配置不一致时，为了给用户提供更好的体验，我们最好再添加一个 Not Found 的组件，当输入的路径与配置的路径不一致时，就显示 Not Found 组件。   

在配置 path 字段时，用到路径匹配 `pathMatch(.*)`，写法是固定的。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16606620193775.jpg)

匹配规则末尾加星号 * ，会将路径解析为元素为字符串的数组。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16606658842976.jpg)


### 路由的嵌套   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16606963778526.jpg)


Home 组件中嵌套另外两个子组件 HomeMessage 和 HomeGood 组件。  

在配置 routes 映射关系时，需要在 home 路由下增加一个 **children 字段**，children 字段是一个数组，数组中的每一个元素是一个对象。   

需要注意的是，在 children 中配置路径时，前面不需要加多一个斜杠 / ，只需要写路径的名称就好，像下图右侧的 message 和 good。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16606665391551.jpg)


## 编程式导航  

如果我们不使用 Vue 路由封装好的 router-link 组件，还可以实现在不同页面间的跳转吗？  

——可以的，这时就需要用到**编程式导航**。  

下面的例子，给 button 绑定一个点击事件 jumpToAbout，即点击按钮之后，会跳转到「关于」页面。   

在 script 标签中添加 methods 字段，书写一个函数 jumpToAbout() ，实现点击跳转。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16607493842567.jpg)


如果我们在 Composition API 中书写绑定的点击事件，因为 setup() 没有绑定 this，因此我们要先从 Vue 路由中导入 useRouter。  

声明得到一个 router 对象后，再在点击事件中调用 router 对象的 push 方法。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16607584275659.jpg)


在不同的 router-link 进行页面的跳转，其实执行的是 pushState 的操作，即压栈，新页面会「压」在旧页面上方。   


### router-link 的 v-slot  

之前我们使用 Vue 路由内置的 router-link 组件时，默认都是在组件中添加文本，但其实 router-link 组件支持使用插槽。   

作用域插槽 v-slot，可以将 router-link 组件的数据传入组件内部的插槽中。   

v-slot 传入的 props 对象，包含了多个属性：  

* href：跳转的链接       
* route 对象   
* navigate：导航函数，可作为 click 绑定的点击事件      
* isActive：是否当前处于活跃的状态       
* isExactActive：是否当前处于精确的活跃状态      


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609247264264.jpg)


router-link 可以按照插槽的方式，来自定义组件内部显示的是一个元素，还是一个组件，或者是显示来自 v-slot 传入的 props 对象的诸多元素。   

从 Vue-router 4 开始，它对 router-link 做了这么一个扩展，有了 v-slot 这个扩展，也让它变得更加灵活。       


### router-view 的 v-slot     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609680497636.jpg)

router-view 组件是一个占位符，会显示我们传入的各种组件。  

如果想实现，当我们点击按钮切换到不同的组件时，router-view 显示的组件会带有过渡动画，该怎么做呢？    

——这里还是要用到作用域插槽。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609648260908.jpg)

router-view 默认情况下时拿不到占位符中显示的组件，为了给其中显示的组件添加动画，就需要用到作用域插槽。   

在 router-view 中添加 v-slot 属性，传入 props 对象，使用 `props.Component` 就能拿到占位符中显示的组件。       

在其中使用动态组件 component，组件的 is 属性绑定 `props.Component`，最后再将动态组件放入 transition 组件，添加 CSS 样式，这样当我们点击按钮切换组件时，就会带有过渡动画。     


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609654425721.jpg)

代码的另外一种写法，在传入 v-slot 直接对 props 进行解构，解构拿到 Component 属性。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609719246789.jpg)

### 动态添加路由  

在之前的练习代码中，我们都是在 `index.js` 中提前配置好了所有的路由，即最开始注册的路由都是写死的。  

```
const routes = [{},{},{path:"/order"}]
const router = createRouter({routes})
app.use(router);   
```

但在一些后台管理系统的开发中，因为**人员权限**的不同，不同人可访问的路由应该是不同的，而不是每个人都可以访问相同的路由，为了实现这一点，就需要用到动态添加路由：  

根据人员权限的不同，服务器返回不同的路由，每个人在后台管理系统左侧导航栏看到的选项也就是不同的。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609725986052.jpg)


动态添加路由：一开始注册路由时，routes 数组为空数组，之后在**路由导航守卫**中进行判断，根据菜单或人员的角色，注册对应的路由。   

```
const routes = []
const router = createRouter({routes})


if(角色为管理员) {
    router.addRoute({path: "/order", component: () => import()})    
}

if(角色为运营) {
    router.addRoute({})
}

app.use(router);   
```


动态添加路由

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609796122148.jpg)


将原本放在 routes 数组中的对象单独拿出来，调用 router 对象的 addRoute 方法传入。   



![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609796833987.jpg)

### 动态删除路由

动态删除路由有 3 种方式：  

* 添加一个 name 相同的路由（更确切地说是替换，而不是删除）    
* 通过 removeRoute 方法，传入路由的名称 name  
* 通过调用 addRoute 返回的函数   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16609799046523.jpg)

### 路由导航守卫   

路由导航守卫：在页面跳转时，增加一些判断条件，例如检查当前用户是否登录，如果是未登录的状态，可以让用户先跳转到登录页，登录完再跳到目标页面。 


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16610113922402.jpg)

在 router 文件夹下的 `index.js`，使用 router 对象的 beforeEach 方法（前置守卫），传入一个函数，这个函数需要传入两个参数 to 和 from，还有一个可选参数 next。    

这里的 to 和 from 都是 route 对象。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16610128455045.jpg)

### 完整的路由导航守卫解析流程


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16610138516063.jpg)


## Vuex 的状态管理  

### 什么是状态管理  

单向数据流

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16612129200632.jpg)


复杂的状态管理：  

* 父组件从子组件拿数据，会破坏原本的单向数据流  
* 通过组件数据的传递，当其中一个组件的层级太深时，传递数据也不方便。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16612148596369.jpg)


Vuex 的状态管理：   

借鉴了 React 的 Redux。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16612153415029.jpg)


Vuex 状态管理的流程：   

Mutations 不能异步操作，为了解决这个问题，Vuex 多增加了一个层——Actions。       


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16612158023013.jpg)

### Vuex 的安装 

在终端输入下面的命令，即可安装 Vuex：   

```
npm install vuex@next 
```

这个命令安装的 Vuex 版本为 `4.0.2`。   

## Vuex 的使用  

课前唠嗑：   

老师推荐的前端学习路线   

js ➡️ Vue ➡️ 小程序(原生开发/uniapp/Taro) ➡️ node ➡️ React ➡️ Webpack ➡️ 数据结构和算法 ➡️ leetcode     

### 创建 Store

在项目 src 路径下创建一个名为 store 的文件夹，在 store 中创建一个 `index.js` 文件。  

从 vuex 导入 creatStore，创建 store 对象。

state 即状态，用来存放共享的数据，它的写法类似于 Options API 的 data 的写法。   

mutations 则是写以前写在 methods 中的方法。 

最后还要导出 store 对象。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615287834352.jpg)


在入口文件 `main.js` 导入 store 对象，接着要和**使用插件**类似的方法，将 store 对象传入 use() 中。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615615032381.jpg)

前面两步就完成了 vuex 的配置，来到 `App.vue` 文件。    

template 模板使用 store（仓库）中的数据（即 state 数据），需要用 `$store.state.counter` 的写法。    

而按钮绑定的事件，想触发 mutations 中定义的方法，需要使用 commit() 进行提交。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615618870315.jpg)



![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16614735708550.jpg)


### 单一状态树

Vuex 使用单一状态树，用一个 store 对象就包含了全部的应用层级的状态。    



![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615264660726.jpg)


### Vue Devtool 

Vue 官方提供的一个调试工具，本质上是一个 Chrome 插件。   

插件安装链接：   
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related?utm_source=chrome-ntp-icon

### state 展示的辅助函数   

template 模板使用 mustache 语法 `$store.state.counter`来调用 state 中的数据，看起来比较冗长，我们可以使用 computed 作为替代。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615665004044.jpg)

但 computed 也存在一个问题，每个数据都要单独进行定义，如上图定义的 sCounter、sName、sAge，也是有些冗余。   

为了让代码变得更简洁，可以使用 vuex 提供的**辅助函数 mapState**，它是对 state 数据的映射。   

先从 vuex 导入辅助函数 mapState。   

mapState() 返回的是一个对象，因此当 computed 中有其他计算属性的情况，要在 mapState() 前面加多一个**展开运算符** `...`。      

mapState() 可传入两种类型的数据：       

* 数组  
* 对象   

如果传入的是对象，我们可以对从 state 传入的数据进行重命名，例如下图的 counter 命名为 sCounter。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615694915244.jpg)

### 在 Composition API 中使用 mapState  

前面是在 Options API 中的计算属性使用 mapState，如果换到 Compostion API，该如何使用 mapState 呢？     

老师在课上封装了一个名为 useState 的 hooks，将数组或对象传入 useState 中，也能实现同样的效果。   

hooks 本质上是一个函数，只是因为它在 setup 中使用，因此我们把它称之为 hook。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16615848295472.jpg)

## Vuex 的 5 大核心    

Vuex 有 5 大核心：   

* state(状态)     
* getters  
* mutations(同步)  
* actions(异步操作)    
* modules(对 store 里面的状态划分模块)  

### getters 的基本使用   


和 state 一样，getters 也有辅助函数 mapGetters。   

和 mapState 一样，mapGetters 既可以传入数组，也可以传入对象。    

不过传入对象时，它的写法与 mapState 存在着区别：   

mapState 需要回调 state，而 mapGetters 只需要使用 getters 中定义的函数名即可。   

```
...mapState({
    sCounter: state => state.counter,
    sName: state => state.name
})
```


```
...mapGetters({
    sNameInfo: "nameInfo",
    sAgeInfo: "ageInfo"
})
```


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16616622282974.jpg)


### 在 Composition API 中使用 mapGetters  

和 mapState 一样，封装一个 hooks `useGetters`。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16616654755554.jpg)



### Mutation 基本使用  

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16616656752442.jpg)


commit() 提交可以传入两个参数，第一个是类型，即 mutation 中定义的函数名，第二个参数可以是一个数字，也可以是一个对象 payload。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16616683896212.jpg)

commit() 还提供了另外一种书写代码的方式，可在 commit 中直接传入一个对象，在对象的 type 字段写明调用的是 mutations 中的哪个函数。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16616688581061.jpg)


### Mutation 的辅助函数 mapMutation

使用辅助函数 mapMutations，可以将我们我们在 store 的 `index.js` 文件 mutations 定义的方法，映射到 `Home.vue` 的 methods 字段中。  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16617871859210.jpg)

### 在 Composition API 中使用 mapMutations  

在 setup() 中使用 mapMutations 比较简单，不需要对 mapMutations 返回的函数进行转化。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16617876584967.jpg)


### Actions 的基本使用   

Actions 类似于 mutation，不同在于：   

* Actions 提交的是 mutation，而不是直接变更状态（state）   
* Actions 可以包含任意异步操作   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16618183378069.jpg)

在 store 文件夹的 `index.js` 的 store 对象中添加 actions 字段：  

actions 中定义的函数，可以传一个参数 context，也可以传两个参数 context 和 payload，第二个参数 payload，用来接收组件传递过来的数据，例如字符串或对象。     

actions 的工作方式是，提交一个 commit，触发 mutations 中定义的方法，最后引起 state 中数据的改变。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619081623326.jpg)

`Home.vue` 组件中，需要使用 `$store` 对象的 dispatch 方法**派发事件**。  

dispatch 可以传入一个参数，也可以传入 2 个参数，第二个参数可在派发事件的同时携带其他数据，会传入 actions 的 payload 对象中。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619096588785.jpg)

这里的 dispatch() 传入的参数为对象类型时，还有另外一种代码书写方式：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619109318581.jpg)

### Actions 的辅助函数

Actions 的辅助函数：mapActions


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619919958645.jpg)


### Actions 的异步操作



![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619918631337.jpg)


在组件里面，想要知道某一次派发出去的 actions 有没有完成的话，需要让当前的 actions 返回一个 Promise。

在返回 Promise 的情况下，完成的时候会调用 resolve，发生错误的时候会调用 reject。  


### Vuex Module 模块的使用  

为什么要使用模块 Module？   

  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16619932121650.jpg)

将原本放在 store 文件夹下 `index.js` 中的数据拆分为多个模块，在 store 文件夹下创建一个名为 modules 的文件夹，用来存放一个或多个模块。  

每个模块，本质上就是一个对象，包含 state、mutations、actions、modules 字段，定义好之后导出模块。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621370772809.jpg)


在 `index.js` 导入拆分的模块，在 store 对象的 modules 字段使用刚导入的模块。   

因为两个模块是使用 export default 导出，因此在导入时可重新命名模块的名称：  

homeModule ➡️ home
userModule ➡️ user    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621373048819.jpg)

最后，在 `Home.vue` 组件中使用模块，譬如获取模块中定义的数据：   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621378592556.jpg)

### module 的局部状态   

对于模块内部的 mutations 和 getters，接收的第一个参数是模块的局部状态对象。   


命名空间

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621700483330.jpg)



在模块对象的开头加上 `namespaced: true`，这样就给模块添加了命名空间。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621701545516.jpg)




### 细节补充  

前面学习 getters 时，最多只给其中定义的函数传入 2 个参数 state 和 getters，而模块中的 getters 函数最多可以传入 4 个参数，另外的 2 个参数 rootState 和 rootGetters 可分别获取根文件 `index.js` 中的数据和 getters。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621682229707.jpg)

模块 actions 中定义的函数，可对传入的 context 对象进行解构，总共包含了 6 个参数——commit、dispatch、state、rootState、getters、rootGetters。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621694653956.jpg)

module 修改或派发根组件  

如果我们希望在 module 的 actions 中修改 root 中的 state，可以在 commit() 或 dispatch() 传入 1 个对象参数 `{root: true}`。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621705423962.jpg)


### modules 的辅助函数   

和前面一样，template 模板中书写的 mustache 语法变得越来越长，为了简化代码，modules 模块同样可以使用辅助函数。   

modules 辅助函数的代码有 3 种书写方式：  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622031364643.jpg)



* 方式二：在辅助函数中指明使用的是哪个模块             

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621757109468.jpg)


* 方式三：从 vuex 中导入函数 createNamespacedHelpers，在函数中传入模块名。     

createNamespacedHelpers() 传入模块名，得到的是一个对象，里面有多个方法，可以在使用 const 声明变量时直接进行解构。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16621781836976.jpg)

### 在 Composition API 中使用 modules

和前面一样，从模块获取 state 和 getters 数据时，需要用到我们自己封装的 useState 和 useGetters 函数。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622515346958.jpg)

前面在封装 useState 和 useGetters 函数时，我们没有考虑到「模块」的情况，因此需要对代码进行补充：   

useState() 多传入一个参数 moduleName，对传入的模块名进行判断——模块名是否为字符串，且不为空。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622517348188.jpg)


## nextTick  

nextTick，是 Vue 提供的一个 API。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622955227161.jpg)


nextTick 的原理       

Vue 内部会执行很多任务：   

* watch(,回调函数) ➡️ preQueue(队列)  
* 组件的更新 update ➡️ jobQueue  
* 生命周期回调 ➡️ postQueue   


JS 的事件循环(event loop)会分成两个队列：  

* 微任务队列：Promise.resolve().then(回调函数)       
* 宏任务队列：按钮点击事件   

在同时有微任务队列和宏任务队列的情况下，JS 会优先执行微任务队列中的任务(task)。           

Vue 内部对队列进行了巧妙地处理，**将队列中的任务都加入到了微任务队列中**，而 nextTick() 中传入的函数，也会将函数对应的任务放入到微任务队列的末尾。  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622813900893.jpg)


## historyApiFallback   

这是一个和 **Vue 路由/Webpack** 相关的知识点。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16623005342221.jpg)


historyApiFallback，是 Webpack 中的一个配置，它位于 `node_modules > @vue > cli-service > lib > commands > serve.js` 文件
中。

这个配置默认为 true，当我们进入一个页面后，重新刷新页面，（配置后）能让页面正常显示，而不会返回 404。   

之所以能实现这个，是因为它将当前的路径重定向到了首页 `index.html`，保证路径与页面的对应关系是正确的。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16622990138120.jpg)

Vue 的脚手架 Vue-cli 是基于 Webpack 的，如果我们想修改 Webpack 中的配置，有 2 种方式：  

* 修改 cli-service 源码   
* 在项目根目录下创建一个 `vue.config.js` 文件，在里面修改 Webpack 的配置   


在 `vue.config.js` 文件中将 historyApiFallback 配置为 false，它会覆盖 node_modules 中配置的 true。     


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16623004248904.jpg)


historyApiFallback 配置为 false 时，当我们刷新打开的页面，会出现下面的错误。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/04/16623003436230.jpg)







