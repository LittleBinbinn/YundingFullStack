// App.vue
<template>
  <div>
    <h2 class="selectedh2">选中的书籍：{{ selectedBookName }}</h2>
    <table>
    <tr>
      <th>序号</th>
      <th>书名</th>
      <th>出版日期</th>
      <th>价格</th>
      <th>购买数量</th>
      <th>操作</th>
    </tr>
    <tbody>
      <Book v-for="(book, index) in books" :key="book.id" :book="book" :index="index" @book-selected="handleBookSelected" @book-deleted="handleBookDeleted" />
    </tbody>

    <tr v-if="showAdd">
      <td>{{ books.length+1 }}</td>
      <td><input v-model="newBook.name" placeholder="书名" type="text"></td>
      <td><input v-model="newBook.date" placeholder="出版日期" type="text"></td>
      <td><input v-model="newBook.price" placeholder="价格" type="text"></td>
      <td>
        <button @click="increment" v-bind:disabled="newBookcount <=1">-</button>
        {{ newBookcount }}
        <button @click="decrement">+</button>
      </td>
      <td><button @click="addBook">确定</button></td>
    </tr>

    <h2>总价: ￥{{ totalPrice }}</h2>
    <button @click="showAdd = true">添加</button>
    <button @click="showAdd = false">取消</button>
  </table>
  </div>
  
</template>

<script>
import Book from "./Book.vue";
export default {
  components: {
    Book
  },
  data() {
    return {
      newBookcount: 1,
      showAdd: false,
      s: false,
      selectedBookName: "",
      books:[
        {
        id: 1,
        name: "算法导论",
        date:"2006-9",
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: "linux编程艺术",
        date:"2006-2",
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: "代码大全",
        date:"2006-3",
        price: 128.00,
        count: 1
      }
      ],
       newBook: {
        name: "",
        date: "",
        price: null,
       }
    }
  },
  computed: {
    totalPrice() {
      let price = 0
      for(const item of this.books) {
        price += item.price * item.count 
      }
      return price
    }
  },
  methods: {
    decrement() {
        this.newBookcount++
    },
    increment() {
        this.newBookcount--
    },
    handleBookSelected(bookId, index) {
      console.log("Selected book:", bookId, index);
      this.selectedBookName = this.books[index].name;

      this.books.forEach((book) => {
        book.s = false;
      });

      this.books[index].s = true;
    },
    handleBookDeleted(bookIndex) {
      console.log("Deleted book at index:", bookIndex);
      this.books.splice(bookIndex, 1);
    },
    addBook(){
      if(this.newBook.name == ""){
        alert("书名不可为空!")
        return null
      }else if(this.newBook.date == ""){
        alert("日期不可为空!")
        return null
      }else if(this.newBook.price == null){
        alert("价格不可为空!")
        return null
      }
      this.books.push({
        id: this.books.length + 1,
        name: this.newBook.name,
        date: this.newBook.date,
        price: this.newBook.price,
        count: this.newBookcount
      });
      this.newBook = {
        name: "",
        date: "",
        price: 0,
      };
      this.newBookcount = 1
      this.showAdd = false;
    }
  }
}
</script>

<style scoped>
    table {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    border-collapse: collapse;
    padding: 8px 16px;
  }
  thead {
    /* background-color: #f5f5f5; */
  }
  th {
    height: 25px;
    width: 100px;
    border: 1px solid #aaa;
    text-align: center;
  }
  .selected {
        background-color: orange;
    }
  .block {
    display: block;
  }
  .selectedh2 {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  input {
    height: 15px;
    width: 70px;
  }
  td {
        height: 25px;
        width: 100px;
        border: 1px solid #aaa;
        text-align: center;
    }
</style>    