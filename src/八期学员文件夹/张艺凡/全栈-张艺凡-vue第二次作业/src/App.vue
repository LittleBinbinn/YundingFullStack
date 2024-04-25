<!-- App.vue -->
<template>
  <div id="app">
    <div>总价: ¥ {{ totolPrice }}, 当前选中的书籍: {{ highlightedIndex === -1 ? '' : books[highlightedIndex].name }}</div>
    <BookTable :books="books" @decreaseQuantity="decreaseQuantity" @increaseQuantity="increaseQuantity" @removeBook="removeBook" :addIndex="addIndex" @updateBookName="updateBookName" @updateBookPrice="updateBookPrice" :highlightedIndex="highlightedIndex" @updateHighlighted="updateHighlighted" />
    <div v-if="isShowAddBtn"><button @click="addBookToList(index)">添加</button></div>
    <div v-if="!isShowAddBtn"><button @click="confirm(index)">确定</button><button @click="cancel(index)">取消</button></div>
  </div>
</template>

<script>
import BookTable from './components/BookTable.vue'

export default {
  name: 'App',
  components: {
    BookTable
  },
  data() {
    return {
      books: [
        { id: 1, name: 'JavaScript高级程序设计', price: 126, quantity: 4, isAdd: false },
        { id: 2, name: '你不知道的 JS（上卷）', price: 78, quantity: 1, isAdd: false },
        { id: 3, name: '你不知道的 JS（中卷）', price: 76, quantity: 1, isAdd: false },
        { id: 4, name: '你不知道的 JS（下卷）', price: 64, quantity: 1, isAdd: false },
      ],
      addIndex: 0,
      isShowAddBtn: true,
      highlightedIndex: -1
    }
  },
  computed: {
    totolPrice() {
      return this.books.reduce((acc, book) => acc + Number(book.price) * book.quantity, 0);
    }
  },
  methods: {
    decreaseQuantity(index) {
      if (this.books[index].quantity > 0) {
        this.books[index].quantity--;
      }
    },
    increaseQuantity(index) {
      this.books[index].quantity++;
    },
    removeBook(index) {
      if (this.highlightedIndex === index) {
        this.highlightedIndex = -1;
      }
      this.books.splice(index, 1);
    },
    addBookToList() {
      this.isShowAddBtn = false;
      this.addIndex = this.books.length;
      this.books.push({
        id: this.books.length + 1, name: '', price: '0', quantity: 0, isAdd: true
      });
    },
    confirm() {
      if (!this.books[this.addIndex].name || !this.books[this.addIndex].price) {
        alert('请填写书名或价格');
        return;
      }
      this.books[this.addIndex].isAdd = false;
      this.isShowAddBtn = true;
    },
    cancel() {
      this.books.splice(this.addIndex, 1);
      this.isShowAddBtn = true;
    },
    updateBookName(value) {
      console.log('updateBookName', value);
      this.books[this.addIndex].name = value;
    },
    updateBookPrice(value) {
      this.books[this.addIndex].price = value;
    },
    updateHighlighted(index) {
      this.highlightedIndex = index;
    }
  }
}
</script>
