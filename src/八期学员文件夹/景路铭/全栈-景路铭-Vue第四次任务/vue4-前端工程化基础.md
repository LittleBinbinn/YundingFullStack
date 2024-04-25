1.技巧：切换盘：需要先切换盘符——D:

将文件拖拽进cmd中

node 文件部分名称加Tab键就自动补全

2.版本工具：（了解）

n/nvm不支持windows系统

nvm-windows

#### 3.打开终端的方式

vscode 中终端——新建终端——（默认进入根目录）——cd ——node文件

或者右键——在集成终端中打开

#### 4.将终端换成cmd

在终端右上角的向下的箭头里，将powershell换成cmd

默认新建cmd：选择默认配置文件

#### 5.node的输入和输出：

(1)输出-----console.log

console.clear清空控制台（靠移动实现，实际没有清空）

console.trace( )打印某位置代码执行调用栈

(2)输入

格式：①cmd中：node 文件（空格）输入内容1（空格）输入内容2

![微信图片_20240419212726](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419212726.jpg)

​         ②   文件中：process.argvector(容器)——>process.argv ![微信图片_20240419212726](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419212726.jpg)

完整呈现

![微信图片_20240419212726](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419212726.jpg)

#### 6.node的REPL 的使用（浏览器的控制台就可以看做一个REPL）

进入REPL：cmd—node回车（enter）

退出REPL：①按两次Ctrl+c  或②cls清空控制台

#### 7.node中全局对象

(1)global对象（类似浏览器中window）

globalThis===global/window

(2)特殊全局对象：实际上是模块变量，但每个模块都有，在命令行交互中不可使用。包括【__dirname】,   【__filename】,【exports,module,require()】。

①__dirname当前文件所在的目录结构

②__filename当前目录加文件名称

(3)常见的全局对象

process：process.argv获取对应参数

![微信图片_20240419213400](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419213400.jpg)

(5).定时器方法

setTimeout //实现特定时间后执行一次（只一次）

setInterval //实现每隔特定时间执行一次 

setImmediate //立即执行，不传时间         放在一起比较：process.nextTick

#### 8.模块化

![微信图片_20240419213408](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419213408.jpg)

ECMAScript没有推出自己的模块化方案，社区提出：commonJS/AMD/CMD

ES6推出自己的模块化方案：ESmodule

#### 9.commonJS规范和node中使用案例

（1）

![微信图片_20240419172113](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419172113.jpg)

（2）commonJS规范：exports导出；require导入

![微信图片_20240419171936](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419171936.jpg)

（3）node中每个JS文件都是一个模块。在浏览器中默认是不支持commonJS规范的

（4）在node中的实例：

![微信图片_20240419172005](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419172005.jpg)

![微信图片_20240419172053](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419172053.jpg)



优化代码：导入对象之后，直接对其进行解构

![微信图片_20240419171953](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419171953.jpg)

#### 10.理解commonJS在node中实现的本质

node导入和导出的本质——引用赋值

exports是一个对象，默认是空对象，我们可以在对象中添加很多属性，添加的属性会导出

导入：

![微信图片_20240419211417](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211417.jpg)



#### 11、node中module.exports本质

exports少用，module.exports多用

module是一个对象，对象中有一个exports对象

![微信图片_20240419211439](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211439.jpg)

node导出的本质是在导出module.exports对象，但exports==module.exports，require找的是module.exports

开发中最常见的写法:新建一个新对象，与原对象无关，修改原对象无法起作用

![微信图片_20240419211404](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211404.jpg)

最开始：module.exports=exports=main中的赋值对象，但一旦给module.exports赋值后就不相等了

#### 12.node中require查找模块的细节

require是一个函数，可以帮助我们引入一个文件（模块）中导出的对象

(1)查找规则：require（X）

①X是node核心模块（path，http），直接返回核心模块并停止查找

②X是以./或../或/(表示根目录)开头的：

![微信图片_20240419211452](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211452.jpg)

③X既不是核心模块也不是路径

npm install axios 利用npm从远程仓库把axios源码下载到文件夹里

那会找   一个叫node_modules的文件夹在该文件夹下找X，如果在该目录下未找到node_modules，会到上一级目录找，直到在根目录下找。如果都未找到，报错

#### 13.node模块的加载过程解析

①当模块第一次被引入时，该模块中的JS代码会被运行一次

②模块被多次引入时，会缓存，最终该模块中的代码只会执行一次

③了解

![微信图片_20240419211500](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211500.jpg)

#### 14.commonJS规范缺点

#### ![微信图片_20240419211509](https://jingluming.oss-cn-beijing.aliyuncs.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240419211509.jpg)