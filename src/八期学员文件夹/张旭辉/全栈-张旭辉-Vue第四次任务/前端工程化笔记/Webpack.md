Webpack

1.前端开发工程化

- 模块化（JS的模块化、CSS的模块化、资源的模块化）
- 组件化（复用现有的UI结构、样式、行为）
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规划化、Git分支管理）
- 自动化（自动化构建、自动部署、自动化测试）

2.功能介绍

- 开发模式：仅能编译JS中的ES Module语法
- 生产模式：能编译JS中的ES Module语法，还能压缩JS代码

3.entry（入口）

  - 指示webpack从哪个文件开始打包

4.output（输出）

  - 指示webpack打包完的文件输出到哪里去，如何命名等

5.loader（加载器）

  - webpack本身只能出js、json等资源，其他资源需要借助loader，Webpack才能解析

6.plugins（插件）

  - 扩展webpack的功能