<template>
  <div>
    <h1>总价：{{ formatPrice(totalPrice) }}当前选中书籍：{{ selectedBookName }}</h1>
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
      <BookItem v-for="(item, index) in books" :key="item.id" :item="item" :index="index" @select-book="selectBook(index)" @remove-book="removeBook(index)" @increment="increment(index)" @decrement="decrement(index)" :selected="index === currentIndex" />
      <tr v-if="addingBook">
        <td>{{ books.length + 1 }}</td>
        <td><input v-model="newBookData.name" placeholder="书名" /></td>
        <td><input type="number" v-model.number="newBookData.price" placeholder="价格" /></td>
        <td><input type="number" v-model.number="newBookData.count" placeholder="购买数量" /></td>
        <td>
          <button @click="saveNewBook">保存</button>
          <button @click="cancelNewBook">取消</button>
        </td>
      </tr>
      </tbody>
    </table>
    <button @click="addNewBookRow">添加</button>
  </div>
</template>

<script>
import BookItem from './components/BookItem.vue';

export default {
  components: {
    BookItem
  },
  data() {
    return {
      books: [
        { id: 1, name: 'nihap', price: 90.00, count: 1 },
        { id: 2, name: 'nihaiu', price: 65.00, count: 1 }
      ],
      currentIndex: -1,
      selectedBookName: '',
      addingBook: false,
      newBookData: { name: '', price: 0, count: 1 }
    };
  },
  computed: {
    totalPrice() {
      return this.books.reduce((total, book) => total + (book.count * book.price), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return `￥${price.toFixed(2)}`;
    },
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeBook(index) {
      this.books.splice(index, 1);
      this.currentIndex = -1;
    },
    selectBook(index) {
      this.currentIndex = index;
      this.selectedBookName = this.books[index].name;
    },
    addNewBookRow() {
      this.addingBook = true;
      this.newBookData = { name: '', price: 0, count: 1 };
    },
    cancelNewBook() {
      this.addingBook = false;
    },
    saveNewBook() {
      if (this.newBookData.name && this.newBookData.price > 0) {
        this.books.push({
          id: this.books.length + 1,
          name: this.newBookData.name,
          price: this.newBookData.price,
          count: this.newBookData.count
        });
        this.addingBook = false;
        this.newBookData = { name: '', price: 0, count: 1 };
      } else {
        alert('Please enter book name and price.');
      }
    }
  }
};
</script>

<style>
  table{
    border-collapse: collapse;
  }

  thead{
    background-color: #f5f5f5;
  }
  th, td{
    border: 1px solid #aaa;
    padding: 8px 16px;
  }
  .active{
    background-color: skyblue;
  }
</style>
