<template>
  <p>总价：￥{{ totalPrice }} 当前选中书籍：{{ currentBook }}</p>
  <booksTable change="true" @add="addPrice" @sub="addPrice" @changeColor="changeColor"></booksTable>
</template>
<script>
import booksTable from '../src/components/books.vue'
export default {
  components: {
    booksTable
  },
  data() {
    return {
      books: [],
      currentBook: ""
    }
  },
  methods: {
    addPrice(book) {
      this.books = book
    },
    changeColor( name ) {
      this.currentBook=name
    }
  },
  
  computed: {
    totalPrice() {
      let price = 0;
      for (const item of this.books) {
        price += item.price * item.count;
      }
      return price
    },
    
  }
}
</script>

<style scoped>
</style>
