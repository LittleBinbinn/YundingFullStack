<template>
  <div>
    <h2 style="text-align: center;">书籍购买商城</h2>
    <input class="inpStyle" v-model="inpName" type="text" placeholder="请输入书籍名称">&nbsp;
    <input class="inpStyle" v-model="inpMoney" type="text" placeholder="请输入价格">&nbsp;
    <h3>总价：￥{{ price }}</h3>
    <h3>当前选中书籍：{{ BookName }}</h3>
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
        <Book v-for="book in BookList" :key="book" :book="book" @ShowBook="ShowBook" :delete="del"
        @allMoney="allMoney">
        </Book>
      </tbody>
    </table>
    <button @click="add()" class="addStyle">添加</button>
  </div>
</template>

<script setup>
import Book from './BookItem.vue'
import { ref } from 'vue'

let prop = defineProps(['BookList','del','price'])
let BookName = ref(null)
let money = ref(0)
let inpName = ref(null)
let inpMoney = ref(null)
let AllMoney = ref(0)

function ShowBook(value) {
  BookName.value = value
  
}

function allMoney(num,price) {
  money.value = num * price
  for (let key in prop.BookList) {
    AllMoney += prop.BookList[key].allPrice
  }
}

function add(){
  if (inpName.value === null || inpMoney.value === null) {
    return
  }
  let obj = {
    id: prop.BookList.length + 1,
    bookName: '《' + inpName.value + '》',
    price: Number(inpMoney.value),
    num: 1
  }
  prop.BookList.push(obj)
  inpName.value = ''
  inpMoney.value = ''
}
</script>

<style lang="css">
body {
  color: black;
  background-color: #fff;
}

table {
  text-align: center;
  border-color: #EAEAEA;
}

thead {
  background-color: #F7F7F7;
  height: 60px;
  color: #596D79;
}

tbody>tr {
  height: 60px;
}

.addStyle {
  width: 60px;
  height: 30px;
  color: black;
  margin-left: 20px;
  border: none;
  border-radius: 15%;
}

.inpStyle {
  width: 200px;
  height: 30px;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
}

::placeholder {
  color: white;
}

tr:hover {
  background-color: greenyellow;
}

tr:active {
  background-color: orange;
}
</style>