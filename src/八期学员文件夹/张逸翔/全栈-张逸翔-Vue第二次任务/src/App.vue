<script setup>
import { computed, reactive, ref } from 'vue';
import Content from './components/Content.vue'
import AddBook from './components/AddBook.vue';

let chart = reactive([
  { id: 1, bookname: 'Javascripts高级程序设计', perPrice: '10', number: '0', operate: '操作' },
  { id: 2, bookname: '你不知道的JS(上卷)', perPrice: '20', number: '0' },
  { id: 3, bookname: '你不知道的JS(中卷)', perPrice: '30', number: '0' },
  { id: 4, bookname: '你不知道的JS(下卷)', perPrice: '40', number: '0' },
])
const displayMsg = ref('')
const handleChildShowInfor = (msg) => { displayMsg.value = msg }

let TotalPrice = computed(() => {
  // let money = 900
  let money = 0
  for (const book of chart) {
    money += book.perPrice * book.number
  }
  return money
})

// 接收子组件传来的购买数量
function handleAddNumber(msg) {
  chart[msg.id - 1].number = msg.number;
  // console.log(msg.number)
}

function handleDelNumber(msg) {
  chart[msg.id - 1].number = msg.number;
}

var BooleanButton = ref(false)
var BooleanNewBook = ref(false)
function button() {
  BooleanButton.value = !BooleanButton.value
  BooleanNewBook.value = !BooleanNewBook.value
}
let LastBook = ref('')
let LastPrice = ref('')
let LastNumber = ref('')
function deci() {
  BooleanButton.value = !BooleanButton.value
  BooleanNewBook.value = !BooleanNewBook.value
  if (LastBook.value == '') {
    alert("书名不能为空")
    return -1
  }
  if (LastPrice.value <= 0) {
    alert("价格应该为正数")
    return -1
  }
  chart.push({
    id: chart.length + 1, bookname: LastBook.value, perPrice: LastPrice.value, number: LastNumber.value
  })
  LastBook.value = null
  LastNumber.value = null
  LastPrice.value = null
}
let NewCount = ref(0)
console.log(NewCount)
function NewAddNumber() {
  NewCount.value++;
  console.log(111)
  console.log(NewCount.value)
}
// 减少数量
function NewDelNumber() {
  NewCount.value--;
}

function cancle() {
  BooleanButton.value = !BooleanButton.value
  BooleanNewBook.value = !BooleanNewBook.value
}

// function d() {
//     console.log(111)

//   chart.pop()

//   console.log(chart)
// }
const show = computed(() => {
  return chart.length <= 0 ? true : false;
})
</script>

<template>
  <h1>总价：{{ TotalPrice }}</h1>
  <h1>当前选中书籍：{{ displayMsg }}</h1>

  <table id="table-father">
    <tr>
      <td>序号</td>
      <td>书名</td>
      <td>价格</td>
      <td>购买数量</td>
      <td>操作</td>
    </tr>


    <Content v-for="item in chart " :key="item.id" :item="item" :chartLength="chart.length"
      @showInfor="handleChildShowInfor" @addNumber="handleAddNumber" @delNumber="handleDelNumber"></Content>
    <AddBook v-if="BooleanButton && BooleanNewBook">
      <tr>
        <td>{{ chart.length + 1 }}</td>
        <td><input v-model="LastBook"></td>
        <td><input type="number" min="0" v-model="LastPrice"></td>
        <td>
          <button @click="NewDelNumber" :class="{ NoDisplay: show }">-</button>
          <input type="text" v-model="LastNumber">
          <button @click="NewAddNumber">+</button>
        </td>
        <td><button @click="d">移除</button></td>
      </tr>
    </AddBook>
  </table>
  <div v-if="!BooleanButton && !BooleanNewBook"><button @click="button" v-if="!BooleanButton && !BooleanNewBook">添加</button>
  </div>
  <div v-else>
    <button @click="deci">确认</button>
    <button @click="cancle">取消</button>
  </div>

</template>

<style scoped>
#table-father td {
  border: 1px solid black;
}

table {
  width: 900px;
  border-collapse: collapse;
  border: 1px solid black;
  text-align: center;
  line-height: 50px;
}

td:nth-child(2) {
  width: 300px;
}
div{
  position: relative;
  top: 400px;
  right: 450px;
}
#table-father tr:nth-child(1) {
  font-size: 20px;
  font-weight: 900;
}


.NoDisplay {
  cursor: not-allowed;
  pointer-events: none;
}

tr:hover {
  background-color: #999;
}
</style>
