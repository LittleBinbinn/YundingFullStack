# Vite学习

### 一、什么是构建工具

#### 1.企业级项目都会具备哪些功能

- typescript：如果遇到ts文件，需要使用tsc将typescript代码转换为js代码
- react/vue：安装react-compiler / vue-complier，将jsx文件或.vue文件转换为render函数
- less/sass/postcss/component-style：需要安装less-roader，sass-rouder等一系列编译工具
- 语法降级：babel ---->将es的新语法转换旧版本可以接受的语法
- 体积优化：uglifyjs---> 将代码进行压缩百年城体积更小性能更高的文件

#### 2.构建工具主要承担内容

- 模块化开发支持：支持直接从node，modules里引入代码+多种模块化支持
- 处理代码兼容性：比如Babel语法降级，less、ts语法转换（不是构建工具做的，构建工具将这些语法对应的处理工具集成进来自动化处理）
-  提高项目性能：压缩文件、代码分割
- 优化开发体验：
  - 构建工具会自动监听文件的变化，当文件辩护以后自动帮你调用对应的集成工具进行重新打包，然后再到浏览器重新运行（整个过程叫做热更新）
  - 开发服务器：跨域的问题，用react-cil create-react-element vue-cil 解决跨域的问题
- 构建工具让我们可以不用每次都关心我们的代码再浏览器如何运行，我们只需要给构建工具提供一个配置文件（这个配置文件也不是必须的，如果你不给他，他会有默认的去帮你处理），有了这个配置文件后，我们就可以在下次需要更新的时候调用一次对应的命令就好了，如果我们再结合热更新，我们呢就更加不需要管任何东西

#### 3.Vite相较于Webpack的优势

- webpack的编译原理，AST抽象语法分析的工具，分析出写的这个js文件有哪些导入和导出操作

- 构建工具是运行在服务端的

- ~~~js
  //webpack的一个转换结果
  const lodash = webpack_require('loadsh')
  const vue = webpack_require('vue')
  
  function(modules){
      function webpack_require(){
          //入口文件是index.js
          //通过webpack的配置文件得来的
          modules[entry]
      },({
          'index.js':(webpack_reuqire)=>{
              const lodash = webpack_reuqire('lodash')
              const Vue = webpack_reuqire('vue')
          }
      })
  }
  ~~~

#### 4.Vite和Vite脚手架的关系

例如：yarn create vite

- 帮我们全局安装了：create-vite（vite的脚手架）
- create-vite和vite的关系：
  - create-vite中内置了vite
  - 使用vue-cil会内置webpack

#### 5.Vite的预加载

~~~js
import ——from 'lodash'
~~~

- 在处理的过程中如果说看到了有非绝对路径或相对路径的引用，则会尝试开启路径补全

- 找寻依赖的过程是自当前目录依次向上查找的过程，直到搜寻到根目录或者搜寻到对应依赖为止

- 生产和开发

  - yarn dev ---> 开发（每次预购建所重新构建的相对路径都是正确的）
  - vite会全权交给一个叫做rollup的库去完成生产环境的打包

- 缓存----> 实际上vite在考虑另外一个问题的时候就顺便把这个问题解决了

  - commonjs 规范的导出

- 依赖预购建

  - 首先vite会找到对应的依赖，然后调用esbuild（对js语法进行处理的一个库），将其他规范的代码转换成esmodule规范，然后放到当前目录下的node_modules/。vite/deps，同时对esmodules规范的各个模块进行统一集成

    - ~~~js
      export {default as a} from './a.js'
      
      =====
      import a from './a.js'
      export const a = a;
      ~~~

  - 解决了三个问题

    - 不同的第三方包会有不同的导出格式（这个是vite没法约束的事情）
    - 对路径的处理上可以直接使用.vite/deps，方便路径重写
    - 叫做网络多包传输的性能问题（也是原生esmodule规范不敢支持node_modules的原因之一）

#### 6.Vite配置文件细节

- vite配置文件的语法提示

  - 如果使用webstorm，可以得到很好的语法补全

  - 如果使用vscode，进行特殊处理

    - ~~~js
      import {definConfig} from 'vite'
      
      export default{
          optimizeDeps:{
              exclude:[]//将指定数组中的依赖不进行依赖预购建
          }
      }
      ~~~

- 关于环境的处理

  - 在使用webpack时，要区分文件的一个环境

    - webpack.dev.config
    - webpack.prod.config
    - webpack.base.config
    - webpcakmerge

  - 在使用vite时

    - ~~~typescript
      import {defineConfig} from 'vite'
      import biteBaseConfig from './vite.base.comfig'
      import viteDevConfig from './vite/dev.config'
      import viteProdConfig from './vite.prod.config'
      
      //策略模式
      const envResolver = {
          'build':()=>Object.assign(viteBaseConfig,viteProdConfig),
          'serve':()=>Object.assign(viteBaseConfig,viteDevConfig)
          //新配置当中可能会被配置envDir
      }
      
      export default defineConfig(config:({command:'build'|'serve'，mode:string})=>{
          //是build还是serve取决于我们的命令是开启开发环境还是生产环境
          //第二个参数不一定用process.cwd()
          const env = loadEnv(mode,process.cwd(),prefixes:'.env')
          return envResolver[command]()
          /*if(command === 'build'){
              //代表生产环境配置
          }else{
              //代表开发环境配置
          }*/
      })
      ~~~

- vite环境变量配置

  - 环境变量：会根据当前的代码环境产生值的变量就叫做环境变量
  - 代码环境：
    - 开发环境
    - 测试环境
    - 预发布环境
    - 灰度环境
    - 生产环境

- vite环境变量处理：

  - dotenv第三方库

  - dotenv会自动读取.env文件，并解析这个文件中对应的环境变量，并将其注入到process对象下

    - 但是vite考虑到和其它配置的一些冲突问题，不会直接注入到process对象下

    - 与vite.config.js中的一些配置有关

      - root
      - envDir

    - 可以通过调用vite的loadEnv来手动确认env文件

      - process.cwd方法：返回当前node进程的工作目录
      - .env：所有环境都需要用到的环境变量
        - .env.development：开发环境需要用到的环境（默认情况下vite将我们的开发环境取名为development）
        - .env.production：生产环境需要用到的环境（默认情况下vite将我们的开发环境取名为production）
      - yarn dev --mode development 会将mode设置成development传递进去

    - 当调用loadenv的时候：

      - 直接找到.env文件不解释，并解析其中的环境变量，并放进一个对象里

      - 会将传进来的mode这个变量的值进行拼接：```.env.development```，并根据提供的目录去取对应的配置文件并进行解析，并放进一个对象

      - ~~~typescript
        const baseEnvConfig =读取.env的配置; 
        const modeEnvConfig =读取env相关配置;
        const lastEnvConfig = {...baseEnvConfig，...modeEnvConfig};
        ~~~

      - 如果是客户端，vite会将对应的环境变量注入到import.meta.env

        - vite做了一个拦截，防止将隐私性的变量直接送进import.meta.env中
        - 如果环境变量不是以vite开头的，不会讲其注入到客户端中
        - 如果想更改这个变量，

  - 补充：为什么vite.config.js可以书写成esmodule的形式？

    - 这是因为vite在读取这个vite.config.js的时候会率先node去解析文件语法
    - 如果是esmodule规范，会直接将esmodule规范替换变成commonjs规范

#### 7.Vite原理

##### 1）vite是怎么让浏览器可以识别.vue文件

~~~js
//koa:node的一个框架
const Koa = require('koa')//不能使用esmodule 必须使用commonjs
const app = new Koa();

//node最频繁做的事情就是在处理请求和操作文件
/*
不同的宿主环境会给JS赋予一些不同的能力
document.queryselect ---> 是浏览器环境注入给JS的特殊能力
*/
//当请求来临时胡直接进入到use注册的回调函数中
app.use((ctx)=>{
    //context 上下文呢 request --> 请求信息 响应信息 get请求/
    if(ctx.request.url === '/'){
        //意味着在寻找根路径的内容
        const indexContext =  await fs.promises.readFiles(path.resolve(__dirname,'./index.html'))//服务端很少见
        ctx.response.body = indexContent//作为响应体发给对应的请求的人
        
    }
    //后端给一个获取用户信息的接口
    if(ctx.request.url === '/api/getUserInfo'){
        //去数据库找到用户信息然后返回给前端
    }
})

app.listen(5173,()=>{
    
})

//package.json
{
    'name':'vite-dev-server',
    'version':'1.0.0',
    'main':'index.js'
    'license':'MIT'
    'script':{
        'dev':'node index.js'
    }
    'dependencies':{
        'koa':'^2.13.4'
    }
}
~~~

##### 2）Vite如何处理CSS

- vite本身支持对CSS的处理

- 处理过程

  - vite在读取到main，js中引用到了index.css
  - 直接去使用fs模块去读取index.css中文件内容
  - 直接创建一个style标签，将index.css中文件内容直接copy进style标签里
  - 将style标签插入到index.html的head中
  - 将该css文件中的内容直接替换为js脚本（方便热更新 或者 模块化）

- 处理覆盖问题原理：

  - module.css（module是一种约定，表示要开启css模块化）
  - 会将所有类名进行一定规则的替换（将footer替换成_footer_i22st_1)
  - 同时创建一个映射对象（_footer:'_footer_i22st_1')
  - 将替换过后的内容全部塞进style标签里然后放入到head标签中（能够读到index.html的文件内容）
  - 将componentA.module.css内容进行全部抹除，替换成JS脚本
  - 将创建的映射对象在脚本中默认导出

- less（预处理器）：less提供了一些额外的语法

- vite.config.js中css配置（module篇）

  - 在vite.config.js中我们通过css属性去控制整个vite对于css的处理行为

    - localConvention：修改生成的配置对象的key的展示形式（驼峰还是中划线形式）
    - scoprBehaviour：配置当前的模块化行为时模块化还是全局化（由hash就是开启了模块化的一个标志，因为它可以保证产生不同的hash值来控制我们的样式类名不被覆盖）
    - generateScopedName:生成类名的规则（可以配置为函数，也可以配置为字符串规则）
    - hashPrefix：生成hash时会跟据类名进行生成（hash：只要你的字符串有一个不一样，生成的类名也不一样）
    - globalModulePath：代表不想参与到css模块化的路径

  - ~~~js
    import {defineConfig} from 'vite'
    
    export default defineConfig({
        optimizeDeps:{
            exclude:[]//将指定数组中的依赖不进行依赖预构建
        }，
        envPrefix:'ENV_',
        css:{
        	//对css的行为进行配置
        	modules:{
        		//是对css模块化的默认行为进行覆盖
        		localsConvention:'camelCaseOnly',
        		scopeBehaviour:'global',
        		generateScopedName:'[name]_[module]_[hash]'
        		//配置成函数后，返回值就决定了最终显示的类型
        		gengerateScoprdName:(name,filename,'css',css)=>{
        			/*
        			name 代表的时此刻css文件中的类名
        			filename 是当时css文件的绝对路径
        			css 返回的是当前的样式
        			*/
        			return `${name}_${filename}`
    			}
    			hashPrefix:'hello',
                globalModulePath:[path]
    		}
    	}
    })
    ~~~

- vite.config.js中css配置（preprocessorOptions篇）

  - 主要是用来配置css预处理的一些全局参数

  - less可以定义变量

    - ~~~css
      @mainColor = red；
      ~~~

    - 

  - ~~~js
    import {defineConfig} from 'vite'
    
    export default defineConfig({
        optimizeDeps:{
            exclude:[]//将指定数组中的依赖不进行依赖预构建
        }，
        envPrefix:'ENV_',
        css:{
        	//对css的行为进行配置
        	modules:{
        		.....
    		}，
            preprocessorOptions:{
                //key + config key代表预处理的名字
            	less:{
                	//整个的配置对象都会最终给到less的执行参数（全局参数）中去
                	math:'always',
                    globalVars:{
                    	//全局变量
                        mainColors:'red'
                    }
            	}        
            },
            //开启css的sourceMap（文件索引）
            devSourcemap:true,
    	}
    })
    ~~~

##### 3）postcss

- 预处理器无法解决的问题

  - 对未来css属性的一些使用降级问题
  - 前缀补全

- ~~~shell
  yarn add postcss-cil postcss -D
  ~~~

- 工作流程

  - css代码-->postcss-->less-->再次对未来的高级css语法进行降级-->前缀补全-->浏览器客户端

- vite配置postcss

  - 直接在defineConfig中进行配置
  - postcss-preset-env：支持css变量和一些未来css语法 自动补全（auto）

##### 4）为什么在服务端一定要使用path

~~~js
//postcss.config.js
const postcssPreseEnv = require('postcss-present-env')
const path = require('path')

module.exports = {
    plugins:{
        postcssPreseEnv({
            importFrom:path.resolve(__dirname,'./variable.css')
        })
    }
}

//main.js
//处理文件的模块（读文件，修改文件等一系列操作）
const fs = require('fs')
//path本质就是一个字符串处理模块，它里面有非常多的路径字符串处理方法
const path = require('path')
//我们希望基于main.js去进行一个绝对路径的生成
const result = fs.readFileSync('./variable.css')

//node端去读取文件或者操作文件的时候，如果发现你用的是相对路径，则会使用postcss.cwd去进行对应的拼接
//process.cwd：获取当前的node执行目录
//__dirname始终返回的是当前文件所在的目录

//涉及到commonjs规范的一个原理:放在一个立即执行函数下
(function(){}())
~~~

#### 8.vite加载静态资源

- 定义：除了动态API以外，几乎都会被看作静态资源

- vite对静态资源基本上是开箱即用的，除了一种特殊情况（svg）

- ~~~js
  import './src/imageLoader'
  import jsonFile from './src/assets/json/index.json'
  //如果用的不是vite，在其他的一些构建工具里，json文件的导入会作为一个JSON字符串的形式存在
  
  //企业项目：如果生产环境非常臃肿和性能差
  //tree shaking 摇树优化
  console.log('jsonFile',name)
  
  resolve:{
      alias:{
          //设置别名，在其他组件中可以代替
          '@':path.resolve(__dirname,'./src')
      }
  }
  
  ~~~

- vite在生产环境对静态资源的处理

  - 当我们将工程打包以后，找不到原来的资源

    - webpack需要配置绝对路径

  - 打包后为什么会有hash

    - 浏览器有一个缓存机制，静态资源只要名字不改，那么就会调用缓存的

    - 刷新页面：请求的名字是不是同一个 同一个读取缓存

    - hash算法：将一串字符串经过运算得到一个新的乱码字符串 

      - 利用好hash算法u可以更好地去控制浏览器的缓存机制

    - ~~~js
      export default defineConfig({
          build:{
              rollupOptions:{
                  //配置rollup的一些构建策略
                  output:{//控制输出
                  	//在rollup里面，hash代表将你的文件名和文件内容进行组合计算得来的结果
                  	assetFileNames:'[hash].[name].[ext]'
              	},
              },
              assetsInlineLimit:4096,
              outDir:'dist',
              assetsDir:'static',
          }
      })
      ~~~

#### 9.加载svg的方式

~~~js
import svgIcon from './assets/svgs/fullScreen.svg?url'
import svgRaw from './assets/svgs/fullScreen.svg?raw'

console.log('svgIcon',scgIcon,scgRaw)
document.body.innerHTML = svgRaw
const svgElement = document.gteElementByTagName('svg')[0]

svgElement.onmouseenter = function(){
    //改fill属性
    this.syle.fill = 'red'
}

//第一种使用svg的方式
const img = document.createElment('img')
img.src = svgIcon
document.body.appendChild(img)
//第二种加载svg的方式
~~~

#### 10.Vite插件

- 概念：vite会在生命周期的不同阶段中去调用不同的插件以达到不同的目的

  - webpack：输出html文件的一个插件 清楚输出目录：clean-webpack-plugin
  - vite：emptyOutDir：true（清除输出目录中的所有文件）

- vite-aliases

  - 可以帮助我们自动生成别名：检测你当前目录下包括src在内的所有文件夹，并帮助我们去生成别名

  - nvm：node的版本管理工具 

  - ~~~js
    export default defineConfig({
        plugins:{
            ViteAliases({
                prefix:'@ '
            })
        }
    })
        
    /*
    '@':'//src/assets'
    '@aseets':'//src/assets'
    */
    ~~~

- 手写vite-alias插件

  - 整个插件就是在vite的生命周期的不同阶段做不同的事情

  - 通过vite.config.js 返回出去的配置对象以及我们在插件的config生命周期中返回的对象都不是最终的一个配置对象

  - vite会把这几个配置对象进行merge合并

  - ~~~js
    const fs =require('fs')
    const path = require('path')
    
    function diffDirAndFile(dirDileArr = []){
        const result = {
            dirs:[],
            files:[]
        }
        dirFilesArr.forEach(name=>{
            //用异步方法写
            const currentFileStat = fs.statSync(path.resolve(__dirname,basePath+'/'+name))
        })
        const isDirectory = currentFileStat.isDirectory();
        if(isDirectory){
            result.dirs.push(name)
        }else{
            result.files.push(name)
        }
        return result
    }
    
    function getTotalSrcDir(){
        const result = fs.readdirSync(path,resolve(__dirname,'../src'))
        const diffResult = diffDirAndFile(result,'../src')
        //放的是一个个的别名配置 @assets：xxx
        const reslveAliasesObj = {}
        diffResult.dirs.forEach(dirName=>{
            const key = `@${dirname}`
            const abspath = path,resolve(__dirname,'../src'+'/'+dirName)
            resolveAliasesObj[key] = abspath
        })
    }
    //vite的插件必须返回给vite一个对象
    module.export = () =>{
        return {
            config(config,env){
                //只传值，不传给执行配置文件
                console.log('config',config,env)
                //config：目前的一个配置对象
                //production development serve build yarn dev
                //env：mode：string，command：string
                //config函数可以返回一个对象，这个对象可以是部分的（其实就是想改的一部分）
                const result = fs.readdirSync(path.resolve(__dirname,'../src'))
                const resolverAliasesObj = getTotalSrcDir()
                return {
                    //，
                    resolve:{
                        
                    }
                }
            }
        }
    }
    ~~~

- vite-plugin-html

- vite-plugin-mock

  - mock数据，来完成前端的工作

  - 简单方式：写死一个两个数据，方便调试

    - 缺陷：
      - 没办法做海量数据测试
      - 无法获得标准数据
      - 无法感知http异常

  - mockjs：模拟海量数据的插件，vite-plugin-mock的依赖项就是mockjs

    - ~~~js
      import mockJS from 'mockjs'
      
      const userlis = mockJS.mock({
          'data|100':[{
              name:'@cname',//表示生成不同的中文名
              ename:'@name',//生成不同的英文名
              'id|+1':1,//表示自增
          }]
      })
      ~~~

  - 手写mockjs

    - ~~~js
      
      //当打开本地的开发服务器的时候 viteserver服务器接管
      
      return {
          configureServer(server){
              /*
              服务器相关配置：
              req：请求对象-->用户发过来的请求，请求头请求体 url cookie
              res：响应对象，- res.header
              next：是否交给下一个中间件，调用next方法会将处理结果交给下一个中间件
              */
              server.middlewares,use((req,res,next)=>{
                  console.log(req.url)
                  if(req.url === '/api/users'){
                      const mockkStat = fs.statSync('mock')
                      mockStat.isDirectory()
                      if(isDirectory){
                          //process.cwd()---->获取你当前的执行根目录
                          const result = require(path.resolve(process.cwd(),'mock/index.js'))
                      }
                      res.end('helloworld')//设置请求头
                  }
                  next()
              })//插件 === middlewares
              
              server.middlewares.use((req,res,next)=>{
                  //检查请求的地址在mockResult当中是否存在
                  const matchItem = mockResult.find(mockDescriptor => mockDescriptor.url == req.url)
                  
                  if(matchItem){
                      const responseData = matchItem.response(req)
                      res.setHeade('Content-Type','application/json')
                      res.end(JSON.stringfify(responseData))
                  }else{
                      next()
                  }
              })
          }
      }
      ~~~

- vite插件补充

  - ~~~js
    import {defineConfig} from 'vite'
    
    export default defineConfig({
        plugins:[
            {
                config(options){
                    console.log(options)
                },
                configureServer(server){
                    
                },
                transformIndexHtml(html){
                    
                },
                configResolved(options){
                    //整个配置文件的解析流程完全完毕以后会走的钩子
                    //vite在内部有一个默认的配置文件
                },
                cofigurePreviewServer(server){
                
            	},
                options(rollupOptions){
                	//universal hooks-->vite和rollup都会关注的hooks  
                },
                buildStart(fullRollupOptions){
                    
                }
            }
        ]
    })
    ~~~


#### 11.vite和TS结合

- ts是js的一个类型检查工具 检查我们代码中可能会存在的一些隐形问题 同时带给我们一些语法提示

  - ~~~typescript
    let str:string = 'hello'
    
    interface PersonField{
        name:string,
        age:number,
    }
    
    function demo(params:PersonField){
        
    }
    
    console.log('meta',import.meta.env.VITE_PROXY_TARGET)
    //vite-env.d文件下的钩子
    interface ImportMetaEnv{
        readonly VITE_PROXY_TARGET:string
    }
    ~~~

  - ~~~typescript
    //配置ts的检查手段和检查规则
    {
        'compilerOptions':{
            'moduleResolution':'node',
            'module':'ESNext',
            'lib':['ES2017','DOM'],
            //是否跳过node_modules目录的检查
            'skipLibCheck':true,
        }
    }
    
    //控制台报错插件
    import {defineConfig} from 'vite'
    import checker from 'vite-plugin-checker'
    import path from 'path'
    
    export default defineConfig({
        'build':{
         	'minify':false,
            'rollupOptions':{
                'input':{
                	main:path.resolve(__dirname,'./index.html')
                    product:path.resolve(__dirname,'./src/product.html')
                },
                'output':{
                    'manualChunks':(id:string)=>{
                        if(id.includes('node_modules')){
                        	return 'vendor'  
                        }
                    }
                }
            }
        },
        plugins:[checker({
            typescript:ture
        })]
    })
    
    //三斜线指令 
    ///<reference types='vite/cilent'/> === import
    ~~~

#### 12.vite性能优化

- 开发时态的构建速度优化:yarn dev

  - webpack：cache-loader cache loader结果（如果两次构建源代码没有产生变化，则直接使用缓存，不调用loader） 开启多线程去构建
  - vite是按需加载

- 页面性能指标：与怎样写代码相关

  - 首屏渲染：fcp（first content paint）
    - 懒加载：写代码实现
    - http优化：协商缓存 和强缓存
      - 强缓存：服务端给响应头会追加一些字段（expires），客户端会记住这些字段，在expires（截止失效时间）没有到达之前，无论你怎么刷新页面，浏览器哦都不会重新请求页面，而是从缓存里取
      - 协商缓存：是否使用缓存与后端商量一下，当服务端给我们打上协商缓存的标记以后，客户端在下次刷新页面需要重新请求资源时会发送一个协商请求到服务端，服务端如果说需要变化，则会响应具体内容，如果服务端觉得没变化则会响应304
  - 页面中最大元素的一个时长：lcp（large content paint）

- js逻辑

  - 注意副作用的清除：组件时会频繁的挂载和卸载

    - 假设有一个组件中存在计时器（setTimeout），在卸载的时候不去清除这个计时器，下次再次挂载的时候计时器等于开了两个线程

    - ~~~js
      const [timer,setTimer] = useState(null)
      useEffect(()=>{
          setTimer(setTimeout(()=>{}))
          return ()=> clearTimeout(timer)
      })
      ~~~
    
  - 在写法上的注意：requestAnimationFrame，requestIdleCallback 卡浏览器频率 对浏览器渲染原理有一定的认识 在这方面进行优化
  
    - requestIdleCallback：传一个函数进去
    - 浏览器的频率：16.6ms去更新一次（执行js逻辑 以及 重排重绘...）
    - concurrent mode --> concurrency可终端渲染react
  
  - 防抖、节流， 可以使用lodash js工具
  
  - 作用域的控制
  
  - css
  
    - 关注继承属性：能继承的不需要重写
    - 尽量避免深层嵌套
  
  - 构建的优化（vite【rollup】，webpack）
  
    - 优化体积：压缩，tree shaking，图片资源压缩，cdn加载，分包
  
    - 分包策略
  
      - 浏览器的缓存策略：
        - 静态资源--->文件名不变 就不会重新调用
      - 分包就是把一些不会常规改变的代码
  
    - ~~~typescript
      //配置检查规则 
      {
          'compilerOptions':{
              'moduleResolution':'node',
              'module':'ESNext',
              'lib':['ES2017','DOM'],
              //是否跳过node_modules目录的检查
              'skipLibCheck':true,
              'allowSyntheticDefaultImports':true
          }
      }
      
      import {forEach} from 'lodash'
      
      //ts的类型声明
      const mainArr = []
      forEach(mainArr,(elm)=>{
          
      })
      ~~~
  
    - gzip压缩
  
      - 从入口文件到其一系列依赖最终打包成的js文件叫块
      - 块最终会映射成js文件，但是块不是js文件
      - 实现原理：
        - 服务端读取gzip文件（. gz后缀）设置一个响应头儿 content-encoding --> gzip（代表告诉浏览器该文件是使用gzip压缩过的）
        - 浏览器收到响应结果 检查响应头里由gzip对应字段 立即解压 得到原原本本的js文件（浏览器是要承担一定的解压时间）
        - 如果体积不是很大的话 不要用gzip压缩
  
    - 动态导入
  
      - 动态导入和按需加载异曲同工（es6新特性）
  
    - cdn加速
  
      - cdn:content delivery network 内容分发网络
  
      - 我们的所有依赖以及文件在我们进行打包后（yarn build）会放到我们的服务器上去
  
      - 将我们以来额度第三方模块全部写成cdn的形式，来保证自己的代码为一个小体积（体积小服务器和客户端的传输压力就小）
  
      - ~~~typescript
        import {defineConfig} from 'vite'
        import viteCDNPlugin from 'vite-plugin-cdn-import'
        
        export default defineConfig({
            viteCDNPlugin({
                modules:[{
                    name:'lodash',
                    var:'_',
                    path:'https://cdn.jsdeliver.net/npm/lodash@4.17.21/lodash.min.js'
                },
                {
                    build:{
                        rollupOptions:{
                            external:['lodash']
                        }
                    }
                }]
            })
        })
        ~~~
  
    - vite处理跨域
  
      - 同源策略：仅在浏览器发生，是浏览器的规则
  
        - 如果http交互默认情况下只能在同协议同域名同端口的两台终端进行
  
      - 跨域：当A源 向 B源（不满足同源策略，满足同源限制）请求对应性息，就会产生跨域，跨域请求默认情况下会被浏览器拦截，除非对应的请求服务器出具标记说这个A源是允许调用B源中的数据
  
        - 跨域限制是服务器已经得到响应，但是浏览器不允许发送
  
        - ~~~typescript
          import {defineConfig} from 'vite'
          
          export default defineConfig({
              server:{
                  //开发服务器中的配置
                  proxy:{
                      //配置跨域解决方案
                      '/api':{
                          //key+描述对象 以后遇到/api开头的请求时，都将其代理到target属性对应的域中去
                          target:'https://www.360.com'
                          changeOrigin:true
                          rewrite:(path)=.path.replace(/^\api/,'')
                      }
                  }
              }
          })
          
          fetch('/api').then(data =>{
              console.log('data',data)
          })
          ~~~
  
        - 开发时：我们一般利用 构建工具或者脚手架或者第三方库的proxy代理配置，或者自建一个开发服务器
  
        - 生产时：一般交由后端去处理跨域
  
          - ngnix：代理服务
          - 配置身份标记
