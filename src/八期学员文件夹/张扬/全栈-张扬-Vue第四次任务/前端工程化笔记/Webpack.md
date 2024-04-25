# Webpack学习

## 一、前端开发工程化

- 模块化（JS的模块化、CSS的模块化、资源的模块化）
- 组件化（复用现有的UI结构、样式、行为）
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规划化、Git分支管理）
- 自动化（自动化构建、自动部署、自动化测试）

## 二、打包工具种类

- Grunt
- Gulp
- Parcel
- Webpack
- Rollup
- Vite

## 三、Webpack

### 1.基本介绍

- Webpack是一个静态打包工具
- 它会以一个或多个文件作为打包的入口，将我们整个项目所有文件合成一个或多个文件输出出去
- Webpack输出的文件叫做bundle

### 2.功能介绍

- 开发模式：仅能编译JS中的ES Module语法
- 生产模式：能编译JS中的ES Module语法，还能压缩JS代码

### 3.基本使用

- ~~~shell
  npm init -y//配置webpack包
  npm i webpack webpack-cli -D//下载配置资源
  npx webpack ./src/main.js --mode=development//从入口文件开始运行 指定为开发模式
  ~~~

### 4.核心概念

- entry（入口）

  - 指示webpack从哪个文件开始打包

- output（输出）

  - 指示webpack打包完的文件输出到哪里去，如何命名等

- loader（加载器）

  - webpack本身只能出js、json等资源，其他资源需要借助loader，Webpack才能解析

- plugins（插件）

  - 扩展webpack的功能

- mode（模式）

  - 开发模式：development
    - 编译代码，使浏览器能识别运行
    - 代码质量检查，树立代码规范
  - 生产模式：production

- ~~~js
  //nodejs核心模块，专门用来处理路径问题
  const path = require('path')
  
  modules.exports = {
      //入口
      entry:'./src/main.js',//相对路径
      //输出
      output:{
          //文件的输出路径
          //__dirname nodejs的变量，代表当前文件的文件夹目录
          path:path.resolve(__dirname,'dist'),//绝对路径
          //文件名
          filename:"main.js",
      },
      //加载器
      //插件
      //模式
  }
  ~~~

### 5.处理css

- 配置文件的安装

  - ~~~shell
    npm install --save-dev css-loader
    npm i style-loader -D
    ~~~

- 进行配置

  - ~~~js
    //nodejs核心模块，专门用来处理路径问题
    const path = require('path')
    
    modules.exports = {
        //入口
        entry:'./src/main.js',//相对路径
        //输出
        output:{
            //文件的输出路径
            //__dirname nodejs的变量，代表当前文件的文件夹目录
            path:path.resolve(__dirname,'dist'),//绝对路径
            //文件名
            filename:"main.js",
        },
        //加载器
        modules:{
            rules:[
                //loader的配置
                {
                    test:/\.css$/,//只检测css文件
                    use:[
                        //执行顺序，从右到左（从下到上）
                        "style-loader",//将js中css通过创建style标签添加html文件中生效
                        "css-loader",//将css资源编译成commonjs的模块到js中
                    ],
                },
                {
                    //只能使用一个loader：xxx
                    test:/\.less$/,
                    //可以使用多个loader
                    use:[
                        "style-loader",
                        'css-loader',
                        'less-loader',//将less编译成css文件
                    ]
                },
                //图片处理
                {
                	test:/\.(png|ipe?g|gif|webp|svg)$/,
                	type:'asset',
                	paeser:{
                        dataUrlCondition:{
                            //小于10kb的图片转base64
                            //优点：减少请求数量 缺点：体积会更大
                            maxSize:10 * 1024                    
                        }
                    },
                    generator:{
                        //输出图片名称
                        //[hash:10] hash值取前10位
                        filename:'static/images/[hash:10][ext][query]'
                    }
                },
                //其他资源处理
                {
                	test:/\.(ttf|woff2?|map3|map4|avi)$/,
                    type:'asset/resource',
                    generator:{
                        filename:'static/images/[hash:10][ext][query]'
                    }
                },
            ]
        },
        //插件
        plugins:[
            //plugin的配置
            new ESLintPlugin({
                //检测哪些文件
                context:path.resolve(__dirname,'src'),
            }),
        ],
        //模式
        mode:'development',
    }
    ~~~

### 6.处理JS资源

#### 1）EsLint

- 理解：可组装的JavaScript和JSX检查工具

- 基本使用

  - eslintrc.js

    - ~~~js
      module.exports = {
          //继承EsLint规则
          extends:['eslint:recommended'],
          env:{
              node:true,//启用node中全局变量
              browser:true,//启用浏览器中全局变量
          },
          parserOptions:{
              ecmaVersion:6,//es6
              sourceType:'module',//es module
          },
          rules:{
              'no-var':2,//不能使用var变量
          }
      }
      ~~~

#### 2）Babel

- 理解：主要将ES6语法编写的代码转换为向后兼容的JavaScript语法

- 基本使用

  - babel.config.js

    - ~~~js
      {
          test:/\.js$/,
          exclude:/node_modules/,//排除node_modules中的js文件（这些文件不处理）
          use:{
              loader:'babel-loader',
              options:{
                  //智能预设
      			presets;['@babel/preset-env'],
              }
          }
      }
      ~~~

### 7.处理HTML资源

- ~~~js
  plugins:[
      new HtmlWebpackPlugin({
          //模板：以public/index.html文件创建新的html文件
          //新的HTML文件特点：1.结构和原来一致 2.自动引入打包的资源
  		template:path.resolve(__dirname,'public/index.html')
      })
  ]
  ~~~

- 处理自动化资源

  - ~~~shell
    npm i webpack-dev-server -D
    npx webpack server //启动服务器
    ~~~

  - ~~~js
    //开发服务器：不会输出资源，在内存中编译打包的
    devServer:{
        host:'localhost',//启动服务器域名
        port:'3000',//启动服务器端口号
        open:true//是否自动打开浏览器
    }
    ~~~

### 8.生产模式

#### 1）css处理

- ~~~shell
  npm i mini-css-extract-plugin -D
  ~~~

- ~~~js
  use:[
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
  		loader:'postcss-loader',
          options:{
              postcssOptions:{
                  plugins:[
                      'postcss-preset-env',//能解决大多样式兼容性问题
                  ]
              }
          }
      }
  ]
  
  //指定兼容性的程度
  'browserslist':[
      'last 2 version',
      '> 1%',
      'not dead',
  ]
  ~~~

#### 2）html、js处理

- 使用插件后，html、js会自动进行压缩

## 四、Webpack高级

### 1.sourcemap

- 理解：是一个用来生成源代码与构建后代码一一映射的文件的方案

- ~~~js
  devtool:'cheap-module-source-map'
  ~~~

- 两种情况：

  - 开发模式：cheap-module-source-map
    - 优点：打包编译速度快，只包含行映射
    - 缺点：没有列映射
  - 生产模式：source-map
    - 优点：包含行/列映射
    - 缺点：打包编译速度慢

### 2.HotModuleReplacement

- 理解：（HMR/热模块替换）：在程序运行中，替换、添加或删除模块，而无重新加载整个页面

- ~~~js
  devServer:{
  	hot:true//开启HMR（默认值）
  }
  
  //main.js
  if(module.hot){
  	//判断是否支持热模块替换功能
      module.hot.accept('./js/count')
      module.hot.accept('./js/sum')
  }
  ~~~

### 3.oneOf

- 理解：只匹配其中的一个loader

- ~~~js
  rules:[
      {
          oneOf:{
              //只对其中一个配置进行处理
          }
      }
  ]
  ~~~

### 4.Include/Exclude

- 理解：

  - include：只处理包含的文件
  - exclude：除了包含的文件都处理

- ~~~js
  {
      test:/\.js$/,
      include:/node_modules/,
  	exclude:/node_modules/,
  }
  ~~~

### 5.Cache

- 理解：对ESLint检查和Babel编译结果进行缓存

- ~~~js
  options:{
      cacheDirectory:true, //开启babel缓存
      cacheCompression:false,//关闭缓存文件压缩
  }
  plugins:[
      new ESLintPlugin({
          cache:true,//默认值
          cacheLocation:path.resolve(__dirname,'../node_modules/.cache/eslintcache')
      })
  ]
  ~~~

### 6.Thread

- 理解：多进程打包，速度更快
  - 请在特别耗时的操作中使用，每个进程启动大约有600ms左右开销

- ~~~js
  npm i thread-loader -D
  
  const os = require('os')
  const threads = os.cpus().length// cpu核数
  
  use:[
      {
          loader:'thread-loader',
          options:{
  			works:threads,
          },
      },
  ]
  
  plugin:[
      threads,//开启多进程和设置进程数量
  ]
  ~~~

### 7.Tree Shaking

- 理解：通常描述移除JavaScript中没有使用上的代码

### 8.Babel

- 理解：@babel/plugin-transform-runtime:禁用了babel自动对每个文件的runtime注入，而是引入 @babel/plugin-transform-runtime 并且使所有辅助代码从这里引入

- ~~~js
  npm i @babel/plugin-transform-runtime -D
  ~~~

### 9.Image Minimizer

- 理解：image-minimizer-webpack-plugin：用来压缩图片的插件

- ~~~shell
  npm i image-minimizer-webpack-plugin imagemin -D
  //无损压缩
  npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svg -D
  //有损压缩
  npm install imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svo -D
  ~~~

### 10.Code Split

- 理解：代码分割主要做了两件事：

  - 分割文件：将打包生成的文件进行分割，生成多个js文件
  - 按需加载：需要哪个文件就加载哪个文件

- ~~~js
  modules.exports = {
      entry:{
          //有多个入口文件，多入口
          app:'./src/app.js'
          main:'./src/main.js'
      },
      output:{
          path:path.resolve(__dirname,'dist'),
          filename:'[name].js'//webpack命名方式，[name]以文件名自己命名
      }
  }
  ~~~

- 多入口提取公共模块

  - ~~~js
    optimization:{
        //代码分割配置
        spiltCounks:{
            chunks:'all',//对所有模块进行分割
            /*
            以下是默认值
            minSize:20000 分割代码最小的大小
            minRemainingSize：0 类似于minSize，最后确保提取的文件大小不能为0
            minChunks：1 至少被引用的次数，满足条件才会代码分割
            maxAsyncRequests：30 按需加载是并行加载的文件的最大数量
            maxInitialRequests：30 入口js文件最大并行请求数量
            enforceSizeThreshold：50000 超过50kb一定会单独打包（此时忽略上面三项）
            cacheGroups：{ 组，哪些模块要打包到一起的模块
            	defaultVendors：{
            		test：/[\\/]node_modules[\\/]/ 需要打包到一起的模块
            		priority：-10 权重（越大越好）
            		reuserExistingChunk：true 如果当前chunk包含已从主bundle中拆分出的模块，则他将被重用，而不是生成新的模块
            	}
            	default：{ 其他没有写的配置会使用上面的默认值
            		minChunks：2 这里的权重更大
            		priority：-20
            		reuseExistingChunk：true
            	}
            }
            
            
            */
                
            //修改配置
            cacheGroups:{
                //与上面的相同 进行修改
            }
        }
    }
    ~~~

- 多入口进行按需加载

  - ~~~js
    btn.onclick = function(){
        //import 动态导入，会将动态导入的文件进行代码分割（拆分成单独模块），在需要使用的时候自动加载
        import('./count')
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    ~~~

### 11.Preload/Prefetch

### 12.Network Cache

### 13.Core-js

### 14.PWA

### 15.总结

![](https://zhang0816.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-04-09%20200649.png)

## 五、搭建脚手架

~~~js
//webpack.dev.js

//引入插件
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('HtmlWebpackPlugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//获取cross-env定义的环境变量
const isProduction = process.env.NODE_ENV === 'production'

//返回处理样式loader函数
const getStyleLoaders = (pre)=>{
    return[
        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
        'style-loader',
        'css-loader',
         {
             //配合package.json中browseslist来指定兼容性
             loader:'postcss-loader', //考虑兼容性
             options:{
                 //传递选项 指示干活
                 postcssOptions:{
                     plugins:[
                         //智能预设 处理样式兼容性
                         'postcss-preset-env'
                     ],
                 }
             }
         },
        pre,
    ].filter(Boolean)
}
//开发模式
module.exports = {
    entry:'./src/main.js',
    output:{
        path:undefined//开发模式下没有路径
        //生产模式 path:path.resolve(__dirname,'../dist')
        filename:'static/js/[name][contenthash:10]js',//入口处打包文件名
        chunkFilename:'static/js/[name].chunk.js',//import动态导入，node_modules插入
        assetModuleFilename:'static/media/[hash:10][ext][query]',
        clean:true,
    },
    module:{
        rules:[
            //处理css
            {
                test:/\.css$/, //处理的正则表达式
                use:[
                    'style-loader',
                    'css-loader',
                     {
                         //配合package.json中browseslist来指定兼容性
                         loader:'postcss-loader', //考虑兼容性
                         options:{
                             //传递选项 指示干活
                             postcssOptions:{
                                 plugins:[
                                     //智能预设 处理样式兼容性
                                     'postcss-preset-env'
                                 ],
                             }
                         }
                     }
                    ]//插入动态标签到页面上生效
            },
            {
                test:/\.less$/, //处理的正则表达式
                use:[
                    'style-loader',
                     'css-loader',
                     {
                         //配合package.json中browseslist来指定兼容性
                         loader:'postcss-loader', //考虑兼容性
                         options:{
                             //传递选项 指示干活
                             postcssOptions:{
                                 plugins:[
                                     //智能预设 处理样式兼容性
                                     'postcss-preset-env'
                                 ],
                             }
                         }
                     },
                    'less-loader'
                    ]//插入动态标签到页面上生效
            },
            {
                test:/\.sass$/, //处理的正则表达式
                use:[
                    'style-loader',
                     'css-loader',
                     {
                         //配合package.json中browseslist来指定兼容性
                         loader:'postcss-loader', //考虑兼容性
                         options:{
                             //传递选项 指示干活
                             postcssOptions:{
                                 plugins:[
                                     //智能预设 处理样式兼容性
                                     'postcss-preset-env'
                                 ],
                             }
                         }
                     },
                    'sass-loader'
                    ]//插入动态标签到页面上生效
            },
            {
                test:/\.styl$/, //处理的正则表达式
                use:['style-loader',
                     'css-loader',
                     {
                         //配合package.json中browseslist来指定兼容性
                         loader:'postcss-loader', //考虑兼容性
                         options:{
                             //传递选项 指示干活
                             postcssOptions:{
                                 plugins:[
                                     //智能预设 处理样式兼容性
                                     'postcss-preset-env'
                                 ],
                             }
                         }
                     },
                     'styl-loader'
                    ]//插入动态标签到页面上生效
            },
            //图片
            {
            	test:/\.(jpe?g|png|gif|webp|svg)$/,
            	type:'asset',
            	parser:{
            		dataUrlCondition:{
            			maxSize:10*1024,
            		}
            	}
            },
            //处理其它资源
            {
                test:/\.(woff2?|ttf)$/,
                type:'asset/resource',//原封不动输出
            },
            //js
            {
                test:/\.jsx?$/,
                include:path.resolve(__dirname,'../src'),
                loader:'babel-loader',
                options:{
                    cacheDirectory:true,
                    cacheCompression:false,
                    plugins:[
                        'react-refresh/babel',//激活js的HMR
                    ]
                }
            }
        ]
    },
    plugins:[
        new EslintWebpackPlugin({
            context:path.resolve(__dirname,'../src'),
            exclude:'node_modules',
            cache:true,
            cacheLocation:path.resolve(__dirname,'../node_modules/.cache/.eslintcache'),
        }),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html')
        }),
        new ReactRefreshWebpackPlugin(),//激活js的HMR
        new MiniCssExtractPlugin({
            filename:'static/css/[name].[contenthash:10].css',
            chunkFilename:'static/css/[name].[contenthash:10].chunk.css',
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname,'../public'),
                    to:path.resolve(__dirname,'../dist'),
                    globOptions:{
                        //忽略index.html文件
                        ignore:['**/index.html']
                    }
                }
            ]
        })
    ],
    mode: isProduction ? 'production' :'development',//配置模式
    //生产模式 mode:'production' devtool:'source-map'
    devtool:'cheap-module-source-map',//配置加载
    optimization:{//配置代码分割 
        splitChunks:{
            chunks:'all',
            cacheGroups:{
                //react react-dom react-router-dom 一起打包成一个文件
                react:{
                    test:/[\\/]node_modules[\\/]react).*?[\\/]/,
                    name:'chunk-react',
                    priority:40
                },
                //antd 单独打包
                antd:{
                	test:/[\\/]node_modules[\\/]react).*?[\\/]/,
                    name:'chunk-antd
                    priority:30
            	},
                //剩下node_modules单独打包
            	libs:{
            		test:/[\\/]node_modules[\\/]react).*?[\\/]/,
                    name:'chunk-react',
                    priority:20
        		},
            },
        },
        runtimeChunk:{
            name: entrypoint => `runtime~${entrypoint.name}.js`,
        },
        minimizer:[
            new CssMinimizerWebpackPlugin(),
           	new TerserWebpackPlugin(),
        	new ImageMinmizerPlugin({
                minimizer:{
                    implementation:ImageMinizerPlugin.imageinGenerate,
                    options:{
                        plugins:[
                            ['gifsicle',{interlaced:true}],
                            ['jpegtran',{progressive:true}],
                            ['optipng',{optimizationLevel:5}],
                            ['svgo',{
                                plugins:[
                                    'preset-default',
                                    'prefixIds',
                                    {
                                        name:'sortAttrs',
                                        params:{
                                            xmlnsOrder:'alphabetical',
                                        }
                                    }
                                ]
                            }]
                        ]
                    }
                }
            })
        ],
    },
    //webpack解析模块加载选项
    resolve:{
        //自动补全文件扩展名
        extensions:['jsx','js','.json']
    }
    //自动化配置
    devServer:{
        host:'localhost',
        post:3000,
        open:true,
        hot:true,//开启热模化
    	historyApiFallback:true,//解决前端路由刷新404问题
    },
    performance:false,//关闭性能分析
}
~~~

~~~json
//package.json
{
    'name':'react-cil',
    'version':'1.0.0',
    'description':'',
    'main':'index.js',
    'script':{
        'test':'echo \"Error: no test specified\" && exit 1',
        'start':'npm run dev',
        'dev':'cross-env NODE_ENV=development webpack serve --config ./config/webpack.dev.js',
        'build':'cross-env NODE_ENV=production webpack serve --config ./config/webpack.prod.js'
    },
    'keywords':[],
    'author':'',
    'license':'ISC',
    'browserslist':[
        'last 2 version',
        '> 1%',
        'not dead'
    ],
    'devDependdencies':{
        //各种插件和依赖的存储地址
    }
}
~~~

~~~js
//.eslintrc.js
//指定eslint该做什么
module.exports = {
    extends:['react-app'],//继承react官方规则
    parserOptions:{
        babelOptions:{
            presets:[
                //解决页面报错问题
                ['babel-preset-react-app',false],
                'babel-preset-react-app/prod',
            ]
        }
    }
}
~~~

~~~js
//babel.config.js
module.exports = {
    presets:['react-app'],
}
~~~

~~~js
//src下的main.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import APP from './APP'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App/>)
~~~

~~~jsx
//APP.jsx
import React,{ Suspense,lazy } from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const Home = lazy(()=> import('./pages/Home' /*webpack'ChhunkName:home*/ ))

function App(){
    return <h1>App</h1>
    <ul>
    	<li>
        	<Link to='Home'></Link>
        </li>
    </ul>
    
    <Routes>
    	<Route path='/home' element={Home}></Route>
    ]</Routes>
}

export default APP;
~~~

~~~shell
//安装相关依赖
npm i eslint-webpack-p;ugin htmll-webpack-plugin style-loader css-loader postcss-loader postcss-preset-env less-loader sass-loader sass stylus-loader
npm i babel-loader @babel/core babel-preset-react-app eslint-config-react-app -D
npm i webpack-dev-server webpack webpack-cli -D
npm i react react-dom

cross-env//环境变量配置库

//生产模式下的依赖
npm i mini-css-extract-plugin css-minimizer-webpack-plugin -D
npm i image-minimizier-webpack-plugin imagemin -D
npm install imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo -D
~~~

## 六、loader原理

### 1.loader概念

帮助webpack将不同类型的文件转换为webpack可识别的模块

### 2.loader执行顺序

#### 1）分类

- pre：前置loader
- normal：普通loader
- inline：内联loader
- post：后置loader

#### 2）执行顺序

- 4类loader的执行优先级为：pre > normal > inline > post
- 相同优先级的loader执行顺序为：从右到左，从下到上

#### 3）使用loader的方式

- 配置方式：在webpack.config.js文件中指定loader
- 内联方式：在每个import语句中显示指定loader（inline loader）

#### 4）inline loader

- 用法：`import Styles from 'style-loader!css-loader?modules!./styles.css'`
- 含义：
  - 使用css-loader和style-loader处理styles.css文件
  - 通过！将资源中的loader分开
    - inline loader可以通过添加不同的前缀，跳过其它类型的loader
  - ！跳过normal loader
    - `import Styles from '!style-loader!css-loader?modules!./styles.css'`
  - -！跳过pre和normal loader
    - `import Styles from '-!style-loader!css-loader?modules!./styles.css' `
  - ！！跳过pre、normal、post-loader
    - `import Styeles from '!!style-loader!css-loader?modules!./styles.css'`

### 3.创建一个loader

~~~js
//webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
modules.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].js',
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'./loaders/test-loader.js',
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html')
        })
    ],
    mode:'development'
}
~~~

~~~js
//loader loader就是一个函数，webpack解析时就会调用loader loader会接收到文件内容作为参数，返回内容出去
//test.loader.js
module.exports = function(content,map,meta){
    //content 文件内容 map SourceMap meta 别的loader传递的数据
    return content
}
~~~

### 4.loader分类

#### 1）同步loader

~~~js
module.exports = function(content,map,meta){
    return content
}

//this.callback方法更灵活，它允许传递多个参数，不仅仅是content
module.exports = function(content,map,meta){
    //传递map，让source-map不中断
    //传递meta，让下一个loader接收到其它参数
    this.callback(null,content,map,meta);
    return//当调用callback（）函数时，总是返回undefined
}
/*
第一个参数：err代表是否有错误
第二个参数：content处理后的内容
第三个参数：source-map 继续传递source-map
第四个参数：meta 给下一个loader传递参数
*/
~~~

#### 2）异步loader

~~~js
module.exports = function(content,map,meta){
    const callback = this.async()
    //进行异步操作
    setTimeOut(()=>{
        callback(null,result,map,meta)
    },1000)
}
~~~

> 由于同步计算过于耗时，在node.js这样的单线程环境下进行此操作并不是好的方案，尽可能使loader异步化。但如果计算量很小，同步loader也是可以的

#### 3）Raw loader

> 默认情况下，资源文件会被转化为UTF-8字符串，然后传给loader，通过设置raw为true，loader可以接收原始的Buffer

~~~js
//raw loader接收到的content是Buffer数据
module.exports = function(content){
    return content
}

module.exports.raw = true

function testloader(content){
    return content
}
testloader.raw = true
module.exports = testloader
~~~

#### 4）Pitching loader

> webpack会先从左到右执行loader链上的pitch方法（如果有），再从右到左执行loader链中的每个loader上的普通loader方法

~~~js
module.exports = function(content){
    return content
}

module.exports.pitch = function(){
    return 'result'
}
~~~

![](https://zhang0816.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-04-13%20170029.png)

### 5.loader API

| 方法名                  | 含义                                       | 用法                                        |
| ----------------------- | ------------------------------------------ | ------------------------------------------- |
| this.async              | 异步回调loader，返回this.callback          | const callback = this.async()               |
| this.callback           | 可以同步或者异步调用的并返回多个结果的函数 | this.callback(err,content,sourceMap?,meta?) |
| this.getOptions(schema) | 获取loader的options                        | this.getOptions(schema)                     |
| this.emitFile           | 产生一个文件                               | this.enitFile(name,content,sourceMap)       |
| this.utils.contextify   | 返回一个相对路径                           | this.utils.contextify(context,request)      |
| this.utils.absolutify   | 返回一个绝对路径                           | this.utils.absolutify(context,request)      |

### 6.手写loader

#### 1）clean-log-loader

> 作用：用来清理js代码中的console.log

~~~js
//loader/clean-log-loader
module.exports = function cleanLogLoader(content){
    //将console.log替换为空
    return content.replace(/console\.log\(.*\);?/g,"")
}
~~~

~~~js
//webpack.config.js
rules:[
    {
        test:/\.js$/,
        loader:'./loaders/clean-log-loader',
    }
]
~~~



#### 2）banner-loader

> 给js代码添加文本注释

~~~js
//loaders/banner-loader/index.js
const schema = requrie('./schema.json')
module.exports = function(content){
    //schema对options的验证规则  schema符合JSON Schema的规则
    const options = this.getOptions(schema)
    
    const prefix = `/*Author:${options.anthor}*/`
    return prefix + content
}
~~~

~~~json
//schema.json
{
    'type':'object',
    'properties':{
        'author':{
            'type':'string'
        },
    },
    'additionalProperties':false
}
~~~

~~~js
//webpack.config.js
rules:[
    {
        test:/\.js$/,
        loader:'./loaders/banner-loader',
        options:{
            author:'son',
        }
    }
]
~~~

#### 3）babel-loader

~~~js
//loaders/babel-loader/index.js 
const schema = requrie('./schema.json')]
var babel = require("@babel/core")
mpdeule.exports = function(content){
    //异步loader
    const callback = this.async()
    const options = this.getOptions(schema)
    //使用Babel对代码进行编译
    babel.transform(code,options,function(err,result){
        if(err){
            callback(err)
        }else{
            callback(null,result.code)
        }
    })
}
~~~

~~~js
//webpack.config.js
rules:[
    {
        test:/\.js$/,
        loader:'./loaders/babel-loader',
        options:{
            presets:['@babel/preset-env']
        }
    }
]
~~~

~~~json
//schema.json
{
    'type':'object',
    'properties':{
        'author':{
            'type':'array'
        },
    },
    'additionalProperties':true
}
~~~

#### 4）file-loader

```js
//loaders/file-loader/index.js
const loaderUtils = require('loader-utils')
module.exports = function(){
    //根据文件内容生成带hash值文件名
    const interpolatedName = loaderUtils.interpolateName(this,'[hash].[ext][query]',{
        content
    })
    interpolatedName = `images/${interpolatedName}`
    //将文件输出出去
    this.emitFile(interpolatedName,content)
    //返回：module.exports = '文件路径（文件名）'
    return `module.exports = "${interpolatedName}"`
}
//需要处理图片、字体等文件，它们都是buffer数据 需要使用raw loader才能处理
module.exports.raw = true
```

```js
//webpack.config.js
rules:[
    {
        test:/\.(png|jpe?g|gif)$/,
        loader:'./loader/file-loader'
    },
]
```

#### 5）style-loader

~~~js
//loaders/style-loader/index.js
module.exports = function(content){
    const script = `
const styleEl = document.createElement('style')
styleEl.innerHTML = ${JSON.stringify(content)}
document.head.appendChild(styleEl)
` 
    return script
}

module.exports = function(content){
    /*
    1.直接使用style-loader，只能处理样式，不能处理样式中引入的其他资源
    use:['./loaders/style-loader']
    2.借助css-loader解决样式中引入的其它资源的问题
    use:['./loaders/style-loader','css-loader']
    问题是css-loader暴露了一段js代码，style-loader需要执行js代码，得到返回值，再动态创建style表亲啊，插入到页面上不好操作
    */
}

module.exports.pitch = function(remainingRequest){
    //remainingRequest剩下还需要处理的loader
    //将remainingRequest中绝对路径改成相对路径（因为后面只能使用相对路径操作）
    remianingRequest.spilt('!').map(path=>{
        //返回相对路径 
        return rgus.utils.contextify(this.context,absolutePath)
    }).join('!')
    //引入css-loader处理后的资源
    //创建style，将内容插入页面中生效
    const script = `
    	import style from '!!${relativePath} '
        const styleEl = document.createElement('style')
        styleEl.innerHTML = ${JSON.stringify(content)}
        document.head.appendChild(styleEl)
        ` 
        return script
    }
	//终止后面loader执行
}
~~~

~~~js
//webpack.config.js
{
    test:/\.css$/,
    use:['style-loader','css-loader'],
    use:['./loaders/style-loader']
}
~~~

## 七、plugin原理

### 1.plugin的作用

- 通过插件我们可以扩展webpack，加入自定义的构建行为，使webpack可以执行更广泛的任务，拥有更强的构建能力

### 2.plugin的工作原理

> webpack就像一条生产线，要经过一系列处理流程后才能将源文件转换成输出结果。这条生产线上的每个处理流程的职责都是单一的，多个流程之间有存在依赖关系，只有完成当前处理后才能交给下一个流程去处理。就像是一个插入到生产线中的一个功能，在特定的时机对生产线上的资源做处理。webpack通过tapable来组织这条复杂的生产线。webpack在运行过程中回广播事件，插件只需要监听它所关心的事件，就能加入到这条生产线中，去改变生产线的运作。webpack的事件流机制保证了插件的有序性，使得整个系统扩展性很好——【深入浅出Webpack】

- 站在代码逻辑的角度就是：webpack再编译代码过程中，会触发一系列Tapable钩子事件，插件所做的，就是找到相应的钩子，往上面挂上自己的任务，也就是注册事件，这样，当webpack构建的时候，插件注册的事件就会随着钩子的触发而执行了

### 3.Webpack内部的钩子

#### 1）什么是钩子

- 钩子的本质就是事件。为了方便我们直接介入和控制编译过程，webpack'把编译过程中出发的各类关键事件封装成事件接口暴露了出来。这些接口被很形象的称作：hooks（钩子）。

#### 2）Tapable

- Tapable为webpack提供了统一的插件接口（钩子）类型定义，它是webpack的核心功能库。webpack中目前有十种hooks

  - ~~~js
    export.SyncHook = require('./SyncHook')
    export.SyncBailHook = require('./SyncBailHook')
    export.SyncWaterfallHook = require('./SyncWaterfallHook')
    export.SyncLoopHook = require('./SyncLoopHook')
    export.AsyncParallelHook = require('./AsyncParallelHook')
    export.AsyncParallelBaliHook = require('./AsyncParallelBaliHook')
    export.AsyncSeriesHook = require('./AsyncSeriesHook')
    export.AsyncSeriesBailHook = require('./AsyncSeriesBailHook')
    export.AsyncSeriesLoopHook = require('./AsyncSeriesLoopHook')
    export.AsyncWaterfallHook = require('./AsyncWaterfallHook')
    export.HookMap = require('./HookMap')
    export.MultiHook = require('./MultiHook')
    ~~~

- Tapable还统一暴露了三个方法给插件没用于注入不同类型的自定义构建行为

  - tap：可以注册同步钩子和异步钩子
  - tapAsync：回调方式注册异步钩子
  - tapPromise：Promise方式注册异步钩子

### 4.plugin构建对象

#### 1）Compiler

- compiler对象中保存着完整的webpack环境配置，每次启动webpack构建时它都是一个独一无二，仅仅会创建一次的对象
- 这个对象会在首次启动webpack时创建，我们可以通过compiler对象上访问到webpack的主环境配置，比如loader、plugin等等配置信息
- 它有以下主要属性：
  - compiler.options可以访问本次启动webpack时候所有的配置文件，包括但不限于loaders、entry、output、、plugin等等完整配置信息
  - compiler.inputFileSystem和compiler.outputFileSystem可以进行文件操作，相当于Nodejs中fs
  - compiler.hooks可以注册tapable的不同种类hook，从而可以在compiler生命周期中植入不同的逻辑
- ![](https://zhang0816.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-04-13%20190744.png)



~~~js
//test-plugin-js
/*
1.webpack加载webpack.config.js中所有配置，此时就会new TestPlugin（），执行插件的constructor
2.webpack创建compiler对象
3.遍历所有plugins中插件，带用插件的apply方法
4.执行剩下编译流程（触发各个hooks事件）
*/
class TestPlugin{
    constructor(){
        
    }
    apply(compiler){
        //有文档可知，environment是同步钩子，所以需要使用tap注册
        compiler.hooks.environment.tap('TestPlugin',()=>{
            
        })
        //有文档可知，emit是异步串行钩子 AsyncSeriesHook
        compiler.hooks.emit.tap('TestPlugin',(compilation)=>{
            
        })
        compiler.hooks.emit.tapAsyncc('TestPlugin',(compilation,callback)=>{
            setTimeout(()=>{
                callback()
            },2000)
        })
        compiler.hooks.emit.tapPromise('TestPlugin',(compilation)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve()
                },1000)
            })
        })
        //有文档可知，make是异步并行钩子 AsyncParallelHook
        compiler.hooks.make.tapAsync('TestPlugin',(compilation,callback)=>{
            setTimeout(()=>{
                callback()
            },2000)
        })
        compiler.hooks.make.tap('TestPlugin',(compilation,)=>{
            setTimeout(()=>{
                callback()
            },2000)
        })
    }
}

module.exports = TestPlugin
~~~

~~~js
//webpack.config.js
const TestPlugin = require('./plugins/test-plugin-js')

plugins:[
    new TestPlugin(),
]
~~~

#### 2）Compilation

- compilation对象代表一次资源的构建，compilation实例能够访问所有的模块和它们的依赖
- 一个compilation对象会对构建依赖图中所有模块，进行编译。在编译阶段，模块会被加载（load）、封存（seal）、优化（optimize）、分块（chunk）、哈希（hash）和重新创建（restore）
- 它有以下主要属性：
  - comilation.modules：可以访问所有模块，大伯啊的每一个文件都是一个模块
  - compilation.chunks：chunk即是多个modules组成而来的一个代码块，入口文件引入的资源组成一个chunk，通过代码分割的模块又是另外的chunk
  - compilation.assets可以访问本次打包生成所有文件的结果
  - compilation.hooks可以注册tapable的不同种类的Hook，用于在compilation编译模块节点进行逻辑添加以及修改 

~~~json
//package.json
{
    'name':'source',
    'script':{
        'debug':'node --inspect-brk ./node_modules/webpack-cli/bin/cli.js'
    }
}
~~~

### 5.BannerWebpackPlugin

- 作用：给打包输出文件添加注释

- 开发思路：

  - 需要打包输出前添加注释：需要使用compiler.hooks.emit钩子，它是打包输出前触发
  - 如何获取打包输出资源：compilation.assets 可以获取所有即将输出的资源文件

- 实现：

  - ~~~js
    //plugins/banner-webpack-plugin.js
    class BannerWebpackPlugin{
        constructor(options = {
            this.options = options
        })
        
        apply(compiler){
            //资源输出之前触发
            compiler.hooks.emit.tapSsync('BannerWebpackPlugin',(compilation)=>{
                //debugger
                const extensions = ['css','js']
                //1.获取即将输出的资源文件：compilation.assets
                //2.过滤只保留js和css资源
                const asset = Object.keys(compilation.assets)filter(assetPath)=>{
                    //将文件名切割['xxxx','js']
                    const splitted assetPath.spilt('.')
                    //获取最后一个文件扩展名
                    const extension = splitted[splitted.length - 1]
                    //判断是否保护
                    return extensions.includes(extension)
                }
                const prefix = `/*Author:xiongjian*/`
                //3. 遍历剩下资源添加上注释
                asset.forEach(asset=>{
                    //获取原来内容
                    const source = compilation.assets[asset].source()
                    //拼接上注释
                    const content = prefix + source
                    //修改资源
                    compilation.assets[asset] = {
                        //最终资源输出时，调用source发方法，source方法的返回值就是资源的具体内容
                        source(){
                            return content
                        },
                        size(){
                            return content.length
                        }
                    }
                })
            })
        }
    }
    module.exports = BannerWebpackPlugin
    ~~~

### 6.CleanWebpackPlugin

- 作用：在webpack打包输出前将上次打包内容清空

- 开发思路：

  - 如何在打包输出前执行：需要使用compiler.hooks.emit钩子，它是打包输出前触发
  - 如何清空上次打包内容：
    - 获取打包输出目录：通过compiler对象
    - 通过文件操作清空内容：通过compiler.outputFileSystem操作文件

- 实现

  - ~~~js
    //plugins/clean-webpack-plugin.js
    class CleanWebpackPlugin{
        apply(compiler){
            //获取打包输出的目录
            const outputPath = compiler.potions.output.path
            const fs = compiler.outputFileSystem
            //注册钩子，在打包输出之前emit
            compiler.hooks.emit.tap('CleanWebpackPlugin',(compilation)=>{
               //通过fs删除打包输出目录下的所有文件
                this.removeFiles(ds,outputPath)
            })
        }
        
        removeFiles(fs,filepath){
            //想要删除打包输出目录下所有资源，需要先将目录下的资源删除，才能删除这个目录
            //读取当前目录下所有资源
            const files = fs.readdirSync(filepath)
            //遍历一个个删除
            files.forEach((file)=>{
                //遍历所有文件，判断是文件夹还是文件
                const path = `${filepath}/${file}`
                const fileStat = fs.statSync(path)
                if(fileStat.isDirectory()){
                    //是文件夹就删除下面所有文件，才能删除文件夹
                    this.removeFiles(fs,path)
                }else{
                    //是文件直接删除
                    this.unlinkSync(path)
                }
            })
        }
    }
    module.exports = CleanWebpackPlugin
    ~~~

### 7.AnalyzeWebpackPlugin

- 作用：分析webpack打包资源大小，并输出分析文件

- 开发思路：

  - 在哪做：compiler.hokks.emit，他是在打包输出前触发，我们需要分析资源大小同时添加上分析后的md文件

- 实现：

  - ~~~js
    //plugins/analyze-webpack-plugin.js
    class AnalyzeWebpackPlugin{
        apply(compiler){
            compiler.hooks.emit.tap('AnalyzeWebpackPlugin',(compilation)=>{
                //遍历所有即将输出文件，得到其大小
                /*
                将对象变成一个二维数组
                对象:
                {
    				key1:value1,
    				key2:value2
    			}
    			二维数组：
    			{
    				[key1,value1],
    				[key2,value2]
    			}
                */
                const assets = Object.entries(compilation.assets)
                let content = `|资源大小|资源大小|
                |---|---|`
                assets/forEach(([filename,file])=>{
                    content += `\n|${filename}|${Math.round(file.size()/1024)}|`
                })
                
                //生成一个md文件
                compilation.assets['analyze.md'] = {
                    source(){
                        return content
                    },
                    size(){
                        return content.length
                    }
                }
            })
        }
    }
    module.exports = AnalyzeWebpackPlugin
    ~~~

### 8.InlineChunkWebpackPlugin

- 作用：webpack打包生产你的runtime文件太小了，额外发送请求性能不好，所以需要内联到js中，从而减少请求数量

- 开发思路：

  - 需要借助html-webpack-plugin实现
    - 在html-webpack-plugin输出index.html前将内联runtime注入进去
    - 删除多余runtime文件
  - html-webpack-plugin工作原理
    - ![](https://zhang0816.oss-cn-beijing.aliyuncs.com/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-04-14%20100133.png)

- 实现：

  - ~~~js
    //webpack.config.js
    optimaization{
        spiltChunks:{
            chunks:'all',
        },
        runtimeChunk:{
            name:(entrypoint)=>`runtime~${entrypoint.name}.js`
        }
    }
    ~~~

  - ~~~js
    //plugins/inline-chunk-webpack-plugin.js
    const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin')
    
    class Myplugin{
        
        constructor(tests){
            this.tests = tests
        }
        
        apply(compiler){
            compiler.hooks.compilation.tap('Myplugin',(compilation)=>{
                //获取html-webpack-plugin的hooks
                const hooks = HtmlWebpackPlugin.getHooks(compilation)
                //注册html-webpack-plugin的hooks -> alterAssetTagGroups
                //从里面将script的runtime文件，变成inline script
                hooks.alterAssetTagGroups.tap('InlineChunkWebpackPlugin',({headTags,bodyTags})=>{
                    assets.headTags = this.getInlineChunk(assets.headTags,compilation.assets)
                    assets.bodyTags = this.getInlineChunk(assets.bodyTags,compilation.assets)
                })
                //删除runtime文件
                hooks.afterEmit.tap('InlineChunkWebpackPlugin'()=>{
                    //从里面将script的runtime文件，变成inline script
                   Object.keys(compilation.assets).forEach((filepath)=>{
                       
                       if(this.tests.some(test=>test.test(filepath))){
                          delete compilation.assets[filepath]    
                      }
                   })
                })
            })
        }
        
        getInlineChunk(tags){
            return tags.map((tag)=>{
                if(tags.tagName !== 'script'){
                    return tag
                }
                //获取文件资源路径
                const filepath = tag.attributes.src
                if(!filepath){
                    return tag
                }
                if(this.tests.some(test=>test.test(filepath))){
                    return tag
                }
                return {
                    tagName:'script',
                    innerHTML:assets[filepath].source(),
                    closeTag:true
                }
            })
        }
    }
    
    modules.exports = InlineChunkWebpackPlugin
    ~~~

  - 
