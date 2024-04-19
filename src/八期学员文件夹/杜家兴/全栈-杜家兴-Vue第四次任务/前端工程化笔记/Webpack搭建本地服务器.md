# 为什么要搭建本地服务器

- 目前开发代码，为了允许需要有两个操作：
  - 操作一：`npm run build`，编译相关代码
  - 操作二：通过 live server 或者直接通过浏览器，打开index.html代码，查看效果
- 这个过程经常操作会影响开发效率，我们希望可以做到，当文件发生变化的时候，可以自动完成编译和展示
- 为了完成自动编译，webpack提供了几种可选的方式
  - `webpack watch mode`
  - `webpack-dev-server`
  - `webpack-dev-middleware`

# webpack-dev-server

- 上面的方式可以监听到文件的变化，但是事实上它本身没有自动刷新浏览器的功能

- 安装webpack-dev-server

  ```
  npm install webpack-dev-server -D
  ```

- 修改配置文件，启动时加上serve参数

![image-20240417181947180](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240417181947180.png)

-  webpack-dev-server 在编译之后不会写入到任何输出文件，而是将 bundle 文件保留在内存中
  - 事实上webpack-dev-server使用了一个库叫memfs（memory-fs webpack自己写的）

# 认识模块惹替换（HMR）

- 什么是HMR？
  - HMR的全称是Hot Module Replacement，翻译为模块热替换
  - 模块热替换是指在 应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面
- HMR通过如下几种方式，来提高开发的速度：
  - 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失
  - 只更新需要变化的内容，节省开发的时间
  - 修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式
- 如何使用HMR？
  - 默认情况下，webpack-dev-server已经支持HMR，我们只需要开启即可（默认已经开启）
  - 在不开启HMR的情况下，当我们修改了源代码之后，整个页面会自动刷新，使用的是live reloading

# 开启HMR

![image-20240418191547724](C:\Users\10273\AppData\Roaming\Typora\typora-user-images\image-20240418191547724.png)

# host配置

- host设置主机地址
  - 默认值是localhost；
  - 如果希望其他地方也可以访问，可以设置为 0.0.0.0；

![image-20240420002916209](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240420002916209.png)

# port、open、compress

![image-20240420002952976](https://ye-fly.oss-cn-beijing.aliyuncs.com/image-20240420002952976.png)