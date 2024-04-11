<template>
  <div>
    <h2 >总价￥{{ totalPrice }} &nbsp;&nbsp;当前选中书籍：{{ chooseBookName }}</h2>
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
          <bookInformation :bookList="bookList" @dec="decrement" @inc="increment" @remove="removeBook" @choose="choose">
          </bookInformation>
          <tr v-show="ifAppear" >
            <td>{{ bookList.length+1 }}</td>
            <td><input type="text" v-model="inputName"></td>
            <td><input type="number" v-model.number="inputPrice" style="width: 40px;"></td>
            <td><button @click="reduceNumber" :disabled="number<=0">-</button>&nbsp;{{ number }}&nbsp;<button @click="addNumber">+</button></td>
            <td><button>移除</button></td>
          </tr>
      </tbody>
    </table>
    <button v-if="ifChange" @click="save" style="margin-top: 15px;">添加</button>
    <div v-else style="margin-top: 15px;">
        <button @click=saveContent>确认</button>
        <button @click="disappear">取消</button>
    </div>
  </div>
</template>

<script>
import bookInformation from './components/bookInformation.vue'
export default {
  components: {
    bookInformation
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
      chooseBookName: "",
      inputName: "",
      inputPrice: 0,
      number: 0,
      ifChange: true,
      ifAppear:false
    }
  },
  methods: {
    decrement(index) {
      this.bookList[index].num--
    },
    increment(index) {
      this.bookList[index].num++
    },
    removeBook(index) {
      this.bookList.splice(index,1)
    },
    choose(index) {
      if(1)
      { this.chooseBookName = this.bookList[index].bookName }
      else{this.chooseBookName=""}
    },
    addNumber() {
      this.number++
    },
    reduceNumber() {
      this.number--
    },
    save() {
      this.ifChange = false
      this.ifAppear=true
    },
    disappear() {
      this.ifAppear = false
      this.ifChange=true
    },
    saveContent() {
      if (this.inputName === "") { alert("书名不能为空") }
      else if (this.inputPrice <= 0) { alert("价格必须为正数") }
      else {
        this.bookList.push({
          bookName: '《' + this.inputName + '》',
          price: this.inputPrice,
          num: this.number
        })
        this.inputName = ''
        this.inputPrice = 0
        this.number = 0
        this.ifAppear = false
        this.ifChange = true
      }
    }
  },
  computed: {
    totalPrice() {
      let totalPrice=0
      for (const item of this.bookList) {
        totalPrice+=item.num*item.price
      }
      return totalPrice
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}
th {
  border: 1.5px solid black ;
  padding: 8px 30px;
  height: 25px;
}
th {
  background-color: gainsboro;
}
td{
border: 1.5px solid black ;
padding: 8px 30px;
height: 25px;
text-align: center;
line-height: 25px;
}
</style>