<template>
  <h2>总价：{{ "￥" + TotalPrice }} 当前选中书籍: {{ bookname }} </h2>
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
    <tbody>
      <book-list :bookList = "bookList" @add="increment" @decrease="decrement" @del="remove" @trclick="trclick">
      </book-list>
      <tr :class="{showit: isShow === false }">
        <td>{{ bookList.length + 1 }}</td>
        <td> <input type="text" v-model="inputName"></td>
        <td> <input type="number" v-model="inputPrice"></td>
        <td> 
          <button @click="deBuyNUm" :disabled="buyNum <= 0">-</button>
          {{ buyNum }}
          <button @click="addBuyNUm">+</button>
        </td>
        <td> <button disabled>移除</button></td>
      </tr>
    </tbody>
  </table>
  <br>
  <button @click="show" :class="{showit: addisShow === 1 }">添加</button>
  <div :class="{showit: isShow === false }">
    <button @click="confirm">确认</button>
    <button @click="noShow">取消</button>
  </div>
</template>

<script>

import bookList from './components/books.vue'

export default {

  components: {
    bookList
  },

  data() {
    return {
      bookList: [
        { 
          bookName: "《你不知道的JavaScript(上)》",
          price: 120,
          num: 1,
        },
        {
          bookName: "《你不知道的JavaScript(中)》",
          price: 30,
          num: 1,
        },
        {
          bookName: "《你不知道的JavaScript(下)》",
          price: 70,
          num: 1,
        },
        {
          bookName: "《JAVA》",
          price: 100,
          num: 1,
        },
      ],
      bookname: '',
      isShow: false,
      buyNum: 1,
      addisShow: 0,
      inputName: '',
      inputPrice: 0
    }
  },

  computed: {
    TotalPrice(){
      let Price = 0;
      for (const item of this.bookList)
      {
        Price += item.price * item.num;
      }
      return Price;
    }
  },

  methods: {
    decrement(index) {
      this.bookList[index].num--;
    },
    increment(index) {
      this.bookList[index].num++;
    },
    remove(index) {
      this.bookList.splice(index, 1);
    },
    trclick(index) {
      if (index >= 0 && index < this.bookList.length)
      {
        this.bookname = this.bookList[index].bookName;
      }
      else
      {
        this.bookname = '';
      }
    },
    show() {
      this.isShow = true;
      this.addisShow = 1;
    },
    noShow() {
      this.isShow = false;
      this.addisShow = 0;
    },
    addBuyNUm() {
      this.buyNum++;
    },
    deBuyNUm() {
      this.buyNum--;
    },
    confirm() {
      if (this.inputName == '')
      {
        alert("书名不能为空");
        return;
      }
      if (this.inputPrice <= 0)
      {
        alert("价格必须为正数");
        return;
      }
      this.bookList.push({
        bookName: '《' + this.inputName + '》',
        price: this.inputPrice,
        num: this.buyNum
      })
    }
  }

  }
</script>

<style>

  table{
    border-collapse: collapse;
  }

  th,td{
    border: solid 1px #aaa;
    padding: 8px 16px;
  }

  thead{
    background-color: #f5f5f5;
  }
  
  .showit{
    display: none;
  }

</style>