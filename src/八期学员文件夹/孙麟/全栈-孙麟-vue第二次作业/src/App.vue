<template>
  <div>
    <h1>总价:&nbsp;{{ "￥" + price }}&nbsp;&nbsp;当前选中书籍:{{ bookname }}</h1>
  </div>
  <book :books :shownews @choose="show" @del="del" @add="add" @reduce="reduce"></book>
</template>
<script>
import book from "./components/book.vue"

export default {
  components: {
    book
  },
  data() {
    return {
      bookname: "未选中书籍",
      books: [
        {
          name: "你所不知道的js(上卷)",
          value: 62,
          a: 0
        }, {
          name: "你所不知道的js(中卷)",
          value: 70,
          a: 0
        }, {
          name: "你所不知道的js(下卷)",
          value: 75,
          a: 0
        }]
    }
  },
  methods: {
    show(index) {
      this.bookname = this.books[index].name
    },
    del(index) {
      this.bookname = this.books[index].name + "被移除"
      this.books.splice(index, 1)
    },
    add(index) {
      this.books[index].a++
    },
    reduce(index) {
      this.books[index].a--
    }
  },
  computed: {
    price() {
      let cnt = 0
      for (const item of this.books) {
        cnt += item.value * item.a
      }
      return cnt
    }
  }
}
</script>
