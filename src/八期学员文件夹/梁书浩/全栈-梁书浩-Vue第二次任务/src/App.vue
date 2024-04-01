<template>
  <div class="app">
    <book-information :books="books" @low="decrement" @add="increment" @dele="del"></book-information>
    <button v-if="!showInputs" @click="showInputFields">添加</button>
    <div v-if="showInputs">
      <input type="text" v-model="newBookName" placeholder="书名" id="name">
      <input type="number" v-model="newBookPrice" placeholder="价格" id="price">
      <button @click="addBook" id="btn1">确认</button>
      <button @click="cancelInput">取消</button>
    </div>
  </div>
</template>

<script>
import BookInformation from './components/book-information.vue'
export default {
  components: {
    BookInformation
  },
  data() {
    return {
      books: [
        {
          name: "Python",
          price: 10,
          count: 1
        },
        {
          name: "Java",
          price: 20,
          count: 1
        },
        {
          name: "js",
          price: 30,
          count: 1
        }
      ],
      newBookName: "",
      newBookPrice: 0,
      showInputs: false
    }
  },
  methods: {
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    del(index) {
      this.books.splice(index, 1)
    },
    showInputFields() {
      this.showInputs = true
    },
    addBook() {
      if (this.newBookName === '') {
        alert('请输入书名')
        return
      }
      if (+this.newBookPrice <= 0) {
        alert('请输入正确的价格')
        return
      }
      this.books.push({
        name: this.newBookName,
        price: this.newBookPrice,
        count: 1
      })
      this.newBookName = ""
      this.newBookPrice = 0
      this.showInputs = false
    },
    cancelInput() {
      this.newBookName = ""
      this.newBookPrice = 0
      this.showInputs = false
    }
  }
}
</script>

<style scoped>
  button {
    font-size: 25px;
  }
  input {
    font-size: 25px;
  }
</style>
