# 						Node.js开发

一.是什么

​	基于V8 JavaScript 引擎的JavaScript运行的环境

二.浏览器和Node.js架构区别

| chrome                 | Node.js    |
| ---------------------- | ---------- |
| HTML/CSS    JavaScript | JavaScript |
| Bink    V8             | V8         |
| 中间显                 | 中间层     |
| 操作系统（网卡/硬盘）  | 操作系统   |

三.应用场景

###### 1.Node包管理工具

###### 2.npm；yam;pnpm工具成为前端开发工具

###### 3.Node.js作为服务器开发，中间件，代理服务器

###### 4.Node.js完成前后端渲染

###### 5.编写脚本

###### 6.Electron来开发桌面应用程序

四.具体知识

###### 1.使用cmd

![image-20240419204813175](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419204813175.png)

###### 2. Node的输出

​	![image-20240419205328508](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419205328508.png)

3.Node的输入![image-20240419205456996](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419205456996.png)

展示的输入内容：

![image-20240419205539935](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419205539935.png)

4.argv：

![image-20240419210000374](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419210000374.png)

5.Node的REPL（简单的编程环境）

​	打开：node

​	退出：.exit

6.清空控制台：cls

7.Node的常见全局对象

​	global  module exports require()

​	——dirname：打印当前目录

​	——filename：打印当前目录和文件名称

​	process：进程相关信息

8.定时器方法：

​	![image-20240419212614922](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240419212614922.png)

9.global：

​	globalthis是global与window的结合

10. 模块化开发：

    目的：将程序划分为一个个小结构

​	解决命名冲突：

![image-20240420153815730](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420153815730.png)

11.CommonJS：

​		![image-20240420154832494](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420154832494.png)

规范：![image-20240420154917520](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420154917520.png)

..表示上一层目录

导出：

![image-20240420155851510](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420155851510.png)

导入1：

![image-20240420155910465](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420155910465.png)

导入2：

![image-20240420160116303](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420160116303.png)

12.module.exports的导出方法：

​	 ![image-20240420171038566](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420171038566.png)

13. 开发中常见写法：

![image-20240420171643750](C:\Users\AW\AppData\Roaming\Typora\typora-user-images\image-20240420171643750.png)

