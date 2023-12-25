# Vue笔记

## 引入VUE

创建一个html文件，然后通过如下方式引入 Vue：

```vue
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
```

或者：

```vue
<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```

## 模板语法

### 插值语法

```vue
<body>
    <div id='root'>
        <h1>
    		{{name}}
		</h1>
    </div>
</body>
<script>
    //创建Vue实例
    new Vue({
		el:'#root',
        data:{
			name:'jack',
        }
    })
</script>
```

其中的{{name}}就是插值语法，会直接引用

### 指令语法

```vue
<body>
    <div id='root'>
        <h1>指令语法</h1>
        <a v-bind:href='url'></a>
        <a :href='url'></a>
        //两个a标签效果一致
    </div>
</body>
<script>
    new Vue({
		el:'#root',
        data:{
			url:'http://4399.com',
        }
    })
</script>
```

指令语法写在标签的尖括号里，"v-vind:"可以简写为“：”

## 数据绑定

```vue
<body>
    <div id='root'>
        单向数据绑定：<input type="text" v-bind:value="name"><br/>
		双向数据绑定：<input type="text" v-model:value="name"><br/>
        
        <!-- 简写-->
		单向数据绑定：<input type="text" :value="name"><br/>
		双向数据绑定：<input type="text" v-model="name"><br/>
    </div>
</body>
<script>
    //创建Vue实例
    new Vue({
		el:'#root',
        data:{
			url:'http://4399.com',
        }
    })
</script>
```

v-model只能应用在表单类元素（输入类）上

如以下例子是错误的：

```vue
<h2 v-model:x="name">你好啊</h2>
```

## el和data的两种写法

### el

```vue
<script>
    const v = new Vue({
		el:'#root'
		//第一种写法，写的时候就指定
		data:{
			name:'张三',
		}
})
    v.$mount('#root')
    //第二种写法
    //$mount是原型方法，mount意为挂载
</script>
```

### data

```vue
<script>
	new Vue({
		el:'#root',
        //第一种写法：对象式
        data:{
			name："尚硅谷",
        }
        //第二种写法：函数式
        data:function(){
			return {
                name:'尚硅谷',
            }
    	}
    })
</script>
```

Vue组件中的data必须是函数式，否则会报错

## Object.defineProperty方法

### 基础配置项

```js
let number = 18
let person = {
	name:'张三',
	sex:'男',
}
Object.defineProperty(person,"age",{
	value:18	
})
//三个参数：给哪个对象添加属性名，添加的属性名字，配置项
```

使用该方法与直接在对象中添加键值对不同，**使用该方法添加的属性不可以被枚举**

如果想让属性可以枚举，则需要添加enumerable属性：

```js
let number = 18
let person = {
	name:'张三',
	sex:'男',
}
Object.defineProperty(person,"age",{
	value:18,
    enumerable:true
    //该配置项控制属性是否可以枚举，默认值是false
})
```

**此时属性虽可以枚举**，**但是不可以被修改**

若想要属性可以被修改，可以添加配置项writable

此外，还有控制属性是否可以被删除的配置项configurable

```js
Object.defineProperty(person,'age',{
	 value:18,
	 enumerable:true, //控制属性是否可以枚举，默认值是false
	 writable:true, //控制属性是否可以被修改，默认值是false
	 configurable:true //控制属性是否可以被删除，默认值是false
})
```

### 高级配置项

```js
let number = 18
let person = {
	name: '张三',
	sex: '男',
}
Object.defineProperty(person, 'age', {
	// value:18,
	// enumerable:true, //控制属性是否可以枚举，默认值是false
	// writable:true, //控制属性是否可以被修改，默认值是false
	// configurable:true //控制属性是否可以被删除，默认值是false

	//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
	get() {
		console.log('有人读取age属性了')
		return number
	},

	//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
	set(value) {
		console.log('有人修改了age属性，且值是', value)
		number = value
	}

})
```

###### 附：输出对象中key的方法：

- console.log(Object.keys(person))

- ```js
  for (let key in person){
  	console.log(person[key])
  }
  ```

弹幕有提到这是数据双向绑定、数据劫持的底层原理

## 数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```js
let obj = {x:100}
let obj2 = {y:200}

Object.defineProperty(obj2,'x',{
	get(){
		return obj.x
	},
	set(value){
		obj.x = value
	}
})
```

## 条件渲染（判断）

### 条件判断

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```vue
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

Vue还提供了v-else-if,充当 `v-if` 的“else-if 块”，可以连续使用：

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

#### 实例：

```vue
<body>
    <div id="app">
        <h1 v-if="awesome">Vue is awesome</h1>
        <h1 v-else>Oh no</h1>
    </div>
    <script>
        var app = new Vue({
            el: "#app",
            data: {
                awesome: true/false
            }
        })
    </script>
</body>
```

### 复用

vue会尽可能高效的渲染元素，通常会复用已有元素而不是从头渲染。

#### 实例

```vue
<template v-if="loginType === 'username'">  <label>Username</label>  <input placeholder="Enter your username"></template><template v-else>  <label>Email</label>  <input placeholder="Enter your email address"></template>
```

以上代码在切换loginType将不会清除用户已经输入的内容。因为两个模板使用了相同的元素。\<input>标签不会被替换，仅仅是替换了它的placeholder。

### key

vue提供了一种方式来表达“这两个元素是完全独立的，不要复用他们”。只需要添加一个key即可

```vue
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

由于input标签添加了key属性，所以input不会被复用

## 列表渲染

用v-for把一个数组对应为一组元素

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

```vue
<ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul>
<script>
    var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
</script>
```

在 `v-for` 块中，我们可以访问所有父作用域的 property。`v-for` 还支持一个可选的第二个参数，即当前项的索引。

```vue
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
<script>
    var example2 = new Vue({
        el: '#example-2',
        data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
    ]
  }
})
</script>
```

## 事件处理

### 监听事件

可以用v-on指令监听DOM事件，并在出发时运行一些JavaScript代码

示例：

```vue
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
<script>
    var example1 = new Vue({
        el: '#example-1',
        data: {
            counter: 0
        }
    })
</script>
```

### 事件处理方法

许多事件处理逻辑会更为复杂，所以直接把 JavaScript 代码写在 `v-on` 指令中是不可行的。因此 `v-on` 还可以接收一个需要调用的方法名称。

```vue
<div id="example-2">
  <!-- `greet` 是在下面定义的方法名 -->
  <button v-on:click="greet">Greet</button>
</div>
<script>
	var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
</script>
```

## 其他指令

v-once

v-text

v-html

以html对拿到的数据进行解析

v-pre

v-pre用于跳过元素和它的子元素的编译过程，显示原始的Mustache标签:
跳过不需要编译的节点，加快编译的速度;

v-cloak

当js代码未执行时，会先显示{{}}，编译到具体语句才会进行替换。

v-cloak（斗篷）使得在编译前不显示{{}}

v-memo

## 内联处理器中的方法

除了直接绑定到一个方法，也可以在内联 JavaScript 语句中调用方法：

```vue
<div id="example-3">
  <button v-on:click="say('hi')">Say hi</button>
  <button v-on:click="say('what')">Say what</button>
</div>
<script>
	new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})
</script>
```

有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 `$event` 把它传入方法：

```js
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
}
```

### 事件修饰符

.stop 阻止事件继续传播
.prevent 阻止标签默认行为
.capture 使用事件捕获模式,即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理
.self 只当在 event.target 是当前元素自身时触发事件
.once 事件将只会触发一次
.passive 告诉浏览器你不想阻止事件的默认行为

# Vue组件开发（基础）

## 概念解析

组件

组件的定义：实现应用中局部功能代码(H5,C3,JS)和资源(视频音频)的集合

![](https://typora-image-mrz.oss-cn-beijing.aliyuncs.com/%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%84.png)

## 模块与组件

非单文件组件：一个文件中包含n个组件

单文件组件：一个文件中只包含1个组件

#### 组件的嵌套

子组件在父组件中注册

```vue
<script>
    const student = Vue.extend({
		template:`
			<div>
        		<h2>{{name}}</h2>
        		<h2>{{age}}</h2>
        	</div>
		`
        data(){
			return {
				name:'张三',
                age:18
            }
    	}
    })
	const school = Vue.extend({
        template:`
        	<div>
        		<h2>{{name}}</h2>
        		<h2>{{address}}</h2>
        		<student></student>
        	</div>
        `
        components:{
			student
    	}
    })	
    
    //一定要创建vm
    new Vue({
        el:'#root',
        components:{
			school:school,
        }
    })
</script>
```

- 子组件要写在父组件之前
- 子组件在父组件中注册
- 要在父组件的temple中添加子组件标签

- app组件：一人之下（vm），万人之上（其他组件）

#### VueComponent

1. school组件本质上是一个名为VueComponent的构造函数，是Vue.extend生成的

2. 我们只需要写\<school>\</school>，Vue解析时会帮我们创建school组件的实例对象。即Vue帮我们执行的：new VueComponent(options)。

3. 每次调用Vue.extend，返回的都是一个全新的VueComponent

4. this指向

   1. 组件配置中：

      data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【VueComponent实例对象】

   2. new Vue(options)配置中：

      data函数、methods中的函数、watch中的函数、computed中的函数，他们的this均是【Vue实例对象】

5. VueComponent的实例对象，以后简称vc（也可称之为：组件实例对象）

   Vue的实例对象，以后简称vm

#### 一个重要的内置关系

VueComponent不能写el，data必须是函数式

Vue可以写el，data可以是函数，可以是对象



## 单文件组件

单文件组件以.vue结尾

vue文件中可以写template、script、style标签

### 暴露

- 通过关键字import引入暴露的文件

- 三种暴露方法

  - ```js
    export const school = Vue.extend({})
    ```

  - ```js
    const school = Vue.extend({})
    export {school}
    ```

  - ```js
    export default school
    //常用
    ```

- 默认暴露可以使用简写形式

  - 引用：import ??? from ???

- 分别暴露或统一暴露：import {???} from ???

## ref属性

ref属性相当于原生HTML的id

```vue
<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>
<script>
	//引入School组件
	import School from './components/School'
	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
```

- console.log(this)可以获取vc，顺着vc可以找到DOM元素
- 给哪个标签加ref，vc就收集哪个元素
- 如果给组件标签加ref，如sch，this.$refs.sch拿到的就是school的vc实例

## props配置

- 在data里把数据定死会使得组件不易复用
- 每次生成新组件的时候传入需要的参数，就可以用同一组件实现不同需求
- 在组件的script标签中，vm应当添加props配置

```vue
<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学生年龄：{{myAge+1}}</h2>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>
<script>
	export default {
		name:'Student',
		data() {
			console.log(this)
			return {
				msg:'我是一个尚硅谷的学生',
				myAge:this.age
			}
		},
		methods: {
			updateAge(){
				this.myAge++
			}
		},
		//简单声明接收
		// props:['name','age','sex'] 

		//接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		props:{
			name:{
				type:String, //name的类型是字符串
				required:true, //name是必要的
			},
			age:{
				type:Number,
				default:99 //默认值
			},
			sex:{
				type:String,
				required:true
			}
		}
	}
</script>
```

- type:类型
- default:默认值

- required:必须要传的

- required和default一般不会同时出现
- 尽可能地不要更改传入的数据
- props中的数据会被优先接收优先显示，所以可以在data中用“myAge:this.age”的形式接收参数，再对myAge进行更改

## emit

子组件想要将自定义事件向上级透传的方式就是`this.$emit(<changName>, payload)`

child.vue

```javascript
<template>
<div>
  <button @click="onEmit"> 子组件透传事件 </button>
</div>
</template>
<script>
export default {
  methods: {
    onEmit() {
      this.$emit("on-change", "hi~");
    }
  }
}
</script>

复制代码
```

parent.vue

```javascript
<template>
<div>
  < child @on-change="onChildChange" />
</div>
</template>
<script>
import Child from "./Child.vue";
export default {
  components: {
    Child
  },
  methods: {
    onChildChange(v) {
      console.log(v); // hi~
    }
  }
}
</script>
```



## 插槽

- 这个时候我们就可以来定义插槽slot:
  - 插槽的使用过程其实是抽取共性、预留不同;
  - 我们会将共同的元素、内容依然在组件内进行封装;
  - 同时会将不同的元素使用slot作为占位，让外部决定到底显示什么样的元素;
- 如何使用slot呢?
  -  Vue中将\<slot>元素作为承载分发内容的出口;
  -  在封装组件中，使用特殊的元素\<slot>就可以为封装组件开启一个插槽;
  -  该插槽插入什么内容取决于父组件如何使用;

### 动态插槽名

- 什么是动态插槽名呢?
  - 目前我们使用的插槽名称都是固定的;
  - 比如v-slot:left. v-slot:center等等;
  - 我们可以通过v-slot:[dynamicSlotName]方式动态绑定-一个名称;

## 渲染作用域

在Vue中有渲染作用域的概念：

- 父级模板里的左右内容都是**在父级作用域中编译**的
- 子模版里的所有内容都是**在子作用域中编译**的

## 非父子通信

### Provide和Inject

- Provide/nject用于非父子组件之间共享数据

  - 比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容

  - 在这种情况下，如果我们仍然将props沿着组件链逐级传递下去，就会非常的麻烦

- 对于这种情况下，我们可以使用Provide和Inject

  - 无论层级结构有多深，父组件都可以作为其所有子组件的依赖提供者

  - 父组件有一一个provide选项来提供数据

  - 子组件有一个inject选项来开始使用这些数据;

- 实际上，你可以将依赖注入看作是"long range props",除了

  - 父组件不需要知道哪些子组件使用它provide的property

  - 子组件不需要知道inject的property来自哪里

## 全局事件总线

```shell
npm install hy-event-store
```

```js
export { HYEventBus } from 'hy-event-store'
const eventBus = new HYEventBus()
export default eventBus
```

```js
eventBus,on("whyEvent",(name,age,height) => {
	this.message=`name:${name},age:${age},height:${height}`
})
```

### 生命周期

1.又名：生命周期回调函数、生命周期函数、生命周期钩子。

2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数。

3.生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的。

4.生命周期函数中的this指向是vm或组件实例对象。

### 具体过程

1. 创建Home组件
2. 将组件挂载到组件树（虚拟DOM）
3. 修i该data中的数据，更新Home组件
4. 卸载，有的组件不会被卸载

### 常用的生命周期钩子

1.mounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。

2.beforeDestroy: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

### 关于销毁Vue实例

1.销毁后借助Vue开发者工具看不到任何信息。

2.销毁后自定义事件会失效，但原生DOM事件依然有效。

3.一般不会在beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了。

## 组合式API

### ref与reative

- 区别：

> 1. `ref`创建的变量必须使用`.value`
> 2. `reactive`重新分配一个新对象，会**失去**响应式（可以使用`Object.assign`去整体替换）。深层次也能使其变为响应式
>
> 使用此API可以为reactive处理后的对象重新分配新对象且保持响应式
>
> 

```js
Object.assign(target,NewObj);
```

### toRefs 与 toRef

- 作用：将一个响应式对象中的每一个属性，转换为`ref`对象

```js
let person = reactive({
	name:"cyx",
	age:11
})
//let {name, age} = person;//结构赋值后是新的变量，失去响应式
```

### computed计算属性

方法 vs 计算属性

不同之处

在于**计算属性值会基于其响应式依赖被缓存**。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要依赖属性不改变，无论多少次访问计算属性都会立即返回先前的计算结果，而不用重复执行 getter 函数。

这也解释了为什么下面的计算属性永远不会更新，因为 `Date.now()` 并不是一个响应式依赖：

相比之下，方法调用**总是**会在重渲染发生时再次执行函数。

### watch

监视一个函数（getter函数）返回一个值，一个ref，一个响应式对象，或以上述类型所组成的数组

watch(target, fn(newValue, OldValue), configObj)

隐式创建深度监听

**监听reactive，ref定义的对象类型（响应式）中的某一个属性且是基本类型**

```js
wacth(()=>person.age,(val)=>{
	//....
})
```

监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数开启深度监视{deep：true}

```js
watch(()=>person.car,(newValue,oldValue)=>{
    console.log('person.car变化了',newValue,oldValue)
},{deep:true})
```

