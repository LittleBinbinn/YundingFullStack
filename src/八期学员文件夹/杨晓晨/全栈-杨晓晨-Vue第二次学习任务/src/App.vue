<template>
  <ul>
    <div class="now">总价： ￥{{allPrice}} 当前选中书籍：{{nowName}}</div>
    <button @click="demo">demo</button>
    <li class="title">
      <div>序号</div>
      <div>书名</div>
      <div>价格</div>
      <div>购买数量</div>
      <div>操作</div>
    </li>
    <myItem 
    v-for="item in items" 
    :key="item.id" 
    :item="item"
    :delate="delate"
    :select="select"
    :jia='jia'
    :jian='jian'
    :edit='edit'
    
    ></myItem>
  </ul>

  <button @click="add" v-show="btnstatue.btnadd">添加</button>
  <button v-show="btnstatue.btnedit" @click="confirm">确定</button>
  <button v-show="btnstatue.btnedit" @click="cancel">取消</button>
</template>

<script>
import {reactive,ref,computed,watch} from 'vue';
import myItem from './components/items.vue';

export default {
  name: 'App',
  components: {
    myItem
  },
  setup() {
    //列表元素
    let items = reactive([
      {
        id:1,
        name:'哈利波特',
        price:1,
        num:6,
        now:false,
        isNew:false,

      },
      {
        id:2,
        name:'为什么不行',
        price:2,
        num:6,
        now:false,
        isNew:false,
      }

    ])
    //当前价格名称
    let allPrice = computed(()=>{
      let result = 0;
      items.forEach((item)=>{
        result = result + item.price * item.num
      })
      return result;
    })

    let nowName = ref('');

    //btn状态
    let btnstatue = reactive({
      btnadd:true,
      btnedit:false,
    })
    //新的信息
    let newdata = reactive({
      newName:'',
      newNum:0,
      newPrice:0,
    })







    //删除功能
    const delate = function (item) {
      //用过滤的话就成了数组里面包了一个代理，但是监视里面赋值就没有关系，感觉是filter返回值的问题
      // items = items.filter(item => item.id != id);
      // console.log(items);

      //而使用splice直接改变数组本身则可以成功
      let index = items.indexOf(item);
      items.splice(index,1)
    
    }


    //点击当前列表功能
    const select = function(item){
      //改变样式
      items.forEach(e=>e.now = false);
      item.now = true

      //改变数值
      let index = items.indexOf(item);
      
      nowName.value = items[index].name;
      
    }

    //增减商品数量功能
    const jia = function(item){
      let index = items.indexOf(item);
      items[index].num++
    }

    const jian = function(item){
      let index = items.indexOf(item);
      items[index].num--
    }


    //编辑信息
    const edit = function(newName,newPrice,newNum){
      console.log(newName,newPrice,newNum);
      newdata.newName = newName;
      newdata.newPrice = newPrice;
      newdata.newNum = newNum;

    }
    
    //添加书籍
    const add = function(){
      btnstatue.btnadd = !btnstatue.btnadd;
      btnstatue.btnedit = !btnstatue.btnedit;
      newdata.newName = '';
      newdata.newPrice = 0;
      items.push({
        id:'',
        name:newdata.newName,
        price:newdata.newPrice,
        num:newdata.newNum,
        now:false,
        isNew:true,
      })

    }

    const confirm = function(){
      
      
      //名字价格校验
      if(!newdata.newPrice){
        alert('哥们，你价格呢？')
      }
      else if(!newdata.newName){
        alert('哥们，你名字呢？')
      }
      else{
      //将列表认为旧列表
      items[items.length - 1].isNew = false;
      //隐藏按钮
      btnstatue.btnadd = !btnstatue.btnadd;
      btnstatue.btnedit = !btnstatue.btnedit;
      //将编辑价格存入item列表里进行总价计数
      items[items.length - 1].price = newdata.newPrice;
      console.log(items[items.length - 1].price,newdata.newPrice);
      }
      
      
    }

    const cancel = function () {
      btnstatue.btnadd = !btnstatue.btnadd;
      btnstatue.btnedit = !btnstatue.btnedit;
      items.pop();
    }


    const demo = function(){
      items.shift();
      console.log(items);
    }

    watch(items,(newValue)=>{
      items = newValue
      console.log('okok',newValue)
    },{immediate:true})
  

    return {
      items,
      allPrice,
      nowName,
      btnstatue,
      delate,
      select,
      demo,
      jia,
      jian,
      edit,
      add,
      confirm,
      cancel,
    }
  }
}
</script>

<style>
.now{
  font-size: 25px;
}

.title{
  background-color: #ddd;
}

.title div {
  font-weight: 550;
}



</style>
