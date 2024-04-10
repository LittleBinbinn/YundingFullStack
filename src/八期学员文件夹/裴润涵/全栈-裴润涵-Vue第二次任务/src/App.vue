<template>
  <h1>总价：{{formatprice( totalprice )}} 当前选中书籍:{{ currentindex }}</h1>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- <tbody> 
      <tr v-for="(item,index) in books" :key="item.name">
        <td>{{ index+1 }}</td>
        <td>《{{ item.name }}》</td>
        <td>{{formatprice( item.price )}}</td>
        <td><button v-bind:disabled="item.num<=1" @click="decrement(index)">-</button>{{ item.num }}<button
            @click="increment(index,item)">+</button></td>
        <td>
          <button @click="remove(index)">移除</button>
        </td> 
      </tr>
    </tbody>  -->
    <content v-bind:books="books"
    @trrclick="trclick"></content>
  </table>
  <button @click="add" v-if="!flag">增加</button>
  <button v-if="flag" @click="sure">确定</button>
  <button v-if="flag" @click="quit">取消</button>
</template>
<script>
let shuming, jiage=0;
import content from "./content.vue";
  export default {
  components: {
    content,
  },
  data() {
    return {
      flag:false,
      count: 0,
      money: 100,
      books: [
        {
          id: 1,
          name: 'JavaScript高级程序设计',
          price: 126,
          num: 1 ,
        }, {
          id: 2,
          name: '你不知道的JS(上卷)',
          price: 78,
          num: 1,
        },
        {
          id: 3,
          name: '你不知道的JS(中卷)',
          price: 76,
          num:1
        },
        {
          id: 4,
          name: '你不知道的JS(下卷)',
          price: 64,
          num:1
          }
      ],currentindex:''
    }
  },
  computed: {
    
    totalprice() {
      // return this.books.reduce((count, item) => {
      //   return item.price * item.num + count
      // }, 0);
      let prices = 0;
      for (const item of this.books) {
        prices += item.num * item.price;
      }
      return prices;
    }
  },
  methods: {
    formatprice(price){
      return "￥" + price;
    },
    decrement(index) {
      this.books[index].num--
    },
    increment(index,item) {
      //this.books[index].num++;
      item.num++
    },
    remove(index) {
      this.books.splice(index,1)
    },
    add() {
      this.flag = true;
      
    },
    sure() {
      // shuming = window.prompt('请输入书名')
      // if (shuming == '') {
      //   alert('书名不能为空')
      //   shuming = window.prompt('请输入书名')
      // }
      while (!shuming) {
        shuming = window.prompt('请输入书名')
        if(shuming=='')
        alert('书名不能为空')
      }
      while (jiage <= 0) {
        jiage = window.prompt('请设定价格')
          if (jiage <= 0) {
      
        alert('价格应该为正数')
      }
      }
      // jiage = window.prompt('请设定价格')
      
      this.books.push({
        id: this.books.length+1,
        name: shuming,
        price: jiage,
        num:1
      })
    },
    quit() {
      this.flag=false
    },
    trclick(index) {
      this.currentindex=this.books[index].name
    }
  }
}
</script>

<style scoped>
table{
  border-collapse: collapse;
  text-align: center;
}
th,td{
  border: black 1px solid;
  padding: 8px 16px;
}
thead{
  background-color: rgb(236, 234, 234);
}
</style>