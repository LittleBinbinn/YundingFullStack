
<template>
  <div :class="booklist.length<1? 'hide':'show'">
    <span>总价：￥ {{ totalprice }}</span><span>当前选中书籍：{{ book }}</span>
    <thead>
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
    </thead>

    <book-manage :booklist="booklist" @show="select">
    </book-manage>

  </div>
  <div :class="booklist.length < 1 ? 'show' : 'hide'">
    糟糕！购物车空了,快去选购吧！
  </div>
</template>

<script>
import BookManage from './components/bookmanage.vue'

export default {
  
  components: {
    BookManage
  },
  data() {
    return {
      book: "",
      booklist: [
        {
          id: 1,
          name: "《JavaScript高级程序设计》",
          price: 126,
          count: 1,

        },
        {
          id: 2,
          name: "《你不知道的js（上卷）》",
          price: 78,
          count: 1,

        },
        {
          id: 3,
          name: "《你不知道的js（中卷）》",
          price: 76,
          count: 1,

        },
        {
          id: 4,
          name: "《你不知道的js（下卷）》",
          price: 64,
          count: 1,

        }

      ]
    }
   
  },
      methods: {
      select(index){
      this.book= this.booklist[index].name
     },
   
  },
      computed: {
        totalprice() {
          return this.booklist.reduce((prevalue, item) => {
          return prevalue + item.price * item.count
         },0)
        }
  }
  
}
</script>

<style scoped>
 th {
  border: 1px solid #aaa;
  padding: 8px 16px;
}
.show{
  display: block;
}
.hide{
  display: none;
}
</style>
