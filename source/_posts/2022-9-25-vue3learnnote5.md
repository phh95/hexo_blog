---
title: 前端框架 Vue3 + TypeScript 学习笔记（五）                                  
date: 2022-9-25 10:55:00               
tags: [Vue,前端,学习笔记]                                                                                 
---  

注：学习笔记来自 coderwhy 老师的 Vue3 课程，由彭宏豪整理。    

## TypeScript  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16623019692055.jpg)

当然，即便像 JS 这么优秀的语言，也是存在一些痛点的：    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16623021378882.jpg)

类型带来的问题   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627356766046.jpg)

JS 中定义的函数，很多时候都会存在 2 个问题：  

* 没有对传入的参数的类型进行校验    
* 没有对是否传入参数进行校验    

JS 没有对我们传入的参数进行任何的限制，只有等到运行代码期间才发现这个错误；    
并且当这个错误产生时，会影响后续代码的继续执行，也就是整个项目会因为一个小小的错误而陷入崩溃。 
  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627381978399.jpg)

类型思维的缺失  

其他大部分语言都存在类型检测的机制，唯独 JS 没有。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627384185875.jpg)


### JS 添加类型约束   

JS 类型检测的 2 个方案：   

* flow   
* TypeScript   

Vue2 中其实也有类型检测，不过它是用的 flow，而从 Vue3 开始，类型检测换成了 TypeScript。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627386006089.jpg)

学习 TypeScript 不仅可以为我们的代码增加类型约束，而且可以让前端程序员逐渐培养类型思维。  

### 认识 TypeScript   

TypeScript 是拥有类型的 JS 超集，它可以被编译成普通、干净、完整的 JS 代码。    

TS 可以简单理解成加强版的 JS。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627390257424.jpg)

### TypeScript 的特点    

* 始于 JS，归于 JS    
* TS 是一个强大的工具，用于构建大型项目   
* 拥有先进的 JS     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627890272629.jpg)

### 众多项目采用 TS  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627892133027.jpg)

大前端的发展趋势     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627896274396.jpg)

### TypeScript 的编译环境   

TS 代码无法直接在浏览器或 node 环境中运行，它需要先经过编译，转换为 JS 代码，才能在浏览器或 node 环境运行。   

将 TS 编译为 JS 代码的 2 个工具：   

* TSC：TypeScript Compiler  
* Babel：Babel 中内置了一个 `plugin/preset` 插件   

全局安装 TS  

```
npm install typescript -g 
```

安装 TS 后，里面就包含了 TSC，我们可以通过 `tsc --version` 来查询 TSC 的版本号。   


### TS 初体验   

创建一个 ts 后缀的文件，在其中编写简单的 TS 代码。  

完成后，在终端进入到 ts 文件所在的路径，输入 tsc + 文件名，它就会在同一路径下生成同名的 js 文件，这个文件就是 ts 编译后生成的 js 文件。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16627908831174.jpg)

### 搭建运行 TS 的环境   

搭建 TypeScript 的运行环境，有 2 种方案：  

* 通过 Webpack 搭建一个 ts 的环境  
* 通过 node 中的一个库 ts-node

### ts-node 库   

全局安装 ts-node 库：  

```
npm install ts-node -g   
```

安装好 ts-node 库之后，为了运行 ts 文件，我们还需要安装另外两个依赖：   

* tslib    
* @types/node   

```
npm install tslib @types/node -g
```


使用 ts-node 库，只需要在终端输入下面的命令   

```
ts-node TypeScript.ts
```

ts-node 库会帮我们做两件事，首先把 ts 编译成 js 文件，再在 node 环境中运行 js 文件。   


### Webpack 搭建 TS 运行环境  

在终端用 cd 命令进入到文件夹 `02_Webpack_ts`，输入 `npm init` 进行初始化，一路按回车键，最后输入 yes，在当前路径下生成一个 `package.json` 文件。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628012262662.jpg)

接着在本地安装 Webpack（开发时依赖）：    

```
npm install webpack webpack-cli -D
```

需要说明的是，从 Webpack 4 开始，在安装 Webpack 的同时，也要安装 Webpack-cli。   


安装 Webpack 后，文件夹中会多出 node_modules 的字文件夹，且 `package.json` 中显示 Webpack 和 Webpack-cli 的版本号。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628016507547.jpg)

在 `package.json` 文件中增加一个 build 脚本： 

```
"build": "webpack"        
```

增加 build 脚本，是为了等会使用 Webpack 来对项目进行打包。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628019232983.jpg)

我们还要在根目录下创建一个 Webpack 的配置文件 `webpack.config.js`，用来声明入口和出口文件。

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628028818613.jpg)

为了让 Webpack 能将 ts 文件编译为 js 文件，我们还需要安装一个 ts-loader：   

```
npm install ts-loader typescript -D
```

安装了 ts-loader 后，还需要在 `webpack.config.js` 中添加相应的配置：  

即指定用 ts-loader 来处理以 `.ts` 结尾的文件。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628254127962.jpg)


配置好之后，重新运行 `npm run build`，终端还会抛出报错的信息，说我们缺少了一个名为 `tsconfig.json` 的文件。   


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628255969767.jpg)

对于这个问题，我们可以在终端中输入 `tsc --init`，在根目录下生成 `tsconfig.json` 文件。  


这里还有另外一个问题，ts 文件导入模块时不让加 `.ts` 后缀名，不加后缀的话，Webpack 在进行打包的时候，找不到 `main.ts` 文件，因此我们还需要在 Webpack 配置文件中再添加 resolve 字段。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628259965651.jpg)
 
完成以上配置后，在终端中运行 `npm run build`，就能看到 ts 文件被顺利编译为 js 文件了。   


当然，如果每次修改代码之后，都要手动输入 `npm run build` 进行编译，还是有点麻烦。   

针对这个问题，我们可以安装 webpack-dev-server 来构建一个本地服务，这样当我们保存代码，就会自动进行编译。   

```
npm install webpack-dev-server -D   
```

安装 webpack-dev-server 后，还需要去到 Webpack 配置文件添加一个 serve 脚本，添加之后，当我们运行 `npm run serve`，就能开启本地服务了。    


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628269798768.jpg)


如果我们想把根目录下的 `index.html` 文件指定为模板文件，我们可以安装一个 html-webpack-plugin 的插件。  

```
npm install html-webpack-plugin -D     
```


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628280531886.jpg)

安装插件之后，还需要在 webpack 配置文件添加相应的配置：   

导入插件，在模块导出中添加 plugins 字段，template 将根目录下的 `index.html` 指定为模板文件。    

这样即便我们没有在 `index.html` 文件通过 script 标签引入编译后的 `bundle.js` 文件，插件也会自动帮我们添加。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628282385545.jpg)


还需要注意的是，使用 webpack-dev-server 开启本地服务后，由于 dev-server 对编译生成的 `bundle.js` 文件存在依赖，因此我们还要在 webpack 配置文件的 extensions 数组，添加 `.js` 文件后缀。   

不添加 js 文件后缀的话，在终端运行 `npm run serve` 会报错。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628284040449.jpg)

### TS 变量的声明  

TS 声明变量的关键字：var、let、const    

在 tslint 中并不推荐使用 var 来声明变量。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628643845804.jpg)

```ts
const message: string = "phh"
const name: String = "Hello TypeScript"
```

变量名后面加上的类型注册，首字母为小写和大写是不一样的—— 

* string：表示 TypeScript 中的字符串类型
* String：表示 JS 的字符串包装类的类型（类）  

两个工具 eslint 和 tslint   

eslint：可以让 js 代码更加规范   
tslint：可以让 ts 代码更加规范   

使用 tslint 之前，需要全局安装：  

```
npm install tslint -g
```

安装好之后，用 cd 命令进入到项目的根目录下，输入 `tslint --init`，就会在根目录下生成一个 `tslint.json` 文件。   

有了这个文件，当我们书写的 TS 代码不规范，它会给我们报对应的警告或者错误的。    


TypeScript 官方文档地址：  
https://www.typescriptlang.org/      


TS 是 JS 的一个超级，TS 有 JS 的所有特性，而且还额外增加了一些新东西：   

* 强类型  
* Generics 泛型  
* Interfaces 接口  


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628674719115.jpg)

### TS 数字类型

ES6 开始，新增了二进制和八进制的表示方法，因此 TS 也支持二进制、八进制和十六进制的表示。  

二进制：0b 开头
八进制：0o 开头
十六进制：0x 开头        


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16628684712109.jpg)

### TS 数组类型的使用

TS 中声明数组类型时，有两种书写方式：     

Array 的首字母必须是大写。  

`Array<string>`、`string[]` 的含义都是，数组中的元素都为字符串类型。         

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629161594128.jpg)

### TS Symbol 类型

Symbol 翻译为符号，是 ES6 新增的一种数据类型。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629169972892.jpg)

### TS - any 类型

TS 中使用 any 类型的场景：  

* 当进行一些类型断言 as、any   
* 在不想给某些 TS 添加具体的数据类型时（这时 TS 就和原生的 JS 代码是一样的）     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629527175239.jpg)

### TS - unknown 类型

unknown 是 TS 中比较特殊的一种类型，用于描述类型不确定的变量。  

下图的例子，result 返回的值的类型是不确定的，我们可以用 any 也可以用 unknown，这时最好使用 unknown，因为 any 太灵活了。

* unknown 类型只能赋值给 any 和 unknown 类型   
* any 类型可以赋值给任意类型     

当我们把 unknow 类型的 result 赋值给 string/number 类型的 message1/message2，代码会提示错误；而如果把 result 换成 any 类型，同样的情况就不会报错。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629544796739.jpg)

### TS - void 类型  

void 通常用来指定一个函数是没有返回值的，那么它的返回值就是 void 类型。   

如果没有在函数体最后一行使用 return 语句，那么这个函数就是没有返回值的，它的返回值就是 void 类型。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629553107092.jpg)

但如果我们添加了 return 语句，函数返回值的类型就是确定的，例如下图，它的返回值就是 number 类型。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629567559397.jpg)

### TS - never 类型

never 表示永远不会发生值的类型。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16630250066528.jpg)


### TS - tuple 类型

tuple 是**元组**类型，很多语言中也有这种数据类型，比如 Python、Swift 等。  

元组类型的写法：一个中括号，里面指定不同的数据类型。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629587338632.jpg)

元组与数组的区别：  

* 数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629661698905.jpg)

### 函数的参数类型

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629664511913.jpg)

### 函数的返回值类型   

多数情况下不需要注明返回值的类型，因为 TS 会根据 return 返回值推断函数的返回类型。  

而某些第三方库出于方便理解，会明确指定返回值类型。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629665932528.jpg)


### 匿名函数的参数类型   

传入 forEach() 的函数，即为匿名函数。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629686383482.jpg)

### 对象类型

函数传入的形参是一个对象类型。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629795059110.jpg)

### 可选类型

对象类型可以指定哪些属性是可选的，将属性设置为可选类型，只需要在属性后面加多一个问号 ? 。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16629795795122.jpg)


### 联合类型   


### 类型别名  

使用 type 定义类型别名(type alias)，简化代码的书写。 


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16630255278729.jpg)


### 类型断言 as 


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16632031962410.jpg)



`document.getElementById` 得到的变量类型是 HTMLElement，类型比较宽泛。   

假设我们获取到的是一个 img 元素，想给图片的 src 属性重新赋值，会发现在 TS 中是报错的。  

这时我们可以使用类型断言，将变量的类型从 HTMLElement 缩小到更准确的 HTMLImageElement，这样就不会报错了。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16631159827212.jpg)

### 非空类型断言

在可能为空(undefined)的值后面加上一个感叹号，就是非空类型断言。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16632591067620.jpg)

下图的例子，我们在类型为字符串的 message 后面加了一个问号，将它设置为**可选类型**，由于只有一个参数且是可选类型，那有可能会出现没有传入参数，即传入的参数为 undefined 的情况。   

undefined 没有 length 属性，就会导致代码在编译阶段报错。   

如果我们能 100% 保证传入的参数为非空，那么可以在变量 message 的末尾加上一个感叹号，转换为非空类型断言，这样就能**跳过 TS 在编译阶段对它的检测**。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16632591456700.jpg)


### 可选链的使用   

下图的例子，我们定义了一个类型 Person，其中的 friend 对象为可选类型，可能有值，也可能为 undefined。   

对于这种情况，一种解决方法是，在调用 friend 对象的属性之前，先用 if 判断。  

但使用 if 判断也存在一个问题，如果 friend 对象中嵌套了另外一个可选类型，想继续调用嵌套元素的属性时，就需要再次进行判断，非常麻烦。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636077712120.jpg)

一个更好的方法是，使用 ES11（ES2020）新增的**可选链**。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636084279825.jpg)

可选链使用可选链操作符 `?.`   

如下图，info 对象嵌套的 friend 对象是可选类型，那我们在调用 friend 对象的属性时，可以在 friend 对象后面加一个可选链操作符 `?.`。     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636085286444.jpg)

### ?? 和 !! 的作用   



![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636086855856.jpg)

?? 操作符，是 ES11 增加的新特性，被称作**空值合并操作符**。  

空值合并操作符，其实等价于 JS 中的**三目运算符**，只是空值合并操作符看起来更简洁。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636102459037.jpg)

### 字面量类型  

普通的文本或数字类型，也是可以作为类型的，叫做字面量类型。     

字面量类型，需要与联合类型结合使用。  

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636943991878.jpg)


![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16636945844767.jpg)


### 字面量推理

定义的 request 函数，第二个参数为**字面量**类型，但传入的 `options.method` 参数是**字符串**类型，与定义函数时声明的类型不同，且字符串存在被修改的可能，因此在编译阶段会报错。  

解决方法：  

* 使用类型断言：在 `options.method` 后面添加 `as Method`，指明它是一个字面量类型       
* 使用字面量推理：在 options 对象的末尾添加 `as const`      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16637201983986.jpg)

在对象 options 末尾添加 `as const`，此时再将鼠标移动到 options 对象上方，会显示 method 为只读，且为字面量类型中的 "POST"。        

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16637206672306.jpg)

### 类型缩小

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16637217562252.jpg)

instanceof 的例子   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638057159407.jpg)


### TypeScript 函数类型   

在 JS 开发中，函数是重要的组成部分，并且函数可以作为**一等公民**（可以作为参数，也可以作为返回值进行传递）。     

函数类型的表达式： `() => void`

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638624614641.jpg)

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638628388529.jpg)



如果函数的返回值有明确的类型，可以将 void 更改为对应的类型，例如下图的 number。    

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638626534725.jpg)


### 函数参数的可选类型  

当传入函数的两个或多个参数中，包含有可选类型时，**可选类型必须写在必选类型的后面**。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638631442758.jpg)

### 函数参数的默认值  

如果函数传入两个参数，第二个参数有默认值，那么在调用的时候，第二个参数可以不写；但如果第一个参数有默认值，那么在调用函数时，第一个参数得写默认值，或者写 undefined。   

函数传入多个参数时的书写顺序：  

先写**必传参数**，再写**有默认值的参数**，最后写**可选参数**。      

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638663396891.jpg)


### 函数的剩余参数

### 函数的重载

函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载。   

先在前面定义多个重载函数，不需要写函数体，
后面再写具体的实现。     

下面的例子中，两个重载函数传入的参数类型是不同的，一个是 number 类型，一个是 string 类型。   

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16638934889503.jpg)

函数的重载使用场景：用联合类型实现起来比较麻烦的时候，才考虑使用函数的重载。(优先级：联合类型 > 函数的重载)     

![](https://article-picbed-1302715071.cos.ap-guangzhou.myqcloud.com/2022/09/25/16640672138523.jpg)





























   



