<template>
  <div>
    <h2>
      总价:￥{{ totalPrice===0?0:totalPrice }}当前选中的书籍:
      <span v-if="indexOnclick >= 0">{{ book[index].name }}</span>
    </h2>
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
      <book></book>
      <tr :class="{box:burs}">
        <td>{{ books.length + 1 }}</td>
        <td><input type="text" v-model="newName"></td>
        <td><input type="number" v-model="newPrice"></td>
        <td></td>
        <td></td>
      </tr>
    </table>
    <tfoot><button @click="add" :class="{box:!bur}">添加</button><br>
      <button @click="addbook" :class="{box:bur}">确定</button><button @click="quitbook" :class="{box:bur}">取消</button></tfoot>
    
  </div>
</template>

<script>
 import book from "./components/book.vue";

export default {
   components: { book },
  data() {
    return {
      books: [
        { name: "《如何获得富婆喜欢》",
          price: 6,
          num: 0,
        },
        { name: "《如何获得富婆讨厌》", price: 66, num: 0 },
        { name: "《如何找到富婆》", price: 99, num: 0 },
        { name: "《母猪的产后护理》", price: 111, num: 0 },
      ],
      bur:true,
      burs:true,
      newName: "",
      newPrice: 0,
    };
   
  },
  methods: {
    tdclick(index) {
      this.indexOnclick = index
    },
   
    add(){
      this.bur = !this.bur; 
      this.burs = !this.burs;
      // if (this.newPrice > 0) {
      //   this.book.push({ name: this.newName, price: this.newPrice, num: 0 })
      // } else {
      //   alert("价格应当是正数")
      // }
    },
    addbook() {
      this.books.push({ name: this.newName, price: this.newPrice, num: 0 })
    },
    quitbook() {
      this.bur = !this.bur; 
      this.burs = !this.burs;
    },
    tdclick(index) {
      this.indexOnclick = index
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.books.forEach((book) => {
        total += book.price * book.num;
      });
      return total;
    },
  },
};
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  text-align: left;
}
 table {
  text-align: center;
  border:2px  solid black;
  font-size: 20px;
}
.box{
  display:none ;
}
</style>
